import { loginAuth } from "../authorization/login/loginAuth";
import { CheckValidation } from "../common/CheckValidation";
import { NavButton } from "../common/NavButton";
import { Home } from "./Home";
import { Registration } from "./Registration";

export function Login(){

    const loginPanel = document.createElement('div');
    loginPanel.innerHTML=`
    <h2>Logowanie</h2>`;

//Login form
    const form = document.createElement('form');
    form.classList.add('logForm', 'needs-validation');
    form.setAttribute('novalidate', '');

    loginPanel.appendChild(form);
        //email label
        const divRow = document.createElement('div');
        divRow.classList.add('row', 'mb-3');
        form.appendChild(divRow);
   
            const emailLabel = document.createElement('label');
            emailLabel.classList.add('col-sm-2', 'col-form-label');
            emailLabel.setAttribute("for", "inputEmail3");
            emailLabel.innerText = "E-mail:";
            divRow.appendChild(emailLabel);

            const divEmail = document.createElement('div');
            divEmail.classList.add('col-sm-10');
            divRow.appendChild(divEmail);

                const inputEmail = document.createElement('input');
                inputEmail.classList.add("form-control");
                inputEmail.setAttribute("id", "inputEmail3");
                inputEmail.setAttribute('name', 'inputEmail');
                inputEmail.setAttribute("type", "email");
                inputEmail.setAttribute('placeholder', 'E-mail');
                inputEmail.setAttribute('required','');
                divEmail .appendChild(inputEmail);

                const validateEmailDiv = document.createElement('div');
                validateEmailDiv.classList.add('invalid-feedback')
                validateEmailDiv.innerText = "Proszę wpisać email";
                divEmail.appendChild(validateEmailDiv);
        //password label
        const divRow2 = document.createElement('div');
        divRow2.classList.add('row', 'mb-3');
        form.appendChild(divRow2);

            const passwordLabel = document.createElement('label');
            passwordLabel.classList.add('col-sm-2', 'col-form-label');
            passwordLabel.setAttribute("for", "inputPassword3");
            passwordLabel.innerText = "Password:";
            divRow2.appendChild(passwordLabel);

            const divPassword = document.createElement('div');
            divPassword.classList.add('col-sm-10');
            divRow2.appendChild(divPassword);

                const inputPassword = document.createElement('input');
                inputPassword.classList.add("form-control");
                inputPassword.setAttribute("id", "inputPassword3");
                inputPassword.setAttribute('name', 'inputPass');
                inputPassword.setAttribute("type", "password");
                inputPassword.setAttribute('placeholder', 'Hasło');
                inputPassword.setAttribute('required','')
                divPassword.appendChild(inputPassword);

                const validatePassDiv = document.createElement('div');
                validatePassDiv.classList.add('invalid-feedback')
                validatePassDiv.innerText = "Proszę wpisać hasło";
                divPassword.appendChild(validatePassDiv);

                //information panel for authorisation using
                const authInformationPanel = document.createElement('div');
                authInformationPanel.classList.add('authInfoPanel');
                authInformationPanel.setAttribute('hidden','');
                divPassword.appendChild(authInformationPanel);
                
                //submit button
        const submitInButton = document.createElement('button');
        form.appendChild(submitInButton);
        submitInButton.classList.add('btn', 'btn-primary');
        submitInButton.innerText = 'Sign in';
        submitInButton.setAttribute('type', 'submit');

        //footer
        const footer = document.createElement('footer');
        footer.classList.add('submitFooter');
        form.appendChild(footer);

            const footerLabel = document.createElement('label');
            footerLabel.innerText='Nie masz konta? Zarejestruj się w systemie!  ';
            form.appendChild(footerLabel);

            const signInButton = NavButton('Sign up',Registration,['btn','btn-secondary','btn-sm']);
            footerLabel.appendChild(signInButton);

//Submit action
const checkDiv = document.createElement('div');
footer.append(checkDiv);

submitInButton.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log('submit button');
    loginAuth(inputEmail.value, inputPassword.value);
})


    return loginPanel;
}
