import { Login } from "../views/Login";
import { NavLink } from "../common/NavLink";
import { NavButton } from "../common/NavButton";
import { Dropdown } from "bootstrap";
import { Home } from "../views/Home";
import { Cart } from "../views/Cart";
import { LogOut } from "../authorization/login/LogOut";
import { createEl } from "../common/createEl";

export function WelcomeDiv(nickname, guard) {
  const divWelcome = createEl("li", ["nav-item","divWelcome" ]);
  divWelcome.setAttribute("data-bs-toggle", "collapse");
  divWelcome.setAttribute("data-bs-target", ".navbar-collapse")

  // el.classList.add('nav-item');
  // el.classList.add(...classes);
  // el.setAttribute("data-bs-toggle", "collapse");
  // el.setAttribute("data-bs-target", ".navbar-collapse");



  if (guard === 1) {
    //if logged show user nickname
    // divWelcome.innerHTML = `
    // Witaj ${nickname}`;

    //avatar contener
    const avatarDiv = createEl("div", ["avatraDiv"]);
    const avatarDefault = createEl("i", ["avatar", "fa", "fa-user", "fa-2x"], {
      "aria-hidden": "true",
    });
    avatarDiv.append(avatarDefault);

    //Logout with name contener
    const divName = createEl("div", ["divLogout"]);

    const text = createEl("h6");
    text.innerHTML = `
    Witaj ${nickname}`;
    //button.innerText = 'Wyloguj'
    const button = createEl("button", [], {
      type: "button",
      title: "Wyloguj się",
    });
    //logut icon
    const logoutIcon = createEl("i", [
      "fa-solid",
      "fa-arrow-right-from-bracket",
      "fa-lg",
      "fa-black"
    ]);
    button.append(logoutIcon);
    divName.append(text, button);

    divWelcome.append(avatarDiv, divName);

    button.addEventListener("click", () => {
      LogOut();
    });
  } else {
    const logInButton = NavButton("Zaloguj się", Login, "");
    logInButton.classList.add('logInButton');
    divWelcome.classList.add("divWelcome");
    divWelcome.appendChild(logInButton);
  }

  return divWelcome;
}
