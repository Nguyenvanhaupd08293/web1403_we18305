const video = document.getElementById('video');
const playPauseButton = document.getElementById('play-pause');
const stopButton = document.getElementById('stop');
const volumeSlider = document.getElementById('volume-slider');
const loopToggle = document.getElementById('loop-toggle');

playPauseButton.addEventListener('click', () => {
    if (video.paused || video.ended) {
        video.play();
        playPauseButton.textContent = 'Pause';
    } else {
        video.pause();
        playPauseButton.textContent = 'Play';
    }
});

stopButton.addEventListener('click', () => {
    video.currentTime = 0;
    video.pause();
    playPauseButton.textContent = 'Play';
});

volumeSlider.addEventListener('input', () => {
    video.volume = volumeSlider.value;
});

loopToggle.addEventListener('change', () => {
    video.loop = loopToggle.checked;
});