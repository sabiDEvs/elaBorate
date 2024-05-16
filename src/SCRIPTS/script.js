//import functions from modules
import {generateHeroSection, carousel, createDept, createService} from './modules/landing.js';
import {renderHeader} from './modules/header.js';
import {renderFooter} from './modules/footer';
//import css

import '../CSS/style.css';

//import images
import dept1 from '../RESOURCES/images/computer-dept.png';
import dept2 from '../RESOURCES/images/electrical-dept.png';
import dept3 from '../RESOURCES/images/mechanical-dept.png';
import dept4 from '../RESOURCES/images/production-dept.png';
import aboutPic from '../RESOURCES/images/about_us_man.png';
//create a reference to body tag
const body = document.querySelector('body');
//call header function
renderHeader(body);

//create main section
const main = document.createElement('main');

//create hero section
const heroSection = document.createElement('section');
//Add heroSection content
generateHeroSection(heroSection);
heroSection.id = 'hero';
//append heroSection content
main.appendChild(heroSection);

//create department section
const deptSection = document.createElement('section');
deptSection.id = 'dept';
//department section heading
const deptHeader = document.createElement('h3');
deptHeader.textContent = 'Departments We Cover';
//department grouping
const deptGroup = document.createElement('div');
deptGroup.id = 'group';
//computer department div
const cpeDept = createDept(dept1, 'COMPUTER ENGINEERING', 'Build breadboard and the likes', [300, 400]);
//electrical department div
const eeeDept = createDept(dept2, 'ELECTRICAL ENGINEERING', 'Build transformer and the likes', [200]);
//mechanical department div
const meeDept = createDept(dept3, 'MECHANICAL ENGINEERING', 'Stuffs we don\'t understand and the likes', [200]);
//production department div
const preDept = createDept(dept4, 'PRODUCTION ENGINEERING', 'Draw this and draw that and the likes', [200]);
//append department div
deptGroup.appendChild(cpeDept);
deptGroup.appendChild(eeeDept);
deptGroup.appendChild(meeDept);
deptGroup.appendChild(preDept);
//append to department class
deptSection.appendChild(deptHeader);
deptSection.appendChild(deptGroup);
//append department Section to Main
main.appendChild(deptSection);

//create service section
const serveSection = document.createElement('section');
serveSection.id = 'service';
//service header
const serveHead = document.createElement('h3');
serveHead.textContent = "Services We Offer";
//the services container
const serveBox = document.createElement('div');
serveBox.id = 'offers';
//create service one
const serve1 = createService('Examples & Templates', 'see well written materials bla bla bla bla', 'Learn more');
serve1.classList.add('serve');
//create service two
const serve2 = createService('Examples & Templates', 'see well written materials bla bla bla bla', 'Learn more');
serve2.classList.add('serve');
serve2.id = 'middle';
//create service three
const serve3 = createService('Examples & Templates', 'see well written materials bla bla bla bla', 'Learn more');
serve3.classList.add('serve');
//Append services to  serve box
serveBox.appendChild(serve1);
serveBox.appendChild(serve2);
serveBox.appendChild(serve3);
//create service call to action
const serveAction = document.createElement('div');
serveAction.textContent = 'GET STARTED';
serveAction.id = 'serveAction';
//Append service items to service section
serveSection.appendChild(serveHead);
serveSection.appendChild(serveBox);
serveSection.appendChild(serveAction);
//Append service section to main
main.appendChild(serveSection);


//create about section
const aboutSection = document.createElement('section');
aboutSection.id = 'aboutSection';
//create about picture div
const picDiv = document.createElement('div');
picDiv.id = 'whyUs';
//create picture in about div
const aboutImg = document.createElement('img');
aboutImg.src = aboutPic;
//create heading for about section
const aboutHead = document.createElement('h2');
aboutHead.textContent = 'WHY US?';
//Append to picture Div
picDiv.appendChild(aboutImg);
picDiv.appendChild(aboutHead);
//create About text div
const aboutDiv = document.createElement('div');
aboutDiv.id = 'about';
//create about text blockquote
const aboutText = document.createElement('p');
aboutText.textContent = '"We understand the struggle.\n Juggling complex engineering\n concepts, conducting intricate\n experiments, and then facing\n the daunting task of writing a\n clear and concise lab report\n can leave even the brightest\n student feeling overwhelmed.\n That\'s where we come in."';
//Append about text to it container
aboutDiv.appendChild(aboutText);
//Append about contents to the section
aboutSection.appendChild(picDiv);
aboutSection.appendChild(aboutDiv);
//Append about section to main
main.appendChild(aboutSection);

//create contact section
const reachSection = document.createElement('section');
reachSection.id = 'contact';
//create contact header
const reachHeader = document.createElement('h2');
reachHeader.textContent = 'CONTACT US';
//create form element
const form =  document.createElement('form');
const userName = document.createElement('input');
userName.type = 'text';
userName.placeholder = 'Name';
userName.id = 'userName';
userName.classList.toggle('input');
const userEmail = document.createElement('input');
userEmail.type = 'email';
userEmail.placeholder = 'Email';
userEmail.id = 'userEmail';
userEmail.classList.toggle('input');
const userPhone = document.createElement('input');
userPhone.placeholder = 'Phone Number';
userPhone.type = 'number';
userPhone.id = 'userPhone';
userPhone.classList.toggle('input');
const userMessage = document.createElement('textarea');
userMessage.placeholder = 'Enter Message';
userMessage.id = 'userMessage';
userPhone.classList.toggle('input');
const userSubmit = document.createElement('input');
userSubmit.type = 'submit';
userSubmit.textContent = 'SUBMIT';
userSubmit.id = 'userSubmit';
//Append form child elements
form.appendChild(userName);
form.appendChild(userEmail);
form.appendChild(userPhone);
form.appendChild(userMessage);
form.appendChild(userSubmit);
//Append element to contact section
reachSection.appendChild(reachHeader);
reachSection.appendChild(form);
//Append contact section to main
main.appendChild(reachSection);
//Append main to body
body.appendChild(main);

//call the carousel function
carousel();

//display footer
renderFooter(body);





//to implement the modal, copy to all your pages
import { createModal, OpenModal, CloseModal } from './modules/modal.js';

createModal(body);
function checkLocalStorage(){
    if(!localStorage.getItem('Subscribed')){OpenModal();} else{CloseModal();}
}
window.onload = checkLocalStorage;