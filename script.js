// const slider = document.querySelector(".slider");

// function activate(e) {
//   const items = document.querySelectorAll(".item");
//   e.target.matches(".next") && slider.append(items[0]);
//   e.target.matches(".prev") && slider.prepend(items[items.length - 1]);
// }

// document.addEventListener("click", activate, false);
function setBackground() {
  const today = new Date(); // Get the current date
  const currentHour = today.getHours(); // Get current hour

  // Determine which cycle day it is (0, 1, or 2)
  const cycleDay = today.getDate() % 3;

  let backgroundImage; // Initialize the background image variable

  // Determine background image based on cycle day and time
  switch (cycleDay) {
    case 0:
      // Cycle day 0
      if (currentHour >= 6 && currentHour < 12) {
        backgroundImage = "images/brightday_1.png"; // Morning image for cycle 0
      } else if (currentHour >= 12 && currentHour < 18) {
        backgroundImage = "images/afternoon_1.png"; // Afternoon image for cycle 0
      } else if (currentHour >= 18 && currentHour < 21) {
        backgroundImage = "images/evening_1.jpg"; // Evening image for cycle 0
      } else {
        backgroundImage = "images/night_1.png"; // Night image for cycle 0
      }
      break;

    case 1:
      // Cycle day 1
      if (currentHour >= 6 && currentHour < 12) {
        backgroundImage = "images/brightday_2.png"; // Morning image for cycle 1
      } else if (currentHour >= 12 && currentHour < 18) {
        backgroundImage = "images/afternoon_2.jpg"; // Afternoon image for cycle 1
      } else if (currentHour >= 18 && currentHour < 21) {
        backgroundImage = "images/evening_2.png"; // Evening image for cycle 1
      } else {
        backgroundImage = "images/night_2.jpg"; // Night image for cycle 1
      }
      break;

    case 2:
      // Cycle day 2
      if (currentHour >= 6 && currentHour < 12) {
        backgroundImage = "images/brightday_3.jpg"; // Morning image for cycle 2
      } else if (currentHour >= 12 && currentHour < 18) {
        backgroundImage = "images/afternoon_3.png"; // Afternoon image for cycle 2
      } else if (currentHour >= 18 && currentHour < 21) {
        backgroundImage = "images/evening_3.jpg"; // Evening image for cycle 2
      } else {
        backgroundImage = "images/night_3.png"; // Night image for cycle 2
      }
      break;

    default:
      console.error("Unexpected cycle day");
  }

  // Set the background image for the class 'star-image'
  document.getElementsByClassName("star-image")[0].src = backgroundImage;
}

// Call the setBackground function to set the appropriate background
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
