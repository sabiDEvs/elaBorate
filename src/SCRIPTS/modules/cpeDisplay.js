import pic1 from "../../RESOURCES/images/4bitmag.jpeg";
import pic2 from "../../RESOURCES/images/8bitmagcom.jpeg";
import pic3 from "../../RESOURCES/images/Digital-comparator-block-diagram.jpg";
import pic4 from "../../RESOURCES/images/ic7485.png";
import pic5 from "../../RESOURCES/images/magcomtable.jpeg";

const reset = () => {
  window.scrollTo(0, 0);
  const main = document.querySelector("main");
  main.innerHTML = "";
  return main;
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
  alert("Who dey breathe");
  const main = document.querySelector("main");
  main.innerHTML = "";
};

// Comparators

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
};

// Logic Gates Experiment

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

  return main;
};

// Sequential circuits

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
  const placeholderText = document.createElement("p");
  placeholderText.textContent = "Diagrams to be added here.";
  diagrams.appendChild(placeholderText);
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