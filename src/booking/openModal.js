import { Modal } from "bootstrap";
import { NavigateTo } from "../common/NavigateTo";
import { Cart } from "../views/Cart";
import { RoomList } from "../views/RoomList";

export function openModal() {
  var modal = document.createElement("div");
  modal.className = "modal fade";
  modal.id = "myModal";
  modal.tabIndex = -1;
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML = `
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Co dalej? </h5>
            <button type="button" class="btn-close btn-modal-close" aria-label="Zamknij"></button>
          </div>
          <div class="modal-body">
            <p>To wszystko?</p>
            <p>A może chcesz zamówić coś jeszcze?</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary btn-modal-moveToRoomList">Przeglądaj dalej</button>
            <button type="button" class="btn btn-primary btn-modal-moveToCart">Przejdź do koszyka</button>
          </div>
        </div>
      </div>
    `;

  document.body.appendChild(modal);
  var myModal = new Modal(modal);

  //Close button
  const buttonClose = modal.querySelector(".btn-modal-close");
  buttonClose.addEventListener("click", function () {
    myModal.hide();
  });
  const buttonMoveToCart = modal.querySelector(".btn-modal-moveToCart");
  buttonMoveToCart.addEventListener("click", function () {
    myModal.hide();
    NavigateTo(Cart);
  });
  const buttonMoveToRoomList = modal.querySelector(".btn-modal-moveToRoomList");
  buttonMoveToRoomList.addEventListener("click", function () {
    myModal.hide();
    NavigateTo(RoomList);
  });

  //Move to roomList

  myModal.show();
}
