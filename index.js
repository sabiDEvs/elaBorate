"use strict";
(self["webpackChunkelaborate"] = self["webpackChunkelaborate"] || []).push([["index"],{

/***/ "./src/CSS/style.css":
/*!***************************!*\
  !*** ./src/CSS/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/SCRIPTS/modules/ai.js":
/*!***********************************!*\
  !*** ./src/SCRIPTS/modules/ai.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createChatGpt: () => (/* binding */ createChatGpt),
/* harmony export */   createGemini: () => (/* binding */ createGemini),
/* harmony export */   displayAI: () => (/* binding */ displayAI)
/* harmony export */ });
/* harmony import */ var _RESOURCES_images_google_gemini_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../RESOURCES/images/google-gemini-icon.png */ "./src/RESOURCES/images/google-gemini-icon.png");
/* harmony import */ var _RESOURCES_images_chat_gpt_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../RESOURCES/images/chat-gpt.png */ "./src/RESOURCES/images/chat-gpt.png");
/* harmony import */ var _RESOURCES_images_AI_chatbot_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../RESOURCES/images/AI-chatbot-icon.png */ "./src/RESOURCES/images/AI-chatbot-icon.png");



const displayAI = (body) => {
    const box = document.createElement('div');
    const gpt = document.createElement('div');
    gpt.classList.add('aiDiv');
    gpt.classList.add('popUp');
    gpt.addEventListener('click', () => {
        document.querySelector('#chatGPT').style.display = 'block';
        document.querySelector('#geminiAI').style.display = 'none';
    });
    const gptIcon = document.createElement('img');
    gptIcon.src = _RESOURCES_images_chat_gpt_png__WEBPACK_IMPORTED_MODULE_1__;
    gpt.appendChild(gptIcon);
    const ai = document.createElement('div');
    ai.classList.add('aiDiv');
    ai.addEventListener('click', () => {
        gpt.classList.toggle('active');
        gem.classList.toggle('active');
    });
    const aiIcon = document.createElement('img');
    aiIcon.src = _RESOURCES_images_AI_chatbot_icon_png__WEBPACK_IMPORTED_MODULE_2__;
    ai.appendChild(aiIcon);
    const gem = document.createElement('div');
    gem.classList.add('aiDiv');
    gem.classList.add('popUp');
    gem.addEventListener('click', () => {
        document.querySelector('#chatGPT').style.display = 'none';
        document.querySelector('#geminiAI').style.display = 'block';
    });
    const gemIcon = document.createElement('img');
    gemIcon.src = _RESOURCES_images_google_gemini_icon_png__WEBPACK_IMPORTED_MODULE_0__;
    gem.appendChild(gemIcon);
    box.id = 'ai';
    box.appendChild(gpt);
    box.appendChild(ai);
    box.appendChild(gem);
    body.appendChild(box);
};
const createAiBox = (url, title, ide) => {
    const div = document.createElement('div');
    const text = document.createElement('p');
    const close = document.createElement('div');
    const aiDiv = document.createElement('div');
    close.addEventListener('click', () => {
        document.querySelector('#chatGPT').style.display = 'none';
        document.querySelector('#geminiAI').style.display = 'none';
    });
    text.textContent = 'AI pop-up modal';
    text.classList.add('aiText');
    close.textContent = 'x';
    close.classList.add('close');
    const frame = document.createElement('iframe');
    frame.src = url;
    frame.name = title;
    frame.id = ide;
    div.id = title;
    aiDiv.classList.add('frameBox');
    aiDiv.appendChild(frame);
    div.appendChild(text);
    div.appendChild(close);
    div.appendChild(aiDiv);
    return div;
};
const createGemini = (body) => {
    const gemini = createAiBox("https://bot.orimon.ai/?tenantId=5b8a360c-710a-44f2-87bc-5f91fc211911&fullScreenBot=true" , 'geminiAI', 'gemini');
    body.appendChild(gemini);
};
const createChatGpt = (body) => {
    const chatGPT = createAiBox("https://www.chatbase.co/chatbot-iframe/MAsS7vd8yhlz4-rkhASBL", 'chatGPT', 'chatgpt');
    body.appendChild(chatGPT);
};


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


const renderFooter = (body, array) => {
//create footer
const footer = document.createElement('footer');
//create left footer section
const leftFooter = document.createElement('section');
//create footer brand
const footerBrand = (0,_landing_js__WEBPACK_IMPORTED_MODULE_0__.createBrand)(_RESOURCES_images_elaborate_footer_logo_png__WEBPACK_IMPORTED_MODULE_1__, '');
//create footer navigation links
const footerNav = (0,_landing_js__WEBPACK_IMPORTED_MODULE_0__.createNavBar)(array);
footerNav.id = 'footerNav';
//append children to leftFooter
leftFooter.appendChild(footerBrand);
leftFooter.appendChild(footerNav);
leftFooter.id = 'leftFoot';
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



const renderHeader = (body, array) => {
//create header element
const header = document.createElement('header');
//create icon div
const iconDiv = (0,_landing_js__WEBPACK_IMPORTED_MODULE_0__.createBrand)(_RESOURCES_images_elaBoratelogo_png__WEBPACK_IMPORTED_MODULE_1__);
iconDiv.id = 'iconDiv';
//create navBar
const navBox = (0,_landing_js__WEBPACK_IMPORTED_MODULE_0__.createNavBar)(array);
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
//create menu
(0,_landing_js__WEBPACK_IMPORTED_MODULE_0__.createMenu)(header);
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
/* harmony export */   createMenu: () => (/* binding */ createMenu),
/* harmony export */   createNavBar: () => (/* binding */ createNavBar),
/* harmony export */   createNavLink: () => (/* binding */ createNavLink),
/* harmony export */   createService: () => (/* binding */ createService),
/* harmony export */   generateHeroSection: () => (/* binding */ generateHeroSection)
/* harmony export */ });
/* harmony import */ var _RESOURCES_images_female_engr_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../RESOURCES/images/female-engr.jpg */ "./src/RESOURCES/images/female-engr.jpg");
/* harmony import */ var _RESOURCES_images_eee_engr_girls_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../RESOURCES/images/eee-engr-girls.jpg */ "./src/RESOURCES/images/eee-engr-girls.jpg");
/* harmony import */ var _RESOURCES_images_eee_male_engr_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../RESOURCES/images/eee-male-engr.jpg */ "./src/RESOURCES/images/eee-male-engr.jpg");
/* harmony import */ var _RESOURCES_images_cpe_engr_group_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../RESOURCES/images/cpe-engr-group.jpg */ "./src/RESOURCES/images/cpe-engr-group.jpg");
/* harmony import */ var _RESOURCES_images_mte_male_engr_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../RESOURCES/images/mte-male-engr.jpg */ "./src/RESOURCES/images/mte-male-engr.jpg");
/* harmony import */ var _RESOURCES_images_cpe_engr_girls_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../RESOURCES/images/cpe-engr-girls.jpg */ "./src/RESOURCES/images/cpe-engr-girls.jpg");
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
//function to create menu
const createMenu = (header) => {
    const div = document.createElement('div');
    div.classList.add('menu');
    let bars = [];
    for(let i = 0; i < 3; i++){
        bars[i] = document.createElement('div');
        bars[i].classList.add('bars');
        div.appendChild(bars[i]);
    }
    div.addEventListener('click', () => {
        document.querySelector('.nav').classList.toggle('active');
    
        if(document.querySelector('.nav').className === 'nav active'){
            document.querySelector('header').style.marginBottom = '20vh'; 
        }
        else{
            document.querySelector('header').style.marginBottom = '0';
        }
    });
    header.appendChild(div);
}
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
const createNavBar = (array) => {
    const div = document.createElement('nav');
    //create individual navLinks with imported function
    const homeNav = createNavLink(array[0], "Home")
    const aboutNav = createNavLink(array[2], "About");
    const reportNav = createNavLink(array[1], "Reports");
    const contactNav = createNavLink("mailto:info.sabidevs@gmail.com", "Contact Us");
    //Append navLinks to navBar
    div.appendChild(homeNav);
    div.appendChild(aboutNav);
    div.appendChild(reportNav);
    div.appendChild(contactNav);
    return div;
}
const generateHeroSection = (section) =>  {
    const heroContent = [
    {text: 'ELA made', word: 'Easy!!!',image: _RESOURCES_images_female_engr_jpg__WEBPACK_IMPORTED_MODULE_0__,class: 'group',inner: '#14213d',outer: '#fca311',call: 'GET STARTED'},
    {text: 'Lab Days?', word: 'A Breeze!!!', image: _RESOURCES_images_eee_engr_girls_jpg__WEBPACK_IMPORTED_MODULE_1__, class: 'group', inner: '#000000', outer: '#fca311', call: 'CHOOSE US'},
    {text: 'Engineering Labs,', word: 'Simplified!!!', image: _RESOURCES_images_eee_male_engr_jpg__WEBPACK_IMPORTED_MODULE_2__,class: 'group', inner: '#000000', outer: '#14213d', call: 'TAP IN'},
    {text: 'Don\'t Wing It,', word: 'Elaborate It!!!', image: _RESOURCES_images_cpe_engr_group_jpg__WEBPACK_IMPORTED_MODULE_3__,class: 'group', inner:  '#000000', outer: '#e5e5e5', call: 'UNLEASH  POTENTIAL'},
    {text: 'Unlock Lab Secrets with,', word: 'Elaborate!!!', image: _RESOURCES_images_mte_male_engr_jpg__WEBPACK_IMPORTED_MODULE_4__,class: 'group', inner: '#14213d', outer: '#e5e5e5', call: 'START NOW'},
    {text: 'Grades Soaring, Elaborate', word: 'Thank You!!!', image: _RESOURCES_images_cpe_engr_girls_jpg__WEBPACK_IMPORTED_MODULE_5__,class: 'group', inner: '#14213d', outer: '#000000', call: 'DIVE IN'},
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

/***/ "./src/SCRIPTS/script.js":
/*!*******************************!*\
  !*** ./src/SCRIPTS/script.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_landing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/landing */ "./src/SCRIPTS/modules/landing.js");
/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/header */ "./src/SCRIPTS/modules/header.js");
/* harmony import */ var _modules_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/footer */ "./src/SCRIPTS/modules/footer.js");
/* harmony import */ var _modules_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/ai */ "./src/SCRIPTS/modules/ai.js");
/* harmony import */ var _CSS_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CSS/style.css */ "./src/CSS/style.css");
/* harmony import */ var _RESOURCES_images_computer_dept_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../RESOURCES/images/computer-dept.png */ "./src/RESOURCES/images/computer-dept.png");
/* harmony import */ var _RESOURCES_images_electrical_dept_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../RESOURCES/images/electrical-dept.png */ "./src/RESOURCES/images/electrical-dept.png");
/* harmony import */ var _RESOURCES_images_mechanical_dept_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../RESOURCES/images/mechanical-dept.png */ "./src/RESOURCES/images/mechanical-dept.png");
/* harmony import */ var _RESOURCES_images_production_dept_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../RESOURCES/images/production-dept.png */ "./src/RESOURCES/images/production-dept.png");
/* harmony import */ var _RESOURCES_images_about_us_man_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../RESOURCES/images/about_us_man.png */ "./src/RESOURCES/images/about_us_man.png");
//import functions from modules




//import css



//import images






const hme = "./index.html";
const rpt = "./report/report.html";
const abt = "./about/about.html";

//create a reference to body tag
const body = document.querySelector('body');
//call header function
(0,_modules_header__WEBPACK_IMPORTED_MODULE_1__.renderHeader)(body, [hme, rpt, abt]);

//create main section
const main = document.createElement('main');

//create hero section
const heroSection = document.createElement('section');
//Add heroSection content
(0,_modules_landing__WEBPACK_IMPORTED_MODULE_0__.generateHeroSection)(heroSection);
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
const cpeDept = (0,_modules_landing__WEBPACK_IMPORTED_MODULE_0__.createDept)(_RESOURCES_images_computer_dept_png__WEBPACK_IMPORTED_MODULE_5__, 'COMPUTER ENGINEERING', 'Computer ELA offers hands-on experience with hardware, software and basic engineering concepts, by solidifying theory through building circuits, programming microcontrollers, and exploring computer networks', [300, 400]);
//electrical department div
const eeeDept = (0,_modules_landing__WEBPACK_IMPORTED_MODULE_0__.createDept)(_RESOURCES_images_electrical_dept_png__WEBPACK_IMPORTED_MODULE_6__, 'ELECTRICAL ENGINEERING', 'Electrical ELA brings electrical principles to life. Students gain practical experience with circuits, electronics, power systems, and control systems through experiments involving real-world equipment like Transformers, oscilloscopes, and other electrical machines', [200, 300]);
//mechanical department div
const meeDept = (0,_modules_landing__WEBPACK_IMPORTED_MODULE_0__.createDept)(_RESOURCES_images_mechanical_dept_png__WEBPACK_IMPORTED_MODULE_7__, 'MECHANICAL ENGINEERING', 'Mechanical ELA focuses on applying theoretical concepts to real-world applications. Students bridge the gap between theory and application by testing mechanical systems through experiments involving Applied Mechanics (AM) and Strength of Materials (SM)', [200]);
//production department div
const preDept = (0,_modules_landing__WEBPACK_IMPORTED_MODULE_0__.createDept)(_RESOURCES_images_production_dept_png__WEBPACK_IMPORTED_MODULE_8__, 'PRODUCTION ENGINEERING', 'Production ELA delves into the practicalities of manufacturing. Students explore efficient production techniques through experiments in areas like machining, welding, casting, forming, and bench-fitting, developing a strong foundation for future industrial success', [200]);
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
const serve1 = (0,_modules_landing__WEBPACK_IMPORTED_MODULE_0__.createService)('Grade-A Reports', 'Stop wasting time on information overload. Elaborate equips you with the essential resources and expert tips to craft concise, impactful reports that showcase your understanding. Plus, with our seamless PDF download feature, you can effortlessly save your reports for future reference or easy sharing with instructors.', 'Learn more');
serve1.classList.add('serve');
//create service two
const serve2 = (0,_modules_landing__WEBPACK_IMPORTED_MODULE_0__.createService)('Gain insightful knowledge', 'Don\'t just memorize, truly understand. Elaborate equips you with interactive learning tools and expert insights, transforming passive data into a rich understanding of engineering concepts. This deeper knowledge empowers you to excel in your exams and future endeavors.', 'Learn more');
serve2.classList.add('serve');
serve1.id = 'middle';
//create service three
const serve3 = (0,_modules_landing__WEBPACK_IMPORTED_MODULE_0__.createService)('Lab Mastery Made Easy', 'Elaborate sheds light on even the most complex experiments, transforming you from bewildered beginner to confident expert. This newfound understanding empowers you to tackle your ELAs with a winning strategy.', 'Learn more');
serve3.classList.add('serve');
//Append services to  serve box
serveBox.appendChild(serve2);
serveBox.appendChild(serve1);
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
aboutImg.src = _RESOURCES_images_about_us_man_png__WEBPACK_IMPORTED_MODULE_9__;
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
(0,_modules_landing__WEBPACK_IMPORTED_MODULE_0__.carousel)();

//display footer
(0,_modules_footer__WEBPACK_IMPORTED_MODULE_2__.renderFooter)(body, [hme, rpt, abt]);

(0,_modules_ai__WEBPACK_IMPORTED_MODULE_3__.displayAI)(body);
(0,_modules_ai__WEBPACK_IMPORTED_MODULE_3__.createGemini)(body);
(0,_modules_ai__WEBPACK_IMPORTED_MODULE_3__.createChatGpt)(body);

/***/ }),

/***/ "./src/RESOURCES/images/AI-chatbot-icon.png":
/*!**************************************************!*\
  !*** ./src/RESOURCES/images/AI-chatbot-icon.png ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "./asset/images/0bda107bba626fb52b21.png";

/***/ }),

/***/ "./src/RESOURCES/images/about_us_man.png":
/*!***********************************************!*\
  !*** ./src/RESOURCES/images/about_us_man.png ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "./asset/images/5f6e43892875c978630f.png";

/***/ }),

/***/ "./src/RESOURCES/images/chat-gpt.png":
/*!*******************************************!*\
  !*** ./src/RESOURCES/images/chat-gpt.png ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "./asset/images/341f0bd1a4f93bae12e2.png";

/***/ }),

/***/ "./src/RESOURCES/images/computer-dept.png":
/*!************************************************!*\
  !*** ./src/RESOURCES/images/computer-dept.png ***!
  \************************************************/
/***/ ((module) => {

module.exports = "./asset/images/4c0593225e4235ce4f99.png";

/***/ }),

/***/ "./src/RESOURCES/images/cpe-engr-girls.jpg":
/*!*************************************************!*\
  !*** ./src/RESOURCES/images/cpe-engr-girls.jpg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "./asset/images/42b2d9844f6b2f4f1d16.jpg";

/***/ }),

/***/ "./src/RESOURCES/images/cpe-engr-group.jpg":
/*!*************************************************!*\
  !*** ./src/RESOURCES/images/cpe-engr-group.jpg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "./asset/images/a70d6a4b8b304ef985e6.jpg";

/***/ }),

/***/ "./src/RESOURCES/images/eee-engr-girls.jpg":
/*!*************************************************!*\
  !*** ./src/RESOURCES/images/eee-engr-girls.jpg ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "./asset/images/911581982d5099bbd728.jpg";

/***/ }),

/***/ "./src/RESOURCES/images/eee-male-engr.jpg":
/*!************************************************!*\
  !*** ./src/RESOURCES/images/eee-male-engr.jpg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "./asset/images/a2e6def33c12927585f1.jpg";

/***/ }),

/***/ "./src/RESOURCES/images/elaBoratelogo.png":
/*!************************************************!*\
  !*** ./src/RESOURCES/images/elaBoratelogo.png ***!
  \************************************************/
/***/ ((module) => {

module.exports = "./asset/images/89c558426b41fccd73cd.png";

/***/ }),

/***/ "./src/RESOURCES/images/elaborate-footer-logo.png":
/*!********************************************************!*\
  !*** ./src/RESOURCES/images/elaborate-footer-logo.png ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "./asset/images/89c7f3e4da4391052d31.png";

/***/ }),

/***/ "./src/RESOURCES/images/electrical-dept.png":
/*!**************************************************!*\
  !*** ./src/RESOURCES/images/electrical-dept.png ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "./asset/images/64aeffb2733ab0bdedda.png";

/***/ }),

/***/ "./src/RESOURCES/images/female-engr.jpg":
/*!**********************************************!*\
  !*** ./src/RESOURCES/images/female-engr.jpg ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "./asset/images/9dfe16325ed6898b3799.jpg";

/***/ }),

/***/ "./src/RESOURCES/images/google-gemini-icon.png":
/*!*****************************************************!*\
  !*** ./src/RESOURCES/images/google-gemini-icon.png ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "./asset/images/05509233feb57da9851f.png";

/***/ }),

/***/ "./src/RESOURCES/images/mechanical-dept.png":
/*!**************************************************!*\
  !*** ./src/RESOURCES/images/mechanical-dept.png ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "./asset/images/5f89313ddb5c3d488187.png";

/***/ }),

/***/ "./src/RESOURCES/images/mte-male-engr.jpg":
/*!************************************************!*\
  !*** ./src/RESOURCES/images/mte-male-engr.jpg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "./asset/images/d0370f308500f6ec534a.jpg";

/***/ }),

/***/ "./src/RESOURCES/images/production-dept.png":
/*!**************************************************!*\
  !*** ./src/RESOURCES/images/production-dept.png ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "./asset/images/2faf76535355f39d1270.png";

/***/ }),

/***/ "./src/RESOURCES/images/search-icon.png":
/*!**********************************************!*\
  !*** ./src/RESOURCES/images/search-icon.png ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "./asset/images/ecb34bb8fa4ecc3a4316.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/SCRIPTS/script.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQSxlQUFlLCtEQUFhO0FBQzVCO0FBQ0E7QUFDQSxlQUFlLCtEQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0RBQWE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtEQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUFRO0FBQ1I7QUFDQTtBQUNBLDZEQUFZO0FBQ1o7QUFDQSxzREFBUztBQUNULHlEQUFZO0FBQ1osMERBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGFib3JhdGUvLi9zcmMvQ1NTL3N0eWxlLmNzcz8wNTgwIiwid2VicGFjazovL2VsYWJvcmF0ZS8uL3NyYy9TQ1JJUFRTL21vZHVsZXMvYWkuanMiLCJ3ZWJwYWNrOi8vZWxhYm9yYXRlLy4vc3JjL1NDUklQVFMvbW9kdWxlcy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vZWxhYm9yYXRlLy4vc3JjL1NDUklQVFMvbW9kdWxlcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vZWxhYm9yYXRlLy4vc3JjL1NDUklQVFMvbW9kdWxlcy9sYW5kaW5nLmpzIiwid2VicGFjazovL2VsYWJvcmF0ZS8uL3NyYy9TQ1JJUFRTL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgZ2VtaW5pIGZyb20gJy4uLy4uL1JFU09VUkNFUy9pbWFnZXMvZ29vZ2xlLWdlbWluaS1pY29uLnBuZyc7XHJcbmltcG9ydCBjaGF0Z3B0IGZyb20gJy4uLy4uL1JFU09VUkNFUy9pbWFnZXMvY2hhdC1ncHQucG5nJztcclxuaW1wb3J0IGFpUGljIGZyb20gJy4uLy4uL1JFU09VUkNFUy9pbWFnZXMvQUktY2hhdGJvdC1pY29uLnBuZyc7XHJcbmNvbnN0IGRpc3BsYXlBSSA9IChib2R5KSA9PiB7XHJcbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGdwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZ3B0LmNsYXNzTGlzdC5hZGQoJ2FpRGl2Jyk7XHJcbiAgICBncHQuY2xhc3NMaXN0LmFkZCgncG9wVXAnKTtcclxuICAgIGdwdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hhdEdQVCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnZW1pbmlBSScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGdwdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGdwdEljb24uc3JjID0gY2hhdGdwdDtcclxuICAgIGdwdC5hcHBlbmRDaGlsZChncHRJY29uKTtcclxuICAgIGNvbnN0IGFpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhaS5jbGFzc0xpc3QuYWRkKCdhaURpdicpO1xyXG4gICAgYWkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZ3B0LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGdlbS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gICAgY29uc3QgYWlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBhaUljb24uc3JjID0gYWlQaWM7XHJcbiAgICBhaS5hcHBlbmRDaGlsZChhaUljb24pO1xyXG4gICAgY29uc3QgZ2VtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBnZW0uY2xhc3NMaXN0LmFkZCgnYWlEaXYnKTtcclxuICAgIGdlbS5jbGFzc0xpc3QuYWRkKCdwb3BVcCcpO1xyXG4gICAgZ2VtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGF0R1BUJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2VtaW5pQUknKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZ2VtSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgZ2VtSWNvbi5zcmMgPSBnZW1pbmk7XHJcbiAgICBnZW0uYXBwZW5kQ2hpbGQoZ2VtSWNvbik7XHJcbiAgICBib3guaWQgPSAnYWknO1xyXG4gICAgYm94LmFwcGVuZENoaWxkKGdwdCk7XHJcbiAgICBib3guYXBwZW5kQ2hpbGQoYWkpO1xyXG4gICAgYm94LmFwcGVuZENoaWxkKGdlbSk7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKGJveCk7XHJcbn07XHJcbmNvbnN0IGNyZWF0ZUFpQm94ID0gKHVybCwgdGl0bGUsIGlkZSkgPT4ge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGFpRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hhdEdQVCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dlbWluaUFJJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0pO1xyXG4gICAgdGV4dC50ZXh0Q29udGVudCA9ICdBSSBwb3AtdXAgbW9kYWwnO1xyXG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKCdhaVRleHQnKTtcclxuICAgIGNsb3NlLnRleHRDb250ZW50ID0gJ3gnO1xyXG4gICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnY2xvc2UnKTtcclxuICAgIGNvbnN0IGZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XHJcbiAgICBmcmFtZS5zcmMgPSB1cmw7XHJcbiAgICBmcmFtZS5uYW1lID0gdGl0bGU7XHJcbiAgICBmcmFtZS5pZCA9IGlkZTtcclxuICAgIGRpdi5pZCA9IHRpdGxlO1xyXG4gICAgYWlEaXYuY2xhc3NMaXN0LmFkZCgnZnJhbWVCb3gnKTtcclxuICAgIGFpRGl2LmFwcGVuZENoaWxkKGZyYW1lKTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChjbG9zZSk7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYWlEaXYpO1xyXG4gICAgcmV0dXJuIGRpdjtcclxufTtcclxuY29uc3QgY3JlYXRlR2VtaW5pID0gKGJvZHkpID0+IHtcclxuICAgIGNvbnN0IGdlbWluaSA9IGNyZWF0ZUFpQm94KFwiaHR0cHM6Ly9ib3Qub3JpbW9uLmFpLz90ZW5hbnRJZD01YjhhMzYwYy03MTBhLTQ0ZjItODdiYy01ZjkxZmMyMTE5MTEmZnVsbFNjcmVlbkJvdD10cnVlXCIgLCAnZ2VtaW5pQUknLCAnZ2VtaW5pJyk7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKGdlbWluaSk7XHJcbn07XHJcbmNvbnN0IGNyZWF0ZUNoYXRHcHQgPSAoYm9keSkgPT4ge1xyXG4gICAgY29uc3QgY2hhdEdQVCA9IGNyZWF0ZUFpQm94KFwiaHR0cHM6Ly93d3cuY2hhdGJhc2UuY28vY2hhdGJvdC1pZnJhbWUvTUFzUzd2ZDh5aGx6NC1ya2hBU0JMXCIsICdjaGF0R1BUJywgJ2NoYXRncHQnKTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY2hhdEdQVCk7XHJcbn07XHJcbmV4cG9ydHtjcmVhdGVHZW1pbmksIGNyZWF0ZUNoYXRHcHQsIGRpc3BsYXlBSX07IiwiaW1wb3J0IHtjcmVhdGVOYXZCYXIsIGNyZWF0ZUJyYW5kfSBmcm9tICcuL2xhbmRpbmcuanMnO1xyXG5pbXBvcnQgbG9nbzEgZnJvbSAnLi4vLi4vUkVTT1VSQ0VTL2ltYWdlcy9lbGFib3JhdGUtZm9vdGVyLWxvZ28ucG5nJztcclxuY29uc3QgcmVuZGVyRm9vdGVyID0gKGJvZHksIGFycmF5KSA9PiB7XHJcbi8vY3JlYXRlIGZvb3RlclxyXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuLy9jcmVhdGUgbGVmdCBmb290ZXIgc2VjdGlvblxyXG5jb25zdCBsZWZ0Rm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4vL2NyZWF0ZSBmb290ZXIgYnJhbmRcclxuY29uc3QgZm9vdGVyQnJhbmQgPSBjcmVhdGVCcmFuZChsb2dvMSwgJycpO1xyXG4vL2NyZWF0ZSBmb290ZXIgbmF2aWdhdGlvbiBsaW5rc1xyXG5jb25zdCBmb290ZXJOYXYgPSBjcmVhdGVOYXZCYXIoYXJyYXkpO1xyXG5mb290ZXJOYXYuaWQgPSAnZm9vdGVyTmF2JztcclxuLy9hcHBlbmQgY2hpbGRyZW4gdG8gbGVmdEZvb3RlclxyXG5sZWZ0Rm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckJyYW5kKTtcclxubGVmdEZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJOYXYpO1xyXG5sZWZ0Rm9vdGVyLmlkID0gJ2xlZnRGb290JztcclxuLy9BcHBlbmQgbGVmdCBmb290ZXIgc2VjdGlvbiB0byB0aGUgZm9vdGVyXHJcbmZvb3Rlci5hcHBlbmRDaGlsZChsZWZ0Rm9vdGVyKTtcclxuLy9jcmVhdGUgcmlnaHQgZm9vdGVyIHNlY3Rpb25cclxuY29uc3QgcmlnaHRGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbnJpZ2h0Rm9vdGVyLmlkID0gJ3JpZ2h0Rm9vdCc7XHJcbi8vY3JlYXRlICBzdWJzY3JpYmUgdGV4dFxyXG5jb25zdCBzdWJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5zdWJUZXh0LnRleHRDb250ZW50ID0gXCJHZXQgb3VyIGxhdGVzdCBpbm5vdmF0aXZlIG5ld3NcIjtcclxuLy9jcmVhdGUgc3Vic2NyaWJlIGRpdlxyXG5jb25zdCBzdWJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuc3ViRGl2LmlkID0gJ3N1YnNjcmliZSc7XHJcbi8vY3JlYXRlIGZvb3RlciBzdWJzY3JpYmUgaW5wdXRcclxuY29uc3Qgc3ViSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5zdWJJbnB1dC50eXBlID0gJ2VtYWlsJztcclxuc3ViSW5wdXQucGxhY2Vob2xkZXIgPSAnRW1haWwgQWRkcmVzcyc7XHJcbnN1YklucHV0LmlkID0gJ3N1YkVtYWlsJztcclxuLy9jcmVhdGUgZm9vdGVyIHN1YnNjcmliZSBidXR0b25cclxuY29uc3Qgc3ViQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbnN1YkJ1dHRvbi50ZXh0Q29udGVudCA9ICdTdWJzY3JpYmUnO1xyXG5zdWJCdXR0b24uaWQgPSAnc3ViQnV0dG9uJztcclxuLy9BcHBlbmQgc3ViIGlucHV0IGFuZCBidXR0b24gdG8gaXQgRGl2XHJcbnN1YkRpdi5hcHBlbmRDaGlsZChzdWJJbnB1dCk7XHJcbnN1YkRpdi5hcHBlbmRDaGlsZChzdWJCdXR0b24pO1xyXG4vL2NyZWF0ZSBjb3B5cmlnaHQgdGV4dFxyXG5jb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY29weXJpZ2h0LmlubmVySFRNTCA9IGAmIzE2OTsgQ29weXJpZ2h0IDxzcGFuPiR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfTwvc3Bhbj5gO1xyXG4vL2NyZWF0ZSByZXNlcnZlZCByaWdodCB0ZXh0XHJcbmNvbnN0IHJlc2VydmVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5yZXNlcnZlZC5pbm5lckhUTUwgPSAnQWxsIHJpZ2h0cyByZXNlcnZlZC4gQSA8c3Bhbj5zYWJpPC9zcGFuPkRldnMgaW5pdGlhdGl2ZSc7XHJcbi8vQXBwZW5kIGNoaWxkcmVuIHRvIHJpZ2h0IGZvb3RlciBlbGVtZW50XHJcbnJpZ2h0Rm9vdGVyLmFwcGVuZENoaWxkKHN1YlRleHQpO1xyXG5yaWdodEZvb3Rlci5hcHBlbmRDaGlsZChzdWJEaXYpO1xyXG5yaWdodEZvb3Rlci5hcHBlbmRDaGlsZChjb3B5cmlnaHQpO1xyXG5yaWdodEZvb3Rlci5hcHBlbmRDaGlsZChyZXNlcnZlZCk7XHJcbi8vQXBwZW5kIHJpZ2h0IGZvb3RlciB0byBmb290ZXJcclxuZm9vdGVyLmFwcGVuZENoaWxkKHJpZ2h0Rm9vdGVyKTtcclxuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG59O1xyXG5leHBvcnQge3JlbmRlckZvb3Rlcn07IiwiaW1wb3J0IHtjcmVhdGVOYXZCYXIsIGNyZWF0ZUJyYW5kLCBjcmVhdGVNZW51fSBmcm9tICcuL2xhbmRpbmcuanMnO1xyXG5pbXBvcnQgbG9nbyBmcm9tICcuLi8uLi9SRVNPVVJDRVMvaW1hZ2VzL2VsYUJvcmF0ZWxvZ28ucG5nJztcclxuaW1wb3J0IHNlYXJjaCBmcm9tICcuLi8uLi9SRVNPVVJDRVMvaW1hZ2VzL3NlYXJjaC1pY29uLnBuZyc7XHJcbmNvbnN0IHJlbmRlckhlYWRlciA9IChib2R5LCBhcnJheSkgPT4ge1xyXG4vL2NyZWF0ZSBoZWFkZXIgZWxlbWVudFxyXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuLy9jcmVhdGUgaWNvbiBkaXZcclxuY29uc3QgaWNvbkRpdiA9IGNyZWF0ZUJyYW5kKGxvZ28pO1xyXG5pY29uRGl2LmlkID0gJ2ljb25EaXYnO1xyXG4vL2NyZWF0ZSBuYXZCYXJcclxuY29uc3QgbmF2Qm94ID0gY3JlYXRlTmF2QmFyKGFycmF5KTtcclxubmF2Qm94LmNsYXNzTGlzdC5hZGQoJ25hdicpOyBcclxuLy9jcmVhdGUgc2VhcmNoIEJveCBkaXZcclxuY29uc3Qgc2VhcmNoRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbnNlYXJjaERpdi5pZCA9ICdzZWFyY2hCb3gnO1xyXG4vL2NyZWF0ZSBzZWFyY2ggSWNvblxyXG5jb25zdCBzZWFyY2hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbnNlYXJjaEljb24uc3JjID0gIHNlYXJjaDtcclxuLy9jcmVhdGUgc2VhcmNoIGlucHV0IGZpZWxkXHJcbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuc2VhcmNoSW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG5zZWFyY2hJbnB1dC5pZCA9IFwic2VhcmNoSW5wdXRcIjtcclxuLy9BZGQgc2VhcmNoQm94IGl0ZW1zIHRvIHBhcmVudFxyXG5zZWFyY2hEaXYuYXBwZW5kQ2hpbGQoc2VhcmNoSW5wdXQpO1xyXG5zZWFyY2hEaXYuYXBwZW5kQ2hpbGQoc2VhcmNoSWNvbik7XHJcbi8vQWRkIGhlYWRlciBpdGVtcyB0byBoZWFkZXJcclxuaGVhZGVyLmFwcGVuZENoaWxkKGljb25EaXYpO1xyXG5oZWFkZXIuYXBwZW5kQ2hpbGQobmF2Qm94KTtcclxuaGVhZGVyLmFwcGVuZENoaWxkKHNlYXJjaERpdik7XHJcbi8vY3JlYXRlIG1lbnVcclxuY3JlYXRlTWVudShoZWFkZXIpO1xyXG4vL0FkZCBoZWFkZXIgdG8gYm9keSB0YWdcclxuYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG59XHJcbmV4cG9ydCB7cmVuZGVySGVhZGVyfTsiLCIvL2ltcG9ydCBpbWFnZXNcclxuaW1wb3J0IGltZzEgZnJvbSAnLi4vLi4vUkVTT1VSQ0VTL2ltYWdlcy9mZW1hbGUtZW5nci5qcGcnO1xyXG5pbXBvcnQgaW1nMiBmcm9tICcuLi8uLi9SRVNPVVJDRVMvaW1hZ2VzL2VlZS1lbmdyLWdpcmxzLmpwZyc7XHJcbmltcG9ydCBpbWczIGZyb20gJy4uLy4uL1JFU09VUkNFUy9pbWFnZXMvZWVlLW1hbGUtZW5nci5qcGcnO1xyXG5pbXBvcnQgaW1nNCBmcm9tICcuLi8uLi9SRVNPVVJDRVMvaW1hZ2VzL2NwZS1lbmdyLWdyb3VwLmpwZyc7XHJcbmltcG9ydCBpbWc1IGZyb20gJy4uLy4uL1JFU09VUkNFUy9pbWFnZXMvbXRlLW1hbGUtZW5nci5qcGcnO1xyXG5pbXBvcnQgaW1nNiBmcm9tICcuLi8uLi9SRVNPVVJDRVMvaW1hZ2VzL2NwZS1lbmdyLWdpcmxzLmpwZyc7XHJcblxyXG5cclxuLy9BIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBuYXYgbGlua3MgYW5kIHJldHVybnMgdGhlIGRpdlxyXG5jb25zdCBjcmVhdGVOYXZMaW5rID0gKHJlZiwgdGV4dCkgPT4ge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgY29uc3QgbGlua1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBsaW5rVGV4dC50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICBsaW5rLmFwcGVuZENoaWxkKGxpbmtUZXh0KTtcclxuICAgIGxpbmsuaHJlZiA9IHJlZjtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgIHJldHVybiBkaXY7XHJcbn07XHJcbi8vZnVuY3Rpb24gdG8gY3JlYXRlIG1lbnVcclxuY29uc3QgY3JlYXRlTWVudSA9IChoZWFkZXIpID0+IHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcclxuICAgIGxldCBiYXJzID0gW107XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMzsgaSsrKXtcclxuICAgICAgICBiYXJzW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgYmFyc1tpXS5jbGFzc0xpc3QuYWRkKCdiYXJzJyk7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGJhcnNbaV0pO1xyXG4gICAgfVxyXG4gICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYnKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICAgIFxyXG4gICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYnKS5jbGFzc05hbWUgPT09ICduYXYgYWN0aXZlJyl7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLnN0eWxlLm1hcmdpbkJvdHRvbSA9ICcyMHZoJzsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLnN0eWxlLm1hcmdpbkJvdHRvbSA9ICcwJztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChkaXYpO1xyXG59XHJcbmNvbnN0IGNyZWF0ZUJyYW5kID0gKGxvZ28sIG5hbWUgPSAnZWxhQm9yYXRlJykgPT4ge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAvL2NyZWF0ZSBsb2dvIGljb25cclxuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGljb24uc3JjID0gbG9nbztcclxuICAgIGRpdi5hcHBlbmRDaGlsZChpY29uKTtcclxuICAgIC8vY3JlYXRlIGJyYW5kIG5hbWVcclxuICAgIGNvbnN0IGJyYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGJyYW5kLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChicmFuZCk7XHJcbiAgICByZXR1cm4gZGl2O1xyXG59XHJcbmNvbnN0IGNyZWF0ZU5hdkJhciA9IChhcnJheSkgPT4ge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgICAvL2NyZWF0ZSBpbmRpdmlkdWFsIG5hdkxpbmtzIHdpdGggaW1wb3J0ZWQgZnVuY3Rpb25cclxuICAgIGNvbnN0IGhvbWVOYXYgPSBjcmVhdGVOYXZMaW5rKGFycmF5WzBdLCBcIkhvbWVcIilcclxuICAgIGNvbnN0IGFib3V0TmF2ID0gY3JlYXRlTmF2TGluayhhcnJheVsyXSwgXCJBYm91dFwiKTtcclxuICAgIGNvbnN0IHJlcG9ydE5hdiA9IGNyZWF0ZU5hdkxpbmsoYXJyYXlbMV0sIFwiUmVwb3J0c1wiKTtcclxuICAgIGNvbnN0IGNvbnRhY3ROYXYgPSBjcmVhdGVOYXZMaW5rKFwibWFpbHRvOmluZm8uc2FiaWRldnNAZ21haWwuY29tXCIsIFwiQ29udGFjdCBVc1wiKTtcclxuICAgIC8vQXBwZW5kIG5hdkxpbmtzIHRvIG5hdkJhclxyXG4gICAgZGl2LmFwcGVuZENoaWxkKGhvbWVOYXYpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGFib3V0TmF2KTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChyZXBvcnROYXYpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGNvbnRhY3ROYXYpO1xyXG4gICAgcmV0dXJuIGRpdjtcclxufVxyXG5jb25zdCBnZW5lcmF0ZUhlcm9TZWN0aW9uID0gKHNlY3Rpb24pID0+ICB7XHJcbiAgICBjb25zdCBoZXJvQ29udGVudCA9IFtcclxuICAgIHt0ZXh0OiAnRUxBIG1hZGUnLCB3b3JkOiAnRWFzeSEhIScsaW1hZ2U6IGltZzEsY2xhc3M6ICdncm91cCcsaW5uZXI6ICcjMTQyMTNkJyxvdXRlcjogJyNmY2EzMTEnLGNhbGw6ICdHRVQgU1RBUlRFRCd9LFxyXG4gICAge3RleHQ6ICdMYWIgRGF5cz8nLCB3b3JkOiAnQSBCcmVlemUhISEnLCBpbWFnZTogaW1nMiwgY2xhc3M6ICdncm91cCcsIGlubmVyOiAnIzAwMDAwMCcsIG91dGVyOiAnI2ZjYTMxMScsIGNhbGw6ICdDSE9PU0UgVVMnfSxcclxuICAgIHt0ZXh0OiAnRW5naW5lZXJpbmcgTGFicywnLCB3b3JkOiAnU2ltcGxpZmllZCEhIScsIGltYWdlOiBpbWczLGNsYXNzOiAnZ3JvdXAnLCBpbm5lcjogJyMwMDAwMDAnLCBvdXRlcjogJyMxNDIxM2QnLCBjYWxsOiAnVEFQIElOJ30sXHJcbiAgICB7dGV4dDogJ0RvblxcJ3QgV2luZyBJdCwnLCB3b3JkOiAnRWxhYm9yYXRlIEl0ISEhJywgaW1hZ2U6IGltZzQsY2xhc3M6ICdncm91cCcsIGlubmVyOiAgJyMwMDAwMDAnLCBvdXRlcjogJyNlNWU1ZTUnLCBjYWxsOiAnVU5MRUFTSCAgUE9URU5USUFMJ30sXHJcbiAgICB7dGV4dDogJ1VubG9jayBMYWIgU2VjcmV0cyB3aXRoLCcsIHdvcmQ6ICdFbGFib3JhdGUhISEnLCBpbWFnZTogaW1nNSxjbGFzczogJ2dyb3VwJywgaW5uZXI6ICcjMTQyMTNkJywgb3V0ZXI6ICcjZTVlNWU1JywgY2FsbDogJ1NUQVJUIE5PVyd9LFxyXG4gICAge3RleHQ6ICdHcmFkZXMgU29hcmluZywgRWxhYm9yYXRlJywgd29yZDogJ1RoYW5rIFlvdSEhIScsIGltYWdlOiBpbWc2LGNsYXNzOiAnZ3JvdXAnLCBpbm5lcjogJyMxNDIxM2QnLCBvdXRlcjogJyMwMDAwMDAnLCBjYWxsOiAnRElWRSBJTid9LFxyXG5dO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGhlcm9Db250ZW50Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBjb25zdCBoZXJvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgdGV4dENvbnRhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0ZXh0Q29udGFpbi5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcclxuICAgICAgICBjb25zdCB0ZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGV4dERpdi5jbGFzc0xpc3QuYWRkKCd0ZXh0RGl2Jyk7XHJcbiAgICAgICAgY29uc3QgaGVyb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBoZXJvVGV4dC5jbGFzc0xpc3QuYWRkKCdoZXJvVGV4dCcpO1xyXG4gICAgICAgIGNvbnN0IGhlcm9TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaGVyb1NwYW4uY2xhc3NMaXN0LmFkZCgnc3BhbicpO1xyXG4gICAgICAgIGNvbnN0IGhlcm9JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBoZXJvSW1nLmNsYXNzTGlzdC5hZGQoYCR7aGVyb0NvbnRlbnRbaV0uY2xhc3N9YCk7XHJcbiAgICAgICAgY29uc3QgaW5uZXJDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBpbm5lckNpcmNsZS5jbGFzc0xpc3QuYWRkKCdpbm5lckNpcmNsZScpO1xyXG4gICAgICAgIGNvbnN0IG91dGVyQ2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgb3V0ZXJDaXJjbGUuY2xhc3NMaXN0LmFkZCgnb3V0ZXJDaXJjbGUnKTtcclxuICAgICAgICBjb25zdCBhY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBhY3Rpb24uY2xhc3NMaXN0LmFkZCgnY2FsbEFjdGlvbicpO1xyXG4gICAgICAgIGhlcm9UZXh0LnRleHRDb250ZW50ID0gaGVyb0NvbnRlbnRbaV0udGV4dDtcclxuICAgICAgICBoZXJvU3Bhbi50ZXh0Q29udGVudCA9IGhlcm9Db250ZW50W2ldLndvcmQ7XHJcbiAgICAgICAgaGVyb0ltZy5zcmMgPSBoZXJvQ29udGVudFtpXS5pbWFnZTtcclxuICAgICAgICBpbm5lckNpcmNsZS5zdHlsZS5iYWNrZ3JvdW5kID0gaGVyb0NvbnRlbnRbaV0uaW5uZXI7XHJcbiAgICAgICAgb3V0ZXJDaXJjbGUuc3R5bGUuYmFja2dyb3VuZCA9IGhlcm9Db250ZW50W2ldLm91dGVyO1xyXG4gICAgICAgIGFjdGlvbi50ZXh0Q29udGVudCA9IGhlcm9Db250ZW50W2ldLmNhbGw7XHJcbiAgICAgICAgYWN0aW9uLnN0eWxlLmJhY2tncm91bmQgPSBoZXJvQ29udGVudFtpXS5pbm5lcjtcclxuICAgICAgICBhY3Rpb24uc3R5bGUuYm94U2hhZG93ID0gYDVweCA1cHggMS41cHggMXB4ICR7aGVyb0NvbnRlbnRbaV0ub3V0ZXJ9YDtcclxuICAgICAgICB0ZXh0RGl2LmFwcGVuZENoaWxkKGhlcm9UZXh0KTtcclxuICAgICAgICB0ZXh0RGl2LmFwcGVuZENoaWxkKGhlcm9TcGFuKTtcclxuICAgICAgICB0ZXh0Q29udGFpbi5hcHBlbmRDaGlsZCh0ZXh0RGl2KTtcclxuICAgICAgICB0ZXh0Q29udGFpbi5hcHBlbmRDaGlsZChhY3Rpb24pO1xyXG4gICAgICAgIGhlcm9EaXYuYXBwZW5kQ2hpbGQodGV4dENvbnRhaW4pO1xyXG4gICAgICAgIGhlcm9EaXYuYXBwZW5kQ2hpbGQoaGVyb0ltZyk7XHJcbiAgICAgICAgaGVyb0Rpdi5hcHBlbmRDaGlsZChpbm5lckNpcmNsZSk7XHJcbiAgICAgICAgaGVyb0Rpdi5hcHBlbmRDaGlsZChvdXRlckNpcmNsZSk7XHJcbiAgICAgICAgaGVyb0Rpdi5jbGFzc0xpc3QudG9nZ2xlKCdoZXJvU2xpZGUnKTtcclxuICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGhlcm9EaXYpO1xyXG4gICAgfVxyXG59XHJcbmNvbnN0IGNhcm91c2VsID0gKCkgPT4ge1xyXG4gICAgbGV0IGNvdW50ID0gMDtcclxuICAgIGNvbnN0IHNob3dTbGlkZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHNsaWRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVyb1NsaWRlJyk7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNsaWRlLmxlbmd0aDsgIGkrKyl7XHJcbiAgICAgICAgICAgIHNsaWRlW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY291bnQrKztcclxuICAgICAgICBpZihjb3VudCA+IHNsaWRlLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIGNvdW50ID0gMVxyXG4gICAgICAgIH1cclxuICAgICAgICBzbGlkZVtjb3VudCAtIDFdLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XHJcbiAgICAgICAgc2V0VGltZW91dChzaG93U2xpZGVzLCA1MDAwKTtcclxuICAgIH1cclxuICAgIHNob3dTbGlkZXMoKTtcclxufVxyXG5jb25zdCBjcmVhdGVEZXB0ID0gKGltZywgdGl0bGUsIGRlc2MsIGxldmVsKSA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdkZXB0Qm94Jyk7XHJcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaW1hZ2Uuc3JjID0gaW1nO1xyXG4gICAgY29uc3QgZGVwdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRlcHRUZXh0LmNsYXNzTGlzdC5hZGQoJ2RlcHRUZXh0Jyk7XHJcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcclxuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xyXG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjO1xyXG4gICAgY29uc3QgbGV2ZWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXZlbHMudGV4dENvbnRlbnQgPSAnTGV2ZWwocykgY292ZXJlZDogJyArIGxldmVsLnRvU3RyaW5nKCk7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG4gICAgZGVwdFRleHQuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcbiAgICBkZXB0VGV4dC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcbiAgICBkZXB0VGV4dC5hcHBlbmRDaGlsZChsZXZlbHMpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGRlcHRUZXh0KTtcclxuICAgIHJldHVybiBkaXY7XHJcbn07XHJcbmNvbnN0IGNyZWF0ZVNlcnZpY2UgPSAoaGVhZGluZywgYm9keSwgYWN0aW9uKSA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xyXG4gICAgaGVhZC50ZXh0Q29udGVudCA9IGhlYWRpbmc7XHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xyXG4gICAgdGV4dC50ZXh0Q29udGVudCA9IGJvZHk7XHJcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZXJ2ZUJ1dHRvbicpO1xyXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gYWN0aW9uO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGhlYWQpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICByZXR1cm4gZGl2O1xyXG59XHJcbmV4cG9ydCB7Y3JlYXRlTmF2TGluaywgZ2VuZXJhdGVIZXJvU2VjdGlvbiwgY2Fyb3VzZWwsIGNyZWF0ZURlcHQsIGNyZWF0ZVNlcnZpY2UsIGNyZWF0ZUJyYW5kLCBjcmVhdGVOYXZCYXIsIGNyZWF0ZU1lbnV9OyIsIi8vaW1wb3J0IGZ1bmN0aW9ucyBmcm9tIG1vZHVsZXNcclxuaW1wb3J0IHtnZW5lcmF0ZUhlcm9TZWN0aW9uLCBjYXJvdXNlbCwgY3JlYXRlRGVwdCwgY3JlYXRlU2VydmljZX0gZnJvbSAnLi9tb2R1bGVzL2xhbmRpbmcnO1xyXG5pbXBvcnQge3JlbmRlckhlYWRlcn0gZnJvbSAnLi9tb2R1bGVzL2hlYWRlcic7XHJcbmltcG9ydCB7cmVuZGVyRm9vdGVyfSBmcm9tICcuL21vZHVsZXMvZm9vdGVyJztcclxuaW1wb3J0IHtjcmVhdGVHZW1pbmksIGNyZWF0ZUNoYXRHcHQsIGRpc3BsYXlBSX0gZnJvbSAnLi9tb2R1bGVzL2FpJztcclxuLy9pbXBvcnQgY3NzXHJcblxyXG5pbXBvcnQgJy4uL0NTUy9zdHlsZS5jc3MnO1xyXG5cclxuLy9pbXBvcnQgaW1hZ2VzXHJcbmltcG9ydCBkZXB0MSBmcm9tICcuLi9SRVNPVVJDRVMvaW1hZ2VzL2NvbXB1dGVyLWRlcHQucG5nJztcclxuaW1wb3J0IGRlcHQyIGZyb20gJy4uL1JFU09VUkNFUy9pbWFnZXMvZWxlY3RyaWNhbC1kZXB0LnBuZyc7XHJcbmltcG9ydCBkZXB0MyBmcm9tICcuLi9SRVNPVVJDRVMvaW1hZ2VzL21lY2hhbmljYWwtZGVwdC5wbmcnO1xyXG5pbXBvcnQgZGVwdDQgZnJvbSAnLi4vUkVTT1VSQ0VTL2ltYWdlcy9wcm9kdWN0aW9uLWRlcHQucG5nJztcclxuaW1wb3J0IGFib3V0UGljIGZyb20gJy4uL1JFU09VUkNFUy9pbWFnZXMvYWJvdXRfdXNfbWFuLnBuZyc7XHJcblxyXG5jb25zdCBobWUgPSBcIi4vaW5kZXguaHRtbFwiO1xyXG5jb25zdCBycHQgPSBcIi4vcmVwb3J0L3JlcG9ydC5odG1sXCI7XHJcbmNvbnN0IGFidCA9IFwiLi9hYm91dC9hYm91dC5odG1sXCI7XHJcblxyXG4vL2NyZWF0ZSBhIHJlZmVyZW5jZSB0byBib2R5IHRhZ1xyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4vL2NhbGwgaGVhZGVyIGZ1bmN0aW9uXHJcbnJlbmRlckhlYWRlcihib2R5LCBbaG1lLCBycHQsIGFidF0pO1xyXG5cclxuLy9jcmVhdGUgbWFpbiBzZWN0aW9uXHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcblxyXG4vL2NyZWF0ZSBoZXJvIHNlY3Rpb25cclxuY29uc3QgaGVyb1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbi8vQWRkIGhlcm9TZWN0aW9uIGNvbnRlbnRcclxuZ2VuZXJhdGVIZXJvU2VjdGlvbihoZXJvU2VjdGlvbik7XHJcbmhlcm9TZWN0aW9uLmlkID0gJ2hlcm8nO1xyXG4vL2FwcGVuZCBoZXJvU2VjdGlvbiBjb250ZW50XHJcbm1haW4uYXBwZW5kQ2hpbGQoaGVyb1NlY3Rpb24pO1xyXG5cclxuLy9jcmVhdGUgZGVwYXJ0bWVudCBzZWN0aW9uXHJcbmNvbnN0IGRlcHRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG5kZXB0U2VjdGlvbi5pZCA9ICdkZXB0JztcclxuLy9kZXBhcnRtZW50IHNlY3Rpb24gaGVhZGluZ1xyXG5jb25zdCBkZXB0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuZGVwdEhlYWRlci50ZXh0Q29udGVudCA9ICdEZXBhcnRtZW50cyBXZSBDb3Zlcic7XHJcbi8vZGVwYXJ0bWVudCBncm91cGluZ1xyXG5jb25zdCBkZXB0R3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuZGVwdEdyb3VwLmlkID0gJ2dyb3VwJztcclxuLy9jb21wdXRlciBkZXBhcnRtZW50IGRpdlxyXG5jb25zdCBjcGVEZXB0ID0gY3JlYXRlRGVwdChkZXB0MSwgJ0NPTVBVVEVSIEVOR0lORUVSSU5HJywgJ0NvbXB1dGVyIEVMQSBvZmZlcnMgaGFuZHMtb24gZXhwZXJpZW5jZSB3aXRoIGhhcmR3YXJlLCBzb2Z0d2FyZSBhbmQgYmFzaWMgZW5naW5lZXJpbmcgY29uY2VwdHMsIGJ5IHNvbGlkaWZ5aW5nIHRoZW9yeSB0aHJvdWdoIGJ1aWxkaW5nIGNpcmN1aXRzLCBwcm9ncmFtbWluZyBtaWNyb2NvbnRyb2xsZXJzLCBhbmQgZXhwbG9yaW5nIGNvbXB1dGVyIG5ldHdvcmtzJywgWzMwMCwgNDAwXSk7XHJcbi8vZWxlY3RyaWNhbCBkZXBhcnRtZW50IGRpdlxyXG5jb25zdCBlZWVEZXB0ID0gY3JlYXRlRGVwdChkZXB0MiwgJ0VMRUNUUklDQUwgRU5HSU5FRVJJTkcnLCAnRWxlY3RyaWNhbCBFTEEgYnJpbmdzIGVsZWN0cmljYWwgcHJpbmNpcGxlcyB0byBsaWZlLiBTdHVkZW50cyBnYWluIHByYWN0aWNhbCBleHBlcmllbmNlIHdpdGggY2lyY3VpdHMsIGVsZWN0cm9uaWNzLCBwb3dlciBzeXN0ZW1zLCBhbmQgY29udHJvbCBzeXN0ZW1zIHRocm91Z2ggZXhwZXJpbWVudHMgaW52b2x2aW5nIHJlYWwtd29ybGQgZXF1aXBtZW50IGxpa2UgVHJhbnNmb3JtZXJzLCBvc2NpbGxvc2NvcGVzLCBhbmQgb3RoZXIgZWxlY3RyaWNhbCBtYWNoaW5lcycsIFsyMDAsIDMwMF0pO1xyXG4vL21lY2hhbmljYWwgZGVwYXJ0bWVudCBkaXZcclxuY29uc3QgbWVlRGVwdCA9IGNyZWF0ZURlcHQoZGVwdDMsICdNRUNIQU5JQ0FMIEVOR0lORUVSSU5HJywgJ01lY2hhbmljYWwgRUxBIGZvY3VzZXMgb24gYXBwbHlpbmcgdGhlb3JldGljYWwgY29uY2VwdHMgdG8gcmVhbC13b3JsZCBhcHBsaWNhdGlvbnMuIFN0dWRlbnRzIGJyaWRnZSB0aGUgZ2FwIGJldHdlZW4gdGhlb3J5IGFuZCBhcHBsaWNhdGlvbiBieSB0ZXN0aW5nIG1lY2hhbmljYWwgc3lzdGVtcyB0aHJvdWdoIGV4cGVyaW1lbnRzIGludm9sdmluZyBBcHBsaWVkIE1lY2hhbmljcyAoQU0pIGFuZCBTdHJlbmd0aCBvZiBNYXRlcmlhbHMgKFNNKScsIFsyMDBdKTtcclxuLy9wcm9kdWN0aW9uIGRlcGFydG1lbnQgZGl2XHJcbmNvbnN0IHByZURlcHQgPSBjcmVhdGVEZXB0KGRlcHQ0LCAnUFJPRFVDVElPTiBFTkdJTkVFUklORycsICdQcm9kdWN0aW9uIEVMQSBkZWx2ZXMgaW50byB0aGUgcHJhY3RpY2FsaXRpZXMgb2YgbWFudWZhY3R1cmluZy4gU3R1ZGVudHMgZXhwbG9yZSBlZmZpY2llbnQgcHJvZHVjdGlvbiB0ZWNobmlxdWVzIHRocm91Z2ggZXhwZXJpbWVudHMgaW4gYXJlYXMgbGlrZSBtYWNoaW5pbmcsIHdlbGRpbmcsIGNhc3RpbmcsIGZvcm1pbmcsIGFuZCBiZW5jaC1maXR0aW5nLCBkZXZlbG9waW5nIGEgc3Ryb25nIGZvdW5kYXRpb24gZm9yIGZ1dHVyZSBpbmR1c3RyaWFsIHN1Y2Nlc3MnLCBbMjAwXSk7XHJcbi8vYXBwZW5kIGRlcGFydG1lbnQgZGl2XHJcbmRlcHRHcm91cC5hcHBlbmRDaGlsZChjcGVEZXB0KTtcclxuZGVwdEdyb3VwLmFwcGVuZENoaWxkKGVlZURlcHQpO1xyXG5kZXB0R3JvdXAuYXBwZW5kQ2hpbGQobWVlRGVwdCk7XHJcbmRlcHRHcm91cC5hcHBlbmRDaGlsZChwcmVEZXB0KTtcclxuLy9hcHBlbmQgdG8gZGVwYXJ0bWVudCBjbGFzc1xyXG5kZXB0U2VjdGlvbi5hcHBlbmRDaGlsZChkZXB0SGVhZGVyKTtcclxuZGVwdFNlY3Rpb24uYXBwZW5kQ2hpbGQoZGVwdEdyb3VwKTtcclxuLy9hcHBlbmQgZGVwYXJ0bWVudCBTZWN0aW9uIHRvIE1haW5cclxubWFpbi5hcHBlbmRDaGlsZChkZXB0U2VjdGlvbik7XHJcblxyXG4vL2NyZWF0ZSBzZXJ2aWNlIHNlY3Rpb25cclxuY29uc3Qgc2VydmVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG5zZXJ2ZVNlY3Rpb24uaWQgPSAnc2VydmljZSc7XHJcbi8vc2VydmljZSBoZWFkZXJcclxuY29uc3Qgc2VydmVIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuc2VydmVIZWFkLnRleHRDb250ZW50ID0gXCJTZXJ2aWNlcyBXZSBPZmZlclwiO1xyXG4vL3RoZSBzZXJ2aWNlcyBjb250YWluZXJcclxuY29uc3Qgc2VydmVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuc2VydmVCb3guaWQgPSAnb2ZmZXJzJztcclxuLy9jcmVhdGUgc2VydmljZSBvbmVcclxuY29uc3Qgc2VydmUxID0gY3JlYXRlU2VydmljZSgnR3JhZGUtQSBSZXBvcnRzJywgJ1N0b3Agd2FzdGluZyB0aW1lIG9uIGluZm9ybWF0aW9uIG92ZXJsb2FkLiBFbGFib3JhdGUgZXF1aXBzIHlvdSB3aXRoIHRoZSBlc3NlbnRpYWwgcmVzb3VyY2VzIGFuZCBleHBlcnQgdGlwcyB0byBjcmFmdCBjb25jaXNlLCBpbXBhY3RmdWwgcmVwb3J0cyB0aGF0IHNob3djYXNlIHlvdXIgdW5kZXJzdGFuZGluZy4gUGx1cywgd2l0aCBvdXIgc2VhbWxlc3MgUERGIGRvd25sb2FkIGZlYXR1cmUsIHlvdSBjYW4gZWZmb3J0bGVzc2x5IHNhdmUgeW91ciByZXBvcnRzIGZvciBmdXR1cmUgcmVmZXJlbmNlIG9yIGVhc3kgc2hhcmluZyB3aXRoIGluc3RydWN0b3JzLicsICdMZWFybiBtb3JlJyk7XHJcbnNlcnZlMS5jbGFzc0xpc3QuYWRkKCdzZXJ2ZScpO1xyXG4vL2NyZWF0ZSBzZXJ2aWNlIHR3b1xyXG5jb25zdCBzZXJ2ZTIgPSBjcmVhdGVTZXJ2aWNlKCdHYWluIGluc2lnaHRmdWwga25vd2xlZGdlJywgJ0RvblxcJ3QganVzdCBtZW1vcml6ZSwgdHJ1bHkgdW5kZXJzdGFuZC4gRWxhYm9yYXRlIGVxdWlwcyB5b3Ugd2l0aCBpbnRlcmFjdGl2ZSBsZWFybmluZyB0b29scyBhbmQgZXhwZXJ0IGluc2lnaHRzLCB0cmFuc2Zvcm1pbmcgcGFzc2l2ZSBkYXRhIGludG8gYSByaWNoIHVuZGVyc3RhbmRpbmcgb2YgZW5naW5lZXJpbmcgY29uY2VwdHMuIFRoaXMgZGVlcGVyIGtub3dsZWRnZSBlbXBvd2VycyB5b3UgdG8gZXhjZWwgaW4geW91ciBleGFtcyBhbmQgZnV0dXJlIGVuZGVhdm9ycy4nLCAnTGVhcm4gbW9yZScpO1xyXG5zZXJ2ZTIuY2xhc3NMaXN0LmFkZCgnc2VydmUnKTtcclxuc2VydmUxLmlkID0gJ21pZGRsZSc7XHJcbi8vY3JlYXRlIHNlcnZpY2UgdGhyZWVcclxuY29uc3Qgc2VydmUzID0gY3JlYXRlU2VydmljZSgnTGFiIE1hc3RlcnkgTWFkZSBFYXN5JywgJ0VsYWJvcmF0ZSBzaGVkcyBsaWdodCBvbiBldmVuIHRoZSBtb3N0IGNvbXBsZXggZXhwZXJpbWVudHMsIHRyYW5zZm9ybWluZyB5b3UgZnJvbSBiZXdpbGRlcmVkIGJlZ2lubmVyIHRvIGNvbmZpZGVudCBleHBlcnQuIFRoaXMgbmV3Zm91bmQgdW5kZXJzdGFuZGluZyBlbXBvd2VycyB5b3UgdG8gdGFja2xlIHlvdXIgRUxBcyB3aXRoIGEgd2lubmluZyBzdHJhdGVneS4nLCAnTGVhcm4gbW9yZScpO1xyXG5zZXJ2ZTMuY2xhc3NMaXN0LmFkZCgnc2VydmUnKTtcclxuLy9BcHBlbmQgc2VydmljZXMgdG8gIHNlcnZlIGJveFxyXG5zZXJ2ZUJveC5hcHBlbmRDaGlsZChzZXJ2ZTIpO1xyXG5zZXJ2ZUJveC5hcHBlbmRDaGlsZChzZXJ2ZTEpO1xyXG5zZXJ2ZUJveC5hcHBlbmRDaGlsZChzZXJ2ZTMpO1xyXG4vL2NyZWF0ZSBzZXJ2aWNlIGNhbGwgdG8gYWN0aW9uXHJcbmNvbnN0IHNlcnZlQWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbnNlcnZlQWN0aW9uLnRleHRDb250ZW50ID0gJ0dFVCBTVEFSVEVEJztcclxuc2VydmVBY3Rpb24uaWQgPSAnc2VydmVBY3Rpb24nO1xyXG4vL0FwcGVuZCBzZXJ2aWNlIGl0ZW1zIHRvIHNlcnZpY2Ugc2VjdGlvblxyXG5zZXJ2ZVNlY3Rpb24uYXBwZW5kQ2hpbGQoc2VydmVIZWFkKTtcclxuc2VydmVTZWN0aW9uLmFwcGVuZENoaWxkKHNlcnZlQm94KTtcclxuc2VydmVTZWN0aW9uLmFwcGVuZENoaWxkKHNlcnZlQWN0aW9uKTtcclxuLy9BcHBlbmQgc2VydmljZSBzZWN0aW9uIHRvIG1haW5cclxubWFpbi5hcHBlbmRDaGlsZChzZXJ2ZVNlY3Rpb24pO1xyXG5cclxuXHJcbi8vY3JlYXRlIGFib3V0IHNlY3Rpb25cclxuY29uc3QgYWJvdXRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG5hYm91dFNlY3Rpb24uaWQgPSAnYWJvdXRTZWN0aW9uJztcclxuLy9jcmVhdGUgYWJvdXQgcGljdHVyZSBkaXZcclxuY29uc3QgcGljRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbnBpY0Rpdi5pZCA9ICd3aHlVcyc7XHJcbi8vY3JlYXRlIHBpY3R1cmUgaW4gYWJvdXQgZGl2XHJcbmNvbnN0IGFib3V0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbmFib3V0SW1nLnNyYyA9IGFib3V0UGljO1xyXG4vL2NyZWF0ZSBoZWFkaW5nIGZvciBhYm91dCBzZWN0aW9uXHJcbmNvbnN0IGFib3V0SGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbmFib3V0SGVhZC50ZXh0Q29udGVudCA9ICdXSFkgVVM/JztcclxuLy9BcHBlbmQgdG8gcGljdHVyZSBEaXZcclxucGljRGl2LmFwcGVuZENoaWxkKGFib3V0SW1nKTtcclxucGljRGl2LmFwcGVuZENoaWxkKGFib3V0SGVhZCk7XHJcbi8vY3JlYXRlIEFib3V0IHRleHQgZGl2XHJcbmNvbnN0IGFib3V0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmFib3V0RGl2LmlkID0gJ2Fib3V0JztcclxuLy9jcmVhdGUgYWJvdXQgdGV4dCBibG9ja3F1b3RlXHJcbmNvbnN0IGFib3V0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuYWJvdXRUZXh0LnRleHRDb250ZW50ID0gJ1wiV2UgdW5kZXJzdGFuZCB0aGUgc3RydWdnbGUuXFxuIEp1Z2dsaW5nIGNvbXBsZXggZW5naW5lZXJpbmdcXG4gY29uY2VwdHMsIGNvbmR1Y3RpbmcgaW50cmljYXRlXFxuIGV4cGVyaW1lbnRzLCBhbmQgdGhlbiBmYWNpbmdcXG4gdGhlIGRhdW50aW5nIHRhc2sgb2Ygd3JpdGluZyBhXFxuIGNsZWFyIGFuZCBjb25jaXNlIGxhYiByZXBvcnRcXG4gY2FuIGxlYXZlIGV2ZW4gdGhlIGJyaWdodGVzdFxcbiBzdHVkZW50IGZlZWxpbmcgb3ZlcndoZWxtZWQuXFxuIFRoYXRcXCdzIHdoZXJlIHdlIGNvbWUgaW4uXCInO1xyXG4vL0FwcGVuZCBhYm91dCB0ZXh0IHRvIGl0IGNvbnRhaW5lclxyXG5hYm91dERpdi5hcHBlbmRDaGlsZChhYm91dFRleHQpO1xyXG4vL0FwcGVuZCBhYm91dCBjb250ZW50cyB0byB0aGUgc2VjdGlvblxyXG5hYm91dFNlY3Rpb24uYXBwZW5kQ2hpbGQocGljRGl2KTtcclxuYWJvdXRTZWN0aW9uLmFwcGVuZENoaWxkKGFib3V0RGl2KTtcclxuLy9BcHBlbmQgYWJvdXQgc2VjdGlvbiB0byBtYWluXHJcbm1haW4uYXBwZW5kQ2hpbGQoYWJvdXRTZWN0aW9uKTtcclxuXHJcbi8vY3JlYXRlIGNvbnRhY3Qgc2VjdGlvblxyXG5jb25zdCByZWFjaFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbnJlYWNoU2VjdGlvbi5pZCA9ICdjb250YWN0JztcclxuLy9jcmVhdGUgY29udGFjdCBoZWFkZXJcclxuY29uc3QgcmVhY2hIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG5yZWFjaEhlYWRlci50ZXh0Q29udGVudCA9ICdDT05UQUNUIFVTJztcclxuLy9jcmVhdGUgZm9ybSBlbGVtZW50XHJcbmNvbnN0IGZvcm0gPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG5jb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbnVzZXJOYW1lLnR5cGUgPSAndGV4dCc7XHJcbnVzZXJOYW1lLnBsYWNlaG9sZGVyID0gJ05hbWUnO1xyXG51c2VyTmFtZS5pZCA9ICd1c2VyTmFtZSc7XHJcbnVzZXJOYW1lLmNsYXNzTGlzdC50b2dnbGUoJ2lucHV0Jyk7XHJcbmNvbnN0IHVzZXJFbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbnVzZXJFbWFpbC50eXBlID0gJ2VtYWlsJztcclxudXNlckVtYWlsLnBsYWNlaG9sZGVyID0gJ0VtYWlsJztcclxudXNlckVtYWlsLmlkID0gJ3VzZXJFbWFpbCc7XHJcbnVzZXJFbWFpbC5jbGFzc0xpc3QudG9nZ2xlKCdpbnB1dCcpO1xyXG5jb25zdCB1c2VyUGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG51c2VyUGhvbmUucGxhY2Vob2xkZXIgPSAnUGhvbmUgTnVtYmVyJztcclxudXNlclBob25lLnR5cGUgPSAnbnVtYmVyJztcclxudXNlclBob25lLmlkID0gJ3VzZXJQaG9uZSc7XHJcbnVzZXJQaG9uZS5jbGFzc0xpc3QudG9nZ2xlKCdpbnB1dCcpO1xyXG5jb25zdCB1c2VyTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbnVzZXJNZXNzYWdlLnBsYWNlaG9sZGVyID0gJ0VudGVyIE1lc3NhZ2UnO1xyXG51c2VyTWVzc2FnZS5pZCA9ICd1c2VyTWVzc2FnZSc7XHJcbnVzZXJQaG9uZS5jbGFzc0xpc3QudG9nZ2xlKCdpbnB1dCcpO1xyXG5jb25zdCB1c2VyU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxudXNlclN1Ym1pdC50eXBlID0gJ3N1Ym1pdCc7XHJcbnVzZXJTdWJtaXQudGV4dENvbnRlbnQgPSAnU1VCTUlUJztcclxudXNlclN1Ym1pdC5pZCA9ICd1c2VyU3VibWl0JztcclxuLy9BcHBlbmQgZm9ybSBjaGlsZCBlbGVtZW50c1xyXG5mb3JtLmFwcGVuZENoaWxkKHVzZXJOYW1lKTtcclxuZm9ybS5hcHBlbmRDaGlsZCh1c2VyRW1haWwpO1xyXG5mb3JtLmFwcGVuZENoaWxkKHVzZXJQaG9uZSk7XHJcbmZvcm0uYXBwZW5kQ2hpbGQodXNlck1lc3NhZ2UpO1xyXG5mb3JtLmFwcGVuZENoaWxkKHVzZXJTdWJtaXQpO1xyXG4vL0FwcGVuZCBlbGVtZW50IHRvIGNvbnRhY3Qgc2VjdGlvblxyXG5yZWFjaFNlY3Rpb24uYXBwZW5kQ2hpbGQocmVhY2hIZWFkZXIpO1xyXG5yZWFjaFNlY3Rpb24uYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbi8vQXBwZW5kIGNvbnRhY3Qgc2VjdGlvbiB0byBtYWluXHJcbm1haW4uYXBwZW5kQ2hpbGQocmVhY2hTZWN0aW9uKTtcclxuLy9BcHBlbmQgbWFpbiB0byBib2R5XHJcbmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XHJcblxyXG4vL2NhbGwgdGhlIGNhcm91c2VsIGZ1bmN0aW9uXHJcbmNhcm91c2VsKCk7XHJcblxyXG4vL2Rpc3BsYXkgZm9vdGVyXHJcbnJlbmRlckZvb3Rlcihib2R5LCBbaG1lLCBycHQsIGFidF0pO1xyXG5cclxuZGlzcGxheUFJKGJvZHkpO1xyXG5jcmVhdGVHZW1pbmkoYm9keSk7XHJcbmNyZWF0ZUNoYXRHcHQoYm9keSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9