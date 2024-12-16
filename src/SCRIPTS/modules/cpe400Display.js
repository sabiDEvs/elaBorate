
import pic1 from '../../RESOURCES/images/achieve.png';
import pic402_1 from '../../RESOURCES/images/402-1.png';
import pic402_2 from '../../RESOURCES/images/402-2.png';
import pic402_3 from '../../RESOURCES/images/402-3.png';
import pic402_4 from '../../RESOURCES/images/402-4.png';
import pic402_5 from '../../RESOURCES/images/402-5.png';
import pic402_6 from '../../RESOURCES/images/402-6.png';
import pic402_7 from '../../RESOURCES/images/402-7.png';
import pic402_8 from '../../RESOURCES/images/402-8.png';


import pic9 from '../../RESOURCES/images/pic9.png';
import pic10 from '../../RESOURCES/images/pic10.png';
import pic11 from '../../RESOURCES/images/pic11.png';



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
    startingHeader.textContent = 'GETTING STARTED WITH COMPUTER 400  ELA';
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




const displayCPE402 = () => {
    const main = reset();
        const head = document.createElement('h1');
        head.textContent  = 'SEVEN SEGMENT DISPLAY DECODER';
        main.appendChild(head);

        const aim = document.createElement('section');
        const aimHead = document.createElement('h2');
        aimHead.textContent = 'AIMS';
        aim.appendChild(aimHead);
        const aimContent = document.createElement('p');
        aimContent.textContent = 'To construct a circuit that takes a 3-bit binary integer with a decimal value between 0 and 7, and produces the corresponding 7-segment code.';
        aim.appendChild(aimContent);
        const objective = document.createElement('section');
        const objHead = document.createElement('h2');
        objHead.textContent = 'OBJECTIVES';
        objective.appendChild(objHead);
        const objList = document.createElement('ul');
        const objectives = [
            'To understand binary representation, deepening the knowledge of how binary numbers are used and represented in digital circuits.',
            'To become familiar with seven segment displays, gaining practical experience in working with their structure, operation, and common applications.',
            'To comprehend decoder/driver ICs, understanding their working principles and functionality in converting binary input into the corresponding seven segment code.',
            'To design and implement circuits that take a 3-bit binary integer and produce the appropriate seven segment code, including proper connections and configuration of components on a breadboard.',
            'To understand truth tables, recognizing their significance in digital circuit design by creating tables that map 3-bit binary input values to the corresponding seven segment codes.'
          ];
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
        
        const appList = document.createElement('ul');
        const components = [
            '7-Segment Display Decoder',
            'IC7400 (Quad 2-input NAND gate)',
            'IC7404 (Hex Inverter)',
            'IC7410 (Triple 3-input NAND gate)',
            '9V DC Power Supply',
            'Voltage Regulator',
            'Male-Male Connecting Wires',
            'Breadboard'
          ];

        let componentList = [];

        for(let i = 0; i <components.length; i++) {
            componentList[i] = document.createElement('li');
            componentList[i].textContent = components[i];
            appList.appendChild(componentList[i]);
        }
        main.appendChild(appList);



        const theory = document.createElement('section');
    
        const theoHead = document.createElement('h2');
        theoHead.textContent = 'THEORY';
        theory.appendChild(theoHead);
        
        const introduction = document.createElement('div');
        introduction.innerHTML = `
            <h3>Introduction</h3>
            <p>Display devices are all around us. They are the way we understand, use, and interact with the massive digital ecosystem we've built over the years. From the simple temperature indicator of your clinical thermometer & the calculator display to the more impressive picture quality of MacBook Pro, electronic visual displays are indispensable in the modern world.</p>
            <p>Among these underappreciated display devices is the ubiquitous “7-segment Display Decoder”. It is a popular display used in digital watches, pocket calculators, digital multimeters and frequency meters etc.</p>
            <p>Due to its widespread use, it is imperative for beginners in electronics to learn and master the practical implementation of 7-segment displays on breadboards. This study/experiment aims to simplify this process through a detailed demonstration.</p>
            <p>So the purpose of this experiment would be to design and test a circuit that drives a 7-segment display using nothing other than the most basic means, namely; two NAND gate ICs (7400 & 7410 respectively) and an inverter IC (7404), and then highlight the appropriate connections for its operation.</p>
            <p>As a consequence, the chosen approach is to first of all construct the circuit on the breadboard using the necessary components, then testing the different inputs using probe wires or push buttons to work on a single digit 7-segment display decoder. After which, the effectiveness and accuracy of the circuit's operation would be scrutinized in a variety of situations.</p>
        `;
        theory.appendChild(introduction);
    
        const theoreticalAnalysis = document.createElement('div');
        theoreticalAnalysis.innerHTML = `
            <h3>Theoretical Analysis</h3>
            <p>The 7-segment display is one of the simplest and best known alphanumeric indicator types, though limited in design & implementation compared to the more complex 14-Segment & 16-Segment Displays, it is still suitable for displaying decimal and hexadecimal numbers (owing to its range of numeric digits - 0 to 9 & letters - A, b, C, d/D, E, F). It is of two display types which are LED & LCD displays, but our focus would be on the more popular LED display as opposed to its counterpart. LEDs are very similar to normal diodes, however emitting light when current flows through it.</p>
            <p>Looking at the 7-segment pinout, there are eight segments - seven of them are carefully arranged side by side in order to form any decimal or hexadecimal number, and the remaining one used to show the decimal point (which is not useful everytime). Practical seven-segment display devices must be provided with at least eight external connection terminals (not all 7-segment displays come with the ‘h’ segment for decimal point); seven of these give access to the individual photoelectric segments, and the eighth provides a common connection to all segments. There are two (2) common connection pins connected either to Vcc or Ground (depending on the configuration) but ONLY ONE of them is used. It could be either one since they are the same pins. If the display is an LED type, the seven individual LEDs may be arranged in the form shown in Figure 3, in which all LED anodes are connected to the common terminal, or they may be arranged as in Figure 4, in which all LED cathodes are connected to the common terminal. In the former case, the device is known as a common-anode seven-segment display; in the latter case, the device is known as a common-cathode seven-segment display.</p>
            <p>Our choice in this experiment is a common anode configuration. And as shown in the diagram below, all eight LEDs (the digit point included this time) share a common anode which enables display, each segment having its own cathode signal labeled CX where X represents the segment letter. For example, signal CA corresponds to the cathode signal for segment a.</p>
            <p>To turn on an LED, there must be a sufficient voltage drop from anode to cathode. That is, the anode needs to have a high voltage (‘1’) and the cathode has to have a low voltage (‘0’). Go back and read that last sentence again - what do you drive onto a cathode wire to turn a segment on?</p>
            <p>To display the character 0, the anode signal will have a high voltage, the cathode signals CA, CB, CC, CD, CE, and CF will have a low voltage, and the cathode signal CG will have a high voltage.</p>
        `;
        theory.appendChild(theoreticalAnalysis);

        main.appendChild(theory);


        const diagramsSection = document.createElement('section');
        const diagramHead = document.createElement('h2');
        diagramHead.innerText = "DIAGRAMS";

        diagramsSection.appendChild(diagramHead);


        const diagrams = [
            {
                cap: 'Fig 1.0: Seven-segment Display Decoder',
                image: pic402_1
            },
            {
                cap: '1.1: Standard form and notations of the seven-segment display.',
                image: pic402_2
            },
            {
                cap: '1.2: Seven-Segment Display Pinout ',
                image: pic402_3
            },
            {
                cap: 'fig 2: Range of numbers and letters that can be displayed using the 7-segment display.',
                image: pic402_4
            },
            {
                cap: 'Fig 3 : Schematic diagram for common anode configuration',
                image: pic402_5
            },
            {
                cap: 'Fig 4 : Schematic diagram for common cathode configuration',
                image: pic402_6
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
        
        const stepList2 = document.createElement('ul');
        stepList2.classList.add('stepboxlist');
        const steps2 = [
            'Mount the ICs – IC7400, IC7410 & IC7404 side by side on the breadboard.',
            'Connect the input pins of the IC7400 – pins 2, 5, 9 & 12 to the negative terminal of the breadboard.',
            'Connect probes to pins 1, 4, 10 & 13 of IC7400.',
            'Connect the output pins of the IC7400 (pins 2, 6, 8 & 10) to the input pins (pins 1, 3, 11 & 13) of the hex inverter, IC7404.',
            'Connect pin 14 of each of the three ICs – IC7400, IC7404 & IC7410 to Vcc.',
            'Thereafter, ground pin 7 of the ICs mentioned above.',
            'Connect the input pins of the IC7410 (pins 2, 13, 4, 5, 9 & 8) to the negative terminal of the breadboard.',
            'As done before, also connect probes to pins 1, 3 & 11 of IC7410.',
            'Connect the output pins of the IC7410 (pins 2, 6 & 8) to the input pins of IC7404 (pins 13, 1 & 11) respectively.',
            'Connect the output pins of the IC7404 (pins 2, 4, 10, 12, 13 & 10) to pins 10, 9, 7, 6, 4, 2, 1 of the 7-segment display.',
            'Connect either one of the common connection (com) pins – pins 3 or 8 to Vcc.',
            'Now, having actualised the logic circuit, for testing, switch the probes between logic 1 and 0 to get the desired digit displayed.'
        ];
        
        let stepBox2 = [];
        for(let i = 0; i < steps2.length; i++){
            stepBox2[i] = document.createElement('li');
            
            stepBox2[i].textContent = steps2[i];
            stepList2.appendChild(stepBox2[i]);
        }
        practicals.appendChild(stepList2);


        const resultsSection = document.createElement('section');
        const resultsHead = document.createElement('h2');
        resultsHead.innerText = "RESULTS";

        resultsSection.appendChild(resultsHead);

        const results = [
            {
                cap: 'Fig 1.0: Truth table of the seven segment display',
                image: pic402_7
            },
            {
                cap: 'Fig 1.1: Truth table indicating the ON/OFF logical states',
                image: pic402_8
            },
            
        ];

        let resultBox = [];
        let resultImage = [];
        let resultCaption = [];
        for (let i = 0; i < results.length; i++) {
            resultBox[i] = document.createElement('div');
            resultImage[i] = document.createElement('img');
            resultCaption[i] = document.createElement('p');
            resultImage[i].src = results[i].image;
            resultCaption[i].textContent = results[i].cap;
            resultBox[i].appendChild(resultImage[i]);
            resultBox[i].appendChild(resultCaption[i]);
            resultsSection.appendChild(resultBox[i]);
        }


       main.appendChild(resultsSection);
       
        





        main.appendChild(practicals);
        const precaution = document.createElement('section');
        const cautionHead = document.createElement('h3');
        cautionHead.textContent = "PRECAUTIONS";
        precaution.appendChild(cautionHead);
        const cautionList = document.createElement('ul');
        const precautions = [
            'I ensured the ICs were mounted properly on the breadboard so that it lies flat from end to end, with each pin going into the right hole completely.',
            'I employed a voltage regulator to mediate between the DC supply and the rest of the circuit, stepping the 9V down to a more manageable voltage.',
            'I ensured all the jumpers were connected firmly to prevent breakage in the circuit and lead to wrong results.',
            'I performed a continuity test on the breadboard using a multimeter to verify its quality & suitability for the experiment.',
            'I took note of the design fitting the common anode seven-segment display decoder, so as not to mix-up the two configurations.',
            'I used only one common pin as prescribed by the lab manual.'
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
    
    const conclHead = document.createElement('h3');
    conclHead.textContent = 'CONCLUSION';
    conclusion.appendChild(conclHead);
    
    const conclText = document.createElement('div');
    conclText.innerHTML = `
        <p>In this experiment, we successfully designed, assembled, and tested a 7-segment display decoder circuit that converts binary coded decimal (BCD) inputs into the corresponding decimal numeral display. This hands-on project allowed us to apply theoretical concepts of digital logic design in a practical setting, reinforcing our understanding of key principles and techniques.</p>
        
        <h3>Important Takeaways:</h3>
        <ol>
            <li><b>Demystifying the 7-Segment Display Operation:</b>
                <ul>
                    <li>We learned about the structure and function of 7-segment displays, including the difference between common anode and common cathode configurations.</li>
                </ul>
            </li>
            <li><b>Designing the 7-Segment Display Driver:</b>
                <ul>
                    <li>Using a truth table, we mapped BCD inputs to the corresponding segments that should be lit. This step was crucial in understanding how digital signals control physical components.</li>
                    <li>We designed and simplified logic expressions for each segment using Boolean algebra and Karnaugh Maps, minimizing the number of logic gates required.</li>
                </ul>
            </li>
            <li><b>Circuit Assembly:</b>
                <ul>
                    <li>We assembled the circuit on a breadboard, carefully wiring the logic gates and the 7-segment display according to our simplified logic expressions.</li>
                    <li>We ensured proper power supply and input mechanisms to drive the circuit.</li>
                </ul>
            </li>
            <li><b>Testing and Debugging:</b>
                <ul>
                    <li>Through systematic testing, we verified that each BCD input correctly illuminated the appropriate segments on the display.</li>
                    <li>We employed troubleshooting techniques to address any issues, ensuring the circuit operated as intended.</li>
                </ul>
            </li>
        </ol>
        
        <h3>Improved Skills & Technical Know-how:</h3>
        <ul>
            <li><b>Digital Logic Design:</b> Gained proficiency in designing and simplifying logic circuits.</li>
            <li><b>Breadboard Prototyping:</b> Developed skills in assembling and testing circuits on a breadboard.</li>
            <li><b>Problem-Solving:</b> Enhanced our ability to troubleshoot and debug electronic circuits.</li>
        </ul>
        
        <h3>Going Further:</h3>
        <p>The skills and knowledge acquired in this experiment are foundational for more advanced digital electronics projects. Understanding how to control 7-segment displays is applicable in designing user interfaces for various electronic devices and systems. This experiment also serves as a stepping stone towards more complex applications involving microcontrollers and programmable logic devices.</p>
        
        <p>In conclusion, this experiment provided a comprehensive introduction to digital logic design and practical circuit assembly, equipping us with essential skills for future projects in computer engineering and electronics.</p>
    `;
    conclusion.appendChild(conclText);

    main.appendChild(conclusion);
        const references = document.createElement('section');
        const refHead = document.createElement('h3');
        refHead.textContent = "REFERENCES";
        references.appendChild(refHead);
        const refList = document.createElement('ul');
        refList.classList.add('stepboxlist');
        const reference = [
            "400L Computer Engineering Laboratory Manual, UNIBEN.",
            "Rohit, 2020, ‘Seven-segment Display - An Introduction’, Circuit Fever, Rohit, accessed 13 July 2024, https://circuitfever.com/seven-segment-display#google_vignette",
            "BYU Wiki Groups, n.d., ECEn 220, Brigham Young University Catalog, accessed 13 July 2024, http://ecen220wiki.groups.et.byu.net/labs/lab-05/",
            "The Ultimate Guide to 7 Segment Display: Pinout, Working, and Datasheet 2023, Jotrin, accessed 13 July 2023, https://www.jotrin.it/technology/details/7-segment-display-comprehensive-guide#contents-item-7",
            "Ray Marston, 2001, ‘Using Seven-Segment Displays — Part 1’, Nuts and Bolts, Nuts and Bolts Magazine, accessed 13 July 2024, <https://www.nutsvolts.com/magazine/article/using-seven-segment-displays-part-1"
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



export {displayStarted, displayCPE402};