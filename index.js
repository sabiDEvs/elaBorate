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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0RBQWE7QUFDNUI7QUFDQTtBQUNBLGVBQWUsK0RBQWE7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsZUFBZSwrREFBYTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0RBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQVE7QUFDUjtBQUNBO0FBQ0EsNkRBQVk7QUFDWjtBQUNBLHNEQUFTO0FBQ1QseURBQVk7QUFDWiwwREFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL2VsYWJvcmF0ZS8uL3NyYy9DU1Mvc3R5bGUuY3NzPzA1ODAiLCJ3ZWJwYWNrOi8vZWxhYm9yYXRlLy4vc3JjL1NDUklQVFMvbW9kdWxlcy9haS5qcyIsIndlYnBhY2s6Ly9lbGFib3JhdGUvLi9zcmMvU0NSSVBUUy9tb2R1bGVzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9lbGFib3JhdGUvLi9zcmMvU0NSSVBUUy9tb2R1bGVzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9lbGFib3JhdGUvLi9zcmMvU0NSSVBUUy9tb2R1bGVzL2xhbmRpbmcuanMiLCJ3ZWJwYWNrOi8vZWxhYm9yYXRlLy4vc3JjL1NDUklQVFMvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBnZW1pbmkgZnJvbSAnLi4vLi4vUkVTT1VSQ0VTL2ltYWdlcy9nb29nbGUtZ2VtaW5pLWljb24ucG5nJztcclxuaW1wb3J0IGNoYXRncHQgZnJvbSAnLi4vLi4vUkVTT1VSQ0VTL2ltYWdlcy9jaGF0LWdwdC5wbmcnO1xyXG5pbXBvcnQgYWlQaWMgZnJvbSAnLi4vLi4vUkVTT1VSQ0VTL2ltYWdlcy9BSS1jaGF0Ym90LWljb24ucG5nJztcclxuY29uc3QgZGlzcGxheUFJID0gKGJvZHkpID0+IHtcclxuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgZ3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBncHQuY2xhc3NMaXN0LmFkZCgnYWlEaXYnKTtcclxuICAgIGdwdC5jbGFzc0xpc3QuYWRkKCdwb3BVcCcpO1xyXG4gICAgZ3B0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGF0R1BUJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dlbWluaUFJJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZ3B0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgZ3B0SWNvbi5zcmMgPSBjaGF0Z3B0O1xyXG4gICAgZ3B0LmFwcGVuZENoaWxkKGdwdEljb24pO1xyXG4gICAgY29uc3QgYWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFpLmNsYXNzTGlzdC5hZGQoJ2FpRGl2Jyk7XHJcbiAgICBhaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBncHQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgZ2VtLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBhaUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGFpSWNvbi5zcmMgPSBhaVBpYztcclxuICAgIGFpLmFwcGVuZENoaWxkKGFpSWNvbik7XHJcbiAgICBjb25zdCBnZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGdlbS5jbGFzc0xpc3QuYWRkKCdhaURpdicpO1xyXG4gICAgZ2VtLmNsYXNzTGlzdC5hZGQoJ3BvcFVwJyk7XHJcbiAgICBnZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoYXRHUFQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnZW1pbmlBSScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBnZW1JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBnZW1JY29uLnNyYyA9IGdlbWluaTtcclxuICAgIGdlbS5hcHBlbmRDaGlsZChnZW1JY29uKTtcclxuICAgIGJveC5pZCA9ICdhaSc7XHJcbiAgICBib3guYXBwZW5kQ2hpbGQoZ3B0KTtcclxuICAgIGJveC5hcHBlbmRDaGlsZChhaSk7XHJcbiAgICBib3guYXBwZW5kQ2hpbGQoZ2VtKTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoYm94KTtcclxufTtcclxuY29uc3QgY3JlYXRlQWlCb3ggPSAodXJsLCB0aXRsZSwgaWRlKSA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgYWlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGF0R1BUJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2VtaW5pQUknKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSk7XHJcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gJ0FJIHBvcC11cCBtb2RhbCc7XHJcbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ2FpVGV4dCcpO1xyXG4gICAgY2xvc2UudGV4dENvbnRlbnQgPSAneCc7XHJcbiAgICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdjbG9zZScpO1xyXG4gICAgY29uc3QgZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcclxuICAgIGZyYW1lLnNyYyA9IHVybDtcclxuICAgIGZyYW1lLm5hbWUgPSB0aXRsZTtcclxuICAgIGZyYW1lLmlkID0gaWRlO1xyXG4gICAgZGl2LmlkID0gdGl0bGU7XHJcbiAgICBhaURpdi5jbGFzc0xpc3QuYWRkKCdmcmFtZUJveCcpO1xyXG4gICAgYWlEaXYuYXBwZW5kQ2hpbGQoZnJhbWUpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGNsb3NlKTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChhaURpdik7XHJcbiAgICByZXR1cm4gZGl2O1xyXG59O1xyXG5jb25zdCBjcmVhdGVHZW1pbmkgPSAoYm9keSkgPT4ge1xyXG4gICAgY29uc3QgZ2VtaW5pID0gY3JlYXRlQWlCb3goXCJodHRwczovL2JvdC5vcmltb24uYWkvP3RlbmFudElkPTViOGEzNjBjLTcxMGEtNDRmMi04N2JjLTVmOTFmYzIxMTkxMSZmdWxsU2NyZWVuQm90PXRydWVcIiAsICdnZW1pbmlBSScsICdnZW1pbmknKTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZ2VtaW5pKTtcclxufTtcclxuY29uc3QgY3JlYXRlQ2hhdEdwdCA9IChib2R5KSA9PiB7XHJcbiAgICBjb25zdCBjaGF0R1BUID0gY3JlYXRlQWlCb3goXCJodHRwczovL3d3dy5jaGF0YmFzZS5jby9jaGF0Ym90LWlmcmFtZS9NQXNTN3ZkOHlobHo0LXJraEFTQkxcIiwgJ2NoYXRHUFQnLCAnY2hhdGdwdCcpO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChjaGF0R1BUKTtcclxufTtcclxuZXhwb3J0e2NyZWF0ZUdlbWluaSwgY3JlYXRlQ2hhdEdwdCwgZGlzcGxheUFJfTsiLCJpbXBvcnQge2NyZWF0ZU5hdkJhciwgY3JlYXRlQnJhbmR9IGZyb20gJy4vbGFuZGluZy5qcyc7XHJcbmltcG9ydCBsb2dvMSBmcm9tICcuLi8uLi9SRVNPVVJDRVMvaW1hZ2VzL2VsYWJvcmF0ZS1mb290ZXItbG9nby5wbmcnO1xyXG5jb25zdCByZW5kZXJGb290ZXIgPSAoYm9keSwgYXJyYXkpID0+IHtcclxuLy9jcmVhdGUgZm9vdGVyXHJcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG4vL2NyZWF0ZSBsZWZ0IGZvb3RlciBzZWN0aW9uXHJcbmNvbnN0IGxlZnRGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbi8vY3JlYXRlIGZvb3RlciBicmFuZFxyXG5jb25zdCBmb290ZXJCcmFuZCA9IGNyZWF0ZUJyYW5kKGxvZ28xLCAnJyk7XHJcbi8vY3JlYXRlIGZvb3RlciBuYXZpZ2F0aW9uIGxpbmtzXHJcbmNvbnN0IGZvb3Rlck5hdiA9IGNyZWF0ZU5hdkJhcihhcnJheSk7XHJcbmZvb3Rlck5hdi5pZCA9ICdmb290ZXJOYXYnO1xyXG4vL2FwcGVuZCBjaGlsZHJlbiB0byBsZWZ0Rm9vdGVyXHJcbmxlZnRGb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyQnJhbmQpO1xyXG5sZWZ0Rm9vdGVyLmFwcGVuZENoaWxkKGZvb3Rlck5hdik7XHJcbmxlZnRGb290ZXIuaWQgPSAnbGVmdEZvb3QnO1xyXG4vL0FwcGVuZCBsZWZ0IGZvb3RlciBzZWN0aW9uIHRvIHRoZSBmb290ZXJcclxuZm9vdGVyLmFwcGVuZENoaWxkKGxlZnRGb290ZXIpO1xyXG4vL2NyZWF0ZSByaWdodCBmb290ZXIgc2VjdGlvblxyXG5jb25zdCByaWdodEZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxucmlnaHRGb290ZXIuaWQgPSAncmlnaHRGb290JztcclxuLy9jcmVhdGUgIHN1YnNjcmliZSB0ZXh0XHJcbmNvbnN0IHN1YlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbnN1YlRleHQudGV4dENvbnRlbnQgPSBcIkdldCBvdXIgbGF0ZXN0IGlubm92YXRpdmUgbmV3c1wiO1xyXG4vL2NyZWF0ZSBzdWJzY3JpYmUgZGl2XHJcbmNvbnN0IHN1YkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5zdWJEaXYuaWQgPSAnc3Vic2NyaWJlJztcclxuLy9jcmVhdGUgZm9vdGVyIHN1YnNjcmliZSBpbnB1dFxyXG5jb25zdCBzdWJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbnN1YklucHV0LnR5cGUgPSAnZW1haWwnO1xyXG5zdWJJbnB1dC5wbGFjZWhvbGRlciA9ICdFbWFpbCBBZGRyZXNzJztcclxuc3ViSW5wdXQuaWQgPSAnc3ViRW1haWwnO1xyXG4vL2NyZWF0ZSBmb290ZXIgc3Vic2NyaWJlIGJ1dHRvblxyXG5jb25zdCBzdWJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuc3ViQnV0dG9uLnRleHRDb250ZW50ID0gJ1N1YnNjcmliZSc7XHJcbnN1YkJ1dHRvbi5pZCA9ICdzdWJCdXR0b24nO1xyXG4vL0FwcGVuZCBzdWIgaW5wdXQgYW5kIGJ1dHRvbiB0byBpdCBEaXZcclxuc3ViRGl2LmFwcGVuZENoaWxkKHN1YklucHV0KTtcclxuc3ViRGl2LmFwcGVuZENoaWxkKHN1YkJ1dHRvbik7XHJcbi8vY3JlYXRlIGNvcHlyaWdodCB0ZXh0XHJcbmNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb3B5cmlnaHQuaW5uZXJIVE1MID0gYCYjMTY5OyBDb3B5cmlnaHQgPHNwYW4+JHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9PC9zcGFuPmA7XHJcbi8vY3JlYXRlIHJlc2VydmVkIHJpZ2h0IHRleHRcclxuY29uc3QgcmVzZXJ2ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbnJlc2VydmVkLmlubmVySFRNTCA9ICdBbGwgcmlnaHRzIHJlc2VydmVkLiBBIDxzcGFuPnNhYmk8L3NwYW4+RGV2cyBpbml0aWF0aXZlJztcclxuLy9BcHBlbmQgY2hpbGRyZW4gdG8gcmlnaHQgZm9vdGVyIGVsZW1lbnRcclxucmlnaHRGb290ZXIuYXBwZW5kQ2hpbGQoc3ViVGV4dCk7XHJcbnJpZ2h0Rm9vdGVyLmFwcGVuZENoaWxkKHN1YkRpdik7XHJcbnJpZ2h0Rm9vdGVyLmFwcGVuZENoaWxkKGNvcHlyaWdodCk7XHJcbnJpZ2h0Rm9vdGVyLmFwcGVuZENoaWxkKHJlc2VydmVkKTtcclxuLy9BcHBlbmQgcmlnaHQgZm9vdGVyIHRvIGZvb3RlclxyXG5mb290ZXIuYXBwZW5kQ2hpbGQocmlnaHRGb290ZXIpO1xyXG5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcbn07XHJcbmV4cG9ydCB7cmVuZGVyRm9vdGVyfTsiLCJpbXBvcnQge2NyZWF0ZU5hdkJhciwgY3JlYXRlQnJhbmQsIGNyZWF0ZU1lbnV9IGZyb20gJy4vbGFuZGluZy5qcyc7XHJcbmltcG9ydCBsb2dvIGZyb20gJy4uLy4uL1JFU09VUkNFUy9pbWFnZXMvZWxhQm9yYXRlbG9nby5wbmcnO1xyXG5pbXBvcnQgc2VhcmNoIGZyb20gJy4uLy4uL1JFU09VUkNFUy9pbWFnZXMvc2VhcmNoLWljb24ucG5nJztcclxuY29uc3QgcmVuZGVySGVhZGVyID0gKGJvZHksIGFycmF5KSA9PiB7XHJcbi8vY3JlYXRlIGhlYWRlciBlbGVtZW50XHJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4vL2NyZWF0ZSBpY29uIGRpdlxyXG5jb25zdCBpY29uRGl2ID0gY3JlYXRlQnJhbmQobG9nbyk7XHJcbmljb25EaXYuaWQgPSAnaWNvbkRpdic7XHJcbi8vY3JlYXRlIG5hdkJhclxyXG5jb25zdCBuYXZCb3ggPSBjcmVhdGVOYXZCYXIoYXJyYXkpO1xyXG5uYXZCb3guY2xhc3NMaXN0LmFkZCgnbmF2Jyk7IFxyXG4vL2NyZWF0ZSBzZWFyY2ggQm94IGRpdlxyXG5jb25zdCBzZWFyY2hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuc2VhcmNoRGl2LmlkID0gJ3NlYXJjaEJveCc7XHJcbi8vY3JlYXRlIHNlYXJjaCBJY29uXHJcbmNvbnN0IHNlYXJjaEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuc2VhcmNoSWNvbi5zcmMgPSAgc2VhcmNoO1xyXG4vL2NyZWF0ZSBzZWFyY2ggaW5wdXQgZmllbGRcclxuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG5zZWFyY2hJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XHJcbnNlYXJjaElucHV0LmlkID0gXCJzZWFyY2hJbnB1dFwiO1xyXG4vL0FkZCBzZWFyY2hCb3ggaXRlbXMgdG8gcGFyZW50XHJcbnNlYXJjaERpdi5hcHBlbmRDaGlsZChzZWFyY2hJbnB1dCk7XHJcbnNlYXJjaERpdi5hcHBlbmRDaGlsZChzZWFyY2hJY29uKTtcclxuLy9BZGQgaGVhZGVyIGl0ZW1zIHRvIGhlYWRlclxyXG5oZWFkZXIuYXBwZW5kQ2hpbGQoaWNvbkRpdik7XHJcbmhlYWRlci5hcHBlbmRDaGlsZChuYXZCb3gpO1xyXG5oZWFkZXIuYXBwZW5kQ2hpbGQoc2VhcmNoRGl2KTtcclxuLy9jcmVhdGUgbWVudVxyXG5jcmVhdGVNZW51KGhlYWRlcik7XHJcbi8vQWRkIGhlYWRlciB0byBib2R5IHRhZ1xyXG5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbn1cclxuZXhwb3J0IHtyZW5kZXJIZWFkZXJ9OyIsIi8vaW1wb3J0IGltYWdlc1xyXG5pbXBvcnQgaW1nMSBmcm9tICcuLi8uLi9SRVNPVVJDRVMvaW1hZ2VzL2ZlbWFsZS1lbmdyLmpwZyc7XHJcbmltcG9ydCBpbWcyIGZyb20gJy4uLy4uL1JFU09VUkNFUy9pbWFnZXMvZWVlLWVuZ3ItZ2lybHMuanBnJztcclxuaW1wb3J0IGltZzMgZnJvbSAnLi4vLi4vUkVTT1VSQ0VTL2ltYWdlcy9lZWUtbWFsZS1lbmdyLmpwZyc7XHJcbmltcG9ydCBpbWc0IGZyb20gJy4uLy4uL1JFU09VUkNFUy9pbWFnZXMvY3BlLWVuZ3ItZ3JvdXAuanBnJztcclxuaW1wb3J0IGltZzUgZnJvbSAnLi4vLi4vUkVTT1VSQ0VTL2ltYWdlcy9tdGUtbWFsZS1lbmdyLmpwZyc7XHJcbmltcG9ydCBpbWc2IGZyb20gJy4uLy4uL1JFU09VUkNFUy9pbWFnZXMvY3BlLWVuZ3ItZ2lybHMuanBnJztcclxuXHJcblxyXG4vL0EgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIG5hdiBsaW5rcyBhbmQgcmV0dXJucyB0aGUgZGl2XHJcbmNvbnN0IGNyZWF0ZU5hdkxpbmsgPSAocmVmLCB0ZXh0KSA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBjb25zdCBsaW5rVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGxpbmtUZXh0LnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgIGxpbmsuYXBwZW5kQ2hpbGQobGlua1RleHQpO1xyXG4gICAgbGluay5ocmVmID0gcmVmO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgcmV0dXJuIGRpdjtcclxufTtcclxuLy9mdW5jdGlvbiB0byBjcmVhdGUgbWVudVxyXG5jb25zdCBjcmVhdGVNZW51ID0gKGhlYWRlcikgPT4ge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xyXG4gICAgbGV0IGJhcnMgPSBbXTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAzOyBpKyspe1xyXG4gICAgICAgIGJhcnNbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBiYXJzW2ldLmNsYXNzTGlzdC5hZGQoJ2JhcnMnKTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYmFyc1tpXSk7XHJcbiAgICB9XHJcbiAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdicpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgXHJcbiAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdicpLmNsYXNzTmFtZSA9PT0gJ25hdiBhY3RpdmUnKXtcclxuICAgICAgICAgICAgYWxlcnQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVybycpLnN0eWxlLm1hcmdpblRvcCA9ICcyMHZoJzsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZXJvJykuc3R5bGUubWFyZ2luVG9wID0gJzAnO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGRpdik7XHJcbn1cclxuY29uc3QgY3JlYXRlQnJhbmQgPSAobG9nbywgbmFtZSA9ICdlbGFCb3JhdGUnKSA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIC8vY3JlYXRlIGxvZ28gaWNvblxyXG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaWNvbi5zcmMgPSBsb2dvO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGljb24pO1xyXG4gICAgLy9jcmVhdGUgYnJhbmQgbmFtZVxyXG4gICAgY29uc3QgYnJhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgYnJhbmQudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGJyYW5kKTtcclxuICAgIHJldHVybiBkaXY7XHJcbn1cclxuY29uc3QgY3JlYXRlTmF2QmFyID0gKGFycmF5KSA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgIC8vY3JlYXRlIGluZGl2aWR1YWwgbmF2TGlua3Mgd2l0aCBpbXBvcnRlZCBmdW5jdGlvblxyXG4gICAgY29uc3QgaG9tZU5hdiA9IGNyZWF0ZU5hdkxpbmsoYXJyYXlbMF0sIFwiSG9tZVwiKVxyXG4gICAgY29uc3QgYWJvdXROYXYgPSBjcmVhdGVOYXZMaW5rKGFycmF5WzJdLCBcIkFib3V0XCIpO1xyXG4gICAgY29uc3QgcmVwb3J0TmF2ID0gY3JlYXRlTmF2TGluayhhcnJheVsxXSwgXCJSZXBvcnRzXCIpO1xyXG4gICAgY29uc3QgY29udGFjdE5hdiA9IGNyZWF0ZU5hdkxpbmsoXCJtYWlsdG86aW5mby5zYWJpZGV2c0BnbWFpbC5jb21cIiwgXCJDb250YWN0IFVzXCIpO1xyXG4gICAgLy9BcHBlbmQgbmF2TGlua3MgdG8gbmF2QmFyXHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaG9tZU5hdik7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYWJvdXROYXYpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKHJlcG9ydE5hdik7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY29udGFjdE5hdik7XHJcbiAgICByZXR1cm4gZGl2O1xyXG59XHJcbmNvbnN0IGdlbmVyYXRlSGVyb1NlY3Rpb24gPSAoc2VjdGlvbikgPT4gIHtcclxuICAgIGNvbnN0IGhlcm9Db250ZW50ID0gW1xyXG4gICAge3RleHQ6ICdFTEEgbWFkZScsIHdvcmQ6ICdFYXN5ISEhJyxpbWFnZTogaW1nMSxjbGFzczogJ2dyb3VwJyxpbm5lcjogJyMxNDIxM2QnLG91dGVyOiAnI2ZjYTMxMScsY2FsbDogJ0dFVCBTVEFSVEVEJ30sXHJcbiAgICB7dGV4dDogJ0xhYiBEYXlzPycsIHdvcmQ6ICdBIEJyZWV6ZSEhIScsIGltYWdlOiBpbWcyLCBjbGFzczogJ2dyb3VwJywgaW5uZXI6ICcjMDAwMDAwJywgb3V0ZXI6ICcjZmNhMzExJywgY2FsbDogJ0NIT09TRSBVUyd9LFxyXG4gICAge3RleHQ6ICdFbmdpbmVlcmluZyBMYWJzLCcsIHdvcmQ6ICdTaW1wbGlmaWVkISEhJywgaW1hZ2U6IGltZzMsY2xhc3M6ICdncm91cCcsIGlubmVyOiAnIzAwMDAwMCcsIG91dGVyOiAnIzE0MjEzZCcsIGNhbGw6ICdUQVAgSU4nfSxcclxuICAgIHt0ZXh0OiAnRG9uXFwndCBXaW5nIEl0LCcsIHdvcmQ6ICdFbGFib3JhdGUgSXQhISEnLCBpbWFnZTogaW1nNCxjbGFzczogJ2dyb3VwJywgaW5uZXI6ICAnIzAwMDAwMCcsIG91dGVyOiAnI2U1ZTVlNScsIGNhbGw6ICdVTkxFQVNIICBQT1RFTlRJQUwnfSxcclxuICAgIHt0ZXh0OiAnVW5sb2NrIExhYiBTZWNyZXRzIHdpdGgsJywgd29yZDogJ0VsYWJvcmF0ZSEhIScsIGltYWdlOiBpbWc1LGNsYXNzOiAnZ3JvdXAnLCBpbm5lcjogJyMxNDIxM2QnLCBvdXRlcjogJyNlNWU1ZTUnLCBjYWxsOiAnU1RBUlQgTk9XJ30sXHJcbiAgICB7dGV4dDogJ0dyYWRlcyBTb2FyaW5nLCBFbGFib3JhdGUnLCB3b3JkOiAnVGhhbmsgWW91ISEhJywgaW1hZ2U6IGltZzYsY2xhc3M6ICdncm91cCcsIGlubmVyOiAnIzE0MjEzZCcsIG91dGVyOiAnIzAwMDAwMCcsIGNhbGw6ICdESVZFIElOJ30sXHJcbl07XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgaGVyb0NvbnRlbnQubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGNvbnN0IGhlcm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCB0ZXh0Q29udGFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRleHRDb250YWluLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0IHRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0ZXh0RGl2LmNsYXNzTGlzdC5hZGQoJ3RleHREaXYnKTtcclxuICAgICAgICBjb25zdCBoZXJvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGhlcm9UZXh0LmNsYXNzTGlzdC5hZGQoJ2hlcm9UZXh0Jyk7XHJcbiAgICAgICAgY29uc3QgaGVyb1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBoZXJvU3Bhbi5jbGFzc0xpc3QuYWRkKCdzcGFuJyk7XHJcbiAgICAgICAgY29uc3QgaGVyb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGhlcm9JbWcuY2xhc3NMaXN0LmFkZChgJHtoZXJvQ29udGVudFtpXS5jbGFzc31gKTtcclxuICAgICAgICBjb25zdCBpbm5lckNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGlubmVyQ2lyY2xlLmNsYXNzTGlzdC5hZGQoJ2lubmVyQ2lyY2xlJyk7XHJcbiAgICAgICAgY29uc3Qgb3V0ZXJDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBvdXRlckNpcmNsZS5jbGFzc0xpc3QuYWRkKCdvdXRlckNpcmNsZScpO1xyXG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGFjdGlvbi5jbGFzc0xpc3QuYWRkKCdjYWxsQWN0aW9uJyk7XHJcbiAgICAgICAgaGVyb1RleHQudGV4dENvbnRlbnQgPSBoZXJvQ29udGVudFtpXS50ZXh0O1xyXG4gICAgICAgIGhlcm9TcGFuLnRleHRDb250ZW50ID0gaGVyb0NvbnRlbnRbaV0ud29yZDtcclxuICAgICAgICBoZXJvSW1nLnNyYyA9IGhlcm9Db250ZW50W2ldLmltYWdlO1xyXG4gICAgICAgIGlubmVyQ2lyY2xlLnN0eWxlLmJhY2tncm91bmQgPSBoZXJvQ29udGVudFtpXS5pbm5lcjtcclxuICAgICAgICBvdXRlckNpcmNsZS5zdHlsZS5iYWNrZ3JvdW5kID0gaGVyb0NvbnRlbnRbaV0ub3V0ZXI7XHJcbiAgICAgICAgYWN0aW9uLnRleHRDb250ZW50ID0gaGVyb0NvbnRlbnRbaV0uY2FsbDtcclxuICAgICAgICBhY3Rpb24uc3R5bGUuYmFja2dyb3VuZCA9IGhlcm9Db250ZW50W2ldLmlubmVyO1xyXG4gICAgICAgIGFjdGlvbi5zdHlsZS5ib3hTaGFkb3cgPSBgNXB4IDVweCAxLjVweCAxcHggJHtoZXJvQ29udGVudFtpXS5vdXRlcn1gO1xyXG4gICAgICAgIHRleHREaXYuYXBwZW5kQ2hpbGQoaGVyb1RleHQpO1xyXG4gICAgICAgIHRleHREaXYuYXBwZW5kQ2hpbGQoaGVyb1NwYW4pO1xyXG4gICAgICAgIHRleHRDb250YWluLmFwcGVuZENoaWxkKHRleHREaXYpO1xyXG4gICAgICAgIHRleHRDb250YWluLmFwcGVuZENoaWxkKGFjdGlvbik7XHJcbiAgICAgICAgaGVyb0Rpdi5hcHBlbmRDaGlsZCh0ZXh0Q29udGFpbik7XHJcbiAgICAgICAgaGVyb0Rpdi5hcHBlbmRDaGlsZChoZXJvSW1nKTtcclxuICAgICAgICBoZXJvRGl2LmFwcGVuZENoaWxkKGlubmVyQ2lyY2xlKTtcclxuICAgICAgICBoZXJvRGl2LmFwcGVuZENoaWxkKG91dGVyQ2lyY2xlKTtcclxuICAgICAgICBoZXJvRGl2LmNsYXNzTGlzdC50b2dnbGUoJ2hlcm9TbGlkZScpO1xyXG4gICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaGVyb0Rpdik7XHJcbiAgICB9XHJcbn1cclxuY29uc3QgY2Fyb3VzZWwgPSAoKSA9PiB7XHJcbiAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgY29uc3Qgc2hvd1NsaWRlcyA9ICgpID0+IHtcclxuICAgICAgICBsZXQgc2xpZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZXJvU2xpZGUnKTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2xpZGUubGVuZ3RoOyAgaSsrKXtcclxuICAgICAgICAgICAgc2xpZGVbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgIGlmKGNvdW50ID4gc2xpZGUubGVuZ3RoKXtcclxuICAgICAgICAgICAgY291bnQgPSAxXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNsaWRlW2NvdW50IC0gMV0uc3R5bGUuZGlzcGxheSA9ICdncmlkJztcclxuICAgICAgICBzZXRUaW1lb3V0KHNob3dTbGlkZXMsIDUwMDApO1xyXG4gICAgfVxyXG4gICAgc2hvd1NsaWRlcygpO1xyXG59XHJcbmNvbnN0IGNyZWF0ZURlcHQgPSAoaW1nLCB0aXRsZSwgZGVzYywgbGV2ZWwpID0+IHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2RlcHRCb3gnKTtcclxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpbWFnZS5zcmMgPSBpbWc7XHJcbiAgICBjb25zdCBkZXB0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGVwdFRleHQuY2xhc3NMaXN0LmFkZCgnZGVwdFRleHQnKTtcclxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xyXG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XHJcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2M7XHJcbiAgICBjb25zdCBsZXZlbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldmVscy50ZXh0Q29udGVudCA9ICdMZXZlbChzKSBjb3ZlcmVkOiAnICsgbGV2ZWwudG9TdHJpbmcoKTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChpbWFnZSk7XHJcbiAgICBkZXB0VGV4dC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxuICAgIGRlcHRUZXh0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuICAgIGRlcHRUZXh0LmFwcGVuZENoaWxkKGxldmVscyk7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZGVwdFRleHQpO1xyXG4gICAgcmV0dXJuIGRpdjtcclxufTtcclxuY29uc3QgY3JlYXRlU2VydmljZSA9IChoZWFkaW5nLCBib2R5LCBhY3Rpb24pID0+IHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XHJcbiAgICBoZWFkLnRleHRDb250ZW50ID0gaGVhZGluZztcclxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhcnRpY2xlJyk7XHJcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gYm9keTtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlcnZlQnV0dG9uJyk7XHJcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBhY3Rpb247XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaGVhZCk7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgIHJldHVybiBkaXY7XHJcbn1cclxuZXhwb3J0IHtjcmVhdGVOYXZMaW5rLCBnZW5lcmF0ZUhlcm9TZWN0aW9uLCBjYXJvdXNlbCwgY3JlYXRlRGVwdCwgY3JlYXRlU2VydmljZSwgY3JlYXRlQnJhbmQsIGNyZWF0ZU5hdkJhciwgY3JlYXRlTWVudX07IiwiLy9pbXBvcnQgZnVuY3Rpb25zIGZyb20gbW9kdWxlc1xyXG5pbXBvcnQge2dlbmVyYXRlSGVyb1NlY3Rpb24sIGNhcm91c2VsLCBjcmVhdGVEZXB0LCBjcmVhdGVTZXJ2aWNlfSBmcm9tICcuL21vZHVsZXMvbGFuZGluZyc7XHJcbmltcG9ydCB7cmVuZGVySGVhZGVyfSBmcm9tICcuL21vZHVsZXMvaGVhZGVyJztcclxuaW1wb3J0IHtyZW5kZXJGb290ZXJ9IGZyb20gJy4vbW9kdWxlcy9mb290ZXInO1xyXG5pbXBvcnQge2NyZWF0ZUdlbWluaSwgY3JlYXRlQ2hhdEdwdCwgZGlzcGxheUFJfSBmcm9tICcuL21vZHVsZXMvYWknO1xyXG4vL2ltcG9ydCBjc3NcclxuXHJcbmltcG9ydCAnLi4vQ1NTL3N0eWxlLmNzcyc7XHJcblxyXG4vL2ltcG9ydCBpbWFnZXNcclxuaW1wb3J0IGRlcHQxIGZyb20gJy4uL1JFU09VUkNFUy9pbWFnZXMvY29tcHV0ZXItZGVwdC5wbmcnO1xyXG5pbXBvcnQgZGVwdDIgZnJvbSAnLi4vUkVTT1VSQ0VTL2ltYWdlcy9lbGVjdHJpY2FsLWRlcHQucG5nJztcclxuaW1wb3J0IGRlcHQzIGZyb20gJy4uL1JFU09VUkNFUy9pbWFnZXMvbWVjaGFuaWNhbC1kZXB0LnBuZyc7XHJcbmltcG9ydCBkZXB0NCBmcm9tICcuLi9SRVNPVVJDRVMvaW1hZ2VzL3Byb2R1Y3Rpb24tZGVwdC5wbmcnO1xyXG5pbXBvcnQgYWJvdXRQaWMgZnJvbSAnLi4vUkVTT1VSQ0VTL2ltYWdlcy9hYm91dF91c19tYW4ucG5nJztcclxuXHJcbmNvbnN0IGhtZSA9IFwiLi9pbmRleC5odG1sXCI7XHJcbmNvbnN0IHJwdCA9IFwiLi9yZXBvcnQvcmVwb3J0Lmh0bWxcIjtcclxuY29uc3QgYWJ0ID0gXCIuL2Fib3V0L2Fib3V0Lmh0bWxcIjtcclxuXHJcbi8vY3JlYXRlIGEgcmVmZXJlbmNlIHRvIGJvZHkgdGFnXHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbi8vY2FsbCBoZWFkZXIgZnVuY3Rpb25cclxucmVuZGVySGVhZGVyKGJvZHksIFtobWUsIHJwdCwgYWJ0XSk7XHJcblxyXG4vL2NyZWF0ZSBtYWluIHNlY3Rpb25cclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuXHJcbi8vY3JlYXRlIGhlcm8gc2VjdGlvblxyXG5jb25zdCBoZXJvU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuLy9BZGQgaGVyb1NlY3Rpb24gY29udGVudFxyXG5nZW5lcmF0ZUhlcm9TZWN0aW9uKGhlcm9TZWN0aW9uKTtcclxuaGVyb1NlY3Rpb24uaWQgPSAnaGVybyc7XHJcbi8vYXBwZW5kIGhlcm9TZWN0aW9uIGNvbnRlbnRcclxubWFpbi5hcHBlbmRDaGlsZChoZXJvU2VjdGlvbik7XHJcblxyXG4vL2NyZWF0ZSBkZXBhcnRtZW50IHNlY3Rpb25cclxuY29uc3QgZGVwdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbmRlcHRTZWN0aW9uLmlkID0gJ2RlcHQnO1xyXG4vL2RlcGFydG1lbnQgc2VjdGlvbiBoZWFkaW5nXHJcbmNvbnN0IGRlcHRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG5kZXB0SGVhZGVyLnRleHRDb250ZW50ID0gJ0RlcGFydG1lbnRzIFdlIENvdmVyJztcclxuLy9kZXBhcnRtZW50IGdyb3VwaW5nXHJcbmNvbnN0IGRlcHRHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5kZXB0R3JvdXAuaWQgPSAnZ3JvdXAnO1xyXG4vL2NvbXB1dGVyIGRlcGFydG1lbnQgZGl2XHJcbmNvbnN0IGNwZURlcHQgPSBjcmVhdGVEZXB0KGRlcHQxLCAnQ09NUFVURVIgRU5HSU5FRVJJTkcnLCAnQ29tcHV0ZXIgRUxBIG9mZmVycyBoYW5kcy1vbiBleHBlcmllbmNlIHdpdGggaGFyZHdhcmUsIHNvZnR3YXJlIGFuZCBiYXNpYyBlbmdpbmVlcmluZyBjb25jZXB0cywgYnkgc29saWRpZnlpbmcgdGhlb3J5IHRocm91Z2ggYnVpbGRpbmcgY2lyY3VpdHMsIHByb2dyYW1taW5nIG1pY3JvY29udHJvbGxlcnMsIGFuZCBleHBsb3JpbmcgY29tcHV0ZXIgbmV0d29ya3MnLCBbMzAwLCA0MDBdKTtcclxuLy9lbGVjdHJpY2FsIGRlcGFydG1lbnQgZGl2XHJcbmNvbnN0IGVlZURlcHQgPSBjcmVhdGVEZXB0KGRlcHQyLCAnRUxFQ1RSSUNBTCBFTkdJTkVFUklORycsICdFbGVjdHJpY2FsIEVMQSBicmluZ3MgZWxlY3RyaWNhbCBwcmluY2lwbGVzIHRvIGxpZmUuIFN0dWRlbnRzIGdhaW4gcHJhY3RpY2FsIGV4cGVyaWVuY2Ugd2l0aCBjaXJjdWl0cywgZWxlY3Ryb25pY3MsIHBvd2VyIHN5c3RlbXMsIGFuZCBjb250cm9sIHN5c3RlbXMgdGhyb3VnaCBleHBlcmltZW50cyBpbnZvbHZpbmcgcmVhbC13b3JsZCBlcXVpcG1lbnQgbGlrZSBUcmFuc2Zvcm1lcnMsIG9zY2lsbG9zY29wZXMsIGFuZCBvdGhlciBlbGVjdHJpY2FsIG1hY2hpbmVzJywgWzIwMCwgMzAwXSk7XHJcbi8vbWVjaGFuaWNhbCBkZXBhcnRtZW50IGRpdlxyXG5jb25zdCBtZWVEZXB0ID0gY3JlYXRlRGVwdChkZXB0MywgJ01FQ0hBTklDQUwgRU5HSU5FRVJJTkcnLCAnTWVjaGFuaWNhbCBFTEEgZm9jdXNlcyBvbiBhcHBseWluZyB0aGVvcmV0aWNhbCBjb25jZXB0cyB0byByZWFsLXdvcmxkIGFwcGxpY2F0aW9ucy4gU3R1ZGVudHMgYnJpZGdlIHRoZSBnYXAgYmV0d2VlbiB0aGVvcnkgYW5kIGFwcGxpY2F0aW9uIGJ5IHRlc3RpbmcgbWVjaGFuaWNhbCBzeXN0ZW1zIHRocm91Z2ggZXhwZXJpbWVudHMgaW52b2x2aW5nIEFwcGxpZWQgTWVjaGFuaWNzIChBTSkgYW5kIFN0cmVuZ3RoIG9mIE1hdGVyaWFscyAoU00pJywgWzIwMF0pO1xyXG4vL3Byb2R1Y3Rpb24gZGVwYXJ0bWVudCBkaXZcclxuY29uc3QgcHJlRGVwdCA9IGNyZWF0ZURlcHQoZGVwdDQsICdQUk9EVUNUSU9OIEVOR0lORUVSSU5HJywgJ1Byb2R1Y3Rpb24gRUxBIGRlbHZlcyBpbnRvIHRoZSBwcmFjdGljYWxpdGllcyBvZiBtYW51ZmFjdHVyaW5nLiBTdHVkZW50cyBleHBsb3JlIGVmZmljaWVudCBwcm9kdWN0aW9uIHRlY2huaXF1ZXMgdGhyb3VnaCBleHBlcmltZW50cyBpbiBhcmVhcyBsaWtlIG1hY2hpbmluZywgd2VsZGluZywgY2FzdGluZywgZm9ybWluZywgYW5kIGJlbmNoLWZpdHRpbmcsIGRldmVsb3BpbmcgYSBzdHJvbmcgZm91bmRhdGlvbiBmb3IgZnV0dXJlIGluZHVzdHJpYWwgc3VjY2VzcycsIFsyMDBdKTtcclxuLy9hcHBlbmQgZGVwYXJ0bWVudCBkaXZcclxuZGVwdEdyb3VwLmFwcGVuZENoaWxkKGNwZURlcHQpO1xyXG5kZXB0R3JvdXAuYXBwZW5kQ2hpbGQoZWVlRGVwdCk7XHJcbmRlcHRHcm91cC5hcHBlbmRDaGlsZChtZWVEZXB0KTtcclxuZGVwdEdyb3VwLmFwcGVuZENoaWxkKHByZURlcHQpO1xyXG4vL2FwcGVuZCB0byBkZXBhcnRtZW50IGNsYXNzXHJcbmRlcHRTZWN0aW9uLmFwcGVuZENoaWxkKGRlcHRIZWFkZXIpO1xyXG5kZXB0U2VjdGlvbi5hcHBlbmRDaGlsZChkZXB0R3JvdXApO1xyXG4vL2FwcGVuZCBkZXBhcnRtZW50IFNlY3Rpb24gdG8gTWFpblxyXG5tYWluLmFwcGVuZENoaWxkKGRlcHRTZWN0aW9uKTtcclxuXHJcbi8vY3JlYXRlIHNlcnZpY2Ugc2VjdGlvblxyXG5jb25zdCBzZXJ2ZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbnNlcnZlU2VjdGlvbi5pZCA9ICdzZXJ2aWNlJztcclxuLy9zZXJ2aWNlIGhlYWRlclxyXG5jb25zdCBzZXJ2ZUhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG5zZXJ2ZUhlYWQudGV4dENvbnRlbnQgPSBcIlNlcnZpY2VzIFdlIE9mZmVyXCI7XHJcbi8vdGhlIHNlcnZpY2VzIGNvbnRhaW5lclxyXG5jb25zdCBzZXJ2ZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5zZXJ2ZUJveC5pZCA9ICdvZmZlcnMnO1xyXG4vL2NyZWF0ZSBzZXJ2aWNlIG9uZVxyXG5jb25zdCBzZXJ2ZTEgPSBjcmVhdGVTZXJ2aWNlKCdHcmFkZS1BIFJlcG9ydHMnLCAnU3RvcCB3YXN0aW5nIHRpbWUgb24gaW5mb3JtYXRpb24gb3ZlcmxvYWQuIEVsYWJvcmF0ZSBlcXVpcHMgeW91IHdpdGggdGhlIGVzc2VudGlhbCByZXNvdXJjZXMgYW5kIGV4cGVydCB0aXBzIHRvIGNyYWZ0IGNvbmNpc2UsIGltcGFjdGZ1bCByZXBvcnRzIHRoYXQgc2hvd2Nhc2UgeW91ciB1bmRlcnN0YW5kaW5nLiBQbHVzLCB3aXRoIG91ciBzZWFtbGVzcyBQREYgZG93bmxvYWQgZmVhdHVyZSwgeW91IGNhbiBlZmZvcnRsZXNzbHkgc2F2ZSB5b3VyIHJlcG9ydHMgZm9yIGZ1dHVyZSByZWZlcmVuY2Ugb3IgZWFzeSBzaGFyaW5nIHdpdGggaW5zdHJ1Y3RvcnMuJywgJ0xlYXJuIG1vcmUnKTtcclxuc2VydmUxLmNsYXNzTGlzdC5hZGQoJ3NlcnZlJyk7XHJcbi8vY3JlYXRlIHNlcnZpY2UgdHdvXHJcbmNvbnN0IHNlcnZlMiA9IGNyZWF0ZVNlcnZpY2UoJ0dhaW4gaW5zaWdodGZ1bCBrbm93bGVkZ2UnLCAnRG9uXFwndCBqdXN0IG1lbW9yaXplLCB0cnVseSB1bmRlcnN0YW5kLiBFbGFib3JhdGUgZXF1aXBzIHlvdSB3aXRoIGludGVyYWN0aXZlIGxlYXJuaW5nIHRvb2xzIGFuZCBleHBlcnQgaW5zaWdodHMsIHRyYW5zZm9ybWluZyBwYXNzaXZlIGRhdGEgaW50byBhIHJpY2ggdW5kZXJzdGFuZGluZyBvZiBlbmdpbmVlcmluZyBjb25jZXB0cy4gVGhpcyBkZWVwZXIga25vd2xlZGdlIGVtcG93ZXJzIHlvdSB0byBleGNlbCBpbiB5b3VyIGV4YW1zIGFuZCBmdXR1cmUgZW5kZWF2b3JzLicsICdMZWFybiBtb3JlJyk7XHJcbnNlcnZlMi5jbGFzc0xpc3QuYWRkKCdzZXJ2ZScpO1xyXG5zZXJ2ZTEuaWQgPSAnbWlkZGxlJztcclxuLy9jcmVhdGUgc2VydmljZSB0aHJlZVxyXG5jb25zdCBzZXJ2ZTMgPSBjcmVhdGVTZXJ2aWNlKCdMYWIgTWFzdGVyeSBNYWRlIEVhc3knLCAnRWxhYm9yYXRlIHNoZWRzIGxpZ2h0IG9uIGV2ZW4gdGhlIG1vc3QgY29tcGxleCBleHBlcmltZW50cywgdHJhbnNmb3JtaW5nIHlvdSBmcm9tIGJld2lsZGVyZWQgYmVnaW5uZXIgdG8gY29uZmlkZW50IGV4cGVydC4gVGhpcyBuZXdmb3VuZCB1bmRlcnN0YW5kaW5nIGVtcG93ZXJzIHlvdSB0byB0YWNrbGUgeW91ciBFTEFzIHdpdGggYSB3aW5uaW5nIHN0cmF0ZWd5LicsICdMZWFybiBtb3JlJyk7XHJcbnNlcnZlMy5jbGFzc0xpc3QuYWRkKCdzZXJ2ZScpO1xyXG4vL0FwcGVuZCBzZXJ2aWNlcyB0byAgc2VydmUgYm94XHJcbnNlcnZlQm94LmFwcGVuZENoaWxkKHNlcnZlMik7XHJcbnNlcnZlQm94LmFwcGVuZENoaWxkKHNlcnZlMSk7XHJcbnNlcnZlQm94LmFwcGVuZENoaWxkKHNlcnZlMyk7XHJcbi8vY3JlYXRlIHNlcnZpY2UgY2FsbCB0byBhY3Rpb25cclxuY29uc3Qgc2VydmVBY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuc2VydmVBY3Rpb24udGV4dENvbnRlbnQgPSAnR0VUIFNUQVJURUQnO1xyXG5zZXJ2ZUFjdGlvbi5pZCA9ICdzZXJ2ZUFjdGlvbic7XHJcbi8vQXBwZW5kIHNlcnZpY2UgaXRlbXMgdG8gc2VydmljZSBzZWN0aW9uXHJcbnNlcnZlU2VjdGlvbi5hcHBlbmRDaGlsZChzZXJ2ZUhlYWQpO1xyXG5zZXJ2ZVNlY3Rpb24uYXBwZW5kQ2hpbGQoc2VydmVCb3gpO1xyXG5zZXJ2ZVNlY3Rpb24uYXBwZW5kQ2hpbGQoc2VydmVBY3Rpb24pO1xyXG4vL0FwcGVuZCBzZXJ2aWNlIHNlY3Rpb24gdG8gbWFpblxyXG5tYWluLmFwcGVuZENoaWxkKHNlcnZlU2VjdGlvbik7XHJcblxyXG5cclxuLy9jcmVhdGUgYWJvdXQgc2VjdGlvblxyXG5jb25zdCBhYm91dFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbmFib3V0U2VjdGlvbi5pZCA9ICdhYm91dFNlY3Rpb24nO1xyXG4vL2NyZWF0ZSBhYm91dCBwaWN0dXJlIGRpdlxyXG5jb25zdCBwaWNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxucGljRGl2LmlkID0gJ3doeVVzJztcclxuLy9jcmVhdGUgcGljdHVyZSBpbiBhYm91dCBkaXZcclxuY29uc3QgYWJvdXRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuYWJvdXRJbWcuc3JjID0gYWJvdXRQaWM7XHJcbi8vY3JlYXRlIGhlYWRpbmcgZm9yIGFib3V0IHNlY3Rpb25cclxuY29uc3QgYWJvdXRIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuYWJvdXRIZWFkLnRleHRDb250ZW50ID0gJ1dIWSBVUz8nO1xyXG4vL0FwcGVuZCB0byBwaWN0dXJlIERpdlxyXG5waWNEaXYuYXBwZW5kQ2hpbGQoYWJvdXRJbWcpO1xyXG5waWNEaXYuYXBwZW5kQ2hpbGQoYWJvdXRIZWFkKTtcclxuLy9jcmVhdGUgQWJvdXQgdGV4dCBkaXZcclxuY29uc3QgYWJvdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuYWJvdXREaXYuaWQgPSAnYWJvdXQnO1xyXG4vL2NyZWF0ZSBhYm91dCB0ZXh0IGJsb2NrcXVvdGVcclxuY29uc3QgYWJvdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5hYm91dFRleHQudGV4dENvbnRlbnQgPSAnXCJXZSB1bmRlcnN0YW5kIHRoZSBzdHJ1Z2dsZS5cXG4gSnVnZ2xpbmcgY29tcGxleCBlbmdpbmVlcmluZ1xcbiBjb25jZXB0cywgY29uZHVjdGluZyBpbnRyaWNhdGVcXG4gZXhwZXJpbWVudHMsIGFuZCB0aGVuIGZhY2luZ1xcbiB0aGUgZGF1bnRpbmcgdGFzayBvZiB3cml0aW5nIGFcXG4gY2xlYXIgYW5kIGNvbmNpc2UgbGFiIHJlcG9ydFxcbiBjYW4gbGVhdmUgZXZlbiB0aGUgYnJpZ2h0ZXN0XFxuIHN0dWRlbnQgZmVlbGluZyBvdmVyd2hlbG1lZC5cXG4gVGhhdFxcJ3Mgd2hlcmUgd2UgY29tZSBpbi5cIic7XHJcbi8vQXBwZW5kIGFib3V0IHRleHQgdG8gaXQgY29udGFpbmVyXHJcbmFib3V0RGl2LmFwcGVuZENoaWxkKGFib3V0VGV4dCk7XHJcbi8vQXBwZW5kIGFib3V0IGNvbnRlbnRzIHRvIHRoZSBzZWN0aW9uXHJcbmFib3V0U2VjdGlvbi5hcHBlbmRDaGlsZChwaWNEaXYpO1xyXG5hYm91dFNlY3Rpb24uYXBwZW5kQ2hpbGQoYWJvdXREaXYpO1xyXG4vL0FwcGVuZCBhYm91dCBzZWN0aW9uIHRvIG1haW5cclxubWFpbi5hcHBlbmRDaGlsZChhYm91dFNlY3Rpb24pO1xyXG5cclxuLy9jcmVhdGUgY29udGFjdCBzZWN0aW9uXHJcbmNvbnN0IHJlYWNoU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxucmVhY2hTZWN0aW9uLmlkID0gJ2NvbnRhY3QnO1xyXG4vL2NyZWF0ZSBjb250YWN0IGhlYWRlclxyXG5jb25zdCByZWFjaEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbnJlYWNoSGVhZGVyLnRleHRDb250ZW50ID0gJ0NPTlRBQ1QgVVMnO1xyXG4vL2NyZWF0ZSBmb3JtIGVsZW1lbnRcclxuY29uc3QgZm9ybSA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbmNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxudXNlck5hbWUudHlwZSA9ICd0ZXh0JztcclxudXNlck5hbWUucGxhY2Vob2xkZXIgPSAnTmFtZSc7XHJcbnVzZXJOYW1lLmlkID0gJ3VzZXJOYW1lJztcclxudXNlck5hbWUuY2xhc3NMaXN0LnRvZ2dsZSgnaW5wdXQnKTtcclxuY29uc3QgdXNlckVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxudXNlckVtYWlsLnR5cGUgPSAnZW1haWwnO1xyXG51c2VyRW1haWwucGxhY2Vob2xkZXIgPSAnRW1haWwnO1xyXG51c2VyRW1haWwuaWQgPSAndXNlckVtYWlsJztcclxudXNlckVtYWlsLmNsYXNzTGlzdC50b2dnbGUoJ2lucHV0Jyk7XHJcbmNvbnN0IHVzZXJQaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbnVzZXJQaG9uZS5wbGFjZWhvbGRlciA9ICdQaG9uZSBOdW1iZXInO1xyXG51c2VyUGhvbmUudHlwZSA9ICdudW1iZXInO1xyXG51c2VyUGhvbmUuaWQgPSAndXNlclBob25lJztcclxudXNlclBob25lLmNsYXNzTGlzdC50b2dnbGUoJ2lucHV0Jyk7XHJcbmNvbnN0IHVzZXJNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxudXNlck1lc3NhZ2UucGxhY2Vob2xkZXIgPSAnRW50ZXIgTWVzc2FnZSc7XHJcbnVzZXJNZXNzYWdlLmlkID0gJ3VzZXJNZXNzYWdlJztcclxudXNlclBob25lLmNsYXNzTGlzdC50b2dnbGUoJ2lucHV0Jyk7XHJcbmNvbnN0IHVzZXJTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG51c2VyU3VibWl0LnR5cGUgPSAnc3VibWl0JztcclxudXNlclN1Ym1pdC50ZXh0Q29udGVudCA9ICdTVUJNSVQnO1xyXG51c2VyU3VibWl0LmlkID0gJ3VzZXJTdWJtaXQnO1xyXG4vL0FwcGVuZCBmb3JtIGNoaWxkIGVsZW1lbnRzXHJcbmZvcm0uYXBwZW5kQ2hpbGQodXNlck5hbWUpO1xyXG5mb3JtLmFwcGVuZENoaWxkKHVzZXJFbWFpbCk7XHJcbmZvcm0uYXBwZW5kQ2hpbGQodXNlclBob25lKTtcclxuZm9ybS5hcHBlbmRDaGlsZCh1c2VyTWVzc2FnZSk7XHJcbmZvcm0uYXBwZW5kQ2hpbGQodXNlclN1Ym1pdCk7XHJcbi8vQXBwZW5kIGVsZW1lbnQgdG8gY29udGFjdCBzZWN0aW9uXHJcbnJlYWNoU2VjdGlvbi5hcHBlbmRDaGlsZChyZWFjaEhlYWRlcik7XHJcbnJlYWNoU2VjdGlvbi5hcHBlbmRDaGlsZChmb3JtKTtcclxuLy9BcHBlbmQgY29udGFjdCBzZWN0aW9uIHRvIG1haW5cclxubWFpbi5hcHBlbmRDaGlsZChyZWFjaFNlY3Rpb24pO1xyXG4vL0FwcGVuZCBtYWluIHRvIGJvZHlcclxuYm9keS5hcHBlbmRDaGlsZChtYWluKTtcclxuXHJcbi8vY2FsbCB0aGUgY2Fyb3VzZWwgZnVuY3Rpb25cclxuY2Fyb3VzZWwoKTtcclxuXHJcbi8vZGlzcGxheSBmb290ZXJcclxucmVuZGVyRm9vdGVyKGJvZHksIFtobWUsIHJwdCwgYWJ0XSk7XHJcblxyXG5kaXNwbGF5QUkoYm9keSk7XHJcbmNyZWF0ZUdlbWluaShib2R5KTtcclxuY3JlYXRlQ2hhdEdwdChib2R5KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=