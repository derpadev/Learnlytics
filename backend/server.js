import express from "express";
import cors from "cors";
import worksheetRoutes from "./routes/worksheets.js";

const app = express();
app.use(cors());
app.use(express.json());

// Basic test route
app.get("/", (req, res) => {
  res.send("Backend is ONLINE 🚀");
});

// Mount worksheets
app.use("/api/worksheets", worksheetRoutes);

app.listen(5000, () => console.log("✅ Backend running on port 5000"));
