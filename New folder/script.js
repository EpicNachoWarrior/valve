let songs = [];

function addNewSong() {
    const songName = document.getElementById('song-name').value;
    const songUrl = document.getElementById('song-url').value;

    if (songName && songUrl) {
        songs.push({ name: songName, url: songUrl });
        displaySongs();
    }
}

function displaySongs() {
    const playlistElement = document.querySelector('#playlist-1 ul');
    playlistElement.innerHTML = '';

    songs.forEach((song, index) => {
        const songItem = document.createElement('li');
        songItem.innerHTML = `<span>${song.name}</span> <button onclick="playSong(${index})">Play</button>`;
        playlistElement.appendChild(songItem);
    });
}

function playSong(index) {
    const song = songs[index];
    const audioPlayer = document.getElementById('audio-player');
    const playerFooter = document.getElementById('music-player');

    audioPlayer.src = song.url;
    audioPlayer.play();

    playerFooter.querySelector('p').textContent = `Playing: ${song.name}`;
}

function addSong(playlistId) {
    const songName = prompt('Enter song name:');
    const songUrl = prompt('Enter song URL (e.g., a YouTube embed link or mp3 file URL):');

    if (songName && songUrl) {
        songs.push({ name: songName, url: songUrl });
        displaySongs();
    }
}
