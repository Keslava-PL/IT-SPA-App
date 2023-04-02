import { checkUser } from "../checkUser";
import { getMaxId } from "./getMaxId";
import { addUserToDataBase } from "./addUserToDataBase";
import { NavigateTo } from "../../common/NavigateTo";
import { checkNick } from "./checkNick";
import { Login } from "../../views/Login";
import { checkPasswordRepeat } from "./checkPasswordRepeat";

export function registrationAttempt(
  inputEmail,
  inputNickname,
  inputPassword,
  inputPasswordRepeated
) {
  //check passwords
 
  //check user if exist callback error
  checkUser(inputEmail)
    .then((response) => {
      if (response === false) {

        //check nick if exist callback message
        checkNick(inputNickname).then((response) => {
          if (response === false) {
            
            //compare password with repeated password
            if (
              checkPasswordRepeat(inputPassword, inputPasswordRepeated) === true
            ) {

                //get the max id
                getMaxId().then((id) => {

                if (maxId !== NaN) {
                  addUserToDataBase(
                    inputEmail,
                    inputNickname,
                    inputPassword,
                    id
                  );
                  NavigateTo(Login,0,1);
                }
              });
            } else {

                    const infoPanel = document.querySelector('.regInfoPanel');
                    infoPanel.innerText = "Hasła muszą być takie same";
                    infoPanel.removeAttribute('hidden','');
            }
          } else {
            const infoPanel = document.querySelector(".regInfoPanel");
            infoPanel.innerText = "Wpisany nickname jest już wykorzystany";
            infoPanel.removeAttribute("hidden", "");
          }
        });
      } else {
        const infoPanel = document.querySelector(".regInfoPanel");
        infoPanel.innerText = "Wpisany e-mail jest już wykorzystany";
        infoPanel.removeAttribute("hidden", "");
      }
    })
    .catch((error) => {
      console.log("Something gones wrong. Error: ", error);
    });

}
