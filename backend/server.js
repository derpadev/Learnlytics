import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import gradesRoute from './routes/grades.js';

const app = express();
app.use(cors());
app.use(express.json());

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

console.log(supabaseUrl);
console.log(supabaseKey);

// Basic test route
app.get("/", (req, res) => {
  res.send("Backend is ONLINE 🚀");
});

// Mount grades
app.use("/api/grades", gradesRoute);

app.listen(5000, () => console.log("✅ Backend running on port 5000"));


