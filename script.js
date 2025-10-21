// Display current time in milliseconds
const timeElement = document.getElementById("time");

function updateTime() {
    const currentTime = Date.now();
    timeElement.textContent = `Timestamp (ms): ${currentTime}`;
}

// Initial call to show time immediately on load
updateTime();

// Update every second
setInterval(updateTime, 1000);

// // Handle avatar upload
// const avatarInput = document.getElementById("avatarUpload");
// const avatarImage = document.getElementById("avatarImage");

// avatarInput.addEventListener("change", (e) => {
//     const file = e.target.files[0];
//     if (file) {
//         const imageURL = URL.createObjectURL(file);
//         avatarImage.src = imageURL;
//     }
// });