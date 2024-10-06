//your JS code here. If required.
// Function to create a delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to handle form submission
async function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const text = document.getElementById("text").value; // Get the user input for text
    const delayValue = parseInt(document.getElementById("delay").value, 10); // Get the user input for delay

    // Ensure the delay is a positive number
    if (isNaN(delayValue) || delayValue <= 0) {
        document.getElementById("output").innerText = "Please enter a valid delay time in milliseconds.";
        return;
    }

    // Introduce the delay using async/await
    await delay(delayValue);

    // Display the user-provided text in the output div
    document.getElementById("output").innerText = text;
}

// Attach event listener to the form
document.getElementById("message-form").addEventListener("submit", handleSubmit);
