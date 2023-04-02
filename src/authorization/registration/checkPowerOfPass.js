export function checkPowerOfPass(password, progressBar, passwordPowerLabel) {
  const upperCase = upperCaseCheck(password);
  const digit = digitCheck(password);

  if (password.length >= 12 && upperCase === true && digit === true) {
    //strong
    passwordPowerLabel.style.visibility = "visible";
    progressBar.style.width = "100%";
    progressBar.innerText = "Bardzo silne hasło";
    progressBar.style.backgroundColor = "green";
  } else if (
    password.length > 7 &&
    password.length < 12 &&
    upperCase === true
  ) {
    //medium
    passwordPowerLabel.style.visibility = "visible";
    progressBar.style.width = "65%";
    progressBar.innerText = "Średnie hasło";
    progressBar.style.backgroundColor = "orange";
  } else if (password.length === 0) {
    passwordPowerLabel.style.visibility = "hidden";
  } else {
    //weak
    passwordPowerLabel.style.visibility = "visible";
    progressBar.style.width = "35%";
    progressBar.innerText = "Słabe hasło";
    progressBar.style.backgroundColor = "red";
  }

  return progressBar;
}

function upperCaseCheck(pass) {
  return /[A-Z]/.test(pass);
}

function digitCheck(pass) {
  return /[1-9]/.test(pass);
}
