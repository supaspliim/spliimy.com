async function loadArtists() {
  const res = await fetch("/api/artists");
  const artists = await res.json();
  const artist = artists[Math.floor(Math.random() * artists.length)];

  const audio = document.getElementById("audio");
  const video = document.getElementById("music-video");
  const img = document.getElementById("insta-img");
  const artistName = document.getElementById("artist-name");

  artistName.textContent = `Now Playing: ${artist.name}`;
  audio.src = `${artist.folder}/${artist.song}`;
  video.src = `${artist.folder}/${artist.video}`;

  let current = 0;
  function cycleInstagram() {
    current = (current + 1) % artist.images.length;
    img.src = `${artist.folder}/${artist.images[current]}`;
  }

  img.src = `${artist.folder}/${artist.images[0]}`;
  setInterval(cycleInstagram, 5000);
}

loadArtists();
