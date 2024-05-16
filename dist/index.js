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
            alert('active');
            document.querySelector('#hero').style.marginTop = '20vh'; 
        }
        else{
            document.querySelector('#hero').style.marginTop = '0';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FtRTtBQUNUO0FBQ0s7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGtCQUFrQiwyREFBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxpQkFBaUIsa0VBQUs7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQkFBa0IscUVBQU07QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RXVEO0FBQ2M7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHdEQUFXLENBQUMsd0VBQUs7QUFDckM7QUFDQSxrQkFBa0IseURBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGtCQUFrQix5QkFBeUI7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRG1FO0FBQ1A7QUFDQTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix3REFBVyxDQUFDLGdFQUFJO0FBQ2hDO0FBQ0E7QUFDQSxlQUFlLHlEQUFZO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw4REFBTTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBVTtBQUNWO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUMwRDtBQUNHO0FBQ0Q7QUFDQztBQUNEO0FBQ0M7OztBQUc3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyx5Q0FBeUMsOERBQUksc0VBQXNFO0FBQ3hILEtBQUssK0NBQStDLGlFQUFJLHdFQUF3RTtBQUNoSSxLQUFLLHlEQUF5RCxnRUFBSSxvRUFBb0U7QUFDdEksS0FBSyx5REFBeUQsaUVBQUksaUZBQWlGO0FBQ25KLEtBQUssK0RBQStELGdFQUFJLHVFQUF1RTtBQUMvSSxLQUFLLGdFQUFnRSxpRUFBSSxxRUFBcUU7QUFDOUk7QUFDQSxtQkFBbUIsd0JBQXdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHFCQUFxQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JLQTtBQUMyRjtBQUM3QztBQUNBO0FBQ3NCO0FBQ3BFOztBQUUwQjs7QUFFMUI7QUFDMEQ7QUFDRTtBQUNBO0FBQ0E7QUFDQTs7QUFFNUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZEQUFZOztBQUVaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUVBQW1CO0FBQ25CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw0REFBVSxDQUFDLGdFQUFLO0FBQ2hDO0FBQ0EsZ0JBQWdCLDREQUFVLENBQUMsa0VBQUs7QUFDaEM7QUFDQSxnQkFBZ0IsNERBQVUsQ0FBQyxrRUFBSztBQUNoQztBQUNBLGdCQUFnQiw0REFBVSxDQUFDLGtFQUFLO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwrREFBYTtBQUM1QjtBQUNBO0FBQ0EsZUFBZSwrREFBYTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtEQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0RBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBEQUFROztBQUVSO0FBQ0EsNkRBQVk7O0FBRVosc0RBQVM7QUFDVCx5REFBWTtBQUNaLDBEQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxhYm9yYXRlLy4vc3JjL0NTUy9zdHlsZS5jc3M/MDU4MCIsIndlYnBhY2s6Ly9lbGFib3JhdGUvLi9zcmMvU0NSSVBUUy9tb2R1bGVzL2FpLmpzIiwid2VicGFjazovL2VsYWJvcmF0ZS8uL3NyYy9TQ1JJUFRTL21vZHVsZXMvZm9vdGVyLmpzIiwid2VicGFjazovL2VsYWJvcmF0ZS8uL3NyYy9TQ1JJUFRTL21vZHVsZXMvaGVhZGVyLmpzIiwid2VicGFjazovL2VsYWJvcmF0ZS8uL3NyYy9TQ1JJUFRTL21vZHVsZXMvbGFuZGluZy5qcyIsIndlYnBhY2s6Ly9lbGFib3JhdGUvLi9zcmMvU0NSSVBUUy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IGdlbWluaSBmcm9tICcuLi8uLi9SRVNPVVJDRVMvaW1hZ2VzL2dvb2dsZS1nZW1pbmktaWNvbi5wbmcnO1xuaW1wb3J0IGNoYXRncHQgZnJvbSAnLi4vLi4vUkVTT1VSQ0VTL2ltYWdlcy9jaGF0LWdwdC5wbmcnO1xuaW1wb3J0IGFpUGljIGZyb20gJy4uLy4uL1JFU09VUkNFUy9pbWFnZXMvQUktY2hhdGJvdC1pY29uLnBuZyc7XG5jb25zdCBkaXNwbGF5QUkgPSAoYm9keSkgPT4ge1xuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGdwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdwdC5jbGFzc0xpc3QuYWRkKCdhaURpdicpO1xuICAgIGdwdC5jbGFzc0xpc3QuYWRkKCdwb3BVcCcpO1xuICAgIGdwdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoYXRHUFQnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dlbWluaUFJJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KTtcbiAgICBjb25zdCBncHRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZ3B0SWNvbi5zcmMgPSBjaGF0Z3B0O1xuICAgIGdwdC5hcHBlbmRDaGlsZChncHRJY29uKTtcbiAgICBjb25zdCBhaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFpLmNsYXNzTGlzdC5hZGQoJ2FpRGl2Jyk7XG4gICAgYWkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGdwdC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgZ2VtLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIH0pO1xuICAgIGNvbnN0IGFpSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGFpSWNvbi5zcmMgPSBhaVBpYztcbiAgICBhaS5hcHBlbmRDaGlsZChhaUljb24pO1xuICAgIGNvbnN0IGdlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdlbS5jbGFzc0xpc3QuYWRkKCdhaURpdicpO1xuICAgIGdlbS5jbGFzc0xpc3QuYWRkKCdwb3BVcCcpO1xuICAgIGdlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoYXRHUFQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2VtaW5pQUknKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9KTtcbiAgICBjb25zdCBnZW1JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZ2VtSWNvbi5zcmMgPSBnZW1pbmk7XG4gICAgZ2VtLmFwcGVuZENoaWxkKGdlbUljb24pO1xuICAgIGJveC5pZCA9ICdhaSc7XG4gICAgYm94LmFwcGVuZENoaWxkKGdwdCk7XG4gICAgYm94LmFwcGVuZENoaWxkKGFpKTtcbiAgICBib3guYXBwZW5kQ2hpbGQoZ2VtKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGJveCk7XG59O1xuY29uc3QgY3JlYXRlQWlCb3ggPSAodXJsLCB0aXRsZSwgaWRlKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGFpRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGF0R1BUJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dlbWluaUFJJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KTtcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gJ0FJIHBvcC11cCBtb2RhbCc7XG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKCdhaVRleHQnKTtcbiAgICBjbG9zZS50ZXh0Q29udGVudCA9ICd4JztcbiAgICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdjbG9zZScpO1xuICAgIGNvbnN0IGZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgZnJhbWUuc3JjID0gdXJsO1xuICAgIGZyYW1lLm5hbWUgPSB0aXRsZTtcbiAgICBmcmFtZS5pZCA9IGlkZTtcbiAgICBkaXYuaWQgPSB0aXRsZTtcbiAgICBhaURpdi5jbGFzc0xpc3QuYWRkKCdmcmFtZUJveCcpO1xuICAgIGFpRGl2LmFwcGVuZENoaWxkKGZyYW1lKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNsb3NlKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYWlEaXYpO1xuICAgIHJldHVybiBkaXY7XG59O1xuY29uc3QgY3JlYXRlR2VtaW5pID0gKGJvZHkpID0+IHtcbiAgICBjb25zdCBnZW1pbmkgPSBjcmVhdGVBaUJveChcImh0dHBzOi8vYm90Lm9yaW1vbi5haS8/dGVuYW50SWQ9NWI4YTM2MGMtNzEwYS00NGYyLTg3YmMtNWY5MWZjMjExOTExJmZ1bGxTY3JlZW5Cb3Q9dHJ1ZVwiICwgJ2dlbWluaUFJJywgJ2dlbWluaScpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZ2VtaW5pKTtcbn07XG5jb25zdCBjcmVhdGVDaGF0R3B0ID0gKGJvZHkpID0+IHtcbiAgICBjb25zdCBjaGF0R1BUID0gY3JlYXRlQWlCb3goXCJodHRwczovL3d3dy5jaGF0YmFzZS5jby9jaGF0Ym90LWlmcmFtZS9NQXNTN3ZkOHlobHo0LXJraEFTQkxcIiwgJ2NoYXRHUFQnLCAnY2hhdGdwdCcpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoY2hhdEdQVCk7XG59O1xuZXhwb3J0e2NyZWF0ZUdlbWluaSwgY3JlYXRlQ2hhdEdwdCwgZGlzcGxheUFJfTsiLCJpbXBvcnQge2NyZWF0ZU5hdkJhciwgY3JlYXRlQnJhbmR9IGZyb20gJy4vbGFuZGluZy5qcyc7XG5pbXBvcnQgbG9nbzEgZnJvbSAnLi4vLi4vUkVTT1VSQ0VTL2ltYWdlcy9lbGFib3JhdGUtZm9vdGVyLWxvZ28ucG5nJztcbmNvbnN0IHJlbmRlckZvb3RlciA9IChib2R5LCBhcnJheSkgPT4ge1xuLy9jcmVhdGUgZm9vdGVyXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbi8vY3JlYXRlIGxlZnQgZm9vdGVyIHNlY3Rpb25cbmNvbnN0IGxlZnRGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4vL2NyZWF0ZSBmb290ZXIgYnJhbmRcbmNvbnN0IGZvb3RlckJyYW5kID0gY3JlYXRlQnJhbmQobG9nbzEsICcnKTtcbi8vY3JlYXRlIGZvb3RlciBuYXZpZ2F0aW9uIGxpbmtzXG5jb25zdCBmb290ZXJOYXYgPSBjcmVhdGVOYXZCYXIoYXJyYXkpO1xuZm9vdGVyTmF2LmlkID0gJ2Zvb3Rlck5hdic7XG4vL2FwcGVuZCBjaGlsZHJlbiB0byBsZWZ0Rm9vdGVyXG5sZWZ0Rm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckJyYW5kKTtcbmxlZnRGb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyTmF2KTtcbmxlZnRGb290ZXIuaWQgPSAnbGVmdEZvb3QnO1xuLy9BcHBlbmQgbGVmdCBmb290ZXIgc2VjdGlvbiB0byB0aGUgZm9vdGVyXG5mb290ZXIuYXBwZW5kQ2hpbGQobGVmdEZvb3Rlcik7XG4vL2NyZWF0ZSByaWdodCBmb290ZXIgc2VjdGlvblxuY29uc3QgcmlnaHRGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5yaWdodEZvb3Rlci5pZCA9ICdyaWdodEZvb3QnO1xuLy9jcmVhdGUgIHN1YnNjcmliZSB0ZXh0XG5jb25zdCBzdWJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuc3ViVGV4dC50ZXh0Q29udGVudCA9IFwiR2V0IG91ciBsYXRlc3QgaW5ub3ZhdGl2ZSBuZXdzXCI7XG4vL2NyZWF0ZSBzdWJzY3JpYmUgZGl2XG5jb25zdCBzdWJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnN1YkRpdi5pZCA9ICdzdWJzY3JpYmUnO1xuLy9jcmVhdGUgZm9vdGVyIHN1YnNjcmliZSBpbnB1dFxuY29uc3Qgc3ViSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuc3ViSW5wdXQudHlwZSA9ICdlbWFpbCc7XG5zdWJJbnB1dC5wbGFjZWhvbGRlciA9ICdFbWFpbCBBZGRyZXNzJztcbnN1YklucHV0LmlkID0gJ3N1YkVtYWlsJztcbi8vY3JlYXRlIGZvb3RlciBzdWJzY3JpYmUgYnV0dG9uXG5jb25zdCBzdWJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnN1YkJ1dHRvbi50ZXh0Q29udGVudCA9ICdTdWJzY3JpYmUnO1xuc3ViQnV0dG9uLmlkID0gJ3N1YkJ1dHRvbic7XG4vL0FwcGVuZCBzdWIgaW5wdXQgYW5kIGJ1dHRvbiB0byBpdCBEaXZcbnN1YkRpdi5hcHBlbmRDaGlsZChzdWJJbnB1dCk7XG5zdWJEaXYuYXBwZW5kQ2hpbGQoc3ViQnV0dG9uKTtcbi8vY3JlYXRlIGNvcHlyaWdodCB0ZXh0XG5jb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvcHlyaWdodC5pbm5lckhUTUwgPSBgJiMxNjk7IENvcHlyaWdodCA8c3Bhbj4ke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX08L3NwYW4+YDtcbi8vY3JlYXRlIHJlc2VydmVkIHJpZ2h0IHRleHRcbmNvbnN0IHJlc2VydmVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xucmVzZXJ2ZWQuaW5uZXJIVE1MID0gJ0FsbCByaWdodHMgcmVzZXJ2ZWQuIEEgPHNwYW4+c2FiaTwvc3Bhbj5EZXZzIGluaXRpYXRpdmUnO1xuLy9BcHBlbmQgY2hpbGRyZW4gdG8gcmlnaHQgZm9vdGVyIGVsZW1lbnRcbnJpZ2h0Rm9vdGVyLmFwcGVuZENoaWxkKHN1YlRleHQpO1xucmlnaHRGb290ZXIuYXBwZW5kQ2hpbGQoc3ViRGl2KTtcbnJpZ2h0Rm9vdGVyLmFwcGVuZENoaWxkKGNvcHlyaWdodCk7XG5yaWdodEZvb3Rlci5hcHBlbmRDaGlsZChyZXNlcnZlZCk7XG4vL0FwcGVuZCByaWdodCBmb290ZXIgdG8gZm9vdGVyXG5mb290ZXIuYXBwZW5kQ2hpbGQocmlnaHRGb290ZXIpO1xuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xufTtcbmV4cG9ydCB7cmVuZGVyRm9vdGVyfTsiLCJpbXBvcnQge2NyZWF0ZU5hdkJhciwgY3JlYXRlQnJhbmQsIGNyZWF0ZU1lbnV9IGZyb20gJy4vbGFuZGluZy5qcyc7XG5pbXBvcnQgbG9nbyBmcm9tICcuLi8uLi9SRVNPVVJDRVMvaW1hZ2VzL2VsYUJvcmF0ZWxvZ28ucG5nJztcbmltcG9ydCBzZWFyY2ggZnJvbSAnLi4vLi4vUkVTT1VSQ0VTL2ltYWdlcy9zZWFyY2gtaWNvbi5wbmcnO1xuY29uc3QgcmVuZGVySGVhZGVyID0gKGJvZHksIGFycmF5KSA9PiB7XG4vL2NyZWF0ZSBoZWFkZXIgZWxlbWVudFxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4vL2NyZWF0ZSBpY29uIGRpdlxuY29uc3QgaWNvbkRpdiA9IGNyZWF0ZUJyYW5kKGxvZ28pO1xuaWNvbkRpdi5pZCA9ICdpY29uRGl2Jztcbi8vY3JlYXRlIG5hdkJhclxuY29uc3QgbmF2Qm94ID0gY3JlYXRlTmF2QmFyKGFycmF5KTtcbm5hdkJveC5jbGFzc0xpc3QuYWRkKCduYXYnKTsgXG4vL2NyZWF0ZSBzZWFyY2ggQm94IGRpdlxuY29uc3Qgc2VhcmNoRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zZWFyY2hEaXYuaWQgPSAnc2VhcmNoQm94Jztcbi8vY3JlYXRlIHNlYXJjaCBJY29uXG5jb25zdCBzZWFyY2hJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5zZWFyY2hJY29uLnNyYyA9ICBzZWFyY2g7XG4vL2NyZWF0ZSBzZWFyY2ggaW5wdXQgZmllbGRcbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbnNlYXJjaElucHV0LnR5cGUgPSBcInRleHRcIjtcbnNlYXJjaElucHV0LmlkID0gXCJzZWFyY2hJbnB1dFwiO1xuLy9BZGQgc2VhcmNoQm94IGl0ZW1zIHRvIHBhcmVudFxuc2VhcmNoRGl2LmFwcGVuZENoaWxkKHNlYXJjaElucHV0KTtcbnNlYXJjaERpdi5hcHBlbmRDaGlsZChzZWFyY2hJY29uKTtcbi8vQWRkIGhlYWRlciBpdGVtcyB0byBoZWFkZXJcbmhlYWRlci5hcHBlbmRDaGlsZChpY29uRGl2KTtcbmhlYWRlci5hcHBlbmRDaGlsZChuYXZCb3gpO1xuaGVhZGVyLmFwcGVuZENoaWxkKHNlYXJjaERpdik7XG4vL2NyZWF0ZSBtZW51XG5jcmVhdGVNZW51KGhlYWRlcik7XG4vL0FkZCBoZWFkZXIgdG8gYm9keSB0YWdcbmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbn1cbmV4cG9ydCB7cmVuZGVySGVhZGVyfTsiLCIvL2ltcG9ydCBpbWFnZXNcbmltcG9ydCBpbWcxIGZyb20gJy4uLy4uL1JFU09VUkNFUy9pbWFnZXMvZmVtYWxlLWVuZ3IuanBnJztcbmltcG9ydCBpbWcyIGZyb20gJy4uLy4uL1JFU09VUkNFUy9pbWFnZXMvZWVlLWVuZ3ItZ2lybHMuanBnJztcbmltcG9ydCBpbWczIGZyb20gJy4uLy4uL1JFU09VUkNFUy9pbWFnZXMvZWVlLW1hbGUtZW5nci5qcGcnO1xuaW1wb3J0IGltZzQgZnJvbSAnLi4vLi4vUkVTT1VSQ0VTL2ltYWdlcy9jcGUtZW5nci1ncm91cC5qcGcnO1xuaW1wb3J0IGltZzUgZnJvbSAnLi4vLi4vUkVTT1VSQ0VTL2ltYWdlcy9tdGUtbWFsZS1lbmdyLmpwZyc7XG5pbXBvcnQgaW1nNiBmcm9tICcuLi8uLi9SRVNPVVJDRVMvaW1hZ2VzL2NwZS1lbmdyLWdpcmxzLmpwZyc7XG5cblxuLy9BIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBuYXYgbGlua3MgYW5kIHJldHVybnMgdGhlIGRpdlxuY29uc3QgY3JlYXRlTmF2TGluayA9IChyZWYsIHRleHQpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGNvbnN0IGxpbmtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxpbmtUZXh0LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBsaW5rLmFwcGVuZENoaWxkKGxpbmtUZXh0KTtcbiAgICBsaW5rLmhyZWYgPSByZWY7XG4gICAgZGl2LmFwcGVuZENoaWxkKGxpbmspO1xuICAgIHJldHVybiBkaXY7XG59O1xuLy9mdW5jdGlvbiB0byBjcmVhdGUgbWVudVxuY29uc3QgY3JlYXRlTWVudSA9IChoZWFkZXIpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgIGxldCBiYXJzID0gW107XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDM7IGkrKyl7XG4gICAgICAgIGJhcnNbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYmFyc1tpXS5jbGFzc0xpc3QuYWRkKCdiYXJzJyk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChiYXJzW2ldKTtcbiAgICB9XG4gICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2JykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgXG4gICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYnKS5jbGFzc05hbWUgPT09ICduYXYgYWN0aXZlJyl7XG4gICAgICAgICAgICBhbGVydCgnYWN0aXZlJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVybycpLnN0eWxlLm1hcmdpblRvcCA9ICcyMHZoJzsgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZXJvJykuc3R5bGUubWFyZ2luVG9wID0gJzAnO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGRpdik7XG59XG5jb25zdCBjcmVhdGVCcmFuZCA9IChsb2dvLCBuYW1lID0gJ2VsYUJvcmF0ZScpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvL2NyZWF0ZSBsb2dvIGljb25cbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaWNvbi5zcmMgPSBsb2dvO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAvL2NyZWF0ZSBicmFuZCBuYW1lXG4gICAgY29uc3QgYnJhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGJyYW5kLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnJhbmQpO1xuICAgIHJldHVybiBkaXY7XG59XG5jb25zdCBjcmVhdGVOYXZCYXIgPSAoYXJyYXkpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICAvL2NyZWF0ZSBpbmRpdmlkdWFsIG5hdkxpbmtzIHdpdGggaW1wb3J0ZWQgZnVuY3Rpb25cbiAgICBjb25zdCBob21lTmF2ID0gY3JlYXRlTmF2TGluayhhcnJheVswXSwgXCJIb21lXCIpXG4gICAgY29uc3QgYWJvdXROYXYgPSBjcmVhdGVOYXZMaW5rKGFycmF5WzJdLCBcIkFib3V0XCIpO1xuICAgIGNvbnN0IHJlcG9ydE5hdiA9IGNyZWF0ZU5hdkxpbmsoYXJyYXlbMV0sIFwiUmVwb3J0c1wiKTtcbiAgICBjb25zdCBjb250YWN0TmF2ID0gY3JlYXRlTmF2TGluayhcIm1haWx0bzppbmZvLnNhYmlkZXZzQGdtYWlsLmNvbVwiLCBcIkNvbnRhY3QgVXNcIik7XG4gICAgLy9BcHBlbmQgbmF2TGlua3MgdG8gbmF2QmFyXG4gICAgZGl2LmFwcGVuZENoaWxkKGhvbWVOYXYpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChhYm91dE5hdik7XG4gICAgZGl2LmFwcGVuZENoaWxkKHJlcG9ydE5hdik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGNvbnRhY3ROYXYpO1xuICAgIHJldHVybiBkaXY7XG59XG5jb25zdCBnZW5lcmF0ZUhlcm9TZWN0aW9uID0gKHNlY3Rpb24pID0+ICB7XG4gICAgY29uc3QgaGVyb0NvbnRlbnQgPSBbXG4gICAge3RleHQ6ICdFTEEgbWFkZScsIHdvcmQ6ICdFYXN5ISEhJyxpbWFnZTogaW1nMSxjbGFzczogJ2dyb3VwJyxpbm5lcjogJyMxNDIxM2QnLG91dGVyOiAnI2ZjYTMxMScsY2FsbDogJ0dFVCBTVEFSVEVEJ30sXG4gICAge3RleHQ6ICdMYWIgRGF5cz8nLCB3b3JkOiAnQSBCcmVlemUhISEnLCBpbWFnZTogaW1nMiwgY2xhc3M6ICdncm91cCcsIGlubmVyOiAnIzAwMDAwMCcsIG91dGVyOiAnI2ZjYTMxMScsIGNhbGw6ICdDSE9PU0UgVVMnfSxcbiAgICB7dGV4dDogJ0VuZ2luZWVyaW5nIExhYnMsJywgd29yZDogJ1NpbXBsaWZpZWQhISEnLCBpbWFnZTogaW1nMyxjbGFzczogJ2dyb3VwJywgaW5uZXI6ICcjMDAwMDAwJywgb3V0ZXI6ICcjMTQyMTNkJywgY2FsbDogJ1RBUCBJTid9LFxuICAgIHt0ZXh0OiAnRG9uXFwndCBXaW5nIEl0LCcsIHdvcmQ6ICdFbGFib3JhdGUgSXQhISEnLCBpbWFnZTogaW1nNCxjbGFzczogJ2dyb3VwJywgaW5uZXI6ICAnIzAwMDAwMCcsIG91dGVyOiAnI2U1ZTVlNScsIGNhbGw6ICdVTkxFQVNIICBQT1RFTlRJQUwnfSxcbiAgICB7dGV4dDogJ1VubG9jayBMYWIgU2VjcmV0cyB3aXRoLCcsIHdvcmQ6ICdFbGFib3JhdGUhISEnLCBpbWFnZTogaW1nNSxjbGFzczogJ2dyb3VwJywgaW5uZXI6ICcjMTQyMTNkJywgb3V0ZXI6ICcjZTVlNWU1JywgY2FsbDogJ1NUQVJUIE5PVyd9LFxuICAgIHt0ZXh0OiAnR3JhZGVzIFNvYXJpbmcsIEVsYWJvcmF0ZScsIHdvcmQ6ICdUaGFuayBZb3UhISEnLCBpbWFnZTogaW1nNixjbGFzczogJ2dyb3VwJywgaW5uZXI6ICcjMTQyMTNkJywgb3V0ZXI6ICcjMDAwMDAwJywgY2FsbDogJ0RJVkUgSU4nfSxcbl07XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGhlcm9Db250ZW50Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgaGVyb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB0ZXh0Q29udGFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZXh0Q29udGFpbi5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICAgICAgY29uc3QgdGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZXh0RGl2LmNsYXNzTGlzdC5hZGQoJ3RleHREaXYnKTtcbiAgICAgICAgY29uc3QgaGVyb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGVyb1RleHQuY2xhc3NMaXN0LmFkZCgnaGVyb1RleHQnKTtcbiAgICAgICAgY29uc3QgaGVyb1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGVyb1NwYW4uY2xhc3NMaXN0LmFkZCgnc3BhbicpO1xuICAgICAgICBjb25zdCBoZXJvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGhlcm9JbWcuY2xhc3NMaXN0LmFkZChgJHtoZXJvQ29udGVudFtpXS5jbGFzc31gKTtcbiAgICAgICAgY29uc3QgaW5uZXJDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaW5uZXJDaXJjbGUuY2xhc3NMaXN0LmFkZCgnaW5uZXJDaXJjbGUnKTtcbiAgICAgICAgY29uc3Qgb3V0ZXJDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgb3V0ZXJDaXJjbGUuY2xhc3NMaXN0LmFkZCgnb3V0ZXJDaXJjbGUnKTtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFjdGlvbi5jbGFzc0xpc3QuYWRkKCdjYWxsQWN0aW9uJyk7XG4gICAgICAgIGhlcm9UZXh0LnRleHRDb250ZW50ID0gaGVyb0NvbnRlbnRbaV0udGV4dDtcbiAgICAgICAgaGVyb1NwYW4udGV4dENvbnRlbnQgPSBoZXJvQ29udGVudFtpXS53b3JkO1xuICAgICAgICBoZXJvSW1nLnNyYyA9IGhlcm9Db250ZW50W2ldLmltYWdlO1xuICAgICAgICBpbm5lckNpcmNsZS5zdHlsZS5iYWNrZ3JvdW5kID0gaGVyb0NvbnRlbnRbaV0uaW5uZXI7XG4gICAgICAgIG91dGVyQ2lyY2xlLnN0eWxlLmJhY2tncm91bmQgPSBoZXJvQ29udGVudFtpXS5vdXRlcjtcbiAgICAgICAgYWN0aW9uLnRleHRDb250ZW50ID0gaGVyb0NvbnRlbnRbaV0uY2FsbDtcbiAgICAgICAgYWN0aW9uLnN0eWxlLmJhY2tncm91bmQgPSBoZXJvQ29udGVudFtpXS5pbm5lcjtcbiAgICAgICAgYWN0aW9uLnN0eWxlLmJveFNoYWRvdyA9IGA1cHggNXB4IDEuNXB4IDFweCAke2hlcm9Db250ZW50W2ldLm91dGVyfWA7XG4gICAgICAgIHRleHREaXYuYXBwZW5kQ2hpbGQoaGVyb1RleHQpO1xuICAgICAgICB0ZXh0RGl2LmFwcGVuZENoaWxkKGhlcm9TcGFuKTtcbiAgICAgICAgdGV4dENvbnRhaW4uYXBwZW5kQ2hpbGQodGV4dERpdik7XG4gICAgICAgIHRleHRDb250YWluLmFwcGVuZENoaWxkKGFjdGlvbik7XG4gICAgICAgIGhlcm9EaXYuYXBwZW5kQ2hpbGQodGV4dENvbnRhaW4pO1xuICAgICAgICBoZXJvRGl2LmFwcGVuZENoaWxkKGhlcm9JbWcpO1xuICAgICAgICBoZXJvRGl2LmFwcGVuZENoaWxkKGlubmVyQ2lyY2xlKTtcbiAgICAgICAgaGVyb0Rpdi5hcHBlbmRDaGlsZChvdXRlckNpcmNsZSk7XG4gICAgICAgIGhlcm9EaXYuY2xhc3NMaXN0LnRvZ2dsZSgnaGVyb1NsaWRlJyk7XG4gICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaGVyb0Rpdik7XG4gICAgfVxufVxuY29uc3QgY2Fyb3VzZWwgPSAoKSA9PiB7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBjb25zdCBzaG93U2xpZGVzID0gKCkgPT4ge1xuICAgICAgICBsZXQgc2xpZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZXJvU2xpZGUnKTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNsaWRlLmxlbmd0aDsgIGkrKyl7XG4gICAgICAgICAgICBzbGlkZVtpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICAgICAgY291bnQrKztcbiAgICAgICAgaWYoY291bnQgPiBzbGlkZS5sZW5ndGgpe1xuICAgICAgICAgICAgY291bnQgPSAxXG4gICAgICAgIH1cbiAgICAgICAgc2xpZGVbY291bnQgLSAxXS5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICAgICAgICBzZXRUaW1lb3V0KHNob3dTbGlkZXMsIDUwMDApO1xuICAgIH1cbiAgICBzaG93U2xpZGVzKCk7XG59XG5jb25zdCBjcmVhdGVEZXB0ID0gKGltZywgdGl0bGUsIGRlc2MsIGxldmVsKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2RlcHRCb3gnKTtcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlLnNyYyA9IGltZztcbiAgICBjb25zdCBkZXB0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlcHRUZXh0LmNsYXNzTGlzdC5hZGQoJ2RlcHRUZXh0Jyk7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzYztcbiAgICBjb25zdCBsZXZlbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXZlbHMudGV4dENvbnRlbnQgPSAnTGV2ZWwocykgY292ZXJlZDogJyArIGxldmVsLnRvU3RyaW5nKCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICBkZXB0VGV4dC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICBkZXB0VGV4dC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgZGVwdFRleHQuYXBwZW5kQ2hpbGQobGV2ZWxzKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZGVwdFRleHQpO1xuICAgIHJldHVybiBkaXY7XG59O1xuY29uc3QgY3JlYXRlU2VydmljZSA9IChoZWFkaW5nLCBib2R5LCBhY3Rpb24pID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICBoZWFkLnRleHRDb250ZW50ID0gaGVhZGluZztcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSBib2R5O1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZXJ2ZUJ1dHRvbicpO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGFjdGlvbjtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaGVhZCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHRleHQpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIHJldHVybiBkaXY7XG59XG5leHBvcnQge2NyZWF0ZU5hdkxpbmssIGdlbmVyYXRlSGVyb1NlY3Rpb24sIGNhcm91c2VsLCBjcmVhdGVEZXB0LCBjcmVhdGVTZXJ2aWNlLCBjcmVhdGVCcmFuZCwgY3JlYXRlTmF2QmFyLCBjcmVhdGVNZW51fTsiLCIvL2ltcG9ydCBmdW5jdGlvbnMgZnJvbSBtb2R1bGVzXG5pbXBvcnQge2dlbmVyYXRlSGVyb1NlY3Rpb24sIGNhcm91c2VsLCBjcmVhdGVEZXB0LCBjcmVhdGVTZXJ2aWNlfSBmcm9tICcuL21vZHVsZXMvbGFuZGluZyc7XG5pbXBvcnQge3JlbmRlckhlYWRlcn0gZnJvbSAnLi9tb2R1bGVzL2hlYWRlcic7XG5pbXBvcnQge3JlbmRlckZvb3Rlcn0gZnJvbSAnLi9tb2R1bGVzL2Zvb3Rlcic7XG5pbXBvcnQge2NyZWF0ZUdlbWluaSwgY3JlYXRlQ2hhdEdwdCwgZGlzcGxheUFJfSBmcm9tICcuL21vZHVsZXMvYWknO1xuLy9pbXBvcnQgY3NzXG5cbmltcG9ydCAnLi4vQ1NTL3N0eWxlLmNzcyc7XG5cbi8vaW1wb3J0IGltYWdlc1xuaW1wb3J0IGRlcHQxIGZyb20gJy4uL1JFU09VUkNFUy9pbWFnZXMvY29tcHV0ZXItZGVwdC5wbmcnO1xuaW1wb3J0IGRlcHQyIGZyb20gJy4uL1JFU09VUkNFUy9pbWFnZXMvZWxlY3RyaWNhbC1kZXB0LnBuZyc7XG5pbXBvcnQgZGVwdDMgZnJvbSAnLi4vUkVTT1VSQ0VTL2ltYWdlcy9tZWNoYW5pY2FsLWRlcHQucG5nJztcbmltcG9ydCBkZXB0NCBmcm9tICcuLi9SRVNPVVJDRVMvaW1hZ2VzL3Byb2R1Y3Rpb24tZGVwdC5wbmcnO1xuaW1wb3J0IGFib3V0UGljIGZyb20gJy4uL1JFU09VUkNFUy9pbWFnZXMvYWJvdXRfdXNfbWFuLnBuZyc7XG5cbmNvbnN0IGhtZSA9IFwiLi9pbmRleC5odG1sXCI7XG5jb25zdCBycHQgPSBcIi4vcmVwb3J0L3JlcG9ydC5odG1sXCI7XG5jb25zdCBhYnQgPSBcIi4vYWJvdXQvYWJvdXQuaHRtbFwiO1xuXG4vL2NyZWF0ZSBhIHJlZmVyZW5jZSB0byBib2R5IHRhZ1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbi8vY2FsbCBoZWFkZXIgZnVuY3Rpb25cbnJlbmRlckhlYWRlcihib2R5LCBbaG1lLCBycHQsIGFidF0pO1xuXG4vL2NyZWF0ZSBtYWluIHNlY3Rpb25cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG5cbi8vY3JlYXRlIGhlcm8gc2VjdGlvblxuY29uc3QgaGVyb1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4vL0FkZCBoZXJvU2VjdGlvbiBjb250ZW50XG5nZW5lcmF0ZUhlcm9TZWN0aW9uKGhlcm9TZWN0aW9uKTtcbmhlcm9TZWN0aW9uLmlkID0gJ2hlcm8nO1xuLy9hcHBlbmQgaGVyb1NlY3Rpb24gY29udGVudFxubWFpbi5hcHBlbmRDaGlsZChoZXJvU2VjdGlvbik7XG5cbi8vY3JlYXRlIGRlcGFydG1lbnQgc2VjdGlvblxuY29uc3QgZGVwdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5kZXB0U2VjdGlvbi5pZCA9ICdkZXB0Jztcbi8vZGVwYXJ0bWVudCBzZWN0aW9uIGhlYWRpbmdcbmNvbnN0IGRlcHRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuZGVwdEhlYWRlci50ZXh0Q29udGVudCA9ICdEZXBhcnRtZW50cyBXZSBDb3Zlcic7XG4vL2RlcGFydG1lbnQgZ3JvdXBpbmdcbmNvbnN0IGRlcHRHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZGVwdEdyb3VwLmlkID0gJ2dyb3VwJztcbi8vY29tcHV0ZXIgZGVwYXJ0bWVudCBkaXZcbmNvbnN0IGNwZURlcHQgPSBjcmVhdGVEZXB0KGRlcHQxLCAnQ09NUFVURVIgRU5HSU5FRVJJTkcnLCAnQ29tcHV0ZXIgRUxBIG9mZmVycyBoYW5kcy1vbiBleHBlcmllbmNlIHdpdGggaGFyZHdhcmUsIHNvZnR3YXJlIGFuZCBiYXNpYyBlbmdpbmVlcmluZyBjb25jZXB0cywgYnkgc29saWRpZnlpbmcgdGhlb3J5IHRocm91Z2ggYnVpbGRpbmcgY2lyY3VpdHMsIHByb2dyYW1taW5nIG1pY3JvY29udHJvbGxlcnMsIGFuZCBleHBsb3JpbmcgY29tcHV0ZXIgbmV0d29ya3MnLCBbMzAwLCA0MDBdKTtcbi8vZWxlY3RyaWNhbCBkZXBhcnRtZW50IGRpdlxuY29uc3QgZWVlRGVwdCA9IGNyZWF0ZURlcHQoZGVwdDIsICdFTEVDVFJJQ0FMIEVOR0lORUVSSU5HJywgJ0VsZWN0cmljYWwgRUxBIGJyaW5ncyBlbGVjdHJpY2FsIHByaW5jaXBsZXMgdG8gbGlmZS4gU3R1ZGVudHMgZ2FpbiBwcmFjdGljYWwgZXhwZXJpZW5jZSB3aXRoIGNpcmN1aXRzLCBlbGVjdHJvbmljcywgcG93ZXIgc3lzdGVtcywgYW5kIGNvbnRyb2wgc3lzdGVtcyB0aHJvdWdoIGV4cGVyaW1lbnRzIGludm9sdmluZyByZWFsLXdvcmxkIGVxdWlwbWVudCBsaWtlIFRyYW5zZm9ybWVycywgb3NjaWxsb3Njb3BlcywgYW5kIG90aGVyIGVsZWN0cmljYWwgbWFjaGluZXMnLCBbMjAwLCAzMDBdKTtcbi8vbWVjaGFuaWNhbCBkZXBhcnRtZW50IGRpdlxuY29uc3QgbWVlRGVwdCA9IGNyZWF0ZURlcHQoZGVwdDMsICdNRUNIQU5JQ0FMIEVOR0lORUVSSU5HJywgJ01lY2hhbmljYWwgRUxBIGZvY3VzZXMgb24gYXBwbHlpbmcgdGhlb3JldGljYWwgY29uY2VwdHMgdG8gcmVhbC13b3JsZCBhcHBsaWNhdGlvbnMuIFN0dWRlbnRzIGJyaWRnZSB0aGUgZ2FwIGJldHdlZW4gdGhlb3J5IGFuZCBhcHBsaWNhdGlvbiBieSB0ZXN0aW5nIG1lY2hhbmljYWwgc3lzdGVtcyB0aHJvdWdoIGV4cGVyaW1lbnRzIGludm9sdmluZyBBcHBsaWVkIE1lY2hhbmljcyAoQU0pIGFuZCBTdHJlbmd0aCBvZiBNYXRlcmlhbHMgKFNNKScsIFsyMDBdKTtcbi8vcHJvZHVjdGlvbiBkZXBhcnRtZW50IGRpdlxuY29uc3QgcHJlRGVwdCA9IGNyZWF0ZURlcHQoZGVwdDQsICdQUk9EVUNUSU9OIEVOR0lORUVSSU5HJywgJ1Byb2R1Y3Rpb24gRUxBIGRlbHZlcyBpbnRvIHRoZSBwcmFjdGljYWxpdGllcyBvZiBtYW51ZmFjdHVyaW5nLiBTdHVkZW50cyBleHBsb3JlIGVmZmljaWVudCBwcm9kdWN0aW9uIHRlY2huaXF1ZXMgdGhyb3VnaCBleHBlcmltZW50cyBpbiBhcmVhcyBsaWtlIG1hY2hpbmluZywgd2VsZGluZywgY2FzdGluZywgZm9ybWluZywgYW5kIGJlbmNoLWZpdHRpbmcsIGRldmVsb3BpbmcgYSBzdHJvbmcgZm91bmRhdGlvbiBmb3IgZnV0dXJlIGluZHVzdHJpYWwgc3VjY2VzcycsIFsyMDBdKTtcbi8vYXBwZW5kIGRlcGFydG1lbnQgZGl2XG5kZXB0R3JvdXAuYXBwZW5kQ2hpbGQoY3BlRGVwdCk7XG5kZXB0R3JvdXAuYXBwZW5kQ2hpbGQoZWVlRGVwdCk7XG5kZXB0R3JvdXAuYXBwZW5kQ2hpbGQobWVlRGVwdCk7XG5kZXB0R3JvdXAuYXBwZW5kQ2hpbGQocHJlRGVwdCk7XG4vL2FwcGVuZCB0byBkZXBhcnRtZW50IGNsYXNzXG5kZXB0U2VjdGlvbi5hcHBlbmRDaGlsZChkZXB0SGVhZGVyKTtcbmRlcHRTZWN0aW9uLmFwcGVuZENoaWxkKGRlcHRHcm91cCk7XG4vL2FwcGVuZCBkZXBhcnRtZW50IFNlY3Rpb24gdG8gTWFpblxubWFpbi5hcHBlbmRDaGlsZChkZXB0U2VjdGlvbik7XG5cbi8vY3JlYXRlIHNlcnZpY2Ugc2VjdGlvblxuY29uc3Qgc2VydmVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuc2VydmVTZWN0aW9uLmlkID0gJ3NlcnZpY2UnO1xuLy9zZXJ2aWNlIGhlYWRlclxuY29uc3Qgc2VydmVIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbnNlcnZlSGVhZC50ZXh0Q29udGVudCA9IFwiU2VydmljZXMgV2UgT2ZmZXJcIjtcbi8vdGhlIHNlcnZpY2VzIGNvbnRhaW5lclxuY29uc3Qgc2VydmVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnNlcnZlQm94LmlkID0gJ29mZmVycyc7XG4vL2NyZWF0ZSBzZXJ2aWNlIG9uZVxuY29uc3Qgc2VydmUxID0gY3JlYXRlU2VydmljZSgnR3JhZGUtQSBSZXBvcnRzJywgJ1N0b3Agd2FzdGluZyB0aW1lIG9uIGluZm9ybWF0aW9uIG92ZXJsb2FkLiBFbGFib3JhdGUgZXF1aXBzIHlvdSB3aXRoIHRoZSBlc3NlbnRpYWwgcmVzb3VyY2VzIGFuZCBleHBlcnQgdGlwcyB0byBjcmFmdCBjb25jaXNlLCBpbXBhY3RmdWwgcmVwb3J0cyB0aGF0IHNob3djYXNlIHlvdXIgdW5kZXJzdGFuZGluZy4gUGx1cywgd2l0aCBvdXIgc2VhbWxlc3MgUERGIGRvd25sb2FkIGZlYXR1cmUsIHlvdSBjYW4gZWZmb3J0bGVzc2x5IHNhdmUgeW91ciByZXBvcnRzIGZvciBmdXR1cmUgcmVmZXJlbmNlIG9yIGVhc3kgc2hhcmluZyB3aXRoIGluc3RydWN0b3JzLicsICdMZWFybiBtb3JlJyk7XG5zZXJ2ZTEuY2xhc3NMaXN0LmFkZCgnc2VydmUnKTtcbi8vY3JlYXRlIHNlcnZpY2UgdHdvXG5jb25zdCBzZXJ2ZTIgPSBjcmVhdGVTZXJ2aWNlKCdHYWluIGluc2lnaHRmdWwga25vd2xlZGdlJywgJ0RvblxcJ3QganVzdCBtZW1vcml6ZSwgdHJ1bHkgdW5kZXJzdGFuZC4gRWxhYm9yYXRlIGVxdWlwcyB5b3Ugd2l0aCBpbnRlcmFjdGl2ZSBsZWFybmluZyB0b29scyBhbmQgZXhwZXJ0IGluc2lnaHRzLCB0cmFuc2Zvcm1pbmcgcGFzc2l2ZSBkYXRhIGludG8gYSByaWNoIHVuZGVyc3RhbmRpbmcgb2YgZW5naW5lZXJpbmcgY29uY2VwdHMuIFRoaXMgZGVlcGVyIGtub3dsZWRnZSBlbXBvd2VycyB5b3UgdG8gZXhjZWwgaW4geW91ciBleGFtcyBhbmQgZnV0dXJlIGVuZGVhdm9ycy4nLCAnTGVhcm4gbW9yZScpO1xuc2VydmUyLmNsYXNzTGlzdC5hZGQoJ3NlcnZlJyk7XG5zZXJ2ZTEuaWQgPSAnbWlkZGxlJztcbi8vY3JlYXRlIHNlcnZpY2UgdGhyZWVcbmNvbnN0IHNlcnZlMyA9IGNyZWF0ZVNlcnZpY2UoJ0xhYiBNYXN0ZXJ5IE1hZGUgRWFzeScsICdFbGFib3JhdGUgc2hlZHMgbGlnaHQgb24gZXZlbiB0aGUgbW9zdCBjb21wbGV4IGV4cGVyaW1lbnRzLCB0cmFuc2Zvcm1pbmcgeW91IGZyb20gYmV3aWxkZXJlZCBiZWdpbm5lciB0byBjb25maWRlbnQgZXhwZXJ0LiBUaGlzIG5ld2ZvdW5kIHVuZGVyc3RhbmRpbmcgZW1wb3dlcnMgeW91IHRvIHRhY2tsZSB5b3VyIEVMQXMgd2l0aCBhIHdpbm5pbmcgc3RyYXRlZ3kuJywgJ0xlYXJuIG1vcmUnKTtcbnNlcnZlMy5jbGFzc0xpc3QuYWRkKCdzZXJ2ZScpO1xuLy9BcHBlbmQgc2VydmljZXMgdG8gIHNlcnZlIGJveFxuc2VydmVCb3guYXBwZW5kQ2hpbGQoc2VydmUyKTtcbnNlcnZlQm94LmFwcGVuZENoaWxkKHNlcnZlMSk7XG5zZXJ2ZUJveC5hcHBlbmRDaGlsZChzZXJ2ZTMpO1xuLy9jcmVhdGUgc2VydmljZSBjYWxsIHRvIGFjdGlvblxuY29uc3Qgc2VydmVBY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnNlcnZlQWN0aW9uLnRleHRDb250ZW50ID0gJ0dFVCBTVEFSVEVEJztcbnNlcnZlQWN0aW9uLmlkID0gJ3NlcnZlQWN0aW9uJztcbi8vQXBwZW5kIHNlcnZpY2UgaXRlbXMgdG8gc2VydmljZSBzZWN0aW9uXG5zZXJ2ZVNlY3Rpb24uYXBwZW5kQ2hpbGQoc2VydmVIZWFkKTtcbnNlcnZlU2VjdGlvbi5hcHBlbmRDaGlsZChzZXJ2ZUJveCk7XG5zZXJ2ZVNlY3Rpb24uYXBwZW5kQ2hpbGQoc2VydmVBY3Rpb24pO1xuLy9BcHBlbmQgc2VydmljZSBzZWN0aW9uIHRvIG1haW5cbm1haW4uYXBwZW5kQ2hpbGQoc2VydmVTZWN0aW9uKTtcblxuXG4vL2NyZWF0ZSBhYm91dCBzZWN0aW9uXG5jb25zdCBhYm91dFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5hYm91dFNlY3Rpb24uaWQgPSAnYWJvdXRTZWN0aW9uJztcbi8vY3JlYXRlIGFib3V0IHBpY3R1cmUgZGl2XG5jb25zdCBwaWNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnBpY0Rpdi5pZCA9ICd3aHlVcyc7XG4vL2NyZWF0ZSBwaWN0dXJlIGluIGFib3V0IGRpdlxuY29uc3QgYWJvdXRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmFib3V0SW1nLnNyYyA9IGFib3V0UGljO1xuLy9jcmVhdGUgaGVhZGluZyBmb3IgYWJvdXQgc2VjdGlvblxuY29uc3QgYWJvdXRIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbmFib3V0SGVhZC50ZXh0Q29udGVudCA9ICdXSFkgVVM/Jztcbi8vQXBwZW5kIHRvIHBpY3R1cmUgRGl2XG5waWNEaXYuYXBwZW5kQ2hpbGQoYWJvdXRJbWcpO1xucGljRGl2LmFwcGVuZENoaWxkKGFib3V0SGVhZCk7XG4vL2NyZWF0ZSBBYm91dCB0ZXh0IGRpdlxuY29uc3QgYWJvdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmFib3V0RGl2LmlkID0gJ2Fib3V0Jztcbi8vY3JlYXRlIGFib3V0IHRleHQgYmxvY2txdW90ZVxuY29uc3QgYWJvdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuYWJvdXRUZXh0LnRleHRDb250ZW50ID0gJ1wiV2UgdW5kZXJzdGFuZCB0aGUgc3RydWdnbGUuXFxuIEp1Z2dsaW5nIGNvbXBsZXggZW5naW5lZXJpbmdcXG4gY29uY2VwdHMsIGNvbmR1Y3RpbmcgaW50cmljYXRlXFxuIGV4cGVyaW1lbnRzLCBhbmQgdGhlbiBmYWNpbmdcXG4gdGhlIGRhdW50aW5nIHRhc2sgb2Ygd3JpdGluZyBhXFxuIGNsZWFyIGFuZCBjb25jaXNlIGxhYiByZXBvcnRcXG4gY2FuIGxlYXZlIGV2ZW4gdGhlIGJyaWdodGVzdFxcbiBzdHVkZW50IGZlZWxpbmcgb3ZlcndoZWxtZWQuXFxuIFRoYXRcXCdzIHdoZXJlIHdlIGNvbWUgaW4uXCInO1xuLy9BcHBlbmQgYWJvdXQgdGV4dCB0byBpdCBjb250YWluZXJcbmFib3V0RGl2LmFwcGVuZENoaWxkKGFib3V0VGV4dCk7XG4vL0FwcGVuZCBhYm91dCBjb250ZW50cyB0byB0aGUgc2VjdGlvblxuYWJvdXRTZWN0aW9uLmFwcGVuZENoaWxkKHBpY0Rpdik7XG5hYm91dFNlY3Rpb24uYXBwZW5kQ2hpbGQoYWJvdXREaXYpO1xuLy9BcHBlbmQgYWJvdXQgc2VjdGlvbiB0byBtYWluXG5tYWluLmFwcGVuZENoaWxkKGFib3V0U2VjdGlvbik7XG5cbi8vY3JlYXRlIGNvbnRhY3Qgc2VjdGlvblxuY29uc3QgcmVhY2hTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xucmVhY2hTZWN0aW9uLmlkID0gJ2NvbnRhY3QnO1xuLy9jcmVhdGUgY29udGFjdCBoZWFkZXJcbmNvbnN0IHJlYWNoSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbnJlYWNoSGVhZGVyLnRleHRDb250ZW50ID0gJ0NPTlRBQ1QgVVMnO1xuLy9jcmVhdGUgZm9ybSBlbGVtZW50XG5jb25zdCBmb3JtID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbmNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbnVzZXJOYW1lLnR5cGUgPSAndGV4dCc7XG51c2VyTmFtZS5wbGFjZWhvbGRlciA9ICdOYW1lJztcbnVzZXJOYW1lLmlkID0gJ3VzZXJOYW1lJztcbnVzZXJOYW1lLmNsYXNzTGlzdC50b2dnbGUoJ2lucHV0Jyk7XG5jb25zdCB1c2VyRW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xudXNlckVtYWlsLnR5cGUgPSAnZW1haWwnO1xudXNlckVtYWlsLnBsYWNlaG9sZGVyID0gJ0VtYWlsJztcbnVzZXJFbWFpbC5pZCA9ICd1c2VyRW1haWwnO1xudXNlckVtYWlsLmNsYXNzTGlzdC50b2dnbGUoJ2lucHV0Jyk7XG5jb25zdCB1c2VyUGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xudXNlclBob25lLnBsYWNlaG9sZGVyID0gJ1Bob25lIE51bWJlcic7XG51c2VyUGhvbmUudHlwZSA9ICdudW1iZXInO1xudXNlclBob25lLmlkID0gJ3VzZXJQaG9uZSc7XG51c2VyUGhvbmUuY2xhc3NMaXN0LnRvZ2dsZSgnaW5wdXQnKTtcbmNvbnN0IHVzZXJNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbnVzZXJNZXNzYWdlLnBsYWNlaG9sZGVyID0gJ0VudGVyIE1lc3NhZ2UnO1xudXNlck1lc3NhZ2UuaWQgPSAndXNlck1lc3NhZ2UnO1xudXNlclBob25lLmNsYXNzTGlzdC50b2dnbGUoJ2lucHV0Jyk7XG5jb25zdCB1c2VyU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbnVzZXJTdWJtaXQudHlwZSA9ICdzdWJtaXQnO1xudXNlclN1Ym1pdC50ZXh0Q29udGVudCA9ICdTVUJNSVQnO1xudXNlclN1Ym1pdC5pZCA9ICd1c2VyU3VibWl0Jztcbi8vQXBwZW5kIGZvcm0gY2hpbGQgZWxlbWVudHNcbmZvcm0uYXBwZW5kQ2hpbGQodXNlck5hbWUpO1xuZm9ybS5hcHBlbmRDaGlsZCh1c2VyRW1haWwpO1xuZm9ybS5hcHBlbmRDaGlsZCh1c2VyUGhvbmUpO1xuZm9ybS5hcHBlbmRDaGlsZCh1c2VyTWVzc2FnZSk7XG5mb3JtLmFwcGVuZENoaWxkKHVzZXJTdWJtaXQpO1xuLy9BcHBlbmQgZWxlbWVudCB0byBjb250YWN0IHNlY3Rpb25cbnJlYWNoU2VjdGlvbi5hcHBlbmRDaGlsZChyZWFjaEhlYWRlcik7XG5yZWFjaFNlY3Rpb24uYXBwZW5kQ2hpbGQoZm9ybSk7XG4vL0FwcGVuZCBjb250YWN0IHNlY3Rpb24gdG8gbWFpblxubWFpbi5hcHBlbmRDaGlsZChyZWFjaFNlY3Rpb24pO1xuLy9BcHBlbmQgbWFpbiB0byBib2R5XG5ib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuXG4vL2NhbGwgdGhlIGNhcm91c2VsIGZ1bmN0aW9uXG5jYXJvdXNlbCgpO1xuXG4vL2Rpc3BsYXkgZm9vdGVyXG5yZW5kZXJGb290ZXIoYm9keSwgW2htZSwgcnB0LCBhYnRdKTtcblxuZGlzcGxheUFJKGJvZHkpO1xuY3JlYXRlR2VtaW5pKGJvZHkpO1xuY3JlYXRlQ2hhdEdwdChib2R5KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=