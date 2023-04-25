import { NavigateTo } from "../../common/NavigateTo";
import { Home } from "../../views/Home";

export function LogOut() {
  const key = "loggedUser";

  const content = {
    logged: false,
  };

  localStorage.setItem(key, JSON.stringify(content));

  NavigateTo(Home, 1);
}
