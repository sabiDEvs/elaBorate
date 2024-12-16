
import pic1 from '../../RESOURCES/images/achieve.png';
import pic2 from '../../RESOURCES/images/daniel1.png';
import pic3 from '../../RESOURCES/images/pic3.png';
import pic4 from '../../RESOURCES/images/pic4.png';
import pic5 from '../../RESOURCES/images/pic5.png';
import pic6 from '../../RESOURCES/images/pic6.png';
import pic7 from '../../RESOURCES/images/pic7.png';
import pic8 from '../../RESOURCES/images/pic8.png';
import pic9 from '../../RESOURCES/images/pic9.png';
import pic10 from '../../RESOURCES/images/pic10.png';
import pic11 from '../../RESOURCES/images/pic11.png';
import ee2031 from '../../RESOURCES/images/ee203-1.png';
import ee2032 from '../../RESOURCES/images/ee203-1.png';
import ee2033 from '../../RESOURCES/images/ee203-1.png';
import ee2034 from '../../RESOURCES/images/ee203-1.png';



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
    icon.src = pic1;
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
    icon.src = pic1;
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
    imgAchieve.src = pic1;
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
                image: pic1
            },
            {
                cap: 'Metre Rule',
                image: pic1
            },
            {
                cap: 'Measuring Steel Tape',
                image: pic1
            },
            {
                cap: 'Gauges',
                image: pic1
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
                cap: 'Variac 0 - 270v, 8A.2KVA ',
                image: pic2
            },
            {
                cap: 'Transformer Foster Type 2/3',
                image: pic3
            },
            {
                cap: 'A.C Voltmeter 0 - 100v',
                image: pic4
            },
            {
                cap: 'A.C Ammeter 0 – 10A',
                image: pic5
            },
            {
                cap: 'Low power factor wattmeter',
                image: pic6
            },
            {
                cap: 'Wattmeter 1/510A ( 25/240/600V)',
                image: pic7
            },
            {
                cap: 'Resistance load bank',
                image: pic8
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

        const utubeDiv = document.createElement('div');
        const utube = document.createElement('p');
        utube.textContent = 'Watch the video below to learn more about transformers and their applications:';

        const uvideo = document.createElement('div');
        uvideo.innerHTML = '<iframe width="590" height="332" src="https://www.youtube.com/embed/8BSoNsZuTkE" title="Transformer: Introduction and Principle of Working (1)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
        
        utubeDiv.appendChild(utube);
        utubeDiv.appendChild(uvideo);

        theory.appendChild(utubeDiv);
        
        main.appendChild(theory);


        const diagramsSection = document.createElement('section');
        const diagramHead = document.createElement('h2');
        diagramHead.innerText = "DIAGRAMS";

        diagramsSection.appendChild(diagramHead);


        const diagrams = [
            {
                cap: 'WORKING DIAGRAM SHOWING TRANSFORMER RATIO TEST',
                image: pic9
            },
            {
                cap: 'WORKING DIAGRAM SHOWING TRANSFORMER NO – LOAD TEST',
                image: pic10
            },
            {
                cap: 'WORKING DIAGRAM SHOWING TRANSFORMER LOAD TEST',
                image: pic11
            },
           
            

        ];
        let diagramBox = [];
        let diagramImage = [];
        let diagramCaption = [];
        for(let i = 0; i < diagrams.length; i++){
            diagramBox[i] = document.createElement('div');
            diagramImage[i] = document.createElement('img');
            diagramCaption[i] = document.createElement('p');
            diagramImage[i].src =  diagrams[i].image;
            diagramCaption[i].textContent = diagrams[i].cap;
            diagramBox[i].appendChild(diagramImage[i]);
            diagramBox[i].appendChild(diagramCaption[i]);
            diagramsSection.appendChild(diagramBox[i]);
        }







        main.appendChild(diagramsSection);
        const practicals = document.createElement('section');
        const step1 = document.createElement('h2');
        step1.textContent = 'PROCEDURE';

        practicals.appendChild(step1);
        const step4 = document.createElement('h3');
        step4.textContent = 'TRANSFER RATIO TEST';
        practicals.appendChild(step4);
        const stepList2 = document.createElement('ul');
        stepList2.classList.add('stepboxlist');
        const steps2 = [
            'Set Variac control dial to zero (0) position',
            'Connect up the variac, the voltmeter V₁ (0-220), the amimeter (0-1A), and the transformer. as in the working diagram fig 22-1-1', 
            'Connect the voltmeter V₂ (0-100V) across the secondary terminals a₁-a₂.',
            '(i) Connect the variac to mains supply and switch-ON \n (ii) Turn variac dial to obtain 220V on V₁.', 
            'Record on table 206-1 the values of V₁, V₂ and the primary and secondary turns (as marked on transformer).', 
            'Connect voltmeter V₂ in turn across terminals (a₁-a₂) (a₁-a₃) (a₁-a₄) (a₁-a₅) and repeat (5)',
            'Fill-up table 206-1.'];
        let stepBox2 = [];
        for(let i = 0; i < steps2.length; i++){
            stepBox2[i] = document.createElement('li');
            
            stepBox2[i].textContent = steps2[i];
            stepList2.appendChild(stepBox2[i]);
        }
        practicals.appendChild(stepList2);

        const step3 = document.createElement('h3');
        step3.textContent = 'NO-LOAD TEST';
        practicals.appendChild(step3);
        const stepList1 = document.createElement('ul');
        stepList1.classList.add('stepboxlist');
        const steps1 = [
            'Reduce variac output to zero (0) and switch-OFF mains',
            '(i) Connect up the circuit of Fig. 22-1-2 leaving the secondary terminals open circuit. Use the wattmeter (0-12W). \n (ii) Get the supervisor to check the circuit (you may also need the help of a supervisor to connect up the wattmeter).', 
            'Switch-ON mains to variac and turn variac control to obtain 40V on voltmeter V₁.',
            '(i) Connect the variac to mains supply and switch-ON \n (ii) Turn variac dial to obtain 220V on V₁.', 
            'Take ammeter and wattmeter readings and record on table 206-2 as I₁ and W₁, respectively.', 
            ' Vary variac control to obtain 80, 120, 160, 200, and 220V in turn on voltmeter V₁, and repeat (11) at each setting. \n(i) Fill up table 206-2. \n(ii) Plot graph of primary voltage (V₁) vs loss (W).',
];
        let stepBox1 = [];
        for(let i = 0; i < steps1.length; i++){
            stepBox1[i] = document.createElement('li');
            stepBox1[i].textContent = steps1[i];
            stepList1.appendChild(stepBox1[i]);
        }
        practicals.appendChild(stepList1);

        const step5 = document.createElement('h3');
        step5.textContent = 'LOAD TEST';
        practicals.appendChild(step5);
        const stepList3 = document.createElement('ul');
        stepList3.classList.add('stepboxlist');
        const steps4 = [
            'Turn variac dial to "0" position, and switch-OFF mains from the variac.',
            'Connect up the circuit of Load test ', 
            'Connect mains to load bank and switch ON fan. (Do not use load bank itif fan is not working)',
            'Switch ON mains to variac and vary dial to obtain 220V in voltmeter V₁.', 
            'Switch one of load bank dials to position 400 and use its associated TRIMMER control to set the current on A₂ to 2A.', 
            'Record the readings of V₂, V₂, A₁, A₂, and wattmeter on table 206-4.',
            'Use the load bank dial switches and trimmers, set the reading of A₁ to 4, 6, 8, and 10A respectively, and repeat (19) at each setting.',
            'Turn variac dial to "0" position and switch-OFF mains to variac.',
            'Fill-up table 206-3'
];
        let stepBox3 = [];
        for(let i = 0; i < steps4.length; i++){
            stepBox3[i] = document.createElement('li');
            stepBox3[i].textContent = steps4[i];
            stepList3.appendChild(stepBox3[i]);
        }
        practicals.appendChild(stepList3);
       
        

// i am supposed to implemetnresults and tables her but e npo make sense




        main.appendChild(practicals);
        const precaution = document.createElement('section');
        const cautionHead = document.createElement('h3');
        cautionHead.textContent = "PRECAUTIONS";
        precaution.appendChild(cautionHead);
        const cautionList = document.createElement('ul');
        const precautions = 
            [
            "I avoided error due to parallax when taking the readings ",
            "I ensured all measuring instruments (voltmeters, ammeters etc) were calibrated and were in good working condition for accurate measurements",
            "I ensured that I didn’t  touch live circuits to avoid getting electrocuted", 
            ];
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
        concText.textContent = "At the end of this experiment, we were able to verify that the voltage ratio between the primary voltage and secondary voltage and secondary voltage of a transformer is equal to the turns winding ratio and also able to understand the characteristics of a transformer on No-load and on load and also draw the graphs required";
        conclusion.appendChild(concText);
        main.appendChild(conclusion);
        const references = document.createElement('section');
        const refHead = document.createElement('h3');
        refHead.textContent = "REFERENCES";
        references.appendChild(refHead);
        const refList = document.createElement('ul');
        refList.classList.add('stepboxlist');
        const reference = 
            [
                "Electric Machinery Fundamentals by Stephen J. Chapman",
                "Electrical Engineering Laboratory Manual by the Department of Electrical Engineering, University of Benin.",
                "Fundamentals of Electric Circuits by Charles K. Alexander & Matthew N. O. Sadiku"
            ];
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
const displayEE203 = () => {
    const main = reset();
        const head = document.createElement('h1');
        head.textContent  = 'Measurement of Inductance';
        main.appendChild(head);

        const aim = document.createElement('section');
        const aimHead = document.createElement('h2');
        aimHead.textContent = 'AIMS';
        aim.appendChild(aimHead);
        const aimList = document.createElement('ul');
        const aims = ['Using Maxwell\'s Bridge', 'Measurement transient voltage and time of R.L circuit ']
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
        const objectives = ['To find the value of the unknown inductor L and its resistance Rx balancing the bridge.'];
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
                cap: 'A.F Generator',
                image: ee2031
            },
            {
                cap: 'Three decade Resistance Boxes',
                image: pic3
            },
            {
                cap: 'One Decade Capacitance Boxes',
                image: pic4
            },
            {
                cap: 'Headphones',
                image: pic5
            },
            {
                cap: 'Inductor of Unknown Valu',
                image: pic6
            },
            {
                cap: 'Wattmeter 1/510A ( 25/240/600V)',
                image: pic7
            },
            {
                cap: 'Resistance load bank',
                image: pic8
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
        explain.textContent = "A maximum Inductance is the tendency of an electrical conductor to oppose a change in the electric current flowing through it - It is the property on an electric conductor or current that cause an electromotive force to be generated by a change in the current flowing. A Maxwell Bridge is an adaptation of Wheatstone Bridge designed to measure a circuit's self-inductance using components that balance inductive and capacitive impedances. Inductance is a fundamental property of electrical circuits that quantifies the ability of a conductor or coil to store energy in a magnetic field when an electric current flows through it. A traditional AC bridge circuit called Maxwell's bridge is used to gauge an inductor's inductance. It functions according to the idea of a bridge network's impedances being balanced. When the product of the impedances in one pair of opposed arms and the product of the impedances in the other pair of opposite arms is equal, the bridge can be considered balanced.";
        theory.appendChild(explain);
        const explain1 = document.createElement('div');
        explain1.textContent = "Maxwell's bridge is a type of AC bridge used primarily for measuring the inductance of an inductor with relatively high accuracy. It is particularly useful for inductors with significant resistance. The bridge uses a combination of resistors and capacitors to balance the circuit, allowing the unknown inductance to be calculated. A Maxwell's bridge consists of four arms arranged in a diamond shape with the following components:";
        theory.appendChild(explain1);
        const categories = [
            {
                title: 'Arm AB',
                text: 'Contains a known resistor R1.',
                image: ''
            },
            {
                title: 'Arm BC',
                text: 'Contains a known resistor R1.',
                image: ''
            },

            {
                title: 'Arm CD',
                text: '-Contains the unknown inductor Lx​ and a known resistor Rx​ in series.',
                image: ''
            },
            {
                title: 'Arm DA',
                text: '- Contains a variable resistor R3 and a variable capacitor C3 in series.',
                image: ''
            }
        
            ];
            categories.forEach((item) => {
            theory.appendChild(createDivs(item));
            });
        const description = document.createElement('p');
        description.textContent = "Transient voltage is a temporary unwanted voltage in an electric circuit that changes with respect to time. It occurs along with the intended voltage. An inductor is a passive electrical component that stores energy in its magnetic field when electric current flows through it. Electronic circuits frequently employ inductors for a variety of purposes, including energy storage, filtering, and circuit tuning.";
        
        theory.appendChild(description);
       

        const utubeDiv = document.createElement('div');
        const utube = document.createElement('p');
        utube.textContent = 'Watch the video below to learn more about transformers and their applications:';

        const uvideo = document.createElement('div');
        uvideo.innerHTML = '<iframe width="590" height="332" src="https://www.youtube.com/embed/8BSoNsZuTkE" title="Transformer: Introduction and Principle of Working (1)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
        
        utubeDiv.appendChild(utube);
        utubeDiv.appendChild(uvideo);

        theory.appendChild(utubeDiv);
        
        main.appendChild(theory);


        const diagramsSection = document.createElement('section');
        const diagramHead = document.createElement('h2');
        diagramHead.innerText = "DIAGRAMS";

        diagramsSection.appendChild(diagramHead);


        const diagrams = [
            {
                cap: 'Fig.1 ',
                image: pic9
            },
            {
                cap: 'WORKING DIAGRAM SHOWING TRANSFORMER NO – LOAD TEST',
                image: pic10
            },
            {
                cap: 'WORKING DIAGRAM SHOWING TRANSFORMER LOAD TEST',
                image: pic11
            },
           
            

        ];
        let diagramBox = [];
        let diagramImage = [];
        let diagramCaption = [];
        for(let i = 0; i < diagrams.length; i++){
            diagramBox[i] = document.createElement('div');
            diagramImage[i] = document.createElement('img');
            diagramCaption[i] = document.createElement('p');
            diagramImage[i].src =  diagrams[i].image;
            diagramCaption[i].textContent = diagrams[i].cap;
            diagramBox[i].appendChild(diagramImage[i]);
            diagramBox[i].appendChild(diagramCaption[i]);
            diagramsSection.appendChild(diagramBox[i]);
        }







        main.appendChild(diagramsSection);
        const practicals = document.createElement('section');
        const step1 = document.createElement('h2');
        step1.textContent = 'PROCEDURE';

        practicals.appendChild(step1);
        const step4 = document.createElement('h3');
        step4.textContent = 'TRANSFER RATIO TEST';
        practicals.appendChild(step4);
        const stepList2 = document.createElement('ul');
        stepList2.classList.add('stepboxlist');
        const steps2 = [
            'Set Variac control dial to zero (0) position',
            'Connect up the variac, the voltmeter V₁ (0-220), the amimeter (0-1A), and the transformer. as in the working diagram fig 22-1-1', 
            'Connect the voltmeter V₂ (0-100V) across the secondary terminals a₁-a₂.',
            '(i) Connect the variac to mains supply and switch-ON \n (ii) Turn variac dial to obtain 220V on V₁.', 
            'Record on table 206-1 the values of V₁, V₂ and the primary and secondary turns (as marked on transformer).', 
            'Connect voltmeter V₂ in turn across terminals (a₁-a₂) (a₁-a₃) (a₁-a₄) (a₁-a₅) and repeat (5)',
            'Fill-up table 206-1.'];
        let stepBox2 = [];
        for(let i = 0; i < steps2.length; i++){
            stepBox2[i] = document.createElement('li');
            
            stepBox2[i].textContent = steps2[i];
            stepList2.appendChild(stepBox2[i]);
        }
        practicals.appendChild(stepList2);

        const step3 = document.createElement('h3');
        step3.textContent = 'NO-LOAD TEST';
        practicals.appendChild(step3);
        const stepList1 = document.createElement('ul');
        stepList1.classList.add('stepboxlist');
        const steps1 = [
            'Reduce variac output to zero (0) and switch-OFF mains',
            '(i) Connect up the circuit of Fig. 22-1-2 leaving the secondary terminals open circuit. Use the wattmeter (0-12W). \n (ii) Get the supervisor to check the circuit (you may also need the help of a supervisor to connect up the wattmeter).', 
            'Switch-ON mains to variac and turn variac control to obtain 40V on voltmeter V₁.',
            '(i) Connect the variac to mains supply and switch-ON \n (ii) Turn variac dial to obtain 220V on V₁.', 
            'Take ammeter and wattmeter readings and record on table 206-2 as I₁ and W₁, respectively.', 
            ' Vary variac control to obtain 80, 120, 160, 200, and 220V in turn on voltmeter V₁, and repeat (11) at each setting. \n(i) Fill up table 206-2. \n(ii) Plot graph of primary voltage (V₁) vs loss (W).',
];
        let stepBox1 = [];
        for(let i = 0; i < steps1.length; i++){
            stepBox1[i] = document.createElement('li');
            stepBox1[i].textContent = steps1[i];
            stepList1.appendChild(stepBox1[i]);
        }
        practicals.appendChild(stepList1);

        const step5 = document.createElement('h3');
        step5.textContent = 'LOAD TEST';
        practicals.appendChild(step5);
        const stepList3 = document.createElement('ul');
        stepList3.classList.add('stepboxlist');
        const steps4 = [
            'Turn variac dial to "0" position, and switch-OFF mains from the variac.',
            'Connect up the circuit of Load test ', 
            'Connect mains to load bank and switch ON fan. (Do not use load bank itif fan is not working)',
            'Switch ON mains to variac and vary dial to obtain 220V in voltmeter V₁.', 
            'Switch one of load bank dials to position 400 and use its associated TRIMMER control to set the current on A₂ to 2A.', 
            'Record the readings of V₂, V₂, A₁, A₂, and wattmeter on table 206-4.',
            'Use the load bank dial switches and trimmers, set the reading of A₁ to 4, 6, 8, and 10A respectively, and repeat (19) at each setting.',
            'Turn variac dial to "0" position and switch-OFF mains to variac.',
            'Fill-up table 206-3'
];
        let stepBox3 = [];
        for(let i = 0; i < steps4.length; i++){
            stepBox3[i] = document.createElement('li');
            stepBox3[i].textContent = steps4[i];
            stepList3.appendChild(stepBox3[i]);
        }
        practicals.appendChild(stepList3);
       
        

// i am supposed to implemetnresults and tables her but e npo make sense




        main.appendChild(practicals);
        const precaution = document.createElement('section');
        const cautionHead = document.createElement('h3');
        cautionHead.textContent = "PRECAUTIONS";
        precaution.appendChild(cautionHead);
        const cautionList = document.createElement('ul');
        const precautions = 
            [
            "I avoided error due to parallax when taking the readings ",
            "I ensured all measuring instruments (voltmeters, ammeters etc) were calibrated and were in good working condition for accurate measurements",
            "I ensured that I didn’t  touch live circuits to avoid getting electrocuted", 
            ];
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
        concText.textContent = "At the end of this experiment, we were able to verify that the voltage ratio between the primary voltage and secondary voltage and secondary voltage of a transformer is equal to the turns winding ratio and also able to understand the characteristics of a transformer on No-load and on load and also draw the graphs required";
        conclusion.appendChild(concText);
        main.appendChild(conclusion);
        const references = document.createElement('section');
        const refHead = document.createElement('h3');
        refHead.textContent = "REFERENCES";
        references.appendChild(refHead);
        const refList = document.createElement('ul');
        refList.classList.add('stepboxlist');
        const reference = 
            [
                "Electric Machinery Fundamentals by Stephen J. Chapman",
                "Electrical Engineering Laboratory Manual by the Department of Electrical Engineering, University of Benin.",
                "Fundamentals of Electric Circuits by Charles K. Alexander & Matthew N. O. Sadiku"
            ];
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
        img1.src =pic1;
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
export {displayStarted,displayWW201, displayEE206, displayBF201, displayHS201, displayMS201 ,displayAS201, displayFS201};