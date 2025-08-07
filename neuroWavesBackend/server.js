// server.js
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

// ⏳ Import routes *after* dotenv has loaded
const { default: driveRoutes } = await import("./routes/driveRoutes.js");
const { default: youtubeRoutes } = await import("./routes/youtubeRoutes.js");

app.use("/api/notes", driveRoutes);
app.use("/api/youtube", youtubeRoutes);

app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});
