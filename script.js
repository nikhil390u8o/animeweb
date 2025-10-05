// Modal & Episodes JS
const videoModal = document.getElementById("videoModal");
const previewPlayer = document.getElementById("previewPlayer");
const episodeList = document.getElementById("episodeList");
const closeModal = document.getElementById("closeModal");

closeModal.addEventListener("click", () => {
  videoModal.style.display = "none";
  previewPlayer.pause();
  previewPlayer.src = "";
});

function openVideoModal(videoSrc, title, episodes) {
  videoModal.style.display = "flex";
  previewPlayer.src = videoSrc;
  previewPlayer.play();

  episodeList.innerHTML = "";
  episodes.forEach((ep, index) => {
    const btn = document.createElement("button");
    btn.textContent = ep.title || `Episode ${index+1}`;
    btn.addEventListener("click", () => {
      previewPlayer.src = ep.src;
      previewPlayer.play();
    });
    episodeList.appendChild(btn);
  });
}
