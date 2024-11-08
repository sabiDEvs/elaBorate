"use strict";
(self["webpackChunkelaborate"] = self["webpackChunkelaborate"] || []).push([["report/eee/eee"],{

/***/ "./src/CSS/pre.css":
/*!*************************!*\
  !*** ./src/CSS/pre.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/SCRIPTS/eee.js":
/*!****************************!*\
  !*** ./src/SCRIPTS/eee.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CSS_pre_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CSS/pre.css */ "./src/CSS/pre.css");
/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/header */ "./src/SCRIPTS/modules/header.js");
/* harmony import */ var _modules_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/footer */ "./src/SCRIPTS/modules/footer.js");
/* harmony import */ var _modules_eeeDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/eeeDisplay */ "./src/SCRIPTS/modules/eeeDisplay.js");




const body = document.querySelector('body');
let reports = [
    {
        title: 'Getting Started',
        func: _modules_eeeDisplay__WEBPACK_IMPORTED_MODULE_3__.displayStarted
    },
    {
        title: 'Introduction to WoodWork {WW201}',
        func: _modules_eeeDisplay__WEBPACK_IMPORTED_MODULE_3__.displayWW201
    },
    {
        title: 'single Phase Transformer {EE206}',
        func: _modules_eeeDisplay__WEBPACK_IMPORTED_MODULE_3__.displayEE206
    },
    {
        title: 'Introduction to Fitting Shop {BF201}',
        func: _modules_eeeDisplay__WEBPACK_IMPORTED_MODULE_3__.displayBF201
    },
    {
        title: 'Introduction to Welding Shop Practice {HS201}',
        func: _modules_eeeDisplay__WEBPACK_IMPORTED_MODULE_3__.displayHS201
    },
    {
        title: 'Introduction to the Lathe and Machining Operations {MS201}',
        func: _modules_eeeDisplay__WEBPACK_IMPORTED_MODULE_3__.displayMS201
    },
    {
        title: 'The Internal Combustion Engine {AS201}',
        func: _modules_eeeDisplay__WEBPACK_IMPORTED_MODULE_3__.displayAS201
    },
    {
        title: 'Foundry Shop {FS201}',
        func: _modules_eeeDisplay__WEBPACK_IMPORTED_MODULE_3__.displayFS201
    }
];
//display  header
(0,_modules_header__WEBPACK_IMPORTED_MODULE_1__.renderHeader)(body);
//create aside side menu
const aside = document.createElement('aside');
//create button to close side menu
const close = document.createElement('div');
close.textContent = 'x';
close.addEventListener('click', () => {
    document.querySelector('aside').style.display = 'none';
});
close.id = 'closeButton';
aside.appendChild(close);
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
(0,_modules_eeeDisplay__WEBPACK_IMPORTED_MODULE_3__.displayStarted)();
(0,_modules_footer__WEBPACK_IMPORTED_MODULE_2__.renderFooter)(body);

/***/ }),

/***/ "./src/SCRIPTS/modules/eeeDisplay.js":
/*!*******************************************!*\
  !*** ./src/SCRIPTS/modules/eeeDisplay.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayAS201: () => (/* binding */ displayAS201),
/* harmony export */   displayBF201: () => (/* binding */ displayBF201),
/* harmony export */   displayEE206: () => (/* binding */ displayEE206),
/* harmony export */   displayFS201: () => (/* binding */ displayFS201),
/* harmony export */   displayHS201: () => (/* binding */ displayHS201),
/* harmony export */   displayMS201: () => (/* binding */ displayMS201),
/* harmony export */   displayStarted: () => (/* binding */ displayStarted),
/* harmony export */   displayWW201: () => (/* binding */ displayWW201)
/* harmony export */ });
/* harmony import */ var _RESOURCES_images_achieve_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../RESOURCES/images/achieve.png */ "./src/RESOURCES/images/achieve.png");
/* harmony import */ var _RESOURCES_images_daniel1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../RESOURCES/images/daniel1.png */ "./src/RESOURCES/images/daniel1.png");







const createDivs = (object) => {
    const div = document.createElement('div');
    const text = document.createElement('div');
    text.innerHTML = `<span>• ${object.title}:</span>  ${object.text}`;
    div.appendChild(text);
    if(object.image !== ' '){
         const image = document.createElement('img');
          image.src = object.image;
          div.appendChild(image);
    }
    return div;
}



const createVids = (object) => {
    const div = document.createElement('div');
    const text = document.createElement('div');
    text.innerHTML = `<span>• ${object.list}</span>`;
    div.appendChild(text);
    if(object.video !== ' '){
         const box = document.createElement('div');
         box.innerHTML = object.video;
         div.appendChild(box);
    }
    return div;
}

const displayTask = (num, name, lists) => {
    const div = document.createElement('div');
    const head = document.createElement('h3');
    head.textContent = `${num}. ${name}`;
    div.appendChild(head);
    const tasks = document.createElement('ul');
    let listItems = [];
    for(let i = 0; i < lists.length; i++){
        listItems[i] = document.createElement('li');
        listItems[i].textContent = lists[i];
        tasks.appendChild(listItems[i]);
    }
    div.appendChild(tasks);
    return div;
}

const reset = () => {
    window.scrollTo(0, 0);
    const main = document.querySelector('main');
    main.innerHTML = '';
    return main;
}

const createDownload = (url) => {
    const div = document.createElement('div');
    div.classList.add('download');
    const container = document.createElement('div');
    container.classList.add('downloadcta');
    const button = document.createElement('div');
    button.classList.add('downloadBox');
    const link = document.createElement('a');
    link.href = url;
    button.textContent = 'DOWNLOAD'; 
    const icon = document.createElement('img');
    icon.src = _RESOURCES_images_achieve_png__WEBPACK_IMPORTED_MODULE_0__;
    button.appendChild(icon);
    link.appendChild(button);
    div.appendChild(container);
    div.appendChild(link);
    return div
}

const createHover = (url) => {
    const div = document.createElement('div');
    const view = document.createElement('div');
    view.textContent = 'view reports >';
    view.classList.add('viewText');
    view.addEventListener('click', () => {
        document.querySelector('aside').style.display = 'block';
    });
    const download =   document.createElement('div');
    const link = document.createElement('a');
    link.href = url;
    const icon = document.createElement('img');
    icon.src = _RESOURCES_images_achieve_png__WEBPACK_IMPORTED_MODULE_0__;
    icon.classList.add('hoverIcon');
    link.appendChild(icon);
    download.appendChild(link);
    div.appendChild(view);
    div.appendChild(download);
    div.classList.add('hover');
    return div;
}

const displayStarted = () => {
    const main = reset();
    
    const divImgAchieve = document.createElement("div");
    divImgAchieve.classList.add("div-img-achieve");
    

    const imgAchieve = document.createElement("img");
    divImgAchieve.appendChild(imgAchieve);
    imgAchieve.src = _RESOURCES_images_achieve_png__WEBPACK_IMPORTED_MODULE_0__;
    imgAchieve.classList.add('fullImg');
    imgAchieve.id = 'getStartImg';
    
    const startingHeader = document.createElement('h2');
    startingHeader.textContent = 'GETTING STARTED WITH PRODUCTION ELA';
    startingHeader.id = 'getStartHead';
    divImgAchieve.appendChild(startingHeader);
    main.appendChild(divImgAchieve);
    
    const genSection = document.createElement('section');
    const genHead = document.createElement('h3');
    genHead.textContent = 'General Instructions';
    genSection.appendChild(genHead);
    const genDesc = document.createElement('p');
    genDesc.textContent = 'Follow these instructions when preparing for any Production ELA...';
    genSection.appendChild(genDesc);
    const report = displayTask('1', 'Report Format:', ['Use A4 paper or full-scalp sheets for writing your reports.', 'The instructor will specify the preferred format; if necessary.']);
    genSection.appendChild(report);
    const attend = displayTask('2', 'Attendance:', ['Punctuality is crucial for all Production ELA sessions.', 'Ensure you do not miss any session.']);
    genSection.appendChild(attend);
    main.appendChild(genSection);

    const repSection = document.createElement('section');
    const repHead = document.createElement('h3');
    repHead.textContent = 'Report Structure';
    repSection.appendChild(repHead);
    const repDesc = document.createElement('p');
    repDesc.textContent = 'It is most expedient that you follow the structure given below, when writing your reports.';
    repSection.appendChild(repDesc);
    const id = displayTask('1', 'Identification:', ['Name: [Your full name]', 'Matriculation Number: [Your Matriculation Number]', 'Department: [Your department]', 'Serial Number: [Your ELA Serial number Upon registration]', 'Section: []', 'Title of Experiment: [e.g “Bench fitting”]', 'Experiment Code: [e.g “AM201”]']);
    repSection.appendChild(id);
    const objective = displayTask('2', 'Objectives:', ['State the aim of the experiment as listed in the manual. Write down all the objectives provided.']);
    repSection.appendChild(objective);
    const tools = displayTask('3', 'Apparatus/Tools:', ['List all tools used in the experiment.', 'Include diagrams of the tools and ensure they are well-labeled and neatly drawn.']);
    repSection.appendChild(tools);
    const theory = displayTask('4', 'Theory:', ['Provide a theoretical background relevant to the practical.', 'Discuss the applications and sequence of operations, supplemented with diagrams where necessary.', 'Ensure the content is focused and does not deviate from the topic.']);
    repSection.appendChild(theory);
    const procedures = displayTask('5', 'Procedures:', ['Document the procedure exactly as written in the manual.', 'Use diagrams to explain the steps, if possible.']);
    repSection.appendChild(procedures);
    const precautions = displayTask('6', 'Precautions:', ['List the precautions taken during the experiment in past tense.', '~Example: “I ensured that I...”']);
    repSection.appendChild(precautions);
    const conclusions = displayTask('7', 'Conclusion:', ['Summarize the outcomes of the experiment.', '~Example: “At the end of this experiment, we were able to develop a lap joint, understand the sequence of operations involved, and achieve a comprehensive understanding of the process.”']);
    repSection.appendChild(conclusions);
    const references = displayTask('8', 'References:', ['Cite books and manuals relevant to the experiment. Do not include web links.', '~Example:', '~~“Production Engineering Laboratory Manual for ELA201 and ELA202’’ by the Department of Production Engineering, University of Benin.', '~~”The TIG Welding Book” by Todd Bridigum.', '~~”Welding for Dummies” by Steven Robert Farnsworth.']);
    repSection.appendChild(references);
    main.appendChild(repSection);

    const addSection = document.createElement('section');
    const addHead = document.createElement('h2');
    addHead.textContent = 'Additional Notes';
    addSection.appendChild(addHead);
    const para1 = document.createElement('p');
    para1.textContent = "Always follow the instructor's specific guidelines regarding report format and content to ensure good marks.";
    addSection.appendChild(para1);
    const para2 = document.createElement('p');
    para2.textContent = "Submit your report on time. The report submission time is usually given by the instructor.";
    addSection.appendChild(para2);
    const good = document.createElement('div');
    good.textContent = 'GOOD LUCK!!!';
    addSection.appendChild(good);
    main.appendChild(addSection);
    const hover = createHover('#');
    main.appendChild(hover);
    const download = createDownload('#');
    main.appendChild(download);
};


const displayWW201 = () => {
    const main = reset();
        const head = document.createElement('h1');
        head.textContent  = 'Introduction to Wood Work practice{WW201}';
        main.appendChild(head);
        const objective = document.createElement('section');
        const objHead = document.createElement('h2');
        objHead.textContent = 'OBJECTIVES';
        objective.appendChild(objHead);
        const objList = document.createElement('ul');
        const objectives = ['To know the materials used in woodwork shop','To familiarize with the tools used in woodwork shop','To know how to cut wood', 'To know how to plane wood'];
        let list = [];
        for(let i = 0; i < objectives.length; i++){
            list[i] = document.createElement('li');
            list[i].textContent = objectives[i];
            objList.appendChild(list[i]);
        }
        objective.appendChild(objList);
        main.appendChild(objective);
        const appHead = document.createElement('h2');
        appHead.textContent = 'Apparatus';
        main.appendChild(appHead);
        const section = document.createElement('section');
        section.classList.add('appBox');
        const apparatus = [
            {
                cap: 'Timber',
                image: _RESOURCES_images_achieve_png__WEBPACK_IMPORTED_MODULE_0__
            },
            {
                cap: 'Metre Rule',
                image: _RESOURCES_images_achieve_png__WEBPACK_IMPORTED_MODULE_0__
            },
            {
                cap: 'Measuring Steel Tape',
                image: _RESOURCES_images_achieve_png__WEBPACK_IMPORTED_MODULE_0__
            },
            {
                cap: 'Gauges',
                image: _RESOURCES_images_achieve_png__WEBPACK_IMPORTED_MODULE_0__
            },
            {
                cap: 'Marking Knife Scribers',
                image: pic22
            },
            {
                cap: 'Bevel Square',
                image: pic23
            },
            {
                cap: 'C-clamp',
                image: pic24
            },
            {
                cap: 'T-clamp',
                image: pic25
            },
            {
                cap: 'Saws',
                image: pic26
            },
            {
                cap: 'Chisel',
                image: pic27
            },
            {
                cap: 'Wooden Jack Plane',
                image: pic28
            },
            {
                cap: 'Bradawl',
                image: pic29
            },
            {
                cap: 'Brace',
                image: pic30
            },
            {
                cap: 'Auger bit',
                image: pic31
            },
            {
                cap: 'Hand drill',
                image: pic32
            },
            {
                cap: 'Mallet',
                image: pic33
            },
            {
                cap: 'Claw Hammer',
                image: pic34
            },
            {
                cap: 'Pincer',
                image: pic35
            },
            {
                cap: 'Screw driver',
                image: pic36
            },
            {
                cap: 'Wood rasp file',
                image: pic37
            },
            {
                cap: 'Try Square',
                image: pic38
            },
            {
                cap: 'Bench Vice',
                image: pic39
            },
            {
                cap: 'Work Bench',
                image: pic40
            },
            {
                cap: 'Paring Chisel',
                image: pic41
            },
            {
                cap: 'Smooth Plane',
                image: pic42
            },

        ];
        let appBox = [];
        let appImage = [];
        let appCaption = [];
        for(let i = 0; i < apparatus.length; i++){
            appBox[i] = document.createElement('div');
            appImage[i] = document.createElement('img');
            appCaption[i] = document.createElement('p');
            appImage[i].src =  apparatus[i].image;
            appCaption[i].textContent = apparatus[i].cap;
            appBox[i].appendChild(appImage[i]);
            appBox[i].appendChild(appCaption[i]);
            section.appendChild(appBox[i]);
        }
        main.appendChild(section);
        const theory = document.createElement('section');
        const theoHead = document.createElement('h2');
        theoHead.textContent = 'THEORY';
        theory.appendChild(theoHead);
        const explain = document.createElement('div');
        explain.textContent = 'Woodworking practice is the art of creating functional or decorative objects from wood. Carpentry is a skilled trade that involves working with wood to create structures, furniture, and various wooden objects. Carpenters use a combination of hand tools and power tools to measure, cut, shape, join, and finish wood materials. Carpentry is a skilled trade within the broader field of woodworking that focuses specifically on constructing wooden structures and objects for various purposes. Carpentry is a skilled trade that involves the cutting, shaping, and installation of wood building materials. Hand saws, power saws (miter and circular saws), hammers, chisels, drills, levels, squares, and measuring tapes are examples of common carpentry tools.';
        theory.appendChild(explain);
        const explain1 = document.createElement('div');
        explain1.textContent = 'Utilizing specialist tools like joinery machines, routers, planers, and pneumatic nail guns may be necessary for advanced carpentry. Carpentry being a highly skilled job, carpentry demands accuracy, focus on detail, and a solid grasp of construction principles. As carpenters witness their creations come to life and make a positive impact on the built world, it provides opportunity for creativity, craftsmanship, and job satisfaction.';
        theory.appendChild(explain1);
        const description = document.createElement('p');
        description.textContent = 'Carpentry is used in different aspects and also applied in different fields which include:';
        theory.appendChild(description);
        const checkList = document.createElement('ul');
        const checks = ['Building frameworks', 'Flooring', 'Doors and windows', 'Roofing', 'Staircases', 'Furniture making etc.'];
        let array = [];
        for(let i = 0; i < checks.length; i++){
            array[i] = document.createElement('li');
            array[i].textContent = checks[i];
            checkList.appendChild(array[i]);
        }
        theory.appendChild(checkList);
        const text2 = document.createElement('p');
        text2.textContent = 'One of the materials used in wood work practice is wood. Wood is a natural material derived from the stems, branches, and roots of trees and there are different classes of wood, the main classes include:';
        theory.appendChild(text2);
        const categories = [
            {
            title: 'Soft wood',
            text: 'Softwood comes from coniferous trees(gymnosperms), also known as evergreens, which have needles or cones or scale-like leaves. These trees tend to grow faster than hardwoods and are generally less expensive. Softwoods are typically lighter in weight and have a simpler grain structure and they are commonly used in construction, framing, decking, and paper production. Examples include pine, spruce, cedar, and fir.',
            image: ''
            },
            {
            title: 'Hard wood',
            text: 'Comes from deciduous trees (angiosperms) that typically have broad leaves. Hardwoods are known for their dense structure and are often used in furniture making, flooring, cabinetry, and woodworking crafts. Examples include oak, maple, cherry, and walnut.',
            image: ''
            },
            ];
            categories.forEach((item) => {
            theory.appendChild(createDivs(item));
            });
        main.appendChild(theory);
        const practicals = document.createElement('section');
        const head1 = document.createElement('h2');
        head1.textContent = 'PRACTICAL 1 : HOW TO CUT WOOD';
        practicals.appendChild(head1);
        const procedure1 = document.createElement('div');
        const head2 = document.createElement('h3');
        head2.textContent = 'PROCEDURES';
        procedure1.appendChild(head2);
        const parts = [
            {
            list: 'Measure wood 600 x 75 x 25mm',
            video: ''
            },
            {
            list: 'Mark the piece using tape and pencil',
            video: '<iframe src="https://www.youtube-nocookie.com/embed/nuEz8TtrfjM?si=317XhtwxAT8UBvLZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
            },
            {
            list: 'Use rip saw to cut 600mm long',
            video: '<iframe src="https://www.youtube-nocookie.com/embed/0IsDvh7GR4A?si=iRoHhqI4YNqkoDaw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
            },
            {
            list: 'Use the cross cut saw to the required length',
            video: '<iframe src="https://www.youtube-nocookie.com/embed/UmQdaWy3Pw0?si=o0A7GIikOJTJ1uCd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
            },
            {
            list: 'Mark out diagonal line using the sliding bevel',
            video: '<iframe src="https://www.youtube-nocookie.com/embed/nzQYd8wxCQE?si=8L3MYpv6SQVbkooR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
            },
            {
            list: 'Use tenon saw to cut the diagonal line',
            video: '<iframe src="https://www.youtube-nocookie.com/embed/au8ejou2VpE?si=ozX0ptTuVx-uyUdk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
            },
            ];
            parts.forEach((item) => {
            procedure1.appendChild(createVids(item));
            });
        practicals.appendChild(procedure1);
        const description1 = document.createElement('p');
        description1.textContent = 'The link to watch how to perform the butt joint practical is below 👇';
        practicals.appendChild(description1);
        const video3 = document.createElement('div');
        video3.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/jxvOepMFtbA?si=UPxGfMvk_uYu0Mud" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        practicals.appendChild(video3);
        const head3 = document.createElement('h2');
        head3.textContent = 'PRACTICAL 2 : PLANNING OF WOOD';
        practicals.appendChild(head3);
        const procedure2 = document.createElement('div');
        const head4 = document.createElement('h3');
        head4.textContent = 'PROCEDURES';
        procedure2.appendChild(head4);
        const parts1 = [
            {
            list: 'Have timber 600mm by 75mm by 25mm thick',
            video: ''
            },
            {
            list: 'Fix the timber using clamps',
            video: '<iframe src="https://www.youtube-nocookie.com/embed/t3v3J1EFrR8?si=9UKoG3eAqFxBVC4F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
            },
            {
            list: 'Use plane in smoothing the surface',
            video: '<iframe src="https://www.youtube-nocookie.com/embed/c65rKk8frhc?si=WzZWCbuzb5Grk_A7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
            },
            {
            list: 'Use the cross cut saw to the required length',
            video: '<iframe src="https://www.youtube-nocookie.com/embed/UmQdaWy3Pw0?si=o0A7GIikOJTJ1uCd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
            },
            {
            list: 'Use try square to test the surface for flatness, when flat mark on it',
            video: '<iframe src="https://www.youtube-nocookie.com/embed/JxqqVFL_HN0?si=B0LdOsZpFApRrbr_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
            },
            {
            list: 'Turn the edge and plane and test that it is square to the face and mark edge mark',
            video: ''
            },
            {
            list: 'Gauge the timber to have uniform thickness using the marking guage and plan off the surplus',
            video: ''
            },
            {
            list: 'Plane the other edge to give',
            video: ''
            },
            ];
            parts1.forEach((item) => {
            procedure2.appendChild(createVids(item));
            });
        practicals.appendChild(procedure2);
        const head5 = document.createElement('h2');
        head5.textContent = 'PRACTICAL 3 : TEE HALVING JOINTS';
        practicals.appendChild(head5);
        const procedure3 = document.createElement('div');
        const head6 = document.createElement('h3');
        head6.textContent = 'PROCEDURES';
        procedure3.appendChild(head6);
        const parts2 = [
            {
            list: 'Mark out the pieces one for socket and the other for pin using tape, marking gauge, pencil and try square',
            video: ''
            },
            {
            list: 'Cut the marking line as specified using tenon saw',
            video: ''
            },
            {
            list: 'Remove the waste using chisel and mallet',
            video: ''
            },
            {
            list: 'Clean the bottom using rasp',
            video: ''
            },
            {
            list: 'Cut the pin to size the pocket',
            video: ''
            },
            {
            list: 'Fix the joint by applying light mallet below',
            video: ''
            },
            {
            list: 'When properly fix test for square-ness using try square',
            video: ''
            },
            ];
            parts2.forEach((item) => {
            procedure3.appendChild(createVids(item));
            });
        practicals.appendChild(procedure3);
        const description2 = document.createElement('p');
        description2.textContent = 'The link to watch how to perform the Tee halving Joint practical is below 👇';
        practicals.appendChild(description2);
        const video4 = document.createElement('div');
        video4.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/5xOXRyVJ_1A?si=h5s7a-IHCwNsZdzO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        practicals.appendChild(video4);
        const head7 = document.createElement('h2');
        head7.textContent = 'PRACTICAL 4: DOVETAIL HALVING JOINT';
        practicals.appendChild(head7);
        const procedure4 = document.createElement('div');
        const head8 = document.createElement('h3');
        head8.textContent = 'PROCEDURES';
        procedure4.appendChild(head8);
        const parts3 = [
            {
            list: 'Mark out the two pieces, one having the socket and the other dovetail pin',
            video: ''
            },
            {
            list: 'Use try square to transfer the marks to the edges',
            video: ''
            },
            {
            list: 'First cut the socket using dovetail saw',
            video: ''
            },
            {
            list: 'Scoop out the waste and clean up using chisels',
            video: ''
            },
            {
            list: 'Cut the pin and the dovetail',
            video: ''
            },
            {
            list: 'Including the waste portion clean the pin using paring chisel',
            video: ''
            },
            {
            list: 'Fix and adjust by removing unwanted parts',
            video: ''
            },
            {
                list: 'Fix finally making sure there is a flush surface',
                video: ''
                },
                {
                    list: 'Plan the joint and test for square-ness',
                    video: ''
                    },
            ];
            parts3.forEach((item) => {
            procedure4.appendChild(createVids(item));
            });
        practicals.appendChild(procedure4);
        const description3 = document.createElement('p');
        description3.textContent = 'The link to watch how to perform the Dovetail halving Joint practical is below 👇';
        practicals.appendChild(description3);
        const video5 = document.createElement('div');
        video5.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/9jgRfef4ZnE?si=QyfCg0XiURVowmfH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        practicals.appendChild(video5);
        main.appendChild(practicals);
        const precaution = document.createElement('section');
        const cautionHead = document.createElement('h3');
        cautionHead.textContent = "PRECAUTIONS";
        precaution.appendChild(cautionHead);
        const cautionList = document.createElement('ul');
        const precautions = ["I ensured that I wore my lab coat and personal protective equipment (PPE)","I ensured that proper techniques for cutting, drilling, and sanding to minimize the risk of accidents.","I ensured that I avoided cutting towards yourself and keep your hands and fingers away from blades and moving parts."];
        let cautionBox = [];
        for(let i = 0; i < precautions.length; i++){
            cautionBox[i] = document.createElement('li');
            cautionBox[i].textContent = precautions[i];
            cautionList.appendChild(cautionBox[i]);
        }
        precaution.appendChild(cautionList);
        main.appendChild(precaution);
        const conclusion = document.createElement('section');
        const concHead = document.createElement('h3');
        concHead.textContent = "CONCLUSION:";
        conclusion.appendChild(concHead);
        const concText = document.createElement('p');
        concText.textContent = "At the end of this experiment, cutting of wood, planning of wood was understood and also a tee halving joint, dovetail halving joint was developed and was also understood.";
        conclusion.appendChild(concText);
        main.appendChild(conclusion);
        const references = document.createElement('section');
        const refHead = document.createElement('h3');
        refHead.textContent = "REFERENCES";
        references.appendChild(refHead);
        const refList = document.createElement('ul');
        const reference = ["Production Engineering Laboratory Manual for ELA201 and ELA202 by Department of Production Engineering, University of Benin.", "Foundations of Woodworking: Essential Joinery Techniques and Building Strategies by Michael Pekovich", "The Complete Manual of Woodworking by Albert Jackson, David Day, and Simon Jennings"];
        let refBox = [];
        for(let i = 0; i < reference.length; i++){
            refBox[i] = document.createElement('li');
            refBox[i].textContent = reference[i];
            refList.appendChild(refBox[i]);
        }
        references.appendChild(refList);
        main.appendChild(references);
        const hover = createHover('#');
        main.appendChild(hover); 
        const download = createDownload('#');
        main.appendChild(download);
};


const displayEE206 = () => {
    const main = reset();
        const head = document.createElement('h1');
        head.textContent  = 'Single Phase Transformer';
        main.appendChild(head);

        const aim = document.createElement('section');
        const aimHead = document.createElement('h2');
        aimHead.textContent = 'AIMS';
        aim.appendChild(aimHead);
        const aimList = document.createElement('ul');
        const aims = ['To verify that the voltage ratio between the primary voltage and secondary voltage of a transformer is equal to the turns winding ratio', 'To study the characteristics of a transformer on No-load and on Load']
        let list2 = [];
        for(let i = 0; i < aims.length; i++){
            list2[i] = document.createElement('li');
            list2[i].textContent = aims[i];
            aimList.appendChild(list2[i]);
        }
        aim.appendChild(aimList);

        const objective = document.createElement('section');
        const objHead = document.createElement('h2');
        objHead.textContent = 'OBJECTIVES';
        objective.appendChild(objHead);
        const objList = document.createElement('ul');
        const objectives = ['For the Transformer Ratio test: To show that secondary to primary voltage ratio (Vs/Vp) equals secondary turns to primary turns (Ns/Np)', 'For the Transformer No Load test: To demonstrate that power losses (called corelosses) occur internally in a transformer.', 'For the Transformer Load test: To determine transformer efficiency (i.e ratio of output power to input power)'];
        let list = [];
        for(let i = 0; i < objectives.length; i++){
            list[i] = document.createElement('li');
            list[i].textContent = objectives[i];
            objList.appendChild(list[i]);
        }
        objective.appendChild(objList);
        main.appendChild(aim);
        main.appendChild(objective);
        const appHead = document.createElement('h2');
        appHead.textContent = 'Apparatus';
        main.appendChild(appHead);
        const section = document.createElement('section');
        section.classList.add('appBox');
        const apparatus = [
            {
                cap: 'Steel ScaleVariac 0 - 270v, 8A.2KVA ',
                image: _RESOURCES_images_daniel1_png__WEBPACK_IMPORTED_MODULE_1__
            },
            {
                cap: 'Wire guage',
                image: _RESOURCES_images_achieve_png__WEBPACK_IMPORTED_MODULE_0__
            },
            {
                cap: 'Micrometer',
                image: _RESOURCES_images_achieve_png__WEBPACK_IMPORTED_MODULE_0__
            },
            {
                cap: 'Vernier Calliper',
                image: _RESOURCES_images_achieve_png__WEBPACK_IMPORTED_MODULE_0__
            },
            {
                cap: 'Steel square',
                image: _RESOURCES_images_achieve_png__WEBPACK_IMPORTED_MODULE_0__
            },
            {
                cap: 'Divider',
                image: _RESOURCES_images_achieve_png__WEBPACK_IMPORTED_MODULE_0__
            },
            {
                cap: 'Scriber',
                image: _RESOURCES_images_achieve_png__WEBPACK_IMPORTED_MODULE_0__
            },
            {
                cap: 'Trammel Point',
                image: _RESOURCES_images_achieve_png__WEBPACK_IMPORTED_MODULE_0__
            },
            {
                cap: 'Hand snips',
                image: _RESOURCES_images_achieve_png__WEBPACK_IMPORTED_MODULE_0__
            },
            {
                cap: 'Punches',
                image: _RESOURCES_images_achieve_png__WEBPACK_IMPORTED_MODULE_0__
            },
            {
                cap: 'Punches',
                image: _RESOURCES_images_achieve_png__WEBPACK_IMPORTED_MODULE_0__
            },
            {
                cap: 'Chisel',
                image: _RESOURCES_images_achieve_png__WEBPACK_IMPORTED_MODULE_0__
            },
            {
                cap: 'Plier',
                image: _RESOURCES_images_achieve_png__WEBPACK_IMPORTED_MODULE_0__
            },
            {
                cap: 'Soldering Iron',
                image: _RESOURCES_images_achieve_png__WEBPACK_IMPORTED_MODULE_0__
            },
            {
                cap: 'Hammer',
                image: _RESOURCES_images_achieve_png__WEBPACK_IMPORTED_MODULE_0__
            },
            {
                cap: 'Files',
                image: _RESOURCES_images_achieve_png__WEBPACK_IMPORTED_MODULE_0__
            },
            {
                cap: 'Mallet',
                image: _RESOURCES_images_achieve_png__WEBPACK_IMPORTED_MODULE_0__
            },

        ];
        let appBox = [];
        let appImage = [];
        let appCaption = [];
        for(let i = 0; i < apparatus.length; i++){
            appBox[i] = document.createElement('div');
            appImage[i] = document.createElement('img');
            appCaption[i] = document.createElement('p');
            appImage[i].src =  apparatus[i].image;
            appCaption[i].textContent = apparatus[i].cap;
            appBox[i].appendChild(appImage[i]);
            appBox[i].appendChild(appCaption[i]);
            section.appendChild(appBox[i]);
        }
        main.appendChild(section);
        const theory = document.createElement('section');
        const theoHead = document.createElement('h2');
        theoHead.textContent = 'THEORY';
        theory.appendChild(theoHead);
        const explain = document.createElement('div');
        explain.textContent = 'A transformer is a passive device that moves electrical energy from one circuit to another. The electromagnetic induction concept provides the foundation for energy transfer by altering the voltage and current levels. Transformers are devices that use electromagnetic induction to transmit electrical energy between two or more circuits.Transformers fall into two primary categories according on their voltage ratio:';
        theory.appendChild(explain);
        const explain1 = document.createElement('div');
        explain1.textContent = ' Transformers fall into two primary categories according on their voltage ratio:';
        theory.appendChild(explain1);
        const categories = [
            {
                title: 'Step-up transformer:',
                text: 'The secondary winding of a step-up transformer has more turns than the main winding. At the secondary output, this lowers the current and raises the voltage. Step-up transformers are utilized in situations like power transmission where a high voltage is required. This device raises the voltage (for example, from 110V to 220V) from the primary to the secondary winding',
                image: ''
            },
            {
                title: 'Step-down transformer:',
                text: 'The secondary winding of a step-down transformer has fewer turns than the primary winding. At the secondary output, this lowers the voltage and raises the current. When a low voltage is required, as to power electronic equipment, step-down transformers are employed. Reduces the voltage (e.g., from 220V to 110V) from the primary to the secondary winding.',
                image: ''
            },
        
            ];
            categories.forEach((item) => {
            theory.appendChild(createDivs(item));
            });
        const description = document.createElement('p');
        description.textContent = 'Applications of transformers include:';
        theory.appendChild(description);
        const part = [
            {
            title: 'Power Distribution:',
            text: 'Transformers are crucial in the distribution of electrical power across long distances. High-voltage transformers step up the voltage for efficient transmission and then step it down for safe residential and commercial use.',
            image: ''
            },
            {
            title: 'Electronics:',
            text: 'Used in power supplies for electronic devices, audio systems, and various other applications.',
            image: ''
            },
            {
            title: 'Industrial Applications:',
            text: 'Transformers are used in manufacturing and industrial processes where specific voltage levels are required.',
            image: ''
            }
            ];
            part.forEach((item) => {
            theory.appendChild(createDivs(item));
            });
        main.appendChild(theory);
        const practicals = document.createElement('section');
        const step1 = document.createElement('h2');
        step1.textContent = 'PRACTICAL 1 : HOW TO MAKE RECTANGULAR TRAY.';
        practicals.appendChild(step1);
        const step3 = document.createElement('h3');
        step3.textContent = 'PROCEDURE:';
        practicals.appendChild(step3);
        const stepList1 = document.createElement('ul');
        const steps1 = ["Draw 2D/3D sketches as per scale",'Draw the development considering all the lines must be a “True length”', 'Construct the base of the tray', 'Construct the two sides of the tray', 'Construct the two ends of the tray', 'Set 5mm extra, allowance on the side face for joining the corners by seaming', 'Notch the points to prevent bulging on seaming', 'Cut the development shapes on lines  by using paper cutting scissor', 'Place and fix the development on given G.P sheet by using sticker', 'Punch two points on each bending line', 'Mark the boundary line by using marking pen', 'Remove the paper development join the two punch points by a scriber or marking pen', 'Remove the paper development join the two points by a scriber or marking pen', 'Shear the boundary lines by hand snip', 'Flattering the sheet by using mallet on flatter', 'Always bend the seaming line first and remaining lines to get the desired shape by forming', 'Finish the surface keeping on stake to shape', 'Solder the joint', 'Finish surface finishing and complete the tray.'];
        let stepBox1 = [];
        for(let i = 0; i < steps1.length; i++){
            stepBox1[i] = document.createElement('li');
            stepBox1[i].textContent = steps1[i];
            stepList1.appendChild(stepBox1[i]);
        }
        practicals.appendChild(stepList1);
        const text3 = document.createElement('p');
        text3.textContent = 'The link to watch how to make rectangular tray is below 👇';
        practicals.appendChild(text3);
        const video3 = document.createElement('div');
        video3.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/fNB1sunQ66g?si=rTxJW33H8LHtLV_2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        practicals.appendChild(video3);
        const step = document.createElement('h2');
        step.textContent = 'PRACTICAL 2 : HOW TO MAKE DUST PAN';
        practicals.appendChild(step);
        const step2 = document.createElement('h3');
        step2.textContent = 'PROCEDURE:';
        practicals.appendChild(step2);
        const stepList = document.createElement('ul');
        const steps = ['Draw the 2D/3D sketches as per scale', 'Draw the development considering all lines must be a “True length”', 'Construct the base of the tray', 'Construct the two sides of the tray', 'Construct the two ends of the tray', 'Set 5mm extra, allowance on side face for joining the corners by seaming', 'Notch the points to prevent bulging on seaming', 'Cut the development shape on lines using paper cutting scissor', 'Place and fix the development on given G.P sheet by using sticker', 'Punch two points on each bending line', 'Mark the boundary line by using marking pen', 'Remove the paper development join the two punch points by a scriber or marking pen', 'Shear the boundary lines by using hand snip', 'Flattering the sheet by using mallet on flatter', 'Always bend the seaming line first and remaining lines to get the desired shape by forming', 'Finish the surface keeping on stake to shape', 'Solder the joint', 'Finish the surface finishing and complete the tray.'];
        let stepBox = [];
        for(let i = 0; i < steps.length; i++){
            stepBox[i] = document.createElement('li');
            stepBox[i].textContent = steps[i];
            stepList.appendChild(stepBox[i]);
        }
        practicals.appendChild(stepList);
        const text2 = document.createElement('p');
        text2.textContent = 'The link to watch how make dustpan is below 👇';
        practicals.appendChild(text2);
        const video2 = document.createElement('div');
        video2.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/ozeOvqsbirM?si=BZdvxrVrL4bBM_Ac" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        practicals.appendChild(video2);
        main.appendChild(practicals);
        const precaution = document.createElement('section');
        const cautionHead = document.createElement('h3');
        cautionHead.textContent = "PRECAUTIONS";
        precaution.appendChild(cautionHead);
        const cautionList = document.createElement('ul');
        const precautions = ["I ensured that I wore my lab coat and personal protective equipment (PPE)","I ensured that proper techniques for cutting, drilling, and sanding to minimize the risk of accidents.","I ensured that I checked all tools and machinery for damage or malfunctions before using them and also verified that every guard is present and operating as intended.", "I ensured that I was mindful of where my hands were and avoid reaching under or behind machinery because sheet metal can have very sharp edges that can easily cut someone."];
        let cautionBox = [];
        for(let i = 0; i < precautions.length; i++){
            cautionBox[i] = document.createElement('li');
            cautionBox[i].textContent = precautions[i];
            cautionList.appendChild(cautionBox[i]);
        }
        precaution.appendChild(cautionList);
        main.appendChild(precaution);
        const conclusion = document.createElement('section');
        const concHead = document.createElement('h3');
        concHead.textContent = "CONCLUSION:";
        conclusion.appendChild(concHead);
        const concText = document.createElement('p');
        concText.textContent = "At the end of this experiment, we were able to make a rectangular tray, dustpan by using different sheet metal processes, techniques and also used the different materials involved in sheet metal practice.";
        conclusion.appendChild(concText);
        main.appendChild(conclusion);
        const references = document.createElement('section');
        const refHead = document.createElement('h3');
        refHead.textContent = "REFERENCES";
        references.appendChild(refHead);
        const refList = document.createElement('ul');
        const reference = ["Production Engineering Laboratory Manual for ELA201 and ELA202 by Department of Production Engineering, University of Benin.", "Sheet Metal Fabrication Basics by Tim Remus", "Sheet Metal Forming Processes and Applications by Taylan Altan, Erman Tekkaya, and Günter Hirt"];
        let refBox = [];
        for(let i = 0; i < reference.length; i++){
            refBox[i] = document.createElement('li');
            refBox[i].textContent = reference[i];
            refList.appendChild(refBox[i]);
        }
        references.appendChild(refList);
        main.appendChild(references);
        const hover = createHover('#');
        main.appendChild(hover);
        const download = createDownload('#');
        main.appendChild(download);
};


const displayBF201 = () => {
    const main = reset();
        const head = document.createElement('h1');
        head.textContent  = 'Introduction to fitting shop{BF201}';
        main.appendChild(head);
        const objective = document.createElement('section');
        const objHead = document.createElement('h2');
        objHead.textContent = 'OBJECTIVES';
        objective.appendChild(objHead);
        const objList = document.createElement('ul');
        const objectives = ['To know the tools used in the fitting shop', 'To know how to mark out', 'To know the methods of filing','To produce a square fit',];
        let list = [];
        for(let i = 0; i < objectives.length; i++){
            list[i] = document.createElement('li');
            list[i].textContent = objectives[i];
            objList.appendChild(list[i]);
        }
        objective.appendChild(objList);
        main.appendChild(objective);
        const appHead = document.createElement('h2');
        appHead.textContent = 'Apparatus';
        main.appendChild(appHead);
        const section = document.createElement('section');
        section.classList.add('appBox');
        const apparatus = [
            {
                cap: 'Work Bench',
                image: pic40
            },
            {
                cap: 'Steel Rule',
                image: pic43
            },
            {
                cap: 'Bench Vice',
                image: pic39
            },
            {
                cap: 'Scriber',
                image: pic49
            },
            {
                cap: 'Try square',
                image: pic38
            },
            {
                cap: 'Vernier Calliper',
                image: pic46
            },
            {
                cap: 'Hacksaw',
                image: pic68
            },
            {
                cap: 'Ball peen Hammer',
                image: pic69
            },
            {
                cap: 'Files(flat files e.t.c)',
                image: pic70
            },
        ];
        let appBox = [];
        let appImage = [];
        let appCaption = [];
        for(let i = 0; i < apparatus.length; i++){
            appBox[i] = document.createElement('div');
            appImage[i] = document.createElement('img');
            appCaption[i] = document.createElement('p');
            appImage[i].src =  apparatus[i].image;
            appCaption[i].textContent = apparatus[i].cap;
            appBox[i].appendChild(appImage[i]);
            appBox[i].appendChild(appCaption[i]);
            section.appendChild(appBox[i]);
        }
        main.appendChild(section);
        const theory = document.createElement('section');
        const theoHead = document.createElement('h2');
        theoHead.textContent = 'THEORY';
        theory.appendChild(theoHead);
        const explain = document.createElement('div');
        explain.textContent = 'Bench fitting is the process of shaping and assembling metal components using hand tools and machines.The goal of bench fitting is to create parts that fit together precisely without any gaps or binding. This is achieved by carefully marking out, cutting, filing, and assembling the components.Here are some of the common tasks involved in bench fitting:';
        theory.appendChild(explain);
        const categories = [
            {
                title: 'Marking out',
                text: 'This involves using scribers, punches, and other tools to transfer dimensions from a drawing or template to the metal workpiece.',
                image: ''
            },
            {
                title: 'Cutting',
                text: 'Hacksaws, bandsaws, and shears are used to cut the metal to the desired shape.',
                image: ''
            },
            {
                title: 'Filing',
                text: 'Files are used to smooth and deburr the edges of the metal, and to achieve the required tolerance.There are two common methods of filing which includes:',
                image: ''
            },
            {
                title: '    -   Cross filing',
                text: 'Effective removal of maximum amount of metal in the shortest possible time. The file must remain horizontal throughout the stroke.',
                image: ''
            },
            {
                title: '    -    Draw filing',
                text: 'This method is used to remove file marks and for finishing operations. The file is gripped as close to the work as possible',
                image: ''
            },
        ];
        categories.forEach((item) => {
        theory.appendChild(createDivs(item));
        }); 
        const text2 = document.createElement('p');
        text2.textContent = 'The link to watch how to perform these methods of filing is below 👇';
        theory.appendChild(text2);
        const video2 = document.createElement('div');
        video2.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/IVHh4ACI3ak?si=_4fruPQ4_sz4HFdV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        theory.appendChild(video2);
        const category = [
            {
                title: 'Drilling',
                text: 'Holes are drilled in the metal for pins, screws, and other fasteners.',
                image: ''
            },
            {
                title: 'Tapping',
                text: 'Threads are cut into holes so that screws and other fasteners can be inserted.',
                image: ''
            },
            {
                title: 'Assembly',
                text: 'The components are fitted together using clamps, and then they are permanently joined using techniques such as welding, brazing, or soldering.',
                image: ''
            },
        ];
        category.forEach((item) => {
            theory.appendChild(createDivs(item));
        });
        const head1 = document.createElement('h2');
        head1.textContent = 'APPLICATIONS OF BENCH FITTING';
        theory.appendChild(head1);
        const catalog = [
            {
                title: 'Machining',
                text: 'In machine shops, bench fitting is used to prepare parts for final assembly. This may involve filing components for a precise fit, drilling and tapping holes, or creating reference surfaces for other machining processes ',
                image: ''
            },
            {
                title: 'Metalwork',
                text: 'Metalworkers like blacksmiths and welders use bench fitting techniques to ensure parts fit together correctly before welding or riveting them permanently',
                image: ''
            },
            {
                title: 'Auto mechanics',
                text: 'Mechanics rely on bench fitting to repair and rebuild engines, gearboxes, and other vehicle components. They may use fitting to ensure bearings operate smoothly or that machined parts have the correct clearances.',
                image: ''
            },
            {
                title: 'Tool and die making',
                text: 'Craftspeople who design and build tools and dies use bench fitting extensively. They file and machine parts to achieve very precise tolerances for tools used in manufacturing.',
                image: ''
            },
        ];
        catalog.forEach((item) => {
        theory.appendChild(createDivs(item));
        }); 
        main.appendChild(theory);
        const practicals = document.createElement('section');
        const step1 = document.createElement('h2');
        step1.textContent = 'PRACTICAL 1 : HOW TO MAKE A SQUARE FIT FROM GIVEN MILD STEEL PIECES';
        practicals.appendChild(step1);
        const step3 = document.createElement('h3');
        step3.textContent = 'PROCEDURE:';
        practicals.appendChild(step3);
        const stepList1 = document.createElement('ul');
        const steps1 = ['The given mild steel flat piece is checked for given dimensions', 'One edge of given is filled to straightness with tough and smooth files and checked with adjacent', 'An adjacent is also filled such that is square to the first edge and checked with try square', 'Wet chalk is applied on one side of the flat and dried for marking', 'Lines are marked according to given figure, using odd leg calliper and steel rule', 'Using dot punch are made along the marked lines', 'The excess materials removed from the remaining two edges with the try square level up to half of the marked dots ', 'Finally buts are removed by the filing on the surface of fitted job'];
        let stepBox1 = [];
        for(let i = 0; i < steps1.length; i++){
            stepBox1[i] = document.createElement('li');
            stepBox1[i].textContent = steps1[i];
            stepList1.appendChild(stepBox1[i]);
        }
        practicals.appendChild(stepList1);
        const text3 = document.createElement('p');
        text3.textContent = 'The link to watch how to perform the square fit practical is below 👇';
        practicals.appendChild(text3);
        const video3 = document.createElement('div');
        video3.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/NHLpRgLGeEo?si=pzWNtzvkNie563nV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        practicals.appendChild(video3);
        const step = document.createElement('h2');
        step.textContent = 'PRACTICAL 2 : HOW TO MAKE DOVETAIL JOINT';
        practicals.appendChild(step);
        const step2 = document.createElement('h3');
        step2.textContent = 'PROCEDURE:';
        practicals.appendChild(step2);
        const stepList = document.createElement('ul');
        const steps = ['Place the work pieces on the table and using scriber draw straight lines parallel on it 55mm apart', 'Fix the workpieces firmly in the jaws of the vice', 'Cut along the marked line using a hacksaw', 'The cut out workpieces was now again placed firmly between the jaws of the vice in a such a way that a small portion of one of its edges is above the level of the jaw', 'Now filing is done by using a hand file', 'Using try square, it should be ensured that all the edges of the workpieces are at the right angles to adjacent edges', 'Placed the work on one of the faces on the surface plate and moved it along it’s surface to check the area on the work where strain has accumulated. File them properly '];
        let stepBox = [];
        for(let i = 0; i < steps.length; i++){
            stepBox[i] = document.createElement('li');
            stepBox[i].textContent = steps[i];
            stepList.appendChild(stepBox[i]);
        }
        practicals.appendChild(stepList);
        const text4 = document.createElement('p');
        text4.textContent = 'The link to watch how to perform the Dovetail Joint practical is below 👇';
        practicals.appendChild(text4);
        const video4 = document.createElement('div');
        video4.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/ZB_gn7cZRfo?si=xrhH2-0Iq3mOrspo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        practicals.appendChild(video4);
        const step5 = document.createElement('h2');
        step5.textContent = 'PRACTICAL 3 : HOW TO MAKE A V-FITTING';
        practicals.appendChild(step5);
        const step6 = document.createElement('h3');
        step6.textContent = 'PROCEDURE:';
        practicals.appendChild(step6);
        const stepList3 = document.createElement('ul');
        const steps4 = ['The given mild steel flat piece is checked for given dimensions', 'One edge of the given is filed with rough and smooth files and checked with try square for straightness', 'An adjacent edge is also filled such that it is square to first edge and checked with try square', 'Wet chalk is applied on one side of the flat and dried for marking', 'Lines are marked according to given figure, using odd leg calipers and steel rule ', 'Using dot punch, punches are made along the marked lines', 'The excess materials removed from the remaining two edges with try square level up to half of the marked dots', 'Finally buts are removed by the filing on the surface of the  fitted job'];
        let stepBox2 = [];
        for(let i = 0; i < steps4.length; i++){
            stepBox2[i] = document.createElement('li');
            stepBox2[i].textContent = steps4[i];
            stepList3.appendChild(stepBox2[i]);
        }
        practicals.appendChild(stepList);
        const text5 = document.createElement('p');
        text5.textContent = 'The link to watch how to perform the V-fitting practical is below 👇';
        practicals.appendChild(text5);
        const video5 = document.createElement('div');
        video5.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/iDJ_sMvXsYs?si=7EmKMZ27IPXjrECL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        practicals.appendChild(video5);
        main.appendChild(practicals)
        const precaution = document.createElement('section');
        const cautionHead = document.createElement('h3');
        cautionHead.textContent = "PRECAUTIONS";
        precaution.appendChild(cautionHead);
        const cautionList = document.createElement('ul');
        const precautions = ["I ensured that I wore my lab coat and personal protective equipment (PPE)","I ensured that I avoided error due to parallax where taking measurements","I Ensured that the workpiece is securely clamped in a vice or using appropriate holding tools before working on it.", ];
        let cautionBox = [];
        for(let i = 0; i < precautions.length; i++){
            cautionBox[i] = document.createElement('li');
            cautionBox[i].textContent = precautions[i];
            cautionList.appendChild(cautionBox[i]);
        }
        precaution.appendChild(cautionList);
        main.appendChild(precaution);
        const conclusion = document.createElement('section');
        const concHead = document.createElement('h3');
        concHead.textContent = "CONCLUSION:";
        conclusion.appendChild(concHead);
        const concText = document.createElement('p');
        concText.textContent = "At the end of this experiment, a V- fit, a square fit and dovetail joint was created from mild steel pieces and the methods of filing and the applications of bench fitting.";
        conclusion.appendChild(concText);
        main.appendChild(conclusion);
        const references = document.createElement('section');
        const refHead = document.createElement('h3');
        refHead.textContent = "REFERENCES";
        references.appendChild(refHead);
        const refList = document.createElement('ul');
        const reference = ["Production Engineering Laboratory Manual for ELA201 and ELA202 by Department of Production Engineering, University of Benin.", "Benchwork and Fitting by Dr. Hamesh Babu Nanvala", "Bench Work And Fitting by W J Peck"];
        let refBox = [];
        for(let i = 0; i < reference.length; i++){
            refBox[i] = document.createElement('li');
            refBox[i].textContent = reference[i];
            refList.appendChild(refBox[i]);
        }
        references.appendChild(refList);
        main.appendChild(references);
        const hover = createHover('#');
        main.appendChild(hover);
        const download = createDownload('#');
        main.appendChild(download);
};


const displayHS201 = () => {
        const main = reset();
        const head = document.createElement('h1');
        head.textContent  = 'Introduction to the welding shop practice{HS201}';
        main.appendChild(head);
        const objective = document.createElement('section');
        const objHead = document.createElement('h2');
        objHead.textContent = 'OBJECTIVES';
        objective.appendChild(objHead);
        const objList = document.createElement('ul');
        const objectives = [ 'To know how to prepare welding edge before welding', 'To know the different welding joints', 'To know the different welding positions', 'To know the various arc welding processes', 'To know the various arc welding equipments', 'To know the safety recommendations for arc welding processes','To produce a butt joint using arc welding'];
        let list = [];
        for(let i = 0; i < objectives.length; i++){
            list[i] = document.createElement('li');
            list[i].textContent = objectives[i];
            objList.appendChild(list[i]);
        }
        objective.appendChild(objList);
        main.appendChild(objective);
        const appHead = document.createElement('h2');
        appHead.textContent = 'Apparatus';
        main.appendChild(appHead);
        const section = document.createElement('section');
        section.classList.add('appBox');
        const apparatus = [
            {
                cap: 'Protective Clothing',
                image: pic71
            },
            {
                cap: 'Protective Equipment',
                image: pic72
            },
            {
                cap: 'Wire Brush',
                image: pic73
            },
            {
                cap: 'Welding cables',
                image: pic74
            },
            {
                cap: 'Hand Screen',
                image: pic75
            },
            {
                cap: 'Chipping Hammer',
                image: pic76
            },
            {
                cap: 'Arc welding power source',
                image: pic77
            },
            {
                cap: 'Electrodes',
                image: pic78
            },
            {
                cap: 'Electrode holder',
                image: pic79
            },
            {
                cap: 'Tongs',
                image: pic80
            },
            {
                cap: 'Hand Shield',
                image: pic81
            },
            {
                cap: 'Earth clamp',
                image: pic82
            },
            {
                cap: 'Welding table',
                image: pic83
            },
            {
                cap: 'Rough file',
                image: pic70
            },
            {
                cap: 'Smooth file',
                image: pic84
            },
            {
                cap: 'Protractor',
                image: pic85
            },
        ];
        let appBox = [];
        let appImage = [];
        let appCaption = [];
        for(let i = 0; i < apparatus.length; i++){
            appBox[i] = document.createElement('div');
            appImage[i] = document.createElement('img');
            appCaption[i] = document.createElement('p');
            appImage[i].src =  apparatus[i].image;
            appCaption[i].textContent = apparatus[i].cap;
            appBox[i].appendChild(appImage[i]);
            appBox[i].appendChild(appCaption[i]);
            section.appendChild(appBox[i]);
        }
        main.appendChild(section);
        const theory = document.createElement('section');
        const theoHead = document.createElement('h2');
        theoHead.textContent = 'THEORY';
        theory.appendChild(theoHead);
        const explain = document.createElement('div');
        explain.textContent = 'Welding is a fabrication process that joins materials, typically metals or thermoplastics, together by causing fusion. This process involves melting the base metals and adding a filler material to form a weld pool, which cools to become a strong joint. Welding is basically a metalworking superpower that lets you permanently join pieces of metal together. Welding is used in different aspects which includes:';
        theory.appendChild(explain);
        const categories = [
            {
                title: 'Construction',
                text: 'Welding is essential for combining steel beams, pipes, and other metal structures that constitute the framework of our buildings and infrastructure, from complex bridges to tall skyscrapers.',
                image: ''
            },
            {
                title: 'Automotive Industry',
                text: 'Welding is essential for a sturdy and secure assembly of car frames, engines, and body parts.',
                image: ''
            },
            {
                title: 'Manufacturing',
                text: 'Welding is essential to fabrication in a variety of manufacturing areas, including electronics, appliances, and industrial machinery.',
                image: ''
            },
            {
                title: 'Shipbuilding',
                text: 'Welds are frequently used to hold together the robust seams and waterproof compartments of ships.',
                image: ''
            },
            {
                title: 'Repair and Maintenance',
                text: 'Welding techniques can be used to repair broken pipelines, damaged machinery, or corroded metal components',
                image: ''
            },
        ];
        categories.forEach((item) => {
        theory.appendChild(createDivs(item));
        }); 
        const text2 = document.createElement('p');
        text2.textContent = 'Welding is applied in various fields which include:';
        theory.appendChild(text2);
        const category = [
            {
                title: 'Construction Projects',
                text: 'Welding is fundamental in assembling the steel frames that form the skeleton of these structures.',
                image: ''
            },
            {
                title: 'Automotive Repair and Maintenance',
                text: "Whether it's fixing a cracked exhaust pipe or patching a hole in a car frame, welders play a crucial role in keeping vehicles on the road.",
                image: ''
            },
            {
                title: 'Industrial Manufacturing',
                text: 'Manufacturing plants heavily rely on welding for everything from creating complex machinery to constructing pipelines.',
                image: ''
            },
        ];
        category.forEach((item) => {
            theory.appendChild(createDivs(item));
        });
        const text1 = document.createElement('p');
        text1.textContent = 'In welding, there are four (4) main different types of welding positions which include:';
        theory.appendChild(text1);
        const catalog = [
            {
                title: 'Flat position',
                text: 'This is the most basic and easiest welding position. The welder welds on a flat surface, with the workpiece positioned horizontally below the torch. Gravity assists the welder in controlling the molten metal weld pool.',
                image: pic86
            },
            {
                title: 'Horizontal position',
                text: 'In this setup, the welder is positioned below the horizontal weld joint. In order to prevent the molten metal from leaking or sagging, the welder must resist gravity. Although they are less prevalent than flat welds, horizontal welds are more difficult to perform.',
                image: pic87
            },
            {
                title: 'Vertical position',
                text: 'A vertical surface is used to make vertical welds. Either uphill (from bottom to top) or downhill (from top to bottom) welding is possible. Welds uphill are more challenging because the molten metal has a tendency to flow downward. Although they are simpler to manage, downward welds may produce weaker welds.',
                image: pic88
            },
            {
                title: 'Overhead position',
                text: 'The most challenging position to weld in is above. The surface that the welder welds on is above them. It is extremely difficult to produce high-quality welds since the welder is unable to control the molten metal pool except by using their welding method.',
                image: pic89
            },
        ];
        catalog.forEach((item) => {
        theory.appendChild(createDivs(item));
        });
        const explain1 = document.createElement('div');
        explain1.textContent = 'There are different types of welding processes but in this experiment we are dealing with arc welding process.';
        theory.appendChild(explain1);
        const explain2 = document.createElement('div');
        explain2.textContent = "Arc welding is the most common type of welding process, and it uses an electric current to create an arc that melts the metal. Arc welding is a metal joining process that utilizes the intense heat generated by an electric arc to melt the metals at the joint, fusing them together once they cool. Here's a breakdown of the core aspects of the process:";
        theory.appendChild(explain2);
        const catalogs = [
            {
                title: 'Heat Source',
                text: 'To form the arc, direct current (DC) or alternating current (AC) are supplied by an electric power source. The particular welding procedure and the metals being connected determine the kind of current that is employed.',
                image: ''
            },
            {
                title: 'The electrode',
                text: 'In arc welding, there are primarily two kinds of electrodes used:',
                image: ''
            },
            {
                title: ' - Consumable electrode',
                text: 'To create the weld, this electrode melts and fuses with the base metal. MIG welding wires and stick welding electrodes are two examples.',
                image: ''
            },
            {
                title: ' - Non-consumable electrode',
                text: 'This electrode does not melt on its own; instead, it conducts electricity to form an arc. To form the weld, filler metal is applied separately. A tungsten electrode is used as an example in TIG welding.',
                image: ''
            },
        ];
        catalogs.forEach((item) => {
        theory.appendChild(createDivs(item));
        });
        main.appendChild(theory);
        const practicals = document.createElement('section');
        const step1 = document.createElement('h2');
        step1.textContent = 'PRACTICAL 1 : HOW TO MAKE A BUTT JOINT';
        practicals.appendChild(step1);
        const step3 = document.createElement('h3');
        step3.textContent = 'PROCEDURE:';
        practicals.appendChild(step3);
        const stepList1 = document.createElement('ul');
        const steps1 = ['The given mild steel are thoroughly cleaned of rust and scale', 'One edge of each piece is believed, to an angle of 300, leaving nearly ¼ th of the flat thickness, at one end.', 'The two pieces are positioned on the welding table such that, they are separated slightly for better penetration of the weld', 'The electrode is fitted in the electrode holder and the welding current is set to be a proper value', 'The ground clamp is fastened to the welding table.', 'Wearing the apron and using the face shield, the arc is stuck and holding the two pieces together, first run of the weld is done to fill the root gap', 'Second run of the weld is done with proper weaving and the uniform movement. During the process of welding, the electrode is kept at 150 to 250 from vertical and in the direction of welding.', 'The scale formation on the welds is removed by using the chipping hammer.', 'Filing is done to remove any spanner around the weld'];
        let stepBox1 = [];
        for(let i = 0; i < steps1.length; i++){
            stepBox1[i] = document.createElement('li');
            stepBox1[i].textContent = steps1[i];
            stepList1.appendChild(stepBox1[i]);
        }
        practicals.appendChild(stepList1);
        const text3 = document.createElement('p');
        text3.textContent = 'Watch how to perform the butt joint practical below 👇';
        practicals.appendChild(text3);
        const video3 = document.createElement('div');
        video3.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/2axZupLAQ_U?si=rQGboM88VzTYHp_4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        practicals.appendChild(video3);
        const step = document.createElement('h2');
        step.textContent = 'PRACTICAL 2 : HOW TO MAKE LAP JOINT';
        practicals.appendChild(step);
        const step2 = document.createElement('h3');
        step2.textContent = 'PROCEDURE:';
        practicals.appendChild(step2);
        const stepList = document.createElement('ul');
        const steps = ['The given mild steel pieces are thoroughly cleaned of rust and scale', 'The two pieces are positioned on the welding table such that, the two pieces overlapped one over the other as shown in drawing', 'The electrode is fitted in the electrode holder and the welding current is set to be proper value', 'The ground clamp is fastened to the welding table', 'Wearing the apron and using the face shield, the arc is struck and the work pieces are tack-welded at both the ends and the centre of the joint', 'The alignment of the lap joint is checked and the tack welded pieces are required', 'The scale information of the welds is removed by using chipping hammer', 'Filing is done to remove any spanner around the weld'];
        let stepBox = [];
        for(let i = 0; i < steps.length; i++){
            stepBox[i] = document.createElement('li');
            stepBox[i].textContent = steps[i];
            stepList.appendChild(stepBox[i]);
        }
        practicals.appendChild(stepList);
        const text4 = document.createElement('p');
        text4.textContent = 'Watch how to perform the Dovetail Joint practical is below 👇';
        practicals.appendChild(text4);
        const video4 = document.createElement('div');
        video4.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/uT9dSDwoueM?si=rmFr3C78xzlYucdc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        practicals.appendChild(video4);
        main.appendChild(practicals);
        const precaution = document.createElement('section');
        const cautionHead = document.createElement('h3');
        cautionHead.textContent = "PRECAUTIONS";
        precaution.appendChild(cautionHead);
        const cautionList = document.createElement('ul');
        const precautions = ["I ensured that I wore my lab coat and personal protective equipment (PPE)","I ensured that the welding machine was properly grounded to prevent electrical shock.","I Ensured that the welding machine and cables are in good condition before starting.", ];
        let cautionBox = [];
        for(let i = 0; i < precautions.length; i++){
            cautionBox[i] = document.createElement('li');
            cautionBox[i].textContent = precautions[i];
            cautionList.appendChild(cautionBox[i]);
        }
        precaution.appendChild(cautionList);
        main.appendChild(precaution);
        const conclusion = document.createElement('section');
        const concHead = document.createElement('h3');
        concHead.textContent = "CONCLUSION:";
        conclusion.appendChild(concHead);
        const concText = document.createElement('p');
        concText.textContent = "At the end of this experiment, a butt joint, lap joint was created from mild steel pieces by arc welding using the necessary equipments and also using different welding positions.";
        conclusion.appendChild(concText);
        main.appendChild(conclusion);
        const references = document.createElement('section');
        const refHead = document.createElement('h3');
        refHead.textContent = "REFERENCES";
        references.appendChild(refHead);
        const refList = document.createElement('ul');
        const reference = ["Production Engineering Laboratory Manual for ELA201 and ELA202 by Department of Production Engineering, University of Benin.", "The TIG Welding Book by Todd Bridigum", "Welding for Dummies by Steven Robert Farnsworth"];
        let refBox = [];
        for(let i = 0; i < reference.length; i++){
            refBox[i] = document.createElement('li');
            refBox[i].textContent = reference[i];
            refList.appendChild(refBox[i]);
        }
        references.appendChild(refList);
        main.appendChild(references);
        const hover = createHover('#');
        main.appendChild(hover);
        const download = createDownload('#');
        main.appendChild(download);
};


const displayMS201 = () => {
    const main = reset();
    const head = document.createElement('h1');
    head.textContent  = 'Introduction to lathe and machining operations{MS201}';
    main.appendChild(head);
    const objective = document.createElement('section');
    const objHead = document.createElement('h2');
    objHead.textContent = 'OBJECTIVES';
    objective.appendChild(objHead);
    const objList = document.createElement('ul');
    const objectives = ['To study the characteristics features of lathe', 'To study types of lathe operations', 'To produce shaft using straight turning'];
    let list = [];
    for(let i = 0; i < objectives.length; i++){
        list[i] = document.createElement('li');
        list[i].textContent = objectives[i];
        objList.appendChild(list[i]);
    }
    objective.appendChild(objList);
    main.appendChild(objective);
    const appHead = document.createElement('h2');
    appHead.textContent = 'Apparatus';
    main.appendChild(appHead);
    const section = document.createElement('section');
        section.classList.add('appBox');
        const apparatus = [
            {
                cap: 'Lathe Machine',
                image: pic90
            },
            {
                cap: 'Vernier caliper',
                image: pic46
            },
            {
                cap: 'Steel rule',
                image: pic43
            },
            {
                cap: 'Spanner',
                image: pic16
            },
            {
                cap: 'Chuck spanner',
                image: pic91
            },
            {
                cap: 'High speed steel (HSS)',
                image: pic92
            },
            {
                cap: 'Single point cutting tool',
                image: pic93
            },
        ];
        let appBox = [];
        let appImage = [];
        let appCaption = [];
        for(let i = 0; i < apparatus.length; i++){
            appBox[i] = document.createElement('div');
            appImage[i] = document.createElement('img');
            appCaption[i] = document.createElement('p');
            appImage[i].src =  apparatus[i].image;
            appCaption[i].textContent = apparatus[i].cap;
            appBox[i].appendChild(appImage[i]);
            appBox[i].appendChild(appCaption[i]);
            section.appendChild(appBox[i]);
        }
        main.appendChild(section);
        const theory = document.createElement('section');
        const theoHead = document.createElement('h2');
        theoHead.textContent = 'THEORY';
        theory.appendChild(theoHead);
        const explain = document.createElement('div');
        explain.textContent = 'A lathe is a type of machine tool that rotates a workpiece on its axis to shape metal or wood. To remove material from the workpiece—which may be composed of glass, metal, or wood, a fixed cutting tool is utilised. The most common apparatus used in this experiment is the lathe machine. There are different types of lathe machine and the lathe machines have the same features or parts which include:';
        theory.appendChild(explain);
        const categories = [
            {
                title: 'Bed',
                text: 'The bed is the base of the lathe and provides support for the other components of the machine.',
                image: pic94
            },
            {
                title: 'Headstock',
                text: 'The headstock is located at one end of the bed and houses the spindle. The spindle is a shaft that rotates the workpiece.',
                image: pic95
            },
            {
                title: 'Tailstock',
                text: 'The tailstock is located at the other end of the bed and can be used to support the end of the workpiece.',
                image: pic96
            },
            {
                title: 'Carriage',
                text: 'The carriage is a movable slide that holds the cutting tool. The carriage can be moved along the bed in order to position the cutting tool relative to the workpiece and comprises of the compound rest, tool post, cross slide and etc as shown below.',
                image: pic97
            },
        ];
        categories.forEach((item) => {
        theory.appendChild(createDivs(item));
        });
        const text2 = document.createElement('p');
        text2.textContent = 'The lathe machine is applied in different aspects in our everyday world, which include:';
        theory.appendChild(text2);
        const category = [
            {
                title: 'Manufacturing',
                text: 'Lathes are used to create a wide variety of parts, such as gears, shafts, and bearings.',
                image: ''
            },
            {
                title: 'Construction',
                text: "Lathes are used to create parts for machines and tools used in construction.",
                image: ''
            },
            {
                title: 'Repair',
                text: 'Lathes are used to repair damaged parts.',
                image: ''
            },
        ];
        category.forEach((item) => {
            theory.appendChild(createDivs(item));
        });
        const text1 = document.createElement('p');
        text1.textContent = 'Sequence of operations are performed by the lathe machine which includes:';
        theory.appendChild(text1);
        const catalog = [
            {
                title: 'Facing',
                text: 'The facing operation involves cutting a flat surface perpendicular to the axis of rotation of the workpiece. This creates a smooth surface on the end of the workpiece.',
                image: ''
            },
            {
                title: 'Turning',
                text: 'Turning is the process of removing material from the outer diameter of the workpiece to create a cylindrical shape. This is done by moving a cutting tool parallel to the axis of rotation.',
                image: ''
            },
            {
                title: 'Grooving',
                text: 'Grooving involves cutting a groove or channel into the surface of the workpiece. This can be used for creating features like threads or for other purposes.',
                image: ''
            },
            {
                title: 'Threading',
                text: 'Threading is the process of cutting threads onto the cylindrical surface of the workpiece. This can be done internally (tapping) or externally (die cutting).',
                image: ''
            },
            {
                title: 'Drilling',
                text: "Some lathe machines are equipped with attachments for drilling holes in the workpiece. This can be done using a drill chuck mounted on the lathe's tailstock.",
                image: ''
            },
            {
                title: 'Boring',
                text: "Boring is the process of enlarging an existing hole in the workpiece to a precise diameter. This is typically done using a boring bar mounted on the lathe's toolpost.",
                image: ''
            },
            {
                title: 'Finishing',
                text: "After the desired machining operations are complete, finishing operations such as polishing or deburring may be performed to improve the surface finish of the workpiece etc.",
                image: ''
            },
            {
                title: 'Chamfering',
                text: "Chamfering is a machining operation commonly performed on a lathe machine, although it can also be done using other tools such as milling machines or hand tools. Chamfering involves cutting or grinding away material from the edge of a workpiece to create a beveled edge or a chamfer.",
                image: ''
            },
            {
                title: 'Grooving',
                text: "Grooving refers to a specific machining operation used to create narrow channels or cuts on the surface of a workpiece. It involves cutting a narrow, elongated recess or groove into the surface of a workpiece.",
                image: ''
            },
        ];
        catalog.forEach((item) => {
        theory.appendChild(createDivs(item));
        });
        const head1 = document.createElement('h3');
        head1.textContent = 'Watch the operations performed on the lathe machine and even more';
        theory.appendChild(head1);
        const video4 = document.createElement('div');
        video4.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/SvlZHHDXCZs?si=TCK5E9hveatatgPy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        theory.appendChild(video4);
        const video3 = document.createElement('div');
        video3.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/km6ickQglVY?si=BPw-eCbc0RAe1VjX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        theory.appendChild(video3);
        main.appendChild(theory);
        const practicals = document.createElement('section');
        const step1 = document.createElement('h2');
        step1.textContent = 'PRACTICAL : HOW TO PERFORM STEP TURNING AND TAPER TURNING ON LATHE MACHINE';
        practicals.appendChild(step1);
        const step3 = document.createElement('h3');
        step3.textContent = 'PROCEDURE:';
        practicals.appendChild(step3);
        const stepList1 = document.createElement('ul');
        const steps1 = ['The work piece is fixed in a 3-jaw chuck with sufficient overhang', 'Adjust the machine to run the job to a required cutting speed', 'Fix the cutting tool in the tool post and centering operation is performed so that the axis of the job coincides with the lathe axis', 'Give the feed and depth of the cut to the cutting tool', 'Facing operation is performed from the center of the job towards outward or from the circumference towards the center', 'Plain turning operation is performed until the diameter of the workpiece reduces to 23mm', 'Check the dimensions by using Vernier calipers', 'Then chamfering is done on the 23mm diameter surface', 'Reverse the work piece in the chuck and facing operation is performed to reduce the length of work piece to the required dimensions', 'Again plain turning operation is performed until the diameter of the work piece reduces to 18mm', 'Using the v-cutting tool grooving operation is performed according to the given dimensions and finish the groove using parting tool', 'Swivel the compound slide to the required angle and taper turning operation by rotating the compound slide wheel.', 'Finally, check the dimensions by using Vernier calipers.'];
        let stepBox1 = [];
        for(let i = 0; i < steps1.length; i++){
            stepBox1[i] = document.createElement('li');
            stepBox1[i].textContent = steps1[i];
            stepList1.appendChild(stepBox1[i]);
        }
        practicals.appendChild(stepList1);
        const text3 = document.createElement('p');
        text3.textContent = 'The link to watch how to perform the taper turning operation on lathe machine practical is below 👇';
        practicals.appendChild(text3);
        const video5 = document.createElement('div');
        video5.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/dksI7FC8iZQ?si=UPv4G_C7wKhGc8Ue" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        practicals.appendChild(video5);
        const text4 = document.createElement('p');
        text4.textContent = 'The link to watch how to perform the step turning operation on lathe machine practical is below 👇';
        practicals.appendChild(text4);
        const video6 = document.createElement('div');
        video6.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/3Cy1yStc93w?si=QxRQfI3O_uJ2jxJT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        practicals.appendChild(video6);
        main.appendChild(practicals);
        const precaution = document.createElement('section');
        const cautionHead = document.createElement('h3');
        cautionHead.textContent = "PRECAUTIONS";
        precaution.appendChild(cautionHead);
        const cautionList = document.createElement('ul');
        const precautions = ["I ensured that I wore my lab coat and personal protective equipment (PPE)","I ensured that I kept hands clear of moving parts ","I Ensured that I used coolant or lubrication to reduce friction, dissipate heat, and improve surface finish", ];
        let cautionBox = [];
        for(let i = 0; i < precautions.length; i++){
            cautionBox[i] = document.createElement('li');
            cautionBox[i].textContent = precautions[i];
            cautionList.appendChild(cautionBox[i]);
        }
        precaution.appendChild(cautionList);
        main.appendChild(precaution);
        const conclusion = document.createElement('section');
        const concHead = document.createElement('h3');
        concHead.textContent = "CONCLUSION:";
        conclusion.appendChild(concHead);
        const concText = document.createElement('p');
        concText.textContent = "At the end of this experiment, the lathe machine was used to perform step turning and taper turning on the given workpiece and understood sequence of operations of the lathe machine.";
        conclusion.appendChild(concText);
        main.appendChild(conclusion);
        const references = document.createElement('section');
        const refHead = document.createElement('h3');
        refHead.textContent = "REFERENCES";
        references.appendChild(refHead);
        const refList = document.createElement('ul');
        const reference = ["Production Engineering Laboratory Manual for ELA201 and ELA202 by Department of Production Engineering, University of Benin.", "Machine Shop Practice by Karl Moltrecht", "Lathe Operation and Maintenance by John D. Lawson"];
        let refBox = [];
        for(let i = 0; i < reference.length; i++){
            refBox[i] = document.createElement('li');
            refBox[i].textContent = reference[i];
            refList.appendChild(refBox[i]);
        }
        references.appendChild(refList);
        main.appendChild(references);
        const hover = createHover('#');
        main.appendChild(hover);
        const download = createDownload('#');
        main.appendChild(download);
};


const displayAS201 = () => {
    const main = reset();
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
        img1.src =_RESOURCES_images_achieve_png__WEBPACK_IMPORTED_MODULE_0__;
        img1.alt = '';
        enginePic.appendChild(img1);
        const img2 = document.createElement('img');
        img2.src = _RESOURCES_images_daniel1_png__WEBPACK_IMPORTED_MODULE_1__;
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
        image: pic3
        },
        {
        title: 'Cylinders',
        text: 'Cylinders are the chambers within the engine block where the combustion process (burning of air-fuel mixture) takes place. Pistons move up and down within the cylinders. The number of cylinders varies depending on the engine design, with more cylinders typically indicating a more powerful engine.',
        image: pic4
        },
        {
        title: 'Pistons',
        text: 'Inside the cylinders, pistons are cylindrical parts that move up and down. During the compression stroke, they compress the air-fuel mixture, and during the power stroke, they transfer the combustion force to the crankshaft. Through connecting rods, the crankshaft and pistons are joined.',
        image: pic5
        },
        {
        title: 'Connecting rods',
        text: 'Connecting rods are the link between the pistons and the crankshaft. They convert the reciprocating (up-and-down) motion of the pistons into the rotating motion of the crankshaft.',
        image: pic6
        },
        {
        title: 'Camshaft',
        text: 'is the shaft that regulates the valves\' opening and shutting. Its elevated portions, or lobes, exert pressure on the valve lifters, which causes the valves to open. Via a timing belt or chain, the crankshaft drives the camshaft.',
        image: pic7
        },
        {
        title: 'Crankshaft',
        text: 'The crankshaft is a rotating shaft that sits at the bottom of the engine block. It receives the reciprocating motion from the connecting rods and converts it into rotary motion. This rotational motion is then used to power the wheels of a vehicle or to drive other machines.',
        image: pic8
        },
        {
        title: 'Spark Plugs',
        text: 'Spark plugs are used in spark-ignition (SI) engines to ignite the air-fuel mixture. They create a spark that ignites the mixture, initiating the combustion process.',
        image: pic9
        },
        {
        title: 'Valves',
        text: 'Valves are spring-loaded mechanisms that control the flow of air and fuel into and out of the cylinders. There are typically two valves per cylinder: one intake valve and one exhaust valve. The camshaft opens and closes the valves at specific points in the engine cycle.',
        image: pic10
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
        const video1 = document.createElement('div');
        video1.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/ZQvfHyfgBtA?si=OEHS2Tg6ckvlpaGJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
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
        text: 'Internal combustion engines are used in boats, ships, and other marine vessels for propulsion. They can run on gasoline, diesel, or alternative fuels such as liquefied natural gas (LNG).',
        image: ''
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
        const tool = document.createElement('h4');
        tool.textContent = 'FEW TOOLS USED TO EFFECT REPAIRS ON AN INTERNAL COMBUSTION ENGINE:';
        theory.appendChild(tool);
        const tools = [
            {
                title: 'Screwdrivers',
                text: 'Needed for various screwing and prying tasks during engine repairs.',
                image: pic11
            },
            {
                title: 'Hammer',
                text: 'A rubber mallet is preferable to avoid damaging engine parts, but a standard metal hammer may also be needed for some tasks.',
                image: pic12
            },
            {
                title: 'Torque Wrench',
                text: 'This wrench allows for applying a specific amount of torque when tightening fasteners, crucial to prevent over tightening or under-tightening critical engine components.',
                image: pic13
            },
            {
                title: 'Pliers',
                text: 'Useful for gripping, turning, and manipulating components during engine work.',
                image: pic14
            },
            {
                title: 'Funnel',
                text: 'Used for adding fluids like engine oil or coolant without spills.',
                image: pic15
            },
            {
                title: 'Spanner',
                text: 'is a metal tool used to grip and turn nuts, bolts, and other fasteners.',
                image: pic16
            },
            {
                title: 'Car jack:',
                text: 'A car jack is a mechanical device used to lift vehicles off the ground to facilitate maintenance, repairs, tire changes, and other tasks.',
                image: pic17
            },
        ];
        tools.forEach((item) => {
            theory.appendChild(createDivs(item));
            });
        const step = document.createElement('h3');
        step.textContent = 'STEPS TAKEN TO CHANGE THE OIL IN AN INTERNAL COMBUSTION ENGINE';
        theory.appendChild(step);
        const stepList = document.createElement('ul');
        const steps = ["Get the supplies you'll need, such as engine oil (the kind and viscosity that the manufacturer recommends), a fresh oil filter, a wrench or socket set to remove the drain plug and oil filter, a drain pan to catch the used oil, and protective gloves and safety glasses.","Put the car in park on a level area and apply the parking brake. Make sure the engine is cool to prevent hot oil burns. To access the underbelly, lift the car if needed using jacks or ramps.","Look beneath the engine to find the oil drain plug. If you're not sure where it is exactly, check the owner's manual. To collect the spent oil, place the drain pan underneath the drain plug.","Carefully remove the oil drain plug by turning it counter clockwise with a wrench or socket set. Keep in mind that the oil could be heated. After the drain stopper is loose, fully remove it and let the old oil run out into the drain pan. Make sure that all of the oil is captured by the drain pan.", "Locate the oil filter, typically located near the oil pan. Use an oil filter wrench to loosen the oil filter in a counter clockwise direction. Once loosened, carefully unscrew and remove the old oil filter. Be prepared for oil to spill out when removing the filter, so ensure the drain pan is positioned to catch any spills.", "Apply a small layer of fresh engine oil to the rubber gasket on the new oil filter before installing it. This facilitates the creation of a good seal and makes removal simpler when the next oil change is performed.", "Carefully screw the new oil filter onto the engine by hand in a clockwise direction until it is snug. Avoid over-tightening the filter, as this can damage the gasket or cause leaks.", "After the old oil has completely drained, clean the drain plug and look for any damage to the washer or gasket. If required, swap out the gasket or washer. Using a wrench or socket set, carefully reinstall the drain plug and tighten it firmly.", "Find and take off the oil filler cap located atop the engine. As directed by the manufacturer and contained in the owner's manual, use a funnel to add the right kind and quantity of new engine oil.", "After adding new oil, replace the oil filler cap securely. Start the engine and let it run for a few minutes to circulate the new oil throughout the engine. Turn off the engine and allow it to sit for a few minutes to allow the oil to settle",
         "To check the oil level, remove the oil dipstick while the engine is off, clean it, fully insert it again, and then remove it once again. If extra oil is needed to get it to the right level, add it.", "Properly dispose of the old oil and oil filter according to local regulations. Many auto parts stores and recycling centers accept used oil for recycling."];
        let stepBox = [];
        for(let i = 0; i < steps.length; i++){
            stepBox[i] = document.createElement('li');
            stepBox[i].textContent = steps[i];
            stepList.appendChild(stepBox[i]);
        }
        theory.appendChild(stepList);
        const text2 = document.createElement('p');
        text2.textContent = 'Watch how to change the oil of an internal combustion engine of a car';
        theory.appendChild(text2);
        const video2 = document.createElement('div');
        video2.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/O1hF25Cowv8?si=3x-n7uQOPEgDEK4q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        theory.appendChild(video2);
        main.appendChild(theory);
        const precaution = document.createElement('section');
        const cautionHead = document.createElement('h3');
        cautionHead.textContent = "PRECAUTIONS";
        precaution.appendChild(cautionHead);
        const cautionList = document.createElement('ul');
        const precautions = ["I ensured that I wore my lab coat and personal protective equipment (PPE)", "I ensured that before performing any maintenance or repairs, allow the engine to cool down to prevent burns from hot engine components, exhaust gases, or fluids", "I Ensured that I read and understand the manufacturer's instructions and safety guidelines provided in the owner's manual or service manual before performing any maintenance or repairs."];
        let cautionBox = [];
        for(let i = 0; i < precautions.length; i++){
            cautionBox[i] = document.createElement('li');
            cautionBox[i].textContent = precautions[i];
            cautionList.appendChild(cautionBox[i]);
        }
        precaution.appendChild(cautionList);
        main.appendChild(precaution);
        const conclusion = document.createElement('section');
        const concHead = document.createElement('h3');
        concHead.textContent = "CONCLUSION:";
        conclusion.appendChild(concHead);
        const concText = document.createElement('p');
        concText.textContent = "At the end of this experiment, the parts of the internal combustion engine was understood and were identified and also how the internal combustion engine works and also how the four cycle strokes works.";
        conclusion.appendChild(concText);
        main.appendChild(conclusion);
        const references = document.createElement('section');
        const refHead = document.createElement('h3');
        refHead.textContent = "REFERENCES";
        references.appendChild(refHead);
        const refList = document.createElement('ul');
        const reference = ["Production Engineering Laboratory Manual for ELA201 and ELA202 by Department of Production Engineering, University of Benin.", "Bosch Automotive Handbook by Robert Bosch.", "Internal Combustion Engine Fundamentals by John Heywood."];
        let refBox = [];
        for(let i = 0; i < reference.length; i++){
            refBox[i] = document.createElement('li');
            refBox[i].textContent = reference[i];
            refList.appendChild(refBox[i]);
        }
        references.appendChild(refList);
        main.appendChild(references);
        const hover = createHover('#');
        main.appendChild(hover);
        const download = createDownload('#');
        main.appendChild(download);
};
const displayFS201 = () => {
    const main = reset();
    const head = document.createElement('h1');
    head.textContent  = 'Introduction to Foundry Shop{FS201}';
    main.appendChild(head);
    const objective = document.createElement('section');
    const objHead = document.createElement('h2');
    objHead.textContent = 'OBJECTIVES';
    objective.appendChild(objHead);
    const objList = document.createElement('ul');
    const objectives = ['To understand what patterns are', 'To know what moulding sands are', 'To familiarize with the tools and materials used in foundry shop', 'To produce a simple cast'];
    let list = [];
    for(let i = 0; i < objectives.length; i++){
        list[i] = document.createElement('li');
        list[i].textContent = objectives[i];
        objList.appendChild(list[i]);
    }
    objective.appendChild(objList);
    main.appendChild(objective);
    const appHead = document.createElement('h2');
    appHead.textContent = 'Apparatus';
    main.appendChild(appHead);
    const section = document.createElement('section');
        section.classList.add('appBox');
        const apparatus = [
            {
                cap: 'Moulding Box',
                image: pic98
            },
            {
                cap: 'Draw spikes',
                image: pic99
            },
            {
                cap: 'Swab',
                image: pic100
            },
            {
                cap: 'Slicks',
                image: pic101
            },
            {
                cap: 'Rammers',
                image: pic102
            },
            {
                cap: 'Shovel',
                image: pic103
            },
            {
                cap: 'Hand Riddle',
                image: pic104
            },
            {
                cap: 'Wire Brush',
                image: pic73
            },
            {
                cap: 'Drag and cope boxes',
                image: pic105
            },
            {
                cap: 'Strike off bar',
                image: pic106
            },
            {
                cap: 'Moulding Sand',
                image: pic107
            },
            {
                cap: 'Sprue Pins',
                image: pic108
            },
            {
                cap: 'Vent Wire',
                image: pic109
            },
            {
                cap: 'Trowel',
                image: pic110
            },
        ];
        let appBox = [];
        let appImage = [];
        let appCaption = [];
        for(let i = 0; i < apparatus.length; i++){
            appBox[i] = document.createElement('div');
            appImage[i] = document.createElement('img');
            appCaption[i] = document.createElement('p');
            appImage[i].src =  apparatus[i].image;
            appCaption[i].textContent = apparatus[i].cap;
            appBox[i].appendChild(appImage[i]);
            appBox[i].appendChild(appCaption[i]);
            section.appendChild(appBox[i]);
        }
        main.appendChild(section);
        const theory = document.createElement('section');
        const theoHead = document.createElement('h2');
        theoHead.textContent = 'THEORY';
        theory.appendChild(theoHead);
        const explain = document.createElement('div');
        explain.textContent = 'In general, a foundry shop is a place where metal casting operations are conducted. Metal is heated in a foundry and then poured into molds to make a variety of components or things. These items might be anything from complex sculptures to pieces of industrial technology. Foundries are essential to the industrial sector because they offer the tools needed to precisely form intricate metal structures. There may be pouring, molding, melting, and finishing procedures involved. Because of the high temperatures and possibly dangerous materials involved, safety precautions are important. Foundry shops are vital to many industries, such as manufacturing, construction, aerospace, and automotive, since they offer the tools necessary to precisely fabricate intricate metal components. Because of the extreme temperatures and potential hazards associated with the casting process, these facilities require highly skilled personnel, state-of-the-art equipment, and rigorous adherence to safety regulations.';
        theory.appendChild(explain);
        const explain2 = document.createElement('div');
        const expHead = document.createElement('h3');
        expHead.textContent = 'Patterns:';
        explain2.appendChild(expHead);
        const expText = document.createElement('div');
        expText.textContent = "In foundry shop, there are are patterns and a pattern is essentially a mold-maker's master copy i.e a replica of the final metal object they want to create. This pattern is used to create a negative cavity in the sand mold, which is then filled with molten metal. Once the metal cools and solidifies, the sand mold is broken away, leaving behind the finished casting.    Patterns are templates or models that are used to create the molds into which molten metal is poured."
        explain2.appendChild(expText);
        theory.appendChild(explain2);
        const head1 = document.createElement('h2');
        head1.textContent = 'Types of Patterns:';
        theory.appendChild(head1);
        const text2 = document.createElement('p');
        text2.textContent = 'There are several different types of foundry patterns, each suited for different applications. Some common types include:';
        theory.appendChild(text2);
        const div = document.createElement('div');
        const text = document.createElement('div');
        text.innerHTML = `<span>• Single-piece pattern:</span>  This is the simplest type of pattern, suitable for simple castings. The youtube link illustrating this is shown below`;
        div.appendChild(text);
        const box = document.createElement('div');
        box.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/Uv28tqCOtAg?si=LuG3xBJHOySzcRIn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        div.appendChild(box);
        theory.appendChild(div);
        const div1 = document.createElement('div');
        const text1 = document.createElement('div');
        text1.innerHTML = `<span>• Split pattern:</span>  This pattern is split into two or more sections, allowing for the creation of more complex castings with undercuts or interior features. The youtube link illustrating this is shown below`;
        div1.appendChild(text1);
        theory.appendChild(div1);
        const box1 = document.createElement('div');
        box1.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/cFcSJMRSz1c?si=lCMAs06oYQQL90tX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        div1.appendChild(box1);
        const div2 = document.createElement('div');
        const text3 = document.createElement('div');
        text3.innerHTML = `<span>• Match-plate pattern:</span>  This type of pattern is mounted on a plate, with one half forming the cope (upper) mold section and the other half forming the drag (lower) mold section. Match-plate patterns are efficient for high-volume production runs.`;
        div2.appendChild(text3);
        theory.appendChild(div2);
        const explain3 = document.createElement('div');
        const expHead1 = document.createElement('h3');
        expHead1.textContent = 'MOULDING SAND:';
        explain3.appendChild(expHead1);
        const expText1 = document.createElement('div');
        expText1.textContent = "Foundry sand, sometimes referred to as molding sand, is a specially prepared substance that foundry shops utilize during the casting process. It is used as a medium to make molds that are filled with molten metal to create castings. A specially formulated mixture, typically consisting of:"
        explain3.appendChild(expText1);
        theory.appendChild(explain3);
        const categories = [
            {
            title: 'Silica sand',
            text: 'The main ingredient, usually silica-based but sometimes olivine.',
            image: ''
            },
            {
            title: 'Binder',
            text: 'Clay (bentonite clay is common) or other materials that act like glue to hold the sand together.',
            image: ''
            },
            {
            title: 'Water',
            text: 'Provides moisture to activate the binder and improve moldability.',
            image: ''
            },
            {
            title: 'Additives',
            text: 'Optional ingredients like coal dust can enhance certain properties.',
            image: ''
            },
            ];
            categories.forEach((item) => {
            theory.appendChild(createDivs(item));
            });
        const expHead2 = document.createElement('h3');
        expHead2.textContent = 'KINDS OF MOULDING SAND:';
        theory.appendChild(expHead2);
        const strokes = [
            {
            title: 'Green Sand',
            text: 'Green sand is the most widely used molding sand in foundries due to its availability, low cost, and versatility. It consists of silica sand mixed with clay (bentonite) and water. Green sand molds are typically used for casting ferrous and non-ferrous metals. The term "green" refers to the fact that the sand is moist and has not been subjected to high temperatures to cure or harden.',
            image: ''
            },
            {
            title: 'Facing sand',
            text: 'A special type of sand used as the top layer of a mold, directly in contact with the molten metal. Facing sand needs to withstand high temperatures and resist erosion from the molten metal. It is usually made of silica sand with a higher refractoriness (heat resistance) and finer grain size compared to green sand.',
            image: ''
            },
            {
            title: 'Parting sand',
            text: 'A dry, fine-grained sand used to prevent the cope and drag (upper and lower mold sections) from sticking together. It is sprinkled along the parting line of the mold where the two halves meet. Parting sand should be easy to separate from both the cope and drag after casting.',
            image: ''
            },
            {
            title: 'Loamy sand',
            text: 'A mixture of sand, clay (around 50% content), and water. Due to the high clay content, loam sand is very plastic and has excellent moldability. It is often used for large and intricate castings where a finer surface finish is desired. However, loam sand has lower strength compared to other types and requires drying before pouring.',
            image: ''
            },
            {
                title: 'Dry sand',
                text: 'Made from silica sand and a binder, but unlike green sand, the moisture is removed by drying or baking the mold after it is shaped. This process strengthens the mold and improves its heat resistance, making it suitable for larger and heavier castings. Dry sand molds produce castings with better dimensional accuracy and surface finish compared to green sand. The drying process adds time and energy consumption to the casting process.',
                image: ''
            },
            ];
            strokes.forEach((item) => {
            theory.appendChild(createDivs(item));
            });
        main.appendChild(theory);
        const practicals = document.createElement('section');
        const step1 = document.createElement('h2');
        step1.textContent = 'PRACTICAL 1 : HOW TO MAKE A MOULD/MOULD MAKING';
        practicals.appendChild(step1);
        const step3 = document.createElement('h3');
        step3.textContent = 'PROCEDURE:';
        practicals.appendChild(step3);
        const stepList1 = document.createElement('ul');
        const steps1 = ['First a bottom board is placed either on the molding platform or on the floor making the surface even', 'The drag moulding flask is kept upside down on the bottom board along with the drag part of the pattern at the centre of the flask on the board', 'Dry facing sand is sprinkled over the board and pattern to provide a non sticky layer', 'Freshly prepared moulding sand of requisite quality is now poured into the drag and on the pattern to a thickness of 30 to 50mm.', 'Rest of the drag flask is completely filled with the backup sand and uniformly rammed to compact the sand', 'After the ramming is over, the excess sand in the flask is completely scraped using a flat bar to the level of the flask edges', 'Now with a vent wire which is of 1 to 2 mm diameter with a pointed end, vent holes are in the drag to the full depth of the flask as well as to the pattern to facilitate the removal of gases during casting solidification. This completes the preparation of the drag.', 'Now the finished drag flask is rolled over to the bottom board exposing the pattern', 'Using a slick, the edges of the sand around the pattern is repaired.', 'The cope flask on the top of the drag is located aligning again with the help of the pins of the drag box.', 'Sprue of the gating system for making the sprue passage is located at a small distance of about 50mm from the pattern. The sprue base, runners and the in-gates are also located as shown risers are also placed. Freshly prepared facing sand is poured around the pattern', 'The moulding sand is then poured in the cope box. The sand is adequately rammed, excess sand is scraped and vent holes are made all over in the cope as in the rag', 'The sprue and the riser are carefully withdrawn from the flask', 'Later the pouring basin is cut near the top of the sprue.', 'The cope is separated from the drag any loose sand on the cope and drag interface is blown off with the help of the bellows', 'Now the cope and drag pattern halves are withdrawn by using the draw spikes and rapping the pattern all around to slightly enlarge the mould cavity so that the walls are not spoiled by the withdrawing pattern.', 'The runners and gates are to be removed or to be cut in the mould carefully without spoiling the mould.', 'Any excess or loose sand is applied in the runners and mould cavity is blown away using the bellows', 'Now the facing paste is applied all over the mould cavity and the runners which would give the finished casting a good surface finish', 'A dry sand core is prepared using a core box. After suitable baking, it is places in the mould cavity', 'The cope is placed back on the drag taking care of the alignment of the two by means of the pins', 'The mould is ready for pouring molten metal. The liquid metal is allowed to cool and become solid which is the casting desired.'];
        let stepBox1 = [];
        for(let i = 0; i < steps1.length; i++){
            stepBox1[i] = document.createElement('li');
            stepBox1[i].textContent = steps1[i];
            stepList1.appendChild(stepBox1[i]);
        }
        practicals.appendChild(stepList1);
        const text5 = document.createElement('p');
        text5.textContent = 'Watch how to perform the mould using solid pattern practical is below 👇';
        practicals.appendChild(text5);
        const video5 = document.createElement('div');
        video5.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/6Y2IxLg6OZs?si=ngnIrgbfUFneLPKS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        practicals.appendChild(video5);
        const video6 = document.createElement('div');
        video6.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/88stYwHbIzY?si=29xMhp9-JpkdITmD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        practicals.appendChild(video6);
        main.appendChild(practicals);
        const precaution = document.createElement('section');
        const cautionHead = document.createElement('h3');
        cautionHead.textContent = "PRECAUTIONS";
        precaution.appendChild(cautionHead);
        const cautionList = document.createElement('ul');
        const precautions = ["I ensured that I wore my lab coat and personal protective equipment (PPE)","I ensured that proper tool handling to avoid injuries.","I Ensured that the procedures were duely followed to avoid errors", ];
        let cautionBox = [];
        for(let i = 0; i < precautions.length; i++){
            cautionBox[i] = document.createElement('li');
            cautionBox[i].textContent = precautions[i];
            cautionList.appendChild(cautionBox[i]);
        }
        precaution.appendChild(cautionList);
        main.appendChild(precaution);
        const conclusion = document.createElement('section');
        const concHead = document.createElement('h3');
        concHead.textContent = "CONCLUSION:";
        conclusion.appendChild(concHead);
        const concText = document.createElement('p');
        concText.textContent = "At the end of this experiment, a mould was created using the appropriate apparatus and also using the single/solid pattern";
        conclusion.appendChild(concText);
        main.appendChild(conclusion);
        const references = document.createElement('section');
        const refHead = document.createElement('h3');
        refHead.textContent = "REFERENCES";
        references.appendChild(refHead);
        const refList = document.createElement('ul');
        const reference = ["Production Engineering Laboratory Manual for ELA201 and ELA202 by Department of Production Engineering, University of Benin.", "Foundry Technology by K P Sinha & D B Goel", "Foundry Technology by P R Beeley"];
        let refBox = [];
        for(let i = 0; i < reference.length; i++){
            refBox[i] = document.createElement('li');
            refBox[i].textContent = reference[i];
            refList.appendChild(refBox[i]);
        }
        references.appendChild(refList);
        main.appendChild(references);
        const hover = createHover('#');
        main.appendChild(hover);
        const download = createDownload('#');
        main.appendChild(download);
};


/***/ }),

/***/ "./src/RESOURCES/images/achieve.png":
/*!******************************************!*\
  !*** ./src/RESOURCES/images/achieve.png ***!
  \******************************************/
/***/ ((module) => {

module.exports = "../../asset/images/9f85bcb065b488f77419.png";

/***/ }),

/***/ "./src/RESOURCES/images/daniel1.png":
/*!******************************************!*\
  !*** ./src/RESOURCES/images/daniel1.png ***!
  \******************************************/
/***/ ((module) => {

module.exports = "../../asset/images/1d237a7eecbf6ba26cbb.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["src_SCRIPTS_modules_footer_js-src_SCRIPTS_modules_header_js"], () => (__webpack_exec__("./src/SCRIPTS/eee.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHVCQUF1QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDBEQUFJO0FBQzNCLGFBQWE7QUFDYjtBQUNBO0FBQ0EsdUJBQXVCLDBEQUFJO0FBQzNCLGFBQWE7QUFDYjtBQUNBO0FBQ0EsdUJBQXVCLDBEQUFJO0FBQzNCLGFBQWE7QUFDYjtBQUNBO0FBQ0EsdUJBQXVCLDBEQUFJO0FBQzNCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0xBQW9MLFVBQVUsaUJBQWlCLGlCQUFpQixXQUFXLG9CQUFvQjtBQUMvUDtBQUNBO0FBQ0Esb0xBQW9MLFVBQVUsaUJBQWlCLGlCQUFpQixXQUFXLG9CQUFvQjtBQUMvUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VsYWJvcmF0ZS8uL3NyYy9DU1MvcHJlLmNzcz9lN2M4Iiwid2VicGFjazovL2VsYWJvcmF0ZS8uL3NyYy9TQ1JJUFRTL2VlZS5qcyIsIndlYnBhY2s6Ly9lbGFib3JhdGUvLi9zcmMvU0NSSVBUUy9tb2R1bGVzL2VlZURpc3BsYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0ICcuLi9DU1MvcHJlLmNzcyc7XHJcbmltcG9ydCB7cmVuZGVySGVhZGVyfSBmcm9tICcuL21vZHVsZXMvaGVhZGVyJztcclxuaW1wb3J0IHtyZW5kZXJGb290ZXJ9IGZyb20gJy4vbW9kdWxlcy9mb290ZXInO1xyXG5pbXBvcnQgeyBkaXNwbGF5U3RhcnRlZCwgZGlzcGxheVdXMjAxLCBkaXNwbGF5RUUyMDYsIGRpc3BsYXlCRjIwMSwgZGlzcGxheUhTMjAxLCBkaXNwbGF5TVMyMDEsIGRpc3BsYXlBUzIwMSwgZGlzcGxheUZTMjAxfSBmcm9tICcuL21vZHVsZXMvZWVlRGlzcGxheSc7XHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbmxldCByZXBvcnRzID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnR2V0dGluZyBTdGFydGVkJyxcclxuICAgICAgICBmdW5jOiBkaXNwbGF5U3RhcnRlZFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0ludHJvZHVjdGlvbiB0byBXb29kV29yayB7V1cyMDF9JyxcclxuICAgICAgICBmdW5jOiBkaXNwbGF5V1cyMDFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdzaW5nbGUgUGhhc2UgVHJhbnNmb3JtZXIge0VFMjA2fScsXHJcbiAgICAgICAgZnVuYzogZGlzcGxheUVFMjA2XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnSW50cm9kdWN0aW9uIHRvIEZpdHRpbmcgU2hvcCB7QkYyMDF9JyxcclxuICAgICAgICBmdW5jOiBkaXNwbGF5QkYyMDFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdJbnRyb2R1Y3Rpb24gdG8gV2VsZGluZyBTaG9wIFByYWN0aWNlIHtIUzIwMX0nLFxyXG4gICAgICAgIGZ1bmM6IGRpc3BsYXlIUzIwMVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0ludHJvZHVjdGlvbiB0byB0aGUgTGF0aGUgYW5kIE1hY2hpbmluZyBPcGVyYXRpb25zIHtNUzIwMX0nLFxyXG4gICAgICAgIGZ1bmM6IGRpc3BsYXlNUzIwMVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ1RoZSBJbnRlcm5hbCBDb21idXN0aW9uIEVuZ2luZSB7QVMyMDF9JyxcclxuICAgICAgICBmdW5jOiBkaXNwbGF5QVMyMDFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdGb3VuZHJ5IFNob3Age0ZTMjAxfScsXHJcbiAgICAgICAgZnVuYzogZGlzcGxheUZTMjAxXHJcbiAgICB9XHJcbl07XHJcbi8vZGlzcGxheSAgaGVhZGVyXHJcbnJlbmRlckhlYWRlcihib2R5KTtcclxuLy9jcmVhdGUgYXNpZGUgc2lkZSBtZW51XHJcbmNvbnN0IGFzaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXNpZGUnKTtcclxuLy9jcmVhdGUgYnV0dG9uIHRvIGNsb3NlIHNpZGUgbWVudVxyXG5jb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jbG9zZS50ZXh0Q29udGVudCA9ICd4JztcclxuY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhc2lkZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn0pO1xyXG5jbG9zZS5pZCA9ICdjbG9zZUJ1dHRvbic7XHJcbmFzaWRlLmFwcGVuZENoaWxkKGNsb3NlKTtcclxuLy9jcmVhdGUgYXNpZGUgaGVhZGVyXHJcbmNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG5oZWFkaW5nLnRleHRDb250ZW50ID0gJ1BSRSBFTEEgVE9QSUNTJztcclxuYXNpZGUuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcbi8vY3JlYXRlIGRpdiB0byBzdG9yZSByZXBvcnRzIGxpc3RcclxuY29uc3QgcmVwb3J0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vY3JlYXRlIGxpc3Qgb2YgcmVwb3J0IHRvcGljXHJcbmNvbnN0IHJlcG9ydExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5sZXQgbGlzdCA9IFtdO1xyXG5mb3IobGV0IGkgPSAwOyBpIDwgcmVwb3J0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICBsaXN0W2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGxpc3RbaV0udGV4dENvbnRlbnQgPSBgJHtyZXBvcnRzW2ldLnRpdGxlfWA7XHJcbiAgICBsaXN0W2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVwb3J0c1tpXS5mdW5jKTtcclxuICAgIHJlcG9ydExpc3QuYXBwZW5kQ2hpbGQobGlzdFtpXSk7XHJcbn1cclxucmVwb3J0RGl2LmFwcGVuZENoaWxkKHJlcG9ydExpc3QpO1xyXG5hc2lkZS5hcHBlbmRDaGlsZChyZXBvcnREaXYpO1xyXG5ib2R5LmFwcGVuZENoaWxkKGFzaWRlKTtcclxuLy9jcmVhdGUgbWFpbiBkaXYgd2hlcmUgY29udGVudCB3b3VsZCBiZSBnZW5lcmF0ZWQgdG9cclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuYm9keS5hcHBlbmRDaGlsZChtYWluKTtcclxuZGlzcGxheVN0YXJ0ZWQoKTtcclxucmVuZGVyRm9vdGVyKGJvZHkpOyIsIlxyXG5pbXBvcnQgcGljMSBmcm9tICcuLi8uLi9SRVNPVVJDRVMvaW1hZ2VzL2FjaGlldmUucG5nJztcclxuaW1wb3J0IHBpYzIgZnJvbSAnLi4vLi4vUkVTT1VSQ0VTL2ltYWdlcy9kYW5pZWwxLnBuZyc7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBjcmVhdGVEaXZzID0gKG9iamVjdCkgPT4ge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0ZXh0LmlubmVySFRNTCA9IGA8c3Bhbj7igKIgJHtvYmplY3QudGl0bGV9Ojwvc3Bhbj4gICR7b2JqZWN0LnRleHR9YDtcclxuICAgIGRpdi5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgIGlmKG9iamVjdC5pbWFnZSAhPT0gJyAnKXtcclxuICAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgIGltYWdlLnNyYyA9IG9iamVjdC5pbWFnZTtcclxuICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChpbWFnZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGl2O1xyXG59XHJcblxyXG5cclxuXHJcbmNvbnN0IGNyZWF0ZVZpZHMgPSAob2JqZWN0KSA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRleHQuaW5uZXJIVE1MID0gYDxzcGFuPuKAoiAke29iamVjdC5saXN0fTwvc3Bhbj5gO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgaWYob2JqZWN0LnZpZGVvICE9PSAnICcpe1xyXG4gICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgYm94LmlubmVySFRNTCA9IG9iamVjdC52aWRlbztcclxuICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGJveCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGl2O1xyXG59XHJcblxyXG5jb25zdCBkaXNwbGF5VGFzayA9IChudW0sIG5hbWUsIGxpc3RzKSA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgaGVhZC50ZXh0Q29udGVudCA9IGAke251bX0uICR7bmFtZX1gO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGhlYWQpO1xyXG4gICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgbGV0IGxpc3RJdGVtcyA9IFtdO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGxpc3RzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBsaXN0SXRlbXNbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGxpc3RJdGVtc1tpXS50ZXh0Q29udGVudCA9IGxpc3RzW2ldO1xyXG4gICAgICAgIHRhc2tzLmFwcGVuZENoaWxkKGxpc3RJdGVtc1tpXSk7XHJcbiAgICB9XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGFza3MpO1xyXG4gICAgcmV0dXJuIGRpdjtcclxufVxyXG5cclxuY29uc3QgcmVzZXQgPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG4gICAgbWFpbi5pbm5lckhUTUwgPSAnJztcclxuICAgIHJldHVybiBtYWluO1xyXG59XHJcblxyXG5jb25zdCBjcmVhdGVEb3dubG9hZCA9ICh1cmwpID0+IHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2Rvd25sb2FkJyk7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkb3dubG9hZGN0YScpO1xyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZG93bmxvYWRCb3gnKTtcclxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBsaW5rLmhyZWYgPSB1cmw7XHJcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnRE9XTkxPQUQnOyBcclxuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGljb24uc3JjID0gcGljMTtcclxuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChpY29uKTtcclxuICAgIGxpbmsuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgcmV0dXJuIGRpdlxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVIb3ZlciA9ICh1cmwpID0+IHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgdmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdmlldy50ZXh0Q29udGVudCA9ICd2aWV3IHJlcG9ydHMgPic7XHJcbiAgICB2aWV3LmNsYXNzTGlzdC5hZGQoJ3ZpZXdUZXh0Jyk7XHJcbiAgICB2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FzaWRlJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGRvd25sb2FkID0gICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBsaW5rLmhyZWYgPSB1cmw7XHJcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpY29uLnNyYyA9IHBpYzE7XHJcbiAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ2hvdmVySWNvbicpO1xyXG4gICAgbGluay5hcHBlbmRDaGlsZChpY29uKTtcclxuICAgIGRvd25sb2FkLmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKHZpZXcpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGRvd25sb2FkKTtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdob3ZlcicpO1xyXG4gICAgcmV0dXJuIGRpdjtcclxufVxyXG5cclxuY29uc3QgZGlzcGxheVN0YXJ0ZWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtYWluID0gcmVzZXQoKTtcclxuICAgIFxyXG4gICAgY29uc3QgZGl2SW1nQWNoaWV2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXZJbWdBY2hpZXZlLmNsYXNzTGlzdC5hZGQoXCJkaXYtaW1nLWFjaGlldmVcIik7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBpbWdBY2hpZXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGRpdkltZ0FjaGlldmUuYXBwZW5kQ2hpbGQoaW1nQWNoaWV2ZSk7XHJcbiAgICBpbWdBY2hpZXZlLnNyYyA9IHBpYzE7XHJcbiAgICBpbWdBY2hpZXZlLmNsYXNzTGlzdC5hZGQoJ2Z1bGxJbWcnKTtcclxuICAgIGltZ0FjaGlldmUuaWQgPSAnZ2V0U3RhcnRJbWcnO1xyXG4gICAgXHJcbiAgICBjb25zdCBzdGFydGluZ0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBzdGFydGluZ0hlYWRlci50ZXh0Q29udGVudCA9ICdHRVRUSU5HIFNUQVJURUQgV0lUSCBQUk9EVUNUSU9OIEVMQSc7XHJcbiAgICBzdGFydGluZ0hlYWRlci5pZCA9ICdnZXRTdGFydEhlYWQnO1xyXG4gICAgZGl2SW1nQWNoaWV2ZS5hcHBlbmRDaGlsZChzdGFydGluZ0hlYWRlcik7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGRpdkltZ0FjaGlldmUpO1xyXG4gICAgXHJcbiAgICBjb25zdCBnZW5TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgY29uc3QgZ2VuSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBnZW5IZWFkLnRleHRDb250ZW50ID0gJ0dlbmVyYWwgSW5zdHJ1Y3Rpb25zJztcclxuICAgIGdlblNlY3Rpb24uYXBwZW5kQ2hpbGQoZ2VuSGVhZCk7XHJcbiAgICBjb25zdCBnZW5EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgZ2VuRGVzYy50ZXh0Q29udGVudCA9ICdGb2xsb3cgdGhlc2UgaW5zdHJ1Y3Rpb25zIHdoZW4gcHJlcGFyaW5nIGZvciBhbnkgUHJvZHVjdGlvbiBFTEEuLi4nO1xyXG4gICAgZ2VuU2VjdGlvbi5hcHBlbmRDaGlsZChnZW5EZXNjKTtcclxuICAgIGNvbnN0IHJlcG9ydCA9IGRpc3BsYXlUYXNrKCcxJywgJ1JlcG9ydCBGb3JtYXQ6JywgWydVc2UgQTQgcGFwZXIgb3IgZnVsbC1zY2FscCBzaGVldHMgZm9yIHdyaXRpbmcgeW91ciByZXBvcnRzLicsICdUaGUgaW5zdHJ1Y3RvciB3aWxsIHNwZWNpZnkgdGhlIHByZWZlcnJlZCBmb3JtYXQ7IGlmIG5lY2Vzc2FyeS4nXSk7XHJcbiAgICBnZW5TZWN0aW9uLmFwcGVuZENoaWxkKHJlcG9ydCk7XHJcbiAgICBjb25zdCBhdHRlbmQgPSBkaXNwbGF5VGFzaygnMicsICdBdHRlbmRhbmNlOicsIFsnUHVuY3R1YWxpdHkgaXMgY3J1Y2lhbCBmb3IgYWxsIFByb2R1Y3Rpb24gRUxBIHNlc3Npb25zLicsICdFbnN1cmUgeW91IGRvIG5vdCBtaXNzIGFueSBzZXNzaW9uLiddKTtcclxuICAgIGdlblNlY3Rpb24uYXBwZW5kQ2hpbGQoYXR0ZW5kKTtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoZ2VuU2VjdGlvbik7XHJcblxyXG4gICAgY29uc3QgcmVwU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgIGNvbnN0IHJlcEhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgcmVwSGVhZC50ZXh0Q29udGVudCA9ICdSZXBvcnQgU3RydWN0dXJlJztcclxuICAgIHJlcFNlY3Rpb24uYXBwZW5kQ2hpbGQocmVwSGVhZCk7XHJcbiAgICBjb25zdCByZXBEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcmVwRGVzYy50ZXh0Q29udGVudCA9ICdJdCBpcyBtb3N0IGV4cGVkaWVudCB0aGF0IHlvdSBmb2xsb3cgdGhlIHN0cnVjdHVyZSBnaXZlbiBiZWxvdywgd2hlbiB3cml0aW5nIHlvdXIgcmVwb3J0cy4nO1xyXG4gICAgcmVwU2VjdGlvbi5hcHBlbmRDaGlsZChyZXBEZXNjKTtcclxuICAgIGNvbnN0IGlkID0gZGlzcGxheVRhc2soJzEnLCAnSWRlbnRpZmljYXRpb246JywgWydOYW1lOiBbWW91ciBmdWxsIG5hbWVdJywgJ01hdHJpY3VsYXRpb24gTnVtYmVyOiBbWW91ciBNYXRyaWN1bGF0aW9uIE51bWJlcl0nLCAnRGVwYXJ0bWVudDogW1lvdXIgZGVwYXJ0bWVudF0nLCAnU2VyaWFsIE51bWJlcjogW1lvdXIgRUxBIFNlcmlhbCBudW1iZXIgVXBvbiByZWdpc3RyYXRpb25dJywgJ1NlY3Rpb246IFtdJywgJ1RpdGxlIG9mIEV4cGVyaW1lbnQ6IFtlLmcg4oCcQmVuY2ggZml0dGluZ+KAnV0nLCAnRXhwZXJpbWVudCBDb2RlOiBbZS5nIOKAnEFNMjAx4oCdXSddKTtcclxuICAgIHJlcFNlY3Rpb24uYXBwZW5kQ2hpbGQoaWQpO1xyXG4gICAgY29uc3Qgb2JqZWN0aXZlID0gZGlzcGxheVRhc2soJzInLCAnT2JqZWN0aXZlczonLCBbJ1N0YXRlIHRoZSBhaW0gb2YgdGhlIGV4cGVyaW1lbnQgYXMgbGlzdGVkIGluIHRoZSBtYW51YWwuIFdyaXRlIGRvd24gYWxsIHRoZSBvYmplY3RpdmVzIHByb3ZpZGVkLiddKTtcclxuICAgIHJlcFNlY3Rpb24uYXBwZW5kQ2hpbGQob2JqZWN0aXZlKTtcclxuICAgIGNvbnN0IHRvb2xzID0gZGlzcGxheVRhc2soJzMnLCAnQXBwYXJhdHVzL1Rvb2xzOicsIFsnTGlzdCBhbGwgdG9vbHMgdXNlZCBpbiB0aGUgZXhwZXJpbWVudC4nLCAnSW5jbHVkZSBkaWFncmFtcyBvZiB0aGUgdG9vbHMgYW5kIGVuc3VyZSB0aGV5IGFyZSB3ZWxsLWxhYmVsZWQgYW5kIG5lYXRseSBkcmF3bi4nXSk7XHJcbiAgICByZXBTZWN0aW9uLmFwcGVuZENoaWxkKHRvb2xzKTtcclxuICAgIGNvbnN0IHRoZW9yeSA9IGRpc3BsYXlUYXNrKCc0JywgJ1RoZW9yeTonLCBbJ1Byb3ZpZGUgYSB0aGVvcmV0aWNhbCBiYWNrZ3JvdW5kIHJlbGV2YW50IHRvIHRoZSBwcmFjdGljYWwuJywgJ0Rpc2N1c3MgdGhlIGFwcGxpY2F0aW9ucyBhbmQgc2VxdWVuY2Ugb2Ygb3BlcmF0aW9ucywgc3VwcGxlbWVudGVkIHdpdGggZGlhZ3JhbXMgd2hlcmUgbmVjZXNzYXJ5LicsICdFbnN1cmUgdGhlIGNvbnRlbnQgaXMgZm9jdXNlZCBhbmQgZG9lcyBub3QgZGV2aWF0ZSBmcm9tIHRoZSB0b3BpYy4nXSk7XHJcbiAgICByZXBTZWN0aW9uLmFwcGVuZENoaWxkKHRoZW9yeSk7XHJcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gZGlzcGxheVRhc2soJzUnLCAnUHJvY2VkdXJlczonLCBbJ0RvY3VtZW50IHRoZSBwcm9jZWR1cmUgZXhhY3RseSBhcyB3cml0dGVuIGluIHRoZSBtYW51YWwuJywgJ1VzZSBkaWFncmFtcyB0byBleHBsYWluIHRoZSBzdGVwcywgaWYgcG9zc2libGUuJ10pO1xyXG4gICAgcmVwU2VjdGlvbi5hcHBlbmRDaGlsZChwcm9jZWR1cmVzKTtcclxuICAgIGNvbnN0IHByZWNhdXRpb25zID0gZGlzcGxheVRhc2soJzYnLCAnUHJlY2F1dGlvbnM6JywgWydMaXN0IHRoZSBwcmVjYXV0aW9ucyB0YWtlbiBkdXJpbmcgdGhlIGV4cGVyaW1lbnQgaW4gcGFzdCB0ZW5zZS4nLCAnfkV4YW1wbGU6IOKAnEkgZW5zdXJlZCB0aGF0IEkuLi7igJ0nXSk7XHJcbiAgICByZXBTZWN0aW9uLmFwcGVuZENoaWxkKHByZWNhdXRpb25zKTtcclxuICAgIGNvbnN0IGNvbmNsdXNpb25zID0gZGlzcGxheVRhc2soJzcnLCAnQ29uY2x1c2lvbjonLCBbJ1N1bW1hcml6ZSB0aGUgb3V0Y29tZXMgb2YgdGhlIGV4cGVyaW1lbnQuJywgJ35FeGFtcGxlOiDigJxBdCB0aGUgZW5kIG9mIHRoaXMgZXhwZXJpbWVudCwgd2Ugd2VyZSBhYmxlIHRvIGRldmVsb3AgYSBsYXAgam9pbnQsIHVuZGVyc3RhbmQgdGhlIHNlcXVlbmNlIG9mIG9wZXJhdGlvbnMgaW52b2x2ZWQsIGFuZCBhY2hpZXZlIGEgY29tcHJlaGVuc2l2ZSB1bmRlcnN0YW5kaW5nIG9mIHRoZSBwcm9jZXNzLuKAnSddKTtcclxuICAgIHJlcFNlY3Rpb24uYXBwZW5kQ2hpbGQoY29uY2x1c2lvbnMpO1xyXG4gICAgY29uc3QgcmVmZXJlbmNlcyA9IGRpc3BsYXlUYXNrKCc4JywgJ1JlZmVyZW5jZXM6JywgWydDaXRlIGJvb2tzIGFuZCBtYW51YWxzIHJlbGV2YW50IHRvIHRoZSBleHBlcmltZW50LiBEbyBub3QgaW5jbHVkZSB3ZWIgbGlua3MuJywgJ35FeGFtcGxlOicsICd+fuKAnFByb2R1Y3Rpb24gRW5naW5lZXJpbmcgTGFib3JhdG9yeSBNYW51YWwgZm9yIEVMQTIwMSBhbmQgRUxBMjAy4oCZ4oCZIGJ5IHRoZSBEZXBhcnRtZW50IG9mIFByb2R1Y3Rpb24gRW5naW5lZXJpbmcsIFVuaXZlcnNpdHkgb2YgQmVuaW4uJywgJ35+4oCdVGhlIFRJRyBXZWxkaW5nIEJvb2vigJ0gYnkgVG9kZCBCcmlkaWd1bS4nLCAnfn7igJ1XZWxkaW5nIGZvciBEdW1taWVz4oCdIGJ5IFN0ZXZlbiBSb2JlcnQgRmFybnN3b3J0aC4nXSk7XHJcbiAgICByZXBTZWN0aW9uLmFwcGVuZENoaWxkKHJlZmVyZW5jZXMpO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChyZXBTZWN0aW9uKTtcclxuXHJcbiAgICBjb25zdCBhZGRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgY29uc3QgYWRkSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBhZGRIZWFkLnRleHRDb250ZW50ID0gJ0FkZGl0aW9uYWwgTm90ZXMnO1xyXG4gICAgYWRkU2VjdGlvbi5hcHBlbmRDaGlsZChhZGRIZWFkKTtcclxuICAgIGNvbnN0IHBhcmExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcGFyYTEudGV4dENvbnRlbnQgPSBcIkFsd2F5cyBmb2xsb3cgdGhlIGluc3RydWN0b3IncyBzcGVjaWZpYyBndWlkZWxpbmVzIHJlZ2FyZGluZyByZXBvcnQgZm9ybWF0IGFuZCBjb250ZW50IHRvIGVuc3VyZSBnb29kIG1hcmtzLlwiO1xyXG4gICAgYWRkU2VjdGlvbi5hcHBlbmRDaGlsZChwYXJhMSk7XHJcbiAgICBjb25zdCBwYXJhMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHBhcmEyLnRleHRDb250ZW50ID0gXCJTdWJtaXQgeW91ciByZXBvcnQgb24gdGltZS4gVGhlIHJlcG9ydCBzdWJtaXNzaW9uIHRpbWUgaXMgdXN1YWxseSBnaXZlbiBieSB0aGUgaW5zdHJ1Y3Rvci5cIjtcclxuICAgIGFkZFNlY3Rpb24uYXBwZW5kQ2hpbGQocGFyYTIpO1xyXG4gICAgY29uc3QgZ29vZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZ29vZC50ZXh0Q29udGVudCA9ICdHT09EIExVQ0shISEnO1xyXG4gICAgYWRkU2VjdGlvbi5hcHBlbmRDaGlsZChnb29kKTtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoYWRkU2VjdGlvbik7XHJcbiAgICBjb25zdCBob3ZlciA9IGNyZWF0ZUhvdmVyKCcjJyk7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGhvdmVyKTtcclxuICAgIGNvbnN0IGRvd25sb2FkID0gY3JlYXRlRG93bmxvYWQoJyMnKTtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoZG93bmxvYWQpO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IGRpc3BsYXlXVzIwMSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1haW4gPSByZXNldCgpO1xyXG4gICAgICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgIGhlYWQudGV4dENvbnRlbnQgID0gJ0ludHJvZHVjdGlvbiB0byBXb29kIFdvcmsgcHJhY3RpY2V7V1cyMDF9JztcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGhlYWQpO1xyXG4gICAgICAgIGNvbnN0IG9iamVjdGl2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCBvYmpIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICBvYmpIZWFkLnRleHRDb250ZW50ID0gJ09CSkVDVElWRVMnO1xyXG4gICAgICAgIG9iamVjdGl2ZS5hcHBlbmRDaGlsZChvYmpIZWFkKTtcclxuICAgICAgICBjb25zdCBvYmpMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICBjb25zdCBvYmplY3RpdmVzID0gWydUbyBrbm93IHRoZSBtYXRlcmlhbHMgdXNlZCBpbiB3b29kd29yayBzaG9wJywnVG8gZmFtaWxpYXJpemUgd2l0aCB0aGUgdG9vbHMgdXNlZCBpbiB3b29kd29yayBzaG9wJywnVG8ga25vdyBob3cgdG8gY3V0IHdvb2QnLCAnVG8ga25vdyBob3cgdG8gcGxhbmUgd29vZCddO1xyXG4gICAgICAgIGxldCBsaXN0ID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG9iamVjdGl2ZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBsaXN0W2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgbGlzdFtpXS50ZXh0Q29udGVudCA9IG9iamVjdGl2ZXNbaV07XHJcbiAgICAgICAgICAgIG9iakxpc3QuYXBwZW5kQ2hpbGQobGlzdFtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9iamVjdGl2ZS5hcHBlbmRDaGlsZChvYmpMaXN0KTtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKG9iamVjdGl2ZSk7XHJcbiAgICAgICAgY29uc3QgYXBwSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgYXBwSGVhZC50ZXh0Q29udGVudCA9ICdBcHBhcmF0dXMnO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoYXBwSGVhZCk7XHJcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2FwcEJveCcpO1xyXG4gICAgICAgIGNvbnN0IGFwcGFyYXR1cyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnVGltYmVyJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWMxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ01ldHJlIFJ1bGUnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnTWVhc3VyaW5nIFN0ZWVsIFRhcGUnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnR2F1Z2VzJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWMxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ01hcmtpbmcgS25pZmUgU2NyaWJlcnMnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzIyXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ0JldmVsIFNxdWFyZScsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljMjNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnQy1jbGFtcCcsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljMjRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnVC1jbGFtcCcsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljMjVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnU2F3cycsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljMjZcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnQ2hpc2VsJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWMyN1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdXb29kZW4gSmFjayBQbGFuZScsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljMjhcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnQnJhZGF3bCcsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljMjlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnQnJhY2UnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzMwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ0F1Z2VyIGJpdCcsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljMzFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnSGFuZCBkcmlsbCcsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljMzJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnTWFsbGV0JyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWMzM1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdDbGF3IEhhbW1lcicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljMzRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnUGluY2VyJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWMzNVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdTY3JldyBkcml2ZXInLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzM2XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ1dvb2QgcmFzcCBmaWxlJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWMzN1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdUcnkgU3F1YXJlJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWMzOFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdCZW5jaCBWaWNlJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWMzOVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdXb3JrIEJlbmNoJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWM0MFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdQYXJpbmcgQ2hpc2VsJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWM0MVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdTbW9vdGggUGxhbmUnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzQyXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIF07XHJcbiAgICAgICAgbGV0IGFwcEJveCA9IFtdO1xyXG4gICAgICAgIGxldCBhcHBJbWFnZSA9IFtdO1xyXG4gICAgICAgIGxldCBhcHBDYXB0aW9uID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGFwcGFyYXR1cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGFwcEJveFtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBhcHBJbWFnZVtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICBhcHBDYXB0aW9uW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBhcHBJbWFnZVtpXS5zcmMgPSAgYXBwYXJhdHVzW2ldLmltYWdlO1xyXG4gICAgICAgICAgICBhcHBDYXB0aW9uW2ldLnRleHRDb250ZW50ID0gYXBwYXJhdHVzW2ldLmNhcDtcclxuICAgICAgICAgICAgYXBwQm94W2ldLmFwcGVuZENoaWxkKGFwcEltYWdlW2ldKTtcclxuICAgICAgICAgICAgYXBwQm94W2ldLmFwcGVuZENoaWxkKGFwcENhcHRpb25baV0pO1xyXG4gICAgICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGFwcEJveFtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoc2VjdGlvbik7XHJcbiAgICAgICAgY29uc3QgdGhlb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IHRoZW9IZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICB0aGVvSGVhZC50ZXh0Q29udGVudCA9ICdUSEVPUlknO1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZCh0aGVvSGVhZCk7XHJcbiAgICAgICAgY29uc3QgZXhwbGFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGV4cGxhaW4udGV4dENvbnRlbnQgPSAnV29vZHdvcmtpbmcgcHJhY3RpY2UgaXMgdGhlIGFydCBvZiBjcmVhdGluZyBmdW5jdGlvbmFsIG9yIGRlY29yYXRpdmUgb2JqZWN0cyBmcm9tIHdvb2QuIENhcnBlbnRyeSBpcyBhIHNraWxsZWQgdHJhZGUgdGhhdCBpbnZvbHZlcyB3b3JraW5nIHdpdGggd29vZCB0byBjcmVhdGUgc3RydWN0dXJlcywgZnVybml0dXJlLCBhbmQgdmFyaW91cyB3b29kZW4gb2JqZWN0cy4gQ2FycGVudGVycyB1c2UgYSBjb21iaW5hdGlvbiBvZiBoYW5kIHRvb2xzIGFuZCBwb3dlciB0b29scyB0byBtZWFzdXJlLCBjdXQsIHNoYXBlLCBqb2luLCBhbmQgZmluaXNoIHdvb2QgbWF0ZXJpYWxzLiBDYXJwZW50cnkgaXMgYSBza2lsbGVkIHRyYWRlIHdpdGhpbiB0aGUgYnJvYWRlciBmaWVsZCBvZiB3b29kd29ya2luZyB0aGF0IGZvY3VzZXMgc3BlY2lmaWNhbGx5IG9uIGNvbnN0cnVjdGluZyB3b29kZW4gc3RydWN0dXJlcyBhbmQgb2JqZWN0cyBmb3IgdmFyaW91cyBwdXJwb3Nlcy4gQ2FycGVudHJ5IGlzIGEgc2tpbGxlZCB0cmFkZSB0aGF0IGludm9sdmVzIHRoZSBjdXR0aW5nLCBzaGFwaW5nLCBhbmQgaW5zdGFsbGF0aW9uIG9mIHdvb2QgYnVpbGRpbmcgbWF0ZXJpYWxzLiBIYW5kIHNhd3MsIHBvd2VyIHNhd3MgKG1pdGVyIGFuZCBjaXJjdWxhciBzYXdzKSwgaGFtbWVycywgY2hpc2VscywgZHJpbGxzLCBsZXZlbHMsIHNxdWFyZXMsIGFuZCBtZWFzdXJpbmcgdGFwZXMgYXJlIGV4YW1wbGVzIG9mIGNvbW1vbiBjYXJwZW50cnkgdG9vbHMuJztcclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoZXhwbGFpbik7XHJcbiAgICAgICAgY29uc3QgZXhwbGFpbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBleHBsYWluMS50ZXh0Q29udGVudCA9ICdVdGlsaXppbmcgc3BlY2lhbGlzdCB0b29scyBsaWtlIGpvaW5lcnkgbWFjaGluZXMsIHJvdXRlcnMsIHBsYW5lcnMsIGFuZCBwbmV1bWF0aWMgbmFpbCBndW5zIG1heSBiZSBuZWNlc3NhcnkgZm9yIGFkdmFuY2VkIGNhcnBlbnRyeS4gQ2FycGVudHJ5IGJlaW5nIGEgaGlnaGx5IHNraWxsZWQgam9iLCBjYXJwZW50cnkgZGVtYW5kcyBhY2N1cmFjeSwgZm9jdXMgb24gZGV0YWlsLCBhbmQgYSBzb2xpZCBncmFzcCBvZiBjb25zdHJ1Y3Rpb24gcHJpbmNpcGxlcy4gQXMgY2FycGVudGVycyB3aXRuZXNzIHRoZWlyIGNyZWF0aW9ucyBjb21lIHRvIGxpZmUgYW5kIG1ha2UgYSBwb3NpdGl2ZSBpbXBhY3Qgb24gdGhlIGJ1aWx0IHdvcmxkLCBpdCBwcm92aWRlcyBvcHBvcnR1bml0eSBmb3IgY3JlYXRpdml0eSwgY3JhZnRzbWFuc2hpcCwgYW5kIGpvYiBzYXRpc2ZhY3Rpb24uJztcclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoZXhwbGFpbjEpO1xyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ0NhcnBlbnRyeSBpcyB1c2VkIGluIGRpZmZlcmVudCBhc3BlY3RzIGFuZCBhbHNvIGFwcGxpZWQgaW4gZGlmZmVyZW50IGZpZWxkcyB3aGljaCBpbmNsdWRlOic7XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcclxuICAgICAgICBjb25zdCBjaGVja0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrcyA9IFsnQnVpbGRpbmcgZnJhbWV3b3JrcycsICdGbG9vcmluZycsICdEb29ycyBhbmQgd2luZG93cycsICdSb29maW5nJywgJ1N0YWlyY2FzZXMnLCAnRnVybml0dXJlIG1ha2luZyBldGMuJ107XHJcbiAgICAgICAgbGV0IGFycmF5ID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNoZWNrcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGFycmF5W2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgYXJyYXlbaV0udGV4dENvbnRlbnQgPSBjaGVja3NbaV07XHJcbiAgICAgICAgICAgIGNoZWNrTGlzdC5hcHBlbmRDaGlsZChhcnJheVtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZChjaGVja0xpc3QpO1xyXG4gICAgICAgIGNvbnN0IHRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHRleHQyLnRleHRDb250ZW50ID0gJ09uZSBvZiB0aGUgbWF0ZXJpYWxzIHVzZWQgaW4gd29vZCB3b3JrIHByYWN0aWNlIGlzIHdvb2QuIFdvb2QgaXMgYSBuYXR1cmFsIG1hdGVyaWFsIGRlcml2ZWQgZnJvbSB0aGUgc3RlbXMsIGJyYW5jaGVzLCBhbmQgcm9vdHMgb2YgdHJlZXMgYW5kIHRoZXJlIGFyZSBkaWZmZXJlbnQgY2xhc3NlcyBvZiB3b29kLCB0aGUgbWFpbiBjbGFzc2VzIGluY2x1ZGU6JztcclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQodGV4dDIpO1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdTb2Z0IHdvb2QnLFxyXG4gICAgICAgICAgICB0ZXh0OiAnU29mdHdvb2QgY29tZXMgZnJvbSBjb25pZmVyb3VzIHRyZWVzKGd5bW5vc3Blcm1zKSwgYWxzbyBrbm93biBhcyBldmVyZ3JlZW5zLCB3aGljaCBoYXZlIG5lZWRsZXMgb3IgY29uZXMgb3Igc2NhbGUtbGlrZSBsZWF2ZXMuIFRoZXNlIHRyZWVzIHRlbmQgdG8gZ3JvdyBmYXN0ZXIgdGhhbiBoYXJkd29vZHMgYW5kIGFyZSBnZW5lcmFsbHkgbGVzcyBleHBlbnNpdmUuIFNvZnR3b29kcyBhcmUgdHlwaWNhbGx5IGxpZ2h0ZXIgaW4gd2VpZ2h0IGFuZCBoYXZlIGEgc2ltcGxlciBncmFpbiBzdHJ1Y3R1cmUgYW5kIHRoZXkgYXJlIGNvbW1vbmx5IHVzZWQgaW4gY29uc3RydWN0aW9uLCBmcmFtaW5nLCBkZWNraW5nLCBhbmQgcGFwZXIgcHJvZHVjdGlvbi4gRXhhbXBsZXMgaW5jbHVkZSBwaW5lLCBzcHJ1Y2UsIGNlZGFyLCBhbmQgZmlyLicsXHJcbiAgICAgICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnSGFyZCB3b29kJyxcclxuICAgICAgICAgICAgdGV4dDogJ0NvbWVzIGZyb20gZGVjaWR1b3VzIHRyZWVzIChhbmdpb3NwZXJtcykgdGhhdCB0eXBpY2FsbHkgaGF2ZSBicm9hZCBsZWF2ZXMuIEhhcmR3b29kcyBhcmUga25vd24gZm9yIHRoZWlyIGRlbnNlIHN0cnVjdHVyZSBhbmQgYXJlIG9mdGVuIHVzZWQgaW4gZnVybml0dXJlIG1ha2luZywgZmxvb3JpbmcsIGNhYmluZXRyeSwgYW5kIHdvb2R3b3JraW5nIGNyYWZ0cy4gRXhhbXBsZXMgaW5jbHVkZSBvYWssIG1hcGxlLCBjaGVycnksIGFuZCB3YWxudXQuJyxcclxuICAgICAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoY3JlYXRlRGl2cyhpdGVtKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQodGhlb3J5KTtcclxuICAgICAgICBjb25zdCBwcmFjdGljYWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IGhlYWQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICBoZWFkMS50ZXh0Q29udGVudCA9ICdQUkFDVElDQUwgMSA6IEhPVyBUTyBDVVQgV09PRCc7XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZChoZWFkMSk7XHJcbiAgICAgICAgY29uc3QgcHJvY2VkdXJlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGhlYWQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBoZWFkMi50ZXh0Q29udGVudCA9ICdQUk9DRURVUkVTJztcclxuICAgICAgICBwcm9jZWR1cmUxLmFwcGVuZENoaWxkKGhlYWQyKTtcclxuICAgICAgICBjb25zdCBwYXJ0cyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICBsaXN0OiAnTWVhc3VyZSB3b29kIDYwMCB4IDc1IHggMjVtbScsXHJcbiAgICAgICAgICAgIHZpZGVvOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpc3Q6ICdNYXJrIHRoZSBwaWVjZSB1c2luZyB0YXBlIGFuZCBwZW5jaWwnLFxyXG4gICAgICAgICAgICB2aWRlbzogJzxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS1ub2Nvb2tpZS5jb20vZW1iZWQvbnVFejhUdHJmak0/c2k9MzE3WGh0d3hBVDhVQnZMWlwiIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmU7IHdlYi1zaGFyZVwiIHJlZmVycmVycG9saWN5PVwic3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpblwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGlzdDogJ1VzZSByaXAgc2F3IHRvIGN1dCA2MDBtbSBsb25nJyxcclxuICAgICAgICAgICAgdmlkZW86ICc8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUtbm9jb29raWUuY29tL2VtYmVkLzBJc0R2aDdHUjRBP3NpPWlSb0hocUk0WU5xa29EYXdcIiB0aXRsZT1cIllvdVR1YmUgdmlkZW8gcGxheWVyXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlOyB3ZWItc2hhcmVcIiByZWZlcnJlcnBvbGljeT1cInN0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW5cIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpc3Q6ICdVc2UgdGhlIGNyb3NzIGN1dCBzYXcgdG8gdGhlIHJlcXVpcmVkIGxlbmd0aCcsXHJcbiAgICAgICAgICAgIHZpZGVvOiAnPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLW5vY29va2llLmNvbS9lbWJlZC9VbVFkYVd5M1B3MD9zaT1vMEE3R0lpa09KVEoxdUNkXCIgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZTsgd2ViLXNoYXJlXCIgcmVmZXJyZXJwb2xpY3k9XCJzdHJpY3Qtb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICBsaXN0OiAnTWFyayBvdXQgZGlhZ29uYWwgbGluZSB1c2luZyB0aGUgc2xpZGluZyBiZXZlbCcsXHJcbiAgICAgICAgICAgIHZpZGVvOiAnPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLW5vY29va2llLmNvbS9lbWJlZC9uelFZZDh3eENRRT9zaT04TDNNWXB2NlNRVmJrb29SXCIgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZTsgd2ViLXNoYXJlXCIgcmVmZXJyZXJwb2xpY3k9XCJzdHJpY3Qtb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICBsaXN0OiAnVXNlIHRlbm9uIHNhdyB0byBjdXQgdGhlIGRpYWdvbmFsIGxpbmUnLFxyXG4gICAgICAgICAgICB2aWRlbzogJzxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS1ub2Nvb2tpZS5jb20vZW1iZWQvYXU4ZWpvdTJWcEU/c2k9b3pYMHB0VHVWeC11eVVka1wiIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmU7IHdlYi1zaGFyZVwiIHJlZmVycmVycG9saWN5PVwic3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpblwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIHBhcnRzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcHJvY2VkdXJlMS5hcHBlbmRDaGlsZChjcmVhdGVWaWRzKGl0ZW0pKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZChwcm9jZWR1cmUxKTtcclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgZGVzY3JpcHRpb24xLnRleHRDb250ZW50ID0gJ1RoZSBsaW5rIHRvIHdhdGNoIGhvdyB0byBwZXJmb3JtIHRoZSBidXR0IGpvaW50IHByYWN0aWNhbCBpcyBiZWxvdyDwn5GHJztcclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uMSk7XHJcbiAgICAgICAgY29uc3QgdmlkZW8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdmlkZW8zLmlubmVySFRNTCA9ICc8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUtbm9jb29raWUuY29tL2VtYmVkL2p4dk9lcE1GdGJBP3NpPVVQeEdmTXZrX3VZdTBNdWRcIiB0aXRsZT1cIllvdVR1YmUgdmlkZW8gcGxheWVyXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlOyB3ZWItc2hhcmVcIiByZWZlcnJlcnBvbGljeT1cInN0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW5cIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+JztcclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKHZpZGVvMyk7XHJcbiAgICAgICAgY29uc3QgaGVhZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIGhlYWQzLnRleHRDb250ZW50ID0gJ1BSQUNUSUNBTCAyIDogUExBTk5JTkcgT0YgV09PRCc7XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZChoZWFkMyk7XHJcbiAgICAgICAgY29uc3QgcHJvY2VkdXJlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGhlYWQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBoZWFkNC50ZXh0Q29udGVudCA9ICdQUk9DRURVUkVTJztcclxuICAgICAgICBwcm9jZWR1cmUyLmFwcGVuZENoaWxkKGhlYWQ0KTtcclxuICAgICAgICBjb25zdCBwYXJ0czEgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGlzdDogJ0hhdmUgdGltYmVyIDYwMG1tIGJ5IDc1bW0gYnkgMjVtbSB0aGljaycsXHJcbiAgICAgICAgICAgIHZpZGVvOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpc3Q6ICdGaXggdGhlIHRpbWJlciB1c2luZyBjbGFtcHMnLFxyXG4gICAgICAgICAgICB2aWRlbzogJzxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS1ub2Nvb2tpZS5jb20vZW1iZWQvdDN2M0oxRUZyUjg/c2k9OVVLb0czZUFxRnhCVkM0RlwiIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmU7IHdlYi1zaGFyZVwiIHJlZmVycmVycG9saWN5PVwic3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpblwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGlzdDogJ1VzZSBwbGFuZSBpbiBzbW9vdGhpbmcgdGhlIHN1cmZhY2UnLFxyXG4gICAgICAgICAgICB2aWRlbzogJzxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS1ub2Nvb2tpZS5jb20vZW1iZWQvYzY1cktrOGZyaGM/c2k9V3paV0NidXpiNUdya19BN1wiIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmU7IHdlYi1zaGFyZVwiIHJlZmVycmVycG9saWN5PVwic3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpblwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGlzdDogJ1VzZSB0aGUgY3Jvc3MgY3V0IHNhdyB0byB0aGUgcmVxdWlyZWQgbGVuZ3RoJyxcclxuICAgICAgICAgICAgdmlkZW86ICc8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUtbm9jb29raWUuY29tL2VtYmVkL1VtUWRhV3kzUHcwP3NpPW8wQTdHSWlrT0pUSjF1Q2RcIiB0aXRsZT1cIllvdVR1YmUgdmlkZW8gcGxheWVyXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlOyB3ZWItc2hhcmVcIiByZWZlcnJlcnBvbGljeT1cInN0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW5cIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpc3Q6ICdVc2UgdHJ5IHNxdWFyZSB0byB0ZXN0IHRoZSBzdXJmYWNlIGZvciBmbGF0bmVzcywgd2hlbiBmbGF0IG1hcmsgb24gaXQnLFxyXG4gICAgICAgICAgICB2aWRlbzogJzxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS1ub2Nvb2tpZS5jb20vZW1iZWQvSnhxcVZGTF9ITjA/c2k9QjBMZE9zWnBGQXBScmJyX1wiIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmU7IHdlYi1zaGFyZVwiIHJlZmVycmVycG9saWN5PVwic3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpblwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGlzdDogJ1R1cm4gdGhlIGVkZ2UgYW5kIHBsYW5lIGFuZCB0ZXN0IHRoYXQgaXQgaXMgc3F1YXJlIHRvIHRoZSBmYWNlIGFuZCBtYXJrIGVkZ2UgbWFyaycsXHJcbiAgICAgICAgICAgIHZpZGVvOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpc3Q6ICdHYXVnZSB0aGUgdGltYmVyIHRvIGhhdmUgdW5pZm9ybSB0aGlja25lc3MgdXNpbmcgdGhlIG1hcmtpbmcgZ3VhZ2UgYW5kIHBsYW4gb2ZmIHRoZSBzdXJwbHVzJyxcclxuICAgICAgICAgICAgdmlkZW86ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGlzdDogJ1BsYW5lIHRoZSBvdGhlciBlZGdlIHRvIGdpdmUnLFxyXG4gICAgICAgICAgICB2aWRlbzogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgcGFydHMxLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcHJvY2VkdXJlMi5hcHBlbmRDaGlsZChjcmVhdGVWaWRzKGl0ZW0pKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZChwcm9jZWR1cmUyKTtcclxuICAgICAgICBjb25zdCBoZWFkNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgaGVhZDUudGV4dENvbnRlbnQgPSAnUFJBQ1RJQ0FMIDMgOiBURUUgSEFMVklORyBKT0lOVFMnO1xyXG4gICAgICAgIHByYWN0aWNhbHMuYXBwZW5kQ2hpbGQoaGVhZDUpO1xyXG4gICAgICAgIGNvbnN0IHByb2NlZHVyZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBoZWFkNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgaGVhZDYudGV4dENvbnRlbnQgPSAnUFJPQ0VEVVJFUyc7XHJcbiAgICAgICAgcHJvY2VkdXJlMy5hcHBlbmRDaGlsZChoZWFkNik7XHJcbiAgICAgICAgY29uc3QgcGFydHMyID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpc3Q6ICdNYXJrIG91dCB0aGUgcGllY2VzIG9uZSBmb3Igc29ja2V0IGFuZCB0aGUgb3RoZXIgZm9yIHBpbiB1c2luZyB0YXBlLCBtYXJraW5nIGdhdWdlLCBwZW5jaWwgYW5kIHRyeSBzcXVhcmUnLFxyXG4gICAgICAgICAgICB2aWRlbzogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICBsaXN0OiAnQ3V0IHRoZSBtYXJraW5nIGxpbmUgYXMgc3BlY2lmaWVkIHVzaW5nIHRlbm9uIHNhdycsXHJcbiAgICAgICAgICAgIHZpZGVvOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpc3Q6ICdSZW1vdmUgdGhlIHdhc3RlIHVzaW5nIGNoaXNlbCBhbmQgbWFsbGV0JyxcclxuICAgICAgICAgICAgdmlkZW86ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGlzdDogJ0NsZWFuIHRoZSBib3R0b20gdXNpbmcgcmFzcCcsXHJcbiAgICAgICAgICAgIHZpZGVvOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpc3Q6ICdDdXQgdGhlIHBpbiB0byBzaXplIHRoZSBwb2NrZXQnLFxyXG4gICAgICAgICAgICB2aWRlbzogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICBsaXN0OiAnRml4IHRoZSBqb2ludCBieSBhcHBseWluZyBsaWdodCBtYWxsZXQgYmVsb3cnLFxyXG4gICAgICAgICAgICB2aWRlbzogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICBsaXN0OiAnV2hlbiBwcm9wZXJseSBmaXggdGVzdCBmb3Igc3F1YXJlLW5lc3MgdXNpbmcgdHJ5IHNxdWFyZScsXHJcbiAgICAgICAgICAgIHZpZGVvOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICBwYXJ0czIuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBwcm9jZWR1cmUzLmFwcGVuZENoaWxkKGNyZWF0ZVZpZHMoaXRlbSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKHByb2NlZHVyZTMpO1xyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBkZXNjcmlwdGlvbjIudGV4dENvbnRlbnQgPSAnVGhlIGxpbmsgdG8gd2F0Y2ggaG93IHRvIHBlcmZvcm0gdGhlIFRlZSBoYWx2aW5nIEpvaW50IHByYWN0aWNhbCBpcyBiZWxvdyDwn5GHJztcclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uMik7XHJcbiAgICAgICAgY29uc3QgdmlkZW80ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdmlkZW80LmlubmVySFRNTCA9ICc8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUtbm9jb29raWUuY29tL2VtYmVkLzV4T1hSeVZKXzFBP3NpPWg1czdhLUlIQ3dOc1pkek9cIiB0aXRsZT1cIllvdVR1YmUgdmlkZW8gcGxheWVyXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlOyB3ZWItc2hhcmVcIiByZWZlcnJlcnBvbGljeT1cInN0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW5cIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+JztcclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKHZpZGVvNCk7XHJcbiAgICAgICAgY29uc3QgaGVhZDcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIGhlYWQ3LnRleHRDb250ZW50ID0gJ1BSQUNUSUNBTCA0OiBET1ZFVEFJTCBIQUxWSU5HIEpPSU5UJztcclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKGhlYWQ3KTtcclxuICAgICAgICBjb25zdCBwcm9jZWR1cmU0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgaGVhZDggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIGhlYWQ4LnRleHRDb250ZW50ID0gJ1BST0NFRFVSRVMnO1xyXG4gICAgICAgIHByb2NlZHVyZTQuYXBwZW5kQ2hpbGQoaGVhZDgpO1xyXG4gICAgICAgIGNvbnN0IHBhcnRzMyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICBsaXN0OiAnTWFyayBvdXQgdGhlIHR3byBwaWVjZXMsIG9uZSBoYXZpbmcgdGhlIHNvY2tldCBhbmQgdGhlIG90aGVyIGRvdmV0YWlsIHBpbicsXHJcbiAgICAgICAgICAgIHZpZGVvOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpc3Q6ICdVc2UgdHJ5IHNxdWFyZSB0byB0cmFuc2ZlciB0aGUgbWFya3MgdG8gdGhlIGVkZ2VzJyxcclxuICAgICAgICAgICAgdmlkZW86ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGlzdDogJ0ZpcnN0IGN1dCB0aGUgc29ja2V0IHVzaW5nIGRvdmV0YWlsIHNhdycsXHJcbiAgICAgICAgICAgIHZpZGVvOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpc3Q6ICdTY29vcCBvdXQgdGhlIHdhc3RlIGFuZCBjbGVhbiB1cCB1c2luZyBjaGlzZWxzJyxcclxuICAgICAgICAgICAgdmlkZW86ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGlzdDogJ0N1dCB0aGUgcGluIGFuZCB0aGUgZG92ZXRhaWwnLFxyXG4gICAgICAgICAgICB2aWRlbzogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICBsaXN0OiAnSW5jbHVkaW5nIHRoZSB3YXN0ZSBwb3J0aW9uIGNsZWFuIHRoZSBwaW4gdXNpbmcgcGFyaW5nIGNoaXNlbCcsXHJcbiAgICAgICAgICAgIHZpZGVvOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpc3Q6ICdGaXggYW5kIGFkanVzdCBieSByZW1vdmluZyB1bndhbnRlZCBwYXJ0cycsXHJcbiAgICAgICAgICAgIHZpZGVvOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsaXN0OiAnRml4IGZpbmFsbHkgbWFraW5nIHN1cmUgdGhlcmUgaXMgYSBmbHVzaCBzdXJmYWNlJyxcclxuICAgICAgICAgICAgICAgIHZpZGVvOiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0OiAnUGxhbiB0aGUgam9pbnQgYW5kIHRlc3QgZm9yIHNxdWFyZS1uZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICB2aWRlbzogJydcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICBwYXJ0czMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBwcm9jZWR1cmU0LmFwcGVuZENoaWxkKGNyZWF0ZVZpZHMoaXRlbSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKHByb2NlZHVyZTQpO1xyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBkZXNjcmlwdGlvbjMudGV4dENvbnRlbnQgPSAnVGhlIGxpbmsgdG8gd2F0Y2ggaG93IHRvIHBlcmZvcm0gdGhlIERvdmV0YWlsIGhhbHZpbmcgSm9pbnQgcHJhY3RpY2FsIGlzIGJlbG93IPCfkYcnO1xyXG4gICAgICAgIHByYWN0aWNhbHMuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24zKTtcclxuICAgICAgICBjb25zdCB2aWRlbzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB2aWRlbzUuaW5uZXJIVE1MID0gJzxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS1ub2Nvb2tpZS5jb20vZW1iZWQvOWpnUmZlZjRabkU/c2k9UXlmQ2cwWGlVUlZvd21mSFwiIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmU7IHdlYi1zaGFyZVwiIHJlZmVycmVycG9saWN5PVwic3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpblwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nO1xyXG4gICAgICAgIHByYWN0aWNhbHMuYXBwZW5kQ2hpbGQodmlkZW81KTtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHByYWN0aWNhbHMpO1xyXG4gICAgICAgIGNvbnN0IHByZWNhdXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgY2F1dGlvbkhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIGNhdXRpb25IZWFkLnRleHRDb250ZW50ID0gXCJQUkVDQVVUSU9OU1wiO1xyXG4gICAgICAgIHByZWNhdXRpb24uYXBwZW5kQ2hpbGQoY2F1dGlvbkhlYWQpO1xyXG4gICAgICAgIGNvbnN0IGNhdXRpb25MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICBjb25zdCBwcmVjYXV0aW9ucyA9IFtcIkkgZW5zdXJlZCB0aGF0IEkgd29yZSBteSBsYWIgY29hdCBhbmQgcGVyc29uYWwgcHJvdGVjdGl2ZSBlcXVpcG1lbnQgKFBQRSlcIixcIkkgZW5zdXJlZCB0aGF0IHByb3BlciB0ZWNobmlxdWVzIGZvciBjdXR0aW5nLCBkcmlsbGluZywgYW5kIHNhbmRpbmcgdG8gbWluaW1pemUgdGhlIHJpc2sgb2YgYWNjaWRlbnRzLlwiLFwiSSBlbnN1cmVkIHRoYXQgSSBhdm9pZGVkIGN1dHRpbmcgdG93YXJkcyB5b3Vyc2VsZiBhbmQga2VlcCB5b3VyIGhhbmRzIGFuZCBmaW5nZXJzIGF3YXkgZnJvbSBibGFkZXMgYW5kIG1vdmluZyBwYXJ0cy5cIl07XHJcbiAgICAgICAgbGV0IGNhdXRpb25Cb3ggPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJlY2F1dGlvbnMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBjYXV0aW9uQm94W2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgY2F1dGlvbkJveFtpXS50ZXh0Q29udGVudCA9IHByZWNhdXRpb25zW2ldO1xyXG4gICAgICAgICAgICBjYXV0aW9uTGlzdC5hcHBlbmRDaGlsZChjYXV0aW9uQm94W2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJlY2F1dGlvbi5hcHBlbmRDaGlsZChjYXV0aW9uTGlzdCk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChwcmVjYXV0aW9uKTtcclxuICAgICAgICBjb25zdCBjb25jbHVzaW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IGNvbmNIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBjb25jSGVhZC50ZXh0Q29udGVudCA9IFwiQ09OQ0xVU0lPTjpcIjtcclxuICAgICAgICBjb25jbHVzaW9uLmFwcGVuZENoaWxkKGNvbmNIZWFkKTtcclxuICAgICAgICBjb25zdCBjb25jVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBjb25jVGV4dC50ZXh0Q29udGVudCA9IFwiQXQgdGhlIGVuZCBvZiB0aGlzIGV4cGVyaW1lbnQsIGN1dHRpbmcgb2Ygd29vZCwgcGxhbm5pbmcgb2Ygd29vZCB3YXMgdW5kZXJzdG9vZCBhbmQgYWxzbyBhIHRlZSBoYWx2aW5nIGpvaW50LCBkb3ZldGFpbCBoYWx2aW5nIGpvaW50IHdhcyBkZXZlbG9wZWQgYW5kIHdhcyBhbHNvIHVuZGVyc3Rvb2QuXCI7XHJcbiAgICAgICAgY29uY2x1c2lvbi5hcHBlbmRDaGlsZChjb25jVGV4dCk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjb25jbHVzaW9uKTtcclxuICAgICAgICBjb25zdCByZWZlcmVuY2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IHJlZkhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIHJlZkhlYWQudGV4dENvbnRlbnQgPSBcIlJFRkVSRU5DRVNcIjtcclxuICAgICAgICByZWZlcmVuY2VzLmFwcGVuZENoaWxkKHJlZkhlYWQpO1xyXG4gICAgICAgIGNvbnN0IHJlZkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IFtcIlByb2R1Y3Rpb24gRW5naW5lZXJpbmcgTGFib3JhdG9yeSBNYW51YWwgZm9yIEVMQTIwMSBhbmQgRUxBMjAyIGJ5IERlcGFydG1lbnQgb2YgUHJvZHVjdGlvbiBFbmdpbmVlcmluZywgVW5pdmVyc2l0eSBvZiBCZW5pbi5cIiwgXCJGb3VuZGF0aW9ucyBvZiBXb29kd29ya2luZzogRXNzZW50aWFsIEpvaW5lcnkgVGVjaG5pcXVlcyBhbmQgQnVpbGRpbmcgU3RyYXRlZ2llcyBieSBNaWNoYWVsIFBla292aWNoXCIsIFwiVGhlIENvbXBsZXRlIE1hbnVhbCBvZiBXb29kd29ya2luZyBieSBBbGJlcnQgSmFja3NvbiwgRGF2aWQgRGF5LCBhbmQgU2ltb24gSmVubmluZ3NcIl07XHJcbiAgICAgICAgbGV0IHJlZkJveCA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByZWZlcmVuY2UubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICByZWZCb3hbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICByZWZCb3hbaV0udGV4dENvbnRlbnQgPSByZWZlcmVuY2VbaV07XHJcbiAgICAgICAgICAgIHJlZkxpc3QuYXBwZW5kQ2hpbGQocmVmQm94W2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVmZXJlbmNlcy5hcHBlbmRDaGlsZChyZWZMaXN0KTtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHJlZmVyZW5jZXMpO1xyXG4gICAgICAgIGNvbnN0IGhvdmVyID0gY3JlYXRlSG92ZXIoJyMnKTtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGhvdmVyKTsgXHJcbiAgICAgICAgY29uc3QgZG93bmxvYWQgPSBjcmVhdGVEb3dubG9hZCgnIycpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoZG93bmxvYWQpO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IGRpc3BsYXlFRTIwNiA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1haW4gPSByZXNldCgpO1xyXG4gICAgICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgIGhlYWQudGV4dENvbnRlbnQgID0gJ1NpbmdsZSBQaGFzZSBUcmFuc2Zvcm1lcic7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChoZWFkKTtcclxuXHJcbiAgICAgICAgY29uc3QgYWltID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IGFpbUhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIGFpbUhlYWQudGV4dENvbnRlbnQgPSAnQUlNUyc7XHJcbiAgICAgICAgYWltLmFwcGVuZENoaWxkKGFpbUhlYWQpO1xyXG4gICAgICAgIGNvbnN0IGFpbUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIGNvbnN0IGFpbXMgPSBbJ1RvIHZlcmlmeSB0aGF0IHRoZSB2b2x0YWdlIHJhdGlvIGJldHdlZW4gdGhlIHByaW1hcnkgdm9sdGFnZSBhbmQgc2Vjb25kYXJ5IHZvbHRhZ2Ugb2YgYSB0cmFuc2Zvcm1lciBpcyBlcXVhbCB0byB0aGUgdHVybnMgd2luZGluZyByYXRpbycsICdUbyBzdHVkeSB0aGUgY2hhcmFjdGVyaXN0aWNzIG9mIGEgdHJhbnNmb3JtZXIgb24gTm8tbG9hZCBhbmQgb24gTG9hZCddXHJcbiAgICAgICAgbGV0IGxpc3QyID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGFpbXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBsaXN0MltpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIGxpc3QyW2ldLnRleHRDb250ZW50ID0gYWltc1tpXTtcclxuICAgICAgICAgICAgYWltTGlzdC5hcHBlbmRDaGlsZChsaXN0MltpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFpbS5hcHBlbmRDaGlsZChhaW1MaXN0KTtcclxuXHJcbiAgICAgICAgY29uc3Qgb2JqZWN0aXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IG9iakhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIG9iakhlYWQudGV4dENvbnRlbnQgPSAnT0JKRUNUSVZFUyc7XHJcbiAgICAgICAgb2JqZWN0aXZlLmFwcGVuZENoaWxkKG9iakhlYWQpO1xyXG4gICAgICAgIGNvbnN0IG9iakxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIGNvbnN0IG9iamVjdGl2ZXMgPSBbJ0ZvciB0aGUgVHJhbnNmb3JtZXIgUmF0aW8gdGVzdDogVG8gc2hvdyB0aGF0IHNlY29uZGFyeSB0byBwcmltYXJ5IHZvbHRhZ2UgcmF0aW8gKFZzL1ZwKSBlcXVhbHMgc2Vjb25kYXJ5IHR1cm5zIHRvIHByaW1hcnkgdHVybnMgKE5zL05wKScsICdGb3IgdGhlIFRyYW5zZm9ybWVyIE5vIExvYWQgdGVzdDogVG8gZGVtb25zdHJhdGUgdGhhdCBwb3dlciBsb3NzZXMgKGNhbGxlZCBjb3JlbG9zc2VzKSBvY2N1ciBpbnRlcm5hbGx5IGluIGEgdHJhbnNmb3JtZXIuJywgJ0ZvciB0aGUgVHJhbnNmb3JtZXIgTG9hZCB0ZXN0OiBUbyBkZXRlcm1pbmUgdHJhbnNmb3JtZXIgZWZmaWNpZW5jeSAoaS5lIHJhdGlvIG9mIG91dHB1dCBwb3dlciB0byBpbnB1dCBwb3dlciknXTtcclxuICAgICAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBvYmplY3RpdmVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgbGlzdFtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIGxpc3RbaV0udGV4dENvbnRlbnQgPSBvYmplY3RpdmVzW2ldO1xyXG4gICAgICAgICAgICBvYmpMaXN0LmFwcGVuZENoaWxkKGxpc3RbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYmplY3RpdmUuYXBwZW5kQ2hpbGQob2JqTGlzdCk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChhaW0pO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQob2JqZWN0aXZlKTtcclxuICAgICAgICBjb25zdCBhcHBIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICBhcHBIZWFkLnRleHRDb250ZW50ID0gJ0FwcGFyYXR1cyc7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChhcHBIZWFkKTtcclxuICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnYXBwQm94Jyk7XHJcbiAgICAgICAgY29uc3QgYXBwYXJhdHVzID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdTdGVlbCBTY2FsZVZhcmlhYyAwIC0gMjcwdiwgOEEuMktWQSAnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnV2lyZSBndWFnZScsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdNaWNyb21ldGVyJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWMxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ1Zlcm5pZXIgQ2FsbGlwZXInLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnU3RlZWwgc3F1YXJlJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWMxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ0RpdmlkZXInLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnU2NyaWJlcicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdUcmFtbWVsIFBvaW50JyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWMxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ0hhbmQgc25pcHMnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnUHVuY2hlcycsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdQdW5jaGVzJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWMxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ0NoaXNlbCcsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdQbGllcicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdTb2xkZXJpbmcgSXJvbicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdIYW1tZXInLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnRmlsZXMnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnTWFsbGV0JyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWMxXHJcbiAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgIF07XHJcbiAgICAgICAgbGV0IGFwcEJveCA9IFtdO1xyXG4gICAgICAgIGxldCBhcHBJbWFnZSA9IFtdO1xyXG4gICAgICAgIGxldCBhcHBDYXB0aW9uID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGFwcGFyYXR1cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGFwcEJveFtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBhcHBJbWFnZVtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICBhcHBDYXB0aW9uW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBhcHBJbWFnZVtpXS5zcmMgPSAgYXBwYXJhdHVzW2ldLmltYWdlO1xyXG4gICAgICAgICAgICBhcHBDYXB0aW9uW2ldLnRleHRDb250ZW50ID0gYXBwYXJhdHVzW2ldLmNhcDtcclxuICAgICAgICAgICAgYXBwQm94W2ldLmFwcGVuZENoaWxkKGFwcEltYWdlW2ldKTtcclxuICAgICAgICAgICAgYXBwQm94W2ldLmFwcGVuZENoaWxkKGFwcENhcHRpb25baV0pO1xyXG4gICAgICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGFwcEJveFtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoc2VjdGlvbik7XHJcbiAgICAgICAgY29uc3QgdGhlb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IHRoZW9IZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICB0aGVvSGVhZC50ZXh0Q29udGVudCA9ICdUSEVPUlknO1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZCh0aGVvSGVhZCk7XHJcbiAgICAgICAgY29uc3QgZXhwbGFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGV4cGxhaW4udGV4dENvbnRlbnQgPSAnQSB0cmFuc2Zvcm1lciBpcyBhIHBhc3NpdmUgZGV2aWNlIHRoYXQgbW92ZXMgZWxlY3RyaWNhbCBlbmVyZ3kgZnJvbSBvbmUgY2lyY3VpdCB0byBhbm90aGVyLiBUaGUgZWxlY3Ryb21hZ25ldGljIGluZHVjdGlvbiBjb25jZXB0IHByb3ZpZGVzIHRoZSBmb3VuZGF0aW9uIGZvciBlbmVyZ3kgdHJhbnNmZXIgYnkgYWx0ZXJpbmcgdGhlIHZvbHRhZ2UgYW5kIGN1cnJlbnQgbGV2ZWxzLiBUcmFuc2Zvcm1lcnMgYXJlIGRldmljZXMgdGhhdCB1c2UgZWxlY3Ryb21hZ25ldGljIGluZHVjdGlvbiB0byB0cmFuc21pdCBlbGVjdHJpY2FsIGVuZXJneSBiZXR3ZWVuIHR3byBvciBtb3JlIGNpcmN1aXRzLlRyYW5zZm9ybWVycyBmYWxsIGludG8gdHdvIHByaW1hcnkgY2F0ZWdvcmllcyBhY2NvcmRpbmcgb24gdGhlaXIgdm9sdGFnZSByYXRpbzonO1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZChleHBsYWluKTtcclxuICAgICAgICBjb25zdCBleHBsYWluMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGV4cGxhaW4xLnRleHRDb250ZW50ID0gJyBUcmFuc2Zvcm1lcnMgZmFsbCBpbnRvIHR3byBwcmltYXJ5IGNhdGVnb3JpZXMgYWNjb3JkaW5nIG9uIHRoZWlyIHZvbHRhZ2UgcmF0aW86JztcclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoZXhwbGFpbjEpO1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnU3RlcC11cCB0cmFuc2Zvcm1lcjonLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1RoZSBzZWNvbmRhcnkgd2luZGluZyBvZiBhIHN0ZXAtdXAgdHJhbnNmb3JtZXIgaGFzIG1vcmUgdHVybnMgdGhhbiB0aGUgbWFpbiB3aW5kaW5nLiBBdCB0aGUgc2Vjb25kYXJ5IG91dHB1dCwgdGhpcyBsb3dlcnMgdGhlIGN1cnJlbnQgYW5kIHJhaXNlcyB0aGUgdm9sdGFnZS4gU3RlcC11cCB0cmFuc2Zvcm1lcnMgYXJlIHV0aWxpemVkIGluIHNpdHVhdGlvbnMgbGlrZSBwb3dlciB0cmFuc21pc3Npb24gd2hlcmUgYSBoaWdoIHZvbHRhZ2UgaXMgcmVxdWlyZWQuIFRoaXMgZGV2aWNlIHJhaXNlcyB0aGUgdm9sdGFnZSAoZm9yIGV4YW1wbGUsIGZyb20gMTEwViB0byAyMjBWKSBmcm9tIHRoZSBwcmltYXJ5IHRvIHRoZSBzZWNvbmRhcnkgd2luZGluZycsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdGVwLWRvd24gdHJhbnNmb3JtZXI6JyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdUaGUgc2Vjb25kYXJ5IHdpbmRpbmcgb2YgYSBzdGVwLWRvd24gdHJhbnNmb3JtZXIgaGFzIGZld2VyIHR1cm5zIHRoYW4gdGhlIHByaW1hcnkgd2luZGluZy4gQXQgdGhlIHNlY29uZGFyeSBvdXRwdXQsIHRoaXMgbG93ZXJzIHRoZSB2b2x0YWdlIGFuZCByYWlzZXMgdGhlIGN1cnJlbnQuIFdoZW4gYSBsb3cgdm9sdGFnZSBpcyByZXF1aXJlZCwgYXMgdG8gcG93ZXIgZWxlY3Ryb25pYyBlcXVpcG1lbnQsIHN0ZXAtZG93biB0cmFuc2Zvcm1lcnMgYXJlIGVtcGxveWVkLiBSZWR1Y2VzIHRoZSB2b2x0YWdlIChlLmcuLCBmcm9tIDIyMFYgdG8gMTEwVikgZnJvbSB0aGUgcHJpbWFyeSB0byB0aGUgc2Vjb25kYXJ5IHdpbmRpbmcuJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICBjYXRlZ29yaWVzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKGNyZWF0ZURpdnMoaXRlbSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdBcHBsaWNhdGlvbnMgb2YgdHJhbnNmb3JtZXJzIGluY2x1ZGU6JztcclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG4gICAgICAgIGNvbnN0IHBhcnQgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdQb3dlciBEaXN0cmlidXRpb246JyxcclxuICAgICAgICAgICAgdGV4dDogJ1RyYW5zZm9ybWVycyBhcmUgY3J1Y2lhbCBpbiB0aGUgZGlzdHJpYnV0aW9uIG9mIGVsZWN0cmljYWwgcG93ZXIgYWNyb3NzIGxvbmcgZGlzdGFuY2VzLiBIaWdoLXZvbHRhZ2UgdHJhbnNmb3JtZXJzIHN0ZXAgdXAgdGhlIHZvbHRhZ2UgZm9yIGVmZmljaWVudCB0cmFuc21pc3Npb24gYW5kIHRoZW4gc3RlcCBpdCBkb3duIGZvciBzYWZlIHJlc2lkZW50aWFsIGFuZCBjb21tZXJjaWFsIHVzZS4nLFxyXG4gICAgICAgICAgICBpbWFnZTogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0VsZWN0cm9uaWNzOicsXHJcbiAgICAgICAgICAgIHRleHQ6ICdVc2VkIGluIHBvd2VyIHN1cHBsaWVzIGZvciBlbGVjdHJvbmljIGRldmljZXMsIGF1ZGlvIHN5c3RlbXMsIGFuZCB2YXJpb3VzIG90aGVyIGFwcGxpY2F0aW9ucy4nLFxyXG4gICAgICAgICAgICBpbWFnZTogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0luZHVzdHJpYWwgQXBwbGljYXRpb25zOicsXHJcbiAgICAgICAgICAgIHRleHQ6ICdUcmFuc2Zvcm1lcnMgYXJlIHVzZWQgaW4gbWFudWZhY3R1cmluZyBhbmQgaW5kdXN0cmlhbCBwcm9jZXNzZXMgd2hlcmUgc3BlY2lmaWMgdm9sdGFnZSBsZXZlbHMgYXJlIHJlcXVpcmVkLicsXHJcbiAgICAgICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIHBhcnQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoY3JlYXRlRGl2cyhpdGVtKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQodGhlb3J5KTtcclxuICAgICAgICBjb25zdCBwcmFjdGljYWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IHN0ZXAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICBzdGVwMS50ZXh0Q29udGVudCA9ICdQUkFDVElDQUwgMSA6IEhPVyBUTyBNQUtFIFJFQ1RBTkdVTEFSIFRSQVkuJztcclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKHN0ZXAxKTtcclxuICAgICAgICBjb25zdCBzdGVwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgc3RlcDMudGV4dENvbnRlbnQgPSAnUFJPQ0VEVVJFOic7XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZChzdGVwMyk7XHJcbiAgICAgICAgY29uc3Qgc3RlcExpc3QxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICBjb25zdCBzdGVwczEgPSBbXCJEcmF3IDJELzNEIHNrZXRjaGVzIGFzIHBlciBzY2FsZVwiLCdEcmF3IHRoZSBkZXZlbG9wbWVudCBjb25zaWRlcmluZyBhbGwgdGhlIGxpbmVzIG11c3QgYmUgYSDigJxUcnVlIGxlbmd0aOKAnScsICdDb25zdHJ1Y3QgdGhlIGJhc2Ugb2YgdGhlIHRyYXknLCAnQ29uc3RydWN0IHRoZSB0d28gc2lkZXMgb2YgdGhlIHRyYXknLCAnQ29uc3RydWN0IHRoZSB0d28gZW5kcyBvZiB0aGUgdHJheScsICdTZXQgNW1tIGV4dHJhLCBhbGxvd2FuY2Ugb24gdGhlIHNpZGUgZmFjZSBmb3Igam9pbmluZyB0aGUgY29ybmVycyBieSBzZWFtaW5nJywgJ05vdGNoIHRoZSBwb2ludHMgdG8gcHJldmVudCBidWxnaW5nIG9uIHNlYW1pbmcnLCAnQ3V0IHRoZSBkZXZlbG9wbWVudCBzaGFwZXMgb24gbGluZXMgIGJ5IHVzaW5nIHBhcGVyIGN1dHRpbmcgc2Npc3NvcicsICdQbGFjZSBhbmQgZml4IHRoZSBkZXZlbG9wbWVudCBvbiBnaXZlbiBHLlAgc2hlZXQgYnkgdXNpbmcgc3RpY2tlcicsICdQdW5jaCB0d28gcG9pbnRzIG9uIGVhY2ggYmVuZGluZyBsaW5lJywgJ01hcmsgdGhlIGJvdW5kYXJ5IGxpbmUgYnkgdXNpbmcgbWFya2luZyBwZW4nLCAnUmVtb3ZlIHRoZSBwYXBlciBkZXZlbG9wbWVudCBqb2luIHRoZSB0d28gcHVuY2ggcG9pbnRzIGJ5IGEgc2NyaWJlciBvciBtYXJraW5nIHBlbicsICdSZW1vdmUgdGhlIHBhcGVyIGRldmVsb3BtZW50IGpvaW4gdGhlIHR3byBwb2ludHMgYnkgYSBzY3JpYmVyIG9yIG1hcmtpbmcgcGVuJywgJ1NoZWFyIHRoZSBib3VuZGFyeSBsaW5lcyBieSBoYW5kIHNuaXAnLCAnRmxhdHRlcmluZyB0aGUgc2hlZXQgYnkgdXNpbmcgbWFsbGV0IG9uIGZsYXR0ZXInLCAnQWx3YXlzIGJlbmQgdGhlIHNlYW1pbmcgbGluZSBmaXJzdCBhbmQgcmVtYWluaW5nIGxpbmVzIHRvIGdldCB0aGUgZGVzaXJlZCBzaGFwZSBieSBmb3JtaW5nJywgJ0ZpbmlzaCB0aGUgc3VyZmFjZSBrZWVwaW5nIG9uIHN0YWtlIHRvIHNoYXBlJywgJ1NvbGRlciB0aGUgam9pbnQnLCAnRmluaXNoIHN1cmZhY2UgZmluaXNoaW5nIGFuZCBjb21wbGV0ZSB0aGUgdHJheS4nXTtcclxuICAgICAgICBsZXQgc3RlcEJveDEgPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3RlcHMxLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgc3RlcEJveDFbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICBzdGVwQm94MVtpXS50ZXh0Q29udGVudCA9IHN0ZXBzMVtpXTtcclxuICAgICAgICAgICAgc3RlcExpc3QxLmFwcGVuZENoaWxkKHN0ZXBCb3gxW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZChzdGVwTGlzdDEpO1xyXG4gICAgICAgIGNvbnN0IHRleHQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHRleHQzLnRleHRDb250ZW50ID0gJ1RoZSBsaW5rIHRvIHdhdGNoIGhvdyB0byBtYWtlIHJlY3Rhbmd1bGFyIHRyYXkgaXMgYmVsb3cg8J+Rhyc7XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZCh0ZXh0Myk7XHJcbiAgICAgICAgY29uc3QgdmlkZW8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdmlkZW8zLmlubmVySFRNTCA9ICc8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUtbm9jb29raWUuY29tL2VtYmVkL2ZOQjFzdW5RNjZnP3NpPXJUeEpXMzNIOExIdExWXzJcIiB0aXRsZT1cIllvdVR1YmUgdmlkZW8gcGxheWVyXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlOyB3ZWItc2hhcmVcIiByZWZlcnJlcnBvbGljeT1cInN0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW5cIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+JztcclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKHZpZGVvMyk7XHJcbiAgICAgICAgY29uc3Qgc3RlcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgc3RlcC50ZXh0Q29udGVudCA9ICdQUkFDVElDQUwgMiA6IEhPVyBUTyBNQUtFIERVU1QgUEFOJztcclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKHN0ZXApO1xyXG4gICAgICAgIGNvbnN0IHN0ZXAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBzdGVwMi50ZXh0Q29udGVudCA9ICdQUk9DRURVUkU6JztcclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKHN0ZXAyKTtcclxuICAgICAgICBjb25zdCBzdGVwTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgY29uc3Qgc3RlcHMgPSBbJ0RyYXcgdGhlIDJELzNEIHNrZXRjaGVzIGFzIHBlciBzY2FsZScsICdEcmF3IHRoZSBkZXZlbG9wbWVudCBjb25zaWRlcmluZyBhbGwgbGluZXMgbXVzdCBiZSBhIOKAnFRydWUgbGVuZ3Ro4oCdJywgJ0NvbnN0cnVjdCB0aGUgYmFzZSBvZiB0aGUgdHJheScsICdDb25zdHJ1Y3QgdGhlIHR3byBzaWRlcyBvZiB0aGUgdHJheScsICdDb25zdHJ1Y3QgdGhlIHR3byBlbmRzIG9mIHRoZSB0cmF5JywgJ1NldCA1bW0gZXh0cmEsIGFsbG93YW5jZSBvbiBzaWRlIGZhY2UgZm9yIGpvaW5pbmcgdGhlIGNvcm5lcnMgYnkgc2VhbWluZycsICdOb3RjaCB0aGUgcG9pbnRzIHRvIHByZXZlbnQgYnVsZ2luZyBvbiBzZWFtaW5nJywgJ0N1dCB0aGUgZGV2ZWxvcG1lbnQgc2hhcGUgb24gbGluZXMgdXNpbmcgcGFwZXIgY3V0dGluZyBzY2lzc29yJywgJ1BsYWNlIGFuZCBmaXggdGhlIGRldmVsb3BtZW50IG9uIGdpdmVuIEcuUCBzaGVldCBieSB1c2luZyBzdGlja2VyJywgJ1B1bmNoIHR3byBwb2ludHMgb24gZWFjaCBiZW5kaW5nIGxpbmUnLCAnTWFyayB0aGUgYm91bmRhcnkgbGluZSBieSB1c2luZyBtYXJraW5nIHBlbicsICdSZW1vdmUgdGhlIHBhcGVyIGRldmVsb3BtZW50IGpvaW4gdGhlIHR3byBwdW5jaCBwb2ludHMgYnkgYSBzY3JpYmVyIG9yIG1hcmtpbmcgcGVuJywgJ1NoZWFyIHRoZSBib3VuZGFyeSBsaW5lcyBieSB1c2luZyBoYW5kIHNuaXAnLCAnRmxhdHRlcmluZyB0aGUgc2hlZXQgYnkgdXNpbmcgbWFsbGV0IG9uIGZsYXR0ZXInLCAnQWx3YXlzIGJlbmQgdGhlIHNlYW1pbmcgbGluZSBmaXJzdCBhbmQgcmVtYWluaW5nIGxpbmVzIHRvIGdldCB0aGUgZGVzaXJlZCBzaGFwZSBieSBmb3JtaW5nJywgJ0ZpbmlzaCB0aGUgc3VyZmFjZSBrZWVwaW5nIG9uIHN0YWtlIHRvIHNoYXBlJywgJ1NvbGRlciB0aGUgam9pbnQnLCAnRmluaXNoIHRoZSBzdXJmYWNlIGZpbmlzaGluZyBhbmQgY29tcGxldGUgdGhlIHRyYXkuJ107XHJcbiAgICAgICAgbGV0IHN0ZXBCb3ggPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3RlcHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBzdGVwQm94W2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgc3RlcEJveFtpXS50ZXh0Q29udGVudCA9IHN0ZXBzW2ldO1xyXG4gICAgICAgICAgICBzdGVwTGlzdC5hcHBlbmRDaGlsZChzdGVwQm94W2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZChzdGVwTGlzdCk7XHJcbiAgICAgICAgY29uc3QgdGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgdGV4dDIudGV4dENvbnRlbnQgPSAnVGhlIGxpbmsgdG8gd2F0Y2ggaG93IG1ha2UgZHVzdHBhbiBpcyBiZWxvdyDwn5GHJztcclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKHRleHQyKTtcclxuICAgICAgICBjb25zdCB2aWRlbzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB2aWRlbzIuaW5uZXJIVE1MID0gJzxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS1ub2Nvb2tpZS5jb20vZW1iZWQvb3plT3Zxc2Jpck0/c2k9QlpkdnhyVnJMNGJCTV9BY1wiIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmU7IHdlYi1zaGFyZVwiIHJlZmVycmVycG9saWN5PVwic3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpblwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nO1xyXG4gICAgICAgIHByYWN0aWNhbHMuYXBwZW5kQ2hpbGQodmlkZW8yKTtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHByYWN0aWNhbHMpO1xyXG4gICAgICAgIGNvbnN0IHByZWNhdXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgY2F1dGlvbkhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIGNhdXRpb25IZWFkLnRleHRDb250ZW50ID0gXCJQUkVDQVVUSU9OU1wiO1xyXG4gICAgICAgIHByZWNhdXRpb24uYXBwZW5kQ2hpbGQoY2F1dGlvbkhlYWQpO1xyXG4gICAgICAgIGNvbnN0IGNhdXRpb25MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICBjb25zdCBwcmVjYXV0aW9ucyA9IFtcIkkgZW5zdXJlZCB0aGF0IEkgd29yZSBteSBsYWIgY29hdCBhbmQgcGVyc29uYWwgcHJvdGVjdGl2ZSBlcXVpcG1lbnQgKFBQRSlcIixcIkkgZW5zdXJlZCB0aGF0IHByb3BlciB0ZWNobmlxdWVzIGZvciBjdXR0aW5nLCBkcmlsbGluZywgYW5kIHNhbmRpbmcgdG8gbWluaW1pemUgdGhlIHJpc2sgb2YgYWNjaWRlbnRzLlwiLFwiSSBlbnN1cmVkIHRoYXQgSSBjaGVja2VkIGFsbCB0b29scyBhbmQgbWFjaGluZXJ5IGZvciBkYW1hZ2Ugb3IgbWFsZnVuY3Rpb25zIGJlZm9yZSB1c2luZyB0aGVtIGFuZCBhbHNvIHZlcmlmaWVkIHRoYXQgZXZlcnkgZ3VhcmQgaXMgcHJlc2VudCBhbmQgb3BlcmF0aW5nIGFzIGludGVuZGVkLlwiLCBcIkkgZW5zdXJlZCB0aGF0IEkgd2FzIG1pbmRmdWwgb2Ygd2hlcmUgbXkgaGFuZHMgd2VyZSBhbmQgYXZvaWQgcmVhY2hpbmcgdW5kZXIgb3IgYmVoaW5kIG1hY2hpbmVyeSBiZWNhdXNlIHNoZWV0IG1ldGFsIGNhbiBoYXZlIHZlcnkgc2hhcnAgZWRnZXMgdGhhdCBjYW4gZWFzaWx5IGN1dCBzb21lb25lLlwiXTtcclxuICAgICAgICBsZXQgY2F1dGlvbkJveCA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcmVjYXV0aW9ucy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGNhdXRpb25Cb3hbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICBjYXV0aW9uQm94W2ldLnRleHRDb250ZW50ID0gcHJlY2F1dGlvbnNbaV07XHJcbiAgICAgICAgICAgIGNhdXRpb25MaXN0LmFwcGVuZENoaWxkKGNhdXRpb25Cb3hbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcmVjYXV0aW9uLmFwcGVuZENoaWxkKGNhdXRpb25MaXN0KTtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHByZWNhdXRpb24pO1xyXG4gICAgICAgIGNvbnN0IGNvbmNsdXNpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgY29uY0hlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIGNvbmNIZWFkLnRleHRDb250ZW50ID0gXCJDT05DTFVTSU9OOlwiO1xyXG4gICAgICAgIGNvbmNsdXNpb24uYXBwZW5kQ2hpbGQoY29uY0hlYWQpO1xyXG4gICAgICAgIGNvbnN0IGNvbmNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbmNUZXh0LnRleHRDb250ZW50ID0gXCJBdCB0aGUgZW5kIG9mIHRoaXMgZXhwZXJpbWVudCwgd2Ugd2VyZSBhYmxlIHRvIG1ha2UgYSByZWN0YW5ndWxhciB0cmF5LCBkdXN0cGFuIGJ5IHVzaW5nIGRpZmZlcmVudCBzaGVldCBtZXRhbCBwcm9jZXNzZXMsIHRlY2huaXF1ZXMgYW5kIGFsc28gdXNlZCB0aGUgZGlmZmVyZW50IG1hdGVyaWFscyBpbnZvbHZlZCBpbiBzaGVldCBtZXRhbCBwcmFjdGljZS5cIjtcclxuICAgICAgICBjb25jbHVzaW9uLmFwcGVuZENoaWxkKGNvbmNUZXh0KTtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGNvbmNsdXNpb24pO1xyXG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgcmVmSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgcmVmSGVhZC50ZXh0Q29udGVudCA9IFwiUkVGRVJFTkNFU1wiO1xyXG4gICAgICAgIHJlZmVyZW5jZXMuYXBwZW5kQ2hpbGQocmVmSGVhZCk7XHJcbiAgICAgICAgY29uc3QgcmVmTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlID0gW1wiUHJvZHVjdGlvbiBFbmdpbmVlcmluZyBMYWJvcmF0b3J5IE1hbnVhbCBmb3IgRUxBMjAxIGFuZCBFTEEyMDIgYnkgRGVwYXJ0bWVudCBvZiBQcm9kdWN0aW9uIEVuZ2luZWVyaW5nLCBVbml2ZXJzaXR5IG9mIEJlbmluLlwiLCBcIlNoZWV0IE1ldGFsIEZhYnJpY2F0aW9uIEJhc2ljcyBieSBUaW0gUmVtdXNcIiwgXCJTaGVldCBNZXRhbCBGb3JtaW5nIFByb2Nlc3NlcyBhbmQgQXBwbGljYXRpb25zIGJ5IFRheWxhbiBBbHRhbiwgRXJtYW4gVGVra2F5YSwgYW5kIEfDvG50ZXIgSGlydFwiXTtcclxuICAgICAgICBsZXQgcmVmQm94ID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHJlZmVyZW5jZS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHJlZkJveFtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIHJlZkJveFtpXS50ZXh0Q29udGVudCA9IHJlZmVyZW5jZVtpXTtcclxuICAgICAgICAgICAgcmVmTGlzdC5hcHBlbmRDaGlsZChyZWZCb3hbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZWZlcmVuY2VzLmFwcGVuZENoaWxkKHJlZkxpc3QpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQocmVmZXJlbmNlcyk7XHJcbiAgICAgICAgY29uc3QgaG92ZXIgPSBjcmVhdGVIb3ZlcignIycpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoaG92ZXIpO1xyXG4gICAgICAgIGNvbnN0IGRvd25sb2FkID0gY3JlYXRlRG93bmxvYWQoJyMnKTtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGRvd25sb2FkKTtcclxufTtcclxuXHJcblxyXG5jb25zdCBkaXNwbGF5QkYyMDEgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtYWluID0gcmVzZXQoKTtcclxuICAgICAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICBoZWFkLnRleHRDb250ZW50ICA9ICdJbnRyb2R1Y3Rpb24gdG8gZml0dGluZyBzaG9we0JGMjAxfSc7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChoZWFkKTtcclxuICAgICAgICBjb25zdCBvYmplY3RpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3Qgb2JqSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgb2JqSGVhZC50ZXh0Q29udGVudCA9ICdPQkpFQ1RJVkVTJztcclxuICAgICAgICBvYmplY3RpdmUuYXBwZW5kQ2hpbGQob2JqSGVhZCk7XHJcbiAgICAgICAgY29uc3Qgb2JqTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgY29uc3Qgb2JqZWN0aXZlcyA9IFsnVG8ga25vdyB0aGUgdG9vbHMgdXNlZCBpbiB0aGUgZml0dGluZyBzaG9wJywgJ1RvIGtub3cgaG93IHRvIG1hcmsgb3V0JywgJ1RvIGtub3cgdGhlIG1ldGhvZHMgb2YgZmlsaW5nJywnVG8gcHJvZHVjZSBhIHNxdWFyZSBmaXQnLF07XHJcbiAgICAgICAgbGV0IGxpc3QgPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgb2JqZWN0aXZlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGxpc3RbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICBsaXN0W2ldLnRleHRDb250ZW50ID0gb2JqZWN0aXZlc1tpXTtcclxuICAgICAgICAgICAgb2JqTGlzdC5hcHBlbmRDaGlsZChsaXN0W2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JqZWN0aXZlLmFwcGVuZENoaWxkKG9iakxpc3QpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQob2JqZWN0aXZlKTtcclxuICAgICAgICBjb25zdCBhcHBIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICBhcHBIZWFkLnRleHRDb250ZW50ID0gJ0FwcGFyYXR1cyc7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChhcHBIZWFkKTtcclxuICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnYXBwQm94Jyk7XHJcbiAgICAgICAgY29uc3QgYXBwYXJhdHVzID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdXb3JrIEJlbmNoJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWM0MFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdTdGVlbCBSdWxlJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWM0M1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdCZW5jaCBWaWNlJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWMzOVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdTY3JpYmVyJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWM0OVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdUcnkgc3F1YXJlJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWMzOFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdWZXJuaWVyIENhbGxpcGVyJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWM0NlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdIYWNrc2F3JyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWM2OFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdCYWxsIHBlZW4gSGFtbWVyJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWM2OVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdGaWxlcyhmbGF0IGZpbGVzIGUudC5jKScsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljNzBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIGxldCBhcHBCb3ggPSBbXTtcclxuICAgICAgICBsZXQgYXBwSW1hZ2UgPSBbXTtcclxuICAgICAgICBsZXQgYXBwQ2FwdGlvbiA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcHBhcmF0dXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBhcHBCb3hbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgYXBwSW1hZ2VbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgYXBwQ2FwdGlvbltpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgYXBwSW1hZ2VbaV0uc3JjID0gIGFwcGFyYXR1c1tpXS5pbWFnZTtcclxuICAgICAgICAgICAgYXBwQ2FwdGlvbltpXS50ZXh0Q29udGVudCA9IGFwcGFyYXR1c1tpXS5jYXA7XHJcbiAgICAgICAgICAgIGFwcEJveFtpXS5hcHBlbmRDaGlsZChhcHBJbWFnZVtpXSk7XHJcbiAgICAgICAgICAgIGFwcEJveFtpXS5hcHBlbmRDaGlsZChhcHBDYXB0aW9uW2ldKTtcclxuICAgICAgICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChhcHBCb3hbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHNlY3Rpb24pO1xyXG4gICAgICAgIGNvbnN0IHRoZW9yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCB0aGVvSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgdGhlb0hlYWQudGV4dENvbnRlbnQgPSAnVEhFT1JZJztcclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQodGhlb0hlYWQpO1xyXG4gICAgICAgIGNvbnN0IGV4cGxhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBleHBsYWluLnRleHRDb250ZW50ID0gJ0JlbmNoIGZpdHRpbmcgaXMgdGhlIHByb2Nlc3Mgb2Ygc2hhcGluZyBhbmQgYXNzZW1ibGluZyBtZXRhbCBjb21wb25lbnRzIHVzaW5nIGhhbmQgdG9vbHMgYW5kIG1hY2hpbmVzLlRoZSBnb2FsIG9mIGJlbmNoIGZpdHRpbmcgaXMgdG8gY3JlYXRlIHBhcnRzIHRoYXQgZml0IHRvZ2V0aGVyIHByZWNpc2VseSB3aXRob3V0IGFueSBnYXBzIG9yIGJpbmRpbmcuIFRoaXMgaXMgYWNoaWV2ZWQgYnkgY2FyZWZ1bGx5IG1hcmtpbmcgb3V0LCBjdXR0aW5nLCBmaWxpbmcsIGFuZCBhc3NlbWJsaW5nIHRoZSBjb21wb25lbnRzLkhlcmUgYXJlIHNvbWUgb2YgdGhlIGNvbW1vbiB0YXNrcyBpbnZvbHZlZCBpbiBiZW5jaCBmaXR0aW5nOic7XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKGV4cGxhaW4pO1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTWFya2luZyBvdXQnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1RoaXMgaW52b2x2ZXMgdXNpbmcgc2NyaWJlcnMsIHB1bmNoZXMsIGFuZCBvdGhlciB0b29scyB0byB0cmFuc2ZlciBkaW1lbnNpb25zIGZyb20gYSBkcmF3aW5nIG9yIHRlbXBsYXRlIHRvIHRoZSBtZXRhbCB3b3JrcGllY2UuJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0N1dHRpbmcnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ0hhY2tzYXdzLCBiYW5kc2F3cywgYW5kIHNoZWFycyBhcmUgdXNlZCB0byBjdXQgdGhlIG1ldGFsIHRvIHRoZSBkZXNpcmVkIHNoYXBlLicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdGaWxpbmcnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ0ZpbGVzIGFyZSB1c2VkIHRvIHNtb290aCBhbmQgZGVidXJyIHRoZSBlZGdlcyBvZiB0aGUgbWV0YWwsIGFuZCB0byBhY2hpZXZlIHRoZSByZXF1aXJlZCB0b2xlcmFuY2UuVGhlcmUgYXJlIHR3byBjb21tb24gbWV0aG9kcyBvZiBmaWxpbmcgd2hpY2ggaW5jbHVkZXM6JyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJyAgICAtICAgQ3Jvc3MgZmlsaW5nJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdFZmZlY3RpdmUgcmVtb3ZhbCBvZiBtYXhpbXVtIGFtb3VudCBvZiBtZXRhbCBpbiB0aGUgc2hvcnRlc3QgcG9zc2libGUgdGltZS4gVGhlIGZpbGUgbXVzdCByZW1haW4gaG9yaXpvbnRhbCB0aHJvdWdob3V0IHRoZSBzdHJva2UuJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJyAgICAtICAgIERyYXcgZmlsaW5nJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdUaGlzIG1ldGhvZCBpcyB1c2VkIHRvIHJlbW92ZSBmaWxlIG1hcmtzIGFuZCBmb3IgZmluaXNoaW5nIG9wZXJhdGlvbnMuIFRoZSBmaWxlIGlzIGdyaXBwZWQgYXMgY2xvc2UgdG8gdGhlIHdvcmsgYXMgcG9zc2libGUnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjYXRlZ29yaWVzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoY3JlYXRlRGl2cyhpdGVtKSk7XHJcbiAgICAgICAgfSk7IFxyXG4gICAgICAgIGNvbnN0IHRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHRleHQyLnRleHRDb250ZW50ID0gJ1RoZSBsaW5rIHRvIHdhdGNoIGhvdyB0byBwZXJmb3JtIHRoZXNlIG1ldGhvZHMgb2YgZmlsaW5nIGlzIGJlbG93IPCfkYcnO1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZCh0ZXh0Mik7XHJcbiAgICAgICAgY29uc3QgdmlkZW8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdmlkZW8yLmlubmVySFRNTCA9ICc8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUtbm9jb29raWUuY29tL2VtYmVkL0lWSGg0QUNJM2FrP3NpPV80ZnJ1UFE0X3N6NEhGZFZcIiB0aXRsZT1cIllvdVR1YmUgdmlkZW8gcGxheWVyXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlOyB3ZWItc2hhcmVcIiByZWZlcnJlcnBvbGljeT1cInN0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW5cIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+JztcclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQodmlkZW8yKTtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeSA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdEcmlsbGluZycsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnSG9sZXMgYXJlIGRyaWxsZWQgaW4gdGhlIG1ldGFsIGZvciBwaW5zLCBzY3Jld3MsIGFuZCBvdGhlciBmYXN0ZW5lcnMuJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1RhcHBpbmcnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1RocmVhZHMgYXJlIGN1dCBpbnRvIGhvbGVzIHNvIHRoYXQgc2NyZXdzIGFuZCBvdGhlciBmYXN0ZW5lcnMgY2FuIGJlIGluc2VydGVkLicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdBc3NlbWJseScsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnVGhlIGNvbXBvbmVudHMgYXJlIGZpdHRlZCB0b2dldGhlciB1c2luZyBjbGFtcHMsIGFuZCB0aGVuIHRoZXkgYXJlIHBlcm1hbmVudGx5IGpvaW5lZCB1c2luZyB0ZWNobmlxdWVzIHN1Y2ggYXMgd2VsZGluZywgYnJhemluZywgb3Igc29sZGVyaW5nLicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIGNhdGVnb3J5LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKGNyZWF0ZURpdnMoaXRlbSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGhlYWQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICBoZWFkMS50ZXh0Q29udGVudCA9ICdBUFBMSUNBVElPTlMgT0YgQkVOQ0ggRklUVElORyc7XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKGhlYWQxKTtcclxuICAgICAgICBjb25zdCBjYXRhbG9nID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ01hY2hpbmluZycsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnSW4gbWFjaGluZSBzaG9wcywgYmVuY2ggZml0dGluZyBpcyB1c2VkIHRvIHByZXBhcmUgcGFydHMgZm9yIGZpbmFsIGFzc2VtYmx5LiBUaGlzIG1heSBpbnZvbHZlIGZpbGluZyBjb21wb25lbnRzIGZvciBhIHByZWNpc2UgZml0LCBkcmlsbGluZyBhbmQgdGFwcGluZyBob2xlcywgb3IgY3JlYXRpbmcgcmVmZXJlbmNlIHN1cmZhY2VzIGZvciBvdGhlciBtYWNoaW5pbmcgcHJvY2Vzc2VzICcsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdNZXRhbHdvcmsnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ01ldGFsd29ya2VycyBsaWtlIGJsYWNrc21pdGhzIGFuZCB3ZWxkZXJzIHVzZSBiZW5jaCBmaXR0aW5nIHRlY2huaXF1ZXMgdG8gZW5zdXJlIHBhcnRzIGZpdCB0b2dldGhlciBjb3JyZWN0bHkgYmVmb3JlIHdlbGRpbmcgb3Igcml2ZXRpbmcgdGhlbSBwZXJtYW5lbnRseScsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdBdXRvIG1lY2hhbmljcycsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnTWVjaGFuaWNzIHJlbHkgb24gYmVuY2ggZml0dGluZyB0byByZXBhaXIgYW5kIHJlYnVpbGQgZW5naW5lcywgZ2VhcmJveGVzLCBhbmQgb3RoZXIgdmVoaWNsZSBjb21wb25lbnRzLiBUaGV5IG1heSB1c2UgZml0dGluZyB0byBlbnN1cmUgYmVhcmluZ3Mgb3BlcmF0ZSBzbW9vdGhseSBvciB0aGF0IG1hY2hpbmVkIHBhcnRzIGhhdmUgdGhlIGNvcnJlY3QgY2xlYXJhbmNlcy4nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVG9vbCBhbmQgZGllIG1ha2luZycsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnQ3JhZnRzcGVvcGxlIHdobyBkZXNpZ24gYW5kIGJ1aWxkIHRvb2xzIGFuZCBkaWVzIHVzZSBiZW5jaCBmaXR0aW5nIGV4dGVuc2l2ZWx5LiBUaGV5IGZpbGUgYW5kIG1hY2hpbmUgcGFydHMgdG8gYWNoaWV2ZSB2ZXJ5IHByZWNpc2UgdG9sZXJhbmNlcyBmb3IgdG9vbHMgdXNlZCBpbiBtYW51ZmFjdHVyaW5nLicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIGNhdGFsb2cuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZChjcmVhdGVEaXZzKGl0ZW0pKTtcclxuICAgICAgICB9KTsgXHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZCh0aGVvcnkpO1xyXG4gICAgICAgIGNvbnN0IHByYWN0aWNhbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3Qgc3RlcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIHN0ZXAxLnRleHRDb250ZW50ID0gJ1BSQUNUSUNBTCAxIDogSE9XIFRPIE1BS0UgQSBTUVVBUkUgRklUIEZST00gR0lWRU4gTUlMRCBTVEVFTCBQSUVDRVMnO1xyXG4gICAgICAgIHByYWN0aWNhbHMuYXBwZW5kQ2hpbGQoc3RlcDEpO1xyXG4gICAgICAgIGNvbnN0IHN0ZXAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBzdGVwMy50ZXh0Q29udGVudCA9ICdQUk9DRURVUkU6JztcclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKHN0ZXAzKTtcclxuICAgICAgICBjb25zdCBzdGVwTGlzdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIGNvbnN0IHN0ZXBzMSA9IFsnVGhlIGdpdmVuIG1pbGQgc3RlZWwgZmxhdCBwaWVjZSBpcyBjaGVja2VkIGZvciBnaXZlbiBkaW1lbnNpb25zJywgJ09uZSBlZGdlIG9mIGdpdmVuIGlzIGZpbGxlZCB0byBzdHJhaWdodG5lc3Mgd2l0aCB0b3VnaCBhbmQgc21vb3RoIGZpbGVzIGFuZCBjaGVja2VkIHdpdGggYWRqYWNlbnQnLCAnQW4gYWRqYWNlbnQgaXMgYWxzbyBmaWxsZWQgc3VjaCB0aGF0IGlzIHNxdWFyZSB0byB0aGUgZmlyc3QgZWRnZSBhbmQgY2hlY2tlZCB3aXRoIHRyeSBzcXVhcmUnLCAnV2V0IGNoYWxrIGlzIGFwcGxpZWQgb24gb25lIHNpZGUgb2YgdGhlIGZsYXQgYW5kIGRyaWVkIGZvciBtYXJraW5nJywgJ0xpbmVzIGFyZSBtYXJrZWQgYWNjb3JkaW5nIHRvIGdpdmVuIGZpZ3VyZSwgdXNpbmcgb2RkIGxlZyBjYWxsaXBlciBhbmQgc3RlZWwgcnVsZScsICdVc2luZyBkb3QgcHVuY2ggYXJlIG1hZGUgYWxvbmcgdGhlIG1hcmtlZCBsaW5lcycsICdUaGUgZXhjZXNzIG1hdGVyaWFscyByZW1vdmVkIGZyb20gdGhlIHJlbWFpbmluZyB0d28gZWRnZXMgd2l0aCB0aGUgdHJ5IHNxdWFyZSBsZXZlbCB1cCB0byBoYWxmIG9mIHRoZSBtYXJrZWQgZG90cyAnLCAnRmluYWxseSBidXRzIGFyZSByZW1vdmVkIGJ5IHRoZSBmaWxpbmcgb24gdGhlIHN1cmZhY2Ugb2YgZml0dGVkIGpvYiddO1xyXG4gICAgICAgIGxldCBzdGVwQm94MSA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzdGVwczEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBzdGVwQm94MVtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIHN0ZXBCb3gxW2ldLnRleHRDb250ZW50ID0gc3RlcHMxW2ldO1xyXG4gICAgICAgICAgICBzdGVwTGlzdDEuYXBwZW5kQ2hpbGQoc3RlcEJveDFbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKHN0ZXBMaXN0MSk7XHJcbiAgICAgICAgY29uc3QgdGV4dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgdGV4dDMudGV4dENvbnRlbnQgPSAnVGhlIGxpbmsgdG8gd2F0Y2ggaG93IHRvIHBlcmZvcm0gdGhlIHNxdWFyZSBmaXQgcHJhY3RpY2FsIGlzIGJlbG93IPCfkYcnO1xyXG4gICAgICAgIHByYWN0aWNhbHMuYXBwZW5kQ2hpbGQodGV4dDMpO1xyXG4gICAgICAgIGNvbnN0IHZpZGVvMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHZpZGVvMy5pbm5lckhUTUwgPSAnPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLW5vY29va2llLmNvbS9lbWJlZC9OSExwUmdMR2VFbz9zaT1weldOdHp2a05pZTU2M25WXCIgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZTsgd2ViLXNoYXJlXCIgcmVmZXJyZXJwb2xpY3k9XCJzdHJpY3Qtb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPic7XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZCh2aWRlbzMpO1xyXG4gICAgICAgIGNvbnN0IHN0ZXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIHN0ZXAudGV4dENvbnRlbnQgPSAnUFJBQ1RJQ0FMIDIgOiBIT1cgVE8gTUFLRSBET1ZFVEFJTCBKT0lOVCc7XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZChzdGVwKTtcclxuICAgICAgICBjb25zdCBzdGVwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgc3RlcDIudGV4dENvbnRlbnQgPSAnUFJPQ0VEVVJFOic7XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZChzdGVwMik7XHJcbiAgICAgICAgY29uc3Qgc3RlcExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIGNvbnN0IHN0ZXBzID0gWydQbGFjZSB0aGUgd29yayBwaWVjZXMgb24gdGhlIHRhYmxlIGFuZCB1c2luZyBzY3JpYmVyIGRyYXcgc3RyYWlnaHQgbGluZXMgcGFyYWxsZWwgb24gaXQgNTVtbSBhcGFydCcsICdGaXggdGhlIHdvcmtwaWVjZXMgZmlybWx5IGluIHRoZSBqYXdzIG9mIHRoZSB2aWNlJywgJ0N1dCBhbG9uZyB0aGUgbWFya2VkIGxpbmUgdXNpbmcgYSBoYWNrc2F3JywgJ1RoZSBjdXQgb3V0IHdvcmtwaWVjZXMgd2FzIG5vdyBhZ2FpbiBwbGFjZWQgZmlybWx5IGJldHdlZW4gdGhlIGphd3Mgb2YgdGhlIHZpY2UgaW4gYSBzdWNoIGEgd2F5IHRoYXQgYSBzbWFsbCBwb3J0aW9uIG9mIG9uZSBvZiBpdHMgZWRnZXMgaXMgYWJvdmUgdGhlIGxldmVsIG9mIHRoZSBqYXcnLCAnTm93IGZpbGluZyBpcyBkb25lIGJ5IHVzaW5nIGEgaGFuZCBmaWxlJywgJ1VzaW5nIHRyeSBzcXVhcmUsIGl0IHNob3VsZCBiZSBlbnN1cmVkIHRoYXQgYWxsIHRoZSBlZGdlcyBvZiB0aGUgd29ya3BpZWNlcyBhcmUgYXQgdGhlIHJpZ2h0IGFuZ2xlcyB0byBhZGphY2VudCBlZGdlcycsICdQbGFjZWQgdGhlIHdvcmsgb24gb25lIG9mIHRoZSBmYWNlcyBvbiB0aGUgc3VyZmFjZSBwbGF0ZSBhbmQgbW92ZWQgaXQgYWxvbmcgaXTigJlzIHN1cmZhY2UgdG8gY2hlY2sgdGhlIGFyZWEgb24gdGhlIHdvcmsgd2hlcmUgc3RyYWluIGhhcyBhY2N1bXVsYXRlZC4gRmlsZSB0aGVtIHByb3Blcmx5ICddO1xyXG4gICAgICAgIGxldCBzdGVwQm94ID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHN0ZXBzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgc3RlcEJveFtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIHN0ZXBCb3hbaV0udGV4dENvbnRlbnQgPSBzdGVwc1tpXTtcclxuICAgICAgICAgICAgc3RlcExpc3QuYXBwZW5kQ2hpbGQoc3RlcEJveFtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByYWN0aWNhbHMuYXBwZW5kQ2hpbGQoc3RlcExpc3QpO1xyXG4gICAgICAgIGNvbnN0IHRleHQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHRleHQ0LnRleHRDb250ZW50ID0gJ1RoZSBsaW5rIHRvIHdhdGNoIGhvdyB0byBwZXJmb3JtIHRoZSBEb3ZldGFpbCBKb2ludCBwcmFjdGljYWwgaXMgYmVsb3cg8J+Rhyc7XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZCh0ZXh0NCk7XHJcbiAgICAgICAgY29uc3QgdmlkZW80ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdmlkZW80LmlubmVySFRNTCA9ICc8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUtbm9jb29raWUuY29tL2VtYmVkL1pCX2duN2NaUmZvP3NpPXhyaEgyLTBJcTNtT3JzcG9cIiB0aXRsZT1cIllvdVR1YmUgdmlkZW8gcGxheWVyXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlOyB3ZWItc2hhcmVcIiByZWZlcnJlcnBvbGljeT1cInN0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW5cIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+JztcclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKHZpZGVvNCk7XHJcbiAgICAgICAgY29uc3Qgc3RlcDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIHN0ZXA1LnRleHRDb250ZW50ID0gJ1BSQUNUSUNBTCAzIDogSE9XIFRPIE1BS0UgQSBWLUZJVFRJTkcnO1xyXG4gICAgICAgIHByYWN0aWNhbHMuYXBwZW5kQ2hpbGQoc3RlcDUpO1xyXG4gICAgICAgIGNvbnN0IHN0ZXA2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBzdGVwNi50ZXh0Q29udGVudCA9ICdQUk9DRURVUkU6JztcclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKHN0ZXA2KTtcclxuICAgICAgICBjb25zdCBzdGVwTGlzdDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIGNvbnN0IHN0ZXBzNCA9IFsnVGhlIGdpdmVuIG1pbGQgc3RlZWwgZmxhdCBwaWVjZSBpcyBjaGVja2VkIGZvciBnaXZlbiBkaW1lbnNpb25zJywgJ09uZSBlZGdlIG9mIHRoZSBnaXZlbiBpcyBmaWxlZCB3aXRoIHJvdWdoIGFuZCBzbW9vdGggZmlsZXMgYW5kIGNoZWNrZWQgd2l0aCB0cnkgc3F1YXJlIGZvciBzdHJhaWdodG5lc3MnLCAnQW4gYWRqYWNlbnQgZWRnZSBpcyBhbHNvIGZpbGxlZCBzdWNoIHRoYXQgaXQgaXMgc3F1YXJlIHRvIGZpcnN0IGVkZ2UgYW5kIGNoZWNrZWQgd2l0aCB0cnkgc3F1YXJlJywgJ1dldCBjaGFsayBpcyBhcHBsaWVkIG9uIG9uZSBzaWRlIG9mIHRoZSBmbGF0IGFuZCBkcmllZCBmb3IgbWFya2luZycsICdMaW5lcyBhcmUgbWFya2VkIGFjY29yZGluZyB0byBnaXZlbiBmaWd1cmUsIHVzaW5nIG9kZCBsZWcgY2FsaXBlcnMgYW5kIHN0ZWVsIHJ1bGUgJywgJ1VzaW5nIGRvdCBwdW5jaCwgcHVuY2hlcyBhcmUgbWFkZSBhbG9uZyB0aGUgbWFya2VkIGxpbmVzJywgJ1RoZSBleGNlc3MgbWF0ZXJpYWxzIHJlbW92ZWQgZnJvbSB0aGUgcmVtYWluaW5nIHR3byBlZGdlcyB3aXRoIHRyeSBzcXVhcmUgbGV2ZWwgdXAgdG8gaGFsZiBvZiB0aGUgbWFya2VkIGRvdHMnLCAnRmluYWxseSBidXRzIGFyZSByZW1vdmVkIGJ5IHRoZSBmaWxpbmcgb24gdGhlIHN1cmZhY2Ugb2YgdGhlICBmaXR0ZWQgam9iJ107XHJcbiAgICAgICAgbGV0IHN0ZXBCb3gyID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHN0ZXBzNC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHN0ZXBCb3gyW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgc3RlcEJveDJbaV0udGV4dENvbnRlbnQgPSBzdGVwczRbaV07XHJcbiAgICAgICAgICAgIHN0ZXBMaXN0My5hcHBlbmRDaGlsZChzdGVwQm94MltpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByYWN0aWNhbHMuYXBwZW5kQ2hpbGQoc3RlcExpc3QpO1xyXG4gICAgICAgIGNvbnN0IHRleHQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHRleHQ1LnRleHRDb250ZW50ID0gJ1RoZSBsaW5rIHRvIHdhdGNoIGhvdyB0byBwZXJmb3JtIHRoZSBWLWZpdHRpbmcgcHJhY3RpY2FsIGlzIGJlbG93IPCfkYcnO1xyXG4gICAgICAgIHByYWN0aWNhbHMuYXBwZW5kQ2hpbGQodGV4dDUpO1xyXG4gICAgICAgIGNvbnN0IHZpZGVvNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHZpZGVvNS5pbm5lckhUTUwgPSAnPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLW5vY29va2llLmNvbS9lbWJlZC9pREpfc012WHNZcz9zaT03RW1LTVoyN0lQWGpyRUNMXCIgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZTsgd2ViLXNoYXJlXCIgcmVmZXJyZXJwb2xpY3k9XCJzdHJpY3Qtb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPic7XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZCh2aWRlbzUpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQocHJhY3RpY2FscylcclxuICAgICAgICBjb25zdCBwcmVjYXV0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IGNhdXRpb25IZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBjYXV0aW9uSGVhZC50ZXh0Q29udGVudCA9IFwiUFJFQ0FVVElPTlNcIjtcclxuICAgICAgICBwcmVjYXV0aW9uLmFwcGVuZENoaWxkKGNhdXRpb25IZWFkKTtcclxuICAgICAgICBjb25zdCBjYXV0aW9uTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgY29uc3QgcHJlY2F1dGlvbnMgPSBbXCJJIGVuc3VyZWQgdGhhdCBJIHdvcmUgbXkgbGFiIGNvYXQgYW5kIHBlcnNvbmFsIHByb3RlY3RpdmUgZXF1aXBtZW50IChQUEUpXCIsXCJJIGVuc3VyZWQgdGhhdCBJIGF2b2lkZWQgZXJyb3IgZHVlIHRvIHBhcmFsbGF4IHdoZXJlIHRha2luZyBtZWFzdXJlbWVudHNcIixcIkkgRW5zdXJlZCB0aGF0IHRoZSB3b3JrcGllY2UgaXMgc2VjdXJlbHkgY2xhbXBlZCBpbiBhIHZpY2Ugb3IgdXNpbmcgYXBwcm9wcmlhdGUgaG9sZGluZyB0b29scyBiZWZvcmUgd29ya2luZyBvbiBpdC5cIiwgXTtcclxuICAgICAgICBsZXQgY2F1dGlvbkJveCA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcmVjYXV0aW9ucy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGNhdXRpb25Cb3hbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICBjYXV0aW9uQm94W2ldLnRleHRDb250ZW50ID0gcHJlY2F1dGlvbnNbaV07XHJcbiAgICAgICAgICAgIGNhdXRpb25MaXN0LmFwcGVuZENoaWxkKGNhdXRpb25Cb3hbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcmVjYXV0aW9uLmFwcGVuZENoaWxkKGNhdXRpb25MaXN0KTtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHByZWNhdXRpb24pO1xyXG4gICAgICAgIGNvbnN0IGNvbmNsdXNpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgY29uY0hlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIGNvbmNIZWFkLnRleHRDb250ZW50ID0gXCJDT05DTFVTSU9OOlwiO1xyXG4gICAgICAgIGNvbmNsdXNpb24uYXBwZW5kQ2hpbGQoY29uY0hlYWQpO1xyXG4gICAgICAgIGNvbnN0IGNvbmNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbmNUZXh0LnRleHRDb250ZW50ID0gXCJBdCB0aGUgZW5kIG9mIHRoaXMgZXhwZXJpbWVudCwgYSBWLSBmaXQsIGEgc3F1YXJlIGZpdCBhbmQgZG92ZXRhaWwgam9pbnQgd2FzIGNyZWF0ZWQgZnJvbSBtaWxkIHN0ZWVsIHBpZWNlcyBhbmQgdGhlIG1ldGhvZHMgb2YgZmlsaW5nIGFuZCB0aGUgYXBwbGljYXRpb25zIG9mIGJlbmNoIGZpdHRpbmcuXCI7XHJcbiAgICAgICAgY29uY2x1c2lvbi5hcHBlbmRDaGlsZChjb25jVGV4dCk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjb25jbHVzaW9uKTtcclxuICAgICAgICBjb25zdCByZWZlcmVuY2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IHJlZkhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIHJlZkhlYWQudGV4dENvbnRlbnQgPSBcIlJFRkVSRU5DRVNcIjtcclxuICAgICAgICByZWZlcmVuY2VzLmFwcGVuZENoaWxkKHJlZkhlYWQpO1xyXG4gICAgICAgIGNvbnN0IHJlZkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IFtcIlByb2R1Y3Rpb24gRW5naW5lZXJpbmcgTGFib3JhdG9yeSBNYW51YWwgZm9yIEVMQTIwMSBhbmQgRUxBMjAyIGJ5IERlcGFydG1lbnQgb2YgUHJvZHVjdGlvbiBFbmdpbmVlcmluZywgVW5pdmVyc2l0eSBvZiBCZW5pbi5cIiwgXCJCZW5jaHdvcmsgYW5kIEZpdHRpbmcgYnkgRHIuIEhhbWVzaCBCYWJ1IE5hbnZhbGFcIiwgXCJCZW5jaCBXb3JrIEFuZCBGaXR0aW5nIGJ5IFcgSiBQZWNrXCJdO1xyXG4gICAgICAgIGxldCByZWZCb3ggPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcmVmZXJlbmNlLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgcmVmQm94W2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgcmVmQm94W2ldLnRleHRDb250ZW50ID0gcmVmZXJlbmNlW2ldO1xyXG4gICAgICAgICAgICByZWZMaXN0LmFwcGVuZENoaWxkKHJlZkJveFtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlZmVyZW5jZXMuYXBwZW5kQ2hpbGQocmVmTGlzdCk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChyZWZlcmVuY2VzKTtcclxuICAgICAgICBjb25zdCBob3ZlciA9IGNyZWF0ZUhvdmVyKCcjJyk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChob3Zlcik7XHJcbiAgICAgICAgY29uc3QgZG93bmxvYWQgPSBjcmVhdGVEb3dubG9hZCgnIycpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoZG93bmxvYWQpO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IGRpc3BsYXlIUzIwMSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBtYWluID0gcmVzZXQoKTtcclxuICAgICAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICBoZWFkLnRleHRDb250ZW50ICA9ICdJbnRyb2R1Y3Rpb24gdG8gdGhlIHdlbGRpbmcgc2hvcCBwcmFjdGljZXtIUzIwMX0nO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoaGVhZCk7XHJcbiAgICAgICAgY29uc3Qgb2JqZWN0aXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IG9iakhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIG9iakhlYWQudGV4dENvbnRlbnQgPSAnT0JKRUNUSVZFUyc7XHJcbiAgICAgICAgb2JqZWN0aXZlLmFwcGVuZENoaWxkKG9iakhlYWQpO1xyXG4gICAgICAgIGNvbnN0IG9iakxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIGNvbnN0IG9iamVjdGl2ZXMgPSBbICdUbyBrbm93IGhvdyB0byBwcmVwYXJlIHdlbGRpbmcgZWRnZSBiZWZvcmUgd2VsZGluZycsICdUbyBrbm93IHRoZSBkaWZmZXJlbnQgd2VsZGluZyBqb2ludHMnLCAnVG8ga25vdyB0aGUgZGlmZmVyZW50IHdlbGRpbmcgcG9zaXRpb25zJywgJ1RvIGtub3cgdGhlIHZhcmlvdXMgYXJjIHdlbGRpbmcgcHJvY2Vzc2VzJywgJ1RvIGtub3cgdGhlIHZhcmlvdXMgYXJjIHdlbGRpbmcgZXF1aXBtZW50cycsICdUbyBrbm93IHRoZSBzYWZldHkgcmVjb21tZW5kYXRpb25zIGZvciBhcmMgd2VsZGluZyBwcm9jZXNzZXMnLCdUbyBwcm9kdWNlIGEgYnV0dCBqb2ludCB1c2luZyBhcmMgd2VsZGluZyddO1xyXG4gICAgICAgIGxldCBsaXN0ID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG9iamVjdGl2ZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBsaXN0W2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgbGlzdFtpXS50ZXh0Q29udGVudCA9IG9iamVjdGl2ZXNbaV07XHJcbiAgICAgICAgICAgIG9iakxpc3QuYXBwZW5kQ2hpbGQobGlzdFtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9iamVjdGl2ZS5hcHBlbmRDaGlsZChvYmpMaXN0KTtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKG9iamVjdGl2ZSk7XHJcbiAgICAgICAgY29uc3QgYXBwSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgYXBwSGVhZC50ZXh0Q29udGVudCA9ICdBcHBhcmF0dXMnO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoYXBwSGVhZCk7XHJcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2FwcEJveCcpO1xyXG4gICAgICAgIGNvbnN0IGFwcGFyYXR1cyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnUHJvdGVjdGl2ZSBDbG90aGluZycsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljNzFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnUHJvdGVjdGl2ZSBFcXVpcG1lbnQnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzcyXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ1dpcmUgQnJ1c2gnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzczXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ1dlbGRpbmcgY2FibGVzJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWM3NFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdIYW5kIFNjcmVlbicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljNzVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnQ2hpcHBpbmcgSGFtbWVyJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWM3NlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdBcmMgd2VsZGluZyBwb3dlciBzb3VyY2UnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzc3XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ0VsZWN0cm9kZXMnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzc4XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ0VsZWN0cm9kZSBob2xkZXInLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzc5XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ1RvbmdzJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWM4MFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdIYW5kIFNoaWVsZCcsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljODFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnRWFydGggY2xhbXAnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzgyXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ1dlbGRpbmcgdGFibGUnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzgzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ1JvdWdoIGZpbGUnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzcwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ1Ntb290aCBmaWxlJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWM4NFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdQcm90cmFjdG9yJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWM4NVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgbGV0IGFwcEJveCA9IFtdO1xyXG4gICAgICAgIGxldCBhcHBJbWFnZSA9IFtdO1xyXG4gICAgICAgIGxldCBhcHBDYXB0aW9uID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGFwcGFyYXR1cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGFwcEJveFtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBhcHBJbWFnZVtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICBhcHBDYXB0aW9uW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBhcHBJbWFnZVtpXS5zcmMgPSAgYXBwYXJhdHVzW2ldLmltYWdlO1xyXG4gICAgICAgICAgICBhcHBDYXB0aW9uW2ldLnRleHRDb250ZW50ID0gYXBwYXJhdHVzW2ldLmNhcDtcclxuICAgICAgICAgICAgYXBwQm94W2ldLmFwcGVuZENoaWxkKGFwcEltYWdlW2ldKTtcclxuICAgICAgICAgICAgYXBwQm94W2ldLmFwcGVuZENoaWxkKGFwcENhcHRpb25baV0pO1xyXG4gICAgICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGFwcEJveFtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoc2VjdGlvbik7XHJcbiAgICAgICAgY29uc3QgdGhlb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IHRoZW9IZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICB0aGVvSGVhZC50ZXh0Q29udGVudCA9ICdUSEVPUlknO1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZCh0aGVvSGVhZCk7XHJcbiAgICAgICAgY29uc3QgZXhwbGFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGV4cGxhaW4udGV4dENvbnRlbnQgPSAnV2VsZGluZyBpcyBhIGZhYnJpY2F0aW9uIHByb2Nlc3MgdGhhdCBqb2lucyBtYXRlcmlhbHMsIHR5cGljYWxseSBtZXRhbHMgb3IgdGhlcm1vcGxhc3RpY3MsIHRvZ2V0aGVyIGJ5IGNhdXNpbmcgZnVzaW9uLiBUaGlzIHByb2Nlc3MgaW52b2x2ZXMgbWVsdGluZyB0aGUgYmFzZSBtZXRhbHMgYW5kIGFkZGluZyBhIGZpbGxlciBtYXRlcmlhbCB0byBmb3JtIGEgd2VsZCBwb29sLCB3aGljaCBjb29scyB0byBiZWNvbWUgYSBzdHJvbmcgam9pbnQuIFdlbGRpbmcgaXMgYmFzaWNhbGx5IGEgbWV0YWx3b3JraW5nIHN1cGVycG93ZXIgdGhhdCBsZXRzIHlvdSBwZXJtYW5lbnRseSBqb2luIHBpZWNlcyBvZiBtZXRhbCB0b2dldGhlci4gV2VsZGluZyBpcyB1c2VkIGluIGRpZmZlcmVudCBhc3BlY3RzIHdoaWNoIGluY2x1ZGVzOic7XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKGV4cGxhaW4pO1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnQ29uc3RydWN0aW9uJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdXZWxkaW5nIGlzIGVzc2VudGlhbCBmb3IgY29tYmluaW5nIHN0ZWVsIGJlYW1zLCBwaXBlcywgYW5kIG90aGVyIG1ldGFsIHN0cnVjdHVyZXMgdGhhdCBjb25zdGl0dXRlIHRoZSBmcmFtZXdvcmsgb2Ygb3VyIGJ1aWxkaW5ncyBhbmQgaW5mcmFzdHJ1Y3R1cmUsIGZyb20gY29tcGxleCBicmlkZ2VzIHRvIHRhbGwgc2t5c2NyYXBlcnMuJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0F1dG9tb3RpdmUgSW5kdXN0cnknLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1dlbGRpbmcgaXMgZXNzZW50aWFsIGZvciBhIHN0dXJkeSBhbmQgc2VjdXJlIGFzc2VtYmx5IG9mIGNhciBmcmFtZXMsIGVuZ2luZXMsIGFuZCBib2R5IHBhcnRzLicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdNYW51ZmFjdHVyaW5nJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdXZWxkaW5nIGlzIGVzc2VudGlhbCB0byBmYWJyaWNhdGlvbiBpbiBhIHZhcmlldHkgb2YgbWFudWZhY3R1cmluZyBhcmVhcywgaW5jbHVkaW5nIGVsZWN0cm9uaWNzLCBhcHBsaWFuY2VzLCBhbmQgaW5kdXN0cmlhbCBtYWNoaW5lcnkuJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1NoaXBidWlsZGluZycsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnV2VsZHMgYXJlIGZyZXF1ZW50bHkgdXNlZCB0byBob2xkIHRvZ2V0aGVyIHRoZSByb2J1c3Qgc2VhbXMgYW5kIHdhdGVycHJvb2YgY29tcGFydG1lbnRzIG9mIHNoaXBzLicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdSZXBhaXIgYW5kIE1haW50ZW5hbmNlJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdXZWxkaW5nIHRlY2huaXF1ZXMgY2FuIGJlIHVzZWQgdG8gcmVwYWlyIGJyb2tlbiBwaXBlbGluZXMsIGRhbWFnZWQgbWFjaGluZXJ5LCBvciBjb3Jyb2RlZCBtZXRhbCBjb21wb25lbnRzJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgY2F0ZWdvcmllcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKGNyZWF0ZURpdnMoaXRlbSkpO1xyXG4gICAgICAgIH0pOyBcclxuICAgICAgICBjb25zdCB0ZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICB0ZXh0Mi50ZXh0Q29udGVudCA9ICdXZWxkaW5nIGlzIGFwcGxpZWQgaW4gdmFyaW91cyBmaWVsZHMgd2hpY2ggaW5jbHVkZTonO1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZCh0ZXh0Mik7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnQ29uc3RydWN0aW9uIFByb2plY3RzJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdXZWxkaW5nIGlzIGZ1bmRhbWVudGFsIGluIGFzc2VtYmxpbmcgdGhlIHN0ZWVsIGZyYW1lcyB0aGF0IGZvcm0gdGhlIHNrZWxldG9uIG9mIHRoZXNlIHN0cnVjdHVyZXMuJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0F1dG9tb3RpdmUgUmVwYWlyIGFuZCBNYWludGVuYW5jZScsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIldoZXRoZXIgaXQncyBmaXhpbmcgYSBjcmFja2VkIGV4aGF1c3QgcGlwZSBvciBwYXRjaGluZyBhIGhvbGUgaW4gYSBjYXIgZnJhbWUsIHdlbGRlcnMgcGxheSBhIGNydWNpYWwgcm9sZSBpbiBrZWVwaW5nIHZlaGljbGVzIG9uIHRoZSByb2FkLlwiLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnSW5kdXN0cmlhbCBNYW51ZmFjdHVyaW5nJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdNYW51ZmFjdHVyaW5nIHBsYW50cyBoZWF2aWx5IHJlbHkgb24gd2VsZGluZyBmb3IgZXZlcnl0aGluZyBmcm9tIGNyZWF0aW5nIGNvbXBsZXggbWFjaGluZXJ5IHRvIGNvbnN0cnVjdGluZyBwaXBlbGluZXMuJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgY2F0ZWdvcnkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoY3JlYXRlRGl2cyhpdGVtKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgdGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgdGV4dDEudGV4dENvbnRlbnQgPSAnSW4gd2VsZGluZywgdGhlcmUgYXJlIGZvdXIgKDQpIG1haW4gZGlmZmVyZW50IHR5cGVzIG9mIHdlbGRpbmcgcG9zaXRpb25zIHdoaWNoIGluY2x1ZGU6JztcclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQodGV4dDEpO1xyXG4gICAgICAgIGNvbnN0IGNhdGFsb2cgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRmxhdCBwb3NpdGlvbicsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnVGhpcyBpcyB0aGUgbW9zdCBiYXNpYyBhbmQgZWFzaWVzdCB3ZWxkaW5nIHBvc2l0aW9uLiBUaGUgd2VsZGVyIHdlbGRzIG9uIGEgZmxhdCBzdXJmYWNlLCB3aXRoIHRoZSB3b3JrcGllY2UgcG9zaXRpb25lZCBob3Jpem9udGFsbHkgYmVsb3cgdGhlIHRvcmNoLiBHcmF2aXR5IGFzc2lzdHMgdGhlIHdlbGRlciBpbiBjb250cm9sbGluZyB0aGUgbW9sdGVuIG1ldGFsIHdlbGQgcG9vbC4nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzg2XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnSG9yaXpvbnRhbCBwb3NpdGlvbicsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnSW4gdGhpcyBzZXR1cCwgdGhlIHdlbGRlciBpcyBwb3NpdGlvbmVkIGJlbG93IHRoZSBob3Jpem9udGFsIHdlbGQgam9pbnQuIEluIG9yZGVyIHRvIHByZXZlbnQgdGhlIG1vbHRlbiBtZXRhbCBmcm9tIGxlYWtpbmcgb3Igc2FnZ2luZywgdGhlIHdlbGRlciBtdXN0IHJlc2lzdCBncmF2aXR5LiBBbHRob3VnaCB0aGV5IGFyZSBsZXNzIHByZXZhbGVudCB0aGFuIGZsYXQgd2VsZHMsIGhvcml6b250YWwgd2VsZHMgYXJlIG1vcmUgZGlmZmljdWx0IHRvIHBlcmZvcm0uJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWM4N1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1ZlcnRpY2FsIHBvc2l0aW9uJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdBIHZlcnRpY2FsIHN1cmZhY2UgaXMgdXNlZCB0byBtYWtlIHZlcnRpY2FsIHdlbGRzLiBFaXRoZXIgdXBoaWxsIChmcm9tIGJvdHRvbSB0byB0b3ApIG9yIGRvd25oaWxsIChmcm9tIHRvcCB0byBib3R0b20pIHdlbGRpbmcgaXMgcG9zc2libGUuIFdlbGRzIHVwaGlsbCBhcmUgbW9yZSBjaGFsbGVuZ2luZyBiZWNhdXNlIHRoZSBtb2x0ZW4gbWV0YWwgaGFzIGEgdGVuZGVuY3kgdG8gZmxvdyBkb3dud2FyZC4gQWx0aG91Z2ggdGhleSBhcmUgc2ltcGxlciB0byBtYW5hZ2UsIGRvd253YXJkIHdlbGRzIG1heSBwcm9kdWNlIHdlYWtlciB3ZWxkcy4nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzg4XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnT3ZlcmhlYWQgcG9zaXRpb24nLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1RoZSBtb3N0IGNoYWxsZW5naW5nIHBvc2l0aW9uIHRvIHdlbGQgaW4gaXMgYWJvdmUuIFRoZSBzdXJmYWNlIHRoYXQgdGhlIHdlbGRlciB3ZWxkcyBvbiBpcyBhYm92ZSB0aGVtLiBJdCBpcyBleHRyZW1lbHkgZGlmZmljdWx0IHRvIHByb2R1Y2UgaGlnaC1xdWFsaXR5IHdlbGRzIHNpbmNlIHRoZSB3ZWxkZXIgaXMgdW5hYmxlIHRvIGNvbnRyb2wgdGhlIG1vbHRlbiBtZXRhbCBwb29sIGV4Y2VwdCBieSB1c2luZyB0aGVpciB3ZWxkaW5nIG1ldGhvZC4nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzg5XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjYXRhbG9nLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoY3JlYXRlRGl2cyhpdGVtKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgZXhwbGFpbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBleHBsYWluMS50ZXh0Q29udGVudCA9ICdUaGVyZSBhcmUgZGlmZmVyZW50IHR5cGVzIG9mIHdlbGRpbmcgcHJvY2Vzc2VzIGJ1dCBpbiB0aGlzIGV4cGVyaW1lbnQgd2UgYXJlIGRlYWxpbmcgd2l0aCBhcmMgd2VsZGluZyBwcm9jZXNzLic7XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKGV4cGxhaW4xKTtcclxuICAgICAgICBjb25zdCBleHBsYWluMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGV4cGxhaW4yLnRleHRDb250ZW50ID0gXCJBcmMgd2VsZGluZyBpcyB0aGUgbW9zdCBjb21tb24gdHlwZSBvZiB3ZWxkaW5nIHByb2Nlc3MsIGFuZCBpdCB1c2VzIGFuIGVsZWN0cmljIGN1cnJlbnQgdG8gY3JlYXRlIGFuIGFyYyB0aGF0IG1lbHRzIHRoZSBtZXRhbC4gQXJjIHdlbGRpbmcgaXMgYSBtZXRhbCBqb2luaW5nIHByb2Nlc3MgdGhhdCB1dGlsaXplcyB0aGUgaW50ZW5zZSBoZWF0IGdlbmVyYXRlZCBieSBhbiBlbGVjdHJpYyBhcmMgdG8gbWVsdCB0aGUgbWV0YWxzIGF0IHRoZSBqb2ludCwgZnVzaW5nIHRoZW0gdG9nZXRoZXIgb25jZSB0aGV5IGNvb2wuIEhlcmUncyBhIGJyZWFrZG93biBvZiB0aGUgY29yZSBhc3BlY3RzIG9mIHRoZSBwcm9jZXNzOlwiO1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZChleHBsYWluMik7XHJcbiAgICAgICAgY29uc3QgY2F0YWxvZ3MgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnSGVhdCBTb3VyY2UnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1RvIGZvcm0gdGhlIGFyYywgZGlyZWN0IGN1cnJlbnQgKERDKSBvciBhbHRlcm5hdGluZyBjdXJyZW50IChBQykgYXJlIHN1cHBsaWVkIGJ5IGFuIGVsZWN0cmljIHBvd2VyIHNvdXJjZS4gVGhlIHBhcnRpY3VsYXIgd2VsZGluZyBwcm9jZWR1cmUgYW5kIHRoZSBtZXRhbHMgYmVpbmcgY29ubmVjdGVkIGRldGVybWluZSB0aGUga2luZCBvZiBjdXJyZW50IHRoYXQgaXMgZW1wbG95ZWQuJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1RoZSBlbGVjdHJvZGUnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ0luIGFyYyB3ZWxkaW5nLCB0aGVyZSBhcmUgcHJpbWFyaWx5IHR3byBraW5kcyBvZiBlbGVjdHJvZGVzIHVzZWQ6JyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJyAtIENvbnN1bWFibGUgZWxlY3Ryb2RlJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdUbyBjcmVhdGUgdGhlIHdlbGQsIHRoaXMgZWxlY3Ryb2RlIG1lbHRzIGFuZCBmdXNlcyB3aXRoIHRoZSBiYXNlIG1ldGFsLiBNSUcgd2VsZGluZyB3aXJlcyBhbmQgc3RpY2sgd2VsZGluZyBlbGVjdHJvZGVzIGFyZSB0d28gZXhhbXBsZXMuJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJyAtIE5vbi1jb25zdW1hYmxlIGVsZWN0cm9kZScsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnVGhpcyBlbGVjdHJvZGUgZG9lcyBub3QgbWVsdCBvbiBpdHMgb3duOyBpbnN0ZWFkLCBpdCBjb25kdWN0cyBlbGVjdHJpY2l0eSB0byBmb3JtIGFuIGFyYy4gVG8gZm9ybSB0aGUgd2VsZCwgZmlsbGVyIG1ldGFsIGlzIGFwcGxpZWQgc2VwYXJhdGVseS4gQSB0dW5nc3RlbiBlbGVjdHJvZGUgaXMgdXNlZCBhcyBhbiBleGFtcGxlIGluIFRJRyB3ZWxkaW5nLicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIGNhdGFsb2dzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoY3JlYXRlRGl2cyhpdGVtKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZCh0aGVvcnkpO1xyXG4gICAgICAgIGNvbnN0IHByYWN0aWNhbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3Qgc3RlcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIHN0ZXAxLnRleHRDb250ZW50ID0gJ1BSQUNUSUNBTCAxIDogSE9XIFRPIE1BS0UgQSBCVVRUIEpPSU5UJztcclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKHN0ZXAxKTtcclxuICAgICAgICBjb25zdCBzdGVwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgc3RlcDMudGV4dENvbnRlbnQgPSAnUFJPQ0VEVVJFOic7XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZChzdGVwMyk7XHJcbiAgICAgICAgY29uc3Qgc3RlcExpc3QxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICBjb25zdCBzdGVwczEgPSBbJ1RoZSBnaXZlbiBtaWxkIHN0ZWVsIGFyZSB0aG9yb3VnaGx5IGNsZWFuZWQgb2YgcnVzdCBhbmQgc2NhbGUnLCAnT25lIGVkZ2Ugb2YgZWFjaCBwaWVjZSBpcyBiZWxpZXZlZCwgdG8gYW4gYW5nbGUgb2YgMzAwLCBsZWF2aW5nIG5lYXJseSDCvCB0aCBvZiB0aGUgZmxhdCB0aGlja25lc3MsIGF0IG9uZSBlbmQuJywgJ1RoZSB0d28gcGllY2VzIGFyZSBwb3NpdGlvbmVkIG9uIHRoZSB3ZWxkaW5nIHRhYmxlIHN1Y2ggdGhhdCwgdGhleSBhcmUgc2VwYXJhdGVkIHNsaWdodGx5IGZvciBiZXR0ZXIgcGVuZXRyYXRpb24gb2YgdGhlIHdlbGQnLCAnVGhlIGVsZWN0cm9kZSBpcyBmaXR0ZWQgaW4gdGhlIGVsZWN0cm9kZSBob2xkZXIgYW5kIHRoZSB3ZWxkaW5nIGN1cnJlbnQgaXMgc2V0IHRvIGJlIGEgcHJvcGVyIHZhbHVlJywgJ1RoZSBncm91bmQgY2xhbXAgaXMgZmFzdGVuZWQgdG8gdGhlIHdlbGRpbmcgdGFibGUuJywgJ1dlYXJpbmcgdGhlIGFwcm9uIGFuZCB1c2luZyB0aGUgZmFjZSBzaGllbGQsIHRoZSBhcmMgaXMgc3R1Y2sgYW5kIGhvbGRpbmcgdGhlIHR3byBwaWVjZXMgdG9nZXRoZXIsIGZpcnN0IHJ1biBvZiB0aGUgd2VsZCBpcyBkb25lIHRvIGZpbGwgdGhlIHJvb3QgZ2FwJywgJ1NlY29uZCBydW4gb2YgdGhlIHdlbGQgaXMgZG9uZSB3aXRoIHByb3BlciB3ZWF2aW5nIGFuZCB0aGUgdW5pZm9ybSBtb3ZlbWVudC4gRHVyaW5nIHRoZSBwcm9jZXNzIG9mIHdlbGRpbmcsIHRoZSBlbGVjdHJvZGUgaXMga2VwdCBhdCAxNTAgdG8gMjUwIGZyb20gdmVydGljYWwgYW5kIGluIHRoZSBkaXJlY3Rpb24gb2Ygd2VsZGluZy4nLCAnVGhlIHNjYWxlIGZvcm1hdGlvbiBvbiB0aGUgd2VsZHMgaXMgcmVtb3ZlZCBieSB1c2luZyB0aGUgY2hpcHBpbmcgaGFtbWVyLicsICdGaWxpbmcgaXMgZG9uZSB0byByZW1vdmUgYW55IHNwYW5uZXIgYXJvdW5kIHRoZSB3ZWxkJ107XHJcbiAgICAgICAgbGV0IHN0ZXBCb3gxID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHN0ZXBzMS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHN0ZXBCb3gxW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgc3RlcEJveDFbaV0udGV4dENvbnRlbnQgPSBzdGVwczFbaV07XHJcbiAgICAgICAgICAgIHN0ZXBMaXN0MS5hcHBlbmRDaGlsZChzdGVwQm94MVtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByYWN0aWNhbHMuYXBwZW5kQ2hpbGQoc3RlcExpc3QxKTtcclxuICAgICAgICBjb25zdCB0ZXh0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICB0ZXh0My50ZXh0Q29udGVudCA9ICdXYXRjaCBob3cgdG8gcGVyZm9ybSB0aGUgYnV0dCBqb2ludCBwcmFjdGljYWwgYmVsb3cg8J+Rhyc7XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZCh0ZXh0Myk7XHJcbiAgICAgICAgY29uc3QgdmlkZW8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdmlkZW8zLmlubmVySFRNTCA9ICc8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUtbm9jb29raWUuY29tL2VtYmVkLzJheFp1cExBUV9VP3NpPXJRR2JvTTg4VnpUWUhwXzRcIiB0aXRsZT1cIllvdVR1YmUgdmlkZW8gcGxheWVyXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlOyB3ZWItc2hhcmVcIiByZWZlcnJlcnBvbGljeT1cInN0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW5cIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+JztcclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKHZpZGVvMyk7XHJcbiAgICAgICAgY29uc3Qgc3RlcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgc3RlcC50ZXh0Q29udGVudCA9ICdQUkFDVElDQUwgMiA6IEhPVyBUTyBNQUtFIExBUCBKT0lOVCc7XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZChzdGVwKTtcclxuICAgICAgICBjb25zdCBzdGVwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgc3RlcDIudGV4dENvbnRlbnQgPSAnUFJPQ0VEVVJFOic7XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZChzdGVwMik7XHJcbiAgICAgICAgY29uc3Qgc3RlcExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIGNvbnN0IHN0ZXBzID0gWydUaGUgZ2l2ZW4gbWlsZCBzdGVlbCBwaWVjZXMgYXJlIHRob3JvdWdobHkgY2xlYW5lZCBvZiBydXN0IGFuZCBzY2FsZScsICdUaGUgdHdvIHBpZWNlcyBhcmUgcG9zaXRpb25lZCBvbiB0aGUgd2VsZGluZyB0YWJsZSBzdWNoIHRoYXQsIHRoZSB0d28gcGllY2VzIG92ZXJsYXBwZWQgb25lIG92ZXIgdGhlIG90aGVyIGFzIHNob3duIGluIGRyYXdpbmcnLCAnVGhlIGVsZWN0cm9kZSBpcyBmaXR0ZWQgaW4gdGhlIGVsZWN0cm9kZSBob2xkZXIgYW5kIHRoZSB3ZWxkaW5nIGN1cnJlbnQgaXMgc2V0IHRvIGJlIHByb3BlciB2YWx1ZScsICdUaGUgZ3JvdW5kIGNsYW1wIGlzIGZhc3RlbmVkIHRvIHRoZSB3ZWxkaW5nIHRhYmxlJywgJ1dlYXJpbmcgdGhlIGFwcm9uIGFuZCB1c2luZyB0aGUgZmFjZSBzaGllbGQsIHRoZSBhcmMgaXMgc3RydWNrIGFuZCB0aGUgd29yayBwaWVjZXMgYXJlIHRhY2std2VsZGVkIGF0IGJvdGggdGhlIGVuZHMgYW5kIHRoZSBjZW50cmUgb2YgdGhlIGpvaW50JywgJ1RoZSBhbGlnbm1lbnQgb2YgdGhlIGxhcCBqb2ludCBpcyBjaGVja2VkIGFuZCB0aGUgdGFjayB3ZWxkZWQgcGllY2VzIGFyZSByZXF1aXJlZCcsICdUaGUgc2NhbGUgaW5mb3JtYXRpb24gb2YgdGhlIHdlbGRzIGlzIHJlbW92ZWQgYnkgdXNpbmcgY2hpcHBpbmcgaGFtbWVyJywgJ0ZpbGluZyBpcyBkb25lIHRvIHJlbW92ZSBhbnkgc3Bhbm5lciBhcm91bmQgdGhlIHdlbGQnXTtcclxuICAgICAgICBsZXQgc3RlcEJveCA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzdGVwcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHN0ZXBCb3hbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICBzdGVwQm94W2ldLnRleHRDb250ZW50ID0gc3RlcHNbaV07XHJcbiAgICAgICAgICAgIHN0ZXBMaXN0LmFwcGVuZENoaWxkKHN0ZXBCb3hbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKHN0ZXBMaXN0KTtcclxuICAgICAgICBjb25zdCB0ZXh0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICB0ZXh0NC50ZXh0Q29udGVudCA9ICdXYXRjaCBob3cgdG8gcGVyZm9ybSB0aGUgRG92ZXRhaWwgSm9pbnQgcHJhY3RpY2FsIGlzIGJlbG93IPCfkYcnO1xyXG4gICAgICAgIHByYWN0aWNhbHMuYXBwZW5kQ2hpbGQodGV4dDQpO1xyXG4gICAgICAgIGNvbnN0IHZpZGVvNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHZpZGVvNC5pbm5lckhUTUwgPSAnPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLW5vY29va2llLmNvbS9lbWJlZC91VDlkU0R3b3VlTT9zaT1ybUZyM0M3OHh6bFl1Y2RjXCIgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZTsgd2ViLXNoYXJlXCIgcmVmZXJyZXJwb2xpY3k9XCJzdHJpY3Qtb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPic7XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZCh2aWRlbzQpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQocHJhY3RpY2Fscyk7XHJcbiAgICAgICAgY29uc3QgcHJlY2F1dGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCBjYXV0aW9uSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgY2F1dGlvbkhlYWQudGV4dENvbnRlbnQgPSBcIlBSRUNBVVRJT05TXCI7XHJcbiAgICAgICAgcHJlY2F1dGlvbi5hcHBlbmRDaGlsZChjYXV0aW9uSGVhZCk7XHJcbiAgICAgICAgY29uc3QgY2F1dGlvbkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIGNvbnN0IHByZWNhdXRpb25zID0gW1wiSSBlbnN1cmVkIHRoYXQgSSB3b3JlIG15IGxhYiBjb2F0IGFuZCBwZXJzb25hbCBwcm90ZWN0aXZlIGVxdWlwbWVudCAoUFBFKVwiLFwiSSBlbnN1cmVkIHRoYXQgdGhlIHdlbGRpbmcgbWFjaGluZSB3YXMgcHJvcGVybHkgZ3JvdW5kZWQgdG8gcHJldmVudCBlbGVjdHJpY2FsIHNob2NrLlwiLFwiSSBFbnN1cmVkIHRoYXQgdGhlIHdlbGRpbmcgbWFjaGluZSBhbmQgY2FibGVzIGFyZSBpbiBnb29kIGNvbmRpdGlvbiBiZWZvcmUgc3RhcnRpbmcuXCIsIF07XHJcbiAgICAgICAgbGV0IGNhdXRpb25Cb3ggPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJlY2F1dGlvbnMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBjYXV0aW9uQm94W2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgY2F1dGlvbkJveFtpXS50ZXh0Q29udGVudCA9IHByZWNhdXRpb25zW2ldO1xyXG4gICAgICAgICAgICBjYXV0aW9uTGlzdC5hcHBlbmRDaGlsZChjYXV0aW9uQm94W2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJlY2F1dGlvbi5hcHBlbmRDaGlsZChjYXV0aW9uTGlzdCk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChwcmVjYXV0aW9uKTtcclxuICAgICAgICBjb25zdCBjb25jbHVzaW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IGNvbmNIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBjb25jSGVhZC50ZXh0Q29udGVudCA9IFwiQ09OQ0xVU0lPTjpcIjtcclxuICAgICAgICBjb25jbHVzaW9uLmFwcGVuZENoaWxkKGNvbmNIZWFkKTtcclxuICAgICAgICBjb25zdCBjb25jVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBjb25jVGV4dC50ZXh0Q29udGVudCA9IFwiQXQgdGhlIGVuZCBvZiB0aGlzIGV4cGVyaW1lbnQsIGEgYnV0dCBqb2ludCwgbGFwIGpvaW50IHdhcyBjcmVhdGVkIGZyb20gbWlsZCBzdGVlbCBwaWVjZXMgYnkgYXJjIHdlbGRpbmcgdXNpbmcgdGhlIG5lY2Vzc2FyeSBlcXVpcG1lbnRzIGFuZCBhbHNvIHVzaW5nIGRpZmZlcmVudCB3ZWxkaW5nIHBvc2l0aW9ucy5cIjtcclxuICAgICAgICBjb25jbHVzaW9uLmFwcGVuZENoaWxkKGNvbmNUZXh0KTtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGNvbmNsdXNpb24pO1xyXG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgcmVmSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgcmVmSGVhZC50ZXh0Q29udGVudCA9IFwiUkVGRVJFTkNFU1wiO1xyXG4gICAgICAgIHJlZmVyZW5jZXMuYXBwZW5kQ2hpbGQocmVmSGVhZCk7XHJcbiAgICAgICAgY29uc3QgcmVmTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlID0gW1wiUHJvZHVjdGlvbiBFbmdpbmVlcmluZyBMYWJvcmF0b3J5IE1hbnVhbCBmb3IgRUxBMjAxIGFuZCBFTEEyMDIgYnkgRGVwYXJ0bWVudCBvZiBQcm9kdWN0aW9uIEVuZ2luZWVyaW5nLCBVbml2ZXJzaXR5IG9mIEJlbmluLlwiLCBcIlRoZSBUSUcgV2VsZGluZyBCb29rIGJ5IFRvZGQgQnJpZGlndW1cIiwgXCJXZWxkaW5nIGZvciBEdW1taWVzIGJ5IFN0ZXZlbiBSb2JlcnQgRmFybnN3b3J0aFwiXTtcclxuICAgICAgICBsZXQgcmVmQm94ID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHJlZmVyZW5jZS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHJlZkJveFtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIHJlZkJveFtpXS50ZXh0Q29udGVudCA9IHJlZmVyZW5jZVtpXTtcclxuICAgICAgICAgICAgcmVmTGlzdC5hcHBlbmRDaGlsZChyZWZCb3hbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZWZlcmVuY2VzLmFwcGVuZENoaWxkKHJlZkxpc3QpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQocmVmZXJlbmNlcyk7XHJcbiAgICAgICAgY29uc3QgaG92ZXIgPSBjcmVhdGVIb3ZlcignIycpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoaG92ZXIpO1xyXG4gICAgICAgIGNvbnN0IGRvd25sb2FkID0gY3JlYXRlRG93bmxvYWQoJyMnKTtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGRvd25sb2FkKTtcclxufTtcclxuXHJcblxyXG5jb25zdCBkaXNwbGF5TVMyMDEgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtYWluID0gcmVzZXQoKTtcclxuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgaGVhZC50ZXh0Q29udGVudCAgPSAnSW50cm9kdWN0aW9uIHRvIGxhdGhlIGFuZCBtYWNoaW5pbmcgb3BlcmF0aW9uc3tNUzIwMX0nO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChoZWFkKTtcclxuICAgIGNvbnN0IG9iamVjdGl2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgIGNvbnN0IG9iakhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgb2JqSGVhZC50ZXh0Q29udGVudCA9ICdPQkpFQ1RJVkVTJztcclxuICAgIG9iamVjdGl2ZS5hcHBlbmRDaGlsZChvYmpIZWFkKTtcclxuICAgIGNvbnN0IG9iakxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgY29uc3Qgb2JqZWN0aXZlcyA9IFsnVG8gc3R1ZHkgdGhlIGNoYXJhY3RlcmlzdGljcyBmZWF0dXJlcyBvZiBsYXRoZScsICdUbyBzdHVkeSB0eXBlcyBvZiBsYXRoZSBvcGVyYXRpb25zJywgJ1RvIHByb2R1Y2Ugc2hhZnQgdXNpbmcgc3RyYWlnaHQgdHVybmluZyddO1xyXG4gICAgbGV0IGxpc3QgPSBbXTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBvYmplY3RpdmVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBsaXN0W2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBsaXN0W2ldLnRleHRDb250ZW50ID0gb2JqZWN0aXZlc1tpXTtcclxuICAgICAgICBvYmpMaXN0LmFwcGVuZENoaWxkKGxpc3RbaV0pO1xyXG4gICAgfVxyXG4gICAgb2JqZWN0aXZlLmFwcGVuZENoaWxkKG9iakxpc3QpO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChvYmplY3RpdmUpO1xyXG4gICAgY29uc3QgYXBwSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBhcHBIZWFkLnRleHRDb250ZW50ID0gJ0FwcGFyYXR1cyc7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGFwcEhlYWQpO1xyXG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2FwcEJveCcpO1xyXG4gICAgICAgIGNvbnN0IGFwcGFyYXR1cyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnTGF0aGUgTWFjaGluZScsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljOTBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnVmVybmllciBjYWxpcGVyJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWM0NlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdTdGVlbCBydWxlJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWM0M1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdTcGFubmVyJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWMxNlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdDaHVjayBzcGFubmVyJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWM5MVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdIaWdoIHNwZWVkIHN0ZWVsIChIU1MpJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWM5MlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdTaW5nbGUgcG9pbnQgY3V0dGluZyB0b29sJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWM5M1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgbGV0IGFwcEJveCA9IFtdO1xyXG4gICAgICAgIGxldCBhcHBJbWFnZSA9IFtdO1xyXG4gICAgICAgIGxldCBhcHBDYXB0aW9uID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGFwcGFyYXR1cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGFwcEJveFtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBhcHBJbWFnZVtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICBhcHBDYXB0aW9uW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBhcHBJbWFnZVtpXS5zcmMgPSAgYXBwYXJhdHVzW2ldLmltYWdlO1xyXG4gICAgICAgICAgICBhcHBDYXB0aW9uW2ldLnRleHRDb250ZW50ID0gYXBwYXJhdHVzW2ldLmNhcDtcclxuICAgICAgICAgICAgYXBwQm94W2ldLmFwcGVuZENoaWxkKGFwcEltYWdlW2ldKTtcclxuICAgICAgICAgICAgYXBwQm94W2ldLmFwcGVuZENoaWxkKGFwcENhcHRpb25baV0pO1xyXG4gICAgICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGFwcEJveFtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoc2VjdGlvbik7XHJcbiAgICAgICAgY29uc3QgdGhlb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IHRoZW9IZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICB0aGVvSGVhZC50ZXh0Q29udGVudCA9ICdUSEVPUlknO1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZCh0aGVvSGVhZCk7XHJcbiAgICAgICAgY29uc3QgZXhwbGFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGV4cGxhaW4udGV4dENvbnRlbnQgPSAnQSBsYXRoZSBpcyBhIHR5cGUgb2YgbWFjaGluZSB0b29sIHRoYXQgcm90YXRlcyBhIHdvcmtwaWVjZSBvbiBpdHMgYXhpcyB0byBzaGFwZSBtZXRhbCBvciB3b29kLiBUbyByZW1vdmUgbWF0ZXJpYWwgZnJvbSB0aGUgd29ya3BpZWNl4oCUd2hpY2ggbWF5IGJlIGNvbXBvc2VkIG9mIGdsYXNzLCBtZXRhbCwgb3Igd29vZCwgYSBmaXhlZCBjdXR0aW5nIHRvb2wgaXMgdXRpbGlzZWQuIFRoZSBtb3N0IGNvbW1vbiBhcHBhcmF0dXMgdXNlZCBpbiB0aGlzIGV4cGVyaW1lbnQgaXMgdGhlIGxhdGhlIG1hY2hpbmUuIFRoZXJlIGFyZSBkaWZmZXJlbnQgdHlwZXMgb2YgbGF0aGUgbWFjaGluZSBhbmQgdGhlIGxhdGhlIG1hY2hpbmVzIGhhdmUgdGhlIHNhbWUgZmVhdHVyZXMgb3IgcGFydHMgd2hpY2ggaW5jbHVkZTonO1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZChleHBsYWluKTtcclxuICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0JlZCcsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnVGhlIGJlZCBpcyB0aGUgYmFzZSBvZiB0aGUgbGF0aGUgYW5kIHByb3ZpZGVzIHN1cHBvcnQgZm9yIHRoZSBvdGhlciBjb21wb25lbnRzIG9mIHRoZSBtYWNoaW5lLicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljOTRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdIZWFkc3RvY2snLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1RoZSBoZWFkc3RvY2sgaXMgbG9jYXRlZCBhdCBvbmUgZW5kIG9mIHRoZSBiZWQgYW5kIGhvdXNlcyB0aGUgc3BpbmRsZS4gVGhlIHNwaW5kbGUgaXMgYSBzaGFmdCB0aGF0IHJvdGF0ZXMgdGhlIHdvcmtwaWVjZS4nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzk1XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVGFpbHN0b2NrJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdUaGUgdGFpbHN0b2NrIGlzIGxvY2F0ZWQgYXQgdGhlIG90aGVyIGVuZCBvZiB0aGUgYmVkIGFuZCBjYW4gYmUgdXNlZCB0byBzdXBwb3J0IHRoZSBlbmQgb2YgdGhlIHdvcmtwaWVjZS4nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzk2XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnQ2FycmlhZ2UnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1RoZSBjYXJyaWFnZSBpcyBhIG1vdmFibGUgc2xpZGUgdGhhdCBob2xkcyB0aGUgY3V0dGluZyB0b29sLiBUaGUgY2FycmlhZ2UgY2FuIGJlIG1vdmVkIGFsb25nIHRoZSBiZWQgaW4gb3JkZXIgdG8gcG9zaXRpb24gdGhlIGN1dHRpbmcgdG9vbCByZWxhdGl2ZSB0byB0aGUgd29ya3BpZWNlIGFuZCBjb21wcmlzZXMgb2YgdGhlIGNvbXBvdW5kIHJlc3QsIHRvb2wgcG9zdCwgY3Jvc3Mgc2xpZGUgYW5kIGV0YyBhcyBzaG93biBiZWxvdy4nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzk3XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjYXRlZ29yaWVzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoY3JlYXRlRGl2cyhpdGVtKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgdGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgdGV4dDIudGV4dENvbnRlbnQgPSAnVGhlIGxhdGhlIG1hY2hpbmUgaXMgYXBwbGllZCBpbiBkaWZmZXJlbnQgYXNwZWN0cyBpbiBvdXIgZXZlcnlkYXkgd29ybGQsIHdoaWNoIGluY2x1ZGU6JztcclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQodGV4dDIpO1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ01hbnVmYWN0dXJpbmcnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ0xhdGhlcyBhcmUgdXNlZCB0byBjcmVhdGUgYSB3aWRlIHZhcmlldHkgb2YgcGFydHMsIHN1Y2ggYXMgZ2VhcnMsIHNoYWZ0cywgYW5kIGJlYXJpbmdzLicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdDb25zdHJ1Y3Rpb24nLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJMYXRoZXMgYXJlIHVzZWQgdG8gY3JlYXRlIHBhcnRzIGZvciBtYWNoaW5lcyBhbmQgdG9vbHMgdXNlZCBpbiBjb25zdHJ1Y3Rpb24uXCIsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdSZXBhaXInLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ0xhdGhlcyBhcmUgdXNlZCB0byByZXBhaXIgZGFtYWdlZCBwYXJ0cy4nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjYXRlZ29yeS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZChjcmVhdGVEaXZzKGl0ZW0pKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB0ZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICB0ZXh0MS50ZXh0Q29udGVudCA9ICdTZXF1ZW5jZSBvZiBvcGVyYXRpb25zIGFyZSBwZXJmb3JtZWQgYnkgdGhlIGxhdGhlIG1hY2hpbmUgd2hpY2ggaW5jbHVkZXM6JztcclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQodGV4dDEpO1xyXG4gICAgICAgIGNvbnN0IGNhdGFsb2cgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRmFjaW5nJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdUaGUgZmFjaW5nIG9wZXJhdGlvbiBpbnZvbHZlcyBjdXR0aW5nIGEgZmxhdCBzdXJmYWNlIHBlcnBlbmRpY3VsYXIgdG8gdGhlIGF4aXMgb2Ygcm90YXRpb24gb2YgdGhlIHdvcmtwaWVjZS4gVGhpcyBjcmVhdGVzIGEgc21vb3RoIHN1cmZhY2Ugb24gdGhlIGVuZCBvZiB0aGUgd29ya3BpZWNlLicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdUdXJuaW5nJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdUdXJuaW5nIGlzIHRoZSBwcm9jZXNzIG9mIHJlbW92aW5nIG1hdGVyaWFsIGZyb20gdGhlIG91dGVyIGRpYW1ldGVyIG9mIHRoZSB3b3JrcGllY2UgdG8gY3JlYXRlIGEgY3lsaW5kcmljYWwgc2hhcGUuIFRoaXMgaXMgZG9uZSBieSBtb3ZpbmcgYSBjdXR0aW5nIHRvb2wgcGFyYWxsZWwgdG8gdGhlIGF4aXMgb2Ygcm90YXRpb24uJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0dyb292aW5nJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdHcm9vdmluZyBpbnZvbHZlcyBjdXR0aW5nIGEgZ3Jvb3ZlIG9yIGNoYW5uZWwgaW50byB0aGUgc3VyZmFjZSBvZiB0aGUgd29ya3BpZWNlLiBUaGlzIGNhbiBiZSB1c2VkIGZvciBjcmVhdGluZyBmZWF0dXJlcyBsaWtlIHRocmVhZHMgb3IgZm9yIG90aGVyIHB1cnBvc2VzLicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdUaHJlYWRpbmcnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1RocmVhZGluZyBpcyB0aGUgcHJvY2VzcyBvZiBjdXR0aW5nIHRocmVhZHMgb250byB0aGUgY3lsaW5kcmljYWwgc3VyZmFjZSBvZiB0aGUgd29ya3BpZWNlLiBUaGlzIGNhbiBiZSBkb25lIGludGVybmFsbHkgKHRhcHBpbmcpIG9yIGV4dGVybmFsbHkgKGRpZSBjdXR0aW5nKS4nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRHJpbGxpbmcnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJTb21lIGxhdGhlIG1hY2hpbmVzIGFyZSBlcXVpcHBlZCB3aXRoIGF0dGFjaG1lbnRzIGZvciBkcmlsbGluZyBob2xlcyBpbiB0aGUgd29ya3BpZWNlLiBUaGlzIGNhbiBiZSBkb25lIHVzaW5nIGEgZHJpbGwgY2h1Y2sgbW91bnRlZCBvbiB0aGUgbGF0aGUncyB0YWlsc3RvY2suXCIsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdCb3JpbmcnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJCb3JpbmcgaXMgdGhlIHByb2Nlc3Mgb2YgZW5sYXJnaW5nIGFuIGV4aXN0aW5nIGhvbGUgaW4gdGhlIHdvcmtwaWVjZSB0byBhIHByZWNpc2UgZGlhbWV0ZXIuIFRoaXMgaXMgdHlwaWNhbGx5IGRvbmUgdXNpbmcgYSBib3JpbmcgYmFyIG1vdW50ZWQgb24gdGhlIGxhdGhlJ3MgdG9vbHBvc3QuXCIsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdGaW5pc2hpbmcnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJBZnRlciB0aGUgZGVzaXJlZCBtYWNoaW5pbmcgb3BlcmF0aW9ucyBhcmUgY29tcGxldGUsIGZpbmlzaGluZyBvcGVyYXRpb25zIHN1Y2ggYXMgcG9saXNoaW5nIG9yIGRlYnVycmluZyBtYXkgYmUgcGVyZm9ybWVkIHRvIGltcHJvdmUgdGhlIHN1cmZhY2UgZmluaXNoIG9mIHRoZSB3b3JrcGllY2UgZXRjLlwiLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnQ2hhbWZlcmluZycsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkNoYW1mZXJpbmcgaXMgYSBtYWNoaW5pbmcgb3BlcmF0aW9uIGNvbW1vbmx5IHBlcmZvcm1lZCBvbiBhIGxhdGhlIG1hY2hpbmUsIGFsdGhvdWdoIGl0IGNhbiBhbHNvIGJlIGRvbmUgdXNpbmcgb3RoZXIgdG9vbHMgc3VjaCBhcyBtaWxsaW5nIG1hY2hpbmVzIG9yIGhhbmQgdG9vbHMuIENoYW1mZXJpbmcgaW52b2x2ZXMgY3V0dGluZyBvciBncmluZGluZyBhd2F5IG1hdGVyaWFsIGZyb20gdGhlIGVkZ2Ugb2YgYSB3b3JrcGllY2UgdG8gY3JlYXRlIGEgYmV2ZWxlZCBlZGdlIG9yIGEgY2hhbWZlci5cIixcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0dyb292aW5nJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiR3Jvb3ZpbmcgcmVmZXJzIHRvIGEgc3BlY2lmaWMgbWFjaGluaW5nIG9wZXJhdGlvbiB1c2VkIHRvIGNyZWF0ZSBuYXJyb3cgY2hhbm5lbHMgb3IgY3V0cyBvbiB0aGUgc3VyZmFjZSBvZiBhIHdvcmtwaWVjZS4gSXQgaW52b2x2ZXMgY3V0dGluZyBhIG5hcnJvdywgZWxvbmdhdGVkIHJlY2VzcyBvciBncm9vdmUgaW50byB0aGUgc3VyZmFjZSBvZiBhIHdvcmtwaWVjZS5cIixcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgY2F0YWxvZy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKGNyZWF0ZURpdnMoaXRlbSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGhlYWQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBoZWFkMS50ZXh0Q29udGVudCA9ICdXYXRjaCB0aGUgb3BlcmF0aW9ucyBwZXJmb3JtZWQgb24gdGhlIGxhdGhlIG1hY2hpbmUgYW5kIGV2ZW4gbW9yZSc7XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKGhlYWQxKTtcclxuICAgICAgICBjb25zdCB2aWRlbzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB2aWRlbzQuaW5uZXJIVE1MID0gJzxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS1ub2Nvb2tpZS5jb20vZW1iZWQvU3ZsWkhIRFhDWnM/c2k9VENLNUU5aHZlYXRhdGdQeVwiIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmU7IHdlYi1zaGFyZVwiIHJlZmVycmVycG9saWN5PVwic3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpblwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nO1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZCh2aWRlbzQpO1xyXG4gICAgICAgIGNvbnN0IHZpZGVvMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHZpZGVvMy5pbm5lckhUTUwgPSAnPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLW5vY29va2llLmNvbS9lbWJlZC9rbTZpY2tRZ2xWWT9zaT1CUHctZUNiYzBSQWUxVmpYXCIgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZTsgd2ViLXNoYXJlXCIgcmVmZXJyZXJwb2xpY3k9XCJzdHJpY3Qtb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPic7XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKHZpZGVvMyk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZCh0aGVvcnkpO1xyXG4gICAgICAgIGNvbnN0IHByYWN0aWNhbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3Qgc3RlcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIHN0ZXAxLnRleHRDb250ZW50ID0gJ1BSQUNUSUNBTCA6IEhPVyBUTyBQRVJGT1JNIFNURVAgVFVSTklORyBBTkQgVEFQRVIgVFVSTklORyBPTiBMQVRIRSBNQUNISU5FJztcclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKHN0ZXAxKTtcclxuICAgICAgICBjb25zdCBzdGVwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgc3RlcDMudGV4dENvbnRlbnQgPSAnUFJPQ0VEVVJFOic7XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZChzdGVwMyk7XHJcbiAgICAgICAgY29uc3Qgc3RlcExpc3QxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICBjb25zdCBzdGVwczEgPSBbJ1RoZSB3b3JrIHBpZWNlIGlzIGZpeGVkIGluIGEgMy1qYXcgY2h1Y2sgd2l0aCBzdWZmaWNpZW50IG92ZXJoYW5nJywgJ0FkanVzdCB0aGUgbWFjaGluZSB0byBydW4gdGhlIGpvYiB0byBhIHJlcXVpcmVkIGN1dHRpbmcgc3BlZWQnLCAnRml4IHRoZSBjdXR0aW5nIHRvb2wgaW4gdGhlIHRvb2wgcG9zdCBhbmQgY2VudGVyaW5nIG9wZXJhdGlvbiBpcyBwZXJmb3JtZWQgc28gdGhhdCB0aGUgYXhpcyBvZiB0aGUgam9iIGNvaW5jaWRlcyB3aXRoIHRoZSBsYXRoZSBheGlzJywgJ0dpdmUgdGhlIGZlZWQgYW5kIGRlcHRoIG9mIHRoZSBjdXQgdG8gdGhlIGN1dHRpbmcgdG9vbCcsICdGYWNpbmcgb3BlcmF0aW9uIGlzIHBlcmZvcm1lZCBmcm9tIHRoZSBjZW50ZXIgb2YgdGhlIGpvYiB0b3dhcmRzIG91dHdhcmQgb3IgZnJvbSB0aGUgY2lyY3VtZmVyZW5jZSB0b3dhcmRzIHRoZSBjZW50ZXInLCAnUGxhaW4gdHVybmluZyBvcGVyYXRpb24gaXMgcGVyZm9ybWVkIHVudGlsIHRoZSBkaWFtZXRlciBvZiB0aGUgd29ya3BpZWNlIHJlZHVjZXMgdG8gMjNtbScsICdDaGVjayB0aGUgZGltZW5zaW9ucyBieSB1c2luZyBWZXJuaWVyIGNhbGlwZXJzJywgJ1RoZW4gY2hhbWZlcmluZyBpcyBkb25lIG9uIHRoZSAyM21tIGRpYW1ldGVyIHN1cmZhY2UnLCAnUmV2ZXJzZSB0aGUgd29yayBwaWVjZSBpbiB0aGUgY2h1Y2sgYW5kIGZhY2luZyBvcGVyYXRpb24gaXMgcGVyZm9ybWVkIHRvIHJlZHVjZSB0aGUgbGVuZ3RoIG9mIHdvcmsgcGllY2UgdG8gdGhlIHJlcXVpcmVkIGRpbWVuc2lvbnMnLCAnQWdhaW4gcGxhaW4gdHVybmluZyBvcGVyYXRpb24gaXMgcGVyZm9ybWVkIHVudGlsIHRoZSBkaWFtZXRlciBvZiB0aGUgd29yayBwaWVjZSByZWR1Y2VzIHRvIDE4bW0nLCAnVXNpbmcgdGhlIHYtY3V0dGluZyB0b29sIGdyb292aW5nIG9wZXJhdGlvbiBpcyBwZXJmb3JtZWQgYWNjb3JkaW5nIHRvIHRoZSBnaXZlbiBkaW1lbnNpb25zIGFuZCBmaW5pc2ggdGhlIGdyb292ZSB1c2luZyBwYXJ0aW5nIHRvb2wnLCAnU3dpdmVsIHRoZSBjb21wb3VuZCBzbGlkZSB0byB0aGUgcmVxdWlyZWQgYW5nbGUgYW5kIHRhcGVyIHR1cm5pbmcgb3BlcmF0aW9uIGJ5IHJvdGF0aW5nIHRoZSBjb21wb3VuZCBzbGlkZSB3aGVlbC4nLCAnRmluYWxseSwgY2hlY2sgdGhlIGRpbWVuc2lvbnMgYnkgdXNpbmcgVmVybmllciBjYWxpcGVycy4nXTtcclxuICAgICAgICBsZXQgc3RlcEJveDEgPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3RlcHMxLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgc3RlcEJveDFbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICBzdGVwQm94MVtpXS50ZXh0Q29udGVudCA9IHN0ZXBzMVtpXTtcclxuICAgICAgICAgICAgc3RlcExpc3QxLmFwcGVuZENoaWxkKHN0ZXBCb3gxW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZChzdGVwTGlzdDEpO1xyXG4gICAgICAgIGNvbnN0IHRleHQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHRleHQzLnRleHRDb250ZW50ID0gJ1RoZSBsaW5rIHRvIHdhdGNoIGhvdyB0byBwZXJmb3JtIHRoZSB0YXBlciB0dXJuaW5nIG9wZXJhdGlvbiBvbiBsYXRoZSBtYWNoaW5lIHByYWN0aWNhbCBpcyBiZWxvdyDwn5GHJztcclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKHRleHQzKTtcclxuICAgICAgICBjb25zdCB2aWRlbzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB2aWRlbzUuaW5uZXJIVE1MID0gJzxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS1ub2Nvb2tpZS5jb20vZW1iZWQvZGtzSTdGQzhpWlE/c2k9VVB2NEdfQzd3S2hHYzhVZVwiIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmU7IHdlYi1zaGFyZVwiIHJlZmVycmVycG9saWN5PVwic3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpblwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nO1xyXG4gICAgICAgIHByYWN0aWNhbHMuYXBwZW5kQ2hpbGQodmlkZW81KTtcclxuICAgICAgICBjb25zdCB0ZXh0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICB0ZXh0NC50ZXh0Q29udGVudCA9ICdUaGUgbGluayB0byB3YXRjaCBob3cgdG8gcGVyZm9ybSB0aGUgc3RlcCB0dXJuaW5nIG9wZXJhdGlvbiBvbiBsYXRoZSBtYWNoaW5lIHByYWN0aWNhbCBpcyBiZWxvdyDwn5GHJztcclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKHRleHQ0KTtcclxuICAgICAgICBjb25zdCB2aWRlbzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB2aWRlbzYuaW5uZXJIVE1MID0gJzxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS1ub2Nvb2tpZS5jb20vZW1iZWQvM0N5MXlTdGM5M3c/c2k9UXhSUWZJM09fdUoyanhKVFwiIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmU7IHdlYi1zaGFyZVwiIHJlZmVycmVycG9saWN5PVwic3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpblwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nO1xyXG4gICAgICAgIHByYWN0aWNhbHMuYXBwZW5kQ2hpbGQodmlkZW82KTtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHByYWN0aWNhbHMpO1xyXG4gICAgICAgIGNvbnN0IHByZWNhdXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgY2F1dGlvbkhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIGNhdXRpb25IZWFkLnRleHRDb250ZW50ID0gXCJQUkVDQVVUSU9OU1wiO1xyXG4gICAgICAgIHByZWNhdXRpb24uYXBwZW5kQ2hpbGQoY2F1dGlvbkhlYWQpO1xyXG4gICAgICAgIGNvbnN0IGNhdXRpb25MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICBjb25zdCBwcmVjYXV0aW9ucyA9IFtcIkkgZW5zdXJlZCB0aGF0IEkgd29yZSBteSBsYWIgY29hdCBhbmQgcGVyc29uYWwgcHJvdGVjdGl2ZSBlcXVpcG1lbnQgKFBQRSlcIixcIkkgZW5zdXJlZCB0aGF0IEkga2VwdCBoYW5kcyBjbGVhciBvZiBtb3ZpbmcgcGFydHMgXCIsXCJJIEVuc3VyZWQgdGhhdCBJIHVzZWQgY29vbGFudCBvciBsdWJyaWNhdGlvbiB0byByZWR1Y2UgZnJpY3Rpb24sIGRpc3NpcGF0ZSBoZWF0LCBhbmQgaW1wcm92ZSBzdXJmYWNlIGZpbmlzaFwiLCBdO1xyXG4gICAgICAgIGxldCBjYXV0aW9uQm94ID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByZWNhdXRpb25zLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgY2F1dGlvbkJveFtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIGNhdXRpb25Cb3hbaV0udGV4dENvbnRlbnQgPSBwcmVjYXV0aW9uc1tpXTtcclxuICAgICAgICAgICAgY2F1dGlvbkxpc3QuYXBwZW5kQ2hpbGQoY2F1dGlvbkJveFtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByZWNhdXRpb24uYXBwZW5kQ2hpbGQoY2F1dGlvbkxpc3QpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQocHJlY2F1dGlvbik7XHJcbiAgICAgICAgY29uc3QgY29uY2x1c2lvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCBjb25jSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgY29uY0hlYWQudGV4dENvbnRlbnQgPSBcIkNPTkNMVVNJT046XCI7XHJcbiAgICAgICAgY29uY2x1c2lvbi5hcHBlbmRDaGlsZChjb25jSGVhZCk7XHJcbiAgICAgICAgY29uc3QgY29uY1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgY29uY1RleHQudGV4dENvbnRlbnQgPSBcIkF0IHRoZSBlbmQgb2YgdGhpcyBleHBlcmltZW50LCB0aGUgbGF0aGUgbWFjaGluZSB3YXMgdXNlZCB0byBwZXJmb3JtIHN0ZXAgdHVybmluZyBhbmQgdGFwZXIgdHVybmluZyBvbiB0aGUgZ2l2ZW4gd29ya3BpZWNlIGFuZCB1bmRlcnN0b29kIHNlcXVlbmNlIG9mIG9wZXJhdGlvbnMgb2YgdGhlIGxhdGhlIG1hY2hpbmUuXCI7XHJcbiAgICAgICAgY29uY2x1c2lvbi5hcHBlbmRDaGlsZChjb25jVGV4dCk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjb25jbHVzaW9uKTtcclxuICAgICAgICBjb25zdCByZWZlcmVuY2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IHJlZkhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIHJlZkhlYWQudGV4dENvbnRlbnQgPSBcIlJFRkVSRU5DRVNcIjtcclxuICAgICAgICByZWZlcmVuY2VzLmFwcGVuZENoaWxkKHJlZkhlYWQpO1xyXG4gICAgICAgIGNvbnN0IHJlZkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IFtcIlByb2R1Y3Rpb24gRW5naW5lZXJpbmcgTGFib3JhdG9yeSBNYW51YWwgZm9yIEVMQTIwMSBhbmQgRUxBMjAyIGJ5IERlcGFydG1lbnQgb2YgUHJvZHVjdGlvbiBFbmdpbmVlcmluZywgVW5pdmVyc2l0eSBvZiBCZW5pbi5cIiwgXCJNYWNoaW5lIFNob3AgUHJhY3RpY2UgYnkgS2FybCBNb2x0cmVjaHRcIiwgXCJMYXRoZSBPcGVyYXRpb24gYW5kIE1haW50ZW5hbmNlIGJ5IEpvaG4gRC4gTGF3c29uXCJdO1xyXG4gICAgICAgIGxldCByZWZCb3ggPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcmVmZXJlbmNlLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgcmVmQm94W2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgcmVmQm94W2ldLnRleHRDb250ZW50ID0gcmVmZXJlbmNlW2ldO1xyXG4gICAgICAgICAgICByZWZMaXN0LmFwcGVuZENoaWxkKHJlZkJveFtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlZmVyZW5jZXMuYXBwZW5kQ2hpbGQocmVmTGlzdCk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChyZWZlcmVuY2VzKTtcclxuICAgICAgICBjb25zdCBob3ZlciA9IGNyZWF0ZUhvdmVyKCcjJyk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChob3Zlcik7XHJcbiAgICAgICAgY29uc3QgZG93bmxvYWQgPSBjcmVhdGVEb3dubG9hZCgnIycpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoZG93bmxvYWQpO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IGRpc3BsYXlBUzIwMSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1haW4gPSByZXNldCgpO1xyXG4gICAgICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgIGhlYWQudGV4dENvbnRlbnQgID0gJ1RoZSBJbnRlcm5hbCBDb21idXN0aW9uIEVuZ2luZXtBUzIwMX0nO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoaGVhZCk7XHJcbiAgICAgICAgY29uc3Qgb2JqZWN0aXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IG9iakhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIG9iakhlYWQudGV4dENvbnRlbnQgPSAnT0JKRUNUSVZFUyc7XHJcbiAgICAgICAgb2JqZWN0aXZlLmFwcGVuZENoaWxkKG9iakhlYWQpO1xyXG4gICAgICAgIGNvbnN0IG9iakxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIGNvbnN0IG9iamVjdGl2ZXMgPSBbJ1RvIGtub3cgdGhlIG1ham9yIHBhcnRzIG9mIGFuIGludGVybmFsIGNvbWJ1c3Rpb24gZW5naW5lIGFuZCB0aGVpciBmdW5jdGlvbnMuJywgJ1RvIGtub3cgdGhlIGRpZmZlcmVudCBjbGFzc2lmaWNhdGlvbnMgb2YgdGhlIGludGVybmFsIGNvbWJ1c3Rpb24gZW5naW5lJywgICAnVG8gYmUgYWJsZSB0byBkZXNjcmliZSB0aGUgd29ya2luZyBjeWNsZSBvZiBhIGZvdXItIHN0cm9rZS1jeWNsZSBpbnRlcm5hbCBjb21idXN0aW9uIHNwYXJrIGlnbml0aW9uIGVuZ2luZSBhbmQgY29tcHJlc3Npb24gaWduaXRpb24gZW5naW5lJywgJ1RvIGJlIGFibGUgdG8gZGlhZ25vc2Ugc2ltcGxlIGludGVybmFsIGNvbWJ1c3Rpb24gZW5naW5lIGZhdWx0cycsICdUbyBrbm93IGhvdyB0byBjaGFuZ2UgdGhlIGVuZ2luZSBvaWwgb2YgYW4gaW50ZXJuYWwgY29tYnVzdGlvbiBlbmdpbmUnLCAnVG8gYmUgYWJsZSB0byBpZGVudGlmeSB0aGUgdG9vbHMgdXNlZCB0byBlZmZlY3QgcmVwYWlycyBvbiBhbiBpbnRlcm5hbCBjb21idXN0aW9uIGVuZ2luZScsICAnVG8ga25vdyB0aGUgcm91dGluZSBjaGVja3MgYW5kIHJvdXRpbmUgbWFpbnRlbmFuY2UgY2FycmllZCBvdXQgb24gYW4gaW50ZXJuYWwgY29tYnVzdGlvbiBlbmdpbmUnXTtcclxuICAgICAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBvYmplY3RpdmVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgbGlzdFtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIGxpc3RbaV0udGV4dENvbnRlbnQgPSBvYmplY3RpdmVzW2ldO1xyXG4gICAgICAgICAgICBvYmpMaXN0LmFwcGVuZENoaWxkKGxpc3RbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYmplY3RpdmUuYXBwZW5kQ2hpbGQob2JqTGlzdCk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChvYmplY3RpdmUpO1xyXG4gICAgICAgIGNvbnN0IGVuZ2luZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGVuZ2luZUhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIGVuZ2luZUhlYWQudGV4dENvbnRlbnQgPSAnVEhFIElOVEVSTkFMIENPTUJVU1RJT04gRU5HSU5FIEFORCBUSEUgUEFSVFMgT0YgQU4gSU5URVJOQUwgQ09NQlVTVElPTiBFTkdJTkUnO1xyXG4gICAgICAgIGVuZ2luZURpdi5hcHBlbmRDaGlsZChlbmdpbmVIZWFkKTtcclxuICAgICAgICBjb25zdCBlbmdpbmVQaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBpbWcxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgaW1nMS5zcmMgPXBpYzE7XHJcbiAgICAgICAgaW1nMS5hbHQgPSAnJztcclxuICAgICAgICBlbmdpbmVQaWMuYXBwZW5kQ2hpbGQoaW1nMSk7XHJcbiAgICAgICAgY29uc3QgaW1nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGltZzIuc3JjID0gcGljMjtcclxuICAgICAgICBpbWcyLmFsdCA9ICcnO1xyXG4gICAgICAgIGVuZ2luZVBpYy5hcHBlbmRDaGlsZChpbWcyKTtcclxuICAgICAgICBlbmdpbmVEaXYuYXBwZW5kQ2hpbGQoZW5naW5lUGljKTtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGVuZ2luZURpdik7XHJcbiAgICAgICAgY29uc3QgdGhlb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IGV4cGxhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBleHBsYWluLnRleHRDb250ZW50ID0gJ0FuIGludGVybmFsIGNvbWJ1c3Rpb24gZW5naW5lIChJQ0UpIGlzIGEgdHlwZSBvZiBlbmdpbmUgd2hlcmUgdGhlIGZ1ZWwgaXMgYnVybmVkIGluc2lkZSB0aGUgZW5naW5lIGl0c2VsZiwgY3JlYXRpbmcgaG90IGdhc2VzIHRoYXQgcHVzaCBwaXN0b25zIG9yIHR1cmJpbmVzLiBUaGlzIGNyZWF0ZXMgbW90aW9uIHRoYXQgY2FuIGJlIHVzZWQgdG8gcG93ZXIgdmVoaWNsZXMsIGdlbmVyYXRvcnMsIGFuZCBvdGhlciBtYWNoaW5lcy5JbnRlcm5hbCBjb21idXN0aW9uIGVuZ2luZXMgZmFsbCBpbnRvIHR3byBwcmltYXJ5IGNhdGVnb3JpZXM6IGNvbXByZXNzaW9uLWlnbml0aW9uIChDSSkgZW5naW5lcyBhbmQgc3BhcmstaWduaXRpb24gKFNJKSBlbmdpbmVzIGFuZCBhbHNvIHRoZSBib3R0b20gZGVhZCBjZW50cmUsIHRvcCBkZWFkIGNlbnRyZSBhbmQgdGhlIGNvbWJ1c3Rpb24gY2hhbWJlciBhcmUgZXhwbGFpbmVkIGJlbG93Oic7XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKGV4cGxhaW4pO1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgIHRpdGxlOiAnU3BhcmstaWduaXRpb24gZW5naW5lcycsXHJcbiAgICAgICAgdGV4dDogJ1NwYXJrIHBsdWdzIGFyZSB1c2VkIGFuZCBzcGFyay1pZ25pdGlvbiBlbmdpbmVzIGFyZSBhbHNvIGNvbW1vbmx5IHJlZmVycmVkIHRvIGFzIGdhc29saW5lIGVuZ2luZXMsIHRvIGlnbml0ZSB0aGUgZnVlbC1haXIgbWl4dHVyZSBhbmQgLiBUaGUgY29tYnVzdGlvbiBwcm9jZXNzIGNyZWF0ZXMgcHJlc3N1cmUgdGhhdCBkcml2ZXMgcGlzdG9ucywgd2hpY2ggdWx0aW1hdGVseSBwb3dlciB0aGUgdmVoaWNsZS4nLFxyXG4gICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIHRpdGxlOiAnQ29tYnVzdGlvbiBpZ25pdGlvbiBlbmdpbmVzJyxcclxuICAgICAgICB0ZXh0OiAnVGhlIGZ1ZWwtYWlyIGNvbWJpbmF0aW9uIGlzIGlnbml0ZWQgYW5kIHRoaXMgZW5naW5lIGlzIGNvbW1vbmx5IHJlZmVycmVkIHRvIGFzIGRpZXNlbCBlbmdpbmVzLCBieSB0aGUgaGVhdCBvZiBjb21wcmVzc2lvbiwgdGhlc2UgZW5naW5lcyBjb21wcmVzcyBvbmx5IGFpciBpbiB0aGUgY29tYnVzdGlvbiBjaGFtYmVyLCByYWlzaW5nIGl0cyB0ZW1wZXJhdHVyZSB0byB0aGUgcG9pbnQgd2hlcmUgZGllc2VsIGZ1ZWwgaW5qZWN0ZWQgaW50byB0aGUgY2hhbWJlciBpZ25pdGVzIHNwb250YW5lb3VzbHkuIFRoaXMgY29tYnVzdGlvbiBkcml2ZXMgdGhlIGVuZ2luZVxcJ3MgcGlzdG9ucy4nLFxyXG4gICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIHRpdGxlOiAnVG9wIGRlYWQgY2VudHJlJyxcclxuICAgICAgICB0ZXh0OiAnVGhlIHBvc2l0aW9uIG9mIHRoZSBwaXN0b24gd2l0aGluIHRoZSBjeWxpbmRlciBhdCB0aGUgaGlnaGVzdCBwb2ludCBvZiBpdHMgc3Ryb2tlIGlzIHJlZmVycmVkIHRvIGFzIHRvcCBkZWFkIGNlbnRlci4gVGhpcyByZWZlcnMgdG8gdGhlIHBvc2l0aW9uIG9mIHRoZSBwaXN0b24gaW4gYW4gZW5naW5lIGN5bGluZGVyIHdoZXJlIGl0IGlzIGZhcnRoZXN0IGF3YXkgZnJvbSB0aGUgY3JhbmtzaGFmdC4gSXRcXCdzIGVzc2VudGlhbGx5IHRoZSBoaWdoZXN0IHBvaW50IHRoZSBwaXN0b24gcmVhY2hlcyBpbiBpdHMgdXAtYW5kLWRvd24gbW90aW9uIHdpdGhpbiB0aGUgY3lsaW5kZXInLFxyXG4gICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIHRpdGxlOiAnQm90dG9tIGRlYWQgY2VudHJlJyxcclxuICAgICAgICB0ZXh0OiAnSXRcXCdzIHRoZSBwb3NpdGlvbiBvZiB0aGUgcGlzdG9uIGluIHRoZSBjeWxpbmRlciB3aGVuIGl0XFwncyBjbG9zZXN0IHRvIHRoZSBjcmFua3NoYWZ0LiBJbiBvdGhlciB3b3JkcywgaXRcXCdzIHRoZSBsb3dlc3QgcG9pbnQgdGhlIHBpc3RvbiByZWFjaGVzIGluIGl0cyBtb3ZlbWVudC5JdCByZWZlcnMgdG8gdGhlIHBvc2l0aW9uIG9mIHRoZSBwaXN0b24gYXQgdGhlIGxvd2VzdCBwb2ludCBvZiBpdHMgc3Ryb2tlIHdpdGhpbiB0aGUgY3lsaW5kZXIuIEF0IHRoZSBib3R0b20gZGVhZCBjZW50cmUsIHRoZSBwaXN0b24gaXMgZmFydGhlc3QgYXdheSBmcm9tIHRoZSBjeWxpbmRlciBoZWFkLCBhbmQgdGhlIHZvbHVtZSBvZiB0aGUgY29tYnVzdGlvbiBjaGFtYmVyIGlzIGF0IGl0cyBsYXJnZXN0LicsXHJcbiAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdDb21idXN0aW9uIGNoYW1iZXInLFxyXG4gICAgICAgIHRleHQ6ICdUaGUgcGFydCBvZiB0aGUgY3lsaW5kZXIgd2hlcmUgdGhlIGNvbXByZXNzZWQgYW5kIGlnbml0ZWQgYWlyLWZ1ZWwgbWl4dHVyZSBwcm9kdWNlcyBwb3dlciBpcyBjYWxsZWQgdGhlIGNvbWJ1c3Rpb24gY2hhbWJlci4gSXQgaXMgbWFkZSB1cCBvZiB0aGUgZ2FwIHRoYXQgZXhpc3RzIGJldHdlZW4gdGhlIGN5bGluZGVyIGhlYWQgYW5kIHRoZSB0b3Agb2YgdGhlIHBpc3RvbiBhdCB0aGUgdG9wIGRlYWQgY2VudHJlLiBJbiB0aGlzIGNoYW1iZXIsIHRoZSBidXJuaW5nIG9mIHRoZSBhaXItZnVlbCBtaXh0dXJlIGluIHRoZSBjb21idXN0aW9uIGNoYW1iZXIgY3JlYXRlcyBob3QgZ2FzZXMgdGhhdCBwdXNoIHRoZSBwaXN0b24gZG93biwgZ2VuZXJhdGluZyB0aGUgcG93ZXIgdGhhdCBkcml2ZXMgdGhlIGVuZ2luZS4nLFxyXG4gICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjYXRlZ29yaWVzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoY3JlYXRlRGl2cyhpdGVtKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnVGhlIGludGVybmFsIGNvbWJ1c3Rpb24gZW5naW5lIGNvbnNpc3RzIG9mIHZhcmlvdXMgcGFydHMgYW5kIHNvbWUgb2YgdGhlc2UgcGFydHMgYXJlIGxpc3RlZCBiZWxvdzogJztcclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xyXG4gICAgICAgIGNvbnN0IHBhcnRzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ01haW4gZW5naW5lIGJsb2NrJyxcclxuICAgICAgICB0ZXh0OiAnVGhlIGVuZ2luZSBibG9jayBpcyB0aGUgY29yZSBvZiB0aGUgZW5naW5lLiBJdFxcJ3MgYSBsYXJnZSBjYXN0IGlyb24gb3IgYWx1bWludW0gYmxvY2sgdGhhdCBob3VzZXMgdGhlIGN5bGluZGVycywgcGlzdG9ucywgY3JhbmtzaGFmdCwgYW5kIG90aGVyIGNyaXRpY2FsIGNvbXBvbmVudHMuIEl0IHByb3ZpZGVzIHRoZSBzdHJ1Y3R1cmUgYW5kIHN1cHBvcnQgZm9yIHRoZSBlbnRpcmUgZW5naW5lIGFzc2VtYmx5LicsXHJcbiAgICAgICAgaW1hZ2U6IHBpYzNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ0N5bGluZGVycycsXHJcbiAgICAgICAgdGV4dDogJ0N5bGluZGVycyBhcmUgdGhlIGNoYW1iZXJzIHdpdGhpbiB0aGUgZW5naW5lIGJsb2NrIHdoZXJlIHRoZSBjb21idXN0aW9uIHByb2Nlc3MgKGJ1cm5pbmcgb2YgYWlyLWZ1ZWwgbWl4dHVyZSkgdGFrZXMgcGxhY2UuIFBpc3RvbnMgbW92ZSB1cCBhbmQgZG93biB3aXRoaW4gdGhlIGN5bGluZGVycy4gVGhlIG51bWJlciBvZiBjeWxpbmRlcnMgdmFyaWVzIGRlcGVuZGluZyBvbiB0aGUgZW5naW5lIGRlc2lnbiwgd2l0aCBtb3JlIGN5bGluZGVycyB0eXBpY2FsbHkgaW5kaWNhdGluZyBhIG1vcmUgcG93ZXJmdWwgZW5naW5lLicsXHJcbiAgICAgICAgaW1hZ2U6IHBpYzRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ1Bpc3RvbnMnLFxyXG4gICAgICAgIHRleHQ6ICdJbnNpZGUgdGhlIGN5bGluZGVycywgcGlzdG9ucyBhcmUgY3lsaW5kcmljYWwgcGFydHMgdGhhdCBtb3ZlIHVwIGFuZCBkb3duLiBEdXJpbmcgdGhlIGNvbXByZXNzaW9uIHN0cm9rZSwgdGhleSBjb21wcmVzcyB0aGUgYWlyLWZ1ZWwgbWl4dHVyZSwgYW5kIGR1cmluZyB0aGUgcG93ZXIgc3Ryb2tlLCB0aGV5IHRyYW5zZmVyIHRoZSBjb21idXN0aW9uIGZvcmNlIHRvIHRoZSBjcmFua3NoYWZ0LiBUaHJvdWdoIGNvbm5lY3Rpbmcgcm9kcywgdGhlIGNyYW5rc2hhZnQgYW5kIHBpc3RvbnMgYXJlIGpvaW5lZC4nLFxyXG4gICAgICAgIGltYWdlOiBwaWM1XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdDb25uZWN0aW5nIHJvZHMnLFxyXG4gICAgICAgIHRleHQ6ICdDb25uZWN0aW5nIHJvZHMgYXJlIHRoZSBsaW5rIGJldHdlZW4gdGhlIHBpc3RvbnMgYW5kIHRoZSBjcmFua3NoYWZ0LiBUaGV5IGNvbnZlcnQgdGhlIHJlY2lwcm9jYXRpbmcgKHVwLWFuZC1kb3duKSBtb3Rpb24gb2YgdGhlIHBpc3RvbnMgaW50byB0aGUgcm90YXRpbmcgbW90aW9uIG9mIHRoZSBjcmFua3NoYWZ0LicsXHJcbiAgICAgICAgaW1hZ2U6IHBpYzZcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ0NhbXNoYWZ0JyxcclxuICAgICAgICB0ZXh0OiAnaXMgdGhlIHNoYWZ0IHRoYXQgcmVndWxhdGVzIHRoZSB2YWx2ZXNcXCcgb3BlbmluZyBhbmQgc2h1dHRpbmcuIEl0cyBlbGV2YXRlZCBwb3J0aW9ucywgb3IgbG9iZXMsIGV4ZXJ0IHByZXNzdXJlIG9uIHRoZSB2YWx2ZSBsaWZ0ZXJzLCB3aGljaCBjYXVzZXMgdGhlIHZhbHZlcyB0byBvcGVuLiBWaWEgYSB0aW1pbmcgYmVsdCBvciBjaGFpbiwgdGhlIGNyYW5rc2hhZnQgZHJpdmVzIHRoZSBjYW1zaGFmdC4nLFxyXG4gICAgICAgIGltYWdlOiBwaWM3XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdDcmFua3NoYWZ0JyxcclxuICAgICAgICB0ZXh0OiAnVGhlIGNyYW5rc2hhZnQgaXMgYSByb3RhdGluZyBzaGFmdCB0aGF0IHNpdHMgYXQgdGhlIGJvdHRvbSBvZiB0aGUgZW5naW5lIGJsb2NrLiBJdCByZWNlaXZlcyB0aGUgcmVjaXByb2NhdGluZyBtb3Rpb24gZnJvbSB0aGUgY29ubmVjdGluZyByb2RzIGFuZCBjb252ZXJ0cyBpdCBpbnRvIHJvdGFyeSBtb3Rpb24uIFRoaXMgcm90YXRpb25hbCBtb3Rpb24gaXMgdGhlbiB1c2VkIHRvIHBvd2VyIHRoZSB3aGVlbHMgb2YgYSB2ZWhpY2xlIG9yIHRvIGRyaXZlIG90aGVyIG1hY2hpbmVzLicsXHJcbiAgICAgICAgaW1hZ2U6IHBpYzhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ1NwYXJrIFBsdWdzJyxcclxuICAgICAgICB0ZXh0OiAnU3BhcmsgcGx1Z3MgYXJlIHVzZWQgaW4gc3BhcmstaWduaXRpb24gKFNJKSBlbmdpbmVzIHRvIGlnbml0ZSB0aGUgYWlyLWZ1ZWwgbWl4dHVyZS4gVGhleSBjcmVhdGUgYSBzcGFyayB0aGF0IGlnbml0ZXMgdGhlIG1peHR1cmUsIGluaXRpYXRpbmcgdGhlIGNvbWJ1c3Rpb24gcHJvY2Vzcy4nLFxyXG4gICAgICAgIGltYWdlOiBwaWM5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdWYWx2ZXMnLFxyXG4gICAgICAgIHRleHQ6ICdWYWx2ZXMgYXJlIHNwcmluZy1sb2FkZWQgbWVjaGFuaXNtcyB0aGF0IGNvbnRyb2wgdGhlIGZsb3cgb2YgYWlyIGFuZCBmdWVsIGludG8gYW5kIG91dCBvZiB0aGUgY3lsaW5kZXJzLiBUaGVyZSBhcmUgdHlwaWNhbGx5IHR3byB2YWx2ZXMgcGVyIGN5bGluZGVyOiBvbmUgaW50YWtlIHZhbHZlIGFuZCBvbmUgZXhoYXVzdCB2YWx2ZS4gVGhlIGNhbXNoYWZ0IG9wZW5zIGFuZCBjbG9zZXMgdGhlIHZhbHZlcyBhdCBzcGVjaWZpYyBwb2ludHMgaW4gdGhlIGVuZ2luZSBjeWNsZS4nLFxyXG4gICAgICAgIGltYWdlOiBwaWMxMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICBwYXJ0cy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKGNyZWF0ZURpdnMoaXRlbSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHdvcmtpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgd29ya2luZy50ZXh0Q29udGVudCA9ICdUaGUgY29yZSB3b3JraW5nIHByaW5jaXBsZSBvZiB0aGUgbWFqb3JpdHkgb2YgY29udGVtcG9yYXJ5IGludGVybmFsIGNvbWJ1c3Rpb24gZW5naW5lcyBpcyB0aGUgZm91ci1zdHJva2UgY3ljbGUsIHNvbWV0aW1lcyByZWZlcnJlZCB0byBhcyB0aGUgT3R0byBjeWNsZSBhZnRlciBpdHMgY3JlYXRvciBOaWtvbGF1cyBPdHRvLiBJdCBpcyBtYWRlIHVwIG9mIGZvdXIgc2VwYXJhdGUgcGlzdG9uIHN0cm9rZXMgb3IgbW92ZW1lbnRzIHRoYXQgZWFjaCBoYXZlIGEgZGVmaW5pdGUgZnVuY3Rpb24gaW4gdGhlIGNvbWJ1c3Rpb24gcHJvY2VzcyBpbnNpZGUgdGhlIGVuZ2luZSBjeWxpbmRlci4nO1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZCh3b3JraW5nKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBzdHJva2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgc3Ryb2tlLnRleHRDb250ZW50ID0gJ0EgZm91ci1zdHJva2UgY3ljbGUgaXMgY29tbW9ubHkgdXNlZCBieSBib3RoIHNwYXJrLWlnbml0aW9uIChTSSkgYW5kIHRoZSBjb21idXN0aW9uIGlnbml0aW9uIChDSSkgZW5naW5lcyBkaXNjdXNzZWQgYWJvdmUgYnJpZWZseSB0byB0cmFuc2Zvcm0gZnVlbCBpbnRvIHVzZWZ1bCBlbmVyZ3kuIFRoaXMgY29uc2lzdHMgb2YgOic7XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKHN0cm9rZSk7XHJcbiAgICAgICAgY29uc3Qgc3Ryb2tlcyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdJbnRha2Ugc3Ryb2tlJyxcclxuICAgICAgICB0ZXh0OiAnQXMgdGhlIHBpc3RvbiBkZXNjZW5kcywgZnVlbCBhbmQgYWlyIGFyZSBkcmF3biBpbnRvIHRoZSBjeWxpbmRlci4gSXQgaXMgYSBtaXh0dXJlIG9mIGZ1ZWwgKGluIGdhc29saW5lIGVuZ2luZXMpIG9yIGFpciAoaW4gZGllc2VsIGVuZ2luZXMpIGlzIGRyYXduIGludG8gdGhlIGN5bGluZGVyIHRocm91Z2ggdGhlIGludGFrZSB2YWx2ZS4gVGhpcyBjcmVhdGVzIGEgY29tYnVzdGlibGUgbWl4dHVyZSBpbiB0aGUgY29tYnVzdGlvbiBjaGFtYmVyLicsXHJcbiAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdDb21wcmVzc2lvbiBzdHJva2UnLFxyXG4gICAgICAgIHRleHQ6ICdBcyB0aGUgcGlzdG9uIHJpc2VzLCB0aGUgZnVlbCBhbmQgYWlyIG1peHR1cmUgYXJlIGNvbXByZXNzZWQgYW5kIHRoaXMgY29tcHJlc3Npb24gaW5jcmVhc2VzIHRoZSBwcmVzc3VyZSBhbmQgdGVtcGVyYXR1cmUgb2YgdGhlIG1peHR1cmUsIG1ha2luZyBpdCBtb3JlIGNvbWJ1c3RpYmxlIGFuZCBlZmZpY2llbnQgdG8gYnVybi4nLFxyXG4gICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIHRpdGxlOiAnQ29tYnVzdGlvbi9wb3dlciBzdHJva2UnLFxyXG4gICAgICAgIHRleHQ6ICdJbiBhIHNwYXJrIGlnbml0aW9uIChTSSkgZW5naW5lLCB0aGUgYWlyLWZ1ZWwgY29tYmluYXRpb24gaXMgaWduaXRlZCBieSB0aGUgc3BhcmsgcGx1ZzsgaW4gYSBjb21idXN0aW9uIGlnbml0aW9uIChDSSkgZW5naW5lLCB0aGUgbWl4dHVyZSBpcyBpZ25pdGVkIGJ5IHRoZSBoZWF0IG9mIGNvbXByZXNzaW9uIGFuZCB0aGUgcmVzdWx0aW5nIGV4cGxvc2lvbiByYXBpZGx5IGluY3JlYXNlcyBwcmVzc3VyZSB3aXRoaW4gdGhlIGN5bGluZGVyLCBkcml2aW5nIHRoZSBwaXN0b24gZm9yY2VmdWxseSBiYWNrIGRvd24uIFRoaXMgZG93bndhcmQgbW92ZW1lbnQgaXMgd2hhdCBnZW5lcmF0ZXMgdGhlIHBvd2VyIG5lZWRlZCB0byB0dXJuIHRoZSBlbmdpbmVcXCdzIGNyYW5rc2hhZnQuIFRoaXMgcmVzdWx0cyBpbiB0aGUgcmFwaWQgZXhwYW5zaW9uIG9mIGhvdCBnYXNzZXMuJyxcclxuICAgICAgICBpbWFnZTogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ0V4aGF1c3Qgc3Ryb2tlJyxcclxuICAgICAgICB0ZXh0OiAnQXMgdGhlIHBpc3RvbiBkZXNjZW5kcywgdGhlIGN5bGluZGVyXFwncyBleGhhdXN0IGdhc3NlcyBhcmUgZm9yY2VkIG91dCBhcyB0aGUgcGlzdG9uIHJlYWNoZXMgdGhlIGJvdHRvbSBvZiBpdHMgc3Ryb2tlIGFnYWluLCB0aGUgZXhoYXVzdCB2YWx2ZSBvcGVucywgYW5kIHRoZSBwaXN0b24gbW92ZXMgYmFjayB1cCB0aGUgY3lsaW5kZXIuIFRoaXMgdXB3YXJkIG1vdmVtZW50IGV4cGVscyB0aGUgc3BlbnQgZXhoYXVzdCBnYXNlcyBmcm9tIHRoZSBjb21idXN0aW9uIGNoYW1iZXIgdGhyb3VnaCB0aGUgZXhoYXVzdCB2YWx2ZSwgcHJlcGFyaW5nIHRoZSBjeWxpbmRlciBmb3IgdGhlIG5leHQgY3ljbGUuJyxcclxuICAgICAgICBpbWFnZTogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgc3Ryb2tlcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKGNyZWF0ZURpdnMoaXRlbSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHRleHQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHRleHQxLnRleHRDb250ZW50ID0gJ1dhdGNoIGhvdyB0aGUgZm91ciBjeWNsZSBzdHJva2Ugd29ya3MgYW5kIGhvdyB0aGUgaW50ZXJuYWwgY29tYnVzdGlvbiBlbmdpbmUgd29ya3MnO1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZCh0ZXh0MSk7XHJcbiAgICAgICAgY29uc3QgdmlkZW8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdmlkZW8xLmlubmVySFRNTCA9ICc8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUtbm9jb29raWUuY29tL2VtYmVkL1pRdmZIeWZnQnRBP3NpPU9FSFMyVGc2Y2t2bHBhR0pcIiB0aXRsZT1cIllvdVR1YmUgdmlkZW8gcGxheWVyXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlOyB3ZWItc2hhcmVcIiByZWZlcnJlcnBvbGljeT1cInN0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW5cIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+JztcclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQodmlkZW8xKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBoZWFkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgaGVhZDEudGV4dENvbnRlbnQgPSAnQXBwbGljYXRpb25zIG9mIGFuIGludGVybmFsIGNvbWJ1c3Rpb24gZW5naW5lIGluY2x1ZGU6JztcclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoaGVhZDEpO1xyXG4gICAgICAgIGNvbnN0IGFwcGxpY2F0aW9ucyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdUcmFuc3BvcnRhdGlvbicsXHJcbiAgICAgICAgdGV4dDogJ0ludGVybmFsIGNvbWJ1c3Rpb24gZW5naW5lcyBhcmUgbW9zdCBmcmVxdWVudGx5IHVzZWQgdG8gcG93ZXIgYXV0b21vYmlsZXMuIEF1dG9tb2JpbGVzLCB0cnVja3MsIG1vdG9yYmlrZXMsIHNjb290ZXJzLCBhbmQgZXZlbiBhaXJwbGFuZXMgKHdpdGggcGlzdG9uIGVuZ2luZXMpIGZhbGwgd2l0aGluIHRoaXMgY2F0ZWdvcnkuJyxcclxuICAgICAgICBpbWFnZTogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ1Bvd2VyIGdlbmVyYXRpb24nLFxyXG4gICAgICAgIHRleHQ6ICdTdGF0aW9uYXJ5IGFwcGxpY2F0aW9ucyB1dGlsaXppbmcgaW50ZXJuYWwgY29tYnVzdGlvbiBlbmdpbmVzIGNhbiBwcm92aWRlIGVuZXJneS4gVGhlc2UgYXJlIHZlcnkgaGVscGZ1bCBhcyBiYWNrdXAgcG93ZXIgZ2VuZXJhdG9ycyBpbiBkaXN0YW50IGxvY2F0aW9ucy4nLFxyXG4gICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIHRpdGxlOiAnQWlyY3JhZnQnLFxyXG4gICAgICAgIHRleHQ6ICdNYW55IGFpcmNyYWZ0LCBwYXJ0aWN1bGFybHkgc21hbGxlciBnZW5lcmFsIGF2aWF0aW9uIHBsYW5lcywgcmVseSBvbiBpbnRlcm5hbCBjb21idXN0aW9uIGVuZ2luZXMgZm9yIHByb3B1bHNpb24uIFRoZXNlIGVuZ2luZXMgbWF5IHJ1biBvbiBhdmlhdGlvbiBnYXNvbGluZSAoYXZnYXMpIG9yIGpldCBmdWVsLicsXHJcbiAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdNYXJpbmUnLFxyXG4gICAgICAgIHRleHQ6ICdJbnRlcm5hbCBjb21idXN0aW9uIGVuZ2luZXMgYXJlIHVzZWQgaW4gYm9hdHMsIHNoaXBzLCBhbmQgb3RoZXIgbWFyaW5lIHZlc3NlbHMgZm9yIHByb3B1bHNpb24uIFRoZXkgY2FuIHJ1biBvbiBnYXNvbGluZSwgZGllc2VsLCBvciBhbHRlcm5hdGl2ZSBmdWVscyBzdWNoIGFzIGxpcXVlZmllZCBuYXR1cmFsIGdhcyAoTE5HKS4nLFxyXG4gICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICBhcHBsaWNhdGlvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZChjcmVhdGVEaXZzKGl0ZW0pKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBpbnRlcm5hbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBpbnRlcm5hbC50ZXh0Q29udGVudCA9ICdBbiBpbnRlcm5hbCBjb21idXN0aW9uIGVuZ2luZSBpcyBtZWFudCB0byBiZSBjaGVja2VkIHJlZ3VsYXJseSBhbmQgYWxzbyB1bmRlcmdvIHNvbWUgbWFpbnRlbmFuY2Ugd2hpY2ggaW5jbHVkZTonO1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZChpbnRlcm5hbCk7XHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIGNoZWNrLnRleHRDb250ZW50ID0gJ1JPVVRJTkUgQ0hFQ0tTOic7XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKGNoZWNrKTtcclxuICAgICAgICBjb25zdCBjaGVja0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrcyA9IFsnQ2hlY2sgdGhlIGJhdHRlcnkgdGVybWluYWxzIGZvciBjb3Jyb3Npb24gYW5kIGVuc3VyZSB0aGV5IGFyZSB0aWdodCBhbmQgc2VjdXJlIGFuZCB0ZXN0IHRoZSBiYXR0ZXJ5IHZvbHRhZ2UgYW5kIGNoYXJnaW5nIHN5c3RlbSB0byBlbnN1cmUgcHJvcGVyIG9wZXJhdGlvbi4nLCAnQ2hlY2sgdGhlIG9pbCBsZXZlbCB1c2luZyB0aGUgZGlwc3RpY2sgYW5kIHRvcCB1cCBpZiBuZWNlc3NhcnkuIEFsc28sIG1vbml0b3IgdGhlIG9pbCBjb25kaXRpb24gYW5kIHNjaGVkdWxlIHJlZ3VsYXIgb2lsIGNoYW5nZXMuJywgJ0NoZWNrIHRoZSBjb25kaXRpb24gb2YgYmVsdHMgYW5kIGhvc2VzIGZvciBjcmFja3MsIHdlYXIsIG9yIGxvb3NlIGNvbm5lY3Rpb25zLiBDcmFja2VkIG9yIHdvcm4gYmVsdHMgYW5kIGhvc2VzIGNhbiBicmVhayBhbmQgbGVhZCB0byBlbmdpbmUgcHJvYmxlbXMnLCAnTG9vayBhcm91bmQgYW5kIGNoZWNrIHRoZSBlbmdpbmUgY29tcGFydG1lbnQgZm9yIGFueSBzaWducyBvZiBsZWFrcywgaW5jbHVkaW5nIG9pbCwgY29vbGFudCwgb3Igb3RoZXIgZmx1aWRzLiBMZWFrcyBjYW4gaW5kaWNhdGUgcG90ZW50aWFsIHByb2JsZW1zIGFuZCBzaG91bGQgYmUgYWRkcmVzc2VkIHByb21wdGx5LicsICdJbnNwZWN0IGFuZCBjaGVjayB0aGUgYmVsdHMgZm9yIHdlYXIsIGNyYWNrcywgb3IgZnJheWluZy4gUmVwbGFjZSB3b3JuIG9yIGRhbWFnZWQgYmVsdHMgdG8gcHJldmVudCB1bmV4cGVjdGVkIGZhaWx1cmVzLiddO1xyXG4gICAgICAgIGxldCBhcnJheSA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjaGVja3MubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBhcnJheVtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIGFycmF5W2ldLnRleHRDb250ZW50ID0gY2hlY2tzW2ldO1xyXG4gICAgICAgICAgICBjaGVja0xpc3QuYXBwZW5kQ2hpbGQoYXJyYXlbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoY2hlY2tMaXN0KTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBtYWludGFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgbWFpbnRhaW4udGV4dENvbnRlbnQgPSAnUk9VVElORSBNQUlOVEVOQU5DRTonO1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZChtYWludGFpbik7XHJcbiAgICAgICAgY29uc3QgbWFpbnRhaW5MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICBjb25zdCBtYWludGVuYW5jZSA9IFsnUmVndWxhcmx5IGNoYW5nZSB0aGUgZW5naW5lIG9pbCBhbmQgb2lsIGZpbHRlciBhY2NvcmRpbmcgdG8gdGhlIG1hbnVmYWN0dXJlclxcJ3MgcmVjb21tZW5kZWQgaW50ZXJ2YWxzLiBGcmVzaCBvaWwgbHVicmljYXRlcyBlbmdpbmUgY29tcG9uZW50cywgcmVkdWNlcyB3ZWFyLCBhbmQgaGVscHMgbWFpbnRhaW4gZW5naW5lIHBlcmZvcm1hbmNlLicsICdSZWd1bGFybHkgcmVwbGFjZSB0aGUgZW5naW5lIGFpciBmaWx0ZXIgYXQgcmVndWxhciBpbnRlcnZhbHMgdG8gZW5zdXJlIHByb3BlciBhaXJmbG93IGFuZCBmaWx0cmF0aW9uLiBBIGNsZWFuIGFpciBmaWx0ZXIgaGVscHMgb3B0aW1pemUgZW5naW5lIHBlcmZvcm1hbmNlIGFuZCBmdWVsIGVmZmljaWVuY3kuJywnUmVndWxhcmx5IHJlcGxhY2UgdGhlIGZ1ZWwgZmlsdGVyIHRvIHByZXZlbnQgZnVlbCBzeXN0ZW0gY29udGFtaW5hdGlvbiBhbmQgbWFpbnRhaW4gcHJvcGVyIGZ1ZWwgZmxvdy4nLCAnUmVndWxhcmx5IHJlcGxhY2Ugc3BhcmsgcGx1Z3MgYXQgdGhlIHJlY29tbWVuZGVkIGludGVydmFscyB0byBlbnN1cmUgcmVsaWFibGUgaWduaXRpb24gYW5kIGVmZmljaWVudCBjb21idXN0aW9uIGJlY2F1c2Ugd29ybiBvciBmb3VsZWQgc3BhcmsgcGx1Z3MgY2FuIGxlYWQgdG8gcG9vciBlbmdpbmUgcGVyZm9ybWFuY2UgYW5kIHJlZHVjZWQgZnVlbCBlZmZpY2llbmN5LicsICdSZWd1bGFybHkgcmVwbGFjZSB0aGUgdGltaW5nIGJlbHQgb3IgdGltaW5nIGNoYWluIHRvIHByZXZlbnQgZW5naW5lIGRhbWFnZSBkdWUgdG8gdGltaW5nIHN5c3RlbSBmYWlsdXJlLiddO1xyXG4gICAgICAgIGxldCBib3ggPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbWFpbnRlbmFuY2UubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBib3hbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICBib3hbaV0udGV4dENvbnRlbnQgPSBtYWludGVuYW5jZVtpXTtcclxuICAgICAgICAgICAgbWFpbnRhaW5MaXN0LmFwcGVuZENoaWxkKGJveFtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZChtYWludGFpbkxpc3QpO1xyXG4gICAgICAgIGNvbnN0IHRvb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gICAgICAgIHRvb2wudGV4dENvbnRlbnQgPSAnRkVXIFRPT0xTIFVTRUQgVE8gRUZGRUNUIFJFUEFJUlMgT04gQU4gSU5URVJOQUwgQ09NQlVTVElPTiBFTkdJTkU6JztcclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQodG9vbCk7XHJcbiAgICAgICAgY29uc3QgdG9vbHMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnU2NyZXdkcml2ZXJzJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdOZWVkZWQgZm9yIHZhcmlvdXMgc2NyZXdpbmcgYW5kIHByeWluZyB0YXNrcyBkdXJpbmcgZW5naW5lIHJlcGFpcnMuJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWMxMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0hhbW1lcicsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnQSBydWJiZXIgbWFsbGV0IGlzIHByZWZlcmFibGUgdG8gYXZvaWQgZGFtYWdpbmcgZW5naW5lIHBhcnRzLCBidXQgYSBzdGFuZGFyZCBtZXRhbCBoYW1tZXIgbWF5IGFsc28gYmUgbmVlZGVkIGZvciBzb21lIHRhc2tzLicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljMTJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdUb3JxdWUgV3JlbmNoJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdUaGlzIHdyZW5jaCBhbGxvd3MgZm9yIGFwcGx5aW5nIGEgc3BlY2lmaWMgYW1vdW50IG9mIHRvcnF1ZSB3aGVuIHRpZ2h0ZW5pbmcgZmFzdGVuZXJzLCBjcnVjaWFsIHRvIHByZXZlbnQgb3ZlciB0aWdodGVuaW5nIG9yIHVuZGVyLXRpZ2h0ZW5pbmcgY3JpdGljYWwgZW5naW5lIGNvbXBvbmVudHMuJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWMxM1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1BsaWVycycsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnVXNlZnVsIGZvciBncmlwcGluZywgdHVybmluZywgYW5kIG1hbmlwdWxhdGluZyBjb21wb25lbnRzIGR1cmluZyBlbmdpbmUgd29yay4nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzE0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRnVubmVsJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdVc2VkIGZvciBhZGRpbmcgZmx1aWRzIGxpa2UgZW5naW5lIG9pbCBvciBjb29sYW50IHdpdGhvdXQgc3BpbGxzLicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljMTVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTcGFubmVyJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdpcyBhIG1ldGFsIHRvb2wgdXNlZCB0byBncmlwIGFuZCB0dXJuIG51dHMsIGJvbHRzLCBhbmQgb3RoZXIgZmFzdGVuZXJzLicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljMTZcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdDYXIgamFjazonLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ0EgY2FyIGphY2sgaXMgYSBtZWNoYW5pY2FsIGRldmljZSB1c2VkIHRvIGxpZnQgdmVoaWNsZXMgb2ZmIHRoZSBncm91bmQgdG8gZmFjaWxpdGF0ZSBtYWludGVuYW5jZSwgcmVwYWlycywgdGlyZSBjaGFuZ2VzLCBhbmQgb3RoZXIgdGFza3MuJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWMxN1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdG9vbHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoY3JlYXRlRGl2cyhpdGVtKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHN0ZXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIHN0ZXAudGV4dENvbnRlbnQgPSAnU1RFUFMgVEFLRU4gVE8gQ0hBTkdFIFRIRSBPSUwgSU4gQU4gSU5URVJOQUwgQ09NQlVTVElPTiBFTkdJTkUnO1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZChzdGVwKTtcclxuICAgICAgICBjb25zdCBzdGVwTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgY29uc3Qgc3RlcHMgPSBbXCJHZXQgdGhlIHN1cHBsaWVzIHlvdSdsbCBuZWVkLCBzdWNoIGFzIGVuZ2luZSBvaWwgKHRoZSBraW5kIGFuZCB2aXNjb3NpdHkgdGhhdCB0aGUgbWFudWZhY3R1cmVyIHJlY29tbWVuZHMpLCBhIGZyZXNoIG9pbCBmaWx0ZXIsIGEgd3JlbmNoIG9yIHNvY2tldCBzZXQgdG8gcmVtb3ZlIHRoZSBkcmFpbiBwbHVnIGFuZCBvaWwgZmlsdGVyLCBhIGRyYWluIHBhbiB0byBjYXRjaCB0aGUgdXNlZCBvaWwsIGFuZCBwcm90ZWN0aXZlIGdsb3ZlcyBhbmQgc2FmZXR5IGdsYXNzZXMuXCIsXCJQdXQgdGhlIGNhciBpbiBwYXJrIG9uIGEgbGV2ZWwgYXJlYSBhbmQgYXBwbHkgdGhlIHBhcmtpbmcgYnJha2UuIE1ha2Ugc3VyZSB0aGUgZW5naW5lIGlzIGNvb2wgdG8gcHJldmVudCBob3Qgb2lsIGJ1cm5zLiBUbyBhY2Nlc3MgdGhlIHVuZGVyYmVsbHksIGxpZnQgdGhlIGNhciBpZiBuZWVkZWQgdXNpbmcgamFja3Mgb3IgcmFtcHMuXCIsXCJMb29rIGJlbmVhdGggdGhlIGVuZ2luZSB0byBmaW5kIHRoZSBvaWwgZHJhaW4gcGx1Zy4gSWYgeW91J3JlIG5vdCBzdXJlIHdoZXJlIGl0IGlzIGV4YWN0bHksIGNoZWNrIHRoZSBvd25lcidzIG1hbnVhbC4gVG8gY29sbGVjdCB0aGUgc3BlbnQgb2lsLCBwbGFjZSB0aGUgZHJhaW4gcGFuIHVuZGVybmVhdGggdGhlIGRyYWluIHBsdWcuXCIsXCJDYXJlZnVsbHkgcmVtb3ZlIHRoZSBvaWwgZHJhaW4gcGx1ZyBieSB0dXJuaW5nIGl0IGNvdW50ZXIgY2xvY2t3aXNlIHdpdGggYSB3cmVuY2ggb3Igc29ja2V0IHNldC4gS2VlcCBpbiBtaW5kIHRoYXQgdGhlIG9pbCBjb3VsZCBiZSBoZWF0ZWQuIEFmdGVyIHRoZSBkcmFpbiBzdG9wcGVyIGlzIGxvb3NlLCBmdWxseSByZW1vdmUgaXQgYW5kIGxldCB0aGUgb2xkIG9pbCBydW4gb3V0IGludG8gdGhlIGRyYWluIHBhbi4gTWFrZSBzdXJlIHRoYXQgYWxsIG9mIHRoZSBvaWwgaXMgY2FwdHVyZWQgYnkgdGhlIGRyYWluIHBhbi5cIiwgXCJMb2NhdGUgdGhlIG9pbCBmaWx0ZXIsIHR5cGljYWxseSBsb2NhdGVkIG5lYXIgdGhlIG9pbCBwYW4uIFVzZSBhbiBvaWwgZmlsdGVyIHdyZW5jaCB0byBsb29zZW4gdGhlIG9pbCBmaWx0ZXIgaW4gYSBjb3VudGVyIGNsb2Nrd2lzZSBkaXJlY3Rpb24uIE9uY2UgbG9vc2VuZWQsIGNhcmVmdWxseSB1bnNjcmV3IGFuZCByZW1vdmUgdGhlIG9sZCBvaWwgZmlsdGVyLiBCZSBwcmVwYXJlZCBmb3Igb2lsIHRvIHNwaWxsIG91dCB3aGVuIHJlbW92aW5nIHRoZSBmaWx0ZXIsIHNvIGVuc3VyZSB0aGUgZHJhaW4gcGFuIGlzIHBvc2l0aW9uZWQgdG8gY2F0Y2ggYW55IHNwaWxscy5cIiwgXCJBcHBseSBhIHNtYWxsIGxheWVyIG9mIGZyZXNoIGVuZ2luZSBvaWwgdG8gdGhlIHJ1YmJlciBnYXNrZXQgb24gdGhlIG5ldyBvaWwgZmlsdGVyIGJlZm9yZSBpbnN0YWxsaW5nIGl0LiBUaGlzIGZhY2lsaXRhdGVzIHRoZSBjcmVhdGlvbiBvZiBhIGdvb2Qgc2VhbCBhbmQgbWFrZXMgcmVtb3ZhbCBzaW1wbGVyIHdoZW4gdGhlIG5leHQgb2lsIGNoYW5nZSBpcyBwZXJmb3JtZWQuXCIsIFwiQ2FyZWZ1bGx5IHNjcmV3IHRoZSBuZXcgb2lsIGZpbHRlciBvbnRvIHRoZSBlbmdpbmUgYnkgaGFuZCBpbiBhIGNsb2Nrd2lzZSBkaXJlY3Rpb24gdW50aWwgaXQgaXMgc251Zy4gQXZvaWQgb3Zlci10aWdodGVuaW5nIHRoZSBmaWx0ZXIsIGFzIHRoaXMgY2FuIGRhbWFnZSB0aGUgZ2Fza2V0IG9yIGNhdXNlIGxlYWtzLlwiLCBcIkFmdGVyIHRoZSBvbGQgb2lsIGhhcyBjb21wbGV0ZWx5IGRyYWluZWQsIGNsZWFuIHRoZSBkcmFpbiBwbHVnIGFuZCBsb29rIGZvciBhbnkgZGFtYWdlIHRvIHRoZSB3YXNoZXIgb3IgZ2Fza2V0LiBJZiByZXF1aXJlZCwgc3dhcCBvdXQgdGhlIGdhc2tldCBvciB3YXNoZXIuIFVzaW5nIGEgd3JlbmNoIG9yIHNvY2tldCBzZXQsIGNhcmVmdWxseSByZWluc3RhbGwgdGhlIGRyYWluIHBsdWcgYW5kIHRpZ2h0ZW4gaXQgZmlybWx5LlwiLCBcIkZpbmQgYW5kIHRha2Ugb2ZmIHRoZSBvaWwgZmlsbGVyIGNhcCBsb2NhdGVkIGF0b3AgdGhlIGVuZ2luZS4gQXMgZGlyZWN0ZWQgYnkgdGhlIG1hbnVmYWN0dXJlciBhbmQgY29udGFpbmVkIGluIHRoZSBvd25lcidzIG1hbnVhbCwgdXNlIGEgZnVubmVsIHRvIGFkZCB0aGUgcmlnaHQga2luZCBhbmQgcXVhbnRpdHkgb2YgbmV3IGVuZ2luZSBvaWwuXCIsIFwiQWZ0ZXIgYWRkaW5nIG5ldyBvaWwsIHJlcGxhY2UgdGhlIG9pbCBmaWxsZXIgY2FwIHNlY3VyZWx5LiBTdGFydCB0aGUgZW5naW5lIGFuZCBsZXQgaXQgcnVuIGZvciBhIGZldyBtaW51dGVzIHRvIGNpcmN1bGF0ZSB0aGUgbmV3IG9pbCB0aHJvdWdob3V0IHRoZSBlbmdpbmUuIFR1cm4gb2ZmIHRoZSBlbmdpbmUgYW5kIGFsbG93IGl0IHRvIHNpdCBmb3IgYSBmZXcgbWludXRlcyB0byBhbGxvdyB0aGUgb2lsIHRvIHNldHRsZVwiLFxyXG4gICAgICAgICBcIlRvIGNoZWNrIHRoZSBvaWwgbGV2ZWwsIHJlbW92ZSB0aGUgb2lsIGRpcHN0aWNrIHdoaWxlIHRoZSBlbmdpbmUgaXMgb2ZmLCBjbGVhbiBpdCwgZnVsbHkgaW5zZXJ0IGl0IGFnYWluLCBhbmQgdGhlbiByZW1vdmUgaXQgb25jZSBhZ2Fpbi4gSWYgZXh0cmEgb2lsIGlzIG5lZWRlZCB0byBnZXQgaXQgdG8gdGhlIHJpZ2h0IGxldmVsLCBhZGQgaXQuXCIsIFwiUHJvcGVybHkgZGlzcG9zZSBvZiB0aGUgb2xkIG9pbCBhbmQgb2lsIGZpbHRlciBhY2NvcmRpbmcgdG8gbG9jYWwgcmVndWxhdGlvbnMuIE1hbnkgYXV0byBwYXJ0cyBzdG9yZXMgYW5kIHJlY3ljbGluZyBjZW50ZXJzIGFjY2VwdCB1c2VkIG9pbCBmb3IgcmVjeWNsaW5nLlwiXTtcclxuICAgICAgICBsZXQgc3RlcEJveCA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzdGVwcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHN0ZXBCb3hbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICBzdGVwQm94W2ldLnRleHRDb250ZW50ID0gc3RlcHNbaV07XHJcbiAgICAgICAgICAgIHN0ZXBMaXN0LmFwcGVuZENoaWxkKHN0ZXBCb3hbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoc3RlcExpc3QpO1xyXG4gICAgICAgIGNvbnN0IHRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHRleHQyLnRleHRDb250ZW50ID0gJ1dhdGNoIGhvdyB0byBjaGFuZ2UgdGhlIG9pbCBvZiBhbiBpbnRlcm5hbCBjb21idXN0aW9uIGVuZ2luZSBvZiBhIGNhcic7XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKHRleHQyKTtcclxuICAgICAgICBjb25zdCB2aWRlbzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB2aWRlbzIuaW5uZXJIVE1MID0gJzxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS1ub2Nvb2tpZS5jb20vZW1iZWQvTzFoRjI1Q293djg/c2k9M3gtbjd1UU9QRWdERUs0cVwiIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmU7IHdlYi1zaGFyZVwiIHJlZmVycmVycG9saWN5PVwic3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpblwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nO1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZCh2aWRlbzIpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQodGhlb3J5KTtcclxuICAgICAgICBjb25zdCBwcmVjYXV0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IGNhdXRpb25IZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBjYXV0aW9uSGVhZC50ZXh0Q29udGVudCA9IFwiUFJFQ0FVVElPTlNcIjtcclxuICAgICAgICBwcmVjYXV0aW9uLmFwcGVuZENoaWxkKGNhdXRpb25IZWFkKTtcclxuICAgICAgICBjb25zdCBjYXV0aW9uTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgY29uc3QgcHJlY2F1dGlvbnMgPSBbXCJJIGVuc3VyZWQgdGhhdCBJIHdvcmUgbXkgbGFiIGNvYXQgYW5kIHBlcnNvbmFsIHByb3RlY3RpdmUgZXF1aXBtZW50IChQUEUpXCIsIFwiSSBlbnN1cmVkIHRoYXQgYmVmb3JlIHBlcmZvcm1pbmcgYW55IG1haW50ZW5hbmNlIG9yIHJlcGFpcnMsIGFsbG93IHRoZSBlbmdpbmUgdG8gY29vbCBkb3duIHRvIHByZXZlbnQgYnVybnMgZnJvbSBob3QgZW5naW5lIGNvbXBvbmVudHMsIGV4aGF1c3QgZ2FzZXMsIG9yIGZsdWlkc1wiLCBcIkkgRW5zdXJlZCB0aGF0IEkgcmVhZCBhbmQgdW5kZXJzdGFuZCB0aGUgbWFudWZhY3R1cmVyJ3MgaW5zdHJ1Y3Rpb25zIGFuZCBzYWZldHkgZ3VpZGVsaW5lcyBwcm92aWRlZCBpbiB0aGUgb3duZXIncyBtYW51YWwgb3Igc2VydmljZSBtYW51YWwgYmVmb3JlIHBlcmZvcm1pbmcgYW55IG1haW50ZW5hbmNlIG9yIHJlcGFpcnMuXCJdO1xyXG4gICAgICAgIGxldCBjYXV0aW9uQm94ID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByZWNhdXRpb25zLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgY2F1dGlvbkJveFtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIGNhdXRpb25Cb3hbaV0udGV4dENvbnRlbnQgPSBwcmVjYXV0aW9uc1tpXTtcclxuICAgICAgICAgICAgY2F1dGlvbkxpc3QuYXBwZW5kQ2hpbGQoY2F1dGlvbkJveFtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByZWNhdXRpb24uYXBwZW5kQ2hpbGQoY2F1dGlvbkxpc3QpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQocHJlY2F1dGlvbik7XHJcbiAgICAgICAgY29uc3QgY29uY2x1c2lvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCBjb25jSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgY29uY0hlYWQudGV4dENvbnRlbnQgPSBcIkNPTkNMVVNJT046XCI7XHJcbiAgICAgICAgY29uY2x1c2lvbi5hcHBlbmRDaGlsZChjb25jSGVhZCk7XHJcbiAgICAgICAgY29uc3QgY29uY1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgY29uY1RleHQudGV4dENvbnRlbnQgPSBcIkF0IHRoZSBlbmQgb2YgdGhpcyBleHBlcmltZW50LCB0aGUgcGFydHMgb2YgdGhlIGludGVybmFsIGNvbWJ1c3Rpb24gZW5naW5lIHdhcyB1bmRlcnN0b29kIGFuZCB3ZXJlIGlkZW50aWZpZWQgYW5kIGFsc28gaG93IHRoZSBpbnRlcm5hbCBjb21idXN0aW9uIGVuZ2luZSB3b3JrcyBhbmQgYWxzbyBob3cgdGhlIGZvdXIgY3ljbGUgc3Ryb2tlcyB3b3Jrcy5cIjtcclxuICAgICAgICBjb25jbHVzaW9uLmFwcGVuZENoaWxkKGNvbmNUZXh0KTtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGNvbmNsdXNpb24pO1xyXG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgcmVmSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgcmVmSGVhZC50ZXh0Q29udGVudCA9IFwiUkVGRVJFTkNFU1wiO1xyXG4gICAgICAgIHJlZmVyZW5jZXMuYXBwZW5kQ2hpbGQocmVmSGVhZCk7XHJcbiAgICAgICAgY29uc3QgcmVmTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlID0gW1wiUHJvZHVjdGlvbiBFbmdpbmVlcmluZyBMYWJvcmF0b3J5IE1hbnVhbCBmb3IgRUxBMjAxIGFuZCBFTEEyMDIgYnkgRGVwYXJ0bWVudCBvZiBQcm9kdWN0aW9uIEVuZ2luZWVyaW5nLCBVbml2ZXJzaXR5IG9mIEJlbmluLlwiLCBcIkJvc2NoIEF1dG9tb3RpdmUgSGFuZGJvb2sgYnkgUm9iZXJ0IEJvc2NoLlwiLCBcIkludGVybmFsIENvbWJ1c3Rpb24gRW5naW5lIEZ1bmRhbWVudGFscyBieSBKb2huIEhleXdvb2QuXCJdO1xyXG4gICAgICAgIGxldCByZWZCb3ggPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcmVmZXJlbmNlLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgcmVmQm94W2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgcmVmQm94W2ldLnRleHRDb250ZW50ID0gcmVmZXJlbmNlW2ldO1xyXG4gICAgICAgICAgICByZWZMaXN0LmFwcGVuZENoaWxkKHJlZkJveFtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlZmVyZW5jZXMuYXBwZW5kQ2hpbGQocmVmTGlzdCk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChyZWZlcmVuY2VzKTtcclxuICAgICAgICBjb25zdCBob3ZlciA9IGNyZWF0ZUhvdmVyKCcjJyk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChob3Zlcik7XHJcbiAgICAgICAgY29uc3QgZG93bmxvYWQgPSBjcmVhdGVEb3dubG9hZCgnIycpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoZG93bmxvYWQpO1xyXG59O1xyXG5jb25zdCBkaXNwbGF5RlMyMDEgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtYWluID0gcmVzZXQoKTtcclxuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgaGVhZC50ZXh0Q29udGVudCAgPSAnSW50cm9kdWN0aW9uIHRvIEZvdW5kcnkgU2hvcHtGUzIwMX0nO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChoZWFkKTtcclxuICAgIGNvbnN0IG9iamVjdGl2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgIGNvbnN0IG9iakhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgb2JqSGVhZC50ZXh0Q29udGVudCA9ICdPQkpFQ1RJVkVTJztcclxuICAgIG9iamVjdGl2ZS5hcHBlbmRDaGlsZChvYmpIZWFkKTtcclxuICAgIGNvbnN0IG9iakxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgY29uc3Qgb2JqZWN0aXZlcyA9IFsnVG8gdW5kZXJzdGFuZCB3aGF0IHBhdHRlcm5zIGFyZScsICdUbyBrbm93IHdoYXQgbW91bGRpbmcgc2FuZHMgYXJlJywgJ1RvIGZhbWlsaWFyaXplIHdpdGggdGhlIHRvb2xzIGFuZCBtYXRlcmlhbHMgdXNlZCBpbiBmb3VuZHJ5IHNob3AnLCAnVG8gcHJvZHVjZSBhIHNpbXBsZSBjYXN0J107XHJcbiAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG9iamVjdGl2ZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGxpc3RbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGxpc3RbaV0udGV4dENvbnRlbnQgPSBvYmplY3RpdmVzW2ldO1xyXG4gICAgICAgIG9iakxpc3QuYXBwZW5kQ2hpbGQobGlzdFtpXSk7XHJcbiAgICB9XHJcbiAgICBvYmplY3RpdmUuYXBwZW5kQ2hpbGQob2JqTGlzdCk7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKG9iamVjdGl2ZSk7XHJcbiAgICBjb25zdCBhcHBIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGFwcEhlYWQudGV4dENvbnRlbnQgPSAnQXBwYXJhdHVzJztcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoYXBwSGVhZCk7XHJcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnYXBwQm94Jyk7XHJcbiAgICAgICAgY29uc3QgYXBwYXJhdHVzID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdNb3VsZGluZyBCb3gnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzk4XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ0RyYXcgc3Bpa2VzJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWM5OVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdTd2FiJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWMxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnU2xpY2tzJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWMxMDFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnUmFtbWVycycsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljMTAyXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ1Nob3ZlbCcsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljMTAzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ0hhbmQgUmlkZGxlJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWMxMDRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnV2lyZSBCcnVzaCcsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljNzNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnRHJhZyBhbmQgY29wZSBib3hlcycsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljMTA1XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ1N0cmlrZSBvZmYgYmFyJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWMxMDZcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnTW91bGRpbmcgU2FuZCcsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljMTA3XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ1NwcnVlIFBpbnMnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzEwOFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdWZW50IFdpcmUnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzEwOVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdUcm93ZWwnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzExMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgbGV0IGFwcEJveCA9IFtdO1xyXG4gICAgICAgIGxldCBhcHBJbWFnZSA9IFtdO1xyXG4gICAgICAgIGxldCBhcHBDYXB0aW9uID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGFwcGFyYXR1cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGFwcEJveFtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBhcHBJbWFnZVtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICBhcHBDYXB0aW9uW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBhcHBJbWFnZVtpXS5zcmMgPSAgYXBwYXJhdHVzW2ldLmltYWdlO1xyXG4gICAgICAgICAgICBhcHBDYXB0aW9uW2ldLnRleHRDb250ZW50ID0gYXBwYXJhdHVzW2ldLmNhcDtcclxuICAgICAgICAgICAgYXBwQm94W2ldLmFwcGVuZENoaWxkKGFwcEltYWdlW2ldKTtcclxuICAgICAgICAgICAgYXBwQm94W2ldLmFwcGVuZENoaWxkKGFwcENhcHRpb25baV0pO1xyXG4gICAgICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGFwcEJveFtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoc2VjdGlvbik7XHJcbiAgICAgICAgY29uc3QgdGhlb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IHRoZW9IZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICB0aGVvSGVhZC50ZXh0Q29udGVudCA9ICdUSEVPUlknO1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZCh0aGVvSGVhZCk7XHJcbiAgICAgICAgY29uc3QgZXhwbGFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGV4cGxhaW4udGV4dENvbnRlbnQgPSAnSW4gZ2VuZXJhbCwgYSBmb3VuZHJ5IHNob3AgaXMgYSBwbGFjZSB3aGVyZSBtZXRhbCBjYXN0aW5nIG9wZXJhdGlvbnMgYXJlIGNvbmR1Y3RlZC4gTWV0YWwgaXMgaGVhdGVkIGluIGEgZm91bmRyeSBhbmQgdGhlbiBwb3VyZWQgaW50byBtb2xkcyB0byBtYWtlIGEgdmFyaWV0eSBvZiBjb21wb25lbnRzIG9yIHRoaW5ncy4gVGhlc2UgaXRlbXMgbWlnaHQgYmUgYW55dGhpbmcgZnJvbSBjb21wbGV4IHNjdWxwdHVyZXMgdG8gcGllY2VzIG9mIGluZHVzdHJpYWwgdGVjaG5vbG9neS4gRm91bmRyaWVzIGFyZSBlc3NlbnRpYWwgdG8gdGhlIGluZHVzdHJpYWwgc2VjdG9yIGJlY2F1c2UgdGhleSBvZmZlciB0aGUgdG9vbHMgbmVlZGVkIHRvIHByZWNpc2VseSBmb3JtIGludHJpY2F0ZSBtZXRhbCBzdHJ1Y3R1cmVzLiBUaGVyZSBtYXkgYmUgcG91cmluZywgbW9sZGluZywgbWVsdGluZywgYW5kIGZpbmlzaGluZyBwcm9jZWR1cmVzIGludm9sdmVkLiBCZWNhdXNlIG9mIHRoZSBoaWdoIHRlbXBlcmF0dXJlcyBhbmQgcG9zc2libHkgZGFuZ2Vyb3VzIG1hdGVyaWFscyBpbnZvbHZlZCwgc2FmZXR5IHByZWNhdXRpb25zIGFyZSBpbXBvcnRhbnQuIEZvdW5kcnkgc2hvcHMgYXJlIHZpdGFsIHRvIG1hbnkgaW5kdXN0cmllcywgc3VjaCBhcyBtYW51ZmFjdHVyaW5nLCBjb25zdHJ1Y3Rpb24sIGFlcm9zcGFjZSwgYW5kIGF1dG9tb3RpdmUsIHNpbmNlIHRoZXkgb2ZmZXIgdGhlIHRvb2xzIG5lY2Vzc2FyeSB0byBwcmVjaXNlbHkgZmFicmljYXRlIGludHJpY2F0ZSBtZXRhbCBjb21wb25lbnRzLiBCZWNhdXNlIG9mIHRoZSBleHRyZW1lIHRlbXBlcmF0dXJlcyBhbmQgcG90ZW50aWFsIGhhemFyZHMgYXNzb2NpYXRlZCB3aXRoIHRoZSBjYXN0aW5nIHByb2Nlc3MsIHRoZXNlIGZhY2lsaXRpZXMgcmVxdWlyZSBoaWdobHkgc2tpbGxlZCBwZXJzb25uZWwsIHN0YXRlLW9mLXRoZS1hcnQgZXF1aXBtZW50LCBhbmQgcmlnb3JvdXMgYWRoZXJlbmNlIHRvIHNhZmV0eSByZWd1bGF0aW9ucy4nO1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZChleHBsYWluKTtcclxuICAgICAgICBjb25zdCBleHBsYWluMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGV4cEhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIGV4cEhlYWQudGV4dENvbnRlbnQgPSAnUGF0dGVybnM6JztcclxuICAgICAgICBleHBsYWluMi5hcHBlbmRDaGlsZChleHBIZWFkKTtcclxuICAgICAgICBjb25zdCBleHBUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZXhwVGV4dC50ZXh0Q29udGVudCA9IFwiSW4gZm91bmRyeSBzaG9wLCB0aGVyZSBhcmUgYXJlIHBhdHRlcm5zIGFuZCBhIHBhdHRlcm4gaXMgZXNzZW50aWFsbHkgYSBtb2xkLW1ha2VyJ3MgbWFzdGVyIGNvcHkgaS5lIGEgcmVwbGljYSBvZiB0aGUgZmluYWwgbWV0YWwgb2JqZWN0IHRoZXkgd2FudCB0byBjcmVhdGUuIFRoaXMgcGF0dGVybiBpcyB1c2VkIHRvIGNyZWF0ZSBhIG5lZ2F0aXZlIGNhdml0eSBpbiB0aGUgc2FuZCBtb2xkLCB3aGljaCBpcyB0aGVuIGZpbGxlZCB3aXRoIG1vbHRlbiBtZXRhbC4gT25jZSB0aGUgbWV0YWwgY29vbHMgYW5kIHNvbGlkaWZpZXMsIHRoZSBzYW5kIG1vbGQgaXMgYnJva2VuIGF3YXksIGxlYXZpbmcgYmVoaW5kIHRoZSBmaW5pc2hlZCBjYXN0aW5nLiAgICBQYXR0ZXJucyBhcmUgdGVtcGxhdGVzIG9yIG1vZGVscyB0aGF0IGFyZSB1c2VkIHRvIGNyZWF0ZSB0aGUgbW9sZHMgaW50byB3aGljaCBtb2x0ZW4gbWV0YWwgaXMgcG91cmVkLlwiXHJcbiAgICAgICAgZXhwbGFpbjIuYXBwZW5kQ2hpbGQoZXhwVGV4dCk7XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKGV4cGxhaW4yKTtcclxuICAgICAgICBjb25zdCBoZWFkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgaGVhZDEudGV4dENvbnRlbnQgPSAnVHlwZXMgb2YgUGF0dGVybnM6JztcclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoaGVhZDEpO1xyXG4gICAgICAgIGNvbnN0IHRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHRleHQyLnRleHRDb250ZW50ID0gJ1RoZXJlIGFyZSBzZXZlcmFsIGRpZmZlcmVudCB0eXBlcyBvZiBmb3VuZHJ5IHBhdHRlcm5zLCBlYWNoIHN1aXRlZCBmb3IgZGlmZmVyZW50IGFwcGxpY2F0aW9ucy4gU29tZSBjb21tb24gdHlwZXMgaW5jbHVkZTonO1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZCh0ZXh0Mik7XHJcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRleHQuaW5uZXJIVE1MID0gYDxzcGFuPuKAoiBTaW5nbGUtcGllY2UgcGF0dGVybjo8L3NwYW4+ICBUaGlzIGlzIHRoZSBzaW1wbGVzdCB0eXBlIG9mIHBhdHRlcm4sIHN1aXRhYmxlIGZvciBzaW1wbGUgY2FzdGluZ3MuIFRoZSB5b3V0dWJlIGxpbmsgaWxsdXN0cmF0aW5nIHRoaXMgaXMgc2hvd24gYmVsb3dgO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgICAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBib3guaW5uZXJIVE1MID0gJzxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS1ub2Nvb2tpZS5jb20vZW1iZWQvVXYyOHRxQ090QWc/c2k9THVHM3hCSkhPeVN6Y1JJblwiIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmU7IHdlYi1zaGFyZVwiIHJlZmVycmVycG9saWN5PVwic3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpblwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChib3gpO1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICAgIGNvbnN0IGRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCB0ZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRleHQxLmlubmVySFRNTCA9IGA8c3Bhbj7igKIgU3BsaXQgcGF0dGVybjo8L3NwYW4+ICBUaGlzIHBhdHRlcm4gaXMgc3BsaXQgaW50byB0d28gb3IgbW9yZSBzZWN0aW9ucywgYWxsb3dpbmcgZm9yIHRoZSBjcmVhdGlvbiBvZiBtb3JlIGNvbXBsZXggY2FzdGluZ3Mgd2l0aCB1bmRlcmN1dHMgb3IgaW50ZXJpb3IgZmVhdHVyZXMuIFRoZSB5b3V0dWJlIGxpbmsgaWxsdXN0cmF0aW5nIHRoaXMgaXMgc2hvd24gYmVsb3dgO1xyXG4gICAgICAgIGRpdjEuYXBwZW5kQ2hpbGQodGV4dDEpO1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZChkaXYxKTtcclxuICAgICAgICBjb25zdCBib3gxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgYm94MS5pbm5lckhUTUwgPSAnPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLW5vY29va2llLmNvbS9lbWJlZC9jRmNTSk1SU3oxYz9zaT1sQ01BczA2b1lRUUw5MHRYXCIgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZTsgd2ViLXNoYXJlXCIgcmVmZXJyZXJwb2xpY3k9XCJzdHJpY3Qtb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPic7XHJcbiAgICAgICAgZGl2MS5hcHBlbmRDaGlsZChib3gxKTtcclxuICAgICAgICBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgdGV4dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0ZXh0My5pbm5lckhUTUwgPSBgPHNwYW4+4oCiIE1hdGNoLXBsYXRlIHBhdHRlcm46PC9zcGFuPiAgVGhpcyB0eXBlIG9mIHBhdHRlcm4gaXMgbW91bnRlZCBvbiBhIHBsYXRlLCB3aXRoIG9uZSBoYWxmIGZvcm1pbmcgdGhlIGNvcGUgKHVwcGVyKSBtb2xkIHNlY3Rpb24gYW5kIHRoZSBvdGhlciBoYWxmIGZvcm1pbmcgdGhlIGRyYWcgKGxvd2VyKSBtb2xkIHNlY3Rpb24uIE1hdGNoLXBsYXRlIHBhdHRlcm5zIGFyZSBlZmZpY2llbnQgZm9yIGhpZ2gtdm9sdW1lIHByb2R1Y3Rpb24gcnVucy5gO1xyXG4gICAgICAgIGRpdjIuYXBwZW5kQ2hpbGQodGV4dDMpO1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZChkaXYyKTtcclxuICAgICAgICBjb25zdCBleHBsYWluMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGV4cEhlYWQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBleHBIZWFkMS50ZXh0Q29udGVudCA9ICdNT1VMRElORyBTQU5EOic7XHJcbiAgICAgICAgZXhwbGFpbjMuYXBwZW5kQ2hpbGQoZXhwSGVhZDEpO1xyXG4gICAgICAgIGNvbnN0IGV4cFRleHQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZXhwVGV4dDEudGV4dENvbnRlbnQgPSBcIkZvdW5kcnkgc2FuZCwgc29tZXRpbWVzIHJlZmVycmVkIHRvIGFzIG1vbGRpbmcgc2FuZCwgaXMgYSBzcGVjaWFsbHkgcHJlcGFyZWQgc3Vic3RhbmNlIHRoYXQgZm91bmRyeSBzaG9wcyB1dGlsaXplIGR1cmluZyB0aGUgY2FzdGluZyBwcm9jZXNzLiBJdCBpcyB1c2VkIGFzIGEgbWVkaXVtIHRvIG1ha2UgbW9sZHMgdGhhdCBhcmUgZmlsbGVkIHdpdGggbW9sdGVuIG1ldGFsIHRvIGNyZWF0ZSBjYXN0aW5ncy4gQSBzcGVjaWFsbHkgZm9ybXVsYXRlZCBtaXh0dXJlLCB0eXBpY2FsbHkgY29uc2lzdGluZyBvZjpcIlxyXG4gICAgICAgIGV4cGxhaW4zLmFwcGVuZENoaWxkKGV4cFRleHQxKTtcclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoZXhwbGFpbjMpO1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdTaWxpY2Egc2FuZCcsXHJcbiAgICAgICAgICAgIHRleHQ6ICdUaGUgbWFpbiBpbmdyZWRpZW50LCB1c3VhbGx5IHNpbGljYS1iYXNlZCBidXQgc29tZXRpbWVzIG9saXZpbmUuJyxcclxuICAgICAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdCaW5kZXInLFxyXG4gICAgICAgICAgICB0ZXh0OiAnQ2xheSAoYmVudG9uaXRlIGNsYXkgaXMgY29tbW9uKSBvciBvdGhlciBtYXRlcmlhbHMgdGhhdCBhY3QgbGlrZSBnbHVlIHRvIGhvbGQgdGhlIHNhbmQgdG9nZXRoZXIuJyxcclxuICAgICAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdXYXRlcicsXHJcbiAgICAgICAgICAgIHRleHQ6ICdQcm92aWRlcyBtb2lzdHVyZSB0byBhY3RpdmF0ZSB0aGUgYmluZGVyIGFuZCBpbXByb3ZlIG1vbGRhYmlsaXR5LicsXHJcbiAgICAgICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnQWRkaXRpdmVzJyxcclxuICAgICAgICAgICAgdGV4dDogJ09wdGlvbmFsIGluZ3JlZGllbnRzIGxpa2UgY29hbCBkdXN0IGNhbiBlbmhhbmNlIGNlcnRhaW4gcHJvcGVydGllcy4nLFxyXG4gICAgICAgICAgICBpbWFnZTogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgY2F0ZWdvcmllcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZChjcmVhdGVEaXZzKGl0ZW0pKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgZXhwSGVhZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIGV4cEhlYWQyLnRleHRDb250ZW50ID0gJ0tJTkRTIE9GIE1PVUxESU5HIFNBTkQ6JztcclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoZXhwSGVhZDIpO1xyXG4gICAgICAgIGNvbnN0IHN0cm9rZXMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdHcmVlbiBTYW5kJyxcclxuICAgICAgICAgICAgdGV4dDogJ0dyZWVuIHNhbmQgaXMgdGhlIG1vc3Qgd2lkZWx5IHVzZWQgbW9sZGluZyBzYW5kIGluIGZvdW5kcmllcyBkdWUgdG8gaXRzIGF2YWlsYWJpbGl0eSwgbG93IGNvc3QsIGFuZCB2ZXJzYXRpbGl0eS4gSXQgY29uc2lzdHMgb2Ygc2lsaWNhIHNhbmQgbWl4ZWQgd2l0aCBjbGF5IChiZW50b25pdGUpIGFuZCB3YXRlci4gR3JlZW4gc2FuZCBtb2xkcyBhcmUgdHlwaWNhbGx5IHVzZWQgZm9yIGNhc3RpbmcgZmVycm91cyBhbmQgbm9uLWZlcnJvdXMgbWV0YWxzLiBUaGUgdGVybSBcImdyZWVuXCIgcmVmZXJzIHRvIHRoZSBmYWN0IHRoYXQgdGhlIHNhbmQgaXMgbW9pc3QgYW5kIGhhcyBub3QgYmVlbiBzdWJqZWN0ZWQgdG8gaGlnaCB0ZW1wZXJhdHVyZXMgdG8gY3VyZSBvciBoYXJkZW4uJyxcclxuICAgICAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdGYWNpbmcgc2FuZCcsXHJcbiAgICAgICAgICAgIHRleHQ6ICdBIHNwZWNpYWwgdHlwZSBvZiBzYW5kIHVzZWQgYXMgdGhlIHRvcCBsYXllciBvZiBhIG1vbGQsIGRpcmVjdGx5IGluIGNvbnRhY3Qgd2l0aCB0aGUgbW9sdGVuIG1ldGFsLiBGYWNpbmcgc2FuZCBuZWVkcyB0byB3aXRoc3RhbmQgaGlnaCB0ZW1wZXJhdHVyZXMgYW5kIHJlc2lzdCBlcm9zaW9uIGZyb20gdGhlIG1vbHRlbiBtZXRhbC4gSXQgaXMgdXN1YWxseSBtYWRlIG9mIHNpbGljYSBzYW5kIHdpdGggYSBoaWdoZXIgcmVmcmFjdG9yaW5lc3MgKGhlYXQgcmVzaXN0YW5jZSkgYW5kIGZpbmVyIGdyYWluIHNpemUgY29tcGFyZWQgdG8gZ3JlZW4gc2FuZC4nLFxyXG4gICAgICAgICAgICBpbWFnZTogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1BhcnRpbmcgc2FuZCcsXHJcbiAgICAgICAgICAgIHRleHQ6ICdBIGRyeSwgZmluZS1ncmFpbmVkIHNhbmQgdXNlZCB0byBwcmV2ZW50IHRoZSBjb3BlIGFuZCBkcmFnICh1cHBlciBhbmQgbG93ZXIgbW9sZCBzZWN0aW9ucykgZnJvbSBzdGlja2luZyB0b2dldGhlci4gSXQgaXMgc3ByaW5rbGVkIGFsb25nIHRoZSBwYXJ0aW5nIGxpbmUgb2YgdGhlIG1vbGQgd2hlcmUgdGhlIHR3byBoYWx2ZXMgbWVldC4gUGFydGluZyBzYW5kIHNob3VsZCBiZSBlYXN5IHRvIHNlcGFyYXRlIGZyb20gYm90aCB0aGUgY29wZSBhbmQgZHJhZyBhZnRlciBjYXN0aW5nLicsXHJcbiAgICAgICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnTG9hbXkgc2FuZCcsXHJcbiAgICAgICAgICAgIHRleHQ6ICdBIG1peHR1cmUgb2Ygc2FuZCwgY2xheSAoYXJvdW5kIDUwJSBjb250ZW50KSwgYW5kIHdhdGVyLiBEdWUgdG8gdGhlIGhpZ2ggY2xheSBjb250ZW50LCBsb2FtIHNhbmQgaXMgdmVyeSBwbGFzdGljIGFuZCBoYXMgZXhjZWxsZW50IG1vbGRhYmlsaXR5LiBJdCBpcyBvZnRlbiB1c2VkIGZvciBsYXJnZSBhbmQgaW50cmljYXRlIGNhc3RpbmdzIHdoZXJlIGEgZmluZXIgc3VyZmFjZSBmaW5pc2ggaXMgZGVzaXJlZC4gSG93ZXZlciwgbG9hbSBzYW5kIGhhcyBsb3dlciBzdHJlbmd0aCBjb21wYXJlZCB0byBvdGhlciB0eXBlcyBhbmQgcmVxdWlyZXMgZHJ5aW5nIGJlZm9yZSBwb3VyaW5nLicsXHJcbiAgICAgICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0RyeSBzYW5kJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdNYWRlIGZyb20gc2lsaWNhIHNhbmQgYW5kIGEgYmluZGVyLCBidXQgdW5saWtlIGdyZWVuIHNhbmQsIHRoZSBtb2lzdHVyZSBpcyByZW1vdmVkIGJ5IGRyeWluZyBvciBiYWtpbmcgdGhlIG1vbGQgYWZ0ZXIgaXQgaXMgc2hhcGVkLiBUaGlzIHByb2Nlc3Mgc3RyZW5ndGhlbnMgdGhlIG1vbGQgYW5kIGltcHJvdmVzIGl0cyBoZWF0IHJlc2lzdGFuY2UsIG1ha2luZyBpdCBzdWl0YWJsZSBmb3IgbGFyZ2VyIGFuZCBoZWF2aWVyIGNhc3RpbmdzLiBEcnkgc2FuZCBtb2xkcyBwcm9kdWNlIGNhc3RpbmdzIHdpdGggYmV0dGVyIGRpbWVuc2lvbmFsIGFjY3VyYWN5IGFuZCBzdXJmYWNlIGZpbmlzaCBjb21wYXJlZCB0byBncmVlbiBzYW5kLiBUaGUgZHJ5aW5nIHByb2Nlc3MgYWRkcyB0aW1lIGFuZCBlbmVyZ3kgY29uc3VtcHRpb24gdG8gdGhlIGNhc3RpbmcgcHJvY2Vzcy4nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIHN0cm9rZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoY3JlYXRlRGl2cyhpdGVtKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQodGhlb3J5KTtcclxuICAgICAgICBjb25zdCBwcmFjdGljYWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IHN0ZXAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICBzdGVwMS50ZXh0Q29udGVudCA9ICdQUkFDVElDQUwgMSA6IEhPVyBUTyBNQUtFIEEgTU9VTEQvTU9VTEQgTUFLSU5HJztcclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKHN0ZXAxKTtcclxuICAgICAgICBjb25zdCBzdGVwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgc3RlcDMudGV4dENvbnRlbnQgPSAnUFJPQ0VEVVJFOic7XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZChzdGVwMyk7XHJcbiAgICAgICAgY29uc3Qgc3RlcExpc3QxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICBjb25zdCBzdGVwczEgPSBbJ0ZpcnN0IGEgYm90dG9tIGJvYXJkIGlzIHBsYWNlZCBlaXRoZXIgb24gdGhlIG1vbGRpbmcgcGxhdGZvcm0gb3Igb24gdGhlIGZsb29yIG1ha2luZyB0aGUgc3VyZmFjZSBldmVuJywgJ1RoZSBkcmFnIG1vdWxkaW5nIGZsYXNrIGlzIGtlcHQgdXBzaWRlIGRvd24gb24gdGhlIGJvdHRvbSBib2FyZCBhbG9uZyB3aXRoIHRoZSBkcmFnIHBhcnQgb2YgdGhlIHBhdHRlcm4gYXQgdGhlIGNlbnRyZSBvZiB0aGUgZmxhc2sgb24gdGhlIGJvYXJkJywgJ0RyeSBmYWNpbmcgc2FuZCBpcyBzcHJpbmtsZWQgb3ZlciB0aGUgYm9hcmQgYW5kIHBhdHRlcm4gdG8gcHJvdmlkZSBhIG5vbiBzdGlja3kgbGF5ZXInLCAnRnJlc2hseSBwcmVwYXJlZCBtb3VsZGluZyBzYW5kIG9mIHJlcXVpc2l0ZSBxdWFsaXR5IGlzIG5vdyBwb3VyZWQgaW50byB0aGUgZHJhZyBhbmQgb24gdGhlIHBhdHRlcm4gdG8gYSB0aGlja25lc3Mgb2YgMzAgdG8gNTBtbS4nLCAnUmVzdCBvZiB0aGUgZHJhZyBmbGFzayBpcyBjb21wbGV0ZWx5IGZpbGxlZCB3aXRoIHRoZSBiYWNrdXAgc2FuZCBhbmQgdW5pZm9ybWx5IHJhbW1lZCB0byBjb21wYWN0IHRoZSBzYW5kJywgJ0FmdGVyIHRoZSByYW1taW5nIGlzIG92ZXIsIHRoZSBleGNlc3Mgc2FuZCBpbiB0aGUgZmxhc2sgaXMgY29tcGxldGVseSBzY3JhcGVkIHVzaW5nIGEgZmxhdCBiYXIgdG8gdGhlIGxldmVsIG9mIHRoZSBmbGFzayBlZGdlcycsICdOb3cgd2l0aCBhIHZlbnQgd2lyZSB3aGljaCBpcyBvZiAxIHRvIDIgbW0gZGlhbWV0ZXIgd2l0aCBhIHBvaW50ZWQgZW5kLCB2ZW50IGhvbGVzIGFyZSBpbiB0aGUgZHJhZyB0byB0aGUgZnVsbCBkZXB0aCBvZiB0aGUgZmxhc2sgYXMgd2VsbCBhcyB0byB0aGUgcGF0dGVybiB0byBmYWNpbGl0YXRlIHRoZSByZW1vdmFsIG9mIGdhc2VzIGR1cmluZyBjYXN0aW5nIHNvbGlkaWZpY2F0aW9uLiBUaGlzIGNvbXBsZXRlcyB0aGUgcHJlcGFyYXRpb24gb2YgdGhlIGRyYWcuJywgJ05vdyB0aGUgZmluaXNoZWQgZHJhZyBmbGFzayBpcyByb2xsZWQgb3ZlciB0byB0aGUgYm90dG9tIGJvYXJkIGV4cG9zaW5nIHRoZSBwYXR0ZXJuJywgJ1VzaW5nIGEgc2xpY2ssIHRoZSBlZGdlcyBvZiB0aGUgc2FuZCBhcm91bmQgdGhlIHBhdHRlcm4gaXMgcmVwYWlyZWQuJywgJ1RoZSBjb3BlIGZsYXNrIG9uIHRoZSB0b3Agb2YgdGhlIGRyYWcgaXMgbG9jYXRlZCBhbGlnbmluZyBhZ2FpbiB3aXRoIHRoZSBoZWxwIG9mIHRoZSBwaW5zIG9mIHRoZSBkcmFnIGJveC4nLCAnU3BydWUgb2YgdGhlIGdhdGluZyBzeXN0ZW0gZm9yIG1ha2luZyB0aGUgc3BydWUgcGFzc2FnZSBpcyBsb2NhdGVkIGF0IGEgc21hbGwgZGlzdGFuY2Ugb2YgYWJvdXQgNTBtbSBmcm9tIHRoZSBwYXR0ZXJuLiBUaGUgc3BydWUgYmFzZSwgcnVubmVycyBhbmQgdGhlIGluLWdhdGVzIGFyZSBhbHNvIGxvY2F0ZWQgYXMgc2hvd24gcmlzZXJzIGFyZSBhbHNvIHBsYWNlZC4gRnJlc2hseSBwcmVwYXJlZCBmYWNpbmcgc2FuZCBpcyBwb3VyZWQgYXJvdW5kIHRoZSBwYXR0ZXJuJywgJ1RoZSBtb3VsZGluZyBzYW5kIGlzIHRoZW4gcG91cmVkIGluIHRoZSBjb3BlIGJveC4gVGhlIHNhbmQgaXMgYWRlcXVhdGVseSByYW1tZWQsIGV4Y2VzcyBzYW5kIGlzIHNjcmFwZWQgYW5kIHZlbnQgaG9sZXMgYXJlIG1hZGUgYWxsIG92ZXIgaW4gdGhlIGNvcGUgYXMgaW4gdGhlIHJhZycsICdUaGUgc3BydWUgYW5kIHRoZSByaXNlciBhcmUgY2FyZWZ1bGx5IHdpdGhkcmF3biBmcm9tIHRoZSBmbGFzaycsICdMYXRlciB0aGUgcG91cmluZyBiYXNpbiBpcyBjdXQgbmVhciB0aGUgdG9wIG9mIHRoZSBzcHJ1ZS4nLCAnVGhlIGNvcGUgaXMgc2VwYXJhdGVkIGZyb20gdGhlIGRyYWcgYW55IGxvb3NlIHNhbmQgb24gdGhlIGNvcGUgYW5kIGRyYWcgaW50ZXJmYWNlIGlzIGJsb3duIG9mZiB3aXRoIHRoZSBoZWxwIG9mIHRoZSBiZWxsb3dzJywgJ05vdyB0aGUgY29wZSBhbmQgZHJhZyBwYXR0ZXJuIGhhbHZlcyBhcmUgd2l0aGRyYXduIGJ5IHVzaW5nIHRoZSBkcmF3IHNwaWtlcyBhbmQgcmFwcGluZyB0aGUgcGF0dGVybiBhbGwgYXJvdW5kIHRvIHNsaWdodGx5IGVubGFyZ2UgdGhlIG1vdWxkIGNhdml0eSBzbyB0aGF0IHRoZSB3YWxscyBhcmUgbm90IHNwb2lsZWQgYnkgdGhlIHdpdGhkcmF3aW5nIHBhdHRlcm4uJywgJ1RoZSBydW5uZXJzIGFuZCBnYXRlcyBhcmUgdG8gYmUgcmVtb3ZlZCBvciB0byBiZSBjdXQgaW4gdGhlIG1vdWxkIGNhcmVmdWxseSB3aXRob3V0IHNwb2lsaW5nIHRoZSBtb3VsZC4nLCAnQW55IGV4Y2VzcyBvciBsb29zZSBzYW5kIGlzIGFwcGxpZWQgaW4gdGhlIHJ1bm5lcnMgYW5kIG1vdWxkIGNhdml0eSBpcyBibG93biBhd2F5IHVzaW5nIHRoZSBiZWxsb3dzJywgJ05vdyB0aGUgZmFjaW5nIHBhc3RlIGlzIGFwcGxpZWQgYWxsIG92ZXIgdGhlIG1vdWxkIGNhdml0eSBhbmQgdGhlIHJ1bm5lcnMgd2hpY2ggd291bGQgZ2l2ZSB0aGUgZmluaXNoZWQgY2FzdGluZyBhIGdvb2Qgc3VyZmFjZSBmaW5pc2gnLCAnQSBkcnkgc2FuZCBjb3JlIGlzIHByZXBhcmVkIHVzaW5nIGEgY29yZSBib3guIEFmdGVyIHN1aXRhYmxlIGJha2luZywgaXQgaXMgcGxhY2VzIGluIHRoZSBtb3VsZCBjYXZpdHknLCAnVGhlIGNvcGUgaXMgcGxhY2VkIGJhY2sgb24gdGhlIGRyYWcgdGFraW5nIGNhcmUgb2YgdGhlIGFsaWdubWVudCBvZiB0aGUgdHdvIGJ5IG1lYW5zIG9mIHRoZSBwaW5zJywgJ1RoZSBtb3VsZCBpcyByZWFkeSBmb3IgcG91cmluZyBtb2x0ZW4gbWV0YWwuIFRoZSBsaXF1aWQgbWV0YWwgaXMgYWxsb3dlZCB0byBjb29sIGFuZCBiZWNvbWUgc29saWQgd2hpY2ggaXMgdGhlIGNhc3RpbmcgZGVzaXJlZC4nXTtcclxuICAgICAgICBsZXQgc3RlcEJveDEgPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3RlcHMxLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgc3RlcEJveDFbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICBzdGVwQm94MVtpXS50ZXh0Q29udGVudCA9IHN0ZXBzMVtpXTtcclxuICAgICAgICAgICAgc3RlcExpc3QxLmFwcGVuZENoaWxkKHN0ZXBCb3gxW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZChzdGVwTGlzdDEpO1xyXG4gICAgICAgIGNvbnN0IHRleHQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHRleHQ1LnRleHRDb250ZW50ID0gJ1dhdGNoIGhvdyB0byBwZXJmb3JtIHRoZSBtb3VsZCB1c2luZyBzb2xpZCBwYXR0ZXJuIHByYWN0aWNhbCBpcyBiZWxvdyDwn5GHJztcclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKHRleHQ1KTtcclxuICAgICAgICBjb25zdCB2aWRlbzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB2aWRlbzUuaW5uZXJIVE1MID0gJzxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS1ub2Nvb2tpZS5jb20vZW1iZWQvNlkySXhMZzZPWnM/c2k9bmduSXJnYmZVRm5lTFBLU1wiIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmU7IHdlYi1zaGFyZVwiIHJlZmVycmVycG9saWN5PVwic3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpblwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nO1xyXG4gICAgICAgIHByYWN0aWNhbHMuYXBwZW5kQ2hpbGQodmlkZW81KTtcclxuICAgICAgICBjb25zdCB2aWRlbzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB2aWRlbzYuaW5uZXJIVE1MID0gJzxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS1ub2Nvb2tpZS5jb20vZW1iZWQvODhzdFl3SGJJelk/c2k9Mjl4TWhwOS1KcGtkSVRtRFwiIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmU7IHdlYi1zaGFyZVwiIHJlZmVycmVycG9saWN5PVwic3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpblwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nO1xyXG4gICAgICAgIHByYWN0aWNhbHMuYXBwZW5kQ2hpbGQodmlkZW82KTtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHByYWN0aWNhbHMpO1xyXG4gICAgICAgIGNvbnN0IHByZWNhdXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgY2F1dGlvbkhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIGNhdXRpb25IZWFkLnRleHRDb250ZW50ID0gXCJQUkVDQVVUSU9OU1wiO1xyXG4gICAgICAgIHByZWNhdXRpb24uYXBwZW5kQ2hpbGQoY2F1dGlvbkhlYWQpO1xyXG4gICAgICAgIGNvbnN0IGNhdXRpb25MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICBjb25zdCBwcmVjYXV0aW9ucyA9IFtcIkkgZW5zdXJlZCB0aGF0IEkgd29yZSBteSBsYWIgY29hdCBhbmQgcGVyc29uYWwgcHJvdGVjdGl2ZSBlcXVpcG1lbnQgKFBQRSlcIixcIkkgZW5zdXJlZCB0aGF0IHByb3BlciB0b29sIGhhbmRsaW5nIHRvIGF2b2lkIGluanVyaWVzLlwiLFwiSSBFbnN1cmVkIHRoYXQgdGhlIHByb2NlZHVyZXMgd2VyZSBkdWVseSBmb2xsb3dlZCB0byBhdm9pZCBlcnJvcnNcIiwgXTtcclxuICAgICAgICBsZXQgY2F1dGlvbkJveCA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcmVjYXV0aW9ucy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGNhdXRpb25Cb3hbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICBjYXV0aW9uQm94W2ldLnRleHRDb250ZW50ID0gcHJlY2F1dGlvbnNbaV07XHJcbiAgICAgICAgICAgIGNhdXRpb25MaXN0LmFwcGVuZENoaWxkKGNhdXRpb25Cb3hbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcmVjYXV0aW9uLmFwcGVuZENoaWxkKGNhdXRpb25MaXN0KTtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHByZWNhdXRpb24pO1xyXG4gICAgICAgIGNvbnN0IGNvbmNsdXNpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgY29uY0hlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIGNvbmNIZWFkLnRleHRDb250ZW50ID0gXCJDT05DTFVTSU9OOlwiO1xyXG4gICAgICAgIGNvbmNsdXNpb24uYXBwZW5kQ2hpbGQoY29uY0hlYWQpO1xyXG4gICAgICAgIGNvbnN0IGNvbmNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbmNUZXh0LnRleHRDb250ZW50ID0gXCJBdCB0aGUgZW5kIG9mIHRoaXMgZXhwZXJpbWVudCwgYSBtb3VsZCB3YXMgY3JlYXRlZCB1c2luZyB0aGUgYXBwcm9wcmlhdGUgYXBwYXJhdHVzIGFuZCBhbHNvIHVzaW5nIHRoZSBzaW5nbGUvc29saWQgcGF0dGVyblwiO1xyXG4gICAgICAgIGNvbmNsdXNpb24uYXBwZW5kQ2hpbGQoY29uY1RleHQpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoY29uY2x1c2lvbik7XHJcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCByZWZIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICByZWZIZWFkLnRleHRDb250ZW50ID0gXCJSRUZFUkVOQ0VTXCI7XHJcbiAgICAgICAgcmVmZXJlbmNlcy5hcHBlbmRDaGlsZChyZWZIZWFkKTtcclxuICAgICAgICBjb25zdCByZWZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICBjb25zdCByZWZlcmVuY2UgPSBbXCJQcm9kdWN0aW9uIEVuZ2luZWVyaW5nIExhYm9yYXRvcnkgTWFudWFsIGZvciBFTEEyMDEgYW5kIEVMQTIwMiBieSBEZXBhcnRtZW50IG9mIFByb2R1Y3Rpb24gRW5naW5lZXJpbmcsIFVuaXZlcnNpdHkgb2YgQmVuaW4uXCIsIFwiRm91bmRyeSBUZWNobm9sb2d5IGJ5IEsgUCBTaW5oYSAmIEQgQiBHb2VsXCIsIFwiRm91bmRyeSBUZWNobm9sb2d5IGJ5IFAgUiBCZWVsZXlcIl07XHJcbiAgICAgICAgbGV0IHJlZkJveCA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByZWZlcmVuY2UubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICByZWZCb3hbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICByZWZCb3hbaV0udGV4dENvbnRlbnQgPSByZWZlcmVuY2VbaV07XHJcbiAgICAgICAgICAgIHJlZkxpc3QuYXBwZW5kQ2hpbGQocmVmQm94W2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVmZXJlbmNlcy5hcHBlbmRDaGlsZChyZWZMaXN0KTtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHJlZmVyZW5jZXMpO1xyXG4gICAgICAgIGNvbnN0IGhvdmVyID0gY3JlYXRlSG92ZXIoJyMnKTtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGhvdmVyKTtcclxuICAgICAgICBjb25zdCBkb3dubG9hZCA9IGNyZWF0ZURvd25sb2FkKCcjJyk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChkb3dubG9hZCk7XHJcbn07XHJcbmV4cG9ydCB7ZGlzcGxheVN0YXJ0ZWQsZGlzcGxheVdXMjAxLCBkaXNwbGF5RUUyMDYsIGRpc3BsYXlCRjIwMSwgZGlzcGxheUhTMjAxLCBkaXNwbGF5TVMyMDEgLGRpc3BsYXlBUzIwMSwgZGlzcGxheUZTMjAxfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=