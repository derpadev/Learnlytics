import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { supabase } from "../../supabaseClient";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const StudentGrades = () => {
  const [grades, setGrades] = useState([]);
  const [newAssignment, setNewAssignment] = useState("");
  const [newGrade, setNewGrade] = useState("");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        setUserId(session.user.id);
      } else {
        console.log("No user logged in");
      }
    };

    fetchUser();
  }, []);

   useEffect(() => {
    if (!userId) return;
    const fetchGrades = async () => {
      try {
        const {data, error} = await supabase.from("grades").select("*").eq("user_id", userId)

        if (error) throw error;
        setGrades(data);

      } catch (err) {
        console.error("Error fetching grades:", err);
      }
    };
    fetchGrades();
  }, [userId]);


  const addGrade = async () => {
  if (!newAssignment || !newGrade) return;

  if (!userId) {
    console.error("User not logged in yet");
    return;
  }

  try {
    const { data, error } = await supabase.from("grades").insert([
      {
        user_id: userId,
        assignment_name: newAssignment,
        grade: Number(newGrade),
      },
    ]);

    if (error) throw error;
    if (!data || data.length === 0) {
      console.error("No data returned from Supabase insert");
      return;
    }

    setGrades([...grades, data[0]]);
    setNewAssignment("");
    setNewGrade("");
  } catch (err) {
    console.error("Error adding grade:", err.message);
  }
};

  const chartData = {
    labels: grades.map((g) => g.assignment_name), // x-axis
    datasets: [
      {
        label: "Grades",
        data: grades.map((g) => g.grade),
        borderColor: "blue",
        backgroundColor: "rgba(0, 123, 255, 0.2)",
        tension: 0.3,
      },
    ], // y-axis
  };
  return (
    <div className="">
      <h2>Student Grade Tracker</h2>
      <Line data={chartData} />
      <div className="mt-6">
        <input
          type="text"
          placeholder="Assignment Name"
          value={newAssignment}
          onChange={(e) => setNewAssignment(e.target.value)}
          className="bg-white border p-1"
        />
        <input
          type="number"
          placeholder="Grade"
          value={newGrade}
          onChange={(e) => setNewGrade(e.target.value)}
          className="bg-white border p-1"
        />
        <button
          onClick={addGrade}
          className="bg-green-500 border p-1 hover:scale-105 active:bg-green-300 scale-95"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default StudentGrades;
