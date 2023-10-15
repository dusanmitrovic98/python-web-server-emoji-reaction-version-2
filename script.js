function showEmoji(emoji) {
  const emojiPopup = document.getElementById("emojiPopup");
  const emojiElement = document.createElement("div");
  emojiElement.className = "emoji";
  emojiElement.innerText = emoji;
  emojiPopup.appendChild(emojiElement);

  setTimeout(() => {
    emojiElement.remove();
  }, 3000); // Adjust the duration as needed (milliseconds)
}

let emojiPanelVisible = false;

function toggleEmojiPanel() {
  const emojiPanel = document.getElementById("emojiPanel");
  const emojiToggleButton = document.getElementById("emojiToggleButton");

  if (emojiPanelVisible) {
    emojiPanel.style.transform = "translateX(100%)";
    emojiToggleButton.style.transform = "rotate(0deg)";
  } else {
    emojiPanel.style.transform = "translateX(0)";
    emojiToggleButton.style.transform = "rotate(90deg)";
  }

  emojiPanelVisible = !emojiPanelVisible;
}
