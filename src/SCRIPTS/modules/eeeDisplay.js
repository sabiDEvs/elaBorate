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
import ee2041 from "../../RESOURCES/images/ELECTRICAL/200L IMAGES/204/1.png";
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
    "Example: “At the end of this experiment, we were able to develop a lap joint, understand the sequence of operations involved, and achieve a comprehensive understanding of the process.”",
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

const displayEE201 = () => {
  const main = reset();
  const head = document.createElement("h1");
  head.textContent = "Mesurement of Unknown Resistance";
  main.appendChild(head);

  const aim = document.createElement("section");
  const aimHead = document.createElement("h2");
  aimHead.textContent = "AIMS";
  aim.appendChild(aimHead);
  const aimList = document.createElement("ul");
  const aims = [
    "To measure the value of an Unknown resistor and to determine the characteristics of a resistor",

  ];
  let list2 = [];
  for (let i = 0; i < aims.length; i++) {
    list2[i] = document.createElement("li");
    list2[i].textContent = aims[i];
    aimList.appendChild(list2[i]);
  }
  aim.appendChild(aimList);

  main.appendChild(aim);
  const expHead = document.createElement("h1");
  head.textContent = "FIRST METHOD: Current-voltage measurement method";
  main.appendChild(expHead);
  const appHead = document.createElement("h2");
  appHead.textContent = "Apparatus";
  main.appendChild(appHead);
  const section = document.createElement("section");
  section.classList.add("appBox");

  //CHNGE THE IMAGES
  const apparatus = [
    {
      cap: "Unknown Resistor",
      image: pic2,
    },
    {
      cap: "DC Power Supply (o-15v, 2A)",
      image: pic3,
    },
    {
      cap: "DC Voltmeter (o-30v)",
      image: pic4,
    },
    {
      cap: "D.C Ammeter 0 – 2A",
      image: pic5,
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
 // Create the section for theory1
const theory1 = document.createElement("section");

// Add a heading for theory1
const theory1Head = document.createElement("h2");
theory1Head.textContent = "Measurement of Unknown Resistance by Current-Voltage (I-V) Measurement Method";
theory1.appendChild(theory1Head);

// Introduction to the method
const intro = document.createElement("div");
intro.innerHTML = `
  <p>
    The <strong>current-voltage (I-V) measurement method</strong> is a fundamental technique used to determine the value of an unknown resistance in an electrical circuit. This method is based on <strong>Ohm's Law</strong>, which states that the current (<em>I</em>) flowing through a conductor between two points is directly proportional to the voltage (<em>V</em>) across the two points and inversely proportional to the resistance (<em>R</em>). Mathematically, Ohm's Law is expressed as:
  </p>
  <p style="text-align: center;">
    <strong>V = I × R</strong>
  </p>
  <p>
    By measuring the voltage across the unknown resistance and the current flowing through it, the resistance can be calculated using the formula:
  </p>
  <p style="text-align: center;">
    <strong>R = V / I</strong>
  </p>
`;
theory1.appendChild(intro);

// Explanation of the circuit setup
const circuitSetup = document.createElement("div");
circuitSetup.innerHTML = `
  <h3>Circuit Setup</h3>
  <p>
    To measure an unknown resistance using the I-V method, the following components are required:
  </p>
  <ul>
    <li><strong>DC Power Supply:</strong> Provides a stable voltage to the circuit.</li>
    <li><strong>Ammeter:</strong> Measures the current flowing through the unknown resistance.</li>
    <li><strong>Voltmeter:</strong> Measures the voltage across the unknown resistance.</li>
    <li><strong>Unknown Resistor:</strong> The resistance whose value is to be determined.</li>
    <li><strong>Connecting Wires:</strong> Used to complete the circuit.</li>
  </ul>
  <p>
    The circuit is set up as follows:
  </p>
  <ol>
    <li>Connect the DC power supply in series with the unknown resistor and the ammeter.</li>
    <li>Connect the voltmeter in parallel across the unknown resistor.</li>
    <li>Ensure all connections are secure to avoid measurement errors.</li>
  </ol>
  <p>
    <strong>Note:</strong> The ammeter must be connected in series to measure the current flowing through the resistor, while the voltmeter must be connected in parallel to measure the voltage across the resistor.
  </p>
`;
theory1.appendChild(circuitSetup);

// Explanation of the measurement procedure
const measurementProcedure = document.createElement("div");
measurementProcedure.innerHTML = `
  <h3>Measurement Procedure</h3>
  <p>
    The steps to measure the unknown resistance are as follows:
  </p>
  <ol>
    <li><strong>Set Up the Circuit:</strong> Assemble the circuit as described above.</li>
    <li><strong>Adjust the Power Supply:</strong> Set the DC power supply to a low voltage (e.g., 1V) initially to avoid damaging the components.</li>
    <li><strong>Record Measurements:</strong>
      <ul>
        <li>Measure the voltage (<em>V</em>) across the unknown resistor using the voltmeter.</li>
        <li>Measure the current (<em>I</em>) flowing through the resistor using the ammeter.</li>
      </ul>
    </li>
    <li><strong>Calculate Resistance:</strong> Use Ohm's Law (<em>R = V / I</em>) to calculate the resistance.</li>
    <li><strong>Repeat for Accuracy:</strong> Repeat the measurements at different voltages (e.g., 2V, 3V, etc.) to ensure consistency and accuracy.</li>
    <li><strong>Average the Results:</strong> Calculate the average resistance value from all measurements to minimize errors.</li>
  </ol>
`;
theory1.appendChild(measurementProcedure);

// Explanation of potential errors and precautions
const errorsPrecautions = document.createElement("div");
errorsPrecautions.innerHTML = `
  <h3>Potential Errors and Precautions</h3>
  <p>
    While performing the I-V measurement method, the following errors and precautions should be considered:
  </p>
  <ul>
    <li><strong>Ammeter Resistance:</strong> The ammeter has an internal resistance that can affect the measurement. Ensure the ammeter's resistance is much lower than the unknown resistance to minimize errors.</li>
    <li><strong>Voltmeter Resistance:</strong> The voltmeter has a high internal resistance, but it can still draw a small current. Ensure the voltmeter's resistance is much higher than the unknown resistance to avoid significant errors.</li>
    <li><strong>Connection Errors:</strong> Loose or incorrect connections can lead to inaccurate measurements. Double-check all connections before taking measurements.</li>
    <li><strong>Power Supply Fluctuations:</strong> Ensure the power supply provides a stable voltage. Fluctuations can lead to inconsistent readings.</li>
  </ul>
`;
theory1.appendChild(errorsPrecautions);

// Applications of the I-V method
const applications = document.createElement("div");
applications.innerHTML = `
  <h3>Applications of the I-V Measurement Method</h3>
  <p>
    The I-V measurement method is widely used in electrical engineering for various applications, including:
  </p>
  <ul>
    <li><strong>Characterizing Resistors:</strong> Determining the value of unknown resistors in circuits.</li>
    <li><strong>Testing Components:</strong> Verifying the performance of resistors, diodes, and other components.</li>
    <li><strong>Circuit Analysis:</strong> Analyzing the behavior of circuits under different voltage and current conditions.</li>
    <li><strong>Research and Development:</strong> Used in labs to study the properties of new materials and components.</li>
  </ul>
`;
theory1.appendChild(applications);

// Add a conclusion


// Append the theory1 section to the main content
main.appendChild(theory1);
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

const displayEE204 = () => {
  const main = reset();
      const head = document.createElement('h1');
      head.textContent  = 'VERIFICATION OF NETWORK THEOREMS';
      main.appendChild(head);

      const aim = document.createElement('section');
      const aimHead = document.createElement('h2');
      aimHead.textContent = 'AIMS';
      aim.appendChild(aimHead);
      const aimList = document.createElement('ul');
      const aims = ['To verify Superposition Theorem using resistance circuit (204.A)', 'To verify Thevenin’s Theorem using resistance circuit (204.B)']
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
      const objectives = ['To demonstrate that the total response of a circuit with multiple input sources is the sum of the individual responses to each source acting alone.', 'To determine the Thevenin equivalent circuit parameters (Thevenin voltage and Thevenin resistance) of a given network and verify that the equivalent circuit accurately represents the original network.', 'To practicalize applying the principles of superposition and Thevenin’s theorem to analyze and solve complex circuits.', 'To develop the ability of simplifying circuits using these theorems which can be useful in various applications such as power systems, electronic circuits and communication networks.'];
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
              cap: 'D. C. Power Sources (2 - No)',
              image: ee2031
          },
          {
              cap: 'Decade Resistance Boxes (4 - No)',
              image: ee2031
          },
          {
              cap: 'AVO Meter (1 - No)',
              image: ee2031
          },
          {
              cap: 'Male-Male Connecting Wires',
              image: ee2031
          },
          {
              cap: 'Oscilloscope (Optional)',
              image: ee2031
          }
          

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
      explain.textContent =
        "Without electrical circuits modern technology would not exist. In fact, the whole pursuit of electrical engineering largely dies off, becoming almost a vacuum— to say the least, electrical circuits are all around us and life as we know it is impossible without them. We have Ohm’s Law (for relating the voltage and current of circuits, and therein uncovered the concept of resistance) and Kirchhoff's Laws at our disposal when we are about to construct a desired circuit or analyze a prototype, ascertaining whether it meets design/application requirements. However, as circuits become more intricate, complex, and advanced, using these basic laws alone introduces a lot more problems than it is able to solve.";
      theory.appendChild(explain);

      const explain1 = document.createElement('div');
      explain1.textContent =
        "The additional set of principles used to navigate these major problems are called Network Theorems. Network theorems, a set of foundational principles in electrical engineering, simplify and analyze complex circuits, allowing engineers to break down systems into manageable components. These fundamental theorems include Superposition theorem, Tellegen’s theorem, Norton’s theorem, Maximum power transfer theorem, Thevenin’s theorem, and others.";
      theory.appendChild(explain1);

      const explain2 = document.createElement('div');
      explain2.textContent =
        "The central purpose of this investigation is to use a resistance circuit to verify some of these network theorems, namely Superposition and Thevenin’s theorems. Exploring practical applications and step-by-step methodologies of these theorems, this experiment addresses challenges of analyzing circuits with multiple sources and simplifies complex networks for easier computation.";
      theory.appendChild(explain2);
      const categories = [
        {
          title: 'Superposition Theorem',
          text: "In a linear circuit with multiple independent sources, the total current or voltage at any point can be determined by summing contributions from each source individually, calculated by activating one source at a time.",
          image: ''
        },
        {
          title: 'Thevenin’s Theorem',
          text: "Any linear circuit containing several voltages and resistances can be replaced by a single voltage in series with a resistance connected across the load.",
          image: ''
        },
      ];

      categories.forEach((item) => {
        theory.appendChild(createDivs(item));
      });
      const equations = document.createElement('div');
      equations.textContent =
        "Superposition Theorem: IT = I1 + I2 + … + In (Sum of currents calculated by evaluating one source at a time). Thevenin's Theorem: VTh = Voc (Open-circuit voltage), RTh = Req (Equivalent resistance with all sources deactivated).";
      theory.appendChild(equations);

const simulation = document.createElement('div');
simulation.textContent =
  "To validate theoretical analysis, numerical simulations can be employed using tools like SPICE or MATLAB. These tools model circuit behavior under various conditions, providing insights into practical applications.";
theory.appendChild(simulation);

const theoryConclusion = document.createElement('p');
theoryConclusion.textContent =
  "The theoretical analysis of network theorems, particularly the Superposition and Thevenin's Theorems, provides a firm foundation for understanding and analyzing electrical circuits. By combining physical explanations, governing equations, and computer simulations, engineers can effectively tackle complex circuit designs and analyses.";
theory.appendChild(theoryConclusion);

main.appendChild(theory);


      const diagramsSection = document.createElement('section');
      const diagramHead = document.createElement('h2');
      diagramHead.innerText = "DIAGRAMS";

      diagramsSection.appendChild(diagramHead);


      const diagrams = [
          {
              cap: 'Fig.1 ',
              image: ee2041
          }
          

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



      const results = document.createElement('section');
      const resultHeader = document.createElement('h2');
      resultHeader.textContent = "Results";
      results.appendChild(resultHeader);
    
    













      const resultsTable4 = document.createElement("table");
      resultsTable4.style.borderCollapse = "collapse";
      resultsTable4.style.width = "100%";
      resultsTable4.style.marginTop = "20px";
      
      const thead4 = document.createElement("thead");
      const headerRow4 = document.createElement("tr");
      
      const headers4 = ["Measurement Type", "E1", "E2"];
      headers4.forEach(text => {
          const th = document.createElement("th");
          th.textContent = text;
          th.style.border = "1px solid black";
          th.style.padding = "8px";
          th.style.backgroundColor = "#f2f2f2"; 
          headerRow4.appendChild(th);
      });
      
      thead4.appendChild(headerRow4);
      resultsTable4.appendChild(thead4);
      
      const tbody4 = document.createElement("tbody");
      
      const tableData4 = [
          ["Out-of-circuit", "6v", "6v"],
          ["In-circuit", "6v", "6v"],
      ];
      
      tableData4.forEach(row => {
          const tr = document.createElement("tr");
      
          row.forEach(cellData => {
              const td = document.createElement("td");
              td.textContent = cellData;
              td.style.border = "1px solid black";
              td.style.padding = "8px";
              tr.appendChild(td);
          });
      
          tbody4.appendChild(tr);
      });
      
      resultsTable4.appendChild(tbody4);
      
      const titleText4 = document.createElement("p");
      titleText4.textContent = "Table of Values";
      titleText4.style.fontWeight = "bold";
      titleText4.style.marginBottom = "10px";
      
      results.appendChild(titleText4);
      results.appendChild(resultsTable4);
      



    
      const resultsTable = document.createElement("table");
      resultsTable.style.borderCollapse = "collapse";
      resultsTable.style.width = "100%";
      resultsTable.style.marginTop = "20px";
      
      const thead = document.createElement("thead");
      const headerRow = document.createElement("tr");
      
      const headers = ["Circuit Condition", "Voltage Response 1", "Voltage Response 2", "Voltage Response 3", "Current Response 1", "Current Response 2", "Current Response 3"];
      headers.forEach(text => {
          const th = document.createElement("th");
          th.textContent = text;
          th.style.border = "1px solid black";
          th.style.padding = "8px";
          th.style.backgroundColor = "#f2f2f2"; 
          headerRow.appendChild(th);
      });
      
      thead.appendChild(headerRow);
      resultsTable.appendChild(thead);
      const tbody = document.createElement("tbody");
      
      const tableData = [
          ["DC Source in", "VR1= V1", "VR2 = V2", "VR3= V3", "I1 = V1/R1", "I2 = V2/R2", "I3 = V3/R3"],
          ["E1 & E2", "-2", "2", "4", "-0.07", "0.07", "0.13"],
          ["E1 alone", "2", "4", "2", "0.07", "0.13", "0.07"],
          ["E2 alone", "-4", "-2", "2", "-0.13", "-0.07", "0.07"],
      ];
      
      tableData.forEach(row => {
          const tr = document.createElement("tr");
      
          row.forEach(cellData => {
              const td = document.createElement("td");
              td.textContent = cellData;
              td.style.border = "1px solid black";
              td.style.padding = "8px";
              tr.appendChild(td);
          });
      
          tbody.appendChild(tr);
      });
      
      resultsTable.appendChild(tbody);
      
      const titleText = document.createElement("p");
      titleText.textContent = "Table of Values";
      titleText.style.fontWeight = "bold";
      titleText.style.marginBottom = "10px";
      
      results.appendChild(titleText);
      results.appendChild(resultsTable);
      





    
      const resultsTable5 = document.createElement("table");
      resultsTable5.style.borderCollapse = "collapse";
      resultsTable5.style.width = "100%";
      resultsTable5.style.marginTop = "20px";
      
      const thead5 = document.createElement("thead");
      const headerRow5 = document.createElement("tr");
      const headers5 = ["Equation", "Result"]; 
      headers5.forEach(text => {
          const th = document.createElement("th");
          th.textContent = text;
          th.style.border = "1px solid black";
          th.style.padding = "8px";
          th.style.backgroundColor = "#f2f2f2"; 
          headerRow5.appendChild(th);
      });
      thead5.appendChild(headerRow5);
      resultsTable5.appendChild(thead5);
      
      const tbody5 = document.createElement("tbody");
      
      const tableData5 = [
          ["V1a = V1b + V1c", "V1a = -4V + 2V = -2V"],
          ["V2a = V2b + V2c", "V2a = -2V + 4V = 2V"],
          ["V3a = V3b + V3c", "V3a = 2V + 2V = 4V"],
          ["", ""],
          ["Current Response", ""],
          ["I1a = I1b + I1c", "I1a = -0.13A + 0.07A = -0.06A"],
          ["I2a = I2b + I2c", "I2a = -0.07A + 0.13A = 0.06A"],
          ["I3a = I3b + I3c", "I3a = 0.07A + 0.07A = 0.14A"],
      ];
      
      tableData5.forEach(row => {
          const tr = document.createElement("tr");
      
          row.forEach(cellData => {
              const td = document.createElement("td");
              td.textContent = cellData;
              td.style.border = "1px solid black";
              td.style.padding = "8px";
              tr.appendChild(td);
          });
      
          tbody5.appendChild(tr);
      });
      
      resultsTable5.appendChild(tbody5);
      
      const titleText5 = document.createElement("p");
      titleText5.textContent = "Table of Values";
      titleText5.style.fontWeight = "bold";
      titleText5.style.marginBottom = "10px";
      results.appendChild(titleText5);
      results.appendChild(resultsTable5);
      
    
    main.appendChild(results);





      const practicals = document.createElement('section');
      const step1 = document.createElement('h2');
      step1.textContent = 'PROCEDURE';

      practicals.appendChild(step1);
      const step4 = document.createElement('h3');
      step4.textContent = 'Superposition Theorem';
      practicals.appendChild(step4);
      const stepList2 = document.createElement('ul');
      stepList2.classList.add('stepboxlist');
      const steps2 = [
        "All measurements must be recorded on Table 204.1.",
        "Use the Avometer (Set D.C. 10V range) for all voltage measurements.",
        "Connect mains to the d.c. voltage sources E₁ and E₂ and switch ON.",
        "Using the voltage adjust controls, set the d.c. output voltage of E₁ and E₂ to 6V (no-load or open-circuit value).",
        "Switch off mains to the d.c. sources and connect the decade resistors R₁, R₂, and R₃ and the d.c. sources E₁ and E₂ as per the circuit diagram of Fig. 204.1 (note the polarities of the sources).",
        "Select resistance values between 10-100 ohms for R₁ + R₂ and R₃ and switch ON mains (recheck the circuit).",
        "Measure the e.m.f across the terminals of the d.c. source E₁ and E₂, record as V₁ and V₂ respectively. Note: (Since voltage is a vector quantity, it is important you also note the direction of V₁ and V₂ and use those as your reference (+) direction for subsequent measurements.)",
        "Measure the voltages (i.e. potential differences) across R₁, R₂, and R₃ and record.",
        "Disconnect the d.c. source E₁ from the circuit and short-circuit terminals A-B (make a sketch of the resultant circuit and use space A). Note: (Where the voltage direction has changed from the direction in step 6, record it as a negative (-) value.)",
        "Measure voltage (d.c.) across R₁, R₂, and R₃ and record.",
        "Reconnect the d.c. source E₁ into the circuit and disconnect source E₂; short-circuit the resultant circuit (figure Space A).",
        "Measure voltages V₁, V₂, and V₃ across R₁, R₂, and R₃ respectively and record.",
        "Switch off all mains supply to E₁ and E₂."
      ];
      
      let stepBox2 = [];
      for(let i = 0; i < steps2.length; i++){
          stepBox2[i] = document.createElement('li');
          
          stepBox2[i].textContent = steps2[i];
          stepList2.appendChild(stepBox2[i]);
      }
      practicals.appendChild(stepList2);

      const step3 = document.createElement('h3');
      step3.textContent = "Thevenin's Theorem";
      practicals.appendChild(step3);
      const stepList1 = document.createElement('ul');
      stepList1.classList.add('stepboxlist');
      const steps1 = [
        "Read through each procedure step before acting.",
        "All measurements must be recorded in Table T.1.",
        "Use the Avometer (Set D.C. 10V range) for all voltage and current measurements.",
        "Connect mains to the d.c. voltage source EE and switch ON.",
        "Using the voltage adjust controls, set the d.c. output voltage of EE to 6V (no-load or open-circuit value).",
        "Connect the circuit as shown in Fig. T.1, including the voltage source EE, the resistors R1, R2, and the load resistor RL.",
        "Measure and record the open-circuit voltage across the terminals AA-BB (i.e., across RL) as Vth.",
        "Disconnect RL from the circuit.",
        "Measure the equivalent resistance of the circuit as seen from terminals AA-BB. To do this:",
        "Switch off the voltage source EE and replace it with its internal resistance (short circuit if the source is ideal).",
        "Measure the equivalent resistance across terminals AA-BB using the Avometer and record this as Rth.",
        "Reconnect RL to the circuit.",
        "Measure the voltage across RL and the current through RL, recording them as VL and IL respectively.",
        "Verify IL using IL = Vth / (Rth + RL).",
        "Switch off all mains supply to the voltage source EE."
      ];
      
      let stepBox1 = [];
      for(let i = 0; i < steps1.length; i++){
          stepBox1[i] = document.createElement('li');
          stepBox1[i].textContent = steps1[i];
          stepList1.appendChild(stepBox1[i]);
      }
      practicals.appendChild(stepList1);

      
     
      

// i am supposed to implemetnresults and tables her but e npo make sense




      main.appendChild(practicals);
      const precaution = document.createElement('section');
      const cautionHead = document.createElement('h3');
      cautionHead.textContent = "PRECAUTIONS";
      precaution.appendChild(cautionHead);
      const cautionList = document.createElement('ul');
      const precautions = [
        "All circuit connections were double-checked before powering on the circuit to ensure there are no loose or incorrect connections that could cause short circuits or damage components.",
        "Switched off the power supply when adding, removing, or changing components in the circuit to avoid electric shocks or damage to the equipment.",
        "Ensured that all components, such as resistors, are rated to handle the applied voltage and current to prevent component failure or overheating.",
        "Confirmed the correct polarity of power supplies (positive and negative terminals) to avoid reverse polarity issues that could damage the circuit or components.",
        "Handled the resistors, wires, and other components carefully to avoid damaging them or introducing errors due to poor connections.",
        "Properly used the correct range on multimeters and oscilloscopes when measuring voltage, current, or resistance to prevent instrument damage or inaccurate readings.",
        "Ensured the power supply and measuring equipment are not overloaded beyond their specified limits to avoid equipment failure.",
        "Ensured that the circuit and power supply are properly grounded to avoid noise interference or potential electrical hazards.",
        "Measured the values of resistors and other components with a multimeter before assembling the circuit to ensure they match the design specifications.",
        "Performed the experiment on a clean, dry, and non-conductive surface to avoid accidental short circuits or electrical hazards.",
        "Clearly labeled nodes and components to avoid confusion and ensure accurate assembly and analysis.",
        "Avoided contact with live circuits to prevent electric shocks.",
        "Ensured the simulated results align with theoretical expectations to avoid mistakes in the physical circuit.",
        "Ensured that all measuring instruments, such as multimeters and oscilloscopes, are properly calibrated before use for accurate measurements.",
        "Recorded all measurements and observations during the experiment in real time to avoid forgetting or misinterpreting results later."
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


      //Summary by Osaze

      const summarySection = document.createElement('section');
      summarySection.classList.add('summary-section');
    
      const heading = document.createElement('h2');
      heading.textContent = 'Summary of Key Learning Outcomes';
      summarySection.appendChild(heading);
    
      const content = [
        {
          title: 'Superposition Theorem:',
          points: [
            'It was demonstrated that in a linear circuit with multiple independent sources, the total response (voltage or current) can be determined by summing the effects of each individual source, with all other sources turned off (replaced by their internal impedance).',
            'Through systematic analysis, we calculated and measured the contributions of each source, then verified that the sum matched the total circuit response.',
          ],
        },
        {
          title: "Thevenin's Theorem:",
          points: [
            'It was learned how to simplify a complex linear circuit into an equivalent circuit consisting of a single voltage source (Thevenin voltage) and a single series resistance (Thevenin resistance), as seen from the load terminals.',
            'By calculating the open-circuit voltage and the equivalent resistance, we successfully derived the Thevenin equivalent and verified its accuracy through circuit simulation and measurements.',
          ],
        },
        {
          title: 'Practical Circuit Analysis:',
          points: [
            'The experiment reinforced the importance of these theorems in analyzing and simplifying circuits, particularly in situations where individual components, such as loads, need to be analyzed or replaced.',
          ],
        },
        {
          title: 'Practical Skills Acquired:',
          points: [
            'Circuit Analysis Techniques: Developed proficiency in applying systematic methods for network theorem calculations, including turning off sources for superposition and determining open-circuit voltage and equivalent resistance for Thevenin.',
            'Measurement Techniques: Gained experience using tools such as multimeters and oscilloscopes to measure voltages and currents, and verify theoretical predictions.',
            'Simulation and Validation: Used circuit simulation software (such as LTspice, Multisim, or equivalent) to validate experimental results and compare them with theoretical calculations.',
          ],
        },
        {
          title: 'Future Applications:',
          points: [
            'The Superposition and Thevenin theorems are integral in the design and analysis of electrical and electronic systems. These theorems are particularly useful in simplifying circuits for troubleshooting, designing power systems, and optimizing circuit performance.',
            'The practical understanding gained from this experiment will be crucial in addressing real-world challenges requiring such skillset, for example, designing efficient power delivery systems for residential areas.',
            'In conclusion, this experiment provided hands-on experience in applying two cornerstone network theorems. By bridging theory and practice, this experiment has formed a strong foundation for more advanced studies in circuit theory and electrical engineering.',
          ],
        },
      ];
    
      content.forEach((section) => {
        const sectionTitle = document.createElement('h3');
        sectionTitle.textContent = section.title;
        summarySection.appendChild(sectionTitle);
    
        const list = document.createElement('ul');
        section.points.forEach((point) => {
          const listItem = document.createElement('li');
          listItem.textContent = point;
          list.appendChild(listItem);
        });
    
        summarySection.appendChild(list);
      });
    
      main.appendChild(summarySection);






      const references = document.createElement('section');
      const refHead = document.createElement('h3');
      refHead.textContent = "REFERENCES";
      references.appendChild(refHead);
      const refList = document.createElement('ul');
      refList.classList.add('stepboxlist');
      const reference = [
        "Alexander, C. K., & Sadiku, M. N. O. (2017). Fundamentals of electric circuits (6th ed.). McGraw-Hill Education.",
        "Hayt, W. H., & Kemmerly, J. E. (2018). Engineering circuit analysis (8th ed.). McGraw-Hill Education.",
        "Nilsson, J. W., & Riedel, S. A. (2019). Electric circuits (11th ed.). Pearson.",
        "All About Circuits. (2022, August 5). Superposition theorem explained. All About Circuits. https://www.allaboutcircuits.com/textbook/direct-current/chpt-6/superposition-theorem/",
        "Smith, J. (2023, April 10). Understanding Thevenin's theorem in electrical circuits. Electronics Tutorials. https://www.electronicstutorials.com/thevenins-theorem/"
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
  displayEE201,
  displayEE202,
  displayEE206,
 displayEE205,
 displayEE207,
 displayEE203,
 displayEE204
};
