function encryptMessage() {
  let messageToEncrypt = document.getElementById("enter-message-text").value;
  let forbiddenCharacters = /[áéíóú\dA-Z]/gm;
  //   let validCharacters = /[a-z]+/gm;
  //   let charactersToEncrypt = /[aeiou]/gm;
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

  console.log(encryptedMessage.join(''));

}
