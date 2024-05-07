"use strict";
(self["webpackChunkelaborate"] = self["webpackChunkelaborate"] || []).push([["report/pre/pre"],{

/***/ "./src/CSS/pre.css":
/*!*************************!*\
  !*** ./src/CSS/pre.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/SCRIPTS/modules/preDisplay.js":
/*!*******************************************!*\
  !*** ./src/SCRIPTS/modules/preDisplay.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayAS201: () => (/* binding */ displayAS201),
/* harmony export */   displayBF201: () => (/* binding */ displayBF201),
/* harmony export */   displayFS201: () => (/* binding */ displayFS201),
/* harmony export */   displayHS201: () => (/* binding */ displayHS201),
/* harmony export */   displayMS201: () => (/* binding */ displayMS201),
/* harmony export */   displaySM201: () => (/* binding */ displaySM201),
/* harmony export */   displayStarted: () => (/* binding */ displayStarted),
/* harmony export */   displayWW201: () => (/* binding */ displayWW201)
/* harmony export */ });
const displayStarted = (main) => {
    alert('Who dey breathe');
    main = document.querySelector('main');
    main.innerHTML = '';
};
const displayWW201 = (main) => {

};
const displaySM201 = (main) => {

};
const displayBF201 = (main) => {

};
const displayHS201 = (main) => {

};
const displayMS201 = (main) => {

};
const displayAS201 = () => {
    const main = document.querySelector('main');
    main.innerHTML = '';
    const createDivs = (object) => {
        const div = document.createElement('div');
        const text = document.createElement('div');
        text.innerHTML = `<span>• ${object.title}:  ${object.text}`;
        div.appendChild(text);
        if(object.image !== ' '){
             const image = document.createElement('img');
              image.src = object.image;
              div.appendChild(image);
        }
        return div;
        }
        const head = document.createElement('h1');
        head.textContent  = 'The Internal Combustion Engine{AS201}';
        main.appendChild(head);
        const objective = document.createElement('section');
        const objHead = document.createElement('h2');
        objHead.textContent = 'OBJECTIVES';
        objective.appendChild(objHead);
        const objList = document.createElement('ul');
        const objectives = ['To know the major parts of an internal combustion engine and their functions.', 'To know the different classifications of the internal combustion engine',   'To be able to describe the working cycle of a four- stroke-cycle internal combustion spark ignition engine and compression ignition engine', 'To be able to diagnose simple internal combustion engine faults', 'To know how to change the engine oil of an internal combustion engine', 'To be able to identify the tools used to effect repairs on an internal combustion engine',  'To know the routine checks and routine maintenance carried out on an internal combustion engine'];
        let list = [];
        for(let i = 0; i < objectives.length; i++){
            list[i] = document.createElement('li');
            list[i].textContent = objectives[i];
            objList.appendChild(list[i]);
        }
        objective.appendChild(objList);
        main.appendChild(objective);
        const engineDiv = document.createElement('div');
        const engineHead = document.createElement('h3');
        engineHead.textContent = 'THE INTERNAL COMBUSTION ENGINE AND THE PARTS OF AN INTERNAL COMBUSTION ENGINE';
        engineDiv.appendChild(engineHead);
        const enginePic = document.createElement('div');
        const img1 = document.createElement('img');
        img1.src = '';
        img1.alt = '';
        enginePic.appendChild(img1);
        const img2 = document.createElement('img');
        img2.src = '';
        img2.alt = '';
        enginePic.appendChild(img2);
        engineDiv.appendChild(enginePic);
        main.appendChild(engineDiv);
        const theory = document.createElement('section');
        const explain = document.createElement('div');
        explain.textContent = 'An internal combustion engine (ICE) is a type of engine where the fuel is burned inside the engine itself, creating hot gases that push pistons or turbines. This creates motion that can be used to power vehicles, generators, and other machines.Internal combustion engines fall into two primary categories: compression-ignition (CI) engines and spark-ignition (SI) engines and also the bottom dead centre, top dead centre and the combustion chamber are explained below:';
        theory.appendChild(explain);
        const categories = [
        {
        title: 'Spark-ignition engines',
        text: 'Spark plugs are used and spark-ignition engines are also commonly referred to as gasoline engines, to ignite the fuel-air mixture and . The combustion process creates pressure that drives pistons, which ultimately power the vehicle.',
        image: ''
        },
        {
        title: 'Combustion ignition engines',
        text: 'The fuel-air combination is ignited and this engine is commonly referred to as diesel engines, by the heat of compression, these engines compress only air in the combustion chamber, raising its temperature to the point where diesel fuel injected into the chamber ignites spontaneously. This combustion drives the engine\'s pistons.',
        image: ''
        },
        {
        title: 'Top dead centre',
        text: 'The position of the piston within the cylinder at the highest point of its stroke is referred to as top dead center. This refers to the position of the piston in an engine cylinder where it is farthest away from the crankshaft. It\'s essentially the highest point the piston reaches in its up-and-down motion within the cylinder',
        image: ''
        },
        {
        title: 'Bottom dead centre',
        text: 'It\'s the position of the piston in the cylinder when it\'s closest to the crankshaft. In other words, it\'s the lowest point the piston reaches in its movement.It refers to the position of the piston at the lowest point of its stroke within the cylinder. At the bottom dead centre, the piston is farthest away from the cylinder head, and the volume of the combustion chamber is at its largest.',
        image: ''
        },
        {
        title: 'Combustion chamber',
        text: 'The part of the cylinder where the compressed and ignited air-fuel mixture produces power is called the combustion chamber. It is made up of the gap that exists between the cylinder head and the top of the piston at the top dead centre. In this chamber, the burning of the air-fuel mixture in the combustion chamber creates hot gases that push the piston down, generating the power that drives the engine.',
        image: ''
        },
        ];
        categories.forEach((item) => {
        theory.appendChild(createDivs(item));
        });
        const description = document.createElement('p');
        description.textContent = 'The internal combustion engine consists of various parts and some of these parts are listed below: ';
        theory.appendChild(description);
        const parts = [
        {
        title: 'Main engine block',
        text: 'The engine block is the core of the engine. It\'s a large cast iron or aluminum block that houses the cylinders, pistons, crankshaft, and other critical components. It provides the structure and support for the entire engine assembly.',
        image: ''
        },
        {
        title: 'Cylinders',
        text: 'Cylinders are the chambers within the engine block where the combustion process (burning of air-fuel mixture) takes place. Pistons move up and down within the cylinders. The number of cylinders varies depending on the engine design, with more cylinders typically indicating a more powerful engine.',
        image: ''
        },
        {
        title: 'Pistons',
        text: 'Inside the cylinders, pistons are cylindrical parts that move up and down. During the compression stroke, they compress the air-fuel mixture, and during the power stroke, they transfer the combustion force to the crankshaft. Through connecting rods, the crankshaft and pistons are joined.',
        image: ''
        },
        {
        title: 'Connecting rods',
        text: 'Connecting rods are the link between the pistons and the crankshaft. They convert the reciprocating (up-and-down) motion of the pistons into the rotating motion of the crankshaft.',
        image: ''
        },
        {
        title: 'Camshaft',
        text: 'is the shaft that regulates the valves\' opening and shutting. Its elevated portions, or lobes, exert pressure on the valve lifters, which causes the valves to open. Via a timing belt or chain, the crankshaft drives the camshaft.',
        image: ''
        },
        {
        title: 'Crankshaft',
        text: 'The crankshaft is a rotating shaft that sits at the bottom of the engine block. It receives the reciprocating motion from the connecting rods and converts it into rotary motion. This rotational motion is then used to power the wheels of a vehicle or to drive other machines.',
        image: ''
        },
        {
        title: 'Spark Plugs',
        text: 'Spark plugs are used in spark-ignition (SI) engines to ignite the air-fuel mixture. They create a spark that ignites the mixture, initiating the combustion process.',
        image: ''
        },
        {
        title: 'Valves',
        text: 'Valves are spring-loaded mechanisms that control the flow of air and fuel into and out of the cylinders. There are typically two valves per cylinder: one intake valve and one exhaust valve. The camshaft opens and closes the valves at specific points in the engine cycle.',
        image: ''
        },
        ];
        parts.forEach((item) => {
        theory.appendChild(createDivs(item));
        });
        const working = document.createElement('p');
        working.textContent = 'The core working principle of the majority of contemporary internal combustion engines is the four-stroke cycle, sometimes referred to as the Otto cycle after its creator Nikolaus Otto. It is made up of four separate piston strokes or movements that each have a definite function in the combustion process inside the engine cylinder.';
        theory.appendChild(working);
        
        const stroke = document.createElement('p');
        stroke.textContent = 'A four-stroke cycle is commonly used by both spark-ignition (SI) and the combustion ignition (CI) engines discussed above briefly to transform fuel into useful energy. This consists of :';
        theory.appendChild(stroke);
        const strokes = [
        {
        title: 'Intake stroke',
        text: 'As the piston descends, fuel and air are drawn into the cylinder. It is a mixture of fuel (in gasoline engines) or air (in diesel engines) is drawn into the cylinder through the intake valve. This creates a combustible mixture in the combustion chamber.',
        image: ''
        },
        {
        title: 'Compression stroke',
        text: 'As the piston rises, the fuel and air mixture are compressed and this compression increases the pressure and temperature of the mixture, making it more combustible and efficient to burn.',
        image: ''
        },
        {
        title: 'Combustion/power stroke',
        text: 'In a spark ignition (SI) engine, the air-fuel combination is ignited by the spark plug; in a combustion ignition (CI) engine, the mixture is ignited by the heat of compression and the resulting explosion rapidly increases pressure within the cylinder, driving the piston forcefully back down. This downward movement is what generates the power needed to turn the engine\'s crankshaft. This results in the rapid expansion of hot gasses.',
        image: ''
        },
        {
        title: 'Exhaust stroke',
        text: 'As the piston descends, the cylinder\'s exhaust gasses are forced out as the piston reaches the bottom of its stroke again, the exhaust valve opens, and the piston moves back up the cylinder. This upward movement expels the spent exhaust gases from the combustion chamber through the exhaust valve, preparing the cylinder for the next cycle.',
        image: ''
        },
        ];
        strokes.forEach((item) => {
        theory.appendChild(createDivs(item));
        });
        const text1 = document.createElement('p');
        text1.textContent = 'Watch how the four cycle stroke works and how the internal combustion engine works';
        theory.appendChild(text1);
        const video1 = document.createElement('iframe');
        video1.src = 'https://youtu.be/ZQvfHyfgBtA?si=dbgnwROu3SzlvUZY';
        theory.appendChild(video1);
        
        const head1 = document.createElement('h3');
        head1.textContent = 'Applications of an internal combustion engine include:';
        theory.appendChild(head1);
        const applications = [
        {
        title: 'Transportation',
        text: 'Internal combustion engines are most frequently used to power automobiles. Automobiles, trucks, motorbikes, scooters, and even airplanes (with piston engines) fall within this category.',
        image: ''
        },
        {
        title: 'Power generation',
        text: 'Stationary applications utilizing internal combustion engines can provide energy. These are very helpful as backup power generators in distant locations.',
        image: ''
        },
        {
        title: 'Aircraft',
        text: 'Many aircraft, particularly smaller general aviation planes, rely on internal combustion engines for propulsion. These engines may run on aviation gasoline (avgas) or jet fuel.',
        image: ''
        },
        {
        title: 'Marine',
        text: '',
        image: 'Internal combustion engines are used in boats, ships, and other marine vessels for propulsion. They can run on gasoline, diesel, or alternative fuels such as liquefied natural gas (LNG).'
        },
        ];
        applications.forEach((item) => {
        theory.appendChild(createDivs(item));
        });
        const internal = document.createElement('p');
        internal.textContent = 'An internal combustion engine is meant to be checked regularly and also undergo some maintenance which include:';
        theory.appendChild(internal);
        const check = document.createElement('h3');
        check.textContent = 'ROUTINE CHECKS:';
        theory.appendChild(check);
        const checkList = document.createElement('ul');
        const checks = ['Check the battery terminals for corrosion and ensure they are tight and secure and test the battery voltage and charging system to ensure proper operation.', 'Check the oil level using the dipstick and top up if necessary. Also, monitor the oil condition and schedule regular oil changes.', 'Check the condition of belts and hoses for cracks, wear, or loose connections. Cracked or worn belts and hoses can break and lead to engine problems', 'Look around and check the engine compartment for any signs of leaks, including oil, coolant, or other fluids. Leaks can indicate potential problems and should be addressed promptly.', 'Inspect and check the belts for wear, cracks, or fraying. Replace worn or damaged belts to prevent unexpected failures.'];
        let array = [];
        for(let i = 0; i < checks.length; i++){
            array[i] = document.createElement('li');
            array[i].textContent = checks[i];
            checkList.appendChild(array[i]);
        }
        theory.appendChild(checkList);
        
        const maintain = document.createElement('h3');
        maintain.textContent = 'ROUTINE MAINTENANCE:';
        theory.appendChild(maintain);
        const maintainList = document.createElement('ul');
        const maintenance = ['Regularly change the engine oil and oil filter according to the manufacturer\'s recommended intervals. Fresh oil lubricates engine components, reduces wear, and helps maintain engine performance.', 'Regularly replace the engine air filter at regular intervals to ensure proper airflow and filtration. A clean air filter helps optimize engine performance and fuel efficiency.','Regularly replace the fuel filter to prevent fuel system contamination and maintain proper fuel flow.', 'Regularly replace spark plugs at the recommended intervals to ensure reliable ignition and efficient combustion because worn or fouled spark plugs can lead to poor engine performance and reduced fuel efficiency.', 'Regularly replace the timing belt or timing chain to prevent engine damage due to timing system failure.'];
        let box = [];
        for(let i = 0; i < maintenance.length; i++){
            box[i] = document.createElement('li');
            box[i].textContent = maintenance[i];
            maintainList.appendChild(box[i]);
        }
        theory.appendChild(maintainList);
        main.appendChild(theory);
};
const displayFS201 = (main) => {

};


/***/ }),

/***/ "./src/SCRIPTS/pre.js":
/*!****************************!*\
  !*** ./src/SCRIPTS/pre.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CSS_pre_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CSS/pre.css */ "./src/CSS/pre.css");
/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/header */ "./src/SCRIPTS/modules/header.js");
/* harmony import */ var _modules_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/footer */ "./src/SCRIPTS/modules/footer.js");
/* harmony import */ var _modules_preDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/preDisplay */ "./src/SCRIPTS/modules/preDisplay.js");




const body = document.querySelector('body');
let reports = [
    {
        title: 'Getting Started',
        func: _modules_preDisplay__WEBPACK_IMPORTED_MODULE_3__.displayStarted
    },
    {
        title: 'Introduction to WoodWork {WW201}',
        func: _modules_preDisplay__WEBPACK_IMPORTED_MODULE_3__.displayWW201
    },
    {
        title: 'Introduction to Sheet Metal Workshop {SM201}',
        func: _modules_preDisplay__WEBPACK_IMPORTED_MODULE_3__.displaySM201
    },
    {
        title: 'Introduction to Fitting Shop {BF201}',
        func: _modules_preDisplay__WEBPACK_IMPORTED_MODULE_3__.displayBF201
    },
    {
        title: 'Introduction to Welding Shop Practice {HS201}',
        func: _modules_preDisplay__WEBPACK_IMPORTED_MODULE_3__.displayHS201
    },
    {
        title: 'Introduction to the Lathe and Machining Operations {MS201}',
        func: _modules_preDisplay__WEBPACK_IMPORTED_MODULE_3__.displayMS201
    },
    {
        title: 'The Internal Combustion Engine {AS201}',
        func: _modules_preDisplay__WEBPACK_IMPORTED_MODULE_3__.displayAS201
    },
    {
        title: 'Foundry Shop {FS201}',
        func: _modules_preDisplay__WEBPACK_IMPORTED_MODULE_3__.displayFS201
    }
];
//display  header
(0,_modules_header__WEBPACK_IMPORTED_MODULE_1__.renderHeader)(body);
//create aside side menu
const aside = document.createElement('aside');
//create aside header
const heading = document.createElement('h3');
heading.textContent = 'PRE ELA TOPICS';
aside.appendChild(heading);
//create div to store reports list
const reportDiv = document.createElement('div');
//create list of report topic
const reportList = document.createElement('ul');
let list = [];
for(let i = 0; i < reports.length; i++){
    list[i] = document.createElement('li');
    list[i].textContent = `${reports[i].title}`;
    list[i].addEventListener('click', reports[i].func);
    reportList.appendChild(list[i]);
}
reportDiv.appendChild(reportList);
aside.appendChild(reportDiv);
body.appendChild(aside);
//create main div where content would be generated to
const main = document.createElement('main');
body.appendChild(main);
(0,_modules_footer__WEBPACK_IMPORTED_MODULE_2__.renderFooter)(body);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["src_SCRIPTS_modules_footer_js-src_SCRIPTS_modules_header_js"], () => (__webpack_exec__("./src/SCRIPTS/pre.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMxQixLQUFLO0FBQ0w7QUFDQSxvRUFBb0UsTUFBTTtBQUMxRSxjQUFjLDZEQUFZO0FBQzFCLEtBQUs7QUFDTDtBQUNBLGdEQUFnRCxNQUFNO0FBQ3RELGNBQWMsNkRBQVk7QUFDMUIsS0FBSztBQUNMO0FBQ0EsOEJBQThCLE1BQU07QUFDcEMsY0FBYyw2REFBWTtBQUMxQjtBQUNBO0FBQ0E7QUFDQSw2REFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9CQUFvQjtBQUNuQztBQUNBLDZCQUE2QixpQkFBaUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGFib3JhdGUvLi9zcmMvQ1NTL3ByZS5jc3M/ZTdjOCIsIndlYnBhY2s6Ly9lbGFib3JhdGUvLi9zcmMvU0NSSVBUUy9tb2R1bGVzL3ByZURpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vZWxhYm9yYXRlLy4vc3JjL1NDUklQVFMvcHJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImNvbnN0IGRpc3BsYXlTdGFydGVkID0gKG1haW4pID0+IHtcbiAgICBhbGVydCgnV2hvIGRleSBicmVhdGhlJyk7XG4gICAgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBtYWluLmlubmVySFRNTCA9ICcnO1xufTtcbmNvbnN0IGRpc3BsYXlXVzIwMSA9IChtYWluKSA9PiB7XG5cbn07XG5jb25zdCBkaXNwbGF5U00yMDEgPSAobWFpbikgPT4ge1xuXG59O1xuY29uc3QgZGlzcGxheUJGMjAxID0gKG1haW4pID0+IHtcblxufTtcbmNvbnN0IGRpc3BsYXlIUzIwMSA9IChtYWluKSA9PiB7XG5cbn07XG5jb25zdCBkaXNwbGF5TVMyMDEgPSAobWFpbikgPT4ge1xuXG59O1xuY29uc3QgZGlzcGxheUFTMjAxID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCBjcmVhdGVEaXZzID0gKG9iamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0ZXh0LmlubmVySFRNTCA9IGA8c3Bhbj7igKIgJHtvYmplY3QudGl0bGV9OiAgJHtvYmplY3QudGV4dH1gO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIGlmKG9iamVjdC5pbWFnZSAhPT0gJyAnKXtcbiAgICAgICAgICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICBpbWFnZS5zcmMgPSBvYmplY3QuaW1hZ2U7XG4gICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgaGVhZC50ZXh0Q29udGVudCAgPSAnVGhlIEludGVybmFsIENvbWJ1c3Rpb24gRW5naW5le0FTMjAxfSc7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoaGVhZCk7XG4gICAgICAgIGNvbnN0IG9iamVjdGl2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICAgICAgY29uc3Qgb2JqSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIG9iakhlYWQudGV4dENvbnRlbnQgPSAnT0JKRUNUSVZFUyc7XG4gICAgICAgIG9iamVjdGl2ZS5hcHBlbmRDaGlsZChvYmpIZWFkKTtcbiAgICAgICAgY29uc3Qgb2JqTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIGNvbnN0IG9iamVjdGl2ZXMgPSBbJ1RvIGtub3cgdGhlIG1ham9yIHBhcnRzIG9mIGFuIGludGVybmFsIGNvbWJ1c3Rpb24gZW5naW5lIGFuZCB0aGVpciBmdW5jdGlvbnMuJywgJ1RvIGtub3cgdGhlIGRpZmZlcmVudCBjbGFzc2lmaWNhdGlvbnMgb2YgdGhlIGludGVybmFsIGNvbWJ1c3Rpb24gZW5naW5lJywgICAnVG8gYmUgYWJsZSB0byBkZXNjcmliZSB0aGUgd29ya2luZyBjeWNsZSBvZiBhIGZvdXItIHN0cm9rZS1jeWNsZSBpbnRlcm5hbCBjb21idXN0aW9uIHNwYXJrIGlnbml0aW9uIGVuZ2luZSBhbmQgY29tcHJlc3Npb24gaWduaXRpb24gZW5naW5lJywgJ1RvIGJlIGFibGUgdG8gZGlhZ25vc2Ugc2ltcGxlIGludGVybmFsIGNvbWJ1c3Rpb24gZW5naW5lIGZhdWx0cycsICdUbyBrbm93IGhvdyB0byBjaGFuZ2UgdGhlIGVuZ2luZSBvaWwgb2YgYW4gaW50ZXJuYWwgY29tYnVzdGlvbiBlbmdpbmUnLCAnVG8gYmUgYWJsZSB0byBpZGVudGlmeSB0aGUgdG9vbHMgdXNlZCB0byBlZmZlY3QgcmVwYWlycyBvbiBhbiBpbnRlcm5hbCBjb21idXN0aW9uIGVuZ2luZScsICAnVG8ga25vdyB0aGUgcm91dGluZSBjaGVja3MgYW5kIHJvdXRpbmUgbWFpbnRlbmFuY2UgY2FycmllZCBvdXQgb24gYW4gaW50ZXJuYWwgY29tYnVzdGlvbiBlbmdpbmUnXTtcbiAgICAgICAgbGV0IGxpc3QgPSBbXTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG9iamVjdGl2ZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgbGlzdFtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBsaXN0W2ldLnRleHRDb250ZW50ID0gb2JqZWN0aXZlc1tpXTtcbiAgICAgICAgICAgIG9iakxpc3QuYXBwZW5kQ2hpbGQobGlzdFtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgb2JqZWN0aXZlLmFwcGVuZENoaWxkKG9iakxpc3QpO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKG9iamVjdGl2ZSk7XG4gICAgICAgIGNvbnN0IGVuZ2luZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBlbmdpbmVIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgZW5naW5lSGVhZC50ZXh0Q29udGVudCA9ICdUSEUgSU5URVJOQUwgQ09NQlVTVElPTiBFTkdJTkUgQU5EIFRIRSBQQVJUUyBPRiBBTiBJTlRFUk5BTCBDT01CVVNUSU9OIEVOR0lORSc7XG4gICAgICAgIGVuZ2luZURpdi5hcHBlbmRDaGlsZChlbmdpbmVIZWFkKTtcbiAgICAgICAgY29uc3QgZW5naW5lUGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGltZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaW1nMS5zcmMgPSAnJztcbiAgICAgICAgaW1nMS5hbHQgPSAnJztcbiAgICAgICAgZW5naW5lUGljLmFwcGVuZENoaWxkKGltZzEpO1xuICAgICAgICBjb25zdCBpbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltZzIuc3JjID0gJyc7XG4gICAgICAgIGltZzIuYWx0ID0gJyc7XG4gICAgICAgIGVuZ2luZVBpYy5hcHBlbmRDaGlsZChpbWcyKTtcbiAgICAgICAgZW5naW5lRGl2LmFwcGVuZENoaWxkKGVuZ2luZVBpYyk7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoZW5naW5lRGl2KTtcbiAgICAgICAgY29uc3QgdGhlb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgICAgICBjb25zdCBleHBsYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGV4cGxhaW4udGV4dENvbnRlbnQgPSAnQW4gaW50ZXJuYWwgY29tYnVzdGlvbiBlbmdpbmUgKElDRSkgaXMgYSB0eXBlIG9mIGVuZ2luZSB3aGVyZSB0aGUgZnVlbCBpcyBidXJuZWQgaW5zaWRlIHRoZSBlbmdpbmUgaXRzZWxmLCBjcmVhdGluZyBob3QgZ2FzZXMgdGhhdCBwdXNoIHBpc3RvbnMgb3IgdHVyYmluZXMuIFRoaXMgY3JlYXRlcyBtb3Rpb24gdGhhdCBjYW4gYmUgdXNlZCB0byBwb3dlciB2ZWhpY2xlcywgZ2VuZXJhdG9ycywgYW5kIG90aGVyIG1hY2hpbmVzLkludGVybmFsIGNvbWJ1c3Rpb24gZW5naW5lcyBmYWxsIGludG8gdHdvIHByaW1hcnkgY2F0ZWdvcmllczogY29tcHJlc3Npb24taWduaXRpb24gKENJKSBlbmdpbmVzIGFuZCBzcGFyay1pZ25pdGlvbiAoU0kpIGVuZ2luZXMgYW5kIGFsc28gdGhlIGJvdHRvbSBkZWFkIGNlbnRyZSwgdG9wIGRlYWQgY2VudHJlIGFuZCB0aGUgY29tYnVzdGlvbiBjaGFtYmVyIGFyZSBleHBsYWluZWQgYmVsb3c6JztcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKGV4cGxhaW4pO1xuICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gW1xuICAgICAgICB7XG4gICAgICAgIHRpdGxlOiAnU3BhcmstaWduaXRpb24gZW5naW5lcycsXG4gICAgICAgIHRleHQ6ICdTcGFyayBwbHVncyBhcmUgdXNlZCBhbmQgc3BhcmstaWduaXRpb24gZW5naW5lcyBhcmUgYWxzbyBjb21tb25seSByZWZlcnJlZCB0byBhcyBnYXNvbGluZSBlbmdpbmVzLCB0byBpZ25pdGUgdGhlIGZ1ZWwtYWlyIG1peHR1cmUgYW5kIC4gVGhlIGNvbWJ1c3Rpb24gcHJvY2VzcyBjcmVhdGVzIHByZXNzdXJlIHRoYXQgZHJpdmVzIHBpc3RvbnMsIHdoaWNoIHVsdGltYXRlbHkgcG93ZXIgdGhlIHZlaGljbGUuJyxcbiAgICAgICAgaW1hZ2U6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdDb21idXN0aW9uIGlnbml0aW9uIGVuZ2luZXMnLFxuICAgICAgICB0ZXh0OiAnVGhlIGZ1ZWwtYWlyIGNvbWJpbmF0aW9uIGlzIGlnbml0ZWQgYW5kIHRoaXMgZW5naW5lIGlzIGNvbW1vbmx5IHJlZmVycmVkIHRvIGFzIGRpZXNlbCBlbmdpbmVzLCBieSB0aGUgaGVhdCBvZiBjb21wcmVzc2lvbiwgdGhlc2UgZW5naW5lcyBjb21wcmVzcyBvbmx5IGFpciBpbiB0aGUgY29tYnVzdGlvbiBjaGFtYmVyLCByYWlzaW5nIGl0cyB0ZW1wZXJhdHVyZSB0byB0aGUgcG9pbnQgd2hlcmUgZGllc2VsIGZ1ZWwgaW5qZWN0ZWQgaW50byB0aGUgY2hhbWJlciBpZ25pdGVzIHNwb250YW5lb3VzbHkuIFRoaXMgY29tYnVzdGlvbiBkcml2ZXMgdGhlIGVuZ2luZVxcJ3MgcGlzdG9ucy4nLFxuICAgICAgICBpbWFnZTogJydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICB0aXRsZTogJ1RvcCBkZWFkIGNlbnRyZScsXG4gICAgICAgIHRleHQ6ICdUaGUgcG9zaXRpb24gb2YgdGhlIHBpc3RvbiB3aXRoaW4gdGhlIGN5bGluZGVyIGF0IHRoZSBoaWdoZXN0IHBvaW50IG9mIGl0cyBzdHJva2UgaXMgcmVmZXJyZWQgdG8gYXMgdG9wIGRlYWQgY2VudGVyLiBUaGlzIHJlZmVycyB0byB0aGUgcG9zaXRpb24gb2YgdGhlIHBpc3RvbiBpbiBhbiBlbmdpbmUgY3lsaW5kZXIgd2hlcmUgaXQgaXMgZmFydGhlc3QgYXdheSBmcm9tIHRoZSBjcmFua3NoYWZ0LiBJdFxcJ3MgZXNzZW50aWFsbHkgdGhlIGhpZ2hlc3QgcG9pbnQgdGhlIHBpc3RvbiByZWFjaGVzIGluIGl0cyB1cC1hbmQtZG93biBtb3Rpb24gd2l0aGluIHRoZSBjeWxpbmRlcicsXG4gICAgICAgIGltYWdlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgIHRpdGxlOiAnQm90dG9tIGRlYWQgY2VudHJlJyxcbiAgICAgICAgdGV4dDogJ0l0XFwncyB0aGUgcG9zaXRpb24gb2YgdGhlIHBpc3RvbiBpbiB0aGUgY3lsaW5kZXIgd2hlbiBpdFxcJ3MgY2xvc2VzdCB0byB0aGUgY3JhbmtzaGFmdC4gSW4gb3RoZXIgd29yZHMsIGl0XFwncyB0aGUgbG93ZXN0IHBvaW50IHRoZSBwaXN0b24gcmVhY2hlcyBpbiBpdHMgbW92ZW1lbnQuSXQgcmVmZXJzIHRvIHRoZSBwb3NpdGlvbiBvZiB0aGUgcGlzdG9uIGF0IHRoZSBsb3dlc3QgcG9pbnQgb2YgaXRzIHN0cm9rZSB3aXRoaW4gdGhlIGN5bGluZGVyLiBBdCB0aGUgYm90dG9tIGRlYWQgY2VudHJlLCB0aGUgcGlzdG9uIGlzIGZhcnRoZXN0IGF3YXkgZnJvbSB0aGUgY3lsaW5kZXIgaGVhZCwgYW5kIHRoZSB2b2x1bWUgb2YgdGhlIGNvbWJ1c3Rpb24gY2hhbWJlciBpcyBhdCBpdHMgbGFyZ2VzdC4nLFxuICAgICAgICBpbWFnZTogJydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICB0aXRsZTogJ0NvbWJ1c3Rpb24gY2hhbWJlcicsXG4gICAgICAgIHRleHQ6ICdUaGUgcGFydCBvZiB0aGUgY3lsaW5kZXIgd2hlcmUgdGhlIGNvbXByZXNzZWQgYW5kIGlnbml0ZWQgYWlyLWZ1ZWwgbWl4dHVyZSBwcm9kdWNlcyBwb3dlciBpcyBjYWxsZWQgdGhlIGNvbWJ1c3Rpb24gY2hhbWJlci4gSXQgaXMgbWFkZSB1cCBvZiB0aGUgZ2FwIHRoYXQgZXhpc3RzIGJldHdlZW4gdGhlIGN5bGluZGVyIGhlYWQgYW5kIHRoZSB0b3Agb2YgdGhlIHBpc3RvbiBhdCB0aGUgdG9wIGRlYWQgY2VudHJlLiBJbiB0aGlzIGNoYW1iZXIsIHRoZSBidXJuaW5nIG9mIHRoZSBhaXItZnVlbCBtaXh0dXJlIGluIHRoZSBjb21idXN0aW9uIGNoYW1iZXIgY3JlYXRlcyBob3QgZ2FzZXMgdGhhdCBwdXNoIHRoZSBwaXN0b24gZG93biwgZ2VuZXJhdGluZyB0aGUgcG93ZXIgdGhhdCBkcml2ZXMgdGhlIGVuZ2luZS4nLFxuICAgICAgICBpbWFnZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgXTtcbiAgICAgICAgY2F0ZWdvcmllcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZChjcmVhdGVEaXZzKGl0ZW0pKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdUaGUgaW50ZXJuYWwgY29tYnVzdGlvbiBlbmdpbmUgY29uc2lzdHMgb2YgdmFyaW91cyBwYXJ0cyBhbmQgc29tZSBvZiB0aGVzZSBwYXJ0cyBhcmUgbGlzdGVkIGJlbG93OiAnO1xuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICBjb25zdCBwYXJ0cyA9IFtcbiAgICAgICAge1xuICAgICAgICB0aXRsZTogJ01haW4gZW5naW5lIGJsb2NrJyxcbiAgICAgICAgdGV4dDogJ1RoZSBlbmdpbmUgYmxvY2sgaXMgdGhlIGNvcmUgb2YgdGhlIGVuZ2luZS4gSXRcXCdzIGEgbGFyZ2UgY2FzdCBpcm9uIG9yIGFsdW1pbnVtIGJsb2NrIHRoYXQgaG91c2VzIHRoZSBjeWxpbmRlcnMsIHBpc3RvbnMsIGNyYW5rc2hhZnQsIGFuZCBvdGhlciBjcml0aWNhbCBjb21wb25lbnRzLiBJdCBwcm92aWRlcyB0aGUgc3RydWN0dXJlIGFuZCBzdXBwb3J0IGZvciB0aGUgZW50aXJlIGVuZ2luZSBhc3NlbWJseS4nLFxuICAgICAgICBpbWFnZTogJydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICB0aXRsZTogJ0N5bGluZGVycycsXG4gICAgICAgIHRleHQ6ICdDeWxpbmRlcnMgYXJlIHRoZSBjaGFtYmVycyB3aXRoaW4gdGhlIGVuZ2luZSBibG9jayB3aGVyZSB0aGUgY29tYnVzdGlvbiBwcm9jZXNzIChidXJuaW5nIG9mIGFpci1mdWVsIG1peHR1cmUpIHRha2VzIHBsYWNlLiBQaXN0b25zIG1vdmUgdXAgYW5kIGRvd24gd2l0aGluIHRoZSBjeWxpbmRlcnMuIFRoZSBudW1iZXIgb2YgY3lsaW5kZXJzIHZhcmllcyBkZXBlbmRpbmcgb24gdGhlIGVuZ2luZSBkZXNpZ24sIHdpdGggbW9yZSBjeWxpbmRlcnMgdHlwaWNhbGx5IGluZGljYXRpbmcgYSBtb3JlIHBvd2VyZnVsIGVuZ2luZS4nLFxuICAgICAgICBpbWFnZTogJydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICB0aXRsZTogJ1Bpc3RvbnMnLFxuICAgICAgICB0ZXh0OiAnSW5zaWRlIHRoZSBjeWxpbmRlcnMsIHBpc3RvbnMgYXJlIGN5bGluZHJpY2FsIHBhcnRzIHRoYXQgbW92ZSB1cCBhbmQgZG93bi4gRHVyaW5nIHRoZSBjb21wcmVzc2lvbiBzdHJva2UsIHRoZXkgY29tcHJlc3MgdGhlIGFpci1mdWVsIG1peHR1cmUsIGFuZCBkdXJpbmcgdGhlIHBvd2VyIHN0cm9rZSwgdGhleSB0cmFuc2ZlciB0aGUgY29tYnVzdGlvbiBmb3JjZSB0byB0aGUgY3JhbmtzaGFmdC4gVGhyb3VnaCBjb25uZWN0aW5nIHJvZHMsIHRoZSBjcmFua3NoYWZ0IGFuZCBwaXN0b25zIGFyZSBqb2luZWQuJyxcbiAgICAgICAgaW1hZ2U6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdDb25uZWN0aW5nIHJvZHMnLFxuICAgICAgICB0ZXh0OiAnQ29ubmVjdGluZyByb2RzIGFyZSB0aGUgbGluayBiZXR3ZWVuIHRoZSBwaXN0b25zIGFuZCB0aGUgY3JhbmtzaGFmdC4gVGhleSBjb252ZXJ0IHRoZSByZWNpcHJvY2F0aW5nICh1cC1hbmQtZG93bikgbW90aW9uIG9mIHRoZSBwaXN0b25zIGludG8gdGhlIHJvdGF0aW5nIG1vdGlvbiBvZiB0aGUgY3JhbmtzaGFmdC4nLFxuICAgICAgICBpbWFnZTogJydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICB0aXRsZTogJ0NhbXNoYWZ0JyxcbiAgICAgICAgdGV4dDogJ2lzIHRoZSBzaGFmdCB0aGF0IHJlZ3VsYXRlcyB0aGUgdmFsdmVzXFwnIG9wZW5pbmcgYW5kIHNodXR0aW5nLiBJdHMgZWxldmF0ZWQgcG9ydGlvbnMsIG9yIGxvYmVzLCBleGVydCBwcmVzc3VyZSBvbiB0aGUgdmFsdmUgbGlmdGVycywgd2hpY2ggY2F1c2VzIHRoZSB2YWx2ZXMgdG8gb3Blbi4gVmlhIGEgdGltaW5nIGJlbHQgb3IgY2hhaW4sIHRoZSBjcmFua3NoYWZ0IGRyaXZlcyB0aGUgY2Ftc2hhZnQuJyxcbiAgICAgICAgaW1hZ2U6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdDcmFua3NoYWZ0JyxcbiAgICAgICAgdGV4dDogJ1RoZSBjcmFua3NoYWZ0IGlzIGEgcm90YXRpbmcgc2hhZnQgdGhhdCBzaXRzIGF0IHRoZSBib3R0b20gb2YgdGhlIGVuZ2luZSBibG9jay4gSXQgcmVjZWl2ZXMgdGhlIHJlY2lwcm9jYXRpbmcgbW90aW9uIGZyb20gdGhlIGNvbm5lY3Rpbmcgcm9kcyBhbmQgY29udmVydHMgaXQgaW50byByb3RhcnkgbW90aW9uLiBUaGlzIHJvdGF0aW9uYWwgbW90aW9uIGlzIHRoZW4gdXNlZCB0byBwb3dlciB0aGUgd2hlZWxzIG9mIGEgdmVoaWNsZSBvciB0byBkcml2ZSBvdGhlciBtYWNoaW5lcy4nLFxuICAgICAgICBpbWFnZTogJydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICB0aXRsZTogJ1NwYXJrIFBsdWdzJyxcbiAgICAgICAgdGV4dDogJ1NwYXJrIHBsdWdzIGFyZSB1c2VkIGluIHNwYXJrLWlnbml0aW9uIChTSSkgZW5naW5lcyB0byBpZ25pdGUgdGhlIGFpci1mdWVsIG1peHR1cmUuIFRoZXkgY3JlYXRlIGEgc3BhcmsgdGhhdCBpZ25pdGVzIHRoZSBtaXh0dXJlLCBpbml0aWF0aW5nIHRoZSBjb21idXN0aW9uIHByb2Nlc3MuJyxcbiAgICAgICAgaW1hZ2U6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdWYWx2ZXMnLFxuICAgICAgICB0ZXh0OiAnVmFsdmVzIGFyZSBzcHJpbmctbG9hZGVkIG1lY2hhbmlzbXMgdGhhdCBjb250cm9sIHRoZSBmbG93IG9mIGFpciBhbmQgZnVlbCBpbnRvIGFuZCBvdXQgb2YgdGhlIGN5bGluZGVycy4gVGhlcmUgYXJlIHR5cGljYWxseSB0d28gdmFsdmVzIHBlciBjeWxpbmRlcjogb25lIGludGFrZSB2YWx2ZSBhbmQgb25lIGV4aGF1c3QgdmFsdmUuIFRoZSBjYW1zaGFmdCBvcGVucyBhbmQgY2xvc2VzIHRoZSB2YWx2ZXMgYXQgc3BlY2lmaWMgcG9pbnRzIGluIHRoZSBlbmdpbmUgY3ljbGUuJyxcbiAgICAgICAgaW1hZ2U6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIF07XG4gICAgICAgIHBhcnRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKGNyZWF0ZURpdnMoaXRlbSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgd29ya2luZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgd29ya2luZy50ZXh0Q29udGVudCA9ICdUaGUgY29yZSB3b3JraW5nIHByaW5jaXBsZSBvZiB0aGUgbWFqb3JpdHkgb2YgY29udGVtcG9yYXJ5IGludGVybmFsIGNvbWJ1c3Rpb24gZW5naW5lcyBpcyB0aGUgZm91ci1zdHJva2UgY3ljbGUsIHNvbWV0aW1lcyByZWZlcnJlZCB0byBhcyB0aGUgT3R0byBjeWNsZSBhZnRlciBpdHMgY3JlYXRvciBOaWtvbGF1cyBPdHRvLiBJdCBpcyBtYWRlIHVwIG9mIGZvdXIgc2VwYXJhdGUgcGlzdG9uIHN0cm9rZXMgb3IgbW92ZW1lbnRzIHRoYXQgZWFjaCBoYXZlIGEgZGVmaW5pdGUgZnVuY3Rpb24gaW4gdGhlIGNvbWJ1c3Rpb24gcHJvY2VzcyBpbnNpZGUgdGhlIGVuZ2luZSBjeWxpbmRlci4nO1xuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQod29ya2luZyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzdHJva2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHN0cm9rZS50ZXh0Q29udGVudCA9ICdBIGZvdXItc3Ryb2tlIGN5Y2xlIGlzIGNvbW1vbmx5IHVzZWQgYnkgYm90aCBzcGFyay1pZ25pdGlvbiAoU0kpIGFuZCB0aGUgY29tYnVzdGlvbiBpZ25pdGlvbiAoQ0kpIGVuZ2luZXMgZGlzY3Vzc2VkIGFib3ZlIGJyaWVmbHkgdG8gdHJhbnNmb3JtIGZ1ZWwgaW50byB1c2VmdWwgZW5lcmd5LiBUaGlzIGNvbnNpc3RzIG9mIDonO1xuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoc3Ryb2tlKTtcbiAgICAgICAgY29uc3Qgc3Ryb2tlcyA9IFtcbiAgICAgICAge1xuICAgICAgICB0aXRsZTogJ0ludGFrZSBzdHJva2UnLFxuICAgICAgICB0ZXh0OiAnQXMgdGhlIHBpc3RvbiBkZXNjZW5kcywgZnVlbCBhbmQgYWlyIGFyZSBkcmF3biBpbnRvIHRoZSBjeWxpbmRlci4gSXQgaXMgYSBtaXh0dXJlIG9mIGZ1ZWwgKGluIGdhc29saW5lIGVuZ2luZXMpIG9yIGFpciAoaW4gZGllc2VsIGVuZ2luZXMpIGlzIGRyYXduIGludG8gdGhlIGN5bGluZGVyIHRocm91Z2ggdGhlIGludGFrZSB2YWx2ZS4gVGhpcyBjcmVhdGVzIGEgY29tYnVzdGlibGUgbWl4dHVyZSBpbiB0aGUgY29tYnVzdGlvbiBjaGFtYmVyLicsXG4gICAgICAgIGltYWdlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgIHRpdGxlOiAnQ29tcHJlc3Npb24gc3Ryb2tlJyxcbiAgICAgICAgdGV4dDogJ0FzIHRoZSBwaXN0b24gcmlzZXMsIHRoZSBmdWVsIGFuZCBhaXIgbWl4dHVyZSBhcmUgY29tcHJlc3NlZCBhbmQgdGhpcyBjb21wcmVzc2lvbiBpbmNyZWFzZXMgdGhlIHByZXNzdXJlIGFuZCB0ZW1wZXJhdHVyZSBvZiB0aGUgbWl4dHVyZSwgbWFraW5nIGl0IG1vcmUgY29tYnVzdGlibGUgYW5kIGVmZmljaWVudCB0byBidXJuLicsXG4gICAgICAgIGltYWdlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgIHRpdGxlOiAnQ29tYnVzdGlvbi9wb3dlciBzdHJva2UnLFxuICAgICAgICB0ZXh0OiAnSW4gYSBzcGFyayBpZ25pdGlvbiAoU0kpIGVuZ2luZSwgdGhlIGFpci1mdWVsIGNvbWJpbmF0aW9uIGlzIGlnbml0ZWQgYnkgdGhlIHNwYXJrIHBsdWc7IGluIGEgY29tYnVzdGlvbiBpZ25pdGlvbiAoQ0kpIGVuZ2luZSwgdGhlIG1peHR1cmUgaXMgaWduaXRlZCBieSB0aGUgaGVhdCBvZiBjb21wcmVzc2lvbiBhbmQgdGhlIHJlc3VsdGluZyBleHBsb3Npb24gcmFwaWRseSBpbmNyZWFzZXMgcHJlc3N1cmUgd2l0aGluIHRoZSBjeWxpbmRlciwgZHJpdmluZyB0aGUgcGlzdG9uIGZvcmNlZnVsbHkgYmFjayBkb3duLiBUaGlzIGRvd253YXJkIG1vdmVtZW50IGlzIHdoYXQgZ2VuZXJhdGVzIHRoZSBwb3dlciBuZWVkZWQgdG8gdHVybiB0aGUgZW5naW5lXFwncyBjcmFua3NoYWZ0LiBUaGlzIHJlc3VsdHMgaW4gdGhlIHJhcGlkIGV4cGFuc2lvbiBvZiBob3QgZ2Fzc2VzLicsXG4gICAgICAgIGltYWdlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgIHRpdGxlOiAnRXhoYXVzdCBzdHJva2UnLFxuICAgICAgICB0ZXh0OiAnQXMgdGhlIHBpc3RvbiBkZXNjZW5kcywgdGhlIGN5bGluZGVyXFwncyBleGhhdXN0IGdhc3NlcyBhcmUgZm9yY2VkIG91dCBhcyB0aGUgcGlzdG9uIHJlYWNoZXMgdGhlIGJvdHRvbSBvZiBpdHMgc3Ryb2tlIGFnYWluLCB0aGUgZXhoYXVzdCB2YWx2ZSBvcGVucywgYW5kIHRoZSBwaXN0b24gbW92ZXMgYmFjayB1cCB0aGUgY3lsaW5kZXIuIFRoaXMgdXB3YXJkIG1vdmVtZW50IGV4cGVscyB0aGUgc3BlbnQgZXhoYXVzdCBnYXNlcyBmcm9tIHRoZSBjb21idXN0aW9uIGNoYW1iZXIgdGhyb3VnaCB0aGUgZXhoYXVzdCB2YWx2ZSwgcHJlcGFyaW5nIHRoZSBjeWxpbmRlciBmb3IgdGhlIG5leHQgY3ljbGUuJyxcbiAgICAgICAgaW1hZ2U6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIF07XG4gICAgICAgIHN0cm9rZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoY3JlYXRlRGl2cyhpdGVtKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB0ZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGV4dDEudGV4dENvbnRlbnQgPSAnV2F0Y2ggaG93IHRoZSBmb3VyIGN5Y2xlIHN0cm9rZSB3b3JrcyBhbmQgaG93IHRoZSBpbnRlcm5hbCBjb21idXN0aW9uIGVuZ2luZSB3b3Jrcyc7XG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZCh0ZXh0MSk7XG4gICAgICAgIGNvbnN0IHZpZGVvMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgICB2aWRlbzEuc3JjID0gJ2h0dHBzOi8veW91dHUuYmUvWlF2Zkh5ZmdCdEE/c2k9ZGJnbndST3UzU3psdlVaWSc7XG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZCh2aWRlbzEpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgaGVhZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBoZWFkMS50ZXh0Q29udGVudCA9ICdBcHBsaWNhdGlvbnMgb2YgYW4gaW50ZXJuYWwgY29tYnVzdGlvbiBlbmdpbmUgaW5jbHVkZTonO1xuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoaGVhZDEpO1xuICAgICAgICBjb25zdCBhcHBsaWNhdGlvbnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdUcmFuc3BvcnRhdGlvbicsXG4gICAgICAgIHRleHQ6ICdJbnRlcm5hbCBjb21idXN0aW9uIGVuZ2luZXMgYXJlIG1vc3QgZnJlcXVlbnRseSB1c2VkIHRvIHBvd2VyIGF1dG9tb2JpbGVzLiBBdXRvbW9iaWxlcywgdHJ1Y2tzLCBtb3RvcmJpa2VzLCBzY29vdGVycywgYW5kIGV2ZW4gYWlycGxhbmVzICh3aXRoIHBpc3RvbiBlbmdpbmVzKSBmYWxsIHdpdGhpbiB0aGlzIGNhdGVnb3J5LicsXG4gICAgICAgIGltYWdlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgIHRpdGxlOiAnUG93ZXIgZ2VuZXJhdGlvbicsXG4gICAgICAgIHRleHQ6ICdTdGF0aW9uYXJ5IGFwcGxpY2F0aW9ucyB1dGlsaXppbmcgaW50ZXJuYWwgY29tYnVzdGlvbiBlbmdpbmVzIGNhbiBwcm92aWRlIGVuZXJneS4gVGhlc2UgYXJlIHZlcnkgaGVscGZ1bCBhcyBiYWNrdXAgcG93ZXIgZ2VuZXJhdG9ycyBpbiBkaXN0YW50IGxvY2F0aW9ucy4nLFxuICAgICAgICBpbWFnZTogJydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICB0aXRsZTogJ0FpcmNyYWZ0JyxcbiAgICAgICAgdGV4dDogJ01hbnkgYWlyY3JhZnQsIHBhcnRpY3VsYXJseSBzbWFsbGVyIGdlbmVyYWwgYXZpYXRpb24gcGxhbmVzLCByZWx5IG9uIGludGVybmFsIGNvbWJ1c3Rpb24gZW5naW5lcyBmb3IgcHJvcHVsc2lvbi4gVGhlc2UgZW5naW5lcyBtYXkgcnVuIG9uIGF2aWF0aW9uIGdhc29saW5lIChhdmdhcykgb3IgamV0IGZ1ZWwuJyxcbiAgICAgICAgaW1hZ2U6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdNYXJpbmUnLFxuICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgaW1hZ2U6ICdJbnRlcm5hbCBjb21idXN0aW9uIGVuZ2luZXMgYXJlIHVzZWQgaW4gYm9hdHMsIHNoaXBzLCBhbmQgb3RoZXIgbWFyaW5lIHZlc3NlbHMgZm9yIHByb3B1bHNpb24uIFRoZXkgY2FuIHJ1biBvbiBnYXNvbGluZSwgZGllc2VsLCBvciBhbHRlcm5hdGl2ZSBmdWVscyBzdWNoIGFzIGxpcXVlZmllZCBuYXR1cmFsIGdhcyAoTE5HKS4nXG4gICAgICAgIH0sXG4gICAgICAgIF07XG4gICAgICAgIGFwcGxpY2F0aW9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZChjcmVhdGVEaXZzKGl0ZW0pKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGludGVybmFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBpbnRlcm5hbC50ZXh0Q29udGVudCA9ICdBbiBpbnRlcm5hbCBjb21idXN0aW9uIGVuZ2luZSBpcyBtZWFudCB0byBiZSBjaGVja2VkIHJlZ3VsYXJseSBhbmQgYWxzbyB1bmRlcmdvIHNvbWUgbWFpbnRlbmFuY2Ugd2hpY2ggaW5jbHVkZTonO1xuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoaW50ZXJuYWwpO1xuICAgICAgICBjb25zdCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGNoZWNrLnRleHRDb250ZW50ID0gJ1JPVVRJTkUgQ0hFQ0tTOic7XG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZChjaGVjayk7XG4gICAgICAgIGNvbnN0IGNoZWNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIGNvbnN0IGNoZWNrcyA9IFsnQ2hlY2sgdGhlIGJhdHRlcnkgdGVybWluYWxzIGZvciBjb3Jyb3Npb24gYW5kIGVuc3VyZSB0aGV5IGFyZSB0aWdodCBhbmQgc2VjdXJlIGFuZCB0ZXN0IHRoZSBiYXR0ZXJ5IHZvbHRhZ2UgYW5kIGNoYXJnaW5nIHN5c3RlbSB0byBlbnN1cmUgcHJvcGVyIG9wZXJhdGlvbi4nLCAnQ2hlY2sgdGhlIG9pbCBsZXZlbCB1c2luZyB0aGUgZGlwc3RpY2sgYW5kIHRvcCB1cCBpZiBuZWNlc3NhcnkuIEFsc28sIG1vbml0b3IgdGhlIG9pbCBjb25kaXRpb24gYW5kIHNjaGVkdWxlIHJlZ3VsYXIgb2lsIGNoYW5nZXMuJywgJ0NoZWNrIHRoZSBjb25kaXRpb24gb2YgYmVsdHMgYW5kIGhvc2VzIGZvciBjcmFja3MsIHdlYXIsIG9yIGxvb3NlIGNvbm5lY3Rpb25zLiBDcmFja2VkIG9yIHdvcm4gYmVsdHMgYW5kIGhvc2VzIGNhbiBicmVhayBhbmQgbGVhZCB0byBlbmdpbmUgcHJvYmxlbXMnLCAnTG9vayBhcm91bmQgYW5kIGNoZWNrIHRoZSBlbmdpbmUgY29tcGFydG1lbnQgZm9yIGFueSBzaWducyBvZiBsZWFrcywgaW5jbHVkaW5nIG9pbCwgY29vbGFudCwgb3Igb3RoZXIgZmx1aWRzLiBMZWFrcyBjYW4gaW5kaWNhdGUgcG90ZW50aWFsIHByb2JsZW1zIGFuZCBzaG91bGQgYmUgYWRkcmVzc2VkIHByb21wdGx5LicsICdJbnNwZWN0IGFuZCBjaGVjayB0aGUgYmVsdHMgZm9yIHdlYXIsIGNyYWNrcywgb3IgZnJheWluZy4gUmVwbGFjZSB3b3JuIG9yIGRhbWFnZWQgYmVsdHMgdG8gcHJldmVudCB1bmV4cGVjdGVkIGZhaWx1cmVzLiddO1xuICAgICAgICBsZXQgYXJyYXkgPSBbXTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNoZWNrcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBhcnJheVtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBhcnJheVtpXS50ZXh0Q29udGVudCA9IGNoZWNrc1tpXTtcbiAgICAgICAgICAgIGNoZWNrTGlzdC5hcHBlbmRDaGlsZChhcnJheVtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKGNoZWNrTGlzdCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBtYWludGFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIG1haW50YWluLnRleHRDb250ZW50ID0gJ1JPVVRJTkUgTUFJTlRFTkFOQ0U6JztcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKG1haW50YWluKTtcbiAgICAgICAgY29uc3QgbWFpbnRhaW5MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgY29uc3QgbWFpbnRlbmFuY2UgPSBbJ1JlZ3VsYXJseSBjaGFuZ2UgdGhlIGVuZ2luZSBvaWwgYW5kIG9pbCBmaWx0ZXIgYWNjb3JkaW5nIHRvIHRoZSBtYW51ZmFjdHVyZXJcXCdzIHJlY29tbWVuZGVkIGludGVydmFscy4gRnJlc2ggb2lsIGx1YnJpY2F0ZXMgZW5naW5lIGNvbXBvbmVudHMsIHJlZHVjZXMgd2VhciwgYW5kIGhlbHBzIG1haW50YWluIGVuZ2luZSBwZXJmb3JtYW5jZS4nLCAnUmVndWxhcmx5IHJlcGxhY2UgdGhlIGVuZ2luZSBhaXIgZmlsdGVyIGF0IHJlZ3VsYXIgaW50ZXJ2YWxzIHRvIGVuc3VyZSBwcm9wZXIgYWlyZmxvdyBhbmQgZmlsdHJhdGlvbi4gQSBjbGVhbiBhaXIgZmlsdGVyIGhlbHBzIG9wdGltaXplIGVuZ2luZSBwZXJmb3JtYW5jZSBhbmQgZnVlbCBlZmZpY2llbmN5LicsJ1JlZ3VsYXJseSByZXBsYWNlIHRoZSBmdWVsIGZpbHRlciB0byBwcmV2ZW50IGZ1ZWwgc3lzdGVtIGNvbnRhbWluYXRpb24gYW5kIG1haW50YWluIHByb3BlciBmdWVsIGZsb3cuJywgJ1JlZ3VsYXJseSByZXBsYWNlIHNwYXJrIHBsdWdzIGF0IHRoZSByZWNvbW1lbmRlZCBpbnRlcnZhbHMgdG8gZW5zdXJlIHJlbGlhYmxlIGlnbml0aW9uIGFuZCBlZmZpY2llbnQgY29tYnVzdGlvbiBiZWNhdXNlIHdvcm4gb3IgZm91bGVkIHNwYXJrIHBsdWdzIGNhbiBsZWFkIHRvIHBvb3IgZW5naW5lIHBlcmZvcm1hbmNlIGFuZCByZWR1Y2VkIGZ1ZWwgZWZmaWNpZW5jeS4nLCAnUmVndWxhcmx5IHJlcGxhY2UgdGhlIHRpbWluZyBiZWx0IG9yIHRpbWluZyBjaGFpbiB0byBwcmV2ZW50IGVuZ2luZSBkYW1hZ2UgZHVlIHRvIHRpbWluZyBzeXN0ZW0gZmFpbHVyZS4nXTtcbiAgICAgICAgbGV0IGJveCA9IFtdO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbWFpbnRlbmFuY2UubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgYm94W2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIGJveFtpXS50ZXh0Q29udGVudCA9IG1haW50ZW5hbmNlW2ldO1xuICAgICAgICAgICAgbWFpbnRhaW5MaXN0LmFwcGVuZENoaWxkKGJveFtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKG1haW50YWluTGlzdCk7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQodGhlb3J5KTtcbn07XG5jb25zdCBkaXNwbGF5RlMyMDEgPSAobWFpbikgPT4ge1xuXG59O1xuZXhwb3J0IHtkaXNwbGF5U3RhcnRlZCxkaXNwbGF5V1cyMDEsIGRpc3BsYXlTTTIwMSwgZGlzcGxheUJGMjAxLCBkaXNwbGF5SFMyMDEsIGRpc3BsYXlNUzIwMSAsZGlzcGxheUFTMjAxLCBkaXNwbGF5RlMyMDF9OyIsImltcG9ydCAnLi4vQ1NTL3ByZS5jc3MnO1xuaW1wb3J0IHtyZW5kZXJIZWFkZXJ9IGZyb20gJy4vbW9kdWxlcy9oZWFkZXInO1xuaW1wb3J0IHtyZW5kZXJGb290ZXJ9IGZyb20gJy4vbW9kdWxlcy9mb290ZXInO1xuaW1wb3J0IHsgZGlzcGxheVN0YXJ0ZWQsIGRpc3BsYXlXVzIwMSwgZGlzcGxheVNNMjAxLCBkaXNwbGF5QkYyMDEsIGRpc3BsYXlIUzIwMSwgZGlzcGxheU1TMjAxLCBkaXNwbGF5QVMyMDEsIGRpc3BsYXlGUzIwMX0gZnJvbSAnLi9tb2R1bGVzL3ByZURpc3BsYXknO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmxldCByZXBvcnRzID0gW1xuICAgIHtcbiAgICAgICAgdGl0bGU6ICdHZXR0aW5nIFN0YXJ0ZWQnLFxuICAgICAgICBmdW5jOiBkaXNwbGF5U3RhcnRlZFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ0ludHJvZHVjdGlvbiB0byBXb29kV29yayB7V1cyMDF9JyxcbiAgICAgICAgZnVuYzogZGlzcGxheVdXMjAxXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnSW50cm9kdWN0aW9uIHRvIFNoZWV0IE1ldGFsIFdvcmtzaG9wIHtTTTIwMX0nLFxuICAgICAgICBmdW5jOiBkaXNwbGF5U00yMDFcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdJbnRyb2R1Y3Rpb24gdG8gRml0dGluZyBTaG9wIHtCRjIwMX0nLFxuICAgICAgICBmdW5jOiBkaXNwbGF5QkYyMDFcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdJbnRyb2R1Y3Rpb24gdG8gV2VsZGluZyBTaG9wIFByYWN0aWNlIHtIUzIwMX0nLFxuICAgICAgICBmdW5jOiBkaXNwbGF5SFMyMDFcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdJbnRyb2R1Y3Rpb24gdG8gdGhlIExhdGhlIGFuZCBNYWNoaW5pbmcgT3BlcmF0aW9ucyB7TVMyMDF9JyxcbiAgICAgICAgZnVuYzogZGlzcGxheU1TMjAxXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnVGhlIEludGVybmFsIENvbWJ1c3Rpb24gRW5naW5lIHtBUzIwMX0nLFxuICAgICAgICBmdW5jOiBkaXNwbGF5QVMyMDFcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdGb3VuZHJ5IFNob3Age0ZTMjAxfScsXG4gICAgICAgIGZ1bmM6IGRpc3BsYXlGUzIwMVxuICAgIH1cbl07XG4vL2Rpc3BsYXkgIGhlYWRlclxucmVuZGVySGVhZGVyKGJvZHkpO1xuLy9jcmVhdGUgYXNpZGUgc2lkZSBtZW51XG5jb25zdCBhc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FzaWRlJyk7XG4vL2NyZWF0ZSBhc2lkZSBoZWFkZXJcbmNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuaGVhZGluZy50ZXh0Q29udGVudCA9ICdQUkUgRUxBIFRPUElDUyc7XG5hc2lkZS5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbi8vY3JlYXRlIGRpdiB0byBzdG9yZSByZXBvcnRzIGxpc3RcbmNvbnN0IHJlcG9ydERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy9jcmVhdGUgbGlzdCBvZiByZXBvcnQgdG9waWNcbmNvbnN0IHJlcG9ydExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xubGV0IGxpc3QgPSBbXTtcbmZvcihsZXQgaSA9IDA7IGkgPCByZXBvcnRzLmxlbmd0aDsgaSsrKXtcbiAgICBsaXN0W2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaXN0W2ldLnRleHRDb250ZW50ID0gYCR7cmVwb3J0c1tpXS50aXRsZX1gO1xuICAgIGxpc3RbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXBvcnRzW2ldLmZ1bmMpO1xuICAgIHJlcG9ydExpc3QuYXBwZW5kQ2hpbGQobGlzdFtpXSk7XG59XG5yZXBvcnREaXYuYXBwZW5kQ2hpbGQocmVwb3J0TGlzdCk7XG5hc2lkZS5hcHBlbmRDaGlsZChyZXBvcnREaXYpO1xuYm9keS5hcHBlbmRDaGlsZChhc2lkZSk7XG4vL2NyZWF0ZSBtYWluIGRpdiB3aGVyZSBjb250ZW50IHdvdWxkIGJlIGdlbmVyYXRlZCB0b1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcbmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG5yZW5kZXJGb290ZXIoYm9keSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9