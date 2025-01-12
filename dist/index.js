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

/***/ "./src/RESOURCES/images/electrical-dept.png":
/*!**************************************************!*\
  !*** ./src/RESOURCES/images/electrical-dept.png ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "./asset/images/64aeffb2733ab0bdedda.png";

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

/***/ "./src/RESOURCES/images/production-dept.png":
/*!**************************************************!*\
  !*** ./src/RESOURCES/images/production-dept.png ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "./asset/images/2faf76535355f39d1270.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["src_SCRIPTS_modules_footer_js-src_SCRIPTS_modules_header_js"], () => (__webpack_exec__("./src/SCRIPTS/script.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FtRTtBQUNUO0FBQ0s7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGtCQUFrQiwyREFBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxpQkFBaUIsa0VBQUs7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQkFBa0IscUVBQU07QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUMyRjtBQUM3QztBQUNBO0FBQ3NCO0FBQ3BFO0FBQ0E7QUFDMEI7QUFDMUI7QUFDQTtBQUMwRDtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNERBQVUsQ0FBQyxnRUFBSztBQUNoQztBQUNBLGdCQUFnQiw0REFBVSxDQUFDLGtFQUFLO0FBQ2hDO0FBQ0EsZ0JBQWdCLDREQUFVLENBQUMsa0VBQUs7QUFDaEM7QUFDQSxnQkFBZ0IsNERBQVUsQ0FBQyxrRUFBSztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtEQUFhO0FBQzVCO0FBQ0E7QUFDQSxlQUFlLCtEQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0RBQWE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtEQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUFRO0FBQ1I7QUFDQTtBQUNBLDZEQUFZO0FBQ1o7QUFDQSxzREFBUztBQUNULHlEQUFZO0FBQ1osMERBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGFib3JhdGUvLi9zcmMvQ1NTL3N0eWxlLmNzcz83NjdjIiwid2VicGFjazovL2VsYWJvcmF0ZS8uL3NyYy9TQ1JJUFRTL21vZHVsZXMvYWkuanMiLCJ3ZWJwYWNrOi8vZWxhYm9yYXRlLy4vc3JjL1NDUklQVFMvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBnZW1pbmkgZnJvbSAnLi4vLi4vUkVTT1VSQ0VTL2ltYWdlcy9nb29nbGUtZ2VtaW5pLWljb24ucG5nJztcclxuaW1wb3J0IGNoYXRncHQgZnJvbSAnLi4vLi4vUkVTT1VSQ0VTL2ltYWdlcy9jaGF0LWdwdC5wbmcnO1xyXG5pbXBvcnQgYWlQaWMgZnJvbSAnLi4vLi4vUkVTT1VSQ0VTL2ltYWdlcy9BSS1jaGF0Ym90LWljb24ucG5nJztcclxuY29uc3QgZGlzcGxheUFJID0gKGJvZHkpID0+IHtcclxuICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgZ3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBncHQuY2xhc3NMaXN0LmFkZCgnYWlEaXYnKTtcclxuICAgIGdwdC5jbGFzc0xpc3QuYWRkKCdwb3BVcCcpO1xyXG4gICAgZ3B0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGF0R1BUJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dlbWluaUFJJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZ3B0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgZ3B0SWNvbi5zcmMgPSBjaGF0Z3B0O1xyXG4gICAgZ3B0LmFwcGVuZENoaWxkKGdwdEljb24pO1xyXG4gICAgY29uc3QgYWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFpLmNsYXNzTGlzdC5hZGQoJ2FpRGl2Jyk7XHJcbiAgICBhaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBncHQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgZ2VtLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBhaUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGFpSWNvbi5zcmMgPSBhaVBpYztcclxuICAgIGFpLmFwcGVuZENoaWxkKGFpSWNvbik7XHJcbiAgICBjb25zdCBnZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGdlbS5jbGFzc0xpc3QuYWRkKCdhaURpdicpO1xyXG4gICAgZ2VtLmNsYXNzTGlzdC5hZGQoJ3BvcFVwJyk7XHJcbiAgICBnZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoYXRHUFQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnZW1pbmlBSScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBnZW1JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBnZW1JY29uLnNyYyA9IGdlbWluaTtcclxuICAgIGdlbS5hcHBlbmRDaGlsZChnZW1JY29uKTtcclxuICAgIGJveC5pZCA9ICdhaSc7XHJcbiAgICBib3guYXBwZW5kQ2hpbGQoZ3B0KTtcclxuICAgIGJveC5hcHBlbmRDaGlsZChhaSk7XHJcbiAgICBib3guYXBwZW5kQ2hpbGQoZ2VtKTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoYm94KTtcclxufTtcclxuY29uc3QgY3JlYXRlQWlCb3ggPSAodXJsLCB0aXRsZSwgaWRlKSA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgYWlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGF0R1BUJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2VtaW5pQUknKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSk7XHJcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gJ0FJIHBvcC11cCBtb2RhbCc7XHJcbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ2FpVGV4dCcpO1xyXG4gICAgY2xvc2UudGV4dENvbnRlbnQgPSAneCc7XHJcbiAgICBjbG9zZS5jbGFzc0xpc3QuYWRkKCdjbG9zZScpO1xyXG4gICAgY29uc3QgZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcclxuICAgIGZyYW1lLnNyYyA9IHVybDtcclxuICAgIGZyYW1lLm5hbWUgPSB0aXRsZTtcclxuICAgIGZyYW1lLmlkID0gaWRlO1xyXG4gICAgZGl2LmlkID0gdGl0bGU7XHJcbiAgICBhaURpdi5jbGFzc0xpc3QuYWRkKCdmcmFtZUJveCcpO1xyXG4gICAgYWlEaXYuYXBwZW5kQ2hpbGQoZnJhbWUpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGNsb3NlKTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChhaURpdik7XHJcbiAgICByZXR1cm4gZGl2O1xyXG59O1xyXG5jb25zdCBjcmVhdGVHZW1pbmkgPSAoYm9keSkgPT4ge1xyXG4gICAgY29uc3QgZ2VtaW5pID0gY3JlYXRlQWlCb3goXCJodHRwczovL2JvdC5vcmltb24uYWkvP3RlbmFudElkPTViOGEzNjBjLTcxMGEtNDRmMi04N2JjLTVmOTFmYzIxMTkxMSZmdWxsU2NyZWVuQm90PXRydWVcIiAsICdnZW1pbmlBSScsICdnZW1pbmknKTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZ2VtaW5pKTtcclxufTtcclxuY29uc3QgY3JlYXRlQ2hhdEdwdCA9IChib2R5KSA9PiB7XHJcbiAgICBjb25zdCBjaGF0R1BUID0gY3JlYXRlQWlCb3goXCJodHRwczovL3d3dy5jaGF0YmFzZS5jby9jaGF0Ym90LWlmcmFtZS9NQXNTN3ZkOHlobHo0LXJraEFTQkxcIiwgJ2NoYXRHUFQnLCAnY2hhdGdwdCcpO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChjaGF0R1BUKTtcclxufTtcclxuZXhwb3J0e2NyZWF0ZUdlbWluaSwgY3JlYXRlQ2hhdEdwdCwgZGlzcGxheUFJfTsiLCIvL2ltcG9ydCBmdW5jdGlvbnMgZnJvbSBtb2R1bGVzXHJcbmltcG9ydCB7Z2VuZXJhdGVIZXJvU2VjdGlvbiwgY2Fyb3VzZWwsIGNyZWF0ZURlcHQsIGNyZWF0ZVNlcnZpY2V9IGZyb20gJy4vbW9kdWxlcy9sYW5kaW5nJztcclxuaW1wb3J0IHtyZW5kZXJIZWFkZXJ9IGZyb20gJy4vbW9kdWxlcy9oZWFkZXInO1xyXG5pbXBvcnQge3JlbmRlckZvb3Rlcn0gZnJvbSAnLi9tb2R1bGVzL2Zvb3Rlcic7XHJcbmltcG9ydCB7Y3JlYXRlR2VtaW5pLCBjcmVhdGVDaGF0R3B0LCBkaXNwbGF5QUl9IGZyb20gJy4vbW9kdWxlcy9haSc7XHJcbi8vaW1wb3J0IGNzc1xyXG5cclxuaW1wb3J0ICcuLi9DU1Mvc3R5bGUuY3NzJztcclxuXHJcbi8vaW1wb3J0IGltYWdlc1xyXG5pbXBvcnQgZGVwdDEgZnJvbSAnLi4vUkVTT1VSQ0VTL2ltYWdlcy9jb21wdXRlci1kZXB0LnBuZyc7XHJcbmltcG9ydCBkZXB0MiBmcm9tICcuLi9SRVNPVVJDRVMvaW1hZ2VzL2VsZWN0cmljYWwtZGVwdC5wbmcnO1xyXG5pbXBvcnQgZGVwdDMgZnJvbSAnLi4vUkVTT1VSQ0VTL2ltYWdlcy9tZWNoYW5pY2FsLWRlcHQucG5nJztcclxuaW1wb3J0IGRlcHQ0IGZyb20gJy4uL1JFU09VUkNFUy9pbWFnZXMvcHJvZHVjdGlvbi1kZXB0LnBuZyc7XHJcbmltcG9ydCBhYm91dFBpYyBmcm9tICcuLi9SRVNPVVJDRVMvaW1hZ2VzL2Fib3V0X3VzX21hbi5wbmcnO1xyXG5cclxuY29uc3QgaG1lID0gXCIuL2luZGV4Lmh0bWxcIjtcclxuY29uc3QgcnB0ID0gXCIuL3JlcG9ydC9yZXBvcnQuaHRtbFwiO1xyXG5jb25zdCBhYnQgPSBcIi4vYWJvdXQvYWJvdXQuaHRtbFwiO1xyXG5cclxuLy9jcmVhdGUgYSByZWZlcmVuY2UgdG8gYm9keSB0YWdcclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuLy9jYWxsIGhlYWRlciBmdW5jdGlvblxyXG5yZW5kZXJIZWFkZXIoYm9keSwgW2htZSwgcnB0LCBhYnRdKTtcclxuXHJcbi8vY3JlYXRlIG1haW4gc2VjdGlvblxyXG5jb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG5cclxuLy9jcmVhdGUgaGVybyBzZWN0aW9uXHJcbmNvbnN0IGhlcm9TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4vL0FkZCBoZXJvU2VjdGlvbiBjb250ZW50XHJcbmdlbmVyYXRlSGVyb1NlY3Rpb24oaGVyb1NlY3Rpb24pO1xyXG5oZXJvU2VjdGlvbi5pZCA9ICdoZXJvJztcclxuLy9hcHBlbmQgaGVyb1NlY3Rpb24gY29udGVudFxyXG5tYWluLmFwcGVuZENoaWxkKGhlcm9TZWN0aW9uKTtcclxuXHJcbi8vY3JlYXRlIGRlcGFydG1lbnQgc2VjdGlvblxyXG5jb25zdCBkZXB0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuZGVwdFNlY3Rpb24uaWQgPSAnZGVwdCc7XHJcbi8vZGVwYXJ0bWVudCBzZWN0aW9uIGhlYWRpbmdcclxuY29uc3QgZGVwdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbmRlcHRIZWFkZXIudGV4dENvbnRlbnQgPSAnRGVwYXJ0bWVudHMgV2UgQ292ZXInO1xyXG4vL2RlcGFydG1lbnQgZ3JvdXBpbmdcclxuY29uc3QgZGVwdEdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmRlcHRHcm91cC5pZCA9ICdncm91cCc7XHJcbi8vY29tcHV0ZXIgZGVwYXJ0bWVudCBkaXZcclxuY29uc3QgY3BlRGVwdCA9IGNyZWF0ZURlcHQoZGVwdDEsICdDT01QVVRFUiBFTkdJTkVFUklORycsICdDb21wdXRlciBFTEEgb2ZmZXJzIGhhbmRzLW9uIGV4cGVyaWVuY2Ugd2l0aCBoYXJkd2FyZSwgc29mdHdhcmUgYW5kIGJhc2ljIGVuZ2luZWVyaW5nIGNvbmNlcHRzLCBieSBzb2xpZGlmeWluZyB0aGVvcnkgdGhyb3VnaCBidWlsZGluZyBjaXJjdWl0cywgcHJvZ3JhbW1pbmcgbWljcm9jb250cm9sbGVycywgYW5kIGV4cGxvcmluZyBjb21wdXRlciBuZXR3b3JrcycsIFszMDAsIDQwMF0pO1xyXG4vL2VsZWN0cmljYWwgZGVwYXJ0bWVudCBkaXZcclxuY29uc3QgZWVlRGVwdCA9IGNyZWF0ZURlcHQoZGVwdDIsICdFTEVDVFJJQ0FMIEVOR0lORUVSSU5HJywgJ0VsZWN0cmljYWwgRUxBIGJyaW5ncyBlbGVjdHJpY2FsIHByaW5jaXBsZXMgdG8gbGlmZS4gU3R1ZGVudHMgZ2FpbiBwcmFjdGljYWwgZXhwZXJpZW5jZSB3aXRoIGNpcmN1aXRzLCBlbGVjdHJvbmljcywgcG93ZXIgc3lzdGVtcywgYW5kIGNvbnRyb2wgc3lzdGVtcyB0aHJvdWdoIGV4cGVyaW1lbnRzIGludm9sdmluZyByZWFsLXdvcmxkIGVxdWlwbWVudCBsaWtlIFRyYW5zZm9ybWVycywgb3NjaWxsb3Njb3BlcywgYW5kIG90aGVyIGVsZWN0cmljYWwgbWFjaGluZXMnLCBbMjAwLCAzMDBdKTtcclxuLy9tZWNoYW5pY2FsIGRlcGFydG1lbnQgZGl2XHJcbmNvbnN0IG1lZURlcHQgPSBjcmVhdGVEZXB0KGRlcHQzLCAnTUVDSEFOSUNBTCBFTkdJTkVFUklORycsICdNZWNoYW5pY2FsIEVMQSBmb2N1c2VzIG9uIGFwcGx5aW5nIHRoZW9yZXRpY2FsIGNvbmNlcHRzIHRvIHJlYWwtd29ybGQgYXBwbGljYXRpb25zLiBTdHVkZW50cyBicmlkZ2UgdGhlIGdhcCBiZXR3ZWVuIHRoZW9yeSBhbmQgYXBwbGljYXRpb24gYnkgdGVzdGluZyBtZWNoYW5pY2FsIHN5c3RlbXMgdGhyb3VnaCBleHBlcmltZW50cyBpbnZvbHZpbmcgQXBwbGllZCBNZWNoYW5pY3MgKEFNKSBhbmQgU3RyZW5ndGggb2YgTWF0ZXJpYWxzIChTTSknLCBbMjAwXSk7XHJcbi8vcHJvZHVjdGlvbiBkZXBhcnRtZW50IGRpdlxyXG5jb25zdCBwcmVEZXB0ID0gY3JlYXRlRGVwdChkZXB0NCwgJ1BST0RVQ1RJT04gRU5HSU5FRVJJTkcnLCAnUHJvZHVjdGlvbiBFTEEgZGVsdmVzIGludG8gdGhlIHByYWN0aWNhbGl0aWVzIG9mIG1hbnVmYWN0dXJpbmcuIFN0dWRlbnRzIGV4cGxvcmUgZWZmaWNpZW50IHByb2R1Y3Rpb24gdGVjaG5pcXVlcyB0aHJvdWdoIGV4cGVyaW1lbnRzIGluIGFyZWFzIGxpa2UgbWFjaGluaW5nLCB3ZWxkaW5nLCBjYXN0aW5nLCBmb3JtaW5nLCBhbmQgYmVuY2gtZml0dGluZywgZGV2ZWxvcGluZyBhIHN0cm9uZyBmb3VuZGF0aW9uIGZvciBmdXR1cmUgaW5kdXN0cmlhbCBzdWNjZXNzJywgWzIwMF0pO1xyXG4vL2FwcGVuZCBkZXBhcnRtZW50IGRpdlxyXG5kZXB0R3JvdXAuYXBwZW5kQ2hpbGQoY3BlRGVwdCk7XHJcbmRlcHRHcm91cC5hcHBlbmRDaGlsZChlZWVEZXB0KTtcclxuZGVwdEdyb3VwLmFwcGVuZENoaWxkKG1lZURlcHQpO1xyXG5kZXB0R3JvdXAuYXBwZW5kQ2hpbGQocHJlRGVwdCk7XHJcbi8vYXBwZW5kIHRvIGRlcGFydG1lbnQgY2xhc3NcclxuZGVwdFNlY3Rpb24uYXBwZW5kQ2hpbGQoZGVwdEhlYWRlcik7XHJcbmRlcHRTZWN0aW9uLmFwcGVuZENoaWxkKGRlcHRHcm91cCk7XHJcbi8vYXBwZW5kIGRlcGFydG1lbnQgU2VjdGlvbiB0byBNYWluXHJcbm1haW4uYXBwZW5kQ2hpbGQoZGVwdFNlY3Rpb24pO1xyXG5cclxuLy9jcmVhdGUgc2VydmljZSBzZWN0aW9uXHJcbmNvbnN0IHNlcnZlU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuc2VydmVTZWN0aW9uLmlkID0gJ3NlcnZpY2UnO1xyXG4vL3NlcnZpY2UgaGVhZGVyXHJcbmNvbnN0IHNlcnZlSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbnNlcnZlSGVhZC50ZXh0Q29udGVudCA9IFwiU2VydmljZXMgV2UgT2ZmZXJcIjtcclxuLy90aGUgc2VydmljZXMgY29udGFpbmVyXHJcbmNvbnN0IHNlcnZlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbnNlcnZlQm94LmlkID0gJ29mZmVycyc7XHJcbi8vY3JlYXRlIHNlcnZpY2Ugb25lXHJcbmNvbnN0IHNlcnZlMSA9IGNyZWF0ZVNlcnZpY2UoJ0dyYWRlLUEgUmVwb3J0cycsICdTdG9wIHdhc3RpbmcgdGltZSBvbiBpbmZvcm1hdGlvbiBvdmVybG9hZC4gRWxhYm9yYXRlIGVxdWlwcyB5b3Ugd2l0aCB0aGUgZXNzZW50aWFsIHJlc291cmNlcyBhbmQgZXhwZXJ0IHRpcHMgdG8gY3JhZnQgY29uY2lzZSwgaW1wYWN0ZnVsIHJlcG9ydHMgdGhhdCBzaG93Y2FzZSB5b3VyIHVuZGVyc3RhbmRpbmcuIFBsdXMsIHdpdGggb3VyIHNlYW1sZXNzIFBERiBkb3dubG9hZCBmZWF0dXJlLCB5b3UgY2FuIGVmZm9ydGxlc3NseSBzYXZlIHlvdXIgcmVwb3J0cyBmb3IgZnV0dXJlIHJlZmVyZW5jZSBvciBlYXN5IHNoYXJpbmcgd2l0aCBpbnN0cnVjdG9ycy4nLCAnTGVhcm4gbW9yZScpO1xyXG5zZXJ2ZTEuY2xhc3NMaXN0LmFkZCgnc2VydmUnKTtcclxuLy9jcmVhdGUgc2VydmljZSB0d29cclxuY29uc3Qgc2VydmUyID0gY3JlYXRlU2VydmljZSgnR2FpbiBpbnNpZ2h0ZnVsIGtub3dsZWRnZScsICdEb25cXCd0IGp1c3QgbWVtb3JpemUsIHRydWx5IHVuZGVyc3RhbmQuIEVsYWJvcmF0ZSBlcXVpcHMgeW91IHdpdGggaW50ZXJhY3RpdmUgbGVhcm5pbmcgdG9vbHMgYW5kIGV4cGVydCBpbnNpZ2h0cywgdHJhbnNmb3JtaW5nIHBhc3NpdmUgZGF0YSBpbnRvIGEgcmljaCB1bmRlcnN0YW5kaW5nIG9mIGVuZ2luZWVyaW5nIGNvbmNlcHRzLiBUaGlzIGRlZXBlciBrbm93bGVkZ2UgZW1wb3dlcnMgeW91IHRvIGV4Y2VsIGluIHlvdXIgZXhhbXMgYW5kIGZ1dHVyZSBlbmRlYXZvcnMuJywgJ0xlYXJuIG1vcmUnKTtcclxuc2VydmUyLmNsYXNzTGlzdC5hZGQoJ3NlcnZlJyk7XHJcbnNlcnZlMS5pZCA9ICdtaWRkbGUnO1xyXG4vL2NyZWF0ZSBzZXJ2aWNlIHRocmVlXHJcbmNvbnN0IHNlcnZlMyA9IGNyZWF0ZVNlcnZpY2UoJ0xhYiBNYXN0ZXJ5IE1hZGUgRWFzeScsICdFbGFib3JhdGUgc2hlZHMgbGlnaHQgb24gZXZlbiB0aGUgbW9zdCBjb21wbGV4IGV4cGVyaW1lbnRzLCB0cmFuc2Zvcm1pbmcgeW91IGZyb20gYmV3aWxkZXJlZCBiZWdpbm5lciB0byBjb25maWRlbnQgZXhwZXJ0LiBUaGlzIG5ld2ZvdW5kIHVuZGVyc3RhbmRpbmcgZW1wb3dlcnMgeW91IHRvIHRhY2tsZSB5b3VyIEVMQXMgd2l0aCBhIHdpbm5pbmcgc3RyYXRlZ3kuJywgJ0xlYXJuIG1vcmUnKTtcclxuc2VydmUzLmNsYXNzTGlzdC5hZGQoJ3NlcnZlJyk7XHJcbi8vQXBwZW5kIHNlcnZpY2VzIHRvICBzZXJ2ZSBib3hcclxuc2VydmVCb3guYXBwZW5kQ2hpbGQoc2VydmUyKTtcclxuc2VydmVCb3guYXBwZW5kQ2hpbGQoc2VydmUxKTtcclxuc2VydmVCb3guYXBwZW5kQ2hpbGQoc2VydmUzKTtcclxuLy9jcmVhdGUgc2VydmljZSBjYWxsIHRvIGFjdGlvblxyXG5jb25zdCBzZXJ2ZUFjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5zZXJ2ZUFjdGlvbi50ZXh0Q29udGVudCA9ICdHRVQgU1RBUlRFRCc7XHJcbnNlcnZlQWN0aW9uLmlkID0gJ3NlcnZlQWN0aW9uJztcclxuLy9BcHBlbmQgc2VydmljZSBpdGVtcyB0byBzZXJ2aWNlIHNlY3Rpb25cclxuc2VydmVTZWN0aW9uLmFwcGVuZENoaWxkKHNlcnZlSGVhZCk7XHJcbnNlcnZlU2VjdGlvbi5hcHBlbmRDaGlsZChzZXJ2ZUJveCk7XHJcbnNlcnZlU2VjdGlvbi5hcHBlbmRDaGlsZChzZXJ2ZUFjdGlvbik7XHJcbi8vQXBwZW5kIHNlcnZpY2Ugc2VjdGlvbiB0byBtYWluXHJcbm1haW4uYXBwZW5kQ2hpbGQoc2VydmVTZWN0aW9uKTtcclxuXHJcblxyXG4vL2NyZWF0ZSBhYm91dCBzZWN0aW9uXHJcbmNvbnN0IGFib3V0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuYWJvdXRTZWN0aW9uLmlkID0gJ2Fib3V0U2VjdGlvbic7XHJcbi8vY3JlYXRlIGFib3V0IHBpY3R1cmUgZGl2XHJcbmNvbnN0IHBpY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5waWNEaXYuaWQgPSAnd2h5VXMnO1xyXG4vL2NyZWF0ZSBwaWN0dXJlIGluIGFib3V0IGRpdlxyXG5jb25zdCBhYm91dEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5hYm91dEltZy5zcmMgPSBhYm91dFBpYztcclxuLy9jcmVhdGUgaGVhZGluZyBmb3IgYWJvdXQgc2VjdGlvblxyXG5jb25zdCBhYm91dEhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG5hYm91dEhlYWQudGV4dENvbnRlbnQgPSAnV0hZIFVTPyc7XHJcbi8vQXBwZW5kIHRvIHBpY3R1cmUgRGl2XHJcbnBpY0Rpdi5hcHBlbmRDaGlsZChhYm91dEltZyk7XHJcbnBpY0Rpdi5hcHBlbmRDaGlsZChhYm91dEhlYWQpO1xyXG4vL2NyZWF0ZSBBYm91dCB0ZXh0IGRpdlxyXG5jb25zdCBhYm91dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5hYm91dERpdi5pZCA9ICdhYm91dCc7XHJcbi8vY3JlYXRlIGFib3V0IHRleHQgYmxvY2txdW90ZVxyXG5jb25zdCBhYm91dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbmFib3V0VGV4dC50ZXh0Q29udGVudCA9ICdcIldlIHVuZGVyc3RhbmQgdGhlIHN0cnVnZ2xlLlxcbiBKdWdnbGluZyBjb21wbGV4IGVuZ2luZWVyaW5nXFxuIGNvbmNlcHRzLCBjb25kdWN0aW5nIGludHJpY2F0ZVxcbiBleHBlcmltZW50cywgYW5kIHRoZW4gZmFjaW5nXFxuIHRoZSBkYXVudGluZyB0YXNrIG9mIHdyaXRpbmcgYVxcbiBjbGVhciBhbmQgY29uY2lzZSBsYWIgcmVwb3J0XFxuIGNhbiBsZWF2ZSBldmVuIHRoZSBicmlnaHRlc3RcXG4gc3R1ZGVudCBmZWVsaW5nIG92ZXJ3aGVsbWVkLlxcbiBUaGF0XFwncyB3aGVyZSB3ZSBjb21lIGluLlwiJztcclxuLy9BcHBlbmQgYWJvdXQgdGV4dCB0byBpdCBjb250YWluZXJcclxuYWJvdXREaXYuYXBwZW5kQ2hpbGQoYWJvdXRUZXh0KTtcclxuLy9BcHBlbmQgYWJvdXQgY29udGVudHMgdG8gdGhlIHNlY3Rpb25cclxuYWJvdXRTZWN0aW9uLmFwcGVuZENoaWxkKHBpY0Rpdik7XHJcbmFib3V0U2VjdGlvbi5hcHBlbmRDaGlsZChhYm91dERpdik7XHJcbi8vQXBwZW5kIGFib3V0IHNlY3Rpb24gdG8gbWFpblxyXG5tYWluLmFwcGVuZENoaWxkKGFib3V0U2VjdGlvbik7XHJcblxyXG4vL2NyZWF0ZSBjb250YWN0IHNlY3Rpb25cclxuY29uc3QgcmVhY2hTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG5yZWFjaFNlY3Rpb24uaWQgPSAnY29udGFjdCc7XHJcbi8vY3JlYXRlIGNvbnRhY3QgaGVhZGVyXHJcbmNvbnN0IHJlYWNoSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxucmVhY2hIZWFkZXIudGV4dENvbnRlbnQgPSAnQ09OVEFDVCBVUyc7XHJcbi8vY3JlYXRlIGZvcm0gZWxlbWVudFxyXG5jb25zdCBmb3JtID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG51c2VyTmFtZS50eXBlID0gJ3RleHQnO1xyXG51c2VyTmFtZS5wbGFjZWhvbGRlciA9ICdOYW1lJztcclxudXNlck5hbWUuaWQgPSAndXNlck5hbWUnO1xyXG51c2VyTmFtZS5jbGFzc0xpc3QudG9nZ2xlKCdpbnB1dCcpO1xyXG5jb25zdCB1c2VyRW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG51c2VyRW1haWwudHlwZSA9ICdlbWFpbCc7XHJcbnVzZXJFbWFpbC5wbGFjZWhvbGRlciA9ICdFbWFpbCc7XHJcbnVzZXJFbWFpbC5pZCA9ICd1c2VyRW1haWwnO1xyXG51c2VyRW1haWwuY2xhc3NMaXN0LnRvZ2dsZSgnaW5wdXQnKTtcclxuY29uc3QgdXNlclBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxudXNlclBob25lLnBsYWNlaG9sZGVyID0gJ1Bob25lIE51bWJlcic7XHJcbnVzZXJQaG9uZS50eXBlID0gJ251bWJlcic7XHJcbnVzZXJQaG9uZS5pZCA9ICd1c2VyUGhvbmUnO1xyXG51c2VyUGhvbmUuY2xhc3NMaXN0LnRvZ2dsZSgnaW5wdXQnKTtcclxuY29uc3QgdXNlck1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG51c2VyTWVzc2FnZS5wbGFjZWhvbGRlciA9ICdFbnRlciBNZXNzYWdlJztcclxudXNlck1lc3NhZ2UuaWQgPSAndXNlck1lc3NhZ2UnO1xyXG51c2VyUGhvbmUuY2xhc3NMaXN0LnRvZ2dsZSgnaW5wdXQnKTtcclxuY29uc3QgdXNlclN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbnVzZXJTdWJtaXQudHlwZSA9ICdzdWJtaXQnO1xyXG51c2VyU3VibWl0LnRleHRDb250ZW50ID0gJ1NVQk1JVCc7XHJcbnVzZXJTdWJtaXQuaWQgPSAndXNlclN1Ym1pdCc7XHJcbi8vQXBwZW5kIGZvcm0gY2hpbGQgZWxlbWVudHNcclxuZm9ybS5hcHBlbmRDaGlsZCh1c2VyTmFtZSk7XHJcbmZvcm0uYXBwZW5kQ2hpbGQodXNlckVtYWlsKTtcclxuZm9ybS5hcHBlbmRDaGlsZCh1c2VyUGhvbmUpO1xyXG5mb3JtLmFwcGVuZENoaWxkKHVzZXJNZXNzYWdlKTtcclxuZm9ybS5hcHBlbmRDaGlsZCh1c2VyU3VibWl0KTtcclxuLy9BcHBlbmQgZWxlbWVudCB0byBjb250YWN0IHNlY3Rpb25cclxucmVhY2hTZWN0aW9uLmFwcGVuZENoaWxkKHJlYWNoSGVhZGVyKTtcclxucmVhY2hTZWN0aW9uLmFwcGVuZENoaWxkKGZvcm0pO1xyXG4vL0FwcGVuZCBjb250YWN0IHNlY3Rpb24gdG8gbWFpblxyXG5tYWluLmFwcGVuZENoaWxkKHJlYWNoU2VjdGlvbik7XHJcbi8vQXBwZW5kIG1haW4gdG8gYm9keVxyXG5ib2R5LmFwcGVuZENoaWxkKG1haW4pO1xyXG5cclxuLy9jYWxsIHRoZSBjYXJvdXNlbCBmdW5jdGlvblxyXG5jYXJvdXNlbCgpO1xyXG5cclxuLy9kaXNwbGF5IGZvb3RlclxyXG5yZW5kZXJGb290ZXIoYm9keSwgW2htZSwgcnB0LCBhYnRdKTtcclxuXHJcbmRpc3BsYXlBSShib2R5KTtcclxuY3JlYXRlR2VtaW5pKGJvZHkpO1xyXG5jcmVhdGVDaGF0R3B0KGJvZHkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==