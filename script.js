// const slider = document.querySelector(".slider");

// function activate(e) {
//   const items = document.querySelectorAll(".item");
//   e.target.matches(".next") && slider.append(items[0]);
//   e.target.matches(".prev") && slider.prepend(items[items.length - 1]);
// }

// document.addEventListener("click", activate, false);
function setBackground() {
  const currentHour = new Date().getHours(); // Get current hour
  let backgroundImage;

  // Determine background image based on time
  if (currentHour >= 6 && currentHour < 12) {
    backgroundImage = "images/brightday_1.png"; // Morning image
  } else if (currentHour >= 12 && currentHour < 18) {
    backgroundImage = "images/brightday_1.png"; // Afternoon image
  } else if (currentHour >= 18 && currentHour < 21) {
    backgroundImage = "images/evening.jpg"; // Evening image
  } else {
    backgroundImage = "images/nightbright.jpg"; // Night image
  }

  // Set the background image for the body

  document.getElementsByClassName("star-image")[0].src = backgroundImage;
}
setBackground();

const timeDisplay = document.getElementById("displayTime");

const startTime = new Date(2024, 0, 25, 1, 9, 0);

function formatTime(totalSeconds) {
  const days = Math.floor(totalSeconds / 86400); // 86400 seconds in a day
  const hours = Math.floor((totalSeconds % 86400) / 3600); // Remainder hours after days
  const minutes = Math.floor((totalSeconds % 3600) / 60); // Remainder minutes after hours
  const seconds = Math.floor(totalSeconds % 60); // Remainder seconds after minutes

  return `${days}日 ${hours}時間 ${minutes}分 ${seconds}秒`; // Format for display
}
function updateElapsedTime() {
  const now = new Date(); // Current time
  const elapsedSeconds = Math.floor((now - startTime) / 1000); // Difference in seconds
  timeDisplay.textContent = formatTime(elapsedSeconds); // Display formatted time
}
setInterval(updateElapsedTime, 1000);
updateElapsedTime();
