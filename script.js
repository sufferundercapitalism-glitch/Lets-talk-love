let startDate = null;

function saveDate() {
  const input = document.getElementById("dateInput").value;

  if (!input) {
    alert("Please select the date 💗");
    return;
  }

  localStorage.setItem("loveStartDate", input);
  startDate = new Date(input);
  document.getElementById("timer").classList.remove("hidden");
  updateTimer();
}

function updateTimer() {
  if (!startDate) return;

  const now = new Date();
  let diff = now - startDate;

  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  document.getElementById("timer").innerHTML =
    `${days} days · ${hours} hours · ${minutes} minutes · ${seconds} seconds`;
}

// Load saved date
const savedDate = localStorage.getItem("loveStartDate");
if (savedDate) {
  startDate = new Date(savedDate);
  document.getElementById("dateInput").value = savedDate;
  document.getElementById("timer").classList.remove("hidden");
  updateTimer();
}

setInterval(updateTimer, 1000);
