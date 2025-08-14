import express from "express";
import fetch from "node-fetch";

const router = express.Router();

const API_KEY = process.env.API_KEY;

const folderMap = {
  "11th": {
    Biology: process.env.FOLDER_11_BIO,
    Physics: process.env.FOLDER_11_PHY,
    Chemistry: process.env.FOLDER_11_CHEM,
  },
  "12th": {
    Biology: process.env.FOLDER_12_BIO,
    Physics: process.env.FOLDER_12_PHY,
    Chemistry: process.env.FOLDER_12_CHEM,
  },
};

// Helper to fetch files/folders from Drive
async function fetchDriveItems(folderId, mimeType = null) {
  let query = `'${folderId}' in parents`;
  if (mimeType) query += ` and mimeType='${mimeType}'`;
  const url = `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(
    query
  )}&key=${API_KEY}&fields=files(id,name,webViewLink,webContentLink,mimeType)`;
  const res = await fetch(url);
  const data = await res.json();
  return data.files || [];
}

router.get("/:className/:subject", async (req, res) => {
  const { className, subject } = req.params;
  const FOLDER_ID = folderMap[className]?.[subject];

  if (!FOLDER_ID) {
    return res
      .status(400)
      .json({ error: "Notes not available for this subject yet" });
  }

  try {
    // 1️⃣ Get subfolders (chapters)
    const chapters = await fetchDriveItems(
      FOLDER_ID,
      "application/vnd.google-apps.folder"
    );

    // 2️⃣ For each chapter, fetch PDFs inside
    const chapterData = await Promise.all(
      chapters.map(async (chapter) => {
        const pdfs = await fetchDriveItems(chapter.id, "application/pdf");
        return {
          chapter: chapter.name,
          files: pdfs.map((file) => ({
            name: file.name,
            webViewLink: file.webViewLink,
            webContentLink: file.webContentLink,
          })),
        };
      })
    );

    res.json(chapterData);
  } catch (err) {
    console.error("Error fetching chaptered notes:", err);
    res.status(500).json({ error: "Error fetching notes" });
  }
});

export default router;
