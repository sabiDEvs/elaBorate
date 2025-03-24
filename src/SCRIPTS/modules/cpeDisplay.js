import pic1 from "../../RESOURCES/images/4bitmag.jpeg";
import pic2 from "../../RESOURCES/images/8bitmagcom.jpeg";
import pic3 from "../../RESOURCES/images/Digital-comparator-block-diagram.jpg";
import pic4 from "../../RESOURCES/images/ic7485.png";
import pic5 from "../../RESOURCES/images/magcomtable.jpeg";
import adderAndSubCir from "../../RESOURCES/images/AdderSubCircuit.jpeg";
import fourBitAdderSub from "../../RESOURCES/images/4bitaddersub.jpeg";
import ic7486 from "../../RESOURCES/images/ic7486.jpeg";
import ic7483 from "../../RESOURCES/images/ic7483.jpeg";
import ic7400 from "../../RESOURCES/images/ic7400.jpeg";
import halfSub from "../../RESOURCES/images/half sub.png";
import fullSub from "../../RESOURCES/images/full sub.png";
import displaySevSeg from "../../RESOURCES/images/display seven seg.png";
import anode from "../../RESOURCES/images/anode.jpeg";
import cathode from "../../RESOURCES/images/cathode.jpeg";
import ic7400and7410 from "../../RESOURCES/images/ic7400-7410.jpeg";
import bcd from "../../RESOURCES/images/bcd.jpeg";
import truthTabSevSeg from "../../RESOURCES/images/Truth Table seven seg.jpeg";
import obsAddSub from "../../RESOURCES/images/obserAdderSub.jpg";
import pic112 from "../../RESOURCES/images/download-icon.png";
import pic113 from "../../RESOURCES/images/download.png";
import mux4x1 from "../../RESOURCES/images/4 X 1 MUX.jpg";
import decoder3x8 from "../../RESOURCES/images/3 to 8 Decoder.png";
import fourBitShiftRegister from "../../RESOURCES/images/4-bit-shift-register.gif";
import mux8x1 from "../../RESOURCES/images/8 X 1 MUX.png";
// import timer555 from "../../RESOURCES/images/555-Timer-Pin-Diagram.webp";
import arch8085 from "../../RESOURCES/images/8085 ARCHITECTURE.png";
import pinDia8085 from "../../RESOURCES/images/8085 PIN DIAGRAM.png";
import counters404 from "../../RESOURCES/images/counters 404.png";
import fig1initConfig from "../../RESOURCES/images/fig 1-Initial Configuration.png";
import fig2 from "../../RESOURCES/images/fig 2=74LS76.png";
import fig3 from "../../RESOURCES/images/fig 3 -Hex inverter.png";
import fig4 from "../../RESOURCES/images/fig 4_ 555 timer.png";
import ic555internal from "../../RESOURCES/images/IC-555-internal-block-diagram.png";
import IC74LS76 from "../../RESOURCES/images/IC74LS76.png";
import IC74138 from "../../RESOURCES/images/IC74138.png";
import IC74151 from "../../RESOURCES/images/IC74151.png";
import JKflipflop from "../../RESOURCES/images/JK flip flop.png";
import NtwoCODER from "../../RESOURCES/images/N-2N DECODER.png";
import RSFOR4040 from "../../RESOURCES/images/RS FOR 404.jpg";
import sequentialcir4040 from "../../RESOURCES/images/sequential cir 404.png";
import z80MicroprocessorDiagram from "../../RESOURCES/images/z80 Microprocessor Diagram.png";
import TTABLEFORMULTIPLEXER from "../../RESOURCES/images/T TABLE FOR MULTIPLEXER.png";
import TRUTHTABLEFORDECODER from "../../RESOURCES/images/TRUTH TABLE FOR DECODER.png";
import Cpe406observation from "../../RESOURCES/images/Cpe406 observation.png";
import gees from "../../RESOURCES/images/gees.jpg";

import { add } from "lodash";

const reset = () => {
  window.scrollTo(0, 0);
  const main = document.querySelector("main");
  main.innerHTML = "";
  if (window.innerWidth < 800) {
    document.querySelector("aside").style.display = "none";
  }
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

const createPriHeader = function (value, element) {
  const header = document.createElement("h1");
  header.textContent = value;
  element.appendChild(header);
};

const createSecHeader = function (value, element) {
  const header = document.createElement("h2");
  header.textContent = value;
  element.appendChild(header);
};

const createTertHeader = function (value, element) {
  const header = document.createElement("h3");
  header.textContent = value;
  element.appendChild(header);
};

const createPara = function (value, element) {
  const para = document.createElement("p");
  para.textContent = value;
  element.appendChild(para);
};

const createList = function (arr, element) {
  let list = [];
  for (let i = 0; i < arr.length; i++) {
    list[i] = document.createElement("li");
    list[i].textContent = arr[i];
    element.appendChild(list[i]);
  }
};

// Display started

export const displayStarted = () => {
  const main = reset();

  const divImgAchieve = document.createElement("div");
  divImgAchieve.classList.add("div-img-achieve");

  const imgAchieve = document.createElement("img");
  divImgAchieve.appendChild(imgAchieve);
  imgAchieve.src = gees;
  imgAchieve.classList.add("startImg");
  imgAchieve.id = "getStartImg";

  // Title

  const startingHeader = document.createElement("h2");
  startingHeader.textContent = "GETTING STARTED WITH COMPUTER ELA";
  startingHeader.id = "getStartHead";
  divImgAchieve.appendChild(startingHeader);
  main.appendChild(divImgAchieve);

  // Introduction
  createSecHeader("Introduction", main);
  createPara(
    "The CPE ELA (Computer Engineering Electrical Laboratory Analysis) report is an essential part of your practical coursework. It helps document your experiments, observations, and findings in a structured format. Writing a well-organized report ensures clarity and proper documentation of your practical work.",
    main
  );

  // Report Structure
  createSecHeader("Report Structure", main);

  // First Page Details
  createTertHeader("1. First Page Details", main);
  createPara(
    "Before starting your report, include the following details in capital letters:",
    main
  );
  const firstPageDetails = [
    "Name",
    "Matriculation Number",
    "Serial Number",
    "Level",
    "Experiment Number",
  ];
  createList(firstPageDetails, main);

  // Title
  createTertHeader("2. Title", main);
  createPara(
    "Give a clear and concise title that describes the experiment.",
    main
  );

  // Aim
  createTertHeader("3. Aim", main);
  createPara(
    "Clearly state the purpose of the experiment. What is the goal you aim to achieve?",
    main
  );

  // Objectives
  createTertHeader("4. Objectives", main);
  createPara(
    "List the specific objectives of the experiment, which outline what you will learn or demonstrate.",
    main
  );

  // Apparatus
  createTertHeader("5. Apparatus", main);
  createPara(
    "Provide a list of all the equipment, tools, and components used in the experiment.",
    main
  );

  // Theory
  createTertHeader("6. Theory", main);
  const theoryPoints = [
    "Conduct thorough research and write a detailed explanation of the experiment’s background.",
    "Avoid plagiarism—do not copy from others.",
    "Ensure that your explanation relates directly to the experiment.",
    "No need to draw diagrams in this section.",
  ];
  createList(theoryPoints, main);

  // Diagrams
  createTertHeader("7. Diagrams", main);
  const diagramPoints = [
    "Only include relevant diagrams from the ELA manual.",
    "Examples of necessary diagrams:",
    "Pin diagrams",
    "Circuit diagrams",
    "Block diagrams",
  ];
  createList(diagramPoints, main);

  // Procedure
  createTertHeader("8. Procedure", main);
  const procedurePoints = [
    "Pay close attention to the lab attendant’s instructions during class.",
    "Actively participate in the practical session for hands-on learning.",
    "Do not copy someone else's procedure—write your own observations.",
  ];
  createList(procedurePoints, main);

  // Observations
  createTertHeader("9. Observations", main);
  createPara(
    "Most experiments require recording observations in a table format. Ensure that your practical results are accurately documented.",
    main
  );

  // Precautions
  createTertHeader("10. Precautions", main);
  const precautionPoints = [
    "Follow all necessary precautions for safety and accuracy.",
    "Always paraphrase precautions instead of copying them.",
    "Understand the reasoning behind each precaution and how it affects the experiment.",
  ];
  createList(precautionPoints, main);

  // Conclusion
  createTertHeader("11. Conclusion", main);
  createPara(
    "Your conclusion should validate the objective of the experiment. Stick to the relevant findings—do not go off-topic.",
    main
  );

  // Assignment
  createTertHeader("12. Assignment", main);
  createPara(
    "Some experiments come with additional assignments. Ensure you analyze and answer them carefully.",
    main
  );

  // References
  createTertHeader("13. References", main);
  createPara(
    "List any textbooks, research papers, or websites you consulted.",
    main
  );

  // Additional Tips for Success
  createSecHeader("Additional Tips for Success", main);
  const tips = [
    "Collaboration: Work effectively with your group members.",
    "Breadboard & Circuit Design: Some experiments require circuit design—be comfortable with using breadboards and electronic components.",
    "Use Online Resources: If you don’t understand something, refer to videos, tutorials, or textbooks for further clarification.",
    "Practice Technical Writing: Keep your explanations clear, concise, and professional.",
  ];
  createList(tips, main);

  // Good Luck Message
  createPara(
    "By following this structured approach, you’ll be able to write a well-organized and accurate CPE ELA report that meets academic standards.",
    main
  );
  createPriHeader("GOOD LUCK!!!", main);

  const hover = createHover("#");
  main.appendChild(hover);
  const download = createDownload("#");
  main.appendChild(download);
};

// COMPARATORS

export const displayComparators = function () {
  const main = reset();

  const head = document.createElement("h1");
  head.textContent = "Experiment 3.9";
  main.appendChild(head);

  const topic = document.createElement("h2");
  topic.textContent = "TO IMPLEMENT 4 BIT AND 8-BIT COMPARATORS";
  main.appendChild(topic);

  const objective = document.createElement("section");
  const objHead = document.createElement("h2");
  objHead.textContent = "AIMS/OBJECTIVES";
  objective.appendChild(objHead);
  const objList = document.createElement("ul");
  const objectives = [
    "To Implement 4 bit comparator",
    "Using 4-bit comparator to implement 8-bit Comparator",
  ];
  let list = [];
  for (let i = 0; i < objectives.length; i++) {
    list[i] = document.createElement("li");
    list[i].textContent = objectives[i];
    objList.appendChild(list[i]);
  }
  objective.appendChild(objList);
  main.appendChild(objective);

  // Apparatus

  const apparatus = document.createElement("section");
  const apparatusHead = document.createElement("h2");
  apparatusHead.textContent = "APPARATUS/TOOLS";
  apparatus.appendChild(apparatusHead);
  const apparatusList = document.createElement("ul");
  const tools = [
    "IC7485",
    "IC 7432",
    "IC 7408",
    "IC 7400",
    "Power supply",
    "Connecting wires",
    "Multimeter",
    "Voltage Regulator",
    "Bread Board",
  ];
  let listApparatus = [];
  for (let i = 0; i < tools.length; i++) {
    listApparatus[i] = document.createElement("li");
    listApparatus[i].textContent = tools[i];
    apparatusList.appendChild(listApparatus[i]);
  }
  apparatus.appendChild(apparatusList);
  main.appendChild(apparatus);

  // Theory

  const theory = document.createElement("section");
  const theoryHead = document.createElement("h2");
  theoryHead.textContent = "THEORY";
  theory.appendChild(theoryHead);
  const explain = document.createElement("div");
  explain.textContent =
    "The Magnitude Comparators or simply the comparators, are fundamental digital circuits tasked with comparing two binary numbers and determining their relative magnitudes. We can logically design a circuit for which we will have two inputs, one for A and the other for B, and have three output terminals, one for A>B condition, one for A=B condition, and one for A<B Condition. This is what the comparator does; it compares binary numbers, depending on a condition.";
  theory.appendChild(explain);
  const comImageCap = document.createElement("h3");
  comImageCap.textContent = "DIGITAL COMPARATOR BLOCK DIAGRAM";
  theory.appendChild(comImageCap);
  const comImage = document.createElement("img");
  comImage.src = pic3;
  theory.appendChild(comImage);
  const explain2 = document.createElement("div");
  explain2.textContent =
    "The Circuit works by comparing the bits of the two numbers, starting from the MSB and moving towards the LSB. A popular way of Implementing a magnitude comparator is using a combination of XOR, AND, and OR Gates.";
  theory.appendChild(explain2);
  const fourBitHead = document.createElement("h3");
  fourBitHead.textContent = "4- Bit Magnitude comparator";
  theory.appendChild(fourBitHead);
  createPara(
    "This is used to compare 2 binary numbers (inputs), each of four bits.",
    theory
  );
  createPara("Consider 2 Inputs, A = A3A2A1A0 and B = B3B2B1B0", theory);
  createPara("A > B Can be possible in the following four cases", theory);
  createList(
    [
      "If A3 = 1 and B3 = 0",
      "If A3 = B3, A2 = 1 and B2 = 0",
      "If A3 = B3, A2 = B2, A1 = 1 and B1 = 0",
      "If A3=B3, A2 = B2, A1 = B1 and A0 = 1 and B0 = 0",
    ],
    theory
  );
  createPara("* A < B can be possible in the following four cases", theory);
  createList(
    [
      "If A3 = 0 and B3 = 1",
      "If A3 = B3, A2 = 0 and B2 = 1",
      "If A3 = B3, A2 = B2, A1 = 0 and B1 = 1",
      "If A3=B3, A2 = B2, A1 = B1 and A0 = 0 and B0 = 1",
    ],
    theory
  );
  createPara(
    "A = B is possible only when all the Individual bits of one Input, equals the corresponding bit of another Input",
    theory
  );
  createTertHeader("8-bit Magnitude Comparator ", theory);
  createPara(
    "This follows the same principles as the 4-bit magnitude comparator, but it expands the comparison to 8-bit binary numbers",
    theory
  );
  createPara(
    "In essence, comparators are used in central processing units (CPUs) and micro controllers (MCUs). They are also used in control systems and biometric applications.",
    theory
  );
  main.appendChild(theory);

  // Diagrams

  const diagrams = document.createElement("section");
  createSecHeader("4 bit magnitude comparator ", diagrams);
  const comImage4Bit = document.createElement("img");
  comImage4Bit.src = pic1;
  diagrams.appendChild(comImage4Bit);
  createSecHeader("8 bit magnitude comparator ", diagrams);
  const comImage8Bit = document.createElement("img");
  comImage8Bit.src = pic2;
  diagrams.appendChild(comImage8Bit);
  createSecHeader("Pin Diagram ", diagrams);
  const pinDiagram = document.createElement("img");
  pinDiagram.src = pic4;
  diagrams.appendChild(pinDiagram);
  main.appendChild(diagrams);

  // Procedures

  const procedures = document.createElement("section");
  createSecHeader("PROCEDURES", procedures);
  createList(
    [
      "Mount both IC's (7485) on the bread board, in such a way that pin 16 is to the top right corner of the board.",
      "Use the Multimeter to do a continuity test on each component. This is to ensure they are in good working conditions.",
      "Ground pin 8 of the two ICs to the negative rail of the breadboard.",
      "Connect pin 16 (Vcc) of the two ICs to the positive rail of the breadboard.",
      "Connect one end of each wire to pins 9, 11, 14, 1, 10, 12, 13 and 15 of the first IC. The other end of these wires will serve as probes for A and B word inputs (LSB).",
      "Ground pins 4, 5, and 6 of the first IC, since they are not needed.",
      "Connect one end of each wire to pins 9, 11, 14, 1, 10, 12, 13 and 15 of the Second IC. The other ends of these wires will serve as probes for A and B word inputs (MSB)",
      "Connect pin 2, 3 and 4 of the first IC to pin 2, 3, and 4 of the second IC. These are the expansion pins",
      "Connect LEDS to pins 4, 5, and 6 of the second IC. These LEDS will serve as outputs for the comparators.",
      "Loop the circuit with connecting wires, so as to ensure voltage flow through the circuit.",
      "Connect the voltage regulator to the bread board.",
    ],
    procedures
  );
  main.appendChild(procedures);

  // Observations

  const observations = document.createElement("section");
  createSecHeader("OBSERVATIONS", observations);
  const table = document.createElement("img");
  table.src = pic5;
  observations.appendChild(table);
  createPara("From the table above, It can be seen that: ", observations);
  createList(
    [
      "Whenever A > B, it gives a high output (1), and the LED at that point, lights up.",
      "Whenever A < B, (which means B > A), it gives a high output (1), and the LED at that point, lights up.",
      "Whenever A = B, the LED at this point, lights up.",
    ],
    observations
  );
  main.appendChild(observations);

  // Precautions

  const precautions = document.createElement("section");
  createSecHeader("PRECAUTIONS", precautions);
  createList(
    [
      "I ensured all the components were properly connected.",
      "I ensured I used a voltage regulator, so as not to damage the circuit.",
      "I ensured the voltage from the power source did not exceed 5 volts.",
      "I ensured that voltage was adequately distributed all through the board by looping current with connecting wires.",
    ],
    precautions
  );
  main.appendChild(precautions);

  // References

  const references = document.createElement("section");
  createSecHeader("REFERENCES", references);
  createList(
    [
      "300 Level Laboratory Manual, Computer Engineering Programme, University of Benin.",
      "The 4-bit and 8-bit comparators by Tutorials point.",
      "The 4-bit and 8-bit comparators by Geeks for Geeks.",
    ],
    references
  );
  main.appendChild(references);
  const hover = createHover("#");
  main.appendChild(hover);
  const download = createDownload("#");
  main.appendChild(download);
};
// LOGIC GATES EXPERIMENT
export const displayLogicGatesExperiment = function () {
  const main = reset();

  const titleSection = document.createElement("section");
  createSecHeader("Title:", titleSection);
  createPara("TO VERIFY BASIC LOGIC GATES", titleSection);
  main.appendChild(titleSection);

  const aimSection = document.createElement("section");
  createSecHeader("AIM:", aimSection);
  createPara("To verify basic logic gates", aimSection);
  main.appendChild(aimSection);

  const apparatusSection = document.createElement("section");
  createSecHeader("APPARATUS:", apparatusSection);
  createList(
    [
      "IC7404 – Hex Inverter (NOT Gate)",
      "IC7432 – 2 Input OR Gates",
      "IC7408 – 2 Input AND Gates",
      "IC7400 – 2 Input NAND Gate",
      "IC7402 – 2 Input NOR Gates",
      "IC7486 – XOR Gates",
      "IC74266 – 2 Input XNOR Gates",
      "Power Supply",
      "Connecting Wires",
      "Multimeter",
      "Bread Board",
    ],
    apparatusSection
  );
  main.appendChild(apparatusSection);

  const theorySection = document.createElement("section");
  createSecHeader("THEORY:", theorySection);
  createPara(
    "Logic gates are fundamental building blocks of digital circuits, playing a crucial role in modern electronics. They perform basic logical operations on binary data (0s and 1s) and form the underlying infrastructure for everything, from microcontrollers to supercomputers.",
    theorySection
  );
  createPara(
    "Logic gates operate based on the principles of Boolean algebra, a mathematical system representing true (1) and false (0) states, using variables and logical operators. Each type of gate implements a specific Boolean operation, such as AND, OR, NOT, XOR, etc.",
    theorySection
  );
  createPara(
    "Logic gates typically have one or more input channels and a single output channel. The output depends solely on the combination of input values and the gate's inherent logical function. This operation is often defined by a truth table, which shows the output for all possible input combinations.",
    theorySection
  );
  createPara(
    "Basic logic gates include the AND Gate, OR Gate, NOT Gate, XOR Gate (Exclusive OR), and NAND Gate (NOT AND). Logic gates are used in electronics, communications, and digital computing systems.",
    theorySection
  );
  main.appendChild(theorySection);

  // Procedures Section
  const proceduresSection = document.createElement("section");
  createSecHeader("PROCEDURES", proceduresSection);

  // AND Gate Procedure
  createTertHeader("AND Gate", proceduresSection);
  createPara(
    "This is an electronic circuit that has 2 or more inputs. The AND Gate gives a high output (1) only if all its inputs are high. In other cases, the output is low. The AND operation is denoted by a dot (.). Therefore, the output, X, of 2 inputs, A and B is given by: X = A * B.",
    proceduresSection
  );
  createList(
    [
      "Properly mount the IC 7408 (AND Gate) on the breadboard, ensuring pin 14 is at the top-right corner.",
      "Ground pin 7 by connecting it to the negative rail of the breadboard.",
      "Connect pin 14 (VCC) to the positive rail of the breadboard.",
      "Insert one end of a wire to pin 1 of IC 7408. The other end serves as Input A.",
      "Insert one end of another wire to pin 2 of IC 7408. The other end serves as Input B.",
      "Connect an LED to pin 3. The LED will light up only if Inputs A and B are high (1).",
    ],
    proceduresSection
  );

  // Add the AND Gate Truth Table
  const andTableSection = document.createElement("section");
  createSecHeader("AND Gate Truth Table", andTableSection);
  const andTableData = [
    { A: 0, B: 0, X: 0 },
    { A: 0, B: 1, X: 0 },
    { A: 1, B: 0, X: 0 },
    { A: 1, B: 1, X: 1 },
  ];
  andTableSection.appendChild(createTable(andTableData, "X = A · B"));
  proceduresSection.appendChild(andTableSection);

  // OR Gate Procedure
  createTertHeader("OR Gate", proceduresSection);
  createPara(
    "This is an electronic circuit that has 2 or more inputs. The OR Gate gives a high output (1) if any of its inputs are high. Only if all the inputs are low (0), will the output be low (false). The OR Gate is denoted by a plus (+).",
    proceduresSection
  );
  createList(
    [
      "Properly mount the IC 7432 (OR Gate) on the breadboard, ensuring pin 14 is at the top-right corner.",
      "Ground pin 7 by connecting it to the negative rail of the breadboard.",
      "Connect pin 14 (VCC) to the positive rail of the breadboard.",
      "Insert one end of a wire to pin 1 of IC 7432. The other end serves as Input A.",
      "Insert one end of another wire to pin 2 of IC 7432. The other end serves as Input B.",
      "Connect an LED to pin 3. The LED will light up if either Input A or Input B is high (1).",
    ],
    proceduresSection
  );

  // Add the OR Gate Truth Table
  const orTableSection = document.createElement("section");
  createSecHeader("OR Gate Truth Table", orTableSection);
  const orTableData = [
    { A: 0, B: 0, X: 0 },
    { A: 0, B: 1, X: 1 },
    { A: 1, B: 0, X: 1 },
    { A: 1, B: 1, X: 1 },
  ];
  orTableSection.appendChild(createTable(orTableData, "X = A + B"));
  proceduresSection.appendChild(orTableSection);

  // NOT Gate Procedure
  createTertHeader("NOT Gate", proceduresSection);
  createPara(
    "This is an electronic circuit that has only one input. The NOT Gate gives an output that is the complement of the input. It is also called an inverter. The NOT operation is denoted by a bar (¬).",
    proceduresSection
  );
  createList(
    [
      "Properly mount the IC 7404 (NOT Gate) on the breadboard, ensuring pin 14 is at the top-right corner.",
      "Ground pin 7 by connecting it to the negative rail of the breadboard.",
      "Connect pin 14 (VCC) to the positive rail of the breadboard.",
      "Insert one end of a wire to pin 1 of IC 7404. The other end serves as Input A.",
      "Connect an LED to pin 2. The LED will light up only if Input A is low (0).",
    ],
    proceduresSection
  );

  // Add the NOT Gate Truth Table
  const notTableSection = document.createElement("section");
  createSecHeader("NOT Gate Truth Table", notTableSection);
  const notTableData = [
    { A: 0, X: 1 },
    { A: 1, X: 0 },
  ];
  notTableSection.appendChild(createTable(notTableData, "X = ¬A"));
  proceduresSection.appendChild(notTableSection);

  // XOR Gate Procedure
  createTertHeader("XOR Gate", proceduresSection);
  createPara(
    "This is an electronic circuit that has 2 inputs. The XOR Gate gives a high output (1) if either input is high, but not both. The XOR operation is denoted by a circle with a plus inside (⊕).",
    proceduresSection
  );
  createList(
    [
      "Properly mount the IC 7486 (XOR Gate) on the breadboard, ensuring pin 14 is at the top-right corner.",
      "Ground pin 7 by connecting it to the negative rail of the breadboard.",
      "Connect pin 14 (VCC) to the positive rail of the breadboard.",
      "Insert one end of a wire to pin 1 of IC 7486. The other end serves as Input A.",
      "Insert one end of another wire to pin 2 of IC 7486. The other end serves as Input B.",
      "Connect an LED to pin 3. The LED will light up only if either Input A or Input B is high, but not both.",
    ],
    proceduresSection
  );

  // Add the XOR Gate Truth Table
  const xorTableSection = document.createElement("section");
  createSecHeader("XOR Gate Truth Table", xorTableSection);
  const xorTableData = [
    { A: 0, B: 0, X: 0 },
    { A: 0, B: 1, X: 1 },
    { A: 1, B: 0, X: 1 },
    { A: 1, B: 1, X: 0 },
  ];
  xorTableSection.appendChild(createTable(xorTableData, "X = A ⊕ B"));
  proceduresSection.appendChild(xorTableSection);

  // NAND Gate Procedure
  createTertHeader("NAND Gate", proceduresSection);
  createPara(
    "This is an electronic circuit that has 2 or more inputs. The NAND Gate gives a low output (0) only if all its inputs are high. It is the complement of the AND Gate. The NAND operation is denoted by a dot with a bar (·¯).",
    proceduresSection
  );
  createList(
    [
      "Properly mount the IC 7400 (NAND Gate) on the breadboard, ensuring pin 14 is at the top-right corner.",
      "Ground pin 7 by connecting it to the negative rail of the breadboard.",
      "Connect pin 14 (VCC) to the positive rail of the breadboard.",
      "Insert one end of a wire to pin 1 of IC 7400. The other end serves as Input A.",
      "Insert one end of another wire to pin 2 of IC 7400. The other end serves as Input B.",
      "Connect an LED to pin 3. The LED will light up unless Inputs A and B are both high (1).",
    ],
    proceduresSection
  );

  // Add the NAND Gate Truth Table
  const nandTableSection = document.createElement("section");
  createSecHeader("NAND Gate Truth Table", nandTableSection);
  const nandTableData = [
    { A: 0, B: 0, X: 1 },
    { A: 0, B: 1, X: 1 },
    { A: 1, B: 0, X: 1 },
    { A: 1, B: 1, X: 0 },
  ];
  nandTableSection.appendChild(createTable(nandTableData, "X = ¬(A · B)"));
  proceduresSection.appendChild(nandTableSection);

  // NOR Gate Procedure
  createTertHeader("NOR Gate", proceduresSection);
  createPara(
    "This is an electronic circuit that has 2 or more inputs. The NOR Gate gives a high output (1) only if all its inputs are low. It is the complement of the OR Gate. The NOR operation is denoted by a plus with a bar (+¯).",
    proceduresSection
  );
  createList(
    [
      "Properly mount the IC 7402 (NOR Gate) on the breadboard, ensuring pin 14 is at the top-right corner.",
      "Ground pin 7 by connecting it to the negative rail of the breadboard.",
      "Connect pin 14 (VCC) to the positive rail of the breadboard.",
      "Insert one end of a wire to pin 1 of IC 7402. The other end serves as Input A.",
      "Insert one end of another wire to pin 2 of IC 7402. The other end serves as Input B.",
      "Connect an LED to pin 3. The LED will light up only if both Inputs A and B are low (0).",
    ],
    proceduresSection
  );

  // Add the NOR Gate Truth Table
  const norTableSection = document.createElement("section");
  createSecHeader("NOR Gate Truth Table", norTableSection);
  const norTableData = [
    { A: 0, B: 0, X: 1 },
    { A: 0, B: 1, X: 0 },
    { A: 1, B: 0, X: 0 },
    { A: 1, B: 1, X: 0 },
  ];
  norTableSection.appendChild(createTable(norTableData, "X = ¬(A + B)"));
  proceduresSection.appendChild(norTableSection);

  // XNOR Gate Procedure
  createTertHeader("XNOR Gate", proceduresSection);
  createPara(
    "This is an electronic circuit that has 2 inputs. The XNOR Gate gives a high output (1) if both inputs are the same (either both high or both low). It is the complement of the XOR Gate.",
    proceduresSection
  );
  createList(
    [
      "Properly mount the IC 74266 (XNOR Gate) on the breadboard, ensuring pin 14 is at the top-right corner.",
      "Ground pin 7 by connecting it to the negative rail of the breadboard.",
      "Connect pin 14 (VCC) to the positive rail of the breadboard.",
      "Insert one end of a wire to pin 1 of IC 74266. The other end serves as Input A.",
      "Insert one end of another wire to pin 2 of IC 74266. The other end serves as Input B.",
      "Connect an LED to pin 3. The LED will light up if both Inputs A and B are the same.",
    ],
    proceduresSection
  );

  // Add the XNOR Gate Truth Table
  const xnorTableSection = document.createElement("section");
  createSecHeader("XNOR Gate Truth Table", xnorTableSection);
  const xnorTableData = [
    { A: 0, B: 0, X: 1 },
    { A: 0, B: 1, X: 0 },
    { A: 1, B: 0, X: 0 },
    { A: 1, B: 1, X: 1 },
  ];
  xnorTableSection.appendChild(createTable(xnorTableData, "X = A ⊙ B"));
  proceduresSection.appendChild(xnorTableSection);

  main.appendChild(proceduresSection);

  // Observations Section
  const observationsSection = document.createElement("section");
  createSecHeader("OBSERVATIONS", observationsSection);
  createPara(
    "The observations for each logic gate align with their respective truth tables. LEDs light up based on the input combinations as per the defined logic.",
    observationsSection
  );
  main.appendChild(observationsSection);

  // Precautions Section
  const precautionsSection = document.createElement("section");
  createSecHeader("PRECAUTIONS", precautionsSection);
  createList(
    [
      "Ensure all the components are properly connected.",
      "Use a voltage regulator to avoid damaging the circuit.",
      "Ensure the voltage from the power source does not exceed 5 volts.",
      "Verify the continuity of components with a multimeter before use.",
    ],
    precautionsSection
  );
  main.appendChild(precautionsSection);

  // References Section
  const referencesSection = document.createElement("section");
  createSecHeader("REFERENCES", referencesSection);
  createList(
    [
      "300 Level Laboratory Manual, Computer Engineering Programme, University of Benin.",
      "Logic Gates by Tutorials Point.",
      "Logic Gates by Geeks for Geeks.",
    ],
    referencesSection
  );
  main.appendChild(referencesSection);

  const hover = createHover("#");
  main.appendChild(hover);
  const download = createDownload("#");
  main.appendChild(download);

  return main;
};

// Function to create a table with borders and proper structure
function createTable(data, outputExpression) {
  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";
  table.style.width = "100%";
  table.style.border = "1px solid black";

  // Create the table header
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  const headers = Object.keys(data[0]);

  headers.forEach((headerText) => {
    const th = document.createElement("th");
    th.textContent = headerText;
    th.style.border = "1px solid black";
    th.style.padding = "8px";
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create the table body
  const tbody = document.createElement("tbody");

  data.forEach((rowData) => {
    const row = document.createElement("tr");

    Object.values(rowData).forEach((cellData) => {
      const td = document.createElement("td");
      td.textContent = cellData;
      td.style.border = "1px solid black";
      td.style.padding = "8px";
      row.appendChild(td);
    });

    tbody.appendChild(row);
  });

  table.appendChild(tbody);

  // Add a caption for the output expression
  const caption = document.createElement("caption");
  caption.textContent = `Output Expression: ${outputExpression}`;
  caption.style.captionSide = "bottom";
  caption.style.marginTop = "10px";
  table.appendChild(caption);

  return table;
}
// 3 by 8 DECODER EXPERIMENT

export const display3x8DecoderExperiment = function () {
  const main = reset();

  // Title
  const head = document.createElement("h1");
  head.textContent = "Title of Experiment: A 3x8 Decoder";
  main.appendChild(head);

  // Aim
  const aims = document.createElement("section");
  createSecHeader("AIMS/OBJECTIVE", aims);
  createPara(
    "To design and implement a 3x8 decoder using digital logic components.",
    aims
  );
  main.appendChild(aims);

  // Apparatus
  const apparatus = document.createElement("section");
  createSecHeader("APPARATUS", apparatus);
  createList(
    [
      "Power Supply",
      "Digital Trainer Kit",
      "IC 74138 (3x8 Decoder IC)",
      "NOT Gate IC",
      "Connecting Wires",
      "Multimeter",
      "Voltage Regulator",
      "LEDs (Light Emitting Diodes)",
    ],
    apparatus
  );
  main.appendChild(apparatus);

  // Theory
  const theory = document.createElement("section");
  createSecHeader("THEORY", theory);
  createPara(
    "A decoder is a digital circuit designed to interpret and translate encoded information. It receives an input signal in a specific format, typically binary, and converts it into a meaningful output, often activating a single channel among multiple possibilities.",
    theory
  );
  createPara(
    "A decoder is a combinational circuit that has 'n' input lines and a maximum of 2ⁿ output lines. When the decoder is enabled, one of these outputs will be active based on the combination of inputs present. This means a decoder detects a particular code. For the purpose of this experiment, we will be dealing with implementing a 3x8 decoder.",
    theory
  );
  createPara(
    "A 3×8 decoder, also known as a binary-to-octal decoder, takes three binary inputs and converts them into eight mutually exclusive output signals. It acts as a translator, decoding a 3-bit code and activating one of its eight outputs based on the specific input combination.",
    theory
  );

  // Working Principle
  createSecHeader("Working Principle", theory);
  createList(
    [
      "Each output (D0 to D7) corresponds to a unique combination of input bits.",
      "Only one output is active (high) at a time, while the others remain inactive (low).",
      "The active output represents the binary equivalent of the input code in octal form (base 8).",
    ],
    theory
  );

  // Applications
  createSecHeader("Applications", theory);
  createList(
    [
      "Memory address decoding.",
      "Data line selection in multiplexers.",
      "Control logic implementation in various systems.",
    ],
    theory
  );

  // YouTube Link
  createSecHeader("YouTube Link to the Practical Experiment", theory);
  const youtubeLink = document.createElement("a");
  youtubeLink.href = "https://youtu.be/RS-OkGxuUpU?si=w46MQYUU0PBP5cSS";
  youtubeLink.textContent = "Watch the Experiment on YouTube";
  theory.appendChild(youtubeLink);
  main.appendChild(theory);

  // Diagrams
  const diagrams = document.createElement("section");
  createSecHeader("DIAGRAMS", diagrams);

  // 3x8 Decoder Diagram
  const decoderDiagram = document.createElement("img");
  decoderDiagram.src = "path/to/3x8_decoder_diagram.png";
  decoderDiagram.className = "diagramSmallScreens";
  diagrams.appendChild(decoderDiagram);

  main.appendChild(diagrams);

  // Procedures
  const procedures = document.createElement("section");
  createSecHeader("PROCEDURES", procedures);
  createList(
    [
      "With a multimeter, perform a continuity test on the breadboard and other components to ensure they are in good working condition.",
      "Loop the breadboard by connecting the positive rail on one side to the positive rail on the other side, and do the same for the negative rail to ensure proper voltage distribution.",
      "Mount the 74LS138 decoder IC properly on the breadboard.",
      "Ground the IC by connecting pin 8 to the negative rail of the breadboard.",
      "Connect pin 16 (Vcc) to the positive rail of the breadboard.",
      "Attach LEDs to pins 15, 14, 13, 12, 11, 10, 9, and 7 to serve as outputs D0–D7, ensuring each LED has a current-limiting resistor in series.",
      "Use jumper wires to connect input pins 1 (A0), 2 (A1), and 3 (A2) to logic sources or switches.",
      "Ground unused pins (pins 4, 5, and 6) to prevent floating inputs.",
      "Install a voltage regulator to ensure a stable power supply.",
      "Power on the circuit, test different input combinations, and observe which output LED turns on. Record the results in an observation table to verify that each unique combination of inputs activates only one output at a time.",
    ],
    procedures
  );
  main.appendChild(procedures);

  // Observations
  const observations = document.createElement("section");
  createSecHeader("OBSERVATIONS", observations);
  createPara(
    "From the results obtained above, it is observed that for each combination of the three input pins (A2, A1, and A0), exactly one output pin is active (high) at a time. This active output represents the binary equivalent of the input combination in octal form.",
    observations
  );
  main.appendChild(observations);

  // Precautions
  const precautions = document.createElement("section");
  createSecHeader("PRECAUTIONS", precautions);
  createList(
    [
      "Ensured that all components were properly and securely connected.",
      "Made sure the voltage from the power source did not exceed 5V to prevent damage to the IC.",
      "Used a voltage regulator to maintain a stable power supply.",
      "Ensured proper voltage distribution by correctly wiring the connections.",
    ],
    precautions
  );
  main.appendChild(precautions);

  // Conclusion
  const conclusion = document.createElement("section");
  createSecHeader("CONCLUSION", conclusion);
  createPara(
    "From the observations, it’s clear that the 3×8 decoder works exactly as expected—it takes a 3-bit binary input and activates only one output at a time, correctly converting it into its corresponding octal value. This confirms that the decoder reliably translates binary inputs into distinct outputs without overlap.",
    conclusion
  );
  createPara(
    "The experiment also highlights the importance of proper circuit setup. Ensuring secure connections, using a stable 5V power supply, and grounding unused pins all played a role in making the circuit function smoothly. This reinforces how essential decoders are in digital electronics, whether it’s for memory address decoding, selecting data lines in multiplexers, or controlling different parts of a system.",
    conclusion
  );
  main.appendChild(conclusion);

  // References
  const references = document.createElement("section");
  createSecHeader("REFERENCES", references);
  createList(
    [
      "Laboratory Manual, Computer Engineering Programme, University of Benin, Benin City (2002).",
      "Decoder in Digital Electronics – Javatpoint.",
      "Decoders – O'Reilly.",
      "Digital Circuits (Decoders) – TutorialsPoint.",
      "YouTube",
    ],
    references
  );
  main.appendChild(references);
  const hover = createHover("#");
  main.appendChild(hover);
  const download = createDownload("#");
  main.appendChild(download);
};

// /////////////////////////////////////////////////////

// 400L CPE EXPERIMENTS

// SEQUENTIAL CIRCUITS

export const displaySequentialCircuits = function () {
  const main = reset();

  // Title
  const title = document.createElement("h1");
  title.textContent = "Experiment: Sequential Circuits";
  main.appendChild(title);

  // Aims/Objectives
  const objective = document.createElement("section");
  const objHead = document.createElement("h2");
  objHead.textContent = "AIMS/OBJECTIVES";
  objective.appendChild(objHead);
  const objList = document.createElement("ul");
  const objectives = [
    "Build a simple RS flip-flop.",
    "Observe the behavior of the 7476 JK flip-flop.",
    "Build a 4-input up counter using JK flip-flops.",
    "Test a synchronous 4-bit counter (74161) fully programmed.",
  ];
  objectives.forEach((obj) => {
    const item = document.createElement("li");
    item.textContent = obj;
    objList.appendChild(item);
  });
  objective.appendChild(objList);
  main.appendChild(objective);

  // Apparatus/Components
  const apparatus = document.createElement("section");
  const apparatusHead = document.createElement("h2");
  apparatusHead.textContent = "APPARATUS/COMPONENTS";
  apparatus.appendChild(apparatusHead);
  const apparatusList = document.createElement("ul");
  const components = [
    "1 7402 Quad NOR",
    "1 7408 Quad AND",
    "2 7476 Dual JK flip-flop",
    "1 74161 synchronous 4-bit counter",
  ];
  components.forEach((comp) => {
    const item = document.createElement("li");
    item.textContent = comp;
    apparatusList.appendChild(item);
  });
  apparatus.appendChild(apparatusList);
  main.appendChild(apparatus);

  // Theory
  const theory = document.createElement("section");
  const theoryHead = document.createElement("h2");
  theoryHead.textContent = "THEORY";
  theory.appendChild(theoryHead);
  const theoryContent = [
    "A sequential circuit refers to a special type of circuit where outputs depend on both present inputs and previous outputs (treated as the current state).",
    "Sequential circuits consist of memory storage elements, with or without combinational circuits.",
    "Types of sequential circuits include:",
    "1. Asynchronous sequential circuits (operate without clock signals, using pulses).",
    "2. Synchronous sequential circuits (use clock signals for synchronization).",
    "Counters are sequential circuits used for counting events, often in relation to a clock signal. They are classified as asynchronous or synchronous, based on the clocking mechanism.",
  ];
  theoryContent.forEach((para) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = para;
    theory.appendChild(paragraph);
  });
  main.appendChild(theory);

  // Diagrams
  const diagrams = document.createElement("section");
  const diagramsHead = document.createElement("h2");
  diagramsHead.textContent = "DIAGRAMS";
  diagrams.appendChild(diagramsHead);

  // RS4040 Diagram with Caption
  const rs404Container = document.createElement("div");
  rs404Container.style.textAlign = "center"; // Center the image and caption

  const rs404 = document.createElement("img");
  rs404.src = RSFOR4040;
  rs404.className = "diagramSmallScreens";
  rs404Container.appendChild(rs404);

  const rs404Caption = document.createElement("p");
  rs404Caption.textContent = "Figure 1: RS404 Diagram";
  rs404Caption.style.marginTop = "10px"; // Add spacing between image and caption
  rs404Caption.style.fontStyle = "italic"; // Italicize the caption
  rs404Container.appendChild(rs404Caption);

  diagrams.appendChild(rs404Container);

  // Counter Diagram with Caption
  const counterDiagContainer = document.createElement("div");
  counterDiagContainer.style.textAlign = "center"; // Center the image and caption

  const counterDiag = document.createElement("img");
  counterDiag.src = counters404;
  counterDiag.className = "diagramSmallScreens";
  counterDiagContainer.appendChild(counterDiag);

  const counterDiagCaption = document.createElement("p");
  counterDiagCaption.textContent = "Figure 2: Counter Diagram";
  counterDiagCaption.style.marginTop = "10px"; // Add spacing between image and caption
  counterDiagCaption.style.fontStyle = "italic"; // Italicize the caption
  counterDiagContainer.appendChild(counterDiagCaption);

  diagrams.appendChild(counterDiagContainer);

  // Sequential Circuit Diagram with Caption
  const seqCirContainer = document.createElement("div");
  seqCirContainer.style.textAlign = "center"; // Center the image and caption

  const seqCir = document.createElement("img");
  seqCir.src = sequentialcir4040;
  seqCir.className = "diagramSmallScreens";
  seqCirContainer.appendChild(seqCir);

  const seqCirCaption = document.createElement("p");
  seqCirCaption.textContent = "Figure 3: Sequential Circuit Diagram";
  seqCirCaption.style.marginTop = "10px"; // Add spacing between image and caption
  seqCirCaption.style.fontStyle = "italic"; // Italicize the caption
  seqCirContainer.appendChild(seqCirCaption);

  diagrams.appendChild(seqCirContainer);

  // JK Flip-Flop Diagram with Caption
  const jkflopContainer = document.createElement("div");
  jkflopContainer.style.textAlign = "center"; // Center the image and caption

  const jkflop = document.createElement("img");
  jkflop.src = JKflipflop;
  jkflop.className = "diagramSmallScreens";
  jkflopContainer.appendChild(jkflop);

  const jkflopCaption = document.createElement("p");
  jkflopCaption.textContent = "Figure 4: JK Flip-Flop Diagram";
  jkflopCaption.style.marginTop = "10px"; // Add spacing between image and caption
  jkflopCaption.style.fontStyle = "italic"; // Italicize the caption
  jkflopContainer.appendChild(jkflopCaption);

  diagrams.appendChild(jkflopContainer);

  // Append the diagrams section to the main element
  main.appendChild(diagrams);

  // Procedures
  const procedures = document.createElement("section");
  const procHead = document.createElement("h2");
  procHead.textContent = "PROCEDURES";
  procedures.appendChild(procHead);
  const steps = [
    "With multimeter do a continuity test on breadboard and the other components. This is to ensure they are all in good working conditions.",
    "Loop the breadboard by connecting Jumper wires from one rail to its opposite. This is to ensure voltage flow through the circuit.",
    "Properly mount the 74LS161 and 555 timer on the bread board.",
    "Connect pin 16 to IC74LS161 to VCC.",
    "Ground pin 8 of 1C74LS161.",
    "Connect pins 3,4,5,6 of IC74LS161 to negative terminal of the breadboard.",
    "Connect pin 7 of IC 74LS161 to positive terminal of the breadboard.",
    "Connect pin of IC 74LS161 to positive terminal of the bread board",
    "Connect pin 10 of IC 74LS161 to negative terminal of the breadboard ",
    "Connect LEDS to pins 11, 12, 13, 14 OF 1C74LS161",
    "Connect pin 2 of 16 74LS161 to pin 3 of 555 timer.",
    "Connect pin 2 to pin 6 of 555 timer.",
    "Connect pins 4 to pin 8 of 555 timer.",
    "Connect Resistor, R1 (10K) to pin 8 and pin7 of 555 timer ",
    "Connect Resistor R2 (3.3K) to pin 7 and ping of 555 time ",
    "Connect 100 MF capacitor to pin 2 of 555 timer.",
    "Connect LED to pin 3 of 555 timer.",
    "Ground pin 1 of 555 timer.",
    "Connect pin 8 of 555 timer to VCC.",
    "Connect Voltage Regulator to regulate voltage to 5volts.",
    "Test and observe the circuit.",
  ];
  const procList = document.createElement("ul");
  steps.forEach((step) => {
    const item = document.createElement("li");
    item.textContent = step;
    procList.appendChild(item);
  });
  procedures.appendChild(procList);
  main.appendChild(procedures);

  // Observations
  const observations = document.createElement("section");
  const obsHead = document.createElement("h2");
  obsHead.textContent = "OBSERVATIONS";
  observations.appendChild(obsHead);
  const obsContent = document.createElement("p");
  obsContent.textContent =
    "When a clock pulse is applied to the flip-flops in the sequential circuit, the output state changes based on the input conditions and the previous states. In particular, when testing a JK flip-flop, it was observed that setting both inputs to ‘1’ caused the output to toggle with each clock pulse, while setting them to different values resulted in predictable stable outputs. The delay between the clock pulse and the change in output was measured and found to be consistent.";
  observations.appendChild(obsContent);
  main.appendChild(observations);

  // Conclusion
  const conclusion = document.createElement("section");
  const concHead = document.createElement("h2");
  concHead.textContent = "CONCLUSION";
  conclusion.appendChild(concHead);
  const concContent = document.createElement("p");
  concContent.textContent =
    "The experiment confirmed that the behavior of the sequential circuit depends not only on the present input values but also on the past states, which validates the core principle of sequential circuits. The JK flip-flop demonstrated the expected toggling behavior when both inputs were high, and stable states when inputs were low or opposite. This illustrates how sequential circuits can store information and respond predictively to clock signals, making them essential for memory elements and control systems in digital electronics.";
  conclusion.appendChild(concContent);
  main.appendChild(conclusion);

  // Precautions
  const precautions = document.createElement("section");
  const precHead = document.createElement("h2");
  precHead.textContent = "PRECAUTIONS";
  precautions.appendChild(precHead);
  const precList = document.createElement("ul");
  const precautionItems = [
    "Ensure tight connections on the breadboard.",
    "Always use a voltage regulator to maintain 5V supply.",
    "Confirm all ground connections are properly established.",
  ];
  precautionItems.forEach((prec) => {
    const item = document.createElement("li");
    item.textContent = prec;
    precList.appendChild(item);
  });
  precautions.appendChild(precList);
  main.appendChild(precautions);

  // References
  const references = document.createElement("section");
  const refHead = document.createElement("h2");
  refHead.textContent = "REFERENCES";
  references.appendChild(refHead);
  const refList = document.createElement("ul");
  const refs = [
    '"Digital Logic and Computer Design" by M. Morris Mano',
    "400LEVEL Computer Engineering Laboratory Manual, University of Benin",
  ];
  refs.forEach((ref) => {
    const item = document.createElement("li");
    item.textContent = ref;
    refList.appendChild(item);
  });
  references.appendChild(refList);
  main.appendChild(references);
};

// ADDERS AND SUBTRACTORS EXPERIMENT
export const displayAddersAndSubtractors = function () {
  const main = reset();

  const head = document.createElement("h1");
  head.textContent = "Experiment: Adders and Subtractors";
  main.appendChild(head);

  const topic = document.createElement("h2");
  topic.textContent =
    "TO EXAMINE HALF AND FULL ADDERS, AND 4-BIT ADDER/SUBTRACTOR";
  main.appendChild(topic);

  const objective = document.createElement("section");
  createSecHeader("AIMS/OBJECTIVES", objective);
  createList(
    [
      "To examine the concept of half and full adders",
      "To determine the functions of the 4-bit adder and subtractor",
    ],
    objective
  );
  main.appendChild(objective);

  // Apparatus
  const apparatus = document.createElement("section");
  createSecHeader("APPARATUS/TOOLS", apparatus);
  createList(
    [
      "Breadboard",
      "IC 7400 - Quad 2-input NAND gate",
      "IC 7486 - Quad 2-input XOR gate",
      "LEDs",
      "IC 7483 - 4-bit binary adder",
      "Connecting wires",
      "Voltage regulator",
      "-5V DC power source",
      "STX (potentially a connector or additional component)",
    ],
    apparatus
  );
  main.appendChild(apparatus);

  // Theory
  const theory = document.createElement("section");
  createSecHeader("THEORY", theory);
  createPara(
    "Adders and subtractors are fundamental components in digital electronics, crucial for performing arithmetic operations. These circuits are categorized as combinational logic circuits, where the output depends solely on the current input values.",
    theory
  );

  createTertHeader("Adders", theory);

  createTertHeader("Half Adders", theory);
  createPara(
    "Adders and subtractors are fundamental components in digital electronics, crucial for performing arithmetic operations. These circuits are categorized as combinational logic circuits, where the output depends solely on the current input values.",
    theory
  );

  createTertHeader("What is a Half Adder?", theory);
  createPara(
    "The half adder is a basic building block for more complex adder circuits such as full adders and multiple-bit adders. It performs binary addition of two single-bit inputs, A and B, and provides two outputs, SUM and CARRY. The SUM output is the least significant bit (LSB) of the result, which is the XOR of the two inputs A and B. The XOR gate implements the addition operation for binary digits, where a “1” is generated in the SUM output only when one of the inputs is “1”. The CARRY output is the most significant bit (MSB) of the result, indicating whether there was a carry-over from the addition of the two inputs. The CARRY output is the AND of the two inputs A and B. The AND gate generates a “1” in the CARRY output only when both inputs are “1”. Half adder is the simplest of all adder circuits. Half adder is a combinational arithmetic circuit that adds two numbers and produces a sum bit (s) and carry bit (c) both as output. The addition of 2 bits is done using a combination circuit called a Half adder. The input variables are augend and addend bits and output variables are sum & carry bits. A and B are the two input bits.",
    theory
  );

  createTertHeader("Full Adders", theory);
  createPara(
    "Full Adder is the adder that adds three inputs and produces two outputs. The first two inputs are A and B and the third input is an input carry as C-IN. The output carry is designated as C-OUT and the normal output is designated as S which is SUM. The C-OUT is also known as the majority 1’s detector, whose output goes high when more than one input is high. A full adder logic is designed in such a manner that can take eight inputs together to create a byte-wide adder and cascade the carry bit from one adder to another. we use a full adder because when a carry-in bit is available, another 1-bit adder must be used since a 1-bit half-adder does not take a carry-in bit. A 1-bit full adder adds three operands and generates 2-bit results.",
    theory
  );

  createTertHeader("Subtractors", theory);

  createTertHeader("Half Subtractors", theory);
  createPara(
    "A half-subtractor is a combinational logic circuit that have two inputs and two outputs (i.e. difference and borrow). The half subtractor produces the difference between the two binary bits at the input and also produces a borrow output (if any). In the subtraction (A-B), A is called as Minuend bit and B is called as Subtrahend bit.",
    theory
  );

  createTertHeader("Full Subtractors", theory);
  createPara(
    "A full subtractor is a combinational circuit that performs subtraction of two bits, one is minuend and other is subtrahend, taking into account borrow of the previous adjacent lower minuend bit. This circuit has three inputs and two outputs. The three inputs A, B and Bin, denote the minuend, subtrahend, and previous borrow, respectively. The two outputs, D and Bout represent the difference and output borrow, respectively. Although subtraction is usually achieved by adding the complement of subtrahend to the minuend, it is of academic interest to work out the Truth Table and logic realisation of a full subtractor; x is the minuend; y is the subtrahend; z is the input borrow; D is the difference; and B denotes the output borrow. The corresponding maps for logic functions for outputs of the full subtractor namely difference and borrow.",
    theory
  );

  createSecHeader("Applications", theory);
  createList(
    [
      "Arithmetic Logic Units (ALUs)",
      "Digital Signal Processing (DSP)",
      "Address Calculation in Memory Access",
      "Checksum and CRC Generators",
      "Floating-Point Arithmetic",
    ],
    theory
  );
  main.appendChild(theory);

  // Diagrams
  const diagrams = document.createElement("section");
  createSecHeader("Adder and Subtractor Circuit", diagrams);
  const adderSubCir = document.createElement("img");
  adderSubCir.src = adderAndSubCir;
  adderSubCir.className = "diagramSmallScreens";
  diagrams.appendChild(adderSubCir);

  createSecHeader("4-Bit Adder and Subtractor Circuit", diagrams);
  const fourBitAdderSubCir = document.createElement("img");
  fourBitAdderSubCir.src = fourBitAdderSub;
  fourBitAdderSubCir.className = "diagramSmallScreens";
  diagrams.appendChild(fourBitAdderSubCir);

  createSecHeader("IC 7486 Diagram", diagrams);
  const ic7486Img = document.createElement("img");
  ic7486Img.src = ic7486;
  ic7486Img.className = "diagramSmallScreens";
  diagrams.appendChild(ic7486Img);

  createSecHeader("IC 7483 Diagram", diagrams);
  const ic7483Img = document.createElement("img");
  ic7483Img.src = ic7483;
  ic7483Img.className = "diagramSmallScreens";
  diagrams.appendChild(ic7483Img);

  createSecHeader("IC 7400 Diagram", diagrams);
  const ic7400Img = document.createElement("img");
  ic7400Img.src = ic7400;
  ic7400Img.className = "diagramSmallScreens";
  diagrams.appendChild(ic7400Img);

  createSecHeader("Half Subtractor Circuit", diagrams);
  const halfSubImg = document.createElement("img");
  halfSubImg.src = halfSub;
  halfSubImg.className = "diagramSmallScreens";
  diagrams.appendChild(halfSubImg);

  createSecHeader("Full Subtractor Circuit", diagrams);
  const fullSubImg = document.createElement("img");
  fullSubImg.src = fullSub;
  fullSubImg.className = "diagramSmallScreens";
  diagrams.appendChild(fullSubImg);

  main.appendChild(diagrams);

  // Procedures
  const procedures = document.createElement("section");
  createSecHeader("PROCEDURES", procedures);
  createList(
    [
      "Use a multimeter to perform a continuity test on the breadboard and components to ensure they are in good working condition.",
      "Loop the breadboard rails by connecting the positive rail of one side to the positive rail of the other side. Repeat the same process for the negative rails.",
      "Mount IC 7486 and IC 7483 properly on the breadboard.",
      "Connect pin 5 of IC 7483 to VCC and ground pin 12 of IC 7483.",
      "Connect pin 14 of IC 7486 to VCC and ground pin 7 of IC 7486.",
      "Connect input pins (1, 4, 10, and 13) of IC 7486 to switches, representing B1, B2, B3, and B4.",
      "Connect other input pins of IC 7486 to pins 2, 5, 9, and 12 of IC 7483.",
      'Connect LEDs to represent outputs S1, S2, S3, and S4. Connect an LED to pin 14 of IC 7483 to represent the "Carry" output.',
      "For adder operation, connect pin 13 of IC 7483 to the negative terminal. For subtractor operation, connect pin 13 of IC 7483 to the positive terminal.",
      "Install a voltage regulator to ensure stable operation.",
      "Test the circuit and record your observations.",
    ],
    procedures
  );
  main.appendChild(procedures);

  // Observations
  const observations = document.createElement("section");
  createSecHeader("OBSERVATIONS", observations);
  createPara(
    "The experiment showed the successful operation of adders and subtractors. LEDs illuminated as expected for the various input configurations, demonstrating correct functionality of the circuits.",
    observations
  );

  // Add the Adder and Subtractor Table
  const adderSubtractorTableSection = document.createElement("section");
  createSecHeader("Adder and Subtractor Table", adderSubtractorTableSection);

  // Data for the table
  const adderSubtractorTableData = [
    {
      A: "1 0 0 0",
      B: "0 0 1 1",
      Addition: "0 1 0 0 1",
      Subtraction: "0 0 1 0 1",
    },
    {
      A: "1 0 0 0",
      B: "0 1 0 0",
      Addition: "0 1 0 1 0",
      Subtraction: "0 0 1 1 0",
    },
    {
      A: "1 0 0 0",
      B: "0 1 0 1",
      Addition: "0 1 0 1 1",
      Subtraction: "0 0 1 1 1",
    },
    {
      A: "1 0 0 0",
      B: "1 0 0 0",
      Addition: "0 1 1 0 0",
      Subtraction: "0 0 0 0 0",
    },
    {
      A: "1 0 0 0",
      B: "1 0 0 1",
      Addition: "0 1 1 0 1",
      Subtraction: "0 0 0 0 1",
    },
    {
      A: "1 0 0 0",
      B: "1 0 1 0",
      Addition: "0 1 1 1 0",
      Subtraction: "0 0 0 1 0",
    },
    {
      A: "1 0 0 0",
      B: "1 1 0 0",
      Addition: "0 1 1 1 1",
      Subtraction: "0 0 0 1 1",
    },
  ];

  // Function to create the table
  function createTable(data) {
    const table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    table.style.width = "100%";
    table.style.border = "1px solid black";

    // Create the table header
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const headers = ["Input Data A", "Input Data B", "Addition", "Subtraction"];

    headers.forEach((headerText) => {
      const th = document.createElement("th");
      th.textContent = headerText;
      th.style.border = "1px solid black";
      th.style.padding = "8px";
      headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create the table body
    const tbody = document.createElement("tbody");

    data.forEach((rowData) => {
      const row = document.createElement("tr");

      Object.values(rowData).forEach((cellData) => {
        const td = document.createElement("td");
        td.textContent = cellData;
        td.style.border = "1px solid black";
        td.style.padding = "8px";
        row.appendChild(td);
      });

      tbody.appendChild(row);
    });

    table.appendChild(tbody);

    return table;
  }

  // Append the table to the observations section
  adderSubtractorTableSection.appendChild(
    createTable(adderSubtractorTableData)
  );
  observations.appendChild(adderSubtractorTableSection);

  main.appendChild(observations);

  // Precautions
  const precautions = document.createElement("section");
  createSecHeader("PRECAUTIONS", precautions);
  createList(
    [
      "I ensured all the components were properly connected.",
      "I ensured all the components were in good working condition before using them.",
      "I ensured a voltage regulator was used to regulate the voltage to 5V.",
    ],
    precautions
  );
  main.appendChild(precautions);

  // Conclusions
  const conclusions = document.createElement("section");
  createSecHeader("CONCLUSIONS", conclusions);
  createPara(
    "In this experiment involving adders and subtractors using a breadboard, IC 7486, and IC 7483, we successfully demonstrated the fundamental principles of digital arithmetic operations. By configuring both ICs, we designed and implemented both addition and subtraction circuits. The results confirmed the expected outcomes, showcasing the ability of these integrated circuits to perform basic arithmetic functions reliably. This experiment not only reinforced the theoretical concepts of digital electronics but also provided practical insights into the implementation and troubleshooting of combinational logic circuits.",
    conclusions
  );
  main.appendChild(conclusions);

  // References
  const references = document.createElement("section");
  createSecHeader("REFERENCES", references);
  createList(
    [
      "400L Laboratory Manual, Computer Engineering Programme, UNIBEN.",
      "Digital Design by M. Morris Mano.",
      "Digital Fundamentals by Thomas L. Floyd.",
    ],
    references
  );
  main.appendChild(references);
};
// SEVEN SEGMENT DISPLAY DECODER EXPERIMENT

export const displaySevenSegmentDecoder = function () {
  const main = reset();

  // Title
  const head = document.createElement("h1");
  head.textContent = "Experiment: Seven Segment Display Decoder";
  main.appendChild(head);

  // Aim
  const topic = document.createElement("h2");
  topic.textContent =
    "TO CONSTRUCT A CIRCUIT THAT TAKES A 3-BIT BINARY INTEGER AND PRODUCES THE CORRESPONDING SEVEN-SEGMENT CODE";
  main.appendChild(topic);

  // Objective
  const objective = document.createElement("section");
  createSecHeader("AIMS/OBJECTIVES", objective);
  createPara(
    "To construct a circuit that takes a 3-bit binary integer with a decimal value between 0 and 7 and produces the corresponding seven-segment code.",
    objective
  );
  main.appendChild(objective);

  // Apparatus
  const apparatus = document.createElement("section");
  createSecHeader("APPARATUS/TOOLS", apparatus);
  createList(
    [
      "Breadboard",
      "2-input NAND Gate (IC 7400)",
      "3-input NAND Gate (IC 7410)",
      "LEDs",
      "Connecting wires",
      "Voltage regulator",
      "5V DC power source",
    ],
    apparatus
  );
  main.appendChild(apparatus);

  // Theory
  const theory = document.createElement("section");
  createSecHeader("THEORY", theory);
  createPara(
    "Light Emitting Diode (LED) is the most widely used semiconductor which emits either visible light or invisible infrared light when forward biased. Remote controls generate invisible light. A Light-emitting diode (LED) is optical-electrical energy into light energy when voltage is applied. Seven segment displays are the output display device that provides a way to display information in the form of images or text or decimal numbers which is an alternative to the more complex dot matrix displays. It is widely used in digital clocks, basic calculators, electronic meters, and other electronic devices that display numerical information. It consists of seven segments of light-emitting diodes (LEDs) which are assembled like numerical 8.",
    theory
  );

  const displaySevenSeg = document.createElement("img");
  displaySevenSeg.src = displaySevSeg;
  theory.appendChild(displaySevenSeg);

  createPara(
    "The number 8 is displayed when power is supplied to all segments of a seven-segment display. If the power to the ‘g’ segment is disconnected, the display shows the number 0. In a seven-segment display, voltage can be applied to different pins simultaneously, allowing the formation of numerical combinations from 0 to 9. Although seven-segment displays cannot form alphabets like X and Z, they can represent certain letters such as A, B, C, D, E, and F. Therefore, they are suitable for displaying hexadecimal digits. Each display unit typically includes a decimal point (DP), which can be located on either the left or the right of the display pattern. These displays can be used to show numerals from 0 to 9 as well as letters from A to F.",
    theory
  );

  createSecHeader("Working of Seven Segment Displays", theory);
  createPara(
    "The number 8 is displayed when the power is given to all the segments and if you disconnect the power for ‘g’, then it displays the number 0. In a seven-segment display, power (or voltage) at different pins can be applied at the same time, so we can form combinations of display numerical from 0 to 9. Since seven-segment displays can not form alphabets like X and Z, so it can not be used for the alphabet and they can be used only for displaying decimal numerical magnitudes. However, seven-segment displays can form alphabets A, B, C, D, E, and F, so they can also be used for representing  each display unit is usually has a dot point (DP).  The display point could be located either towards the left or towards the right of the display pattern. This type of pattern can be used to display numerals from 0 to 9 and letters from to F hexadecimal digits.",
    theory
  );
  createPara(
    "According to the type of application, there are two types of configurations of seven-segment displays: common anode display and common cathode display.",
    theory
  );

  createList(
    [
      "In common cathode seven segment displays, all the cathode connections of LED segments are connected together to logic 0 or ground. We use logic 1 through a current limiting resistor to forward bias the individual anode terminals a to g.",
      "Whereas all the anode connections of the LED segments are connected together to logic 1 in a common anode seven segment display. We use logic 0 through a current limiting resistor to the cathode of a particular segment a to g.",
    ],
    theory
  );

  createPara(
    "Common anode seven segment displays are more popular than cathode seven segment displays because logic circuits can sink more current than they can source and it is the same as connecting LEDs in reverse.",
    theory
  );
  createSecHeader("APPLICATIONS", theory);
  createList(
    [
      "Digital clocks",
      "Clock radios",
      "Calculators",
      "Wristwatches",
      "Speedometers",
      "Motor-vehicle odometers",
      "Radiofrequency indicators",
    ],
    theory
  );
  main.appendChild(theory);

  // Diagrams
  const diagrams = document.createElement("section");

  // Anode Diagram
  createSecHeader("Anode", diagrams);
  const anodeDiag = document.createElement("img");
  anodeDiag.src = anode;
  anodeDiag.className = "diagramSmallScreens";
  diagrams.appendChild(anodeDiag);

  // Cathode Diagram
  createSecHeader("Cathode", diagrams);
  const cathodeDiag = document.createElement("img");
  cathodeDiag.src = cathode;
  cathodeDiag.className = "diagramSmallScreens";
  diagrams.appendChild(cathodeDiag);

  // IC 7400 and 7410 Diagram
  createSecHeader("IC 7400 and 7410", diagrams);
  const ic7400And7410Diag = document.createElement("img");
  ic7400And7410Diag.src = ic7400and7410;
  ic7400And7410Diag.className = "diagramSmallScreens";
  diagrams.appendChild(ic7400And7410Diag);

  // BCD Diagram
  createSecHeader("BCD", diagrams);
  const bcdDiag = document.createElement("img");
  bcdDiag.src = bcd;
  bcdDiag.className = "diagramSmallScreens";
  diagrams.appendChild(bcdDiag);

  main.appendChild(diagrams);

  // Procedures
  const procedures = document.createElement("section");
  createSecHeader("PROCEDURES", procedures);
  createList(
    [
      "Use a multimeter to test the continuity of the breadboard and other components to ensure proper functionality.",
      "Loop the breadboard by connecting jumper wires from one rail to its opposite rail to ensure consistent voltage flow across the power lines.",
      "Properly place IC 7400, IC 7410, and IC 7404 onto the breadboard.",
      "Connect pin 7 of IC 7400, IC 7410, and IC 7404 to the ground (negative rail) of the breadboard.",
      "Connect pin 14 of IC 7400, IC 7410, and IC 7404 to the positive (Vcc) rail of the breadboard.",
      "Connect the input pins (2, 5, 9, 12) of IC 7400 to the negative rail of the breadboard.",
      "Connect the output pins (3, 6, 8, 11) of IC 7400 to the input pins (1, 3, 11, 13) of IC 7404.",
      "Connect the input pins (2, 4, 5, 9, 13) of IC 7410 to the negative rail of the breadboard.",
      "Connect probe wires to pins 1, 3, and 11 of IC 7410.",
      "Connect the output pins (12, 6, 8) of IC 7410 to the input pins (13, 1, 11) of IC 7404.",
      "Connect the output pins (2, 4, 10, 12) of IC 7404 to the corresponding input pins (10, 9, 7, 6, 4, 2, 1) of the seven-segment display.",
      "Connect pins 8 and 3 of the seven-segment display to the Vcc rail.",
      "Connect a voltage regulator to ensure the circuit receives a steady 5V supply.",
      "Use probe wires to test the setup, specifically checking pins 1, 4, 10, and 13 of IC 7400 and connections to the seven-segment display. Record the results.",
    ],
    procedures
  );
  main.appendChild(procedures);

  // Observations
  const observations = document.createElement("section");

  // Add the table to the Observations section
  const tableSection = document.createElement("section");
  createSecHeader("Truth Table for Seven Segment", tableSection);

  // Data for the table
  const tableData = [
    {
      Dec: 0,
      IC7400: "1 1 1 1",
      IC7410: "1 1 0",
      Output: "1 1 1 1 1 1 0",
    },
    {
      Dec: 1,
      IC7400: "0 1 1 0",
      IC7410: "1 1 0",
      Output: "0 1 1 0 0 0 0",
    },
    {
      Dec: 2,
      IC7400: "1 1 0 0",
      IC7410: "1 0 1",
      Output: "1 1 0 1 1 0 1",
    },
    {
      Dec: 3,
      IC7400: "1 1 1 1",
      IC7410: "0 0 1",
      Output: "1 1 1 1 0 0 1",
    },
    {
      Dec: 4,
      IC7400: "0 1 1 0",
      IC7410: "0 1 1",
      Output: "0 1 1 0 0 1 1",
    },
    {
      Dec: 5,
      IC7400: "1 0 1 1",
      IC7410: "0 1 1",
      Output: "1 0 1 1 0 1 1",
    },
    {
      Dec: 6,
      IC7400: "1 0 1 1",
      IC7410: "1 1 1",
      Output: "1 0 1 1 1 1 1",
    },
    {
      Dec: 7,
      IC7400: "1 1 1 0",
      IC7410: "0 0 0",
      Output: "1 1 1 0 0 0 0",
    },
    {
      Dec: 8,
      IC7400: "1 1 1 1",
      IC7410: "1 1 1",
      Output: "1 1 1 1 1 1 1",
    },
    {
      Dec: 9,
      IC7400: "1 1 1 1",
      IC7410: "0 1 1",
      Output: "1 1 1 1 0 1 1",
    },
  ];

  // Function to create the table
  function createTable(data) {
    const table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    table.style.width = "100%";
    table.style.border = "1px solid black";

    // Create the table header
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const headers = [
      "Dec",
      "Inputs (IC 7400, IC 7410)",
      "Output (7-Segment Display)",
    ];

    headers.forEach((headerText) => {
      const th = document.createElement("th");
      th.textContent = headerText;
      th.style.border = "1px solid black";
      th.style.padding = "8px";
      headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create the table body
    const tbody = document.createElement("tbody");

    data.forEach((rowData) => {
      const row = document.createElement("tr");

      // Add Dec column
      const decCell = document.createElement("td");
      decCell.textContent = rowData.Dec;
      decCell.style.border = "1px solid black";
      decCell.style.padding = "8px";
      row.appendChild(decCell);

      // Add Inputs column
      const inputsCell = document.createElement("td");
      inputsCell.textContent = `IC 7400: ${rowData.IC7400}\nIC 7410: ${rowData.IC7410}`;
      inputsCell.style.border = "1px solid black";
      inputsCell.style.padding = "8px";
      inputsCell.style.whiteSpace = "pre-line"; // Preserve line breaks
      row.appendChild(inputsCell);

      // Add Output column
      const outputCell = document.createElement("td");
      outputCell.textContent = rowData.Output;
      outputCell.style.border = "1px solid black";
      outputCell.style.padding = "8px";
      row.appendChild(outputCell);

      tbody.appendChild(row);
    });

    table.appendChild(tbody);

    return table;
  }

  // Append the table to the table section
  tableSection.appendChild(createTable(tableData));
  observations.appendChild(tableSection);

  // Add observations text
  createSecHeader("OBSERVATIONS", observations);
  createPara(
    "The seven-segment display illuminated the correct segments corresponding to the binary input. Errors in connections resulted in partial or no segment illumination.",
    observations
  );

  // Append the observations section to the main element
  main.appendChild(observations);

  // Precautions
  const precautions = document.createElement("section");
  createSecHeader("PRECAUTIONS", precautions);
  createList(
    [
      "Ensure all components are functioning properly.",
      "Verify all connections before powering the circuit.",
      "Use a voltage regulator to prevent damage to components.",
    ],
    precautions
  );
  main.appendChild(precautions);

  // Conclusion
  const conclusions = document.createElement("section");
  createSecHeader("CONCLUSIONS", conclusions);
  createPara(
    "In summary, a seven-segment display decoder plays a vital role in converting digital signals into readable numbers or characters. It works by controlling which segments of the display light up to represent digits (0-9) or hexadecimal values (A-F). This makes it a simple and effective way to present data in a way people can easily understand. Building and testing the decoder highlights the importance of proper wiring, ensuring components are in good condition, and regulating the voltage to protect the circuit. Seven-segment displays, combined with decoders, are widely used in everyday devices like clocks and calculators because they’re reliable and easy to use for displaying information.",
    conclusions
  );
  main.appendChild(conclusions);

  // References
  const references = document.createElement("section");
  createSecHeader("REFERENCES", references);
  createList(
    [
      "400L Laboratory Manual, Computer Engineering Programme, UNIBEN.",
      "Digital Design by M. Morris Mano.",
      "Fundamentals of Digital Logic by Stephen Brown.",
      "Digital Systems by Ronald Tucci.",
    ],
    references
  );
  main.appendChild(references);
};

// DECODER AND MULTIPLEXER EXPERIMENT

export const displayDecoderAndMultiplexerExperiment = function () {
  const main = reset();

  // Title
  const head = document.createElement("h1");
  head.textContent = "Experiment Number: CPE 403 - Decoder and Multiplexer";
  main.appendChild(head);

  // Aims
  const aims = document.createElement("section");
  createSecHeader("AIMS", aims);
  createList(
    [
      "To construct combinational circuits for decoders and multiplexers.",
      "To implement logical functions using decoders and multiplexers.",
    ],
    aims
  );
  main.appendChild(aims);

  // Apparatus
  const apparatus = document.createElement("section");
  createSecHeader("APPARATUS", apparatus);
  createList(
    [
      "Combinational logic gates",
      "Breadboard",
      "LEDs",
      "Voltage regulator",
      "Battery pack",
      "Connecting wires",
      "74138: 3-to-8 Decoder IC",
      "74151: 8-to-1 Multiplexer IC",
    ],
    apparatus
  );
  main.appendChild(apparatus);

  // Theory
  const theory = document.createElement("section");
  createSecHeader("THEORY", theory);

  // Decoder Theory
  createSecHeader("Decoder", theory);
  createPara(
    "A decoder is a digital circuit designed to interpret and translate encoded information. It receives an input signal in a specific format, typically binary, and converts it into a meaningful output, often activating a single channel among multiple possibilities.",
    theory
  );
  createPara(
    "A decoder is a combinational circuit that has n input lines and a maximum of 2^n output lines. When the decoder is enabled, one of these outputs will be active based on the combination of inputs present. In essence, a decoder detects a particular code.",
    theory
  );
  createPara(
    "For the purpose of this experiment, a 74138 IC is used as a 3-to-8 decoder. This decoder accepts three binary inputs and activates one of the eight outputs based on the input combination. The enable pins of the decoder must be appropriately set to activate the circuit.",
    theory
  );

  // Multiplexer Theory
  createSecHeader("Multiplexer", theory);
  createPara(
    "A multiplexer (or MUX) is a versatile digital circuit that acts as a multi-input, single-output data selector. It is a combinational circuit with a maximum of 2^n data inputs, n selection lines, and one output line. Based on the values of the selection lines, only one of the 2^n data inputs is connected to the output.",
    theory
  );
  createList(
    [
      "Selection Lines: These determine which data input is selected.",
      "Data Inputs: The maximum number of data inputs is 2^n.",
      "Single Output: All operations funnel into a single output line.",
    ],
    theory
  );
  createPara(
    "For instance, with 3 selection lines (n=3), the multiplexer can handle up to 8 data inputs. The combination of 0s and 1s on the selection lines ensures only one data input is selected and passed to the output.",
    theory
  );

  // Combinational Circuit Theory
  createSecHeader("Combinational Circuit", theory);
  createPara(
    "A combinational circuit is a type of digital circuit where the output depends solely on the current input values. Unlike sequential circuits, combinational circuits do not have memory elements, so their output is not influenced by past inputs. Examples of combinational circuits are:",
    theory
  );
  createList(
    [
      "Logic gates like AND, OR, XOR, and NOT.",
      "More complex circuits such as decoders, multiplexers, and adders.",
    ],
    theory
  );
  main.appendChild(theory);

  // Diagrams
  const diagrams = document.createElement("section");
  createSecHeader("DIAGRAMS", diagrams);

  // Decoder Diagram
  const decoderDiagram = document.createElement("img");
  decoderDiagram.src = decoder3x8;
  decoderDiagram.className = "diagramSmallScreens";
  diagrams.appendChild(decoderDiagram);

  const decoderDiagram2 = document.createElement("img");
  decoderDiagram2.src = NtwoCODER;
  decoderDiagram2.className = "diagramSmallScreens";
  diagrams.appendChild(decoderDiagram2);

  // Multiplexer Diagram
  const multiplexerDiagram2 = document.createElement("img");
  multiplexerDiagram2.src = mux8x1;
  multiplexerDiagram2.className = "diagramSmallScreens";
  diagrams.appendChild(multiplexerDiagram2);

  const multiplexerDiagram = document.createElement("img");
  multiplexerDiagram.src = mux4x1;
  multiplexerDiagram.className = "diagramSmallScreens";
  diagrams.appendChild(multiplexerDiagram);

  // ICs Diagram
  const ic74138 = document.createElement("img");
  ic74138.src = IC74138;
  ic74138.className = "diagramSmallScreens";
  diagrams.appendChild(ic74138);

  const i74151 = document.createElement("img");
  i74151.src = IC74151;
  i74151.className = "diagramSmallScreens";
  diagrams.appendChild(i74151);

  main.appendChild(diagrams);

  // Procedures
  const procedures = document.createElement("section");
  createSecHeader("PROCEDURES", procedures);

  // Multiplexer Procedure
  createSecHeader("Procedure for Multiplexer", procedures);
  createList(
    [
      "Use a multimeter to perform a continuity test on the breadboard and other components to ensure they are in good working condition.",
      "Loop the breadboard by connecting the positive rail of one side to the positive rail of the other side, and do the same for the negative rail, to ensure voltage flow through the circuit.",
      "Mount the 74151 IC (8-to-1 Multiplexer) properly on the breadboard.",
      "Connect pin 8 of the IC to ground.",
      "Connect pin 16 of the IC to VCC (positive terminal).",
      "Connect the Enable pin (pin 8) appropriately.",
      "Connect pins 3, 15, 12, and 13 to the positive terminal of the breadboard. These pins will serve as D1, D2, D6, and D7.",
      "Connect pins 4, 2, 1, and 14 to the negative terminal of the breadboard. These pins will serve as D0, D3, D4, and D5.",
      "Connect output LEDs to pins 5 and 6 of the IC to serve as the output.",
      "Attach push buttons to pins 11, 10, and 9 of the IC, which will act as switches.",
      "Connect the other terminals of the push buttons to the negative rail of the breadboard.",
      "Use a voltage regulator to ensure the voltage supply is regulated to 5 volts.",
      "Test the circuit for functionality and tabulate the results.",
    ],
    procedures
  );

  // Decoder Procedure
  createSecHeader("Procedure for Decoder", procedures);
  createList(
    [
      "Use a multimeter to perform a continuity test on the breadboard and other components to ensure they are in good working condition.",
      "Loop the breadboard by connecting the positive rail of one side to the positive rail of the other side, and do the same for the negative rail, to ensure voltage flow through the circuit.",
      "Mount the 74138 IC (3-to-8 Decoder) properly on the breadboard.",
      "Connect pin 8 of the IC to ground.",
      "Connect pin 16 of the IC to VCC (positive terminal).",
      "Ground pins 4 and 5 of the 74138 IC.",
      "Connect LEDs to pins 7, 9, 10, 11, 12, 13, 14, and 15. These LEDs represent the outputs D0 to D7 respectively.",
      "Connect push buttons to pins 1, 2, and 3. These push buttons will serve as switches, which will, in turn, serve as inputs for A2, A1, and A0.",
      "Using 330-ohm resistors, connect three resistors to pins 1, 2, and 3. The other leg of the resistors should be connected to ground.",
      "Connect the voltage regulator to ensure the voltage supply is regulated to 5V.",
      "Test the circuit for functionality and tabulate the results.",
    ],
    procedures
  );
  main.appendChild(procedures);

  // Observations
  const observations = document.createElement("section");
  createSecHeader("OBSERVATIONS", observations);

  // Truth Table for Multiplexer
  createSecHeader("Truth Table for Multiplexer", observations);
  const multiplexerTruthTable = document.createElement("img");
  multiplexerTruthTable.src = TTABLEFORMULTIPLEXER;
  multiplexerTruthTable.className = "diagramSmallScreens";
  observations.appendChild(multiplexerTruthTable);

  // Truth Table for Decoder
  createSecHeader("Truth Table for Decoder", observations);
  const decoderTruthTable = document.createElement("img");
  decoderTruthTable.src = TRUTHTABLEFORDECODER;
  decoderTruthTable.className = "diagramSmallScreens";
  observations.appendChild(decoderTruthTable);

  main.appendChild(observations);

  // Precautions
  const precautions = document.createElement("section");
  createSecHeader("PRECAUTIONS", precautions);
  createList(
    [
      "Ensure all the components were properly connected.",
      "Ensure all the components were in good working condition before using them.",
      "Use a voltage regulator to regulate the voltage to 5V.",
    ],
    precautions
  );
  main.appendChild(precautions);

  // Conclusion
  const conclusion = document.createElement("section");
  createSecHeader("CONCLUSION", conclusion);
  createPara(
    "The experiment successfully demonstrated the construction of combinational circuits for the decoder and multiplexer using ICs 74138 and 74151. Through the implementation of these circuits, various logical functions were effectively realized, showcasing the versatility and importance of these circuits in digital systems. The experiment not only provided hands-on experience with important components but also deepened the understanding of their functionality and applications in digital designs.",
    conclusion
  );
  main.appendChild(conclusion);
};

// 555 TIMER AND SHIFT REGISTER EXPERIMENT

export const display555TimerAndShiftRegisterExperiment = function () {
  const main = reset();

  // Title
  const head = document.createElement("h1");
  head.textContent =
    "Experiment Code Number: CPE405 - 555 Timer and 4-Bit Shift Register";
  main.appendChild(head);

  // Aim
  const aims = document.createElement("section");
  createSecHeader("AIM", aims);
  createList(
    [
      "Building and Implementing a 555 Timer.",
      "Building and Implementing a 4-bit Shift Register.",
      "Understanding the Internal Circuitry of a 555 Timer and a 4-bit Shift Register.",
    ],
    aims
  );
  main.appendChild(aims);

  // Apparatus
  const apparatus = document.createElement("section");
  createSecHeader("APPARATUS", apparatus);
  createList(
    [
      "5V DC Power Source",
      "Breadboard",
      "Oscilloscope",
      "Resistors: 1x 10kΩ, 3x 1kΩ, 5x 330Ω",
      "Capacitors: 1x 47μF, 1x 0.07μF",
      "ICs: 2x 74LS76 ICs, 1x 742504 IC, 1x LM 555 Timer IC",
      "Connecting Wires",
      "Voltage Regulators",
      "LEDs",
    ],
    apparatus
  );
  main.appendChild(apparatus);

  // Theory
  const theory = document.createElement("section");
  createSecHeader("THEORY", theory);

  // 555 Timer IC Theory
  createSecHeader("555 Timer IC", theory);
  createPara(
    "The 555 Timer is an integrated circuit (IC) widely used in various applications, including timing, pulse generation, and oscillator functions. Introduced in 1972 by Signetics (now part of Texas Instruments), the 555 Timer remains popular due to its versatility, ease of use, and low cost. The 555 Timer is widely used in various electronic circuits due to its versatility. Its applications include:",
    theory
  );
  createList(
    [
      "LED flashers",
      "Timers",
      "Pulse generators",
      "Oscillators",
      "Voltage-controlled oscillators",
    ],
    theory
  );

  // 4-Bit Shift Register Theory
  createSecHeader("4-Bit Shift Register", theory);
  createPara(
    "A Shift Register is a sequential logic circuit consisting of flip-flops arranged in a manner where the output of one flip-flop serves as the input to the next. This allows binary numbers to 'shift' through the flip-flops, controlled by clock pulses.",
    theory
  );
  createPara(
    "The specific implementation described here is a 4-bit serial-in, parallel-out shift register. It comprises four flip-flops connected in series, with clock inputs tied to a common line, ensuring they receive clock pulses simultaneously.",
    theory
  );
  createList(
    [
      "The serial-in input allows binary data to be fed into the first flip-flop in the chain.",
      "With each rising edge of the clock pulse, the value of one flip-flop is transferred to the next.",
      "The parallel-out outputs enable all four bits to be read simultaneously.",
      "This type of shift register is widely used as a serial-to-parallel converter and is frequently employed in serial communication systems.",
    ],
    theory
  );
  main.appendChild(theory);

  // Diagrams
  const diagrams = document.createElement("section");
  createSecHeader("DIAGRAMS", diagrams);

  // 555 Timer Diagram
  const timerDiagram = document.createElement("img");
  timerDiagram.src = ic555internal;
  timerDiagram.className = "diagramSmallScreens";
  diagrams.appendChild(timerDiagram);

  // ic 74ls76
  const ic74ls76 = document.createElement("img");
  ic74ls76.src = fig2;
  ic74ls76.className = "diagramSmallScreens";
  diagrams.appendChild(ic74ls76);

  // 4-Bit Shift Register Diagram with Caption
  const shiftRegisterContainer = document.createElement("div");
  shiftRegisterContainer.style.textAlign = "center"; // Center the image and caption

  // Create the image element
  const shiftRegisterDiagram = document.createElement("img");
  shiftRegisterDiagram.src = fourBitShiftRegister;
  shiftRegisterDiagram.className = "diagramSmallScreens";
  shiftRegisterContainer.appendChild(shiftRegisterDiagram);

  // Create the caption element
  const shiftRegisterCaption = document.createElement("p");
  shiftRegisterCaption.textContent = "4-Bit Shift Register Diagram";
  shiftRegisterCaption.style.marginTop = "10px"; // Add some spacing between the image and caption
  shiftRegisterCaption.style.fontStyle = "italic"; // Italicize the caption
  shiftRegisterContainer.appendChild(shiftRegisterCaption);

  // Append the container to the diagrams section
  diagrams.appendChild(shiftRegisterContainer);

  main.appendChild(diagrams);

  // Procedures
  const procedures = document.createElement("section");
  createSecHeader("PROCEDURES", procedures);
  createList(
    [
      "Use a multimeter to perform a continuity test on the breadboard and other components to ensure they are in good working condition.",
      "Loop the breadboard by connecting jumper wires from one part to its opposite end to ensure proper voltage flow through the circuit.",
      "Properly mount the 555 Timer IC, IC 742676, and IC 742576 onto the breadboard.",
      "Connect the output of the clock (Pin 3 of the 555 Timer) to Pins 1 and 6 of the first IC (742576).",
      "Connect Pin 3 of the 555 Timer to Pins 1 and 6 of the second IC (742676).",
      "Connect resistor R1 (10kΩ) between Pins 8 and 7 of the 555 Timer.",
      "Connect resistor R2 (3.3kΩ) between Pins 7 and 6 of the 555 Timer.",
      "Attach a 100μF capacitor to Pin 2 of the 555 Timer.",
      "Connect Pin 4 to Pin 8 of the 555 Timer.",
      "Connect Pin 2 to Pin 6 of the 555 Timer.",
      "Ground Pin 1 of the 555 Timer.",
      "Connect Pin 8 of the 555 Timer to VCC (power supply).",
      "Connect Pins 2 and 7 of the first and second ICs (742676) to the positive terminal of the breadboard to the power supply.",
      "Connect Pin 4 of the first IC (742576) to Pin 13 of the second IC (742576).",
      "Connect Pin 12 of IC 7404 to Pin 16 of the first IC (742576).",
      "Connect Pin 15 to Pin 9 of the first IC (742576).",
      "Connect Pin 14 to Pin 12 of the first IC (742576).",
      "Connect Pins 3 and 8 of both 74LS76 ICs to the positive terminal of the breadboard.",
      "Connect Pin 11 of the first IC (742576) to Pin 4 of the second IC (742576).",
      "Connect Pins 9 and 11 of IC 7404 to Pins 15 and 11 of the second IC (742576), respectively.",
      "Connect Pins 4 and 6 of IC 7404 to Pins 15 and 11 of IC 74LS76, respectively.",
      "Connect Pin 15 to Pin 9 of the second IC (742576).",
      "Connect Pin 14 to Pin 12 of the second IC (742576).",
      "Ground Pins 13 of both ICs (742576).",
      "Connect Pins 5 of both ICs (742576) to VCC.",
      "Connect LEDs to Pins 4, 6, 8, and 10 of IC 7404.",
      "Connect the voltage regulator to regulate the voltage to 5V.",
      "Test and observe the circuit.",
    ],
    procedures
  );
  main.appendChild(procedures);

  // Observations
  const observations = document.createElement("section");
  createSecHeader("OBSERVATIONS", observations);
  createPara(
    "The 555 Timer generated stable clock pulses, which were successfully used to drive the 4-bit shift register. The shift register correctly shifted the input data through its flip-flops, and the parallel outputs matched the expected results.",
    observations
  );

  // Add the table to the Observations section
  const tableSection = document.createElement("section");
  createSecHeader("Shift Register Output States", tableSection);

  // Data for the table
  const tableData = [
    { Step: 1, Qa: 1, Qb: 0, Qc: 0, Qd: 0 },
    { Step: 2, Qa: 0, Qb: 1, Qc: 0, Qd: 0 },
    { Step: 3, Qa: 0, Qb: 0, Qc: 1, Qd: 0 },
    { Step: 4, Qa: 0, Qb: 0, Qc: 0, Qd: 1 },
  ];

  // Function to create the table
  function createTable(data) {
    const table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    table.style.width = "100%";
    table.style.border = "1px solid black";

    // Create the table header
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const headers = Object.keys(data[0]);

    headers.forEach((headerText) => {
      const th = document.createElement("th");
      th.textContent = headerText;
      th.style.border = "1px solid black";
      th.style.padding = "8px";
      headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create the table body
    const tbody = document.createElement("tbody");

    data.forEach((rowData) => {
      const row = document.createElement("tr");

      Object.values(rowData).forEach((cellData) => {
        const td = document.createElement("td");
        td.textContent = cellData;
        td.style.border = "1px solid black";
        td.style.padding = "8px";
        row.appendChild(td);
      });

      tbody.appendChild(row);
    });

    table.appendChild(tbody);

    return table;
  }

  // Append the table to the table section
  tableSection.appendChild(createTable(tableData));
  observations.appendChild(tableSection);

  // Append the observations section to the main element
  main.appendChild(observations);
  // Precautions
  const precautions = document.createElement("section");
  createSecHeader("PRECAUTIONS", precautions);
  createList(
    [
      "Ensured all components were properly connected.",
      "Verified all components were in good working condition before use.",
      "Used a voltage regulator to maintain a stable voltage of 5 volts.",
    ],
    precautions
  );
  main.appendChild(precautions);

  // Conclusion
  const conclusion = document.createElement("section");
  createSecHeader("CONCLUSION", conclusion);
  createPara(
    "In conclusion, the integration of the 555 Timer and the 4-bit shift register yielded insightful results. The synchronized operation between these components demonstrated their compatibility and potential for various applications, such as timing circuits and sequential logic systems. Further experimentation and optimization could lead to enhanced functionality and performance.",
    conclusion
  );
  main.appendChild(conclusion);

  // References
  const references = document.createElement("section");
  createSecHeader("REFERENCES", references);
  createList(
    [
      "400L Laboratory Manual, Computer Engineering Programme, University of Benin.",
      "Practical Electronics for Inventors by Paul Scherz and Simon Monk.",
      "Digital Design: Principles and Practices by John F. Wakerly.",
      "Digital Systems: Principles and Applications by Gregory L. Moss.",
    ],
    references
  );
  main.appendChild(references);
};

// JK FLIP FLOP EXPERIMENT

export const displayJKFlipFlopExperiment = function () {
  const main = reset();

  // Title
  const head = document.createElement("h1");
  head.textContent =
    "Experiment Code Number: CPE406 - JK Negative Edge Triggered Flip Flop";
  main.appendChild(head);

  // Aim
  const aims = document.createElement("section");
  createSecHeader("AIM", aims);
  createList(
    [
      "To examine the concept of the J-K Negative Edge Triggered Flip-Flop.",
      "To practically implement the J-K Negative Edge Triggered Flip-Flop.",
    ],
    aims
  );
  main.appendChild(aims);

  // Apparatus
  const apparatus = document.createElement("section");
  createSecHeader("APPARATUS", apparatus);
  createList(
    [
      "Breadboard",
      "IC 74LS76",
      "LEDs",
      "Connecting wires",
      "IC 7404",
      "555 Timer",
      "Voltage Regulator",
      "5V DC power source",
    ],
    apparatus
  );
  main.appendChild(apparatus);

  // Theory
  const theory = document.createElement("section");
  createSecHeader("THEORY", theory);

  // JK Flip Flop Theory
  createSecHeader("JK Flip Flop", theory);
  createPara(
    "The 'JK flip flop,' also known as the Jack Kilby flip flop, is a sequential logic circuit designed by Jack Kilby during his tenure at Texas Instruments in the 1950s. This flip flop serves the purpose of storing and manipulating binary information within digital systems.",
    theory
  );
  createPara(
    "The J-K Negative Edge Triggered Flip-Flop is a type of flip-flop that changes its state on the falling edge (negative edge) of the clock signal. It is widely used in digital circuits for its versatility and ability to perform multiple functions.",
    theory
  );

  // Basic Structure
  createSecHeader(
    "Basic Structure of the J-K Negative Edge Triggered Flip-Flop",
    theory
  );
  createPara(
    "The J-K flip-flop has two inputs, labeled J and K, and a clock input (CLK). It also has two outputs, Q and Q' (the complement of Q). The behavior of the flip-flop is controlled by the combination of the J and K inputs as well as the clock signal.",
    theory
  );

  // Basic Functionality
  createSecHeader("Basic Functionality of JK Flip Flop", theory);
  createPara(
    "JK flip flop operates on sequential logic principle, where the output is dependent not only on the current inputs but also on the previous state. There are two inputs in JK Flip Flop Set and Reset denoted by J and K. It also has two outputs Output and complement of Output denoted by Q and Q̅. The internal circuitry of a JK Flip Flop consists of a combination of logic gates, usually NAND gates.",
    theory
  );

  // Operation Modes
  createSecHeader("Operation Modes of JK Flip Flop", theory);
  createList(
    [
      "Edge-Triggered: In this mode, flip flop responds to a signal transition occurring at a clock pulse. It is commonly used in synchronous systems, where the output changes only when the clock signal changes from low to high or high to low.",
      "Level-Triggered: Unlike the edge-triggered mode, the level-triggered JK Flip Flop responds to the input values continuously as long as the clock signal is held at a specific level (high or low).",
    ],
    theory
  );

  // Applications
  createSecHeader("Applications of JK Flip Flop", theory);
  createList(
    ["Counters", "Shift Registers", "Memory Units", "Frequency Division"],
    theory
  );

  // Characteristic Equation
  createSecHeader("Characteristic Equation of JK Flip Flop", theory);
  createPara(
    "The characteristic equation of JK Flip Flop represents the relationship between the current state (Q(t)), the inputs (J and K), and the next state (Q(t+1)). Here is the characteristic equation of JK Flip Flop:",
    theory
  );
  createPara("Q(t+1) = JQ̅(t) + QK̅(t)", theory);
  createPara(
    "In this equation, the term JQ̅(t) represents the effect of the J input when it is in the set formation (J=1), and K̅(t) represents the effect of the K input when it is reset (K=0). The term QK̅(t) represents the effect of the K input when it is in the set form (K=1), and Q̅(t) represents the complement of the current state.",
    theory
  );
  main.appendChild(theory);

  // Diagrams
  const diagrams = document.createElement("section");
  createSecHeader("DIAGRAMS", diagrams);

  // JK Flip Flop Diagrams
  const hexInv = document.createElement("img");
  hexInv.src = fig3;
  hexInv.className = "diagramSmallScreens";
  diagrams.appendChild(hexInv);

  const jkFlipFlopDiagram = document.createElement("img");
  jkFlipFlopDiagram.src = fig2;
  jkFlipFlopDiagram.className = "diagramSmallScreens";
  diagrams.appendChild(jkFlipFlopDiagram);

  // 555 Timer Diagram
  const timerDiagram = document.createElement("img");
  timerDiagram.src = fig4;
  timerDiagram.className = "diagramSmallScreens";
  diagrams.appendChild(timerDiagram);

  main.appendChild(diagrams);

  // Procedures
  const procedures = document.createElement("section");
  createSecHeader("PROCEDURES", procedures);
  createList(
    [
      "With a multimeter, perform a continuity test on the breadboard and other components to ensure they are in good working condition.",
      "Loop the breadboard by connecting jumper wires from one rail to its opposite rail. This ensures voltage flow through the circuit.",
      "Properly mount the IC 74LS76, IC 7404, and 555 timer on the breadboard.",
      "Connect pin 1 of the 555 timer to ground.",
      "Connect pin 8 of the 555 timer to VCC.",
      "Connect pin 4 of the 555 timer to pin 8.",
      "Connect pin 2 of the 555 timer to pin 6.",
      "Connect an LED to pin 3 of the 555 timer.",
      "Connect a resistor R2 (330 Ω) between pins 7 and 6 of the 555 timer.",
      "Connect a capacitor (100 µF) to pin 2 of the 555 timer.",
      "Connect a resistor R1 (4.7 kΩ) between pins 8 and 7 of the 555 timer.",
      "Using 1 kΩ resistors, connect pins 2, 4, 16, and 3 of IC 74LS76 to the positive terminal of the breadboard. These pins represent PRE, J, K, and CLR, respectively.",
      "Connect the output pin of the 555 timer (pin 3) to the clock (CLK) input of IC 74LS76, which is pin 1.",
      "Connect pin 5 of IC 74LS76 to VCC.",
      "Connect pin 13 of IC 74LS76 to ground.",
      "Pin 15 of IC 74LS76 represents the output Q. Connect this pin to pin 13 of IC 7404.",
      "Pin 14 of IC 74LS76 represents the output Q'. Connect this pin to pin 12 of IC 7404.",
      "Connect an LED to pin 11 of IC 7404. This will serve as one of the outputs.",
      "Connect an LED to pin 10 of IC 7404. This will serve as another output.",
      "Connect both LEDs to the positive terminal of the breadboard using 330 Ω resistors.",
      "Connect a voltage regulator to regulate the voltage to 5V.",
      "Test the circuit and record your observations.",
    ],
    procedures
  );
  main.appendChild(procedures);

  // Observations
  const observations = document.createElement("section");
  createSecHeader("OBSERVATIONS", observations);
  createPara(
    "The J-K Negative Edge Triggered Flip-Flop transitioned correctly based on its characteristic table at the negative edge of the clock pulse. Outputs remained stable between clock pulses and changed at the negative edge, confirming the edge-triggered behavior.",
    observations
  );

  const observationJK = document.createElement("img");
  observationJK.src = Cpe406observation;
  observationJK.className = "diagramSmallScreens";
  observations.appendChild(observationJK);
  main.appendChild(observations);

  // Precautions
  const precautions = document.createElement("section");
  createSecHeader("PRECAUTIONS", precautions);
  createList(
    [
      "Ensured all the components were properly connected.",
      "Ensured all the components were in good working condition before using them.",
      "Ensured a voltage regulator was used to regulate the voltage to 5V.",
    ],
    precautions
  );
  main.appendChild(precautions);

  // Conclusion
  const conclusion = document.createElement("section");
  createSecHeader("CONCLUSION", conclusion);
  createPara(
    "In the experiment with the J-K negative edge-triggered flip-flop, the flip-flop was observed to transition correctly based on its characteristic table at the negative edge of the clock pulse. Outputs remained stable between clock pulses and changed at the negative edge, confirming the edge-triggered behavior. Different output combinations produced the expected results. This confirms that the flip-flop is suitable for applications requiring reliable state storage, synchronous timing, and logging. Overall, the J-K negative edge-triggered flip-flop operates reliably and is useful in various digital electronics applications.",
    conclusion
  );
  main.appendChild(conclusion);

  // References
  const references = document.createElement("section");
  createSecHeader("REFERENCES", references);
  createList(
    [
      "400L Laboratory Manual, Computer Engineering Programme, University of Benin.",
      "Digital Design by M. Morris Mano.",
      "Fundamentals of Digital Logic with Verilog Design by Stephen Brown.",
      "Digital Fundamentals by Thomas L. Floyd.",
      "Digital Systems by Ronald Tocci.",
    ],
    references
  );
  main.appendChild(references);
};

// BLOCK TRANSFER EXPERIMENT

export const displayBlockTransferExperiment = function () {
  const main = reset();

  // Title
  const head = document.createElement("h1");
  head.textContent =
    "Experiment Code Number: CPE413 - 8085 and Z80 Block Transfer Programs";
  main.appendChild(head);

  // Aim
  const aims = document.createElement("section");
  createSecHeader("AIM", aims);
  createList(
    [
      "To examine the concept of the 8085 and Z80 microprocessors.",
      "To implement machine code programs.",
    ],
    aims
  );
  main.appendChild(aims);

  // Apparatus
  const apparatus = document.createElement("section");
  createSecHeader("APPARATUS", apparatus);
  createList(
    [
      "Z80 Microprocessor",
      "8085 Microprocessor",
      "Microprocessor Programmer",
      "Power Supply",
      "Computer Device (Laptop or Desktop)",
      "Connectors and Cables",
    ],
    apparatus
  );
  main.appendChild(apparatus);

  // Theory
  const theory = document.createElement("section");
  createSecHeader("THEORY", theory);

  // 8085 Microprocessor Block Transfer Program
  createSecHeader("8085 Microprocessor Block Transfer Program", theory);
  createPara(
    "The 8085 is an 8-bit microprocessor introduced by Intel in 1976. It has a relatively simple instruction set, and block transfers need to be done using basic instructions and loops.",
    theory
  );
  createSecHeader("Key Instructions for Block Transfer", theory);
  createList(
    [
      "MOV: Moves data between registers or between registers and memory.",
      "MVI: Used to move immediate data to a register or memory.",
      "LXI: Load a 16-bit immediate data into a register pair.",
      "LDAX: Load the accumulator with data from a memory location pointed by a register pair.",
      "STAX: Store the accumulator content into memory at an address pointed by a register pair.",
    ],
    theory
  );

  // Z80 Microprocessor Block Transfer Program
  createSecHeader("Z80 Microprocessor Block Transfer Program", theory);
  createPara(
    "The Z80 microprocessor, introduced by Zilog in 1976, offers more advanced instructions for block transfers, making it more efficient than the 8085.",
    theory
  );
  createSecHeader("Key Instructions for Block Transfer", theory);
  createList(
    [
      "LD: Load data between registers or between a register and memory.",
      "LDI/LDIR: Load increment, or load increment and repeat (automatically increments source and destination pointers).",
      "LDDR: Load decrement and repeat (automatically decrements source and destination pointers).",
    ],
    theory
  );

  // Comparative Analysis
  createSecHeader(
    "Comparative Analysis Between 8085 and Z80 Microprocessors",
    theory
  );
  createList(
    [
      "Instruction Set: The 8085 uses basic instructions combined in loops for block transfer, while the Z80 offers specialized instructions for efficient block transfers.",
      "Efficiency: The 8085 requires multiple instructions and manual loop control, making the code longer and less efficient. The Z80's LDIR performs block transfers in a single instruction, making the code more concise and efficient.",
      "Programming Complexity: The 8085 requires more effort and a deeper understanding of loop structures for block transfers. The Z80 simplifies block transfers with dedicated instructions, making the process more user-friendly.",
      "Performance: The 8085's method involves multiple fetch-execute cycles for each byte transferred, making it slower. The Z80 significantly reduces the number of cycles needed per byte transferred, enhancing overall performance.",
    ],
    theory
  );
  main.appendChild(theory);

  // Diagrams
  const diagrams = document.createElement("section");
  createSecHeader("DIAGRAMS", diagrams);

  // 8085 Block Transfer Diagram
  const blockTransfer8085Diagram = document.createElement("img");
  blockTransfer8085Diagram.src = arch8085;
  blockTransfer8085Diagram.className = "diagramSmallScreens";
  diagrams.appendChild(blockTransfer8085Diagram);

  const pin8085 = document.createElement("img");
  pin8085.src = pinDia8085;
  pin8085.className = "diagramSmallScreens";
  diagrams.appendChild(pin8085);

  // Z80 Block Transfer Diagram
  const blockTransferZ80Diagram = document.createElement("img");
  blockTransferZ80Diagram.src = z80MicroprocessorDiagram;
  blockTransferZ80Diagram.className = "diagramSmallScreens";
  diagrams.appendChild(blockTransferZ80Diagram);

  main.appendChild(diagrams);

  // Procedures
  const procedures = document.createElement("section");
  createSecHeader("PROCEDURES", procedures);
  createList(
    [
      "Enter the following 16 bytes into successive memory locations starting at RAM address 2000H: 2000H: 01 02 03 04 05 06 07 08, 2008H: 09 0A 0B 0C 0D 0E 0F 10.",
      "Write the Z80 assembly language program to transfer the 16 bytes from memory block 2000H to another block starting at address 3000H. Enter the code in the assembler window of the Z80 Simulator.",
      "Simulate the program step-by-step and record the changes in internal registers and memory.",
      "Simulate the program using the fast run mode and record the final internal register and memory contents.",
      "Write and enter Z80 Program 2 in the assembler window.",
      "Perform a step-by-step simulation for Z80 Program 2 and record the changes in internal registers and memory.",
      "Simulate Z80 Program 2 in fast run mode and record the final internal register and memory contents.",
      "Rewrite Z80 Program 1 for the 8085 microprocessor and simulate the program: Perform a step-by-step simulation, recording internal register and memory changes. Perform a fast run simulation, recording the final register and memory contents.",
    ],
    procedures
  );

  // Z80 Program 1
  createSecHeader("Z80 PROGRAM 1 (Block Transfer Using Loop)", procedures);
  const z80Program1 = document.createElement("pre");
  z80Program1.textContent = `
LD H, 10H         ; Initialize counter in H register (16 bytes)
LD BC, 2000H      ; Load source address into BC register pair
LD DE, 3000H      ; Load destination address into DE register pair
LOOP: LD A, (BC)  ; Load value from source address into A register
LD (DE), A        ; Store value in destination address
INC BC            ; Increment source address
INC DE            ; Increment destination address
DEC H             ; Decrement counter
JR NZ, LOOP       ; Jump back to LOOP if counter is not zero
HALT              ; Stop execution
`;
  procedures.appendChild(z80Program1);

  // Z80 Program 2
  createSecHeader("Z80 PROGRAM 2 (Block Transfer Using LDIR)", procedures);
  const z80Program2 = document.createElement("pre");
  z80Program2.textContent = `
LD HL, 2000H      ; Load source address into HL register pair
LD DE, 3000H      ; Load destination address into DE register pair
LD BC, 10H        ; Load byte count (16 bytes) into BC register pair
LDIR              ; Perform block transfer and repeat until BC = 0
HALT              ; Stop execution
`;
  procedures.appendChild(z80Program2);
  main.appendChild(procedures);

  // Observations
  const observations = document.createElement("section");
  createSecHeader("OBSERVATIONS", observations);
  createPara(
    "The Z80 microprocessor uses the LD, DEC, INC, and JR instructions for block transfer, making it highly efficient for moving blocks of data from one memory location to another. The Z80 employs indirect addressing modes for block transfer, allowing flexibility and precision in handling data movement. Implementing a block transfer program simplifies the process, making the program concise and easier to understand. Using assembly instructions and translating them into machine code enhances understanding of the microprocessor’s internal workings.",
    observations
  );
  main.appendChild(observations);

  // Precautions
  const precautions = document.createElement("section");
  createSecHeader("PRECAUTIONS", precautions);
  createList(
    [
      "Ensured the appropriate microprocessor programmer was used when implementing the experiment.",
      "Verified that the data from the source address block was accurately copied to the destination address block by cross-checking the assembly instructions.",
      "Confirmed that the Z80 microprocessor and any interfacing peripherals were correctly connected and functioning.",
      "Ensured the registers were properly initialized before starting the block transfer.",
    ],
    precautions
  );
  main.appendChild(precautions);

  // Conclusion
  const conclusion = document.createElement("section");
  createSecHeader("CONCLUSION", conclusion);
  createPara(
    "The experiment successfully demonstrated data transfer between memory blocks using the Z80 microprocessor. It showcased the efficient block transfer capabilities of the Z80 and provided insights into the functioning of microprocessors through practical implementation.",
    conclusion
  );
  main.appendChild(conclusion);

  // References
  const references = document.createElement("section");
  createSecHeader("REFERENCES", references);
  createList(
    [
      "Laboratory Manual for CPE 413, University of Benin.",
      "Zilog Z80 Microprocessor Design Documentation.",
      "Microprocessor Systems and Programming, 2nd Edition.",
    ],
    references
  );
  main.appendChild(references);
};
