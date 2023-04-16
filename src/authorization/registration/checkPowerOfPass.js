export function checkPowerOfPass(password, progressBar, passwordPowerLabel) {
  const upperCase = upperCaseCheck(password);
  const digit = digitCheck(password);
  const lowerCase = lowerCaseCheck(password);

  if (password.length > 11 && upperCase === true && digit === true && lowerCase === true) {
    //strong
    passwordPowerLabel.style.visibility = "visible";
    progressBar.style.width = "100%";
    progressBar.innerText = "Bardzo silne hasło";
    progressBar.style.backgroundColor = "green";



  } else if ((password.length > 7 && upperCase ===true && lowerCase===true) || (password.length > 7 && upperCase ===true && digit===true) || (password.length > 7 && lowerCase ===true && digit===true)
  ) {
    //medium
    passwordPowerLabel.style.visibility = "visible";
    progressBar.style.width = "65%";
    progressBar.innerText = "Średnie hasło";
    progressBar.style.backgroundColor = "orange";




  } else if (password.length === 0) {
    passwordPowerLabel.style.visibility = "hidden";


  } else if(password.length < 8)
    {
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
  return /[0-9]/.test(pass);
}
function lowerCaseCheck(pass){
  return /[a-z]/.test(pass);
}
