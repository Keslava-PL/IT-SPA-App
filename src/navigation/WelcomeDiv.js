import { Login } from "../views/Login";
import { NavLink } from "../common/NavLink";
import { NavButton } from "../common/NavButton";
import { Dropdown } from "bootstrap";
import { Home } from "../views/Home";
import { Cart } from "../views/Cart";
import { LogOut } from "../authorization/login/LogOut";

export function WelcomeDiv(nickname, guard) {
    const divWelcome = document.createElement("div");

  if (guard === 1) {
    
    divWelcome.innerHTML = `
    Witaj ${nickname}`;
    divWelcome.classList.add("divWelcome");

    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('title', 'Wyloguj się');
    
    //button.innerText = 'Wyloguj'
    
    const logoutIcon = document.createElement('i');
    logoutIcon.classList.add('fa-solid', 'fa-arrow-right-from-bracket', 'fa-lg');
    
    button.append(logoutIcon);
    divWelcome.append(button);

    button.addEventListener('click', () =>{
        LogOut();
    })
  }
  else{

    const logInButton = NavButton('Zaloguj się', Login,'');

    divWelcome.classList.add("divWelcome");
    divWelcome.appendChild(logInButton); 

  }


  return divWelcome;
}
