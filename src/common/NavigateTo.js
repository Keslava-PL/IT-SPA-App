export function NavigateTo(componentFn, loginAction, registrAction) {
  const navigationEvent = new CustomEvent("navigate", {
    detail: componentFn,
  });
  if (loginAction === 1) {
    window.location.reload();
  }
  if (registrAction === 1) {
    window.alert("Zostałeś zarejestrowany!!");
  }

  document.body.dispatchEvent(navigationEvent);
}
