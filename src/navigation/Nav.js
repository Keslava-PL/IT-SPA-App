import { NavButton } from "../common/NavButton";
import { Home } from "../views/Home";
import { Cart } from "../views/Cart";
import { RoomList } from "../views/RoomList";
import {Registration} from "../views/Registration";
import { Treatments } from "../views/Treatments";

const navItems = [
    {name: 'Rooms', component: RoomList},
    {name: 'Treatments', component: Treatments},
    { name: '🛒', component: Cart },
];


export function Nav(){
    const nav = document.createElement('nav');


    const navButtons = navItems.map(e => {
        return NavButton(e.name, e.component, ['btn', 'btn-secondary']);
    });

    // const divExemple = document.createElement('div');
    // divExemple.innerHTML = `<button class="btn btn-secondary type="button" > Przycisk </button>`


    // const button = document.createElement('button');
    // button.classList.add('btn', 'btn=secondary');
    // button.setAttribute('type','button');
    // button.innerText = 'Przycisk'





    // const cos.innerHTML='<button class="btn btn-secondary type="button" > Przycisk </button>'


    nav.append(...navButtons);
    //nav.append(registrationButton);

    return nav;
}
