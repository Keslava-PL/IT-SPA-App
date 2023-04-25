import { NavLink } from "../common/NavLink";
import { cartManager } from "../cart/cart-manager";

export function cartTooltips(name) {
  const button = NavLink(name, ["cart-tooltips"]);

  button.setAttribute("data-bs-toggle", "tooltip");
  button.setAttribute("data-bs-placement", "right");
  button.setAttribute("data-bs-custom-clas", "custom-tooltip");

  const content = cartManager.getAllItems();
  console.log("content z tooltipa", content);

  const tooltipInput = document.createElement("ul");
  tooltipInput.classList.add("tooltipInput");
  const ul = document.createElement("ul");

  const listaLi = content.forEach((el) => {
    const li = document.createElement;
  });

  button.setAttribute("data-bs-title", content);

  return button;
}
