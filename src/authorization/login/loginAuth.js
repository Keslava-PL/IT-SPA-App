import { NavigateTo } from "../../common/NavigateTo";
import { Home } from "../../views/Home";
import { attemptLogin } from "./attemptLogin";
import { checkUser } from "../checkUser";

export function loginAuth(inputEmail, inputPassword){

    //const key = 'loggedUser';

   checkUser(inputEmail).then(function(response){
        if(response === true){
            
            attemptLogin(inputEmail, inputPassword).then(function(attemptResponse){
                
                    if(attemptResponse.answer === true){
                        NavigateTo(Home, 1);
                        
                    }else{

                        const infoPanel = document.querySelector('.authInfoPanel');
                        infoPanel.innerText = "Wpisany e-mail lub hasło są nieprawidłowe";
                        infoPanel.removeAttribute('hidden','');
                    }

            })     
     
        }else{
            const infoPanel = document.querySelector('.authInfoPanel');
            infoPanel.innerText = "Wpisany e-mail lub hasło są nieprawidłowe";
            infoPanel.removeAttribute('hidden','');
        }
    })
    

}