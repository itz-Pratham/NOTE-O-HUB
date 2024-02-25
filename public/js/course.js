document.addEventListener("DOMContentLoaded", function() {
    const videoList = document.getElementById("video-list");
    const videoPlayer = document.getElementById("video-player");
    const videoDescription = document.getElementById("video-description-text");
    const playPauseButton = document.getElementById("play-pause-btn");
    const seekBar = document.getElementById("seek-bar");
    const muteButton = document.getElementById("mute-btn");
    const volumeBar = document.getElementById("volume-bar");
    const fullscreenButton = document.getElementById("fullscreen-btn");

    videoList.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            const videoSource = event.target.getAttribute("data-video");
            videoPlayer.src = videoSource;
            videoPlayer.play();
            videoDescription.textContent = event.target.textContent;
        }
    });

    playPauseButton.addEventListener("click", function(event) {
        if (videoPlayer.paused || videoPlayer.ended) {
            videoPlayer.play();
            playPauseButton.innerHTML = "&#10074;&#10074;";
        } else {
            videoPlayer.pause();
            playPauseButton.innerHTML = "&#9658;";
        }
    });

    videoPlayer.addEventListener("timeupdate", function() {
        const currentTime = videoPlayer.currentTime;
        const duration = videoPlayer.duration;
        seekBar.value = (currentTime / duration) * 100;
    });

    seekBar.addEventListener("change", function() {
        const seekTo = videoPlayer.duration * (seekBar.value / 100);
        videoPlayer.currentTime = seekTo;
    });

    muteButton.addEventListener("click", function() {
        if (videoPlayer.muted) {
            videoPlayer.muted = false;
            volumeBar.value = 1;
        } else {
            videoPlayer.muted = true;
            volumeBar.value = 0;
        }
    });

    volumeBar.addEventListener("input", function() {
        videoPlayer.volume = volumeBar.value;
    });

    fullscreenButton.addEventListener("click", function() {
        if (videoPlayer.requestFullscreen) {
            videoPlayer.requestFullscreen();
        } else if (videoPlayer.mozRequestFullScreen) {
            videoPlayer.mozRequestFullScreen();
        } else if (videoPlayer.webkitRequestFullscreen) {
            videoPlayer.webkitRequestFullscreen();
        } else if (videoPlayer.msRequestFullscreen) {
            videoPlayer.msRequestFullscreen();
        }
    });
});
