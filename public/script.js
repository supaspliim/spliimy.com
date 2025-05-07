async function loadArtist(artistName) {
  try {
    const res = await fetch(`/artists/${artistName}/info.json`);
    const data = await res.json();

    // Update YouTube embed
    document.getElementById('youtube-frame').src = data.youtube + '?autoplay=1&mute=1';

    // Update Instagram link
    document.getElementById('instagram-link').href = data.instagram;
    document.getElementById('instagram-link').innerText = `View ${data.name}'s Instagram`;
  } catch (err) {
    console.error('Failed to load artist:', err);
  }
}
