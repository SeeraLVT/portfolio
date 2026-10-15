(function () {
  const video = document.getElementById('hero-video');
  const playButton = document.getElementById('video-play');
  const errorMessage = document.getElementById('video-error');
  if (!video || !playButton) return;

  const showPlayButton = () => { playButton.hidden = false; };
  video.muted = true;
  video.defaultMuted = true;
  const playRequest = video.play();
  if (playRequest && typeof playRequest.catch === 'function') {
    playRequest.then(() => { playButton.hidden = true; }).catch(showPlayButton);
  }
  video.addEventListener('playing', () => { playButton.hidden = true; errorMessage.hidden = true; });
  video.addEventListener('error', () => { playButton.hidden = false; errorMessage.hidden = false; });
  playButton.addEventListener('click', () => {
    video.muted = true;
    video.play().then(() => { playButton.hidden = true; errorMessage.hidden = true; }).catch(() => { errorMessage.hidden = false; });
  });
})();
