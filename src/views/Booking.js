import { createEl } from "../common/createEl";

import flatpickr from "flatpickr";
import { NavigateTo } from "../common/NavigateTo";
import { RoomList } from "./RoomList";
import { getOrderPrice } from "../booking/getOrderPrice";
import { cartManager } from "../cart/cart-manager";
import { openModal } from "../booking/openModal";

export function Booking(room) {
  //
  const container = createEl("div", ["booking-container"]);
  const titleHeader = createEl("header", ["booking", "booking-header"]);

  const mainDiv = createEl("div", ["booking", "booking-main"]);
  const dataSection = createEl("section", ["booking", "booking-section-data"]);

  //Site title
  titleHeader.innerHTML = `
    <h3>${room.name}</h3>
    `;
  ///DATA SECTION
  //////////////////////////////////////////////////////
  /// START date picker div i form

  const divDataPicker = createEl("div", ["booking-div-datepicker"]);
  divDataPicker.innerHTML = `
    <form class="date-picker-form needs-validation" novalidate>
        <div class="column">
            <label class="col-md-10 col-form-label" for="input-start-date">Podaj datę przyjazdu</label>
            <div class ="col-md-10">
                <input class="form-control" id="input-start-date" name="input-start-date" type="date" required/>
                <div class="invalid-feedback">Proszę podać datę przyjazdu</div>
            </div>
            
        </div>
        <div class="column">
            <label class="col-md-10 col-form-label" for="input-end-date">Podaj datę wyjazdu:</label>
            <div class="col-md-10">
             <input class="form-control" id="input-end-date" name="input-end-date" type="date" required/>
            <div class="invalid-feedback">Proszę podać datę wyjazdu</div>
            </div>
           
        </div>
       
    </form>
    
    
    `;
  dataSection.append(divDataPicker);

  //dodanie flitpickerów i uniemożliwienie wyboru daty wczesniejszej niż dzisiejsza oraz na drugim rok później od wybranej na pierwszxym
  //walidacja zawarta w atrybucie onChange
  const inputStartDate = divDataPicker.querySelector("#input-start-date");
  const startFlatPicker = flatpickr(inputStartDate, {
    minDate: "today",
    dateFormat: "d.m.Y",
    allowInput: true,
    disableMobile: true,
    onChange: function (selectedDate) {
      if (selectedDate.length > 0) {
        endFlatPicker.set("minDate", selectedDate[0]);

        const max = new Date(selectedDate[0]);
        max.setDate(max.getDate() + 365);
        console.log(max);
        endFlatPicker.set("maxDate", max);
      }
    },
    arrowRight: true,
  });

  //onChange count the number of days between first date and second date
  let daysNumber;
  const inputEndDate = divDataPicker.querySelector("#input-end-date");
  const endFlatPicker = flatpickr(inputEndDate, {
    minDate: "today",
    dateFormat: "d.m.Y",
    disableMobile: true,
    allowInput: true,
    arrowRight: true,
    onChange: function (selectedDateSec) {
      if (
        selectedDateSec.length > 0 &&
        startFlatPicker.selectedDates.length > 0
      ) {
        const first = startFlatPicker.selectedDates[0];
        const second = endFlatPicker.selectedDates[0];

        const differenceInTime = second.getTime() - first.getTime();
        const differenceInDays = differenceInTime / (1000 * 3600 * 24);
        daysNumber = differenceInDays + 1;
        divSummary.querySelector("#daysLabel").textContent = daysNumber;

        divSummary.querySelector(".booking-div-summary").hidden = false;
      }
    },
  });
  ///KONIEC date picker div i form
  //////////////////////////////////////////////////////

  ///START Summary
  //////////////////////////////////////////////////////
  const divSummary = createEl("div", ["booking-div-summary"]);
  dataSection.append(divSummary);

  divSummary.innerHTML = `
    <div class="booking-div-summary" hidden ='true'>
    <hr class="line"/>
    <div class ="row mb-3" >
        <label class="col-sm-2 col-form-label" for="daysLabel">
            Ilość dni
        </label>
        <label class="daysLabel col-sm-6 col-form-label" id="daysLabel">
        </label>
    </div>
    <div>
        <label class="col-sm-2 col-form-label" for="daysLabel">
            Kwota
        </label>
        <label class="priceLabel col-sm-6 col-form-label" id="priceLabel">
        </label>
    </div>
    <hr class="line"/>
    </div>
    `;

  //summary actions

  //obliczanie pełnej kwoty
  inputEndDate.addEventListener("input", () => {
    getOrderPrice(daysNumber, room.id).then((response) => {
      divSummary.querySelector(".priceLabel").textContent = response;
    });
  });
  ///KONIEC Summary
  //////////////////////////////////////////////////////

  ///START Booking buttons
  //////////////////////////////////////////////////////
  const divButtons = createEl("div", ["booking-div-buttons"]);
  dataSection.append(divButtons);

  divButtons.innerHTML = `
    <div class="booking-addButton">
        <button class="btn btn-warning" id="booking-addButton-btn" type="button">Dodaj do koszyka</button>
    </div>
    <div class="booking-rejectButton">
        <button class="btn btn-secondary" id="booking-rejectButton-btn" title="Powrót do listy pokojów" type="button">Rezygnuję</button>
    </div>

    `;

  //ADD TO CART Button
  const addButton = divButtons.querySelector("#booking-addButton-btn");
  addButton.addEventListener("click", function () {
    //check validation
    const form = divDataPicker.querySelector(".date-picker-form");

    //add values to cart
    if (form.checkValidity()) {
      let i = 0;
      for (i; i < daysNumber; i++) {
        cartManager.addRoom(room);
      }
      openModal();
    } else {
      form.classList.add("was-validated");
    }

    //show popup to redirect to cart or to room list
  });
  const rejectButton = divButtons.querySelector("#booking-rejectButton-btn");
  rejectButton.addEventListener("click", function () {
    NavigateTo(RoomList);
  });

  ///KONIEC Booking buttons
  //////////////////////////////////////////////////////

  const imageFooter = createEl("section", ["booking", "booking-section-img"]);
  const img = createEl("img", ["booking-img"]);

//adding random appending pictures
  const images = {
    1: require("../assets/bookingImages/img1.jpg"),
    2: require("../assets/bookingImages/img2.jpg"),
    3: require("../assets/bookingImages/img3.jpg")
  } 
    const keys = Object.keys(images)
    const indexRandom = Math.floor(Math.random() * keys.length);
    const path = "../assets/bookingImages/img1.jpg";
    console.log(indexRandom);
    
  img.src = images[indexRandom+1];
  
  imageFooter.append(img);

  mainDiv.append(dataSection, imageFooter);

  // `;
  container.append(titleHeader, mainDiv);

  return container;
}
