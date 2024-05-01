import {createNavBar, createBrand, createMenu} from './landing.js';
import logo from '../../RESOURCES/images/elaBoratelogo.png';
import search from '../../RESOURCES/images/search-icon.png';
const renderHeader = (body) => {
//create header element
const header = document.createElement('header');
//create icon div
const iconDiv = createBrand(logo);
iconDiv.id = 'iconDiv';
//create navBar
const navBox = createNavBar();
navBox.classList.add('nav'); 
//create search Box div
const searchDiv = document.createElement('div');
searchDiv.id = 'searchBox';
//create search Icon
const searchIcon = document.createElement('img');
searchIcon.src =  search;
//create search input field
const searchInput = document.createElement('input');
searchInput.type = "text";
searchInput.id = "searchInput";
//Add searchBox items to parent
searchDiv.appendChild(searchInput);
searchDiv.appendChild(searchIcon);
//Add header items to header
header.appendChild(iconDiv);
header.appendChild(navBox);
header.appendChild(searchDiv);
//create menu
createMenu(header);
//Add header to body tag
body.appendChild(header);
}
export {renderHeader};