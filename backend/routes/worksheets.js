// backend/routes/worksheets.js
import express from "express";
const router = express.Router();

const worksheets = [
  { id: 1, title: "Derivates practice", topic: "Calculus" },
  { id: 2, title: "Integrals practice", topic: "Calculus" },
];

router.get("/", (req, res) => res.json(worksheets));

export default router;
