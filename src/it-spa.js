import 'bootstrap/dist/css/bootstrap.css';
import * as bootstrap from 'bootstrap'
import './it-spa.scss';

import { Home } from './views/Home';
import { Nav } from './navigation/Nav';
import { NavBoot } from './navigation/NavBoot';
import { dataMenager } from './data/data-manager';
import { Login } from './views/Login';
import { CheckValidation } from './common/CheckValidation';
import { Registration } from './views/Registration';
import { Cart } from './views/Cart';
import { getMaxId } from './authorization/registration/getMaxId';
import { checkPowerOfPass } from './authorization/registration/checkPowerOfPass';
import { checkUser } from './authorization/checkUser';


const main = document.querySelector('main');

//przyczepiamy nawigację przed elementem main

//main.before(Nav());
const guard = dataMenager.getAuthGuard();


if(guard === 1){

    main.before(NavBoot(guard));
}
else{
    main.before(NavBoot(guard));
}
//reakcja na zdarzenie 'navigate'
document.body.addEventListener('navigate', event =>{
    const Component = event.detail;

    //czyścimy zawartość elementu main
    main.innerHTML = '';
    //następnie podstawiamy nowy komponent
    main.append(Component());
});
// const inputEmail = 'hec@m.com';
// const nick = 'elo';
// const password = 'pas';
 main.append(Home());
// addUserToDataBase(inputEmail,nick,password)
//




//użytkownik wystartuje na Home
 //main.append(Home());


//const answ = checkUser("rekgar@mail.com").flag;

//console.log('wartosc',checkUser('rengar@mail.com'));


//const postResponse =  addUserToDataBase('ola@mail.com', 'mysza', 'mousee');





// console.log('id z main', getMaxId().id);
