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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGFib3JhdGUvLi9zcmMvQ1NTL3JlcG9ydC5jc3M/MjZhNiIsIndlYnBhY2s6Ly9lbGFib3JhdGUvLi9zcmMvQ1NTL3N0eWxlLmNzcz83NjdjIiwid2VicGFjazovL2VsYWJvcmF0ZS8uL3NyYy9TQ1JJUFRTL21vZHVsZXMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vZWxhYm9yYXRlLy4vc3JjL1NDUklQVFMvbW9kdWxlcy9yZXBvcnQuanMiLCJ3ZWJwYWNrOi8vZWxhYm9yYXRlLy4vc3JjL1NDUklQVFMvcmVwb3J0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBJbWdNb2RhbCBmcm9tICcuLi8uLi9SRVNPVVJDRVMvaW1hZ2VzL3N0YXkucG5nJztcbmNvbnN0IHNlY3Rpb25Nb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuc2VjdGlvbk1vZGFsLmlkID0gJ3NlY3Rpb25Nb2RhbCc7XG5pbXBvcnQgJy4uLy4uL0NTUy9yZXBvcnQuY3NzJztcblxuY29uc3QgY3JlYXRlTW9kYWw9IChib2R5KSA9PntcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsX2JnJyk7XG4gICAgY29uc3QgbW9kYWxMb2FkZXJCZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsTG9hZGVyQmcuY2xhc3NMaXN0LmFkZCgnbW9kYWxfbG9hZGVyX2JnJyk7XG4gICAgY29uc3QgbW9kYWxMb2FkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbExvYWRlci5jbGFzc0xpc3QuYWRkKCdtb2RhbF9sb2FkZXInKTtcbiAgICBtb2RhbExvYWRlckJnLmFwcGVuZENoaWxkKG1vZGFsTG9hZGVyKTtcbiAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbW9kYWxfY29udGVudCcpO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudCk7XG4gICAgY29uc3QgTW9kYWxJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIE1vZGFsSW1hZ2UuY2xhc3NMaXN0LmFkZCgnbW9kYWxfaW1hZ2UnKTtcbiAgICBjb25zdCBJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIEltYWdlLmNsYXNzTGlzdC5hZGQoJ2ltYWdlX21vZGFsJyk7XG4gICAgSW1hZ2Uuc3JjID0gSW1nTW9kYWw7XG4gICAgTW9kYWxJbWFnZS5hcHBlbmRDaGlsZChJbWFnZSlcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoTW9kYWxJbWFnZSk7XG4gICAgY29uc3QgbW9kYWxUZXh0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsVGV4dHMuY2xhc3NMaXN0LmFkZCgnbW9kYWxfdGV4dHMnKTtcbiAgICBjb25zdCBtb2RhbFRleHRzMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBtb2RhbFRleHRzMS5jbGFzc0xpc3QuYWRkKCdtb2RhbF9tYWluX3RleHQnKTtcbiAgICBtb2RhbFRleHRzMS50ZXh0Q29udGVudCA9ICdUYWlsb3IgWW91ciBFeHBlcmllbmNlIFRvZGF5ISc7XG4gICAgbW9kYWxUZXh0cy5hcHBlbmRDaGlsZChtb2RhbFRleHRzMSk7XG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsVGV4dHMpO1xuICAgIGNvbnN0IG1vZGFsRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsRm9ybS5jbGFzc0xpc3QuYWRkKCdtb2RhbF9mb3JtJyk7XG4gICAgY29uc3QgZm9ybUl0c2VsZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBmb3JtSXRzZWxmLmNsYXNzTGlzdC5hZGQoJ2Zvcm1pdHNlbGYnKTtcbiAgICBjb25zdCBMZXZlbFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdDaG9vc2UgWW91ciBMZXZlbCc7IC8vIFNldCBsYWJlbCB0ZXh0XG4gICAgTGV2ZWxTZWxlY3QubmFtZSA9ICdMZXZlbCc7XG4gICAgY29uc3QgbGV2ZWxTZWxlY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXZlbFNlbGVjdERpdi5jbGFzc0xpc3QuYWRkKCdsZXZlbF9zZWxlY3RfZGl2Jyk7XG4gICAgbGV2ZWxTZWxlY3REaXYuYXBwZW5kQ2hpbGQoTGV2ZWxTZWxlY3QpO1xuICAgIGZvcm1JdHNlbGYuYXBwZW5kQ2hpbGQobGV2ZWxTZWxlY3REaXYpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSBbJ1NlbGVjdCB5b3VyIExldmVsJywnMjAwTGV2ZWwnLCAnMzAwTGV2ZWwnLCAnNDAwTGV2ZWwnXTtcbiAgICBvcHRpb25zLmZvckVhY2gob3B0aW9uVmFsdWUgPT4ge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpOyAvLyBDcmVhdGUgb3B0aW9uIGVsZW1lbnRcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb25WYWx1ZTsgLy8gU2V0IG9wdGlvbiB0ZXh0XG4gICAgb3B0aW9uLnZhbHVlID0gb3B0aW9uVmFsdWU7IC8vIFNldCBvcHRpb24gdmFsdWVcbiAgICBMZXZlbFNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pOyAvLyBBcHBlbmQgb3B0aW9uIHRvIHNlbGVjdCBlbGVtZW50XG4gICAgfSk7XG4gICAgY29uc3QgRGVwdFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIGNvbnN0IGxhYmVsMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGFiZWwyLnRleHRDb250ZW50ID0gJ1NlbGVjdCBEZXBhcnRtZW50JzsgLy8gU2V0IGxhYmVsIHRleHRcbiAgICBEZXB0U2VsZWN0Lm5hbWUgPSAnRGVwYXJ0bWVudCc7XG4gICAgY29uc3QgRGVwdFNlbGVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIERlcHRTZWxlY3REaXYuY2xhc3NMaXN0LmFkZCgnbGV2ZWxfc2VsZWN0X2RpdicpO1xuICAgIERlcHRTZWxlY3REaXYuYXBwZW5kQ2hpbGQoRGVwdFNlbGVjdCk7XG4gICAgZm9ybUl0c2VsZi5hcHBlbmRDaGlsZChEZXB0U2VsZWN0RGl2KTtcbiAgICAvLyBDcmVhdGUgb3B0aW9uc1xuICAgIGNvbnN0IG9wdGlvbnMyID0gWydTZWxlY3QgeW91ciBEZXBhcnRtZW50JywnQ1BFJywgJ1BSRScsICdFRUUnLCAnQUdFJywgJ0NWRScsICdTVEUnLCAnUEVFJywgJ01SRScsICdNVEUnLCAnSU5EJywgJ0NIRScsJ01FRSddO1xuICAgIC8vIExvb3AgdGhyb3VnaCBvcHRpb25zIGFuZCBhZGQgdGhlbSB0byB0aGUgc2VsZWN0IGVsZW1lbnRcbiAgICBvcHRpb25zMi5mb3JFYWNoKG9wdGlvblZhbHVlID0+IHtcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTsgLy8gQ3JlYXRlIG9wdGlvbiBlbGVtZW50XG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gb3B0aW9uVmFsdWU7IC8vIFNldCBvcHRpb24gdGV4dFxuICAgIG9wdGlvbi52YWx1ZSA9IG9wdGlvblZhbHVlOyAvLyBTZXQgb3B0aW9uIHZhbHVlXG4gICAgRGVwdFNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pOyAvLyBBcHBlbmQgb3B0aW9uIHRvIHNlbGVjdCBlbGVtZW50XG4gICAgfSk7XG4gICAgY29uc3QgZm9ybUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBmb3JtRmllbGQudHlwZSA9ICdlbWFpbCc7XG4gICAgZm9ybUZpZWxkLm5hbWUgPSAnRW1haWwnO1xuICAgIGZvcm1GaWVsZC5yZXF1aXJlZCA9IHRydWU7XG4gICAgY29uc3QgVXNlckVtYWlsID0gZm9ybUZpZWxkLnZhbHVlO1xuICAgIGZvcm1GaWVsZC5wbGFjZWhvbGRlciA9ICdFbnRlciBFbWFpbCc7XG4gICAgZm9ybUZpZWxkLmNsYXNzTGlzdC5hZGQoJ2Zvcm1GaWVsZCcpO1xuICAgIGZvcm1JdHNlbGYuaWQgPSAnZW1haWxGb3JtJztcbiAgICBjb25zdCBmb3JtU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZm9ybVN1Ym1pdC50eXBlID0gJ3N1Ym1pdCc7XG4gICAgZm9ybVN1Ym1pdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICAgIGZvcm1TdWJtaXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgIGZvcm1TdWJtaXQuY2xhc3NMaXN0LmFkZCgnZm9ybVN1Ym1pdCcpO1xuICAgIGZvcm1GaWVsZC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBlbWFpbFZhbHVlID0gZm9ybUZpZWxkLnZhbHVlLnRyaW0oKTsgLy8gVHJpbW1lZCB2YWx1ZSBvZiB0aGUgZW1haWwgZmllbGRcbiAgICAgICAgY29uc3QgaXNWYWxpZEVtYWlsID0gZm9ybUZpZWxkLmNoZWNrVmFsaWRpdHkoKTsgLy8gQ2hlY2sgaWYgdGhlIGVtYWlsIGZpZWxkIGlzIHZhbGlkXG4gICAgICAgIGZvcm1TdWJtaXQuZGlzYWJsZWQgPSAhaXNWYWxpZEVtYWlsIHx8IGVtYWlsVmFsdWUgPT09ICcnO1xuICAgICAgICBcbiAgICAgICAgaWYoaXNWYWxpZEVtYWlsKXtcbiAgICAgICAgICAgIGZvcm1TdWJtaXQuY2xhc3NMaXN0LmFkZCgnZW5hYmxlZCcpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgZm9ybUl0c2VsZi5hcHBlbmRDaGlsZChmb3JtRmllbGQpO1xuICAgIGZvcm1JdHNlbGYuYXBwZW5kQ2hpbGQoZm9ybVN1Ym1pdCk7XG4gICAgY29uc3Qgc2NyaXB0VVJMID0gJ2h0dHBzOi8vc2NyaXB0Lmdvb2dsZS5jb20vbWFjcm9zL3MvQUtmeWNieUJRQUM5NEo0ZXNoZVRFR1RUbWM3dkQ0NEdsOFRzeHRwdExPVTdYbnN4ODdJSXZValZHaUhsZ3RIRG1FeHZqMEJWOFEvZXhlYyc7XG4gICAgZm9ybUl0c2VsZi5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBmb3JtU3VibWl0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgbW9kYWxMb2FkZXJCZy5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICBsZXQgcmVxdWVzdEJvZHkgPSBuZXcgRm9ybURhdGEoZm9ybUl0c2VsZik7XG4gICAgICAgIGZldGNoKHNjcmlwdFVSTCwgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogcmVxdWVzdEJvZHkgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgQ2xvc2VNb2RhbCgpO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdTdWJzY3JpYmVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVXNlcicsIGAke1VzZXJFbWFpbH1gKTtcblxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9ybVN1Ym1pdC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xuICAgICAgICAgICAgYWxlcnQoJ0Vycm9yISBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicpO1xuICAgICAgICAgICAgZm9ybVN1Ym1pdC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBtb2RhbEZvcm0uYXBwZW5kQ2hpbGQoZm9ybUl0c2VsZik7XG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsRm9ybSk7XG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsTG9hZGVyQmcpO1xuICAgIGNvbnN0IG1vZGFsU2FmZXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9kYWxTYWZldHkuY2xhc3NMaXN0LmFkZCgnbW9kYWxfc2FmZXR5Jyk7XG4gICAgY29uc3QgbW9kYWxTYWZldHlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1vZGFsU2FmZXR5VGV4dC50ZXh0Q29udGVudD0gJ0VudGVyIHlvdXIgZW1haWwsIHNlbGVjdCB5b3VyIGxldmVsIGFuZCBkZXBhcnRtZW50IHRvIHVubG9jayBwZXJzb25hbGl6ZWQgZmVhdHVyZXMgYW5kIHJlY2VpdmUgZXhjbHVzaXZlIG5ld3NsZXR0ZXJzLidcbiAgICBtb2RhbFNhZmV0eVRleHQuY2xhc3NMaXN0LmFkZCgnbW9kYWxfc2FmZXR5X3RleHQnKTtcbiAgICBtb2RhbFNhZmV0eS5hcHBlbmRDaGlsZChtb2RhbFNhZmV0eVRleHQpO1xuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtb2RhbFNhZmV0eSk7XG4gICAgc2VjdGlvbk1vZGFsLmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgICBzZWN0aW9uTW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcbiAgICBzZWN0aW9uTW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChzZWN0aW9uTW9kYWwpO1xufVxuXG5mdW5jdGlvbiBPcGVuTW9kYWwoKXtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2VjdGlvbk1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0sIDEyMDAwMDApO1xuICAgIFxuICAgIFxufVxuZnVuY3Rpb24gQ2xvc2VNb2RhbCgpe1xuICAgIHNlY3Rpb25Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuZXhwb3J0e2NyZWF0ZU1vZGFsLCBPcGVuTW9kYWwsIENsb3NlTW9kYWx9OyIsIlxuY29uc3QgY3JlYXRlTGV2ZWxzQnV0dG9ucyA9IChsZXZlbHMpPT57XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2xldmVsc0RpdicpO1xuXG59XG5cbmNvbnN0IGNyZWF0ZURlcHRDYXJkID0oaW1hZ2UsIHRpdGxlLCBkZXNjcmlwdGlvbiwgdGltZSwgbGV2ZWxzLCB0aXAsIGRlcHRTaG9ydE5hbWUpPT4ge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcblxuXG5cbiAgICAvL3RpdGxlXG4gICAgY29uc3QgZGVwdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICBkZXB0VGl0bGUuY2xhc3NMaXN0LmFkZCgnZGVwdFRpdGxlJyk7XG4gICAgZGVwdFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG5cbiAgICAvL2ltYWdlXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoJ2RlcHRJbWFnZScpO1xuICAgIGltZy5zcmMgPSBpbWFnZTtcbiAgICBcbiAgICAvL2Z1bGwgZGV0YWlsc1xuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMnKTtcblxuXG5cblxuXG4gICAgLy9kZXNjcmlwdGlvblxuXG4gICAgY29uc3QgZGVwdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRlcHREZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXB0RGVzY3JpcHRpb24nKTtcbiAgICBkZXB0RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcblxuXG4gICAgLy8gVGltZVxuXG4gICAgY29uc3QgZGVwdFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVwdFRpbWUuY2xhc3NMaXN0LmFkZCgnZGVwdFRpbWUnKTtcbiAgICBkZXB0VGltZS50ZXh0Q29udGVudCA9IGBTdWJtaXNzaW9uIERlYWRsaW5lOiAke3RpbWV9YDtcblxuICAgIC8vIExldmVsc1xuICAgIGNvbnN0IGRlcHRMZXZlbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXB0TGV2ZWxzLmNsYXNzTGlzdC5hZGQoJ2xldmVscycpO1xuXG4gICAgXG5cbiAgICBsZXZlbHMuZm9yRWFjaChsZXZlbCA9PiB7XG4gICAgICAgIGNvbnN0IGxldmVsTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgbGV2ZWxMaW5rLmhyZWYgPSBgL3JlcG9ydC8ke2RlcHRTaG9ydE5hbWV9LyR7bGV2ZWx9Lmh0bWxgO1xuICAgICAgICBsZXZlbExpbmsudGV4dENvbnRlbnQgPSBgJHtsZXZlbH1MIFJFUE9SVGA7XG4gICAgICAgIGxldmVsTGluay5jbGFzc0xpc3QuYWRkKCdsZXZlbExpbmsnKTtcblxuICAgICAgICBcbiAgICAgICAgXG5cbiAgICAgICAgZGVwdExldmVscy5hcHBlbmRDaGlsZChsZXZlbExpbmspO1xuXG4gICAgfSk7XG5cbiAgICBjb25zdCBkZXB0VGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRlcHRUaXAuY2xhc3NMaXN0LmFkZCgndGlwJyk7XG4gICAgZGVwdFRpcC50ZXh0Q29udGVudCA9IGAgRUxBIFRpcHM6ICAke3RpcH1gO1xuXG5cbiAgICBkZXRhaWxzLmFwcGVuZENoaWxkKGRlcHREZXNjcmlwdGlvbik7XG4gICAgZGV0YWlscy5hcHBlbmRDaGlsZChkZXB0VGltZSk7XG4gICAgZGV0YWlscy5hcHBlbmRDaGlsZChkZXB0VGlwKTtcbiAgICBkZXRhaWxzLmFwcGVuZENoaWxkKGRlcHRMZXZlbHMpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGVwdFRpdGxlKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGltZyk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChkZXRhaWxzKTtcblxuICAgIHJldHVybiBjYXJkO1xuXG5cblxufVxuXG5cblxuZXhwb3J0IHtjcmVhdGVEZXB0Q2FyZH0iLCJpbXBvcnQge3JlbmRlckhlYWRlcn0gZnJvbSAnLi9tb2R1bGVzL2hlYWRlci5qcyc7XG5pbXBvcnQge3JlbmRlckZvb3Rlcn0gZnJvbSAnLi9tb2R1bGVzL2Zvb3Rlcic7XG5pbXBvcnQgJy4uL0NTUy9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuLi9DU1MvcmVwb3J0LmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVEZXB0Q2FyZCB9IGZyb20gJy4vbW9kdWxlcy9yZXBvcnQuanMnO1xuaW1wb3J0IHsgY3JlYXRlTW9kYWwsIE9wZW5Nb2RhbCwgQ2xvc2VNb2RhbCB9IGZyb20gJy4vbW9kdWxlcy9tb2RhbC5qcyc7XG5cbmltcG9ydCByZXBvcnRJbWcgZnJvbSAnLi4vUkVTT1VSQ0VTL2ltYWdlcy9sYWJyZXAucG5nJ1xuLy9pbXBvcnQgaW1hZ2VzIGZvciB0aGUgZGVwYXJ0bWVudGFsIGNhcmRzXG5pbXBvcnQgSW1nQ1BFIGZyb20gJy4uL1JFU09VUkNFUy9pbWFnZXMvZGVwdF9jcGUucG5nJztcbmltcG9ydCBJbWdNRUUgZnJvbSAnLi4vUkVTT1VSQ0VTL2ltYWdlcy9kZXB0X21lZS5wbmcnO1xuaW1wb3J0IEltZ1BSRSBmcm9tICcuLi9SRVNPVVJDRVMvaW1hZ2VzL2RlcHRfcHJlLnBuZyc7XG5pbXBvcnQgSW1nRUVFIGZyb20gJy4uL1JFU09VUkNFUy9pbWFnZXMvZGVwdF9lZWUucG5nJztcblxuY29uc3QgaG1lID0gXCIuLi9pbmRleC5odG1sXCI7XG5jb25zdCBycHQgPSBcIi4vcmVwb3J0Lmh0bWxcIjtcbmNvbnN0IGFidCA9IFwiLi4vYWJvdXQvYWJvdXQuaHRtbFwiO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xucmVuZGVySGVhZGVyKGJvZHksIFtobWUsIHJwdCwgYWJ0XSk7XG5jb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG53cmFwcGVyLmlkID0gJ3dyYXBwZXInO1xuYm9keS5hcHBlbmQod3JhcHBlcik7XG5jcmVhdGVNb2RhbChib2R5KVxuY29uc3Qgc2VjdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnNlY3Rpb24xLmlkID0gJ3NlY3Rpb24xJztcbndyYXBwZXIuYXBwZW5kKHNlY3Rpb24xKTtcbmNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xudGV4dC5jbGFzc0xpc3QuYWRkKCdtYWluVGV4dCcpXG53cmFwcGVyLmFwcGVuZCh0ZXh0KTtcbnRleHQuaW5uZXJIVE1MID0gJ0Jyb3dzZSBBdmFpbGFibGUnO1xuY29uc3QgdGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xudGV4dDIuY2xhc3NMaXN0LmFkZCgnbWFpblRleHQyJylcbndyYXBwZXIuYXBwZW5kKHRleHQyKTtcbnRleHQyLmlubmVySFRNTCA9ICdSZXBvcnRzJztcbmNvbnN0IHJlcG9ydEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5yZXBvcnRJbWFnZS5zcmMgPSByZXBvcnRJbWc7XG5yZXBvcnRJbWFnZS5hbHQgPSAncmVwb3J0aW1nJ1xuY29uc3QgY3BlRGVwdCA9IGNyZWF0ZURlcHRDYXJkKEltZ0NQRSwnQ09NUFVURVIgRU5HSU5FRVJJTkcnLCdCZXlvbmQgdGhlb3JldGljYWwga25vd2xlZGdlLCB0aGUgY29tcHV0ZXIgZW5naW5lZXJpbmcgbGFib3JhdG9yeSBpcyB0aGUgY29ybmVyc3RvbmUgb2YgcHJhY3RpY2FsIGxlYXJuaW5nIGluIHRoZSBmaWVsZC4gVGhpcyBzcGVjaWFsaXplZCBzcGFjZSBodW1zIHdpdGggYWN0aXZpdHksIGVxdWlwcGVkIHdpdGggaGlnaC1wZXJmb3JtYW5jZSBjb21wdXRlcnMsIHNwZWNpYWxpemVkIHNvZnR3YXJlLCBhbmQgZWxlY3Ryb25pYyBjb21wb25lbnRzLiBIZXJlLCBzdHVkZW50cyBicmlkZ2UgdGhlIGdhcCBiZXR3ZWVuIHRoZW9yeSBhbmQgYXBwbGljYXRpb24sIGJ1aWxkaW5nIGNpcmN1aXRzLCBwcm9ncmFtbWluZyBtaWNyb2NvbnRyb2xsZXJzLCBhbmQgdGVzdGluZyBoYXJkd2FyZSBmdW5jdGlvbmFsaXRpZXMuIEV4cGVyaW1lbnRzIGluIG5ldHdvcmtpbmcsIGRpZ2l0YWwgbG9naWMgZGVzaWduLCBhbmQgY29tcHV0ZXIgYXJjaGl0ZWN0dXJlIHNvbGlkaWZ5IGNsYXNzcm9vbSBjb25jZXB0cywgZm9zdGVyaW5nIGEgZGVlcGVyIHVuZGVyc3RhbmRpbmcgb2YgaG93IGNvbXB1dGVycyBvcGVyYXRlIGF0IHRoZWlyIGNvcmUuIFRoZSBsYWIgZm9zdGVycyBjb2xsYWJvcmF0aW9uLCBhcyBzdHVkZW50cyB0YWNrbGUgcHJvamVjdHMgdG9nZXRoZXIsIHRyb3VibGVzaG9vdGluZyBjaGFsbGVuZ2VzIGFuZCByZWZpbmluZyB0aGVpciBwcm9ibGVtLXNvbHZpbmcgc2tpbGxzLiBUaGlzIGhhbmRzLW9uIGVudmlyb25tZW50IGVtcG93ZXJzIGZ1dHVyZSBjb21wdXRlciBlbmdpbmVlcnMsIHNoYXBpbmcgdGhlbSBpbnRvIGlubm92YXRvcnMgd2hvIGNhbiBkZXNpZ24gYW5kIGJ1aWxkIHRoZSB0ZWNobm9sb2dpY2FsIGFkdmFuY2VtZW50cyBvZiB0b21vcnJvdy4nLCdUTyBCRSBERUNJREVEKCBVc3VhbGx5IDEgd2VlayBhZnRlciBleHBlcmltZW50KScsWzMwMCwgNDAwXSwgJ0JlIHRoZXJlIDVtaW5zIGJlZm9yZSB0aGUgdGltZSwgRW5zdXJlIHRvIHVuZGVyc3RhbmQgdGhlIGJhc2ljIGNvbmNlcHQnLCdjcGUnKTtcbmNvbnN0IG1lZURlcHQgPSBjcmVhdGVEZXB0Q2FyZChJbWdNRUUsJ01FQ0hBTklDQUwgRU5HSU5FRVJJTkcnLCdCZXlvbmQgdGhlIHRoZW9yZXRpY2FsIHJlYWxtLCB0aGUgbWVjaGFuaWNhbCBlbmdpbmVlcmluZyBsYWJvcmF0b3J5IGh1bXMgd2l0aCB0aGUgd2hpciBvZiBtYWNoaW5lcnkgYW5kIHRoZSBjbGluayBvZiB0b29scy4gVGhpcyBzcGFjZSBpcyBhIHBsYXlncm91bmQgZm9yIGlubm92YXRpb24sIGZpbGxlZCB3aXRoIGxhdGhlcywgbWlsbHMsIDNEIHByaW50ZXJzLCBhbmQgdGVzdGluZyBlcXVpcG1lbnQuIEhlcmUsIHN0dWRlbnRzIHRyYW5zZm9ybSBhYnN0cmFjdCBjb25jZXB0cyBpbnRvIHRhbmdpYmxlIHJlYWxpdGllcy4gVGhleSBkZXNpZ24gYW5kIGJ1aWxkIG1lY2hhbmlzbXMsIGFuYWx5emUgbWF0ZXJpYWwgcHJvcGVydGllcywgYW5kIHRlc3QgdGhlIHN0cmVuZ3RoIG9mIHN0cnVjdHVyZXMuIEV4cGVyaW1lbnRzIGluIHRoZXJtb2R5bmFtaWNzLCBmbHVpZCBtZWNoYW5pY3MsIGFuZCByb2JvdGljcyBicmlkZ2UgdGhlIGdhcCBiZXR3ZWVuIHRoZW9yeSBhbmQgYXBwbGljYXRpb24sIHNvbGlkaWZ5aW5nIGtub3dsZWRnZSBhbmQgZm9zdGVyaW5nIHByb2JsZW0tc29sdmluZyBza2lsbHMuIFRoZSBsYWIgZm9zdGVycyBjb2xsYWJvcmF0aW9uLCBhcyBzdHVkZW50cyB3b3JrIHRvZ2V0aGVyIG9uIHByb2plY3RzLCB0cm91Ymxlc2hvb3RpbmcgY2hhbGxlbmdlcyBhbmQgcmVmaW5pbmcgdGhlaXIgZGVzaWducy4gVGhpcyBoYW5kcy1vbiBlbnZpcm9ubWVudCBlbXBvd2VycyBmdXR1cmUgbWVjaGFuaWNhbCBlbmdpbmVlcnMsIGVxdWlwcGluZyB0aGVtIHdpdGggdGhlIHByYWN0aWNhbCBza2lsbHMgdG8gYnVpbGQgdGhlIG1hY2hpbmVzIGFuZCBzdHJ1Y3R1cmVzIHRoYXQgc2hhcGUgb3VyIHdvcmxkJywnNHBtIHNhbWUgZGF5JyxbMjAwXSwgJ0JlIHRoZXJlIDVtaW5zIGJlZm9yZSB0aGUgdGltZSwgRHJlc3MgQXBwcm9wcmlhdGVseScsJ21lZScpO1xuY29uc3QgZWVlRGVwdCA9IGNyZWF0ZURlcHRDYXJkKEltZ0VFRSwnRUxFQ1RSSUNBTCBFTkdJTkVFUklORycsJ1RoZSBlbGVjdHJpY2FsIGVuZ2luZWVyaW5nIGxhYiBpcyBhIHZpYnJhbnQgaHViIHdoZXJlIHRoZW9yeSBtZWV0cyB0YW5naWJsZSByZXN1bHRzLiBUaGlzIHNwYWNlIGh1bXMgd2l0aCB0aGUgZW5lcmd5IG9mIGV4cGVyaW1lbnRzLCBmaWxsZWQgd2l0aCBvc2NpbGxvc2NvcGVzLCBwb3dlciBzdXBwbGllcywgYW5kIGludHJpY2F0ZSBjaXJjdWl0cy4gSGVyZSwgc3R1ZGVudHMgYnJpZGdlIHRoZSBnYXAgYmV0d2VlbiB0aGVvcmV0aWNhbCBjb25jZXB0cyBhbmQgcHJhY3RpY2FsIGFwcGxpY2F0aW9ucy4gVGhleSBhbmFseXplIGVsZWN0cmljYWwgcGhlbm9tZW5hLCBkZXNpZ24gY2lyY3VpdHMsIGFuZCBidWlsZCBlbGVjdHJvbmljIGRldmljZXMsIHRlc3RpbmcgdGhlaXIgZnVuY3Rpb25hbGl0eSBpbiByZWFsLXRpbWUuIEV4cGVyaW1lbnRzIGluIGVsZWN0cm9tYWduZXRpc20sIHBvd2VyIHN5c3RlbXMsIGFuZCBjb250cm9sIHN5c3RlbXMgc29saWRpZnkgY2xhc3Nyb29tIGtub3dsZWRnZSwgZm9zdGVyaW5nIGEgZGVlcGVyIHVuZGVyc3RhbmRpbmcgb2YgaG93IGVsZWN0cmljaXR5IGJlaGF2ZXMgYW5kIHBvd2VycyBvdXIgd29ybGQuIFRoZSBsYWIgZm9zdGVycyBjb2xsYWJvcmF0aW9uLCBhcyBzdHVkZW50cyB3b3JrIHRvZ2V0aGVyIG9uIHByb2plY3RzLCB0cm91Ymxlc2hvb3RpbmcgY2hhbGxlbmdlcyBhbmQgcmVmaW5pbmcgdGhlaXIgZGVzaWducy4gVGhpcyBoYW5kcy1vbiBlbnZpcm9ubWVudCBlbXBvd2VycyBmdXR1cmUgZWxlY3RyaWNhbCBlbmdpbmVlcnMsIGVxdWlwcGluZyB0aGVtIHdpdGggdGhlIHByYWN0aWNhbCBza2lsbHMgdG8gZGVzaWduIGFuZCBidWlsZCB0aGUgdGVjaG5vbG9naWNhbCBhZHZhbmNlbWVudHMgdGhhdCBwb3dlciBvdXIgbGl2ZXMuJywnMTBBTSBOZXh0IGRheScsWzIwMCwgMzAwXSwgJ0JlIHRoZXJlIDVtaW5zIGJlZm9yZSB0aGUgdGltZSwgRHJlc3MgQXBwcm9wcmlhdGVseSwgTGlzdGVuIGF0dGVudGl2ZWx5IGFuZCBlbnN1cmUgQWN0aXZlIFBhcnRpY2lwYXRpb24nLCdlZWUnKTtcbmNvbnN0IHByZURlcHQgPSBjcmVhdGVEZXB0Q2FyZChJbWdQUkUsJ1BST0RVQ1RJT04gRU5HSU5FRVJJTkcnLCdUaGUgcHJvZHVjdGlvbiBlbmdpbmVlcmluZyBsYWIgaXMgYSBkeW5hbWljIHNwYWNlIHdoZXJlIHRoZW9yeSBpcyB0cmFuc2Zvcm1lZCBpbnRvIG9wdGltaXplZCBtYW51ZmFjdHVyaW5nIHByb2Nlc3Nlcy4gVGhpcyBoYW5kcy1vbiBlbnZpcm9ubWVudCBodW1zIHdpdGggdGhlIGFjdGl2aXR5IG9mIG1hY2hpbmVyeSBhbmQgdGhlIG1ldGhvZGljYWwgcGxhbm5pbmcgb2YgcHJvZHVjdGlvbiBsaW5lcy4gU3R1ZGVudHMgZXhwZXJpbWVudCB3aXRoIHZhcmlvdXMgbWFudWZhY3R1cmluZyB0ZWNobmlxdWVzLCBpbmNsdWRpbmcgbWFjaGluaW5nLCB3ZWxkaW5nLCBhc3NlbWJseSwgYW5kIHF1YWxpdHkgY29udHJvbCBwcm9jZWR1cmVzLiBUaGV5IGFuYWx5emUgcHJvZHVjdGlvbiBkYXRhLCBvcHRpbWl6ZSB3b3JrZmxvd3MsIGFuZCBhcHBseSBsZWFuIG1hbnVmYWN0dXJpbmcgcHJpbmNpcGxlcyB0byBhY2hpZXZlIGVmZmljaWVuY3kuIEV4cGVyaW1lbnRzIGluIGF1dG9tYXRpb24sIHJvYm90aWNzLCBhbmQgY29tcHV0ZXItYWlkZWQgbWFudWZhY3R1cmluZyBzb2xpZGlmeSBjbGFzc3Jvb20ga25vd2xlZGdlLCBmb3N0ZXJpbmcgYSBkZWVwZXIgdW5kZXJzdGFuZGluZyBvZiBob3cgcHJvZHVjdHMgYXJlIGNyZWF0ZWQgYXQgc2NhbGUuIFRoZSBsYWIgZm9zdGVycyBjb2xsYWJvcmF0aW9uLCBhcyBzdHVkZW50cyB3b3JrIHRvZ2V0aGVyIG9uIHByb2plY3RzLCBzaW11bGF0aW5nIHJlYWwtd29ybGQgcHJvZHVjdGlvbiBzY2VuYXJpb3MgYW5kIHJlZmluaW5nIHRoZWlyIHByb2JsZW0tc29sdmluZyBza2lsbHMuIFRoaXMgaGFuZHMtb24gZW52aXJvbm1lbnQgZW1wb3dlcnMgZnV0dXJlIHByb2R1Y3Rpb24gZW5naW5lZXJzLCBlcXVpcHBpbmcgdGhlbSB3aXRoIHRoZSBwcmFjdGljYWwga25vd2xlZGdlIHRvIGRlc2lnbiwgaW1wbGVtZW50LCBhbmQgb3B0aW1pemUgZWZmaWNpZW50IG1hbnVmYWN0dXJpbmcgc3lzdGVtcyB0aGF0IGRyaXZlIHByb2R1Y3Rpdml0eSBhbmQgaW5ub3ZhdGlvbicsJ1RPIEJFIERFQ0lERUQgZHVyaW5nIEV4cGVyaW1lbnQnLFsyMDBdLCAnRHJlc3MgQXBwcm9wcmlhdGVseSwgZW5zdXJlIEFjdGl2ZSBQYXJ0aWNpcGF0aW9uJywncHJlJyk7XG53cmFwcGVyLmFwcGVuZENoaWxkKGNwZURlcHQpO1xud3JhcHBlci5hcHBlbmRDaGlsZChlZWVEZXB0KTtcbndyYXBwZXIuYXBwZW5kQ2hpbGQobWVlRGVwdCk7XG53cmFwcGVyLmFwcGVuZENoaWxkKHByZURlcHQpO1xucmVuZGVyRm9vdGVyKGJvZHksIFtobWUsIHJwdCwgYWJ0XSk7XG5mdW5jdGlvbiBjaGVja0xvY2FsU3RvcmFnZSgpe1xuICAgIGlmKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnU3Vic2NyaWJlZCcpKXtcbiAgICAgICAgT3Blbk1vZGFsKCk7XG4gICAgfSBcbiAgICBlbHNle1xuICAgICAgICBDbG9zZU1vZGFsKCk7XG4gICAgfVxufVxud2luZG93Lm9ubG9hZCA9IGNoZWNrTG9jYWxTdG9yYWdlOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==