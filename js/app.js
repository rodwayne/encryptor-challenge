function encryptMessage() {
  let messageToEncrypt = document.getElementById("enter-message-text").value;
  const forbiddenCharacters = /[^a-z\s]+/gm;
  let showMessage = document.getElementById("show-message-text");
  const encryptedMessage = [];

  removeNonValidAlert();

  if (forbiddenCharacters.test(messageToEncrypt)) {
    addNonValidAlert();
  } else {
    for (let i = 0; i < messageToEncrypt.length; i++) {
      switch (messageToEncrypt[i]) {
        case "a":
          encryptedMessage.push("ai");
          break;
        case "e":
          encryptedMessage.push("enter");
          break;
        case "i":
          encryptedMessage.push("imes");
          break;
        case "o":
          encryptedMessage.push("ober");
          break;
        case "u":
          encryptedMessage.push("ufat");
          break;
        default:
          encryptedMessage.push(messageToEncrypt[i]);
      }
    }
  }

  showMessage.innerHTML = encryptedMessage.join("");
  return;
}

function decryptMessage() {
  let messageToDecrypt = document.getElementById("enter-message-text").value;
  const forbiddenCharacters = /[^a-z\s]+/gm;
  const expressionsToDecrypt =
    /ai|enter|imes|ober|ufat|[bcdfghjklmnpqrstvwxyz\s]/gm;
  const words = messageToDecrypt.match(expressionsToDecrypt);
  let showMessage = document.getElementById("show-message-text");
  const decryptedMessage = [];

  removeNonValidAlert();

  if (forbiddenCharacters.test(messageToDecrypt)) {
    addNonValidAlert();
  } else {
    for (let i = 0; i < words.length; i++) {
      switch (words[i]) {
        case "ai":
          decryptedMessage.push("a");
          break;
        case "enter":
          decryptedMessage.push("e");
          break;
        case "imes":
          decryptedMessage.push("i");
          break;
        case "ober":
          decryptedMessage.push("o");
          break;
        case "ufat":
          decryptedMessage.push("u");
          break;
        default:
          decryptedMessage.push(words[i]);
          break;
      }
    }
  }

  showMessage.innerHTML = decryptedMessage.join("");
}

function changeMode() {
  let encryptButton = document.querySelector(".action-button");
  let mode = encryptButton.innerHTML.toLowerCase();
  let enterMessage = document.getElementById("enter-message-text");
  let enterMessageChange = document.querySelector(".enter-message-text");
  let showMessageChange = document.querySelector(".show-message-text");

  if (mode == "encrypt") {
    encryptButton.innerHTML = "Decrypt";
    encryptButton.setAttribute("onclick", "decryptMessage()");
    enterMessageChange.classList.add("enter-message-change");
    showMessageChange.classList.add("show-message-change");
  } else {
    encryptButton.innerHTML = "Encrypt";
    encryptButton.setAttribute("onclick", "encryptMessage()");
    // enterMessage.removeAttribute("style");
    enterMessageChange.classList.remove("enter-message-change");
    showMessageChange.classList.remove("show-message-change");
  }

  return;
}

function copyMessage() {
  let messageElement = document.getElementById("show-message-text");
  let copiedMessage = document.querySelector(".copied-message-text");

  messageElement.select();
  navigator.clipboard.writeText(messageElement.value);

  copiedMessage.classList.contains("fade-animation")
    ? copiedMessage.classList.remove("fade-animation")
    : copiedMessage.classList.add("fade-animation");

  setTimeout(() => {
    copiedMessage.classList.remove("fade-animation");
  }, 3000);
}

function addNonValidAlert() {
  const adviceBox = document.querySelector(".advice-box");
  adviceBox.classList.add("shake-animation");
}

function removeNonValidAlert() {
  const adviceBox = document.querySelector(".advice-box");
  adviceBox.classList.remove("shake-animation");
  void adviceBox.offsetWidth;
}

function clearContent() {
  let enterMessage = document.getElementById("enter-message-text");
  let showMessage = document.getElementById("show-message-text");

  enterMessage.value = "";
  showMessage.innerHTML = "";
}
