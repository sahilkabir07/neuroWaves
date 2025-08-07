// routes/driveRoutes.js
import express from "express";
import fetch from "node-fetch";

const router = express.Router();

// ✅ Read env vars directly (dotenv already loaded in server.js)
const API_KEY = process.env.API_KEY;
const folderMap = {
  "11th": { Biology: process.env.FOLDER_11_BIO },
  "12th": { Biology: process.env.FOLDER_12_BIO },
};

// Debugging: show if vars are present
console.log("Environment variables in driveRoutes:");
console.log("API_KEY:", API_KEY ? "✓ Present" : "✗ Missing");
console.log(
  "FOLDER_11_BIO:",
  process.env.FOLDER_11_BIO ? "✓ Present" : "✗ Missing"
);
console.log(
  "FOLDER_12_BIO:",
  process.env.FOLDER_12_BIO ? "✓ Present" : "✗ Missing"
);

router.get("/:className/:subject", async (req, res) => {
  const { className, subject } = req.params;

  const FOLDER_ID = folderMap[className]?.[subject];
  console.log(`Request: ${className}/${subject} → Folder ID: ${FOLDER_ID}`);

  if (!FOLDER_ID) {
    return res
      .status(400)
      .json({ error: "Notes not available for this subject yet" });
  }

  try {
    const url = `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents+and+mimeType='application/pdf'&key=${API_KEY}&fields=files(id,name,webViewLink,webContentLink)`;
    const response = await fetch(url);
    const data = await response.json();

    res.json(data.files || []);
  } catch (err) {
    console.error("Error fetching notes:", err);
    res.status(500).json({ error: "Error fetching notes" });
  }
});

export default router;
