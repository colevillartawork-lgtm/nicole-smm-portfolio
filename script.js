const brewedBlissVideo = document.getElementById("brewedBlissVideo");
const watchProjectButton = document.getElementById("watchProjectButton");

if (brewedBlissVideo && watchProjectButton) {
    watchProjectButton.addEventListener("click", () => {
        brewedBlissVideo.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        brewedBlissVideo.play();
    });
}