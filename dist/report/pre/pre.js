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
/* harmony import */ var _RESOURCES_images_achieve_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../RESOURCES/images/achieve.png */ "./src/RESOURCES/images/achieve.png");






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


const displaySM201 = () => {
    const main = reset();
        const head = document.createElement('h1');
        head.textContent  = 'Introduction to sheet metal work{SM201}';
        main.appendChild(head);
        const objective = document.createElement('section');
        const objHead = document.createElement('h2');
        objHead.textContent = 'OBJECTIVES';
        objective.appendChild(objHead);
        const objList = document.createElement('ul');
        const objectives = ['To know the processes involved in sheet metal practice', 'To know the metals used in sheet metal practice', 'To familiarize with the various hand tools used in sheet metal practice','To know the various sheet metal operations', 'To produce a rectangular plate'];
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
                cap: 'Steel Scale',
                image: _RESOURCES_images_achieve_png__WEBPACK_IMPORTED_MODULE_0__
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
        explain.textContent = 'Sheet metal refers to thin, flat metal sheets that are typically less than 6mm (0.25 inches) thick. It is a versatile material used in various industries for a wide range of applications due to its strength, durability, and ease of shaping. Sheet metal is commonly made from materials such as steel, aluminum, brass, copper, tin, and nickel. Sheet metal work is the process of creating objects from thin sheets of metal. The metal is typically cut, bent, and shaped into the desired form. ';
        theory.appendChild(explain);
        const explain1 = document.createElement('div');
        explain1.textContent = 'There are different kinds of sheet metal techniques and these techniques or operations include:';
        theory.appendChild(explain1);
        const categories = [
            {
                title: 'Cutting',
                text: 'Sheets can be cut using various methods, including shearing, which involves using a cutting tool to trim the metal along a straight line, or laser cutting, which uses a focused laser beam to make precise cuts.',
                image: ''
            },
            {
                title: 'Bending',
                text: 'Bending is the process of deforming the sheet metal along a straight axis to create angles or complex shapes. This is usually done using specialized machines like press brakes.',
                image: ''
            },
            {
                title: 'Forming',
                text: 'Forming refers to shaping the sheet metal into three-dimensional forms other than flat sheets. This can be achieved through processes like roll forming, where the metal is passed through a series of rollers to create a desired shape.',
                image: ''
            },
            {
                title: 'Joining',
                text: 'Sheet metal components are often joined together using various methods such as welding, riveting, or using adhesives. Welding involves melting the metal at the joint to fuse them together, while riveting uses mechanical fasteners to hold the sheets in place.',
                image: ''
            },
            {
                title: 'Punching',
                text: 'Creating holes or perforations in metal sheets using a punch and die set, which applies force to penetrate the material etc.',
                image: ''
            },
            {
                title: 'Metal Forming',
                text: 'The process of shaping or bending a sheet metal in three dimensions to give it the desired shape and size of the final product is termed as metal forming.',
                image: ''
            },
            {
                title: 'Soldering',
                text: 'is a technique for joining metals together using a melted metal alloy with a lower melting point than the parts you are joining. This alloy, called solder, is typically made of tin and lead, but lead-free solders are becoming more common.',
                image: ''
            },
            ];
            categories.forEach((item) => {
            theory.appendChild(createDivs(item));
            });
        const description = document.createElement('p');
        description.textContent = 'Common metal sheets used in sheet metal work are:';
        theory.appendChild(description);
        const part = [
            {
            title: 'Black plain sheet or hot rolled sheet',
            text: '',
            image: _RESOURCES_images_achieve_png__WEBPACK_IMPORTED_MODULE_0__
            },
            {
            title: 'Cold rolled sheet (0.1 – 0.3% of carbon )',
            text: '',
            image: _RESOURCES_images_achieve_png__WEBPACK_IMPORTED_MODULE_0__
            },
            {
            title: 'Galvanized plain sheet',
            text: '',
            image: _RESOURCES_images_achieve_png__WEBPACK_IMPORTED_MODULE_0__
            },
            {
            title: 'Aluminum sheet',
            text: '',
            image: _RESOURCES_images_achieve_png__WEBPACK_IMPORTED_MODULE_0__
            },
            {
            title: 'Copper sheet',
            text: '',
            image: _RESOURCES_images_achieve_png__WEBPACK_IMPORTED_MODULE_0__
            },
            {
            title: 'Tin sheet',
            text: '',
            image: _RESOURCES_images_achieve_png__WEBPACK_IMPORTED_MODULE_0__
            },
            {
            title: 'Stainless steel sheet (contains 18% Chromium, 8% Nickel, less than 1% carbon, rest is iron',
            text: '',
            image: _RESOURCES_images_achieve_png__WEBPACK_IMPORTED_MODULE_0__
            },
            {
            title: 'Brass sheets',
            text: '',
            image: _RESOURCES_images_achieve_png__WEBPACK_IMPORTED_MODULE_0__
            },
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
        img2.src = pic2;
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
(0,_modules_preDisplay__WEBPACK_IMPORTED_MODULE_3__.displayStarted)();
(0,_modules_footer__WEBPACK_IMPORTED_MODULE_2__.renderFooter)(body);

/***/ }),

/***/ "./src/RESOURCES/images/achieve.png":
/*!******************************************!*\
  !*** ./src/RESOURCES/images/achieve.png ***!
  \******************************************/
/***/ ((module) => {

module.exports = "../../asset/images/9f85bcb065b488f77419.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["src_SCRIPTS_modules_footer_js-src_SCRIPTS_modules_header_js"], () => (__webpack_exec__("./src/SCRIPTS/pre.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0L3ByZS9wcmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ3NEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGFBQWEsWUFBWSxZQUFZO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsWUFBWTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsSUFBSSxJQUFJLEtBQUs7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwwREFBSTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwwREFBSTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMERBQUk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5S0FBeUs7QUFDeks7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLE1BQU07QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix1QkFBdUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwwREFBSTtBQUMzQixhQUFhO0FBQ2I7QUFDQTtBQUNBLHVCQUF1QiwwREFBSTtBQUMzQixhQUFhO0FBQ2I7QUFDQTtBQUNBLHVCQUF1QiwwREFBSTtBQUMzQixhQUFhO0FBQ2I7QUFDQTtBQUNBLHVCQUF1QiwwREFBSTtBQUMzQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSw0S0FBNEssVUFBVSxpQkFBaUIsaUJBQWlCLFdBQVcsb0JBQW9CO0FBQ3ZQLGFBQWE7QUFDYjtBQUNBO0FBQ0EsNEtBQTRLLFVBQVUsaUJBQWlCLGlCQUFpQixXQUFXLG9CQUFvQjtBQUN2UCxhQUFhO0FBQ2I7QUFDQTtBQUNBLDRLQUE0SyxVQUFVLGlCQUFpQixpQkFBaUIsV0FBVyxvQkFBb0I7QUFDdlAsYUFBYTtBQUNiO0FBQ0E7QUFDQSw0S0FBNEssVUFBVSxpQkFBaUIsaUJBQWlCLFdBQVcsb0JBQW9CO0FBQ3ZQLGFBQWE7QUFDYjtBQUNBO0FBQ0EsNEtBQTRLLFVBQVUsaUJBQWlCLGlCQUFpQixXQUFXLG9CQUFvQjtBQUN2UCxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvTEFBb0wsVUFBVSxpQkFBaUIsaUJBQWlCLFdBQVcsb0JBQW9CO0FBQy9QO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsNEtBQTRLLFVBQVUsaUJBQWlCLGlCQUFpQixXQUFXLG9CQUFvQjtBQUN2UCxhQUFhO0FBQ2I7QUFDQTtBQUNBLDRLQUE0SyxVQUFVLGlCQUFpQixpQkFBaUIsV0FBVyxvQkFBb0I7QUFDdlAsYUFBYTtBQUNiO0FBQ0E7QUFDQSw0S0FBNEssVUFBVSxpQkFBaUIsaUJBQWlCLFdBQVcsb0JBQW9CO0FBQ3ZQLGFBQWE7QUFDYjtBQUNBO0FBQ0EsNEtBQTRLLFVBQVUsaUJBQWlCLGlCQUFpQixXQUFXLG9CQUFvQjtBQUN2UCxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9MQUFvTCxVQUFVLGlCQUFpQixpQkFBaUIsV0FBVyxvQkFBb0I7QUFDL1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvTEFBb0wsVUFBVSxpQkFBaUIsaUJBQWlCLFdBQVcsb0JBQW9CO0FBQy9QO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3QkFBd0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxNQUFNO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsdUJBQXVCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMERBQUk7QUFDM0IsYUFBYTtBQUNiO0FBQ0E7QUFDQSx1QkFBdUIsMERBQUk7QUFDM0IsYUFBYTtBQUNiO0FBQ0E7QUFDQSx1QkFBdUIsMERBQUk7QUFDM0IsYUFBYTtBQUNiO0FBQ0E7QUFDQSx1QkFBdUIsMERBQUk7QUFDM0IsYUFBYTtBQUNiO0FBQ0E7QUFDQSx1QkFBdUIsMERBQUk7QUFDM0IsYUFBYTtBQUNiO0FBQ0E7QUFDQSx1QkFBdUIsMERBQUk7QUFDM0IsYUFBYTtBQUNiO0FBQ0E7QUFDQSx1QkFBdUIsMERBQUk7QUFDM0IsYUFBYTtBQUNiO0FBQ0E7QUFDQSx1QkFBdUIsMERBQUk7QUFDM0IsYUFBYTtBQUNiO0FBQ0E7QUFDQSx1QkFBdUIsMERBQUk7QUFDM0IsYUFBYTtBQUNiO0FBQ0E7QUFDQSx1QkFBdUIsMERBQUk7QUFDM0IsYUFBYTtBQUNiO0FBQ0E7QUFDQSx1QkFBdUIsMERBQUk7QUFDM0IsYUFBYTtBQUNiO0FBQ0E7QUFDQSx1QkFBdUIsMERBQUk7QUFDM0IsYUFBYTtBQUNiO0FBQ0E7QUFDQSx1QkFBdUIsMERBQUk7QUFDM0IsYUFBYTtBQUNiO0FBQ0E7QUFDQSx1QkFBdUIsMERBQUk7QUFDM0IsYUFBYTtBQUNiO0FBQ0E7QUFDQSx1QkFBdUIsMERBQUk7QUFDM0IsYUFBYTtBQUNiO0FBQ0E7QUFDQSx1QkFBdUIsMERBQUk7QUFDM0IsYUFBYTtBQUNiO0FBQ0E7QUFDQSx1QkFBdUIsMERBQUk7QUFDM0IsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwwREFBSTtBQUN2QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDBEQUFJO0FBQ3ZCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMERBQUk7QUFDdkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwwREFBSTtBQUN2QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDBEQUFJO0FBQ3ZCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMERBQUk7QUFDdkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwwREFBSTtBQUN2QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDBEQUFJO0FBQ3ZCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0xBQW9MLFVBQVUsaUJBQWlCLGlCQUFpQixXQUFXLG9CQUFvQjtBQUMvUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0xBQW9MLFVBQVUsaUJBQWlCLGlCQUFpQixXQUFXLG9CQUFvQjtBQUMvUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsTUFBTTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHVCQUF1QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0xBQW9MLFVBQVUsaUJBQWlCLGlCQUFpQixXQUFXLG9CQUFvQjtBQUMvUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9MQUFvTCxVQUFVLGlCQUFpQixpQkFBaUIsV0FBVyxvQkFBb0I7QUFDL1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0JBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9MQUFvTCxVQUFVLGlCQUFpQixpQkFBaUIsV0FBVyxvQkFBb0I7QUFDL1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9MQUFvTCxVQUFVLGlCQUFpQixpQkFBaUIsV0FBVyxvQkFBb0I7QUFDL1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFLE1BQU07QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix1QkFBdUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsZ0VBQWdFO0FBQ2hFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvTEFBb0wsVUFBVSxpQkFBaUIsaUJBQWlCLFdBQVcsb0JBQW9CO0FBQy9QO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvTEFBb0wsVUFBVSxpQkFBaUIsaUJBQWlCLFdBQVcsb0JBQW9CO0FBQy9QO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3QkFBd0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RSxNQUFNO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsdUJBQXVCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0xBQW9MLFVBQVUsaUJBQWlCLGlCQUFpQixXQUFXLG9CQUFvQjtBQUMvUDtBQUNBO0FBQ0Esb0xBQW9MLFVBQVUsaUJBQWlCLGlCQUFpQixXQUFXLG9CQUFvQjtBQUMvUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9MQUFvTCxVQUFVLGlCQUFpQixpQkFBaUIsV0FBVyxvQkFBb0I7QUFDL1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9MQUFvTCxVQUFVLGlCQUFpQixpQkFBaUIsV0FBVyxvQkFBb0I7QUFDL1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELE1BQU07QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix1QkFBdUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDBEQUFJO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsdUdBQXVHO0FBQ3ZHO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9MQUFvTCxVQUFVLGlCQUFpQixpQkFBaUIsV0FBVyxvQkFBb0I7QUFDL1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtQkFBbUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0JBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9MQUFvTCxVQUFVLGlCQUFpQixpQkFBaUIsV0FBVyxvQkFBb0I7QUFDL1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsTUFBTTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHVCQUF1QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpTEFBaUwsVUFBVSxpQkFBaUIsaUJBQWlCLFdBQVcsb0JBQW9CO0FBQzVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrTEFBa0wsVUFBVSxpQkFBaUIsaUJBQWlCLFdBQVcsb0JBQW9CO0FBQzdQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvTEFBb0wsVUFBVSxpQkFBaUIsaUJBQWlCLFdBQVcsb0JBQW9CO0FBQy9QO0FBQ0E7QUFDQSxvTEFBb0wsVUFBVSxpQkFBaUIsaUJBQWlCLFdBQVcsb0JBQW9CO0FBQy9QO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3QkFBd0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL3dFd0I7QUFDc0I7QUFDQTtBQUN5RztBQUN2SjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsK0RBQWM7QUFDNUIsS0FBSztBQUNMO0FBQ0EsMENBQTBDLE1BQU07QUFDaEQsY0FBYyw2REFBWTtBQUMxQixLQUFLO0FBQ0w7QUFDQSxzREFBc0QsTUFBTTtBQUM1RCxjQUFjLDZEQUFZO0FBQzFCLEtBQUs7QUFDTDtBQUNBLDhDQUE4QyxNQUFNO0FBQ3BELGNBQWMsNkRBQVk7QUFDMUIsS0FBSztBQUNMO0FBQ0EsdURBQXVELE1BQU07QUFDN0QsY0FBYyw2REFBWTtBQUMxQixLQUFLO0FBQ0w7QUFDQSxvRUFBb0UsTUFBTTtBQUMxRSxjQUFjLDZEQUFZO0FBQzFCLEtBQUs7QUFDTDtBQUNBLGdEQUFnRCxNQUFNO0FBQ3RELGNBQWMsNkRBQVk7QUFDMUIsS0FBSztBQUNMO0FBQ0EsOEJBQThCLE1BQU07QUFDcEMsY0FBYyw2REFBWTtBQUMxQjtBQUNBO0FBQ0E7QUFDQSw2REFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9CQUFvQjtBQUNuQztBQUNBLDZCQUE2QixpQkFBaUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQWM7QUFDZCw2REFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL2VsYWJvcmF0ZS8uL3NyYy9DU1MvcHJlLmNzcz9lN2M4Iiwid2VicGFjazovL2VsYWJvcmF0ZS8uL3NyYy9TQ1JJUFRTL21vZHVsZXMvcHJlRGlzcGxheS5qcyIsIndlYnBhY2s6Ly9lbGFib3JhdGUvLi9zcmMvU0NSSVBUUy9wcmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiXHJcbmltcG9ydCBwaWMxIGZyb20gJy4uLy4uL1JFU09VUkNFUy9pbWFnZXMvYWNoaWV2ZS5wbmcnO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgY3JlYXRlRGl2cyA9IChvYmplY3QpID0+IHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGV4dC5pbm5lckhUTUwgPSBgPHNwYW4+4oCiICR7b2JqZWN0LnRpdGxlfTo8L3NwYW4+ICAke29iamVjdC50ZXh0fWA7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICBpZihvYmplY3QuaW1hZ2UgIT09ICcgJyl7XHJcbiAgICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICBpbWFnZS5zcmMgPSBvYmplY3QuaW1hZ2U7XHJcbiAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRpdjtcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBjcmVhdGVWaWRzID0gKG9iamVjdCkgPT4ge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0ZXh0LmlubmVySFRNTCA9IGA8c3Bhbj7igKIgJHtvYmplY3QubGlzdH08L3NwYW4+YDtcclxuICAgIGRpdi5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgIGlmKG9iamVjdC52aWRlbyAhPT0gJyAnKXtcclxuICAgICAgICAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgIGJveC5pbm5lckhUTUwgPSBvYmplY3QudmlkZW87XHJcbiAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChib3gpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRpdjtcclxufVxyXG5cclxuY29uc3QgZGlzcGxheVRhc2sgPSAobnVtLCBuYW1lLCBsaXN0cykgPT4ge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGhlYWQudGV4dENvbnRlbnQgPSBgJHtudW19LiAke25hbWV9YDtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChoZWFkKTtcclxuICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIGxldCBsaXN0SXRlbXMgPSBbXTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaXN0cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgbGlzdEl0ZW1zW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBsaXN0SXRlbXNbaV0udGV4dENvbnRlbnQgPSBsaXN0c1tpXTtcclxuICAgICAgICB0YXNrcy5hcHBlbmRDaGlsZChsaXN0SXRlbXNbaV0pO1xyXG4gICAgfVxyXG4gICAgZGl2LmFwcGVuZENoaWxkKHRhc2tzKTtcclxuICAgIHJldHVybiBkaXY7XHJcbn1cclxuXHJcbmNvbnN0IHJlc2V0ID0gKCkgPT4ge1xyXG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcclxuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XHJcbiAgICByZXR1cm4gbWFpbjtcclxufVxyXG5cclxuY29uc3QgY3JlYXRlRG93bmxvYWQgPSAodXJsKSA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdkb3dubG9hZCcpO1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZG93bmxvYWRjdGEnKTtcclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Rvd25sb2FkQm94Jyk7XHJcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgbGluay5ocmVmID0gdXJsO1xyXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ0RPV05MT0FEJzsgXHJcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpY29uLnNyYyA9IHBpYzE7XHJcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoaWNvbik7XHJcbiAgICBsaW5rLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgIHJldHVybiBkaXZcclxufVxyXG5cclxuY29uc3QgY3JlYXRlSG92ZXIgPSAodXJsKSA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHZpZXcudGV4dENvbnRlbnQgPSAndmlldyByZXBvcnRzID4nO1xyXG4gICAgdmlldy5jbGFzc0xpc3QuYWRkKCd2aWV3VGV4dCcpO1xyXG4gICAgdmlldy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhc2lkZScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBkb3dubG9hZCA9ICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgbGluay5ocmVmID0gdXJsO1xyXG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaWNvbi5zcmMgPSBwaWMxO1xyXG4gICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdob3Zlckljb24nKTtcclxuICAgIGxpbmsuYXBwZW5kQ2hpbGQoaWNvbik7XHJcbiAgICBkb3dubG9hZC5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZCh2aWV3KTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChkb3dubG9hZCk7XHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcclxuICAgIHJldHVybiBkaXY7XHJcbn1cclxuXHJcbmNvbnN0IGRpc3BsYXlTdGFydGVkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWFpbiA9IHJlc2V0KCk7XHJcbiAgICBcclxuICAgIGNvbnN0IGRpdkltZ0FjaGlldmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZGl2SW1nQWNoaWV2ZS5jbGFzc0xpc3QuYWRkKFwiZGl2LWltZy1hY2hpZXZlXCIpO1xyXG4gICAgXHJcblxyXG4gICAgY29uc3QgaW1nQWNoaWV2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBkaXZJbWdBY2hpZXZlLmFwcGVuZENoaWxkKGltZ0FjaGlldmUpO1xyXG4gICAgaW1nQWNoaWV2ZS5zcmMgPSBwaWMxO1xyXG4gICAgaW1nQWNoaWV2ZS5jbGFzc0xpc3QuYWRkKCdmdWxsSW1nJyk7XHJcbiAgICBpbWdBY2hpZXZlLmlkID0gJ2dldFN0YXJ0SW1nJztcclxuICAgIFxyXG4gICAgY29uc3Qgc3RhcnRpbmdIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgc3RhcnRpbmdIZWFkZXIudGV4dENvbnRlbnQgPSAnR0VUVElORyBTVEFSVEVEIFdJVEggUFJPRFVDVElPTiBFTEEnO1xyXG4gICAgc3RhcnRpbmdIZWFkZXIuaWQgPSAnZ2V0U3RhcnRIZWFkJztcclxuICAgIGRpdkltZ0FjaGlldmUuYXBwZW5kQ2hpbGQoc3RhcnRpbmdIZWFkZXIpO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChkaXZJbWdBY2hpZXZlKTtcclxuICAgIFxyXG4gICAgY29uc3QgZ2VuU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgIGNvbnN0IGdlbkhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgZ2VuSGVhZC50ZXh0Q29udGVudCA9ICdHZW5lcmFsIEluc3RydWN0aW9ucyc7XHJcbiAgICBnZW5TZWN0aW9uLmFwcGVuZENoaWxkKGdlbkhlYWQpO1xyXG4gICAgY29uc3QgZ2VuRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGdlbkRlc2MudGV4dENvbnRlbnQgPSAnRm9sbG93IHRoZXNlIGluc3RydWN0aW9ucyB3aGVuIHByZXBhcmluZyBmb3IgYW55IFByb2R1Y3Rpb24gRUxBLi4uJztcclxuICAgIGdlblNlY3Rpb24uYXBwZW5kQ2hpbGQoZ2VuRGVzYyk7XHJcbiAgICBjb25zdCByZXBvcnQgPSBkaXNwbGF5VGFzaygnMScsICdSZXBvcnQgRm9ybWF0OicsIFsnVXNlIEE0IHBhcGVyIG9yIGZ1bGwtc2NhbHAgc2hlZXRzIGZvciB3cml0aW5nIHlvdXIgcmVwb3J0cy4nLCAnVGhlIGluc3RydWN0b3Igd2lsbCBzcGVjaWZ5IHRoZSBwcmVmZXJyZWQgZm9ybWF0OyBpZiBuZWNlc3NhcnkuJ10pO1xyXG4gICAgZ2VuU2VjdGlvbi5hcHBlbmRDaGlsZChyZXBvcnQpO1xyXG4gICAgY29uc3QgYXR0ZW5kID0gZGlzcGxheVRhc2soJzInLCAnQXR0ZW5kYW5jZTonLCBbJ1B1bmN0dWFsaXR5IGlzIGNydWNpYWwgZm9yIGFsbCBQcm9kdWN0aW9uIEVMQSBzZXNzaW9ucy4nLCAnRW5zdXJlIHlvdSBkbyBub3QgbWlzcyBhbnkgc2Vzc2lvbi4nXSk7XHJcbiAgICBnZW5TZWN0aW9uLmFwcGVuZENoaWxkKGF0dGVuZCk7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGdlblNlY3Rpb24pO1xyXG5cclxuICAgIGNvbnN0IHJlcFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICBjb25zdCByZXBIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIHJlcEhlYWQudGV4dENvbnRlbnQgPSAnUmVwb3J0IFN0cnVjdHVyZSc7XHJcbiAgICByZXBTZWN0aW9uLmFwcGVuZENoaWxkKHJlcEhlYWQpO1xyXG4gICAgY29uc3QgcmVwRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHJlcERlc2MudGV4dENvbnRlbnQgPSAnSXQgaXMgbW9zdCBleHBlZGllbnQgdGhhdCB5b3UgZm9sbG93IHRoZSBzdHJ1Y3R1cmUgZ2l2ZW4gYmVsb3csIHdoZW4gd3JpdGluZyB5b3VyIHJlcG9ydHMuJztcclxuICAgIHJlcFNlY3Rpb24uYXBwZW5kQ2hpbGQocmVwRGVzYyk7XHJcbiAgICBjb25zdCBpZCA9IGRpc3BsYXlUYXNrKCcxJywgJ0lkZW50aWZpY2F0aW9uOicsIFsnTmFtZTogW1lvdXIgZnVsbCBuYW1lXScsICdNYXRyaWN1bGF0aW9uIE51bWJlcjogW1lvdXIgTWF0cmljdWxhdGlvbiBOdW1iZXJdJywgJ0RlcGFydG1lbnQ6IFtZb3VyIGRlcGFydG1lbnRdJywgJ1NlcmlhbCBOdW1iZXI6IFtZb3VyIEVMQSBTZXJpYWwgbnVtYmVyIFVwb24gcmVnaXN0cmF0aW9uXScsICdTZWN0aW9uOiBbXScsICdUaXRsZSBvZiBFeHBlcmltZW50OiBbZS5nIOKAnEJlbmNoIGZpdHRpbmfigJ1dJywgJ0V4cGVyaW1lbnQgQ29kZTogW2UuZyDigJxBTTIwMeKAnV0nXSk7XHJcbiAgICByZXBTZWN0aW9uLmFwcGVuZENoaWxkKGlkKTtcclxuICAgIGNvbnN0IG9iamVjdGl2ZSA9IGRpc3BsYXlUYXNrKCcyJywgJ09iamVjdGl2ZXM6JywgWydTdGF0ZSB0aGUgYWltIG9mIHRoZSBleHBlcmltZW50IGFzIGxpc3RlZCBpbiB0aGUgbWFudWFsLiBXcml0ZSBkb3duIGFsbCB0aGUgb2JqZWN0aXZlcyBwcm92aWRlZC4nXSk7XHJcbiAgICByZXBTZWN0aW9uLmFwcGVuZENoaWxkKG9iamVjdGl2ZSk7XHJcbiAgICBjb25zdCB0b29scyA9IGRpc3BsYXlUYXNrKCczJywgJ0FwcGFyYXR1cy9Ub29sczonLCBbJ0xpc3QgYWxsIHRvb2xzIHVzZWQgaW4gdGhlIGV4cGVyaW1lbnQuJywgJ0luY2x1ZGUgZGlhZ3JhbXMgb2YgdGhlIHRvb2xzIGFuZCBlbnN1cmUgdGhleSBhcmUgd2VsbC1sYWJlbGVkIGFuZCBuZWF0bHkgZHJhd24uJ10pO1xyXG4gICAgcmVwU2VjdGlvbi5hcHBlbmRDaGlsZCh0b29scyk7XHJcbiAgICBjb25zdCB0aGVvcnkgPSBkaXNwbGF5VGFzaygnNCcsICdUaGVvcnk6JywgWydQcm92aWRlIGEgdGhlb3JldGljYWwgYmFja2dyb3VuZCByZWxldmFudCB0byB0aGUgcHJhY3RpY2FsLicsICdEaXNjdXNzIHRoZSBhcHBsaWNhdGlvbnMgYW5kIHNlcXVlbmNlIG9mIG9wZXJhdGlvbnMsIHN1cHBsZW1lbnRlZCB3aXRoIGRpYWdyYW1zIHdoZXJlIG5lY2Vzc2FyeS4nLCAnRW5zdXJlIHRoZSBjb250ZW50IGlzIGZvY3VzZWQgYW5kIGRvZXMgbm90IGRldmlhdGUgZnJvbSB0aGUgdG9waWMuJ10pO1xyXG4gICAgcmVwU2VjdGlvbi5hcHBlbmRDaGlsZCh0aGVvcnkpO1xyXG4gICAgY29uc3QgcHJvY2VkdXJlcyA9IGRpc3BsYXlUYXNrKCc1JywgJ1Byb2NlZHVyZXM6JywgWydEb2N1bWVudCB0aGUgcHJvY2VkdXJlIGV4YWN0bHkgYXMgd3JpdHRlbiBpbiB0aGUgbWFudWFsLicsICdVc2UgZGlhZ3JhbXMgdG8gZXhwbGFpbiB0aGUgc3RlcHMsIGlmIHBvc3NpYmxlLiddKTtcclxuICAgIHJlcFNlY3Rpb24uYXBwZW5kQ2hpbGQocHJvY2VkdXJlcyk7XHJcbiAgICBjb25zdCBwcmVjYXV0aW9ucyA9IGRpc3BsYXlUYXNrKCc2JywgJ1ByZWNhdXRpb25zOicsIFsnTGlzdCB0aGUgcHJlY2F1dGlvbnMgdGFrZW4gZHVyaW5nIHRoZSBleHBlcmltZW50IGluIHBhc3QgdGVuc2UuJywgJ35FeGFtcGxlOiDigJxJIGVuc3VyZWQgdGhhdCBJLi4u4oCdJ10pO1xyXG4gICAgcmVwU2VjdGlvbi5hcHBlbmRDaGlsZChwcmVjYXV0aW9ucyk7XHJcbiAgICBjb25zdCBjb25jbHVzaW9ucyA9IGRpc3BsYXlUYXNrKCc3JywgJ0NvbmNsdXNpb246JywgWydTdW1tYXJpemUgdGhlIG91dGNvbWVzIG9mIHRoZSBleHBlcmltZW50LicsICd+RXhhbXBsZTog4oCcQXQgdGhlIGVuZCBvZiB0aGlzIGV4cGVyaW1lbnQsIHdlIHdlcmUgYWJsZSB0byBkZXZlbG9wIGEgbGFwIGpvaW50LCB1bmRlcnN0YW5kIHRoZSBzZXF1ZW5jZSBvZiBvcGVyYXRpb25zIGludm9sdmVkLCBhbmQgYWNoaWV2ZSBhIGNvbXByZWhlbnNpdmUgdW5kZXJzdGFuZGluZyBvZiB0aGUgcHJvY2Vzcy7igJ0nXSk7XHJcbiAgICByZXBTZWN0aW9uLmFwcGVuZENoaWxkKGNvbmNsdXNpb25zKTtcclxuICAgIGNvbnN0IHJlZmVyZW5jZXMgPSBkaXNwbGF5VGFzaygnOCcsICdSZWZlcmVuY2VzOicsIFsnQ2l0ZSBib29rcyBhbmQgbWFudWFscyByZWxldmFudCB0byB0aGUgZXhwZXJpbWVudC4gRG8gbm90IGluY2x1ZGUgd2ViIGxpbmtzLicsICd+RXhhbXBsZTonLCAnfn7igJxQcm9kdWN0aW9uIEVuZ2luZWVyaW5nIExhYm9yYXRvcnkgTWFudWFsIGZvciBFTEEyMDEgYW5kIEVMQTIwMuKAmeKAmSBieSB0aGUgRGVwYXJ0bWVudCBvZiBQcm9kdWN0aW9uIEVuZ2luZWVyaW5nLCBVbml2ZXJzaXR5IG9mIEJlbmluLicsICd+fuKAnVRoZSBUSUcgV2VsZGluZyBCb29r4oCdIGJ5IFRvZGQgQnJpZGlndW0uJywgJ35+4oCdV2VsZGluZyBmb3IgRHVtbWllc+KAnSBieSBTdGV2ZW4gUm9iZXJ0IEZhcm5zd29ydGguJ10pO1xyXG4gICAgcmVwU2VjdGlvbi5hcHBlbmRDaGlsZChyZWZlcmVuY2VzKTtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQocmVwU2VjdGlvbik7XHJcblxyXG4gICAgY29uc3QgYWRkU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgIGNvbnN0IGFkZEhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgYWRkSGVhZC50ZXh0Q29udGVudCA9ICdBZGRpdGlvbmFsIE5vdGVzJztcclxuICAgIGFkZFNlY3Rpb24uYXBwZW5kQ2hpbGQoYWRkSGVhZCk7XHJcbiAgICBjb25zdCBwYXJhMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHBhcmExLnRleHRDb250ZW50ID0gXCJBbHdheXMgZm9sbG93IHRoZSBpbnN0cnVjdG9yJ3Mgc3BlY2lmaWMgZ3VpZGVsaW5lcyByZWdhcmRpbmcgcmVwb3J0IGZvcm1hdCBhbmQgY29udGVudCB0byBlbnN1cmUgZ29vZCBtYXJrcy5cIjtcclxuICAgIGFkZFNlY3Rpb24uYXBwZW5kQ2hpbGQocGFyYTEpO1xyXG4gICAgY29uc3QgcGFyYTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwYXJhMi50ZXh0Q29udGVudCA9IFwiU3VibWl0IHlvdXIgcmVwb3J0IG9uIHRpbWUuIFRoZSByZXBvcnQgc3VibWlzc2lvbiB0aW1lIGlzIHVzdWFsbHkgZ2l2ZW4gYnkgdGhlIGluc3RydWN0b3IuXCI7XHJcbiAgICBhZGRTZWN0aW9uLmFwcGVuZENoaWxkKHBhcmEyKTtcclxuICAgIGNvbnN0IGdvb2QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGdvb2QudGV4dENvbnRlbnQgPSAnR09PRCBMVUNLISEhJztcclxuICAgIGFkZFNlY3Rpb24uYXBwZW5kQ2hpbGQoZ29vZCk7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGFkZFNlY3Rpb24pO1xyXG4gICAgY29uc3QgaG92ZXIgPSBjcmVhdGVIb3ZlcignIycpO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChob3Zlcik7XHJcbiAgICBjb25zdCBkb3dubG9hZCA9IGNyZWF0ZURvd25sb2FkKCcjJyk7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGRvd25sb2FkKTtcclxufTtcclxuXHJcblxyXG5jb25zdCBkaXNwbGF5V1cyMDEgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtYWluID0gcmVzZXQoKTtcclxuICAgICAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICBoZWFkLnRleHRDb250ZW50ICA9ICdJbnRyb2R1Y3Rpb24gdG8gV29vZCBXb3JrIHByYWN0aWNle1dXMjAxfSc7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChoZWFkKTtcclxuICAgICAgICBjb25zdCBvYmplY3RpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3Qgb2JqSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgb2JqSGVhZC50ZXh0Q29udGVudCA9ICdPQkpFQ1RJVkVTJztcclxuICAgICAgICBvYmplY3RpdmUuYXBwZW5kQ2hpbGQob2JqSGVhZCk7XHJcbiAgICAgICAgY29uc3Qgb2JqTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgY29uc3Qgb2JqZWN0aXZlcyA9IFsnVG8ga25vdyB0aGUgbWF0ZXJpYWxzIHVzZWQgaW4gd29vZHdvcmsgc2hvcCcsJ1RvIGZhbWlsaWFyaXplIHdpdGggdGhlIHRvb2xzIHVzZWQgaW4gd29vZHdvcmsgc2hvcCcsJ1RvIGtub3cgaG93IHRvIGN1dCB3b29kJywgJ1RvIGtub3cgaG93IHRvIHBsYW5lIHdvb2QnXTtcclxuICAgICAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBvYmplY3RpdmVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgbGlzdFtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIGxpc3RbaV0udGV4dENvbnRlbnQgPSBvYmplY3RpdmVzW2ldO1xyXG4gICAgICAgICAgICBvYmpMaXN0LmFwcGVuZENoaWxkKGxpc3RbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYmplY3RpdmUuYXBwZW5kQ2hpbGQob2JqTGlzdCk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChvYmplY3RpdmUpO1xyXG4gICAgICAgIGNvbnN0IGFwcEhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIGFwcEhlYWQudGV4dENvbnRlbnQgPSAnQXBwYXJhdHVzJztcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGFwcEhlYWQpO1xyXG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdhcHBCb3gnKTtcclxuICAgICAgICBjb25zdCBhcHBhcmF0dXMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ1RpbWJlcicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdNZXRyZSBSdWxlJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWMxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ01lYXN1cmluZyBTdGVlbCBUYXBlJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWMxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ0dhdWdlcycsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdNYXJraW5nIEtuaWZlIFNjcmliZXJzJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWMyMlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdCZXZlbCBTcXVhcmUnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzIzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ0MtY2xhbXAnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzI0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ1QtY2xhbXAnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzI1XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ1Nhd3MnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzI2XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ0NoaXNlbCcsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljMjdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnV29vZGVuIEphY2sgUGxhbmUnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzI4XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ0JyYWRhd2wnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzI5XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ0JyYWNlJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWMzMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdBdWdlciBiaXQnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzMxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ0hhbmQgZHJpbGwnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzMyXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ01hbGxldCcsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljMzNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnQ2xhdyBIYW1tZXInLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzM0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ1BpbmNlcicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljMzVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnU2NyZXcgZHJpdmVyJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWMzNlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdXb29kIHJhc3AgZmlsZScsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljMzdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnVHJ5IFNxdWFyZScsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljMzhcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnQmVuY2ggVmljZScsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljMzlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnV29yayBCZW5jaCcsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljNDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnUGFyaW5nIENoaXNlbCcsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljNDFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnU21vb3RoIFBsYW5lJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWM0MlxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICBdO1xyXG4gICAgICAgIGxldCBhcHBCb3ggPSBbXTtcclxuICAgICAgICBsZXQgYXBwSW1hZ2UgPSBbXTtcclxuICAgICAgICBsZXQgYXBwQ2FwdGlvbiA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcHBhcmF0dXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBhcHBCb3hbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgYXBwSW1hZ2VbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgYXBwQ2FwdGlvbltpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgYXBwSW1hZ2VbaV0uc3JjID0gIGFwcGFyYXR1c1tpXS5pbWFnZTtcclxuICAgICAgICAgICAgYXBwQ2FwdGlvbltpXS50ZXh0Q29udGVudCA9IGFwcGFyYXR1c1tpXS5jYXA7XHJcbiAgICAgICAgICAgIGFwcEJveFtpXS5hcHBlbmRDaGlsZChhcHBJbWFnZVtpXSk7XHJcbiAgICAgICAgICAgIGFwcEJveFtpXS5hcHBlbmRDaGlsZChhcHBDYXB0aW9uW2ldKTtcclxuICAgICAgICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChhcHBCb3hbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHNlY3Rpb24pO1xyXG4gICAgICAgIGNvbnN0IHRoZW9yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCB0aGVvSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgdGhlb0hlYWQudGV4dENvbnRlbnQgPSAnVEhFT1JZJztcclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQodGhlb0hlYWQpO1xyXG4gICAgICAgIGNvbnN0IGV4cGxhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBleHBsYWluLnRleHRDb250ZW50ID0gJ1dvb2R3b3JraW5nIHByYWN0aWNlIGlzIHRoZSBhcnQgb2YgY3JlYXRpbmcgZnVuY3Rpb25hbCBvciBkZWNvcmF0aXZlIG9iamVjdHMgZnJvbSB3b29kLiBDYXJwZW50cnkgaXMgYSBza2lsbGVkIHRyYWRlIHRoYXQgaW52b2x2ZXMgd29ya2luZyB3aXRoIHdvb2QgdG8gY3JlYXRlIHN0cnVjdHVyZXMsIGZ1cm5pdHVyZSwgYW5kIHZhcmlvdXMgd29vZGVuIG9iamVjdHMuIENhcnBlbnRlcnMgdXNlIGEgY29tYmluYXRpb24gb2YgaGFuZCB0b29scyBhbmQgcG93ZXIgdG9vbHMgdG8gbWVhc3VyZSwgY3V0LCBzaGFwZSwgam9pbiwgYW5kIGZpbmlzaCB3b29kIG1hdGVyaWFscy4gQ2FycGVudHJ5IGlzIGEgc2tpbGxlZCB0cmFkZSB3aXRoaW4gdGhlIGJyb2FkZXIgZmllbGQgb2Ygd29vZHdvcmtpbmcgdGhhdCBmb2N1c2VzIHNwZWNpZmljYWxseSBvbiBjb25zdHJ1Y3Rpbmcgd29vZGVuIHN0cnVjdHVyZXMgYW5kIG9iamVjdHMgZm9yIHZhcmlvdXMgcHVycG9zZXMuIENhcnBlbnRyeSBpcyBhIHNraWxsZWQgdHJhZGUgdGhhdCBpbnZvbHZlcyB0aGUgY3V0dGluZywgc2hhcGluZywgYW5kIGluc3RhbGxhdGlvbiBvZiB3b29kIGJ1aWxkaW5nIG1hdGVyaWFscy4gSGFuZCBzYXdzLCBwb3dlciBzYXdzIChtaXRlciBhbmQgY2lyY3VsYXIgc2F3cyksIGhhbW1lcnMsIGNoaXNlbHMsIGRyaWxscywgbGV2ZWxzLCBzcXVhcmVzLCBhbmQgbWVhc3VyaW5nIHRhcGVzIGFyZSBleGFtcGxlcyBvZiBjb21tb24gY2FycGVudHJ5IHRvb2xzLic7XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKGV4cGxhaW4pO1xyXG4gICAgICAgIGNvbnN0IGV4cGxhaW4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZXhwbGFpbjEudGV4dENvbnRlbnQgPSAnVXRpbGl6aW5nIHNwZWNpYWxpc3QgdG9vbHMgbGlrZSBqb2luZXJ5IG1hY2hpbmVzLCByb3V0ZXJzLCBwbGFuZXJzLCBhbmQgcG5ldW1hdGljIG5haWwgZ3VucyBtYXkgYmUgbmVjZXNzYXJ5IGZvciBhZHZhbmNlZCBjYXJwZW50cnkuIENhcnBlbnRyeSBiZWluZyBhIGhpZ2hseSBza2lsbGVkIGpvYiwgY2FycGVudHJ5IGRlbWFuZHMgYWNjdXJhY3ksIGZvY3VzIG9uIGRldGFpbCwgYW5kIGEgc29saWQgZ3Jhc3Agb2YgY29uc3RydWN0aW9uIHByaW5jaXBsZXMuIEFzIGNhcnBlbnRlcnMgd2l0bmVzcyB0aGVpciBjcmVhdGlvbnMgY29tZSB0byBsaWZlIGFuZCBtYWtlIGEgcG9zaXRpdmUgaW1wYWN0IG9uIHRoZSBidWlsdCB3b3JsZCwgaXQgcHJvdmlkZXMgb3Bwb3J0dW5pdHkgZm9yIGNyZWF0aXZpdHksIGNyYWZ0c21hbnNoaXAsIGFuZCBqb2Igc2F0aXNmYWN0aW9uLic7XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKGV4cGxhaW4xKTtcclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdDYXJwZW50cnkgaXMgdXNlZCBpbiBkaWZmZXJlbnQgYXNwZWN0cyBhbmQgYWxzbyBhcHBsaWVkIGluIGRpZmZlcmVudCBmaWVsZHMgd2hpY2ggaW5jbHVkZTonO1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcbiAgICAgICAgY29uc3QgY2hlY2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICBjb25zdCBjaGVja3MgPSBbJ0J1aWxkaW5nIGZyYW1ld29ya3MnLCAnRmxvb3JpbmcnLCAnRG9vcnMgYW5kIHdpbmRvd3MnLCAnUm9vZmluZycsICdTdGFpcmNhc2VzJywgJ0Z1cm5pdHVyZSBtYWtpbmcgZXRjLiddO1xyXG4gICAgICAgIGxldCBhcnJheSA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjaGVja3MubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBhcnJheVtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIGFycmF5W2ldLnRleHRDb250ZW50ID0gY2hlY2tzW2ldO1xyXG4gICAgICAgICAgICBjaGVja0xpc3QuYXBwZW5kQ2hpbGQoYXJyYXlbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoY2hlY2tMaXN0KTtcclxuICAgICAgICBjb25zdCB0ZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICB0ZXh0Mi50ZXh0Q29udGVudCA9ICdPbmUgb2YgdGhlIG1hdGVyaWFscyB1c2VkIGluIHdvb2Qgd29yayBwcmFjdGljZSBpcyB3b29kLiBXb29kIGlzIGEgbmF0dXJhbCBtYXRlcmlhbCBkZXJpdmVkIGZyb20gdGhlIHN0ZW1zLCBicmFuY2hlcywgYW5kIHJvb3RzIG9mIHRyZWVzIGFuZCB0aGVyZSBhcmUgZGlmZmVyZW50IGNsYXNzZXMgb2Ygd29vZCwgdGhlIG1haW4gY2xhc3NlcyBpbmNsdWRlOic7XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKHRleHQyKTtcclxuICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnU29mdCB3b29kJyxcclxuICAgICAgICAgICAgdGV4dDogJ1NvZnR3b29kIGNvbWVzIGZyb20gY29uaWZlcm91cyB0cmVlcyhneW1ub3NwZXJtcyksIGFsc28ga25vd24gYXMgZXZlcmdyZWVucywgd2hpY2ggaGF2ZSBuZWVkbGVzIG9yIGNvbmVzIG9yIHNjYWxlLWxpa2UgbGVhdmVzLiBUaGVzZSB0cmVlcyB0ZW5kIHRvIGdyb3cgZmFzdGVyIHRoYW4gaGFyZHdvb2RzIGFuZCBhcmUgZ2VuZXJhbGx5IGxlc3MgZXhwZW5zaXZlLiBTb2Z0d29vZHMgYXJlIHR5cGljYWxseSBsaWdodGVyIGluIHdlaWdodCBhbmQgaGF2ZSBhIHNpbXBsZXIgZ3JhaW4gc3RydWN0dXJlIGFuZCB0aGV5IGFyZSBjb21tb25seSB1c2VkIGluIGNvbnN0cnVjdGlvbiwgZnJhbWluZywgZGVja2luZywgYW5kIHBhcGVyIHByb2R1Y3Rpb24uIEV4YW1wbGVzIGluY2x1ZGUgcGluZSwgc3BydWNlLCBjZWRhciwgYW5kIGZpci4nLFxyXG4gICAgICAgICAgICBpbWFnZTogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0hhcmQgd29vZCcsXHJcbiAgICAgICAgICAgIHRleHQ6ICdDb21lcyBmcm9tIGRlY2lkdW91cyB0cmVlcyAoYW5naW9zcGVybXMpIHRoYXQgdHlwaWNhbGx5IGhhdmUgYnJvYWQgbGVhdmVzLiBIYXJkd29vZHMgYXJlIGtub3duIGZvciB0aGVpciBkZW5zZSBzdHJ1Y3R1cmUgYW5kIGFyZSBvZnRlbiB1c2VkIGluIGZ1cm5pdHVyZSBtYWtpbmcsIGZsb29yaW5nLCBjYWJpbmV0cnksIGFuZCB3b29kd29ya2luZyBjcmFmdHMuIEV4YW1wbGVzIGluY2x1ZGUgb2FrLCBtYXBsZSwgY2hlcnJ5LCBhbmQgd2FsbnV0LicsXHJcbiAgICAgICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICBjYXRlZ29yaWVzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKGNyZWF0ZURpdnMoaXRlbSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHRoZW9yeSk7XHJcbiAgICAgICAgY29uc3QgcHJhY3RpY2FscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCBoZWFkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgaGVhZDEudGV4dENvbnRlbnQgPSAnUFJBQ1RJQ0FMIDEgOiBIT1cgVE8gQ1VUIFdPT0QnO1xyXG4gICAgICAgIHByYWN0aWNhbHMuYXBwZW5kQ2hpbGQoaGVhZDEpO1xyXG4gICAgICAgIGNvbnN0IHByb2NlZHVyZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBoZWFkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgaGVhZDIudGV4dENvbnRlbnQgPSAnUFJPQ0VEVVJFUyc7XHJcbiAgICAgICAgcHJvY2VkdXJlMS5hcHBlbmRDaGlsZChoZWFkMik7XHJcbiAgICAgICAgY29uc3QgcGFydHMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGlzdDogJ01lYXN1cmUgd29vZCA2MDAgeCA3NSB4IDI1bW0nLFxyXG4gICAgICAgICAgICB2aWRlbzogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICBsaXN0OiAnTWFyayB0aGUgcGllY2UgdXNpbmcgdGFwZSBhbmQgcGVuY2lsJyxcclxuICAgICAgICAgICAgdmlkZW86ICc8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUtbm9jb29raWUuY29tL2VtYmVkL251RXo4VHRyZmpNP3NpPTMxN1hodHd4QVQ4VUJ2TFpcIiB0aXRsZT1cIllvdVR1YmUgdmlkZW8gcGxheWVyXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlOyB3ZWItc2hhcmVcIiByZWZlcnJlcnBvbGljeT1cInN0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW5cIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpc3Q6ICdVc2UgcmlwIHNhdyB0byBjdXQgNjAwbW0gbG9uZycsXHJcbiAgICAgICAgICAgIHZpZGVvOiAnPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLW5vY29va2llLmNvbS9lbWJlZC8wSXNEdmg3R1I0QT9zaT1pUm9IaHFJNFlOcWtvRGF3XCIgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZTsgd2ViLXNoYXJlXCIgcmVmZXJyZXJwb2xpY3k9XCJzdHJpY3Qtb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICBsaXN0OiAnVXNlIHRoZSBjcm9zcyBjdXQgc2F3IHRvIHRoZSByZXF1aXJlZCBsZW5ndGgnLFxyXG4gICAgICAgICAgICB2aWRlbzogJzxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS1ub2Nvb2tpZS5jb20vZW1iZWQvVW1RZGFXeTNQdzA/c2k9bzBBN0dJaWtPSlRKMXVDZFwiIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmU7IHdlYi1zaGFyZVwiIHJlZmVycmVycG9saWN5PVwic3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpblwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGlzdDogJ01hcmsgb3V0IGRpYWdvbmFsIGxpbmUgdXNpbmcgdGhlIHNsaWRpbmcgYmV2ZWwnLFxyXG4gICAgICAgICAgICB2aWRlbzogJzxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS1ub2Nvb2tpZS5jb20vZW1iZWQvbnpRWWQ4d3hDUUU/c2k9OEwzTVlwdjZTUVZia29vUlwiIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmU7IHdlYi1zaGFyZVwiIHJlZmVycmVycG9saWN5PVwic3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpblwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGlzdDogJ1VzZSB0ZW5vbiBzYXcgdG8gY3V0IHRoZSBkaWFnb25hbCBsaW5lJyxcclxuICAgICAgICAgICAgdmlkZW86ICc8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUtbm9jb29raWUuY29tL2VtYmVkL2F1OGVqb3UyVnBFP3NpPW96WDBwdFR1VngtdXlVZGtcIiB0aXRsZT1cIllvdVR1YmUgdmlkZW8gcGxheWVyXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlOyB3ZWItc2hhcmVcIiByZWZlcnJlcnBvbGljeT1cInN0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW5cIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICBwYXJ0cy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHByb2NlZHVyZTEuYXBwZW5kQ2hpbGQoY3JlYXRlVmlkcyhpdGVtKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHByYWN0aWNhbHMuYXBwZW5kQ2hpbGQocHJvY2VkdXJlMSk7XHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGRlc2NyaXB0aW9uMS50ZXh0Q29udGVudCA9ICdUaGUgbGluayB0byB3YXRjaCBob3cgdG8gcGVyZm9ybSB0aGUgYnV0dCBqb2ludCBwcmFjdGljYWwgaXMgYmVsb3cg8J+Rhyc7XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbjEpO1xyXG4gICAgICAgIGNvbnN0IHZpZGVvMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHZpZGVvMy5pbm5lckhUTUwgPSAnPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLW5vY29va2llLmNvbS9lbWJlZC9qeHZPZXBNRnRiQT9zaT1VUHhHZk12a191WXUwTXVkXCIgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZTsgd2ViLXNoYXJlXCIgcmVmZXJyZXJwb2xpY3k9XCJzdHJpY3Qtb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPic7XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZCh2aWRlbzMpO1xyXG4gICAgICAgIGNvbnN0IGhlYWQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICBoZWFkMy50ZXh0Q29udGVudCA9ICdQUkFDVElDQUwgMiA6IFBMQU5OSU5HIE9GIFdPT0QnO1xyXG4gICAgICAgIHByYWN0aWNhbHMuYXBwZW5kQ2hpbGQoaGVhZDMpO1xyXG4gICAgICAgIGNvbnN0IHByb2NlZHVyZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBoZWFkNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgaGVhZDQudGV4dENvbnRlbnQgPSAnUFJPQ0VEVVJFUyc7XHJcbiAgICAgICAgcHJvY2VkdXJlMi5hcHBlbmRDaGlsZChoZWFkNCk7XHJcbiAgICAgICAgY29uc3QgcGFydHMxID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpc3Q6ICdIYXZlIHRpbWJlciA2MDBtbSBieSA3NW1tIGJ5IDI1bW0gdGhpY2snLFxyXG4gICAgICAgICAgICB2aWRlbzogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICBsaXN0OiAnRml4IHRoZSB0aW1iZXIgdXNpbmcgY2xhbXBzJyxcclxuICAgICAgICAgICAgdmlkZW86ICc8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUtbm9jb29raWUuY29tL2VtYmVkL3QzdjNKMUVGclI4P3NpPTlVS29HM2VBcUZ4QlZDNEZcIiB0aXRsZT1cIllvdVR1YmUgdmlkZW8gcGxheWVyXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlOyB3ZWItc2hhcmVcIiByZWZlcnJlcnBvbGljeT1cInN0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW5cIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpc3Q6ICdVc2UgcGxhbmUgaW4gc21vb3RoaW5nIHRoZSBzdXJmYWNlJyxcclxuICAgICAgICAgICAgdmlkZW86ICc8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUtbm9jb29raWUuY29tL2VtYmVkL2M2NXJLazhmcmhjP3NpPVd6WldDYnV6YjVHcmtfQTdcIiB0aXRsZT1cIllvdVR1YmUgdmlkZW8gcGxheWVyXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlOyB3ZWItc2hhcmVcIiByZWZlcnJlcnBvbGljeT1cInN0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW5cIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpc3Q6ICdVc2UgdGhlIGNyb3NzIGN1dCBzYXcgdG8gdGhlIHJlcXVpcmVkIGxlbmd0aCcsXHJcbiAgICAgICAgICAgIHZpZGVvOiAnPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLW5vY29va2llLmNvbS9lbWJlZC9VbVFkYVd5M1B3MD9zaT1vMEE3R0lpa09KVEoxdUNkXCIgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZTsgd2ViLXNoYXJlXCIgcmVmZXJyZXJwb2xpY3k9XCJzdHJpY3Qtb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICBsaXN0OiAnVXNlIHRyeSBzcXVhcmUgdG8gdGVzdCB0aGUgc3VyZmFjZSBmb3IgZmxhdG5lc3MsIHdoZW4gZmxhdCBtYXJrIG9uIGl0JyxcclxuICAgICAgICAgICAgdmlkZW86ICc8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUtbm9jb29raWUuY29tL2VtYmVkL0p4cXFWRkxfSE4wP3NpPUIwTGRPc1pwRkFwUnJicl9cIiB0aXRsZT1cIllvdVR1YmUgdmlkZW8gcGxheWVyXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlOyB3ZWItc2hhcmVcIiByZWZlcnJlcnBvbGljeT1cInN0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW5cIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpc3Q6ICdUdXJuIHRoZSBlZGdlIGFuZCBwbGFuZSBhbmQgdGVzdCB0aGF0IGl0IGlzIHNxdWFyZSB0byB0aGUgZmFjZSBhbmQgbWFyayBlZGdlIG1hcmsnLFxyXG4gICAgICAgICAgICB2aWRlbzogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICBsaXN0OiAnR2F1Z2UgdGhlIHRpbWJlciB0byBoYXZlIHVuaWZvcm0gdGhpY2tuZXNzIHVzaW5nIHRoZSBtYXJraW5nIGd1YWdlIGFuZCBwbGFuIG9mZiB0aGUgc3VycGx1cycsXHJcbiAgICAgICAgICAgIHZpZGVvOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpc3Q6ICdQbGFuZSB0aGUgb3RoZXIgZWRnZSB0byBnaXZlJyxcclxuICAgICAgICAgICAgdmlkZW86ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIHBhcnRzMS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHByb2NlZHVyZTIuYXBwZW5kQ2hpbGQoY3JlYXRlVmlkcyhpdGVtKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHByYWN0aWNhbHMuYXBwZW5kQ2hpbGQocHJvY2VkdXJlMik7XHJcbiAgICAgICAgY29uc3QgaGVhZDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIGhlYWQ1LnRleHRDb250ZW50ID0gJ1BSQUNUSUNBTCAzIDogVEVFIEhBTFZJTkcgSk9JTlRTJztcclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKGhlYWQ1KTtcclxuICAgICAgICBjb25zdCBwcm9jZWR1cmUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgaGVhZDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIGhlYWQ2LnRleHRDb250ZW50ID0gJ1BST0NFRFVSRVMnO1xyXG4gICAgICAgIHByb2NlZHVyZTMuYXBwZW5kQ2hpbGQoaGVhZDYpO1xyXG4gICAgICAgIGNvbnN0IHBhcnRzMiA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICBsaXN0OiAnTWFyayBvdXQgdGhlIHBpZWNlcyBvbmUgZm9yIHNvY2tldCBhbmQgdGhlIG90aGVyIGZvciBwaW4gdXNpbmcgdGFwZSwgbWFya2luZyBnYXVnZSwgcGVuY2lsIGFuZCB0cnkgc3F1YXJlJyxcclxuICAgICAgICAgICAgdmlkZW86ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGlzdDogJ0N1dCB0aGUgbWFya2luZyBsaW5lIGFzIHNwZWNpZmllZCB1c2luZyB0ZW5vbiBzYXcnLFxyXG4gICAgICAgICAgICB2aWRlbzogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICBsaXN0OiAnUmVtb3ZlIHRoZSB3YXN0ZSB1c2luZyBjaGlzZWwgYW5kIG1hbGxldCcsXHJcbiAgICAgICAgICAgIHZpZGVvOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpc3Q6ICdDbGVhbiB0aGUgYm90dG9tIHVzaW5nIHJhc3AnLFxyXG4gICAgICAgICAgICB2aWRlbzogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICBsaXN0OiAnQ3V0IHRoZSBwaW4gdG8gc2l6ZSB0aGUgcG9ja2V0JyxcclxuICAgICAgICAgICAgdmlkZW86ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGlzdDogJ0ZpeCB0aGUgam9pbnQgYnkgYXBwbHlpbmcgbGlnaHQgbWFsbGV0IGJlbG93JyxcclxuICAgICAgICAgICAgdmlkZW86ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGlzdDogJ1doZW4gcHJvcGVybHkgZml4IHRlc3QgZm9yIHNxdWFyZS1uZXNzIHVzaW5nIHRyeSBzcXVhcmUnLFxyXG4gICAgICAgICAgICB2aWRlbzogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgcGFydHMyLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcHJvY2VkdXJlMy5hcHBlbmRDaGlsZChjcmVhdGVWaWRzKGl0ZW0pKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZChwcm9jZWR1cmUzKTtcclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgZGVzY3JpcHRpb24yLnRleHRDb250ZW50ID0gJ1RoZSBsaW5rIHRvIHdhdGNoIGhvdyB0byBwZXJmb3JtIHRoZSBUZWUgaGFsdmluZyBKb2ludCBwcmFjdGljYWwgaXMgYmVsb3cg8J+Rhyc7XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbjIpO1xyXG4gICAgICAgIGNvbnN0IHZpZGVvNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHZpZGVvNC5pbm5lckhUTUwgPSAnPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLW5vY29va2llLmNvbS9lbWJlZC81eE9YUnlWSl8xQT9zaT1oNXM3YS1JSEN3TnNaZHpPXCIgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZTsgd2ViLXNoYXJlXCIgcmVmZXJyZXJwb2xpY3k9XCJzdHJpY3Qtb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPic7XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZCh2aWRlbzQpO1xyXG4gICAgICAgIGNvbnN0IGhlYWQ3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICBoZWFkNy50ZXh0Q29udGVudCA9ICdQUkFDVElDQUwgNDogRE9WRVRBSUwgSEFMVklORyBKT0lOVCc7XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZChoZWFkNyk7XHJcbiAgICAgICAgY29uc3QgcHJvY2VkdXJlNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGhlYWQ4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBoZWFkOC50ZXh0Q29udGVudCA9ICdQUk9DRURVUkVTJztcclxuICAgICAgICBwcm9jZWR1cmU0LmFwcGVuZENoaWxkKGhlYWQ4KTtcclxuICAgICAgICBjb25zdCBwYXJ0czMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGlzdDogJ01hcmsgb3V0IHRoZSB0d28gcGllY2VzLCBvbmUgaGF2aW5nIHRoZSBzb2NrZXQgYW5kIHRoZSBvdGhlciBkb3ZldGFpbCBwaW4nLFxyXG4gICAgICAgICAgICB2aWRlbzogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICBsaXN0OiAnVXNlIHRyeSBzcXVhcmUgdG8gdHJhbnNmZXIgdGhlIG1hcmtzIHRvIHRoZSBlZGdlcycsXHJcbiAgICAgICAgICAgIHZpZGVvOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpc3Q6ICdGaXJzdCBjdXQgdGhlIHNvY2tldCB1c2luZyBkb3ZldGFpbCBzYXcnLFxyXG4gICAgICAgICAgICB2aWRlbzogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICBsaXN0OiAnU2Nvb3Agb3V0IHRoZSB3YXN0ZSBhbmQgY2xlYW4gdXAgdXNpbmcgY2hpc2VscycsXHJcbiAgICAgICAgICAgIHZpZGVvOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxpc3Q6ICdDdXQgdGhlIHBpbiBhbmQgdGhlIGRvdmV0YWlsJyxcclxuICAgICAgICAgICAgdmlkZW86ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGlzdDogJ0luY2x1ZGluZyB0aGUgd2FzdGUgcG9ydGlvbiBjbGVhbiB0aGUgcGluIHVzaW5nIHBhcmluZyBjaGlzZWwnLFxyXG4gICAgICAgICAgICB2aWRlbzogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICBsaXN0OiAnRml4IGFuZCBhZGp1c3QgYnkgcmVtb3ZpbmcgdW53YW50ZWQgcGFydHMnLFxyXG4gICAgICAgICAgICB2aWRlbzogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGlzdDogJ0ZpeCBmaW5hbGx5IG1ha2luZyBzdXJlIHRoZXJlIGlzIGEgZmx1c2ggc3VyZmFjZScsXHJcbiAgICAgICAgICAgICAgICB2aWRlbzogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdDogJ1BsYW4gdGhlIGpvaW50IGFuZCB0ZXN0IGZvciBzcXVhcmUtbmVzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgdmlkZW86ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgcGFydHMzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcHJvY2VkdXJlNC5hcHBlbmRDaGlsZChjcmVhdGVWaWRzKGl0ZW0pKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZChwcm9jZWR1cmU0KTtcclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgZGVzY3JpcHRpb24zLnRleHRDb250ZW50ID0gJ1RoZSBsaW5rIHRvIHdhdGNoIGhvdyB0byBwZXJmb3JtIHRoZSBEb3ZldGFpbCBoYWx2aW5nIEpvaW50IHByYWN0aWNhbCBpcyBiZWxvdyDwn5GHJztcclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uMyk7XHJcbiAgICAgICAgY29uc3QgdmlkZW81ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdmlkZW81LmlubmVySFRNTCA9ICc8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUtbm9jb29raWUuY29tL2VtYmVkLzlqZ1JmZWY0Wm5FP3NpPVF5ZkNnMFhpVVJWb3dtZkhcIiB0aXRsZT1cIllvdVR1YmUgdmlkZW8gcGxheWVyXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlOyB3ZWItc2hhcmVcIiByZWZlcnJlcnBvbGljeT1cInN0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW5cIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+JztcclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKHZpZGVvNSk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChwcmFjdGljYWxzKTtcclxuICAgICAgICBjb25zdCBwcmVjYXV0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IGNhdXRpb25IZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBjYXV0aW9uSGVhZC50ZXh0Q29udGVudCA9IFwiUFJFQ0FVVElPTlNcIjtcclxuICAgICAgICBwcmVjYXV0aW9uLmFwcGVuZENoaWxkKGNhdXRpb25IZWFkKTtcclxuICAgICAgICBjb25zdCBjYXV0aW9uTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgY29uc3QgcHJlY2F1dGlvbnMgPSBbXCJJIGVuc3VyZWQgdGhhdCBJIHdvcmUgbXkgbGFiIGNvYXQgYW5kIHBlcnNvbmFsIHByb3RlY3RpdmUgZXF1aXBtZW50IChQUEUpXCIsXCJJIGVuc3VyZWQgdGhhdCBwcm9wZXIgdGVjaG5pcXVlcyBmb3IgY3V0dGluZywgZHJpbGxpbmcsIGFuZCBzYW5kaW5nIHRvIG1pbmltaXplIHRoZSByaXNrIG9mIGFjY2lkZW50cy5cIixcIkkgZW5zdXJlZCB0aGF0IEkgYXZvaWRlZCBjdXR0aW5nIHRvd2FyZHMgeW91cnNlbGYgYW5kIGtlZXAgeW91ciBoYW5kcyBhbmQgZmluZ2VycyBhd2F5IGZyb20gYmxhZGVzIGFuZCBtb3ZpbmcgcGFydHMuXCJdO1xyXG4gICAgICAgIGxldCBjYXV0aW9uQm94ID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByZWNhdXRpb25zLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgY2F1dGlvbkJveFtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIGNhdXRpb25Cb3hbaV0udGV4dENvbnRlbnQgPSBwcmVjYXV0aW9uc1tpXTtcclxuICAgICAgICAgICAgY2F1dGlvbkxpc3QuYXBwZW5kQ2hpbGQoY2F1dGlvbkJveFtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByZWNhdXRpb24uYXBwZW5kQ2hpbGQoY2F1dGlvbkxpc3QpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQocHJlY2F1dGlvbik7XHJcbiAgICAgICAgY29uc3QgY29uY2x1c2lvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCBjb25jSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgY29uY0hlYWQudGV4dENvbnRlbnQgPSBcIkNPTkNMVVNJT046XCI7XHJcbiAgICAgICAgY29uY2x1c2lvbi5hcHBlbmRDaGlsZChjb25jSGVhZCk7XHJcbiAgICAgICAgY29uc3QgY29uY1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgY29uY1RleHQudGV4dENvbnRlbnQgPSBcIkF0IHRoZSBlbmQgb2YgdGhpcyBleHBlcmltZW50LCBjdXR0aW5nIG9mIHdvb2QsIHBsYW5uaW5nIG9mIHdvb2Qgd2FzIHVuZGVyc3Rvb2QgYW5kIGFsc28gYSB0ZWUgaGFsdmluZyBqb2ludCwgZG92ZXRhaWwgaGFsdmluZyBqb2ludCB3YXMgZGV2ZWxvcGVkIGFuZCB3YXMgYWxzbyB1bmRlcnN0b29kLlwiO1xyXG4gICAgICAgIGNvbmNsdXNpb24uYXBwZW5kQ2hpbGQoY29uY1RleHQpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoY29uY2x1c2lvbik7XHJcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCByZWZIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICByZWZIZWFkLnRleHRDb250ZW50ID0gXCJSRUZFUkVOQ0VTXCI7XHJcbiAgICAgICAgcmVmZXJlbmNlcy5hcHBlbmRDaGlsZChyZWZIZWFkKTtcclxuICAgICAgICBjb25zdCByZWZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICBjb25zdCByZWZlcmVuY2UgPSBbXCJQcm9kdWN0aW9uIEVuZ2luZWVyaW5nIExhYm9yYXRvcnkgTWFudWFsIGZvciBFTEEyMDEgYW5kIEVMQTIwMiBieSBEZXBhcnRtZW50IG9mIFByb2R1Y3Rpb24gRW5naW5lZXJpbmcsIFVuaXZlcnNpdHkgb2YgQmVuaW4uXCIsIFwiRm91bmRhdGlvbnMgb2YgV29vZHdvcmtpbmc6IEVzc2VudGlhbCBKb2luZXJ5IFRlY2huaXF1ZXMgYW5kIEJ1aWxkaW5nIFN0cmF0ZWdpZXMgYnkgTWljaGFlbCBQZWtvdmljaFwiLCBcIlRoZSBDb21wbGV0ZSBNYW51YWwgb2YgV29vZHdvcmtpbmcgYnkgQWxiZXJ0IEphY2tzb24sIERhdmlkIERheSwgYW5kIFNpbW9uIEplbm5pbmdzXCJdO1xyXG4gICAgICAgIGxldCByZWZCb3ggPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcmVmZXJlbmNlLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgcmVmQm94W2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgcmVmQm94W2ldLnRleHRDb250ZW50ID0gcmVmZXJlbmNlW2ldO1xyXG4gICAgICAgICAgICByZWZMaXN0LmFwcGVuZENoaWxkKHJlZkJveFtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlZmVyZW5jZXMuYXBwZW5kQ2hpbGQocmVmTGlzdCk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChyZWZlcmVuY2VzKTtcclxuICAgICAgICBjb25zdCBob3ZlciA9IGNyZWF0ZUhvdmVyKCcjJyk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChob3Zlcik7IFxyXG4gICAgICAgIGNvbnN0IGRvd25sb2FkID0gY3JlYXRlRG93bmxvYWQoJyMnKTtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGRvd25sb2FkKTtcclxufTtcclxuXHJcblxyXG5jb25zdCBkaXNwbGF5U00yMDEgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtYWluID0gcmVzZXQoKTtcclxuICAgICAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICBoZWFkLnRleHRDb250ZW50ICA9ICdJbnRyb2R1Y3Rpb24gdG8gc2hlZXQgbWV0YWwgd29ya3tTTTIwMX0nO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoaGVhZCk7XHJcbiAgICAgICAgY29uc3Qgb2JqZWN0aXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IG9iakhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIG9iakhlYWQudGV4dENvbnRlbnQgPSAnT0JKRUNUSVZFUyc7XHJcbiAgICAgICAgb2JqZWN0aXZlLmFwcGVuZENoaWxkKG9iakhlYWQpO1xyXG4gICAgICAgIGNvbnN0IG9iakxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIGNvbnN0IG9iamVjdGl2ZXMgPSBbJ1RvIGtub3cgdGhlIHByb2Nlc3NlcyBpbnZvbHZlZCBpbiBzaGVldCBtZXRhbCBwcmFjdGljZScsICdUbyBrbm93IHRoZSBtZXRhbHMgdXNlZCBpbiBzaGVldCBtZXRhbCBwcmFjdGljZScsICdUbyBmYW1pbGlhcml6ZSB3aXRoIHRoZSB2YXJpb3VzIGhhbmQgdG9vbHMgdXNlZCBpbiBzaGVldCBtZXRhbCBwcmFjdGljZScsJ1RvIGtub3cgdGhlIHZhcmlvdXMgc2hlZXQgbWV0YWwgb3BlcmF0aW9ucycsICdUbyBwcm9kdWNlIGEgcmVjdGFuZ3VsYXIgcGxhdGUnXTtcclxuICAgICAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBvYmplY3RpdmVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgbGlzdFtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIGxpc3RbaV0udGV4dENvbnRlbnQgPSBvYmplY3RpdmVzW2ldO1xyXG4gICAgICAgICAgICBvYmpMaXN0LmFwcGVuZENoaWxkKGxpc3RbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYmplY3RpdmUuYXBwZW5kQ2hpbGQob2JqTGlzdCk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChvYmplY3RpdmUpO1xyXG4gICAgICAgIGNvbnN0IGFwcEhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIGFwcEhlYWQudGV4dENvbnRlbnQgPSAnQXBwYXJhdHVzJztcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGFwcEhlYWQpO1xyXG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdhcHBCb3gnKTtcclxuICAgICAgICBjb25zdCBhcHBhcmF0dXMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ1N0ZWVsIFNjYWxlJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWMxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ1dpcmUgZ3VhZ2UnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnTWljcm9tZXRlcicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdWZXJuaWVyIENhbGxpcGVyJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWMxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ1N0ZWVsIHNxdWFyZScsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdEaXZpZGVyJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWMxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ1NjcmliZXInLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnVHJhbW1lbCBQb2ludCcsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdIYW5kIHNuaXBzJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWMxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ1B1bmNoZXMnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnUHVuY2hlcycsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdDaGlzZWwnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnUGxpZXInLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnU29sZGVyaW5nIElyb24nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnSGFtbWVyJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWMxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ0ZpbGVzJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWMxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ01hbGxldCcsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljMVxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICBdO1xyXG4gICAgICAgIGxldCBhcHBCb3ggPSBbXTtcclxuICAgICAgICBsZXQgYXBwSW1hZ2UgPSBbXTtcclxuICAgICAgICBsZXQgYXBwQ2FwdGlvbiA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcHBhcmF0dXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBhcHBCb3hbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgYXBwSW1hZ2VbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgYXBwQ2FwdGlvbltpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgYXBwSW1hZ2VbaV0uc3JjID0gIGFwcGFyYXR1c1tpXS5pbWFnZTtcclxuICAgICAgICAgICAgYXBwQ2FwdGlvbltpXS50ZXh0Q29udGVudCA9IGFwcGFyYXR1c1tpXS5jYXA7XHJcbiAgICAgICAgICAgIGFwcEJveFtpXS5hcHBlbmRDaGlsZChhcHBJbWFnZVtpXSk7XHJcbiAgICAgICAgICAgIGFwcEJveFtpXS5hcHBlbmRDaGlsZChhcHBDYXB0aW9uW2ldKTtcclxuICAgICAgICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChhcHBCb3hbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHNlY3Rpb24pO1xyXG4gICAgICAgIGNvbnN0IHRoZW9yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCB0aGVvSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgdGhlb0hlYWQudGV4dENvbnRlbnQgPSAnVEhFT1JZJztcclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQodGhlb0hlYWQpO1xyXG4gICAgICAgIGNvbnN0IGV4cGxhaW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBleHBsYWluLnRleHRDb250ZW50ID0gJ1NoZWV0IG1ldGFsIHJlZmVycyB0byB0aGluLCBmbGF0IG1ldGFsIHNoZWV0cyB0aGF0IGFyZSB0eXBpY2FsbHkgbGVzcyB0aGFuIDZtbSAoMC4yNSBpbmNoZXMpIHRoaWNrLiBJdCBpcyBhIHZlcnNhdGlsZSBtYXRlcmlhbCB1c2VkIGluIHZhcmlvdXMgaW5kdXN0cmllcyBmb3IgYSB3aWRlIHJhbmdlIG9mIGFwcGxpY2F0aW9ucyBkdWUgdG8gaXRzIHN0cmVuZ3RoLCBkdXJhYmlsaXR5LCBhbmQgZWFzZSBvZiBzaGFwaW5nLiBTaGVldCBtZXRhbCBpcyBjb21tb25seSBtYWRlIGZyb20gbWF0ZXJpYWxzIHN1Y2ggYXMgc3RlZWwsIGFsdW1pbnVtLCBicmFzcywgY29wcGVyLCB0aW4sIGFuZCBuaWNrZWwuIFNoZWV0IG1ldGFsIHdvcmsgaXMgdGhlIHByb2Nlc3Mgb2YgY3JlYXRpbmcgb2JqZWN0cyBmcm9tIHRoaW4gc2hlZXRzIG9mIG1ldGFsLiBUaGUgbWV0YWwgaXMgdHlwaWNhbGx5IGN1dCwgYmVudCwgYW5kIHNoYXBlZCBpbnRvIHRoZSBkZXNpcmVkIGZvcm0uICc7XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKGV4cGxhaW4pO1xyXG4gICAgICAgIGNvbnN0IGV4cGxhaW4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZXhwbGFpbjEudGV4dENvbnRlbnQgPSAnVGhlcmUgYXJlIGRpZmZlcmVudCBraW5kcyBvZiBzaGVldCBtZXRhbCB0ZWNobmlxdWVzIGFuZCB0aGVzZSB0ZWNobmlxdWVzIG9yIG9wZXJhdGlvbnMgaW5jbHVkZTonO1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZChleHBsYWluMSk7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdDdXR0aW5nJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdTaGVldHMgY2FuIGJlIGN1dCB1c2luZyB2YXJpb3VzIG1ldGhvZHMsIGluY2x1ZGluZyBzaGVhcmluZywgd2hpY2ggaW52b2x2ZXMgdXNpbmcgYSBjdXR0aW5nIHRvb2wgdG8gdHJpbSB0aGUgbWV0YWwgYWxvbmcgYSBzdHJhaWdodCBsaW5lLCBvciBsYXNlciBjdXR0aW5nLCB3aGljaCB1c2VzIGEgZm9jdXNlZCBsYXNlciBiZWFtIHRvIG1ha2UgcHJlY2lzZSBjdXRzLicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdCZW5kaW5nJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdCZW5kaW5nIGlzIHRoZSBwcm9jZXNzIG9mIGRlZm9ybWluZyB0aGUgc2hlZXQgbWV0YWwgYWxvbmcgYSBzdHJhaWdodCBheGlzIHRvIGNyZWF0ZSBhbmdsZXMgb3IgY29tcGxleCBzaGFwZXMuIFRoaXMgaXMgdXN1YWxseSBkb25lIHVzaW5nIHNwZWNpYWxpemVkIG1hY2hpbmVzIGxpa2UgcHJlc3MgYnJha2VzLicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdGb3JtaW5nJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdGb3JtaW5nIHJlZmVycyB0byBzaGFwaW5nIHRoZSBzaGVldCBtZXRhbCBpbnRvIHRocmVlLWRpbWVuc2lvbmFsIGZvcm1zIG90aGVyIHRoYW4gZmxhdCBzaGVldHMuIFRoaXMgY2FuIGJlIGFjaGlldmVkIHRocm91Z2ggcHJvY2Vzc2VzIGxpa2Ugcm9sbCBmb3JtaW5nLCB3aGVyZSB0aGUgbWV0YWwgaXMgcGFzc2VkIHRocm91Z2ggYSBzZXJpZXMgb2Ygcm9sbGVycyB0byBjcmVhdGUgYSBkZXNpcmVkIHNoYXBlLicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdKb2luaW5nJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdTaGVldCBtZXRhbCBjb21wb25lbnRzIGFyZSBvZnRlbiBqb2luZWQgdG9nZXRoZXIgdXNpbmcgdmFyaW91cyBtZXRob2RzIHN1Y2ggYXMgd2VsZGluZywgcml2ZXRpbmcsIG9yIHVzaW5nIGFkaGVzaXZlcy4gV2VsZGluZyBpbnZvbHZlcyBtZWx0aW5nIHRoZSBtZXRhbCBhdCB0aGUgam9pbnQgdG8gZnVzZSB0aGVtIHRvZ2V0aGVyLCB3aGlsZSByaXZldGluZyB1c2VzIG1lY2hhbmljYWwgZmFzdGVuZXJzIHRvIGhvbGQgdGhlIHNoZWV0cyBpbiBwbGFjZS4nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnUHVuY2hpbmcnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ0NyZWF0aW5nIGhvbGVzIG9yIHBlcmZvcmF0aW9ucyBpbiBtZXRhbCBzaGVldHMgdXNpbmcgYSBwdW5jaCBhbmQgZGllIHNldCwgd2hpY2ggYXBwbGllcyBmb3JjZSB0byBwZW5ldHJhdGUgdGhlIG1hdGVyaWFsIGV0Yy4nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTWV0YWwgRm9ybWluZycsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnVGhlIHByb2Nlc3Mgb2Ygc2hhcGluZyBvciBiZW5kaW5nIGEgc2hlZXQgbWV0YWwgaW4gdGhyZWUgZGltZW5zaW9ucyB0byBnaXZlIGl0IHRoZSBkZXNpcmVkIHNoYXBlIGFuZCBzaXplIG9mIHRoZSBmaW5hbCBwcm9kdWN0IGlzIHRlcm1lZCBhcyBtZXRhbCBmb3JtaW5nLicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTb2xkZXJpbmcnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ2lzIGEgdGVjaG5pcXVlIGZvciBqb2luaW5nIG1ldGFscyB0b2dldGhlciB1c2luZyBhIG1lbHRlZCBtZXRhbCBhbGxveSB3aXRoIGEgbG93ZXIgbWVsdGluZyBwb2ludCB0aGFuIHRoZSBwYXJ0cyB5b3UgYXJlIGpvaW5pbmcuIFRoaXMgYWxsb3ksIGNhbGxlZCBzb2xkZXIsIGlzIHR5cGljYWxseSBtYWRlIG9mIHRpbiBhbmQgbGVhZCwgYnV0IGxlYWQtZnJlZSBzb2xkZXJzIGFyZSBiZWNvbWluZyBtb3JlIGNvbW1vbi4nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoY3JlYXRlRGl2cyhpdGVtKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJ0NvbW1vbiBtZXRhbCBzaGVldHMgdXNlZCBpbiBzaGVldCBtZXRhbCB3b3JrIGFyZTonO1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcbiAgICAgICAgY29uc3QgcGFydCA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0JsYWNrIHBsYWluIHNoZWV0IG9yIGhvdCByb2xsZWQgc2hlZXQnLFxyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgaW1hZ2U6IHBpYzFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0NvbGQgcm9sbGVkIHNoZWV0ICgwLjEg4oCTIDAuMyUgb2YgY2FyYm9uICknLFxyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgaW1hZ2U6IHBpYzFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0dhbHZhbml6ZWQgcGxhaW4gc2hlZXQnLFxyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgaW1hZ2U6IHBpYzFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0FsdW1pbnVtIHNoZWV0JyxcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIGltYWdlOiBwaWMxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdDb3BwZXIgc2hlZXQnLFxyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgaW1hZ2U6IHBpYzFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1RpbiBzaGVldCcsXHJcbiAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICBpbWFnZTogcGljMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnU3RhaW5sZXNzIHN0ZWVsIHNoZWV0IChjb250YWlucyAxOCUgQ2hyb21pdW0sIDglIE5pY2tlbCwgbGVzcyB0aGFuIDElIGNhcmJvbiwgcmVzdCBpcyBpcm9uJyxcclxuICAgICAgICAgICAgdGV4dDogJycsXHJcbiAgICAgICAgICAgIGltYWdlOiBwaWMxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdCcmFzcyBzaGVldHMnLFxyXG4gICAgICAgICAgICB0ZXh0OiAnJyxcclxuICAgICAgICAgICAgaW1hZ2U6IHBpYzFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgcGFydC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZChjcmVhdGVEaXZzKGl0ZW0pKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZCh0aGVvcnkpO1xyXG4gICAgICAgIGNvbnN0IHByYWN0aWNhbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3Qgc3RlcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIHN0ZXAxLnRleHRDb250ZW50ID0gJ1BSQUNUSUNBTCAxIDogSE9XIFRPIE1BS0UgUkVDVEFOR1VMQVIgVFJBWS4nO1xyXG4gICAgICAgIHByYWN0aWNhbHMuYXBwZW5kQ2hpbGQoc3RlcDEpO1xyXG4gICAgICAgIGNvbnN0IHN0ZXAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBzdGVwMy50ZXh0Q29udGVudCA9ICdQUk9DRURVUkU6JztcclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKHN0ZXAzKTtcclxuICAgICAgICBjb25zdCBzdGVwTGlzdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIGNvbnN0IHN0ZXBzMSA9IFtcIkRyYXcgMkQvM0Qgc2tldGNoZXMgYXMgcGVyIHNjYWxlXCIsJ0RyYXcgdGhlIGRldmVsb3BtZW50IGNvbnNpZGVyaW5nIGFsbCB0aGUgbGluZXMgbXVzdCBiZSBhIOKAnFRydWUgbGVuZ3Ro4oCdJywgJ0NvbnN0cnVjdCB0aGUgYmFzZSBvZiB0aGUgdHJheScsICdDb25zdHJ1Y3QgdGhlIHR3byBzaWRlcyBvZiB0aGUgdHJheScsICdDb25zdHJ1Y3QgdGhlIHR3byBlbmRzIG9mIHRoZSB0cmF5JywgJ1NldCA1bW0gZXh0cmEsIGFsbG93YW5jZSBvbiB0aGUgc2lkZSBmYWNlIGZvciBqb2luaW5nIHRoZSBjb3JuZXJzIGJ5IHNlYW1pbmcnLCAnTm90Y2ggdGhlIHBvaW50cyB0byBwcmV2ZW50IGJ1bGdpbmcgb24gc2VhbWluZycsICdDdXQgdGhlIGRldmVsb3BtZW50IHNoYXBlcyBvbiBsaW5lcyAgYnkgdXNpbmcgcGFwZXIgY3V0dGluZyBzY2lzc29yJywgJ1BsYWNlIGFuZCBmaXggdGhlIGRldmVsb3BtZW50IG9uIGdpdmVuIEcuUCBzaGVldCBieSB1c2luZyBzdGlja2VyJywgJ1B1bmNoIHR3byBwb2ludHMgb24gZWFjaCBiZW5kaW5nIGxpbmUnLCAnTWFyayB0aGUgYm91bmRhcnkgbGluZSBieSB1c2luZyBtYXJraW5nIHBlbicsICdSZW1vdmUgdGhlIHBhcGVyIGRldmVsb3BtZW50IGpvaW4gdGhlIHR3byBwdW5jaCBwb2ludHMgYnkgYSBzY3JpYmVyIG9yIG1hcmtpbmcgcGVuJywgJ1JlbW92ZSB0aGUgcGFwZXIgZGV2ZWxvcG1lbnQgam9pbiB0aGUgdHdvIHBvaW50cyBieSBhIHNjcmliZXIgb3IgbWFya2luZyBwZW4nLCAnU2hlYXIgdGhlIGJvdW5kYXJ5IGxpbmVzIGJ5IGhhbmQgc25pcCcsICdGbGF0dGVyaW5nIHRoZSBzaGVldCBieSB1c2luZyBtYWxsZXQgb24gZmxhdHRlcicsICdBbHdheXMgYmVuZCB0aGUgc2VhbWluZyBsaW5lIGZpcnN0IGFuZCByZW1haW5pbmcgbGluZXMgdG8gZ2V0IHRoZSBkZXNpcmVkIHNoYXBlIGJ5IGZvcm1pbmcnLCAnRmluaXNoIHRoZSBzdXJmYWNlIGtlZXBpbmcgb24gc3Rha2UgdG8gc2hhcGUnLCAnU29sZGVyIHRoZSBqb2ludCcsICdGaW5pc2ggc3VyZmFjZSBmaW5pc2hpbmcgYW5kIGNvbXBsZXRlIHRoZSB0cmF5LiddO1xyXG4gICAgICAgIGxldCBzdGVwQm94MSA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzdGVwczEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBzdGVwQm94MVtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIHN0ZXBCb3gxW2ldLnRleHRDb250ZW50ID0gc3RlcHMxW2ldO1xyXG4gICAgICAgICAgICBzdGVwTGlzdDEuYXBwZW5kQ2hpbGQoc3RlcEJveDFbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKHN0ZXBMaXN0MSk7XHJcbiAgICAgICAgY29uc3QgdGV4dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgdGV4dDMudGV4dENvbnRlbnQgPSAnVGhlIGxpbmsgdG8gd2F0Y2ggaG93IHRvIG1ha2UgcmVjdGFuZ3VsYXIgdHJheSBpcyBiZWxvdyDwn5GHJztcclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKHRleHQzKTtcclxuICAgICAgICBjb25zdCB2aWRlbzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB2aWRlbzMuaW5uZXJIVE1MID0gJzxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS1ub2Nvb2tpZS5jb20vZW1iZWQvZk5CMXN1blE2Nmc/c2k9clR4SlczM0g4TEh0TFZfMlwiIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmU7IHdlYi1zaGFyZVwiIHJlZmVycmVycG9saWN5PVwic3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpblwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nO1xyXG4gICAgICAgIHByYWN0aWNhbHMuYXBwZW5kQ2hpbGQodmlkZW8zKTtcclxuICAgICAgICBjb25zdCBzdGVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICBzdGVwLnRleHRDb250ZW50ID0gJ1BSQUNUSUNBTCAyIDogSE9XIFRPIE1BS0UgRFVTVCBQQU4nO1xyXG4gICAgICAgIHByYWN0aWNhbHMuYXBwZW5kQ2hpbGQoc3RlcCk7XHJcbiAgICAgICAgY29uc3Qgc3RlcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIHN0ZXAyLnRleHRDb250ZW50ID0gJ1BST0NFRFVSRTonO1xyXG4gICAgICAgIHByYWN0aWNhbHMuYXBwZW5kQ2hpbGQoc3RlcDIpO1xyXG4gICAgICAgIGNvbnN0IHN0ZXBMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICBjb25zdCBzdGVwcyA9IFsnRHJhdyB0aGUgMkQvM0Qgc2tldGNoZXMgYXMgcGVyIHNjYWxlJywgJ0RyYXcgdGhlIGRldmVsb3BtZW50IGNvbnNpZGVyaW5nIGFsbCBsaW5lcyBtdXN0IGJlIGEg4oCcVHJ1ZSBsZW5ndGjigJ0nLCAnQ29uc3RydWN0IHRoZSBiYXNlIG9mIHRoZSB0cmF5JywgJ0NvbnN0cnVjdCB0aGUgdHdvIHNpZGVzIG9mIHRoZSB0cmF5JywgJ0NvbnN0cnVjdCB0aGUgdHdvIGVuZHMgb2YgdGhlIHRyYXknLCAnU2V0IDVtbSBleHRyYSwgYWxsb3dhbmNlIG9uIHNpZGUgZmFjZSBmb3Igam9pbmluZyB0aGUgY29ybmVycyBieSBzZWFtaW5nJywgJ05vdGNoIHRoZSBwb2ludHMgdG8gcHJldmVudCBidWxnaW5nIG9uIHNlYW1pbmcnLCAnQ3V0IHRoZSBkZXZlbG9wbWVudCBzaGFwZSBvbiBsaW5lcyB1c2luZyBwYXBlciBjdXR0aW5nIHNjaXNzb3InLCAnUGxhY2UgYW5kIGZpeCB0aGUgZGV2ZWxvcG1lbnQgb24gZ2l2ZW4gRy5QIHNoZWV0IGJ5IHVzaW5nIHN0aWNrZXInLCAnUHVuY2ggdHdvIHBvaW50cyBvbiBlYWNoIGJlbmRpbmcgbGluZScsICdNYXJrIHRoZSBib3VuZGFyeSBsaW5lIGJ5IHVzaW5nIG1hcmtpbmcgcGVuJywgJ1JlbW92ZSB0aGUgcGFwZXIgZGV2ZWxvcG1lbnQgam9pbiB0aGUgdHdvIHB1bmNoIHBvaW50cyBieSBhIHNjcmliZXIgb3IgbWFya2luZyBwZW4nLCAnU2hlYXIgdGhlIGJvdW5kYXJ5IGxpbmVzIGJ5IHVzaW5nIGhhbmQgc25pcCcsICdGbGF0dGVyaW5nIHRoZSBzaGVldCBieSB1c2luZyBtYWxsZXQgb24gZmxhdHRlcicsICdBbHdheXMgYmVuZCB0aGUgc2VhbWluZyBsaW5lIGZpcnN0IGFuZCByZW1haW5pbmcgbGluZXMgdG8gZ2V0IHRoZSBkZXNpcmVkIHNoYXBlIGJ5IGZvcm1pbmcnLCAnRmluaXNoIHRoZSBzdXJmYWNlIGtlZXBpbmcgb24gc3Rha2UgdG8gc2hhcGUnLCAnU29sZGVyIHRoZSBqb2ludCcsICdGaW5pc2ggdGhlIHN1cmZhY2UgZmluaXNoaW5nIGFuZCBjb21wbGV0ZSB0aGUgdHJheS4nXTtcclxuICAgICAgICBsZXQgc3RlcEJveCA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzdGVwcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHN0ZXBCb3hbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICBzdGVwQm94W2ldLnRleHRDb250ZW50ID0gc3RlcHNbaV07XHJcbiAgICAgICAgICAgIHN0ZXBMaXN0LmFwcGVuZENoaWxkKHN0ZXBCb3hbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKHN0ZXBMaXN0KTtcclxuICAgICAgICBjb25zdCB0ZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICB0ZXh0Mi50ZXh0Q29udGVudCA9ICdUaGUgbGluayB0byB3YXRjaCBob3cgbWFrZSBkdXN0cGFuIGlzIGJlbG93IPCfkYcnO1xyXG4gICAgICAgIHByYWN0aWNhbHMuYXBwZW5kQ2hpbGQodGV4dDIpO1xyXG4gICAgICAgIGNvbnN0IHZpZGVvMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHZpZGVvMi5pbm5lckhUTUwgPSAnPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLW5vY29va2llLmNvbS9lbWJlZC9vemVPdnFzYmlyTT9zaT1CWmR2eHJWckw0YkJNX0FjXCIgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZTsgd2ViLXNoYXJlXCIgcmVmZXJyZXJwb2xpY3k9XCJzdHJpY3Qtb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPic7XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZCh2aWRlbzIpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQocHJhY3RpY2Fscyk7XHJcbiAgICAgICAgY29uc3QgcHJlY2F1dGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCBjYXV0aW9uSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgY2F1dGlvbkhlYWQudGV4dENvbnRlbnQgPSBcIlBSRUNBVVRJT05TXCI7XHJcbiAgICAgICAgcHJlY2F1dGlvbi5hcHBlbmRDaGlsZChjYXV0aW9uSGVhZCk7XHJcbiAgICAgICAgY29uc3QgY2F1dGlvbkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIGNvbnN0IHByZWNhdXRpb25zID0gW1wiSSBlbnN1cmVkIHRoYXQgSSB3b3JlIG15IGxhYiBjb2F0IGFuZCBwZXJzb25hbCBwcm90ZWN0aXZlIGVxdWlwbWVudCAoUFBFKVwiLFwiSSBlbnN1cmVkIHRoYXQgcHJvcGVyIHRlY2huaXF1ZXMgZm9yIGN1dHRpbmcsIGRyaWxsaW5nLCBhbmQgc2FuZGluZyB0byBtaW5pbWl6ZSB0aGUgcmlzayBvZiBhY2NpZGVudHMuXCIsXCJJIGVuc3VyZWQgdGhhdCBJIGNoZWNrZWQgYWxsIHRvb2xzIGFuZCBtYWNoaW5lcnkgZm9yIGRhbWFnZSBvciBtYWxmdW5jdGlvbnMgYmVmb3JlIHVzaW5nIHRoZW0gYW5kIGFsc28gdmVyaWZpZWQgdGhhdCBldmVyeSBndWFyZCBpcyBwcmVzZW50IGFuZCBvcGVyYXRpbmcgYXMgaW50ZW5kZWQuXCIsIFwiSSBlbnN1cmVkIHRoYXQgSSB3YXMgbWluZGZ1bCBvZiB3aGVyZSBteSBoYW5kcyB3ZXJlIGFuZCBhdm9pZCByZWFjaGluZyB1bmRlciBvciBiZWhpbmQgbWFjaGluZXJ5IGJlY2F1c2Ugc2hlZXQgbWV0YWwgY2FuIGhhdmUgdmVyeSBzaGFycCBlZGdlcyB0aGF0IGNhbiBlYXNpbHkgY3V0IHNvbWVvbmUuXCJdO1xyXG4gICAgICAgIGxldCBjYXV0aW9uQm94ID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByZWNhdXRpb25zLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgY2F1dGlvbkJveFtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIGNhdXRpb25Cb3hbaV0udGV4dENvbnRlbnQgPSBwcmVjYXV0aW9uc1tpXTtcclxuICAgICAgICAgICAgY2F1dGlvbkxpc3QuYXBwZW5kQ2hpbGQoY2F1dGlvbkJveFtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByZWNhdXRpb24uYXBwZW5kQ2hpbGQoY2F1dGlvbkxpc3QpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQocHJlY2F1dGlvbik7XHJcbiAgICAgICAgY29uc3QgY29uY2x1c2lvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCBjb25jSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgY29uY0hlYWQudGV4dENvbnRlbnQgPSBcIkNPTkNMVVNJT046XCI7XHJcbiAgICAgICAgY29uY2x1c2lvbi5hcHBlbmRDaGlsZChjb25jSGVhZCk7XHJcbiAgICAgICAgY29uc3QgY29uY1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgY29uY1RleHQudGV4dENvbnRlbnQgPSBcIkF0IHRoZSBlbmQgb2YgdGhpcyBleHBlcmltZW50LCB3ZSB3ZXJlIGFibGUgdG8gbWFrZSBhIHJlY3Rhbmd1bGFyIHRyYXksIGR1c3RwYW4gYnkgdXNpbmcgZGlmZmVyZW50IHNoZWV0IG1ldGFsIHByb2Nlc3NlcywgdGVjaG5pcXVlcyBhbmQgYWxzbyB1c2VkIHRoZSBkaWZmZXJlbnQgbWF0ZXJpYWxzIGludm9sdmVkIGluIHNoZWV0IG1ldGFsIHByYWN0aWNlLlwiO1xyXG4gICAgICAgIGNvbmNsdXNpb24uYXBwZW5kQ2hpbGQoY29uY1RleHQpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoY29uY2x1c2lvbik7XHJcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCByZWZIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICByZWZIZWFkLnRleHRDb250ZW50ID0gXCJSRUZFUkVOQ0VTXCI7XHJcbiAgICAgICAgcmVmZXJlbmNlcy5hcHBlbmRDaGlsZChyZWZIZWFkKTtcclxuICAgICAgICBjb25zdCByZWZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICBjb25zdCByZWZlcmVuY2UgPSBbXCJQcm9kdWN0aW9uIEVuZ2luZWVyaW5nIExhYm9yYXRvcnkgTWFudWFsIGZvciBFTEEyMDEgYW5kIEVMQTIwMiBieSBEZXBhcnRtZW50IG9mIFByb2R1Y3Rpb24gRW5naW5lZXJpbmcsIFVuaXZlcnNpdHkgb2YgQmVuaW4uXCIsIFwiU2hlZXQgTWV0YWwgRmFicmljYXRpb24gQmFzaWNzIGJ5IFRpbSBSZW11c1wiLCBcIlNoZWV0IE1ldGFsIEZvcm1pbmcgUHJvY2Vzc2VzIGFuZCBBcHBsaWNhdGlvbnMgYnkgVGF5bGFuIEFsdGFuLCBFcm1hbiBUZWtrYXlhLCBhbmQgR8O8bnRlciBIaXJ0XCJdO1xyXG4gICAgICAgIGxldCByZWZCb3ggPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcmVmZXJlbmNlLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgcmVmQm94W2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgcmVmQm94W2ldLnRleHRDb250ZW50ID0gcmVmZXJlbmNlW2ldO1xyXG4gICAgICAgICAgICByZWZMaXN0LmFwcGVuZENoaWxkKHJlZkJveFtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlZmVyZW5jZXMuYXBwZW5kQ2hpbGQocmVmTGlzdCk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChyZWZlcmVuY2VzKTtcclxuICAgICAgICBjb25zdCBob3ZlciA9IGNyZWF0ZUhvdmVyKCcjJyk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChob3Zlcik7XHJcbiAgICAgICAgY29uc3QgZG93bmxvYWQgPSBjcmVhdGVEb3dubG9hZCgnIycpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoZG93bmxvYWQpO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IGRpc3BsYXlCRjIwMSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1haW4gPSByZXNldCgpO1xyXG4gICAgICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgIGhlYWQudGV4dENvbnRlbnQgID0gJ0ludHJvZHVjdGlvbiB0byBmaXR0aW5nIHNob3B7QkYyMDF9JztcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGhlYWQpO1xyXG4gICAgICAgIGNvbnN0IG9iamVjdGl2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCBvYmpIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICBvYmpIZWFkLnRleHRDb250ZW50ID0gJ09CSkVDVElWRVMnO1xyXG4gICAgICAgIG9iamVjdGl2ZS5hcHBlbmRDaGlsZChvYmpIZWFkKTtcclxuICAgICAgICBjb25zdCBvYmpMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICBjb25zdCBvYmplY3RpdmVzID0gWydUbyBrbm93IHRoZSB0b29scyB1c2VkIGluIHRoZSBmaXR0aW5nIHNob3AnLCAnVG8ga25vdyBob3cgdG8gbWFyayBvdXQnLCAnVG8ga25vdyB0aGUgbWV0aG9kcyBvZiBmaWxpbmcnLCdUbyBwcm9kdWNlIGEgc3F1YXJlIGZpdCcsXTtcclxuICAgICAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBvYmplY3RpdmVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgbGlzdFtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIGxpc3RbaV0udGV4dENvbnRlbnQgPSBvYmplY3RpdmVzW2ldO1xyXG4gICAgICAgICAgICBvYmpMaXN0LmFwcGVuZENoaWxkKGxpc3RbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYmplY3RpdmUuYXBwZW5kQ2hpbGQob2JqTGlzdCk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChvYmplY3RpdmUpO1xyXG4gICAgICAgIGNvbnN0IGFwcEhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIGFwcEhlYWQudGV4dENvbnRlbnQgPSAnQXBwYXJhdHVzJztcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGFwcEhlYWQpO1xyXG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdhcHBCb3gnKTtcclxuICAgICAgICBjb25zdCBhcHBhcmF0dXMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ1dvcmsgQmVuY2gnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzQwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ1N0ZWVsIFJ1bGUnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzQzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ0JlbmNoIFZpY2UnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzM5XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ1NjcmliZXInLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzQ5XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ1RyeSBzcXVhcmUnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzM4XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ1Zlcm5pZXIgQ2FsbGlwZXInLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzQ2XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ0hhY2tzYXcnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzY4XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ0JhbGwgcGVlbiBIYW1tZXInLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzY5XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ0ZpbGVzKGZsYXQgZmlsZXMgZS50LmMpJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWM3MFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgbGV0IGFwcEJveCA9IFtdO1xyXG4gICAgICAgIGxldCBhcHBJbWFnZSA9IFtdO1xyXG4gICAgICAgIGxldCBhcHBDYXB0aW9uID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGFwcGFyYXR1cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGFwcEJveFtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBhcHBJbWFnZVtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICBhcHBDYXB0aW9uW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICBhcHBJbWFnZVtpXS5zcmMgPSAgYXBwYXJhdHVzW2ldLmltYWdlO1xyXG4gICAgICAgICAgICBhcHBDYXB0aW9uW2ldLnRleHRDb250ZW50ID0gYXBwYXJhdHVzW2ldLmNhcDtcclxuICAgICAgICAgICAgYXBwQm94W2ldLmFwcGVuZENoaWxkKGFwcEltYWdlW2ldKTtcclxuICAgICAgICAgICAgYXBwQm94W2ldLmFwcGVuZENoaWxkKGFwcENhcHRpb25baV0pO1xyXG4gICAgICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGFwcEJveFtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoc2VjdGlvbik7XHJcbiAgICAgICAgY29uc3QgdGhlb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IHRoZW9IZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICB0aGVvSGVhZC50ZXh0Q29udGVudCA9ICdUSEVPUlknO1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZCh0aGVvSGVhZCk7XHJcbiAgICAgICAgY29uc3QgZXhwbGFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGV4cGxhaW4udGV4dENvbnRlbnQgPSAnQmVuY2ggZml0dGluZyBpcyB0aGUgcHJvY2VzcyBvZiBzaGFwaW5nIGFuZCBhc3NlbWJsaW5nIG1ldGFsIGNvbXBvbmVudHMgdXNpbmcgaGFuZCB0b29scyBhbmQgbWFjaGluZXMuVGhlIGdvYWwgb2YgYmVuY2ggZml0dGluZyBpcyB0byBjcmVhdGUgcGFydHMgdGhhdCBmaXQgdG9nZXRoZXIgcHJlY2lzZWx5IHdpdGhvdXQgYW55IGdhcHMgb3IgYmluZGluZy4gVGhpcyBpcyBhY2hpZXZlZCBieSBjYXJlZnVsbHkgbWFya2luZyBvdXQsIGN1dHRpbmcsIGZpbGluZywgYW5kIGFzc2VtYmxpbmcgdGhlIGNvbXBvbmVudHMuSGVyZSBhcmUgc29tZSBvZiB0aGUgY29tbW9uIHRhc2tzIGludm9sdmVkIGluIGJlbmNoIGZpdHRpbmc6JztcclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoZXhwbGFpbik7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdNYXJraW5nIG91dCcsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnVGhpcyBpbnZvbHZlcyB1c2luZyBzY3JpYmVycywgcHVuY2hlcywgYW5kIG90aGVyIHRvb2xzIHRvIHRyYW5zZmVyIGRpbWVuc2lvbnMgZnJvbSBhIGRyYXdpbmcgb3IgdGVtcGxhdGUgdG8gdGhlIG1ldGFsIHdvcmtwaWVjZS4nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnQ3V0dGluZycsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnSGFja3Nhd3MsIGJhbmRzYXdzLCBhbmQgc2hlYXJzIGFyZSB1c2VkIHRvIGN1dCB0aGUgbWV0YWwgdG8gdGhlIGRlc2lyZWQgc2hhcGUuJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0ZpbGluZycsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnRmlsZXMgYXJlIHVzZWQgdG8gc21vb3RoIGFuZCBkZWJ1cnIgdGhlIGVkZ2VzIG9mIHRoZSBtZXRhbCwgYW5kIHRvIGFjaGlldmUgdGhlIHJlcXVpcmVkIHRvbGVyYW5jZS5UaGVyZSBhcmUgdHdvIGNvbW1vbiBtZXRob2RzIG9mIGZpbGluZyB3aGljaCBpbmNsdWRlczonLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnICAgIC0gICBDcm9zcyBmaWxpbmcnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ0VmZmVjdGl2ZSByZW1vdmFsIG9mIG1heGltdW0gYW1vdW50IG9mIG1ldGFsIGluIHRoZSBzaG9ydGVzdCBwb3NzaWJsZSB0aW1lLiBUaGUgZmlsZSBtdXN0IHJlbWFpbiBob3Jpem9udGFsIHRocm91Z2hvdXQgdGhlIHN0cm9rZS4nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnICAgIC0gICAgRHJhdyBmaWxpbmcnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1RoaXMgbWV0aG9kIGlzIHVzZWQgdG8gcmVtb3ZlIGZpbGUgbWFya3MgYW5kIGZvciBmaW5pc2hpbmcgb3BlcmF0aW9ucy4gVGhlIGZpbGUgaXMgZ3JpcHBlZCBhcyBjbG9zZSB0byB0aGUgd29yayBhcyBwb3NzaWJsZScsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIGNhdGVnb3JpZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZChjcmVhdGVEaXZzKGl0ZW0pKTtcclxuICAgICAgICB9KTsgXHJcbiAgICAgICAgY29uc3QgdGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgdGV4dDIudGV4dENvbnRlbnQgPSAnVGhlIGxpbmsgdG8gd2F0Y2ggaG93IHRvIHBlcmZvcm0gdGhlc2UgbWV0aG9kcyBvZiBmaWxpbmcgaXMgYmVsb3cg8J+Rhyc7XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKHRleHQyKTtcclxuICAgICAgICBjb25zdCB2aWRlbzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB2aWRlbzIuaW5uZXJIVE1MID0gJzxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS1ub2Nvb2tpZS5jb20vZW1iZWQvSVZIaDRBQ0kzYWs/c2k9XzRmcnVQUTRfc3o0SEZkVlwiIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmU7IHdlYi1zaGFyZVwiIHJlZmVycmVycG9saWN5PVwic3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpblwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nO1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZCh2aWRlbzIpO1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0RyaWxsaW5nJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdIb2xlcyBhcmUgZHJpbGxlZCBpbiB0aGUgbWV0YWwgZm9yIHBpbnMsIHNjcmV3cywgYW5kIG90aGVyIGZhc3RlbmVycy4nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVGFwcGluZycsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnVGhyZWFkcyBhcmUgY3V0IGludG8gaG9sZXMgc28gdGhhdCBzY3Jld3MgYW5kIG90aGVyIGZhc3RlbmVycyBjYW4gYmUgaW5zZXJ0ZWQuJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0Fzc2VtYmx5JyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdUaGUgY29tcG9uZW50cyBhcmUgZml0dGVkIHRvZ2V0aGVyIHVzaW5nIGNsYW1wcywgYW5kIHRoZW4gdGhleSBhcmUgcGVybWFuZW50bHkgam9pbmVkIHVzaW5nIHRlY2huaXF1ZXMgc3VjaCBhcyB3ZWxkaW5nLCBicmF6aW5nLCBvciBzb2xkZXJpbmcuJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgY2F0ZWdvcnkuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoY3JlYXRlRGl2cyhpdGVtKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgaGVhZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIGhlYWQxLnRleHRDb250ZW50ID0gJ0FQUExJQ0FUSU9OUyBPRiBCRU5DSCBGSVRUSU5HJztcclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoaGVhZDEpO1xyXG4gICAgICAgIGNvbnN0IGNhdGFsb2cgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTWFjaGluaW5nJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdJbiBtYWNoaW5lIHNob3BzLCBiZW5jaCBmaXR0aW5nIGlzIHVzZWQgdG8gcHJlcGFyZSBwYXJ0cyBmb3IgZmluYWwgYXNzZW1ibHkuIFRoaXMgbWF5IGludm9sdmUgZmlsaW5nIGNvbXBvbmVudHMgZm9yIGEgcHJlY2lzZSBmaXQsIGRyaWxsaW5nIGFuZCB0YXBwaW5nIGhvbGVzLCBvciBjcmVhdGluZyByZWZlcmVuY2Ugc3VyZmFjZXMgZm9yIG90aGVyIG1hY2hpbmluZyBwcm9jZXNzZXMgJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ01ldGFsd29yaycsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnTWV0YWx3b3JrZXJzIGxpa2UgYmxhY2tzbWl0aHMgYW5kIHdlbGRlcnMgdXNlIGJlbmNoIGZpdHRpbmcgdGVjaG5pcXVlcyB0byBlbnN1cmUgcGFydHMgZml0IHRvZ2V0aGVyIGNvcnJlY3RseSBiZWZvcmUgd2VsZGluZyBvciByaXZldGluZyB0aGVtIHBlcm1hbmVudGx5JyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0F1dG8gbWVjaGFuaWNzJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdNZWNoYW5pY3MgcmVseSBvbiBiZW5jaCBmaXR0aW5nIHRvIHJlcGFpciBhbmQgcmVidWlsZCBlbmdpbmVzLCBnZWFyYm94ZXMsIGFuZCBvdGhlciB2ZWhpY2xlIGNvbXBvbmVudHMuIFRoZXkgbWF5IHVzZSBmaXR0aW5nIHRvIGVuc3VyZSBiZWFyaW5ncyBvcGVyYXRlIHNtb290aGx5IG9yIHRoYXQgbWFjaGluZWQgcGFydHMgaGF2ZSB0aGUgY29ycmVjdCBjbGVhcmFuY2VzLicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdUb29sIGFuZCBkaWUgbWFraW5nJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdDcmFmdHNwZW9wbGUgd2hvIGRlc2lnbiBhbmQgYnVpbGQgdG9vbHMgYW5kIGRpZXMgdXNlIGJlbmNoIGZpdHRpbmcgZXh0ZW5zaXZlbHkuIFRoZXkgZmlsZSBhbmQgbWFjaGluZSBwYXJ0cyB0byBhY2hpZXZlIHZlcnkgcHJlY2lzZSB0b2xlcmFuY2VzIGZvciB0b29scyB1c2VkIGluIG1hbnVmYWN0dXJpbmcuJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgY2F0YWxvZy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKGNyZWF0ZURpdnMoaXRlbSkpO1xyXG4gICAgICAgIH0pOyBcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHRoZW9yeSk7XHJcbiAgICAgICAgY29uc3QgcHJhY3RpY2FscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCBzdGVwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgc3RlcDEudGV4dENvbnRlbnQgPSAnUFJBQ1RJQ0FMIDEgOiBIT1cgVE8gTUFLRSBBIFNRVUFSRSBGSVQgRlJPTSBHSVZFTiBNSUxEIFNURUVMIFBJRUNFUyc7XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZChzdGVwMSk7XHJcbiAgICAgICAgY29uc3Qgc3RlcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIHN0ZXAzLnRleHRDb250ZW50ID0gJ1BST0NFRFVSRTonO1xyXG4gICAgICAgIHByYWN0aWNhbHMuYXBwZW5kQ2hpbGQoc3RlcDMpO1xyXG4gICAgICAgIGNvbnN0IHN0ZXBMaXN0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgY29uc3Qgc3RlcHMxID0gWydUaGUgZ2l2ZW4gbWlsZCBzdGVlbCBmbGF0IHBpZWNlIGlzIGNoZWNrZWQgZm9yIGdpdmVuIGRpbWVuc2lvbnMnLCAnT25lIGVkZ2Ugb2YgZ2l2ZW4gaXMgZmlsbGVkIHRvIHN0cmFpZ2h0bmVzcyB3aXRoIHRvdWdoIGFuZCBzbW9vdGggZmlsZXMgYW5kIGNoZWNrZWQgd2l0aCBhZGphY2VudCcsICdBbiBhZGphY2VudCBpcyBhbHNvIGZpbGxlZCBzdWNoIHRoYXQgaXMgc3F1YXJlIHRvIHRoZSBmaXJzdCBlZGdlIGFuZCBjaGVja2VkIHdpdGggdHJ5IHNxdWFyZScsICdXZXQgY2hhbGsgaXMgYXBwbGllZCBvbiBvbmUgc2lkZSBvZiB0aGUgZmxhdCBhbmQgZHJpZWQgZm9yIG1hcmtpbmcnLCAnTGluZXMgYXJlIG1hcmtlZCBhY2NvcmRpbmcgdG8gZ2l2ZW4gZmlndXJlLCB1c2luZyBvZGQgbGVnIGNhbGxpcGVyIGFuZCBzdGVlbCBydWxlJywgJ1VzaW5nIGRvdCBwdW5jaCBhcmUgbWFkZSBhbG9uZyB0aGUgbWFya2VkIGxpbmVzJywgJ1RoZSBleGNlc3MgbWF0ZXJpYWxzIHJlbW92ZWQgZnJvbSB0aGUgcmVtYWluaW5nIHR3byBlZGdlcyB3aXRoIHRoZSB0cnkgc3F1YXJlIGxldmVsIHVwIHRvIGhhbGYgb2YgdGhlIG1hcmtlZCBkb3RzICcsICdGaW5hbGx5IGJ1dHMgYXJlIHJlbW92ZWQgYnkgdGhlIGZpbGluZyBvbiB0aGUgc3VyZmFjZSBvZiBmaXR0ZWQgam9iJ107XHJcbiAgICAgICAgbGV0IHN0ZXBCb3gxID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHN0ZXBzMS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHN0ZXBCb3gxW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgc3RlcEJveDFbaV0udGV4dENvbnRlbnQgPSBzdGVwczFbaV07XHJcbiAgICAgICAgICAgIHN0ZXBMaXN0MS5hcHBlbmRDaGlsZChzdGVwQm94MVtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByYWN0aWNhbHMuYXBwZW5kQ2hpbGQoc3RlcExpc3QxKTtcclxuICAgICAgICBjb25zdCB0ZXh0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICB0ZXh0My50ZXh0Q29udGVudCA9ICdUaGUgbGluayB0byB3YXRjaCBob3cgdG8gcGVyZm9ybSB0aGUgc3F1YXJlIGZpdCBwcmFjdGljYWwgaXMgYmVsb3cg8J+Rhyc7XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZCh0ZXh0Myk7XHJcbiAgICAgICAgY29uc3QgdmlkZW8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdmlkZW8zLmlubmVySFRNTCA9ICc8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUtbm9jb29raWUuY29tL2VtYmVkL05ITHBSZ0xHZUVvP3NpPXB6V050enZrTmllNTYzblZcIiB0aXRsZT1cIllvdVR1YmUgdmlkZW8gcGxheWVyXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlOyB3ZWItc2hhcmVcIiByZWZlcnJlcnBvbGljeT1cInN0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW5cIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+JztcclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKHZpZGVvMyk7XHJcbiAgICAgICAgY29uc3Qgc3RlcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgc3RlcC50ZXh0Q29udGVudCA9ICdQUkFDVElDQUwgMiA6IEhPVyBUTyBNQUtFIERPVkVUQUlMIEpPSU5UJztcclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKHN0ZXApO1xyXG4gICAgICAgIGNvbnN0IHN0ZXAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBzdGVwMi50ZXh0Q29udGVudCA9ICdQUk9DRURVUkU6JztcclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKHN0ZXAyKTtcclxuICAgICAgICBjb25zdCBzdGVwTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgY29uc3Qgc3RlcHMgPSBbJ1BsYWNlIHRoZSB3b3JrIHBpZWNlcyBvbiB0aGUgdGFibGUgYW5kIHVzaW5nIHNjcmliZXIgZHJhdyBzdHJhaWdodCBsaW5lcyBwYXJhbGxlbCBvbiBpdCA1NW1tIGFwYXJ0JywgJ0ZpeCB0aGUgd29ya3BpZWNlcyBmaXJtbHkgaW4gdGhlIGphd3Mgb2YgdGhlIHZpY2UnLCAnQ3V0IGFsb25nIHRoZSBtYXJrZWQgbGluZSB1c2luZyBhIGhhY2tzYXcnLCAnVGhlIGN1dCBvdXQgd29ya3BpZWNlcyB3YXMgbm93IGFnYWluIHBsYWNlZCBmaXJtbHkgYmV0d2VlbiB0aGUgamF3cyBvZiB0aGUgdmljZSBpbiBhIHN1Y2ggYSB3YXkgdGhhdCBhIHNtYWxsIHBvcnRpb24gb2Ygb25lIG9mIGl0cyBlZGdlcyBpcyBhYm92ZSB0aGUgbGV2ZWwgb2YgdGhlIGphdycsICdOb3cgZmlsaW5nIGlzIGRvbmUgYnkgdXNpbmcgYSBoYW5kIGZpbGUnLCAnVXNpbmcgdHJ5IHNxdWFyZSwgaXQgc2hvdWxkIGJlIGVuc3VyZWQgdGhhdCBhbGwgdGhlIGVkZ2VzIG9mIHRoZSB3b3JrcGllY2VzIGFyZSBhdCB0aGUgcmlnaHQgYW5nbGVzIHRvIGFkamFjZW50IGVkZ2VzJywgJ1BsYWNlZCB0aGUgd29yayBvbiBvbmUgb2YgdGhlIGZhY2VzIG9uIHRoZSBzdXJmYWNlIHBsYXRlIGFuZCBtb3ZlZCBpdCBhbG9uZyBpdOKAmXMgc3VyZmFjZSB0byBjaGVjayB0aGUgYXJlYSBvbiB0aGUgd29yayB3aGVyZSBzdHJhaW4gaGFzIGFjY3VtdWxhdGVkLiBGaWxlIHRoZW0gcHJvcGVybHkgJ107XHJcbiAgICAgICAgbGV0IHN0ZXBCb3ggPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3RlcHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBzdGVwQm94W2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgc3RlcEJveFtpXS50ZXh0Q29udGVudCA9IHN0ZXBzW2ldO1xyXG4gICAgICAgICAgICBzdGVwTGlzdC5hcHBlbmRDaGlsZChzdGVwQm94W2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZChzdGVwTGlzdCk7XHJcbiAgICAgICAgY29uc3QgdGV4dDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgdGV4dDQudGV4dENvbnRlbnQgPSAnVGhlIGxpbmsgdG8gd2F0Y2ggaG93IHRvIHBlcmZvcm0gdGhlIERvdmV0YWlsIEpvaW50IHByYWN0aWNhbCBpcyBiZWxvdyDwn5GHJztcclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKHRleHQ0KTtcclxuICAgICAgICBjb25zdCB2aWRlbzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB2aWRlbzQuaW5uZXJIVE1MID0gJzxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS1ub2Nvb2tpZS5jb20vZW1iZWQvWkJfZ243Y1pSZm8/c2k9eHJoSDItMElxM21PcnNwb1wiIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmU7IHdlYi1zaGFyZVwiIHJlZmVycmVycG9saWN5PVwic3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpblwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nO1xyXG4gICAgICAgIHByYWN0aWNhbHMuYXBwZW5kQ2hpbGQodmlkZW80KTtcclxuICAgICAgICBjb25zdCBzdGVwNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgc3RlcDUudGV4dENvbnRlbnQgPSAnUFJBQ1RJQ0FMIDMgOiBIT1cgVE8gTUFLRSBBIFYtRklUVElORyc7XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZChzdGVwNSk7XHJcbiAgICAgICAgY29uc3Qgc3RlcDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIHN0ZXA2LnRleHRDb250ZW50ID0gJ1BST0NFRFVSRTonO1xyXG4gICAgICAgIHByYWN0aWNhbHMuYXBwZW5kQ2hpbGQoc3RlcDYpO1xyXG4gICAgICAgIGNvbnN0IHN0ZXBMaXN0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgY29uc3Qgc3RlcHM0ID0gWydUaGUgZ2l2ZW4gbWlsZCBzdGVlbCBmbGF0IHBpZWNlIGlzIGNoZWNrZWQgZm9yIGdpdmVuIGRpbWVuc2lvbnMnLCAnT25lIGVkZ2Ugb2YgdGhlIGdpdmVuIGlzIGZpbGVkIHdpdGggcm91Z2ggYW5kIHNtb290aCBmaWxlcyBhbmQgY2hlY2tlZCB3aXRoIHRyeSBzcXVhcmUgZm9yIHN0cmFpZ2h0bmVzcycsICdBbiBhZGphY2VudCBlZGdlIGlzIGFsc28gZmlsbGVkIHN1Y2ggdGhhdCBpdCBpcyBzcXVhcmUgdG8gZmlyc3QgZWRnZSBhbmQgY2hlY2tlZCB3aXRoIHRyeSBzcXVhcmUnLCAnV2V0IGNoYWxrIGlzIGFwcGxpZWQgb24gb25lIHNpZGUgb2YgdGhlIGZsYXQgYW5kIGRyaWVkIGZvciBtYXJraW5nJywgJ0xpbmVzIGFyZSBtYXJrZWQgYWNjb3JkaW5nIHRvIGdpdmVuIGZpZ3VyZSwgdXNpbmcgb2RkIGxlZyBjYWxpcGVycyBhbmQgc3RlZWwgcnVsZSAnLCAnVXNpbmcgZG90IHB1bmNoLCBwdW5jaGVzIGFyZSBtYWRlIGFsb25nIHRoZSBtYXJrZWQgbGluZXMnLCAnVGhlIGV4Y2VzcyBtYXRlcmlhbHMgcmVtb3ZlZCBmcm9tIHRoZSByZW1haW5pbmcgdHdvIGVkZ2VzIHdpdGggdHJ5IHNxdWFyZSBsZXZlbCB1cCB0byBoYWxmIG9mIHRoZSBtYXJrZWQgZG90cycsICdGaW5hbGx5IGJ1dHMgYXJlIHJlbW92ZWQgYnkgdGhlIGZpbGluZyBvbiB0aGUgc3VyZmFjZSBvZiB0aGUgIGZpdHRlZCBqb2InXTtcclxuICAgICAgICBsZXQgc3RlcEJveDIgPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3RlcHM0Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgc3RlcEJveDJbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICBzdGVwQm94MltpXS50ZXh0Q29udGVudCA9IHN0ZXBzNFtpXTtcclxuICAgICAgICAgICAgc3RlcExpc3QzLmFwcGVuZENoaWxkKHN0ZXBCb3gyW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZChzdGVwTGlzdCk7XHJcbiAgICAgICAgY29uc3QgdGV4dDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgdGV4dDUudGV4dENvbnRlbnQgPSAnVGhlIGxpbmsgdG8gd2F0Y2ggaG93IHRvIHBlcmZvcm0gdGhlIFYtZml0dGluZyBwcmFjdGljYWwgaXMgYmVsb3cg8J+Rhyc7XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZCh0ZXh0NSk7XHJcbiAgICAgICAgY29uc3QgdmlkZW81ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdmlkZW81LmlubmVySFRNTCA9ICc8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUtbm9jb29raWUuY29tL2VtYmVkL2lESl9zTXZYc1lzP3NpPTdFbUtNWjI3SVBYanJFQ0xcIiB0aXRsZT1cIllvdVR1YmUgdmlkZW8gcGxheWVyXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlOyB3ZWItc2hhcmVcIiByZWZlcnJlcnBvbGljeT1cInN0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW5cIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+JztcclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKHZpZGVvNSk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChwcmFjdGljYWxzKVxyXG4gICAgICAgIGNvbnN0IHByZWNhdXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgY2F1dGlvbkhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIGNhdXRpb25IZWFkLnRleHRDb250ZW50ID0gXCJQUkVDQVVUSU9OU1wiO1xyXG4gICAgICAgIHByZWNhdXRpb24uYXBwZW5kQ2hpbGQoY2F1dGlvbkhlYWQpO1xyXG4gICAgICAgIGNvbnN0IGNhdXRpb25MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICBjb25zdCBwcmVjYXV0aW9ucyA9IFtcIkkgZW5zdXJlZCB0aGF0IEkgd29yZSBteSBsYWIgY29hdCBhbmQgcGVyc29uYWwgcHJvdGVjdGl2ZSBlcXVpcG1lbnQgKFBQRSlcIixcIkkgZW5zdXJlZCB0aGF0IEkgYXZvaWRlZCBlcnJvciBkdWUgdG8gcGFyYWxsYXggd2hlcmUgdGFraW5nIG1lYXN1cmVtZW50c1wiLFwiSSBFbnN1cmVkIHRoYXQgdGhlIHdvcmtwaWVjZSBpcyBzZWN1cmVseSBjbGFtcGVkIGluIGEgdmljZSBvciB1c2luZyBhcHByb3ByaWF0ZSBob2xkaW5nIHRvb2xzIGJlZm9yZSB3b3JraW5nIG9uIGl0LlwiLCBdO1xyXG4gICAgICAgIGxldCBjYXV0aW9uQm94ID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByZWNhdXRpb25zLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgY2F1dGlvbkJveFtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIGNhdXRpb25Cb3hbaV0udGV4dENvbnRlbnQgPSBwcmVjYXV0aW9uc1tpXTtcclxuICAgICAgICAgICAgY2F1dGlvbkxpc3QuYXBwZW5kQ2hpbGQoY2F1dGlvbkJveFtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByZWNhdXRpb24uYXBwZW5kQ2hpbGQoY2F1dGlvbkxpc3QpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQocHJlY2F1dGlvbik7XHJcbiAgICAgICAgY29uc3QgY29uY2x1c2lvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCBjb25jSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgY29uY0hlYWQudGV4dENvbnRlbnQgPSBcIkNPTkNMVVNJT046XCI7XHJcbiAgICAgICAgY29uY2x1c2lvbi5hcHBlbmRDaGlsZChjb25jSGVhZCk7XHJcbiAgICAgICAgY29uc3QgY29uY1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgY29uY1RleHQudGV4dENvbnRlbnQgPSBcIkF0IHRoZSBlbmQgb2YgdGhpcyBleHBlcmltZW50LCBhIFYtIGZpdCwgYSBzcXVhcmUgZml0IGFuZCBkb3ZldGFpbCBqb2ludCB3YXMgY3JlYXRlZCBmcm9tIG1pbGQgc3RlZWwgcGllY2VzIGFuZCB0aGUgbWV0aG9kcyBvZiBmaWxpbmcgYW5kIHRoZSBhcHBsaWNhdGlvbnMgb2YgYmVuY2ggZml0dGluZy5cIjtcclxuICAgICAgICBjb25jbHVzaW9uLmFwcGVuZENoaWxkKGNvbmNUZXh0KTtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGNvbmNsdXNpb24pO1xyXG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgcmVmSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgcmVmSGVhZC50ZXh0Q29udGVudCA9IFwiUkVGRVJFTkNFU1wiO1xyXG4gICAgICAgIHJlZmVyZW5jZXMuYXBwZW5kQ2hpbGQocmVmSGVhZCk7XHJcbiAgICAgICAgY29uc3QgcmVmTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlID0gW1wiUHJvZHVjdGlvbiBFbmdpbmVlcmluZyBMYWJvcmF0b3J5IE1hbnVhbCBmb3IgRUxBMjAxIGFuZCBFTEEyMDIgYnkgRGVwYXJ0bWVudCBvZiBQcm9kdWN0aW9uIEVuZ2luZWVyaW5nLCBVbml2ZXJzaXR5IG9mIEJlbmluLlwiLCBcIkJlbmNod29yayBhbmQgRml0dGluZyBieSBEci4gSGFtZXNoIEJhYnUgTmFudmFsYVwiLCBcIkJlbmNoIFdvcmsgQW5kIEZpdHRpbmcgYnkgVyBKIFBlY2tcIl07XHJcbiAgICAgICAgbGV0IHJlZkJveCA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByZWZlcmVuY2UubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICByZWZCb3hbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICByZWZCb3hbaV0udGV4dENvbnRlbnQgPSByZWZlcmVuY2VbaV07XHJcbiAgICAgICAgICAgIHJlZkxpc3QuYXBwZW5kQ2hpbGQocmVmQm94W2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVmZXJlbmNlcy5hcHBlbmRDaGlsZChyZWZMaXN0KTtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHJlZmVyZW5jZXMpO1xyXG4gICAgICAgIGNvbnN0IGhvdmVyID0gY3JlYXRlSG92ZXIoJyMnKTtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGhvdmVyKTtcclxuICAgICAgICBjb25zdCBkb3dubG9hZCA9IGNyZWF0ZURvd25sb2FkKCcjJyk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChkb3dubG9hZCk7XHJcbn07XHJcblxyXG5cclxuY29uc3QgZGlzcGxheUhTMjAxID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1haW4gPSByZXNldCgpO1xyXG4gICAgICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgIGhlYWQudGV4dENvbnRlbnQgID0gJ0ludHJvZHVjdGlvbiB0byB0aGUgd2VsZGluZyBzaG9wIHByYWN0aWNle0hTMjAxfSc7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChoZWFkKTtcclxuICAgICAgICBjb25zdCBvYmplY3RpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3Qgb2JqSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgb2JqSGVhZC50ZXh0Q29udGVudCA9ICdPQkpFQ1RJVkVTJztcclxuICAgICAgICBvYmplY3RpdmUuYXBwZW5kQ2hpbGQob2JqSGVhZCk7XHJcbiAgICAgICAgY29uc3Qgb2JqTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgY29uc3Qgb2JqZWN0aXZlcyA9IFsgJ1RvIGtub3cgaG93IHRvIHByZXBhcmUgd2VsZGluZyBlZGdlIGJlZm9yZSB3ZWxkaW5nJywgJ1RvIGtub3cgdGhlIGRpZmZlcmVudCB3ZWxkaW5nIGpvaW50cycsICdUbyBrbm93IHRoZSBkaWZmZXJlbnQgd2VsZGluZyBwb3NpdGlvbnMnLCAnVG8ga25vdyB0aGUgdmFyaW91cyBhcmMgd2VsZGluZyBwcm9jZXNzZXMnLCAnVG8ga25vdyB0aGUgdmFyaW91cyBhcmMgd2VsZGluZyBlcXVpcG1lbnRzJywgJ1RvIGtub3cgdGhlIHNhZmV0eSByZWNvbW1lbmRhdGlvbnMgZm9yIGFyYyB3ZWxkaW5nIHByb2Nlc3NlcycsJ1RvIHByb2R1Y2UgYSBidXR0IGpvaW50IHVzaW5nIGFyYyB3ZWxkaW5nJ107XHJcbiAgICAgICAgbGV0IGxpc3QgPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgb2JqZWN0aXZlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGxpc3RbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICBsaXN0W2ldLnRleHRDb250ZW50ID0gb2JqZWN0aXZlc1tpXTtcclxuICAgICAgICAgICAgb2JqTGlzdC5hcHBlbmRDaGlsZChsaXN0W2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JqZWN0aXZlLmFwcGVuZENoaWxkKG9iakxpc3QpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQob2JqZWN0aXZlKTtcclxuICAgICAgICBjb25zdCBhcHBIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICBhcHBIZWFkLnRleHRDb250ZW50ID0gJ0FwcGFyYXR1cyc7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChhcHBIZWFkKTtcclxuICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnYXBwQm94Jyk7XHJcbiAgICAgICAgY29uc3QgYXBwYXJhdHVzID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdQcm90ZWN0aXZlIENsb3RoaW5nJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWM3MVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdQcm90ZWN0aXZlIEVxdWlwbWVudCcsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljNzJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnV2lyZSBCcnVzaCcsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljNzNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnV2VsZGluZyBjYWJsZXMnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzc0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ0hhbmQgU2NyZWVuJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWM3NVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdDaGlwcGluZyBIYW1tZXInLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzc2XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ0FyYyB3ZWxkaW5nIHBvd2VyIHNvdXJjZScsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljNzdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnRWxlY3Ryb2RlcycsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljNzhcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnRWxlY3Ryb2RlIGhvbGRlcicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljNzlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnVG9uZ3MnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzgwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ0hhbmQgU2hpZWxkJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWM4MVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdFYXJ0aCBjbGFtcCcsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljODJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnV2VsZGluZyB0YWJsZScsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljODNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnUm91Z2ggZmlsZScsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljNzBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnU21vb3RoIGZpbGUnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzg0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ1Byb3RyYWN0b3InLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzg1XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICBsZXQgYXBwQm94ID0gW107XHJcbiAgICAgICAgbGV0IGFwcEltYWdlID0gW107XHJcbiAgICAgICAgbGV0IGFwcENhcHRpb24gPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXBwYXJhdHVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgYXBwQm94W2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGFwcEltYWdlW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgIGFwcENhcHRpb25baV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIGFwcEltYWdlW2ldLnNyYyA9ICBhcHBhcmF0dXNbaV0uaW1hZ2U7XHJcbiAgICAgICAgICAgIGFwcENhcHRpb25baV0udGV4dENvbnRlbnQgPSBhcHBhcmF0dXNbaV0uY2FwO1xyXG4gICAgICAgICAgICBhcHBCb3hbaV0uYXBwZW5kQ2hpbGQoYXBwSW1hZ2VbaV0pO1xyXG4gICAgICAgICAgICBhcHBCb3hbaV0uYXBwZW5kQ2hpbGQoYXBwQ2FwdGlvbltpXSk7XHJcbiAgICAgICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoYXBwQm94W2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChzZWN0aW9uKTtcclxuICAgICAgICBjb25zdCB0aGVvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgdGhlb0hlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIHRoZW9IZWFkLnRleHRDb250ZW50ID0gJ1RIRU9SWSc7XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKHRoZW9IZWFkKTtcclxuICAgICAgICBjb25zdCBleHBsYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZXhwbGFpbi50ZXh0Q29udGVudCA9ICdXZWxkaW5nIGlzIGEgZmFicmljYXRpb24gcHJvY2VzcyB0aGF0IGpvaW5zIG1hdGVyaWFscywgdHlwaWNhbGx5IG1ldGFscyBvciB0aGVybW9wbGFzdGljcywgdG9nZXRoZXIgYnkgY2F1c2luZyBmdXNpb24uIFRoaXMgcHJvY2VzcyBpbnZvbHZlcyBtZWx0aW5nIHRoZSBiYXNlIG1ldGFscyBhbmQgYWRkaW5nIGEgZmlsbGVyIG1hdGVyaWFsIHRvIGZvcm0gYSB3ZWxkIHBvb2wsIHdoaWNoIGNvb2xzIHRvIGJlY29tZSBhIHN0cm9uZyBqb2ludC4gV2VsZGluZyBpcyBiYXNpY2FsbHkgYSBtZXRhbHdvcmtpbmcgc3VwZXJwb3dlciB0aGF0IGxldHMgeW91IHBlcm1hbmVudGx5IGpvaW4gcGllY2VzIG9mIG1ldGFsIHRvZ2V0aGVyLiBXZWxkaW5nIGlzIHVzZWQgaW4gZGlmZmVyZW50IGFzcGVjdHMgd2hpY2ggaW5jbHVkZXM6JztcclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoZXhwbGFpbik7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdDb25zdHJ1Y3Rpb24nLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1dlbGRpbmcgaXMgZXNzZW50aWFsIGZvciBjb21iaW5pbmcgc3RlZWwgYmVhbXMsIHBpcGVzLCBhbmQgb3RoZXIgbWV0YWwgc3RydWN0dXJlcyB0aGF0IGNvbnN0aXR1dGUgdGhlIGZyYW1ld29yayBvZiBvdXIgYnVpbGRpbmdzIGFuZCBpbmZyYXN0cnVjdHVyZSwgZnJvbSBjb21wbGV4IGJyaWRnZXMgdG8gdGFsbCBza3lzY3JhcGVycy4nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnQXV0b21vdGl2ZSBJbmR1c3RyeScsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnV2VsZGluZyBpcyBlc3NlbnRpYWwgZm9yIGEgc3R1cmR5IGFuZCBzZWN1cmUgYXNzZW1ibHkgb2YgY2FyIGZyYW1lcywgZW5naW5lcywgYW5kIGJvZHkgcGFydHMuJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ01hbnVmYWN0dXJpbmcnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1dlbGRpbmcgaXMgZXNzZW50aWFsIHRvIGZhYnJpY2F0aW9uIGluIGEgdmFyaWV0eSBvZiBtYW51ZmFjdHVyaW5nIGFyZWFzLCBpbmNsdWRpbmcgZWxlY3Ryb25pY3MsIGFwcGxpYW5jZXMsIGFuZCBpbmR1c3RyaWFsIG1hY2hpbmVyeS4nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnU2hpcGJ1aWxkaW5nJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdXZWxkcyBhcmUgZnJlcXVlbnRseSB1c2VkIHRvIGhvbGQgdG9nZXRoZXIgdGhlIHJvYnVzdCBzZWFtcyBhbmQgd2F0ZXJwcm9vZiBjb21wYXJ0bWVudHMgb2Ygc2hpcHMuJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1JlcGFpciBhbmQgTWFpbnRlbmFuY2UnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1dlbGRpbmcgdGVjaG5pcXVlcyBjYW4gYmUgdXNlZCB0byByZXBhaXIgYnJva2VuIHBpcGVsaW5lcywgZGFtYWdlZCBtYWNoaW5lcnksIG9yIGNvcnJvZGVkIG1ldGFsIGNvbXBvbmVudHMnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjYXRlZ29yaWVzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoY3JlYXRlRGl2cyhpdGVtKSk7XHJcbiAgICAgICAgfSk7IFxyXG4gICAgICAgIGNvbnN0IHRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHRleHQyLnRleHRDb250ZW50ID0gJ1dlbGRpbmcgaXMgYXBwbGllZCBpbiB2YXJpb3VzIGZpZWxkcyB3aGljaCBpbmNsdWRlOic7XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKHRleHQyKTtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeSA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdDb25zdHJ1Y3Rpb24gUHJvamVjdHMnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1dlbGRpbmcgaXMgZnVuZGFtZW50YWwgaW4gYXNzZW1ibGluZyB0aGUgc3RlZWwgZnJhbWVzIHRoYXQgZm9ybSB0aGUgc2tlbGV0b24gb2YgdGhlc2Ugc3RydWN0dXJlcy4nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnQXV0b21vdGl2ZSBSZXBhaXIgYW5kIE1haW50ZW5hbmNlJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiV2hldGhlciBpdCdzIGZpeGluZyBhIGNyYWNrZWQgZXhoYXVzdCBwaXBlIG9yIHBhdGNoaW5nIGEgaG9sZSBpbiBhIGNhciBmcmFtZSwgd2VsZGVycyBwbGF5IGEgY3J1Y2lhbCByb2xlIGluIGtlZXBpbmcgdmVoaWNsZXMgb24gdGhlIHJvYWQuXCIsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdJbmR1c3RyaWFsIE1hbnVmYWN0dXJpbmcnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ01hbnVmYWN0dXJpbmcgcGxhbnRzIGhlYXZpbHkgcmVseSBvbiB3ZWxkaW5nIGZvciBldmVyeXRoaW5nIGZyb20gY3JlYXRpbmcgY29tcGxleCBtYWNoaW5lcnkgdG8gY29uc3RydWN0aW5nIHBpcGVsaW5lcy4nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjYXRlZ29yeS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZChjcmVhdGVEaXZzKGl0ZW0pKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB0ZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICB0ZXh0MS50ZXh0Q29udGVudCA9ICdJbiB3ZWxkaW5nLCB0aGVyZSBhcmUgZm91ciAoNCkgbWFpbiBkaWZmZXJlbnQgdHlwZXMgb2Ygd2VsZGluZyBwb3NpdGlvbnMgd2hpY2ggaW5jbHVkZTonO1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZCh0ZXh0MSk7XHJcbiAgICAgICAgY29uc3QgY2F0YWxvZyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdGbGF0IHBvc2l0aW9uJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdUaGlzIGlzIHRoZSBtb3N0IGJhc2ljIGFuZCBlYXNpZXN0IHdlbGRpbmcgcG9zaXRpb24uIFRoZSB3ZWxkZXIgd2VsZHMgb24gYSBmbGF0IHN1cmZhY2UsIHdpdGggdGhlIHdvcmtwaWVjZSBwb3NpdGlvbmVkIGhvcml6b250YWxseSBiZWxvdyB0aGUgdG9yY2guIEdyYXZpdHkgYXNzaXN0cyB0aGUgd2VsZGVyIGluIGNvbnRyb2xsaW5nIHRoZSBtb2x0ZW4gbWV0YWwgd2VsZCBwb29sLicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljODZcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdIb3Jpem9udGFsIHBvc2l0aW9uJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdJbiB0aGlzIHNldHVwLCB0aGUgd2VsZGVyIGlzIHBvc2l0aW9uZWQgYmVsb3cgdGhlIGhvcml6b250YWwgd2VsZCBqb2ludC4gSW4gb3JkZXIgdG8gcHJldmVudCB0aGUgbW9sdGVuIG1ldGFsIGZyb20gbGVha2luZyBvciBzYWdnaW5nLCB0aGUgd2VsZGVyIG11c3QgcmVzaXN0IGdyYXZpdHkuIEFsdGhvdWdoIHRoZXkgYXJlIGxlc3MgcHJldmFsZW50IHRoYW4gZmxhdCB3ZWxkcywgaG9yaXpvbnRhbCB3ZWxkcyBhcmUgbW9yZSBkaWZmaWN1bHQgdG8gcGVyZm9ybS4nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzg3XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVmVydGljYWwgcG9zaXRpb24nLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ0EgdmVydGljYWwgc3VyZmFjZSBpcyB1c2VkIHRvIG1ha2UgdmVydGljYWwgd2VsZHMuIEVpdGhlciB1cGhpbGwgKGZyb20gYm90dG9tIHRvIHRvcCkgb3IgZG93bmhpbGwgKGZyb20gdG9wIHRvIGJvdHRvbSkgd2VsZGluZyBpcyBwb3NzaWJsZS4gV2VsZHMgdXBoaWxsIGFyZSBtb3JlIGNoYWxsZW5naW5nIGJlY2F1c2UgdGhlIG1vbHRlbiBtZXRhbCBoYXMgYSB0ZW5kZW5jeSB0byBmbG93IGRvd253YXJkLiBBbHRob3VnaCB0aGV5IGFyZSBzaW1wbGVyIHRvIG1hbmFnZSwgZG93bndhcmQgd2VsZHMgbWF5IHByb2R1Y2Ugd2Vha2VyIHdlbGRzLicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljODhcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdPdmVyaGVhZCBwb3NpdGlvbicsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnVGhlIG1vc3QgY2hhbGxlbmdpbmcgcG9zaXRpb24gdG8gd2VsZCBpbiBpcyBhYm92ZS4gVGhlIHN1cmZhY2UgdGhhdCB0aGUgd2VsZGVyIHdlbGRzIG9uIGlzIGFib3ZlIHRoZW0uIEl0IGlzIGV4dHJlbWVseSBkaWZmaWN1bHQgdG8gcHJvZHVjZSBoaWdoLXF1YWxpdHkgd2VsZHMgc2luY2UgdGhlIHdlbGRlciBpcyB1bmFibGUgdG8gY29udHJvbCB0aGUgbW9sdGVuIG1ldGFsIHBvb2wgZXhjZXB0IGJ5IHVzaW5nIHRoZWlyIHdlbGRpbmcgbWV0aG9kLicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljODlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIGNhdGFsb2cuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZChjcmVhdGVEaXZzKGl0ZW0pKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBleHBsYWluMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGV4cGxhaW4xLnRleHRDb250ZW50ID0gJ1RoZXJlIGFyZSBkaWZmZXJlbnQgdHlwZXMgb2Ygd2VsZGluZyBwcm9jZXNzZXMgYnV0IGluIHRoaXMgZXhwZXJpbWVudCB3ZSBhcmUgZGVhbGluZyB3aXRoIGFyYyB3ZWxkaW5nIHByb2Nlc3MuJztcclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoZXhwbGFpbjEpO1xyXG4gICAgICAgIGNvbnN0IGV4cGxhaW4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZXhwbGFpbjIudGV4dENvbnRlbnQgPSBcIkFyYyB3ZWxkaW5nIGlzIHRoZSBtb3N0IGNvbW1vbiB0eXBlIG9mIHdlbGRpbmcgcHJvY2VzcywgYW5kIGl0IHVzZXMgYW4gZWxlY3RyaWMgY3VycmVudCB0byBjcmVhdGUgYW4gYXJjIHRoYXQgbWVsdHMgdGhlIG1ldGFsLiBBcmMgd2VsZGluZyBpcyBhIG1ldGFsIGpvaW5pbmcgcHJvY2VzcyB0aGF0IHV0aWxpemVzIHRoZSBpbnRlbnNlIGhlYXQgZ2VuZXJhdGVkIGJ5IGFuIGVsZWN0cmljIGFyYyB0byBtZWx0IHRoZSBtZXRhbHMgYXQgdGhlIGpvaW50LCBmdXNpbmcgdGhlbSB0b2dldGhlciBvbmNlIHRoZXkgY29vbC4gSGVyZSdzIGEgYnJlYWtkb3duIG9mIHRoZSBjb3JlIGFzcGVjdHMgb2YgdGhlIHByb2Nlc3M6XCI7XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKGV4cGxhaW4yKTtcclxuICAgICAgICBjb25zdCBjYXRhbG9ncyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdIZWF0IFNvdXJjZScsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnVG8gZm9ybSB0aGUgYXJjLCBkaXJlY3QgY3VycmVudCAoREMpIG9yIGFsdGVybmF0aW5nIGN1cnJlbnQgKEFDKSBhcmUgc3VwcGxpZWQgYnkgYW4gZWxlY3RyaWMgcG93ZXIgc291cmNlLiBUaGUgcGFydGljdWxhciB3ZWxkaW5nIHByb2NlZHVyZSBhbmQgdGhlIG1ldGFscyBiZWluZyBjb25uZWN0ZWQgZGV0ZXJtaW5lIHRoZSBraW5kIG9mIGN1cnJlbnQgdGhhdCBpcyBlbXBsb3llZC4nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVGhlIGVsZWN0cm9kZScsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnSW4gYXJjIHdlbGRpbmcsIHRoZXJlIGFyZSBwcmltYXJpbHkgdHdvIGtpbmRzIG9mIGVsZWN0cm9kZXMgdXNlZDonLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnIC0gQ29uc3VtYWJsZSBlbGVjdHJvZGUnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1RvIGNyZWF0ZSB0aGUgd2VsZCwgdGhpcyBlbGVjdHJvZGUgbWVsdHMgYW5kIGZ1c2VzIHdpdGggdGhlIGJhc2UgbWV0YWwuIE1JRyB3ZWxkaW5nIHdpcmVzIGFuZCBzdGljayB3ZWxkaW5nIGVsZWN0cm9kZXMgYXJlIHR3byBleGFtcGxlcy4nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnIC0gTm9uLWNvbnN1bWFibGUgZWxlY3Ryb2RlJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdUaGlzIGVsZWN0cm9kZSBkb2VzIG5vdCBtZWx0IG9uIGl0cyBvd247IGluc3RlYWQsIGl0IGNvbmR1Y3RzIGVsZWN0cmljaXR5IHRvIGZvcm0gYW4gYXJjLiBUbyBmb3JtIHRoZSB3ZWxkLCBmaWxsZXIgbWV0YWwgaXMgYXBwbGllZCBzZXBhcmF0ZWx5LiBBIHR1bmdzdGVuIGVsZWN0cm9kZSBpcyB1c2VkIGFzIGFuIGV4YW1wbGUgaW4gVElHIHdlbGRpbmcuJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgY2F0YWxvZ3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZChjcmVhdGVEaXZzKGl0ZW0pKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHRoZW9yeSk7XHJcbiAgICAgICAgY29uc3QgcHJhY3RpY2FscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCBzdGVwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgc3RlcDEudGV4dENvbnRlbnQgPSAnUFJBQ1RJQ0FMIDEgOiBIT1cgVE8gTUFLRSBBIEJVVFQgSk9JTlQnO1xyXG4gICAgICAgIHByYWN0aWNhbHMuYXBwZW5kQ2hpbGQoc3RlcDEpO1xyXG4gICAgICAgIGNvbnN0IHN0ZXAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBzdGVwMy50ZXh0Q29udGVudCA9ICdQUk9DRURVUkU6JztcclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKHN0ZXAzKTtcclxuICAgICAgICBjb25zdCBzdGVwTGlzdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIGNvbnN0IHN0ZXBzMSA9IFsnVGhlIGdpdmVuIG1pbGQgc3RlZWwgYXJlIHRob3JvdWdobHkgY2xlYW5lZCBvZiBydXN0IGFuZCBzY2FsZScsICdPbmUgZWRnZSBvZiBlYWNoIHBpZWNlIGlzIGJlbGlldmVkLCB0byBhbiBhbmdsZSBvZiAzMDAsIGxlYXZpbmcgbmVhcmx5IMK8IHRoIG9mIHRoZSBmbGF0IHRoaWNrbmVzcywgYXQgb25lIGVuZC4nLCAnVGhlIHR3byBwaWVjZXMgYXJlIHBvc2l0aW9uZWQgb24gdGhlIHdlbGRpbmcgdGFibGUgc3VjaCB0aGF0LCB0aGV5IGFyZSBzZXBhcmF0ZWQgc2xpZ2h0bHkgZm9yIGJldHRlciBwZW5ldHJhdGlvbiBvZiB0aGUgd2VsZCcsICdUaGUgZWxlY3Ryb2RlIGlzIGZpdHRlZCBpbiB0aGUgZWxlY3Ryb2RlIGhvbGRlciBhbmQgdGhlIHdlbGRpbmcgY3VycmVudCBpcyBzZXQgdG8gYmUgYSBwcm9wZXIgdmFsdWUnLCAnVGhlIGdyb3VuZCBjbGFtcCBpcyBmYXN0ZW5lZCB0byB0aGUgd2VsZGluZyB0YWJsZS4nLCAnV2VhcmluZyB0aGUgYXByb24gYW5kIHVzaW5nIHRoZSBmYWNlIHNoaWVsZCwgdGhlIGFyYyBpcyBzdHVjayBhbmQgaG9sZGluZyB0aGUgdHdvIHBpZWNlcyB0b2dldGhlciwgZmlyc3QgcnVuIG9mIHRoZSB3ZWxkIGlzIGRvbmUgdG8gZmlsbCB0aGUgcm9vdCBnYXAnLCAnU2Vjb25kIHJ1biBvZiB0aGUgd2VsZCBpcyBkb25lIHdpdGggcHJvcGVyIHdlYXZpbmcgYW5kIHRoZSB1bmlmb3JtIG1vdmVtZW50LiBEdXJpbmcgdGhlIHByb2Nlc3Mgb2Ygd2VsZGluZywgdGhlIGVsZWN0cm9kZSBpcyBrZXB0IGF0IDE1MCB0byAyNTAgZnJvbSB2ZXJ0aWNhbCBhbmQgaW4gdGhlIGRpcmVjdGlvbiBvZiB3ZWxkaW5nLicsICdUaGUgc2NhbGUgZm9ybWF0aW9uIG9uIHRoZSB3ZWxkcyBpcyByZW1vdmVkIGJ5IHVzaW5nIHRoZSBjaGlwcGluZyBoYW1tZXIuJywgJ0ZpbGluZyBpcyBkb25lIHRvIHJlbW92ZSBhbnkgc3Bhbm5lciBhcm91bmQgdGhlIHdlbGQnXTtcclxuICAgICAgICBsZXQgc3RlcEJveDEgPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3RlcHMxLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgc3RlcEJveDFbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICBzdGVwQm94MVtpXS50ZXh0Q29udGVudCA9IHN0ZXBzMVtpXTtcclxuICAgICAgICAgICAgc3RlcExpc3QxLmFwcGVuZENoaWxkKHN0ZXBCb3gxW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZChzdGVwTGlzdDEpO1xyXG4gICAgICAgIGNvbnN0IHRleHQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHRleHQzLnRleHRDb250ZW50ID0gJ1dhdGNoIGhvdyB0byBwZXJmb3JtIHRoZSBidXR0IGpvaW50IHByYWN0aWNhbCBiZWxvdyDwn5GHJztcclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKHRleHQzKTtcclxuICAgICAgICBjb25zdCB2aWRlbzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB2aWRlbzMuaW5uZXJIVE1MID0gJzxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS1ub2Nvb2tpZS5jb20vZW1iZWQvMmF4WnVwTEFRX1U/c2k9clFHYm9NODhWelRZSHBfNFwiIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmU7IHdlYi1zaGFyZVwiIHJlZmVycmVycG9saWN5PVwic3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpblwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nO1xyXG4gICAgICAgIHByYWN0aWNhbHMuYXBwZW5kQ2hpbGQodmlkZW8zKTtcclxuICAgICAgICBjb25zdCBzdGVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICBzdGVwLnRleHRDb250ZW50ID0gJ1BSQUNUSUNBTCAyIDogSE9XIFRPIE1BS0UgTEFQIEpPSU5UJztcclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKHN0ZXApO1xyXG4gICAgICAgIGNvbnN0IHN0ZXAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBzdGVwMi50ZXh0Q29udGVudCA9ICdQUk9DRURVUkU6JztcclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKHN0ZXAyKTtcclxuICAgICAgICBjb25zdCBzdGVwTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgY29uc3Qgc3RlcHMgPSBbJ1RoZSBnaXZlbiBtaWxkIHN0ZWVsIHBpZWNlcyBhcmUgdGhvcm91Z2hseSBjbGVhbmVkIG9mIHJ1c3QgYW5kIHNjYWxlJywgJ1RoZSB0d28gcGllY2VzIGFyZSBwb3NpdGlvbmVkIG9uIHRoZSB3ZWxkaW5nIHRhYmxlIHN1Y2ggdGhhdCwgdGhlIHR3byBwaWVjZXMgb3ZlcmxhcHBlZCBvbmUgb3ZlciB0aGUgb3RoZXIgYXMgc2hvd24gaW4gZHJhd2luZycsICdUaGUgZWxlY3Ryb2RlIGlzIGZpdHRlZCBpbiB0aGUgZWxlY3Ryb2RlIGhvbGRlciBhbmQgdGhlIHdlbGRpbmcgY3VycmVudCBpcyBzZXQgdG8gYmUgcHJvcGVyIHZhbHVlJywgJ1RoZSBncm91bmQgY2xhbXAgaXMgZmFzdGVuZWQgdG8gdGhlIHdlbGRpbmcgdGFibGUnLCAnV2VhcmluZyB0aGUgYXByb24gYW5kIHVzaW5nIHRoZSBmYWNlIHNoaWVsZCwgdGhlIGFyYyBpcyBzdHJ1Y2sgYW5kIHRoZSB3b3JrIHBpZWNlcyBhcmUgdGFjay13ZWxkZWQgYXQgYm90aCB0aGUgZW5kcyBhbmQgdGhlIGNlbnRyZSBvZiB0aGUgam9pbnQnLCAnVGhlIGFsaWdubWVudCBvZiB0aGUgbGFwIGpvaW50IGlzIGNoZWNrZWQgYW5kIHRoZSB0YWNrIHdlbGRlZCBwaWVjZXMgYXJlIHJlcXVpcmVkJywgJ1RoZSBzY2FsZSBpbmZvcm1hdGlvbiBvZiB0aGUgd2VsZHMgaXMgcmVtb3ZlZCBieSB1c2luZyBjaGlwcGluZyBoYW1tZXInLCAnRmlsaW5nIGlzIGRvbmUgdG8gcmVtb3ZlIGFueSBzcGFubmVyIGFyb3VuZCB0aGUgd2VsZCddO1xyXG4gICAgICAgIGxldCBzdGVwQm94ID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHN0ZXBzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgc3RlcEJveFtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIHN0ZXBCb3hbaV0udGV4dENvbnRlbnQgPSBzdGVwc1tpXTtcclxuICAgICAgICAgICAgc3RlcExpc3QuYXBwZW5kQ2hpbGQoc3RlcEJveFtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByYWN0aWNhbHMuYXBwZW5kQ2hpbGQoc3RlcExpc3QpO1xyXG4gICAgICAgIGNvbnN0IHRleHQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHRleHQ0LnRleHRDb250ZW50ID0gJ1dhdGNoIGhvdyB0byBwZXJmb3JtIHRoZSBEb3ZldGFpbCBKb2ludCBwcmFjdGljYWwgaXMgYmVsb3cg8J+Rhyc7XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZCh0ZXh0NCk7XHJcbiAgICAgICAgY29uc3QgdmlkZW80ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdmlkZW80LmlubmVySFRNTCA9ICc8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUtbm9jb29raWUuY29tL2VtYmVkL3VUOWRTRHdvdWVNP3NpPXJtRnIzQzc4eHpsWXVjZGNcIiB0aXRsZT1cIllvdVR1YmUgdmlkZW8gcGxheWVyXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlOyB3ZWItc2hhcmVcIiByZWZlcnJlcnBvbGljeT1cInN0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW5cIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+JztcclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKHZpZGVvNCk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChwcmFjdGljYWxzKTtcclxuICAgICAgICBjb25zdCBwcmVjYXV0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IGNhdXRpb25IZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBjYXV0aW9uSGVhZC50ZXh0Q29udGVudCA9IFwiUFJFQ0FVVElPTlNcIjtcclxuICAgICAgICBwcmVjYXV0aW9uLmFwcGVuZENoaWxkKGNhdXRpb25IZWFkKTtcclxuICAgICAgICBjb25zdCBjYXV0aW9uTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgY29uc3QgcHJlY2F1dGlvbnMgPSBbXCJJIGVuc3VyZWQgdGhhdCBJIHdvcmUgbXkgbGFiIGNvYXQgYW5kIHBlcnNvbmFsIHByb3RlY3RpdmUgZXF1aXBtZW50IChQUEUpXCIsXCJJIGVuc3VyZWQgdGhhdCB0aGUgd2VsZGluZyBtYWNoaW5lIHdhcyBwcm9wZXJseSBncm91bmRlZCB0byBwcmV2ZW50IGVsZWN0cmljYWwgc2hvY2suXCIsXCJJIEVuc3VyZWQgdGhhdCB0aGUgd2VsZGluZyBtYWNoaW5lIGFuZCBjYWJsZXMgYXJlIGluIGdvb2QgY29uZGl0aW9uIGJlZm9yZSBzdGFydGluZy5cIiwgXTtcclxuICAgICAgICBsZXQgY2F1dGlvbkJveCA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcmVjYXV0aW9ucy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGNhdXRpb25Cb3hbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICBjYXV0aW9uQm94W2ldLnRleHRDb250ZW50ID0gcHJlY2F1dGlvbnNbaV07XHJcbiAgICAgICAgICAgIGNhdXRpb25MaXN0LmFwcGVuZENoaWxkKGNhdXRpb25Cb3hbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcmVjYXV0aW9uLmFwcGVuZENoaWxkKGNhdXRpb25MaXN0KTtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHByZWNhdXRpb24pO1xyXG4gICAgICAgIGNvbnN0IGNvbmNsdXNpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgY29uY0hlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIGNvbmNIZWFkLnRleHRDb250ZW50ID0gXCJDT05DTFVTSU9OOlwiO1xyXG4gICAgICAgIGNvbmNsdXNpb24uYXBwZW5kQ2hpbGQoY29uY0hlYWQpO1xyXG4gICAgICAgIGNvbnN0IGNvbmNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbmNUZXh0LnRleHRDb250ZW50ID0gXCJBdCB0aGUgZW5kIG9mIHRoaXMgZXhwZXJpbWVudCwgYSBidXR0IGpvaW50LCBsYXAgam9pbnQgd2FzIGNyZWF0ZWQgZnJvbSBtaWxkIHN0ZWVsIHBpZWNlcyBieSBhcmMgd2VsZGluZyB1c2luZyB0aGUgbmVjZXNzYXJ5IGVxdWlwbWVudHMgYW5kIGFsc28gdXNpbmcgZGlmZmVyZW50IHdlbGRpbmcgcG9zaXRpb25zLlwiO1xyXG4gICAgICAgIGNvbmNsdXNpb24uYXBwZW5kQ2hpbGQoY29uY1RleHQpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoY29uY2x1c2lvbik7XHJcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCByZWZIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICByZWZIZWFkLnRleHRDb250ZW50ID0gXCJSRUZFUkVOQ0VTXCI7XHJcbiAgICAgICAgcmVmZXJlbmNlcy5hcHBlbmRDaGlsZChyZWZIZWFkKTtcclxuICAgICAgICBjb25zdCByZWZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICBjb25zdCByZWZlcmVuY2UgPSBbXCJQcm9kdWN0aW9uIEVuZ2luZWVyaW5nIExhYm9yYXRvcnkgTWFudWFsIGZvciBFTEEyMDEgYW5kIEVMQTIwMiBieSBEZXBhcnRtZW50IG9mIFByb2R1Y3Rpb24gRW5naW5lZXJpbmcsIFVuaXZlcnNpdHkgb2YgQmVuaW4uXCIsIFwiVGhlIFRJRyBXZWxkaW5nIEJvb2sgYnkgVG9kZCBCcmlkaWd1bVwiLCBcIldlbGRpbmcgZm9yIER1bW1pZXMgYnkgU3RldmVuIFJvYmVydCBGYXJuc3dvcnRoXCJdO1xyXG4gICAgICAgIGxldCByZWZCb3ggPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcmVmZXJlbmNlLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgcmVmQm94W2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgcmVmQm94W2ldLnRleHRDb250ZW50ID0gcmVmZXJlbmNlW2ldO1xyXG4gICAgICAgICAgICByZWZMaXN0LmFwcGVuZENoaWxkKHJlZkJveFtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlZmVyZW5jZXMuYXBwZW5kQ2hpbGQocmVmTGlzdCk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChyZWZlcmVuY2VzKTtcclxuICAgICAgICBjb25zdCBob3ZlciA9IGNyZWF0ZUhvdmVyKCcjJyk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChob3Zlcik7XHJcbiAgICAgICAgY29uc3QgZG93bmxvYWQgPSBjcmVhdGVEb3dubG9hZCgnIycpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoZG93bmxvYWQpO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IGRpc3BsYXlNUzIwMSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1haW4gPSByZXNldCgpO1xyXG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBoZWFkLnRleHRDb250ZW50ICA9ICdJbnRyb2R1Y3Rpb24gdG8gbGF0aGUgYW5kIG1hY2hpbmluZyBvcGVyYXRpb25ze01TMjAxfSc7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGhlYWQpO1xyXG4gICAgY29uc3Qgb2JqZWN0aXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgY29uc3Qgb2JqSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBvYmpIZWFkLnRleHRDb250ZW50ID0gJ09CSkVDVElWRVMnO1xyXG4gICAgb2JqZWN0aXZlLmFwcGVuZENoaWxkKG9iakhlYWQpO1xyXG4gICAgY29uc3Qgb2JqTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBjb25zdCBvYmplY3RpdmVzID0gWydUbyBzdHVkeSB0aGUgY2hhcmFjdGVyaXN0aWNzIGZlYXR1cmVzIG9mIGxhdGhlJywgJ1RvIHN0dWR5IHR5cGVzIG9mIGxhdGhlIG9wZXJhdGlvbnMnLCAnVG8gcHJvZHVjZSBzaGFmdCB1c2luZyBzdHJhaWdodCB0dXJuaW5nJ107XHJcbiAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG9iamVjdGl2ZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGxpc3RbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGxpc3RbaV0udGV4dENvbnRlbnQgPSBvYmplY3RpdmVzW2ldO1xyXG4gICAgICAgIG9iakxpc3QuYXBwZW5kQ2hpbGQobGlzdFtpXSk7XHJcbiAgICB9XHJcbiAgICBvYmplY3RpdmUuYXBwZW5kQ2hpbGQob2JqTGlzdCk7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKG9iamVjdGl2ZSk7XHJcbiAgICBjb25zdCBhcHBIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGFwcEhlYWQudGV4dENvbnRlbnQgPSAnQXBwYXJhdHVzJztcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoYXBwSGVhZCk7XHJcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnYXBwQm94Jyk7XHJcbiAgICAgICAgY29uc3QgYXBwYXJhdHVzID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdMYXRoZSBNYWNoaW5lJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWM5MFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdWZXJuaWVyIGNhbGlwZXInLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzQ2XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ1N0ZWVsIHJ1bGUnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzQzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ1NwYW5uZXInLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzE2XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ0NodWNrIHNwYW5uZXInLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzkxXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ0hpZ2ggc3BlZWQgc3RlZWwgKEhTUyknLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzkyXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ1NpbmdsZSBwb2ludCBjdXR0aW5nIHRvb2wnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzkzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICBsZXQgYXBwQm94ID0gW107XHJcbiAgICAgICAgbGV0IGFwcEltYWdlID0gW107XHJcbiAgICAgICAgbGV0IGFwcENhcHRpb24gPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXBwYXJhdHVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgYXBwQm94W2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGFwcEltYWdlW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgIGFwcENhcHRpb25baV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIGFwcEltYWdlW2ldLnNyYyA9ICBhcHBhcmF0dXNbaV0uaW1hZ2U7XHJcbiAgICAgICAgICAgIGFwcENhcHRpb25baV0udGV4dENvbnRlbnQgPSBhcHBhcmF0dXNbaV0uY2FwO1xyXG4gICAgICAgICAgICBhcHBCb3hbaV0uYXBwZW5kQ2hpbGQoYXBwSW1hZ2VbaV0pO1xyXG4gICAgICAgICAgICBhcHBCb3hbaV0uYXBwZW5kQ2hpbGQoYXBwQ2FwdGlvbltpXSk7XHJcbiAgICAgICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoYXBwQm94W2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChzZWN0aW9uKTtcclxuICAgICAgICBjb25zdCB0aGVvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgdGhlb0hlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIHRoZW9IZWFkLnRleHRDb250ZW50ID0gJ1RIRU9SWSc7XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKHRoZW9IZWFkKTtcclxuICAgICAgICBjb25zdCBleHBsYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZXhwbGFpbi50ZXh0Q29udGVudCA9ICdBIGxhdGhlIGlzIGEgdHlwZSBvZiBtYWNoaW5lIHRvb2wgdGhhdCByb3RhdGVzIGEgd29ya3BpZWNlIG9uIGl0cyBheGlzIHRvIHNoYXBlIG1ldGFsIG9yIHdvb2QuIFRvIHJlbW92ZSBtYXRlcmlhbCBmcm9tIHRoZSB3b3JrcGllY2XigJR3aGljaCBtYXkgYmUgY29tcG9zZWQgb2YgZ2xhc3MsIG1ldGFsLCBvciB3b29kLCBhIGZpeGVkIGN1dHRpbmcgdG9vbCBpcyB1dGlsaXNlZC4gVGhlIG1vc3QgY29tbW9uIGFwcGFyYXR1cyB1c2VkIGluIHRoaXMgZXhwZXJpbWVudCBpcyB0aGUgbGF0aGUgbWFjaGluZS4gVGhlcmUgYXJlIGRpZmZlcmVudCB0eXBlcyBvZiBsYXRoZSBtYWNoaW5lIGFuZCB0aGUgbGF0aGUgbWFjaGluZXMgaGF2ZSB0aGUgc2FtZSBmZWF0dXJlcyBvciBwYXJ0cyB3aGljaCBpbmNsdWRlOic7XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKGV4cGxhaW4pO1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnQmVkJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdUaGUgYmVkIGlzIHRoZSBiYXNlIG9mIHRoZSBsYXRoZSBhbmQgcHJvdmlkZXMgc3VwcG9ydCBmb3IgdGhlIG90aGVyIGNvbXBvbmVudHMgb2YgdGhlIG1hY2hpbmUuJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWM5NFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0hlYWRzdG9jaycsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnVGhlIGhlYWRzdG9jayBpcyBsb2NhdGVkIGF0IG9uZSBlbmQgb2YgdGhlIGJlZCBhbmQgaG91c2VzIHRoZSBzcGluZGxlLiBUaGUgc3BpbmRsZSBpcyBhIHNoYWZ0IHRoYXQgcm90YXRlcyB0aGUgd29ya3BpZWNlLicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljOTVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdUYWlsc3RvY2snLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1RoZSB0YWlsc3RvY2sgaXMgbG9jYXRlZCBhdCB0aGUgb3RoZXIgZW5kIG9mIHRoZSBiZWQgYW5kIGNhbiBiZSB1c2VkIHRvIHN1cHBvcnQgdGhlIGVuZCBvZiB0aGUgd29ya3BpZWNlLicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljOTZcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdDYXJyaWFnZScsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnVGhlIGNhcnJpYWdlIGlzIGEgbW92YWJsZSBzbGlkZSB0aGF0IGhvbGRzIHRoZSBjdXR0aW5nIHRvb2wuIFRoZSBjYXJyaWFnZSBjYW4gYmUgbW92ZWQgYWxvbmcgdGhlIGJlZCBpbiBvcmRlciB0byBwb3NpdGlvbiB0aGUgY3V0dGluZyB0b29sIHJlbGF0aXZlIHRvIHRoZSB3b3JrcGllY2UgYW5kIGNvbXByaXNlcyBvZiB0aGUgY29tcG91bmQgcmVzdCwgdG9vbCBwb3N0LCBjcm9zcyBzbGlkZSBhbmQgZXRjIGFzIHNob3duIGJlbG93LicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljOTdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIGNhdGVnb3JpZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZChjcmVhdGVEaXZzKGl0ZW0pKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCB0ZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICB0ZXh0Mi50ZXh0Q29udGVudCA9ICdUaGUgbGF0aGUgbWFjaGluZSBpcyBhcHBsaWVkIGluIGRpZmZlcmVudCBhc3BlY3RzIGluIG91ciBldmVyeWRheSB3b3JsZCwgd2hpY2ggaW5jbHVkZTonO1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZCh0ZXh0Mik7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnTWFudWZhY3R1cmluZycsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnTGF0aGVzIGFyZSB1c2VkIHRvIGNyZWF0ZSBhIHdpZGUgdmFyaWV0eSBvZiBwYXJ0cywgc3VjaCBhcyBnZWFycywgc2hhZnRzLCBhbmQgYmVhcmluZ3MuJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0NvbnN0cnVjdGlvbicsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkxhdGhlcyBhcmUgdXNlZCB0byBjcmVhdGUgcGFydHMgZm9yIG1hY2hpbmVzIGFuZCB0b29scyB1c2VkIGluIGNvbnN0cnVjdGlvbi5cIixcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1JlcGFpcicsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnTGF0aGVzIGFyZSB1c2VkIHRvIHJlcGFpciBkYW1hZ2VkIHBhcnRzLicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIGNhdGVnb3J5LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKGNyZWF0ZURpdnMoaXRlbSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHRleHQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHRleHQxLnRleHRDb250ZW50ID0gJ1NlcXVlbmNlIG9mIG9wZXJhdGlvbnMgYXJlIHBlcmZvcm1lZCBieSB0aGUgbGF0aGUgbWFjaGluZSB3aGljaCBpbmNsdWRlczonO1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZCh0ZXh0MSk7XHJcbiAgICAgICAgY29uc3QgY2F0YWxvZyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdGYWNpbmcnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1RoZSBmYWNpbmcgb3BlcmF0aW9uIGludm9sdmVzIGN1dHRpbmcgYSBmbGF0IHN1cmZhY2UgcGVycGVuZGljdWxhciB0byB0aGUgYXhpcyBvZiByb3RhdGlvbiBvZiB0aGUgd29ya3BpZWNlLiBUaGlzIGNyZWF0ZXMgYSBzbW9vdGggc3VyZmFjZSBvbiB0aGUgZW5kIG9mIHRoZSB3b3JrcGllY2UuJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1R1cm5pbmcnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1R1cm5pbmcgaXMgdGhlIHByb2Nlc3Mgb2YgcmVtb3ZpbmcgbWF0ZXJpYWwgZnJvbSB0aGUgb3V0ZXIgZGlhbWV0ZXIgb2YgdGhlIHdvcmtwaWVjZSB0byBjcmVhdGUgYSBjeWxpbmRyaWNhbCBzaGFwZS4gVGhpcyBpcyBkb25lIGJ5IG1vdmluZyBhIGN1dHRpbmcgdG9vbCBwYXJhbGxlbCB0byB0aGUgYXhpcyBvZiByb3RhdGlvbi4nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnR3Jvb3ZpbmcnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ0dyb292aW5nIGludm9sdmVzIGN1dHRpbmcgYSBncm9vdmUgb3IgY2hhbm5lbCBpbnRvIHRoZSBzdXJmYWNlIG9mIHRoZSB3b3JrcGllY2UuIFRoaXMgY2FuIGJlIHVzZWQgZm9yIGNyZWF0aW5nIGZlYXR1cmVzIGxpa2UgdGhyZWFkcyBvciBmb3Igb3RoZXIgcHVycG9zZXMuJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1RocmVhZGluZycsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnVGhyZWFkaW5nIGlzIHRoZSBwcm9jZXNzIG9mIGN1dHRpbmcgdGhyZWFkcyBvbnRvIHRoZSBjeWxpbmRyaWNhbCBzdXJmYWNlIG9mIHRoZSB3b3JrcGllY2UuIFRoaXMgY2FuIGJlIGRvbmUgaW50ZXJuYWxseSAodGFwcGluZykgb3IgZXh0ZXJuYWxseSAoZGllIGN1dHRpbmcpLicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdEcmlsbGluZycsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlNvbWUgbGF0aGUgbWFjaGluZXMgYXJlIGVxdWlwcGVkIHdpdGggYXR0YWNobWVudHMgZm9yIGRyaWxsaW5nIGhvbGVzIGluIHRoZSB3b3JrcGllY2UuIFRoaXMgY2FuIGJlIGRvbmUgdXNpbmcgYSBkcmlsbCBjaHVjayBtb3VudGVkIG9uIHRoZSBsYXRoZSdzIHRhaWxzdG9jay5cIixcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0JvcmluZycsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkJvcmluZyBpcyB0aGUgcHJvY2VzcyBvZiBlbmxhcmdpbmcgYW4gZXhpc3RpbmcgaG9sZSBpbiB0aGUgd29ya3BpZWNlIHRvIGEgcHJlY2lzZSBkaWFtZXRlci4gVGhpcyBpcyB0eXBpY2FsbHkgZG9uZSB1c2luZyBhIGJvcmluZyBiYXIgbW91bnRlZCBvbiB0aGUgbGF0aGUncyB0b29scG9zdC5cIixcclxuICAgICAgICAgICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0ZpbmlzaGluZycsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkFmdGVyIHRoZSBkZXNpcmVkIG1hY2hpbmluZyBvcGVyYXRpb25zIGFyZSBjb21wbGV0ZSwgZmluaXNoaW5nIG9wZXJhdGlvbnMgc3VjaCBhcyBwb2xpc2hpbmcgb3IgZGVidXJyaW5nIG1heSBiZSBwZXJmb3JtZWQgdG8gaW1wcm92ZSB0aGUgc3VyZmFjZSBmaW5pc2ggb2YgdGhlIHdvcmtwaWVjZSBldGMuXCIsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdDaGFtZmVyaW5nJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiQ2hhbWZlcmluZyBpcyBhIG1hY2hpbmluZyBvcGVyYXRpb24gY29tbW9ubHkgcGVyZm9ybWVkIG9uIGEgbGF0aGUgbWFjaGluZSwgYWx0aG91Z2ggaXQgY2FuIGFsc28gYmUgZG9uZSB1c2luZyBvdGhlciB0b29scyBzdWNoIGFzIG1pbGxpbmcgbWFjaGluZXMgb3IgaGFuZCB0b29scy4gQ2hhbWZlcmluZyBpbnZvbHZlcyBjdXR0aW5nIG9yIGdyaW5kaW5nIGF3YXkgbWF0ZXJpYWwgZnJvbSB0aGUgZWRnZSBvZiBhIHdvcmtwaWVjZSB0byBjcmVhdGUgYSBiZXZlbGVkIGVkZ2Ugb3IgYSBjaGFtZmVyLlwiLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnR3Jvb3ZpbmcnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJHcm9vdmluZyByZWZlcnMgdG8gYSBzcGVjaWZpYyBtYWNoaW5pbmcgb3BlcmF0aW9uIHVzZWQgdG8gY3JlYXRlIG5hcnJvdyBjaGFubmVscyBvciBjdXRzIG9uIHRoZSBzdXJmYWNlIG9mIGEgd29ya3BpZWNlLiBJdCBpbnZvbHZlcyBjdXR0aW5nIGEgbmFycm93LCBlbG9uZ2F0ZWQgcmVjZXNzIG9yIGdyb292ZSBpbnRvIHRoZSBzdXJmYWNlIG9mIGEgd29ya3BpZWNlLlwiLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICBjYXRhbG9nLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoY3JlYXRlRGl2cyhpdGVtKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgaGVhZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIGhlYWQxLnRleHRDb250ZW50ID0gJ1dhdGNoIHRoZSBvcGVyYXRpb25zIHBlcmZvcm1lZCBvbiB0aGUgbGF0aGUgbWFjaGluZSBhbmQgZXZlbiBtb3JlJztcclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoaGVhZDEpO1xyXG4gICAgICAgIGNvbnN0IHZpZGVvNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHZpZGVvNC5pbm5lckhUTUwgPSAnPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLW5vY29va2llLmNvbS9lbWJlZC9TdmxaSEhEWENacz9zaT1UQ0s1RTlodmVhdGF0Z1B5XCIgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZTsgd2ViLXNoYXJlXCIgcmVmZXJyZXJwb2xpY3k9XCJzdHJpY3Qtb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPic7XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKHZpZGVvNCk7XHJcbiAgICAgICAgY29uc3QgdmlkZW8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdmlkZW8zLmlubmVySFRNTCA9ICc8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUtbm9jb29raWUuY29tL2VtYmVkL2ttNmlja1FnbFZZP3NpPUJQdy1lQ2JjMFJBZTFWalhcIiB0aXRsZT1cIllvdVR1YmUgdmlkZW8gcGxheWVyXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlOyB3ZWItc2hhcmVcIiByZWZlcnJlcnBvbGljeT1cInN0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW5cIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+JztcclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQodmlkZW8zKTtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHRoZW9yeSk7XHJcbiAgICAgICAgY29uc3QgcHJhY3RpY2FscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCBzdGVwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgc3RlcDEudGV4dENvbnRlbnQgPSAnUFJBQ1RJQ0FMIDogSE9XIFRPIFBFUkZPUk0gU1RFUCBUVVJOSU5HIEFORCBUQVBFUiBUVVJOSU5HIE9OIExBVEhFIE1BQ0hJTkUnO1xyXG4gICAgICAgIHByYWN0aWNhbHMuYXBwZW5kQ2hpbGQoc3RlcDEpO1xyXG4gICAgICAgIGNvbnN0IHN0ZXAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBzdGVwMy50ZXh0Q29udGVudCA9ICdQUk9DRURVUkU6JztcclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKHN0ZXAzKTtcclxuICAgICAgICBjb25zdCBzdGVwTGlzdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIGNvbnN0IHN0ZXBzMSA9IFsnVGhlIHdvcmsgcGllY2UgaXMgZml4ZWQgaW4gYSAzLWphdyBjaHVjayB3aXRoIHN1ZmZpY2llbnQgb3ZlcmhhbmcnLCAnQWRqdXN0IHRoZSBtYWNoaW5lIHRvIHJ1biB0aGUgam9iIHRvIGEgcmVxdWlyZWQgY3V0dGluZyBzcGVlZCcsICdGaXggdGhlIGN1dHRpbmcgdG9vbCBpbiB0aGUgdG9vbCBwb3N0IGFuZCBjZW50ZXJpbmcgb3BlcmF0aW9uIGlzIHBlcmZvcm1lZCBzbyB0aGF0IHRoZSBheGlzIG9mIHRoZSBqb2IgY29pbmNpZGVzIHdpdGggdGhlIGxhdGhlIGF4aXMnLCAnR2l2ZSB0aGUgZmVlZCBhbmQgZGVwdGggb2YgdGhlIGN1dCB0byB0aGUgY3V0dGluZyB0b29sJywgJ0ZhY2luZyBvcGVyYXRpb24gaXMgcGVyZm9ybWVkIGZyb20gdGhlIGNlbnRlciBvZiB0aGUgam9iIHRvd2FyZHMgb3V0d2FyZCBvciBmcm9tIHRoZSBjaXJjdW1mZXJlbmNlIHRvd2FyZHMgdGhlIGNlbnRlcicsICdQbGFpbiB0dXJuaW5nIG9wZXJhdGlvbiBpcyBwZXJmb3JtZWQgdW50aWwgdGhlIGRpYW1ldGVyIG9mIHRoZSB3b3JrcGllY2UgcmVkdWNlcyB0byAyM21tJywgJ0NoZWNrIHRoZSBkaW1lbnNpb25zIGJ5IHVzaW5nIFZlcm5pZXIgY2FsaXBlcnMnLCAnVGhlbiBjaGFtZmVyaW5nIGlzIGRvbmUgb24gdGhlIDIzbW0gZGlhbWV0ZXIgc3VyZmFjZScsICdSZXZlcnNlIHRoZSB3b3JrIHBpZWNlIGluIHRoZSBjaHVjayBhbmQgZmFjaW5nIG9wZXJhdGlvbiBpcyBwZXJmb3JtZWQgdG8gcmVkdWNlIHRoZSBsZW5ndGggb2Ygd29yayBwaWVjZSB0byB0aGUgcmVxdWlyZWQgZGltZW5zaW9ucycsICdBZ2FpbiBwbGFpbiB0dXJuaW5nIG9wZXJhdGlvbiBpcyBwZXJmb3JtZWQgdW50aWwgdGhlIGRpYW1ldGVyIG9mIHRoZSB3b3JrIHBpZWNlIHJlZHVjZXMgdG8gMThtbScsICdVc2luZyB0aGUgdi1jdXR0aW5nIHRvb2wgZ3Jvb3Zpbmcgb3BlcmF0aW9uIGlzIHBlcmZvcm1lZCBhY2NvcmRpbmcgdG8gdGhlIGdpdmVuIGRpbWVuc2lvbnMgYW5kIGZpbmlzaCB0aGUgZ3Jvb3ZlIHVzaW5nIHBhcnRpbmcgdG9vbCcsICdTd2l2ZWwgdGhlIGNvbXBvdW5kIHNsaWRlIHRvIHRoZSByZXF1aXJlZCBhbmdsZSBhbmQgdGFwZXIgdHVybmluZyBvcGVyYXRpb24gYnkgcm90YXRpbmcgdGhlIGNvbXBvdW5kIHNsaWRlIHdoZWVsLicsICdGaW5hbGx5LCBjaGVjayB0aGUgZGltZW5zaW9ucyBieSB1c2luZyBWZXJuaWVyIGNhbGlwZXJzLiddO1xyXG4gICAgICAgIGxldCBzdGVwQm94MSA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzdGVwczEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBzdGVwQm94MVtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIHN0ZXBCb3gxW2ldLnRleHRDb250ZW50ID0gc3RlcHMxW2ldO1xyXG4gICAgICAgICAgICBzdGVwTGlzdDEuYXBwZW5kQ2hpbGQoc3RlcEJveDFbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKHN0ZXBMaXN0MSk7XHJcbiAgICAgICAgY29uc3QgdGV4dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgdGV4dDMudGV4dENvbnRlbnQgPSAnVGhlIGxpbmsgdG8gd2F0Y2ggaG93IHRvIHBlcmZvcm0gdGhlIHRhcGVyIHR1cm5pbmcgb3BlcmF0aW9uIG9uIGxhdGhlIG1hY2hpbmUgcHJhY3RpY2FsIGlzIGJlbG93IPCfkYcnO1xyXG4gICAgICAgIHByYWN0aWNhbHMuYXBwZW5kQ2hpbGQodGV4dDMpO1xyXG4gICAgICAgIGNvbnN0IHZpZGVvNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHZpZGVvNS5pbm5lckhUTUwgPSAnPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLW5vY29va2llLmNvbS9lbWJlZC9ka3NJN0ZDOGlaUT9zaT1VUHY0R19DN3dLaEdjOFVlXCIgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZTsgd2ViLXNoYXJlXCIgcmVmZXJyZXJwb2xpY3k9XCJzdHJpY3Qtb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPic7XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZCh2aWRlbzUpO1xyXG4gICAgICAgIGNvbnN0IHRleHQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIHRleHQ0LnRleHRDb250ZW50ID0gJ1RoZSBsaW5rIHRvIHdhdGNoIGhvdyB0byBwZXJmb3JtIHRoZSBzdGVwIHR1cm5pbmcgb3BlcmF0aW9uIG9uIGxhdGhlIG1hY2hpbmUgcHJhY3RpY2FsIGlzIGJlbG93IPCfkYcnO1xyXG4gICAgICAgIHByYWN0aWNhbHMuYXBwZW5kQ2hpbGQodGV4dDQpO1xyXG4gICAgICAgIGNvbnN0IHZpZGVvNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHZpZGVvNi5pbm5lckhUTUwgPSAnPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLW5vY29va2llLmNvbS9lbWJlZC8zQ3kxeVN0Yzkzdz9zaT1ReFJRZkkzT191SjJqeEpUXCIgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZTsgd2ViLXNoYXJlXCIgcmVmZXJyZXJwb2xpY3k9XCJzdHJpY3Qtb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPic7XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZCh2aWRlbzYpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQocHJhY3RpY2Fscyk7XHJcbiAgICAgICAgY29uc3QgcHJlY2F1dGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCBjYXV0aW9uSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgY2F1dGlvbkhlYWQudGV4dENvbnRlbnQgPSBcIlBSRUNBVVRJT05TXCI7XHJcbiAgICAgICAgcHJlY2F1dGlvbi5hcHBlbmRDaGlsZChjYXV0aW9uSGVhZCk7XHJcbiAgICAgICAgY29uc3QgY2F1dGlvbkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIGNvbnN0IHByZWNhdXRpb25zID0gW1wiSSBlbnN1cmVkIHRoYXQgSSB3b3JlIG15IGxhYiBjb2F0IGFuZCBwZXJzb25hbCBwcm90ZWN0aXZlIGVxdWlwbWVudCAoUFBFKVwiLFwiSSBlbnN1cmVkIHRoYXQgSSBrZXB0IGhhbmRzIGNsZWFyIG9mIG1vdmluZyBwYXJ0cyBcIixcIkkgRW5zdXJlZCB0aGF0IEkgdXNlZCBjb29sYW50IG9yIGx1YnJpY2F0aW9uIHRvIHJlZHVjZSBmcmljdGlvbiwgZGlzc2lwYXRlIGhlYXQsIGFuZCBpbXByb3ZlIHN1cmZhY2UgZmluaXNoXCIsIF07XHJcbiAgICAgICAgbGV0IGNhdXRpb25Cb3ggPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJlY2F1dGlvbnMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBjYXV0aW9uQm94W2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgY2F1dGlvbkJveFtpXS50ZXh0Q29udGVudCA9IHByZWNhdXRpb25zW2ldO1xyXG4gICAgICAgICAgICBjYXV0aW9uTGlzdC5hcHBlbmRDaGlsZChjYXV0aW9uQm94W2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJlY2F1dGlvbi5hcHBlbmRDaGlsZChjYXV0aW9uTGlzdCk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChwcmVjYXV0aW9uKTtcclxuICAgICAgICBjb25zdCBjb25jbHVzaW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IGNvbmNIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBjb25jSGVhZC50ZXh0Q29udGVudCA9IFwiQ09OQ0xVU0lPTjpcIjtcclxuICAgICAgICBjb25jbHVzaW9uLmFwcGVuZENoaWxkKGNvbmNIZWFkKTtcclxuICAgICAgICBjb25zdCBjb25jVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBjb25jVGV4dC50ZXh0Q29udGVudCA9IFwiQXQgdGhlIGVuZCBvZiB0aGlzIGV4cGVyaW1lbnQsIHRoZSBsYXRoZSBtYWNoaW5lIHdhcyB1c2VkIHRvIHBlcmZvcm0gc3RlcCB0dXJuaW5nIGFuZCB0YXBlciB0dXJuaW5nIG9uIHRoZSBnaXZlbiB3b3JrcGllY2UgYW5kIHVuZGVyc3Rvb2Qgc2VxdWVuY2Ugb2Ygb3BlcmF0aW9ucyBvZiB0aGUgbGF0aGUgbWFjaGluZS5cIjtcclxuICAgICAgICBjb25jbHVzaW9uLmFwcGVuZENoaWxkKGNvbmNUZXh0KTtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGNvbmNsdXNpb24pO1xyXG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgcmVmSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgcmVmSGVhZC50ZXh0Q29udGVudCA9IFwiUkVGRVJFTkNFU1wiO1xyXG4gICAgICAgIHJlZmVyZW5jZXMuYXBwZW5kQ2hpbGQocmVmSGVhZCk7XHJcbiAgICAgICAgY29uc3QgcmVmTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlID0gW1wiUHJvZHVjdGlvbiBFbmdpbmVlcmluZyBMYWJvcmF0b3J5IE1hbnVhbCBmb3IgRUxBMjAxIGFuZCBFTEEyMDIgYnkgRGVwYXJ0bWVudCBvZiBQcm9kdWN0aW9uIEVuZ2luZWVyaW5nLCBVbml2ZXJzaXR5IG9mIEJlbmluLlwiLCBcIk1hY2hpbmUgU2hvcCBQcmFjdGljZSBieSBLYXJsIE1vbHRyZWNodFwiLCBcIkxhdGhlIE9wZXJhdGlvbiBhbmQgTWFpbnRlbmFuY2UgYnkgSm9obiBELiBMYXdzb25cIl07XHJcbiAgICAgICAgbGV0IHJlZkJveCA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByZWZlcmVuY2UubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICByZWZCb3hbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICByZWZCb3hbaV0udGV4dENvbnRlbnQgPSByZWZlcmVuY2VbaV07XHJcbiAgICAgICAgICAgIHJlZkxpc3QuYXBwZW5kQ2hpbGQocmVmQm94W2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVmZXJlbmNlcy5hcHBlbmRDaGlsZChyZWZMaXN0KTtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHJlZmVyZW5jZXMpO1xyXG4gICAgICAgIGNvbnN0IGhvdmVyID0gY3JlYXRlSG92ZXIoJyMnKTtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGhvdmVyKTtcclxuICAgICAgICBjb25zdCBkb3dubG9hZCA9IGNyZWF0ZURvd25sb2FkKCcjJyk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChkb3dubG9hZCk7XHJcbn07XHJcblxyXG5cclxuY29uc3QgZGlzcGxheUFTMjAxID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWFpbiA9IHJlc2V0KCk7XHJcbiAgICAgICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgICAgaGVhZC50ZXh0Q29udGVudCAgPSAnVGhlIEludGVybmFsIENvbWJ1c3Rpb24gRW5naW5le0FTMjAxfSc7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChoZWFkKTtcclxuICAgICAgICBjb25zdCBvYmplY3RpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3Qgb2JqSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgb2JqSGVhZC50ZXh0Q29udGVudCA9ICdPQkpFQ1RJVkVTJztcclxuICAgICAgICBvYmplY3RpdmUuYXBwZW5kQ2hpbGQob2JqSGVhZCk7XHJcbiAgICAgICAgY29uc3Qgb2JqTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgY29uc3Qgb2JqZWN0aXZlcyA9IFsnVG8ga25vdyB0aGUgbWFqb3IgcGFydHMgb2YgYW4gaW50ZXJuYWwgY29tYnVzdGlvbiBlbmdpbmUgYW5kIHRoZWlyIGZ1bmN0aW9ucy4nLCAnVG8ga25vdyB0aGUgZGlmZmVyZW50IGNsYXNzaWZpY2F0aW9ucyBvZiB0aGUgaW50ZXJuYWwgY29tYnVzdGlvbiBlbmdpbmUnLCAgICdUbyBiZSBhYmxlIHRvIGRlc2NyaWJlIHRoZSB3b3JraW5nIGN5Y2xlIG9mIGEgZm91ci0gc3Ryb2tlLWN5Y2xlIGludGVybmFsIGNvbWJ1c3Rpb24gc3BhcmsgaWduaXRpb24gZW5naW5lIGFuZCBjb21wcmVzc2lvbiBpZ25pdGlvbiBlbmdpbmUnLCAnVG8gYmUgYWJsZSB0byBkaWFnbm9zZSBzaW1wbGUgaW50ZXJuYWwgY29tYnVzdGlvbiBlbmdpbmUgZmF1bHRzJywgJ1RvIGtub3cgaG93IHRvIGNoYW5nZSB0aGUgZW5naW5lIG9pbCBvZiBhbiBpbnRlcm5hbCBjb21idXN0aW9uIGVuZ2luZScsICdUbyBiZSBhYmxlIHRvIGlkZW50aWZ5IHRoZSB0b29scyB1c2VkIHRvIGVmZmVjdCByZXBhaXJzIG9uIGFuIGludGVybmFsIGNvbWJ1c3Rpb24gZW5naW5lJywgICdUbyBrbm93IHRoZSByb3V0aW5lIGNoZWNrcyBhbmQgcm91dGluZSBtYWludGVuYW5jZSBjYXJyaWVkIG91dCBvbiBhbiBpbnRlcm5hbCBjb21idXN0aW9uIGVuZ2luZSddO1xyXG4gICAgICAgIGxldCBsaXN0ID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG9iamVjdGl2ZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBsaXN0W2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgbGlzdFtpXS50ZXh0Q29udGVudCA9IG9iamVjdGl2ZXNbaV07XHJcbiAgICAgICAgICAgIG9iakxpc3QuYXBwZW5kQ2hpbGQobGlzdFtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9iamVjdGl2ZS5hcHBlbmRDaGlsZChvYmpMaXN0KTtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKG9iamVjdGl2ZSk7XHJcbiAgICAgICAgY29uc3QgZW5naW5lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgZW5naW5lSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgZW5naW5lSGVhZC50ZXh0Q29udGVudCA9ICdUSEUgSU5URVJOQUwgQ09NQlVTVElPTiBFTkdJTkUgQU5EIFRIRSBQQVJUUyBPRiBBTiBJTlRFUk5BTCBDT01CVVNUSU9OIEVOR0lORSc7XHJcbiAgICAgICAgZW5naW5lRGl2LmFwcGVuZENoaWxkKGVuZ2luZUhlYWQpO1xyXG4gICAgICAgIGNvbnN0IGVuZ2luZVBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGltZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBpbWcxLnNyYyA9cGljMTtcclxuICAgICAgICBpbWcxLmFsdCA9ICcnO1xyXG4gICAgICAgIGVuZ2luZVBpYy5hcHBlbmRDaGlsZChpbWcxKTtcclxuICAgICAgICBjb25zdCBpbWcyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgaW1nMi5zcmMgPSBwaWMyO1xyXG4gICAgICAgIGltZzIuYWx0ID0gJyc7XHJcbiAgICAgICAgZW5naW5lUGljLmFwcGVuZENoaWxkKGltZzIpO1xyXG4gICAgICAgIGVuZ2luZURpdi5hcHBlbmRDaGlsZChlbmdpbmVQaWMpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoZW5naW5lRGl2KTtcclxuICAgICAgICBjb25zdCB0aGVvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgZXhwbGFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGV4cGxhaW4udGV4dENvbnRlbnQgPSAnQW4gaW50ZXJuYWwgY29tYnVzdGlvbiBlbmdpbmUgKElDRSkgaXMgYSB0eXBlIG9mIGVuZ2luZSB3aGVyZSB0aGUgZnVlbCBpcyBidXJuZWQgaW5zaWRlIHRoZSBlbmdpbmUgaXRzZWxmLCBjcmVhdGluZyBob3QgZ2FzZXMgdGhhdCBwdXNoIHBpc3RvbnMgb3IgdHVyYmluZXMuIFRoaXMgY3JlYXRlcyBtb3Rpb24gdGhhdCBjYW4gYmUgdXNlZCB0byBwb3dlciB2ZWhpY2xlcywgZ2VuZXJhdG9ycywgYW5kIG90aGVyIG1hY2hpbmVzLkludGVybmFsIGNvbWJ1c3Rpb24gZW5naW5lcyBmYWxsIGludG8gdHdvIHByaW1hcnkgY2F0ZWdvcmllczogY29tcHJlc3Npb24taWduaXRpb24gKENJKSBlbmdpbmVzIGFuZCBzcGFyay1pZ25pdGlvbiAoU0kpIGVuZ2luZXMgYW5kIGFsc28gdGhlIGJvdHRvbSBkZWFkIGNlbnRyZSwgdG9wIGRlYWQgY2VudHJlIGFuZCB0aGUgY29tYnVzdGlvbiBjaGFtYmVyIGFyZSBleHBsYWluZWQgYmVsb3c6JztcclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoZXhwbGFpbik7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdTcGFyay1pZ25pdGlvbiBlbmdpbmVzJyxcclxuICAgICAgICB0ZXh0OiAnU3BhcmsgcGx1Z3MgYXJlIHVzZWQgYW5kIHNwYXJrLWlnbml0aW9uIGVuZ2luZXMgYXJlIGFsc28gY29tbW9ubHkgcmVmZXJyZWQgdG8gYXMgZ2Fzb2xpbmUgZW5naW5lcywgdG8gaWduaXRlIHRoZSBmdWVsLWFpciBtaXh0dXJlIGFuZCAuIFRoZSBjb21idXN0aW9uIHByb2Nlc3MgY3JlYXRlcyBwcmVzc3VyZSB0aGF0IGRyaXZlcyBwaXN0b25zLCB3aGljaCB1bHRpbWF0ZWx5IHBvd2VyIHRoZSB2ZWhpY2xlLicsXHJcbiAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdDb21idXN0aW9uIGlnbml0aW9uIGVuZ2luZXMnLFxyXG4gICAgICAgIHRleHQ6ICdUaGUgZnVlbC1haXIgY29tYmluYXRpb24gaXMgaWduaXRlZCBhbmQgdGhpcyBlbmdpbmUgaXMgY29tbW9ubHkgcmVmZXJyZWQgdG8gYXMgZGllc2VsIGVuZ2luZXMsIGJ5IHRoZSBoZWF0IG9mIGNvbXByZXNzaW9uLCB0aGVzZSBlbmdpbmVzIGNvbXByZXNzIG9ubHkgYWlyIGluIHRoZSBjb21idXN0aW9uIGNoYW1iZXIsIHJhaXNpbmcgaXRzIHRlbXBlcmF0dXJlIHRvIHRoZSBwb2ludCB3aGVyZSBkaWVzZWwgZnVlbCBpbmplY3RlZCBpbnRvIHRoZSBjaGFtYmVyIGlnbml0ZXMgc3BvbnRhbmVvdXNseS4gVGhpcyBjb21idXN0aW9uIGRyaXZlcyB0aGUgZW5naW5lXFwncyBwaXN0b25zLicsXHJcbiAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdUb3AgZGVhZCBjZW50cmUnLFxyXG4gICAgICAgIHRleHQ6ICdUaGUgcG9zaXRpb24gb2YgdGhlIHBpc3RvbiB3aXRoaW4gdGhlIGN5bGluZGVyIGF0IHRoZSBoaWdoZXN0IHBvaW50IG9mIGl0cyBzdHJva2UgaXMgcmVmZXJyZWQgdG8gYXMgdG9wIGRlYWQgY2VudGVyLiBUaGlzIHJlZmVycyB0byB0aGUgcG9zaXRpb24gb2YgdGhlIHBpc3RvbiBpbiBhbiBlbmdpbmUgY3lsaW5kZXIgd2hlcmUgaXQgaXMgZmFydGhlc3QgYXdheSBmcm9tIHRoZSBjcmFua3NoYWZ0LiBJdFxcJ3MgZXNzZW50aWFsbHkgdGhlIGhpZ2hlc3QgcG9pbnQgdGhlIHBpc3RvbiByZWFjaGVzIGluIGl0cyB1cC1hbmQtZG93biBtb3Rpb24gd2l0aGluIHRoZSBjeWxpbmRlcicsXHJcbiAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdCb3R0b20gZGVhZCBjZW50cmUnLFxyXG4gICAgICAgIHRleHQ6ICdJdFxcJ3MgdGhlIHBvc2l0aW9uIG9mIHRoZSBwaXN0b24gaW4gdGhlIGN5bGluZGVyIHdoZW4gaXRcXCdzIGNsb3Nlc3QgdG8gdGhlIGNyYW5rc2hhZnQuIEluIG90aGVyIHdvcmRzLCBpdFxcJ3MgdGhlIGxvd2VzdCBwb2ludCB0aGUgcGlzdG9uIHJlYWNoZXMgaW4gaXRzIG1vdmVtZW50Lkl0IHJlZmVycyB0byB0aGUgcG9zaXRpb24gb2YgdGhlIHBpc3RvbiBhdCB0aGUgbG93ZXN0IHBvaW50IG9mIGl0cyBzdHJva2Ugd2l0aGluIHRoZSBjeWxpbmRlci4gQXQgdGhlIGJvdHRvbSBkZWFkIGNlbnRyZSwgdGhlIHBpc3RvbiBpcyBmYXJ0aGVzdCBhd2F5IGZyb20gdGhlIGN5bGluZGVyIGhlYWQsIGFuZCB0aGUgdm9sdW1lIG9mIHRoZSBjb21idXN0aW9uIGNoYW1iZXIgaXMgYXQgaXRzIGxhcmdlc3QuJyxcclxuICAgICAgICBpbWFnZTogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ0NvbWJ1c3Rpb24gY2hhbWJlcicsXHJcbiAgICAgICAgdGV4dDogJ1RoZSBwYXJ0IG9mIHRoZSBjeWxpbmRlciB3aGVyZSB0aGUgY29tcHJlc3NlZCBhbmQgaWduaXRlZCBhaXItZnVlbCBtaXh0dXJlIHByb2R1Y2VzIHBvd2VyIGlzIGNhbGxlZCB0aGUgY29tYnVzdGlvbiBjaGFtYmVyLiBJdCBpcyBtYWRlIHVwIG9mIHRoZSBnYXAgdGhhdCBleGlzdHMgYmV0d2VlbiB0aGUgY3lsaW5kZXIgaGVhZCBhbmQgdGhlIHRvcCBvZiB0aGUgcGlzdG9uIGF0IHRoZSB0b3AgZGVhZCBjZW50cmUuIEluIHRoaXMgY2hhbWJlciwgdGhlIGJ1cm5pbmcgb2YgdGhlIGFpci1mdWVsIG1peHR1cmUgaW4gdGhlIGNvbWJ1c3Rpb24gY2hhbWJlciBjcmVhdGVzIGhvdCBnYXNlcyB0aGF0IHB1c2ggdGhlIHBpc3RvbiBkb3duLCBnZW5lcmF0aW5nIHRoZSBwb3dlciB0aGF0IGRyaXZlcyB0aGUgZW5naW5lLicsXHJcbiAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIGNhdGVnb3JpZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZChjcmVhdGVEaXZzKGl0ZW0pKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdUaGUgaW50ZXJuYWwgY29tYnVzdGlvbiBlbmdpbmUgY29uc2lzdHMgb2YgdmFyaW91cyBwYXJ0cyBhbmQgc29tZSBvZiB0aGVzZSBwYXJ0cyBhcmUgbGlzdGVkIGJlbG93OiAnO1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XHJcbiAgICAgICAgY29uc3QgcGFydHMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgIHRpdGxlOiAnTWFpbiBlbmdpbmUgYmxvY2snLFxyXG4gICAgICAgIHRleHQ6ICdUaGUgZW5naW5lIGJsb2NrIGlzIHRoZSBjb3JlIG9mIHRoZSBlbmdpbmUuIEl0XFwncyBhIGxhcmdlIGNhc3QgaXJvbiBvciBhbHVtaW51bSBibG9jayB0aGF0IGhvdXNlcyB0aGUgY3lsaW5kZXJzLCBwaXN0b25zLCBjcmFua3NoYWZ0LCBhbmQgb3RoZXIgY3JpdGljYWwgY29tcG9uZW50cy4gSXQgcHJvdmlkZXMgdGhlIHN0cnVjdHVyZSBhbmQgc3VwcG9ydCBmb3IgdGhlIGVudGlyZSBlbmdpbmUgYXNzZW1ibHkuJyxcclxuICAgICAgICBpbWFnZTogcGljM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIHRpdGxlOiAnQ3lsaW5kZXJzJyxcclxuICAgICAgICB0ZXh0OiAnQ3lsaW5kZXJzIGFyZSB0aGUgY2hhbWJlcnMgd2l0aGluIHRoZSBlbmdpbmUgYmxvY2sgd2hlcmUgdGhlIGNvbWJ1c3Rpb24gcHJvY2VzcyAoYnVybmluZyBvZiBhaXItZnVlbCBtaXh0dXJlKSB0YWtlcyBwbGFjZS4gUGlzdG9ucyBtb3ZlIHVwIGFuZCBkb3duIHdpdGhpbiB0aGUgY3lsaW5kZXJzLiBUaGUgbnVtYmVyIG9mIGN5bGluZGVycyB2YXJpZXMgZGVwZW5kaW5nIG9uIHRoZSBlbmdpbmUgZGVzaWduLCB3aXRoIG1vcmUgY3lsaW5kZXJzIHR5cGljYWxseSBpbmRpY2F0aW5nIGEgbW9yZSBwb3dlcmZ1bCBlbmdpbmUuJyxcclxuICAgICAgICBpbWFnZTogcGljNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIHRpdGxlOiAnUGlzdG9ucycsXHJcbiAgICAgICAgdGV4dDogJ0luc2lkZSB0aGUgY3lsaW5kZXJzLCBwaXN0b25zIGFyZSBjeWxpbmRyaWNhbCBwYXJ0cyB0aGF0IG1vdmUgdXAgYW5kIGRvd24uIER1cmluZyB0aGUgY29tcHJlc3Npb24gc3Ryb2tlLCB0aGV5IGNvbXByZXNzIHRoZSBhaXItZnVlbCBtaXh0dXJlLCBhbmQgZHVyaW5nIHRoZSBwb3dlciBzdHJva2UsIHRoZXkgdHJhbnNmZXIgdGhlIGNvbWJ1c3Rpb24gZm9yY2UgdG8gdGhlIGNyYW5rc2hhZnQuIFRocm91Z2ggY29ubmVjdGluZyByb2RzLCB0aGUgY3JhbmtzaGFmdCBhbmQgcGlzdG9ucyBhcmUgam9pbmVkLicsXHJcbiAgICAgICAgaW1hZ2U6IHBpYzVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ0Nvbm5lY3Rpbmcgcm9kcycsXHJcbiAgICAgICAgdGV4dDogJ0Nvbm5lY3Rpbmcgcm9kcyBhcmUgdGhlIGxpbmsgYmV0d2VlbiB0aGUgcGlzdG9ucyBhbmQgdGhlIGNyYW5rc2hhZnQuIFRoZXkgY29udmVydCB0aGUgcmVjaXByb2NhdGluZyAodXAtYW5kLWRvd24pIG1vdGlvbiBvZiB0aGUgcGlzdG9ucyBpbnRvIHRoZSByb3RhdGluZyBtb3Rpb24gb2YgdGhlIGNyYW5rc2hhZnQuJyxcclxuICAgICAgICBpbWFnZTogcGljNlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIHRpdGxlOiAnQ2Ftc2hhZnQnLFxyXG4gICAgICAgIHRleHQ6ICdpcyB0aGUgc2hhZnQgdGhhdCByZWd1bGF0ZXMgdGhlIHZhbHZlc1xcJyBvcGVuaW5nIGFuZCBzaHV0dGluZy4gSXRzIGVsZXZhdGVkIHBvcnRpb25zLCBvciBsb2JlcywgZXhlcnQgcHJlc3N1cmUgb24gdGhlIHZhbHZlIGxpZnRlcnMsIHdoaWNoIGNhdXNlcyB0aGUgdmFsdmVzIHRvIG9wZW4uIFZpYSBhIHRpbWluZyBiZWx0IG9yIGNoYWluLCB0aGUgY3JhbmtzaGFmdCBkcml2ZXMgdGhlIGNhbXNoYWZ0LicsXHJcbiAgICAgICAgaW1hZ2U6IHBpYzdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ0NyYW5rc2hhZnQnLFxyXG4gICAgICAgIHRleHQ6ICdUaGUgY3JhbmtzaGFmdCBpcyBhIHJvdGF0aW5nIHNoYWZ0IHRoYXQgc2l0cyBhdCB0aGUgYm90dG9tIG9mIHRoZSBlbmdpbmUgYmxvY2suIEl0IHJlY2VpdmVzIHRoZSByZWNpcHJvY2F0aW5nIG1vdGlvbiBmcm9tIHRoZSBjb25uZWN0aW5nIHJvZHMgYW5kIGNvbnZlcnRzIGl0IGludG8gcm90YXJ5IG1vdGlvbi4gVGhpcyByb3RhdGlvbmFsIG1vdGlvbiBpcyB0aGVuIHVzZWQgdG8gcG93ZXIgdGhlIHdoZWVscyBvZiBhIHZlaGljbGUgb3IgdG8gZHJpdmUgb3RoZXIgbWFjaGluZXMuJyxcclxuICAgICAgICBpbWFnZTogcGljOFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIHRpdGxlOiAnU3BhcmsgUGx1Z3MnLFxyXG4gICAgICAgIHRleHQ6ICdTcGFyayBwbHVncyBhcmUgdXNlZCBpbiBzcGFyay1pZ25pdGlvbiAoU0kpIGVuZ2luZXMgdG8gaWduaXRlIHRoZSBhaXItZnVlbCBtaXh0dXJlLiBUaGV5IGNyZWF0ZSBhIHNwYXJrIHRoYXQgaWduaXRlcyB0aGUgbWl4dHVyZSwgaW5pdGlhdGluZyB0aGUgY29tYnVzdGlvbiBwcm9jZXNzLicsXHJcbiAgICAgICAgaW1hZ2U6IHBpYzlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ1ZhbHZlcycsXHJcbiAgICAgICAgdGV4dDogJ1ZhbHZlcyBhcmUgc3ByaW5nLWxvYWRlZCBtZWNoYW5pc21zIHRoYXQgY29udHJvbCB0aGUgZmxvdyBvZiBhaXIgYW5kIGZ1ZWwgaW50byBhbmQgb3V0IG9mIHRoZSBjeWxpbmRlcnMuIFRoZXJlIGFyZSB0eXBpY2FsbHkgdHdvIHZhbHZlcyBwZXIgY3lsaW5kZXI6IG9uZSBpbnRha2UgdmFsdmUgYW5kIG9uZSBleGhhdXN0IHZhbHZlLiBUaGUgY2Ftc2hhZnQgb3BlbnMgYW5kIGNsb3NlcyB0aGUgdmFsdmVzIGF0IHNwZWNpZmljIHBvaW50cyBpbiB0aGUgZW5naW5lIGN5Y2xlLicsXHJcbiAgICAgICAgaW1hZ2U6IHBpYzEwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIHBhcnRzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoY3JlYXRlRGl2cyhpdGVtKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qgd29ya2luZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICB3b3JraW5nLnRleHRDb250ZW50ID0gJ1RoZSBjb3JlIHdvcmtpbmcgcHJpbmNpcGxlIG9mIHRoZSBtYWpvcml0eSBvZiBjb250ZW1wb3JhcnkgaW50ZXJuYWwgY29tYnVzdGlvbiBlbmdpbmVzIGlzIHRoZSBmb3VyLXN0cm9rZSBjeWNsZSwgc29tZXRpbWVzIHJlZmVycmVkIHRvIGFzIHRoZSBPdHRvIGN5Y2xlIGFmdGVyIGl0cyBjcmVhdG9yIE5pa29sYXVzIE90dG8uIEl0IGlzIG1hZGUgdXAgb2YgZm91ciBzZXBhcmF0ZSBwaXN0b24gc3Ryb2tlcyBvciBtb3ZlbWVudHMgdGhhdCBlYWNoIGhhdmUgYSBkZWZpbml0ZSBmdW5jdGlvbiBpbiB0aGUgY29tYnVzdGlvbiBwcm9jZXNzIGluc2lkZSB0aGUgZW5naW5lIGN5bGluZGVyLic7XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKHdvcmtpbmcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHN0cm9rZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBzdHJva2UudGV4dENvbnRlbnQgPSAnQSBmb3VyLXN0cm9rZSBjeWNsZSBpcyBjb21tb25seSB1c2VkIGJ5IGJvdGggc3BhcmstaWduaXRpb24gKFNJKSBhbmQgdGhlIGNvbWJ1c3Rpb24gaWduaXRpb24gKENJKSBlbmdpbmVzIGRpc2N1c3NlZCBhYm92ZSBicmllZmx5IHRvIHRyYW5zZm9ybSBmdWVsIGludG8gdXNlZnVsIGVuZXJneS4gVGhpcyBjb25zaXN0cyBvZiA6JztcclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoc3Ryb2tlKTtcclxuICAgICAgICBjb25zdCBzdHJva2VzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ0ludGFrZSBzdHJva2UnLFxyXG4gICAgICAgIHRleHQ6ICdBcyB0aGUgcGlzdG9uIGRlc2NlbmRzLCBmdWVsIGFuZCBhaXIgYXJlIGRyYXduIGludG8gdGhlIGN5bGluZGVyLiBJdCBpcyBhIG1peHR1cmUgb2YgZnVlbCAoaW4gZ2Fzb2xpbmUgZW5naW5lcykgb3IgYWlyIChpbiBkaWVzZWwgZW5naW5lcykgaXMgZHJhd24gaW50byB0aGUgY3lsaW5kZXIgdGhyb3VnaCB0aGUgaW50YWtlIHZhbHZlLiBUaGlzIGNyZWF0ZXMgYSBjb21idXN0aWJsZSBtaXh0dXJlIGluIHRoZSBjb21idXN0aW9uIGNoYW1iZXIuJyxcclxuICAgICAgICBpbWFnZTogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ0NvbXByZXNzaW9uIHN0cm9rZScsXHJcbiAgICAgICAgdGV4dDogJ0FzIHRoZSBwaXN0b24gcmlzZXMsIHRoZSBmdWVsIGFuZCBhaXIgbWl4dHVyZSBhcmUgY29tcHJlc3NlZCBhbmQgdGhpcyBjb21wcmVzc2lvbiBpbmNyZWFzZXMgdGhlIHByZXNzdXJlIGFuZCB0ZW1wZXJhdHVyZSBvZiB0aGUgbWl4dHVyZSwgbWFraW5nIGl0IG1vcmUgY29tYnVzdGlibGUgYW5kIGVmZmljaWVudCB0byBidXJuLicsXHJcbiAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdDb21idXN0aW9uL3Bvd2VyIHN0cm9rZScsXHJcbiAgICAgICAgdGV4dDogJ0luIGEgc3BhcmsgaWduaXRpb24gKFNJKSBlbmdpbmUsIHRoZSBhaXItZnVlbCBjb21iaW5hdGlvbiBpcyBpZ25pdGVkIGJ5IHRoZSBzcGFyayBwbHVnOyBpbiBhIGNvbWJ1c3Rpb24gaWduaXRpb24gKENJKSBlbmdpbmUsIHRoZSBtaXh0dXJlIGlzIGlnbml0ZWQgYnkgdGhlIGhlYXQgb2YgY29tcHJlc3Npb24gYW5kIHRoZSByZXN1bHRpbmcgZXhwbG9zaW9uIHJhcGlkbHkgaW5jcmVhc2VzIHByZXNzdXJlIHdpdGhpbiB0aGUgY3lsaW5kZXIsIGRyaXZpbmcgdGhlIHBpc3RvbiBmb3JjZWZ1bGx5IGJhY2sgZG93bi4gVGhpcyBkb3dud2FyZCBtb3ZlbWVudCBpcyB3aGF0IGdlbmVyYXRlcyB0aGUgcG93ZXIgbmVlZGVkIHRvIHR1cm4gdGhlIGVuZ2luZVxcJ3MgY3JhbmtzaGFmdC4gVGhpcyByZXN1bHRzIGluIHRoZSByYXBpZCBleHBhbnNpb24gb2YgaG90IGdhc3Nlcy4nLFxyXG4gICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIHRpdGxlOiAnRXhoYXVzdCBzdHJva2UnLFxyXG4gICAgICAgIHRleHQ6ICdBcyB0aGUgcGlzdG9uIGRlc2NlbmRzLCB0aGUgY3lsaW5kZXJcXCdzIGV4aGF1c3QgZ2Fzc2VzIGFyZSBmb3JjZWQgb3V0IGFzIHRoZSBwaXN0b24gcmVhY2hlcyB0aGUgYm90dG9tIG9mIGl0cyBzdHJva2UgYWdhaW4sIHRoZSBleGhhdXN0IHZhbHZlIG9wZW5zLCBhbmQgdGhlIHBpc3RvbiBtb3ZlcyBiYWNrIHVwIHRoZSBjeWxpbmRlci4gVGhpcyB1cHdhcmQgbW92ZW1lbnQgZXhwZWxzIHRoZSBzcGVudCBleGhhdXN0IGdhc2VzIGZyb20gdGhlIGNvbWJ1c3Rpb24gY2hhbWJlciB0aHJvdWdoIHRoZSBleGhhdXN0IHZhbHZlLCBwcmVwYXJpbmcgdGhlIGN5bGluZGVyIGZvciB0aGUgbmV4dCBjeWNsZS4nLFxyXG4gICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICBzdHJva2VzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoY3JlYXRlRGl2cyhpdGVtKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3QgdGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgdGV4dDEudGV4dENvbnRlbnQgPSAnV2F0Y2ggaG93IHRoZSBmb3VyIGN5Y2xlIHN0cm9rZSB3b3JrcyBhbmQgaG93IHRoZSBpbnRlcm5hbCBjb21idXN0aW9uIGVuZ2luZSB3b3Jrcyc7XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKHRleHQxKTtcclxuICAgICAgICBjb25zdCB2aWRlbzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB2aWRlbzEuaW5uZXJIVE1MID0gJzxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS1ub2Nvb2tpZS5jb20vZW1iZWQvWlF2Zkh5ZmdCdEE/c2k9T0VIUzJUZzZja3ZscGFHSlwiIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmU7IHdlYi1zaGFyZVwiIHJlZmVycmVycG9saWN5PVwic3RyaWN0LW9yaWdpbi13aGVuLWNyb3NzLW9yaWdpblwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nO1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZCh2aWRlbzEpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGhlYWQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBoZWFkMS50ZXh0Q29udGVudCA9ICdBcHBsaWNhdGlvbnMgb2YgYW4gaW50ZXJuYWwgY29tYnVzdGlvbiBlbmdpbmUgaW5jbHVkZTonO1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZChoZWFkMSk7XHJcbiAgICAgICAgY29uc3QgYXBwbGljYXRpb25zID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ1RyYW5zcG9ydGF0aW9uJyxcclxuICAgICAgICB0ZXh0OiAnSW50ZXJuYWwgY29tYnVzdGlvbiBlbmdpbmVzIGFyZSBtb3N0IGZyZXF1ZW50bHkgdXNlZCB0byBwb3dlciBhdXRvbW9iaWxlcy4gQXV0b21vYmlsZXMsIHRydWNrcywgbW90b3JiaWtlcywgc2Nvb3RlcnMsIGFuZCBldmVuIGFpcnBsYW5lcyAod2l0aCBwaXN0b24gZW5naW5lcykgZmFsbCB3aXRoaW4gdGhpcyBjYXRlZ29yeS4nLFxyXG4gICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgIHRpdGxlOiAnUG93ZXIgZ2VuZXJhdGlvbicsXHJcbiAgICAgICAgdGV4dDogJ1N0YXRpb25hcnkgYXBwbGljYXRpb25zIHV0aWxpemluZyBpbnRlcm5hbCBjb21idXN0aW9uIGVuZ2luZXMgY2FuIHByb3ZpZGUgZW5lcmd5LiBUaGVzZSBhcmUgdmVyeSBoZWxwZnVsIGFzIGJhY2t1cCBwb3dlciBnZW5lcmF0b3JzIGluIGRpc3RhbnQgbG9jYXRpb25zLicsXHJcbiAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdBaXJjcmFmdCcsXHJcbiAgICAgICAgdGV4dDogJ01hbnkgYWlyY3JhZnQsIHBhcnRpY3VsYXJseSBzbWFsbGVyIGdlbmVyYWwgYXZpYXRpb24gcGxhbmVzLCByZWx5IG9uIGludGVybmFsIGNvbWJ1c3Rpb24gZW5naW5lcyBmb3IgcHJvcHVsc2lvbi4gVGhlc2UgZW5naW5lcyBtYXkgcnVuIG9uIGF2aWF0aW9uIGdhc29saW5lIChhdmdhcykgb3IgamV0IGZ1ZWwuJyxcclxuICAgICAgICBpbWFnZTogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ01hcmluZScsXHJcbiAgICAgICAgdGV4dDogJ0ludGVybmFsIGNvbWJ1c3Rpb24gZW5naW5lcyBhcmUgdXNlZCBpbiBib2F0cywgc2hpcHMsIGFuZCBvdGhlciBtYXJpbmUgdmVzc2VscyBmb3IgcHJvcHVsc2lvbi4gVGhleSBjYW4gcnVuIG9uIGdhc29saW5lLCBkaWVzZWwsIG9yIGFsdGVybmF0aXZlIGZ1ZWxzIHN1Y2ggYXMgbGlxdWVmaWVkIG5hdHVyYWwgZ2FzIChMTkcpLicsXHJcbiAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG4gICAgICAgIGFwcGxpY2F0aW9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKGNyZWF0ZURpdnMoaXRlbSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGludGVybmFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGludGVybmFsLnRleHRDb250ZW50ID0gJ0FuIGludGVybmFsIGNvbWJ1c3Rpb24gZW5naW5lIGlzIG1lYW50IHRvIGJlIGNoZWNrZWQgcmVndWxhcmx5IGFuZCBhbHNvIHVuZGVyZ28gc29tZSBtYWludGVuYW5jZSB3aGljaCBpbmNsdWRlOic7XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKGludGVybmFsKTtcclxuICAgICAgICBjb25zdCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgY2hlY2sudGV4dENvbnRlbnQgPSAnUk9VVElORSBDSEVDS1M6JztcclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoY2hlY2spO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgY29uc3QgY2hlY2tzID0gWydDaGVjayB0aGUgYmF0dGVyeSB0ZXJtaW5hbHMgZm9yIGNvcnJvc2lvbiBhbmQgZW5zdXJlIHRoZXkgYXJlIHRpZ2h0IGFuZCBzZWN1cmUgYW5kIHRlc3QgdGhlIGJhdHRlcnkgdm9sdGFnZSBhbmQgY2hhcmdpbmcgc3lzdGVtIHRvIGVuc3VyZSBwcm9wZXIgb3BlcmF0aW9uLicsICdDaGVjayB0aGUgb2lsIGxldmVsIHVzaW5nIHRoZSBkaXBzdGljayBhbmQgdG9wIHVwIGlmIG5lY2Vzc2FyeS4gQWxzbywgbW9uaXRvciB0aGUgb2lsIGNvbmRpdGlvbiBhbmQgc2NoZWR1bGUgcmVndWxhciBvaWwgY2hhbmdlcy4nLCAnQ2hlY2sgdGhlIGNvbmRpdGlvbiBvZiBiZWx0cyBhbmQgaG9zZXMgZm9yIGNyYWNrcywgd2Vhciwgb3IgbG9vc2UgY29ubmVjdGlvbnMuIENyYWNrZWQgb3Igd29ybiBiZWx0cyBhbmQgaG9zZXMgY2FuIGJyZWFrIGFuZCBsZWFkIHRvIGVuZ2luZSBwcm9ibGVtcycsICdMb29rIGFyb3VuZCBhbmQgY2hlY2sgdGhlIGVuZ2luZSBjb21wYXJ0bWVudCBmb3IgYW55IHNpZ25zIG9mIGxlYWtzLCBpbmNsdWRpbmcgb2lsLCBjb29sYW50LCBvciBvdGhlciBmbHVpZHMuIExlYWtzIGNhbiBpbmRpY2F0ZSBwb3RlbnRpYWwgcHJvYmxlbXMgYW5kIHNob3VsZCBiZSBhZGRyZXNzZWQgcHJvbXB0bHkuJywgJ0luc3BlY3QgYW5kIGNoZWNrIHRoZSBiZWx0cyBmb3Igd2VhciwgY3JhY2tzLCBvciBmcmF5aW5nLiBSZXBsYWNlIHdvcm4gb3IgZGFtYWdlZCBiZWx0cyB0byBwcmV2ZW50IHVuZXhwZWN0ZWQgZmFpbHVyZXMuJ107XHJcbiAgICAgICAgbGV0IGFycmF5ID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNoZWNrcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGFycmF5W2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgYXJyYXlbaV0udGV4dENvbnRlbnQgPSBjaGVja3NbaV07XHJcbiAgICAgICAgICAgIGNoZWNrTGlzdC5hcHBlbmRDaGlsZChhcnJheVtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZChjaGVja0xpc3QpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG1haW50YWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBtYWludGFpbi50ZXh0Q29udGVudCA9ICdST1VUSU5FIE1BSU5URU5BTkNFOic7XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKG1haW50YWluKTtcclxuICAgICAgICBjb25zdCBtYWludGFpbkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIGNvbnN0IG1haW50ZW5hbmNlID0gWydSZWd1bGFybHkgY2hhbmdlIHRoZSBlbmdpbmUgb2lsIGFuZCBvaWwgZmlsdGVyIGFjY29yZGluZyB0byB0aGUgbWFudWZhY3R1cmVyXFwncyByZWNvbW1lbmRlZCBpbnRlcnZhbHMuIEZyZXNoIG9pbCBsdWJyaWNhdGVzIGVuZ2luZSBjb21wb25lbnRzLCByZWR1Y2VzIHdlYXIsIGFuZCBoZWxwcyBtYWludGFpbiBlbmdpbmUgcGVyZm9ybWFuY2UuJywgJ1JlZ3VsYXJseSByZXBsYWNlIHRoZSBlbmdpbmUgYWlyIGZpbHRlciBhdCByZWd1bGFyIGludGVydmFscyB0byBlbnN1cmUgcHJvcGVyIGFpcmZsb3cgYW5kIGZpbHRyYXRpb24uIEEgY2xlYW4gYWlyIGZpbHRlciBoZWxwcyBvcHRpbWl6ZSBlbmdpbmUgcGVyZm9ybWFuY2UgYW5kIGZ1ZWwgZWZmaWNpZW5jeS4nLCdSZWd1bGFybHkgcmVwbGFjZSB0aGUgZnVlbCBmaWx0ZXIgdG8gcHJldmVudCBmdWVsIHN5c3RlbSBjb250YW1pbmF0aW9uIGFuZCBtYWludGFpbiBwcm9wZXIgZnVlbCBmbG93LicsICdSZWd1bGFybHkgcmVwbGFjZSBzcGFyayBwbHVncyBhdCB0aGUgcmVjb21tZW5kZWQgaW50ZXJ2YWxzIHRvIGVuc3VyZSByZWxpYWJsZSBpZ25pdGlvbiBhbmQgZWZmaWNpZW50IGNvbWJ1c3Rpb24gYmVjYXVzZSB3b3JuIG9yIGZvdWxlZCBzcGFyayBwbHVncyBjYW4gbGVhZCB0byBwb29yIGVuZ2luZSBwZXJmb3JtYW5jZSBhbmQgcmVkdWNlZCBmdWVsIGVmZmljaWVuY3kuJywgJ1JlZ3VsYXJseSByZXBsYWNlIHRoZSB0aW1pbmcgYmVsdCBvciB0aW1pbmcgY2hhaW4gdG8gcHJldmVudCBlbmdpbmUgZGFtYWdlIGR1ZSB0byB0aW1pbmcgc3lzdGVtIGZhaWx1cmUuJ107XHJcbiAgICAgICAgbGV0IGJveCA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBtYWludGVuYW5jZS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGJveFtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIGJveFtpXS50ZXh0Q29udGVudCA9IG1haW50ZW5hbmNlW2ldO1xyXG4gICAgICAgICAgICBtYWludGFpbkxpc3QuYXBwZW5kQ2hpbGQoYm94W2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKG1haW50YWluTGlzdCk7XHJcbiAgICAgICAgY29uc3QgdG9vbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICAgICAgdG9vbC50ZXh0Q29udGVudCA9ICdGRVcgVE9PTFMgVVNFRCBUTyBFRkZFQ1QgUkVQQUlSUyBPTiBBTiBJTlRFUk5BTCBDT01CVVNUSU9OIEVOR0lORTonO1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZCh0b29sKTtcclxuICAgICAgICBjb25zdCB0b29scyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTY3Jld2RyaXZlcnMnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ05lZWRlZCBmb3IgdmFyaW91cyBzY3Jld2luZyBhbmQgcHJ5aW5nIHRhc2tzIGR1cmluZyBlbmdpbmUgcmVwYWlycy4nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzExXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnSGFtbWVyJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdBIHJ1YmJlciBtYWxsZXQgaXMgcHJlZmVyYWJsZSB0byBhdm9pZCBkYW1hZ2luZyBlbmdpbmUgcGFydHMsIGJ1dCBhIHN0YW5kYXJkIG1ldGFsIGhhbW1lciBtYXkgYWxzbyBiZSBuZWVkZWQgZm9yIHNvbWUgdGFza3MuJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWMxMlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1RvcnF1ZSBXcmVuY2gnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1RoaXMgd3JlbmNoIGFsbG93cyBmb3IgYXBwbHlpbmcgYSBzcGVjaWZpYyBhbW91bnQgb2YgdG9ycXVlIHdoZW4gdGlnaHRlbmluZyBmYXN0ZW5lcnMsIGNydWNpYWwgdG8gcHJldmVudCBvdmVyIHRpZ2h0ZW5pbmcgb3IgdW5kZXItdGlnaHRlbmluZyBjcml0aWNhbCBlbmdpbmUgY29tcG9uZW50cy4nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzEzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnUGxpZXJzJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdVc2VmdWwgZm9yIGdyaXBwaW5nLCB0dXJuaW5nLCBhbmQgbWFuaXB1bGF0aW5nIGNvbXBvbmVudHMgZHVyaW5nIGVuZ2luZSB3b3JrLicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljMTRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdGdW5uZWwnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ1VzZWQgZm9yIGFkZGluZyBmbHVpZHMgbGlrZSBlbmdpbmUgb2lsIG9yIGNvb2xhbnQgd2l0aG91dCBzcGlsbHMuJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWMxNVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1NwYW5uZXInLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ2lzIGEgbWV0YWwgdG9vbCB1c2VkIHRvIGdyaXAgYW5kIHR1cm4gbnV0cywgYm9sdHMsIGFuZCBvdGhlciBmYXN0ZW5lcnMuJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWMxNlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0NhciBqYWNrOicsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnQSBjYXIgamFjayBpcyBhIG1lY2hhbmljYWwgZGV2aWNlIHVzZWQgdG8gbGlmdCB2ZWhpY2xlcyBvZmYgdGhlIGdyb3VuZCB0byBmYWNpbGl0YXRlIG1haW50ZW5hbmNlLCByZXBhaXJzLCB0aXJlIGNoYW5nZXMsIGFuZCBvdGhlciB0YXNrcy4nLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzE3XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICB0b29scy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZChjcmVhdGVEaXZzKGl0ZW0pKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qgc3RlcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgc3RlcC50ZXh0Q29udGVudCA9ICdTVEVQUyBUQUtFTiBUTyBDSEFOR0UgVEhFIE9JTCBJTiBBTiBJTlRFUk5BTCBDT01CVVNUSU9OIEVOR0lORSc7XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKHN0ZXApO1xyXG4gICAgICAgIGNvbnN0IHN0ZXBMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICBjb25zdCBzdGVwcyA9IFtcIkdldCB0aGUgc3VwcGxpZXMgeW91J2xsIG5lZWQsIHN1Y2ggYXMgZW5naW5lIG9pbCAodGhlIGtpbmQgYW5kIHZpc2Nvc2l0eSB0aGF0IHRoZSBtYW51ZmFjdHVyZXIgcmVjb21tZW5kcyksIGEgZnJlc2ggb2lsIGZpbHRlciwgYSB3cmVuY2ggb3Igc29ja2V0IHNldCB0byByZW1vdmUgdGhlIGRyYWluIHBsdWcgYW5kIG9pbCBmaWx0ZXIsIGEgZHJhaW4gcGFuIHRvIGNhdGNoIHRoZSB1c2VkIG9pbCwgYW5kIHByb3RlY3RpdmUgZ2xvdmVzIGFuZCBzYWZldHkgZ2xhc3Nlcy5cIixcIlB1dCB0aGUgY2FyIGluIHBhcmsgb24gYSBsZXZlbCBhcmVhIGFuZCBhcHBseSB0aGUgcGFya2luZyBicmFrZS4gTWFrZSBzdXJlIHRoZSBlbmdpbmUgaXMgY29vbCB0byBwcmV2ZW50IGhvdCBvaWwgYnVybnMuIFRvIGFjY2VzcyB0aGUgdW5kZXJiZWxseSwgbGlmdCB0aGUgY2FyIGlmIG5lZWRlZCB1c2luZyBqYWNrcyBvciByYW1wcy5cIixcIkxvb2sgYmVuZWF0aCB0aGUgZW5naW5lIHRvIGZpbmQgdGhlIG9pbCBkcmFpbiBwbHVnLiBJZiB5b3UncmUgbm90IHN1cmUgd2hlcmUgaXQgaXMgZXhhY3RseSwgY2hlY2sgdGhlIG93bmVyJ3MgbWFudWFsLiBUbyBjb2xsZWN0IHRoZSBzcGVudCBvaWwsIHBsYWNlIHRoZSBkcmFpbiBwYW4gdW5kZXJuZWF0aCB0aGUgZHJhaW4gcGx1Zy5cIixcIkNhcmVmdWxseSByZW1vdmUgdGhlIG9pbCBkcmFpbiBwbHVnIGJ5IHR1cm5pbmcgaXQgY291bnRlciBjbG9ja3dpc2Ugd2l0aCBhIHdyZW5jaCBvciBzb2NrZXQgc2V0LiBLZWVwIGluIG1pbmQgdGhhdCB0aGUgb2lsIGNvdWxkIGJlIGhlYXRlZC4gQWZ0ZXIgdGhlIGRyYWluIHN0b3BwZXIgaXMgbG9vc2UsIGZ1bGx5IHJlbW92ZSBpdCBhbmQgbGV0IHRoZSBvbGQgb2lsIHJ1biBvdXQgaW50byB0aGUgZHJhaW4gcGFuLiBNYWtlIHN1cmUgdGhhdCBhbGwgb2YgdGhlIG9pbCBpcyBjYXB0dXJlZCBieSB0aGUgZHJhaW4gcGFuLlwiLCBcIkxvY2F0ZSB0aGUgb2lsIGZpbHRlciwgdHlwaWNhbGx5IGxvY2F0ZWQgbmVhciB0aGUgb2lsIHBhbi4gVXNlIGFuIG9pbCBmaWx0ZXIgd3JlbmNoIHRvIGxvb3NlbiB0aGUgb2lsIGZpbHRlciBpbiBhIGNvdW50ZXIgY2xvY2t3aXNlIGRpcmVjdGlvbi4gT25jZSBsb29zZW5lZCwgY2FyZWZ1bGx5IHVuc2NyZXcgYW5kIHJlbW92ZSB0aGUgb2xkIG9pbCBmaWx0ZXIuIEJlIHByZXBhcmVkIGZvciBvaWwgdG8gc3BpbGwgb3V0IHdoZW4gcmVtb3ZpbmcgdGhlIGZpbHRlciwgc28gZW5zdXJlIHRoZSBkcmFpbiBwYW4gaXMgcG9zaXRpb25lZCB0byBjYXRjaCBhbnkgc3BpbGxzLlwiLCBcIkFwcGx5IGEgc21hbGwgbGF5ZXIgb2YgZnJlc2ggZW5naW5lIG9pbCB0byB0aGUgcnViYmVyIGdhc2tldCBvbiB0aGUgbmV3IG9pbCBmaWx0ZXIgYmVmb3JlIGluc3RhbGxpbmcgaXQuIFRoaXMgZmFjaWxpdGF0ZXMgdGhlIGNyZWF0aW9uIG9mIGEgZ29vZCBzZWFsIGFuZCBtYWtlcyByZW1vdmFsIHNpbXBsZXIgd2hlbiB0aGUgbmV4dCBvaWwgY2hhbmdlIGlzIHBlcmZvcm1lZC5cIiwgXCJDYXJlZnVsbHkgc2NyZXcgdGhlIG5ldyBvaWwgZmlsdGVyIG9udG8gdGhlIGVuZ2luZSBieSBoYW5kIGluIGEgY2xvY2t3aXNlIGRpcmVjdGlvbiB1bnRpbCBpdCBpcyBzbnVnLiBBdm9pZCBvdmVyLXRpZ2h0ZW5pbmcgdGhlIGZpbHRlciwgYXMgdGhpcyBjYW4gZGFtYWdlIHRoZSBnYXNrZXQgb3IgY2F1c2UgbGVha3MuXCIsIFwiQWZ0ZXIgdGhlIG9sZCBvaWwgaGFzIGNvbXBsZXRlbHkgZHJhaW5lZCwgY2xlYW4gdGhlIGRyYWluIHBsdWcgYW5kIGxvb2sgZm9yIGFueSBkYW1hZ2UgdG8gdGhlIHdhc2hlciBvciBnYXNrZXQuIElmIHJlcXVpcmVkLCBzd2FwIG91dCB0aGUgZ2Fza2V0IG9yIHdhc2hlci4gVXNpbmcgYSB3cmVuY2ggb3Igc29ja2V0IHNldCwgY2FyZWZ1bGx5IHJlaW5zdGFsbCB0aGUgZHJhaW4gcGx1ZyBhbmQgdGlnaHRlbiBpdCBmaXJtbHkuXCIsIFwiRmluZCBhbmQgdGFrZSBvZmYgdGhlIG9pbCBmaWxsZXIgY2FwIGxvY2F0ZWQgYXRvcCB0aGUgZW5naW5lLiBBcyBkaXJlY3RlZCBieSB0aGUgbWFudWZhY3R1cmVyIGFuZCBjb250YWluZWQgaW4gdGhlIG93bmVyJ3MgbWFudWFsLCB1c2UgYSBmdW5uZWwgdG8gYWRkIHRoZSByaWdodCBraW5kIGFuZCBxdWFudGl0eSBvZiBuZXcgZW5naW5lIG9pbC5cIiwgXCJBZnRlciBhZGRpbmcgbmV3IG9pbCwgcmVwbGFjZSB0aGUgb2lsIGZpbGxlciBjYXAgc2VjdXJlbHkuIFN0YXJ0IHRoZSBlbmdpbmUgYW5kIGxldCBpdCBydW4gZm9yIGEgZmV3IG1pbnV0ZXMgdG8gY2lyY3VsYXRlIHRoZSBuZXcgb2lsIHRocm91Z2hvdXQgdGhlIGVuZ2luZS4gVHVybiBvZmYgdGhlIGVuZ2luZSBhbmQgYWxsb3cgaXQgdG8gc2l0IGZvciBhIGZldyBtaW51dGVzIHRvIGFsbG93IHRoZSBvaWwgdG8gc2V0dGxlXCIsXHJcbiAgICAgICAgIFwiVG8gY2hlY2sgdGhlIG9pbCBsZXZlbCwgcmVtb3ZlIHRoZSBvaWwgZGlwc3RpY2sgd2hpbGUgdGhlIGVuZ2luZSBpcyBvZmYsIGNsZWFuIGl0LCBmdWxseSBpbnNlcnQgaXQgYWdhaW4sIGFuZCB0aGVuIHJlbW92ZSBpdCBvbmNlIGFnYWluLiBJZiBleHRyYSBvaWwgaXMgbmVlZGVkIHRvIGdldCBpdCB0byB0aGUgcmlnaHQgbGV2ZWwsIGFkZCBpdC5cIiwgXCJQcm9wZXJseSBkaXNwb3NlIG9mIHRoZSBvbGQgb2lsIGFuZCBvaWwgZmlsdGVyIGFjY29yZGluZyB0byBsb2NhbCByZWd1bGF0aW9ucy4gTWFueSBhdXRvIHBhcnRzIHN0b3JlcyBhbmQgcmVjeWNsaW5nIGNlbnRlcnMgYWNjZXB0IHVzZWQgb2lsIGZvciByZWN5Y2xpbmcuXCJdO1xyXG4gICAgICAgIGxldCBzdGVwQm94ID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHN0ZXBzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgc3RlcEJveFtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIHN0ZXBCb3hbaV0udGV4dENvbnRlbnQgPSBzdGVwc1tpXTtcclxuICAgICAgICAgICAgc3RlcExpc3QuYXBwZW5kQ2hpbGQoc3RlcEJveFtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZChzdGVwTGlzdCk7XHJcbiAgICAgICAgY29uc3QgdGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgdGV4dDIudGV4dENvbnRlbnQgPSAnV2F0Y2ggaG93IHRvIGNoYW5nZSB0aGUgb2lsIG9mIGFuIGludGVybmFsIGNvbWJ1c3Rpb24gZW5naW5lIG9mIGEgY2FyJztcclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQodGV4dDIpO1xyXG4gICAgICAgIGNvbnN0IHZpZGVvMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHZpZGVvMi5pbm5lckhUTUwgPSAnPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLW5vY29va2llLmNvbS9lbWJlZC9PMWhGMjVDb3d2OD9zaT0zeC1uN3VRT1BFZ0RFSzRxXCIgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZTsgd2ViLXNoYXJlXCIgcmVmZXJyZXJwb2xpY3k9XCJzdHJpY3Qtb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPic7XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKHZpZGVvMik7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZCh0aGVvcnkpO1xyXG4gICAgICAgIGNvbnN0IHByZWNhdXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgY2F1dGlvbkhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIGNhdXRpb25IZWFkLnRleHRDb250ZW50ID0gXCJQUkVDQVVUSU9OU1wiO1xyXG4gICAgICAgIHByZWNhdXRpb24uYXBwZW5kQ2hpbGQoY2F1dGlvbkhlYWQpO1xyXG4gICAgICAgIGNvbnN0IGNhdXRpb25MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICBjb25zdCBwcmVjYXV0aW9ucyA9IFtcIkkgZW5zdXJlZCB0aGF0IEkgd29yZSBteSBsYWIgY29hdCBhbmQgcGVyc29uYWwgcHJvdGVjdGl2ZSBlcXVpcG1lbnQgKFBQRSlcIiwgXCJJIGVuc3VyZWQgdGhhdCBiZWZvcmUgcGVyZm9ybWluZyBhbnkgbWFpbnRlbmFuY2Ugb3IgcmVwYWlycywgYWxsb3cgdGhlIGVuZ2luZSB0byBjb29sIGRvd24gdG8gcHJldmVudCBidXJucyBmcm9tIGhvdCBlbmdpbmUgY29tcG9uZW50cywgZXhoYXVzdCBnYXNlcywgb3IgZmx1aWRzXCIsIFwiSSBFbnN1cmVkIHRoYXQgSSByZWFkIGFuZCB1bmRlcnN0YW5kIHRoZSBtYW51ZmFjdHVyZXIncyBpbnN0cnVjdGlvbnMgYW5kIHNhZmV0eSBndWlkZWxpbmVzIHByb3ZpZGVkIGluIHRoZSBvd25lcidzIG1hbnVhbCBvciBzZXJ2aWNlIG1hbnVhbCBiZWZvcmUgcGVyZm9ybWluZyBhbnkgbWFpbnRlbmFuY2Ugb3IgcmVwYWlycy5cIl07XHJcbiAgICAgICAgbGV0IGNhdXRpb25Cb3ggPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJlY2F1dGlvbnMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBjYXV0aW9uQm94W2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgY2F1dGlvbkJveFtpXS50ZXh0Q29udGVudCA9IHByZWNhdXRpb25zW2ldO1xyXG4gICAgICAgICAgICBjYXV0aW9uTGlzdC5hcHBlbmRDaGlsZChjYXV0aW9uQm94W2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJlY2F1dGlvbi5hcHBlbmRDaGlsZChjYXV0aW9uTGlzdCk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChwcmVjYXV0aW9uKTtcclxuICAgICAgICBjb25zdCBjb25jbHVzaW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IGNvbmNIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBjb25jSGVhZC50ZXh0Q29udGVudCA9IFwiQ09OQ0xVU0lPTjpcIjtcclxuICAgICAgICBjb25jbHVzaW9uLmFwcGVuZENoaWxkKGNvbmNIZWFkKTtcclxuICAgICAgICBjb25zdCBjb25jVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBjb25jVGV4dC50ZXh0Q29udGVudCA9IFwiQXQgdGhlIGVuZCBvZiB0aGlzIGV4cGVyaW1lbnQsIHRoZSBwYXJ0cyBvZiB0aGUgaW50ZXJuYWwgY29tYnVzdGlvbiBlbmdpbmUgd2FzIHVuZGVyc3Rvb2QgYW5kIHdlcmUgaWRlbnRpZmllZCBhbmQgYWxzbyBob3cgdGhlIGludGVybmFsIGNvbWJ1c3Rpb24gZW5naW5lIHdvcmtzIGFuZCBhbHNvIGhvdyB0aGUgZm91ciBjeWNsZSBzdHJva2VzIHdvcmtzLlwiO1xyXG4gICAgICAgIGNvbmNsdXNpb24uYXBwZW5kQ2hpbGQoY29uY1RleHQpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoY29uY2x1c2lvbik7XHJcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCByZWZIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICByZWZIZWFkLnRleHRDb250ZW50ID0gXCJSRUZFUkVOQ0VTXCI7XHJcbiAgICAgICAgcmVmZXJlbmNlcy5hcHBlbmRDaGlsZChyZWZIZWFkKTtcclxuICAgICAgICBjb25zdCByZWZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICBjb25zdCByZWZlcmVuY2UgPSBbXCJQcm9kdWN0aW9uIEVuZ2luZWVyaW5nIExhYm9yYXRvcnkgTWFudWFsIGZvciBFTEEyMDEgYW5kIEVMQTIwMiBieSBEZXBhcnRtZW50IG9mIFByb2R1Y3Rpb24gRW5naW5lZXJpbmcsIFVuaXZlcnNpdHkgb2YgQmVuaW4uXCIsIFwiQm9zY2ggQXV0b21vdGl2ZSBIYW5kYm9vayBieSBSb2JlcnQgQm9zY2guXCIsIFwiSW50ZXJuYWwgQ29tYnVzdGlvbiBFbmdpbmUgRnVuZGFtZW50YWxzIGJ5IEpvaG4gSGV5d29vZC5cIl07XHJcbiAgICAgICAgbGV0IHJlZkJveCA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByZWZlcmVuY2UubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICByZWZCb3hbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgICAgICByZWZCb3hbaV0udGV4dENvbnRlbnQgPSByZWZlcmVuY2VbaV07XHJcbiAgICAgICAgICAgIHJlZkxpc3QuYXBwZW5kQ2hpbGQocmVmQm94W2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVmZXJlbmNlcy5hcHBlbmRDaGlsZChyZWZMaXN0KTtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHJlZmVyZW5jZXMpO1xyXG4gICAgICAgIGNvbnN0IGhvdmVyID0gY3JlYXRlSG92ZXIoJyMnKTtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGhvdmVyKTtcclxuICAgICAgICBjb25zdCBkb3dubG9hZCA9IGNyZWF0ZURvd25sb2FkKCcjJyk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChkb3dubG9hZCk7XHJcbn07XHJcbmNvbnN0IGRpc3BsYXlGUzIwMSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1haW4gPSByZXNldCgpO1xyXG4gICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBoZWFkLnRleHRDb250ZW50ICA9ICdJbnRyb2R1Y3Rpb24gdG8gRm91bmRyeSBTaG9we0ZTMjAxfSc7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGhlYWQpO1xyXG4gICAgY29uc3Qgb2JqZWN0aXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgY29uc3Qgb2JqSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBvYmpIZWFkLnRleHRDb250ZW50ID0gJ09CSkVDVElWRVMnO1xyXG4gICAgb2JqZWN0aXZlLmFwcGVuZENoaWxkKG9iakhlYWQpO1xyXG4gICAgY29uc3Qgb2JqTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBjb25zdCBvYmplY3RpdmVzID0gWydUbyB1bmRlcnN0YW5kIHdoYXQgcGF0dGVybnMgYXJlJywgJ1RvIGtub3cgd2hhdCBtb3VsZGluZyBzYW5kcyBhcmUnLCAnVG8gZmFtaWxpYXJpemUgd2l0aCB0aGUgdG9vbHMgYW5kIG1hdGVyaWFscyB1c2VkIGluIGZvdW5kcnkgc2hvcCcsICdUbyBwcm9kdWNlIGEgc2ltcGxlIGNhc3QnXTtcclxuICAgIGxldCBsaXN0ID0gW107XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgb2JqZWN0aXZlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgbGlzdFtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgbGlzdFtpXS50ZXh0Q29udGVudCA9IG9iamVjdGl2ZXNbaV07XHJcbiAgICAgICAgb2JqTGlzdC5hcHBlbmRDaGlsZChsaXN0W2ldKTtcclxuICAgIH1cclxuICAgIG9iamVjdGl2ZS5hcHBlbmRDaGlsZChvYmpMaXN0KTtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQob2JqZWN0aXZlKTtcclxuICAgIGNvbnN0IGFwcEhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgYXBwSGVhZC50ZXh0Q29udGVudCA9ICdBcHBhcmF0dXMnO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChhcHBIZWFkKTtcclxuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdhcHBCb3gnKTtcclxuICAgICAgICBjb25zdCBhcHBhcmF0dXMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ01vdWxkaW5nIEJveCcsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljOThcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnRHJhdyBzcGlrZXMnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzk5XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ1N3YWInLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzEwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdTbGlja3MnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzEwMVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdSYW1tZXJzJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWMxMDJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnU2hvdmVsJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWMxMDNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnSGFuZCBSaWRkbGUnLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzEwNFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdXaXJlIEJydXNoJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWM3M1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdEcmFnIGFuZCBjb3BlIGJveGVzJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWMxMDVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnU3RyaWtlIG9mZiBiYXInLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IHBpYzEwNlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXA6ICdNb3VsZGluZyBTYW5kJyxcclxuICAgICAgICAgICAgICAgIGltYWdlOiBwaWMxMDdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FwOiAnU3BydWUgUGlucycsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljMTA4XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ1ZlbnQgV2lyZScsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljMTA5XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcDogJ1Ryb3dlbCcsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogcGljMTEwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICBsZXQgYXBwQm94ID0gW107XHJcbiAgICAgICAgbGV0IGFwcEltYWdlID0gW107XHJcbiAgICAgICAgbGV0IGFwcENhcHRpb24gPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXBwYXJhdHVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgYXBwQm94W2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGFwcEltYWdlW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgICAgIGFwcENhcHRpb25baV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIGFwcEltYWdlW2ldLnNyYyA9ICBhcHBhcmF0dXNbaV0uaW1hZ2U7XHJcbiAgICAgICAgICAgIGFwcENhcHRpb25baV0udGV4dENvbnRlbnQgPSBhcHBhcmF0dXNbaV0uY2FwO1xyXG4gICAgICAgICAgICBhcHBCb3hbaV0uYXBwZW5kQ2hpbGQoYXBwSW1hZ2VbaV0pO1xyXG4gICAgICAgICAgICBhcHBCb3hbaV0uYXBwZW5kQ2hpbGQoYXBwQ2FwdGlvbltpXSk7XHJcbiAgICAgICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoYXBwQm94W2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChzZWN0aW9uKTtcclxuICAgICAgICBjb25zdCB0aGVvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3QgdGhlb0hlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIHRoZW9IZWFkLnRleHRDb250ZW50ID0gJ1RIRU9SWSc7XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKHRoZW9IZWFkKTtcclxuICAgICAgICBjb25zdCBleHBsYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZXhwbGFpbi50ZXh0Q29udGVudCA9ICdJbiBnZW5lcmFsLCBhIGZvdW5kcnkgc2hvcCBpcyBhIHBsYWNlIHdoZXJlIG1ldGFsIGNhc3Rpbmcgb3BlcmF0aW9ucyBhcmUgY29uZHVjdGVkLiBNZXRhbCBpcyBoZWF0ZWQgaW4gYSBmb3VuZHJ5IGFuZCB0aGVuIHBvdXJlZCBpbnRvIG1vbGRzIHRvIG1ha2UgYSB2YXJpZXR5IG9mIGNvbXBvbmVudHMgb3IgdGhpbmdzLiBUaGVzZSBpdGVtcyBtaWdodCBiZSBhbnl0aGluZyBmcm9tIGNvbXBsZXggc2N1bHB0dXJlcyB0byBwaWVjZXMgb2YgaW5kdXN0cmlhbCB0ZWNobm9sb2d5LiBGb3VuZHJpZXMgYXJlIGVzc2VudGlhbCB0byB0aGUgaW5kdXN0cmlhbCBzZWN0b3IgYmVjYXVzZSB0aGV5IG9mZmVyIHRoZSB0b29scyBuZWVkZWQgdG8gcHJlY2lzZWx5IGZvcm0gaW50cmljYXRlIG1ldGFsIHN0cnVjdHVyZXMuIFRoZXJlIG1heSBiZSBwb3VyaW5nLCBtb2xkaW5nLCBtZWx0aW5nLCBhbmQgZmluaXNoaW5nIHByb2NlZHVyZXMgaW52b2x2ZWQuIEJlY2F1c2Ugb2YgdGhlIGhpZ2ggdGVtcGVyYXR1cmVzIGFuZCBwb3NzaWJseSBkYW5nZXJvdXMgbWF0ZXJpYWxzIGludm9sdmVkLCBzYWZldHkgcHJlY2F1dGlvbnMgYXJlIGltcG9ydGFudC4gRm91bmRyeSBzaG9wcyBhcmUgdml0YWwgdG8gbWFueSBpbmR1c3RyaWVzLCBzdWNoIGFzIG1hbnVmYWN0dXJpbmcsIGNvbnN0cnVjdGlvbiwgYWVyb3NwYWNlLCBhbmQgYXV0b21vdGl2ZSwgc2luY2UgdGhleSBvZmZlciB0aGUgdG9vbHMgbmVjZXNzYXJ5IHRvIHByZWNpc2VseSBmYWJyaWNhdGUgaW50cmljYXRlIG1ldGFsIGNvbXBvbmVudHMuIEJlY2F1c2Ugb2YgdGhlIGV4dHJlbWUgdGVtcGVyYXR1cmVzIGFuZCBwb3RlbnRpYWwgaGF6YXJkcyBhc3NvY2lhdGVkIHdpdGggdGhlIGNhc3RpbmcgcHJvY2VzcywgdGhlc2UgZmFjaWxpdGllcyByZXF1aXJlIGhpZ2hseSBza2lsbGVkIHBlcnNvbm5lbCwgc3RhdGUtb2YtdGhlLWFydCBlcXVpcG1lbnQsIGFuZCByaWdvcm91cyBhZGhlcmVuY2UgdG8gc2FmZXR5IHJlZ3VsYXRpb25zLic7XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKGV4cGxhaW4pO1xyXG4gICAgICAgIGNvbnN0IGV4cGxhaW4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgZXhwSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgZXhwSGVhZC50ZXh0Q29udGVudCA9ICdQYXR0ZXJuczonO1xyXG4gICAgICAgIGV4cGxhaW4yLmFwcGVuZENoaWxkKGV4cEhlYWQpO1xyXG4gICAgICAgIGNvbnN0IGV4cFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBleHBUZXh0LnRleHRDb250ZW50ID0gXCJJbiBmb3VuZHJ5IHNob3AsIHRoZXJlIGFyZSBhcmUgcGF0dGVybnMgYW5kIGEgcGF0dGVybiBpcyBlc3NlbnRpYWxseSBhIG1vbGQtbWFrZXIncyBtYXN0ZXIgY29weSBpLmUgYSByZXBsaWNhIG9mIHRoZSBmaW5hbCBtZXRhbCBvYmplY3QgdGhleSB3YW50IHRvIGNyZWF0ZS4gVGhpcyBwYXR0ZXJuIGlzIHVzZWQgdG8gY3JlYXRlIGEgbmVnYXRpdmUgY2F2aXR5IGluIHRoZSBzYW5kIG1vbGQsIHdoaWNoIGlzIHRoZW4gZmlsbGVkIHdpdGggbW9sdGVuIG1ldGFsLiBPbmNlIHRoZSBtZXRhbCBjb29scyBhbmQgc29saWRpZmllcywgdGhlIHNhbmQgbW9sZCBpcyBicm9rZW4gYXdheSwgbGVhdmluZyBiZWhpbmQgdGhlIGZpbmlzaGVkIGNhc3RpbmcuICAgIFBhdHRlcm5zIGFyZSB0ZW1wbGF0ZXMgb3IgbW9kZWxzIHRoYXQgYXJlIHVzZWQgdG8gY3JlYXRlIHRoZSBtb2xkcyBpbnRvIHdoaWNoIG1vbHRlbiBtZXRhbCBpcyBwb3VyZWQuXCJcclxuICAgICAgICBleHBsYWluMi5hcHBlbmRDaGlsZChleHBUZXh0KTtcclxuICAgICAgICB0aGVvcnkuYXBwZW5kQ2hpbGQoZXhwbGFpbjIpO1xyXG4gICAgICAgIGNvbnN0IGhlYWQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICBoZWFkMS50ZXh0Q29udGVudCA9ICdUeXBlcyBvZiBQYXR0ZXJuczonO1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZChoZWFkMSk7XHJcbiAgICAgICAgY29uc3QgdGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgdGV4dDIudGV4dENvbnRlbnQgPSAnVGhlcmUgYXJlIHNldmVyYWwgZGlmZmVyZW50IHR5cGVzIG9mIGZvdW5kcnkgcGF0dGVybnMsIGVhY2ggc3VpdGVkIGZvciBkaWZmZXJlbnQgYXBwbGljYXRpb25zLiBTb21lIGNvbW1vbiB0eXBlcyBpbmNsdWRlOic7XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKHRleHQyKTtcclxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGV4dC5pbm5lckhUTUwgPSBgPHNwYW4+4oCiIFNpbmdsZS1waWVjZSBwYXR0ZXJuOjwvc3Bhbj4gIFRoaXMgaXMgdGhlIHNpbXBsZXN0IHR5cGUgb2YgcGF0dGVybiwgc3VpdGFibGUgZm9yIHNpbXBsZSBjYXN0aW5ncy4gVGhlIHlvdXR1YmUgbGluayBpbGx1c3RyYXRpbmcgdGhpcyBpcyBzaG93biBiZWxvd2A7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgICAgIGNvbnN0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGJveC5pbm5lckhUTUwgPSAnPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLW5vY29va2llLmNvbS9lbWJlZC9VdjI4dHFDT3RBZz9zaT1MdUczeEJKSE95U3pjUkluXCIgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZTsgd2ViLXNoYXJlXCIgcmVmZXJyZXJwb2xpY3k9XCJzdHJpY3Qtb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPic7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGJveCk7XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICAgICAgY29uc3QgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHRleHQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGV4dDEuaW5uZXJIVE1MID0gYDxzcGFuPuKAoiBTcGxpdCBwYXR0ZXJuOjwvc3Bhbj4gIFRoaXMgcGF0dGVybiBpcyBzcGxpdCBpbnRvIHR3byBvciBtb3JlIHNlY3Rpb25zLCBhbGxvd2luZyBmb3IgdGhlIGNyZWF0aW9uIG9mIG1vcmUgY29tcGxleCBjYXN0aW5ncyB3aXRoIHVuZGVyY3V0cyBvciBpbnRlcmlvciBmZWF0dXJlcy4gVGhlIHlvdXR1YmUgbGluayBpbGx1c3RyYXRpbmcgdGhpcyBpcyBzaG93biBiZWxvd2A7XHJcbiAgICAgICAgZGl2MS5hcHBlbmRDaGlsZCh0ZXh0MSk7XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKGRpdjEpO1xyXG4gICAgICAgIGNvbnN0IGJveDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBib3gxLmlubmVySFRNTCA9ICc8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUtbm9jb29raWUuY29tL2VtYmVkL2NGY1NKTVJTejFjP3NpPWxDTUFzMDZvWVFRTDkwdFhcIiB0aXRsZT1cIllvdVR1YmUgdmlkZW8gcGxheWVyXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlOyB3ZWItc2hhcmVcIiByZWZlcnJlcnBvbGljeT1cInN0cmljdC1vcmlnaW4td2hlbi1jcm9zcy1vcmlnaW5cIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+JztcclxuICAgICAgICBkaXYxLmFwcGVuZENoaWxkKGJveDEpO1xyXG4gICAgICAgIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCB0ZXh0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRleHQzLmlubmVySFRNTCA9IGA8c3Bhbj7igKIgTWF0Y2gtcGxhdGUgcGF0dGVybjo8L3NwYW4+ICBUaGlzIHR5cGUgb2YgcGF0dGVybiBpcyBtb3VudGVkIG9uIGEgcGxhdGUsIHdpdGggb25lIGhhbGYgZm9ybWluZyB0aGUgY29wZSAodXBwZXIpIG1vbGQgc2VjdGlvbiBhbmQgdGhlIG90aGVyIGhhbGYgZm9ybWluZyB0aGUgZHJhZyAobG93ZXIpIG1vbGQgc2VjdGlvbi4gTWF0Y2gtcGxhdGUgcGF0dGVybnMgYXJlIGVmZmljaWVudCBmb3IgaGlnaC12b2x1bWUgcHJvZHVjdGlvbiBydW5zLmA7XHJcbiAgICAgICAgZGl2Mi5hcHBlbmRDaGlsZCh0ZXh0Myk7XHJcbiAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKGRpdjIpO1xyXG4gICAgICAgIGNvbnN0IGV4cGxhaW4zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgZXhwSGVhZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIGV4cEhlYWQxLnRleHRDb250ZW50ID0gJ01PVUxESU5HIFNBTkQ6JztcclxuICAgICAgICBleHBsYWluMy5hcHBlbmRDaGlsZChleHBIZWFkMSk7XHJcbiAgICAgICAgY29uc3QgZXhwVGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBleHBUZXh0MS50ZXh0Q29udGVudCA9IFwiRm91bmRyeSBzYW5kLCBzb21ldGltZXMgcmVmZXJyZWQgdG8gYXMgbW9sZGluZyBzYW5kLCBpcyBhIHNwZWNpYWxseSBwcmVwYXJlZCBzdWJzdGFuY2UgdGhhdCBmb3VuZHJ5IHNob3BzIHV0aWxpemUgZHVyaW5nIHRoZSBjYXN0aW5nIHByb2Nlc3MuIEl0IGlzIHVzZWQgYXMgYSBtZWRpdW0gdG8gbWFrZSBtb2xkcyB0aGF0IGFyZSBmaWxsZWQgd2l0aCBtb2x0ZW4gbWV0YWwgdG8gY3JlYXRlIGNhc3RpbmdzLiBBIHNwZWNpYWxseSBmb3JtdWxhdGVkIG1peHR1cmUsIHR5cGljYWxseSBjb25zaXN0aW5nIG9mOlwiXHJcbiAgICAgICAgZXhwbGFpbjMuYXBwZW5kQ2hpbGQoZXhwVGV4dDEpO1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZChleHBsYWluMyk7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1NpbGljYSBzYW5kJyxcclxuICAgICAgICAgICAgdGV4dDogJ1RoZSBtYWluIGluZ3JlZGllbnQsIHVzdWFsbHkgc2lsaWNhLWJhc2VkIGJ1dCBzb21ldGltZXMgb2xpdmluZS4nLFxyXG4gICAgICAgICAgICBpbWFnZTogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0JpbmRlcicsXHJcbiAgICAgICAgICAgIHRleHQ6ICdDbGF5IChiZW50b25pdGUgY2xheSBpcyBjb21tb24pIG9yIG90aGVyIG1hdGVyaWFscyB0aGF0IGFjdCBsaWtlIGdsdWUgdG8gaG9sZCB0aGUgc2FuZCB0b2dldGhlci4nLFxyXG4gICAgICAgICAgICBpbWFnZTogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ1dhdGVyJyxcclxuICAgICAgICAgICAgdGV4dDogJ1Byb3ZpZGVzIG1vaXN0dXJlIHRvIGFjdGl2YXRlIHRoZSBiaW5kZXIgYW5kIGltcHJvdmUgbW9sZGFiaWxpdHkuJyxcclxuICAgICAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdBZGRpdGl2ZXMnLFxyXG4gICAgICAgICAgICB0ZXh0OiAnT3B0aW9uYWwgaW5ncmVkaWVudHMgbGlrZSBjb2FsIGR1c3QgY2FuIGVuaGFuY2UgY2VydGFpbiBwcm9wZXJ0aWVzLicsXHJcbiAgICAgICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICBjYXRlZ29yaWVzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgdGhlb3J5LmFwcGVuZENoaWxkKGNyZWF0ZURpdnMoaXRlbSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBleHBIZWFkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgZXhwSGVhZDIudGV4dENvbnRlbnQgPSAnS0lORFMgT0YgTU9VTERJTkcgU0FORDonO1xyXG4gICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZChleHBIZWFkMik7XHJcbiAgICAgICAgY29uc3Qgc3Ryb2tlcyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0dyZWVuIFNhbmQnLFxyXG4gICAgICAgICAgICB0ZXh0OiAnR3JlZW4gc2FuZCBpcyB0aGUgbW9zdCB3aWRlbHkgdXNlZCBtb2xkaW5nIHNhbmQgaW4gZm91bmRyaWVzIGR1ZSB0byBpdHMgYXZhaWxhYmlsaXR5LCBsb3cgY29zdCwgYW5kIHZlcnNhdGlsaXR5LiBJdCBjb25zaXN0cyBvZiBzaWxpY2Egc2FuZCBtaXhlZCB3aXRoIGNsYXkgKGJlbnRvbml0ZSkgYW5kIHdhdGVyLiBHcmVlbiBzYW5kIG1vbGRzIGFyZSB0eXBpY2FsbHkgdXNlZCBmb3IgY2FzdGluZyBmZXJyb3VzIGFuZCBub24tZmVycm91cyBtZXRhbHMuIFRoZSB0ZXJtIFwiZ3JlZW5cIiByZWZlcnMgdG8gdGhlIGZhY3QgdGhhdCB0aGUgc2FuZCBpcyBtb2lzdCBhbmQgaGFzIG5vdCBiZWVuIHN1YmplY3RlZCB0byBoaWdoIHRlbXBlcmF0dXJlcyB0byBjdXJlIG9yIGhhcmRlbi4nLFxyXG4gICAgICAgICAgICBpbWFnZTogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0ZhY2luZyBzYW5kJyxcclxuICAgICAgICAgICAgdGV4dDogJ0Egc3BlY2lhbCB0eXBlIG9mIHNhbmQgdXNlZCBhcyB0aGUgdG9wIGxheWVyIG9mIGEgbW9sZCwgZGlyZWN0bHkgaW4gY29udGFjdCB3aXRoIHRoZSBtb2x0ZW4gbWV0YWwuIEZhY2luZyBzYW5kIG5lZWRzIHRvIHdpdGhzdGFuZCBoaWdoIHRlbXBlcmF0dXJlcyBhbmQgcmVzaXN0IGVyb3Npb24gZnJvbSB0aGUgbW9sdGVuIG1ldGFsLiBJdCBpcyB1c3VhbGx5IG1hZGUgb2Ygc2lsaWNhIHNhbmQgd2l0aCBhIGhpZ2hlciByZWZyYWN0b3JpbmVzcyAoaGVhdCByZXNpc3RhbmNlKSBhbmQgZmluZXIgZ3JhaW4gc2l6ZSBjb21wYXJlZCB0byBncmVlbiBzYW5kLicsXHJcbiAgICAgICAgICAgIGltYWdlOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnUGFydGluZyBzYW5kJyxcclxuICAgICAgICAgICAgdGV4dDogJ0EgZHJ5LCBmaW5lLWdyYWluZWQgc2FuZCB1c2VkIHRvIHByZXZlbnQgdGhlIGNvcGUgYW5kIGRyYWcgKHVwcGVyIGFuZCBsb3dlciBtb2xkIHNlY3Rpb25zKSBmcm9tIHN0aWNraW5nIHRvZ2V0aGVyLiBJdCBpcyBzcHJpbmtsZWQgYWxvbmcgdGhlIHBhcnRpbmcgbGluZSBvZiB0aGUgbW9sZCB3aGVyZSB0aGUgdHdvIGhhbHZlcyBtZWV0LiBQYXJ0aW5nIHNhbmQgc2hvdWxkIGJlIGVhc3kgdG8gc2VwYXJhdGUgZnJvbSBib3RoIHRoZSBjb3BlIGFuZCBkcmFnIGFmdGVyIGNhc3RpbmcuJyxcclxuICAgICAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICdMb2FteSBzYW5kJyxcclxuICAgICAgICAgICAgdGV4dDogJ0EgbWl4dHVyZSBvZiBzYW5kLCBjbGF5IChhcm91bmQgNTAlIGNvbnRlbnQpLCBhbmQgd2F0ZXIuIER1ZSB0byB0aGUgaGlnaCBjbGF5IGNvbnRlbnQsIGxvYW0gc2FuZCBpcyB2ZXJ5IHBsYXN0aWMgYW5kIGhhcyBleGNlbGxlbnQgbW9sZGFiaWxpdHkuIEl0IGlzIG9mdGVuIHVzZWQgZm9yIGxhcmdlIGFuZCBpbnRyaWNhdGUgY2FzdGluZ3Mgd2hlcmUgYSBmaW5lciBzdXJmYWNlIGZpbmlzaCBpcyBkZXNpcmVkLiBIb3dldmVyLCBsb2FtIHNhbmQgaGFzIGxvd2VyIHN0cmVuZ3RoIGNvbXBhcmVkIHRvIG90aGVyIHR5cGVzIGFuZCByZXF1aXJlcyBkcnlpbmcgYmVmb3JlIHBvdXJpbmcuJyxcclxuICAgICAgICAgICAgaW1hZ2U6ICcnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRHJ5IHNhbmQnLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ01hZGUgZnJvbSBzaWxpY2Egc2FuZCBhbmQgYSBiaW5kZXIsIGJ1dCB1bmxpa2UgZ3JlZW4gc2FuZCwgdGhlIG1vaXN0dXJlIGlzIHJlbW92ZWQgYnkgZHJ5aW5nIG9yIGJha2luZyB0aGUgbW9sZCBhZnRlciBpdCBpcyBzaGFwZWQuIFRoaXMgcHJvY2VzcyBzdHJlbmd0aGVucyB0aGUgbW9sZCBhbmQgaW1wcm92ZXMgaXRzIGhlYXQgcmVzaXN0YW5jZSwgbWFraW5nIGl0IHN1aXRhYmxlIGZvciBsYXJnZXIgYW5kIGhlYXZpZXIgY2FzdGluZ3MuIERyeSBzYW5kIG1vbGRzIHByb2R1Y2UgY2FzdGluZ3Mgd2l0aCBiZXR0ZXIgZGltZW5zaW9uYWwgYWNjdXJhY3kgYW5kIHN1cmZhY2UgZmluaXNoIGNvbXBhcmVkIHRvIGdyZWVuIHNhbmQuIFRoZSBkcnlpbmcgcHJvY2VzcyBhZGRzIHRpbWUgYW5kIGVuZXJneSBjb25zdW1wdGlvbiB0byB0aGUgY2FzdGluZyBwcm9jZXNzLicsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgc3Ryb2tlcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHRoZW9yeS5hcHBlbmRDaGlsZChjcmVhdGVEaXZzKGl0ZW0pKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZCh0aGVvcnkpO1xyXG4gICAgICAgIGNvbnN0IHByYWN0aWNhbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XHJcbiAgICAgICAgY29uc3Qgc3RlcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgIHN0ZXAxLnRleHRDb250ZW50ID0gJ1BSQUNUSUNBTCAxIDogSE9XIFRPIE1BS0UgQSBNT1VMRC9NT1VMRCBNQUtJTkcnO1xyXG4gICAgICAgIHByYWN0aWNhbHMuYXBwZW5kQ2hpbGQoc3RlcDEpO1xyXG4gICAgICAgIGNvbnN0IHN0ZXAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBzdGVwMy50ZXh0Q29udGVudCA9ICdQUk9DRURVUkU6JztcclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKHN0ZXAzKTtcclxuICAgICAgICBjb25zdCBzdGVwTGlzdDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIGNvbnN0IHN0ZXBzMSA9IFsnRmlyc3QgYSBib3R0b20gYm9hcmQgaXMgcGxhY2VkIGVpdGhlciBvbiB0aGUgbW9sZGluZyBwbGF0Zm9ybSBvciBvbiB0aGUgZmxvb3IgbWFraW5nIHRoZSBzdXJmYWNlIGV2ZW4nLCAnVGhlIGRyYWcgbW91bGRpbmcgZmxhc2sgaXMga2VwdCB1cHNpZGUgZG93biBvbiB0aGUgYm90dG9tIGJvYXJkIGFsb25nIHdpdGggdGhlIGRyYWcgcGFydCBvZiB0aGUgcGF0dGVybiBhdCB0aGUgY2VudHJlIG9mIHRoZSBmbGFzayBvbiB0aGUgYm9hcmQnLCAnRHJ5IGZhY2luZyBzYW5kIGlzIHNwcmlua2xlZCBvdmVyIHRoZSBib2FyZCBhbmQgcGF0dGVybiB0byBwcm92aWRlIGEgbm9uIHN0aWNreSBsYXllcicsICdGcmVzaGx5IHByZXBhcmVkIG1vdWxkaW5nIHNhbmQgb2YgcmVxdWlzaXRlIHF1YWxpdHkgaXMgbm93IHBvdXJlZCBpbnRvIHRoZSBkcmFnIGFuZCBvbiB0aGUgcGF0dGVybiB0byBhIHRoaWNrbmVzcyBvZiAzMCB0byA1MG1tLicsICdSZXN0IG9mIHRoZSBkcmFnIGZsYXNrIGlzIGNvbXBsZXRlbHkgZmlsbGVkIHdpdGggdGhlIGJhY2t1cCBzYW5kIGFuZCB1bmlmb3JtbHkgcmFtbWVkIHRvIGNvbXBhY3QgdGhlIHNhbmQnLCAnQWZ0ZXIgdGhlIHJhbW1pbmcgaXMgb3ZlciwgdGhlIGV4Y2VzcyBzYW5kIGluIHRoZSBmbGFzayBpcyBjb21wbGV0ZWx5IHNjcmFwZWQgdXNpbmcgYSBmbGF0IGJhciB0byB0aGUgbGV2ZWwgb2YgdGhlIGZsYXNrIGVkZ2VzJywgJ05vdyB3aXRoIGEgdmVudCB3aXJlIHdoaWNoIGlzIG9mIDEgdG8gMiBtbSBkaWFtZXRlciB3aXRoIGEgcG9pbnRlZCBlbmQsIHZlbnQgaG9sZXMgYXJlIGluIHRoZSBkcmFnIHRvIHRoZSBmdWxsIGRlcHRoIG9mIHRoZSBmbGFzayBhcyB3ZWxsIGFzIHRvIHRoZSBwYXR0ZXJuIHRvIGZhY2lsaXRhdGUgdGhlIHJlbW92YWwgb2YgZ2FzZXMgZHVyaW5nIGNhc3Rpbmcgc29saWRpZmljYXRpb24uIFRoaXMgY29tcGxldGVzIHRoZSBwcmVwYXJhdGlvbiBvZiB0aGUgZHJhZy4nLCAnTm93IHRoZSBmaW5pc2hlZCBkcmFnIGZsYXNrIGlzIHJvbGxlZCBvdmVyIHRvIHRoZSBib3R0b20gYm9hcmQgZXhwb3NpbmcgdGhlIHBhdHRlcm4nLCAnVXNpbmcgYSBzbGljaywgdGhlIGVkZ2VzIG9mIHRoZSBzYW5kIGFyb3VuZCB0aGUgcGF0dGVybiBpcyByZXBhaXJlZC4nLCAnVGhlIGNvcGUgZmxhc2sgb24gdGhlIHRvcCBvZiB0aGUgZHJhZyBpcyBsb2NhdGVkIGFsaWduaW5nIGFnYWluIHdpdGggdGhlIGhlbHAgb2YgdGhlIHBpbnMgb2YgdGhlIGRyYWcgYm94LicsICdTcHJ1ZSBvZiB0aGUgZ2F0aW5nIHN5c3RlbSBmb3IgbWFraW5nIHRoZSBzcHJ1ZSBwYXNzYWdlIGlzIGxvY2F0ZWQgYXQgYSBzbWFsbCBkaXN0YW5jZSBvZiBhYm91dCA1MG1tIGZyb20gdGhlIHBhdHRlcm4uIFRoZSBzcHJ1ZSBiYXNlLCBydW5uZXJzIGFuZCB0aGUgaW4tZ2F0ZXMgYXJlIGFsc28gbG9jYXRlZCBhcyBzaG93biByaXNlcnMgYXJlIGFsc28gcGxhY2VkLiBGcmVzaGx5IHByZXBhcmVkIGZhY2luZyBzYW5kIGlzIHBvdXJlZCBhcm91bmQgdGhlIHBhdHRlcm4nLCAnVGhlIG1vdWxkaW5nIHNhbmQgaXMgdGhlbiBwb3VyZWQgaW4gdGhlIGNvcGUgYm94LiBUaGUgc2FuZCBpcyBhZGVxdWF0ZWx5IHJhbW1lZCwgZXhjZXNzIHNhbmQgaXMgc2NyYXBlZCBhbmQgdmVudCBob2xlcyBhcmUgbWFkZSBhbGwgb3ZlciBpbiB0aGUgY29wZSBhcyBpbiB0aGUgcmFnJywgJ1RoZSBzcHJ1ZSBhbmQgdGhlIHJpc2VyIGFyZSBjYXJlZnVsbHkgd2l0aGRyYXduIGZyb20gdGhlIGZsYXNrJywgJ0xhdGVyIHRoZSBwb3VyaW5nIGJhc2luIGlzIGN1dCBuZWFyIHRoZSB0b3Agb2YgdGhlIHNwcnVlLicsICdUaGUgY29wZSBpcyBzZXBhcmF0ZWQgZnJvbSB0aGUgZHJhZyBhbnkgbG9vc2Ugc2FuZCBvbiB0aGUgY29wZSBhbmQgZHJhZyBpbnRlcmZhY2UgaXMgYmxvd24gb2ZmIHdpdGggdGhlIGhlbHAgb2YgdGhlIGJlbGxvd3MnLCAnTm93IHRoZSBjb3BlIGFuZCBkcmFnIHBhdHRlcm4gaGFsdmVzIGFyZSB3aXRoZHJhd24gYnkgdXNpbmcgdGhlIGRyYXcgc3Bpa2VzIGFuZCByYXBwaW5nIHRoZSBwYXR0ZXJuIGFsbCBhcm91bmQgdG8gc2xpZ2h0bHkgZW5sYXJnZSB0aGUgbW91bGQgY2F2aXR5IHNvIHRoYXQgdGhlIHdhbGxzIGFyZSBub3Qgc3BvaWxlZCBieSB0aGUgd2l0aGRyYXdpbmcgcGF0dGVybi4nLCAnVGhlIHJ1bm5lcnMgYW5kIGdhdGVzIGFyZSB0byBiZSByZW1vdmVkIG9yIHRvIGJlIGN1dCBpbiB0aGUgbW91bGQgY2FyZWZ1bGx5IHdpdGhvdXQgc3BvaWxpbmcgdGhlIG1vdWxkLicsICdBbnkgZXhjZXNzIG9yIGxvb3NlIHNhbmQgaXMgYXBwbGllZCBpbiB0aGUgcnVubmVycyBhbmQgbW91bGQgY2F2aXR5IGlzIGJsb3duIGF3YXkgdXNpbmcgdGhlIGJlbGxvd3MnLCAnTm93IHRoZSBmYWNpbmcgcGFzdGUgaXMgYXBwbGllZCBhbGwgb3ZlciB0aGUgbW91bGQgY2F2aXR5IGFuZCB0aGUgcnVubmVycyB3aGljaCB3b3VsZCBnaXZlIHRoZSBmaW5pc2hlZCBjYXN0aW5nIGEgZ29vZCBzdXJmYWNlIGZpbmlzaCcsICdBIGRyeSBzYW5kIGNvcmUgaXMgcHJlcGFyZWQgdXNpbmcgYSBjb3JlIGJveC4gQWZ0ZXIgc3VpdGFibGUgYmFraW5nLCBpdCBpcyBwbGFjZXMgaW4gdGhlIG1vdWxkIGNhdml0eScsICdUaGUgY29wZSBpcyBwbGFjZWQgYmFjayBvbiB0aGUgZHJhZyB0YWtpbmcgY2FyZSBvZiB0aGUgYWxpZ25tZW50IG9mIHRoZSB0d28gYnkgbWVhbnMgb2YgdGhlIHBpbnMnLCAnVGhlIG1vdWxkIGlzIHJlYWR5IGZvciBwb3VyaW5nIG1vbHRlbiBtZXRhbC4gVGhlIGxpcXVpZCBtZXRhbCBpcyBhbGxvd2VkIHRvIGNvb2wgYW5kIGJlY29tZSBzb2xpZCB3aGljaCBpcyB0aGUgY2FzdGluZyBkZXNpcmVkLiddO1xyXG4gICAgICAgIGxldCBzdGVwQm94MSA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzdGVwczEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBzdGVwQm94MVtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIHN0ZXBCb3gxW2ldLnRleHRDb250ZW50ID0gc3RlcHMxW2ldO1xyXG4gICAgICAgICAgICBzdGVwTGlzdDEuYXBwZW5kQ2hpbGQoc3RlcEJveDFbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcmFjdGljYWxzLmFwcGVuZENoaWxkKHN0ZXBMaXN0MSk7XHJcbiAgICAgICAgY29uc3QgdGV4dDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgdGV4dDUudGV4dENvbnRlbnQgPSAnV2F0Y2ggaG93IHRvIHBlcmZvcm0gdGhlIG1vdWxkIHVzaW5nIHNvbGlkIHBhdHRlcm4gcHJhY3RpY2FsIGlzIGJlbG93IPCfkYcnO1xyXG4gICAgICAgIHByYWN0aWNhbHMuYXBwZW5kQ2hpbGQodGV4dDUpO1xyXG4gICAgICAgIGNvbnN0IHZpZGVvNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHZpZGVvNS5pbm5lckhUTUwgPSAnPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLW5vY29va2llLmNvbS9lbWJlZC82WTJJeExnNk9acz9zaT1uZ25JcmdiZlVGbmVMUEtTXCIgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZTsgd2ViLXNoYXJlXCIgcmVmZXJyZXJwb2xpY3k9XCJzdHJpY3Qtb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPic7XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZCh2aWRlbzUpO1xyXG4gICAgICAgIGNvbnN0IHZpZGVvNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHZpZGVvNi5pbm5lckhUTUwgPSAnPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLW5vY29va2llLmNvbS9lbWJlZC84OHN0WXdIYkl6WT9zaT0yOXhNaHA5LUpwa2RJVG1EXCIgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZTsgd2ViLXNoYXJlXCIgcmVmZXJyZXJwb2xpY3k9XCJzdHJpY3Qtb3JpZ2luLXdoZW4tY3Jvc3Mtb3JpZ2luXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPic7XHJcbiAgICAgICAgcHJhY3RpY2Fscy5hcHBlbmRDaGlsZCh2aWRlbzYpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQocHJhY3RpY2Fscyk7XHJcbiAgICAgICAgY29uc3QgcHJlY2F1dGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCBjYXV0aW9uSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgY2F1dGlvbkhlYWQudGV4dENvbnRlbnQgPSBcIlBSRUNBVVRJT05TXCI7XHJcbiAgICAgICAgcHJlY2F1dGlvbi5hcHBlbmRDaGlsZChjYXV0aW9uSGVhZCk7XHJcbiAgICAgICAgY29uc3QgY2F1dGlvbkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIGNvbnN0IHByZWNhdXRpb25zID0gW1wiSSBlbnN1cmVkIHRoYXQgSSB3b3JlIG15IGxhYiBjb2F0IGFuZCBwZXJzb25hbCBwcm90ZWN0aXZlIGVxdWlwbWVudCAoUFBFKVwiLFwiSSBlbnN1cmVkIHRoYXQgcHJvcGVyIHRvb2wgaGFuZGxpbmcgdG8gYXZvaWQgaW5qdXJpZXMuXCIsXCJJIEVuc3VyZWQgdGhhdCB0aGUgcHJvY2VkdXJlcyB3ZXJlIGR1ZWx5IGZvbGxvd2VkIHRvIGF2b2lkIGVycm9yc1wiLCBdO1xyXG4gICAgICAgIGxldCBjYXV0aW9uQm94ID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByZWNhdXRpb25zLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgY2F1dGlvbkJveFtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIGNhdXRpb25Cb3hbaV0udGV4dENvbnRlbnQgPSBwcmVjYXV0aW9uc1tpXTtcclxuICAgICAgICAgICAgY2F1dGlvbkxpc3QuYXBwZW5kQ2hpbGQoY2F1dGlvbkJveFtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByZWNhdXRpb24uYXBwZW5kQ2hpbGQoY2F1dGlvbkxpc3QpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQocHJlY2F1dGlvbik7XHJcbiAgICAgICAgY29uc3QgY29uY2x1c2lvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICAgICAgICBjb25zdCBjb25jSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgY29uY0hlYWQudGV4dENvbnRlbnQgPSBcIkNPTkNMVVNJT046XCI7XHJcbiAgICAgICAgY29uY2x1c2lvbi5hcHBlbmRDaGlsZChjb25jSGVhZCk7XHJcbiAgICAgICAgY29uc3QgY29uY1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgY29uY1RleHQudGV4dENvbnRlbnQgPSBcIkF0IHRoZSBlbmQgb2YgdGhpcyBleHBlcmltZW50LCBhIG1vdWxkIHdhcyBjcmVhdGVkIHVzaW5nIHRoZSBhcHByb3ByaWF0ZSBhcHBhcmF0dXMgYW5kIGFsc28gdXNpbmcgdGhlIHNpbmdsZS9zb2xpZCBwYXR0ZXJuXCI7XHJcbiAgICAgICAgY29uY2x1c2lvbi5hcHBlbmRDaGlsZChjb25jVGV4dCk7XHJcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChjb25jbHVzaW9uKTtcclxuICAgICAgICBjb25zdCByZWZlcmVuY2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IHJlZkhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIHJlZkhlYWQudGV4dENvbnRlbnQgPSBcIlJFRkVSRU5DRVNcIjtcclxuICAgICAgICByZWZlcmVuY2VzLmFwcGVuZENoaWxkKHJlZkhlYWQpO1xyXG4gICAgICAgIGNvbnN0IHJlZkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IFtcIlByb2R1Y3Rpb24gRW5naW5lZXJpbmcgTGFib3JhdG9yeSBNYW51YWwgZm9yIEVMQTIwMSBhbmQgRUxBMjAyIGJ5IERlcGFydG1lbnQgb2YgUHJvZHVjdGlvbiBFbmdpbmVlcmluZywgVW5pdmVyc2l0eSBvZiBCZW5pbi5cIiwgXCJGb3VuZHJ5IFRlY2hub2xvZ3kgYnkgSyBQIFNpbmhhICYgRCBCIEdvZWxcIiwgXCJGb3VuZHJ5IFRlY2hub2xvZ3kgYnkgUCBSIEJlZWxleVwiXTtcclxuICAgICAgICBsZXQgcmVmQm94ID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHJlZmVyZW5jZS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHJlZkJveFtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIHJlZkJveFtpXS50ZXh0Q29udGVudCA9IHJlZmVyZW5jZVtpXTtcclxuICAgICAgICAgICAgcmVmTGlzdC5hcHBlbmRDaGlsZChyZWZCb3hbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZWZlcmVuY2VzLmFwcGVuZENoaWxkKHJlZkxpc3QpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQocmVmZXJlbmNlcyk7XHJcbiAgICAgICAgY29uc3QgaG92ZXIgPSBjcmVhdGVIb3ZlcignIycpO1xyXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoaG92ZXIpO1xyXG4gICAgICAgIGNvbnN0IGRvd25sb2FkID0gY3JlYXRlRG93bmxvYWQoJyMnKTtcclxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGRvd25sb2FkKTtcclxufTtcclxuZXhwb3J0IHtkaXNwbGF5U3RhcnRlZCxkaXNwbGF5V1cyMDEsIGRpc3BsYXlTTTIwMSwgZGlzcGxheUJGMjAxLCBkaXNwbGF5SFMyMDEsIGRpc3BsYXlNUzIwMSAsZGlzcGxheUFTMjAxLCBkaXNwbGF5RlMyMDF9OyIsImltcG9ydCAnLi4vQ1NTL3ByZS5jc3MnO1xyXG5pbXBvcnQge3JlbmRlckhlYWRlcn0gZnJvbSAnLi9tb2R1bGVzL2hlYWRlcic7XHJcbmltcG9ydCB7cmVuZGVyRm9vdGVyfSBmcm9tICcuL21vZHVsZXMvZm9vdGVyJztcclxuaW1wb3J0IHsgZGlzcGxheVN0YXJ0ZWQsIGRpc3BsYXlXVzIwMSwgZGlzcGxheVNNMjAxLCBkaXNwbGF5QkYyMDEsIGRpc3BsYXlIUzIwMSwgZGlzcGxheU1TMjAxLCBkaXNwbGF5QVMyMDEsIGRpc3BsYXlGUzIwMX0gZnJvbSAnLi9tb2R1bGVzL3ByZURpc3BsYXknO1xyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG5sZXQgcmVwb3J0cyA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0dldHRpbmcgU3RhcnRlZCcsXHJcbiAgICAgICAgZnVuYzogZGlzcGxheVN0YXJ0ZWRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdJbnRyb2R1Y3Rpb24gdG8gV29vZFdvcmsge1dXMjAxfScsXHJcbiAgICAgICAgZnVuYzogZGlzcGxheVdXMjAxXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnSW50cm9kdWN0aW9uIHRvIFNoZWV0IE1ldGFsIFdvcmtzaG9wIHtTTTIwMX0nLFxyXG4gICAgICAgIGZ1bmM6IGRpc3BsYXlTTTIwMVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogJ0ludHJvZHVjdGlvbiB0byBGaXR0aW5nIFNob3Age0JGMjAxfScsXHJcbiAgICAgICAgZnVuYzogZGlzcGxheUJGMjAxXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnSW50cm9kdWN0aW9uIHRvIFdlbGRpbmcgU2hvcCBQcmFjdGljZSB7SFMyMDF9JyxcclxuICAgICAgICBmdW5jOiBkaXNwbGF5SFMyMDFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdJbnRyb2R1Y3Rpb24gdG8gdGhlIExhdGhlIGFuZCBNYWNoaW5pbmcgT3BlcmF0aW9ucyB7TVMyMDF9JyxcclxuICAgICAgICBmdW5jOiBkaXNwbGF5TVMyMDFcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdUaGUgSW50ZXJuYWwgQ29tYnVzdGlvbiBFbmdpbmUge0FTMjAxfScsXHJcbiAgICAgICAgZnVuYzogZGlzcGxheUFTMjAxXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnRm91bmRyeSBTaG9wIHtGUzIwMX0nLFxyXG4gICAgICAgIGZ1bmM6IGRpc3BsYXlGUzIwMVxyXG4gICAgfVxyXG5dO1xyXG4vL2Rpc3BsYXkgIGhlYWRlclxyXG5yZW5kZXJIZWFkZXIoYm9keSk7XHJcbi8vY3JlYXRlIGFzaWRlIHNpZGUgbWVudVxyXG5jb25zdCBhc2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FzaWRlJyk7XHJcbi8vY3JlYXRlIGJ1dHRvbiB0byBjbG9zZSBzaWRlIG1lbnVcclxuY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY2xvc2UudGV4dENvbnRlbnQgPSAneCc7XHJcbmNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXNpZGUnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59KTtcclxuY2xvc2UuaWQgPSAnY2xvc2VCdXR0b24nO1xyXG5hc2lkZS5hcHBlbmRDaGlsZChjbG9zZSk7XHJcbi8vY3JlYXRlIGFzaWRlIGhlYWRlclxyXG5jb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuaGVhZGluZy50ZXh0Q29udGVudCA9ICdQUkUgRUxBIFRPUElDUyc7XHJcbmFzaWRlLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xyXG4vL2NyZWF0ZSBkaXYgdG8gc3RvcmUgcmVwb3J0cyBsaXN0XHJcbmNvbnN0IHJlcG9ydERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vL2NyZWF0ZSBsaXN0IG9mIHJlcG9ydCB0b3BpY1xyXG5jb25zdCByZXBvcnRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxubGV0IGxpc3QgPSBbXTtcclxuZm9yKGxldCBpID0gMDsgaSA8IHJlcG9ydHMubGVuZ3RoOyBpKyspe1xyXG4gICAgbGlzdFtpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBsaXN0W2ldLnRleHRDb250ZW50ID0gYCR7cmVwb3J0c1tpXS50aXRsZX1gO1xyXG4gICAgbGlzdFtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlcG9ydHNbaV0uZnVuYyk7XHJcbiAgICByZXBvcnRMaXN0LmFwcGVuZENoaWxkKGxpc3RbaV0pO1xyXG59XHJcbnJlcG9ydERpdi5hcHBlbmRDaGlsZChyZXBvcnRMaXN0KTtcclxuYXNpZGUuYXBwZW5kQ2hpbGQocmVwb3J0RGl2KTtcclxuYm9keS5hcHBlbmRDaGlsZChhc2lkZSk7XHJcbi8vY3JlYXRlIG1haW4gZGl2IHdoZXJlIGNvbnRlbnQgd291bGQgYmUgZ2VuZXJhdGVkIHRvXHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XHJcbmRpc3BsYXlTdGFydGVkKCk7XHJcbnJlbmRlckZvb3Rlcihib2R5KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=