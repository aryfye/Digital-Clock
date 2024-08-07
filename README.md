# Digital Clock

## Description
A simple web application that displays the current time in a 12-hour format with AM/PM, updating every second.

## Features
- Displays the current time in a 12-hour format (HH:MM:SS AM/PM)
- Updates every second
- Styled with a background image, border, padding, and optional rounded corners and semi-transparent background

## Technologies Used
- HTML
- CSS
- JavaScript

## Usage
1. Open `clock.html` in your web browser.
2. The clock will automatically display the current time and update every second.

## How to Run
1. Clone the repository or download the project files.
2. Open `clock.html` in any web browser.
3. The clock will be displayed on the screen with the current time.

## JavaScript Explanation
The `clock.js` file contains one main function:

### updateClock
- **Purpose**: Updates the clock display every second.
- **Functionality**:
  - Gets the current date and time.
  - Converts the current hour to a 12-hour format and determines AM/PM.
  - Pads the hours, minutes, and seconds with leading zeros if needed.
  - Creates a formatted time string.
  - Updates the text content of the clock element on the page.

```javascript
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
```

<br>

![d_clock](https://github.com/user-attachments/assets/97b6086e-e5a7-42c8-87f8-e17d40b1a6ae)


