function encryptMessage() {
  let messageToEncrypt = document.getElementById("enter-message-text").value;
  const forbiddenCharacters = /[^a-z\s]+/gm;
  let showMessage = document.getElementById("show-message-text");
  const encryptedMessage = [];

  if (forbiddenCharacters.test(messageToEncrypt)) {
    alert("Remove any non-valid characters");
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

  if (forbiddenCharacters.test(messageToDecrypt)) {
    alert("Remove any non-valid characters");
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

  if (mode == "encrypt") {
    encryptButton.innerHTML = "Decrypt";
    encryptButton.setAttribute("onclick", "decryptMessage()");
  } else {
    encryptButton.innerHTML = "Encrypt";
    encryptButton.setAttribute("onclick", "encryptMessage()");
  }

  return;
}

function copyMessage() {
  let messageElement = document.getElementById("show-message-text");

  messageElement.select();
  navigator.clipboard.writeText(messageElement.value);

  alert(`Copied text:\n${messageElement.value}`);
}
