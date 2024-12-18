import pic1 from '../../RESOURCES/images/retort stand.png';
import pic2 from '../../RESOURCES/images/stopwatch.jpeg';
import pic3 from '../../RESOURCES/images/pendulum graph.png';
import pic4 from '../../RESOURCES/images/shear force in a beam.jpeg';
import pic5 from '../../RESOURCES/images/sForce SM212.png';
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
            <li><strong>COMMENT ON THE EXPERIMENTAL PROCEDURE TO JUSTIFY ITS SUITABILITY FOR ACCURACY OF RESULTS AND TIME SAVING:</strong> The experimental procedure for the simple pendulum experiment is well-suited to produce accurate results while also being time-saving...</li>
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
            <li><strong>COMMENT ON THE EXPERIMENTAL PROCEDURE TO JUSTIFY ITS SUITABILITY FOR ACCURACY OF RESULTS AND TIME SAVING:</strong> 
            <p>The procedure where you vary the load application points strengthens the accuracy. This helps create a shear force distribution profile for the entire beam, not just a specific point. While increasing the load helps understand the relationship with shear force, using too many small increments can be time-consuming. </p>
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


export {displaySimplePendulum, displayShearForceExperiment};