// Download sample video: https://www.pexels.com/es-es/video/2869107/

const video = document.getElementById("video");

addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    console.log("PLAY");
    video.play();
  } else if (document.visibilityState === "hidden") {
    console.log("PAUSE");
    video.pause();
  }
});
