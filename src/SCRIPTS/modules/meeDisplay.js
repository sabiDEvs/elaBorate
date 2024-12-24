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
    createDownload('#');
    createHover('#');
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
    createDownload('#');
    createHover('#');
};

const displayCamFollower = () => {
    const main = reset();

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
            <li><div><img src=${pic6}><p>Dial gauge plunger</p></div></li>
            <li><div><img src=${pic7}><p>Roller follower</p></div></li>
            <li><div><img src=${pic8}><p>Measuring gauge</p></div></li>
            <li><div><img src=${pic9}><p>Protractor scale</p></div></li>
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

    createDownload('#');
    createHover('#');
};

const displayConicalPendulum = () => {
    const main = reset();

    // Theory Section
    const theorySection = document.createElement('section');
    theorySection.innerHTML = `
        <h2>THEORY</h2>
        <p>A pendulum is a weight suspended from a fixed point so that it can swing freely back and forth under the influence of gravity. The pendulum swings due to the force of gravity, which pulls the bob towards the equilibrium position (lowest point of the swing). The motion is periodic, meaning it repeats itself in a regular cycle.</p>
        <p>A conical pendulum is a type of pendulum in which a mass (called the bob) is attached to a string or rod of fixed length and moves in a horizontal circular path, making the string trace the surface of a cone.</p>
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
            <li>Stop watch</li>
            <li>Metre stick/Ruler</li>
            <li>Rigid stand</li>
            <li>Protractor scale</li>
            <li>Mass bob</li>
        </ul>
    `;
    main.appendChild(apparatusSection);

    // Results Section with Videos
    const resultsSection = document.createElement('section');
    resultsSection.innerHTML = `
        <h2>RESULTS</h2>
        <div class="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/tBu8sBJ3ER0" frameborder="0" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/0CaWx_ghSbI" frameborder="0" allowfullscreen></iframe>
        </div>
        <div class="table-container">
            <h3>TABLE OF RESULTS</h3>
            <table>
                <thead>
                    <tr>
                        <th>Length (cm)</th>
                        <th>Angle (°)</th>
                        <th>Period (s)</th>
                        <th>Height (cm)</th>
                        <th>Radius (cm)</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- To be filled with experimental data -->
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
                        <td>The pendulum moves in a horizontal circular path</td>
                        <td>Ensure string is properly tensioned</td>
                    </tr>
                    <tr>
                        <td>Angle remains constant during motion</td>
                        <td>Avoid parallax errors when measuring angles</td>
                    </tr>
                    <tr>
                        <td>Period remains constant for given length</td>
                        <td>Take multiple readings for accuracy</td>
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
        <div class="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/9kJ5vyfW0n4" frameborder="0" allowfullscreen></iframe>
        </div>
        <h3>GRAPH OF W² AGAINST 1/H</h3>
        <div class="graph-container">
            <!-- Graph placeholder -->
        </div>
    `;
    main.appendChild(graphsSection);

    // Discussion Section
    const discussionSection = document.createElement('section');
    discussionSection.innerHTML = `
        <h2>DISCUSSION</h2>
        <ul>
            <li>Measurements that are inaccurate: Length of the String, Time Period (T), Angle of Inclination (θ)</li>
            <li>Resistance of the Air: Air resistance-induced drag forces can attenuate motion</li>
            <li>Elasticity of the String: String stretching can alter effective length</li>
        </ul>
    `;
    main.appendChild(discussionSection);

    // Conclusion Section
    const conclusionSection = document.createElement('section');
    conclusionSection.innerHTML = `
        <h2>CONCLUSION</h2>
        <p>At the end of this experiment, we were able to calculate the acceleration due to gravity and also investigate the variation in height of a conical pendulum with change of speed.</p>
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
                <li>The experiment illustrates the fundamentals of circular motion</li>
                <li>Learned to apply and verify mathematical formulas related to circular motion</li>
            </ul>
            
            <!-- Continue with all other Q&A pairs -->
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

    createDownload('#');
    createHover('#');
};

export { displaySimplePendulum, displayShearForceExperiment, displayCamFollower, displayConicalPendulum };



