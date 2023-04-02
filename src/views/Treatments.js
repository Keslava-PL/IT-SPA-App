import { cartManager } from "../cart/cart-manager";

import { NavButton } from "../common/NavButton";


export function Treatments(){

    const section = document.createElement('section');
const ul = document.createElement('ul');

section.innerHTML=`
<h2 class = "header">Treatment List:</h2>
<p class = "header">Sprawdź ofertę zabiegów</p>
<p class="loading">Ładuję listę zabiegów...</p>`;

fetch('http://localhost:3000/treatments')
    .then(response => response.json())
    .then(treats => {
        const lis = treats.map(treat =>{
            
            //key determining type of service;
            const type = 'treatment';
            const li = document.createElement('li');

            li.innerHTML = `
            <h4>${treat.name}</h4>
            <p>
                <strong>${treat.price.toFixed(2)} PLN</strong>
            </p>
            <p>Część ciała: ${treat.area}</p>
            <footer></footer>`;

            const addToCartButton = document.createElement('button');
            addToCartButton.innerText = 'Dodaj do koszyka';
            addToCartButton.classList.add('btn-treat');
            //obsługa kliknięcia w przycisk
            addToCartButton.addEventListener('click', () => cartManager.addItem(treat, type));
            li.querySelector('footer').append(addToCartButton);

            return li;
        });

        ul.append(...lis);

        //deleting loading describe
        section.querySelector('.loading').remove();

        //showing ready list of treatments
        section.append(ul);
    });

    return section;

}