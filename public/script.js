async function loadArtist(artistName) {
  try {
    const res = await fetch(`/artists/${artistName}/info.json`);
    const data = await res.json();

    // Set YouTube video
    document.getElementById('youtube-frame').src = data.youtube + '?autoplay=1&mute=1';

    // Set Instagram post
    document.getElementById('insta-frame').src = data.instagram_embed;

  } catch (err) {
    console.error('Failed to load artist:', err);
  }
}
