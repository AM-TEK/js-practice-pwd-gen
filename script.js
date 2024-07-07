function getPasswordLength() {
  const passwordLength = document.getElementById("length").value;
  return Number(passwordLength);
}

function getPasswordProperties() {
  const ids = ["lowercase", "uppercase", "numbers", "special"];
  const properties = {};

  for (const id of ids) {
    const element = document.getElementById(id);
    properties[id] = element.checked;
  }
  return properties;
}

function getChars(lowercase = true) {
  const start = lowercase ? 97 : 65;
  const chars = [];

  for (let i = start; i < (start + 26); i++) {
    chars.push(String.fromCharCode(i));
  }
  return chars;
}

function getNumbers() {
  const numbers = [];

  for (let i = 0; i <= 9; i++) {
    numbers.push(i);
  }
  return numbers;
}

const lowercaseChars = getChars(true);
const uppercaseChars = getChars(false);
const numbers = getNumbers();
const special = ["!","@","#","$","%","^","&","*"];

function generatePassword() {
  const length = getPasswordLength();
  const properties = getPasswordProperties();

  const selectedChars = []
  if (properties.lowercase) selectedChars.push(...lowercaseChars);
  if (properties.uppercase) selectedChars.push(...uppercaseChars);
  if (properties.numbers)   selectedChars.push(...numbers);
  if (properties.special)   selectedChars.push(...special);
  if (selectedChars === 0) {
    return alert("Please select at least 1 property")
  }

  let password = []
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * selectedChars.length);
    const char = selectedChars[randomIndex];
    password.push(char);
  }
  const passwordString = password.join("");
  const passwordElement = document.getElementById("password");
  passwordElement.innerHTML = "<p>" + passwordString + "</p>";
}
