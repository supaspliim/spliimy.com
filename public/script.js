async function loadArtist(artistName) {
  try {
    // Fetch the artist's info.json file
    const res = await fetch(`/artists/${artistName}/info.json`);
    const data = await res.json();

    // Set YouTube video embed
    const youtubeFrame = document.getElementById('youtube-frame');
    youtubeFrame.src = data.youtube + '?autoplay=1&mute=1';

    // Set Instagram post embed
    const instaFrame = document.getElementById('insta-frame');
    instaFrame.src = data.instagram_embed;

  } catch (err) {
    console.error('Failed to load artist data:', err);
  }
}
