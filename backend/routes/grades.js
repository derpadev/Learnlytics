// handles /api/grades requests
import express from "express";
import { createClient } from "@supabase/supabase-js";
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

console.log("SUPABASE_URL:", process.env.SUPABASE_URL);
console.log("SUPABASE_KEY:", process.env.SUPABASE_ANON_KEY);

const supabase = createClient(supabaseUrl, supabaseKey);

router.get("/", async (req, res) => {
    const { user_id } = req.query;
    const {data, error} = await supabase.from("grades").select("*").eq("user_id", user_id);
    if (error) return res.status(500).json({error: error.message});

    res.json(data);
});

router.post("/", async (req, res) => {
    const {assignment_name, grade, user_id} = req.body;

    if (!assignment_name || typeof assignment_name !== "string")
        return res.status(400).json({error: "Assignment name is required"});
    if (grade === undefined || typeof grade !== "number")
        return res.status(400).json({error: "Grade must be a number"});

    const {data, error } = await supabase.from("grades").insert([{assignment_name, grade, user_id}]).select();
    if (error) return res.status(500).json({error: error.message});

    res.status(201).json(data[0]);
});

export default router;

