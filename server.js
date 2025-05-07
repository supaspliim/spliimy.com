const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;
const ARTISTS_DIR = path.join(__dirname, "public", "artists");

app.use(express.static("public"));

app.get("/api/artists", (req, res) => {
  const artistFolders = fs.readdirSync(ARTISTS_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  const artistData = artistFolders.map(folder => {
    const files = fs.readdirSync(path.join(ARTISTS_DIR, folder));
    const images = files.filter(f => f.match(/\.(jpg|jpeg|png)$/));
    const song = files.find(f => f.endsWith(".mp3")) || "";
    const video = files.find(f => f.endsWith(".mp4")) || "";

    return {
      name: folder,
      folder: `artists/${folder}`,
      images,
      song,
      video
    };
  });

  res.json(artistData);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
