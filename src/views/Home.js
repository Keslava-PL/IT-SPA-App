import { LogOut } from '../authorization/login/LogOut';
import { NavigateTo } from '../common/NavigateTo';
import {dataMenager} from '../data/data-manager';

export function Home(){
    
     const user = dataMenager.getLoggedUser();
     //console.log("user",user);
    const section = document.createElement('section');
    
    // const img = document.createElement('img');
    // img.src = require('../assets/support.png');
    // img.style.width = '50vw'; //vw = view width
   
    section.innerHTML =`
    <h2 class = "header">Home</h2>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="imagesBilboard carousel-inner">
    <div class="car car1 carousel-item active">
      
    </div>
    <div class="car car2 carousel-item">
     
    </div>
    <div class="car car3 carousel-item">
      
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    `
    // section.append(img);

    const icon = document.createElement('i');

    const img1 = document.createElement('img');
    img1.classList.add('d-block', 'w-100');
    img1.src = require('../assets/mainPage/spa-face.jpg');

    const img2 = document.createElement('img');
    img2.classList.add('d-block', 'w-100');
    img2.src = require('../assets/mainPage/spa-chill.jpg');

    const img3 = document.createElement('img');
    img3.classList.add('d-block', 'w-100');
    img3.src = require('../assets/mainPage/spa-stones.jpg');

    const div1 = section.querySelector('.car1')
    div1.append(img1);
    const div2 = section.querySelector('.car2')
    div2.append(img2);

    const div3 = section.querySelector('.car3')
    div3.append(img3);

    section.append(icon);

    return section;
}