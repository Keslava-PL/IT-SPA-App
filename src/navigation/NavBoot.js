import { Home } from "../views/Home";
import { Cart } from "../views/Cart";
import { RoomList } from "../views/RoomList";
import {Registration} from "../views/Registration";
import { Treatments } from "../views/Treatments";
import { NavLink } from "../common/NavLink";
import { WelcomeDiv } from "./WelcomeDiv";
import { dataMenager } from "../data/data-manager";


const navItems =[
      {name: 'Home', component: Home},
      {name: 'Rooms', component: RoomList},
      {name: 'Treatments', component: Treatments},
      { name: 'Cart 🛒', component: Cart }
    ];

export function NavBoot(authGuard){

  let user;
  if(authGuard === 1){
    
    user = dataMenager.getLoggedUser();
    //jakieś 

  }
  else{
    user = '';
  }

  
  //creat navigation navbar
  const navigation = document.createElement("nav");

  
  
  navigation.classList.add("navigation","navbar", "navbar-expand-lg", "navbar-dark","fixed-top");

  //add Brand anchor 
  const navbarBrandA = document.createElement('a');
  navbarBrandA.classList.add("navbar-brand");
  navbarBrandA.href= "#";
  
  //add src image to navbar
  const navbarBrandImage = document.createElement('img');
  navbarBrandImage.src = require('../assets/navBrand.png');
  navbarBrandImage.alt = "Logo.png";
  
  navbarBrandA.append(navbarBrandImage);

  //add toggler button
  const togglerButton = document.createElement('button');
  togglerButton.classList.add("navbar-toggler");
  togglerButton.setAttribute("type", "button");
  togglerButton.setAttribute("data-bs-toggle", "collapse");
  togglerButton.setAttribute("data-bs-target", "#navbarResponsive");
  togglerButton.setAttribute("aria-controls", "navbarResponsive");
  togglerButton.setAttribute("aria-expanded", "false");
  togglerButton.setAttribute("aria-label", "Toggle navigation");

  //add toggler Icon
  const togglerIcon = document.createElement('span');
  togglerIcon.classList.add("navbar-toggler-icon");
  
  togglerButton.append(togglerIcon);

//create main div of nav
const divNav = document.createElement('div');
divNav.classList.add("collapse", "navbar-collapse");
//divNav.id = "navbarResponsive"
divNav.setAttribute("id", "navbarResponsive");

//create list component of nav's elements
const lis = document.createElement("ul");
lis.classList.add("navbar-nav", "ml-auto");

//add links to nav list
const navLinks = navItems.map(navItem =>{
  return NavLink(navItem.name, navItem.component);
})

lis.append(...navLinks);


divNav.append(lis);

//create

 //add navigation elements
 
 navigation.append(navbarBrandA,togglerButton,WelcomeDiv(user.nickname,authGuard),divNav);

return navigation;

}