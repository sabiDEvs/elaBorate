"use strict";
(self["webpackChunkelaborate"] = self["webpackChunkelaborate"] || []).push([["report/report"],{

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
/* harmony import */ var _RESOURCES_images_stay_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../RESOURCES/images/stay.png */ "./src/RESOURCES/images/stay.png");
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
    Image.src = _RESOURCES_images_stay_png__WEBPACK_IMPORTED_MODULE_0__;
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
    }, 1200000);
    
    
}
function CloseModal(){
    sectionModal.style.display = 'none';
}


/***/ }),

/***/ "./src/SCRIPTS/modules/report.js":
/*!***************************************!*\
  !*** ./src/SCRIPTS/modules/report.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDeptCard: () => (/* binding */ createDeptCard)
/* harmony export */ });

const createLevelsButtons = (levels)=>{
    const div = document.createElement('div');
    div.classList.add('levelsDiv');

}

const createDeptCard =(image, title, description, time, levels, tip, deptShortName)=> {
    const card = document.createElement('div');
    card.classList.add('card');



    //title
    const deptTitle = document.createElement('h5');
    deptTitle.classList.add('deptTitle');
    deptTitle.textContent = title;

    //image
    const img = document.createElement('img');
    img.classList.add('deptImage');
    img.src = image;
    
    //full details
    const details = document.createElement('div');
    details.classList.add('details');





    //description

    const deptDescription = document.createElement('p');
    deptDescription.classList.add('deptDescription');
    deptDescription.textContent = description;


    // Time

    const deptTime = document.createElement('p');
    deptTime.classList.add('deptTime');
    deptTime.textContent = `Submission Deadline: ${time}`;

    // Levels
    const deptLevels = document.createElement('div');
    deptLevels.classList.add('levels');

    

    levels.forEach(level => {
        const levelLink = document.createElement('a');
        levelLink.href = `/report/${deptShortName}/${level}.html`;
        levelLink.textContent = `${level}L REPORT`;
        levelLink.classList.add('levelLink');

        
        

        deptLevels.appendChild(levelLink);

    });

    const deptTip = document.createElement('p');
    deptTip.classList.add('tip');
    deptTip.textContent = ` ELA Tips:  ${tip}`;


    details.appendChild(deptDescription);
    details.appendChild(deptTime);
    details.appendChild(deptTip);
    details.appendChild(deptLevels);
    card.appendChild(deptTitle);
    card.appendChild(img);
    card.appendChild(details);

    return card;



}





/***/ }),

/***/ "./src/SCRIPTS/report.js":
/*!*******************************!*\
  !*** ./src/SCRIPTS/report.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/header.js */ "./src/SCRIPTS/modules/header.js");
/* harmony import */ var _modules_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/footer */ "./src/SCRIPTS/modules/footer.js");
/* harmony import */ var _CSS_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CSS/style.css */ "./src/CSS/style.css");
/* harmony import */ var _CSS_report_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CSS/report.css */ "./src/CSS/report.css");
/* harmony import */ var _modules_report_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/report.js */ "./src/SCRIPTS/modules/report.js");
/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/modal.js */ "./src/SCRIPTS/modules/modal.js");
/* harmony import */ var _RESOURCES_images_labrep_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../RESOURCES/images/labrep.png */ "./src/RESOURCES/images/labrep.png");
/* harmony import */ var _RESOURCES_images_dept_cpe_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../RESOURCES/images/dept_cpe.png */ "./src/RESOURCES/images/dept_cpe.png");
/* harmony import */ var _RESOURCES_images_dept_mee_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../RESOURCES/images/dept_mee.png */ "./src/RESOURCES/images/dept_mee.png");
/* harmony import */ var _RESOURCES_images_dept_pre_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../RESOURCES/images/dept_pre.png */ "./src/RESOURCES/images/dept_pre.png");
/* harmony import */ var _RESOURCES_images_dept_eee_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../RESOURCES/images/dept_eee.png */ "./src/RESOURCES/images/dept_eee.png");








//import images for the departmental cards





const hme = "../index.html";
const rpt = "./report.html";
const abt = "../about/about.html";

const body = document.querySelector('body');
(0,_modules_header_js__WEBPACK_IMPORTED_MODULE_0__.renderHeader)(body, [hme, rpt, abt]);
const wrapper = document.createElement('div');
wrapper.id = 'wrapper';
body.append(wrapper);
(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_5__.createModal)(body)
const section1 = document.createElement('div');
section1.id = 'section1';
wrapper.append(section1);
const text = document.createElement('h4');
text.classList.add('mainText')
wrapper.append(text);
text.innerHTML = 'Browse Available';
const text2 = document.createElement('h4');
text2.classList.add('mainText2')
wrapper.append(text2);
text2.innerHTML = 'Reports';
const reportImage = document.createElement('img');
reportImage.src = _RESOURCES_images_labrep_png__WEBPACK_IMPORTED_MODULE_6__;
reportImage.alt = 'reportimg'
const cpeDept = (0,_modules_report_js__WEBPACK_IMPORTED_MODULE_4__.createDeptCard)(_RESOURCES_images_dept_cpe_png__WEBPACK_IMPORTED_MODULE_7__,'COMPUTER ENGINEERING','Beyond theoretical knowledge, the computer engineering laboratory is the cornerstone of practical learning in the field. This specialized space hums with activity, equipped with high-performance computers, specialized software, and electronic components. Here, students bridge the gap between theory and application, building circuits, programming microcontrollers, and testing hardware functionalities. Experiments in networking, digital logic design, and computer architecture solidify classroom concepts, fostering a deeper understanding of how computers operate at their core. The lab fosters collaboration, as students tackle projects together, troubleshooting challenges and refining their problem-solving skills. This hands-on environment empowers future computer engineers, shaping them into innovators who can design and build the technological advancements of tomorrow.','TO BE DECIDED( Usually 1 week after experiment)',[300, 400], 'Be there 5mins before the time, Ensure to understand the basic concept','cpe');
const meeDept = (0,_modules_report_js__WEBPACK_IMPORTED_MODULE_4__.createDeptCard)(_RESOURCES_images_dept_mee_png__WEBPACK_IMPORTED_MODULE_8__,'MECHANICAL ENGINEERING','Beyond the theoretical realm, the mechanical engineering laboratory hums with the whir of machinery and the clink of tools. This space is a playground for innovation, filled with lathes, mills, 3D printers, and testing equipment. Here, students transform abstract concepts into tangible realities. They design and build mechanisms, analyze material properties, and test the strength of structures. Experiments in thermodynamics, fluid mechanics, and robotics bridge the gap between theory and application, solidifying knowledge and fostering problem-solving skills. The lab fosters collaboration, as students work together on projects, troubleshooting challenges and refining their designs. This hands-on environment empowers future mechanical engineers, equipping them with the practical skills to build the machines and structures that shape our world','4pm same day',[200], 'Be there 5mins before the time, Dress Appropriately','mee');
const eeeDept = (0,_modules_report_js__WEBPACK_IMPORTED_MODULE_4__.createDeptCard)(_RESOURCES_images_dept_eee_png__WEBPACK_IMPORTED_MODULE_10__,'ELECTRICAL ENGINEERING','The electrical engineering lab is a vibrant hub where theory meets tangible results. This space hums with the energy of experiments, filled with oscilloscopes, power supplies, and intricate circuits. Here, students bridge the gap between theoretical concepts and practical applications. They analyze electrical phenomena, design circuits, and build electronic devices, testing their functionality in real-time. Experiments in electromagnetism, power systems, and control systems solidify classroom knowledge, fostering a deeper understanding of how electricity behaves and powers our world. The lab fosters collaboration, as students work together on projects, troubleshooting challenges and refining their designs. This hands-on environment empowers future electrical engineers, equipping them with the practical skills to design and build the technological advancements that power our lives.','10AM Next day',[200, 300], 'Be there 5mins before the time, Dress Appropriately, Listen attentively and ensure Active Participation','eee');
const preDept = (0,_modules_report_js__WEBPACK_IMPORTED_MODULE_4__.createDeptCard)(_RESOURCES_images_dept_pre_png__WEBPACK_IMPORTED_MODULE_9__,'PRODUCTION ENGINEERING','The production engineering lab is a dynamic space where theory is transformed into optimized manufacturing processes. This hands-on environment hums with the activity of machinery and the methodical planning of production lines. Students experiment with various manufacturing techniques, including machining, welding, assembly, and quality control procedures. They analyze production data, optimize workflows, and apply lean manufacturing principles to achieve efficiency. Experiments in automation, robotics, and computer-aided manufacturing solidify classroom knowledge, fostering a deeper understanding of how products are created at scale. The lab fosters collaboration, as students work together on projects, simulating real-world production scenarios and refining their problem-solving skills. This hands-on environment empowers future production engineers, equipping them with the practical knowledge to design, implement, and optimize efficient manufacturing systems that drive productivity and innovation','TO BE DECIDED during Experiment',[200], 'Dress Appropriately, ensure Active Participation','pre');
wrapper.appendChild(cpeDept);
wrapper.appendChild(eeeDept);
wrapper.appendChild(meeDept);
wrapper.appendChild(preDept);
(0,_modules_footer__WEBPACK_IMPORTED_MODULE_1__.renderFooter)(body, [hme, rpt, abt]);
function checkLocalStorage(){
    if(!localStorage.getItem('Subscribed')){
        (0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_5__.OpenModal)();
    } 
    else{
        (0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_5__.CloseModal)();
    }
}
window.onload = checkLocalStorage;

/***/ }),

/***/ "./src/RESOURCES/images/dept_cpe.png":
/*!*******************************************!*\
  !*** ./src/RESOURCES/images/dept_cpe.png ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "../../asset/images/319be09755f101e8ab7f.png";

/***/ }),

/***/ "./src/RESOURCES/images/dept_eee.png":
/*!*******************************************!*\
  !*** ./src/RESOURCES/images/dept_eee.png ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "../../asset/images/e0dfe5db36a25c00d4dd.png";

/***/ }),

/***/ "./src/RESOURCES/images/dept_mee.png":
/*!*******************************************!*\
  !*** ./src/RESOURCES/images/dept_mee.png ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "../../asset/images/0320e70b1866ddf255f7.png";

/***/ }),

/***/ "./src/RESOURCES/images/dept_pre.png":
/*!*******************************************!*\
  !*** ./src/RESOURCES/images/dept_pre.png ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "../../asset/images/a3336edbfca541f2bf0e.png";

/***/ }),

/***/ "./src/RESOURCES/images/labrep.png":
/*!*****************************************!*\
  !*** ./src/RESOURCES/images/labrep.png ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "../../asset/images/d495606c317c3752a89a.png";

/***/ }),

/***/ "./src/RESOURCES/images/stay.png":
/*!***************************************!*\
  !*** ./src/RESOURCES/images/stay.png ***!
  \***************************************/
/***/ ((module) => {

module.exports = "../../asset/images/588c0db71967388ac52a.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["src_SCRIPTS_modules_footer_js-src_SCRIPTS_modules_header_js"], () => (__webpack_exec__("./src/SCRIPTS/report.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0L3JlcG9ydC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXVEO0FBQ3ZEO0FBQ0E7QUFDOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsdURBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JELHNDQUFzQztBQUN0QyxnQ0FBZ0M7QUFDaEMscUNBQXFDO0FBQ3JDLEtBQUs7QUFDTDtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRCxzQ0FBc0M7QUFDdEMsZ0NBQWdDO0FBQ2hDLG9DQUFvQztBQUNwQyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRCx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG1DQUFtQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxVQUFVO0FBQzFEO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzVJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsS0FBSztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsY0FBYyxHQUFHLE1BQU07QUFDM0QsbUNBQW1DLE1BQU07QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLElBQUk7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25GaUQ7QUFDSDtBQUNwQjtBQUNDO0FBQzBCO0FBQ21CO0FBQ3hFO0FBQ3NEO0FBQ3REO0FBQ3NEO0FBQ0E7QUFDQTtBQUNBO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsOERBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IseURBQVM7QUFDM0I7QUFDQSxnQkFBZ0Isa0VBQWMsQ0FBQywyREFBTTtBQUNyQyxnQkFBZ0Isa0VBQWMsQ0FBQywyREFBTTtBQUNyQyxnQkFBZ0Isa0VBQWMsQ0FBQyw0REFBTTtBQUNyQyxnQkFBZ0Isa0VBQWMsQ0FBQywyREFBTTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUFZO0FBQ1o7QUFDQTtBQUNBLFFBQVEsNERBQVM7QUFDakI7QUFDQTtBQUNBLFFBQVEsNkRBQVU7QUFDbEI7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxhYm9yYXRlLy4vc3JjL0NTUy9yZXBvcnQuY3NzPzI2YTYiLCJ3ZWJwYWNrOi8vZWxhYm9yYXRlLy4vc3JjL0NTUy9zdHlsZS5jc3M/NzY3YyIsIndlYnBhY2s6Ly9lbGFib3JhdGUvLi9zcmMvU0NSSVBUUy9tb2R1bGVzL21vZGFsLmpzIiwid2VicGFjazovL2VsYWJvcmF0ZS8uL3NyYy9TQ1JJUFRTL21vZHVsZXMvcmVwb3J0LmpzIiwid2VicGFjazovL2VsYWJvcmF0ZS8uL3NyYy9TQ1JJUFRTL3JlcG9ydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgSW1nTW9kYWwgZnJvbSAnLi4vLi4vUkVTT1VSQ0VTL2ltYWdlcy9zdGF5LnBuZyc7XHJcbmNvbnN0IHNlY3Rpb25Nb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5zZWN0aW9uTW9kYWwuaWQgPSAnc2VjdGlvbk1vZGFsJztcclxuaW1wb3J0ICcuLi8uLi9DU1MvcmVwb3J0LmNzcyc7XHJcblxyXG5jb25zdCBjcmVhdGVNb2RhbD0gKGJvZHkpID0+e1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsX2JnJyk7XHJcbiAgICBjb25zdCBtb2RhbExvYWRlckJnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtb2RhbExvYWRlckJnLmNsYXNzTGlzdC5hZGQoJ21vZGFsX2xvYWRlcl9iZycpO1xyXG4gICAgY29uc3QgbW9kYWxMb2FkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1vZGFsTG9hZGVyLmNsYXNzTGlzdC5hZGQoJ21vZGFsX2xvYWRlcicpO1xyXG4gICAgbW9kYWxMb2FkZXJCZy5hcHBlbmRDaGlsZChtb2RhbExvYWRlcik7XHJcbiAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKCdtb2RhbF9jb250ZW50Jyk7XHJcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xyXG4gICAgY29uc3QgTW9kYWxJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgTW9kYWxJbWFnZS5jbGFzc0xpc3QuYWRkKCdtb2RhbF9pbWFnZScpO1xyXG4gICAgY29uc3QgSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIEltYWdlLmNsYXNzTGlzdC5hZGQoJ2ltYWdlX21vZGFsJyk7XHJcbiAgICBJbWFnZS5zcmMgPSBJbWdNb2RhbDtcclxuICAgIE1vZGFsSW1hZ2UuYXBwZW5kQ2hpbGQoSW1hZ2UpXHJcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoTW9kYWxJbWFnZSk7XHJcbiAgICBjb25zdCBtb2RhbFRleHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtb2RhbFRleHRzLmNsYXNzTGlzdC5hZGQoJ21vZGFsX3RleHRzJyk7XHJcbiAgICBjb25zdCBtb2RhbFRleHRzMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIG1vZGFsVGV4dHMxLmNsYXNzTGlzdC5hZGQoJ21vZGFsX21haW5fdGV4dCcpO1xyXG4gICAgbW9kYWxUZXh0czEudGV4dENvbnRlbnQgPSAnVGFpbG9yIFlvdXIgRXhwZXJpZW5jZSBUb2RheSEnO1xyXG4gICAgbW9kYWxUZXh0cy5hcHBlbmRDaGlsZChtb2RhbFRleHRzMSk7XHJcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxUZXh0cyk7XHJcbiAgICBjb25zdCBtb2RhbEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1vZGFsRm9ybS5jbGFzc0xpc3QuYWRkKCdtb2RhbF9mb3JtJyk7XHJcbiAgICBjb25zdCBmb3JtSXRzZWxmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgZm9ybUl0c2VsZi5jbGFzc0xpc3QuYWRkKCdmb3JtaXRzZWxmJyk7XHJcbiAgICBjb25zdCBMZXZlbFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSAnQ2hvb3NlIFlvdXIgTGV2ZWwnOyAvLyBTZXQgbGFiZWwgdGV4dFxyXG4gICAgTGV2ZWxTZWxlY3QubmFtZSA9ICdMZXZlbCc7XHJcbiAgICBjb25zdCBsZXZlbFNlbGVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV2ZWxTZWxlY3REaXYuY2xhc3NMaXN0LmFkZCgnbGV2ZWxfc2VsZWN0X2RpdicpO1xyXG4gICAgbGV2ZWxTZWxlY3REaXYuYXBwZW5kQ2hpbGQoTGV2ZWxTZWxlY3QpO1xyXG4gICAgZm9ybUl0c2VsZi5hcHBlbmRDaGlsZChsZXZlbFNlbGVjdERpdik7XHJcbiAgICBjb25zdCBvcHRpb25zID0gWydTZWxlY3QgeW91ciBMZXZlbCcsJzIwMExldmVsJywgJzMwMExldmVsJywgJzQwMExldmVsJ107XHJcbiAgICBvcHRpb25zLmZvckVhY2gob3B0aW9uVmFsdWUgPT4ge1xyXG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7IC8vIENyZWF0ZSBvcHRpb24gZWxlbWVudFxyXG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gb3B0aW9uVmFsdWU7IC8vIFNldCBvcHRpb24gdGV4dFxyXG4gICAgb3B0aW9uLnZhbHVlID0gb3B0aW9uVmFsdWU7IC8vIFNldCBvcHRpb24gdmFsdWVcclxuICAgIExldmVsU2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7IC8vIEFwcGVuZCBvcHRpb24gdG8gc2VsZWN0IGVsZW1lbnRcclxuICAgIH0pO1xyXG4gICAgY29uc3QgRGVwdFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgY29uc3QgbGFiZWwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGxhYmVsMi50ZXh0Q29udGVudCA9ICdTZWxlY3QgRGVwYXJ0bWVudCc7IC8vIFNldCBsYWJlbCB0ZXh0XHJcbiAgICBEZXB0U2VsZWN0Lm5hbWUgPSAnRGVwYXJ0bWVudCc7XHJcbiAgICBjb25zdCBEZXB0U2VsZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBEZXB0U2VsZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ2xldmVsX3NlbGVjdF9kaXYnKTtcclxuICAgIERlcHRTZWxlY3REaXYuYXBwZW5kQ2hpbGQoRGVwdFNlbGVjdCk7XHJcbiAgICBmb3JtSXRzZWxmLmFwcGVuZENoaWxkKERlcHRTZWxlY3REaXYpO1xyXG4gICAgLy8gQ3JlYXRlIG9wdGlvbnNcclxuICAgIGNvbnN0IG9wdGlvbnMyID0gWydTZWxlY3QgeW91ciBEZXBhcnRtZW50JywnQ1BFJywgJ1BSRScsICdFRUUnLCAnQUdFJywgJ0NWRScsICdTVEUnLCAnUEVFJywgJ01SRScsICdNVEUnLCAnSU5EJywgJ0NIRScsJ01FRSddO1xyXG4gICAgLy8gTG9vcCB0aHJvdWdoIG9wdGlvbnMgYW5kIGFkZCB0aGVtIHRvIHRoZSBzZWxlY3QgZWxlbWVudFxyXG4gICAgb3B0aW9uczIuZm9yRWFjaChvcHRpb25WYWx1ZSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTsgLy8gQ3JlYXRlIG9wdGlvbiBlbGVtZW50XHJcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb25WYWx1ZTsgLy8gU2V0IG9wdGlvbiB0ZXh0XHJcbiAgICBvcHRpb24udmFsdWUgPSBvcHRpb25WYWx1ZTsgLy8gU2V0IG9wdGlvbiB2YWx1ZVxyXG4gICAgRGVwdFNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pOyAvLyBBcHBlbmQgb3B0aW9uIHRvIHNlbGVjdCBlbGVtZW50XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGZvcm1GaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBmb3JtRmllbGQudHlwZSA9ICdlbWFpbCc7XHJcbiAgICBmb3JtRmllbGQubmFtZSA9ICdFbWFpbCc7XHJcbiAgICBmb3JtRmllbGQucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgY29uc3QgVXNlckVtYWlsID0gZm9ybUZpZWxkLnZhbHVlO1xyXG4gICAgZm9ybUZpZWxkLnBsYWNlaG9sZGVyID0gJ0VudGVyIEVtYWlsJztcclxuICAgIGZvcm1GaWVsZC5jbGFzc0xpc3QuYWRkKCdmb3JtRmllbGQnKTtcclxuICAgIGZvcm1JdHNlbGYuaWQgPSAnZW1haWxGb3JtJztcclxuICAgIGNvbnN0IGZvcm1TdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGZvcm1TdWJtaXQudHlwZSA9ICdzdWJtaXQnO1xyXG4gICAgZm9ybVN1Ym1pdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xyXG4gICAgZm9ybVN1Ym1pdC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICBmb3JtU3VibWl0LmNsYXNzTGlzdC5hZGQoJ2Zvcm1TdWJtaXQnKTtcclxuICAgIGZvcm1GaWVsZC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGVtYWlsVmFsdWUgPSBmb3JtRmllbGQudmFsdWUudHJpbSgpOyAvLyBUcmltbWVkIHZhbHVlIG9mIHRoZSBlbWFpbCBmaWVsZFxyXG4gICAgICAgIGNvbnN0IGlzVmFsaWRFbWFpbCA9IGZvcm1GaWVsZC5jaGVja1ZhbGlkaXR5KCk7IC8vIENoZWNrIGlmIHRoZSBlbWFpbCBmaWVsZCBpcyB2YWxpZFxyXG4gICAgICAgIGZvcm1TdWJtaXQuZGlzYWJsZWQgPSAhaXNWYWxpZEVtYWlsIHx8IGVtYWlsVmFsdWUgPT09ICcnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGlzVmFsaWRFbWFpbCl7XHJcbiAgICAgICAgICAgIGZvcm1TdWJtaXQuY2xhc3NMaXN0LmFkZCgnZW5hYmxlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgZm9ybUl0c2VsZi5hcHBlbmRDaGlsZChmb3JtRmllbGQpO1xyXG4gICAgZm9ybUl0c2VsZi5hcHBlbmRDaGlsZChmb3JtU3VibWl0KTtcclxuICAgIGNvbnN0IHNjcmlwdFVSTCA9ICdodHRwczovL3NjcmlwdC5nb29nbGUuY29tL21hY3Jvcy9zL0FLZnljYnlCUUFDOTRKNGVzaGVURUdUVG1jN3ZENDRHbDhUc3h0cHRMT1U3WG5zeDg3SUl2VWpWR2lIbGd0SERtRXh2ajBCVjhRL2V4ZWMnO1xyXG4gICAgZm9ybUl0c2VsZi5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZm9ybVN1Ym1pdC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgbW9kYWxMb2FkZXJCZy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIGxldCByZXF1ZXN0Qm9keSA9IG5ldyBGb3JtRGF0YShmb3JtSXRzZWxmKTtcclxuICAgICAgICBmZXRjaChzY3JpcHRVUkwsIHsgbWV0aG9kOiAnUE9TVCcsIGJvZHk6IHJlcXVlc3RCb2R5IH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIENsb3NlTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdTdWJzY3JpYmVkJywgJ3RydWUnKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdVc2VyJywgYCR7VXNlckVtYWlsfWApO1xyXG5cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvay4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3JtU3VibWl0LmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdFcnJvciEgUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nKTtcclxuICAgICAgICAgICAgZm9ybVN1Ym1pdC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBtb2RhbEZvcm0uYXBwZW5kQ2hpbGQoZm9ybUl0c2VsZik7XHJcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxGb3JtKTtcclxuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtb2RhbExvYWRlckJnKTtcclxuICAgIGNvbnN0IG1vZGFsU2FmZXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtb2RhbFNhZmV0eS5jbGFzc0xpc3QuYWRkKCdtb2RhbF9zYWZldHknKTtcclxuICAgIGNvbnN0IG1vZGFsU2FmZXR5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIG1vZGFsU2FmZXR5VGV4dC50ZXh0Q29udGVudD0gJ0VudGVyIHlvdXIgZW1haWwsIHNlbGVjdCB5b3VyIGxldmVsIGFuZCBkZXBhcnRtZW50IHRvIHVubG9jayBwZXJzb25hbGl6ZWQgZmVhdHVyZXMgYW5kIHJlY2VpdmUgZXhjbHVzaXZlIG5ld3NsZXR0ZXJzLidcclxuICAgIG1vZGFsU2FmZXR5VGV4dC5jbGFzc0xpc3QuYWRkKCdtb2RhbF9zYWZldHlfdGV4dCcpO1xyXG4gICAgbW9kYWxTYWZldHkuYXBwZW5kQ2hpbGQobW9kYWxTYWZldHlUZXh0KTtcclxuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtb2RhbFNhZmV0eSk7XHJcbiAgICBzZWN0aW9uTW9kYWwuYXBwZW5kQ2hpbGQobW9kYWwpO1xyXG4gICAgc2VjdGlvbk1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XHJcbiAgICBzZWN0aW9uTW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKHNlY3Rpb25Nb2RhbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE9wZW5Nb2RhbCgpe1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgc2VjdGlvbk1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfSwgMTIwMDAwMCk7XHJcbiAgICBcclxuICAgIFxyXG59XHJcbmZ1bmN0aW9uIENsb3NlTW9kYWwoKXtcclxuICAgIHNlY3Rpb25Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59XHJcbmV4cG9ydHtjcmVhdGVNb2RhbCwgT3Blbk1vZGFsLCBDbG9zZU1vZGFsfTsiLCJcclxuY29uc3QgY3JlYXRlTGV2ZWxzQnV0dG9ucyA9IChsZXZlbHMpPT57XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdsZXZlbHNEaXYnKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZURlcHRDYXJkID0oaW1hZ2UsIHRpdGxlLCBkZXNjcmlwdGlvbiwgdGltZSwgbGV2ZWxzLCB0aXAsIGRlcHRTaG9ydE5hbWUpPT4ge1xyXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XHJcblxyXG5cclxuXHJcbiAgICAvL3RpdGxlXHJcbiAgICBjb25zdCBkZXB0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xyXG4gICAgZGVwdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2RlcHRUaXRsZScpO1xyXG4gICAgZGVwdFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XHJcblxyXG4gICAgLy9pbWFnZVxyXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpbWcuY2xhc3NMaXN0LmFkZCgnZGVwdEltYWdlJyk7XHJcbiAgICBpbWcuc3JjID0gaW1hZ2U7XHJcbiAgICBcclxuICAgIC8vZnVsbCBkZXRhaWxzXHJcbiAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMnKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy9kZXNjcmlwdGlvblxyXG5cclxuICAgIGNvbnN0IGRlcHREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGRlcHREZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXB0RGVzY3JpcHRpb24nKTtcclxuICAgIGRlcHREZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xyXG5cclxuXHJcbiAgICAvLyBUaW1lXHJcblxyXG4gICAgY29uc3QgZGVwdFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBkZXB0VGltZS5jbGFzc0xpc3QuYWRkKCdkZXB0VGltZScpO1xyXG4gICAgZGVwdFRpbWUudGV4dENvbnRlbnQgPSBgU3VibWlzc2lvbiBEZWFkbGluZTogJHt0aW1lfWA7XHJcblxyXG4gICAgLy8gTGV2ZWxzXHJcbiAgICBjb25zdCBkZXB0TGV2ZWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkZXB0TGV2ZWxzLmNsYXNzTGlzdC5hZGQoJ2xldmVscycpO1xyXG5cclxuICAgIFxyXG5cclxuICAgIGxldmVscy5mb3JFYWNoKGxldmVsID0+IHtcclxuICAgICAgICBjb25zdCBsZXZlbExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgbGV2ZWxMaW5rLmhyZWYgPSBgL3JlcG9ydC8ke2RlcHRTaG9ydE5hbWV9LyR7bGV2ZWx9Lmh0bWxgO1xyXG4gICAgICAgIGxldmVsTGluay50ZXh0Q29udGVudCA9IGAke2xldmVsfUwgUkVQT1JUYDtcclxuICAgICAgICBsZXZlbExpbmsuY2xhc3NMaXN0LmFkZCgnbGV2ZWxMaW5rJyk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBkZXB0TGV2ZWxzLmFwcGVuZENoaWxkKGxldmVsTGluayk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZGVwdFRpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGRlcHRUaXAuY2xhc3NMaXN0LmFkZCgndGlwJyk7XHJcbiAgICBkZXB0VGlwLnRleHRDb250ZW50ID0gYCBFTEEgVGlwczogICR7dGlwfWA7XHJcblxyXG5cclxuICAgIGRldGFpbHMuYXBwZW5kQ2hpbGQoZGVwdERlc2NyaXB0aW9uKTtcclxuICAgIGRldGFpbHMuYXBwZW5kQ2hpbGQoZGVwdFRpbWUpO1xyXG4gICAgZGV0YWlscy5hcHBlbmRDaGlsZChkZXB0VGlwKTtcclxuICAgIGRldGFpbHMuYXBwZW5kQ2hpbGQoZGVwdExldmVscyk7XHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKGRlcHRUaXRsZSk7XHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKGRldGFpbHMpO1xyXG5cclxuICAgIHJldHVybiBjYXJkO1xyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7Y3JlYXRlRGVwdENhcmR9IiwiaW1wb3J0IHtyZW5kZXJIZWFkZXJ9IGZyb20gJy4vbW9kdWxlcy9oZWFkZXIuanMnO1xyXG5pbXBvcnQge3JlbmRlckZvb3Rlcn0gZnJvbSAnLi9tb2R1bGVzL2Zvb3Rlcic7XHJcbmltcG9ydCAnLi4vQ1NTL3N0eWxlLmNzcyc7XHJcbmltcG9ydCAnLi4vQ1NTL3JlcG9ydC5jc3MnO1xyXG5pbXBvcnQgeyBjcmVhdGVEZXB0Q2FyZCB9IGZyb20gJy4vbW9kdWxlcy9yZXBvcnQuanMnO1xyXG5pbXBvcnQgeyBjcmVhdGVNb2RhbCwgT3Blbk1vZGFsLCBDbG9zZU1vZGFsIH0gZnJvbSAnLi9tb2R1bGVzL21vZGFsLmpzJztcclxuXHJcbmltcG9ydCByZXBvcnRJbWcgZnJvbSAnLi4vUkVTT1VSQ0VTL2ltYWdlcy9sYWJyZXAucG5nJ1xyXG4vL2ltcG9ydCBpbWFnZXMgZm9yIHRoZSBkZXBhcnRtZW50YWwgY2FyZHNcclxuaW1wb3J0IEltZ0NQRSBmcm9tICcuLi9SRVNPVVJDRVMvaW1hZ2VzL2RlcHRfY3BlLnBuZyc7XHJcbmltcG9ydCBJbWdNRUUgZnJvbSAnLi4vUkVTT1VSQ0VTL2ltYWdlcy9kZXB0X21lZS5wbmcnO1xyXG5pbXBvcnQgSW1nUFJFIGZyb20gJy4uL1JFU09VUkNFUy9pbWFnZXMvZGVwdF9wcmUucG5nJztcclxuaW1wb3J0IEltZ0VFRSBmcm9tICcuLi9SRVNPVVJDRVMvaW1hZ2VzL2RlcHRfZWVlLnBuZyc7XHJcblxyXG5jb25zdCBobWUgPSBcIi4uL2luZGV4Lmh0bWxcIjtcclxuY29uc3QgcnB0ID0gXCIuL3JlcG9ydC5odG1sXCI7XHJcbmNvbnN0IGFidCA9IFwiLi4vYWJvdXQvYWJvdXQuaHRtbFwiO1xyXG5cclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxucmVuZGVySGVhZGVyKGJvZHksIFtobWUsIHJwdCwgYWJ0XSk7XHJcbmNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxud3JhcHBlci5pZCA9ICd3cmFwcGVyJztcclxuYm9keS5hcHBlbmQod3JhcHBlcik7XHJcbmNyZWF0ZU1vZGFsKGJvZHkpXHJcbmNvbnN0IHNlY3Rpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbnNlY3Rpb24xLmlkID0gJ3NlY3Rpb24xJztcclxud3JhcHBlci5hcHBlbmQoc2VjdGlvbjEpO1xyXG5jb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxudGV4dC5jbGFzc0xpc3QuYWRkKCdtYWluVGV4dCcpXHJcbndyYXBwZXIuYXBwZW5kKHRleHQpO1xyXG50ZXh0LmlubmVySFRNTCA9ICdCcm93c2UgQXZhaWxhYmxlJztcclxuY29uc3QgdGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG50ZXh0Mi5jbGFzc0xpc3QuYWRkKCdtYWluVGV4dDInKVxyXG53cmFwcGVyLmFwcGVuZCh0ZXh0Mik7XHJcbnRleHQyLmlubmVySFRNTCA9ICdSZXBvcnRzJztcclxuY29uc3QgcmVwb3J0SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxucmVwb3J0SW1hZ2Uuc3JjID0gcmVwb3J0SW1nO1xyXG5yZXBvcnRJbWFnZS5hbHQgPSAncmVwb3J0aW1nJ1xyXG5jb25zdCBjcGVEZXB0ID0gY3JlYXRlRGVwdENhcmQoSW1nQ1BFLCdDT01QVVRFUiBFTkdJTkVFUklORycsJ0JleW9uZCB0aGVvcmV0aWNhbCBrbm93bGVkZ2UsIHRoZSBjb21wdXRlciBlbmdpbmVlcmluZyBsYWJvcmF0b3J5IGlzIHRoZSBjb3JuZXJzdG9uZSBvZiBwcmFjdGljYWwgbGVhcm5pbmcgaW4gdGhlIGZpZWxkLiBUaGlzIHNwZWNpYWxpemVkIHNwYWNlIGh1bXMgd2l0aCBhY3Rpdml0eSwgZXF1aXBwZWQgd2l0aCBoaWdoLXBlcmZvcm1hbmNlIGNvbXB1dGVycywgc3BlY2lhbGl6ZWQgc29mdHdhcmUsIGFuZCBlbGVjdHJvbmljIGNvbXBvbmVudHMuIEhlcmUsIHN0dWRlbnRzIGJyaWRnZSB0aGUgZ2FwIGJldHdlZW4gdGhlb3J5IGFuZCBhcHBsaWNhdGlvbiwgYnVpbGRpbmcgY2lyY3VpdHMsIHByb2dyYW1taW5nIG1pY3JvY29udHJvbGxlcnMsIGFuZCB0ZXN0aW5nIGhhcmR3YXJlIGZ1bmN0aW9uYWxpdGllcy4gRXhwZXJpbWVudHMgaW4gbmV0d29ya2luZywgZGlnaXRhbCBsb2dpYyBkZXNpZ24sIGFuZCBjb21wdXRlciBhcmNoaXRlY3R1cmUgc29saWRpZnkgY2xhc3Nyb29tIGNvbmNlcHRzLCBmb3N0ZXJpbmcgYSBkZWVwZXIgdW5kZXJzdGFuZGluZyBvZiBob3cgY29tcHV0ZXJzIG9wZXJhdGUgYXQgdGhlaXIgY29yZS4gVGhlIGxhYiBmb3N0ZXJzIGNvbGxhYm9yYXRpb24sIGFzIHN0dWRlbnRzIHRhY2tsZSBwcm9qZWN0cyB0b2dldGhlciwgdHJvdWJsZXNob290aW5nIGNoYWxsZW5nZXMgYW5kIHJlZmluaW5nIHRoZWlyIHByb2JsZW0tc29sdmluZyBza2lsbHMuIFRoaXMgaGFuZHMtb24gZW52aXJvbm1lbnQgZW1wb3dlcnMgZnV0dXJlIGNvbXB1dGVyIGVuZ2luZWVycywgc2hhcGluZyB0aGVtIGludG8gaW5ub3ZhdG9ycyB3aG8gY2FuIGRlc2lnbiBhbmQgYnVpbGQgdGhlIHRlY2hub2xvZ2ljYWwgYWR2YW5jZW1lbnRzIG9mIHRvbW9ycm93LicsJ1RPIEJFIERFQ0lERUQoIFVzdWFsbHkgMSB3ZWVrIGFmdGVyIGV4cGVyaW1lbnQpJyxbMzAwLCA0MDBdLCAnQmUgdGhlcmUgNW1pbnMgYmVmb3JlIHRoZSB0aW1lLCBFbnN1cmUgdG8gdW5kZXJzdGFuZCB0aGUgYmFzaWMgY29uY2VwdCcsJ2NwZScpO1xyXG5jb25zdCBtZWVEZXB0ID0gY3JlYXRlRGVwdENhcmQoSW1nTUVFLCdNRUNIQU5JQ0FMIEVOR0lORUVSSU5HJywnQmV5b25kIHRoZSB0aGVvcmV0aWNhbCByZWFsbSwgdGhlIG1lY2hhbmljYWwgZW5naW5lZXJpbmcgbGFib3JhdG9yeSBodW1zIHdpdGggdGhlIHdoaXIgb2YgbWFjaGluZXJ5IGFuZCB0aGUgY2xpbmsgb2YgdG9vbHMuIFRoaXMgc3BhY2UgaXMgYSBwbGF5Z3JvdW5kIGZvciBpbm5vdmF0aW9uLCBmaWxsZWQgd2l0aCBsYXRoZXMsIG1pbGxzLCAzRCBwcmludGVycywgYW5kIHRlc3RpbmcgZXF1aXBtZW50LiBIZXJlLCBzdHVkZW50cyB0cmFuc2Zvcm0gYWJzdHJhY3QgY29uY2VwdHMgaW50byB0YW5naWJsZSByZWFsaXRpZXMuIFRoZXkgZGVzaWduIGFuZCBidWlsZCBtZWNoYW5pc21zLCBhbmFseXplIG1hdGVyaWFsIHByb3BlcnRpZXMsIGFuZCB0ZXN0IHRoZSBzdHJlbmd0aCBvZiBzdHJ1Y3R1cmVzLiBFeHBlcmltZW50cyBpbiB0aGVybW9keW5hbWljcywgZmx1aWQgbWVjaGFuaWNzLCBhbmQgcm9ib3RpY3MgYnJpZGdlIHRoZSBnYXAgYmV0d2VlbiB0aGVvcnkgYW5kIGFwcGxpY2F0aW9uLCBzb2xpZGlmeWluZyBrbm93bGVkZ2UgYW5kIGZvc3RlcmluZyBwcm9ibGVtLXNvbHZpbmcgc2tpbGxzLiBUaGUgbGFiIGZvc3RlcnMgY29sbGFib3JhdGlvbiwgYXMgc3R1ZGVudHMgd29yayB0b2dldGhlciBvbiBwcm9qZWN0cywgdHJvdWJsZXNob290aW5nIGNoYWxsZW5nZXMgYW5kIHJlZmluaW5nIHRoZWlyIGRlc2lnbnMuIFRoaXMgaGFuZHMtb24gZW52aXJvbm1lbnQgZW1wb3dlcnMgZnV0dXJlIG1lY2hhbmljYWwgZW5naW5lZXJzLCBlcXVpcHBpbmcgdGhlbSB3aXRoIHRoZSBwcmFjdGljYWwgc2tpbGxzIHRvIGJ1aWxkIHRoZSBtYWNoaW5lcyBhbmQgc3RydWN0dXJlcyB0aGF0IHNoYXBlIG91ciB3b3JsZCcsJzRwbSBzYW1lIGRheScsWzIwMF0sICdCZSB0aGVyZSA1bWlucyBiZWZvcmUgdGhlIHRpbWUsIERyZXNzIEFwcHJvcHJpYXRlbHknLCdtZWUnKTtcclxuY29uc3QgZWVlRGVwdCA9IGNyZWF0ZURlcHRDYXJkKEltZ0VFRSwnRUxFQ1RSSUNBTCBFTkdJTkVFUklORycsJ1RoZSBlbGVjdHJpY2FsIGVuZ2luZWVyaW5nIGxhYiBpcyBhIHZpYnJhbnQgaHViIHdoZXJlIHRoZW9yeSBtZWV0cyB0YW5naWJsZSByZXN1bHRzLiBUaGlzIHNwYWNlIGh1bXMgd2l0aCB0aGUgZW5lcmd5IG9mIGV4cGVyaW1lbnRzLCBmaWxsZWQgd2l0aCBvc2NpbGxvc2NvcGVzLCBwb3dlciBzdXBwbGllcywgYW5kIGludHJpY2F0ZSBjaXJjdWl0cy4gSGVyZSwgc3R1ZGVudHMgYnJpZGdlIHRoZSBnYXAgYmV0d2VlbiB0aGVvcmV0aWNhbCBjb25jZXB0cyBhbmQgcHJhY3RpY2FsIGFwcGxpY2F0aW9ucy4gVGhleSBhbmFseXplIGVsZWN0cmljYWwgcGhlbm9tZW5hLCBkZXNpZ24gY2lyY3VpdHMsIGFuZCBidWlsZCBlbGVjdHJvbmljIGRldmljZXMsIHRlc3RpbmcgdGhlaXIgZnVuY3Rpb25hbGl0eSBpbiByZWFsLXRpbWUuIEV4cGVyaW1lbnRzIGluIGVsZWN0cm9tYWduZXRpc20sIHBvd2VyIHN5c3RlbXMsIGFuZCBjb250cm9sIHN5c3RlbXMgc29saWRpZnkgY2xhc3Nyb29tIGtub3dsZWRnZSwgZm9zdGVyaW5nIGEgZGVlcGVyIHVuZGVyc3RhbmRpbmcgb2YgaG93IGVsZWN0cmljaXR5IGJlaGF2ZXMgYW5kIHBvd2VycyBvdXIgd29ybGQuIFRoZSBsYWIgZm9zdGVycyBjb2xsYWJvcmF0aW9uLCBhcyBzdHVkZW50cyB3b3JrIHRvZ2V0aGVyIG9uIHByb2plY3RzLCB0cm91Ymxlc2hvb3RpbmcgY2hhbGxlbmdlcyBhbmQgcmVmaW5pbmcgdGhlaXIgZGVzaWducy4gVGhpcyBoYW5kcy1vbiBlbnZpcm9ubWVudCBlbXBvd2VycyBmdXR1cmUgZWxlY3RyaWNhbCBlbmdpbmVlcnMsIGVxdWlwcGluZyB0aGVtIHdpdGggdGhlIHByYWN0aWNhbCBza2lsbHMgdG8gZGVzaWduIGFuZCBidWlsZCB0aGUgdGVjaG5vbG9naWNhbCBhZHZhbmNlbWVudHMgdGhhdCBwb3dlciBvdXIgbGl2ZXMuJywnMTBBTSBOZXh0IGRheScsWzIwMCwgMzAwXSwgJ0JlIHRoZXJlIDVtaW5zIGJlZm9yZSB0aGUgdGltZSwgRHJlc3MgQXBwcm9wcmlhdGVseSwgTGlzdGVuIGF0dGVudGl2ZWx5IGFuZCBlbnN1cmUgQWN0aXZlIFBhcnRpY2lwYXRpb24nLCdlZWUnKTtcclxuY29uc3QgcHJlRGVwdCA9IGNyZWF0ZURlcHRDYXJkKEltZ1BSRSwnUFJPRFVDVElPTiBFTkdJTkVFUklORycsJ1RoZSBwcm9kdWN0aW9uIGVuZ2luZWVyaW5nIGxhYiBpcyBhIGR5bmFtaWMgc3BhY2Ugd2hlcmUgdGhlb3J5IGlzIHRyYW5zZm9ybWVkIGludG8gb3B0aW1pemVkIG1hbnVmYWN0dXJpbmcgcHJvY2Vzc2VzLiBUaGlzIGhhbmRzLW9uIGVudmlyb25tZW50IGh1bXMgd2l0aCB0aGUgYWN0aXZpdHkgb2YgbWFjaGluZXJ5IGFuZCB0aGUgbWV0aG9kaWNhbCBwbGFubmluZyBvZiBwcm9kdWN0aW9uIGxpbmVzLiBTdHVkZW50cyBleHBlcmltZW50IHdpdGggdmFyaW91cyBtYW51ZmFjdHVyaW5nIHRlY2huaXF1ZXMsIGluY2x1ZGluZyBtYWNoaW5pbmcsIHdlbGRpbmcsIGFzc2VtYmx5LCBhbmQgcXVhbGl0eSBjb250cm9sIHByb2NlZHVyZXMuIFRoZXkgYW5hbHl6ZSBwcm9kdWN0aW9uIGRhdGEsIG9wdGltaXplIHdvcmtmbG93cywgYW5kIGFwcGx5IGxlYW4gbWFudWZhY3R1cmluZyBwcmluY2lwbGVzIHRvIGFjaGlldmUgZWZmaWNpZW5jeS4gRXhwZXJpbWVudHMgaW4gYXV0b21hdGlvbiwgcm9ib3RpY3MsIGFuZCBjb21wdXRlci1haWRlZCBtYW51ZmFjdHVyaW5nIHNvbGlkaWZ5IGNsYXNzcm9vbSBrbm93bGVkZ2UsIGZvc3RlcmluZyBhIGRlZXBlciB1bmRlcnN0YW5kaW5nIG9mIGhvdyBwcm9kdWN0cyBhcmUgY3JlYXRlZCBhdCBzY2FsZS4gVGhlIGxhYiBmb3N0ZXJzIGNvbGxhYm9yYXRpb24sIGFzIHN0dWRlbnRzIHdvcmsgdG9nZXRoZXIgb24gcHJvamVjdHMsIHNpbXVsYXRpbmcgcmVhbC13b3JsZCBwcm9kdWN0aW9uIHNjZW5hcmlvcyBhbmQgcmVmaW5pbmcgdGhlaXIgcHJvYmxlbS1zb2x2aW5nIHNraWxscy4gVGhpcyBoYW5kcy1vbiBlbnZpcm9ubWVudCBlbXBvd2VycyBmdXR1cmUgcHJvZHVjdGlvbiBlbmdpbmVlcnMsIGVxdWlwcGluZyB0aGVtIHdpdGggdGhlIHByYWN0aWNhbCBrbm93bGVkZ2UgdG8gZGVzaWduLCBpbXBsZW1lbnQsIGFuZCBvcHRpbWl6ZSBlZmZpY2llbnQgbWFudWZhY3R1cmluZyBzeXN0ZW1zIHRoYXQgZHJpdmUgcHJvZHVjdGl2aXR5IGFuZCBpbm5vdmF0aW9uJywnVE8gQkUgREVDSURFRCBkdXJpbmcgRXhwZXJpbWVudCcsWzIwMF0sICdEcmVzcyBBcHByb3ByaWF0ZWx5LCBlbnN1cmUgQWN0aXZlIFBhcnRpY2lwYXRpb24nLCdwcmUnKTtcclxud3JhcHBlci5hcHBlbmRDaGlsZChjcGVEZXB0KTtcclxud3JhcHBlci5hcHBlbmRDaGlsZChlZWVEZXB0KTtcclxud3JhcHBlci5hcHBlbmRDaGlsZChtZWVEZXB0KTtcclxud3JhcHBlci5hcHBlbmRDaGlsZChwcmVEZXB0KTtcclxucmVuZGVyRm9vdGVyKGJvZHksIFtobWUsIHJwdCwgYWJ0XSk7XHJcbmZ1bmN0aW9uIGNoZWNrTG9jYWxTdG9yYWdlKCl7XHJcbiAgICBpZighbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1N1YnNjcmliZWQnKSl7XHJcbiAgICAgICAgT3Blbk1vZGFsKCk7XHJcbiAgICB9IFxyXG4gICAgZWxzZXtcclxuICAgICAgICBDbG9zZU1vZGFsKCk7XHJcbiAgICB9XHJcbn1cclxud2luZG93Lm9ubG9hZCA9IGNoZWNrTG9jYWxTdG9yYWdlOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==