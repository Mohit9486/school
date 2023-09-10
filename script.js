// JavaScript to toggle visibility of additional video cards

// Get the "Show More" button and video container
const showMoreButton = document.getElementById("show-more");
const videoContainer = document.querySelector(".video-container");

// Array of additional video URLs
const additionalVideos = [
    "https://www.youtube.com/embed/VIDEO_ID_3",
    "https://www.youtube.com/embed/VIDEO_ID_4",
    "https://www.youtube.com/embed/VIDEO_ID_5",
    // Add more video URLs as needed
];

// Function to add additional video cards to the container
function addMoreVideos() {
    additionalVideos.forEach((videoUrl) => {
        const videoCard = document.createElement("div");
        videoCard.classList.add("video-card");
        videoCard.innerHTML = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
        videoContainer.appendChild(videoCard);
    });

    // Hide the "Show More" button after adding videos
    showMoreButton.style.display = "none";
}

// Add a click event listener to the "Show More" button
showMoreButton.addEventListener("click", addMoreVideos);
