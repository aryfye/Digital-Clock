// Function to update the clock
function updateClock() {
    // Get the current date and time
    const now = new Date();

    // Get the current hour, and determine AM/PM
    let hours = now.getHours();
    const midday = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format and pad with zero if needed
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, '0');

    // Get the current minutes and seconds, and pad with zeros if needed
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Create the time string
    const timeString = `${hours}:${minutes}:${seconds} ${midday}`;

    // Update the clock element with the new time
    document.getElementById("clock").textContent = timeString;
}

// Call the updateClock function once to set the initial time
updateClock();

// Set an interval to update the clock every second (1000 milliseconds)
setInterval(updateClock, 1000);
