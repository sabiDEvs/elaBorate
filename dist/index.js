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





//create a reference to body tag
const body = document.querySelector('body');
//call header function
(0,_modules_header__WEBPACK_IMPORTED_MODULE_1__.renderHeader)(body);

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
(0,_modules_footer__WEBPACK_IMPORTED_MODULE_2__.renderFooter)(body);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FtRTtBQUNUO0FBQ0s7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGtCQUFrQiwyREFBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxpQkFBaUIsa0VBQUs7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQkFBa0IscUVBQU07QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUMyRjtBQUM3QztBQUNBO0FBQ3NCO0FBQ3BFO0FBQzBCO0FBQzFCO0FBQzBEO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsNkRBQVk7O0FBRVo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxRUFBbUI7QUFDbkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDREQUFVLENBQUMsZ0VBQUs7QUFDaEM7QUFDQSxnQkFBZ0IsNERBQVUsQ0FBQyxrRUFBSztBQUNoQztBQUNBLGdCQUFnQiw0REFBVSxDQUFDLGtFQUFLO0FBQ2hDO0FBQ0EsZ0JBQWdCLDREQUFVLENBQUMsa0VBQUs7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLCtEQUFhO0FBQzVCO0FBQ0E7QUFDQSxlQUFlLCtEQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLGVBQWUsK0RBQWE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwrREFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMERBQVE7O0FBRVI7QUFDQSw2REFBWTs7QUFFWixzREFBUztBQUNULHlEQUFZO0FBQ1osMERBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGFib3JhdGUvLi9zcmMvQ1NTL3N0eWxlLmNzcz8wNTgwIiwid2VicGFjazovL2VsYWJvcmF0ZS8uL3NyYy9TQ1JJUFRTL21vZHVsZXMvYWkuanMiLCJ3ZWJwYWNrOi8vZWxhYm9yYXRlLy4vc3JjL1NDUklQVFMvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBnZW1pbmkgZnJvbSAnLi4vLi4vUkVTT1VSQ0VTL2ltYWdlcy9nb29nbGUtZ2VtaW5pLWljb24ucG5nJztcbmltcG9ydCBjaGF0Z3B0IGZyb20gJy4uLy4uL1JFU09VUkNFUy9pbWFnZXMvY2hhdC1ncHQucG5nJztcbmltcG9ydCBhaVBpYyBmcm9tICcuLi8uLi9SRVNPVVJDRVMvaW1hZ2VzL0FJLWNoYXRib3QtaWNvbi5wbmcnO1xuY29uc3QgZGlzcGxheUFJID0gKGJvZHkpID0+IHtcbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBncHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBncHQuY2xhc3NMaXN0LmFkZCgnYWlEaXYnKTtcbiAgICBncHQuY2xhc3NMaXN0LmFkZCgncG9wVXAnKTtcbiAgICBncHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGF0R1BUJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnZW1pbmlBSScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG4gICAgY29uc3QgZ3B0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGdwdEljb24uc3JjID0gY2hhdGdwdDtcbiAgICBncHQuYXBwZW5kQ2hpbGQoZ3B0SWNvbik7XG4gICAgY29uc3QgYWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhaS5jbGFzc0xpc3QuYWRkKCdhaURpdicpO1xuICAgIGFpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBncHQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgIGdlbS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICB9KTtcbiAgICBjb25zdCBhaUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBhaUljb24uc3JjID0gYWlQaWM7XG4gICAgYWkuYXBwZW5kQ2hpbGQoYWlJY29uKTtcbiAgICBjb25zdCBnZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBnZW0uY2xhc3NMaXN0LmFkZCgnYWlEaXYnKTtcbiAgICBnZW0uY2xhc3NMaXN0LmFkZCgncG9wVXAnKTtcbiAgICBnZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGF0R1BUJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dlbWluaUFJJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfSk7XG4gICAgY29uc3QgZ2VtSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGdlbUljb24uc3JjID0gZ2VtaW5pO1xuICAgIGdlbS5hcHBlbmRDaGlsZChnZW1JY29uKTtcbiAgICBib3guaWQgPSAnYWknO1xuICAgIGJveC5hcHBlbmRDaGlsZChncHQpO1xuICAgIGJveC5hcHBlbmRDaGlsZChhaSk7XG4gICAgYm94LmFwcGVuZENoaWxkKGdlbSk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChib3gpO1xufTtcbmNvbnN0IGNyZWF0ZUFpQm94ID0gKHVybCwgdGl0bGUsIGlkZSkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBhaURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hhdEdQVCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnZW1pbmlBSScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG4gICAgdGV4dC50ZXh0Q29udGVudCA9ICdBSSBwb3AtdXAgbW9kYWwnO1xuICAgIHRleHQuY2xhc3NMaXN0LmFkZCgnYWlUZXh0Jyk7XG4gICAgY2xvc2UudGV4dENvbnRlbnQgPSAneCc7XG4gICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnY2xvc2UnKTtcbiAgICBjb25zdCBmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgIGZyYW1lLnNyYyA9IHVybDtcbiAgICBmcmFtZS5uYW1lID0gdGl0bGU7XG4gICAgZnJhbWUuaWQgPSBpZGU7XG4gICAgZGl2LmlkID0gdGl0bGU7XG4gICAgYWlEaXYuY2xhc3NMaXN0LmFkZCgnZnJhbWVCb3gnKTtcbiAgICBhaURpdi5hcHBlbmRDaGlsZChmcmFtZSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHRleHQpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChjbG9zZSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGFpRGl2KTtcbiAgICByZXR1cm4gZGl2O1xufTtcbmNvbnN0IGNyZWF0ZUdlbWluaSA9IChib2R5KSA9PiB7XG4gICAgY29uc3QgZ2VtaW5pID0gY3JlYXRlQWlCb3goXCJodHRwczovL2JvdC5vcmltb24uYWkvP3RlbmFudElkPTViOGEzNjBjLTcxMGEtNDRmMi04N2JjLTVmOTFmYzIxMTkxMSZmdWxsU2NyZWVuQm90PXRydWVcIiAsICdnZW1pbmlBSScsICdnZW1pbmknKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGdlbWluaSk7XG59O1xuY29uc3QgY3JlYXRlQ2hhdEdwdCA9IChib2R5KSA9PiB7XG4gICAgY29uc3QgY2hhdEdQVCA9IGNyZWF0ZUFpQm94KFwiaHR0cHM6Ly93d3cuY2hhdGJhc2UuY28vY2hhdGJvdC1pZnJhbWUvTUFzUzd2ZDh5aGx6NC1ya2hBU0JMXCIsICdjaGF0R1BUJywgJ2NoYXRncHQnKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGNoYXRHUFQpO1xufTtcbmV4cG9ydHtjcmVhdGVHZW1pbmksIGNyZWF0ZUNoYXRHcHQsIGRpc3BsYXlBSX07IiwiLy9pbXBvcnQgZnVuY3Rpb25zIGZyb20gbW9kdWxlc1xuaW1wb3J0IHtnZW5lcmF0ZUhlcm9TZWN0aW9uLCBjYXJvdXNlbCwgY3JlYXRlRGVwdCwgY3JlYXRlU2VydmljZX0gZnJvbSAnLi9tb2R1bGVzL2xhbmRpbmcnO1xuaW1wb3J0IHtyZW5kZXJIZWFkZXJ9IGZyb20gJy4vbW9kdWxlcy9oZWFkZXInO1xuaW1wb3J0IHtyZW5kZXJGb290ZXJ9IGZyb20gJy4vbW9kdWxlcy9mb290ZXInO1xuaW1wb3J0IHtjcmVhdGVHZW1pbmksIGNyZWF0ZUNoYXRHcHQsIGRpc3BsYXlBSX0gZnJvbSAnLi9tb2R1bGVzL2FpJztcbi8vaW1wb3J0IGNzc1xuaW1wb3J0ICcuLi9DU1Mvc3R5bGUuY3NzJztcbi8vaW1wb3J0IGltYWdlc1xuaW1wb3J0IGRlcHQxIGZyb20gJy4uL1JFU09VUkNFUy9pbWFnZXMvY29tcHV0ZXItZGVwdC5wbmcnO1xuaW1wb3J0IGRlcHQyIGZyb20gJy4uL1JFU09VUkNFUy9pbWFnZXMvZWxlY3RyaWNhbC1kZXB0LnBuZyc7XG5pbXBvcnQgZGVwdDMgZnJvbSAnLi4vUkVTT1VSQ0VTL2ltYWdlcy9tZWNoYW5pY2FsLWRlcHQucG5nJztcbmltcG9ydCBkZXB0NCBmcm9tICcuLi9SRVNPVVJDRVMvaW1hZ2VzL3Byb2R1Y3Rpb24tZGVwdC5wbmcnO1xuaW1wb3J0IGFib3V0UGljIGZyb20gJy4uL1JFU09VUkNFUy9pbWFnZXMvYWJvdXRfdXNfbWFuLnBuZyc7XG4vL2NyZWF0ZSBhIHJlZmVyZW5jZSB0byBib2R5IHRhZ1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbi8vY2FsbCBoZWFkZXIgZnVuY3Rpb25cbnJlbmRlckhlYWRlcihib2R5KTtcblxuLy9jcmVhdGUgbWFpbiBzZWN0aW9uXG5jb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuXG4vL2NyZWF0ZSBoZXJvIHNlY3Rpb25cbmNvbnN0IGhlcm9TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuLy9BZGQgaGVyb1NlY3Rpb24gY29udGVudFxuZ2VuZXJhdGVIZXJvU2VjdGlvbihoZXJvU2VjdGlvbik7XG5oZXJvU2VjdGlvbi5pZCA9ICdoZXJvJztcbi8vYXBwZW5kIGhlcm9TZWN0aW9uIGNvbnRlbnRcbm1haW4uYXBwZW5kQ2hpbGQoaGVyb1NlY3Rpb24pO1xuXG4vL2NyZWF0ZSBkZXBhcnRtZW50IHNlY3Rpb25cbmNvbnN0IGRlcHRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuZGVwdFNlY3Rpb24uaWQgPSAnZGVwdCc7XG4vL2RlcGFydG1lbnQgc2VjdGlvbiBoZWFkaW5nXG5jb25zdCBkZXB0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbmRlcHRIZWFkZXIudGV4dENvbnRlbnQgPSAnRGVwYXJ0bWVudHMgV2UgQ292ZXInO1xuLy9kZXBhcnRtZW50IGdyb3VwaW5nXG5jb25zdCBkZXB0R3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmRlcHRHcm91cC5pZCA9ICdncm91cCc7XG4vL2NvbXB1dGVyIGRlcGFydG1lbnQgZGl2XG5jb25zdCBjcGVEZXB0ID0gY3JlYXRlRGVwdChkZXB0MSwgJ0NPTVBVVEVSIEVOR0lORUVSSU5HJywgJ0NvbXB1dGVyIEVMQSBvZmZlcnMgaGFuZHMtb24gZXhwZXJpZW5jZSB3aXRoIGhhcmR3YXJlLCBzb2Z0d2FyZSBhbmQgYmFzaWMgZW5naW5lZXJpbmcgY29uY2VwdHMsIGJ5IHNvbGlkaWZ5aW5nIHRoZW9yeSB0aHJvdWdoIGJ1aWxkaW5nIGNpcmN1aXRzLCBwcm9ncmFtbWluZyBtaWNyb2NvbnRyb2xsZXJzLCBhbmQgZXhwbG9yaW5nIGNvbXB1dGVyIG5ldHdvcmtzJywgWzMwMCwgNDAwXSk7XG4vL2VsZWN0cmljYWwgZGVwYXJ0bWVudCBkaXZcbmNvbnN0IGVlZURlcHQgPSBjcmVhdGVEZXB0KGRlcHQyLCAnRUxFQ1RSSUNBTCBFTkdJTkVFUklORycsICdFbGVjdHJpY2FsIEVMQSBicmluZ3MgZWxlY3RyaWNhbCBwcmluY2lwbGVzIHRvIGxpZmUuIFN0dWRlbnRzIGdhaW4gcHJhY3RpY2FsIGV4cGVyaWVuY2Ugd2l0aCBjaXJjdWl0cywgZWxlY3Ryb25pY3MsIHBvd2VyIHN5c3RlbXMsIGFuZCBjb250cm9sIHN5c3RlbXMgdGhyb3VnaCBleHBlcmltZW50cyBpbnZvbHZpbmcgcmVhbC13b3JsZCBlcXVpcG1lbnQgbGlrZSBUcmFuc2Zvcm1lcnMsIG9zY2lsbG9zY29wZXMsIGFuZCBvdGhlciBlbGVjdHJpY2FsIG1hY2hpbmVzJywgWzIwMCwgMzAwXSk7XG4vL21lY2hhbmljYWwgZGVwYXJ0bWVudCBkaXZcbmNvbnN0IG1lZURlcHQgPSBjcmVhdGVEZXB0KGRlcHQzLCAnTUVDSEFOSUNBTCBFTkdJTkVFUklORycsICdNZWNoYW5pY2FsIEVMQSBmb2N1c2VzIG9uIGFwcGx5aW5nIHRoZW9yZXRpY2FsIGNvbmNlcHRzIHRvIHJlYWwtd29ybGQgYXBwbGljYXRpb25zLiBTdHVkZW50cyBicmlkZ2UgdGhlIGdhcCBiZXR3ZWVuIHRoZW9yeSBhbmQgYXBwbGljYXRpb24gYnkgdGVzdGluZyBtZWNoYW5pY2FsIHN5c3RlbXMgdGhyb3VnaCBleHBlcmltZW50cyBpbnZvbHZpbmcgQXBwbGllZCBNZWNoYW5pY3MgKEFNKSBhbmQgU3RyZW5ndGggb2YgTWF0ZXJpYWxzIChTTSknLCBbMjAwXSk7XG4vL3Byb2R1Y3Rpb24gZGVwYXJ0bWVudCBkaXZcbmNvbnN0IHByZURlcHQgPSBjcmVhdGVEZXB0KGRlcHQ0LCAnUFJPRFVDVElPTiBFTkdJTkVFUklORycsICdQcm9kdWN0aW9uIEVMQSBkZWx2ZXMgaW50byB0aGUgcHJhY3RpY2FsaXRpZXMgb2YgbWFudWZhY3R1cmluZy4gU3R1ZGVudHMgZXhwbG9yZSBlZmZpY2llbnQgcHJvZHVjdGlvbiB0ZWNobmlxdWVzIHRocm91Z2ggZXhwZXJpbWVudHMgaW4gYXJlYXMgbGlrZSBtYWNoaW5pbmcsIHdlbGRpbmcsIGNhc3RpbmcsIGZvcm1pbmcsIGFuZCBiZW5jaC1maXR0aW5nLCBkZXZlbG9waW5nIGEgc3Ryb25nIGZvdW5kYXRpb24gZm9yIGZ1dHVyZSBpbmR1c3RyaWFsIHN1Y2Nlc3MnLCBbMjAwXSk7XG4vL2FwcGVuZCBkZXBhcnRtZW50IGRpdlxuZGVwdEdyb3VwLmFwcGVuZENoaWxkKGNwZURlcHQpO1xuZGVwdEdyb3VwLmFwcGVuZENoaWxkKGVlZURlcHQpO1xuZGVwdEdyb3VwLmFwcGVuZENoaWxkKG1lZURlcHQpO1xuZGVwdEdyb3VwLmFwcGVuZENoaWxkKHByZURlcHQpO1xuLy9hcHBlbmQgdG8gZGVwYXJ0bWVudCBjbGFzc1xuZGVwdFNlY3Rpb24uYXBwZW5kQ2hpbGQoZGVwdEhlYWRlcik7XG5kZXB0U2VjdGlvbi5hcHBlbmRDaGlsZChkZXB0R3JvdXApO1xuLy9hcHBlbmQgZGVwYXJ0bWVudCBTZWN0aW9uIHRvIE1haW5cbm1haW4uYXBwZW5kQ2hpbGQoZGVwdFNlY3Rpb24pO1xuXG4vL2NyZWF0ZSBzZXJ2aWNlIHNlY3Rpb25cbmNvbnN0IHNlcnZlU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbnNlcnZlU2VjdGlvbi5pZCA9ICdzZXJ2aWNlJztcbi8vc2VydmljZSBoZWFkZXJcbmNvbnN0IHNlcnZlSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG5zZXJ2ZUhlYWQudGV4dENvbnRlbnQgPSBcIlNlcnZpY2VzIFdlIE9mZmVyXCI7XG4vL3RoZSBzZXJ2aWNlcyBjb250YWluZXJcbmNvbnN0IHNlcnZlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zZXJ2ZUJveC5pZCA9ICdvZmZlcnMnO1xuLy9jcmVhdGUgc2VydmljZSBvbmVcbmNvbnN0IHNlcnZlMSA9IGNyZWF0ZVNlcnZpY2UoJ0dyYWRlLUEgUmVwb3J0cycsICdTdG9wIHdhc3RpbmcgdGltZSBvbiBpbmZvcm1hdGlvbiBvdmVybG9hZC4gRWxhYm9yYXRlIGVxdWlwcyB5b3Ugd2l0aCB0aGUgZXNzZW50aWFsIHJlc291cmNlcyBhbmQgZXhwZXJ0IHRpcHMgdG8gY3JhZnQgY29uY2lzZSwgaW1wYWN0ZnVsIHJlcG9ydHMgdGhhdCBzaG93Y2FzZSB5b3VyIHVuZGVyc3RhbmRpbmcuIFBsdXMsIHdpdGggb3VyIHNlYW1sZXNzIFBERiBkb3dubG9hZCBmZWF0dXJlLCB5b3UgY2FuIGVmZm9ydGxlc3NseSBzYXZlIHlvdXIgcmVwb3J0cyBmb3IgZnV0dXJlIHJlZmVyZW5jZSBvciBlYXN5IHNoYXJpbmcgd2l0aCBpbnN0cnVjdG9ycy4nLCAnTGVhcm4gbW9yZScpO1xuc2VydmUxLmNsYXNzTGlzdC5hZGQoJ3NlcnZlJyk7XG4vL2NyZWF0ZSBzZXJ2aWNlIHR3b1xuY29uc3Qgc2VydmUyID0gY3JlYXRlU2VydmljZSgnR2FpbiBpbnNpZ2h0ZnVsIGtub3dsZWRnZScsICdEb25cXCd0IGp1c3QgbWVtb3JpemUsIHRydWx5IHVuZGVyc3RhbmQuIEVsYWJvcmF0ZSBlcXVpcHMgeW91IHdpdGggaW50ZXJhY3RpdmUgbGVhcm5pbmcgdG9vbHMgYW5kIGV4cGVydCBpbnNpZ2h0cywgdHJhbnNmb3JtaW5nIHBhc3NpdmUgZGF0YSBpbnRvIGEgcmljaCB1bmRlcnN0YW5kaW5nIG9mIGVuZ2luZWVyaW5nIGNvbmNlcHRzLiBUaGlzIGRlZXBlciBrbm93bGVkZ2UgZW1wb3dlcnMgeW91IHRvIGV4Y2VsIGluIHlvdXIgZXhhbXMgYW5kIGZ1dHVyZSBlbmRlYXZvcnMuJywgJ0xlYXJuIG1vcmUnKTtcbnNlcnZlMi5jbGFzc0xpc3QuYWRkKCdzZXJ2ZScpO1xuc2VydmUxLmlkID0gJ21pZGRsZSc7XG4vL2NyZWF0ZSBzZXJ2aWNlIHRocmVlXG5jb25zdCBzZXJ2ZTMgPSBjcmVhdGVTZXJ2aWNlKCdMYWIgTWFzdGVyeSBNYWRlIEVhc3knLCAnRWxhYm9yYXRlIHNoZWRzIGxpZ2h0IG9uIGV2ZW4gdGhlIG1vc3QgY29tcGxleCBleHBlcmltZW50cywgdHJhbnNmb3JtaW5nIHlvdSBmcm9tIGJld2lsZGVyZWQgYmVnaW5uZXIgdG8gY29uZmlkZW50IGV4cGVydC4gVGhpcyBuZXdmb3VuZCB1bmRlcnN0YW5kaW5nIGVtcG93ZXJzIHlvdSB0byB0YWNrbGUgeW91ciBFTEFzIHdpdGggYSB3aW5uaW5nIHN0cmF0ZWd5LicsICdMZWFybiBtb3JlJyk7XG5zZXJ2ZTMuY2xhc3NMaXN0LmFkZCgnc2VydmUnKTtcbi8vQXBwZW5kIHNlcnZpY2VzIHRvICBzZXJ2ZSBib3hcbnNlcnZlQm94LmFwcGVuZENoaWxkKHNlcnZlMik7XG5zZXJ2ZUJveC5hcHBlbmRDaGlsZChzZXJ2ZTEpO1xuc2VydmVCb3guYXBwZW5kQ2hpbGQoc2VydmUzKTtcbi8vY3JlYXRlIHNlcnZpY2UgY2FsbCB0byBhY3Rpb25cbmNvbnN0IHNlcnZlQWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zZXJ2ZUFjdGlvbi50ZXh0Q29udGVudCA9ICdHRVQgU1RBUlRFRCc7XG5zZXJ2ZUFjdGlvbi5pZCA9ICdzZXJ2ZUFjdGlvbic7XG4vL0FwcGVuZCBzZXJ2aWNlIGl0ZW1zIHRvIHNlcnZpY2Ugc2VjdGlvblxuc2VydmVTZWN0aW9uLmFwcGVuZENoaWxkKHNlcnZlSGVhZCk7XG5zZXJ2ZVNlY3Rpb24uYXBwZW5kQ2hpbGQoc2VydmVCb3gpO1xuc2VydmVTZWN0aW9uLmFwcGVuZENoaWxkKHNlcnZlQWN0aW9uKTtcbi8vQXBwZW5kIHNlcnZpY2Ugc2VjdGlvbiB0byBtYWluXG5tYWluLmFwcGVuZENoaWxkKHNlcnZlU2VjdGlvbik7XG5cblxuLy9jcmVhdGUgYWJvdXQgc2VjdGlvblxuY29uc3QgYWJvdXRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuYWJvdXRTZWN0aW9uLmlkID0gJ2Fib3V0U2VjdGlvbic7XG4vL2NyZWF0ZSBhYm91dCBwaWN0dXJlIGRpdlxuY29uc3QgcGljRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5waWNEaXYuaWQgPSAnd2h5VXMnO1xuLy9jcmVhdGUgcGljdHVyZSBpbiBhYm91dCBkaXZcbmNvbnN0IGFib3V0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5hYm91dEltZy5zcmMgPSBhYm91dFBpYztcbi8vY3JlYXRlIGhlYWRpbmcgZm9yIGFib3V0IHNlY3Rpb25cbmNvbnN0IGFib3V0SGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5hYm91dEhlYWQudGV4dENvbnRlbnQgPSAnV0hZIFVTPyc7XG4vL0FwcGVuZCB0byBwaWN0dXJlIERpdlxucGljRGl2LmFwcGVuZENoaWxkKGFib3V0SW1nKTtcbnBpY0Rpdi5hcHBlbmRDaGlsZChhYm91dEhlYWQpO1xuLy9jcmVhdGUgQWJvdXQgdGV4dCBkaXZcbmNvbnN0IGFib3V0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5hYm91dERpdi5pZCA9ICdhYm91dCc7XG4vL2NyZWF0ZSBhYm91dCB0ZXh0IGJsb2NrcXVvdGVcbmNvbnN0IGFib3V0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbmFib3V0VGV4dC50ZXh0Q29udGVudCA9ICdcIldlIHVuZGVyc3RhbmQgdGhlIHN0cnVnZ2xlLlxcbiBKdWdnbGluZyBjb21wbGV4IGVuZ2luZWVyaW5nXFxuIGNvbmNlcHRzLCBjb25kdWN0aW5nIGludHJpY2F0ZVxcbiBleHBlcmltZW50cywgYW5kIHRoZW4gZmFjaW5nXFxuIHRoZSBkYXVudGluZyB0YXNrIG9mIHdyaXRpbmcgYVxcbiBjbGVhciBhbmQgY29uY2lzZSBsYWIgcmVwb3J0XFxuIGNhbiBsZWF2ZSBldmVuIHRoZSBicmlnaHRlc3RcXG4gc3R1ZGVudCBmZWVsaW5nIG92ZXJ3aGVsbWVkLlxcbiBUaGF0XFwncyB3aGVyZSB3ZSBjb21lIGluLlwiJztcbi8vQXBwZW5kIGFib3V0IHRleHQgdG8gaXQgY29udGFpbmVyXG5hYm91dERpdi5hcHBlbmRDaGlsZChhYm91dFRleHQpO1xuLy9BcHBlbmQgYWJvdXQgY29udGVudHMgdG8gdGhlIHNlY3Rpb25cbmFib3V0U2VjdGlvbi5hcHBlbmRDaGlsZChwaWNEaXYpO1xuYWJvdXRTZWN0aW9uLmFwcGVuZENoaWxkKGFib3V0RGl2KTtcbi8vQXBwZW5kIGFib3V0IHNlY3Rpb24gdG8gbWFpblxubWFpbi5hcHBlbmRDaGlsZChhYm91dFNlY3Rpb24pO1xuXG4vL2NyZWF0ZSBjb250YWN0IHNlY3Rpb25cbmNvbnN0IHJlYWNoU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbnJlYWNoU2VjdGlvbi5pZCA9ICdjb250YWN0Jztcbi8vY3JlYXRlIGNvbnRhY3QgaGVhZGVyXG5jb25zdCByZWFjaEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5yZWFjaEhlYWRlci50ZXh0Q29udGVudCA9ICdDT05UQUNUIFVTJztcbi8vY3JlYXRlIGZvcm0gZWxlbWVudFxuY29uc3QgZm9ybSA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5jb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG51c2VyTmFtZS50eXBlID0gJ3RleHQnO1xudXNlck5hbWUucGxhY2Vob2xkZXIgPSAnTmFtZSc7XG51c2VyTmFtZS5pZCA9ICd1c2VyTmFtZSc7XG51c2VyTmFtZS5jbGFzc0xpc3QudG9nZ2xlKCdpbnB1dCcpO1xuY29uc3QgdXNlckVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbnVzZXJFbWFpbC50eXBlID0gJ2VtYWlsJztcbnVzZXJFbWFpbC5wbGFjZWhvbGRlciA9ICdFbWFpbCc7XG51c2VyRW1haWwuaWQgPSAndXNlckVtYWlsJztcbnVzZXJFbWFpbC5jbGFzc0xpc3QudG9nZ2xlKCdpbnB1dCcpO1xuY29uc3QgdXNlclBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbnVzZXJQaG9uZS5wbGFjZWhvbGRlciA9ICdQaG9uZSBOdW1iZXInO1xudXNlclBob25lLnR5cGUgPSAnbnVtYmVyJztcbnVzZXJQaG9uZS5pZCA9ICd1c2VyUGhvbmUnO1xudXNlclBob25lLmNsYXNzTGlzdC50b2dnbGUoJ2lucHV0Jyk7XG5jb25zdCB1c2VyTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG51c2VyTWVzc2FnZS5wbGFjZWhvbGRlciA9ICdFbnRlciBNZXNzYWdlJztcbnVzZXJNZXNzYWdlLmlkID0gJ3VzZXJNZXNzYWdlJztcbnVzZXJQaG9uZS5jbGFzc0xpc3QudG9nZ2xlKCdpbnB1dCcpO1xuY29uc3QgdXNlclN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG51c2VyU3VibWl0LnR5cGUgPSAnc3VibWl0JztcbnVzZXJTdWJtaXQudGV4dENvbnRlbnQgPSAnU1VCTUlUJztcbnVzZXJTdWJtaXQuaWQgPSAndXNlclN1Ym1pdCc7XG4vL0FwcGVuZCBmb3JtIGNoaWxkIGVsZW1lbnRzXG5mb3JtLmFwcGVuZENoaWxkKHVzZXJOYW1lKTtcbmZvcm0uYXBwZW5kQ2hpbGQodXNlckVtYWlsKTtcbmZvcm0uYXBwZW5kQ2hpbGQodXNlclBob25lKTtcbmZvcm0uYXBwZW5kQ2hpbGQodXNlck1lc3NhZ2UpO1xuZm9ybS5hcHBlbmRDaGlsZCh1c2VyU3VibWl0KTtcbi8vQXBwZW5kIGVsZW1lbnQgdG8gY29udGFjdCBzZWN0aW9uXG5yZWFjaFNlY3Rpb24uYXBwZW5kQ2hpbGQocmVhY2hIZWFkZXIpO1xucmVhY2hTZWN0aW9uLmFwcGVuZENoaWxkKGZvcm0pO1xuLy9BcHBlbmQgY29udGFjdCBzZWN0aW9uIHRvIG1haW5cbm1haW4uYXBwZW5kQ2hpbGQocmVhY2hTZWN0aW9uKTtcbi8vQXBwZW5kIG1haW4gdG8gYm9keVxuYm9keS5hcHBlbmRDaGlsZChtYWluKTtcblxuLy9jYWxsIHRoZSBjYXJvdXNlbCBmdW5jdGlvblxuY2Fyb3VzZWwoKTtcblxuLy9kaXNwbGF5IGZvb3RlclxucmVuZGVyRm9vdGVyKGJvZHkpO1xuXG5kaXNwbGF5QUkoYm9keSk7XG5jcmVhdGVHZW1pbmkoYm9keSk7XG5jcmVhdGVDaGF0R3B0KGJvZHkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==