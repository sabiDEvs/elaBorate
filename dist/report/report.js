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
        levelLink.href = `./${deptShortName}.html`;
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
const cpeDept = (0,_modules_report_js__WEBPACK_IMPORTED_MODULE_4__.createDeptCard)(_RESOURCES_images_dept_cpe_png__WEBPACK_IMPORTED_MODULE_7__,'COMPUTER ENGINEERING','Beyond theoretical knowledge, the computer engineering laboratory is the cornerstone of practical learning in the field. This specialized space hums with activity, equipped with high-performance computers, specialized software, and electronic components. Here, students bridge the gap between theory and application, building circuits, programming microcontrollers, and testing hardware functionalities. Experiments in networking, digital logic design, and computer architecture solidify classroom concepts, fostering a deeper understanding of how computers operate at their core. The lab fosters collaboration, as students tackle projects together, troubleshooting challenges and refining their problem-solving skills. This hands-on environment empowers future computer engineers, shaping them into innovators who can design and build the technological advancements of tomorrow.','TO BE DECIDED( Usually 1 week after experiment)',[300, 400], 'Be there 5mins before the time, Ensure to understand the basic concept','cpe/cpe');
const meeDept = (0,_modules_report_js__WEBPACK_IMPORTED_MODULE_4__.createDeptCard)(_RESOURCES_images_dept_mee_png__WEBPACK_IMPORTED_MODULE_8__,'MECHANICAL ENGINEERING','Beyond the theoretical realm, the mechanical engineering laboratory hums with the whir of machinery and the clink of tools. This space is a playground for innovation, filled with lathes, mills, 3D printers, and testing equipment. Here, students transform abstract concepts into tangible realities. They design and build mechanisms, analyze material properties, and test the strength of structures. Experiments in thermodynamics, fluid mechanics, and robotics bridge the gap between theory and application, solidifying knowledge and fostering problem-solving skills. The lab fosters collaboration, as students work together on projects, troubleshooting challenges and refining their designs. This hands-on environment empowers future mechanical engineers, equipping them with the practical skills to build the machines and structures that shape our world','4pm same day',[200], 'Be there 5mins before the time, Dress Appropriately','mee/mee');
const eeeDept = (0,_modules_report_js__WEBPACK_IMPORTED_MODULE_4__.createDeptCard)(_RESOURCES_images_dept_eee_png__WEBPACK_IMPORTED_MODULE_10__,'ELECTRICAL ENGINEERING','The electrical engineering lab is a vibrant hub where theory meets tangible results. This space hums with the energy of experiments, filled with oscilloscopes, power supplies, and intricate circuits. Here, students bridge the gap between theoretical concepts and practical applications. They analyze electrical phenomena, design circuits, and build electronic devices, testing their functionality in real-time. Experiments in electromagnetism, power systems, and control systems solidify classroom knowledge, fostering a deeper understanding of how electricity behaves and powers our world. The lab fosters collaboration, as students work together on projects, troubleshooting challenges and refining their designs. This hands-on environment empowers future electrical engineers, equipping them with the practical skills to design and build the technological advancements that power our lives.','10AM Next day',[200, 300], 'Be there 5mins before the time, Dress Appropriately, Listen attentively and ensure Active Participation','eee/eee');
const preDept = (0,_modules_report_js__WEBPACK_IMPORTED_MODULE_4__.createDeptCard)(_RESOURCES_images_dept_pre_png__WEBPACK_IMPORTED_MODULE_9__,'PRODUCTION ENGINEERING','The production engineering lab is a dynamic space where theory is transformed into optimized manufacturing processes. This hands-on environment hums with the activity of machinery and the methodical planning of production lines. Students experiment with various manufacturing techniques, including machining, welding, assembly, and quality control procedures. They analyze production data, optimize workflows, and apply lean manufacturing principles to achieve efficiency. Experiments in automation, robotics, and computer-aided manufacturing solidify classroom knowledge, fostering a deeper understanding of how products are created at scale. The lab fosters collaboration, as students work together on projects, simulating real-world production scenarios and refining their problem-solving skills. This hands-on environment empowers future production engineers, equipping them with the practical knowledge to design, implement, and optimize efficient manufacturing systems that drive productivity and innovation','TO BE DECIDED during Experiment',[200], 'Dress Appropriately, ensure Active Participation','pre/pre');
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

module.exports = "./asset/images/319be09755f101e8ab7f.png";

/***/ }),

/***/ "./src/RESOURCES/images/dept_eee.png":
/*!*******************************************!*\
  !*** ./src/RESOURCES/images/dept_eee.png ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "./asset/images/e0dfe5db36a25c00d4dd.png";

/***/ }),

/***/ "./src/RESOURCES/images/dept_mee.png":
/*!*******************************************!*\
  !*** ./src/RESOURCES/images/dept_mee.png ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "./asset/images/0320e70b1866ddf255f7.png";

/***/ }),

/***/ "./src/RESOURCES/images/dept_pre.png":
/*!*******************************************!*\
  !*** ./src/RESOURCES/images/dept_pre.png ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "./asset/images/a3336edbfca541f2bf0e.png";

/***/ }),

/***/ "./src/RESOURCES/images/labrep.png":
/*!*****************************************!*\
  !*** ./src/RESOURCES/images/labrep.png ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "./asset/images/d495606c317c3752a89a.png";

/***/ }),

/***/ "./src/RESOURCES/images/stay.png":
/*!***************************************!*\
  !*** ./src/RESOURCES/images/stay.png ***!
  \***************************************/
/***/ ((module) => {

module.exports = "./asset/images/588c0db71967388ac52a.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["src_SCRIPTS_modules_footer_js-src_SCRIPTS_modules_header_js"], () => (__webpack_exec__("./src/SCRIPTS/report.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBYyxDQUFDLDREQUFNO0FBQ3JDLGdCQUFnQixrRUFBYyxDQUFDLDJEQUFNO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQVk7QUFDWjtBQUNBO0FBQ0EsUUFBUSw0REFBUztBQUNqQjtBQUNBO0FBQ0EsUUFBUSw2REFBVTtBQUNsQjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGFib3JhdGUvLi9zcmMvQ1NTL3JlcG9ydC5jc3M/MjZhNiIsIndlYnBhY2s6Ly9lbGFib3JhdGUvLi9zcmMvQ1NTL3N0eWxlLmNzcz83NjdjIiwid2VicGFjazovL2VsYWJvcmF0ZS8uL3NyYy9TQ1JJUFRTL21vZHVsZXMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vZWxhYm9yYXRlLy4vc3JjL1NDUklQVFMvbW9kdWxlcy9yZXBvcnQuanMiLCJ3ZWJwYWNrOi8vZWxhYm9yYXRlLy4vc3JjL1NDUklQVFMvcmVwb3J0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBJbWdNb2RhbCBmcm9tICcuLi8uLi9SRVNPVVJDRVMvaW1hZ2VzL3N0YXkucG5nJztcclxuY29uc3Qgc2VjdGlvbk1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbnNlY3Rpb25Nb2RhbC5pZCA9ICdzZWN0aW9uTW9kYWwnO1xyXG5pbXBvcnQgJy4uLy4uL0NTUy9yZXBvcnQuY3NzJztcclxuXHJcbmNvbnN0IGNyZWF0ZU1vZGFsPSAoYm9keSkgPT57XHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWxfYmcnKTtcclxuICAgIGNvbnN0IG1vZGFsTG9hZGVyQmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1vZGFsTG9hZGVyQmcuY2xhc3NMaXN0LmFkZCgnbW9kYWxfbG9hZGVyX2JnJyk7XHJcbiAgICBjb25zdCBtb2RhbExvYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbW9kYWxMb2FkZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWxfbG9hZGVyJyk7XHJcbiAgICBtb2RhbExvYWRlckJnLmFwcGVuZENoaWxkKG1vZGFsTG9hZGVyKTtcclxuICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoJ21vZGFsX2NvbnRlbnQnKTtcclxuICAgIG1vZGFsLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudCk7XHJcbiAgICBjb25zdCBNb2RhbEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBNb2RhbEltYWdlLmNsYXNzTGlzdC5hZGQoJ21vZGFsX2ltYWdlJyk7XHJcbiAgICBjb25zdCBJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgSW1hZ2UuY2xhc3NMaXN0LmFkZCgnaW1hZ2VfbW9kYWwnKTtcclxuICAgIEltYWdlLnNyYyA9IEltZ01vZGFsO1xyXG4gICAgTW9kYWxJbWFnZS5hcHBlbmRDaGlsZChJbWFnZSlcclxuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChNb2RhbEltYWdlKTtcclxuICAgIGNvbnN0IG1vZGFsVGV4dHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1vZGFsVGV4dHMuY2xhc3NMaXN0LmFkZCgnbW9kYWxfdGV4dHMnKTtcclxuICAgIGNvbnN0IG1vZGFsVGV4dHMxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbW9kYWxUZXh0czEuY2xhc3NMaXN0LmFkZCgnbW9kYWxfbWFpbl90ZXh0Jyk7XHJcbiAgICBtb2RhbFRleHRzMS50ZXh0Q29udGVudCA9ICdUYWlsb3IgWW91ciBFeHBlcmllbmNlIFRvZGF5ISc7XHJcbiAgICBtb2RhbFRleHRzLmFwcGVuZENoaWxkKG1vZGFsVGV4dHMxKTtcclxuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtb2RhbFRleHRzKTtcclxuICAgIGNvbnN0IG1vZGFsRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbW9kYWxGb3JtLmNsYXNzTGlzdC5hZGQoJ21vZGFsX2Zvcm0nKTtcclxuICAgIGNvbnN0IGZvcm1JdHNlbGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBmb3JtSXRzZWxmLmNsYXNzTGlzdC5hZGQoJ2Zvcm1pdHNlbGYnKTtcclxuICAgIGNvbnN0IExldmVsU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdDaG9vc2UgWW91ciBMZXZlbCc7IC8vIFNldCBsYWJlbCB0ZXh0XHJcbiAgICBMZXZlbFNlbGVjdC5uYW1lID0gJ0xldmVsJztcclxuICAgIGNvbnN0IGxldmVsU2VsZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXZlbFNlbGVjdERpdi5jbGFzc0xpc3QuYWRkKCdsZXZlbF9zZWxlY3RfZGl2Jyk7XHJcbiAgICBsZXZlbFNlbGVjdERpdi5hcHBlbmRDaGlsZChMZXZlbFNlbGVjdCk7XHJcbiAgICBmb3JtSXRzZWxmLmFwcGVuZENoaWxkKGxldmVsU2VsZWN0RGl2KTtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSBbJ1NlbGVjdCB5b3VyIExldmVsJywnMjAwTGV2ZWwnLCAnMzAwTGV2ZWwnLCAnNDAwTGV2ZWwnXTtcclxuICAgIG9wdGlvbnMuZm9yRWFjaChvcHRpb25WYWx1ZSA9PiB7XHJcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTsgLy8gQ3JlYXRlIG9wdGlvbiBlbGVtZW50XHJcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb25WYWx1ZTsgLy8gU2V0IG9wdGlvbiB0ZXh0XHJcbiAgICBvcHRpb24udmFsdWUgPSBvcHRpb25WYWx1ZTsgLy8gU2V0IG9wdGlvbiB2YWx1ZVxyXG4gICAgTGV2ZWxTZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTsgLy8gQXBwZW5kIG9wdGlvbiB0byBzZWxlY3QgZWxlbWVudFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBEZXB0U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgICBjb25zdCBsYWJlbDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGFiZWwyLnRleHRDb250ZW50ID0gJ1NlbGVjdCBEZXBhcnRtZW50JzsgLy8gU2V0IGxhYmVsIHRleHRcclxuICAgIERlcHRTZWxlY3QubmFtZSA9ICdEZXBhcnRtZW50JztcclxuICAgIGNvbnN0IERlcHRTZWxlY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIERlcHRTZWxlY3REaXYuY2xhc3NMaXN0LmFkZCgnbGV2ZWxfc2VsZWN0X2RpdicpO1xyXG4gICAgRGVwdFNlbGVjdERpdi5hcHBlbmRDaGlsZChEZXB0U2VsZWN0KTtcclxuICAgIGZvcm1JdHNlbGYuYXBwZW5kQ2hpbGQoRGVwdFNlbGVjdERpdik7XHJcbiAgICAvLyBDcmVhdGUgb3B0aW9uc1xyXG4gICAgY29uc3Qgb3B0aW9uczIgPSBbJ1NlbGVjdCB5b3VyIERlcGFydG1lbnQnLCdDUEUnLCAnUFJFJywgJ0VFRScsICdBR0UnLCAnQ1ZFJywgJ1NURScsICdQRUUnLCAnTVJFJywgJ01URScsICdJTkQnLCAnQ0hFJywnTUVFJ107XHJcbiAgICAvLyBMb29wIHRocm91Z2ggb3B0aW9ucyBhbmQgYWRkIHRoZW0gdG8gdGhlIHNlbGVjdCBlbGVtZW50XHJcbiAgICBvcHRpb25zMi5mb3JFYWNoKG9wdGlvblZhbHVlID0+IHtcclxuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpOyAvLyBDcmVhdGUgb3B0aW9uIGVsZW1lbnRcclxuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvblZhbHVlOyAvLyBTZXQgb3B0aW9uIHRleHRcclxuICAgIG9wdGlvbi52YWx1ZSA9IG9wdGlvblZhbHVlOyAvLyBTZXQgb3B0aW9uIHZhbHVlXHJcbiAgICBEZXB0U2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7IC8vIEFwcGVuZCBvcHRpb24gdG8gc2VsZWN0IGVsZW1lbnRcclxuICAgIH0pO1xyXG4gICAgY29uc3QgZm9ybUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGZvcm1GaWVsZC50eXBlID0gJ2VtYWlsJztcclxuICAgIGZvcm1GaWVsZC5uYW1lID0gJ0VtYWlsJztcclxuICAgIGZvcm1GaWVsZC5yZXF1aXJlZCA9IHRydWU7XHJcbiAgICBjb25zdCBVc2VyRW1haWwgPSBmb3JtRmllbGQudmFsdWU7XHJcbiAgICBmb3JtRmllbGQucGxhY2Vob2xkZXIgPSAnRW50ZXIgRW1haWwnO1xyXG4gICAgZm9ybUZpZWxkLmNsYXNzTGlzdC5hZGQoJ2Zvcm1GaWVsZCcpO1xyXG4gICAgZm9ybUl0c2VsZi5pZCA9ICdlbWFpbEZvcm0nO1xyXG4gICAgY29uc3QgZm9ybVN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgZm9ybVN1Ym1pdC50eXBlID0gJ3N1Ym1pdCc7XHJcbiAgICBmb3JtU3VibWl0LnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XHJcbiAgICBmb3JtU3VibWl0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIGZvcm1TdWJtaXQuY2xhc3NMaXN0LmFkZCgnZm9ybVN1Ym1pdCcpO1xyXG4gICAgZm9ybUZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgZW1haWxWYWx1ZSA9IGZvcm1GaWVsZC52YWx1ZS50cmltKCk7IC8vIFRyaW1tZWQgdmFsdWUgb2YgdGhlIGVtYWlsIGZpZWxkXHJcbiAgICAgICAgY29uc3QgaXNWYWxpZEVtYWlsID0gZm9ybUZpZWxkLmNoZWNrVmFsaWRpdHkoKTsgLy8gQ2hlY2sgaWYgdGhlIGVtYWlsIGZpZWxkIGlzIHZhbGlkXHJcbiAgICAgICAgZm9ybVN1Ym1pdC5kaXNhYmxlZCA9ICFpc1ZhbGlkRW1haWwgfHwgZW1haWxWYWx1ZSA9PT0gJyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoaXNWYWxpZEVtYWlsKXtcclxuICAgICAgICAgICAgZm9ybVN1Ym1pdC5jbGFzc0xpc3QuYWRkKCdlbmFibGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBmb3JtSXRzZWxmLmFwcGVuZENoaWxkKGZvcm1GaWVsZCk7XHJcbiAgICBmb3JtSXRzZWxmLmFwcGVuZENoaWxkKGZvcm1TdWJtaXQpO1xyXG4gICAgY29uc3Qgc2NyaXB0VVJMID0gJ2h0dHBzOi8vc2NyaXB0Lmdvb2dsZS5jb20vbWFjcm9zL3MvQUtmeWNieUJRQUM5NEo0ZXNoZVRFR1RUbWM3dkQ0NEdsOFRzeHRwdExPVTdYbnN4ODdJSXZValZHaUhsZ3RIRG1FeHZqMEJWOFEvZXhlYyc7XHJcbiAgICBmb3JtSXRzZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBmb3JtU3VibWl0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICBtb2RhbExvYWRlckJnLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgbGV0IHJlcXVlc3RCb2R5ID0gbmV3IEZvcm1EYXRhKGZvcm1JdHNlbGYpO1xyXG4gICAgICAgIGZldGNoKHNjcmlwdFVSTCwgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogcmVxdWVzdEJvZHkgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgQ2xvc2VNb2RhbCgpO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1N1YnNjcmliZWQnLCAndHJ1ZScpO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1VzZXInLCBgJHtVc2VyRW1haWx9YCk7XHJcblxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvcm1TdWJtaXQuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgICAgICAgICAgYWxlcnQoJ0Vycm9yISBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicpO1xyXG4gICAgICAgICAgICBmb3JtU3VibWl0LmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIG1vZGFsRm9ybS5hcHBlbmRDaGlsZChmb3JtSXRzZWxmKTtcclxuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtb2RhbEZvcm0pO1xyXG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsTG9hZGVyQmcpO1xyXG4gICAgY29uc3QgbW9kYWxTYWZldHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1vZGFsU2FmZXR5LmNsYXNzTGlzdC5hZGQoJ21vZGFsX3NhZmV0eScpO1xyXG4gICAgY29uc3QgbW9kYWxTYWZldHlUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbW9kYWxTYWZldHlUZXh0LnRleHRDb250ZW50PSAnRW50ZXIgeW91ciBlbWFpbCwgc2VsZWN0IHlvdXIgbGV2ZWwgYW5kIGRlcGFydG1lbnQgdG8gdW5sb2NrIHBlcnNvbmFsaXplZCBmZWF0dXJlcyBhbmQgcmVjZWl2ZSBleGNsdXNpdmUgbmV3c2xldHRlcnMuJ1xyXG4gICAgbW9kYWxTYWZldHlUZXh0LmNsYXNzTGlzdC5hZGQoJ21vZGFsX3NhZmV0eV90ZXh0Jyk7XHJcbiAgICBtb2RhbFNhZmV0eS5hcHBlbmRDaGlsZChtb2RhbFNhZmV0eVRleHQpO1xyXG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsU2FmZXR5KTtcclxuICAgIHNlY3Rpb25Nb2RhbC5hcHBlbmRDaGlsZChtb2RhbCk7XHJcbiAgICBzZWN0aW9uTW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcclxuICAgIHNlY3Rpb25Nb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoc2VjdGlvbk1vZGFsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gT3Blbk1vZGFsKCl7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzZWN0aW9uTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB9LCAxMjAwMDAwKTtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuZnVuY3Rpb24gQ2xvc2VNb2RhbCgpe1xyXG4gICAgc2VjdGlvbk1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn1cclxuZXhwb3J0e2NyZWF0ZU1vZGFsLCBPcGVuTW9kYWwsIENsb3NlTW9kYWx9OyIsIlxyXG5jb25zdCBjcmVhdGVMZXZlbHNCdXR0b25zID0gKGxldmVscyk9PntcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2xldmVsc0RpdicpO1xyXG5cclxufVxyXG5cclxuY29uc3QgY3JlYXRlRGVwdENhcmQgPShpbWFnZSwgdGl0bGUsIGRlc2NyaXB0aW9uLCB0aW1lLCBsZXZlbHMsIHRpcCwgZGVwdFNob3J0TmFtZSk9PiB7XHJcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcclxuXHJcblxyXG5cclxuICAgIC8vdGl0bGVcclxuICAgIGNvbnN0IGRlcHRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XHJcbiAgICBkZXB0VGl0bGUuY2xhc3NMaXN0LmFkZCgnZGVwdFRpdGxlJyk7XHJcbiAgICBkZXB0VGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuXHJcbiAgICAvL2ltYWdlXHJcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGltZy5jbGFzc0xpc3QuYWRkKCdkZXB0SW1hZ2UnKTtcclxuICAgIGltZy5zcmMgPSBpbWFnZTtcclxuICAgIFxyXG4gICAgLy9mdWxsIGRldGFpbHNcclxuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRldGFpbHMuY2xhc3NMaXN0LmFkZCgnZGV0YWlscycpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAvL2Rlc2NyaXB0aW9uXHJcblxyXG4gICAgY29uc3QgZGVwdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgZGVwdERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2RlcHREZXNjcmlwdGlvbicpO1xyXG4gICAgZGVwdERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XHJcblxyXG5cclxuICAgIC8vIFRpbWVcclxuXHJcbiAgICBjb25zdCBkZXB0VGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGRlcHRUaW1lLmNsYXNzTGlzdC5hZGQoJ2RlcHRUaW1lJyk7XHJcbiAgICBkZXB0VGltZS50ZXh0Q29udGVudCA9IGBTdWJtaXNzaW9uIERlYWRsaW5lOiAke3RpbWV9YDtcclxuXHJcbiAgICAvLyBMZXZlbHNcclxuICAgIGNvbnN0IGRlcHRMZXZlbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRlcHRMZXZlbHMuY2xhc3NMaXN0LmFkZCgnbGV2ZWxzJyk7XHJcblxyXG4gICAgXHJcblxyXG4gICAgbGV2ZWxzLmZvckVhY2gobGV2ZWwgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxldmVsTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICBsZXZlbExpbmsuaHJlZiA9IGAuLyR7ZGVwdFNob3J0TmFtZX0uaHRtbGA7XHJcbiAgICAgICAgbGV2ZWxMaW5rLnRleHRDb250ZW50ID0gYCR7bGV2ZWx9TCBSRVBPUlRgO1xyXG4gICAgICAgIGxldmVsTGluay5jbGFzc0xpc3QuYWRkKCdsZXZlbExpbmsnKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGRlcHRMZXZlbHMuYXBwZW5kQ2hpbGQobGV2ZWxMaW5rKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBkZXB0VGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgZGVwdFRpcC5jbGFzc0xpc3QuYWRkKCd0aXAnKTtcclxuICAgIGRlcHRUaXAudGV4dENvbnRlbnQgPSBgIEVMQSBUaXBzOiAgJHt0aXB9YDtcclxuXHJcblxyXG4gICAgZGV0YWlscy5hcHBlbmRDaGlsZChkZXB0RGVzY3JpcHRpb24pO1xyXG4gICAgZGV0YWlscy5hcHBlbmRDaGlsZChkZXB0VGltZSk7XHJcbiAgICBkZXRhaWxzLmFwcGVuZENoaWxkKGRlcHRUaXApO1xyXG4gICAgZGV0YWlscy5hcHBlbmRDaGlsZChkZXB0TGV2ZWxzKTtcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGVwdFRpdGxlKTtcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGV0YWlscyk7XHJcblxyXG4gICAgcmV0dXJuIGNhcmQ7XHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IHtjcmVhdGVEZXB0Q2FyZH0iLCJpbXBvcnQge3JlbmRlckhlYWRlcn0gZnJvbSAnLi9tb2R1bGVzL2hlYWRlci5qcyc7XHJcbmltcG9ydCB7cmVuZGVyRm9vdGVyfSBmcm9tICcuL21vZHVsZXMvZm9vdGVyJztcclxuaW1wb3J0ICcuLi9DU1Mvc3R5bGUuY3NzJztcclxuaW1wb3J0ICcuLi9DU1MvcmVwb3J0LmNzcyc7XHJcbmltcG9ydCB7IGNyZWF0ZURlcHRDYXJkIH0gZnJvbSAnLi9tb2R1bGVzL3JlcG9ydC5qcyc7XHJcbmltcG9ydCB7IGNyZWF0ZU1vZGFsLCBPcGVuTW9kYWwsIENsb3NlTW9kYWwgfSBmcm9tICcuL21vZHVsZXMvbW9kYWwuanMnO1xyXG5cclxuaW1wb3J0IHJlcG9ydEltZyBmcm9tICcuLi9SRVNPVVJDRVMvaW1hZ2VzL2xhYnJlcC5wbmcnXHJcbi8vaW1wb3J0IGltYWdlcyBmb3IgdGhlIGRlcGFydG1lbnRhbCBjYXJkc1xyXG5pbXBvcnQgSW1nQ1BFIGZyb20gJy4uL1JFU09VUkNFUy9pbWFnZXMvZGVwdF9jcGUucG5nJztcclxuaW1wb3J0IEltZ01FRSBmcm9tICcuLi9SRVNPVVJDRVMvaW1hZ2VzL2RlcHRfbWVlLnBuZyc7XHJcbmltcG9ydCBJbWdQUkUgZnJvbSAnLi4vUkVTT1VSQ0VTL2ltYWdlcy9kZXB0X3ByZS5wbmcnO1xyXG5pbXBvcnQgSW1nRUVFIGZyb20gJy4uL1JFU09VUkNFUy9pbWFnZXMvZGVwdF9lZWUucG5nJztcclxuXHJcbmNvbnN0IGhtZSA9IFwiLi4vaW5kZXguaHRtbFwiO1xyXG5jb25zdCBycHQgPSBcIi4vcmVwb3J0Lmh0bWxcIjtcclxuY29uc3QgYWJ0ID0gXCIuLi9hYm91dC9hYm91dC5odG1sXCI7XHJcblxyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG5yZW5kZXJIZWFkZXIoYm9keSwgW2htZSwgcnB0LCBhYnRdKTtcclxuY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG53cmFwcGVyLmlkID0gJ3dyYXBwZXInO1xyXG5ib2R5LmFwcGVuZCh3cmFwcGVyKTtcclxuY3JlYXRlTW9kYWwoYm9keSlcclxuY29uc3Qgc2VjdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuc2VjdGlvbjEuaWQgPSAnc2VjdGlvbjEnO1xyXG53cmFwcGVyLmFwcGVuZChzZWN0aW9uMSk7XHJcbmNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG50ZXh0LmNsYXNzTGlzdC5hZGQoJ21haW5UZXh0Jylcclxud3JhcHBlci5hcHBlbmQodGV4dCk7XHJcbnRleHQuaW5uZXJIVE1MID0gJ0Jyb3dzZSBBdmFpbGFibGUnO1xyXG5jb25zdCB0ZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbnRleHQyLmNsYXNzTGlzdC5hZGQoJ21haW5UZXh0MicpXHJcbndyYXBwZXIuYXBwZW5kKHRleHQyKTtcclxudGV4dDIuaW5uZXJIVE1MID0gJ1JlcG9ydHMnO1xyXG5jb25zdCByZXBvcnRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG5yZXBvcnRJbWFnZS5zcmMgPSByZXBvcnRJbWc7XHJcbnJlcG9ydEltYWdlLmFsdCA9ICdyZXBvcnRpbWcnXHJcbmNvbnN0IGNwZURlcHQgPSBjcmVhdGVEZXB0Q2FyZChJbWdDUEUsJ0NPTVBVVEVSIEVOR0lORUVSSU5HJywnQmV5b25kIHRoZW9yZXRpY2FsIGtub3dsZWRnZSwgdGhlIGNvbXB1dGVyIGVuZ2luZWVyaW5nIGxhYm9yYXRvcnkgaXMgdGhlIGNvcm5lcnN0b25lIG9mIHByYWN0aWNhbCBsZWFybmluZyBpbiB0aGUgZmllbGQuIFRoaXMgc3BlY2lhbGl6ZWQgc3BhY2UgaHVtcyB3aXRoIGFjdGl2aXR5LCBlcXVpcHBlZCB3aXRoIGhpZ2gtcGVyZm9ybWFuY2UgY29tcHV0ZXJzLCBzcGVjaWFsaXplZCBzb2Z0d2FyZSwgYW5kIGVsZWN0cm9uaWMgY29tcG9uZW50cy4gSGVyZSwgc3R1ZGVudHMgYnJpZGdlIHRoZSBnYXAgYmV0d2VlbiB0aGVvcnkgYW5kIGFwcGxpY2F0aW9uLCBidWlsZGluZyBjaXJjdWl0cywgcHJvZ3JhbW1pbmcgbWljcm9jb250cm9sbGVycywgYW5kIHRlc3RpbmcgaGFyZHdhcmUgZnVuY3Rpb25hbGl0aWVzLiBFeHBlcmltZW50cyBpbiBuZXR3b3JraW5nLCBkaWdpdGFsIGxvZ2ljIGRlc2lnbiwgYW5kIGNvbXB1dGVyIGFyY2hpdGVjdHVyZSBzb2xpZGlmeSBjbGFzc3Jvb20gY29uY2VwdHMsIGZvc3RlcmluZyBhIGRlZXBlciB1bmRlcnN0YW5kaW5nIG9mIGhvdyBjb21wdXRlcnMgb3BlcmF0ZSBhdCB0aGVpciBjb3JlLiBUaGUgbGFiIGZvc3RlcnMgY29sbGFib3JhdGlvbiwgYXMgc3R1ZGVudHMgdGFja2xlIHByb2plY3RzIHRvZ2V0aGVyLCB0cm91Ymxlc2hvb3RpbmcgY2hhbGxlbmdlcyBhbmQgcmVmaW5pbmcgdGhlaXIgcHJvYmxlbS1zb2x2aW5nIHNraWxscy4gVGhpcyBoYW5kcy1vbiBlbnZpcm9ubWVudCBlbXBvd2VycyBmdXR1cmUgY29tcHV0ZXIgZW5naW5lZXJzLCBzaGFwaW5nIHRoZW0gaW50byBpbm5vdmF0b3JzIHdobyBjYW4gZGVzaWduIGFuZCBidWlsZCB0aGUgdGVjaG5vbG9naWNhbCBhZHZhbmNlbWVudHMgb2YgdG9tb3Jyb3cuJywnVE8gQkUgREVDSURFRCggVXN1YWxseSAxIHdlZWsgYWZ0ZXIgZXhwZXJpbWVudCknLFszMDAsIDQwMF0sICdCZSB0aGVyZSA1bWlucyBiZWZvcmUgdGhlIHRpbWUsIEVuc3VyZSB0byB1bmRlcnN0YW5kIHRoZSBiYXNpYyBjb25jZXB0JywnY3BlL2NwZScpO1xyXG5jb25zdCBtZWVEZXB0ID0gY3JlYXRlRGVwdENhcmQoSW1nTUVFLCdNRUNIQU5JQ0FMIEVOR0lORUVSSU5HJywnQmV5b25kIHRoZSB0aGVvcmV0aWNhbCByZWFsbSwgdGhlIG1lY2hhbmljYWwgZW5naW5lZXJpbmcgbGFib3JhdG9yeSBodW1zIHdpdGggdGhlIHdoaXIgb2YgbWFjaGluZXJ5IGFuZCB0aGUgY2xpbmsgb2YgdG9vbHMuIFRoaXMgc3BhY2UgaXMgYSBwbGF5Z3JvdW5kIGZvciBpbm5vdmF0aW9uLCBmaWxsZWQgd2l0aCBsYXRoZXMsIG1pbGxzLCAzRCBwcmludGVycywgYW5kIHRlc3RpbmcgZXF1aXBtZW50LiBIZXJlLCBzdHVkZW50cyB0cmFuc2Zvcm0gYWJzdHJhY3QgY29uY2VwdHMgaW50byB0YW5naWJsZSByZWFsaXRpZXMuIFRoZXkgZGVzaWduIGFuZCBidWlsZCBtZWNoYW5pc21zLCBhbmFseXplIG1hdGVyaWFsIHByb3BlcnRpZXMsIGFuZCB0ZXN0IHRoZSBzdHJlbmd0aCBvZiBzdHJ1Y3R1cmVzLiBFeHBlcmltZW50cyBpbiB0aGVybW9keW5hbWljcywgZmx1aWQgbWVjaGFuaWNzLCBhbmQgcm9ib3RpY3MgYnJpZGdlIHRoZSBnYXAgYmV0d2VlbiB0aGVvcnkgYW5kIGFwcGxpY2F0aW9uLCBzb2xpZGlmeWluZyBrbm93bGVkZ2UgYW5kIGZvc3RlcmluZyBwcm9ibGVtLXNvbHZpbmcgc2tpbGxzLiBUaGUgbGFiIGZvc3RlcnMgY29sbGFib3JhdGlvbiwgYXMgc3R1ZGVudHMgd29yayB0b2dldGhlciBvbiBwcm9qZWN0cywgdHJvdWJsZXNob290aW5nIGNoYWxsZW5nZXMgYW5kIHJlZmluaW5nIHRoZWlyIGRlc2lnbnMuIFRoaXMgaGFuZHMtb24gZW52aXJvbm1lbnQgZW1wb3dlcnMgZnV0dXJlIG1lY2hhbmljYWwgZW5naW5lZXJzLCBlcXVpcHBpbmcgdGhlbSB3aXRoIHRoZSBwcmFjdGljYWwgc2tpbGxzIHRvIGJ1aWxkIHRoZSBtYWNoaW5lcyBhbmQgc3RydWN0dXJlcyB0aGF0IHNoYXBlIG91ciB3b3JsZCcsJzRwbSBzYW1lIGRheScsWzIwMF0sICdCZSB0aGVyZSA1bWlucyBiZWZvcmUgdGhlIHRpbWUsIERyZXNzIEFwcHJvcHJpYXRlbHknLCdtZWUvbWVlJyk7XHJcbmNvbnN0IGVlZURlcHQgPSBjcmVhdGVEZXB0Q2FyZChJbWdFRUUsJ0VMRUNUUklDQUwgRU5HSU5FRVJJTkcnLCdUaGUgZWxlY3RyaWNhbCBlbmdpbmVlcmluZyBsYWIgaXMgYSB2aWJyYW50IGh1YiB3aGVyZSB0aGVvcnkgbWVldHMgdGFuZ2libGUgcmVzdWx0cy4gVGhpcyBzcGFjZSBodW1zIHdpdGggdGhlIGVuZXJneSBvZiBleHBlcmltZW50cywgZmlsbGVkIHdpdGggb3NjaWxsb3Njb3BlcywgcG93ZXIgc3VwcGxpZXMsIGFuZCBpbnRyaWNhdGUgY2lyY3VpdHMuIEhlcmUsIHN0dWRlbnRzIGJyaWRnZSB0aGUgZ2FwIGJldHdlZW4gdGhlb3JldGljYWwgY29uY2VwdHMgYW5kIHByYWN0aWNhbCBhcHBsaWNhdGlvbnMuIFRoZXkgYW5hbHl6ZSBlbGVjdHJpY2FsIHBoZW5vbWVuYSwgZGVzaWduIGNpcmN1aXRzLCBhbmQgYnVpbGQgZWxlY3Ryb25pYyBkZXZpY2VzLCB0ZXN0aW5nIHRoZWlyIGZ1bmN0aW9uYWxpdHkgaW4gcmVhbC10aW1lLiBFeHBlcmltZW50cyBpbiBlbGVjdHJvbWFnbmV0aXNtLCBwb3dlciBzeXN0ZW1zLCBhbmQgY29udHJvbCBzeXN0ZW1zIHNvbGlkaWZ5IGNsYXNzcm9vbSBrbm93bGVkZ2UsIGZvc3RlcmluZyBhIGRlZXBlciB1bmRlcnN0YW5kaW5nIG9mIGhvdyBlbGVjdHJpY2l0eSBiZWhhdmVzIGFuZCBwb3dlcnMgb3VyIHdvcmxkLiBUaGUgbGFiIGZvc3RlcnMgY29sbGFib3JhdGlvbiwgYXMgc3R1ZGVudHMgd29yayB0b2dldGhlciBvbiBwcm9qZWN0cywgdHJvdWJsZXNob290aW5nIGNoYWxsZW5nZXMgYW5kIHJlZmluaW5nIHRoZWlyIGRlc2lnbnMuIFRoaXMgaGFuZHMtb24gZW52aXJvbm1lbnQgZW1wb3dlcnMgZnV0dXJlIGVsZWN0cmljYWwgZW5naW5lZXJzLCBlcXVpcHBpbmcgdGhlbSB3aXRoIHRoZSBwcmFjdGljYWwgc2tpbGxzIHRvIGRlc2lnbiBhbmQgYnVpbGQgdGhlIHRlY2hub2xvZ2ljYWwgYWR2YW5jZW1lbnRzIHRoYXQgcG93ZXIgb3VyIGxpdmVzLicsJzEwQU0gTmV4dCBkYXknLFsyMDAsIDMwMF0sICdCZSB0aGVyZSA1bWlucyBiZWZvcmUgdGhlIHRpbWUsIERyZXNzIEFwcHJvcHJpYXRlbHksIExpc3RlbiBhdHRlbnRpdmVseSBhbmQgZW5zdXJlIEFjdGl2ZSBQYXJ0aWNpcGF0aW9uJywnZWVlL2VlZScpO1xyXG5jb25zdCBwcmVEZXB0ID0gY3JlYXRlRGVwdENhcmQoSW1nUFJFLCdQUk9EVUNUSU9OIEVOR0lORUVSSU5HJywnVGhlIHByb2R1Y3Rpb24gZW5naW5lZXJpbmcgbGFiIGlzIGEgZHluYW1pYyBzcGFjZSB3aGVyZSB0aGVvcnkgaXMgdHJhbnNmb3JtZWQgaW50byBvcHRpbWl6ZWQgbWFudWZhY3R1cmluZyBwcm9jZXNzZXMuIFRoaXMgaGFuZHMtb24gZW52aXJvbm1lbnQgaHVtcyB3aXRoIHRoZSBhY3Rpdml0eSBvZiBtYWNoaW5lcnkgYW5kIHRoZSBtZXRob2RpY2FsIHBsYW5uaW5nIG9mIHByb2R1Y3Rpb24gbGluZXMuIFN0dWRlbnRzIGV4cGVyaW1lbnQgd2l0aCB2YXJpb3VzIG1hbnVmYWN0dXJpbmcgdGVjaG5pcXVlcywgaW5jbHVkaW5nIG1hY2hpbmluZywgd2VsZGluZywgYXNzZW1ibHksIGFuZCBxdWFsaXR5IGNvbnRyb2wgcHJvY2VkdXJlcy4gVGhleSBhbmFseXplIHByb2R1Y3Rpb24gZGF0YSwgb3B0aW1pemUgd29ya2Zsb3dzLCBhbmQgYXBwbHkgbGVhbiBtYW51ZmFjdHVyaW5nIHByaW5jaXBsZXMgdG8gYWNoaWV2ZSBlZmZpY2llbmN5LiBFeHBlcmltZW50cyBpbiBhdXRvbWF0aW9uLCByb2JvdGljcywgYW5kIGNvbXB1dGVyLWFpZGVkIG1hbnVmYWN0dXJpbmcgc29saWRpZnkgY2xhc3Nyb29tIGtub3dsZWRnZSwgZm9zdGVyaW5nIGEgZGVlcGVyIHVuZGVyc3RhbmRpbmcgb2YgaG93IHByb2R1Y3RzIGFyZSBjcmVhdGVkIGF0IHNjYWxlLiBUaGUgbGFiIGZvc3RlcnMgY29sbGFib3JhdGlvbiwgYXMgc3R1ZGVudHMgd29yayB0b2dldGhlciBvbiBwcm9qZWN0cywgc2ltdWxhdGluZyByZWFsLXdvcmxkIHByb2R1Y3Rpb24gc2NlbmFyaW9zIGFuZCByZWZpbmluZyB0aGVpciBwcm9ibGVtLXNvbHZpbmcgc2tpbGxzLiBUaGlzIGhhbmRzLW9uIGVudmlyb25tZW50IGVtcG93ZXJzIGZ1dHVyZSBwcm9kdWN0aW9uIGVuZ2luZWVycywgZXF1aXBwaW5nIHRoZW0gd2l0aCB0aGUgcHJhY3RpY2FsIGtub3dsZWRnZSB0byBkZXNpZ24sIGltcGxlbWVudCwgYW5kIG9wdGltaXplIGVmZmljaWVudCBtYW51ZmFjdHVyaW5nIHN5c3RlbXMgdGhhdCBkcml2ZSBwcm9kdWN0aXZpdHkgYW5kIGlubm92YXRpb24nLCdUTyBCRSBERUNJREVEIGR1cmluZyBFeHBlcmltZW50JyxbMjAwXSwgJ0RyZXNzIEFwcHJvcHJpYXRlbHksIGVuc3VyZSBBY3RpdmUgUGFydGljaXBhdGlvbicsJ3ByZS9wcmUnKTtcclxud3JhcHBlci5hcHBlbmRDaGlsZChjcGVEZXB0KTtcclxud3JhcHBlci5hcHBlbmRDaGlsZChlZWVEZXB0KTtcclxud3JhcHBlci5hcHBlbmRDaGlsZChtZWVEZXB0KTtcclxud3JhcHBlci5hcHBlbmRDaGlsZChwcmVEZXB0KTtcclxucmVuZGVyRm9vdGVyKGJvZHksIFtobWUsIHJwdCwgYWJ0XSk7XHJcbmZ1bmN0aW9uIGNoZWNrTG9jYWxTdG9yYWdlKCl7XHJcbiAgICBpZighbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1N1YnNjcmliZWQnKSl7XHJcbiAgICAgICAgT3Blbk1vZGFsKCk7XHJcbiAgICB9IFxyXG4gICAgZWxzZXtcclxuICAgICAgICBDbG9zZU1vZGFsKCk7XHJcbiAgICB9XHJcbn1cclxud2luZG93Lm9ubG9hZCA9IGNoZWNrTG9jYWxTdG9yYWdlOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==