import pic1 from "../../RESOURCES/images/group-of-engr.png";
import pic2 from "../../RESOURCES/images/daniel1.png";
import pic3 from "../../RESOURCES/images/pic3.png";
import pic4 from "../../RESOURCES/images/pic4.png";
import pic5 from "../../RESOURCES/images/pic5.png";
import pic6 from "../../RESOURCES/images/pic6.png";
import pic7 from "../../RESOURCES/images/pic7.png";
import pic8 from "../../RESOURCES/images/pic8.png";
import pic9 from "../../RESOURCES/images/pic9.png";
import pic10 from "../../RESOURCES/images/pic10.png";
import pic11 from "../../RESOURCES/images/pic11.png";
import pic112 from "../../RESOURCES/images/download-icon.png";
import pic113 from "../../RESOURCES/images/download.png";
import ee2031 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/203/1.png";
import ee2032 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/203/2.png";
import ee2033 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/203/3.png";
import ee2034 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/203/4.png";
import ee2035 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/203/5.png";
import ee2036 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/203/fig2.png";
import ee2037 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/203/fig1.png";
import ee2038 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/203/graph1.png";
import ee2039 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/203/graph2.png";
import ee2041 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/204/1.png";
import ee2042 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/204/3.png";
import ee2043 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/204/4.png";
import ee2044 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/204/fig1.png";
import ee2051 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/2051.png";
import ee2052 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/2052.png";
import ee2053 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/2053.png";
import ee2054 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/2054.png";
import ee2055 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/2055.png";
import ee2056 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/2056.png";
import ee2057 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/2057.png";
import ee2058 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/2058.png";
import ee2071 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/207/1.png";

import ee2072 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/207/2.png";

import ee2073 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/207/3.png";

import ee2074 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/207/4.png";

import ee2075 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/207/5.png";
import ee2076 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/207/fig1.png";
import ee2077 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/207/fig2.png";
import ee2078 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/207/fig3.png";
import ee2079 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/207/fig4.png";
import ee2021 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/202/1.png";

import ee2022 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/202/2.png";
import ee2023 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/202/3.png";
import ee2024 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/202/4.png";
import ee2025 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/202/5.png";
import ee2026 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/202/fig1.png";
import ee2027 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/202/fig2.png";
import ee2028 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/202/graph1.png";
import ee2029 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/202/graph2.png";
import ee2081 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/208/fig1.png";
import ee2082 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/208/fig2.png";
import ee2083 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/208/fig3.png";
import ee2084 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/208/fig4.png";
import ee2085 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/208/fig5.png";
import ee2086 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/208/fig6.png";
import ee2087 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/208/fig7.png";
import ee2088 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/208/1.png";
import ee2089 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/208/2.png";
import ee2011 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/201/1.png";
import ee2013 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/201/2.png";
import ee2014 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/201/3.png";
import ee2012 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/2051.png";

import ee201Fig1 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/201/fig1.jpg";
import ee201Fig2 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/201/fig2.png";
import ee201Plot1 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/201/plot.png";

const createDivs = (object) => {
  const div = document.createElement("div");
  const text = document.createElement("div");
  text.innerHTML = `<span>• ${object.title}:</span>  ${object.text}`;
  div.appendChild(text);
  if (object.image !== " ") {
    const image = document.createElement("img");
    image.src = object.image;
    div.appendChild(image);
  }
  return div;
};

const createVids = (object) => {
  const div = document.createElement("div");
  const text = document.createElement("div");
  text.innerHTML = `<span>• ${object.list}</span>`;
  div.appendChild(text);
  if (object.video !== " ") {
    const box = document.createElement("div");
    box.innerHTML = object.video;
    div.appendChild(box);
  }
  return div;
};

const displayTask = (num, name, lists) => {
  const div = document.createElement("div");
  const head = document.createElement("h3");
  head.textContent = `${num}. ${name}`;
  div.appendChild(head);
  const tasks = document.createElement("ul");
  let listItems = [];
  for (let i = 0; i < lists.length; i++) {
    listItems[i] = document.createElement("li");
    listItems[i].textContent = lists[i];
    tasks.appendChild(listItems[i]);
  }
  div.appendChild(tasks);
  return div;
};

const reset = () => {
  window.scrollTo(0, 0);
  const main = document.querySelector("main");
  main.innerHTML = "";
  if(window.innerWidth < 800) {
    document.querySelector('aside').style.display = 'none';
};
  main.classList.add('danger');
  return main;
};

const createDownload = (url) => {
  const div = document.createElement("div");
  div.classList.add("download");
  const container = document.createElement("div");
  container.classList.add("downloadcta");
  const button = document.createElement("div");
  button.classList.add("downloadBox");
  const link = document.createElement("a");
  link.href = url;
  button.textContent = "DOWNLOAD";
  const icon = document.createElement("img");
  icon.src = pic112;
  button.appendChild(icon);
  link.appendChild(button);
  div.appendChild(container);
  div.appendChild(link);
  return div;
};

const createHover = (url) => {
  const div = document.createElement("div");
  const view = document.createElement("div");
  view.textContent = "view reports >";
  view.classList.add("viewText");
  view.addEventListener("click", () => {
    document.querySelector("aside").style.display = "block";
  });
  const download = document.createElement("div");
  const link = document.createElement("a");
  link.href = url;
  const icon = document.createElement("img");
  icon.src = pic113;
  icon.classList.add("hoverIcon");
  link.appendChild(icon);
  download.appendChild(link);
  div.appendChild(view);
  div.appendChild(download);
  div.classList.add("hover");
  return div;
};

const displayStarted = () => {
  const main = reset();
 
  const divImgAchieve = document.createElement("div");
  divImgAchieve.classList.add("div-img-achieve");

  const imgAchieve = document.createElement("img");
  divImgAchieve.appendChild(imgAchieve);
  imgAchieve.src = pic1;
  imgAchieve.classList.add("diagram-image");
  imgAchieve.id = "getStartImg";

  const startingHeader = document.createElement("h2");
  startingHeader.textContent = "GETTING STARTED WITH ELECTRICAL ELA";
  startingHeader.id = "getStartHead";
  divImgAchieve.appendChild(startingHeader);
  main.appendChild(divImgAchieve);

  const genSection = document.createElement("section");
  const genHead = document.createElement("h3");
  genHead.textContent = "General Instructions";
  genSection.appendChild(genHead);

  const genDesc = document.createElement("p");
  genDesc.textContent = "Follow these guidelines to ensure proper documentation and submission of your Electrical ELA report.";
  genSection.appendChild(genDesc);

  const report = displayTask("1", "Submission Deadline:", [
    "You must submit your report the next day before 10 AM.",
    "Write on foolscap paper with a minimum of 2-3 full foolscap pages (or at least 8 pages) for good grades."
  ]);
  genSection.appendChild(report);

  const notes = displayTask("2", "Instructor's Notes:", [
    "Write down all key points given by the instructor.",
    "Expand on these points in your report, especially in the theory section."
  ]);
  genSection.appendChild(notes);

  const format = displayTask("3", "Formatting:", [
    "You may receive a specific format on the first day.",
    "If no format is provided, use the structure below."
  ]);
  genSection.appendChild(format);

  main.appendChild(genSection);

  // Report Format Section
  const repSection = document.createElement("section");
  const repHead = document.createElement("h3");
  repHead.textContent = "Report Format";
  repSection.appendChild(repHead);

  const repDesc = document.createElement("p");
  repDesc.textContent = "Follow the structure below to ensure a well-organized and detailed report.";
  repSection.appendChild(repDesc);

  const firstPage = displayTask("1", "First Page:", [
    "Name: [Your Full Name]",
    "Matriculation Number: [Your Matric Number]",
    "Department: [Your Department]",
    "Serial Number: [ELA Serial Number]",
    "Title of Experiment: [e.g., 'Transformer Load Testing']",
    "Experiment Number: [e.g., 'ELE302']",
    "Date: [Date of Experiment]"
  ]);
  repSection.appendChild(firstPage);

  const aims = displayTask("2", "Aims and Objectives:", [
    "Clearly state the purpose and goals of the experiment."
  ]);
  repSection.appendChild(aims);

  const apparatus = displayTask("3", "Apparatus/Equipment:", [
    "List all tools, components, and equipment used."
  ]);
  repSection.appendChild(apparatus);

  const theory = displayTask("4", "Theory:", [
    "Provide a detailed theoretical background of the experiment.",
    "Explain principles, equations, and concepts involved."
  ]);
  repSection.appendChild(theory);

  const diagram = displayTask("5", "Diagram:", [
    "Include a well-labeled diagram of the setup."
  ]);
  repSection.appendChild(diagram);

  const procedure = displayTask("6", "Procedure:", [
    "Write step-by-step instructions followed during the experiment."
  ]);
  repSection.appendChild(procedure);

  const results = displayTask("7", "Tables of Values/Results:", [
    "Present measured data in a table format.",
    "Ensure values are clearly recorded."
  ]);
  repSection.appendChild(results);

  const calculations = displayTask("8", "Calculations:", [
    "Show all necessary calculations related to the experiment."
  ]);
  repSection.appendChild(calculations);

  const conclusion = displayTask("9", "Conclusion:", [
    "Summarize key findings and observations from the experiment."
  ]);
  repSection.appendChild(conclusion);

  const precautions = displayTask("10", "Precautions:", [
    "List all safety measures and precautions taken during the experiment."
  ]);
  repSection.appendChild(precautions);

  const references = displayTask("11", "References:", [
    "Do not use website links.",
    "Cite textbooks and manuals used.",
    "Example:",
    "- 'Electrical Engineering Laboratory Manual' by the Department of Electrical Engineering.",
    "- 'Fundamentals of Electric Circuits' by Charles K. Alexander & Matthew N. Sadiku."
  ]);
  repSection.appendChild(references);

  main.appendChild(repSection);

  // Final Submission Tips Section
  const finalSection = document.createElement("section");
  const finalHead = document.createElement("h3");
  finalHead.textContent = "Final Submission Tips";
  finalSection.appendChild(finalHead);

  const tips = displayTask("1", "Tips:", [
    "Ensure your report is well-organized and detailed.",
    "Be punctual—arrive at least 5 minutes before submission time.",
    "Never miss an Electrical ELA session!"
  ]);
  finalSection.appendChild(tips);

  const goodLuck = document.createElement("p");
  goodLuck.textContent = "GOOD LUCK!";
  finalSection.appendChild(goodLuck);

  main.appendChild(finalSection);
  const hover = createHover("#");
  main.appendChild(hover);
  const download = createDownload("#");
  main.appendChild(download);
};

const displayEE201 = () => {
  const main = reset();

  const mainHeading = document.createElement("h1");
  mainHeading.textContent = "Measurement of Unknown Resistance";
  main.appendChild(mainHeading);

  // Create and append the AIMS section
  const aimSection = document.createElement("section");
  const aimHeading = document.createElement("h2");
  aimHeading.textContent = "AIMS";
  aimSection.appendChild(aimHeading);

  const aimList = document.createElement("ul");
  const aims = [
    "To measure the value of an unknown resistor and to determine the characteristics of a resistor.",
    "To understand the application of Ohm's Law in practical circuits.",
    "To compare the accuracy of different methods for measuring resistance.",
  ];
  aims.forEach((aim) => {
    const listItem = document.createElement("li");
    listItem.textContent = aim;
    aimList.appendChild(listItem);
  });
  aimSection.appendChild(aimList);
  main.appendChild(aimSection);

  // Create and append the first method heading
  const method1Heading = document.createElement("h1");
  method1Heading.textContent =
    "FIRST METHOD: Current-Voltage Measurement Method";
  main.appendChild(method1Heading);

  // Create and append the Apparatus section for the first method
  const apparatusSection1 = document.createElement("section");
  const apparatusHeading1 = document.createElement("h2");
  apparatusHeading1.textContent = "Apparatus";
  apparatusSection1.appendChild(apparatusHeading1);

  const apparatusList1 = [
    { cap: "Unknown Resistor", image: pic2 },
    { cap: "DC Power Supply (0-15V, 2A)", image: pic3 },
    { cap: "DC Voltmeter (0-30V)", image: pic4 },
    { cap: "DC Ammeter (0-2A)", image: pic5 },
  ];

  const apparatusContainer1 = document.createElement("div");
  apparatusContainer1.classList.add("appBox");

  apparatusList1.forEach((apparatus) => {
    const apparatusItem = document.createElement("div");
    const apparatusImage = document.createElement("img");
    const apparatusCaption = document.createElement("p");

    apparatusImage.src = apparatus.image;
    apparatusCaption.textContent = apparatus.cap;

    apparatusItem.appendChild(apparatusImage);
    apparatusItem.appendChild(apparatusCaption);
    apparatusContainer1.appendChild(apparatusItem);
  });

  apparatusSection1.appendChild(apparatusContainer1);
  main.appendChild(apparatusSection1);

  // Create and append the Theory section for the first method
  const theorySection1 = document.createElement("section");
  const theoryHeading1 = document.createElement("h2");
  theoryHeading1.textContent =
    "Theory of Measuring Unknown Resistance Using the Current-Voltage (I-V) Method";
  theorySection1.appendChild(theoryHeading1);

  const theoryContent1 = document.createElement("div");
  theoryContent1.innerHTML = `
    <p>
      The measurement of an unknown resistance using the <strong>current-voltage (I-V) method</strong> is based on <strong>Ohm's Law</strong>, which states that the current (<em>I</em>) flowing through a conductor is directly proportional to the voltage (<em>V</em>) across it and inversely proportional to its resistance (<em>R</em>). Mathematically, this is expressed as:
    </p>
    <p style="text-align: center;">
      <strong>V = I × R</strong>
    </p>
    <p>
      From this, the resistance can be calculated as:
    </p>
    <p style="text-align: center;">
      <strong>R = V / I</strong>
    </p>
    <p>
      This method involves applying a known voltage across the resistor and measuring the resulting current. The resistance is then calculated using the above formula.
    </p>
    <p>
      The I-V method is widely used due to its simplicity and direct application of Ohm's Law. However, it is essential to ensure accurate measurements of voltage and current to minimize errors. Factors such as the internal resistance of the ammeter and voltmeter, as well as fluctuations in the power supply, can affect the results.
    </p>
    <p>
      In this experiment, we will use a DC power supply to apply a known voltage across the unknown resistor and measure the resulting current using an ammeter. The voltage across the resistor will be measured using a voltmeter. By recording multiple voltage and current readings, we can plot a graph of voltage versus current and determine the resistance from the slope of the graph.
    </p>
  `;
  theorySection1.appendChild(theoryContent1);
  main.appendChild(theorySection1);

  // Create and append the YouTube video section
  const videoSection = document.createElement("div");
  const videoDescription = document.createElement("p");
  videoDescription.textContent =
    "Watch the video below to learn more about Ohm's Law:";
  videoSection.appendChild(videoDescription);

  const videoEmbed = document.createElement("div");
  videoEmbed.innerHTML = `
    <iframe width="677" height="392" src="https://www.youtube.com/embed/-m9bqZ3L5pg" title="Ohm's Law Experiment" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  `;
  videoSection.appendChild(videoEmbed);
  theorySection1.appendChild(videoSection);

  const diagramsSection = document.createElement("section");
  diagramsSection.className = "diagrams-section";
  const diagramsHeading = document.createElement("h2");
  diagramsHeading.textContent = "DIAGRAMS";
  diagramsSection.appendChild(diagramsHeading);

  const diagrams = [{ cap: "CIRCUIT DIAGRAM", image: ee201Fig1 }];

  diagrams.forEach((diagram) => {
    const diagramContainer = document.createElement("div");
    diagramContainer.className = "diagram-container";

    const diagramImage = document.createElement("img");
    diagramImage.className = "diagram-image";
    diagramImage.src = diagram.image;
    diagramImage.alt = diagram.cap;

    const diagramCaption = document.createElement("p");
    diagramCaption.className = "diagram-caption";
    diagramCaption.textContent = diagram.cap;

    diagramContainer.appendChild(diagramImage);
    diagramContainer.appendChild(diagramCaption);
    diagramsSection.appendChild(diagramContainer);
  });

  main.appendChild(diagramsSection);

  // Create and append the Procedure section
  const procedureSection = document.createElement("section");
  const procedureHeading = document.createElement("h2");
  procedureHeading.textContent = "PROCEDURE";
  procedureSection.appendChild(procedureHeading);

  const procedureSteps = [
    "Connect the circuit as shown in Fig. 1.",
    "Switch on the power supply.",
    "Set the voltage so that the ammeter reads 3mA. Read the voltage from the voltmeter.",
    "Increase the voltage so that the ammeter reads 6mA. Read the voltage from the voltmeter.",
    "Repeat the process for currents of 9mA, 12mA, etc., up to 30mA.",
    "Record the results in a table.",
    "Plot the graph of voltage versus current.",
  ];

  const procedureList = document.createElement("ul");
  procedureSteps.forEach((step) => {
    const stepItem = document.createElement("li");
    stepItem.textContent = step;
    procedureList.appendChild(stepItem);
  });

  procedureSection.appendChild(procedureList);
  main.appendChild(procedureSection);

  // Create and append the Results section
  const resultsSection = document.createElement("section");
  const resultsHeading = document.createElement("h2");
  resultsHeading.textContent = "RESULTS";
  resultsSection.appendChild(resultsHeading);

  const resultsTable = document.createElement("table");
  resultsTable.style.borderCollapse = "collapse";
  resultsTable.style.width = "100%";

  const tableHeaders = ["I (mA)", "V (V)", "R = V/I (Ω)"];
  const headerRow = document.createElement("tr");
  tableHeaders.forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    th.style.border = "1px solid black";
    th.style.padding = "8px";
    headerRow.appendChild(th);
  });
  resultsTable.appendChild(headerRow);

  const tableData = [
    [3, 0.3, 100],
    [6, 0.6, 100],
    [9, 0.9, 100],
    [12, 1.2, 100],
    [15, 1.5, 100],
    [18, 1.6, 100],
    [21, 2.1, 100],
    [24, 2.4, 100],
    [27, 2.7, 100],
    [30, 3.0, 100],
  ];

  tableData.forEach((row) => {
    const tr = document.createElement("tr");
    row.forEach((cell) => {
      const td = document.createElement("td");
      td.textContent = cell;
      td.style.border = "1px solid black";
      td.style.padding = "8px";
      tr.appendChild(td);
    });
    resultsTable.appendChild(tr);
  });

  resultsSection.appendChild(resultsTable);
  main.appendChild(resultsSection);

  // Create and append the Graph section

  // Create and append the Second Method: Wheatstone Bridge
  const method2Heading = document.createElement("h1");
  method2Heading.textContent = "SECOND METHOD: Wheatstone Bridge Method";
  main.appendChild(method2Heading);

  // Apparatus for Wheatstone Bridge
  const apparatusSection2 = document.createElement("section");
  const apparatusHeading2 = document.createElement("h2");
  apparatusHeading2.textContent = "Apparatus";
  apparatusSection2.appendChild(apparatusHeading2);

  const apparatusList2 = [
    { cap: "Unknown Resistor", image: pic2 },
    { cap: "Known Resistors (Precision Resistors)", image: pic6 },
    { cap: "Galvanometer", image: pic7 },
    { cap: "DC Power Supply (0-15V, 2A)", image: pic3 },
    { cap: "Wheatstone Bridge Board", image: pic8 },
  ];

  const apparatusContainer2 = document.createElement("div");
  apparatusContainer2.classList.add("appBox");

  apparatusList2.forEach((apparatus) => {
    const apparatusItem = document.createElement("div");
    const apparatusImage = document.createElement("img");
    const apparatusCaption = document.createElement("p");

    apparatusImage.src = apparatus.image;
    apparatusCaption.textContent = apparatus.cap;

    apparatusItem.appendChild(apparatusImage);
    apparatusItem.appendChild(apparatusCaption);
    apparatusContainer2.appendChild(apparatusItem);
  });

  apparatusSection2.appendChild(apparatusContainer2);
  main.appendChild(apparatusSection2);

  // Theory for Wheatstone Bridge
  const theorySection2 = document.createElement("section");
  const theoryHeading2 = document.createElement("h2");
  theoryHeading2.textContent =
    "Theory of Measuring Unknown Resistance Using the Wheatstone Bridge Method";
  theorySection2.appendChild(theoryHeading2);

  const theoryContent2 = document.createElement("div");
  theoryContent2.innerHTML = `
    <p>
      The <strong>Wheatstone Bridge</strong> is a precise method for measuring unknown resistance by balancing two legs of a bridge circuit. It was invented by Samuel Hunter Christie in 1833 and later popularized by Sir Charles Wheatstone. The Wheatstone Bridge is widely used in laboratories and industries due to its high accuracy and simplicity.
    </p>
    <p>
      The Wheatstone Bridge consists of four resistors arranged in a diamond shape, with a galvanometer connected between two opposite corners and a power supply connected across the other two corners. The resistors are typically labeled as <em>R<sub>1</sub></em>, <em>R<sub>2</sub></em>, <em>R<sub>3</sub></em>, and <em>R<sub>4</sub></em>, where <em>R<sub>4</sub></em> is the unknown resistance to be measured.
    </p>
    <p>
      The principle of the Wheatstone Bridge is based on the concept of <strong>null deflection</strong>. When the bridge is balanced, the galvanometer shows zero deflection, indicating that no current flows through it. At this point, the ratio of the known resistances is equal to the ratio of the unknown resistance to the variable resistance. Mathematically, this is expressed as:
    </p>
    <p style="text-align: center;">
      <strong>R<sub>1</sub> / R<sub>2</sub> = R<sub>3</sub> / R<sub>4</sub></strong>
    </p>
    <p>
      From this equation, the unknown resistance <em>R<sub>4</sub></em> can be calculated as:
    </p>
    <p style="text-align: center;">
      <strong>R<sub>4</sub> = (R<sub>2</sub> × R<sub>3</sub>) / R<sub>1</sub></strong>
    </p>
    <p>
      The Wheatstone Bridge method is highly accurate because it relies on the comparison of resistances rather than absolute measurements. It is particularly useful for measuring low resistances with high precision.
    </p>
  `;
  theorySection2.appendChild(theoryContent2);
  main.appendChild(theorySection2);

  // Procedure for Wheatstone Bridge
  const procedureSection2 = document.createElement("section");
  const procedureHeading2 = document.createElement("h2");
  procedureHeading2.textContent = "PROCEDURE";
  procedureSection2.appendChild(procedureHeading2);

  const procedureSteps2 = [
    "Connect the circuit as shown in Fig. 2.",
    "Connect the unknown resistor <em>R<sub>x</sub></em> across points C and D.",
    "Connect the power supply across points A and B.",
    "Switch on the supply and set it to 2V.",
    "Adjust the variable resistor <em>R<sub>3</sub></em> until the galvanometer shows zero deflection.",
    "Record the value of <em>R<sub>3</sub></em> and calculate <em>R<sub>x</sub></em> using the formula: <em>R<sub>x</sub> = (R<sub>2</sub> × R<sub>3</sub>) / R<sub>1</sub></em>.",
    "Repeat the experiment for different values of known resistors to ensure accuracy.",
    "Calculate the average value of <em>R<sub>x</sub></em> from the recorded measurements.",
  ];

  const procedureList2 = document.createElement("ul");
  procedureSteps2.forEach((step) => {
    const stepItem = document.createElement("li");
    stepItem.innerHTML = step;
    procedureList2.appendChild(stepItem);
  });

  procedureSection2.appendChild(procedureList2);
  main.appendChild(procedureSection2);

  // Results for Wheatstone Bridge
  const resultsSection2 = document.createElement("section");
  const resultsHeading2 = document.createElement("h2");
  resultsHeading2.textContent = "RESULTS";
  resultsSection2.appendChild(resultsHeading2);

  const resultsTable2 = document.createElement("table");
  resultsTable2.style.borderCollapse = "collapse";
  resultsTable2.style.width = "100%";

  const tableHeaders2 = [
    "R<sub>1</sub> (Ω)",
    "R<sub>2</sub> (Ω)",
    "R<sub>3</sub> (Ω)",
    "R<sub>x</sub> (Ω)",
  ];
  const headerRow2 = document.createElement("tr");
  tableHeaders2.forEach((header) => {
    const th = document.createElement("th");
    th.innerHTML = header;
    th.style.border = "1px solid black";
    th.style.padding = "8px";
    headerRow2.appendChild(th);
  });
  resultsTable2.appendChild(headerRow2);

  const tableData2 = [
    [10, 100, 50, 500],
    [100, 100, 50, 50],
    [100, 1000, 50, 500],
    [1000, 100, 50, 5],
  ];

  tableData2.forEach((row) => {
    const tr = document.createElement("tr");
    row.forEach((cell) => {
      const td = document.createElement("td");
      td.textContent = cell;
      td.style.border = "1px solid black";
      td.style.padding = "8px";
      tr.appendChild(td);
    });
    resultsTable2.appendChild(tr);
  });

  resultsSection2.appendChild(resultsTable2);
  main.appendChild(resultsSection2);

  // Append the Wheatstone Bridge section to the main content
  main.appendChild(theorySection2);
  main.appendChild(procedureSection2);
  main.appendChild(resultsSection2);

  const graphSection = document.createElement("section");
  const graphHeading = document.createElement("h2");
  graphHeading.textContent = "GRAPHS";
  graphSection.appendChild(graphHeading);

  const graphImage = document.createElement("img");
  graphImage.src = ee201Plot1;
  graphImage.alt = "Current vs. Voltage Graph";
  graphImage.style.width = "100%";
  graphImage.style.maxWidth = "600px";
  graphImage.style.height = "auto";

  const graphCaption = document.createElement("p");
  graphCaption.textContent = "Current vs. Voltage Graph";
  graphCaption.style.textAlign = "center";
  graphCaption.style.marginTop = "10px";

  graphSection.appendChild(graphImage);
  graphSection.appendChild(graphCaption);
  main.appendChild(graphSection);

  // Create and append the Precautions section
  const precautionsSection = document.createElement("section");
  const precautionsHeading = document.createElement("h3");
  precautionsHeading.textContent = "PRECAUTIONS";
  precautionsSection.appendChild(precautionsHeading);

  const precautionsList = document.createElement("ul");
  const precautions = [
    "Avoid parallax errors when taking readings.",
    "Ensure all measuring instruments are calibrated and in good working condition.",
    "Do not touch live circuits to avoid electric shock.",
    "Ensure proper connections to avoid short circuits.",
    "Use appropriate safety gear, such as insulated gloves, when handling high voltages.",
  ];

  precautions.forEach((precaution) => {
    const listItem = document.createElement("li");
    listItem.textContent = precaution;
    precautionsList.appendChild(listItem);
  });

  precautionsSection.appendChild(precautionsList);
  main.appendChild(precautionsSection);

  // Create and append the Conclusion section
  const conclusionSection = document.createElement("section");
  const conclusionHeading = document.createElement("h3");
  conclusionHeading.textContent = "CONCLUSION";
  conclusionSection.appendChild(conclusionHeading);

  const conclusionText = document.createElement("p");
  conclusionText.textContent =
    "At the end of this experiment, we successfully measured the unknown resistance using the current-voltage method and verified Ohm's Law. The results were consistent with theoretical expectations. Additionally, we explored the Wheatstone Bridge method, which provided a more precise measurement of resistance. Both methods demonstrated the importance of accurate measurements and proper experimental techniques in electrical engineering.";
  conclusionSection.appendChild(conclusionText);
  main.appendChild(conclusionSection);

  // Create and append the References section
  const referencesSection = document.createElement("section");
  const referencesHeading = document.createElement("h3");
  referencesHeading.textContent = "REFERENCES";
  referencesSection.appendChild(referencesHeading);

  const referencesList = document.createElement("ul");
  const references = [
    "Electric Machinery Fundamentals by Stephen J. Chapman",
    "Electrical Engineering Laboratory Manual by the Department of Electrical Engineering, University of Benin.",
    "Fundamentals of Electric Circuits by Charles K. Alexander & Matthew N. O. Sadiku",
    "Principles of Electrical Measurement by Slawomir Tumanski",
  ];

  references.forEach((reference) => {
    const listItem = document.createElement("li");
    listItem.textContent = reference;
    referencesList.appendChild(listItem);
  });

  referencesSection.appendChild(referencesList);
  main.appendChild(referencesSection);
  const hover = createHover("#");
  main.appendChild(hover);
  const download = createDownload("#");
  main.appendChild(download);
};

const displayEE208 = () => {
  const main = reset();
  const mainHeading = document.createElement("h1");
  mainHeading.innerHTML = " D.C. Motor";
  mainHeading.style.textAlign = "center";
  main.appendChild(mainHeading);

  const aimSection = document.createElement("section");
  const aimHeading = document.createElement("h2");
  aimHeading.textContent = "AIMS";
  aimSection.appendChild(aimHeading);

  const aimContent = document.createElement("blockquote");
  aimContent.innerHTML = `
    <p>To determine the characteristics of a D.C. motor excitation (studying
    how the motor performs based on the applied voltage to the field
    windings/excitation or armature).</p>
  `;
  aimSection.appendChild(aimContent);
  main.appendChild(aimSection);

  const objectivesSection = document.createElement("section");
  objectivesSection.innerHTML = `
    <h2>OBJECTIVES</h2>
    <ol type="a">
      <li><strong>Understand the operation of a DC shunt motor</strong>: Learn how the armature and field windings are connected in parallel.</li>
      <li><strong>Study the relationship between speed, torque, and load</strong>: Observe how motor speed changes as the load varies.</li>
      <li><strong>Analyze the effect of field and armature voltage on motor performance</strong>: Use the rheostat to control field current and observe its impact on speed.</li>
      <li><strong>Measure key parameters</strong>: Voltage, current, and speed under different operating conditions.</li>
      <li><strong>Learn motor control techniques</strong>: Understand how to control motor speed by varying field resistance or armature voltage.</li>
      <li><strong>Familiarize with experimental methods</strong>: Learn to set up and test a DC motor circuit properly, including using instruments like ammeters, voltmeters, and tachometers.</li>
    </ol>
  `;
  main.appendChild(objectivesSection);

  const appHead = document.createElement("h2");
  appHead.textContent = "Apparatus";
  main.appendChild(appHead);
  const section = document.createElement("section");
  section.classList.add("appBox");

  const apparatus = [
    {
      cap: "Electrical Machine Tutor (Model EMT-180)",
      image: ee2083,
    },
    {
      cap: "Power supply panel with meters",
      image: ee2072,
    },
    {
      cap: "Rheostat (9–200 Ω, 3 A)",
      image: ee2073,
    },
    {
      cap: "Hand Tachometer",
      image: ee2074,
    }
  ];
  let appBox = [];
  let appImage = [];
  let appCaption = [];
  for (let i = 0; i < apparatus.length; i++) {
    appBox[i] = document.createElement("div");
    appImage[i] = document.createElement("img");
    appCaption[i] = document.createElement("p");
    appImage[i].src = apparatus[i].image;
    appCaption[i].textContent = apparatus[i].cap;
    appBox[i].appendChild(appImage[i]);
    appBox[i].appendChild(appCaption[i]);
    section.appendChild(appBox[i]);
  }
  main.appendChild(section);



  const theorySection = document.createElement("section");
  theorySection.innerHTML = `
    <h2>THEORY</h2>
    <blockquote>
      <p>How does electricity make things move? Or how do you use electricity to set things in motion? I don’t mean the movement of electrons along a conducting wire. I’m referring to the spinning machines and moving mechanical joints that are powered not by coal
 or manpower but by electricity. What engineering innovation makes it possible to convert electrical energy to mechanical energy in such simplicity? From simple household appliances like electric fans, washing machines and air conditioners to the heavy duty industrial machinery like cranes and conveyors, something binds them all; one indispensable device—The D.C. Motor. It is so versatile and ubiquitous, easily adaptable and delivers what is demanded. Its unique design is what makes this possible, a one stop solution for basically all your movement needs. The inner workings of the D.C. Motors are going to be dissected as the core characteristics that make it so useful in many applications would be determined. It’s time to take an engineer’s look into D.C. Motors.
	Before a DC motor is applied as a component of any system or device, its viability has to be confirmed, it has to deliver the right quality of rotation that is demanded and efficiently match the same power supply to a range of loads without a significant drop in performance. In essence, it has to be the perfect fit to match the given design without dispensing much waste. Meaning that, it has to avoid the extremes of “not too powerful” and “not powerful enough” (as either end produces waste). It has to be just right. 
To verify a DC motors suitability for a specific use case, a load test has to be carried out. This would ensure that it delivers satisfactorily when considering all the variables and has compatible characteristics. This justifies the need for this experiment and paves the way for its purpose - to measure and calculate the variables associated with a D.C. motor’s excitation. Simply referred to as motor characteristics, they refer to the relationship between different parameters that define the performance of a DC shunt motor. These characteristics help us understand how the motor behaves under varying conditions such as speed, load or voltage. Some of these key characteristics are: Torque-Current characteristic, Speed-Torque characteristic, etc.

The approach used throughout the experiment simple and straightforward -
</p>
      
      <h3>Theoretical Analysis</h3>
      <p>D.C. motors are classified based on the configuration of their field windings:</p>
      <ol>
        <li><strong>Series Motors</strong>:  The field windings are connected in series with the armature windings. These motors provide high starting torque but exhibit variable speed under load.
</li>
        <li><strong>Shunt Motors</strong>: The field windings are connected in parallel (shunt) with the armature windings. These motors maintain nearly constant speed under varying loads but have lower starting torque.</li>
        <li><strong>Compound Motors</strong>: A combination of series and shunt windings, offering a balance of high starting torque and relatively constant speed.
</li>
      </ol>
      <p>This experiment focuses on the D.C. shunt motor, which is particularly suited for applications requiring stable speed performance, such as conveyor systems and machine tools.
	A DC shunt motor is a type of self-excited DC motor, and it is also known as a shunt wound DC motor. The field windings in this motor can be connected in parallel to the armature winding. So both windings of this motor will expose to the equal voltage power supply, and this motor maintains an invariable speed with any kind of load. This motor has a low starting torque and also runs at a constant speed.</p>
      

      <h3>Working Principle of a D.C. Shunt Motor</h3>
<p>A D.C. shunt motor operates on the principle of electromagnetic induction. When a current-carrying conductor (the armature) is placed in a magnetic field, it experiences a force known as the Lorentz force, which causes the armature to rotate.</p>
<p>The key components of a D.C. shunt motor include:</p>
<div style="margin-left: 20px;">
  <p><strong>Armature:</strong> The rotating part of the motor, which carries the current and generates torque.</p>
  <p><strong>Field Windings:</strong> Coils that produce a magnetic field when energized.</p>
  <p><strong>Commutator and Brushes:</strong> These ensure the direction of current in the armature windings reverses periodically, maintaining continuous rotation.</p>
</div>
<p>In a shunt motor, the field windings are connected in parallel with the armature windings, ensuring both receive the same supply voltage. This configuration allows the motor to maintain a nearly constant speed, even under varying loads.</p>

<h3>Performance Characteristics of a D.C. Shunt Motor</h3>
<p>The performance of a D.C. shunt motor is defined by the relationship between its key parameters, including speed, torque, current, and voltage. They are defined below.</p>
<div style="margin-left: 20px;">
  <p><strong>Torque (T):</strong> The rotational force produced by the motor, proportional to the armature current.</p>
  <p><strong>Armature Current (I<sub>a</sub>):</strong> The current flowing through the armature winding.</p>
  <p><strong>Speed (N):</strong> The rotational speed of the motor in revolutions per minute (RPM).</p>
  <p><strong>Output Power (P<sub>out</sub>):</strong> The mechanical power delivered by the motor.</p>
  <p><strong>Efficiency (η):</strong> The ratio of mechanical output power to electrical input power.</p>
  <p><strong>Load (T or I<sub>a</sub>):</strong> The load torque or armature current.</p>
</div>

<h3>Characteristic Equations and Behavior</h3>
<table class="theory-table" border="1" cellpadding="5">
  <tr>
    <th>Characteristic</th>
    <th>Equation</th>
    <th>Behavior</th>
  </tr>
  <tr>
    <td>Torque-Current (T vs. I<sub>a</sub>)</td>
    <td>T ∝ φ ⋅ I<sub>a</sub></td>
    <td>Since φ is nearly constant, T ∝ I<sub>a</sub></td>
  </tr>
  <tr>
    <td>Speed-Torque (N vs. T)</td>
    <td>N ∝ (V - I<sub>a</sub>R<sub>a</sub>)/φ</td>
    <td>Nearly constant speed</td>
  </tr>
  <tr>
    <td>Speed-Armature Current (N vs. I<sub>a</sub>)</td>
    <td>Speed slightly decreases as I<sub>a</sub> increases due to voltage drop across R<sub>a</sub></td>
    <td>Minor speed reduction with increased load</td>
  </tr>
  <tr>
    <td>Efficiency-Load (η vs. I<sub>a</sub>)</td>
    <td>η = (P<sub>out</sub>/P<sub>in</sub>) × 100%</td>
    <td>Peaks at optimal load</td>
  </tr>
  <tr>
    <td>Output Power-Armature Current (P<sub>out</sub> vs. I<sub>a</sub>)</td>
    <td>Increases with I<sub>a</sub> up to rated capacity</td>
    <td>Efficiency drops beyond rated current</td>
  </tr>
</table>

    </blockquote>
  `;
  main.appendChild(theorySection);

  const images = [ee2081, ee2082, ee2083, ee2084, ee2085, ee2086, ee2087];
  const diagramsSection = document.createElement("section");
  diagramsSection.className = "diagrams-section"; // Add styling class

  const diagramHead = document.createElement("h2");
  diagramHead.innerText = "DIAGRAMS";
  diagramsSection.appendChild(diagramHead);

  const diagrams = [
      {
        cap: "CIRCUIT DIAGRAM D.C SHUNT MOTOR",
        image: ee2088,
      },
      {
        cap: "WORKING DIAGRAM",
        image: ee2089,
      },

      {
        cap: "DC Shunt Motor Schematics",
        image: ee2082,
      },
    


  
      
    ];
  let diagramBox = [];
  let diagramImage = [];
  let diagramCaption = [];
  for (let i = 0; i < diagrams.length; i++) {
    diagramBox[i] = document.createElement("div");
    diagramBox[i].className = "diagram-container"; // Add container class

    diagramImage[i] = document.createElement("img");
    diagramImage[i].className = "diagram-image"; // Add image class
    diagramImage[i].src = diagrams[i].image;
    diagramImage[i].alt = diagrams[i].cap; // Add accessibility attribute

    diagramCaption[i] = document.createElement("p");
    diagramCaption[i].className = "diagram-caption"; // Add caption class
    diagramCaption[i].textContent = diagrams[i].cap;

    diagramBox[i].appendChild(diagramImage[i]);
    diagramBox[i].appendChild(diagramCaption[i]);
    diagramsSection.appendChild(diagramBox[i]);
  }

  main.appendChild(diagramsSection);


  const procedureSection = document.createElement("section");
  procedureSection.innerHTML = `
    <h2>PROCEDURE</h2>
    <ol>
      <li>Connect the circuit as shown in <strong>Figure 208-2,</strong>ensuring a series resistance of approximately 240Ω is included in the main field circuit.
</li>
      <li>Set the rheostat to maximum resistance and apply a supply voltage of 40V. The motor should run at approximately 500 rpm under no load.</li>
      <li>Apply 40V supply voltage</li>
      <li>Gradually increase the shaft load in steps while keeping the supply voltage constant. At each step, record the shaft speed (N), torque (T), and armature current (Ia​).
       
      </li>
      <li>Use the recorded data to plot the following curves:
        <ul>
          <li>Torque vs. Armature Current (T vs. I<sub>a</sub>)</li>
          <li>Speed vs. Armature Current (N vs. I<sub>a</sub>)</li>
          <li>Speed vs. Torque (N vs. T)</li>
        </ul>
      </li>
      <li>Calculate the motor's efficiency at each load step using the input and output power equations.
        <div class="equation">
          η = (P<sub>out</sub>/P<sub>in</sub>) × 100% 
          Where: 
          P<sub>in</sub> = V(I<sub>a</sub> + I<sub>f</sub>) 
          P<sub>out</sub> = T × ω
        </div>
      </li>
    </ol>
  `;
  main.appendChild(procedureSection);

  // Results Section
  const resultsSection = document.createElement("section");
  const resultsHead = document.createElement("h2");
  resultsHead.textContent = "RESULTS/TABLE OF VALUES";
  resultsSection.appendChild(resultsHead);

  const disclaimer = document.createElement("p");
  disclaimer.textContent = "Note: These are placeholder or test values, not the actual values used during the experiment. This is just to show an example of what to expect. Take down the readings and parameters obtained from the experiment and record them as your table of values.";
  disclaimer.classList.add("table-disclaimer");
  resultsSection.appendChild(disclaimer);

  // Create Table
  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";
  table.style.width = "100%";

  // Create Table Header
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  const headers = ["Load Current (I)", "Terminal Voltage (V)", "Generated Voltage (E)"];
  headers.forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    th.style.border = "1px solid black";
    th.style.padding = "8px";
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create Table Body
  const tbody = document.createElement("tbody");
  const tableData = [
    ["0.1 A", "120 V", "122 V"],
    ["0.2 A", "118 V", "120 V"],
    ["0.3 A", "115 V", "117 V"],
    ["0.4 A", "112 V", "114 V"],
    ["0.5 A", "110 V", "112 V"],
    ["0.6 A", "108 V", "110 V"],
  ];

  tableData.forEach((row) => {
    const tr = document.createElement("tr");
    row.forEach((cell) => {
      const td = document.createElement("td");
      td.textContent = cell;
      td.style.border = "1px solid black";
      td.style.padding = "8px";
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  resultsSection.appendChild(table);

  // Experimental Parameters
  const experimentalParams = document.createElement("p");
  experimentalParams.innerHTML = `<em>Experimental parameters:</em> V = 40V, R<sub>a</sub> = 0.2Ω`;
  resultsSection.appendChild(experimentalParams);

  main.appendChild(resultsSection);


  const questionsSection = document.createElement("section");
  questionsSection.innerHTML = `
    <h2>QUESTIONS</h2>
    <div class="question">1. What is the nature of the speed-torque characteristic of a D.C. motor with constant excitation?</div>
    <div class="answer">
        The speed-torque characteristic of a D.C. motor with constant excitation describes the relationship between speed (N) and torque (T). For a D.C. shunt motor:
        <ul>
            <li>The relationship is generally linear.</li>
            <li>As load torque increases, speed decreases slightly due to armature resistance voltage drop.</li>
            <li>The motor maintains a nearly constant speed under varying loads.</li>
        </ul>
        <p>The speed-torque characteristic is mathematically expressed as:</p>
        <p><strong>N ∝ (V − IaRa) / ϕ</strong></p>
        <p>where:</p>
        <ul>
            <li>V = Supply voltage</li>
            <li>Ia = Armature current</li>
            <li>Ra = Armature resistance</li>
            <li>ϕ = Magnetic flux (constant in a shunt motor)</li>
        </ul>
    </div>

    <h3>Additional Considerations:</h3>

    <div class="subsection">
        <h4>(a) Ideal No-Load Speed</h4>
        <p>The ideal no-load speed is the speed at which the motor runs with no mechanical load (T = 0). It is determined by:</p>
        <p><strong>N_no-load = V / ϕ</strong></p>
        <p>For a shunt motor, the no-load speed is high but finite due to small friction and windage losses.</p>

        <h3>(b) Speed-Torque Characteristics for Different Values:</h3>

        <h5>(i) Armature Resistance (Rc)</h5>
        <p>Increasing Rc leads to:</p>
        <ul>
            <li>Higher voltage drop (IaRc).</li>
            <li>Steeper speed reduction as load torque increases.</li>
            <li>Reduced efficiency and poorer speed regulation.</li>
        </ul>

        <h5>(ii) Field Current (If)</h5>
        <p>Effects of changing If:</p>
        <ul>
            <li>Increasing If increases ϕ, reducing speed (N ∝ 1/ϕ).</li>
            <li>Decreasing If increases speed but reduces torque capability (T ∝ ϕIa).</li>
        </ul>

        <h4>(iii) Supply Voltage (V)</h4>
        <p>Effects of changing V:</p>
        <ul>
            <li>Increasing V increases speed (N ∝ V).</li>
            <li>Torque remains unchanged unless Ia also increases.</li>
            <li>Reducing V lowers speed, useful in applications requiring speed control.</li>
        </ul>
    </div>

    <div class="question">2. Enumerate the different losses subtracted from mechanical power to get the output power of a D.C. motor.</div>
    <div class="answer">
        <p>Mechanical power developed: <strong>P_developed = T × ω</strong></p>
        <p>Losses in a D.C. motor:</p>
        
        <table>
            <tr>
                <th>Type of Loss</th>
                <th>Description</th>
            </tr>
            <tr>
                <td><strong>Copper Losses</strong></td>
                <td>Electrical losses due to resistance in windings:  
                    - Armature Copper Loss: Ia²Ra 
                    - Field Copper Loss: If²Rf 
                    - Brush Contact Loss</td>
            </tr>
            <tr>
                <td><strong>Iron Losses</strong></td>
                <td>Core losses due to alternating magnetic fields:  
                    - Hysteresis Loss 
                    - Eddy Current Loss</td>
            </tr>
            <tr>
                <td><strong>Mechanical Losses</strong></td>
                <td>Losses due to physical movement: 
                    - Friction Loss 
                    - Windage Loss</td>
            </tr>
            <tr>
                <td><strong>Stray Load Losses</strong></td>
                <td>Miscellaneous losses: 
                    - Armature reaction effects 
                    - Non-uniform current distribution</td>
            </tr>
        </table>

        <p><strong>P_output = P_developed − (Copper Losses + Iron Losses + Mechanical Losses + Stray Load Losses)</strong></p>
    </div>

    <div class="question">3. Explain the purpose of a starting resistance in series with the armature of a D.C. motor.</div>
    <div class="answer">
        <h5>1. Limiting Inrush Current</h5>
        <p>At startup, back EMF (Eb) is zero, and high inrush current flows: <strong>Ia = V / Ra</strong>.</p>
        <p>Since Ra is very small, current can be excessively high. A starting resistance (R_start) is added to limit this:</p>
        <p><strong>Ia = V / (Ra + R_start)</strong></p>

        <h5>2. Protecting the Motor</h5>
        <ul>
            <li>Prevents overheating, excessive sparking, and mechanical stress.</li>
            <li>Extends motor lifespan by reducing startup wear.</li>
        </ul>

        <h5>3. Smooth Acceleration</h5>
        <ul>
            <li>Allows gradual current increase as speed rises.</li>
            <li>Prevents jerks and mechanical shocks.</li>
            <li>Resistance is gradually reduced as back EMF builds up.</li>
        </ul>

        <h5>4. Role of Back EMF</h5>
        <p>As speed increases, back EMF (Eb) develops:</p>
        <p><strong>Ia = (V - Eb) / Ra</strong></p>
        <p>Once Eb is sufficient, the starting resistance is removed.</p>

        <h5>Types of Starters Using Starting Resistance</h5>
        <ul>
            <li><strong>Three-Point Starter:</strong> Common for shunt and compound motors, includes a no-volt release coil.</li>
            <li><strong>Four-Point Starter:</strong> More versatile, independent of field current.</li>
            <li><strong>Automatic Starters:</strong> Use relays and contactors for automatic resistance reduction.</li>
        </ul>
    </div>
  `;
  main.appendChild(questionsSection);
  const conclusionSection = document.createElement("section");
  conclusionSection.innerHTML = `
    <h2>CONCLUSION</h2>
    <p>
      The experiment successfully analyzed the performance characteristics of a D.C. shunt motor under varying load conditions. By conducting a load test, the relationships between torque, armature current, speed, and efficiency were determined, and the motor's behavior was evaluated against theoretical expectations. The key findings of the experiment are summarized below:
    </p>
    <h3>Torque-Current Characteristic</h3>
    <p>
      The torque (T) was found to be directly proportional to the armature current (I<sub>a</sub>), as expected from the theoretical relationship T ∝ I<sub>a</sub>. This linear relationship confirms that the motor's torque increases with higher armature current, consistent with the principles of electromagnetic induction.
    </p>
    <h3>Speed-Torque Characteristic</h3>
    <p>
      The motor exhibited a nearly constant speed under varying loads, with only a slight decrease in speed as the torque increased. This behavior is characteristic of a shunt motor, where the field flux (ϕ) remains constant, and the speed is primarily determined by the supply voltage and armature resistance.
    </p>
    <h3>Speed-Current Characteristic</h3>
    <p>
      As the load increased, the armature current (I<sub>a</sub>) increased, causing a slight drop in speed due to the voltage drop across the armature resistance (R<sub>a</sub>). This observation aligns with the theoretical equation N ∝ (V − I<sub>a</sub>R<sub>a</sub>)/ϕ.
    </p>
    <h3>Efficiency</h3>
    <p>
      The motor's efficiency (η) was calculated at each load step, and it was observed that the efficiency peaked at an optimal load. At very low or very high loads, the efficiency decreased due to increased losses, such as copper losses in the armature and mechanical losses in the load mechanism.
    </p>
    <h3>Practical Implications</h3>
    <p>
      The experiment demonstrated the importance of selecting a D.C. shunt motor with the appropriate specifications for a given application. The motor's ability to maintain a nearly constant speed under varying loads makes it ideal for applications such as conveyor systems, machine tools, and fans, where consistent performance is critical.
    </p>
    <h3>Recommendations</h3>
    <ul>
      <li>Future experiments could explore the effects of varying the supply voltage or field current on the motor's performance characteristics.</li>
      <li>Additional tests could be conducted to analyze the motor's behavior under extreme load conditions or during startup.</li>
    </ul>
    <p>
      In conclusion, the experiment provided valuable insights into the performance characteristics of a D.C. shunt motor and demonstrated its suitability for applications requiring stable speed and efficient operation. The results underscore the importance of understanding motor behavior to optimize its use in real-world systems.
    </p>
  `;
  main.appendChild(conclusionSection);

  const precautionsSection = document.createElement("section");
  precautionsSection.innerHTML = `
    <h2>PRECAUTIONS</h2>
    <ul>
      <li>Check all wires and connections for proper insulation to avoid short circuits or electric shocks.</li>
      <li>Do not exceed the rated voltage, current, or power limits of the motor, power supply, or measuring instruments.</li>
      <li>Always turn off the power supply before making or modifying any connections in the circuit.</li>
      <li>Ensure that the circuit is protected with appropriate fuses or circuit breakers to prevent damage in case of overcurrent.</li>
      <li>Ensure that the motor and power supply are properly grounded to avoid electrical hazards.</li>
      <li>Before starting the experiment, verify the motor's rated voltage, current, and speed to ensure it matches the power supply and load conditions.</li>
      <li>Gradually increase or decrease the load on the motor to prevent mechanical stress or damage to the motor shaft.</li>
      <li>Keep an eye on the motor's temperature during operation. If it becomes too hot, reduce the load or turn off the motor to prevent overheating.</li>
      <li>Ensure all electrical connections are tight and secure to avoid loose contacts, which can lead to sparks or inconsistent readings.</li>
      <li>Do not apply a load that exceeds the motor's rated torque capacity, as this can damage the motor or load mechanism.</li>
    </ul>
  `;
  main.appendChild(precautionsSection);

  const referencesSection = document.createElement("section");
  referencesSection.innerHTML = `
    <h2>REFERENCES</h2>
    <ul>
      <li>Elprocus. (n.d.). DC shunt motor: Construction, working principle, circuit diagram. 
        <a href="https://www.elprocus.com/dc-shunt-motor-construction-working-principle-circuit-diagram">https://www.elprocus.com/dc-shunt-motor-construction-working-principle-circuit-diagram</a>
      </li>
      <li>Veetech LLC. (n.d.). Handheld tachometer. 
        <a href="https://www.veetechllc.com/handheld-tachometer">https://www.veetechllc.com/handheld-tachometer</a>
      </li>
      <li>Checkline. (n.d.). HTM handheld tachometer. 
        <a href="https://www.checkline.com/product/HTM">https://www.checkline.com/product/HTM</a>
      </li>
      <li>Hackatronic. (n.d.). What are potentiometers or variable resistors? 
        <a href="https://www.hackatronic.com/what-are-potentiometers-or-variable-resistors/">https://www.hackatronic.com/what-are-potentiometers-or-variable-resistors/</a>
      </li>
      <li>Learning About Electronics. (n.d.). How to build a DC power supply. 
        <a href="https://www.learningaboutelectronics.com/Articles/How-to-build-a-DC-power-supply.php">https://www.learningaboutelectronics.com/Articles/How-to-build-a-DC-power-supply.php</a>
      </li>
      <li>Dolang Skills. (n.d.). DLWD-DJ22-M induction electrical machine trainer. 
        <a href="https://www.dolangskills.com/product/dlwd-dj22-m-induction-electrical-machine-trainer-electrical-laboratory-equipment-electrical-maintenance-of-vocational-education-equipment">https://www.dolangskills.com/product/dlwd-dj22-m-induction-electrical-machine-trainer-electrical-laboratory-equipment-electrical-maintenance-of-vocational-education-equipment</a>
      </li>
    </ul>
  
    <h3>External Sources</h3>
    <p>This is an elaborate feature that compiles online resources to deepen your understanding of the experiment and conduct further learning.</p>
    <p>Here’s a non-exhaustive list:</p>
  
    <div class="video-resources">
      <ul>
        <li><a href="https://youtube.com/playlist?list=PLL6Ah8JHS-GAlGi82CSbsIxjNVhPOm_bi">DC Motor by Ekeeda</a></li>
        <li><a href="https://youtube.com/playlist?list=PLnOxbyMtAUofKVKLfGUWcRclZWvPYMH7M">H01T 34 DC Motors</a></li>
        <li><a href="https://youtube.com/playlist?list=PL4C4A85A0D9F63D8C">Electric Motors by Engineering Mindset</a></li>
      </ul>
    </div>
  `;
  main.appendChild(referencesSection);

  const hover = createHover("#");
  main.appendChild(hover);
  const download = createDownload("#");
  main.appendChild(download);
};

const displayEE206 = () => {
  const main = reset();
  const head = document.createElement("h1");
  head.textContent = "Single Phase Transformer";
  main.appendChild(head);

  const aim = document.createElement("section");
  const aimHead = document.createElement("h2");
  aimHead.textContent = "AIMS";
  aim.appendChild(aimHead);
  const aimList = document.createElement("ul");
  const aims = [
    "To verify that the voltage ratio between the primary voltage and secondary voltage of a transformer is equal to the turns winding ratio",
    "To study the characteristics of a transformer on No-load and on Load",
  ];
  let list2 = [];
  for (let i = 0; i < aims.length; i++) {
    list2[i] = document.createElement("li");
    list2[i].textContent = aims[i];
    aimList.appendChild(list2[i]);
  }
  aim.appendChild(aimList);

  const objective = document.createElement("section");
  const objHead = document.createElement("h2");
  objHead.textContent = "OBJECTIVES";
  objective.appendChild(objHead);
  const objList = document.createElement("ul");
  const objectives = [
    "For the Transformer Ratio test: To show that secondary to primary voltage ratio (Vs/Vp) equals secondary turns to primary turns (Ns/Np)",
    "For the Transformer No Load test: To demonstrate that power losses (called corelosses) occur internally in a transformer.",
    "For the Transformer Load test: To determine transformer efficiency (i.e ratio of output power to input power)",
  ];
  let list = [];
  for (let i = 0; i < objectives.length; i++) {
    list[i] = document.createElement("li");
    list[i].textContent = objectives[i];
    objList.appendChild(list[i]);
  }
  objective.appendChild(objList);
  main.appendChild(aim);
  main.appendChild(objective);
  const appHead = document.createElement("h2");
  appHead.textContent = "Apparatus";
  main.appendChild(appHead);
  const section = document.createElement("section");
  section.classList.add("appBox");
  const apparatus = [
    {
      cap: "Variac 0 - 270v, 8A.2KVA ",
      image: pic2,
    },
    {
      cap: "Transformer Foster Type 2/3",
      image: pic3,
    },
    {
      cap: "A.C Voltmeter 0 - 100v",
      image: pic4,
    },
    {
      cap: "A.C Ammeter 0 – 10A",
      image: pic5,
    },
    {
      cap: "Low power factor wattmeter",
      image: pic6,
    },
    {
      cap: "Wattmeter 1/510A ( 25/240/600V)",
      image: pic7,
    },
    {
      cap: "Resistance load bank",
      image: pic8,
    },
  ];
  let appBox = [];
  let appImage = [];
  let appCaption = [];
  for (let i = 0; i < apparatus.length; i++) {
    appBox[i] = document.createElement("div");
    appImage[i] = document.createElement("img");
    appCaption[i] = document.createElement("p");
    appImage[i].src = apparatus[i].image;
    appCaption[i].textContent = apparatus[i].cap;
    appBox[i].appendChild(appImage[i]);
    appBox[i].appendChild(appCaption[i]);
    section.appendChild(appBox[i]);
  }
  main.appendChild(section);
  const theory = document.createElement("section");
  const theoHead = document.createElement("h2");
  theoHead.textContent = "THEORY";
  theory.appendChild(theoHead);
  const explain = document.createElement("div");
  explain.textContent =
    "A transformer is a passive device that moves electrical energy from one circuit to another. The electromagnetic induction concept provides the foundation for energy transfer by altering the voltage and current levels. Transformers are devices that use electromagnetic induction to transmit electrical energy between two or more circuits.Transformers fall into two primary categories according on their voltage ratio:";
  theory.appendChild(explain);
  const explain1 = document.createElement("div");
  explain1.textContent =
    " Transformers fall into two primary categories according on their voltage ratio:";
  theory.appendChild(explain1);
  const categories = [
    {
      title: "Step-up transformer:",
      text: "The secondary winding of a step-up transformer has more turns than the main winding. At the secondary output, this lowers the current and raises the voltage. Step-up transformers are utilized in situations like power transmission where a high voltage is required. This device raises the voltage (for example, from 110V to 220V) from the primary to the secondary winding",
      image: "",
    },
    {
      title: "Step-down transformer:",
      text: "The secondary winding of a step-down transformer has fewer turns than the primary winding. At the secondary output, this lowers the voltage and raises the current. When a low voltage is required, as to power electronic equipment, step-down transformers are employed. Reduces the voltage (e.g., from 220V to 110V) from the primary to the secondary winding.",
      image: "",
    },
  ];
  categories.forEach((item) => {
    theory.appendChild(createDivs(item));
  });
  const description = document.createElement("p");
  description.textContent = "Applications of transformers include:";

  theory.appendChild(description);
  const part = [
    {
      title: "Power Distribution:",
      text: "Transformers are crucial in the distribution of electrical power across long distances. High-voltage transformers step up the voltage for efficient transmission and then step it down for safe residential and commercial use.",
      image: "",
    },
    {
      title: "Electronics:",
      text: "Used in power supplies for electronic devices, audio systems, and various other applications.",
      image: "",
    },
    {
      title: "Industrial Applications:",
      text: "Transformers are used in manufacturing and industrial processes where specific voltage levels are required.",
      image: "",
    },
  ];
  part.forEach((item) => {
    theory.appendChild(createDivs(item));
  });

  const utubeDiv = document.createElement("div");
  const utube = document.createElement("p");
  utube.textContent =
    "Watch the video below to learn more about transformers and their applications:";

  const uvideo = document.createElement("div");
  uvideo.innerHTML =
    '<iframe width="590" height="332" src="https://www.youtube.com/embed/8BSoNsZuTkE" title="Transformer: Introduction and Principle of Working (1)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';

  utubeDiv.appendChild(utube);
  utubeDiv.appendChild(uvideo);

  theory.appendChild(utubeDiv);

  main.appendChild(theory);

  
  const diagramsSection = document.createElement("section");
  diagramsSection.className = "diagrams-section"; // Add styling class

  const diagramHead = document.createElement("h2");
  diagramHead.innerText = "DIAGRAMS";
  diagramsSection.appendChild(diagramHead);

  const diagrams = [
      {
        cap: "WORKING DIAGRAM SHOWING TRANSFORMER RATIO TEST",
        image: pic9,
      },
      {
        cap: "WORKING DIAGRAM SHOWING TRANSFORMER NO – LOAD TEST",
        image: pic10,
      },
      {
        cap: "WORKING DIAGRAM SHOWING TRANSFORMER LOAD TEST",
        image: pic11,
      },
    ];
  let diagramBox = [];
  let diagramImage = [];
  let diagramCaption = [];
  for (let i = 0; i < diagrams.length; i++) {
    diagramBox[i] = document.createElement("div");
    diagramBox[i].className = "diagram-container"; // Add container class

    diagramImage[i] = document.createElement("img");
    diagramImage[i].className = "diagram-image"; // Add image class
    diagramImage[i].src = diagrams[i].image;
    diagramImage[i].alt = diagrams[i].cap; // Add accessibility attribute

    diagramCaption[i] = document.createElement("p");
    diagramCaption[i].className = "diagram-caption"; // Add caption class
    diagramCaption[i].textContent = diagrams[i].cap;

    diagramBox[i].appendChild(diagramImage[i]);
    diagramBox[i].appendChild(diagramCaption[i]);
    diagramsSection.appendChild(diagramBox[i]);
  }

  main.appendChild(diagramsSection);

  // const diagramsSection = document.createElement("section");
  // const diagramHead = document.createElement("h2");
  // diagramHead.innerText = "DIAGRAMS";

  // diagramsSection.appendChild(diagramHead);

  // const diagrams = [
  //   {
  //     cap: "WORKING DIAGRAM SHOWING TRANSFORMER RATIO TEST",
  //     image: pic9,
  //   },
  //   {
  //     cap: "WORKING DIAGRAM SHOWING TRANSFORMER NO – LOAD TEST",
  //     image: pic10,
  //   },
  //   {
  //     cap: "WORKING DIAGRAM SHOWING TRANSFORMER LOAD TEST",
  //     image: pic11,
  //   },
  // ];
  // let diagramBox = [];
  // let diagramImage = [];
  // let diagramCaption = [];
  // for (let i = 0; i < diagrams.length; i++) {
  //   diagramBox[i] = document.createElement("div");
  //   diagramImage[i] = document.createElement("img");
  //   diagramCaption[i] = document.createElement("p");
  //   diagramImage[i].src = diagrams[i].image;
  //   diagramCaption[i].textContent = diagrams[i].cap;
  //   diagramBox[i].appendChild(diagramImage[i]);
  //   diagramBox[i].appendChild(diagramCaption[i]);
  //   diagramsSection.appendChild(diagramBox[i]);
  // }

  // main.appendChild(diagramsSection);
  const practicals = document.createElement("section");
  const step1 = document.createElement("h2");
  step1.textContent = "PROCEDURE";

  practicals.appendChild(step1);
  const step4 = document.createElement("h3");
  step4.textContent = "TRANSFER RATIO TEST";
  practicals.appendChild(step4);
  const stepList2 = document.createElement("ul");
  stepList2.classList.add("stepboxlist");
  const steps2 = [
    "Set Variac control dial to zero (0) position",
    "Connect up the variac, the voltmeter V₁ (0-220), the amimeter (0-1A), and the transformer. as in the working diagram fig 22-1-1",
    "Connect the voltmeter V₂ (0-100V) across the secondary terminals a₁-a₂.",
    "(i) Connect the variac to mains supply and switch-ON \n (ii) Turn variac dial to obtain 220V on V₁.",
    "Record on table 206-1 the values of V₁, V₂ and the primary and secondary turns (as marked on transformer).",
    "Connect voltmeter V₂ in turn across terminals (a₁-a₂) (a₁-a₃) (a₁-a₄) (a₁-a₅) and repeat (5)",
    "Fill-up table 206-1.",
  ];
  let stepBox2 = [];
  for (let i = 0; i < steps2.length; i++) {
    stepBox2[i] = document.createElement("li");

    stepBox2[i].textContent = steps2[i];
    stepList2.appendChild(stepBox2[i]);
  }
  practicals.appendChild(stepList2);

  const step3 = document.createElement("h3");
  step3.textContent = "NO-LOAD TEST";
  practicals.appendChild(step3);
  const stepList1 = document.createElement("ul");
  stepList1.classList.add("stepboxlist");
  const steps1 = [
    "Reduce variac output to zero (0) and switch-OFF mains",
    "(i) Connect up the circuit of Fig. 22-1-2 leaving the secondary terminals open circuit. Use the wattmeter (0-12W). \n (ii) Get the supervisor to check the circuit (you may also need the help of a supervisor to connect up the wattmeter).",
    "Switch-ON mains to variac and turn variac control to obtain 40V on voltmeter V₁.",
    "(i) Connect the variac to mains supply and switch-ON \n (ii) Turn variac dial to obtain 220V on V₁.",
    "Take ammeter and wattmeter readings and record on table 206-2 as I₁ and W₁, respectively.",
    " Vary variac control to obtain 80, 120, 160, 200, and 220V in turn on voltmeter V₁, and repeat (11) at each setting. \n(i) Fill up table 206-2. \n(ii) Plot graph of primary voltage (V₁) vs loss (W).",
  ];
  let stepBox1 = [];
  for (let i = 0; i < steps1.length; i++) {
    stepBox1[i] = document.createElement("li");
    stepBox1[i].textContent = steps1[i];
    stepList1.appendChild(stepBox1[i]);
  }
  practicals.appendChild(stepList1);

  const step5 = document.createElement("h3");
  step5.textContent = "LOAD TEST";
  practicals.appendChild(step5);
  const stepList3 = document.createElement("ul");
  stepList3.classList.add("stepboxlist");
  const steps4 = [
    'Turn variac dial to "0" position, and switch-OFF mains from the variac.',
    "Connect up the circuit of Load test ",
    "Connect mains to load bank and switch ON fan. (Do not use load bank itif fan is not working)",
    "Switch ON mains to variac and vary dial to obtain 220V in voltmeter V₁.",
    "Switch one of load bank dials to position 400 and use its associated TRIMMER control to set the current on A₂ to 2A.",
    "Record the readings of V₂, V₂, A₁, A₂, and wattmeter on table 206-4.",
    "Use the load bank dial switches and trimmers, set the reading of A₁ to 4, 6, 8, and 10A respectively, and repeat (19) at each setting.",
    'Turn variac dial to "0" position and switch-OFF mains to variac.',
    "Fill-up table 206-3",
  ];
  let stepBox3 = [];
  for (let i = 0; i < steps4.length; i++) {
    stepBox3[i] = document.createElement("li");
    stepBox3[i].textContent = steps4[i];
    stepList3.appendChild(stepBox3[i]);
  }
  practicals.appendChild(stepList3);

  // i am supposed to implemetnresults and tables her but e npo make sense

  main.appendChild(practicals);
  const precaution = document.createElement("section");
  const cautionHead = document.createElement("h3");
  cautionHead.textContent = "PRECAUTIONS";
  precaution.appendChild(cautionHead);
  const cautionList = document.createElement("ul");
  const precautions = [
    "I avoided error due to parallax when taking the readings ",
    "I ensured all measuring instruments (voltmeters, ammeters etc) were calibrated and were in good working condition for accurate measurements",
    "I ensured that I didn’t  touch live circuits to avoid getting electrocuted",
  ];
  let cautionBox = [];
  for (let i = 0; i < precautions.length; i++) {
    cautionBox[i] = document.createElement("li");
    cautionBox[i].textContent = precautions[i];
    cautionList.appendChild(cautionBox[i]);
  }
  precaution.appendChild(cautionList);
  main.appendChild(precaution);
  const conclusion = document.createElement("section");
  const concHead = document.createElement("h3");
  concHead.textContent = "CONCLUSION:";
  conclusion.appendChild(concHead);
  const concText = document.createElement("p");
  concText.textContent =
    "At the end of this experiment, we were able to verify that the voltage ratio between the primary voltage and secondary voltage and secondary voltage of a transformer is equal to the turns winding ratio and also able to understand the characteristics of a transformer on No-load and on load and also draw the graphs required";
  conclusion.appendChild(concText);
  main.appendChild(conclusion);
  const references = document.createElement("section");
  const refHead = document.createElement("h3");
  refHead.textContent = "REFERENCES";
  references.appendChild(refHead);
  const refList = document.createElement("ul");
  refList.classList.add("stepboxlist");
  const reference = [
    "Electric Machinery Fundamentals by Stephen J. Chapman",
    "Electrical Engineering Laboratory Manual by the Department of Electrical Engineering, University of Benin.",
    "Fundamentals of Electric Circuits by Charles K. Alexander & Matthew N. O. Sadiku",
  ];
  let refBox = [];
  for (let i = 0; i < reference.length; i++) {
    refBox[i] = document.createElement("li");
    refBox[i].textContent = reference[i];
    refList.appendChild(refBox[i]);
  }
  references.appendChild(refList);
  main.appendChild(references);
  const hover = createHover("#");
  main.appendChild(hover);
  const download = createDownload("#");
  main.appendChild(download);
};

const displayEE205 = () => {
  const main = reset();
  const head = document.createElement("h1");
  head.textContent = "The Oscilloscope";
  main.appendChild(head);

  const aim = document.createElement("section");
  const aimHead = document.createElement("h2");
  aimHead.textContent = "AIMS";
  const aimSubHead = document.createElement("p");
  aimSubHead.textContent =
    "The experiment is aimed at introducing the oscilloscope as a measuring instrument to the student in particular .We aim to fulfill the following;";
  aim.appendChild(aimHead);
  aim.appendChild(aimSubHead);
  const aimList = document.createElement("ul");
  const aims = [
    "Find the deflection sensitivity on an oscilloscope",
    "Measure the DC and AC voltages",
    "Measure the frequency of mains supply and of oscillator",
  ];
  let list2 = [];
  for (let i = 0; i < aims.length; i++) {
    list2[i] = document.createElement("li");
    list2[i].textContent = aims[i];
    aimList.appendChild(list2[i]);
  }
  aim.appendChild(aimList);

  main.appendChild(aim);
  //   const objective = document.createElement("section");
  //   const objHead = document.createElement("h2");
  //   objHead.textContent = "OBJECTIVES";
  //   objective.appendChild(objHead);
  //   const objList = document.createElement("ul");
  //   const objectives = [
  //     "For the Transformer Ratio test: To show that secondary to primary voltage ratio (Vs/Vp) equals secondary turns to primary turns (Ns/Np)",
  //     "For the Transformer No Load test: To demonstrate that power losses (called corelosses) occur internally in a transformer.",
  //     "For the Transformer Load test: To determine transformer efficiency (i.e ratio of output power to input power)",
  //   ];
  //   let list = [];
  //   for (let i = 0; i < objectives.length; i++) {
  //     list[i] = document.createElement("li");
  //     list[i].textContent = objectives[i];
  //     objList.appendChild(list[i]);
  //   }
  //   objective.appendChild(objList);
  //   main.appendChild(aim);
  //   main.appendChild(objective);
  const appHead = document.createElement("h2");
  appHead.textContent = "Apparatus";
  main.appendChild(appHead);
  const section = document.createElement("section");
  section.classList.add("appBox");

  const apparatus = [
    {
      cap: "Oscilloscope Type",
      image: ee2051,
    },
    {
      cap: "DC power supply",
      image: ee2052,
    },
    {
      cap: "2 Amp Variac",
      image: ee2053,
    },
    {
      cap: "A.C voltmeter{0-100v}",
      image: ee2054,
    },
    {
      cap: "Signal Generator {Oscilator}",
      image: ee2055,
    },
  ];
  let appBox = [];
  let appImage = [];
  let appCaption = [];
  for (let i = 0; i < apparatus.length; i++) {
    appBox[i] = document.createElement("div");
    appImage[i] = document.createElement("img");
    appCaption[i] = document.createElement("p");
    appImage[i].src = apparatus[i].image;
    appCaption[i].textContent = apparatus[i].cap;
    appBox[i].appendChild(appImage[i]);
    appBox[i].appendChild(appCaption[i]);
    section.appendChild(appBox[i]);
  }
  main.appendChild(section);
  const missingFunction = (item) => {
    const container = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = item.title;
    const text = document.createElement("p");
    text.textContent = item.text;
    container.appendChild(title);
    container.appendChild(text);
    return container;
  };

  const theory = document.createElement("section");
  const theoHead = document.createElement("h2");
  theoHead.textContent = "THEORY";
  theory.appendChild(theoHead);

  const explain = document.createElement("div");
  explain.textContent =
    'The oscilloscope is an electronic instrument widely used in making electronic measurements. The most noteworthy attribute of an (ideal) oscilloscope is that it does not affect the quantity being measured. The main component of the scope is the cathode-ray tube, or CRT. The CRT consists of a vacuum tube in which electrons are "boiled off" a cathode and accelerated, using an electric field, towards a phosphorescent screen. When the electrons strike the screen, a burst of light is given off. The beam is deflected along the way by vertical and horizontal plates that use electric fields to deflect the electrons.';
  theory.appendChild(explain);

  const explain1 = document.createElement("div");
  explain1.textContent =
    "The screen of the oscilloscope has a grid on it called a gradecule. The gradecule is used to read information from the screen of the oscilloscope. The dials on the oscilloscope give the scale of the gradecule in VOLTS/DIVISION in the vertical direction and SECONDS/DIVISION in the horizontal direction.";
  theory.appendChild(explain1);

  const typesTitle = document.createElement("h3");
  typesTitle.textContent = "Types Of Oscilloscope:";
  theory.appendChild(typesTitle);

  const oscilloscopeTypes = [
    "Digital Oscilloscope",
    "Analog Oscilloscope",
    "USB Oscilloscope",
    "Portable Oscilloscope",
  ];
  oscilloscopeTypes.forEach((type) => {
    const typeItem = document.createElement("li");
    typeItem.textContent = type;
    theory.appendChild(typeItem);
  });

  const basicComponentsTitle = document.createElement("h3");
  basicComponentsTitle.textContent = "Basic Components and Functionality";
  theory.appendChild(basicComponentsTitle);

  const basicComponents = [
    {
      title: "Display:",
      text: "The screen where the waveform is displayed. Modern oscilloscopes use LCD or LED screens.",
    },
    {
      title: "Vertical System:",
      text: "Controls the vertical axis (Y-axis) of the display, representing voltage. It includes Vertical Sensitivity (Volts/Div) and Position Control.",
    },
    {
      title: "Horizontal System:",
      text: "Controls the horizontal axis (X-axis) of the display, representing time. It includes Time Base (Sec/Div) and Position Control.",
    },
    {
      title: "Trigger System:",
      text: "Synchronizes the horizontal sweep at the correct point of the signal to produce a stable waveform display. Includes Trigger Level and Trigger Slope.",
    },
    {
      title: "Input Channels:",
      text: "Oscilloscopes usually have multiple input channels (e.g., CH1, CH2) for comparing multiple signals simultaneously.",
    },
    {
      title: "Probes:",
      text: "Used to connect the oscilloscope to the circuit under test. Probes may have attenuation settings (e.g., 1x, 10x) to reduce signal amplitude.",
    },
  ];
  basicComponents.forEach((component) => {
    theory.appendChild(missingFunction(component));
  });

  const applicationsTitle = document.createElement("h3");
  applicationsTitle.textContent =
    "Here are some basic practical applications of different types of oscilloscope:";
  theory.appendChild(applicationsTitle);

  const applications = [
    {
      title: "1. Analog Oscilloscopes",
      text: "Ideal for observing simple waveforms and transient signals in analog circuits. Common applications include education, audio testing, and basic signal analysis.",
    },
    {
      title: "2. Digital Storage Oscilloscopes (DSOs)",
      text: "Capable of capturing and analyzing complex waveforms with high precision. Used for troubleshooting digital circuits and storing signal data for analysis.",
    },
  ];
  applications.forEach((application) => {
    theory.appendChild(missingFunction(application));
  });

  const utubeDiv = document.createElement("div");
  const utube = document.createElement("p");
  utube.textContent =
    "Watch the video below to learn more about oscilloscopes and their applications:";

  const uvideo = document.createElement("div");
  uvideo.innerHTML =
    '<iframe width="590" height="332" src="https://www.youtube.com/embed/8BSoNsZuTkE" title="Oscilloscope: Introduction and Principle of Working" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';

  utubeDiv.appendChild(utube);
  utubeDiv.appendChild(uvideo);

  main.appendChild(theory);

  const diagramsSection = document.createElement("section");
  const diagramHead = document.createElement("h2");
  diagramHead.innerText = "DIAGRAMS";

  diagramsSection.appendChild(diagramHead);

  //   const diagrams = [
  //     {
  //       cap: "WORKING DIAGRAM SHOWING TRANSFORMER RATIO TEST",
  //       image: pic9,
  //     },
  //     {
  //       cap: "WORKING DIAGRAM SHOWING TRANSFORMER NO – LOAD TEST",
  //       image: pic10,
  //     },
  //     {
  //       cap: "WORKING DIAGRAM SHOWING TRANSFORMER LOAD TEST",
  //       image: pic11,
  //     },
  //   ];
  //   let diagramBox = [];
  //   let diagramImage = [];
  //   let diagramCaption = [];
  //   for (let i = 0; i < diagrams.length; i++) {
  //     diagramBox[i] = document.createElement("div");
  //     diagramImage[i] = document.createElement("img");
  //     diagramCaption[i] = document.createElement("p");
  //     diagramImage[i].src = diagrams[i].image;
  //     diagramCaption[i].textContent = diagrams[i].cap;
  //     diagramBox[i].appendChild(diagramImage[i]);
  //     diagramBox[i].appendChild(diagramCaption[i]);
  //     diagramsSection.appendChild(diagramBox[i]);
  //   }

  //   main.appendChild(diagramsSection);
  const practicals = document.createElement("section");

  // A. IDENTIFICATION AND SETUP OF OSCILLOSCOPE CONTROL
  const step1 = document.createElement("h2");
  step1.textContent = "PROCEDURES";
  practicals.appendChild(step1);

  const setupTitle = document.createElement("h3");
  setupTitle.textContent = "IDENTIFICATION AND SETUP OF OSCILLOSCOPE CONTROL";
  practicals.appendChild(setupTitle);

  const setupSteps = [
    "Connect mains to the DC supply unit and oscilloscope and switch ON.",
    "Select the autoset button, switch on channel-1 (CH1) and switch OUT channel-2 (CH2). Select the display, press (F3 button to change YT to XY). NB: For a different model the function F3 might be different.",
    "Set channel-1 horizontal POSITION controls at its midpoint setting, Gain control to 50v/cm (or 50v/DIV). Set channel-INPUT switch to DC.",
    "Set variable time base control to CAL, switch trigger level control to FREE run, set Horizontal position control to midpoint setting.",
    "Adjust the vertical switch (CH2) and/or horizontal (CH1) position controls until the spot is positioned at the center of the screen.",
  ];
  const setupList = document.createElement("ul");
  setupList.classList.add("stepboxlist");
  setupSteps.forEach((step) => {
    const li = document.createElement("li");
    li.textContent = step;
    setupList.appendChild(li);
  });
  practicals.appendChild(setupList);

  // B. MEASUREMENT OF DC VOLTAGES
  const dcTitle = document.createElement("h3");
  dcTitle.textContent = "MEASUREMENT OF DC VOLTAGES";
  practicals.appendChild(dcTitle);

  const dcSteps = [
    "Connect the BNC end of the oscilloscope lead to channel-1 input of the oscilloscope, connect the other end of the lead to the output terminals of the supply unit. The signal load (center core, polyethylene sheath) connects to the positive terminal of the DC supply unit.",
    "Connect mains to the supply unit and switch ON. Adjust the output of the DC supply unit to read 5V on the voltmeter.",
    "Measure the deflection of the spot (in cm) from the center of the screen and record.",
    "Adjust the output of the DC supply unit to read 10V and 15V in sequence and measure the corresponding spot deflection (in cm). Record.",
    "Reverse the connections at the DC supply unit and repeat the deflection measurements for 5V, 10V, and 15V outputs. Record.",
    "Switch OFF all power connections to the equipment.",
  ];
  const dcList = document.createElement("ul");
  dcList.classList.add("stepboxlist");
  dcSteps.forEach((step) => {
    const li = document.createElement("li");
    li.textContent = step;
    dcList.appendChild(li);
  });
  practicals.appendChild(dcList);

  // C. MEASUREMENT OF AC VOLTAGE
  const acTitle = document.createElement("h3");
  acTitle.textContent = "MEASUREMENT OF AC VOLTAGE";
  practicals.appendChild(acTitle);

  const acSteps = [
    "Set the variac output dial to zero (0) and connect the variac in place of the AC supply unit.",
    "Connect the AC voltmeter (0-100V range) across the output terminals of the variac. Ensure channel-1 VOLTS/DIV control remains at 50V/cm. Change channel-1 input switch to AC.",
    "Connect variac to mains and switch ON. Adjust the variac control dial until the AC voltmeter reads 2V. Switch ON the oscilloscope.",
    "A vertical or horizontal line appears on the screen. Measure the length of the line (in cm) and record.",
    "Vary the variac to obtain voltmeter readings of 4V, 6V, and 8V. Repeat the measurement at each reading.",
  ];
  const acList = document.createElement("ul");
  acList.classList.add("stepboxlist");
  acSteps.forEach((step) => {
    const li = document.createElement("li");
    li.textContent = step;
    acList.appendChild(li);
  });
  practicals.appendChild(acList);

  // D. MEASUREMENT OF MAINS FREQUENCY
  const mainsFreqTitle = document.createElement("h3");
  mainsFreqTitle.textContent = "MEASUREMENT OF MAINS FREQUENCY";
  practicals.appendChild(mainsFreqTitle);

  const mainsFreqSteps = [
    "Set the variac control dial back to zero volts. On the oscilloscope, select the display button and press the F3 button to change from XY to YT format.",
    "Set the TIME/DIV control to 5ms/cm.",
    "Adjust the variac output until the waveform covers more than half the screen.",
    "Measure the distance (in cm) between equiphase points (or peaks) using the graticule on the screen and record.",
  ];
  const mainsFreqList = document.createElement("ul");
  mainsFreqList.classList.add("stepboxlist");
  mainsFreqSteps.forEach((step) => {
    const li = document.createElement("li");
    li.textContent = step;
    mainsFreqList.appendChild(li);
  });
  practicals.appendChild(mainsFreqList);

  // E. MEASUREMENT OF OSCILLATOR FREQUENCY
  const oscFreqTitle = document.createElement("h3");
  oscFreqTitle.textContent = "MEASUREMENT OF OSCILLATOR FREQUENCY";
  practicals.appendChild(oscFreqTitle);

  const oscFreqSteps = [
    "Switch OFF mains to the variac. Disconnect the variac and the AC voltmeter from the circuit. Reset the VOLTS/DIV of the oscilloscope to 2V/cm.",
    "Set the oscillator to sine wave operation and select a frequency of 1000Hz. Connect mains to the oscillator output terminal and connect the screen leads of the oscillator.",
    "Adjust the TIME/DIV control so that one complete period of the wave occupies nearly the width of the screen.",
    "Measure the distance (in cm) between equiphase points (or peaks) using the screen graticule and record. Repeat the procedure for 5000Hz and 10000Hz.",
  ];
  const oscFreqList = document.createElement("ul");
  oscFreqList.classList.add("stepboxlist");
  oscFreqSteps.forEach((step) => {
    const li = document.createElement("li");
    li.textContent = step;
    oscFreqList.appendChild(li);
  });
  practicals.appendChild(oscFreqList);

  main.appendChild(practicals);

  const results = document.createElement("section");
  const resultHeader = document.createElement("h2");
  resultHeader.textContent = "Results";
  results.appendChild(resultHeader);

  const resultDisclaimer = document.createElement("p");
  resultDisclaimer.textContent = "Note: These are placeholder or test values not the actual values used during the experiment. This is just to show an example of what to expect. Take down the readings and parameters obtained from the experiment and record them as your table of values";
  resultDisclaimer.classList.add("table-disclaimer");
  results.appendChild(resultDisclaimer);

  const resultsTable = document.createElement("table");
  resultsTable.style.borderCollapse = "collapse";
  resultsTable.style.width = "100%";
  resultsTable.style.marginTop = "20px";

  // Create table header
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  // Create header cells
  const headers = [
    "Voltage (V)",
    "Deflection S(cm)",
    "Deflection Sensitivity D = (V/S)",
  ];
  headers.forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    th.style.border = "1px solid black";
    th.style.padding = "8px";
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  resultsTable.appendChild(thead);

  // Create table body
  const tbody = document.createElement("tbody");

  // Table data
  const tableData = [
    [5, "0.65 ≈ 1.0"],
    [10, "1.65 ≈ 2.0"],
    [15, "2.65 ≈ 3.0"],
    [-5, "-1.4"],
    [-10, "-2.4"],
    [-15, "-3.4"],
  ];

  // Create rows and cells
  tableData.forEach((row) => {
    const tr = document.createElement("tr");

    // Create voltage cell
    const voltageCell = document.createElement("td");
    voltageCell.textContent = row[0];
    voltageCell.style.border = "1px solid black";
    voltageCell.style.padding = "8px";
    tr.appendChild(voltageCell);

    // Create deflection cell
    const deflectionCell = document.createElement("td");
    deflectionCell.textContent = row[1];
    deflectionCell.style.border = "1px solid black";
    deflectionCell.style.padding = "8px";
    tr.appendChild(deflectionCell);

    // Create empty sensitivity cell
    const sensitivityCell = document.createElement("td");
    sensitivityCell.style.border = "1px solid black";
    sensitivityCell.style.padding = "8px";
    tr.appendChild(sensitivityCell);

    tbody.appendChild(tr);
  });

  resultsTable.appendChild(tbody);

  // Add title text above table
  const titleText = document.createElement("p");
  titleText.textContent = "VOLTS/CM SETTING = 50V/cm";
  titleText.style.fontWeight = "bold";
  titleText.style.marginBottom = "10px";

  results.appendChild(titleText);
  results.appendChild(resultsTable);

  // Create Table 205.2
  const table2 = document.createElement("table");
  table2.style.borderCollapse = "collapse";
  table2.style.width = "100%";
  table2.style.marginTop = "30px";

  // Create title for Table 205.2
  const title2 = document.createElement("p");
  title2.textContent = "TABLE 205.2 - VOLTS/cm Setting = 50V/S";
  title2.style.fontWeight = "bold";
  title2.style.marginBottom = "10px";

  // Create header row for Table 205.2
  const thead2 = document.createElement("thead");
  const headerRow2 = document.createElement("tr");

  // Create complex header for voltmeter reading
  const voltmeterHeader = document.createElement("th");
  voltmeterHeader.style.border = "1px solid black";
  voltmeterHeader.style.padding = "8px";
  voltmeterHeader.colSpan = "2";
  voltmeterHeader.textContent = "VOLTMETER READING";

  // Create other headers
  const headers2 = [
    "Length of Trace L (cm)",
    "2Vp",
    "Deflection Sensitivity D = (1 x 2Vp)/L = 2Vp/L",
  ];
  [voltmeterHeader, ...headers2].forEach((text) => {
    const th = document.createElement("th");
    th.textContent = typeof text === "string" ? text : text.textContent;
    th.style.border = "1px solid black";
    th.style.padding = "8px";
    headerRow2.appendChild(text === voltmeterHeader ? text : th);
  });

  // Create subheader row for voltmeter readings
  const subHeaderRow = document.createElement("tr");
  const subHeaders = ["Vrms (V)", "V(peak) = Vrms×√2"];
  subHeaders.forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    th.style.border = "1px solid black";
    th.style.padding = "8px";
    subHeaderRow.appendChild(th);
  });

  thead2.appendChild(headerRow2);
  thead2.appendChild(subHeaderRow);
  table2.appendChild(thead2);

  // Create Table 205.3
  const table3 = document.createElement("table");
  table3.style.borderCollapse = "collapse";
  table3.style.width = "100%";
  table3.style.marginTop = "30px";

  // Create title for Table 205.3
  const title3 = document.createElement("p");
  title3.textContent = "TABLE 205.3";
  title3.style.fontWeight = "bold";
  title3.style.marginBottom = "10px";

  // Create header row for Table 205.3
  const thead3 = document.createElement("thead");
  const headerRow3 = document.createElement("tr");

  // Headers for Table 205.3
  const headers3 = [
    "Set Frequency (Hz)",
    "Equiphase Distance",
    "Time/cm Setting d(cm)",
    "Measured Period T=dx Time/cm (mS)",
    "Measured Frequency F = 1/T (Hz)",
  ];

  headers3.forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    th.style.border = "1px solid black";
    th.style.padding = "8px";
    headerRow3.appendChild(th);
  });

  thead3.appendChild(headerRow3);
  table3.appendChild(thead3);

  // Create tbody for Table 205.3
  const tbody3 = document.createElement("tbody");
  const tableData3 = [
    ["Mains", "4 cm", "5ms", "", ""],
    ["1,000", "4 cm", "250 μs", "", ""],
    ["5,000", "3.6 cm", "50 μs", "", ""],
    ["10,000", "3.8 cm", "25 μs", "", ""],
  ];

  tableData3.forEach((row) => {
    const tr = document.createElement("tr");
    row.forEach((cell) => {
      const td = document.createElement("td");
      td.textContent = cell;
      td.style.border = "1px solid black";
      td.style.padding = "8px";
      tr.appendChild(td);
    });
    tbody3.appendChild(tr);
  });

  table3.appendChild(tbody3);

  // Append everything to results section
  results.appendChild(title2);
  results.appendChild(table2);
  results.appendChild(title3);
  results.appendChild(table3);

  const resultsAnswered = document.createElement("div");
  const resultsAnsweredHead = document.createElement("h3");
  resultsAnsweredHead.textContent = `For "B" the deflection sesitivity is given by Voltage(v)/ Deflection S(cm)`;
  const resList = document.createElement("ul");
  resList.classList.add("stepboxlist");
  const resultsListItems = [
    "V= 5V, S=1cm, Therefore D = V/S = 5v/cm",
    "V= 10V, S=2cm, Therefore D = V/S = 5v/cm",
    "Period T = 40 x 10^-6 x 0.048 = 1.92 x 10^-6 ms, Frequency f = 1/1.92 x 10^-6 = 520.833KHz ",
    "Period T = 20 x 10^-6 x 0.05 = 1 x 10^-6 ms, Frequency f = 1/1 x 10^-6 = 1000KHz ",
  ];
  let resBox = [];
  for (let i = 0; i < resultsListItems.length; i++) {
    resBox[i] = document.createElement("li");
    resBox[i].textContent = resultsListItems[i];
    resList.appendChild(resBox[i]);
  }
  resultsAnswered.appendChild(resList);

  main.appendChild(results);

  //   const precaution = document.createElement("section");
  //   const cautionHead = document.createElement("h3");
  //   cautionHead.textContent = "PRECAUTIONS";
  //   precaution.appendChild(cautionHead);
  //   const cautionList = document.createElement("ul");
  //   const precautions = [
  //     "I avoided error due to parallax when taking the readings ",
  //     "I ensured all measuring instruments (voltmeters, ammeters etc) were calibrated and were in good working condition for accurate measurements",
  //     "I ensured that I didn’t  touch live circuits to avoid getting electrocuted",
  //   ];
  //   let cautionBox = [];
  //   for (let i = 0; i < precautions.length; i++) {
  //     cautionBox[i] = document.createElement("li");
  //     cautionBox[i].textContent = precautions[i];
  //     cautionList.appendChild(cautionBox[i]);
  //   }
  //   precaution.appendChild(cautionList);
  //   main.appendChild(precaution);
  const conclusion = document.createElement("section");
  const concHead = document.createElement("h3");
  concHead.textContent = "CONCLUSION:";
  conclusion.appendChild(concHead);
  const concText = document.createElement("p");
  concText.textContent = `This experiment provided valuable insights into the practical use of an oscilloscope for analyzing electrical signals. By carefully setting up the device and calibrating it, we were able to accurately measure the voltage, frequency, and waveform characteristics of various signals.

Throughout the experiment, we observed and identified different signal patterns, which helped us understand how circuit components behave under different conditions. This included examining both periodic and non-periodic signals, demonstrating the oscilloscope's effectiveness in providing real-time visual representation and detailed analysis of electrical phenomena.

We also learned the significance of proper probe usage, grounding, and signal conditioning to ensure accurate measurements. Adjusting the oscilloscope settings and verifying connections helped us minimize any noise or signal distortion.

Overall, this experiment underscored the oscilloscope's importance as a tool for analyzing and diagnosing electronic circuits. The hands-on experience we gained has strengthened our foundational knowledge and prepared us for more advanced applications in future studies and professional practice.
`;
  conclusion.appendChild(concText);
  main.appendChild(conclusion);
  const references = document.createElement("section");
  const refHead = document.createElement("h3");
  refHead.textContent = "REFERENCES";
  references.appendChild(refHead);
  const refList = document.createElement("ul");
  refList.classList.add("stepboxlist");
  const reference = [
    `"The Art of Electronics" by Paul Horowitz and Winfield Hill`,
    "Electrical Engineering Laboratory Manual by the Department of Electrical Engineering, University of Benin.",
    `"Fundamentals of Oscilloscope Operation" - Tektronix Application Note`,
    `"Oscilloscopes: A Manual for Students, Engineers, and Scientists" by Heinz M. H. Smith`,
  ];
  let refBox = [];
  for (let i = 0; i < reference.length; i++) {
    refBox[i] = document.createElement("li");
    refBox[i].textContent = reference[i];
    refList.appendChild(refBox[i]);
  }
  references.appendChild(refList);
  main.appendChild(references);
  const hover = createHover("#");
  main.appendChild(hover);
  const download = createDownload("#");
  main.appendChild(download);
};

const displayEE207 = () => {
  const main = reset();
  const head = document.createElement("h1");
  head.textContent = "D.C Generator";
  main.appendChild(head);

  const aim = document.createElement("section");
  const aimHead = document.createElement("h2");
  aimHead.textContent = "AIMS";
  const aimSubHead = document.createElement("p");
  aimSubHead.textContent =
    "The experiment is aimed at introducing the oscilloscope as a measuring instrument to the student in particular .We aim to fulfill the following;";
  aim.appendChild(aimHead);
  aim.appendChild(aimSubHead);
  const aimList = document.createElement("ul");
  const aims = [
    "To obtain the open circuit characteristics of a D.C generator by separately exciting the field winding",
    "Measure the DC and AC voltages",
    `To obtain the load characteristics of 
      \n A Separately excited D.C generator
      \n B Shunt excited D.C generator
`,
  ];
  let list2 = [];
  for (let i = 0; i < aims.length; i++) {
    list2[i] = document.createElement("li");
    list2[i].textContent = aims[i];
    aimList.appendChild(list2[i]);
  }
  aim.appendChild(aimList);

  main.appendChild(aim);
  const objective = document.createElement("section");
  const objHead = document.createElement("h2");
  objHead.textContent = "OBJECTIVES";
  objective.appendChild(objHead);
  const objList = document.createElement("ul");
  const objectives = [
    "For the Transformer Ratio test: To show that secondary to primary voltage ratio (Vs/Vp) equals secondary turns to primary turns (Ns/Np)",
    "For the Transformer No Load test: To demonstrate that power losses (called corelosses) occur internally in a transformer.",
    "For the Transformer Load test: To determine transformer efficiency (i.e ratio of output power to input power)",
  ];
  let list = [];
  for (let i = 0; i < objectives.length; i++) {
    list[i] = document.createElement("li");
    list[i].textContent = objectives[i];
    objList.appendChild(list[i]);
  }
  objective.appendChild(objList);
  main.appendChild(aim);
  main.appendChild(objective);
  const appHead = document.createElement("h2");
  appHead.textContent = "Apparatus";
  main.appendChild(appHead);
  const section = document.createElement("section");
  section.classList.add("appBox");

  const apparatus = [
    {
      cap: "Electrical Machine Tutor - Model",
      image: ee2071,
    },
    {
      cap: "Power supply panel with meters",
      image: ee2072,
    },
    {
      cap: "500 ohms rheostat",
      image: ee2073,
    },
    {
      cap: "Tachometer",
      image: ee2074,
    },
    {
      cap: "0-200 rheostat",
      image: ee2075,
    },
  ];
  let appBox = [];
  let appImage = [];
  let appCaption = [];
  for (let i = 0; i < apparatus.length; i++) {
    appBox[i] = document.createElement("div");
    appImage[i] = document.createElement("img");
    appCaption[i] = document.createElement("p");
    appImage[i].src = apparatus[i].image;
    appCaption[i].textContent = apparatus[i].cap;
    appBox[i].appendChild(appImage[i]);
    appBox[i].appendChild(appCaption[i]);
    section.appendChild(appBox[i]);
  }
  main.appendChild(section);

  const missingFunction = (item) => {
    const container = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = item.title;
    const text = document.createElement("p");
    text.textContent = item.text;
    container.appendChild(title);
    container.appendChild(text);
    return container;
  };

  const theory = document.createElement("section");
const theoHead = document.createElement("h2");
theoHead.textContent = "THEORY";
theory.appendChild(theoHead);

const explain = document.createElement("div");
explain.textContent =
  "A DC generator is a crucial electrical machine that plays a fundamental role in converting mechanical energy into direct current (DC) electrical energy. It operates based on the principle of electromagnetic induction, discovered by Michael Faraday. This principle states that a change in magnetic flux through a conductor induces an electromotive force (EMF), which in turn generates an electric current. DC generators are widely used in various applications such as power generation, battery charging, and providing backup power in industries and commercial settings.";
theory.appendChild(explain);

const partsTitle = document.createElement("h3");
partsTitle.textContent = "Key Parts of a DC Generator:";
theory.appendChild(partsTitle);

const parts = [
  {
    title: "Stator:",
    text: "The stator is the stationary part of the DC generator responsible for providing the necessary magnetic field. It consists of field windings that generate a steady magnetic field when current flows through them. The stator also includes a steel frame for mechanical support and a laminated core to minimize energy losses due to eddy currents.",
  },
  {
    title: "Rotor (Armature):",
    text: "The rotor, also known as the armature, is the rotating component of the generator. It houses the armature windings, which are conductors placed in slots within the laminated core. As the rotor spins within the magnetic field, it cuts through the magnetic lines of force, inducing an electromotive force (EMF). The armature is mounted on a shaft that transfers mechanical energy to electrical energy efficiently.",
  },
  {
    title: "Commutator:",
    text: "A crucial part of the DC generator, the commutator is a cylindrical structure made of segmented copper plates insulated from each other by mica. It plays a vital role in converting the alternating current (AC) generated in the armature windings into a unidirectional DC output by periodically reversing the current direction.",
  },
  {
    title: "Brushes:",
    text: "Brushes are made of carbon or graphite and are designed to maintain continuous electrical contact between the rotating commutator and the external circuit. These brushes ensure efficient current collection and smooth operation of the generator.",
  },
];
parts.forEach((part) => {
  theory.appendChild(missingFunction(part));
});

const principleTitle = document.createElement("h3");
principleTitle.textContent = "Working Principle of a Direct Current (D.C) Generator:";
theory.appendChild(principleTitle);

const principles = [
  {
    title: "Electromagnetic Induction:",
    text: "The working of a DC generator is based on the principle of electromagnetic induction. When the armature rotates within a magnetic field, it cuts through magnetic flux lines, inducing an electromotive force (EMF) in the conductors. This EMF drives the current through the circuit.",
  },
  {
    title: "Current Flow:",
    text: "As the generated EMF induces current in the armature windings, this current is collected and directed to an external load for useful work. The magnitude of the current depends on factors such as speed of rotation, strength of the magnetic field, and the number of conductors.",
  },
  {
    title: "Commutation:",
    text: "Since the nature of induced current in the armature is alternating, the commutator ensures that the output remains unidirectional (DC). It reverses the connections at the right moment to maintain a steady flow of current in one direction.",
  },
];
principles.forEach((principle) => {
  theory.appendChild(missingFunction(principle));
});

const typesTitle = document.createElement("h3");
typesTitle.textContent = "Types of D.C Generators:";
theory.appendChild(typesTitle);

const types = [
  {
    title: "Separately Excited DC Generator:",
    text: "This type of generator requires an external DC source to energize the field windings, making it highly stable and suitable for laboratory applications and industrial purposes requiring precise voltage control.",
  },
  {
    title: "Self-Excited DC Generator:",
    text: "The field windings are powered by the generator itself, eliminating the need for an external power source. These are further categorized into different types based on winding connections:",
  },
  {
    title: "  - Series-Wound DC Generator:",
    text: "The field windings are connected in series with the armature. It provides high output voltage at high loads but has poor voltage regulation.",
  },
  {
    title: "  - Shunt-Wound DC Generator:",
    text: "In this type, the field windings are connected parallel to the armature, offering better voltage regulation and stability. It is widely used in battery charging and lighting applications.",
  },
  {
    title: "  - Compound-Wound DC Generator:",
    text: "Combines features of both series and shunt-wound generators. It offers better voltage regulation and is used in industrial applications where load variations are significant.",
  },
];
types.forEach((type) => {
  theory.appendChild(missingFunction(type));
});

const applicationsTitle = document.createElement("h3");
applicationsTitle.textContent = "Applications of D.C Generators:";
theory.appendChild(applicationsTitle);

const applications = [
  { title: "Charging of Batteries:", text: "DC generators are extensively used in charging batteries in vehicles, emergency backup systems, and remote power stations." },
  { title: "Providing Power for D.C Motors:", text: "Used in industrial applications where DC motors are required for precise speed control and heavy machinery." },
  { title: "Welding:", text: "DC generators are employed in arc welding applications, providing smooth and stable power output for high-quality welding." },
  { title: "Electroplating:", text: "Used in electrochemical processes where a consistent DC supply is required to deposit metal coatings on surfaces." },
  { title: "Compact Power Supply Units:", text: "DC generators serve as power sources for small-scale power supply systems in remote and off-grid locations." },
];
applications.forEach((application) => {
  theory.appendChild(missingFunction(application));
});

const utubeDiv = document.createElement("div");
const utube = document.createElement("p");
utube.textContent = "Watch the video below to learn more about D.C generators and their applications:";

const uvideo = document.createElement("div");
uvideo.innerHTML = '<iframe width="413" height="232" src="https://www.youtube.com/embed/zaOGMpimJLs" title="DC Generators" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';

utubeDiv.appendChild(utube);
utubeDiv.appendChild(uvideo);

theory.appendChild(utubeDiv);

main.appendChild(theory);


  const diagramsSection = document.createElement("section");
  diagramsSection.className = "diagrams-section"; // Add styling class

  const diagramHead = document.createElement("h2");
  diagramHead.innerText = "DIAGRAMS";
  diagramsSection.appendChild(diagramHead);

  const diagrams = [
      {
        cap: "DC SEPERATELY EXCITED GENERATOR CIRCUIT",
        image: ee2076,
      },
      {
        cap: "FIGURE 2",
        image: ee2077,
      },
      {
        cap: "DC SEPERATELY EXCITED GENERATOR CIRCUIT",
        image: ee2078,
      },
      {
        cap: "DC SHUNT GENERATOR CIRCUIT",
        image: ee2079,
      }
      
    ];
  let diagramBox = [];
  let diagramImage = [];
  let diagramCaption = [];
  for (let i = 0; i < diagrams.length; i++) {
    diagramBox[i] = document.createElement("div");
    diagramBox[i].className = "diagram-container"; // Add container class

    diagramImage[i] = document.createElement("img");
    diagramImage[i].className = "diagram-image"; // Add image class
    diagramImage[i].src = diagrams[i].image;
    diagramImage[i].alt = diagrams[i].cap; // Add accessibility attribute

    diagramCaption[i] = document.createElement("p");
    diagramCaption[i].className = "diagram-caption"; // Add caption class
    diagramCaption[i].textContent = diagrams[i].cap;

    diagramBox[i].appendChild(diagramImage[i]);
    diagramBox[i].appendChild(diagramCaption[i]);
    diagramsSection.appendChild(diagramBox[i]);
  }

  main.appendChild(diagramsSection);

// Procedure Section
const procedure = document.createElement("section");
const procHead = document.createElement("h2");
procHead.textContent = "PROCEDURE";
procedure.appendChild(procHead);

const openCircuit = document.createElement("h3");
openCircuit.textContent = "1. OPEN CIRCUIT CHARACTERISTICS:";
procedure.appendChild(openCircuit);

const openCircuitSteps = [
  "Make the connections as shown in Figure 207-1-1.1b (DC separately excited generator laboratory interconnection).",
  "Ensure the field winding is separately excited.",
  "Gradually increase the field current and record the generated voltage (E) at each step.",
  "Plot the open-circuit characteristics (E vs. If) to determine the relationship between the generated voltage and field current.",
];

const openCircuitList = document.createElement("ol");
openCircuitSteps.forEach((step) => {
  const li = document.createElement("li");
  li.textContent = step;
  openCircuitList.appendChild(li);
});
procedure.appendChild(openCircuitList);

const loadCharacteristicsSeparatelyExcited = document.createElement("h3");
loadCharacteristicsSeparatelyExcited.textContent = "2. LOAD CHARACTERISTICS OF SEPARATELY EXCITED DC GENERATOR:";
procedure.appendChild(loadCharacteristicsSeparatelyExcited);

const loadStepsSeparatelyExcited = [
  "Make the connections as shown in Figure 207-1.",
  "Connect a load resistor to the output of the generator (see Figure 207-2-2).",
  "Switch ON the drive motor and raise the shaft speed to 1200 rev/min.",
  "Maintain a constant field current of 1.2 A throughout the test.",
  "Vary the load resistor in steps from 500 Ω to approximately 15 Ω, taking readings of load current (I) and terminal voltage (V) at each step until the load current reaches 1.0 A.",
  "Record the values in Table 207.",
];

const loadListSeparatelyExcited = document.createElement("ol");
loadStepsSeparatelyExcited.forEach((step) => {
  const li = document.createElement("li");
  li.textContent = step;
  loadListSeparatelyExcited.appendChild(li);
});
procedure.appendChild(loadListSeparatelyExcited);

const loadCharacteristicsShunt = document.createElement("h3");
loadCharacteristicsShunt.textContent = "3. LOAD CHARACTERISTICS OF DC SHUNT GENERATOR:";
procedure.appendChild(loadCharacteristicsShunt);

const loadStepsShunt = [
  "Make the connections as shown in Figure 207-2-3 (DC Shunt Generator).",
  "Repeat the procedure as in the separately excited generator, but note that the shunt generator is self-excited.",
  "Record the terminal voltage (V), load current (I), and generated voltage (E) at each step.",
  "Plot the load characteristics (V vs. I) for the shunt generator.",
];

const loadListShunt = document.createElement("ol");
loadStepsShunt.forEach((step) => {
  const li = document.createElement("li");
  li.textContent = step;
  loadListShunt.appendChild(li);
});
procedure.appendChild(loadListShunt);

main.appendChild(procedure);

// Tables Section
const tables = document.createElement("section");
const tablesHead = document.createElement("h2");
tablesHead.textContent = "TABLES";
tables.appendChild(tablesHead);

const table207 = document.createElement("h3");
table207.textContent = "Table 207.2.1: Load Characteristics of Separately Excited DC Generator";
tables.appendChild(table207);

const table = document.createElement("table");
table.style.borderCollapse = "collapse";
table.style.width = "100%";

const thead = document.createElement("thead");
const headerRow = document.createElement("tr");

const headers = ["Load Current (I)", "Terminal Voltage (V)", "Generated Voltage (E)"];
headers.forEach((text) => {
  const th = document.createElement("th");
  th.textContent = text;
  th.style.border = "1px solid black";
  th.style.padding = "8px";
  headerRow.appendChild(th);
});

thead.appendChild(headerRow);
table.appendChild(thead);

const tbody = document.createElement("tbody");
const tableData = [
  ["0.1 A", "120 V", "122 V"],
  ["0.2 A", "118 V", "120 V"],
  ["0.3 A", "115 V", "117 V"],
  // Add more rows as needed
];

tableData.forEach((row) => {
  const tr = document.createElement("tr");
  row.forEach((cell) => {
    const td = document.createElement("td");
    td.textContent = cell;
    td.style.border = "1px solid black";
    td.style.padding = "8px";
    tr.appendChild(td);
  });
  tbody.appendChild(tr);
});

table.appendChild(tbody);
tables.appendChild(table);

main.appendChild(tables);

// Graphs Section
const graphs = document.createElement("section");
const graphsHead = document.createElement("h2");
graphsHead.textContent = "GRAPHS";
graphs.appendChild(graphsHead);

const graph1 = document.createElement("h3");
graph1.textContent = "1. Open-Circuit Characteristics:";
graphs.appendChild(graph1);

const graph1Desc = document.createElement("p");
graph1Desc.textContent = "Plot E (generated voltage) vs. If (field current) with If on the horizontal axis. Determine the critical field resistance from the graph.";
graphs.appendChild(graph1Desc);

const graph2 = document.createElement("h3");
graph2.textContent = "2. Separately Excited Generator:";
graphs.appendChild(graph2);

const graph2Desc = document.createElement("p");
graph2Desc.textContent = "Plot V (terminal voltage), I (load current), and E (generated voltage) on the same sheet with I on the horizontal axis.";
graphs.appendChild(graph2Desc);

const graph3 = document.createElement("h3");
graph3.textContent = "3. Shunt Generator:";
graphs.appendChild(graph3);

const graph3Desc = document.createElement("p");
graph3Desc.textContent = "Plot V (terminal voltage), I (load current), and E (generated voltage) on the same sheet with I on the horizontal axis.";
graphs.appendChild(graph3Desc);

main.appendChild(graphs);

// Questions Section
const questions = document.createElement("section");
const questionsHead = document.createElement("h2");
questionsHead.textContent = "QUESTIONS";
questions.appendChild(questionsHead);

const question1 = document.createElement("h3");
question1.textContent = "1. Explain the conditions necessary for satisfactory self-excitation of a DC shunt generator.";
questions.appendChild(question1);

const answer1 = document.createElement("p");
answer1.innerHTML = `
  <strong>Answer:</strong>
  For satisfactory self-excitation of a DC shunt generator, the following conditions must be met:
  <ul>
    <li><strong>Residual Magnetism:</strong> The generator must have some residual magnetism in its magnetic circuit. This residual magnetism is essential to initiate the generation of a small voltage when the generator starts rotating.</li>
    <li><strong>Field Circuit Connection:</strong> The field winding must be correctly connected in parallel with the armature (shunt connection). If the field winding is connected in reverse, the generator will not self-excite.</li>
    <li><strong>Critical Field Resistance:</strong> The total resistance in the field circuit (including the field winding resistance and any external rheostat) must be less than the <strong>critical field resistance</strong>. If the field resistance is too high, the generator will fail to build up voltage.</li>
    <li><strong>Speed of Rotation:</strong> The generator must rotate at or above a certain minimum speed. If the speed is too low, the generated voltage may not be sufficient to sustain self-excitation.</li>
    <li><strong>Load Conditions:</strong> Initially, the generator should be operated under no-load or light-load conditions to allow the voltage to build up gradually.</li>
  </ul>
  If any of these conditions are not met, the generator will fail to self-excite, and no voltage will be generated.
`;
questions.appendChild(answer1);

const question2 = document.createElement("h3");
question2.textContent = "2. Compare the external characteristics of the separately excited and shunt generators and explain the differences.";
questions.appendChild(question2);

const answer2 = document.createElement("p");
answer2.innerHTML = `
  <strong>Answer:</strong>
  The external characteristics of a separately excited DC generator and a shunt (self-excited) DC generator differ in the following ways:
  <ul>
    <li><strong>Voltage Regulation:</strong>
      <ul>
        <li><strong>Separately Excited Generator:</strong> The terminal voltage (V) decreases gradually as the load current (I) increases. This is due to the voltage drop across the armature resistance (IaRa) and the effect of armature reaction. However, the field current is independent of the load current, so the voltage drop is relatively linear.</li>
        <li><strong>Shunt Generator:</strong> The terminal voltage drops more significantly as the load current increases compared to the separately excited generator. This is because, in a shunt generator, the field current depends on the terminal voltage. As the load current increases, the terminal voltage drops, which in turn reduces the field current, causing a further drop in voltage. This creates a positive feedback effect, leading to a steeper voltage drop.</li>
      </ul>
    </li>
    <li><strong>Load Current:</strong>
      <ul>
        <li><strong>Separately Excited Generator:</strong> The load current can be increased until the armature current reaches its maximum allowable value. The field current remains constant, so the generator can deliver higher currents without a significant drop in voltage.</li>
        <li><strong>Shunt Generator:</strong> The load current is limited by the point where the terminal voltage drops to zero. This occurs because the reduction in terminal voltage reduces the field current, which further reduces the generated voltage. This limits the maximum load current that can be drawn from a shunt generator.</li>
      </ul>
    </li>
    <li><strong>Field Control:</strong>
      <ul>
        <li><strong>Separately Excited Generator:</strong> The field current is controlled independently of the load current, allowing for precise control of the output voltage. This makes it suitable for applications requiring stable voltage under varying loads.</li>
        <li><strong>Shunt Generator:</strong> The field current depends on the terminal voltage, which varies with the load. This makes the shunt generator less stable under varying load conditions compared to the separately excited generator.</li>
      </ul>
    </li>
    <li><strong>Applications:</strong>
      <ul>
        <li><strong>Separately Excited Generator:</strong> Used in applications where precise voltage control is required, such as in automatic control systems and laboratory setups.</li>
        <li><strong>Shunt Generator:</strong> Commonly used in applications where a relatively constant voltage is required, but precise control is not critical, such as in battery charging and small power supplies.</li>
      </ul>
    </li>
  </ul>
`;
questions.appendChild(answer2);

main.appendChild(questions);

// Precautions Section
const precautions = document.createElement("section");
const precHead = document.createElement("h2");
precHead.textContent = "PRECAUTIONS";
precautions.appendChild(precHead);

const precList = document.createElement("ul");
const precItems = [
  "Ensure all connections are secure and free from corrosion or oxidation.",
  "Calibrate all measuring instruments (voltmeters, ammeters, etc.) before use.",
  "Avoid parallax errors when taking readings.",
  "Keep detailed records of all measurements.",
];

precItems.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  precList.appendChild(li);
});
precautions.appendChild(precList);

main.appendChild(precautions);

// Conclusion Section
const conclusion = document.createElement("section");
const concHead = document.createElement("h2");
concHead.textContent = "CONCLUSION";
conclusion.appendChild(concHead);

const concText = document.createElement("p");
concText.textContent = `
  The experiment successfully demonstrated the open-circuit and load characteristics of both separately excited and shunt DC generators. The results obtained from the separately excited and shunt generators were compared, and the differences in their external characteristics were analyzed.
`;
conclusion.appendChild(concText);

main.appendChild(conclusion);

// References Section
const references = document.createElement("section");
const refHead = document.createElement("h2");
refHead.textContent = "REFERENCES";
references.appendChild(refHead);

const refList = document.createElement("ul");
const refItems = [
  "Principles of Electrical Technology: M. Clytton.",
  "Electrical Engineering Laboratory Manual.",
];

refItems.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  refList.appendChild(li);
});
references.appendChild(refList);

main.appendChild(references);
  const hover = createHover("#");
  main.appendChild(hover);
  const download = createDownload("#");
  main.appendChild(download);
};


const displayEE202 = () => {
  const main = reset();
  const head = document.createElement("h1");
  head.textContent = "Measurement of Capicitance";
  main.appendChild(head);

  const aim = document.createElement("section");
  const aimHead = document.createElement("h2");
  aimHead.textContent = "AIMS";
  aim.appendChild(aimHead);

  const aimList = document.createElement("ul");
  const aims = [
    "Using Schering Bridge",
    "Measurement transient voltage and time of R.C circuit",
  ];
  let list2 = [];
  for (let i = 0; i < aims.length; i++) {
    list2[i] = document.createElement("li");
    list2[i].textContent = aims[i];
    aimList.appendChild(list2[i]);
  }
  aim.appendChild(aimList);

  main.appendChild(aim);
  const objective = document.createElement("section");
  const objHead = document.createElement("h2");
  objHead.textContent = "OBJECTIVES";
  objective.appendChild(objHead);
  const objList = document.createElement("ul");
  const objectives = [
    "To find the value of the unknown Capacitor C1 and its leakage resistance R1 by balancing the bridge",
  ];
  let list = [];
  for (let i = 0; i < objectives.length; i++) {
    list[i] = document.createElement("li");
    list[i].textContent = objectives[i];
    objList.appendChild(list[i]);
  }
  objective.appendChild(objList);
  main.appendChild(aim);
  main.appendChild(objective);
  const appHead = document.createElement("h2");
  appHead.textContent = "Apparatus";
  main.appendChild(appHead);
  const section = document.createElement("section");
  section.classList.add("appBox");

  const apparatus = [
    {
      cap: "A.F Generator",
      image: ee2021,
    },
    {
      cap: "Two Decade Resistance Boxes ",
      image: ee2022,
    },
    {
      cap: "Two Decade Capacitance Boxes ",
      image: ee2023,
    },
    {
      cap: "Headphones",
      image: ee2024,
    },
    {
      cap: "Capacitor of unknown value",
      image: ee2025,
    },
  ];
  let appBox = [];
  let appImage = [];
  let appCaption = [];
  for (let i = 0; i < apparatus.length; i++) {
    appBox[i] = document.createElement("div");
    appImage[i] = document.createElement("img");
    appCaption[i] = document.createElement("p");
    appImage[i].src = apparatus[i].image;
    appCaption[i].textContent = apparatus[i].cap;
    appBox[i].appendChild(appImage[i]);
    appBox[i].appendChild(appCaption[i]);
    section.appendChild(appBox[i]);
  }
  main.appendChild(section);
  const missingFunction = (item) => {
    const container = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = item.title;
    const text = document.createElement("p");
    text.textContent = item.text;
    container.appendChild(title);
    container.appendChild(text);
    return container;
  };

  const theory = document.createElement("section");
  const theoHead = document.createElement("h2");
  theoHead.textContent = "THEORY";
  theory.appendChild(theoHead);
  
  const explain = document.createElement("div");
  explain.textContent =
    "Capacitance is the ability of a system to store an electric charge. It is a fundamental concept in electronics and electrical engineering, describing how a conductor can accumulate charge when a potential difference exists across it. The farad (F), named after Michael Faraday, is the unit of capacitance, defined as one coulomb per volt. The capacitance (C) of a capacitor is mathematically expressed as:";
  theory.appendChild(explain);
  
  const formula = document.createElement("div");
  formula.innerHTML = "<p><strong>C = Q / V</strong></p><p>where C is the capacitance in farads (F), Q is the charge stored in coulombs (C), and V is the voltage applied in volts (V). Capacitance plays a crucial role in various electrical and electronic applications, including energy storage, filtering, and signal processing. It is widely used in electronic circuits to smooth voltage fluctuations and store energy in power supply systems.</p>";
  theory.appendChild(formula);
  
  const experimentIntro = document.createElement("div");
  experimentIntro.textContent =
    "In this experiment, we are using a Schering Bridge to accurately measure the capacitance of an unknown capacitor. The Schering Bridge is a crucial AC bridge circuit widely used in electrical engineering and power systems for precise capacitance and dissipation factor measurements. By leveraging the principle of impedance balancing, the Schering Bridge provides a highly accurate method for evaluating capacitive components, particularly in applications involving high-voltage power equipment and dielectric material analysis.";
  theory.appendChild(experimentIntro);
  
  const scheringBridgeIntro = document.createElement("div");
  scheringBridgeIntro.textContent =
    "The Schering Bridge functions by balancing impedances in an alternating current (AC) circuit. Unlike a simple capacitance meter, this method allows for high accuracy, especially in evaluating dielectric properties. It is frequently employed in industrial and research settings to determine the quality and performance of capacitors, insulation materials, and electrical components. The bridge consists of four arms, where two contain known resistances and capacitances, and the other two include the unknown capacitor under test. The accuracy of the Schering Bridge makes it indispensable in industries that require precise measurements, such as the manufacturing of electrical insulators, power transformers, and high-voltage transmission equipment.";
  theory.appendChild(scheringBridgeIntro);
  
  const scheringBridgeWorking = document.createElement("div");
  scheringBridgeWorking.textContent =
    "The working principle of the Schering Bridge revolves around the concept of balancing an AC bridge circuit by adjusting known components to determine unknown values. When the bridge reaches a balanced state, the null detector (typically a galvanometer or electronic null detector) reads zero, indicating that the ratios of the impedances in different arms are equal. By using this approach, the unknown capacitance and its associated loss resistance can be calculated precisely. The loss resistance accounts for the energy dissipated as heat in the dielectric medium, which is crucial in assessing the efficiency and quality of capacitors. The Schering Bridge is extensively used for testing high-voltage capacitors and insulation materials to ensure their reliability and operational safety.";
  theory.appendChild(scheringBridgeWorking);
  
  const elementsTitle = document.createElement("h3");
  elementsTitle.textContent = "Elements of the Schering Bridge:";
  theory.appendChild(elementsTitle);
  
  const elements = [
    {
      title: "Arm AB:",
      text: "Contains the unknown capacitor Cx along with its associated loss resistance Rx, which represents the energy dissipation within the dielectric material of the capacitor. This arm plays a crucial role in determining the dielectric loss, which is essential in assessing the efficiency of capacitors in high-voltage applications.",
    },
    {
      title: "Arm BC:",
      text: "This arm contains a standard capacitor Cs with a precisely known capacitance value, used for comparison and bridge balancing. The known value of this standard capacitor allows for accurate computation of the unknown capacitance.",
    },
    {
      title: "Arm CD:",
      text: "Comprises a non-inductive resistor R3, which helps in balancing the circuit and minimizing inductive effects in AC measurement. This resistor ensures that the impedance of the circuit remains predictable and stable.",
    },
    {
      title: "Arm DA:",
      text: "Includes another resistor R4 and a capacitor C4, which assist in creating an equivalent circuit to facilitate accurate capacitance determination. This combination helps in fine-tuning the bridge for precise measurement of the loss angle and dissipation factor of the capacitor under test.",
    },
  ];
  
  elements.forEach((element) => {
    const elementContainer = document.createElement("div");
    const elementTitle = document.createElement("strong");
    elementTitle.textContent = element.title;
    const elementText = document.createElement("p");
    elementText.textContent = " " + element.text;
    elementContainer.appendChild(elementTitle);
    elementContainer.appendChild(elementText);
    theory.appendChild(elementContainer);
  });
  
  const bridgeSetup = document.createElement("div");
  bridgeSetup.textContent =
    "A detector, typically a highly sensitive null detector such as a galvanometer or electronic amplifier, is placed between points B and D. The bridge is powered by an AC voltage source, allowing precise measurement of capacitance and loss factors by adjusting the resistance and capacitance values until the detector reads zero (null condition). This condition signifies that the impedances are balanced, enabling the accurate calculation of unknown capacitance and dielectric losses. The sensitivity of the detector ensures high precision in identifying the exact balance point, making the Schering Bridge highly reliable in capacitance measurement applications. It is widely used in quality control processes for capacitors, ensuring they meet the required standards for performance and efficiency in various electronic and electrical systems.";
  theory.appendChild(bridgeSetup);
  

  main.appendChild(theory);

  const diagramsSection = document.createElement("section");
  diagramsSection.className = "diagrams-section"; // Add styling class

  const diagramHead = document.createElement("h2");
  diagramHead.innerText = "DIAGRAMS";
  diagramsSection.appendChild(diagramHead);

  const diagrams = [
    {
      cap: "Schering Bridge Diagram",
      image: ee2026,
    },
    {
      cap: "Transient Voltage Measurement Diagram",
      image: ee2027,
    },
  ];

  let diagramBox = [];
  let diagramImage = [];
  let diagramCaption = [];
  for (let i = 0; i < diagrams.length; i++) {
    diagramBox[i] = document.createElement("div");
    diagramBox[i].className = "diagram-container"; // Add container class

    diagramImage[i] = document.createElement("img");
    diagramImage[i].className = "diagram-image"; // Add image class
    diagramImage[i].src = diagrams[i].image;
    diagramImage[i].alt = diagrams[i].cap; // Add accessibility attribute

    diagramCaption[i] = document.createElement("p");
    diagramCaption[i].className = "diagram-caption"; // Add caption class
    diagramCaption[i].textContent = diagrams[i].cap;

    diagramBox[i].appendChild(diagramImage[i]);
    diagramBox[i].appendChild(diagramCaption[i]);
    diagramsSection.appendChild(diagramBox[i]);
  }

  main.appendChild(diagramsSection);

  const procedure = document.createElement("section");
  const procHead = document.createElement("h2");
  procHead.textContent = "PROCEDURE";
  procedure.appendChild(procHead);

  const procSteps = [
    "Connect the bridge from the components as shown in the diagram. R₁, R₂, and R₃ are decade resistance boxes, and C₂ is a decade capacitance box.",
    "Set the generator to give a 1KHz output and switch ON.",
    "Now you will hear a tone in the headphone. The bridge will be balanced if no tone is audible.",
    "Adjust the value of C₃ to see if you can balance it.",
    "If not, change the value of C₂ and then try to balance by varying the value of C₃.",
  ];

  const procList = document.createElement("ul");
  procSteps.forEach((step) => {
    const li = document.createElement("li");
    li.textContent = step;
    procList.appendChild(li);
  });
  procedure.appendChild(procList);

  main.appendChild(procedure);



  const results = document.createElement("section");
  const resultHead = document.createElement("h2");
  resultHead.textContent = "RESULTS";
  results.appendChild(resultHead);

  const resultsTable = document.createElement("table");
  resultsTable.style.borderCollapse = "collapse";
  resultsTable.style.width = "100%";

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  const headers = ["C2 (μF)","C3 (μF)","R2 (Ω)","R3 (Ω)","Cx (μF)", "Rx (Ω)"];
  headers.forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    th.style.border = "1px solid black";
    th.style.padding = "8px";
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  resultsTable.appendChild(thead);

  const tbody = document.createElement("tbody");
  const tableData = [
    [100, 90, 10, 12, 95, 11],
    [200, 180, 20, 24, 195, 22],
    [300, 270, 30, 36, 295, 33],
    [400, 360, 40, 48, 395, 44],
    [500, 450, 50, 60, 495, 55],
  ];

  tableData.forEach((row) => {
    const tr = document.createElement("tr");
    row.forEach((cell) => {
      const td = document.createElement("td");
      td.textContent = cell;
      td.style.border = "1px solid black";
      td.style.padding = "8px";
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });

  resultsTable.appendChild(tbody);
  results.appendChild(resultsTable);

  const avgCx = document.createElement("p");
  avgCx.textContent = "Average value of Capacitance Cx = (95 + 195 + 295 + 395 + 495) / 5 = 295μF";
  results.appendChild(avgCx);

  const avgRx = document.createElement("p");
  avgRx.textContent = "Average value of Resistance Rx = (11 + 22 + 33 + 44 + 55) / 5 = 33Ω";
  results.appendChild(avgRx);

  main.appendChild(results);

  // Calculations Section
  const calculations = document.createElement("section");
  const calcHead = document.createElement("h2");
  calcHead.textContent = "CALCULATIONS";
  calculations.appendChild(calcHead);

  const calcIntro = document.createElement("p");
  calcIntro.textContent = "Formulas used for calculations:";
  calculations.appendChild(calcIntro);

  const calcFormulas = [
    "Rₓ = R₃ / (ω² × C₂² × R₂)",
    "Cₓ = C₂ × (R₃ / R₂)",
  ];

  const calcList = document.createElement("ul");
  calcFormulas.forEach((formula) => {
    const li = document.createElement("li");
    li.textContent = formula;
    calcList.appendChild(li);
  });
  calculations.appendChild(calcList);

  const calcExplanation = document.createElement("p");
  calcExplanation.innerHTML = `
    Where:
    <ul>
      <li>Rₓ is the unknown resistance.</li>
      <li>C₂ is a known capacitance.</li>
      <li>Cₓ is the calculated or measured capacitance.</li>
      <li>R₂ and R₃ are known resistances.</li>
      <li>ω = Angular frequency = 2πf</li>
    </ul>
  `;
  calculations.appendChild(calcExplanation);

  main.appendChild(calculations);

  // Graph Section
  const graphSection = document.createElement("section");
  const graphHead = document.createElement("h2");
  graphHead.textContent = "GRAPH";
  graphSection.appendChild(graphHead);

  const graphDesc = document.createElement("p");
  graphDesc.textContent = "The graph of the table above looks like:";
  graphSection.appendChild(graphDesc);

  const graphPlot = document.createElement("p");
  graphPlot.textContent = "Plot Cₓ against Rₓ";
  graphSection.appendChild(graphPlot);

  const graphImage = document.createElement("img");
  graphImage.src = ee2028;
  graphImage.classList.add("graph-image"); 

  graphImage.alt = "Graph of Cₓ vs Rₓ";
  graphSection.appendChild(graphImage);

  main.appendChild(graphSection);

  // Second Method Section
  const secondMethod = document.createElement("section");
  const secondMethodHead = document.createElement("h2");
  secondMethodHead.textContent = "SECOND METHOD: MEASURING TRANSIENT VOLTAGE AND TIME OF R.L CIRCUIT";
  secondMethod.appendChild(secondMethodHead);

  const secondMethodAim = document.createElement("h3");
  secondMethodAim.textContent = "AIM";
  secondMethod.appendChild(secondMethodAim);

  const secondMethodAimText = document.createElement("p");
  secondMethodAimText.textContent = "To measure the value of the unknown capacitor using transient voltage measurement.";
  secondMethod.appendChild(secondMethodAimText);

  const secondMethodApparatus = document.createElement("h3");
  secondMethodApparatus.textContent = "APPARATUS";
  secondMethod.appendChild(secondMethodApparatus);

  const secondMethodApparatusList = document.createElement("ul");
  const secondMethodApparatusItems = [
    "A.F Signal Generator",
    "Inductor of Unknown Value",
    "A Resistor of Known Value",
    "Oscilloscope",
  ];
  secondMethodApparatusItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    secondMethodApparatusList.appendChild(li);
  });
  secondMethod.appendChild(secondMethodApparatusList);

  const secondMethodProcedure = document.createElement("h3");
  secondMethodProcedure.textContent = "PROCEDURE";
  secondMethod.appendChild(secondMethodProcedure);

  const secondMethodSteps = [
    {
      step: "Connect the circuit as shown above.",
    },
    {
      step: "Make the following settings on the oscilloscope:",
      subSteps: [
        "Both channels to 1 volt/cm and CAL.",
        "Trigger on channel 1.",
        "Sweep on chop.",
        "Time base to 1ms/cm and CAL.",
        "Use internal trigger.",
        "TRIG LEVEL TO AUTO.",
        "Horizontal gain to CAL.",
      ],
    },
    {
      step: "Make the following settings of the oscillator:",
      subSteps: [
        "Switch frequency range to 100Hz – 1kHz on the frequency dial.",
        "Set input voltage to about 5V.",
        "Set the function switch to square wave.",
      ],
    },
    {
      step: "Switch on the equipment and make any fine adjustments found necessary.",
    },
    {
      step: "Observe the two waveforms now visible on the scope, adjusting the stability control to give a stable picture.",
    },
    {
      step: "Superimpose the waves on the screen and sketch their waveform accurately on graph paper.",
    },
    {
      step: "Measure the voltage Vᵣ at each time division of the scope and record it in Table 2.",
    },
  ];

  const secondMethodStepList = document.createElement("ul");
  secondMethodSteps.forEach((stepObj) => {
    const li = document.createElement("li");
    li.textContent = stepObj.step;

    if (stepObj.subSteps) {
      const subList = document.createElement("ul");
      stepObj.subSteps.forEach((subStep) => {
        const subLi = document.createElement("li");
        subLi.textContent = subStep;
        subList.appendChild(subLi);
      });
      li.appendChild(subList);
    }

    secondMethodStepList.appendChild(li);
  });
  secondMethod.appendChild(secondMethodStepList);



  // Results Table for Second Method
  const secondMethodResults = document.createElement("h3");
  secondMethodResults.textContent = "TABLE OF RESULTS";
  secondMethod.appendChild(secondMethodResults);

  const secondMethodTable = document.createElement("table");
  secondMethodTable.style.borderCollapse = "collapse";
  secondMethodTable.style.width = "100%";

  const secondMethodThead = document.createElement("thead");
  const secondMethodHeaderRow = document.createElement("tr");

  const secondMethodHeaders = ["Time (ms)", "Vᵣ (V)", "Cx​=C / (V / R ln(V−VR))​ "];
  secondMethodHeaders.forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    th.style.border = "1px solid black";
    th.style.padding = "8px";
    secondMethodHeaderRow.appendChild(th);
  });

  secondMethodThead.appendChild(secondMethodHeaderRow);
  secondMethodTable.appendChild(secondMethodThead);

  const secondMethodTbody = document.createElement("tbody");
  const secondMethodTableData = [
    ["4 x 10^-5", 1, 0.2],
    ["1 x 10^-5", 2, 0.2],
    ["2 x 10^-4", 3, 0.2],
    ["5 x 10^-4", 4, 0.2],
  ];

  secondMethodTableData.forEach((row) => {
    const tr = document.createElement("tr");
    row.forEach((cell) => {
      const td = document.createElement("td");
      td.textContent = cell;
      td.style.border = "1px solid black";
      td.style.padding = "8px";
      tr.appendChild(td);
    });
    secondMethodTbody.appendChild(tr);
  });

  secondMethodTable.appendChild(secondMethodTbody);
  secondMethod.appendChild(secondMethodTable);

  const secondMethodCalc = document.createElement("h3");
  secondMethodCalc.textContent = "CALCULATIONS";
  secondMethod.appendChild(secondMethodCalc);

  const secondMethodCalcText = document.createElement("p");
  secondMethodCalcText.textContent = "Cₓ = C / (V / R ln(V − Vᵣ))";
  secondMethod.appendChild(secondMethodCalcText);

  const secondMethodGraph = document.createElement("h3");
  secondMethodGraph.textContent = "GRAPH";
  secondMethod.appendChild(secondMethodGraph);

  const secondMethodGraphDesc = document.createElement("p");
  secondMethodGraphDesc.textContent = "Example of how the graph of the table above looks like:";
  secondMethod.appendChild(secondMethodGraphDesc);

  const secondMethodGraphImage = document.createElement("img");
  secondMethodGraphImage.classList.add("graph-image"); 
  secondMethodGraphImage.src = ee2029;
  secondMethodGraphImage.alt = "Graph of Transient Voltage";
  secondMethod.appendChild(secondMethodGraphImage);

  main.appendChild(secondMethod);

  // Precautions Section
  const precautions = document.createElement("section");
  const precHead = document.createElement("h2");
  precHead.textContent = "PRECAUTIONS";
  precautions.appendChild(precHead);

  const precList = document.createElement("ul");
  const precItems = [
    "I avoided error due to parallax when taking the readings.",
    "I ensured all measuring instruments (voltmeters, ammeters, etc.) were calibrated and in good working condition for accurate measurements.",
    "Ensure all connections are secure and free from corrosion or oxidation. Loose or poor connections can introduce resistance and affect measurements.",
    "I ensured that I kept detailed records of all measurements.",
  ];

  precItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    precList.appendChild(li);
  });
  precautions.appendChild(precList);

  main.appendChild(precautions);

  // Conclusion Section
  const conclusion = document.createElement("section");
  const concHead = document.createElement("h2");
  concHead.textContent = "CONCLUSION";
  conclusion.appendChild(concHead);

  const concText = document.createElement("p");
  concText.textContent =
    "At the end of this experiment, the values for the capacitance in the first method should be approximately equal to the values in the second method. Therefore, the experiment was successful in demonstrating the relationship between the transient voltage across the inductor and the inductance value.";
  conclusion.appendChild(concText);

  main.appendChild(conclusion);

  // References Section
  const references = document.createElement("section");
  const refHead = document.createElement("h2");
  refHead.textContent = "REFERENCES";
  references.appendChild(refHead);

  const refList = document.createElement("ul");
  const refItems = [
    "Electrical Engineering Laboratory Manual by the Department of Electrical Engineering, University of Benin.",
    "Fundamentals of Electric Circuits by Charles K. Alexander & Matthew N. O. Sadiku.",
  ];

  refItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    refList.appendChild(li);
  });
  references.appendChild(refList);

  main.appendChild(references);





  const hover = createHover("#");
  main.appendChild(hover);
  const download = createDownload("#");
  main.appendChild(download);
};
const displayEE203 = () => {
  const main = reset();
  const head = document.createElement("h1");
  head.textContent = "Measurement of Inductance";
  main.appendChild(head);

  const aim = document.createElement("section");
  const aimHead = document.createElement("h2");
  aimHead.textContent = "AIMS";
  aim.appendChild(aimHead);
  const aimList = document.createElement("ul");
  const aims = [
    "Using Maxwell's Bridge",
    "Measurement transient voltage and time of R.L circuit ",
  ];
  let list2 = [];
  for (let i = 0; i < aims.length; i++) {
    list2[i] = document.createElement("li");
    list2[i].textContent = aims[i];
    aimList.appendChild(list2[i]);
  }
  aim.appendChild(aimList);

  const objective = document.createElement("section");
  const objHead = document.createElement("h2");
  objHead.textContent = "OBJECTIVES";
  objective.appendChild(objHead);
  const objList = document.createElement("ul");
  const objectives = [
    "To find the value of the unknown inductor L and its resistance Rx balancing the bridge.",
  ];
  let list = [];
  for (let i = 0; i < objectives.length; i++) {
    list[i] = document.createElement("li");
    list[i].textContent = objectives[i];
    objList.appendChild(list[i]);
  }
  objective.appendChild(objList);
  main.appendChild(aim);
  main.appendChild(objective);
  const appHead = document.createElement("h2");
  appHead.textContent = "Apparatus";
  main.appendChild(appHead);
  const section = document.createElement("section");
  section.classList.add("appBox");
  const apparatus = [
    {
      cap: "A.F Generator",
      image: ee2031,
    },
    {
      cap: "Three decade Resistance Boxes",
      image: ee2032,
    },
    {
      cap: "One Decade Capacitance Boxes",
      image: ee2033,
    },
    {
      cap: "Headphones",
      image: ee2034,
    },
    {
      cap: "Inductor of Unknown Valu",
      image: ee2035,
    },
  
  ];
  let appBox = [];
  let appImage = [];
  let appCaption = [];
  for (let i = 0; i < apparatus.length; i++) {
    appBox[i] = document.createElement("div");
    appImage[i] = document.createElement("img");
    appCaption[i] = document.createElement("p");
    appImage[i].src = apparatus[i].image;
    appCaption[i].textContent = apparatus[i].cap;
    appBox[i].appendChild(appImage[i]);
    appBox[i].appendChild(appCaption[i]);
    section.appendChild(appBox[i]);
  }
  main.appendChild(section);
  const theory = document.createElement("section");
const theoHead = document.createElement("h2");
theoHead.textContent = "THEORY";
theory.appendChild(theoHead);

const explain = document.createElement("div");
explain.textContent =
  "Inductance is a fundamental property of electrical circuits that quantifies the ability of a conductor or coil to store energy in a magnetic field when an electric current flows through it. It is an essential principle in electromagnetism and plays a critical role in transformers, inductors, and many AC circuit applications. A conductor’s ability to generate an opposing electromotive force when the current changes is measured in henrys (H), named after Joseph Henry, an American scientist who contributed significantly to the study of electromagnetism.";
theory.appendChild(explain);

const explain1 = document.createElement("div");
explain1.textContent =
  "A Maxwell Bridge is a refinement of the Wheatstone Bridge, specifically designed to measure the self-inductance of an inductor. Unlike direct methods that require a separate power source and oscilloscopes, the Maxwell Bridge provides a simple and effective means of determining an inductor’s value by balancing resistive and capacitive components within a bridge circuit. It operates by setting up an AC bridge network, where impedances are carefully adjusted to bring the system into balance. This bridge network principle is vital in electrical engineering as it allows for accurate measurement of inductance in both laboratory and industrial settings.";
theory.appendChild(explain1);

const explain2 = document.createElement("div");
explain2.textContent =
  "Maxwell’s bridge is especially useful for measuring inductors with significant internal resistance. The circuit consists of four arms in a diamond configuration, where each arm contributes to achieving balance. The goal of the experiment is to adjust the resistive and capacitive components in the circuit until a null detection occurs, meaning there is no voltage difference between the bridge points. At this balance condition, the inductance can be calculated using well-defined mathematical relations. The effectiveness of Maxwell’s bridge lies in its ability to provide accurate and precise inductance values even when dealing with complex inductor materials and coil designs.";
theory.appendChild(explain2);

const categories = [
  {
    title: "Arm AB",
    text: "This arm contains a known resistor R1, which serves as a reference for determining unknown values in the circuit.",
    image: "",
  },
  {
    title: "Arm BC",
    text: "Similar to Arm AB, this branch also contains a known resistor R2, ensuring balance within the bridge circuit.",
    image: "",
  },
  {
    title: "Arm CD",
    text: "This arm contains the unknown inductor Lx and a known resistor Rx in series. The presence of Lx introduces an inductive reactance to the circuit, affecting impedance calculations.",
    image: "",
  },
  {
    title: "Arm DA",
    text: "This arm includes a variable resistor R3 and a capacitor C3 in series. The capacitor compensates for the inductive nature of the unknown inductor, assisting in balancing the bridge.",
    image: "",
  },
];
categories.forEach((item) => {
  theory.appendChild(createDivs(item));
});

const explain3 = document.createElement("div");
explain3.textContent =
  "Transient voltage refers to short-duration voltage spikes or fluctuations in an electrical circuit. These fluctuations can be caused by sudden changes in current, switching operations, or external disturbances such as lightning strikes. Understanding transient voltage is crucial in power system analysis, as it helps engineers design protective measures like surge suppressors and filtering circuits to mitigate their impact. The study of transient voltage is particularly important in ensuring the longevity and reliability of electronic components operating under varying electrical conditions.";
theory.appendChild(explain3);

const explain4 = document.createElement("div");
explain4.textContent =
  "In practical applications, Maxwell’s bridge is often used in conjunction with digital instrumentation to improve measurement accuracy. Modern implementations include microcontroller-based bridge circuits capable of automated balancing and real-time data processing. This advancement makes Maxwell’s bridge a versatile tool in contemporary electrical testing and calibration environments. By refining this method, engineers can efficiently characterize inductive components and optimize their performance in diverse electronic and power systems.";
theory.appendChild(explain4);




// Create and append the YouTube video section
const videoSection = document.createElement("div");
const videoDescription = document.createElement("p");
videoDescription.textContent =
  "Watch the video below to learn more about Maxwell's Bridge:";
videoSection.appendChild(videoDescription);

const videoEmbed = document.createElement("div");
videoEmbed.innerHTML = `
  <iframe width="437" height="251" src="https://www.youtube.com/embed/wbhWgqoY8U0" title="Maxwell&#39;s LC Bridge | Maxwell&#39;s Inductance Capacitance Bridge for Measurement of Inductance" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
videoSection.appendChild(videoEmbed);
theory.appendChild(videoSection);

main.appendChild(theory);

const diagramsSection = document.createElement("section");
diagramsSection.className = "diagrams-section";
const diagramsHeading = document.createElement("h2");
diagramsHeading.textContent = "DIAGRAMS";
diagramsSection.appendChild(diagramsHeading);

const diagrams = [{ cap: "CIRCUIT DIAGRAM", image: ee2036 }, { cap: "Figure 2", image: ee2037 }];

diagrams.forEach((diagram) => {
  const diagramContainer = document.createElement("div");
  diagramContainer.className = "diagram-container";

  const diagramImage = document.createElement("img");
  diagramImage.className = "diagram-image";
  diagramImage.src = diagram.image;
  diagramImage.alt = diagram.cap;

  const diagramCaption = document.createElement("p");
  diagramCaption.className = "diagram-caption";
  diagramCaption.textContent = diagram.cap;

  diagramContainer.appendChild(diagramImage);
  diagramContainer.appendChild(diagramCaption);
  diagramsSection.appendChild(diagramContainer);
});

main.appendChild(diagramsSection);

  // Procedure Section
  const procedure = document.createElement("section");
  const procHead = document.createElement("h2");
  procHead.textContent = "PROCEDURE";
  procedure.appendChild(procHead);

  const procSteps = [
    "Connect the bridge from the components as shown in the diagram. R₁, R₂, and R₃ are decade resistance boxes, and C is a decade capacitance box.",
    "Set R₂ to approximately 100 Ω and R₃ to 1 kΩ.",
    "Set the function switch to a sine waveform.",
    "Now you will hear a tone in the headphones. Change C until no tone is heard.",
    "Balance is indicated when no tone is heard.",
    "When the bridge is balanced, note the values of R₁, R₂, R₃, and C, and enter these values in the table.",
    "Use five different values of R₁ and balance the bridge. Enter the values of R₁, R₂, R₃, and C in the table.",
    "Complete the table and find the average values of Rₓ and Lₓ.",
  ];

  const procList = document.createElement("ul");
  procSteps.forEach((step) => {
    const li = document.createElement("li");
    li.textContent = step;
    procList.appendChild(li);
  });
  procedure.appendChild(procList);

  // Results Table
  const resultsTable = document.createElement("table");
  resultsTable.style.borderCollapse = "collapse";
  resultsTable.style.width = "100%";

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  const headers = ["R₁ (Ω)", "R₂ (Ω)", "R₃ (Ω)", "C (μF)", "Rₓ (Ω)", "Lₓ (H)"];
  headers.forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    th.style.border = "1px solid black";
    th.style.padding = "8px";
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  resultsTable.appendChild(thead);

  const tbody = document.createElement("tbody");
  const tableData = [
    [100, 100, 1000, 20, 10, 0.2],
    [200, 100, 1000, 30, 20, 0.3],
    [300, 100, 1000, 21, 30, 0.21],
    [400, 100, 1000, 20, 40, 0.2],
    [500, 100, 1000, 15, 50, 0.15],
  ];

  tableData.forEach((row) => {
    const tr = document.createElement("tr");
    row.forEach((cell) => {
      const td = document.createElement("td");
      td.textContent = cell;
      td.style.border = "1px solid black";
      td.style.padding = "8px";
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });

  resultsTable.appendChild(tbody);
  procedure.appendChild(resultsTable);

  const avgLx = document.createElement("p");
  avgLx.textContent = "Average value of Inductance Lₓ = (0.2 + 0.3 + 0.21 + 0.2 + 0.15) / 5 = 0.212 H";
  procedure.appendChild(avgLx);

  const avgRx = document.createElement("p");
  avgRx.textContent = "Average value of Resistance Rₓ = (10 + 20 + 30 + 40 + 50) / 5 = 30 Ω";
  procedure.appendChild(avgRx);

  main.appendChild(procedure);

  // Calculations Section
  const calculations = document.createElement("section");
  const calcHead = document.createElement("h2");
  calcHead.textContent = "CALCULATIONS";
  calculations.appendChild(calcHead);

  const calcFormulas = [
    "Rₓ = (R₁ × R₂) / R₃",
    "Lₓ = R₁ × R₂ × C",
  ];

  const calcList = document.createElement("ul");
  calcFormulas.forEach((formula) => {
    const li = document.createElement("li");
    li.textContent = formula;
    calcList.appendChild(li);
  });
  calculations.appendChild(calcList);

  const calcExample = document.createElement("p");
  calcExample.innerHTML = `
    <strong>Example:</strong>
    <ul>
      <li>For R₁ = 100 Ω:</li>
      <ul>
        <li>Rₓ = (100 × 100) / 1000 = 10 Ω</li>
        <li>Lₓ = (100 × 100 × 20 × 10⁻⁶) = 0.2 H</li>
      </ul>
    </ul>
  `;
  calculations.appendChild(calcExample);

  main.appendChild(calculations);
  const graphSection = document.createElement("section");
  const graphHead = document.createElement("h2");
  graphHead.textContent = "GRAPH";
  graphSection.appendChild(graphHead);

  const graphDesc = document.createElement("p");
  graphDesc.textContent = "The graph of the table above looks like:";
  graphSection.appendChild(graphDesc);

  const graphPlot = document.createElement("p");
  graphPlot.textContent = "Plot Lₓ against Rₓ";
  graphSection.appendChild(graphPlot);

  const graphImage = document.createElement("img");
  graphImage.src = ee2038; 
  graphImage.classList.add("graph-image");
  graphImage.alt = "Graph of Lₓ vs Rₓ";
  graphSection.appendChild(graphImage);

  main.appendChild(graphSection);
  const secondMethod = document.createElement("section");
  const secondMethodHead = document.createElement("h2");
  secondMethodHead.textContent = "SECOND METHOD: MEASURING TRANSIENT VOLTAGE AND TIME OF R.L CIRCUIT";
  secondMethod.appendChild(secondMethodHead);

  const secondMethodAim = document.createElement("h3");
  secondMethodAim.textContent = "AIM";
  secondMethod.appendChild(secondMethodAim);

  const secondMethodAimText = document.createElement("p");
  secondMethodAimText.textContent = "To measure the value of the unknown inductor using transient voltage measurement.";
  secondMethod.appendChild(secondMethodAimText);

  const secondMethodApparatus = document.createElement("h3");
  secondMethodApparatus.textContent = "APPARATUS";
  secondMethod.appendChild(secondMethodApparatus);

  const secondMethodApparatusList = document.createElement("ul");
  const secondMethodApparatusItems = [
    "A.F Signal Generator",
    "Inductor of Unknown Value",
    "A Resistor of Known Value",
    "Oscilloscope",
  ];
  secondMethodApparatusItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    secondMethodApparatusList.appendChild(li);
  });
  secondMethod.appendChild(secondMethodApparatusList);

  const secondMethodProcedure = document.createElement("h3");
  secondMethodProcedure.textContent = "PROCEDURE";
  secondMethod.appendChild(secondMethodProcedure);
  
  const secondMethodSteps = [
    { step: "Connect the circuit as shown above." },
    {
      step: "Make the following settings on the oscilloscope:",
      subSteps: [
        "Both channels to 4 volt/cm and CAL.",
        "Trigger on channel 1.",
        "Sweep on chop.",
        "Time base to 1ms/cm and CAP.",
        "Use internal trigger.",
        "TRIG LEVEL TO AUTO.",
        "Horizontal gain to CAL.",
      ],
    },
    {
      step: "Make the following settings of the oscillator:",
      subSteps: [
        "Switch frequency range to 1000Hz on the frequency dial.",
        "Set input voltage to 5V.",
        "Set the function switch to square wave.",
      ],
    },
    { step: "Switch on the equipment and make any fine adjustments found necessary." },
    { step: "Observe the two waveforms now visible on the scope, adjusting the stability control to give a stable picture." },
    { step: "Superimpose the waves on the screen and sketch their waveform accurately on graph paper." },
    { step: "Measure the voltage Vᵣ at each time division of the scope and record it in the table." },
  ];
  
  const secondMethodStepList = document.createElement("ul");
  
  secondMethodSteps.forEach(({ step, subSteps }) => {
    const li = document.createElement("li");
    li.textContent = step;
  
    if (subSteps) {
      const subList = document.createElement("ul");
      subSteps.forEach(subStep => {
        const subLi = document.createElement("li");
        subLi.textContent = subStep;
        subList.appendChild(subLi);
      });
      li.appendChild(subList);
    }
  
    secondMethodStepList.appendChild(li);
  });
  
  secondMethod.appendChild(secondMethodStepList);
  
  const secondMethodResults = document.createElement("h3");
  secondMethodResults.textContent = "TABLE OF RESULTS";
  secondMethod.appendChild(secondMethodResults);

  const secondMethodTable = document.createElement("table");
  secondMethodTable.style.borderCollapse = "collapse";
  secondMethodTable.style.width = "100%";

  const secondMethodThead = document.createElement("thead");
  const secondMethodHeaderRow = document.createElement("tr");

  const secondMethodHeaders = ["Time (t)", "Vᵣ (V)"];
  secondMethodHeaders.forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    th.style.border = "1px solid black";
    th.style.padding = "8px";
    secondMethodHeaderRow.appendChild(th);
  });

  secondMethodThead.appendChild(secondMethodHeaderRow);
  secondMethodTable.appendChild(secondMethodThead);

  const secondMethodTbody = document.createElement("tbody");
  const secondMethodTableData = [
    [0, 5],
    [1, 4.5],
    [2, 4],
    [3, 3.5],
    [4, 3],
  ];

  secondMethodTableData.forEach((row) => {
    const tr = document.createElement("tr");
    row.forEach((cell) => {
      const td = document.createElement("td");
      td.textContent = cell;
      td.style.border = "1px solid black";
      td.style.padding = "8px";
      tr.appendChild(td);
    });
    secondMethodTbody.appendChild(tr);
  });

  secondMethodTable.appendChild(secondMethodTbody);
  secondMethod.appendChild(secondMethodTable);

  const secondMethodCalc = document.createElement("h3");
  secondMethodCalc.textContent = "CALCULATIONS";
  secondMethod.appendChild(secondMethodCalc);

  const secondMethodCalcText = document.createElement("p");
  secondMethodCalcText.textContent = "Lₓ = (R × t) / ln(V / (V − Vᵣ))";
  secondMethod.appendChild(secondMethodCalcText);

  const secondMethodCalcExamples = document.createElement("p");
  secondMethodCalcExamples.innerHTML = `
    <strong>Example Calculations:</strong>
    <ul>
      <li>Lₓ = (1000 × 4 × 10⁻⁵) / ln(5 / (5 − 1)) = 0.179 H</li>
      <li>Lₓ = (1000 × 1 × 10⁻⁵) / ln(5 / (5 − 2)) = 0.196 H</li>
      <li>Lₓ = (1000 × 2 × 10⁻⁴) / ln(5 / (5 − 3)) = 0.218 H</li>
      <li>Lₓ = (1000 × 5 × 10⁻⁴) / ln(5 / (5 − 4)) = 0.311 H</li>
    </ul>
  `;
  secondMethod.appendChild(secondMethodCalcExamples);

  const secondMethodGraph = document.createElement("h3");
  secondMethodGraph.textContent = "GRAPH";
  secondMethod.appendChild(secondMethodGraph);

  const secondMethodGraphDesc = document.createElement("p");
  secondMethodGraphDesc.textContent = "Example of how the graph of the table above looks like:";
  secondMethod.appendChild(secondMethodGraphDesc);

  const secondMethodGraphImage = document.createElement("img");
  secondMethodGraphImage.src = ee2039; 
  secondMethodGraphImage.classList.add("graph-image");
  secondMethodGraphImage.alt = "Graph of Transient Voltage";
  secondMethod.appendChild(secondMethodGraphImage);

  main.appendChild(secondMethod);

  const precautions = document.createElement("section");
  const precHead = document.createElement("h2");
  precHead.textContent = "PRECAUTIONS";
  precautions.appendChild(precHead);

  const precList = document.createElement("ul");
  const precItems = [
    "I avoided error due to parallax when taking the readings.",
    "I ensured all measuring instruments (voltmeters, ammeters, etc.) were calibrated and in good working condition for accurate measurements.",
    "Ensure all connections are secure and free from corrosion or oxidation. Loose or poor connections can introduce resistance and affect measurements.",
    "I ensured that I kept detailed records of all measurements.",
  ];

  precItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    precList.appendChild(li);
  });
  precautions.appendChild(precList);

  main.appendChild(precautions);

  // Conclusion Section
  const conclusion = document.createElement("section");
  const concHead = document.createElement("h2");
  concHead.textContent = "CONCLUSION";
  conclusion.appendChild(concHead);

  const concText = document.createElement("p");
  concText.textContent =
    "At the end of this experiment, the values for the inductance in the first method are approximately equal to the values in the second method. Therefore, the experiment was successful in demonstrating the relationship between the transient voltage across the inductor and the inductance value.";
  conclusion.appendChild(concText);

  main.appendChild(conclusion);

  // References Section
  const references = document.createElement("section");
  const refHead = document.createElement("h2");
  refHead.textContent = "REFERENCES";
  references.appendChild(refHead);

  const refList = document.createElement("ul");
  const refItems = [
    "Electrical Engineering Laboratory Manual by the Department of Electrical Engineering, University of Benin.",
    "Fundamentals of Electric Circuits by Charles K. Alexander & Matthew N. O. Sadiku.",
  ];

  refItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    refList.appendChild(li);
  });
  references.appendChild(refList);

  main.appendChild(references);

  
  const hover = createHover("#");
  main.appendChild(hover);
  const download = createDownload("#");
  main.appendChild(download);
};


const displayEE204 = () => {
  const main = reset();

  main.classList.add('danger');

   const titleSection = document.createElement("section");
   const titleHead = document.createElement("h1");
   titleHead.textContent = "VERIFICATION OF NETWORK THEOREMS";
   titleSection.appendChild(titleHead);
 

 
   main.appendChild(titleSection);
 
   const aimSection = document.createElement("section");
   const aimHead = document.createElement("h2");
   aimHead.textContent = "AIM";
   aimSection.appendChild(aimHead);
 
   const aimList = document.createElement("ul");
   const aims = [
     "To verify Superposition Theorem using resistance circuit (204.A).",
     "To verify Thevenin's Theorem using resistance circuit (204.B).",
   ];
   aims.forEach((item) => {
     const li = document.createElement("li");
     li.textContent = item;
     aimList.appendChild(li);
   });
   aimSection.appendChild(aimList);
 
   main.appendChild(aimSection);
 
   const objectivesSection = document.createElement("section");
   const objHead = document.createElement("h2");
   objHead.textContent = "OBJECTIVES";
   objectivesSection.appendChild(objHead);
 
   const objList = document.createElement("ul");
   const objectives = [
     "To demonstrate that the total response of a circuit with multiple input sources is the sum of the individual responses to each source acting alone.",
     "To determine the Thevenin equivalent circuit parameters (Thevenin voltage and Thevenin resistance) of a given network and verify that the equivalent circuit accurately represents the original network.",
     "To practicalize applying the principles of superposition and Thevenin's theorem to analyze and solve complex circuits.",
     "To develop the ability of simplifying circuits using these theorems, which can be useful in various applications such as power systems, electronic circuits, and communication networks.",
   ];
   objectives.forEach((item) => {
     const li = document.createElement("li");
     li.textContent = item;
     objList.appendChild(li);
   });
   objectivesSection.appendChild(objList);
 
   main.appendChild(objectivesSection);
 
   const appHead = document.createElement("h2");
   appHead.textContent = "Apparatus";
   main.appendChild(appHead);
   const section = document.createElement("section");
   section.classList.add("appBox");
   const apparatus = [
     {
       cap: "D.C Power Sources (2 - No)",
       image: ee2041,
     },
     {
       cap: "Decade Resistance Boxes (4 - No)",
       image: ee2032,
     },
     {
       cap: "AVO Meter (1 - No)",
       image: ee2042,
     },
     {
       cap: "Male-Male Connecting Wires",
       image: ee2043,
     },
     {
       cap: "Oscilloscope (Optional)",
       image: ee2051,
     },
   
   ];
   let appBox = [];
   let appImage = [];
   let appCaption = [];
   for (let i = 0; i < apparatus.length; i++) {
     appBox[i] = document.createElement("div");
     appImage[i] = document.createElement("img");
     appCaption[i] = document.createElement("p");
     appImage[i].src = apparatus[i].image;
     appCaption[i].textContent = apparatus[i].cap;
     appBox[i].appendChild(appImage[i]);
     appBox[i].appendChild(appCaption[i]);
     section.appendChild(appBox[i]);
   }
   main.appendChild(section);

   const theorySection = document.createElement("section");
   const theoryHead = document.createElement("h2");
   theoryHead.textContent = "204.A: SUPERPOSITION THEOREM - THEORY";
   theorySection.appendChild(theoryHead);
 
   const theoryIntro = document.createElement("p");
   theoryIntro.innerHTML = `
     Without electrical circuits, modern technology would not exist. In fact, the whole pursuit of electrical engineering largely dies off, becoming almost a vacuum—to say the least, electrical circuits are all around us, and life as we know it is impossible without them. We have Ohm's Law (for relating the voltage and current of circuits, and therein uncovered the concept of resistance) and Kirchhoff's Laws at our disposal when we are about to construct a desired circuit or analyze a prototype, ascertaining whether it meets design/application requirements. However, as circuits become more intricate, complex, and advanced, using these basic laws alone introduces a lot more problems than it is able to solve. Using only Ohm's Law or Kirchhoff's Laws makes calculations more tedious and error-prone in multi-source or large-scale systems. There has to be another solution that builds on what is on the ground so that unnecessary complexity and inaccurate results can be avoided.
       
     The additional set of principles used to navigate these major problems are called <strong>Network Theorems</strong>. <strong>Network theorems</strong>, a set of foundational principles in electrical engineering, are used for simplifying and analyzing such circuits, allowing engineers to break down complex systems into manageable components. Electric circuit theorems are always beneficial to help find voltage and currents in multi-loop circuits. These theorems use fundamental rules or formulas and basic equations of mathematics to analyze basic components of electrical or electronics parameters such as voltages, currents, resistance, and so on. These fundamental theorems include the basic theorems like Superposition theorem, Tellegen's theorem, Norton's theorem, Maximum power transfer theorem, and Thevenin's theorems. Another group of network theorems that are mostly used in the circuit analysis process includes the Compensation theorem, Substitution theorem, Reciprocity theorem, Millman's theorem, and Miller's theorem.
       
     The central purpose of this investigation is to use a resistance circuit to verify some of these network theorems, namely Superposition and Thevenin's theorems. Exploring the practical applications and step-by-step methodologies of the <strong>Superposition Theorem</strong> and <strong>Thevenin's Theorem</strong>, this experiment aims to address the challenges of analyzing circuits with multiple independent sources and to simplify complex networks into equivalent circuits for easier computation. By mastering these theorems, one can efficiently solve for key circuit parameters, such as currents and voltages across components, in both theoretical and real-world scenarios.
   `;
   theorySection.appendChild(theoryIntro);
 
   const physicalExplanation = document.createElement("h3");
   physicalExplanation.textContent = "Physical Explanation of Phenomena";
   theorySection.appendChild(physicalExplanation);
 
   const physicalText = document.createElement("p");
   physicalText.innerHTML = `
     The study of electrical circuits emanates from the foundational principles of electromagnetism and circuit theory. At its core, two key phenomena are explored in circuit analysis: the behavior of current and voltage in response to various sources and the interaction of circuit elements such as resistors, capacitors, and inductors. These are the interactions that predict how circuits will perform under different physical constraints; an in-depth & practical knowledge of which is indispensable to the engineering practice.
       
     The <strong>Superposition Theorem</strong> states that in a linear circuit with multiple independent sources, the total current or voltage at any point in the circuit can be determined by summing the contributions from each of the other independent sources. This theorem <strong>relies on the linearity of the circuit components, which means that the response (current or voltage) is directly proportional to the input (source)</strong>.
       
     The strategy used in the superposition theorem is to eliminate all but one source of power within a network at a time. Then, we use series and parallel circuit analysis techniques to determine voltage drops and currents within the modified network for each power source separately.
       
     This process is then repeated sequentially by individually evaluating the circuit for every voltage and current source in the system. After each individual analysis has been completed, the voltage and current values are all "superimposed" on top of each other (added algebraically) to find the actual voltage drops and currents with all sources active.
       
     <strong>Thevenin's Theorem</strong> is an analytical method used to change a complex circuit into a simple equivalent circuit consisting of a single resistance in series with a source voltage. This theorem is based on the idea that any linear bilateral network can be represented as an equivalent circuit; a good method when analyzing circuits with varying load conditions.
       
     <strong>Thevenin's Theorem</strong> states that <em>"Any linear circuit containing several voltages and resistances can be replaced by just one single voltage in series with a single resistance connected across the load"</em>. In other words, it is possible to simplify any electrical circuit, no matter how complex, to an equivalent two-terminal circuit with just a single constant voltage source in series with a resistance (or impedance) connected to a load as shown below.
       
     The limitations of Thevenin's theorem are similar to that of the Superposition Principle.
   `;
   theorySection.appendChild(physicalText);
 
   const governingEquations = document.createElement("h3");
   governingEquations.textContent = "Governing Equations";
   theorySection.appendChild(governingEquations);
 
   const equationsText = document.createElement("p");
   equationsText.innerHTML = `
     We can derive the governing equations for both the Superposition and Thevenin's Theorems to mathematically prove the analysis.
       
     <strong>1. Superposition Theorem:</strong>
     <ul>
       <li>For a circuit with multiple sources, the total current Iₜ through a branch can be expressed as:</li>
       <li><strong>Iₜ = I₁ + I₂ + ... + Iₙ</strong></li>
       <li>Each I is calculated by activating one source at a time while deactivating all others (replacing voltage sources with short circuits and current sources with open circuits).</li>
     </ul>
      
     <strong>2. Thevenin's Theorem:</strong>
     <ul>
       <li>The Thevenin equivalent voltage <strong>Vₜₕ</strong> is determined by calculating the open-circuit voltage across the terminals of interest:</li>
       <li><strong>Vₜₕ = Vₒₖ</strong></li>
       <li>The Thevenin equivalent resistance <strong>Rₜₕ</strong> is found by deactivating all independent sources and calculating the equivalent resistance seen from the terminals:</li>
       <li><strong>Rₜₕ = Rₑₖ</strong></li>
     </ul>
      
     These equations are derived under the assumption that the circuit is linear and bilateral, meaning that the relationships between voltage and current are a direct variation and the circuit behaves the same regardless of the direction of current flow.
   `;
   theorySection.appendChild(equationsText);
 
   const computerSimulation = document.createElement("h3");
   computerSimulation.textContent = "Computer Simulation";
   theorySection.appendChild(computerSimulation);
 
   const simulationText = document.createElement("p");
   simulationText.innerHTML = `
     To validate the theoretical analysis, numerical simulations can be employed using software tools such as SPICE or MATLAB. The governing equations can be implemented in these tools to model the circuit behavior under various conditions.
       
     <strong>Initial and Boundary Conditions:</strong> For simulations, initial conditions may include setting all voltages and currents to zero before applying the sources. Boundary conditions will depend on the specific circuit configuration and the sources used.
       
     <strong>Numerical Parameters:</strong> When integrating differential equations that may arise in circuit analysis (e.g., in RLC circuits), the step size for numerical integration should be chosen carefully to ensure stability and accuracy. A common approach is to use a small time step, such as <strong>Δt = 0.01</strong> seconds, to capture the transient behavior of the circuit accurately.
       
     By connecting the theoretical equations to numerical simulations, engineers can predict circuit behavior under various scenarios, enhancing their understanding and ability to design effective electrical systems.
   `;
   theorySection.appendChild(simulationText);
 
   const theoryConclusion = document.createElement("h3");
   theoryConclusion.textContent = "Conclusion";
   theorySection.appendChild(theoryConclusion);
 
   const conclusionText = document.createElement("p");
   conclusionText.textContent = `
     The theoretical analysis of network theorems, particularly the Superposition and Thevenin's Theorems, provides a firm foundation for understanding and analyzing electrical circuits. By combining physical explanations, governing equations, and computer simulations, engineers can effectively tackle complex circuit designs and analyses.
   `;
   theorySection.appendChild(conclusionText);
 
   main.appendChild(theorySection);
 
   // Diagrams Section
  //  const diagramsSection = document.createElement("section");
  //  const diagramsHead = document.createElement("h2");
  //  diagramsHead.textContent = "DIAGRAMS";
  //  diagramsSection.appendChild(diagramsHead);
 
  //  const diagramImage = document.createElement("img");
  //  diagramImage.src = ee2044;
  //  diagramImage.alt = "Circuit Diagram for Experiment EE 204";
  //  diagramImage.style.width = "100%";
  //  diagramImage.style.maxWidth = "650px";
  //  diagramsSection.appendChild(diagramImage);
 
  //  main.appendChild(diagramsSection);

  const diagramsSection = document.createElement("section");
diagramsSection.className = "diagrams-section";
const diagramsHeading = document.createElement("h2");
diagramsHeading.textContent = "DIAGRAMS";
diagramsSection.appendChild(diagramsHeading);

const diagrams = [{ cap: "Circuit Diagram for Experiment EE 204", image: ee2044 }];

diagrams.forEach((diagram) => {
  const diagramContainer = document.createElement("div");
  diagramContainer.className = "diagram-container";

  const diagramImage = document.createElement("img");
  diagramImage.className = "diagram-image";
  diagramImage.src = diagram.image;
  diagramImage.alt = diagram.cap;

  const diagramCaption = document.createElement("p");
  diagramCaption.className = "diagram-caption";
  diagramCaption.textContent = diagram.cap;

  diagramContainer.appendChild(diagramImage);
  diagramContainer.appendChild(diagramCaption);
  diagramsSection.appendChild(diagramContainer);
});

main.appendChild(diagramsSection);
 

  // Procedure Section (204.A: Superposition Theorem)
  const procedureA = document.createElement("section");
  const procAHead = document.createElement("h2");
  procAHead.textContent = "204.A: SUPERPOSITION THEOREM - PROCEDURE";
  procedureA.appendChild(procAHead);

  const procASteps = [
    "All measurements must be recorded on Table 204.1.",
    "Use the Avometer (Set D.C. 10V range) for all voltage measurements.",
    "Connect mains to the d.c. voltage sources E₁ and E₂ and switch ON.",
    "Using the voltage adjust controls, set the d.c. output voltage of E₁ and E₂ to 6V (no-load or open-circuit value).",
    "Switch off mains to the d.c. sources and connect the decade resistors R₁, R₂, and R₃ and the d.c. sources E₁ and E₂ as per the circuit diagram of Fig. 204.1 (note the polarities of the sources).",
    "Select resistance values between 10-100 ohms for R₁ + R₂ and R₃ and switch ON mains (recheck the circuit).",
    "Measure the e.m.f across the terminals of the d.c. source E₁ and E₂, record as V₁ and V₂ respectively.",
    "Note: Since voltage is a vector quantity, it is important you also note the direction of V₁ and V₂ and use those as your reference (+) direction for subsequent measurements.",
    "Measure the voltages (i.e. potential differences) across R₁, R₂, and R₃ and record.",
    "Disconnect the d.c. source E₁ from the circuit and short-circuit terminals A-B (make sketch of resultant circuit and use space A).",
    "Note: Where the voltage direction has changed from the direction in (6), record it as a negative (-) value.",
    "Measure voltage (d.c.) across R₁, R₂, and R₃ and record.",
    "Reconnect the d.c. source E₁ into the circuit and disconnect source E₂; short-circuit the resultant circuit (figure Space A).",
    "Measure voltages V₁, V₂, and V₃ across R₁, R₂, and R₃ respectively and record.",
    "Switch off all mains supply to E₁ and E₂.",
  ];

  const procAList = document.createElement("ol");
  procASteps.forEach((step) => {
    const li = document.createElement("li");
    li.textContent = step;
    procAList.appendChild(li);
  });
  procedureA.appendChild(procAList);

  main.appendChild(procedureA);

  // Procedure Section (204.B: Thevenin's Theorem)
  const procedureB = document.createElement("section");
  const procBHead = document.createElement("h2");
  procBHead.textContent = "204.B: THEVENIN'S THEOREM - PROCEDURE";
  procedureB.appendChild(procBHead);

  const procBSteps = [
    "Read through each procedure step before acting.",
    "All measurements must be recorded in Table T.1.",
    "Use the Avometer (Set D.C. 10V range) for all voltage and current measurements.",
    "Connect mains to the d.c. voltage source EE and switch ON.",
    "Using the voltage adjust controls, set the d.c. output voltage of EE to 6V (no-load or open-circuit value).",
    "Connect the circuit as shown in Fig. T.1, including the voltage source EE, the resistors R₁, R₂, and the load resistor Rₗ.",
    "Measure and record the open-circuit voltage across the terminals AA-BB (i.e., across Rₗ) as Vₜₕ.",
    "Disconnect Rₗ from the circuit.",
    "Measure the equivalent resistance of the circuit as seen from terminals AA-BB. To do this:",
    "  - Switch off the voltage source EE and replace it with its internal resistance (short circuit if the source is ideal).",
    "  - Measure the equivalent resistance across terminals AA-BB using the Avometer and record this as Rₜₕ.",
    "Reconnect Rₗ to the circuit.",
    "Measure the voltage across Rₗ and the current through Rₗ, recording them as Vₗ and Iₗ respectively.",
    "Verify Iₗ using Iₗ = Vₜₕ / (Rₜₕ + Rₗ).",
    "Switch off all mains supply to the voltage source EE.",
  ];

  const procBList = document.createElement("ol");
  procBSteps.forEach((step) => {
    const li = document.createElement("li");
    li.textContent = step;
    procBList.appendChild(li);
  });
  procedureB.appendChild(procBList);

  main.appendChild(procedureB);

  // Results/Table of Values Section
  const results = document.createElement("section");
  const resultsHead = document.createElement("h2");
  resultsHead.textContent = "RESULTS/TABLE OF VALUES";
  results.appendChild(resultsHead);

  const resultsTable = document.createElement("table");
  resultsTable.style.borderCollapse = "collapse";
  resultsTable.style.width = "100%";

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  const headers = ["Circuit Condition", "V₁ (V)", "V₂ (V)", "V₃ (V)", "I₁ (A)", "I₂ (A)", "I₃ (A)"];
  headers.forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    th.style.border = "1px solid black";
    th.style.padding = "8px";
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  resultsTable.appendChild(thead);

  const tbody = document.createElement("tbody");
  const tableData = [
    ["E₁ & E₂", "-2", "2", "4", "-0.07", "0.07", "0.13"],
    ["E₁ alone", "2", "4", "2", "0.07", "0.13", "0.07"],
    ["E₂ alone", "-4", "-2", "2", "-0.13", "-0.07", "0.07"],
  ];

  tableData.forEach((row) => {
    const tr = document.createElement("tr");
    row.forEach((cell) => {
      const td = document.createElement("td");
      td.textContent = cell;
      td.style.border = "1px solid black";
      td.style.padding = "8px";
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });

  resultsTable.appendChild(tbody);
  results.appendChild(resultsTable);

  const resultsNote = document.createElement("p");
  resultsNote.textContent = "Note: Voltage and current values are recorded for different circuit conditions.";
  results.appendChild(resultsNote);

  main.appendChild(results);

  // Calculations/Analysis Section
  const calculations = document.createElement("section");
  const calcHead = document.createElement("h2");
  calcHead.textContent = "CALCULATIONS/ANALYSIS";
  calculations.appendChild(calcHead);

  const calcText = document.createElement("p");
  calcText.innerHTML = `
    <strong>Voltage Response:</strong>
    <ul>
      <li>V₁ₐ = V₁₆ + V₁ₐ = -4V + 2V = -2V</li>
      <li>V₂ₐ = V₂₆ + V₂ₐ = -2V + 4V = 2V</li>
      <li>V₃ₐ = V₃₆ + V₃ₐ = 2V + 2V = 4V</li>
    </ul>
    <strong>Current Response:</strong>
    <ul>
      <li>I₁ₐ = I₁₆ + I₁ₐ = -0.13A + 0.07A = -0.06A</li>
      <li>I₂ₐ = I₂₆ + I₂ₐ = -0.07A + 0.13A = 0.06A</li>
      <li>I₃ₐ = I₃₆ + I₃ₐ = 0.07A + 0.07A = 0.14A</li>
    </ul>
  `;
  calculations.appendChild(calcText);

  main.appendChild(calculations);

  // Conclusion Section
  const conclusion = document.createElement("section");
  const concHead = document.createElement("h2");
  concHead.textContent = "CONCLUSION";
  conclusion.appendChild(concHead);

  const concText = document.createElement("p");
  concText.innerHTML = `
    In this experiment, we applied and verified two fundamental network theorems—Superposition Theorem and Thevenin's Theorem—in the analysis of electrical circuits. By performing hands-on calculations, simulations, and measurements, we gained a deeper understanding of these theorems, their practical applications, and their importance in simplifying complex electrical networks.
      
    <strong>Summary of Key Learning Outcomes:</strong>
    <ul>
      <li><strong>Superposition Theorem:</strong> It was demonstrated that in a linear circuit with multiple independent sources, the total response (voltage or current) can be determined by summing the effects of each individual source, with all other sources turned off (replaced by their internal impedance).</li>
      <li><strong>Thevenin's Theorem:</strong> It was learned how to simplify a complex linear circuit into an equivalent circuit consisting of a single voltage source (Thevenin voltage) and a single series resistance (Thevenin resistance), as seen from the load terminals.</li>
      <li><strong>Practical Circuit Analysis:</strong> The experiment reinforced the importance of these theorems in analyzing and simplifying circuits, particularly in situations where individual components, such as loads, need to be analyzed or replaced.</li>
    </ul>
     
    <strong>Practical Skills Acquired:</strong>
    <ul>
      <li><strong>Circuit Analysis Techniques:</strong> Developed proficiency in applying systematic methods for network theorem calculations, including turning off sources for superposition and determining open-circuit voltage and equivalent resistance for Thevenin.</li>
      <li><strong>Measurement Techniques:</strong> Gained experience using tools such as multimeters and oscilloscopes to measure voltages and currents, and verify theoretical predictions.</li>
      <li><strong>Simulation and Validation:</strong> Used circuit simulation software (such as LTspice, Multisim, or equivalent) to validate experimental results and compare them with theoretical calculations.</li>
    </ul>
     
    <strong>Future Applications:</strong>
    The Superposition and Thevenin theorems are integral in the design and analysis of electrical and electronic systems. These theorems are particularly useful in simplifying circuits for troubleshooting, designing power systems, and optimizing circuit performance. The practical understanding gained from this experiment will be crucial in addressing real-world challenges requiring such skillset, for example, designing efficient power delivery systems for residential areas.
      
    In conclusion, this experiment provided hands-on experience in applying two cornerstone network theorems. By bridging theory and practice, this experiment has formed a strong foundation for more advanced studies in circuit theory and electrical engineering.
  `;
  conclusion.appendChild(concText);

  main.appendChild(conclusion);

  // Precautions Section
  const precautions = document.createElement("section");
  const precHead = document.createElement("h2");
  precHead.textContent = "PRECAUTIONS";
  precautions.appendChild(precHead);

  const precList = document.createElement("ul");
  const precItems = [
    "All circuit connections were double-checked before powering on the circuit to ensure there are no loose or incorrect connections that could cause short circuits or damage components.",
    "Switched off the power supply when adding, removing, or changing components in the circuit to avoid electric shocks or damage to the equipment.",
    "Ensured that all components, such as resistors, are rated to handle the applied voltage and current to prevent component failure or overheating.",
    "Confirmed the correct polarity of power supplies (positive and negative terminals) to avoid reverse polarity issues that could damage the circuit or components.",
    "Handled the resistors, wires, and other components carefully to avoid damaging them or introducing errors due to poor connections.",
    "Properly used the correct range on multimeters and oscilloscopes when measuring voltage, current, or resistance to prevent instrument damage or inaccurate readings.",
    "Ensured the power supply and measuring equipment are not overloaded beyond their specified limits to avoid equipment failure.",
    "Ensured that the circuit and power supply are properly grounded to avoid noise interference or potential electrical hazards.",
    "Measured the values before assembling the circuit, of resistors and other components with a multimeter to ensure they match the design specifications.",
    "Performed the experiment on a clean, dry, and non-conductive surface to avoid accidental short circuits or electrical hazards.",
    "Clearly labeled nodes and components to avoid confusion and ensure accurate assembly and analysis.",
    "Avoided contact with live circuits to prevent electric shocks.",
    "Ensured the simulated results align with theoretical expectations to avoid mistakes in the physical circuit.",
    "Ensured that all measuring instruments, such as multimeters and oscilloscopes, are properly calibrated before use for accurate measurements.",
    "Recorded all measurements and observations during the experiment in real time to avoid forgetting or misinterpreting results later.",
  ];

  precItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    precList.appendChild(li);
  });
  precautions.appendChild(precList);

  main.appendChild(precautions);

  // References Section
  const references = document.createElement("section");
  const refHead = document.createElement("h2");
  refHead.textContent = "REFERENCES";
  references.appendChild(refHead);

  const refList = document.createElement("ul");
  const refItems = [
    "Alexander, C. K., & Sadiku, M. N. O. (2017). Fundamentals of electric circuits (6th ed.). McGraw-Hill Education.",
    "Hayt, W. H., & Kemmerly, J. E. (2018). Engineering circuit analysis (8th ed.). McGraw-Hill Education.",
    "Nilsson, J. W., & Riedel, S. A. (2019). Electric circuits (11th ed.). Pearson.",
    "All About Circuits. (2022, August 5). Superposition theorem explained. All About Circuits. https://www.allaboutcircuits.com/textbook/direct-current/chpt-6/superposition-theorem/",
    "Smith, J. (2023, April 10). Understanding Thevenin's theorem in electrical circuits. Electronics Tutorials. https://www.electronicstutorials.com/thevenins-theorem/",
  ];

  refItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    refList.appendChild(li);
  });
  references.appendChild(refList);

  main.appendChild(references);

  const hover = createHover("#");
  main.appendChild(hover);
  const download = createDownload("#");
  main.appendChild(download);
};


export {
  displayStarted,
  displayEE202,
  displayEE206,
  displayEE205,
  displayEE207,
  displayEE203,
  displayEE201,
  displayEE208,
  displayEE204
};
