"use strict";
(self["webpackChunkelaborate"] = self["webpackChunkelaborate"] || []).push([["report/report"],{

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
    deptTime.textContent = `Submision Deadline: ${time}`;

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
/* harmony import */ var _RESOURCES_images_reportpage_labrep_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../RESOURCES/images/reportpage/labrep.png */ "./src/RESOURCES/images/reportpage/labrep.png");
/* harmony import */ var _RESOURCES_images_reportpage_dept_cpe_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../RESOURCES/images/reportpage/dept_cpe.png */ "./src/RESOURCES/images/reportpage/dept_cpe.png");
/* harmony import */ var _RESOURCES_images_reportpage_dept_mee_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../RESOURCES/images/reportpage/dept_mee.png */ "./src/RESOURCES/images/reportpage/dept_mee.png");
/* harmony import */ var _RESOURCES_images_reportpage_dept_pre_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../RESOURCES/images/reportpage/dept_pre.png */ "./src/RESOURCES/images/reportpage/dept_pre.png");
/* harmony import */ var _RESOURCES_images_reportpage_dept_eee_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../RESOURCES/images/reportpage/dept_eee.png */ "./src/RESOURCES/images/reportpage/dept_eee.png");








//import images for the departmental cards




const body = document.querySelector('body');
(0,_modules_header_js__WEBPACK_IMPORTED_MODULE_0__.renderHeader)(body);
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
reportImage.src = _RESOURCES_images_reportpage_labrep_png__WEBPACK_IMPORTED_MODULE_6__;
reportImage.alt = 'reportimg'
const cpeDept = (0,_modules_report_js__WEBPACK_IMPORTED_MODULE_4__.createDeptCard)(_RESOURCES_images_reportpage_dept_cpe_png__WEBPACK_IMPORTED_MODULE_7__,'COMPUTER ENGINEERING','Beyond theoretical knowledge, the computer engineering laboratory is the cornerstone of practical learning in the field. This specialized space hums with activity, equipped with high-performance computers, specialized software, and electronic components. Here, students bridge the gap between theory and application, building circuits, programming microcontrollers, and testing hardware functionalities. Experiments in networking, digital logic design, and computer architecture solidify classroom concepts, fostering a deeper understanding of how computers operate at their core. The lab fosters collaboration, as students tackle projects together, troubleshooting challenges and refining their problem-solving skills. This hands-on environment empowers future computer engineers, shaping them into innovators who can design and build the technological advancements of tomorrow.','TO BE DECIDED( Usually 1 week after experiment)',[300, 400], 'Be there 5mins before the time, Ensure to understand the basic concept','cpe');
const meeDept = (0,_modules_report_js__WEBPACK_IMPORTED_MODULE_4__.createDeptCard)(_RESOURCES_images_reportpage_dept_mee_png__WEBPACK_IMPORTED_MODULE_8__,'MECHANICAL ENGINEERING','Beyond the theoretical realm, the mechanical engineering laboratory hums with the whir of machinery and the clink of tools. This space is a playground for innovation, filled with lathes, mills, 3D printers, and testing equipment. Here, students transform abstract concepts into tangible realities. They design and build mechanisms, analyze material properties, and test the strength of structures. Experiments in thermodynamics, fluid mechanics, and robotics bridge the gap between theory and application, solidifying knowledge and fostering problem-solving skills. The lab fosters collaboration, as students work together on projects, troubleshooting challenges and refining their designs. This hands-on environment empowers future mechanical engineers, equipping them with the practical skills to build the machines and structures that shape our world','4pm same day',[200], 'Be there 5mins before the time, Dress Appropriately','mee');
const eeeDept = (0,_modules_report_js__WEBPACK_IMPORTED_MODULE_4__.createDeptCard)(_RESOURCES_images_reportpage_dept_eee_png__WEBPACK_IMPORTED_MODULE_10__,'ELECTRICAL ENGINEERING','The electrical engineering lab is a vibrant hub where theory meets tangible results. This space hums with the energy of experiments, filled with oscilloscopes, power supplies, and intricate circuits. Here, students bridge the gap between theoretical concepts and practical applications. They analyze electrical phenomena, design circuits, and build electronic devices, testing their functionality in real-time. Experiments in electromagnetism, power systems, and control systems solidify classroom knowledge, fostering a deeper understanding of how electricity behaves and powers our world. The lab fosters collaboration, as students work together on projects, troubleshooting challenges and refining their designs. This hands-on environment empowers future electrical engineers, equipping them with the practical skills to design and build the technological advancements that power our lives.','10AM Next day',[200, 300], 'Be there 5mins before the time, Dress Appropriately, Listen attentively and ensure Active Participation','eee');
const preDept = (0,_modules_report_js__WEBPACK_IMPORTED_MODULE_4__.createDeptCard)(_RESOURCES_images_reportpage_dept_pre_png__WEBPACK_IMPORTED_MODULE_9__,'PRODUCTION ENGINEERING','The production engineering lab is a dynamic space where theory is transformed into optimized manufacturing processes. This hands-on environment hums with the activity of machinery and the methodical planning of production lines. Students experiment with various manufacturing techniques, including machining, welding, assembly, and quality control procedures. They analyze production data, optimize workflows, and apply lean manufacturing principles to achieve efficiency. Experiments in automation, robotics, and computer-aided manufacturing solidify classroom knowledge, fostering a deeper understanding of how products are created at scale. The lab fosters collaboration, as students work together on projects, simulating real-world production scenarios and refining their problem-solving skills. This hands-on environment empowers future production engineers, equipping them with the practical knowledge to design, implement, and optimize efficient manufacturing systems that drive productivity and innovation','TO BE DECIDED during Experiment',[200], 'Dress Appropriately, ensure Active Participation','pre');
wrapper.appendChild(cpeDept);
wrapper.appendChild(eeeDept);
wrapper.appendChild(meeDept);
wrapper.appendChild(preDept);
(0,_modules_footer__WEBPACK_IMPORTED_MODULE_1__.renderFooter)(body);
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

/***/ "./src/RESOURCES/images/reportpage/dept_cpe.png":
/*!******************************************************!*\
  !*** ./src/RESOURCES/images/reportpage/dept_cpe.png ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/asset/images/319be09755f101e8ab7f.png";

/***/ }),

/***/ "./src/RESOURCES/images/reportpage/dept_eee.png":
/*!******************************************************!*\
  !*** ./src/RESOURCES/images/reportpage/dept_eee.png ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/asset/images/e0dfe5db36a25c00d4dd.png";

/***/ }),

/***/ "./src/RESOURCES/images/reportpage/dept_mee.png":
/*!******************************************************!*\
  !*** ./src/RESOURCES/images/reportpage/dept_mee.png ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/asset/images/0320e70b1866ddf255f7.png";

/***/ }),

/***/ "./src/RESOURCES/images/reportpage/dept_pre.png":
/*!******************************************************!*\
  !*** ./src/RESOURCES/images/reportpage/dept_pre.png ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "/asset/images/a3336edbfca541f2bf0e.png";

/***/ }),

/***/ "./src/RESOURCES/images/reportpage/labrep.png":
/*!****************************************************!*\
  !*** ./src/RESOURCES/images/reportpage/labrep.png ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "/asset/images/d495606c317c3752a89a.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["src_CSS_style_css-src_SCRIPTS_modules_footer_js-src_SCRIPTS_modules_header_js-src_SCRIPTS_mod-79364f"], () => (__webpack_exec__("./src/SCRIPTS/report.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0L3JlcG9ydC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQSxrREFBa0QsS0FBSzs7QUFFdkQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0MsY0FBYyxHQUFHLE1BQU07QUFDM0QsbUNBQW1DLE1BQU07QUFDekM7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSx5Q0FBeUMsSUFBSTs7O0FBRzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZpRDtBQUNIO0FBQ3BCO0FBQ0M7QUFDMEI7QUFDbUI7O0FBRVA7QUFDakU7QUFDaUU7QUFDQTtBQUNBO0FBQ0E7QUFDakU7QUFDQSxnRUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLDhEQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG9FQUFTO0FBQzNCO0FBQ0EsZ0JBQWdCLGtFQUFjLENBQUMsc0VBQU07QUFDckMsZ0JBQWdCLGtFQUFjLENBQUMsc0VBQU07QUFDckMsZ0JBQWdCLGtFQUFjLENBQUMsdUVBQU07QUFDckMsZ0JBQWdCLGtFQUFjLENBQUMsc0VBQU07QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBWTtBQUNaO0FBQ0E7QUFDQSxRQUFRLDREQUFTO0FBQ2pCO0FBQ0E7QUFDQSxRQUFRLDZEQUFVO0FBQ2xCO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VsYWJvcmF0ZS8uL3NyYy9TQ1JJUFRTL21vZHVsZXMvcmVwb3J0LmpzIiwid2VicGFjazovL2VsYWJvcmF0ZS8uL3NyYy9TQ1JJUFRTL3JlcG9ydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IGNyZWF0ZUxldmVsc0J1dHRvbnMgPSAobGV2ZWxzKT0+e1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdsZXZlbHNEaXYnKTtcblxufVxuXG5jb25zdCBjcmVhdGVEZXB0Q2FyZCA9KGltYWdlLCB0aXRsZSwgZGVzY3JpcHRpb24sIHRpbWUsIGxldmVscywgdGlwLCBkZXB0U2hvcnROYW1lKT0+IHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG5cblxuXG4gICAgLy90aXRsZVxuICAgIGNvbnN0IGRlcHRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgZGVwdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2RlcHRUaXRsZScpO1xuICAgIGRlcHRUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuXG4gICAgLy9pbWFnZVxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZy5jbGFzc0xpc3QuYWRkKCdkZXB0SW1hZ2UnKTtcbiAgICBpbWcuc3JjID0gaW1hZ2U7XG4gICAgXG4gICAgLy9mdWxsIGRldGFpbHNcbiAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKCdkZXRhaWxzJyk7XG5cblxuXG5cblxuICAgIC8vZGVzY3JpcHRpb25cblxuICAgIGNvbnN0IGRlcHREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkZXB0RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVwdERlc2NyaXB0aW9uJyk7XG4gICAgZGVwdERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG5cblxuICAgIC8vIFRpbWVcblxuICAgIGNvbnN0IGRlcHRUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRlcHRUaW1lLmNsYXNzTGlzdC5hZGQoJ2RlcHRUaW1lJyk7XG4gICAgZGVwdFRpbWUudGV4dENvbnRlbnQgPSBgU3VibWlzaW9uIERlYWRsaW5lOiAke3RpbWV9YDtcblxuICAgIC8vIExldmVsc1xuICAgIGNvbnN0IGRlcHRMZXZlbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXB0TGV2ZWxzLmNsYXNzTGlzdC5hZGQoJ2xldmVscycpO1xuXG4gICAgXG5cbiAgICBsZXZlbHMuZm9yRWFjaChsZXZlbCA9PiB7XG4gICAgICAgIGNvbnN0IGxldmVsTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgbGV2ZWxMaW5rLmhyZWYgPSBgL3JlcG9ydC8ke2RlcHRTaG9ydE5hbWV9LyR7bGV2ZWx9Lmh0bWxgO1xuICAgICAgICBsZXZlbExpbmsudGV4dENvbnRlbnQgPSBgJHtsZXZlbH1MIFJFUE9SVGA7XG4gICAgICAgIGxldmVsTGluay5jbGFzc0xpc3QuYWRkKCdsZXZlbExpbmsnKTtcblxuICAgICAgICBcbiAgICAgICAgXG5cbiAgICAgICAgZGVwdExldmVscy5hcHBlbmRDaGlsZChsZXZlbExpbmspO1xuXG4gICAgfSk7XG5cbiAgICBjb25zdCBkZXB0VGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRlcHRUaXAuY2xhc3NMaXN0LmFkZCgndGlwJyk7XG4gICAgZGVwdFRpcC50ZXh0Q29udGVudCA9IGAgRUxBIFRpcHM6ICAke3RpcH1gO1xuXG5cbiAgICBkZXRhaWxzLmFwcGVuZENoaWxkKGRlcHREZXNjcmlwdGlvbik7XG4gICAgZGV0YWlscy5hcHBlbmRDaGlsZChkZXB0VGltZSk7XG4gICAgZGV0YWlscy5hcHBlbmRDaGlsZChkZXB0VGlwKTtcbiAgICBkZXRhaWxzLmFwcGVuZENoaWxkKGRlcHRMZXZlbHMpO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGVwdFRpdGxlKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGltZyk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChkZXRhaWxzKTtcblxuICAgIHJldHVybiBjYXJkO1xuXG5cblxufVxuXG5cblxuZXhwb3J0IHtjcmVhdGVEZXB0Q2FyZH0iLCJpbXBvcnQge3JlbmRlckhlYWRlcn0gZnJvbSAnLi9tb2R1bGVzL2hlYWRlci5qcyc7XG5pbXBvcnQge3JlbmRlckZvb3Rlcn0gZnJvbSAnLi9tb2R1bGVzL2Zvb3Rlcic7XG5pbXBvcnQgJy4uL0NTUy9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuLi9DU1MvcmVwb3J0LmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVEZXB0Q2FyZCB9IGZyb20gJy4vbW9kdWxlcy9yZXBvcnQuanMnO1xuaW1wb3J0IHsgY3JlYXRlTW9kYWwsIE9wZW5Nb2RhbCwgQ2xvc2VNb2RhbCB9IGZyb20gJy4vbW9kdWxlcy9tb2RhbC5qcyc7XG5cbmltcG9ydCByZXBvcnRJbWcgZnJvbSAnLi4vUkVTT1VSQ0VTL2ltYWdlcy9yZXBvcnRwYWdlL2xhYnJlcC5wbmcnXG4vL2ltcG9ydCBpbWFnZXMgZm9yIHRoZSBkZXBhcnRtZW50YWwgY2FyZHNcbmltcG9ydCBJbWdDUEUgZnJvbSAnLi4vUkVTT1VSQ0VTL2ltYWdlcy9yZXBvcnRwYWdlL2RlcHRfY3BlLnBuZyc7XG5pbXBvcnQgSW1nTUVFIGZyb20gJy4uL1JFU09VUkNFUy9pbWFnZXMvcmVwb3J0cGFnZS9kZXB0X21lZS5wbmcnO1xuaW1wb3J0IEltZ1BSRSBmcm9tICcuLi9SRVNPVVJDRVMvaW1hZ2VzL3JlcG9ydHBhZ2UvZGVwdF9wcmUucG5nJztcbmltcG9ydCBJbWdFRUUgZnJvbSAnLi4vUkVTT1VSQ0VTL2ltYWdlcy9yZXBvcnRwYWdlL2RlcHRfZWVlLnBuZyc7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xucmVuZGVySGVhZGVyKGJvZHkpO1xuY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xud3JhcHBlci5pZCA9ICd3cmFwcGVyJztcbmJvZHkuYXBwZW5kKHdyYXBwZXIpO1xuY3JlYXRlTW9kYWwoYm9keSlcbmNvbnN0IHNlY3Rpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zZWN0aW9uMS5pZCA9ICdzZWN0aW9uMSc7XG53cmFwcGVyLmFwcGVuZChzZWN0aW9uMSk7XG5jb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbnRleHQuY2xhc3NMaXN0LmFkZCgnbWFpblRleHQnKVxud3JhcHBlci5hcHBlbmQodGV4dCk7XG50ZXh0LmlubmVySFRNTCA9ICdCcm93c2UgQXZhaWxhYmxlJztcbmNvbnN0IHRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbnRleHQyLmNsYXNzTGlzdC5hZGQoJ21haW5UZXh0MicpXG53cmFwcGVyLmFwcGVuZCh0ZXh0Mik7XG50ZXh0Mi5pbm5lckhUTUwgPSAnUmVwb3J0cyc7XG5jb25zdCByZXBvcnRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xucmVwb3J0SW1hZ2Uuc3JjID0gcmVwb3J0SW1nO1xucmVwb3J0SW1hZ2UuYWx0ID0gJ3JlcG9ydGltZydcbmNvbnN0IGNwZURlcHQgPSBjcmVhdGVEZXB0Q2FyZChJbWdDUEUsJ0NPTVBVVEVSIEVOR0lORUVSSU5HJywnQmV5b25kIHRoZW9yZXRpY2FsIGtub3dsZWRnZSwgdGhlIGNvbXB1dGVyIGVuZ2luZWVyaW5nIGxhYm9yYXRvcnkgaXMgdGhlIGNvcm5lcnN0b25lIG9mIHByYWN0aWNhbCBsZWFybmluZyBpbiB0aGUgZmllbGQuIFRoaXMgc3BlY2lhbGl6ZWQgc3BhY2UgaHVtcyB3aXRoIGFjdGl2aXR5LCBlcXVpcHBlZCB3aXRoIGhpZ2gtcGVyZm9ybWFuY2UgY29tcHV0ZXJzLCBzcGVjaWFsaXplZCBzb2Z0d2FyZSwgYW5kIGVsZWN0cm9uaWMgY29tcG9uZW50cy4gSGVyZSwgc3R1ZGVudHMgYnJpZGdlIHRoZSBnYXAgYmV0d2VlbiB0aGVvcnkgYW5kIGFwcGxpY2F0aW9uLCBidWlsZGluZyBjaXJjdWl0cywgcHJvZ3JhbW1pbmcgbWljcm9jb250cm9sbGVycywgYW5kIHRlc3RpbmcgaGFyZHdhcmUgZnVuY3Rpb25hbGl0aWVzLiBFeHBlcmltZW50cyBpbiBuZXR3b3JraW5nLCBkaWdpdGFsIGxvZ2ljIGRlc2lnbiwgYW5kIGNvbXB1dGVyIGFyY2hpdGVjdHVyZSBzb2xpZGlmeSBjbGFzc3Jvb20gY29uY2VwdHMsIGZvc3RlcmluZyBhIGRlZXBlciB1bmRlcnN0YW5kaW5nIG9mIGhvdyBjb21wdXRlcnMgb3BlcmF0ZSBhdCB0aGVpciBjb3JlLiBUaGUgbGFiIGZvc3RlcnMgY29sbGFib3JhdGlvbiwgYXMgc3R1ZGVudHMgdGFja2xlIHByb2plY3RzIHRvZ2V0aGVyLCB0cm91Ymxlc2hvb3RpbmcgY2hhbGxlbmdlcyBhbmQgcmVmaW5pbmcgdGhlaXIgcHJvYmxlbS1zb2x2aW5nIHNraWxscy4gVGhpcyBoYW5kcy1vbiBlbnZpcm9ubWVudCBlbXBvd2VycyBmdXR1cmUgY29tcHV0ZXIgZW5naW5lZXJzLCBzaGFwaW5nIHRoZW0gaW50byBpbm5vdmF0b3JzIHdobyBjYW4gZGVzaWduIGFuZCBidWlsZCB0aGUgdGVjaG5vbG9naWNhbCBhZHZhbmNlbWVudHMgb2YgdG9tb3Jyb3cuJywnVE8gQkUgREVDSURFRCggVXN1YWxseSAxIHdlZWsgYWZ0ZXIgZXhwZXJpbWVudCknLFszMDAsIDQwMF0sICdCZSB0aGVyZSA1bWlucyBiZWZvcmUgdGhlIHRpbWUsIEVuc3VyZSB0byB1bmRlcnN0YW5kIHRoZSBiYXNpYyBjb25jZXB0JywnY3BlJyk7XG5jb25zdCBtZWVEZXB0ID0gY3JlYXRlRGVwdENhcmQoSW1nTUVFLCdNRUNIQU5JQ0FMIEVOR0lORUVSSU5HJywnQmV5b25kIHRoZSB0aGVvcmV0aWNhbCByZWFsbSwgdGhlIG1lY2hhbmljYWwgZW5naW5lZXJpbmcgbGFib3JhdG9yeSBodW1zIHdpdGggdGhlIHdoaXIgb2YgbWFjaGluZXJ5IGFuZCB0aGUgY2xpbmsgb2YgdG9vbHMuIFRoaXMgc3BhY2UgaXMgYSBwbGF5Z3JvdW5kIGZvciBpbm5vdmF0aW9uLCBmaWxsZWQgd2l0aCBsYXRoZXMsIG1pbGxzLCAzRCBwcmludGVycywgYW5kIHRlc3RpbmcgZXF1aXBtZW50LiBIZXJlLCBzdHVkZW50cyB0cmFuc2Zvcm0gYWJzdHJhY3QgY29uY2VwdHMgaW50byB0YW5naWJsZSByZWFsaXRpZXMuIFRoZXkgZGVzaWduIGFuZCBidWlsZCBtZWNoYW5pc21zLCBhbmFseXplIG1hdGVyaWFsIHByb3BlcnRpZXMsIGFuZCB0ZXN0IHRoZSBzdHJlbmd0aCBvZiBzdHJ1Y3R1cmVzLiBFeHBlcmltZW50cyBpbiB0aGVybW9keW5hbWljcywgZmx1aWQgbWVjaGFuaWNzLCBhbmQgcm9ib3RpY3MgYnJpZGdlIHRoZSBnYXAgYmV0d2VlbiB0aGVvcnkgYW5kIGFwcGxpY2F0aW9uLCBzb2xpZGlmeWluZyBrbm93bGVkZ2UgYW5kIGZvc3RlcmluZyBwcm9ibGVtLXNvbHZpbmcgc2tpbGxzLiBUaGUgbGFiIGZvc3RlcnMgY29sbGFib3JhdGlvbiwgYXMgc3R1ZGVudHMgd29yayB0b2dldGhlciBvbiBwcm9qZWN0cywgdHJvdWJsZXNob290aW5nIGNoYWxsZW5nZXMgYW5kIHJlZmluaW5nIHRoZWlyIGRlc2lnbnMuIFRoaXMgaGFuZHMtb24gZW52aXJvbm1lbnQgZW1wb3dlcnMgZnV0dXJlIG1lY2hhbmljYWwgZW5naW5lZXJzLCBlcXVpcHBpbmcgdGhlbSB3aXRoIHRoZSBwcmFjdGljYWwgc2tpbGxzIHRvIGJ1aWxkIHRoZSBtYWNoaW5lcyBhbmQgc3RydWN0dXJlcyB0aGF0IHNoYXBlIG91ciB3b3JsZCcsJzRwbSBzYW1lIGRheScsWzIwMF0sICdCZSB0aGVyZSA1bWlucyBiZWZvcmUgdGhlIHRpbWUsIERyZXNzIEFwcHJvcHJpYXRlbHknLCdtZWUnKTtcbmNvbnN0IGVlZURlcHQgPSBjcmVhdGVEZXB0Q2FyZChJbWdFRUUsJ0VMRUNUUklDQUwgRU5HSU5FRVJJTkcnLCdUaGUgZWxlY3RyaWNhbCBlbmdpbmVlcmluZyBsYWIgaXMgYSB2aWJyYW50IGh1YiB3aGVyZSB0aGVvcnkgbWVldHMgdGFuZ2libGUgcmVzdWx0cy4gVGhpcyBzcGFjZSBodW1zIHdpdGggdGhlIGVuZXJneSBvZiBleHBlcmltZW50cywgZmlsbGVkIHdpdGggb3NjaWxsb3Njb3BlcywgcG93ZXIgc3VwcGxpZXMsIGFuZCBpbnRyaWNhdGUgY2lyY3VpdHMuIEhlcmUsIHN0dWRlbnRzIGJyaWRnZSB0aGUgZ2FwIGJldHdlZW4gdGhlb3JldGljYWwgY29uY2VwdHMgYW5kIHByYWN0aWNhbCBhcHBsaWNhdGlvbnMuIFRoZXkgYW5hbHl6ZSBlbGVjdHJpY2FsIHBoZW5vbWVuYSwgZGVzaWduIGNpcmN1aXRzLCBhbmQgYnVpbGQgZWxlY3Ryb25pYyBkZXZpY2VzLCB0ZXN0aW5nIHRoZWlyIGZ1bmN0aW9uYWxpdHkgaW4gcmVhbC10aW1lLiBFeHBlcmltZW50cyBpbiBlbGVjdHJvbWFnbmV0aXNtLCBwb3dlciBzeXN0ZW1zLCBhbmQgY29udHJvbCBzeXN0ZW1zIHNvbGlkaWZ5IGNsYXNzcm9vbSBrbm93bGVkZ2UsIGZvc3RlcmluZyBhIGRlZXBlciB1bmRlcnN0YW5kaW5nIG9mIGhvdyBlbGVjdHJpY2l0eSBiZWhhdmVzIGFuZCBwb3dlcnMgb3VyIHdvcmxkLiBUaGUgbGFiIGZvc3RlcnMgY29sbGFib3JhdGlvbiwgYXMgc3R1ZGVudHMgd29yayB0b2dldGhlciBvbiBwcm9qZWN0cywgdHJvdWJsZXNob290aW5nIGNoYWxsZW5nZXMgYW5kIHJlZmluaW5nIHRoZWlyIGRlc2lnbnMuIFRoaXMgaGFuZHMtb24gZW52aXJvbm1lbnQgZW1wb3dlcnMgZnV0dXJlIGVsZWN0cmljYWwgZW5naW5lZXJzLCBlcXVpcHBpbmcgdGhlbSB3aXRoIHRoZSBwcmFjdGljYWwgc2tpbGxzIHRvIGRlc2lnbiBhbmQgYnVpbGQgdGhlIHRlY2hub2xvZ2ljYWwgYWR2YW5jZW1lbnRzIHRoYXQgcG93ZXIgb3VyIGxpdmVzLicsJzEwQU0gTmV4dCBkYXknLFsyMDAsIDMwMF0sICdCZSB0aGVyZSA1bWlucyBiZWZvcmUgdGhlIHRpbWUsIERyZXNzIEFwcHJvcHJpYXRlbHksIExpc3RlbiBhdHRlbnRpdmVseSBhbmQgZW5zdXJlIEFjdGl2ZSBQYXJ0aWNpcGF0aW9uJywnZWVlJyk7XG5jb25zdCBwcmVEZXB0ID0gY3JlYXRlRGVwdENhcmQoSW1nUFJFLCdQUk9EVUNUSU9OIEVOR0lORUVSSU5HJywnVGhlIHByb2R1Y3Rpb24gZW5naW5lZXJpbmcgbGFiIGlzIGEgZHluYW1pYyBzcGFjZSB3aGVyZSB0aGVvcnkgaXMgdHJhbnNmb3JtZWQgaW50byBvcHRpbWl6ZWQgbWFudWZhY3R1cmluZyBwcm9jZXNzZXMuIFRoaXMgaGFuZHMtb24gZW52aXJvbm1lbnQgaHVtcyB3aXRoIHRoZSBhY3Rpdml0eSBvZiBtYWNoaW5lcnkgYW5kIHRoZSBtZXRob2RpY2FsIHBsYW5uaW5nIG9mIHByb2R1Y3Rpb24gbGluZXMuIFN0dWRlbnRzIGV4cGVyaW1lbnQgd2l0aCB2YXJpb3VzIG1hbnVmYWN0dXJpbmcgdGVjaG5pcXVlcywgaW5jbHVkaW5nIG1hY2hpbmluZywgd2VsZGluZywgYXNzZW1ibHksIGFuZCBxdWFsaXR5IGNvbnRyb2wgcHJvY2VkdXJlcy4gVGhleSBhbmFseXplIHByb2R1Y3Rpb24gZGF0YSwgb3B0aW1pemUgd29ya2Zsb3dzLCBhbmQgYXBwbHkgbGVhbiBtYW51ZmFjdHVyaW5nIHByaW5jaXBsZXMgdG8gYWNoaWV2ZSBlZmZpY2llbmN5LiBFeHBlcmltZW50cyBpbiBhdXRvbWF0aW9uLCByb2JvdGljcywgYW5kIGNvbXB1dGVyLWFpZGVkIG1hbnVmYWN0dXJpbmcgc29saWRpZnkgY2xhc3Nyb29tIGtub3dsZWRnZSwgZm9zdGVyaW5nIGEgZGVlcGVyIHVuZGVyc3RhbmRpbmcgb2YgaG93IHByb2R1Y3RzIGFyZSBjcmVhdGVkIGF0IHNjYWxlLiBUaGUgbGFiIGZvc3RlcnMgY29sbGFib3JhdGlvbiwgYXMgc3R1ZGVudHMgd29yayB0b2dldGhlciBvbiBwcm9qZWN0cywgc2ltdWxhdGluZyByZWFsLXdvcmxkIHByb2R1Y3Rpb24gc2NlbmFyaW9zIGFuZCByZWZpbmluZyB0aGVpciBwcm9ibGVtLXNvbHZpbmcgc2tpbGxzLiBUaGlzIGhhbmRzLW9uIGVudmlyb25tZW50IGVtcG93ZXJzIGZ1dHVyZSBwcm9kdWN0aW9uIGVuZ2luZWVycywgZXF1aXBwaW5nIHRoZW0gd2l0aCB0aGUgcHJhY3RpY2FsIGtub3dsZWRnZSB0byBkZXNpZ24sIGltcGxlbWVudCwgYW5kIG9wdGltaXplIGVmZmljaWVudCBtYW51ZmFjdHVyaW5nIHN5c3RlbXMgdGhhdCBkcml2ZSBwcm9kdWN0aXZpdHkgYW5kIGlubm92YXRpb24nLCdUTyBCRSBERUNJREVEIGR1cmluZyBFeHBlcmltZW50JyxbMjAwXSwgJ0RyZXNzIEFwcHJvcHJpYXRlbHksIGVuc3VyZSBBY3RpdmUgUGFydGljaXBhdGlvbicsJ3ByZScpO1xud3JhcHBlci5hcHBlbmRDaGlsZChjcGVEZXB0KTtcbndyYXBwZXIuYXBwZW5kQ2hpbGQoZWVlRGVwdCk7XG53cmFwcGVyLmFwcGVuZENoaWxkKG1lZURlcHQpO1xud3JhcHBlci5hcHBlbmRDaGlsZChwcmVEZXB0KTtcbnJlbmRlckZvb3Rlcihib2R5KTtcbmZ1bmN0aW9uIGNoZWNrTG9jYWxTdG9yYWdlKCl7XG4gICAgaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdTdWJzY3JpYmVkJykpe1xuICAgICAgICBPcGVuTW9kYWwoKTtcbiAgICB9IFxuICAgIGVsc2V7XG4gICAgICAgIENsb3NlTW9kYWwoKTtcbiAgICB9XG59XG53aW5kb3cub25sb2FkID0gY2hlY2tMb2NhbFN0b3JhZ2U7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9