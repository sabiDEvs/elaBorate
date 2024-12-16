"use strict";
(self["webpackChunkelaborate"] = self["webpackChunkelaborate"] || []).push([["src_CSS_style_css-src_SCRIPTS_modules_footer_js-src_SCRIPTS_modules_header_js-src_SCRIPTS_mod-79364f"],{

/***/ "./src/CSS/report.css":
/*!****************************!*\
  !*** ./src/CSS/report.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/CSS/style.css":
/*!***************************!*\
  !*** ./src/CSS/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/SCRIPTS/modules/footer.js":
/*!***************************************!*\
  !*** ./src/SCRIPTS/modules/footer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderFooter: () => (/* binding */ renderFooter)
/* harmony export */ });
/* harmony import */ var _landing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing.js */ "./src/SCRIPTS/modules/landing.js");
/* harmony import */ var _RESOURCES_images_elaborate_footer_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../RESOURCES/images/elaborate-footer-logo.png */ "./src/RESOURCES/images/elaborate-footer-logo.png");


const renderFooter = (body) => {
//create footer
const footer = document.createElement('footer');
//create left footer section
const leftFooter = document.createElement('section');
//create footer brand
const footerBrand = (0,_landing_js__WEBPACK_IMPORTED_MODULE_0__.createBrand)(_RESOURCES_images_elaborate_footer_logo_png__WEBPACK_IMPORTED_MODULE_1__, '');
//create footer navigation links
const footerNav = (0,_landing_js__WEBPACK_IMPORTED_MODULE_0__.createNavBar)();
footerNav.id = 'footerNav';
//append children to leftFooter
leftFooter.appendChild(footerBrand);
leftFooter.appendChild(footerNav);
//Append left footer section to the footer
footer.appendChild(leftFooter);
//create right footer section
const rightFooter = document.createElement('section');
rightFooter.id = 'rightFoot';
//create  subscribe text
const subText = document.createElement('p');
subText.textContent = "Get our latest innovative news";
//create subscribe div
const subDiv = document.createElement('div');
subDiv.id = 'subscribe';
//create footer subscribe input
const subInput = document.createElement('input');
subInput.type = 'email';
subInput.placeholder = 'Email Address';
subInput.id = 'subEmail';
//create footer subscribe button
const subButton = document.createElement('div');
subButton.textContent = 'Subscribe';
subButton.id = 'subButton';
//Append sub input and button to it Div
subDiv.appendChild(subInput);
subDiv.appendChild(subButton);
//create copyright text
const copyright = document.createElement('div');
copyright.innerHTML = `&#169; Copyright <span>${new Date().getFullYear()}</span>`;
//create reserved right text
const reserved = document.createElement('p');
reserved.innerHTML = 'All rights reserved. A <span>sabi</span>Devs initiative';
//Append children to right footer element
rightFooter.appendChild(subText);
rightFooter.appendChild(subDiv);
rightFooter.appendChild(copyright);
rightFooter.appendChild(reserved);
//Append right footer to footer
footer.appendChild(rightFooter);
body.appendChild(footer);
};


/***/ }),

/***/ "./src/SCRIPTS/modules/header.js":
/*!***************************************!*\
  !*** ./src/SCRIPTS/modules/header.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderHeader: () => (/* binding */ renderHeader)
/* harmony export */ });
/* harmony import */ var _landing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing.js */ "./src/SCRIPTS/modules/landing.js");
/* harmony import */ var _RESOURCES_images_elaBoratelogo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../RESOURCES/images/elaBoratelogo.png */ "./src/RESOURCES/images/elaBoratelogo.png");
/* harmony import */ var _RESOURCES_images_search_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../RESOURCES/images/search-icon.png */ "./src/RESOURCES/images/search-icon.png");



const renderHeader = (body) => {
//create header element
const header = document.createElement('header');
//create icon div
const iconDiv = (0,_landing_js__WEBPACK_IMPORTED_MODULE_0__.createBrand)(_RESOURCES_images_elaBoratelogo_png__WEBPACK_IMPORTED_MODULE_1__);
iconDiv.id = 'iconDiv';
//create navBar
const navBox = (0,_landing_js__WEBPACK_IMPORTED_MODULE_0__.createNavBar)();
navBox.classList.add('nav'); 
//create search Box div
const searchDiv = document.createElement('div');
searchDiv.id = 'searchBox';
//create search Icon
const searchIcon = document.createElement('img');
searchIcon.src =  _RESOURCES_images_search_icon_png__WEBPACK_IMPORTED_MODULE_2__;
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
//Add header to body tag
body.appendChild(header);
}


/***/ }),

/***/ "./src/SCRIPTS/modules/landing.js":
/*!****************************************!*\
  !*** ./src/SCRIPTS/modules/landing.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   carousel: () => (/* binding */ carousel),
/* harmony export */   createBrand: () => (/* binding */ createBrand),
/* harmony export */   createDept: () => (/* binding */ createDept),
/* harmony export */   createNavBar: () => (/* binding */ createNavBar),
/* harmony export */   createNavLink: () => (/* binding */ createNavLink),
/* harmony export */   createService: () => (/* binding */ createService),
/* harmony export */   generateHeroSection: () => (/* binding */ generateHeroSection)
/* harmony export */ });
/* harmony import */ var _RESOURCES_images_cpe200_students_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../RESOURCES/images/cpe200-students.png */ "./src/RESOURCES/images/cpe200-students.png");
/* harmony import */ var _RESOURCES_images_persis_engr_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../RESOURCES/images/persis-engr.png */ "./src/RESOURCES/images/persis-engr.png");
/* harmony import */ var _RESOURCES_images_engr_student_200L_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../RESOURCES/images/engr-student-200L.png */ "./src/RESOURCES/images/engr-student-200L.png");
/* harmony import */ var _RESOURCES_images_dontekk_engr_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../RESOURCES/images/dontekk-engr.png */ "./src/RESOURCES/images/dontekk-engr.png");
/* harmony import */ var _RESOURCES_images_cpe180_females_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../RESOURCES/images/cpe180-females.png */ "./src/RESOURCES/images/cpe180-females.png");
/* harmony import */ var _RESOURCES_images_eee210_girls_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../RESOURCES/images/eee210-girls.png */ "./src/RESOURCES/images/eee210-girls.png");
//import images






//A function that creates nav links and returns the div
const createNavLink = (ref, text) => {
    const div = document.createElement('div');
    const link = document.createElement('a');
    const linkText = document.createElement('p');
    linkText.textContent = text;
    link.appendChild(linkText);
    link.href = ref;
    div.appendChild(link);
    return div;
};
const createBrand = (logo, name = 'elaBorate') => {
    const div = document.createElement('div');
    //create logo icon
    const icon = document.createElement('img');
    icon.src = logo;
    div.appendChild(icon);
    //create brand name
    const brand = document.createElement('h1');
    brand.textContent = name;
    div.appendChild(brand);
    return div;
}
const createNavBar = () => {
    const div = document.createElement('nav');
    //create individual navLinks with imported function
    const aboutNav = createNavLink("#", "About");
    const reportNav = createNavLink("#", "Reports");
    const contactNav = createNavLink("#", "Contact Us");
    //Append navLinks to navBar
    div.appendChild(aboutNav);
    div.appendChild(reportNav);
    div.appendChild(contactNav);
    return div;
}
const generateHeroSection = (section) =>  {
    const heroContent = [
    {text: 'ELA made', word: 'Easy!!!',image: _RESOURCES_images_cpe200_students_png__WEBPACK_IMPORTED_MODULE_0__,class: 'single',inner: '#14213d',outer: '#fca311',call: 'GET STARTED'},
    {text: 'Lab Days?', word: 'A Breeze!', image: _RESOURCES_images_persis_engr_png__WEBPACK_IMPORTED_MODULE_1__, class: 'single', inner: '#000000', outer: '#fca311', call: 'CHOOSE US'},
    {text: 'Engineering Labs,', word: 'Simplified!!', image: _RESOURCES_images_engr_student_200L_png__WEBPACK_IMPORTED_MODULE_2__,class: 'group', inner: '#000000', outer: '#14213d', call: 'TAP IN'},
    {text: 'Don\'t Wing It,', word: 'Elaborate It!', image: _RESOURCES_images_dontekk_engr_png__WEBPACK_IMPORTED_MODULE_3__,class: 'single', inner:  '#000000', outer: '#e5e5e5', call: 'UNLEASH  POTENTIAL'},
    {text: 'Unlock Lab Secrets with,', word: 'Elaborate!!!', image: _RESOURCES_images_cpe180_females_png__WEBPACK_IMPORTED_MODULE_4__,class: 'group', inner: '#14213d', outer: '#e5e5e5', call: 'START NOW'},
    {text: 'Grades Soaring, Elaborate', word: 'Thank You!!', image: _RESOURCES_images_eee210_girls_png__WEBPACK_IMPORTED_MODULE_5__,class: 'single', inner: '#14213d', outer: '#000000', call: 'DIVE IN'},
];
    for(let i = 0; i < heroContent.length; i++){
        const heroDiv = document.createElement('div');
        const textContain = document.createElement('div');
        textContain.classList.add('container');
        const textDiv = document.createElement('div');
        textDiv.classList.add('textDiv');
        const heroText = document.createElement('div');
        heroText.classList.add('heroText');
        const heroSpan = document.createElement('div');
        heroSpan.classList.add('span');
        const heroImg = document.createElement('img');
        heroImg.classList.add(`${heroContent[i].class}`);
        const innerCircle = document.createElement('div');
        innerCircle.classList.add('innerCircle');
        const outerCircle = document.createElement('div');
        outerCircle.classList.add('outerCircle');
        const action = document.createElement('div');
        action.classList.add('callAction');
        heroText.textContent = heroContent[i].text;
        heroSpan.textContent = heroContent[i].word;
        heroImg.src = heroContent[i].image;
        innerCircle.style.background = heroContent[i].inner;
        outerCircle.style.background = heroContent[i].outer;
        action.textContent = heroContent[i].call;
        action.style.background = heroContent[i].inner;
        action.style.boxShadow = `5px 5px 1.5px 1px ${heroContent[i].outer}`;
        textDiv.appendChild(heroText);
        textDiv.appendChild(heroSpan);
        textContain.appendChild(textDiv);
        textContain.appendChild(action);
        heroDiv.appendChild(textContain);
        heroDiv.appendChild(heroImg);
        heroDiv.appendChild(innerCircle);
        heroDiv.appendChild(outerCircle);
        heroDiv.classList.toggle('heroSlide');
        section.appendChild(heroDiv);
    }
}
const carousel = () => {
    let count = 0;
    const showSlides = () => {
        let slide = document.getElementsByClassName('heroSlide');
        for(let i = 0; i < slide.length;  i++){
            slide[i].style.display = "none";
        }
        count++;
        if(count > slide.length){
            count = 1
        }
        slide[count - 1].style.display = 'grid';
        setTimeout(showSlides, 5000);
    }
    showSlides();
}
const createDept = (img, title, desc, level) => {
    const div = document.createElement('div');
    div.classList.add('deptBox');
    const image = document.createElement('img');
    image.src = img;
    const deptText = document.createElement('div');
    deptText.classList.add('deptText');
    const heading = document.createElement('h5');
    heading.textContent = title;
    const description = document.createElement('article');
    description.textContent = desc;
    const levels = document.createElement('div');
    levels.textContent = 'Level(s) covered: ' + level.toString();
    div.appendChild(image);
    deptText.appendChild(heading);
    deptText.appendChild(description);
    deptText.appendChild(levels);
    div.appendChild(deptText);
    return div;
};
const createService = (heading, body, action) => {
    const div = document.createElement('div');
    const head = document.createElement('h5');
    head.textContent = heading;
    const text = document.createElement('article');
    text.textContent = body;
    const button = document.createElement('div');
    button.classList.add('serveButton');
    button.textContent = action;
    div.appendChild(head);
    div.appendChild(text);
    div.appendChild(button);
    return div;
}


/***/ }),

/***/ "./src/SCRIPTS/modules/modal.js":
/*!**************************************!*\
  !*** ./src/SCRIPTS/modules/modal.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloseModal: () => (/* binding */ CloseModal),
/* harmony export */   OpenModal: () => (/* binding */ OpenModal),
/* harmony export */   createModal: () => (/* binding */ createModal)
/* harmony export */ });
/* harmony import */ var _RESOURCES_images_reportpage_stay_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../RESOURCES/images/reportpage/stay.png */ "./src/RESOURCES/images/reportpage/stay.png");
/* harmony import */ var _CSS_report_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../CSS/report.css */ "./src/CSS/report.css");

const sectionModal = document.createElement('div');
sectionModal.id = 'sectionModal';


const createModal= (body) =>{
    const modal = document.createElement('div');
    modal.classList.add('modal_bg');
    const modalLoaderBg = document.createElement('div');
    modalLoaderBg.classList.add('modal_loader_bg');
    const modalLoader = document.createElement('div');
    modalLoader.classList.add('modal_loader');
    modalLoaderBg.appendChild(modalLoader);
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal_content');
    modal.appendChild(modalContent);
    const ModalImage = document.createElement('div');
    ModalImage.classList.add('modal_image');
    const Image = document.createElement('img');
    Image.classList.add('image_modal');
    Image.src = _RESOURCES_images_reportpage_stay_png__WEBPACK_IMPORTED_MODULE_0__;
    ModalImage.appendChild(Image)
    modalContent.appendChild(ModalImage);
    const modalTexts = document.createElement('div');
    modalTexts.classList.add('modal_texts');
    const modalTexts1 = document.createElement('p');
    modalTexts1.classList.add('modal_main_text');
    modalTexts1.textContent = 'Tailor Your Experience Today!';
    modalTexts.appendChild(modalTexts1);
    modalContent.appendChild(modalTexts);
    const modalForm = document.createElement('div');
    modalForm.classList.add('modal_form');
    const formItself = document.createElement('form');
    formItself.classList.add('formitself');
    const LevelSelect = document.createElement('select');
    const label = document.createElement('label');
    label.textContent = 'Choose Your Level'; // Set label text
    LevelSelect.name = 'Level';
    const levelSelectDiv = document.createElement('div');
    levelSelectDiv.classList.add('level_select_div');
    levelSelectDiv.appendChild(LevelSelect);
    formItself.appendChild(levelSelectDiv);
    const options = ['Select your Level','200Level', '300Level', '400Level'];
    options.forEach(optionValue => {
    const option = document.createElement('option'); // Create option element
    option.textContent = optionValue; // Set option text
    option.value = optionValue; // Set option value
    LevelSelect.appendChild(option); // Append option to select element
    });
    const DeptSelect = document.createElement('select');
    const label2 = document.createElement('label');
    label2.textContent = 'Select Department'; // Set label text
    DeptSelect.name = 'Department';
    const DeptSelectDiv = document.createElement('div');
    DeptSelectDiv.classList.add('level_select_div');
    DeptSelectDiv.appendChild(DeptSelect);
    formItself.appendChild(DeptSelectDiv);
    // Create options
    const options2 = ['Select your Department','CPE', 'PRE', 'EEE', 'AGE', 'CVE', 'STE', 'PEE', 'MRE', 'MTE', 'IND', 'CHE','MEE'];
    // Loop through options and add them to the select element
    options2.forEach(optionValue => {
    const option = document.createElement('option'); // Create option element
    option.textContent = optionValue; // Set option text
    option.value = optionValue; // Set option value
    DeptSelect.appendChild(option); // Append option to select element
    });
    const formField = document.createElement('input');
    formField.type = 'email';
    formField.name = 'Email';
    formField.required = true;
    const UserEmail = formField.value;
    formField.placeholder = 'Enter Email';
    formField.classList.add('formField');
    formItself.id = 'emailForm';
    const formSubmit = document.createElement('button');
    formSubmit.type = 'submit';
    formSubmit.textContent = 'Submit';
    formSubmit.disabled = true;
    formSubmit.classList.add('formSubmit');
    formField.addEventListener('input', function() {
        const emailValue = formField.value.trim(); // Trimmed value of the email field
        const isValidEmail = formField.checkValidity(); // Check if the email field is valid
        formSubmit.disabled = !isValidEmail || emailValue === '';
        
        if(isValidEmail){
            formSubmit.classList.add('enabled');
        }
    });
    formItself.appendChild(formField);
    formItself.appendChild(formSubmit);
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyBQAC94J4esheTEGTTmc7vD44Gl8TsxtptLOU7Xnsx87IIvUjVGiHlgtHDmExvj0BV8Q/exec';
    formItself.addEventListener('submit', e => {
        e.preventDefault();
        formSubmit.disabled = true;
        modalLoaderBg.style.display = 'flex';
        let requestBody = new FormData(formItself);
        fetch(scriptURL, { method: 'POST', body: requestBody })
        .then(response => {
            if (response.ok) {
                CloseModal();
                localStorage.setItem('Subscribed', 'true');
                localStorage.setItem('User', `${UserEmail}`);


            } else {
                throw new Error('Network response was not ok.');
            }
            formSubmit.disabled = false;
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error! Please try again later.');
            formSubmit.disabled = false;
        });
    });
    modalForm.appendChild(formItself);
    modalContent.appendChild(modalForm);
    modalContent.appendChild(modalLoaderBg);
    const modalSafety = document.createElement('div');
    modalSafety.classList.add('modal_safety');
    const modalSafetyText = document.createElement('p');
    modalSafetyText.textContent= 'Enter your email, select your level and department to unlock personalized features and receive exclusive newsletters.'
    modalSafetyText.classList.add('modal_safety_text');
    modalSafety.appendChild(modalSafetyText);
    modalContent.appendChild(modalSafety);
    sectionModal.appendChild(modal);
    sectionModal.classList.add('modal');
    sectionModal.classList.add('hidden');
    body.appendChild(sectionModal);
}

function OpenModal(){
    setTimeout(() => {
        sectionModal.style.display = 'block';
    }, 5000);
    
    
}
function CloseModal(){
    sectionModal.style.display = 'none';
}


/***/ }),

/***/ "./src/RESOURCES/images/cpe180-females.png":
/*!*************************************************!*\
  !*** ./src/RESOURCES/images/cpe180-females.png ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "/asset/images/df13175fe258bff6b0a4.png";

/***/ }),

/***/ "./src/RESOURCES/images/cpe200-students.png":
/*!**************************************************!*\
  !*** ./src/RESOURCES/images/cpe200-students.png ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/asset/images/2d44d89b66d005841d48.png";

/***/ }),

/***/ "./src/RESOURCES/images/dontekk-engr.png":
/*!***********************************************!*\
  !*** ./src/RESOURCES/images/dontekk-engr.png ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "/asset/images/1d2ff3ef095565745892.png";

/***/ }),

/***/ "./src/RESOURCES/images/eee210-girls.png":
/*!***********************************************!*\
  !*** ./src/RESOURCES/images/eee210-girls.png ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "/asset/images/e1399a8b062d382eade6.png";

/***/ }),

/***/ "./src/RESOURCES/images/elaBoratelogo.png":
/*!************************************************!*\
  !*** ./src/RESOURCES/images/elaBoratelogo.png ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/asset/images/89c558426b41fccd73cd.png";

/***/ }),

/***/ "./src/RESOURCES/images/elaborate-footer-logo.png":
/*!********************************************************!*\
  !*** ./src/RESOURCES/images/elaborate-footer-logo.png ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/asset/images/89c7f3e4da4391052d31.png";

/***/ }),

/***/ "./src/RESOURCES/images/engr-student-200L.png":
/*!****************************************************!*\
  !*** ./src/RESOURCES/images/engr-student-200L.png ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "/asset/images/a7e5b3d68f8dcf41856b.png";

/***/ }),

/***/ "./src/RESOURCES/images/persis-engr.png":
/*!**********************************************!*\
  !*** ./src/RESOURCES/images/persis-engr.png ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "/asset/images/a8a01d448238b0fd69d3.png";

/***/ }),

/***/ "./src/RESOURCES/images/reportpage/stay.png":
/*!**************************************************!*\
  !*** ./src/RESOURCES/images/reportpage/stay.png ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "/asset/images/588c0db71967388ac52a.png";

/***/ }),

/***/ "./src/RESOURCES/images/search-icon.png":
/*!**********************************************!*\
  !*** ./src/RESOURCES/images/search-icon.png ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "/asset/images/ecb34bb8fa4ecc3a4316.png";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX0NTU19zdHlsZV9jc3Mtc3JjX1NDUklQVFNfbW9kdWxlc19mb290ZXJfanMtc3JjX1NDUklQVFNfbW9kdWxlc19oZWFkZXJfanMtc3JjX1NDUklQVFNfbW9kLTc5MzY0Zi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0F1RDtBQUNjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix3REFBVyxDQUFDLHdFQUFLO0FBQ3JDO0FBQ0Esa0JBQWtCLHlEQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsa0JBQWtCLHlCQUF5QjtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEdUQ7QUFDSztBQUNBO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHdEQUFXLENBQUMsZ0VBQUk7QUFDaEM7QUFDQTtBQUNBLGVBQWUseURBQVk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDhEQUFNO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUM4RDtBQUNKO0FBQ007QUFDTDtBQUNFO0FBQ0Y7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHlDQUF5QyxrRUFBSSx1RUFBdUU7QUFDekgsS0FBSyw2Q0FBNkMsOERBQUkseUVBQXlFO0FBQy9ILEtBQUssd0RBQXdELG9FQUFJLG9FQUFvRTtBQUNySSxLQUFLLHVEQUF1RCwrREFBSSxrRkFBa0Y7QUFDbEosS0FBSywrREFBK0QsaUVBQUksdUVBQXVFO0FBQy9JLEtBQUssK0RBQStELCtEQUFJLHNFQUFzRTtBQUM5STtBQUNBLG1CQUFtQix3QkFBd0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMscUJBQXFCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUlrRTtBQUNsRTtBQUNBO0FBQzhCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0VBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JELHNDQUFzQztBQUN0QyxnQ0FBZ0M7QUFDaEMscUNBQXFDO0FBQ3JDLEtBQUs7QUFDTDtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRCxzQ0FBc0M7QUFDdEMsZ0NBQWdDO0FBQ2hDLG9DQUFvQztBQUNwQyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRCx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG1DQUFtQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxVQUFVOzs7QUFHMUQsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGFib3JhdGUvLi9zcmMvQ1NTL3JlcG9ydC5jc3M/ZGE4NSIsIndlYnBhY2s6Ly9lbGFib3JhdGUvLi9zcmMvQ1NTL3N0eWxlLmNzcz8wNTgwIiwid2VicGFjazovL2VsYWJvcmF0ZS8uL3NyYy9TQ1JJUFRTL21vZHVsZXMvZm9vdGVyLmpzIiwid2VicGFjazovL2VsYWJvcmF0ZS8uL3NyYy9TQ1JJUFRTL21vZHVsZXMvaGVhZGVyLmpzIiwid2VicGFjazovL2VsYWJvcmF0ZS8uL3NyYy9TQ1JJUFRTL21vZHVsZXMvbGFuZGluZy5qcyIsIndlYnBhY2s6Ly9lbGFib3JhdGUvLi9zcmMvU0NSSVBUUy9tb2R1bGVzL21vZGFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7Y3JlYXRlTmF2QmFyLCBjcmVhdGVCcmFuZH0gZnJvbSAnLi9sYW5kaW5nLmpzJztcbmltcG9ydCBsb2dvMSBmcm9tICcuLi8uLi9SRVNPVVJDRVMvaW1hZ2VzL2VsYWJvcmF0ZS1mb290ZXItbG9nby5wbmcnO1xuY29uc3QgcmVuZGVyRm9vdGVyID0gKGJvZHkpID0+IHtcbi8vY3JlYXRlIGZvb3RlclxuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4vL2NyZWF0ZSBsZWZ0IGZvb3RlciBzZWN0aW9uXG5jb25zdCBsZWZ0Rm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuLy9jcmVhdGUgZm9vdGVyIGJyYW5kXG5jb25zdCBmb290ZXJCcmFuZCA9IGNyZWF0ZUJyYW5kKGxvZ28xLCAnJyk7XG4vL2NyZWF0ZSBmb290ZXIgbmF2aWdhdGlvbiBsaW5rc1xuY29uc3QgZm9vdGVyTmF2ID0gY3JlYXRlTmF2QmFyKCk7XG5mb290ZXJOYXYuaWQgPSAnZm9vdGVyTmF2Jztcbi8vYXBwZW5kIGNoaWxkcmVuIHRvIGxlZnRGb290ZXJcbmxlZnRGb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyQnJhbmQpO1xubGVmdEZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJOYXYpO1xuLy9BcHBlbmQgbGVmdCBmb290ZXIgc2VjdGlvbiB0byB0aGUgZm9vdGVyXG5mb290ZXIuYXBwZW5kQ2hpbGQobGVmdEZvb3Rlcik7XG4vL2NyZWF0ZSByaWdodCBmb290ZXIgc2VjdGlvblxuY29uc3QgcmlnaHRGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5yaWdodEZvb3Rlci5pZCA9ICdyaWdodEZvb3QnO1xuLy9jcmVhdGUgIHN1YnNjcmliZSB0ZXh0XG5jb25zdCBzdWJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuc3ViVGV4dC50ZXh0Q29udGVudCA9IFwiR2V0IG91ciBsYXRlc3QgaW5ub3ZhdGl2ZSBuZXdzXCI7XG4vL2NyZWF0ZSBzdWJzY3JpYmUgZGl2XG5jb25zdCBzdWJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnN1YkRpdi5pZCA9ICdzdWJzY3JpYmUnO1xuLy9jcmVhdGUgZm9vdGVyIHN1YnNjcmliZSBpbnB1dFxuY29uc3Qgc3ViSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuc3ViSW5wdXQudHlwZSA9ICdlbWFpbCc7XG5zdWJJbnB1dC5wbGFjZWhvbGRlciA9ICdFbWFpbCBBZGRyZXNzJztcbnN1YklucHV0LmlkID0gJ3N1YkVtYWlsJztcbi8vY3JlYXRlIGZvb3RlciBzdWJzY3JpYmUgYnV0dG9uXG5jb25zdCBzdWJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnN1YkJ1dHRvbi50ZXh0Q29udGVudCA9ICdTdWJzY3JpYmUnO1xuc3ViQnV0dG9uLmlkID0gJ3N1YkJ1dHRvbic7XG4vL0FwcGVuZCBzdWIgaW5wdXQgYW5kIGJ1dHRvbiB0byBpdCBEaXZcbnN1YkRpdi5hcHBlbmRDaGlsZChzdWJJbnB1dCk7XG5zdWJEaXYuYXBwZW5kQ2hpbGQoc3ViQnV0dG9uKTtcbi8vY3JlYXRlIGNvcHlyaWdodCB0ZXh0XG5jb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvcHlyaWdodC5pbm5lckhUTUwgPSBgJiMxNjk7IENvcHlyaWdodCA8c3Bhbj4ke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX08L3NwYW4+YDtcbi8vY3JlYXRlIHJlc2VydmVkIHJpZ2h0IHRleHRcbmNvbnN0IHJlc2VydmVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xucmVzZXJ2ZWQuaW5uZXJIVE1MID0gJ0FsbCByaWdodHMgcmVzZXJ2ZWQuIEEgPHNwYW4+c2FiaTwvc3Bhbj5EZXZzIGluaXRpYXRpdmUnO1xuLy9BcHBlbmQgY2hpbGRyZW4gdG8gcmlnaHQgZm9vdGVyIGVsZW1lbnRcbnJpZ2h0Rm9vdGVyLmFwcGVuZENoaWxkKHN1YlRleHQpO1xucmlnaHRGb290ZXIuYXBwZW5kQ2hpbGQoc3ViRGl2KTtcbnJpZ2h0Rm9vdGVyLmFwcGVuZENoaWxkKGNvcHlyaWdodCk7XG5yaWdodEZvb3Rlci5hcHBlbmRDaGlsZChyZXNlcnZlZCk7XG4vL0FwcGVuZCByaWdodCBmb290ZXIgdG8gZm9vdGVyXG5mb290ZXIuYXBwZW5kQ2hpbGQocmlnaHRGb290ZXIpO1xuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xufTtcbmV4cG9ydCB7cmVuZGVyRm9vdGVyfTsiLCJpbXBvcnQge2NyZWF0ZU5hdkJhciwgY3JlYXRlQnJhbmR9IGZyb20gJy4vbGFuZGluZy5qcyc7XG5pbXBvcnQgbG9nbyBmcm9tICcuLi8uLi9SRVNPVVJDRVMvaW1hZ2VzL2VsYUJvcmF0ZWxvZ28ucG5nJztcbmltcG9ydCBzZWFyY2ggZnJvbSAnLi4vLi4vUkVTT1VSQ0VTL2ltYWdlcy9zZWFyY2gtaWNvbi5wbmcnO1xuY29uc3QgcmVuZGVySGVhZGVyID0gKGJvZHkpID0+IHtcbi8vY3JlYXRlIGhlYWRlciBlbGVtZW50XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbi8vY3JlYXRlIGljb24gZGl2XG5jb25zdCBpY29uRGl2ID0gY3JlYXRlQnJhbmQobG9nbyk7XG5pY29uRGl2LmlkID0gJ2ljb25EaXYnO1xuLy9jcmVhdGUgbmF2QmFyXG5jb25zdCBuYXZCb3ggPSBjcmVhdGVOYXZCYXIoKTtcbm5hdkJveC5jbGFzc0xpc3QuYWRkKCduYXYnKTsgXG4vL2NyZWF0ZSBzZWFyY2ggQm94IGRpdlxuY29uc3Qgc2VhcmNoRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zZWFyY2hEaXYuaWQgPSAnc2VhcmNoQm94Jztcbi8vY3JlYXRlIHNlYXJjaCBJY29uXG5jb25zdCBzZWFyY2hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5zZWFyY2hJY29uLnNyYyA9ICBzZWFyY2g7XG4vL2NyZWF0ZSBzZWFyY2ggaW5wdXQgZmllbGRcbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbnNlYXJjaElucHV0LnR5cGUgPSBcInRleHRcIjtcbnNlYXJjaElucHV0LmlkID0gXCJzZWFyY2hJbnB1dFwiO1xuLy9BZGQgc2VhcmNoQm94IGl0ZW1zIHRvIHBhcmVudFxuc2VhcmNoRGl2LmFwcGVuZENoaWxkKHNlYXJjaElucHV0KTtcbnNlYXJjaERpdi5hcHBlbmRDaGlsZChzZWFyY2hJY29uKTtcbi8vQWRkIGhlYWRlciBpdGVtcyB0byBoZWFkZXJcbmhlYWRlci5hcHBlbmRDaGlsZChpY29uRGl2KTtcbmhlYWRlci5hcHBlbmRDaGlsZChuYXZCb3gpO1xuaGVhZGVyLmFwcGVuZENoaWxkKHNlYXJjaERpdik7XG4vL0FkZCBoZWFkZXIgdG8gYm9keSB0YWdcbmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbn1cbmV4cG9ydCB7cmVuZGVySGVhZGVyfTsiLCIvL2ltcG9ydCBpbWFnZXNcbmltcG9ydCBpbWcxIGZyb20gJy4uLy4uL1JFU09VUkNFUy9pbWFnZXMvY3BlMjAwLXN0dWRlbnRzLnBuZyc7XG5pbXBvcnQgaW1nMiBmcm9tICcuLi8uLi9SRVNPVVJDRVMvaW1hZ2VzL3BlcnNpcy1lbmdyLnBuZyc7XG5pbXBvcnQgaW1nMyBmcm9tICcuLi8uLi9SRVNPVVJDRVMvaW1hZ2VzL2VuZ3Itc3R1ZGVudC0yMDBMLnBuZyc7XG5pbXBvcnQgaW1nNCBmcm9tICcuLi8uLi9SRVNPVVJDRVMvaW1hZ2VzL2RvbnRla2stZW5nci5wbmcnO1xuaW1wb3J0IGltZzUgZnJvbSAnLi4vLi4vUkVTT1VSQ0VTL2ltYWdlcy9jcGUxODAtZmVtYWxlcy5wbmcnO1xuaW1wb3J0IGltZzYgZnJvbSAnLi4vLi4vUkVTT1VSQ0VTL2ltYWdlcy9lZWUyMTAtZ2lybHMucG5nJztcbi8vQSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgbmF2IGxpbmtzIGFuZCByZXR1cm5zIHRoZSBkaXZcbmNvbnN0IGNyZWF0ZU5hdkxpbmsgPSAocmVmLCB0ZXh0KSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb25zdCBsaW5rVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsaW5rVGV4dC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgbGluay5hcHBlbmRDaGlsZChsaW5rVGV4dCk7XG4gICAgbGluay5ocmVmID0gcmVmO1xuICAgIGRpdi5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICByZXR1cm4gZGl2O1xufTtcbmNvbnN0IGNyZWF0ZUJyYW5kID0gKGxvZ28sIG5hbWUgPSAnZWxhQm9yYXRlJykgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIC8vY3JlYXRlIGxvZ28gaWNvblxuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpY29uLnNyYyA9IGxvZ287XG4gICAgZGl2LmFwcGVuZENoaWxkKGljb24pO1xuICAgIC8vY3JlYXRlIGJyYW5kIG5hbWVcbiAgICBjb25zdCBicmFuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgYnJhbmQudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIGRpdi5hcHBlbmRDaGlsZChicmFuZCk7XG4gICAgcmV0dXJuIGRpdjtcbn1cbmNvbnN0IGNyZWF0ZU5hdkJhciA9ICgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICAvL2NyZWF0ZSBpbmRpdmlkdWFsIG5hdkxpbmtzIHdpdGggaW1wb3J0ZWQgZnVuY3Rpb25cbiAgICBjb25zdCBhYm91dE5hdiA9IGNyZWF0ZU5hdkxpbmsoXCIjXCIsIFwiQWJvdXRcIik7XG4gICAgY29uc3QgcmVwb3J0TmF2ID0gY3JlYXRlTmF2TGluayhcIiNcIiwgXCJSZXBvcnRzXCIpO1xuICAgIGNvbnN0IGNvbnRhY3ROYXYgPSBjcmVhdGVOYXZMaW5rKFwiI1wiLCBcIkNvbnRhY3QgVXNcIik7XG4gICAgLy9BcHBlbmQgbmF2TGlua3MgdG8gbmF2QmFyXG4gICAgZGl2LmFwcGVuZENoaWxkKGFib3V0TmF2KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQocmVwb3J0TmF2KTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY29udGFjdE5hdik7XG4gICAgcmV0dXJuIGRpdjtcbn1cbmNvbnN0IGdlbmVyYXRlSGVyb1NlY3Rpb24gPSAoc2VjdGlvbikgPT4gIHtcbiAgICBjb25zdCBoZXJvQ29udGVudCA9IFtcbiAgICB7dGV4dDogJ0VMQSBtYWRlJywgd29yZDogJ0Vhc3khISEnLGltYWdlOiBpbWcxLGNsYXNzOiAnc2luZ2xlJyxpbm5lcjogJyMxNDIxM2QnLG91dGVyOiAnI2ZjYTMxMScsY2FsbDogJ0dFVCBTVEFSVEVEJ30sXG4gICAge3RleHQ6ICdMYWIgRGF5cz8nLCB3b3JkOiAnQSBCcmVlemUhJywgaW1hZ2U6IGltZzIsIGNsYXNzOiAnc2luZ2xlJywgaW5uZXI6ICcjMDAwMDAwJywgb3V0ZXI6ICcjZmNhMzExJywgY2FsbDogJ0NIT09TRSBVUyd9LFxuICAgIHt0ZXh0OiAnRW5naW5lZXJpbmcgTGFicywnLCB3b3JkOiAnU2ltcGxpZmllZCEhJywgaW1hZ2U6IGltZzMsY2xhc3M6ICdncm91cCcsIGlubmVyOiAnIzAwMDAwMCcsIG91dGVyOiAnIzE0MjEzZCcsIGNhbGw6ICdUQVAgSU4nfSxcbiAgICB7dGV4dDogJ0RvblxcJ3QgV2luZyBJdCwnLCB3b3JkOiAnRWxhYm9yYXRlIEl0IScsIGltYWdlOiBpbWc0LGNsYXNzOiAnc2luZ2xlJywgaW5uZXI6ICAnIzAwMDAwMCcsIG91dGVyOiAnI2U1ZTVlNScsIGNhbGw6ICdVTkxFQVNIICBQT1RFTlRJQUwnfSxcbiAgICB7dGV4dDogJ1VubG9jayBMYWIgU2VjcmV0cyB3aXRoLCcsIHdvcmQ6ICdFbGFib3JhdGUhISEnLCBpbWFnZTogaW1nNSxjbGFzczogJ2dyb3VwJywgaW5uZXI6ICcjMTQyMTNkJywgb3V0ZXI6ICcjZTVlNWU1JywgY2FsbDogJ1NUQVJUIE5PVyd9LFxuICAgIHt0ZXh0OiAnR3JhZGVzIFNvYXJpbmcsIEVsYWJvcmF0ZScsIHdvcmQ6ICdUaGFuayBZb3UhIScsIGltYWdlOiBpbWc2LGNsYXNzOiAnc2luZ2xlJywgaW5uZXI6ICcjMTQyMTNkJywgb3V0ZXI6ICcjMDAwMDAwJywgY2FsbDogJ0RJVkUgSU4nfSxcbl07XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGhlcm9Db250ZW50Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgaGVyb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB0ZXh0Q29udGFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZXh0Q29udGFpbi5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICAgICAgY29uc3QgdGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZXh0RGl2LmNsYXNzTGlzdC5hZGQoJ3RleHREaXYnKTtcbiAgICAgICAgY29uc3QgaGVyb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGVyb1RleHQuY2xhc3NMaXN0LmFkZCgnaGVyb1RleHQnKTtcbiAgICAgICAgY29uc3QgaGVyb1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGVyb1NwYW4uY2xhc3NMaXN0LmFkZCgnc3BhbicpO1xuICAgICAgICBjb25zdCBoZXJvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGhlcm9JbWcuY2xhc3NMaXN0LmFkZChgJHtoZXJvQ29udGVudFtpXS5jbGFzc31gKTtcbiAgICAgICAgY29uc3QgaW5uZXJDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaW5uZXJDaXJjbGUuY2xhc3NMaXN0LmFkZCgnaW5uZXJDaXJjbGUnKTtcbiAgICAgICAgY29uc3Qgb3V0ZXJDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgb3V0ZXJDaXJjbGUuY2xhc3NMaXN0LmFkZCgnb3V0ZXJDaXJjbGUnKTtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFjdGlvbi5jbGFzc0xpc3QuYWRkKCdjYWxsQWN0aW9uJyk7XG4gICAgICAgIGhlcm9UZXh0LnRleHRDb250ZW50ID0gaGVyb0NvbnRlbnRbaV0udGV4dDtcbiAgICAgICAgaGVyb1NwYW4udGV4dENvbnRlbnQgPSBoZXJvQ29udGVudFtpXS53b3JkO1xuICAgICAgICBoZXJvSW1nLnNyYyA9IGhlcm9Db250ZW50W2ldLmltYWdlO1xuICAgICAgICBpbm5lckNpcmNsZS5zdHlsZS5iYWNrZ3JvdW5kID0gaGVyb0NvbnRlbnRbaV0uaW5uZXI7XG4gICAgICAgIG91dGVyQ2lyY2xlLnN0eWxlLmJhY2tncm91bmQgPSBoZXJvQ29udGVudFtpXS5vdXRlcjtcbiAgICAgICAgYWN0aW9uLnRleHRDb250ZW50ID0gaGVyb0NvbnRlbnRbaV0uY2FsbDtcbiAgICAgICAgYWN0aW9uLnN0eWxlLmJhY2tncm91bmQgPSBoZXJvQ29udGVudFtpXS5pbm5lcjtcbiAgICAgICAgYWN0aW9uLnN0eWxlLmJveFNoYWRvdyA9IGA1cHggNXB4IDEuNXB4IDFweCAke2hlcm9Db250ZW50W2ldLm91dGVyfWA7XG4gICAgICAgIHRleHREaXYuYXBwZW5kQ2hpbGQoaGVyb1RleHQpO1xuICAgICAgICB0ZXh0RGl2LmFwcGVuZENoaWxkKGhlcm9TcGFuKTtcbiAgICAgICAgdGV4dENvbnRhaW4uYXBwZW5kQ2hpbGQodGV4dERpdik7XG4gICAgICAgIHRleHRDb250YWluLmFwcGVuZENoaWxkKGFjdGlvbik7XG4gICAgICAgIGhlcm9EaXYuYXBwZW5kQ2hpbGQodGV4dENvbnRhaW4pO1xuICAgICAgICBoZXJvRGl2LmFwcGVuZENoaWxkKGhlcm9JbWcpO1xuICAgICAgICBoZXJvRGl2LmFwcGVuZENoaWxkKGlubmVyQ2lyY2xlKTtcbiAgICAgICAgaGVyb0Rpdi5hcHBlbmRDaGlsZChvdXRlckNpcmNsZSk7XG4gICAgICAgIGhlcm9EaXYuY2xhc3NMaXN0LnRvZ2dsZSgnaGVyb1NsaWRlJyk7XG4gICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaGVyb0Rpdik7XG4gICAgfVxufVxuY29uc3QgY2Fyb3VzZWwgPSAoKSA9PiB7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBjb25zdCBzaG93U2xpZGVzID0gKCkgPT4ge1xuICAgICAgICBsZXQgc2xpZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZXJvU2xpZGUnKTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNsaWRlLmxlbmd0aDsgIGkrKyl7XG4gICAgICAgICAgICBzbGlkZVtpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICAgICAgY291bnQrKztcbiAgICAgICAgaWYoY291bnQgPiBzbGlkZS5sZW5ndGgpe1xuICAgICAgICAgICAgY291bnQgPSAxXG4gICAgICAgIH1cbiAgICAgICAgc2xpZGVbY291bnQgLSAxXS5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICAgICAgICBzZXRUaW1lb3V0KHNob3dTbGlkZXMsIDUwMDApO1xuICAgIH1cbiAgICBzaG93U2xpZGVzKCk7XG59XG5jb25zdCBjcmVhdGVEZXB0ID0gKGltZywgdGl0bGUsIGRlc2MsIGxldmVsKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2RlcHRCb3gnKTtcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlLnNyYyA9IGltZztcbiAgICBjb25zdCBkZXB0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlcHRUZXh0LmNsYXNzTGlzdC5hZGQoJ2RlcHRUZXh0Jyk7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzYztcbiAgICBjb25zdCBsZXZlbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXZlbHMudGV4dENvbnRlbnQgPSAnTGV2ZWwocykgY292ZXJlZDogJyArIGxldmVsLnRvU3RyaW5nKCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICBkZXB0VGV4dC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICBkZXB0VGV4dC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgZGVwdFRleHQuYXBwZW5kQ2hpbGQobGV2ZWxzKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZGVwdFRleHQpO1xuICAgIHJldHVybiBkaXY7XG59O1xuY29uc3QgY3JlYXRlU2VydmljZSA9IChoZWFkaW5nLCBib2R5LCBhY3Rpb24pID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICBoZWFkLnRleHRDb250ZW50ID0gaGVhZGluZztcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSBib2R5O1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZXJ2ZUJ1dHRvbicpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGFjdGlvbjtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaGVhZCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHRleHQpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIHJldHVybiBkaXY7XG59XG5leHBvcnQge2NyZWF0ZU5hdkxpbmssIGdlbmVyYXRlSGVyb1NlY3Rpb24sIGNhcm91c2VsLCBjcmVhdGVEZXB0LCBjcmVhdGVTZXJ2aWNlLCBjcmVhdGVCcmFuZCwgY3JlYXRlTmF2QmFyfTsiLCJpbXBvcnQgSW1nTW9kYWwgZnJvbSAnLi4vLi4vUkVTT1VSQ0VTL2ltYWdlcy9yZXBvcnRwYWdlL3N0YXkucG5nJztcbmNvbnN0IHNlY3Rpb25Nb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc2VjdGlvbk1vZGFsLmlkID0gJ3NlY3Rpb25Nb2RhbCc7XG5pbXBvcnQgJy4uLy4uL0NTUy9yZXBvcnQuY3NzJztcblxuY29uc3QgY3JlYXRlTW9kYWw9IChib2R5KSA9PntcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsX2JnJyk7XG4gICAgY29uc3QgbW9kYWxMb2FkZXJCZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsTG9hZGVyQmcuY2xhc3NMaXN0LmFkZCgnbW9kYWxfbG9hZGVyX2JnJyk7XG4gICAgY29uc3QgbW9kYWxMb2FkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbExvYWRlci5jbGFzc0xpc3QuYWRkKCdtb2RhbF9sb2FkZXInKTtcbiAgICBtb2RhbExvYWRlckJnLmFwcGVuZENoaWxkKG1vZGFsTG9hZGVyKTtcbiAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbW9kYWxfY29udGVudCcpO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudCk7XG4gICAgY29uc3QgTW9kYWxJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIE1vZGFsSW1hZ2UuY2xhc3NMaXN0LmFkZCgnbW9kYWxfaW1hZ2UnKTtcbiAgICBjb25zdCBJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIEltYWdlLmNsYXNzTGlzdC5hZGQoJ2ltYWdlX21vZGFsJyk7XG4gICAgSW1hZ2Uuc3JjID0gSW1nTW9kYWw7XG4gICAgTW9kYWxJbWFnZS5hcHBlbmRDaGlsZChJbWFnZSlcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoTW9kYWxJbWFnZSk7XG4gICAgY29uc3QgbW9kYWxUZXh0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsVGV4dHMuY2xhc3NMaXN0LmFkZCgnbW9kYWxfdGV4dHMnKTtcbiAgICBjb25zdCBtb2RhbFRleHRzMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtb2RhbFRleHRzMS5jbGFzc0xpc3QuYWRkKCdtb2RhbF9tYWluX3RleHQnKTtcbiAgICBtb2RhbFRleHRzMS50ZXh0Q29udGVudCA9ICdUYWlsb3IgWW91ciBFeHBlcmllbmNlIFRvZGF5ISc7XG4gICAgbW9kYWxUZXh0cy5hcHBlbmRDaGlsZChtb2RhbFRleHRzMSk7XG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsVGV4dHMpO1xuICAgIGNvbnN0IG1vZGFsRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsRm9ybS5jbGFzc0xpc3QuYWRkKCdtb2RhbF9mb3JtJyk7XG4gICAgY29uc3QgZm9ybUl0c2VsZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtSXRzZWxmLmNsYXNzTGlzdC5hZGQoJ2Zvcm1pdHNlbGYnKTtcbiAgICBjb25zdCBMZXZlbFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdDaG9vc2UgWW91ciBMZXZlbCc7IC8vIFNldCBsYWJlbCB0ZXh0XG4gICAgTGV2ZWxTZWxlY3QubmFtZSA9ICdMZXZlbCc7XG4gICAgY29uc3QgbGV2ZWxTZWxlY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXZlbFNlbGVjdERpdi5jbGFzc0xpc3QuYWRkKCdsZXZlbF9zZWxlY3RfZGl2Jyk7XG4gICAgbGV2ZWxTZWxlY3REaXYuYXBwZW5kQ2hpbGQoTGV2ZWxTZWxlY3QpO1xuICAgIGZvcm1JdHNlbGYuYXBwZW5kQ2hpbGQobGV2ZWxTZWxlY3REaXYpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSBbJ1NlbGVjdCB5b3VyIExldmVsJywnMjAwTGV2ZWwnLCAnMzAwTGV2ZWwnLCAnNDAwTGV2ZWwnXTtcbiAgICBvcHRpb25zLmZvckVhY2gob3B0aW9uVmFsdWUgPT4ge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpOyAvLyBDcmVhdGUgb3B0aW9uIGVsZW1lbnRcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb25WYWx1ZTsgLy8gU2V0IG9wdGlvbiB0ZXh0XG4gICAgb3B0aW9uLnZhbHVlID0gb3B0aW9uVmFsdWU7IC8vIFNldCBvcHRpb24gdmFsdWVcbiAgICBMZXZlbFNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pOyAvLyBBcHBlbmQgb3B0aW9uIHRvIHNlbGVjdCBlbGVtZW50XG4gICAgfSk7XG4gICAgY29uc3QgRGVwdFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIGNvbnN0IGxhYmVsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGFiZWwyLnRleHRDb250ZW50ID0gJ1NlbGVjdCBEZXBhcnRtZW50JzsgLy8gU2V0IGxhYmVsIHRleHRcbiAgICBEZXB0U2VsZWN0Lm5hbWUgPSAnRGVwYXJ0bWVudCc7XG4gICAgY29uc3QgRGVwdFNlbGVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIERlcHRTZWxlY3REaXYuY2xhc3NMaXN0LmFkZCgnbGV2ZWxfc2VsZWN0X2RpdicpO1xuICAgIERlcHRTZWxlY3REaXYuYXBwZW5kQ2hpbGQoRGVwdFNlbGVjdCk7XG4gICAgZm9ybUl0c2VsZi5hcHBlbmRDaGlsZChEZXB0U2VsZWN0RGl2KTtcbiAgICAvLyBDcmVhdGUgb3B0aW9uc1xuICAgIGNvbnN0IG9wdGlvbnMyID0gWydTZWxlY3QgeW91ciBEZXBhcnRtZW50JywnQ1BFJywgJ1BSRScsICdFRUUnLCAnQUdFJywgJ0NWRScsICdTVEUnLCAnUEVFJywgJ01SRScsICdNVEUnLCAnSU5EJywgJ0NIRScsJ01FRSddO1xuICAgIC8vIExvb3AgdGhyb3VnaCBvcHRpb25zIGFuZCBhZGQgdGhlbSB0byB0aGUgc2VsZWN0IGVsZW1lbnRcbiAgICBvcHRpb25zMi5mb3JFYWNoKG9wdGlvblZhbHVlID0+IHtcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTsgLy8gQ3JlYXRlIG9wdGlvbiBlbGVtZW50XG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gb3B0aW9uVmFsdWU7IC8vIFNldCBvcHRpb24gdGV4dFxuICAgIG9wdGlvbi52YWx1ZSA9IG9wdGlvblZhbHVlOyAvLyBTZXQgb3B0aW9uIHZhbHVlXG4gICAgRGVwdFNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pOyAvLyBBcHBlbmQgb3B0aW9uIHRvIHNlbGVjdCBlbGVtZW50XG4gICAgfSk7XG4gICAgY29uc3QgZm9ybUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBmb3JtRmllbGQudHlwZSA9ICdlbWFpbCc7XG4gICAgZm9ybUZpZWxkLm5hbWUgPSAnRW1haWwnO1xuICAgIGZvcm1GaWVsZC5yZXF1aXJlZCA9IHRydWU7XG4gICAgY29uc3QgVXNlckVtYWlsID0gZm9ybUZpZWxkLnZhbHVlO1xuICAgIGZvcm1GaWVsZC5wbGFjZWhvbGRlciA9ICdFbnRlciBFbWFpbCc7XG4gICAgZm9ybUZpZWxkLmNsYXNzTGlzdC5hZGQoJ2Zvcm1GaWVsZCcpO1xuICAgIGZvcm1JdHNlbGYuaWQgPSAnZW1haWxGb3JtJztcbiAgICBjb25zdCBmb3JtU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZm9ybVN1Ym1pdC50eXBlID0gJ3N1Ym1pdCc7XG4gICAgZm9ybVN1Ym1pdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICAgIGZvcm1TdWJtaXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgIGZvcm1TdWJtaXQuY2xhc3NMaXN0LmFkZCgnZm9ybVN1Ym1pdCcpO1xuICAgIGZvcm1GaWVsZC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBlbWFpbFZhbHVlID0gZm9ybUZpZWxkLnZhbHVlLnRyaW0oKTsgLy8gVHJpbW1lZCB2YWx1ZSBvZiB0aGUgZW1haWwgZmllbGRcbiAgICAgICAgY29uc3QgaXNWYWxpZEVtYWlsID0gZm9ybUZpZWxkLmNoZWNrVmFsaWRpdHkoKTsgLy8gQ2hlY2sgaWYgdGhlIGVtYWlsIGZpZWxkIGlzIHZhbGlkXG4gICAgICAgIGZvcm1TdWJtaXQuZGlzYWJsZWQgPSAhaXNWYWxpZEVtYWlsIHx8IGVtYWlsVmFsdWUgPT09ICcnO1xuICAgICAgICBcbiAgICAgICAgaWYoaXNWYWxpZEVtYWlsKXtcbiAgICAgICAgICAgIGZvcm1TdWJtaXQuY2xhc3NMaXN0LmFkZCgnZW5hYmxlZCcpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgZm9ybUl0c2VsZi5hcHBlbmRDaGlsZChmb3JtRmllbGQpO1xuICAgIGZvcm1JdHNlbGYuYXBwZW5kQ2hpbGQoZm9ybVN1Ym1pdCk7XG4gICAgY29uc3Qgc2NyaXB0VVJMID0gJ2h0dHBzOi8vc2NyaXB0Lmdvb2dsZS5jb20vbWFjcm9zL3MvQUtmeWNieUJRQUM5NEo0ZXNoZVRFR1RUbWM3dkQ0NEdsOFRzeHRwdExPVTdYbnN4ODdJSXZValZHaUhsZ3RIRG1FeHZqMEJWOFEvZXhlYyc7XG4gICAgZm9ybUl0c2VsZi5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBmb3JtU3VibWl0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgbW9kYWxMb2FkZXJCZy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICBsZXQgcmVxdWVzdEJvZHkgPSBuZXcgRm9ybURhdGEoZm9ybUl0c2VsZik7XG4gICAgICAgIGZldGNoKHNjcmlwdFVSTCwgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogcmVxdWVzdEJvZHkgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgQ2xvc2VNb2RhbCgpO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdTdWJzY3JpYmVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVXNlcicsIGAke1VzZXJFbWFpbH1gKTtcblxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9ybVN1Ym1pdC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xuICAgICAgICAgICAgYWxlcnQoJ0Vycm9yISBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicpO1xuICAgICAgICAgICAgZm9ybVN1Ym1pdC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBtb2RhbEZvcm0uYXBwZW5kQ2hpbGQoZm9ybUl0c2VsZik7XG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsRm9ybSk7XG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsTG9hZGVyQmcpO1xuICAgIGNvbnN0IG1vZGFsU2FmZXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9kYWxTYWZldHkuY2xhc3NMaXN0LmFkZCgnbW9kYWxfc2FmZXR5Jyk7XG4gICAgY29uc3QgbW9kYWxTYWZldHlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1vZGFsU2FmZXR5VGV4dC50ZXh0Q29udGVudD0gJ0VudGVyIHlvdXIgZW1haWwsIHNlbGVjdCB5b3VyIGxldmVsIGFuZCBkZXBhcnRtZW50IHRvIHVubG9jayBwZXJzb25hbGl6ZWQgZmVhdHVyZXMgYW5kIHJlY2VpdmUgZXhjbHVzaXZlIG5ld3NsZXR0ZXJzLidcbiAgICBtb2RhbFNhZmV0eVRleHQuY2xhc3NMaXN0LmFkZCgnbW9kYWxfc2FmZXR5X3RleHQnKTtcbiAgICBtb2RhbFNhZmV0eS5hcHBlbmRDaGlsZChtb2RhbFNhZmV0eVRleHQpO1xuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtb2RhbFNhZmV0eSk7XG4gICAgc2VjdGlvbk1vZGFsLmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgICBzZWN0aW9uTW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcbiAgICBzZWN0aW9uTW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChzZWN0aW9uTW9kYWwpO1xufVxuXG5mdW5jdGlvbiBPcGVuTW9kYWwoKXtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2VjdGlvbk1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0sIDUwMDApO1xuICAgIFxuICAgIFxufVxuZnVuY3Rpb24gQ2xvc2VNb2RhbCgpe1xuICAgIHNlY3Rpb25Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuZXhwb3J0e2NyZWF0ZU1vZGFsLCBPcGVuTW9kYWwsIENsb3NlTW9kYWx9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==