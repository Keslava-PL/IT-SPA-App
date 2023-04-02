import { LogOut } from '../authorization/login/LogOut';
import { NavigateTo } from '../common/NavigateTo';
import {dataMenager} from '../data/data-manager';

export function Home(){
    
     const user = dataMenager.getLoggedUser();
     //console.log("user",user);
    const section = document.createElement('section');
    
    const img = document.createElement('img');
    img.src = require('../assets/support.png');
    img.style.width = '50vw'; //vw = view width
   
    section.innerHTML =`
    <h2 class = "header">Home</h2>
    <p class = "header">Witaj ${user.nickname} w IT SPA!!!</p>


    <p class = "header">Kazdy programista lubi u nas odpoczywać</p>
    `
    section.append(img);

    const icon = document.createElement('i');


    section.append(icon);

    return section;
}