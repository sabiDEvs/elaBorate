import pic1 from '../../RESOURCES/images/retort stand.png';
import pic2 from '../../RESOURCES/images/stopwatch.jpeg';
import pic3 from '../../RESOURCES/images/pendulum graph.png';
import pic4 from '../../RESOURCES/images/shear force in a beam.jpeg';
import pic5 from '../../RESOURCES/images/sForce SM212.png';
import pic6 from '../../RESOURCES/images/plunger.png';
import pic7 from '../../RESOURCES/images/roller.png';
import pic8 from '../../RESOURCES/images/measuring guage.png';
import pic9 from '../../RESOURCES/images/protractor scale.png';
import pic10 from '../../RESOURCES/images/cama.png';
import pic11 from '../../RESOURCES/images/camb.png';
import pic12 from '../../RESOURCES/images/stopwatch.png';
import pic13 from '../../RESOURCES/images/metreStick.png';
import pic14 from '../../RESOURCES/images/rigidStand.png';
import pic15 from '../../RESOURCES/images/bobMass.png';
import pic16 from '../../RESOURCES/images/conicalGraph.png';
import pic17 from '../../RESOURCES/images/hangar.png';
import pic18 from '../../RESOURCES/images/mee_weights.png';
import pic19 from '../../RESOURCES/images/pulley.png';
import pic20 from '../../RESOURCES/images/single stage.png';
import pic21 from '../../RESOURCES/images/idler gear.png';
import pic22 from '../../RESOURCES/images/compound gear.png';
import pic23 from '../../RESOURCES/images/worm gear.png';
import pic24 from '../../RESOURCES/images/bevel gear.png';
import pic25 from '../../RESOURCES/images/diagram 1.png';
import pic26 from '../../RESOURCES/images/diagram 2.png';
import pic112 from '../../RESOURCES/images/download-icon.png';
import pic113 from '../../RESOURCES/images/download.png';


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
    icon.src = pic112;
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
    icon.src = pic113;
    icon.classList.add('hoverIcon');
    link.appendChild(icon);
    download.appendChild(link);
    div.appendChild(view);
    div.appendChild(download);
    div.classList.add('hover');
    return div;
}

const displaySimplePendulum = () => {
    const main = reset();
    
    // Header
    const header = document.createElement('h1');
    header.textContent = 'Simple Pendulum Experiment{AM 226A}';
    main.appendChild(header);
    
        // Section A: Theory
        const theorySection = document.createElement('section');
        const theoryHeader = document.createElement('h2');
        theoryHeader.textContent = 'THEORY';
        theorySection.appendChild(theoryHeader);
    
        const theoryParagraph = document.createElement('div');
        theoryParagraph.innerHTML = `
            A simple pendulum is a basic model used to study pendulums. It consists of a mass, called a bob, suspended from a fixed point by a massless string or rod.  
            The simple pendulum swings back and forth due to gravity's force when it is released from its resting position. Simple harmonic motion can adequately explain the motion of a single pendulum under certain assumptions, such as minimal displacement angles and the absence of air resistance.<br>
            A single pendulum's length, mass, and gravitational acceleration determine its behaviour. Longer pendulums take longer to complete a single swing because of their longer durations. Assuming that the mass is concentrated at the end of the pendulum and has no effect on its distribution, this duration is roughly independent of the mass of the bob.<br>
            One can use a variety of equations, including those derived from Newton's laws of motion or energy conservation principles, to examine the motion of a single pendulum. It is a basic concept in physics that helps to explain oscillatory motion and finds utility in many other domains, such as seismology and timekeeping (such as in vintage pendulum clocks).<br>
            While a simple pendulum is a theoretical model, it helps us understand the basic principles of pendulums. Here are some key points about its motion:
            <ul>
                <li>Swinging motion: When displaced from its resting position, the bob swings back and forth due to gravity pulling it downwards.</li>
                <li>Periodic motion: The swinging motion repeats itself at regular intervals, with a constant time period (T) which is the time for one complete swing back and forth.</li>
                <li>Limited applicability: The simple pendulum formula (T = 2π√(L/g)) is most accurate for small swing angles (ideally less than 15 degrees). For larger swings, the restoring force isn't perfectly proportional to the displacement, affecting the period.</li>
            </ul>
            Applications of simple pendulum include: Mechanical clocks, seismometers, metronomes etc.<br>
            Below is the youtube video that illustrates what the simple pendulum experiment is all about.
            <div><iframe src="https://www.youtube-nocookie.com/embed/02w9lSii_Hs?si=qovIosqap6jw66kD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
        `;
        theorySection.appendChild(theoryParagraph);
        main.appendChild(theorySection);
    
        // Apparatus Section
        const apparatusHeader = document.createElement('h2');
        apparatusHeader.textContent = 'APPARATUS';
        main.appendChild(apparatusHeader);
    
        const apparatusList = document.createElement('div');
        apparatusList.innerHTML = `
            <img src=${pic1}>
            <img src=${pic2}>
        `;
        const apparatusFoot = document.createElement('p');
        apparatusFoot.textContent = `Diagram of a simple pendulum and a stopwatch.`;
        apparatusList.appendChild(apparatusFoot);
        main.appendChild(apparatusList);
    
        // Results Section
        const resultsSection = document.createElement('section');
        const resultsHeader = document.createElement('h2');
        resultsHeader.textContent = 'RESULTS';
        resultsSection.appendChild(resultsHeader);
    
        const resultsLink = document.createElement('div');
        resultsLink.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/PTN0HFD7Utw?si=aW1F5YGp6qyti6Qe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        resultsLink.textContent = 'Watch video for procedures';
        resultsSection.appendChild(resultsLink);
    
        const tableText = document.createElement('p');
        tableText.textContent = 'After watching the video, the table below illustrates an example of how the table of results will look like after performing the experiment.';
        resultsSection.appendChild(tableText);
        const table = document.createElement('table');
        table.border = "1";
        table.style.width = "100%";
    
        const tableHead = document.createElement('thead');
        tableHead.innerHTML = `
            <tr>
                <th>TRIALS</th>
                <th>LENGTH (m)</th>
                <th>PERIOD (s)</th>
            </tr>
        `;
        table.appendChild(tableHead);
    
        const tableBody = document.createElement('tbody');
        const resultRows = [
            { trials: '1', length: '0.5', period: '1.98' },
            { trials: '2', length: '0.6', period: '2.23' },
            { trials: '3', length: '0.7', period: '2.48' },
            { trials: '4', length: '0.8', period: '2.73' },
            { trials: '5', length: '0.9', period: '2.99' },
            { trials: '6', length: '1.0', period: '3.24' }
        ];
        resultRows.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${row.trials}</td>
                <td>${row.length}</td>
                <td>${row.period}</td>
            `;
            tableBody.appendChild(tr);
        });
        table.appendChild(tableBody);
        resultsSection.appendChild(table);
        main.appendChild(resultsSection);
        const analysisSection = document.createElement('section');
    

    // Add the title
    const title = document.createElement("h2");
    title.textContent = "ANALYSIS:";
    analysisSection.appendChild(title);
    const intro = document.createElement("p");
    intro.textContent = "When you have tabulated the results, using the equation below, calculate the Period.";
    analysisSection.appendChild(intro);
    const formula = document.createElement("p");
    const equation = document.createElement("span");
    equation.textContent = "T = 2π√(L/g)……….. (I)";
    equation.style.fontWeight = "bold";
    formula.appendChild(equation);
    analysisSection.appendChild(formula);
    const explanationList = document.createElement("ul");
    const item1 = document.createElement("li");
    item1.textContent = "T is the period and the time taken for the pendulum to complete one full oscillation and is typically measured in seconds.";
    explanationList.appendChild(item1);
    const item2 = document.createElement("li");
    item2.textContent = "L is the length of the pendulum measured from the pivot point to the center of mass of the pendulum bob, usually in meters.";
    explanationList.appendChild(item2);
    const item3 = document.createElement("li");
    item3.textContent = "g is acceleration due to gravity which is (9.8 m/s or 10 m/s) (i.e., it is a constant).";
    explanationList.appendChild(item3);
    analysisSection.appendChild(explanationList);
    const conclusion = document.createElement("p");
    conclusion.textContent = "This experiment helps verify this formula and understand how gravity influences the pendulum's motion.";
    analysisSection.appendChild(conclusion);
    main.appendChild(analysisSection); 
        // Observations and Precautions
        const observationsSection = document.createElement('section');
        const observationsHeader = document.createElement('h2');
        observationsHeader.textContent = 'OBSERVATIONS AND PRECAUTIONS';
        observationsSection.appendChild(observationsHeader);
    
        const obsTable = document.createElement('table');
        obsTable.border = "1";
        obsTable.style.width = "100%";
    
        obsTable.innerHTML = `
            <thead>
                <tr>
                    <th>OBSERVATIONS</th>
                    <th>PRECAUTIONS</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>The pendulum bob exhibited regular back-and-forth motion, indicating simple harmonic motion.</td>
                    <td>Conducted the experiment in an area with minimal air disturbance to reduce air resistance effects.</td>
                </tr>
                <tr>
                    <td>The relationship between pendulum length and time period matched theoretical predictions (T ∝ √(L/g)).</td>
                    <td>Avoided parallax errors when taking measurements.</td>
                </tr>
                <tr>
                    <td>Changing the pendulum length affected its time period: longer pendulums had longer periods.</td>
                    <td>Used a reliable timer for accurate period measurements.</td>
                </tr>
            </tbody>
        `;
        observationsSection.appendChild(obsTable);
        main.appendChild(observationsSection);
    
        // Graphs Section
        const graphsSection = document.createElement('section');
        const graphsHeader = document.createElement('p');
        graphsHeader.textContent = 'GRAPHS: A picture below showing the scale and the graph of Period(Y-axis) against Length(X-axis)';
        graphsSection.appendChild(graphsHeader);
        const graphImage = document.createElement('img');
        graphImage.src = pic3;
        graphsSection.appendChild(graphImage);
        const graphLink = document.createElement('div');
        graphLink.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/K-Ix3gWBGsc?si=XkrXlG9q8RqOP4K5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        const graphHead = document.createElement('p');
        graphHead.textContent = 'Watch how to draw the graph';
        graphsSection.appendChild(graphHead);
        graphsSection.appendChild(graphLink);
        main.appendChild(graphsSection);
    
        // Discussion Section
        const discussionSection = document.createElement('section');
        const discussionHeader = document.createElement('h2');
        discussionHeader.textContent = 'DISCUSSION';
        discussionSection.appendChild(discussionHeader);
    
        const discussionParagraph = document.createElement('p');
        discussionParagraph.innerHTML = `
            Measurement errors: Errors in measuring the length of the pendulum or the time period of oscillation can lead to inaccuracies in the results and can be prevented by using precise measuring instruments such as a ruler or a vernier caliper for length measurements.<br>
            Temperature variations: Changes in temperature can affect the length of the pendulum, which in turn can affect the time period measurements and can be prevented by conducting the experiment in a controlled environment with stable temperature conditions.
        `;
        discussionSection.appendChild(discussionParagraph);
        main.appendChild(discussionSection);
    
        // Conclusion Section
        const conclusionSection = document.createElement('section');
        const conclusionHeader = document.createElement('h2');
        conclusionHeader.textContent = 'CONCLUSION';
        conclusionSection.appendChild(conclusionHeader);
    
        const conclusionParagraph = document.createElement('p');
        conclusionParagraph.textContent = "At the end of this experiment we were able to determine the acceleration due to gravity and also determine the period at a specific length.";
        conclusionSection.appendChild(conclusionParagraph);
        main.appendChild(conclusionSection);
    
        // Questions Section
        const questionsSection = document.createElement('section');
        const questionsHeader = document.createElement('h2');
        questionsHeader.textContent = 'SECTION B (QUESTIONS)';
        questionsSection.appendChild(questionsHeader);
    
        const questionsList = document.createElement('ul');
        questionsList.innerHTML = `
            <li><strong>WHAT HAVE YOU GAINED FROM THIS EXPERIMENT:</strong> Through observing the motion of the pendulum, I was able to gain a deeper understanding of simple harmonic motion, a fundamental concept in physics. This includes learning about oscillatory motion, restoring forces, and periodic behavior. I was able to verify theoretical predictions, such as the relationship between the length of the pendulum and its period of oscillation (T ∝ √(L/g)), where T is the period, L is the length, and g is the acceleration due to gravity.</li>
            <li><strong>WHAT ROLE DID YOU PLAY DURING THE EXPERIMENT:</strong> I was responsible for recording the period (time for one complete swing) of the pendulum. I assisted in assembling the pendulum by attaching the string to the bob and securing it to the clamp stand.</li>
            <li><strong>COULD YOU HAVE PERFORMED THIS EXPERIMENT BY YOURSELF:</strong> NO: Because measuring the pendulum's length accurately requires holding the measuring tool (ruler or vernier caliper) next to the pendulum. This would necessitate another hand to hold the pendulum steady.</li>
            <li><strong>COMMENT ON THE EXPERIMENTAL PROCEDUREto:justifygitshsuitability for accuracy ofrresultsmand timeusavingperiment is well-suited to produce accurate results while also being time-saving...</li>
            <li><strong>WHAT WAS THE MOST DIFFICULT ASPECT OF THE EXPERIMENT?</strong> The most difficult part was trying to minimize measurement errors and trying to measure the pendulum’s length.</li>
            <li><strong>NAME AND DESCRIBE ANY APPARATUS OR METHOD YOU KNOW CAN BE USED TO PERFORM THIS SAME EXPERIMENT:</strong> You can use a threaded rod and nut, replace the string with a thin rigid rod with a nut threaded onto the bottom and then use a meter stick with a small hole drilled near one end...</li>
        `;
        questionsSection.appendChild(questionsList);
        main.appendChild(questionsSection);

        const referencesSection = document.createElement('section');
    const referencesHeader = document.createElement('h2');
    referencesHeader.textContent = 'REFERENCES';
    referencesSection.appendChild(referencesHeader);

    const referencesList = document.createElement('ul');
    referencesList.innerHTML = `
        <li>University Physics with Modern Physics (14th Edition) by Hugh D. Young and Roger A. Freedman</li>
        <li>Classical Mechanics (3rd Edition) by Herbert Goldstein, Charles P. Poole, and John L. Safko</li>
        <li>Analytical Mechanics (7th Edition) by Donald T. Greenwood</li>
    `;
    referencesSection.appendChild(referencesList);
    main.appendChild(referencesSection);
    const hover = createHover('#');
    main.appendChild(hover);
    const download = createDownload('#');
    main.appendChild(download);
};
    
const displayShearForceExperiment = () => {
    const main = reset();
    
    // Header
    const header = document.createElement('h1');
    header.textContent = 'SHEAR FORCE IN A BEAM EXPERIMENT';
    main.appendChild(header);
    
    // Section A: Theory
    const theorySection = document.createElement('section');
    const theoryHeader = document.createElement('h2');
    theoryHeader.textContent = 'THEORY';
    theorySection.appendChild(theoryHeader);

    const theoryParagraph = document.createElement('div');
    theoryParagraph.innerHTML = `
        <p>A shear force in a beam experiment investigates how a beam supported at two ends (simply supported beam) reacts to forces applied along its length. The experiment helps us understand how these forces internally shear the beam.</p>
        <p>The shear force in a beam comprises of: <br>
        - Beam: Usually constructed of a metal such as steel or aluminium, this is the test subject. <br>
        - Supports: The beam is held in position by two supports, which normally permit translation (sliding) at one end and rotation at the other. <br>
        - The loading mechanism: can be applied as distributed loads (a bar resting on the beam) or concentrated point loads (weights attached at specified spots). <br>
        - Shear force measurement: In certain configurations, a load cell monitors the shear force at a precise location where the beam has been sliced.</p>
        <p>It is a transverse force that tends to cause one component of the beam to slide or shear in relation to another. Consider chopping the beam off at a certain location. The entire internal force pushing one side of the cut in one direction and the other side in the opposite direction is represented by the shear force, which is applied to the cut section. The experiment aims to validate the theoretical relationship between applied loads, shear force, and location. By measuring the shear force at different points with varying loads, researchers can compare the results with the theoretical predictions. </p>
        <p>A <span>load</span> refers to any <span>external force</span> applied to the beam that's perpendicular to its longitudinal axis. These external forces cause internal shear forces to develop within the beam to maintain equilibrium.</p>
    `;
    theorySection.appendChild(theoryParagraph);
    const loadType = document.createElement('section');
    loadType.innerHTML = `
        <p><span>Point Load:</span> A single concentrated force acting at a specific point on the beamA single concentrated force acting at a specific point on the beam</p>
        <p><span>Uniformly Distributed Load (UDL):</span> A load spread evenly across a section of the beam.</p>
        <p><span>Varying Distributed Load:</span> A load that varies along the length of the beam.</p>
        <p> Understanding shear force and its distribution in a beam is crucial for structural analysis and design. Through experiments, theoretical concepts are validated, helping engineers ensure that beams will behave as expected under various loading conditions.</p>
    `;
    theorySection.appendChild(loadType);
    main.appendChild(theorySection);
    
    // Apparatus Section
    const apparatusHeader = document.createElement('h2');
    apparatusHeader.textContent = 'APPARATUS';
    main.appendChild(apparatusHeader);

    const apparatusList = document.createElement('div');
    apparatusList.innerHTML = `
        <img src=${pic4}>
        <img src=${pic5}>
    `;
    const apparatusFoot = document.createElement('p');
    apparatusFoot.textContent = 'Diagram of a shear force in a beam experiment.';
    apparatusList.appendChild(apparatusFoot);
    main.appendChild(apparatusList);

    // Results Section
    const resultsSection = document.createElement('section');
    const resultsHeader = document.createElement('h2');
    resultsHeader.textContent = 'RESULTS';
    resultsSection.appendChild(resultsHeader);

    const resultsLink = document.createElement('div');
    resultsLink.innerHTML = `
        <iframe src="https://youtu.be/d0XxhA95MKs?si=sAaJYo91x3LES-lN" title="Shear Force Experiment Procedure" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `;
    resultsSection.appendChild(resultsLink);

    const tableText = document.createElement('p');
    tableText.textContent = 'After watching the video, the table below illustrates an example of how the table of results will look like after performing the experiment.';
    const disclaimer = document.createElement('span');
    disclaimer.textContent = "NOTE: This is sample of how the table looks like and not the actual table, input the values calculated or gotten from the experiment into each column correctly."
    resultsSection.appendChild(tableText);
    resultsSection.appendChild(disclaimer);

    // Table of Results
    const table1 = document.createElement('table');
    table1.border = "1";
    table1.style.width = "100%";

    const tableHead1 = document.createElement('thead');
    tableHead1.innerHTML = `
        <tr>
            <th>Mass (g)</th>
            <th>Load (N)</th>
            <th>Force (N)</th>
            <th>Experimental Bending Moment (Nm)</th>
            <th>Theoretical Bending Moment (Nm)</th>
        </tr>
    `;
    table1.appendChild(tableHead1);

    const tableBody1 = document.createElement('tbody');
    const resultRows1 = [
        { mass: '0', load: '0', force: '0', expBendingMoment: '0', theoBendingMoment: '0' },
        { mass: '100', load: '0.98', force: '0.7', expBendingMoment: '0.0875', theoBendingMoment: '0.0936' },
        { mass: '200', load: '1.96', force: '1.4', expBendingMoment: '0.175', theoBendingMoment: '0.1872' },
        { mass: '300', load: '2.94', force: '2.2', expBendingMoment: '0.275', theoBendingMoment: '0.2805' },
        { mass: '400', load: '3.92', force: '2.9', expBendingMoment: '0.3625', theoBendingMoment: '0.3741' },
        { mass: '500', load: '4.92', force: '3.6', expBendingMoment: '0.45', theoBendingMoment: '0.4693' }
    ];

    resultRows1.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.mass}</td>
            <td>${row.load}</td>
            <td>${row.force}</td>
            <td>${row.expBendingMoment}</td>
            <td>${row.theoBendingMoment}</td>
        `;
        tableBody1.appendChild(tr);
    });
    table1.appendChild(tableBody1);
    resultsSection.appendChild(table1);
    const tableCap1 = document.createElement('p');
    tableCap1.textContent = 'Table 1';
    resultsSection.appendChild(tableCap1);

    const table2 = document.createElement('table');
    table2.border = "1";
    table2.style.width = "100%";

    const tableHead2 = document.createElement('thead');
    tableHead2.innerHTML = `
        <tr>
            <th>Fig</th>
            <th>W1 (N)</th>
            <th>W2 (N)</th>
            <th>Force (N)</th>
            <th>Experimental Bending Moment (Nm)</th>
            <th>Ra (N)</th>
            <th>Rb (N)</th>
            <th>Theoretical Bending Moment (Nm)</th>
        </tr>
    `;
    table2.appendChild(tableHead2);

    const tableBody2 = document.createElement('tbody');
    const resultRows2 = [
        { fig: '4', W1: '3.92', W2: '-',force: '-1.4', expBendingMoment: '0.198', Ra: '2.672', Rb:'1.247', theoBendingMoment: '2.67' },
        { fig: '5', W1: '1.96', W2: '3.92',force: '3.5', expBendingMoment: '0.4575', Ra: '2.589', Rb:'3.296', theoBendingMoment: '0.98' },
        { fig: '4', W1: '4.91', W2: '3.92',force: '3.8', expBendingMoment: '0.475', Ra: '2.59', Rb:'6.24', theoBendingMoment: '2.23' },
    ];

    resultRows2.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.fig}</td>
            <td>${row.W1}</td>
            <td>${row.W2}</td>
            <td>${row.force}</td>
            <td>${row.expBendingMoment}</td>
            <td>${row.Ra}</td>
            <td>${row.Rb}</td>
            <td>${row.theoBendingMoment}</td>
        `;
        tableBody2.appendChild(tr);
    });
    table2.appendChild(tableBody2);
    resultsSection.appendChild(table2);
    const tableCap2 = document.createElement('p');
    tableCap2.textContent = 'Table 2';
    resultsSection.appendChild(tableCap2);
    main.appendChild(resultsSection);

    // Analysis Section
    const analysisSection = document.createElement('section');
    const analysisHeader = document.createElement('h2');
    analysisHeader.textContent = 'ANALYSIS';
    analysisSection.appendChild(analysisHeader);

    const analysisParagraph = document.createElement('p');
    analysisParagraph.innerHTML = `
        <p>Calculate the theoretical shear force using the formula: <br> 
        <strong>for table 1:</strong> <br>
        <strong>Sc = W.a/L</strong> <br>
        Where: <br>
        - Sc = Theoretical shear force <br>
        - W = Load (N) <br>
        - a = Distance from support (m) <br>
        - L = Length of beam (m)</p>
        <p>
            <strong>for table 2:</strong> <br>
            <strong>Ra + Rb = W1 + W2</strong> <br>
            <strong>Sc = W.a/L</strong> <br>
            Where: <br>
            - Sc = Theoretical shear force <br>
            - W = Load (N) <br>
            - a = Distance from support (m) <br>
            - L = Length of beam (m)</p>
        </p>
    `;
    analysisSection.appendChild(analysisParagraph);
    main.appendChild(analysisSection);

    // Observations and Precautions Table
    const observationsSection = document.createElement('section');
    const observationsHeader = document.createElement('h2');
    observationsHeader.textContent = 'OBSERVATIONS AND PRECAUTIONS';
    observationsSection.appendChild(observationsHeader);

    const observationsTable = document.createElement('table');
    observationsTable.border = "1";
    observationsTable.style.width = "100%";
    observationsTable.innerHTML = `
        <tr>
            <th>Observations</th>
            <th>Precautions</th>
        </tr>
        <tr>
            <td>Observed that deflection of the beam increases with increasing load.</td>
            <td>Avoided error due to parallax when taking measurements for experiment.</td>
        </tr>
        <tr>
            <td>Observed that the there may be a slight initial deflection due to imperfections in the beam or supports..</td>
            <td>Ensured that I applied the loads gradually to avoid sudden jerks that can damage the beam or cause inaccurate readings.</td>
        </tr>
        <tr>
            <td>Observed that shear force is highest near the point of load application and reduces towards the supports.</td>
            <td>Ensured that the measuring instruments (dial gauge) were zeroed before applying any load</td>
        </tr>
    `;
    observationsSection.appendChild(observationsTable);
    main.appendChild(observationsSection);

    const graphsSection = document.createElement('section');
        const graphsHeader = document.createElement('p');
        graphsHeader.textContent = 'GRAPHS: USING THE FIRST TABLE(TABLE 1)';
        graphsSection.appendChild(graphsHeader);
        const graphPara = document.createElement('div');
        graphPara.innerHTML = `
            <p>
                <strong>NOTE:</strong> There are two graphs to be drawn <br>
                - 1st load (Y-axis) against experimental bending moment (first graph) and <br>
                - 2nd load(Y-axis)  against theoretical bending moment (second graph) 
            </p>
        `;
        graphsSection.appendChild(graphPara);
        const graphLink = document.createElement('div');
        graphLink.innerHTML = '<<iframe src="https://www.youtube-nocookie.com/embed/9kJ5vyfW0n4?si=nyszMp-ZS8gRmmBm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
        const graphHead = document.createElement('p');
        graphHead.textContent = 'Watch how to draw the graph';
        graphsSection.appendChild(graphHead);
        graphsSection.appendChild(graphLink);
        main.appendChild(graphsSection);
    
        // Discussion Section
        const discussionSection = document.createElement('section');
        const discussionHeader = document.createElement('h2');
        discussionHeader.textContent = 'DISCUSSION';
        discussionSection.appendChild(discussionHeader);
    
        const discussionParagraph = document.createElement('div');
        discussionParagraph.innerHTML = `
            <p><strong>-Instrumentation:</strong> Inaccurate readings from instruments like load cells or dial gauges can lead to skewed results. Ensure proper calibration of these instruments before the experiment.</p>
            <p><strong>-Beam imperfections:</strong> Slight variations in the beam's cross-section or material properties can affect the shear force distribution.</p>
        `;
        discussionSection.appendChild(discussionParagraph);
        main.appendChild(discussionSection);
    
        // Conclusion Section
        const conclusionSection = document.createElement('section');
        const conclusionHeader = document.createElement('h2');
        conclusionHeader.textContent = 'CONCLUSION';
        conclusionSection.appendChild(conclusionHeader);
    
        const conclusionParagraph = document.createElement('p');
        conclusionParagraph.textContent = "At the end of this experiment, we were able to understand how the shear force in a beam apparatus and experiment works and we can validate engineering principles with an experiment involving a shear force beam. We can verify that shear force varies along the length of the beam and increases with load by applying loads and measuring the resulting shear force. This information is essential for creating sturdy and safe beams for machines, buildings, bridges, and other structures.";
        conclusionSection.appendChild(conclusionParagraph);
        main.appendChild(conclusionSection);
    
        // Questions Section
        const questionsSection = document.createElement('section');
        const questionsHeader = document.createElement('h2');
        questionsHeader.textContent = 'SECTION B (QUESTIONS)';
        questionsSection.appendChild(questionsHeader);
    
        const questionsList = document.createElement('ul');
        questionsList.innerHTML = `
            <li><strong>WHAT HAVE YOU GAINED FROM THIS EXPERIMENT:</strong> <p>-I was able to learn how to adequately measure the shear force in a beam using the adequate apparatus required <br>
            -I was able to learn about the relationship between shear force , load and bending moment <br>
            -I learnt how to used the appropriate apparatus correctly and also knew the importance of the apparatus used in this experiment</p></li>
            <li><strong>WHAT ROLE DID YOU PLAY DURING THE EXPERIMENT:</strong> <p>
            -I brought out the required weight needed for the experiment and placed it correctly <br>
            -I collected the data by writing down the values/parameters needed to perform the experiment and analyzed the data for my group </p></li>
            <li><strong>COULD YOU HAVE PERFORMED THIS EXPERIMENT BY YOURSELF:</strong> NO: Because I will not be able to take my readings accurately without guidance or external help to verify the accuracy of the readings/results </li>
            <li><strong>COMMENT ON THE EXPERIMENTAL PROCEDUREto:justifygits suitability for accuracyuof resultsoandatimehsaving application points strengthens the accuracy. This helps create a shear force distribution profile for the entire beam, not just a specific point. While increasing the load helps understand the relationship with shear force, using too many small increments can be time-consuming. </p>
            <p> The procedure can be optimized by using strategically chosen load values that cover a representative range. Zeroing the measuring instruments before each load application minimizes errors due to initial imperfections in the setup. Using calibrated instruments (load cells, dial gauges) ensures the accuracy of the measurements. Also repeating the experiment multiple times increases the accuracy and reliability </p></li>
            <li><strong>WHAT WAS THE MOST DIFFICULT ASPECT OF THE EXPERIMENT?</strong> 
            <p>-The most difficult aspect was ensuring accurate load positioning and beam alignment. can have a major impact on the distribution of shear force. Precisely aligning the load and making sure the beam is level can be difficult, particularly with manual systems. In order to increase accuracy, jigs and alignment tools might be used.</p> 
            <p>-The most difficult part was minimizing friction. Throughout the experiment, friction may arise at the weight application locations and beam supports, among other places. This friction may cause inaccuracies in the shear force levels that are measured. Utilizing lubricants, smooth surfaces, or specific bearings can all help reduce friction.</p></li>
            <p><strong>NAME AND DESCRIBE ANY APPARATUS OR METHOD YOU KNOW CAN BE USED TO PERFORM THIS SAME EXPERIMENT:</strong></p>
            <p><strong>Strain Gauge Technique:</strong></p>
            <ul>
            <li>Attach Strain Gauges: Bond strain gauges to the beam at specific locations, typically near support points.</li>
            <li>Apply Load: Gradually apply a load using weights or another loading mechanism.</li>
            <li>Deform Under Load: As the beam bends under the load, the strain gauges undergo deformation, causing a change in their electrical resistance.</li>
            <li>DAQ System: A data acquisition (DAQ) system amplifies and records the minute voltage changes from the strain gauges.</li>
            <li>Data Analysis: Convert the recorded voltage data into strain using the gauge's calibration factor. Relate this strain data to shear force using engineering mechanics concepts.</li>
            </ul>
            <p><strong>Note:</strong> The strain gauge technique is versatile, offering precise measurements at multiple points without modifying the beam structure. However, it requires specialized equipment and expertise for data analysis.</p>

            <p><strong>LIST THE PARAMETERS REQUIRED IN THIS EXPERIMENT:</strong></p>
            <ul>
            <li>Length (m)</li>
            <li>Cross-sectional Area (m²)</li>
            <li>Force (N)</li>
            <li>Mass (g)</li>
            </ul>

            <p><strong>BRIEFLY DISCUSS ONE MEASURING INSTRUMENT USED IN THIS EXPERIMENT:</strong></p>
            <ul>
            <li><strong>Strain Gauge:</strong> A widely used instrument in shear force experiments, it measures strain (deformation) on the beam's surface under load.</li>
            <li><strong>Metre Rule:</strong> Used to measure the beam's length and dimensions, often essential for determining the beam's supporting structure.</li>
            </ul>

            <p><strong>DISCUSS BRIEFLY THE PRACTICAL RELEVANCE/APPLICATION OF THE EXPERIMENT:</strong></p>
            <ul>
            <li><strong>Bridge Design:</strong> Understanding shear force distribution is critical for designing bridges that handle traffic loads safely.</li>
            <li><strong>Machine Component Design:</strong> Shear force analysis aids in designing reliable machine parts like shafts, gears, and levers.</li>
            <li><strong>Infrastructure Projects:</strong> It ensures structures like roads and dams can handle loads throughout their lifespan.</li>
            </ul>

            <p><strong>STATE THE SECTION OF THE COURSE THAT THE EXPERIMENT BEST RELATES TO:</strong></p>
            <ul>
            <li>Engineering Mechanics</li>
            <li>Strength of Materials</li>
            <li>Structural Analysis</li>
            </ul>

            <p><strong>LIST THE SUGGESTIONS YOU MADE WHILE CARRYING OUT THE EXPERIMENT:</strong></p>
            <ul>
            <li>Repeat measurements to improve accuracy.</li>
            <li>Assign specific roles to group members (e.g., data recorder, equipment handler, load applicator) to enhance workflow efficiency.</li>
            </ul>

            <p><strong>LIST THE SUGGESTIONS MADE BY THE MEMBERS OF YOUR GROUP THAT HELPED DURING THE EXPERIMENT:</strong></p>
            <ul>
            <li>Ensure that instruments are well-calibrated for precise results.</li>
            <li>Take multiple readings at each load point to improve data reliability.</li>
            </ul>

            <p><strong>DID YOU PUT DOWN THE EXPERIMENTAL RESULTS IN YOUR BOOK AT THE TIME OF THE EXPERIMENT OR DID YOU COPY FROM YOUR GROUP MEMBERS?</strong></p>
            <p>YES: I recorded the experiment results in my workbook during the experiment to ensure accuracy and prevent errors that might occur when relying on memory or others later.</p>

            <p><strong>DISCUSS ANYTHING THAT INTERESTED YOU MOST DURING THE EXPERIMENT:</strong></p>
            <ul>
            <li>Observing the beam's deflection under various loads.</li>
            <li>Calculating the bending moment using experimental values.</li>
            </ul>

        <p><strong>DID YOU COME TO THE LABORATORY WITH THE LABORATORY MANUAL DURING THE PERFORMANCE OF THE EXPERIMENT?</strong></p>
        <p>YES: The laboratory manual was required to follow the practical effectively.</p>
       `;
        questionsSection.appendChild(questionsList);
        main.appendChild(questionsSection);

        const referencesSection = document.createElement('section');
    const referencesHeader = document.createElement('h2');
    referencesHeader.textContent = 'REFERENCES';
    referencesSection.appendChild(referencesHeader);

    const referencesList = document.createElement('ul');
    referencesList.innerHTML = `
        <li>Engineering mechanics of solids by Egor</li>
        <li>Structural Analysis by Russell. C . Hibbeler </li>
        <li>Mechanics of materials by James. M. Gere</li>
    `;
    referencesSection.appendChild(referencesList);
    main.appendChild(referencesSection);
    const hover = createHover('#');
    main.appendChild(hover);
    const download = createDownload('#');
    main.appendChild(download);
};

const displayCamFollower = () => {
    const main = reset();

    // Header
    const header = document.createElement('h1');
    header.textContent = 'Radial Cam and Follower {AM221}';
    main.appendChild(header);

    // Theory Section
    const theorySection = document.createElement('section');
    theorySection.innerHTML = `
        <h2>THEORY</h2>
        <p>A cam is a rotating body which imparts a reciprocating motion to a second body (the follower) in contact with it. Cams are widely used for transferring motion to mechanical systems. Rollers and flat followers are common types.</p>
        <p>A follower is a mechanical component used to transfer motion to the required machine part in a circular arc. Types of followers include: Roller, flat footed lever, knife edged, spherical etc.</p>
        <p>A cam and follower mechanism is an essential part of mechanical engineering systems, used to convert rotary motion into reciprocating or oscillating motion. This system is commonly found in machines like engines, automation systems, and various tools requiring repetitive motion.</p>
        <h3>Example of Working Principle:</h3>
        <ul>
            <li>As the cam rotates, its profile comes into contact with the follower</li>
            <li>The shape of the cam determines how the follower moves (up, down, or oscillates)</li>
        </ul>
        <h3>Applications:</h3>
        <ul>
            <li>Operating intake and exhaust valves</li>
            <li>Textile looms</li>
            <li>Printing presses</li>
            <li>Controlling precise movements of robotic parts</li>
        </ul>
    `;
    main.appendChild(theorySection);

    // Apparatus Section
    const apparatusSection = document.createElement('section');
    apparatusSection.innerHTML = `
        <h2>APPARATUS</h2>
        <ul>
            <li><div><p>Dial gauge plunger</p><img src=${pic6}></div></li>
            <li><div><p>Roller follower</p><img src=${pic7}></div></li>
            <li><div><p>Measuring gauge</p><img src=${pic8}></div></li>
            <li><div><p>Protractor scale</p><img src=${pic9}></div></li>
        </ul>
    `;
    main.appendChild(apparatusSection);

    // Results Section
    const resultsSection = document.createElement('section');
    resultsSection.innerHTML = `
        <h2>RESULTS</h2>
        <p>Below is the youtube video that illustrates the procedures for the cam and followers experiment</p>
        <div class="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/fIAz3hf7KO0" frameborder="0" allowfullscreen></iframe>
        </div>
        <div><b>NOTE: this is an example of how the table looks like not the actual table input the values calculated or gotten from the experiment into the tables under each column correctly.</b></div>
        <h3>TABLE OF RESULTS</h3>
        <div class="tables-container">
            <table>
                <caption>CAM A</caption>
                <thead>
                    <tr>
                        <th>Angle (°)</th>
                        <th>Displacement (m)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>10</td>
                        <td>0.41</td>
                    </tr>
                    <tr>
                        <td>30</td>
                        <td>2.31</td>
                    </tr>
                    <tr>
                        <td>60</td>
                        <td>8.40</td>
                    </tr>
                    <tr>
                        <td>90</td>
                        <td>15.82</td>
                    </tr>
                    <tr>
                        <td>120</td>
                        <td>22.23</td>
                    </tr>
                    <tr>
                        <td>150</td>
                        <td>28.41</td>
                    </tr>
                    <tr>
                        <td>180</td>
                        <td>29.02</td>
                    </tr>
                    <tr>
                        <td>210</td>
                        <td>29.02</td>
                    </tr>
                    <tr>
                        <td>240</td>
                        <td>0.02</td>
                    </tr>
                    <tr>
                        <td>270</td>
                        <td>-0.90</td>
                    </tr>
                    <tr>
                        <td>300</td>
                        <td>-10.93</td>
                    </tr>
                    <tr>
                        <td>330</td>
                        <td>-24.41</td>
                    </tr>
                    <tr>
                        <td>360</td>
                        <td>30.88</td>
                    </tr>
                </tbody>
            </table>
            <table>
                <caption>CAM B</caption>
                <thead>
                    <tr>
                        <th>Angle (°)</th>
                        <th>Displacement (m)</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- To be filled with experimental data -->
                    <tr>
                        <td>10</td>
                        <td>0.76</td>
                    </tr>
                    <tr>
                        <td>30</td>
                        <td>0.87</td>
                    </tr>
                    <tr>
                        <td>60</td>
                        <td>0.10</td>
                    </tr>
                    <tr>
                        <td>90</td>
                        <td>14.91</td>
                    </tr>
                    <tr>
                        <td>120</td>
                        <td>20.00</td>
                    </tr>
                    <tr>
                        <td>150</td>
                        <td>25.86</td>
                    </tr>
                    <tr>
                        <td>180</td>
                        <td>31.15</td>
                    </tr>
                    <tr>
                        <td>210</td>
                        <td>31.15</td>
                    </tr>
                    <tr>
                        <td>240</td>
                        <td>-0.24</td>
                    </tr>
                    <tr>
                        <td>270</td>
                        <td>-0.23</td>
                    </tr>
                    <tr>
                        <td>300</td>
                        <td>-8.88</td>
                    </tr>
                    <tr>
                        <td>330</td>
                        <td>-17.82</td>
                    </tr>
                    <tr>
                        <td>360</td>
                        <td>-29.83</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
    main.appendChild(resultsSection);

    // Analysis Section
    const analysisSection = document.createElement('section');
    analysisSection.innerHTML = `
        <h2>ANALYSIS</h2>
        <p>NO ANALYSIS OR FORMULA USED</p>
        <h3>OBSERVATION AND PRECAUTIONS</h3>
         <table>
                <thead>
                    <tr>
                        <th>OBSERVATIONS</th>
                        <th>PRECAUTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- To be filled with experimental data -->
                    <tr>
                        <td>I observed that the results from CAM A and CAM B formed a graph with sinusoidal waves</td>
                        <td>I ensured that the pointer was the zero mark</td>
                    </tr>
                    <tr>
                        <td>I observed that the angles at which the maximum and minimum displacements occur</td>
                        <td>I avoided error due to parallax when taking measurements for the experiment</td>
                    </tr>
                    <tr>
                        <td>I observed that the shape of the cam and its effect on the motion of the follower</td>
                        <td>I ensured that the values recorded where correct and accurate</td>
                    </tr>
                </tbody>
         </table>
    `;
    main.appendChild(analysisSection);

    // Graphs Section
    const graphsSection = document.createElement('section');
    graphsSection.innerHTML = `
        <h2>GRAPHS</h2>
        <h3>NOTE:</h3>
        <p>There are two graphs to be drawn:</p>
        <ul>
            <li>Graph 1: Graph of Angle (Y-axis) against Displacement for CAM A</li>
            <li>Graph 2: Graph of Angle (Y-axis) against Displacement for CAM B</li>
        </ul>
        <div class="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/9kJ5vyfW0n4" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="graphs-container">
            <div class="graph">
                <h3>Graph 1: Graph of Angle against Displacement for CAM A</h3>
                <!-- Graph placeholder -->
                <div><img src=${pic10}></div>
            </div>
            <div class="graph">
                <h3>Graph 2: Graph of Angle against Displacement for CAM B</h3>
                <!-- Graph placeholder -->
                <div><img src=${pic11}></div>
            </div>
        </div>
    `;
    main.appendChild(graphsSection);

    // Discussion Section
    const discussionSection = document.createElement('section');
    discussionSection.innerHTML = `
        <h2>DISCUSSION</h2>
        <ul>
            <li>Dial Gauge Inaccuracy: If the dial gauge is not calibrated correctly, it may give inaccurate displacement readings.</li>
            <li>Protractor Scale Precision: Errors in reading the angular displacement due to poorly marked or misaligned protractor scales.</li>
            <li>If the cam profile and follower type were properly chosen, the general trend of the follower's displacement should match theoretical predictions. (e.g., sinusoidal rise and fall for an eccentric cam).</li>
            <li>Lubrication minimizes friction, alignment tools reduce misalignment, and proper calibration ensures accurate readings. If these precautions were taken, deviations should be minor and within acceptable ranges.</li>
        </ul>
    `;
    main.appendChild(discussionSection);

    // Conclusion Section
    const conclusionSection = document.createElement('section');
    conclusionSection.innerHTML = `
        <h2>CONCLUSION</h2>
        <p>At the end of this experiment, we were able to understand that Radial cam and follower mechanism plays a crucial role in converting rotational motion into oscillating motion. It finds application in internal combustion machines</p>
    `;
    main.appendChild(conclusionSection);

    // Q&A Section
    // ...existing code...

const qaSection = document.createElement('section');
qaSection.innerHTML = `
    <h2>SECTION B (QUESTIONS)</h2>
    <div class="qa-container">
        <h3>What have you gained from this experiment?</h3>
        <ul>
            <li>Recognize how cam and follower mechanisms are utilized in real-world machines, such as internal combustion engines, textile machines, and automation systems.</li>
            <li>Learned how to use the appropriate apparatus correctly and understood their importance</li>
        </ul>

        <h3>What role did you play during the experiment?</h3>
        <ul>
            <li>Rotated the dial gauge to the required angle</li>
            <li>I collected the data by writing down the values/parameters needed to perform the experiment and analyzed the data for my group</li>
        </ul>

        <h3>Could you have performed this experiment by yourself?</h3>
        <p>NO: Because I will not be able to take my readings accurately without guidance or external help to verify the accuracy of the readings/results</p>

        <h3>Comment on the experimental procedure  to justify its suitability for accuracy of results and time saving:</h3>
        <p>The use of precise instruments, such as the cam and follower mechanism and dial gauge, minimizes errors in measurements and enhances repeatability. Following a step-by-step procedure allows for logical data collection, reducing confusion and ensuring that critical steps are not overlooked. The design and execution of the experiment focus on precise measurements, logical flow, and relevance to practical applications, making it effective in achieving its objectives. Below is an evaluation of its suitability based on its methodology and outcomes. he experiment's accuracy is ensured through the use of a well-structured setup. Instruments such as the cam and follower mechanism, along with the dial gauge, are integral to obtaining precise and reliable measurements. The cam and follower mechanism is inherently designed to demonstrate the principles of converting rotational motion into reciprocating or oscillating motion, providing a clear and measurable output. Additionally, the inclusion of calibrated tools minimizes the possibility of measurement errors and enhances the reproducibility of the results</p>

        <h3>What was the most difficult aspect of the experiment?</h3>
        <ul>
            <li>The most difficult aspect was setting up the required meticulous adjustments to the dial gauge to measure the follower’s displacement accurately. Even slight misalignments could lead to errors, necessitating repeated adjustments to achieve the desired accuracy</li>
            <li>The most difficult part was minimizing friction. External factors such as friction, wear in the cam and follower components, and human error during setup and operation posed additional challenges. These factors had to be accounted for to ensure that the results closely matched theoretical expectations.</li>
        </ul>

        <h3>Name and describe alternative apparatus or method you know can be used to perform this same experiment:</h3>
        <p>Universal Cam Mechanism Apparatus - This apparatus is specifically designed for studying cam and follower mechanisms. It consists of various cams (e.g., radial, tangent, or eccentric cams) and followers of different shapes (e.g., flat-faced, knife-edge, or roller followers). The setup often includes a motor to drive the cam and a dial gauge to measure the displacement of the follower.</p>

        <h3>List of Parameters required in this experiment:</h3>
        <ul>
            <li>Displacement (m)</li>
            <li>Angle in degrees (°)</li>
        </ul>

        <h3>Briefly discuss one measuring instruments used:</h3>
        <ul>
            <li>Dial gauge:  is a precise measuring tool designed to measure small linear movements, deviations, or deflections in machine components or surfaces. It is commonly utilized in mechanical engineering, manufacturing, and quality assurance applications. It measures the Displacement in metres</li>
            <li>Protractor Scale: Used to measure angles in degrees</li>
        </ul>

        <h3>Practical relevance/applications:</h3>
        <ul>
            <li>The experiment involving the cam and follower mechanism is not only a crucial learning tool in mechanical engineering but also has significant practical applications across various industries and technologies. Understanding the principles behind this mechanism is essential for its implementation in real-world systems that require precise motion control, including automotive engines, robotics, manufacturing, hydraulic systems, and medical devices. The knowledge gained from the experiment leads to enhanced efficiency and performance in these fields.</li>
            <li>One of the key applications of the cam and follower mechanism is in automotive engines, where it plays a critical role in regulating the timing of engine valves. The camshaft, driven by the cam and follower system, controls the opening and closing of intake and exhaust valves. This precise control ensures smooth engine operation, optimizing fuel combustion and improving fuel efficiency while reducing emissions. Without the cam mechanism, the timing of these vital engine functions would be less reliable, negatively affecting engine performance and longevity</li>
            <li>In robotics and automation, cam and follower systems are employed to convert rotational motion into accurate linear or oscillatory movements. These mechanisms are essential in enabling robots to carry out repetitive tasks such as assembly, material handling, and packaging with high precision. The efficiency provided by these systems supports the automation of various industrial processes, reducing labor costs and boosting production speed in industries like manufacturing and logistics.</li>
        </ul>

        <h3>Course section relation:</h3>
        <ul>
            <li>Mechanics of Machines</li>
            <li>Simple Harmonic Motion</li>
        </ul>

        <h3>List the suggestions you made while carrying out the experiment:</h3>
        <ul>
            <li> I suggested that one person should turning the dial while another person should count the revolutions.</li>
            <li> I suggested that they should be double-checking the alignment of the cam and follower to avoid measurement errors due to misalignment. Proper alignment is crucial for accurate displacement readings.</li>
        </ul>

        <h3>List the suggestions made by the members of your group which helped the group during the experiment:</h3>
        <ul>
            <li>We suggested that we should modify the cam's rotation speed to ensure smoother follower movement, preventing it from jerking or skipping positions. This contributed to maintaining consistency in the measurements.</li>
            <li>-We suggested that we take check the cam and follower surfaces for wear or damage before beginning the experiment. This ensured that the mechanism would operate smoothly and without any interference caused by surface imperfections.</li>
        </ul>

        <h3>Did you put down the experimental results in your book at the time of the experiment or you copied from your group members?:</h3>
        <p>YES:I put down the results at the time of the experiment to avoid copying or write down wrong values later  <strong>OR</strong> I recorded the experiment results in my workbook at the time of the experiment to ensure accuracy and prevents errors that may occur when relying on others later or memory.</p>

        <h3>Discuss anything that interested you most during the experiment:</h3>
        <ul>
            <li>What fascinated me most during the experiment was seeing how the cam and follower mechanism converted rotational motion into precise linear or oscillatory movement. It was remarkable to observe how such a simple mechanical system could produce complex motions that play a key role in many real-world applications, such as engine valve timing and robotic systems.</li>
            <li>I was especially intrigued by how different cam profiles affected the follower’s motion. By altering the cam’s shape, we could notice significant changes in the follower’s movement, including variations in speed, displacement, and acceleration. This underscored the critical role of cam design in engineering, as even small adjustments to the cam profile can have a major impact on the performance of a system.</li>
        </ul>

        <h3>Did you come to the laboratory with the laboratory manual during the performance of the experiment?</h3>
        <p>YES:  because it is required for me to follow up with the practical</p>
    </div>
`;
main.appendChild(qaSection);

// ...existing code...

    // References Section
    const referencesSection = document.createElement('section');
    referencesSection.innerHTML = `
        <h2>REFERENCES</h2>
        <ul>
            <li>Shigley, J. E., Uicker, J. J. (2011). Theory of Machines and Mechanisms. 4th Edition, McGraw-Hill</li>
            <li>Smith, M. R. (2014). Mechanisms and Machine Theory. Pearson Education</li>
        </ul>
    `;
    main.appendChild(referencesSection);

    const hover = createHover('#');
    main.appendChild(hover);
    const download = createDownload('#');
    main.appendChild(download);
};

const displayConicalPendulum = () => {
    const main = reset();

    // Header
    const header = document.createElement('h1');
    header.textContent = 'The Conical Pendulum {AM225}';
    main.appendChild(header);

    // Theory Section
    const theorySection = document.createElement('section');
    theorySection.innerHTML = `
        <h2>THEORY</h2>
        <p>A pendulum is a weight suspended from a fixed point so that it can swing freely back and forth under the influence of gravity. The pendulum swings due to the force of gravity, which pulls the bob towards the equilibrium position (lowest point of the swing). The motion is periodic, meaning it repeats itself in a regular cycle. The time period of a pendulum is the time it takes for the bob to complete one full swing back and forth.</p>
        <p>A conical pendulum is a type of pendulum in which a mass (called the bob) is attached to a string or rod of fixed length and moves in a horizontal circular path, making the string trace the surface of a cone. Structure of the Conical Pendulum includes : The bob is the mass at the end of the string, the string or rod is inextensible and of fixed length, the bob rotates in a horizontal circle, and the string makes a constant angle with the vertical axis. They are used in clocks and other timing devices, and also used to demonstrate the principles of circular motion and dynamics. The essence of this conical pendulum experiment is that it is a practical way to study uniform circular motion, centripetal force, and the relationship between various physical quantities such as tension, radius, and angular velocity.</p>
        <h3>Structure of the Conical Pendulum:</h3>
        <ul>
            <li>The bob is the mass at the end of the string</li>
            <li>The string or rod is inextensible and of fixed length</li>
            <li>The bob rotates in a horizontal circle</li>
            <li>The string makes a constant angle with the vertical axis</li>
        </ul>
    `;
    main.appendChild(theorySection);

    // Apparatus Section
    const apparatusSection = document.createElement('section');
    apparatusSection.innerHTML = `
        <h2>APPARATUS</h2>
        <ul>
            <li><div><p>Stop watch</p><img src=${pic12}></div></li>
            <li><div><p>Metre stick/Ruler</p><img src=${pic13}></div></li>
            <li><div><p>Rigid stand</p><img src=${pic14}></div></li>
            <li><div><p>Protractor Scale</p><img src=${pic9}></div></li>
            <li><div><p>Mass bob</p><img src=${pic15}></div></li>
        </ul>
    `;
    main.appendChild(apparatusSection);

    // Results Section with Videos
    const resultsSection = document.createElement('section');
    resultsSection.innerHTML = `
        <h2>RESULTS</h2>
        <p>Below are youtube videos that illustrate the procedures for the conical pendulum experiment</p>
        <div class="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/tBu8sBJ3ER0" frameborder="0" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/0CaWx_ghSbI" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="table-container">
            <div><strong>NOTE: this is an example of how the table looks like not the actual table input the values calculated or gotten from the experiment into the tables under each column correctly</strong></div>
            <h3>TABLE OF RESULTS</h3>
            <table>
                <thead>
                    <tr>
                        <th>S/N</th>
                        <th>θ</th>
                        <th>L (mm)</th>
                        <th>h (m)</th>
                        <th>1/h (m)</th>
                        <th>N</th>
                        <th>W</th>
                        <th>W<sup>2</sup></th>
                    </tr>
                </thead>
                <tbody>
                    <!-- To be filled with experimental data -->
                    <tr>
                        <td>1</td>
                        <td>40<sup>o</sup></td>
                        <td>230</td>
                        <td>0.1761</td>
                        <td>5.675</td>
                        <td>70</td>
                        <td>7.331</td>
                        <td>53.94</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>50<sup>o</sup></td>
                        <td>230</td>
                        <td>0.1478</td>
                        <td>6.705</td>
                        <td>80</td>
                        <td>8.378</td>
                        <td>70.19</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>60<sup>o</sup></td>
                        <td>230</td>
                        <td>0.1159</td>
                        <td>8.694</td>
                        <td>90</td>
                        <td>9.426</td>
                        <td>88.849</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>70<sup>o</sup></td>
                        <td>230</td>
                        <td>0.0786</td>
                        <td>12.427</td>
                        <td>105</td>
                        <td>10.997</td>
                        <td>120.494</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>80<sup>o</sup></td>
                        <td>230</td>
                        <td>0.0384</td>
                        <td>25.062</td>
                        <td>145</td>
                        <td>15.186</td>
                        <td>230.484</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
    main.appendChild(resultsSection);

    // Analysis Section
    const analysisSection = document.createElement('section');
    analysisSection.innerHTML = `
        <h2>ANALYSIS</h2>
        <div class="formulas">
            <h3>Formula 1:</h3>
            <p>h = L Cos θ</p>
            <p>where:</p>
            <ul>
                <li>h = Height</li>
                <li>L = Length of Pendulum (cm)</li>
                <li>θ = Inclination of pendulum with vertical axis (°)</li>
            </ul>

            <h3>Formula 2:</h3>
            <p>Tan θ = W²r / g</p>
            <p>where:</p>
            <ul>
                <li>W² = Square of angular velocity of the bob</li>
                <li>r = radius</li>
                <li>g = acceleration due to gravity</li>
                <li>θ = Inclination of pendulum with vertical axis (°)</li>
            </ul>
        </div>

        <div class="observations">
            <h3>OBSERVATIONS AND PRECAUTIONS</h3>
            <table>
                <thead>
                    <tr>
                        <th>OBSERVATIONS</th>
                        <th>PRECAUTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>I observed that the pendulum's bob travels at a steady speed in a horizontal circular path</td>
                        <td>I ensured that the angle of elevation between the string and the vertical was measured precisely so that the calculation of forces won't be wrong</td>
                    </tr>
                    <tr>
                        <td>I observed that as the pendulum swings, the angle between the string and the vertical axis stays constant, indicating a consistent circular motion</td>
                        <td>I ensured that the length of the string remained constant and was measured accurately before the experiment</td>
                    </tr>
                    <tr>
                        <td>I observed that the length of the string and the gravitational acceleration determine how long it takes for one full revolution, or period, which is measured by the duration of a whole rotation</td>
                        <td>I ensured that the point of attachment of the pendulum was stable to prevent any wobbling or shifting during the experiment</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
    main.appendChild(analysisSection);

    // Graphs Section
    const graphsSection = document.createElement('section');
    graphsSection.innerHTML = `
        <h2>GRAPHS</h2>
        <p>Below is a youtube video on how to draw a graph</p>
        <div class="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/9kJ5vyfW0n4" frameborder="0" allowfullscreen></iframe>
        </div>
        <h3>GRAPH OF W² AGAINST 1/H</h3>
        <div class="graph-container">
            <!-- Graph placeholder -->
            <img src=${pic16}>
        </div>
    `;
    main.appendChild(graphsSection);

    // Discussion Section
    const discussionSection = document.createElement('section');
    discussionSection.innerHTML = `
        <h2>DISCUSSION</h2>
        <ul>
            <li>Measurements that are inaccurate: Length of the String: Inaccurate measurements of the pendulum string's length will result in inaccurate calculations of the centripetal force and the radius of the circular path. Time Period (T): The derived frequency and angular velocity are impacted by inaccurate oscillation timing, which can be caused by human reaction time or counting errors. Angle of Inclination (θ): If the observer is not at eye level, parallax errors may be introduced while estimating the angle between the string and the vertical axis.</li>
            <li>Resistance of the Air: Air resistance-induced drag forces have the potential to attenuate motion and lower tangential velocity, deviating from theoretical predictions</li>
            <li>-Elasticity of the String: If the string stretches during the experiment, the effective length varies, altering the radius and the tension force</li>
        </ul>
    `;
    main.appendChild(discussionSection);

    // Conclusion Section
    const conclusionSection = document.createElement('section');
    conclusionSection.innerHTML = `
        <h2>CONCLUSION</h2>
        <p>At the end of this experiment, we were able to calculate the acceleration due to gravity and also investigate the variation in height of a conical pendulum with change of speed.At the end of this experiment, we were able to calculate the acceleration due to gravity and also investigate the variation in height of a conical pendulum with change of speed.</p>
    `;
    main.appendChild(conclusionSection);

    // Q&A Section with all questions and answers
    const qaSection = document.createElement('section');
    qaSection.innerHTML = `
        <h2>SECTION B (QUESTIONS)</h2>
        <div class="qa-container">
            <!-- All Q&A content as in the original text -->
            <h3>What have you gained from this experiment?</h3>
            <ul>
                <li>The experiment illustrates the fundamentals of circular motion, specifically the connection between the pendulum's forces, radius, and angular velocity. It facilitates comprehension of how the string stays at an angle as the object travels in a horizontal circle.</li>
                <li>I learnt the experiment provides an opportunity to apply and verify mathematical formulas related to circular motion, such as the tension in the string, the angle of inclination, and the period of revolution.</li>
            </ul>
            <h3>What Role Did You Play During The Experiment:</h3>
            <ul>
                <li>I took the measurement of the length of the string</li>
                <li>I was responsible for adjusting or controlling the motion of the pendulum, ensuring that it moves steadily in a horizontal circle without significant oscillations or deviation.</li>
            </ul>
            <h3> Could You Have Performed This Experiment By Yourself:</h3>
            <p>NO: Because I will not be able to take my readings accurately without guidance or external help to verify the accuracy of the readings/result</p>
            <h3>Comment On The Experimental Procedure To Justify Its Suitability For Accuracy Of Results And Time Saving:</h3>
            <p>The conical pendulum experiment is a tried-and-true technique that provides accurate findings and efficient time management, making it a useful tool for researching forces and circular motion. From setup to data collection and analysis, the experiment's process is crucial to guaranteeing accurate results while cutting down on the amount of time needed to complete the experiment. A key factor in achieving accurate results is the precise setup of the apparatus. The pendulum is securely fixed at a stable point, and the string's length is measured with precision, minimizing errors due to instability or inconsistencies. By ensuring that the pendulum moves in a consistent and controlled manner, the experiment effectively isolates critical variables, such as the angle of inclination and the period of one complete revolution. This well-structured setup reduces the impact of external factors like air resistance or surface irregularities, which might otherwise distort the results. The experimental procedure for the conical pendulum is well-suited for both accuracy and time efficiency. Its straightforward setup, use of simple measurement tools, and controlled variables ensure reliable results. Additionally, the process of collecting and analyzing data is quick and efficient, making it a practical choice for obtaining accurate results within a limited timeframe.</p>
            <!-- Continue with all other Q&A pairs -->
            <h3>What Was The Most Difficult Aspect Of The Experiment?</h3>
            <ul>
                <li>One of the key variables in the experiment is the angle of inclination of the string. Ensuring that the angle remains constant throughout the motion of the pendulum can be tricky. Small disturbances, such as air currents or slight adjustments in the string's length, can cause variations in the angle, which may lead to inaccurate measurements.</li>
                <li>One of the most difficult part of the experiment was to yield accurate results, and to do that, the pendulum must move in a consistent horizontal circle. This requires precise control of the string's tension and the pendulum's speed. Even minor variations in the force acting on the pendulum or slight changes in the bob's position can disturb the circular motion, complicating the accurate measurement of the radius and period</li>
            </ul>
            <h3>What Was The Most Difficult Aspect Of The Experiment?</h3>
            <ul>
                <li>One of the key variables in the experiment is the angle of inclination of the string. Ensuring that the angle remains constant throughout the motion of the pendulum can be tricky. Small disturbances, such as air currents or slight adjustments in the string's length, can cause variations in the angle, which may lead to inaccurate measurements.</li>
                <li>One of the most difficult part of the experiment was to yield accurate results, and to do that, the pendulum must move in a consistent horizontal circle. This requires precise control of the string's tension and the pendulum's speed. Even minor variations in the force acting on the pendulum or slight changes in the bob's position can disturb the circular motion, complicating the accurate measurement of the radius and period.</li>
            </ul>

            <h3>Name And Describe Any Apparatus Or Method You Know Can Be Used To Perform This Same Experiment:</h3>
            <h4>Traditional Conical Pendulum Setup (Standard Method)</h4>
            <h4>Apparatus Used:</h4>
            <ul>
                <li>String: A lightweight and durable material, such as nylon or cotton thread, is used to suspend the pendulum bob.</li>
                <li>Pendulum Bob: A small mass, often a spherical object like a metal or plastic ball, is attached to the string.</li>
                <li>Support Stand: A stable fixture, such as a rod or clamp, holds the string securely. The stand is typically mounted on a sturdy base to reduce vibrations</li>
                <li>Protractor: Used to measure the angle between the string and the vertical axis.</li>
                <li>Stopwatch: A precise timing device is used to record the duration of one complete revolution (the period).</li>
                <li>Ruler or Measuring Tape: Used to determine the radius of the pendulum's circular path.</li>
            </ul>
            <h4>Method:</h4>
            <p>The pendulum is set in motion to trace a horizontal circular path. The angle between the string and the vertical is measured using a protractor, and the period of the pendulum's motion is recorded with a stopwatch. Additionally, the radius of the circular trajectory is measured for further calculations.</p>

            <h3>List The Parameters Required In This Experiment:</h3>
            <ul>
                <li>Length (mm)</li>
                <li>Angle in degrees (°)</li>
                <li>Mass (kg)</li>
                <li>Period (s)</li>
                <li>Acceleration due to gravity (g)</li>
            </ul>

            <h3>Briefly Discuss One Measuring Instrument Used In This Experiment:</h3>
            <ul>
                <li>Protractor Scale: is used to measure the angle of inclination in degrees</li>
                <li>Meter rule: use to calculate the length of the string.</li>
            </ul>

            <h3>Discuss Briefly The Practical Relevance/Application Of The Experiment:</h3>
            <p>The conical pendulum experiment is most directly applicable in studying rotational motion and the forces acting on objects in circular motion. It offers a practical understanding of the need for centripetal force to sustain circular movement. This knowledge is vital in designing various mechanical systems. For instance, centrifuges in laboratories and industries use rotational motion to separate substances by density. Similarly, the principles learned from the conical pendulum are applied in flywheels and gears, which are essential components in engines and machinery, to determine the forces required for maintaining stability and ensuring efficient operation. the conical pendulum experiment has widespread practical applications across a range of disciplines. It is essential for understanding rotational motion, centripetal forces, and the dynamics of circular paths. The experiment's principles are applied in designing rotating machinery, satellite orbits, amusement rides, and gyroscopic systems, all of which play significant roles in technology and industry. Additionally, it serves as a valuable educational tool, helping students grasp complex physics concepts in a hands-on and interactive way. Through its diverse applications, the conical pendulum experiment continues to offer insights that are fundamental to both scientific research and practical engineering</p>

            <h3>State The Section Of The Course That The Experiment Best Relates:</h3>
            <ul>
                <li>Rotational Dynamics/Circular Motion</li>
                <li>Mechanics</li>
            </ul>

            <h3>List The Suggestions You Made While Carrying Out The Experiment:</h3>
            <ul>
                <li>I suggested that the String is tensioned Properly to ensure the string is taut before starting the experiment to avoid any slack, which could lead to inaccuracies in the measurements of the angle or radius.</li>
                <li>I suggested that the angle should be measures accurately to make sure to use a precise instrument like a protractor or a digital inclinometer to measure the angle of inclination (θ) accurately. Small variations in the angle can lead to significant errors in calculating the radius or centripetal force.</li>
            </ul>

            <h3>List The Suggestions Made By The Members Of Your Group:</h3>
            <ul>
                <li>We suggested that we measure the period multiple times to ensure accuracy, and calculate the average. This helps eliminate any inconsistencies or timing errors.</li>
                <li>We suggested that two of the members of the group should take the results of the readings to avoid wrong values.</li>
            </ul>

            <h3>Did You Put Down The Experimental Results In Your Book At The Time Of The Experiment?:</h3>
            <p>YES: I put down the results at the time of the experiment to avoid copying or write down wrong values later OR I recorded the experiment results in my workbook at the time of the experiment to ensure accuracy and prevents errors that may occur when relying on others later or memory.</p>

            <h3>Discuss Anything That Interested You Most During The Experiment:</h3>
            <ul>
                <li>One of the most captivating parts of the conical pendulum experiment was witnessing how centripetal and gravitational forces work together to sustain circular motion. It was intriguing to see how these forces counterbalance each other, with the tension in the string having both vertical and horizontal components. The way the pendulum bob followed a smooth, circular path, while the string remained at a fixed angle, was visually impressive and helped clarify the abstract concept of forces in circular motion.</li>
                <li>Another fascinating aspect of the experiment was exploring the connection between the string length and the radius of the circular path. It was interesting to observe how altering the string length directly influenced the radius of the pendulum's motion and, in turn, affected the force calculations. The mathematical relationship between these physical variables highlighted the importance of precision in measuring angles, length, and time to achieve accurate results.</li>
            </ul>

            <h3>Did You Come To The Laboratory With The Laboratory Manual?:</h3>
            <p>YES: because it is required for me to follow up with the practical</p>
        </div>
    `;
    main.appendChild(qaSection);

    // References Section
    const referencesSection = document.createElement('section');
    referencesSection.innerHTML = `
        <h2>REFERENCES</h2>
        <ul>
            <li>Introduction to Mechanics and Symmetry by Marsden and Ratiu</li>
            <li>Classical Mechanics by Herbert Goldstein</li>
        </ul>
    `;
    main.appendChild(referencesSection);

    const hover = createHover('#');
    main.appendChild(hover);
    const download = createDownload('#');
    main.appendChild(download);
};
const displayFlywheel = () => {
    const main = reset();

    // Header
    const header = document.createElement('h1');
    header.textContent = 'Flywheels and Falling Weight {AM229}';
    main.appendChild(header);

    // Theory Section
    const theorySection = document.createElement('section');
    theorySection.innerHTML = `
        <h2>THEORY</h2>
        <p>A flywheel is a rotating mechanical device designed to store rotational energy. It usually consists of a heavy wheel or disc that rotates on an axle. The energy is stored as kinetic energy, which depends on both the rotational speed and the flywheel's mass</p>
        <p>Flywheels are often used in systems that need a consistent, steady energy supply, such as in engines, power plants, and certain energy storage applications. A falling weight system utilizes the potential energy of a weight that descends due to gravity. As the weight drops, it transfers energy via a mechanical connection, commonly winding a rope or moving a lever. This system can be employed for lifting, performing mechanical tasks, or generating power.</p>
        <p>A flywheel and falling weight experiment can be designed to study the conversion of potential energy (from the falling weight) into rotational kinetic energy (in the flywheel) and the efficiency of the energy transfer.</p>
    `;
    main.appendChild(theorySection);

    // Apparatus Section
    const apparatusSection = document.createElement('section');
    apparatusSection.innerHTML = `
        <h2>APPARATUS</h2>
        <ul>
            <li><div><p>Hanger</p><img src=${pic17}></div></li>
            <li><div><p>Weights</p><img src=${pic18}></div></li>
            <li><div><p>Stop watch</p><img src=${pic12}></div></li>
            <li><div><p>Protractor scale</p><img src=${pic9}></div></li>
            <li><div><p>Metre rule</p><img src=${pic13}></div></li>
            <li><div><p>Pulley</p><img src=${pic19}></div></li>
        </ul>
    `;
    main.appendChild(apparatusSection);

    // Results Section with Video
    const resultsSection = document.createElement('section');
    resultsSection.innerHTML = `
        <h2>RESULTS</h2>
        <p>Below is a youtube video that illustrates the procedures for the Flywheels and falling weight experiment</p>
        <div class="video-container">
            <iframe src="https://www.youtube.com/embed/BfttOey8n2E" frameborder="0" allowfullscreen></iframe>
        </div>
        <div><strong>NOTE: this is an example of how the table looks like not the actual table input the values calculated or gotten from the experiment into the tables under each column correctly.</strong></div>
        <h3>TABLE OF RESULTS</h3>
        <div class="tables-container">
            <table>
                <caption>Flywheel Table</caption>
                <thead>
                    <tr>
                        <th>Mass (kg)</th>
                        <th>Ascending Time (sec)</th>
                        <th>Descending Time (sec)</th>
                        <th>No of rev ascending</th>
                        <th>No of rev descending</th>
                        <th>Acceleration (m/s²)</th>
                        <th>K</th>
                        <th>Height (m)</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- To be filled with experimental data -->
                    <tr>
                        <td>1kg</td>
                        <td>8.96</th>
                        <td>9.93</td>
                        <td>4</td>
                        <td>7</td>
                        <td>0.02</td>
                        <td> </td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>2kg</td>
                        <td>6.64</th>
                        <td>6.38</td>
                        <td>6</td>
                        <td>8</td>
                        <td>0.049</td>
                        <td> </td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>3kg</td>
                        <td>5.24</th>
                        <td>5.53</td>
                        <td>6</td>
                        <td>8</td>
                        <td>0.065</td>
                        <td> </td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>4kg</td>
                        <td>5.50</th>
                        <td>4.60</td>
                        <td>7</td>
                        <td>7</td>
                        <td>0.095</td>
                        <td> </td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>5kg</td>
                        <td>4.70</th>
                        <td>4.25</td>
                        <td>6</td>
                        <td>7</td>
                        <td>0.11</td>
                        <td> </td>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>
            <table>
                <caption>Falling Weight Table</caption>
                <thead>
                    <tr>
                        <th>Mass</th>
                        <th>Time (s)</th>
                        <th>No of Revolutions</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- To be filled with experimental data -->
                    <tr>
                        <td>1kg</td>
                        <td>8.29</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>2kg</td>
                        <td>5.68</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>3kg</td>
                        <td>4.55</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>4kg</td>
                        <td>3.95</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>5kg</td>
                        <td>3.52</td>
                        <td>6</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
    main.appendChild(resultsSection);

    const analysisSection = document.createElement('section');
    analysisSection.innerHTML = `
        <h2>ANALYSIS</h2>
        <div class="formulas">
            <p>a = 2 * h/t<sup>2</sup></p>
            <p>where:</p>
            <ul>
                <li>h = Height</li>
                <li>a = Acceleration</li>
                <li>t = Descending time</li>
            </ul>
        </div>

        <div class="observations">
            <h3>OBSERVATIONS AND PRECAUTIONS</h3>
            <table>
                <thead>
                    <tr>
                        <th>OBSERVATIONS</th>
                        <th>PRECAUTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>I observed that the number of revolutions for the falling weight remained constant</td>
                        <td>I ensured that the axil was lubricated</td>
                    </tr>
                    <tr>
                        <td>I observed that as the weight falls, its potential energy decreases while the flywheel's rotational kinetic energy increases</td>
                        <td>I ensured that the cord is well arranged on the axil when rotating</td>
                    </tr>
                    <tr>
                        <td>I observed that when increasing the mass of the falling weight increases the potential energy, leading to a faster rotation of the flywheel</td>
                        <td>I ensured that I avoided error due to parallax when taking the readings</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
    main.appendChild(analysisSection);

    // Graphs Section
    const graphsSection = document.createElement('section');
    graphsSection.innerHTML = `
        <h2>GRAPHS</h2>
        <p><strong>NOTE: Graph of Acceleration against weight</strong></p>
        <p>Below is a youtube video on how to draw a graph</p>
        <div class="video-container">
            <iframe src="https://www.youtube.com/embed/9kJ5vyfW0n4" frameborder="0" allowfullscreen></iframe>
        </div>
        
    `;
    main.appendChild(graphsSection);


    // Discussion Section
    const discussionSection = document.createElement('section');
    discussionSection.innerHTML = `
        <h2>DISCUSSION</h2>
        <p>Friction can cause errors. Energy losses due to friction at the flywheel's axle, the pulley, and the contact between the string and the pulley reduce the amount of energy transferred to the flywheel. As a result, the rotational kinetic energy of the flywheel is less than the potential energy initially calculated for the falling weight. Even with energy losses from friction and other sources, the outcomes should adhere to the principle of energy conservation. The total of the flywheel’s rotational kinetic energy plus the energy lost (for example, to friction) should roughly equal the potential energy of the falling weight.</p>
        <p>Inaccurate measurements can cause errors. Inaccuracies in measuring the height of the falling weight, its mass, or the angular velocity (ω) of the flywheel can result in errors in energy calculations. Additionally, timing errors, particularly when using manual tools such as a stopwatch, can further compromise the reliability of the data. Although the theoretical energy values may differ from the experimental results due to losses and assumptions, the observed trends—such as increased energy input resulting in higher angular velocity—should match theoretical expectations, validating the experiment's findings</p>
    `;
    main.appendChild(discussionSection);

    // Conclusion Section
    const conclusionSection = document.createElement('section');
    conclusionSection.innerHTML = `
        <h2>CONCLUSION</h2>
        <p>At the end of this experiment, we determined the moment of inertia of a flywheel and to use this to verify Newton’s laws as applied in this case. This experiment demonstrates the principle of energy conservation, where the potential energy of the falling weight is converted into the rotational kinetic energy of the flywheel and energy lost due to friction and other factors</p>
    `;
    main.appendChild(conclusionSection);

    // Q&A Section with all questions and answers
    const qaSection = document.createElement('section');
    qaSection.innerHTML = `
        <h2>SECTION B (QUESTIONS)</h2>
        <div class="qa-container">
            <!-- All Q&A content as in the original text -->
            <h3>What have you gained from this experiment?</h3>
            <ul>
                <li>I have gained a deeper understanding of the principle of energy conservation and how potential energy is transformed into rotational kinetic energy</li>
                <li>I have also learned about the effects of friction and other losses on energy transfer, as well as the challenges associated with accurate measurements</li>
                <li>I have also acquired knowledge about how flywheels are used in practical scenarios, such as energy storage, mechanical clocks, and automotive systems, enhancing an appreciation for the engineering significance of such devices.</li>
            </ul>
            <h3>What Role Did You Play During The Experiment:</h3>
            <ul>
                <li>I Observed if there are any irregularities or issues (e.g., friction, rope slippage, or air resistance) that might have affected the accuracy of the results.</li>
                <li>I collected the data by writing down the values/parameters needed to perform the experiment and analyzed the data for my group </li>
            </ul>
            <h3> Could You Have Performed This Experiment By Yourself:</h3>
            <p>NO: Because I will not be able to take my readings accurately without guidance or external help to verify the accuracy of the readings/results</p>
            <p><strong>NOTE:</strong> if you feel otherwise you can answer yes.</p>
            <h3>Comment On The Experimental Procedure To Justify Its Suitability For Accuracy Of Results And Time Saving:</h3>
            <p>The use of proper measurement tools plays a crucial role in ensuring the accuracy of the experiment. The procedure suggests using a protractor or angular velocity sensor to measure the flywheel's rotational speed, minimizing human error and ensuring precise data collection. Additionally, tools such as a scale for measuring weight and a ruler for determining height provide the necessary accuracy for reliable energy calculations. A stopwatch is also included to accurately time the fall of the weight, which is essential for determining accurate energy transfer rates. The experimental procedure is also well-suited for time efficiency. The setup is relatively simple and does not require complex or specialized equipment. Basic components, such as a pulley, flywheel, and weight, are sufficient for conducting the experiment. This simplicity allows the experiment to be set up quickly, minimizing the time required for preparation. Moreover, the clear guidelines provided in the procedure reduce the likelihood of errors during setup, ensuring that the experiment can proceed smoothly without unnecessary delays. Furthermore, the analysis phase is simple and efficient. Comparing potential energy with rotational kinetic energy involves basic calculations, and the results can be quickly interpreted to evaluate the system's efficiency. The experiment avoids complex or time-consuming analysis, allowing more time for meaningful interpretation rather than extensive data processing.</p>
            <!-- Continue with all other Q&A pairs -->
            <h3>What Was The Most Difficult Aspect Of The Experiment?</h3>
            <ul>
                <li>One of the key variables in the experiment is the angle of inclination of the string. Ensuring that the angle remains constant throughout the motion of the pendulum can be tricky. Small disturbances, such as air currents or slight adjustments in the string's length, can cause variations in the angle, which may lead to inaccurate measurements.</li>
                <li>One of the most difficult part of the experiment was to yield accurate results, and to do that, the pendulum must move in a consistent horizontal circle. This requires precise control of the string's tension and the pendulum's speed. Even minor variations in the force acting on the pendulum or slight changes in the bob's position can disturb the circular motion, complicating the accurate measurement of the radius and period</li>
            </ul>
            <h3>What Was The Most Difficult Aspect Of The Experiment?</h3>
            <ul>
                <li>The most difficult aspect was managing the measurement inaccuracies, particularly with timing and the potential for friction losses</li>
                <li>The most difficult part was accurately timing the fall of the weight using a stopwatch was challenging, as even slight delays could impact the results.</li>
            </ul>
            <p><strong>In conclusion:</strong> the most challenging aspect of the experiment is controlling external factors, particularly friction and air resistance, as well as ensuring precise measurements of angular velocity and rope dynamics. These sources of error add complexity to the experiment and make it difficult to obtain results that perfectly match theoretical predictions. Nonetheless, recognizing and managing these challenges is crucial for conducting accurate experiments in real-world scenarios.</p>
            <h3>Name And Describe Any Apparatus Or Method You Know Can Be Used To Perform This Same Experiment:</h3>
            <ul>
                <li>Ballistic Pendulum, brake dynometer, strain gauge etc</li>
                <li>Rotational Apparatus with a Flywheel: A rotational apparatus generally includes a flywheel mounted on a stationary axle, with a pulley system attached. The flywheel may take various forms, such as a disk or ring, and its mass distribution can differ. This setup facilitates the conversion of potential energy from a falling weight into rotational kinetic energy, simulating the intended system. The flywheel is linked to a rope that wraps around a pulley. A mass is attached to the free end of the rope, and the weight is released from a predetermined height. As the weight descends, it causes the flywheel to rotate. The motion is then monitored to determine the angular velocity, and the energy transfer between the falling weight and the rotating flywheel is analyzed.</li>
                <li>One apparatus that can be used to perform this experiment is a rotational motion sensor or angular velocity sensor. This device provides precise measurements of the flywheel's rotational speed, eliminating human error that can arise from manual methods such as using a protractor. Additionally, laser tachometers or optical encoders can be used to measure the flywheel's angular velocity with high accuracy.</li>
                

            <h3>List The Parameters Required In This Experiment:</h3>
            <ul>
                <li>Mass (kg)</li>
                <li>Radius of flywheel (m)</li>
                <li>Height of falling weight (m)</li>
                <li>Moment of Inertia</li>
            </ul>

            <h3>Briefly Discuss One Measuring Instrument Used In This Experiment:</h3>
            <ul>
                <li>Stop Watch: is used to measure the period/ time taken for the falling weight to descend and flywheel to rotate.</li>
            </ul>

            <h3>Discuss Briefly The Practical Relevance/Application Of The Experiment:</h3>
            <ul>
                <li>Flywheels are widely used for energy storage in modern systems, such as flywheel energy storage systems (FESS). In these systems, energy is stored in the form of rotational kinetic energy, which can later be converted back into electrical energy when needed. The experiment demonstrates the fundamental principles of how a falling weight (potential energy) can be converted into rotational energy, which is a concept used in flywheel energy storage applications</li>
                <li>Flywheels are commonly used in machinery and vehicles, including automobile engines and industrial machinery, to smooth out fluctuations in power delivery. The ability of a flywheel to store and release energy helps maintain consistent performance</li>
                <li>-The experiment helps illustrate key principles in rotational dynamics, such as the relationship between angular velocity, moment of inertia, and rotational kinetic energy. This understanding is applicable in fields ranging from mechanical engineering to robotics and aerospace engineering, where the precise control of rotational motion is crucial.</li>
            </ul>

            <h3>State The Section Of The Course That The Experiment Best Relates:</h3>
            <ul>
                <li>Work and Energy</li>
                <li>Rotational Dynamics</li>
                <li>-Mechanical Energy</li>
                <li>Conservation of Energy</li>
            </ul>

            <h3>List The Suggestions You Made While Carrying Out The Experiment:</h3>
            <ul>
                <li> I suggested that experiment be repeated more than once to minimize errors</li>
                <li>I suggested that the axle and pulley should be lubricated to reduce frictional losses, ensuring that as much of the potential energy as possible is converted into rotational kinetic energy rather than heat</li>
            </ul>

            <h3>List The Suggestions Made By The Members Of Your Group:</h3>
            <ul>
                <li>We suggested that the calculations should be cross checked if there are errors or not</li>
                <li>We suggested that we take check the equipment for wear or damage before beginning the experiment. This ensured that the mechanism would operate smoothly and without any interference caused by surface imperfections.</li>
            </ul>

            <h3>Did You Put Down The Experimental Results In Your Book At The Time Of The Experiment?:</h3>
            <p>YES:  I put down the results at the time of the experiment to avoid copying or write down wrong values later OR I recorded the experiment results in my workbook at the time of the experiment to ensure accuracy and prevents errors that may occur when relying on others later or memory.</p>

            <h3>Discuss Anything That Interested You Most During The Experiment:</h3>
            <ul>
                <li>What fascinated me most during the experiment was observing the conversion of potential energy of the falling weight into kinetic energy</li>
            </ul>

            <h3>Did You Come To The Laboratory With The Laboratory Manual?:</h3>
            <p>YES: because it is required for me to follow up with the practical</p>
        </div>
    `;
    main.appendChild(qaSection);
    
    
    // References Section
    const referencesSection = document.createElement('section');
    referencesSection.innerHTML = `
        <h2>REFERENCES</h2>
        <ul>
            <li>Introduction to Classical Mechanics by David Morin</li>
            <li>Engineering Mechanics: Dynamics by J.L. Meriam and L.G. Kraige</li>
        </ul>
    `;
    main.appendChild(referencesSection);
    const hover = createHover('#');
    main.appendChild(hover);
    const download = createDownload('#');
    main.appendChild(download);
};

const displayGears = () => {
    const main = reset();

    // Header
    const header = document.createElement('h1');
    header.textContent = 'Spur Gear Analysis {AM229}';
    main.appendChild(header);

    // Theory Section  
    const theorySection = document.createElement('section');
    theorySection.innerHTML = `
        <h2>THEORY</h2>
        <p>A gear is a revolving piece of machinery with cogs or teeth that mesh with another gear or toothed element to transfer motion and torque. A power source's speed, direction, and torque can be altered using gears, which are essential parts of mechanical systems. The teeth is precisely machined to ensure proper meshing with other gears. The gears are typically made of metal (e.g., steel, brass) or plastic, depending on application and load requirements. This experiment typically involves studying the operation, characteristics, and design of spur gears using pre-fabricated models (labelled A1 to A5). What this experiment entail is to study the design and functionality of spur gears, to analyse the gear ratio, speed ratio, torque transmission, and efficiency of the gear system, to understand different gear arrangements and their applications etc.</p>
        <p>It produces the change in torque, speed and duration of the power source. The gears in transmission are analogous to the wheels is a crossed, belt pulley system. When two gears mesh, if one gear is bigger than the other, a mechanical advantage is produced, with the relational speeds and the torques of the two gears differing in proportion to their diameters. Common types of gears include:</p>
        <ul>
            <li>Spur Gears: Straight teeth and parallel axes</li>
            <li>Helical Gears: Angled teeth for smoother motion and less noise</li>
            <li>Bevel Gears: Conical shape for transferring motion between perpendicular shafts</li>
            <li>Worm Gears: A Screw-like gear that engages with a toothed wheel for high torque reduction</li>
            <li>Rack and Pinion: Converts rotational motion to linear motion</li>
        </ul>
    `;
    main.appendChild(theorySection);

    // Apparatus Section
    const apparatusSection = document.createElement('section'); 
    apparatusSection.innerHTML = `
        <h2>APPARATUS</h2>
        <ul>
            <li><div><p>Single stage spur gear</p><img src=${pic20}></div></li>
            <li><div><p>Spur gear with idler</p><img src=${pic21}></div></li>
            <li><div><p>Compound gear</p><img src=${pic22}></div></li>
            <li><div><p>Worm gear</p><img src=${pic23}></div></li>
            <li><div><p>Bevel gear</p><img src=${pic24}></div></li>
        </ul>
        <>
          <img src=${pic25}>
          <img src=${pic26}>  
        </div>
    `;
    main.appendChild(apparatusSection);

    // Results Section
    const resultsSection = document.createElement('section');
    resultsSection.innerHTML = `
        <h2>RESULTS</h2>
        <p>Video demonstration on how the Automat Spur Gear Model experiment works</p>
        <div class="video-container">
            <iframe src="https://youtu.be/BfttOey8n2E" allowfullscreen></iframe>
        </div>
    `;
    main.appendChild(resultsSection);

    // Analysis Section
    const analysisSection = document.createElement('section');
    analysisSection.innerHTML = `
        <div>USING THE TABLE PROVIDED,APPLY THE FORMULA BELOW TO CALCULATE THEIR RESPECTIVE GEAR RATIO</div>
        <h2>ANALYSIS</h2>
        <p>Gear Ratio Formulas:</p>
        <ul>
            <li>Single stage spur gear: D1/D2</li>
            <li>Spur gear with idler: D1*D2/I1</li>
            <li>Compound gear: (D1/D2) * (I1/I2)</li>
            <li>Worm gear: D1/D2</li>
            <li>Bevel gear: D1/D2</li>
        </ul>
    `;
    main.appendChild(analysisSection);

    // ...existing code...

// Observations Section
const observationsSection = document.createElement('section');
observationsSection.innerHTML = `
    <h2>OBSERVATION AND PRECAUTIONS</h2>
    <div class="table-container">
        <table>
            <thead>
                <tr>
                    <th>Observation</th>
                    <th>Procedure</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>I observed that the torque of the gear is related to the number of teeth on the gear</td>
                    <td>I ensured that I handled the gear with care because of the sharp edges of the gear</td>
                </tr>
                <tr>
                    <td>I observed that the direction of rotation of the gear depends on the arrangement of the teeth</td>
                    <td>I ensured that the gears are in alignment to avoid excessive wear and tear</td>
                </tr>
                <tr>
                    <td>I observed that the friction between the gear teeth causes energy loss</td>
                    <td>I ensured that I didn't apply too much force to the gears so that the gears don't get damaged</td>
                </tr>
            </tbody>
        </table>
    </div>
`;
main.appendChild(observationsSection);

// ...existing code...

// Graphs Section
const graphsSection = document.createElement('section');
graphsSection.innerHTML = `
    <h2>GRAPHS</h2>
    <p>Tutorial on graph drawing:</p>
    <div class="video-container">
        <iframe src="https://youtu.be/9kJ5vyfW0n4" allowfullscreen></iframe>
    </div>
`;
main.appendChild(graphsSection);

// Discussion Section 
const discussionSection = document.createElement('section');
discussionSection.innerHTML = `
    <h2>DISCUSSION</h2>
    <h3>Sources of Error:</h3>
    <div class="error-sources">
        <h4>Misalignment of Shaft</h4>
        <p>can cause uneven load distribution, increased friction, and noise, leading to incorrect results. The driving and driven gears must be precisely aligned for gear systems to function. Any misalignment, whether brought on by setup problems or manufacturing flaws, might result in an unequal load distribution and more friction between the teeth. Higher wear rates, inefficiencies, and inaccurate performance metrics like torque and power transmission might arise from this. Additionally, misalignment can cause noise and vibrations, which can make interpreting data even more difficult.</p>

        <h4>Frictional Losses</h4>
        <p> Insufficient or excessive lubrication can alter the frictional forces between the gear teeth, affecting efficiency and wear results. In the spur gear experiment, the lubrication system is essential for lowering friction between the gear teeth. But too much or too little lubrication might have a big effect on the outcome. The results of the experiment may be distorted if there is insufficient lubrication since the increased friction could cause greater temperatures, more wear, and decreased efficiency. On the other hand, excessive lubrication may cause the system to behave unexpectedly, changing power losses and influencing how torque is transmitted between the gears.</p>

        <h4>Gear Manufacturing Defects</h4>
        <p>Inaccurate gear tooth profiles, surface roughness, or improper dimensions can affect meshing and performance. Manufacturing Defects in the gears themselves can also introduce errors in the experiment. Even slight imperfections in the gear teeth, such as incorrect tooth profiles, rough surfaces, or dimensional inaccuracies, can affect the meshing between gears. These defects can lead to increased friction, noise, and wear, which in turn can alter the performance characteristics being measured. Gear defects may also accelerate wear during testing, causing performance degradation over time and potentially skewing long-term observations.</p>
    </div>
`;
main.appendChild(discussionSection);

// Conclusion Section
const conclusionSection = document.createElement('section');
conclusionSection.innerHTML = `
    <h2>CONCLUSION</h2>
    <p>At the end of this experiment, we determined that the fundamental system principles including gear ratio, efficiency and torque speed relationships. The autonomous spur gear experiment offers important information about how gear systems behave and perform under various operating circumstances. Important variables like torque transmission, efficiency, vibration, noise, and wear patterns were tracked during the experiment, demonstrating how elements like backlash, lubrication, misalignment, and temperature impacts affect the gears' overall performance. The experiment provides vital information for enhancing operating procedures, lubrication systems, and gear design in practical applications by comprehending these behaviors.</p>
`;
main.appendChild(conclusionSection);

// Questions Section (Expanded)
const questionsSection = document.createElement('section');
questionsSection.innerHTML = `
    <h2>SECTION B (QUESTIONS)</h2>
    <div class="qa-container">
        <div class="question">
            <h3>What have you gained from this experiment?</h3>
            <ul>
                <li>I have gained a deeper understanding of how the spur gears transmit power, the relationship between input and output parameters, and the influence of gear design factors such as tooth profiles, material, and lubrication on efficiency and performance.</li>
                <li>I have also learned about how crucial it is for gear systems to have adequate alignment and little backlash. The longevity and performance of the gear train can be impacted by misalignment or excessive backlash, which can result in inefficiencies, higher wear, and unequal load distribution.</li>
                <li>I have also acquired knowledge about the working principles of the gear</li>
            </ul>
        </div>

        <div class="question">
            <h3>What role did you play during the experiment?</h3>
            <p>I counted the number of teeth the gears had manually</p>
        </div>

        <div class="question">
            <h3>Could you have performed this experiment by yourself?</h3>
            <p>NO: Because I will not be able to take my readings accurately without guidance or external help to verify the accuracy of the readings/results.</p>
        </div>

        <div class="question">
            <h3>Comment on experimental procedure's suitability for accuracy and time saving:</h3>
            <p>A crucial step in the process is verifying that all instruments and equipment are properly calibrated before beginning the experiment. This includes torque sensors, tachometers, and load cells. Calibration is vital for obtaining precise measurements, and the procedure should allocate enough time for this setup to ensure the instruments deliver reliable data throughout the experiment. Accuracy Justification: Proper calibration guarantees the reliability of the data, allowing for precise calculations of gear efficiency, torque transmission, and wear. Time Saving: While calibration may take some time initially, it prevents data collection errors that could necessitate repeating the experiment, ultimately saving time by reducing the chances of invalid results. It is a long procedure but the experiment require we count the teeth of the gear and for the Accuracy, there might be errors due to human tendencies.</p>
        </div>

        <div class="question">
            <h3>What was the most difficult aspect of the experiment?</h3>
            <ul>
                <li>The most difficult aspect of the automatic spur gear experiment likely revolves around ensuring precise alignment and minimizing gear backlash. This step is critical for the accuracy of the results, as even small misalignments or excessive backlash can introduce significant errors in torque measurement, gear efficiency, and wear patterns.</li>
                <li>Precise gear alignment is crucial for the success of the automatic spur gear experiment. The alignment of the gears impacts how their teeth mesh, which directly affects the efficiency of power transmission. Even slight misalignments can result in uneven load distribution, excessive wear, and increased friction, leading to inaccuracies in torque measurements and ultimately flawed conclusions about the gear's performance.</li>
                <li>The challenge arises from the fact that even minor misalignments—whether axial, angular, or radial—can significantly impact the experimental outcomes. Ensuring and maintaining precision throughout the experiment can be difficult, especially since the alignment must be checked and adjusted frequently. This process requires specialized tools, such as laser alignment devices, which must be used with care to avoid mistakes. Moreover, external factors like vibrations or temperature changes can alter the alignment over time, making it difficult to maintain the level of precision necessary for accurate data collection.</li>
            </ul>
        </div>

        <div class="question">
            <h3>Name and Describe any Apparatus or Methods you know can be used to perform this same experiment:</h3>
            <p>It can be done with the Flywheel experiment</p>
        </div>

        <div class="question">
            <h3>List the Parameters Required in this Experiment:</h3>
            <p>None were used</p>
        </div>

        <div class="question">
            <h3>Briefly Discuss one Measuring Instruments Used in this Experiment:</h3>
            <p>None were used</p>
        </div>

        <div class="question">
            <h3>Discuss Briefly the Practical relevance/applications of this Experiment:</h3>
            <ul>
                <li>In the automotive industry, spur gears are used in various components such as gearboxes, differential systems, and steering mechanisms. The results of the experiment help improve the efficiency and durability of automotive gear systems. Understanding the impact of alignment, backlash, and lubrication in spur gears can lead to better designs that reduce wear and energy loss, ultimately improving vehicle performance and fuel efficiency. </li>
                <li>Robotic systems frequently depend on gears for accurate movement and control. The automatic spur gear experiment offers valuable insights into the performance of gear systems under various load and operational conditions, helping engineers design more efficient and reliable robotic actuators and drive systems. This understanding is essential for applications that demand precise positioning and force control, such as robotic arms, drones, and automated manufacturing processes.</li>
            </ul>
        </div>

        <div class="question">
            <h3>State the section of the Course that the Experiment best relates:</h3>
            <p>Mechanics of Machines</p>
        </div>

        <div class="question">
            <h3>List the Suggestions You Made while Carrying out the Experiment:</h3>
            <ul>
                <li> I suggested that we draw the front view of the gear to avoid having multiple sides to deal with</li>
                <li>To prevent inaccuracies, I suggested that make sure the gears are correctly aligned (axially, radially, and angularly) before starting the experiment.</li>
            </ul>
        </div>

        <div class="question">
            <h3>List the Suggestions made by the Members of your Group which helped the Group during the Experiment:</h3>
            <ul>
                <li>We suggested that we examine the gears for signs of wear before starting the experiment to avoid potential inaccuracies due to damaged components.</li>
                <li>We suggested that we divide the tasks, such as checking the alignment and monitoring the data collection, to ensure efficient use of time and accurate results.</li>
            </ul>
        </div>

        <div class="question">
            <h3>Recording of Results:</h3>
            <p>YES: I recorded the experiment results in my workbook at the time of the experiment to ensure accuracy and prevents errors that may occur when relying on others later or memory.</p>
        </div>

        <div class="question">
            <h3>Discuss Anything that Interested you most during the Experiment:</h3>
            <p>One of the most fascinating discoveries during the experiment was the crucial impact of alignment on the performance of spur gears. It became clear that even small misalignments could cause significant issues, such as uneven load distribution, increased friction, and premature wear. Watching the gears in operation, I observed how even slight adjustments in alignment affected torque transmission and overall system efficiency. This was especially enlightening, as it highlighted the precision required in gear alignment for optimal performance. The need for careful alignment to prevent frictional losses and ensure smooth rotation underscored the complex relationship between design and performance in mechanical engineering.</p>
        </div>

        <div class="question">
            <h3>Laboratory Manual:</h3>
            <p>YES: because it is required for me to follow up with the practical</p>
        </div>
    </div>
`;
main.appendChild(questionsSection);
    // References Section
    const referencesSection = document.createElement('section');
    referencesSection.innerHTML = `
        <h2>REFERENCES</h2>
        <ul>
            <li>Shigley, J. E., & Mischke, C. R. (2001). Mechanical Engineering Design</li>
            <li>Khurmi, R. S., & Gupta, J. K. (2005). A Textbook of Machine Design</li>
        </ul>
    `;
    main.appendChild(referencesSection);
    const hover = createHover('#');
    main.appendChild(hover);
    const download = createDownload('#');
    main.appendChild(download);
};

export { displaySimplePendulum, displayShearForceExperiment, displayCamFollower, displayConicalPendulum, displayFlywheel, displayGears };





