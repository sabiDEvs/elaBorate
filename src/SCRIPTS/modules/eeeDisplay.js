import pic1 from "../../RESOURCES/images/achieve.png";
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
import ee2031 from "../../RESOURCES/images/ee203-1.png";
import ee2032 from "../../RESOURCES/images/ee203-1.png";
import ee2033 from "../../RESOURCES/images/ee203-1.png";
import ee2034 from "../../RESOURCES/images/ee203-1.png";
import ee2051 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/2051.png";
import ee2052 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/2052.png";
import ee2053 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/2053.png";
import ee2054 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/2054.png";
import ee2055 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/2055.png";
import ee2056 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/2056.png";
import ee2057 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/2057.png";
import ee2058 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/2058.png";
import ee2071 from '../../RESOURCES/images/ELECTRICAL/200L IMAGES/207/1.png';

import ee2072 from '../../RESOURCES/images/ELECTRICAL/200L IMAGES/207/2.png';

import ee2073 from '../../RESOURCES/images/ELECTRICAL/200L IMAGES/207/3.png';

import ee2074 from '../../RESOURCES/images/ELECTRICAL/200L IMAGES/207/4.png';

import ee2075 from '../../RESOURCES/images/ELECTRICAL/200L IMAGES/207/5.png';
import ee2021 from '../../RESOURCES/images/ELECTRICAL/200L IMAGES/202/1.png';

import ee2022 from '../../RESOURCES/images/ELECTRICAL/200L IMAGES/202/2.png';

import ee2023 from '../../RESOURCES/images/ELECTRICAL/200L IMAGES/202/3.png';

import ee2024 from '../../RESOURCES/images/ELECTRICAL/200L IMAGES/202/4.png';

import ee2025 from '../../RESOURCES/images/ELECTRICAL/200L IMAGES/202/5.png';
import ee2081 from '../../RESOURCES/images/ELECTRICAL/200L IMAGES/208/fig1.png';
import ee2082 from '../../RESOURCES/images/ELECTRICAL/200L IMAGES/208/fig2.png';
import ee2083 from '../../RESOURCES/images/ELECTRICAL/200L IMAGES/208/fig3.png';
import ee2084 from '../../RESOURCES/images/ELECTRICAL/200L IMAGES/208/fig4.png';
import ee2085 from '../../RESOURCES/images/ELECTRICAL/200L IMAGES/208/fig5.png';
import ee2086 from '../../RESOURCES/images/ELECTRICAL/200L IMAGES/208/fig6.png';
import ee2087 from '../../RESOURCES/images/ELECTRICAL/200L IMAGES/208/fig7.png';


import ee2011 from '../../RESOURCES/images/ELECTRICAL/200L IMAGES/201/1.png';
import ee2013 from '../../RESOURCES/images/ELECTRICAL/200L IMAGES/201/2.png';
import ee2014 from '../../RESOURCES/images/ELECTRICAL/200L IMAGES/201/3.png';
import ee2012 from '../../RESOURCES/images/ELECTRICAL/200L IMAGES/2051.png';

import ee201Fig1 from '../../RESOURCES/images/ELECTRICAL/200L IMAGES/201/fig1.jpg'; 
import ee201Fig2 from '../../RESOURCES/images/ELECTRICAL/200L IMAGES/201/fig2.png';
import ee201Plot1 from '../../RESOURCES/images/ELECTRICAL/200L IMAGES/201/plot.png';

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
  icon.src = pic1;
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
  icon.src = pic1;
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
  imgAchieve.classList.add("fullImg");
  imgAchieve.id = "getStartImg";

  const startingHeader = document.createElement("h2");
  startingHeader.textContent = "GETTING STARTED WITH PRODUCTION ELA";
  startingHeader.id = "getStartHead";
  divImgAchieve.appendChild(startingHeader);
  main.appendChild(divImgAchieve);

  const genSection = document.createElement("section");
  const genHead = document.createElement("h3");
  genHead.textContent = "General Instructions";
  genSection.appendChild(genHead);
  const genDesc = document.createElement("p");
  genDesc.textContent =
    "Follow these instructions when preparing for any Production ELA...";
  genSection.appendChild(genDesc);
  const report = displayTask("1", "Report Format:", [
    "Use A4 paper or full-scalp sheets for writing your reports.",
    "The instructor will specify the preferred format; if necessary.",
  ]);
  genSection.appendChild(report);
  const attend = displayTask("2", "Attendance:", [
    "Punctuality is crucial for all Production ELA sessions.",
    "Ensure you do not miss any session.",
  ]);
  genSection.appendChild(attend);
  main.appendChild(genSection);

  const repSection = document.createElement("section");
  const repHead = document.createElement("h3");
  repHead.textContent = "Report Structure";
  repSection.appendChild(repHead);
  const repDesc = document.createElement("p");
  repDesc.textContent =
    "It is most expedient that you follow the structure given below, when writing your reports.";
  repSection.appendChild(repDesc);
  const id = displayTask("1", "Identification:", [
    "Name: [Your full name]",
    "Matriculation Number: [Your Matriculation Number]",
    "Department: [Your department]",
    "Serial Number: [Your ELA Serial number Upon registration]",
    "Section: []",
    "Title of Experiment: [e.g “Bench fitting”]",
    "Experiment Code: [e.g “AM201”]",
  ]);
  repSection.appendChild(id);
  const objective = displayTask("2", "Objectives:", [
    "State the aim of the experiment as listed in the manual. Write down all the objectives provided.",
  ]);
  repSection.appendChild(objective);
  const tools = displayTask("3", "Apparatus/Tools:", [
    "List all tools used in the experiment.",
    "Include diagrams of the tools and ensure they are well-labeled and neatly drawn.",
  ]);
  repSection.appendChild(tools);
  const theory = displayTask("4", "Theory:", [
    "Provide a theoretical background relevant to the practical.",
    "Discuss the applications and sequence of operations, supplemented with diagrams where necessary.",
    "Ensure the content is focused and does not deviate from the topic.",
  ]);
  repSection.appendChild(theory);
  const procedures = displayTask("5", "Procedures:", [
    "Document the procedure exactly as written in the manual.",
    "Use diagrams to explain the steps, if possible.",
  ]);
  repSection.appendChild(procedures);
  const precautions = displayTask("6", "Precautions:", [
    "List the precautions taken during the experiment in past tense.",
    "~Example: “I ensured that I...”",
  ]);
  repSection.appendChild(precautions);
  const conclusions = displayTask("7", "Conclusion:", [
    "Summarize the outcomes of the experiment.",
    "~Example: “At the end of this experiment, we were able to develop a lap joint, understand the sequence of operations involved, and achieve a comprehensive understanding of the process.”",
  ]);
  repSection.appendChild(conclusions);
  const references = displayTask("8", "References:", [
    "Cite books and manuals relevant to the experiment. Do not include web links.",
    "~Example:",
    "~~“Production Engineering Laboratory Manual for ELA201 and ELA202’’ by the Department of Production Engineering, University of Benin.",
    "~~”The TIG Welding Book” by Todd Bridigum.",
    "~~”Welding for Dummies” by Steven Robert Farnsworth.",
  ]);
  repSection.appendChild(references);
  main.appendChild(repSection);

  const addSection = document.createElement("section");
  const addHead = document.createElement("h2");
  addHead.textContent = "Additional Notes";
  addSection.appendChild(addHead);
  const para1 = document.createElement("p");
  para1.textContent =
    "Always follow the instructor's specific guidelines regarding report format and content to ensure good marks.";
  addSection.appendChild(para1);
  const para2 = document.createElement("p");
  para2.textContent =
    "Submit your report on time. The report submission time is usually given by the instructor.";
  addSection.appendChild(para2);
  const good = document.createElement("div");
  good.textContent = "GOOD LUCK!!!";
  addSection.appendChild(good);
  main.appendChild(addSection);
  const hover = createHover("#");
  main.appendChild(hover);
  const download = createDownload("#");
  main.appendChild(download);
};

const displayEE201 = () => {
  const main = reset();

  // Create and append the main heading
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
  method1Heading.textContent = "FIRST METHOD: Current-Voltage Measurement Method";
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
  theoryHeading1.textContent = "Theory of Measuring Unknown Resistance Using the Current-Voltage (I-V) Method";
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
  videoDescription.textContent = "Watch the video below to learn more about Ohm's Law:";
  videoSection.appendChild(videoDescription);

  const videoEmbed = document.createElement("div");
  videoEmbed.innerHTML = `
    <iframe width="677" height="392" src="https://www.youtube.com/embed/-m9bqZ3L5pg" title="Ohm's Law Experiment" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  `;
  videoSection.appendChild(videoEmbed);
  theorySection1.appendChild(videoSection);

  // Create and append the Diagrams section
  const diagramsSection = document.createElement("section");
  const diagramsHeading = document.createElement("h2");
  diagramsHeading.textContent = "DIAGRAMS";
  diagramsSection.appendChild(diagramsHeading);

  const diagrams = [
    { cap: "CIRCUIT DIAGRAM", image: ee201Fig1 },
  ];

  diagrams.forEach((diagram) => {
    const diagramContainer = document.createElement("div");
    const diagramImage = document.createElement("img");
    const diagramCaption = document.createElement("p");

    diagramImage.src = diagram.image;
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
    [3, 0.30, 100],
    [6, 0.60, 100],
    [9, 0.90, 100],
    [12, 1.20, 100],
    [15, 1.50, 100],
    [18, 1.60, 100],
    [21, 2.10, 100],
    [24, 2.40, 100],
    [27, 2.70, 100],
    [30, 3.00, 100],
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
  theoryHeading2.textContent = "Theory of Measuring Unknown Resistance Using the Wheatstone Bridge Method";
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

  const tableHeaders2 = ["R<sub>1</sub> (Ω)", "R<sub>2</sub> (Ω)", "R<sub>3</sub> (Ω)", "R<sub>x</sub> (Ω)"];
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
  graphImage.src = ee201Plot1
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
  conclusionText.textContent = "At the end of this experiment, we successfully measured the unknown resistance using the current-voltage method and verified Ohm's Law. The results were consistent with theoretical expectations. Additionally, we explored the Wheatstone Bridge method, which provided a more precise measurement of resistance. Both methods demonstrated the importance of accurate measurements and proper experimental techniques in electrical engineering.";
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

  const apparatusSection = document.createElement("section");
  apparatusSection.innerHTML = `
    <h2>APPARATUS/COMPONENTS/EQUIPMENT</h2>
    <blockquote>
      <p>The experimental setup featured the following components:</p>
      <ol type="a">
        <li><strong>Electrical Machine Tutor (Model EMT-180)</strong>: Main machine assembly for testing</li>
        <li><strong>Power Supply Panel with Meters</strong>: Supplies DC voltage and measures current/voltage</li>
        <li><strong>Rheostat (9–200 Ω, 3 A)</strong>: For varying resistance and controlling voltage/current</li>
        <li><strong>Hand Tachometer</strong>: Measures rotational speed in RPM</li>
      </ol>
    </blockquote>
  `;
  main.appendChild(apparatusSection);

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
  diagramsSection.innerHTML = `
     <h2>DIAGRAMS</h2>
  <div class="diagram-grid">
    ${images.map((img, i) => `
      <div class="diagram-item">
        <img src="${img}" 
             alt="Figure ${i + 1}" 
             style="width: ${i === 0 ? '4.166in' : i === 4 ? '5.333in' : '6.5in'};">
        <p>Fig ${i + 1}: ${[
          'DC Shunt Motor',
          'DC Shunt Motor Schematics',
          'Electric Machine Trainer',
          'DC Power Supply',
          'Variable Resistor',
          'Analog Hand Tachometer',
          'Hand Tachometer',
          'Additional Diagram'
        ][i]}</p>
        </div>
      `).join('')}
    </div>
  `;
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
          η = (P<sub>out</sub>/P<sub>in</sub>) × 100%<br>
          Where:<br>
          P<sub>in</sub> = V(I<sub>a</sub> + I<sub>f</sub>)<br>
          P<sub>out</sub> = T × ω
        </div>
      </li>
    </ol>
  `;
  main.appendChild(procedureSection);

 
  const resultsSection = document.createElement("section");
  resultsSection.innerHTML = `
    <h2>RESULTS/TABLE OF VALUES</h2>
    <p class="table-disclaimer">Note: These are placeholder or test values not the actual values used during the experiment. This is just to show an example of what to expect. Take down the readings and parameters obtained from the experiment and record them as your table of values</p>
    <table class="results-table">
      <tr>
        <th rowspan="2">Parameter</th>
        <th colspan="6">Measurements</th>
      </tr>
      <tr>
        <th>0.6A</th><th>0.8A</th><th>1.0A</th>
        <th>1.2A</th><th>1.4A</th><th>1.6A</th>
      </tr>
      <tr><td>N<sub>a</sub> (RPM)</td> <td>104</td><td>100</td><td>92</td><td>84</td><td>80</td><td>75</td></tr>
      <tr><td>Torque (Nm)</td> <td>0.1</td><td>0.2</td><td>0.3</td><td>0.4</td><td>0.5</td><td>0.6</td></tr>
      <tr><td>W<sub>in</sub> (W)</td> <td colspan="6">Calculated values...</td></tr>
      <tr><td>W<sub>out</sub> (W)</td> <td colspan="6">Calculated values...</td></tr>
      <tr><td>Efficiency (%)</td> <td colspan="6">Calculated values...</td></tr>
    </table>
    <p><em>Experimental parameters:</em> V = 40V, R<sub>a</sub> = 0.2Ω</p>
  `;
  main.appendChild(resultsSection);

  // ======================== QUESTIONS SECTION ========================
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
                <td>Electrical losses due to resistance in windings:<br> 
                    - Armature Copper Loss: Ia²Ra<br>
                    - Field Copper Loss: If²Rf<br>
                    - Brush Contact Loss</td>
            </tr>
            <tr>
                <td><strong>Iron Losses</strong></td>
                <td>Core losses due to alternating magnetic fields:<br> 
                    - Hysteresis Loss<br>
                    - Eddy Current Loss</td>
            </tr>
            <tr>
                <td><strong>Mechanical Losses</strong></td>
                <td>Losses due to physical movement:<br>
                    - Friction Loss<br>
                    - Windage Loss</td>
            </tr>
            <tr>
                <td><strong>Stray Load Losses</strong></td>
                <td>Miscellaneous losses:<br>
                    - Armature reaction effects<br>
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
  
  const style = document.createElement("style");
  style.textContent = `
    .theory-table, .results-table, .losses-table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
    }
    th, td {
      border: 1px solid #000;
      padding: 8px;
      text-align: center;
    }
    .table-disclaimer {
      font-style: italic;
      margin: 10px 0;
      color: #ff0000;}

       .question {
            font-weight: bold;
            margin-top: 20px;
        }
        .answer {
            margin-left: 20px;
        }
        .subsection {
            margin-left: 40px;
        }
    .diagram-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
    .diagram-item img {
      max-width: 100%;
      height: auto;
      border: 1px solid #ccc;
    }
    .equation {
      background: #f8f9fa;
      padding: 15px;
      margin: 10px 0;
      border-left: 3px solid #36c;
    }
    blockquote {
      margin: 15px 30px;
      padding: 10px 20px;
    }
  `;
  main.appendChild(style);

  return main;
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
    diagramImage[i] = document.createElement("img");
    diagramCaption[i] = document.createElement("p");
    diagramImage[i].src = diagrams[i].image;
    diagramCaption[i].textContent = diagrams[i].cap;
    diagramBox[i].appendChild(diagramImage[i]);
    diagramBox[i].appendChild(diagramCaption[i]);
    diagramsSection.appendChild(diagramBox[i]);
  }

  main.appendChild(diagramsSection);
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

  const results = document.createElement('section');
  const resultHeader = document.createElement('h2');
  resultHeader.textContent = "Results";
  results.appendChild(resultHeader);


const resultsTable = document.createElement("table");
resultsTable.style.borderCollapse = "collapse";
resultsTable.style.width = "100%";
resultsTable.style.marginTop = "20px";

// Create table header
const thead = document.createElement("thead");
const headerRow = document.createElement("tr");

// Create header cells
const headers = ["Voltage (V)", "Deflection S(cm)", "Deflection Sensitivity D = (V/S)"];
headers.forEach(text => {
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
    [-15, "-3.4"]
];

// Create rows and cells
tableData.forEach(row => {
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
const headers2 = ["Length of Trace L (cm)", "2Vp", "Deflection Sensitivity D = (1 x 2Vp)/L = 2Vp/L"];
[voltmeterHeader, ...headers2].forEach(text => {
    const th = document.createElement("th");
    th.textContent = typeof text === 'string' ? text : text.textContent;
    th.style.border = "1px solid black";
    th.style.padding = "8px";
    headerRow2.appendChild(text === voltmeterHeader ? text : th);
});

// Create subheader row for voltmeter readings
const subHeaderRow = document.createElement("tr");
const subHeaders = ["Vrms (V)", "V(peak) = Vrms×√2"];
subHeaders.forEach(text => {
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
    "Measured Frequency F = 1/T (Hz)"
];

headers3.forEach(text => {
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
    ["10,000", "3.8 cm", "25 μs", "", ""]
];

tableData3.forEach(row => {
    const tr = document.createElement("tr");
    row.forEach(cell => {
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

const resultsAnswered = document.createElement('div');
const resultsAnsweredHead = document.createElement('h3');
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
  concText.textContent =
    `This experiment provided valuable insights into the practical use of an oscilloscope for analyzing electrical signals. By carefully setting up the device and calibrating it, we were able to accurately measure the voltage, frequency, and waveform characteristics of various signals.

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
    `"Oscilloscopes: A Manual for Students, Engineers, and Scientists" by Heinz M. H. Smith`
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
      "A DC generator is a device that converts mechanical energy into direct current (DC) electrical energy. It operates based on the principle of electromagnetic induction, where a change in magnetic flux through a circuit induces an electromotive force (EMF) or voltage in the circuit.";
    theory.appendChild(explain);
    
    const partsTitle = document.createElement("h3");
    partsTitle.textContent = "Key Parts of a DC Generator:";
    theory.appendChild(partsTitle);
    
    const parts = [
      {
        title: "Stator:",
        text: "The stationary portion of the generator that holds the magnetic field. Its components are field windings, which produce the magnetic field, a steel frame, and a stator core composed of laminated steel sheets to reduce eddy current losses.",
      },
      {
        title: "Rotor (Armature):",
        text: "The rotating part of the generator that consists of an armature core made of laminated steel sheets, armature windings (conductors that carry the induced current), a commutator, and a shaft.",
      },
      {
        title: "Commutator:",
        text: "A rotating electrical switch that consists of wedge-shaped copper segments separated by mica insulation. It functions to convert the alternating current (AC) generated in the armature windings into a unidirectional DC output.",
      },
      {
        title: "Brushes:",
        text: "Sliding contacts that make electrical contact with the commutator to collect the generated current.",
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
        text: "An electromagnetic field (EMF) is created in the conductors when the armature rotates within the magnetic field, cutting through magnetic lines of force.",
      },
      {
        title: "Current Flow:",
        text: "Current passes through the armature windings as a result of the produced EMF.",
      },
      {
        title: "Commutation:",
        text: "To guarantee that the output current flows in a single direction (DC), the commutator and brushes cooperate to reverse the direction of the current in the armature windings.",
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
        text: "An external DC source powers the field windings.",
      },
      {
        title: "Self-Excited DC Generator:",
        text: "The generator itself provides the energy to the field windings. These are divided further into:",
      },
      {
        title: "  - Series-Wound DC Generator:",
        text: "The armature and field windings are connected in series.",
      },
      {
        title: "  - Shunt-Wound DC Generator:",
        text: "The armature and field windings of a shunt-wound DC generator are linked in parallel.",
      },
      {
        title: "  - Compound-Wound DC Generator:",
        text: "It features field windings that are both shunt and series.",
      },
    ];
    types.forEach((type) => {
      theory.appendChild(missingFunction(type));
    });
    
    const applicationsTitle = document.createElement("h3");
    applicationsTitle.textContent = "Applications of D.C Generators:";
    theory.appendChild(applicationsTitle);
    
    const applications = [
      { title: "Charging of Batteries:", text: "" },
      { title: "Providing Power for D.C Motors:", text: "" },
      { title: "Welding:", text: "" },
      { title: "Electroplating:", text: "" },
      {
        title: "Compact Power Supply Units:",
        text: "For small power supply systems.",
      },
    ];
    applications.forEach((application) => {
      theory.appendChild(missingFunction(application));
    });
    
    const utubeDiv = document.createElement("div");
    const utube = document.createElement("p");
    utube.textContent =
      "Watch the video below to learn more about D.C generators and their applications:";
    
    const uvideo = document.createElement("div");
    uvideo.innerHTML =
      '<iframe width="590" height="332" src="https://www.youtube.com/embed/specific_video_link" title="DC Generator: Working Principle and Applications" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
    
    utubeDiv.appendChild(utube);
    utubeDiv.appendChild(uvideo);
    
    theory.appendChild(utubeDiv);
    
    main.appendChild(theory);
    
  
    const diagramsSection = document.createElement("section");
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
      diagramImage[i] = document.createElement("img");
      diagramCaption[i] = document.createElement("p");
      diagramImage[i].src = diagrams[i].image;
      diagramCaption[i].textContent = diagrams[i].cap;
      diagramBox[i].appendChild(diagramImage[i]);
      diagramBox[i].appendChild(diagramCaption[i]);
      diagramsSection.appendChild(diagramBox[i]);
    }
  
    main.appendChild(diagramsSection);
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
    "-Using Schering Bridge",
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
    "Capacitance is the ability of a system to store an electric charge. It is a key concept in electronics and electrical engineering. In electrical and electronic engineering, it is a crucial idea. The farad (F), which bears the name of the English physicist Michael Faraday, is the fundamental unit of capacitance. The capacitance (C) of a capacitor is given by the formula:";
  theory.appendChild(explain);
  
  const formula = document.createElement("div");
  formula.innerHTML = '<p><strong>C = Q / V</strong></p>';
  theory.appendChild(formula);
  
  const experimentIntro = document.createElement("div");
  experimentIntro.textContent =
    "In this experiment, we are using a Schering Bridge to measure the capacitance.";
  theory.appendChild(experimentIntro);
  
  const scheringBridgeIntro = document.createElement("div");
  scheringBridgeIntro.textContent =
    "The Schering Bridge is a specific type of AC bridge circuit designed to gauge an insulator's capacitance and dissipation factor. It operates on the principle of balancing impedances in an AC circuit and is commonly used to measure the capacitance and the dissipation factor (loss angle) of capacitors, especially in power systems and high-voltage applications.";
  theory.appendChild(scheringBridgeIntro);
  
  const elementsTitle = document.createElement("h3");
  elementsTitle.textContent = "Elements of the Schering Bridge:";
  theory.appendChild(elementsTitle);
  
  const elements = [
    {
      title: "Arm AB:",
      text: "The mysterious capacitor Cx and its corresponding loss resistance Rx.",
    },
    {
      title: "Arm BC:",
      text: "This arm contains a standard capacitor with a known capacitance, Cs.",
    },
    {
      title: "Arm CD:",
      text: "Contains a non-inductive resistor, R3.",
    },
    {
      title: "Arm DA:",
      text: "Includes a non-inductive resistor, R4, and a capacitor, C4.",
    },
  ];
  elements.forEach((element) => {
    theory.appendChild(missingFunction(element));
  });
  
  const bridgeSetup = document.createElement("div");
  bridgeSetup.textContent =
    "A detector (often a sensitive null detector such as a headphone or galvanometer) is positioned between points B and D, and the bridge is connected to an AC supply.";
  theory.appendChild(bridgeSetup);
  
  main.appendChild(theory);
  

  const diagramsSection = document.createElement("section");
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
      diagramImage[i] = document.createElement("img");
      diagramCaption[i] = document.createElement("p");
      diagramImage[i].src = diagrams[i].image;
      diagramCaption[i].textContent = diagrams[i].cap;
      diagramBox[i].appendChild(diagramImage[i]);
      diagramBox[i].appendChild(diagramCaption[i]);
      diagramsSection.appendChild(diagramBox[i]);
    }

    main.appendChild(diagramsSection);
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

  const results = document.createElement('section');
  const resultHeader = document.createElement('h2');
  resultHeader.textContent = "Results";
  results.appendChild(resultHeader);


const resultsTable = document.createElement("table");
resultsTable.style.borderCollapse = "collapse";
resultsTable.style.width = "100%";
resultsTable.style.marginTop = "20px";

// Create table header
const thead = document.createElement("thead");
const headerRow = document.createElement("tr");

// Create header cells
const headers = ["Voltage (V)", "Deflection S(cm)", "Deflection Sensitivity D = (V/S)"];
headers.forEach(text => {
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
    [-15, "-3.4"]
];

// Create rows and cells
tableData.forEach(row => {
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
const headers2 = ["Length of Trace L (cm)", "2Vp", "Deflection Sensitivity D = (1 x 2Vp)/L = 2Vp/L"];
[voltmeterHeader, ...headers2].forEach(text => {
    const th = document.createElement("th");
    th.textContent = typeof text === 'string' ? text : text.textContent;
    th.style.border = "1px solid black";
    th.style.padding = "8px";
    headerRow2.appendChild(text === voltmeterHeader ? text : th);
});

// Create subheader row for voltmeter readings
const subHeaderRow = document.createElement("tr");
const subHeaders = ["Vrms (V)", "V(peak) = Vrms×√2"];
subHeaders.forEach(text => {
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
    "Measured Frequency F = 1/T (Hz)"
];

headers3.forEach(text => {
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
    ["10,000", "3.8 cm", "25 μs", "", ""]
];

tableData3.forEach(row => {
    const tr = document.createElement("tr");
    row.forEach(cell => {
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

const resultsAnswered = document.createElement('div');
const resultsAnsweredHead = document.createElement('h3');
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
  concText.textContent =
    `This experiment provided valuable insights into the practical use of an oscilloscope for analyzing electrical signals. By carefully setting up the device and calibrating it, we were able to accurately measure the voltage, frequency, and waveform characteristics of various signals.

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
    `"Oscilloscopes: A Manual for Students, Engineers, and Scientists" by Heinz M. H. Smith`
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





export {
  displayStarted,
  displayEE202,
  displayEE206,
 displayEE205,
 displayEE207,
 displayEE203,
 displayEE201,
 displayEE208
};
