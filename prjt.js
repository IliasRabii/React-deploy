function upDate(previewPic) {
    // Get the large image element
    const largeImage = document.getElementById("image");

    // Update the background image of the large image
    largeImage.style.backgroundImage = `url(${previewPic.src})`;

    // Update the text of the large image
    largeImage.textContent = previewPic.alt;
}

function unDo() {
    // Get the large image element
    const largeImage = document.getElementById("image");

    // Reset the background image to the original
    largeImage.style.backgroundImage = "";

    // Reset the text to the original
    largeImage.textContent = "Hover over an image below to display here.";
}

