// routes/youtubeRoutes.js
import express from "express";
import fetch from "node-fetch";

const router = express.Router();

// ✅ Env vars will be available since server.js loads dotenv first
const YT_API_KEY = process.env.YT_API_KEY;
const playlistMap = {
  "11th": { Biology: process.env.YT_PLAYLIST_11_BIO },
  "12th": { Biology: process.env.YT_PLAYLIST_12_BIO },
};

// Debugging: confirm env vars are loaded
console.log("Environment variables in youtubeRoutes:");
console.log("YT_API_KEY:", YT_API_KEY ? "✓ Present" : "✗ Missing");
console.log(
  "YT_PLAYLIST_11_BIO:",
  process.env.YT_PLAYLIST_11_BIO ? "✓ Present" : "✗ Missing"
);
console.log(
  "YT_PLAYLIST_12_BIO:",
  process.env.YT_PLAYLIST_12_BIO ? "✓ Present" : "✗ Missing"
);

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
