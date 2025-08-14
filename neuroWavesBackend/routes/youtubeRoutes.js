// routes/youtubeRoutes.js
import express from "express";
import fetch from "node-fetch";

const router = express.Router();

// ✅ Env vars will be available since server.js loads dotenv first
const YT_API_KEY = process.env.YT_API_KEY;

// Playlist mapping for all classes & subjects
const playlistMap = {
  "11th": {
    Biology: process.env.YT_PLAYLIST_11_BIO,
    Physics: process.env.YT_PLAYLIST_11_PHY,
    Chemistry: process.env.YT_PLAYLIST_11_CHEM,
  },
  "12th": {
    Biology: process.env.YT_PLAYLIST_12_BIO,
    Physics: process.env.YT_PLAYLIST_12_PHY,
    Chemistry: process.env.YT_PLAYLIST_12_CHEM,
  },
};

// Debugging: confirm env vars are loaded
console.log("Environment variables in youtubeRoutes:");
console.log("YT_API_KEY:", YT_API_KEY ? "✓ Present" : "✗ Missing");
Object.entries(playlistMap).forEach(([cls, subjects]) => {
  Object.entries(subjects).forEach(([subj, id]) => {
    console.log(`${cls} ${subj}:`, id ? "✓ Present" : "✗ Missing");
  });
});

router.get("/:className/:subject", async (req, res) => {
  const { className, subject } = req.params;

  const playlistId = playlistMap[className]?.[subject];
  console.log(`Request: ${className}/${subject} → Playlist ID: ${playlistId}`);

  if (!playlistId) {
    return res.status(400).json({ error: "Playlist not available" });
  }

  try {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${YT_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    // Check for API errors
    if (data.error) {
      console.error("YouTube API error:", data.error);
      return res
        .status(500)
        .json({ error: "YouTube API error", details: data.error });
    }

    const videos = (data.items || []).map((item) => ({
      title: item.snippet.title,
      videoId: item.snippet.resourceId.videoId,
      thumbnail: item.snippet.thumbnails.medium.url,
    }));

    res.json(videos);
  } catch (err) {
    console.error("Error fetching YouTube videos:", err);
    res.status(500).json({ error: "Error fetching YouTube videos" });
  }
});

export default router;
