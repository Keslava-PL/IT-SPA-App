import { checkPowerOfPass } from "../authorization/registration/checkPowerOfPass";
import { registrationAttempt } from "../authorization/registration/registrationAttempt";

import { createEl } from "../common/createEl";
import { NavButton } from "../common/NavButton";

import { Login } from "./Login";

export function Registration() {
  const registrPanel = document.createElement("div");
  registrPanel.classList.add("registrationPanel");

  registrPanel.innerHTML = `    
    <h3>Rejestracja użytkownika: </h3>
    <h5>Podaj dane w celu poprawnej rejestracji:</h5>
   
    `;

  const form = createEl("form", ["regForm", "needs-validation"], {
    novalidate: "",
  });
  registrPanel.appendChild(form);

  //email row
  const divRow = createEl("div", ["row", "mb-3"]);
  form.appendChild(divRow);
  //email label with Email
  const emailLabel = createEl("label", ["col-sm-2", "col-form-label"], {
    for: "inputEmail3",
  });
  emailLabel.innerText = "Email:";
  divRow.appendChild(emailLabel);
  //div email
  const divEmail = createEl("div", ["col-sm-10"]);
  divRow.appendChild(divEmail);
  //email input
  const inputEmail = createEl("input", ["form-control"], {
    id: "inputEmail3",
    name: "inputEmail",
    type: "email",
    placeholder: "E-mail",
    required: "",
  });
  divEmail.appendChild(inputEmail);

  const validateEmailDiv = createEl("div", ["invalid-feedback"]);
  validateEmailDiv.innerText = "Proszę wpisać email";
  divEmail.appendChild(validateEmailDiv);

  //Nickname
  const divRow3 = createEl("div", ["row", "mb-3"]);
  form.appendChild(divRow3);

  const nickLabel = createEl("label", ["col-sm-2", "col-form-label"], {
    for: "inputNick3",
  });
  nickLabel.innerText = "Nick:";
  divRow3.appendChild(nickLabel);

  const divNickname = createEl("div", ["col-sm-10"]);
  divRow3.appendChild(divNickname);

  const inputNickname = createEl("input", ["form-control"], {
    id: "inputNick3",
    type: "text",
    placeholder: "Nick",
    name: "Nick",
    required: "",
  });
  divNickname.appendChild(inputNickname);

  const validateNickDiv = createEl("div", ["invalid-feedback"]);
  validateNickDiv.innerText = "Proszę wpisać nick";
  divNickname.appendChild(validateNickDiv);

  //Password label
  const divRow2 = createEl("div", ["row", "mb-3"]);
  form.appendChild(divRow2);

  const passwordLabel = createEl("label", ["col-sm-2", "col-form-label"], {
    for: "inputPassword3",
  });
  passwordLabel.innerText = "Hasło:";
  divRow2.appendChild(passwordLabel);

  const divPassword = createEl("div", ["col-sm-10"]);
  divRow2.appendChild(divPassword);

  const inputPassword = createEl(
    "input",
    ["form-control", "password-controll"],
    {
      id: "inputPassword3",
      name: "inputPass",
      type: "password",
      placeholder: "Hasło",
      required: "",
    }
  );
  divPassword.appendChild(inputPassword);

  const validatePasswordkDiv = createEl("div", ["invalid-feedback"]);
  validatePasswordkDiv.innerText = "Proszę wpisać hasło";
  divPassword.appendChild(validatePasswordkDiv);

  //password repeat label
  const divRow4 = createEl("div", ["row", "mb-3"]);
  form.appendChild(divRow4);

  const passwordLabel2 = createEl("label", ["col-sm-2", "col-form-label"], {
    for: "inputPassword4",
  });
  passwordLabel2.innerText = "Powtórz hasło:";
  divRow4.appendChild(passwordLabel2);

  const divRepeatPassword2 = createEl("div", ["col-sm-10"]);
  divRow4.appendChild(divRepeatPassword2);

  const inputRepeatPassword2 = createEl(
    "input",
    ["form-control", "password-control2"],
    {
      id: "inputPassword4",
      name: "inputPass",
      type: "password",
      placeholder: "Hasło",
      required: "",
    }
  );
  divRepeatPassword2.appendChild(inputRepeatPassword2);

  const validatePasswordRepeatDiv = createEl("div", ["invalid-feedback"]);
  validatePasswordRepeatDiv.innerText = "Powtórz hasło";
  divRepeatPassword2.appendChild(validatePasswordRepeatDiv);

  //information panel for registration
  const authInformationPanel = createEl("div", ["regInfoPanel"]);

  //password's power label

  const passwordPowerLabel = createEl("div", ["progress"]);
  const progressBar = createEl("div", ["progress-bar"], {
    role: "progressbar",
    "aria-valuenow": "0",
    "aria-valuemin": "0",
    "aria-valuemax": "100",
  });
  passwordPowerLabel.appendChild(progressBar);
  divRepeatPassword2.append(passwordPowerLabel);
  passwordPowerLabel.style.visibility = "hidden";

  divRepeatPassword2.appendChild(authInformationPanel);

  //submit button
  const submitInButton = createEl("button", ["btn", "btn-primary"], {
    type: "button",
  });
  submitInButton.innerText = "Sign up";
  form.appendChild(submitInButton);

  //footer
  const footer = createEl("footer", ["submitFooter"]);
  form.appendChild(footer);

  const footerLabel = createEl("label");
  footerLabel.innerText = "Masz już konto? Zaloguj się: ";
  form.appendChild(footerLabel);

  //submit action
  const signInButton = NavButton("Sign in", Login, [
    "btn",
    "btn-secondary",
    "btn-sm",
  ]);
  footerLabel.appendChild(signInButton);

  const checkDiv = document.createElement("div");
  footer.append(checkDiv);

  submitInButton.addEventListener("click", (e) => {
    if (form.checkValidity()) {
      e.preventDefault();
      registrationAttempt(
        inputEmail.value,
        inputNickname.value,
        inputPassword.value,
        inputRepeatPassword2.value
      );
    } else {
      form.classList.add("was-validated");
    }
  });

  inputPassword.addEventListener("input", (e) => {
    checkPowerOfPass(inputPassword.value, progressBar, passwordPowerLabel);
  });

  return registrPanel;
}
