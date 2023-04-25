export function NavLink(text, componentDirection, classes = []) {
  const el = document.createElement("li");

  el.classList.add("nav-item");
  el.classList.add(...classes);
  el.setAttribute("data-bs-toggle", "collapse");
  el.setAttribute("data-bs-target", ".navbar-collapse");
  const anchor = document.createElement("a");
  anchor.classList.add("nav-link");
  anchor.innerText = text;

  anchor.addEventListener("click", () => {
    const navigationEvent = new CustomEvent("navigate", {
      detail: componentDirection,
    });
    document.body.dispatchEvent(navigationEvent);
  });

  el.append(anchor);

  return el;
}
