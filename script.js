// Display India Time (IST)
function updateTime() {
    let options = { timeZone: "Asia/Kolkata", hour12: true };
    let indiaTime = new Date().toLocaleString("en-IN", options);
    document.getElementById("currentTime").textContent = "India Time: " + indiaTime;
}

setInterval(updateTime, 1000);  // Update time every second
updateTime();  // Initial call to set time immediately

// Countdown functionality
let countdownTime = 10;
let countdownInterval;

function startCountdown() {
    countdownInterval = setInterval(() => {
        countdownTime--;
        document.getElementById("countdown").textContent = "Countdown: " + countdownTime;
        if (countdownTime <= 0) {
            clearInterval(countdownInterval);  // Stop countdown when it reaches zero
            alert("Countdown Finished!");
        }
    }, 1000);
}

document.getElementById("stopButton").addEventListener("click", function() {
    clearInterval(countdownInterval);  // Stop the countdown when clicked
    alert("Countdown Stopped!");
});

startCountdown();  // Start countdown immediately
