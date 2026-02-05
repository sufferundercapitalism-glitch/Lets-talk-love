// ⚠️ CHANGE THIS DATE TO THE DAY WE MET
const startDate = new Date("2023-06-01T00:00:00");

function updateTimer() {
  const now = new Date();
  let diff = now - startDate;

  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  document.getElementById("timer").innerHTML =
    `${days} days · ${hours} hours · ${minutes} minutes · ${seconds} seconds`;
}

setInterval(updateTimer, 1000);
updateTimer();

