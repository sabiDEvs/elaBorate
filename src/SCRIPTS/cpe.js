import "../CSS/cpe.css";
import { renderHeader } from "./modules/header";
import { renderFooter } from "./modules/footer";
import {
  displayStarted,
  displayComparators,
  displayLogicGatesExperiment,
  display3x8DecoderExperiment,
  displaySequentialCircuits,
  displayAddersAndSubtractors,
  displaySevenSegmentDecoder,
  displayDecoderAndMultiplexerExperiment,
  display555TimerAndShiftRegisterExperiment,
  displayJKFlipFlopExperiment,
  displayBlockTransferExperiment,
} from "./modules/cpeDisplay";
import favLogo from "../RESOURCES/images/footer-logo.png";
const faviconAny = document.querySelector('link[sizes="any"]');
const faviconSvg = document.querySelector('link[type="image/svg+xml"]');
faviconAny.href = favLogo;
faviconSvg.href = favLogo;

const hme = "../../index.html";
const rpt = "../../report/report.html";
const abt = "../../about/about.html";

const body = document.querySelector("body");

let reports = [
  {
    title: "Getting Started",
    func: displayStarted,
  },
  {
    title: "EXPERIMENT 3.9: T0 Implement 4-bit and 8-bit Comparators",
    func: displayComparators,
  },
  {
    title: "EXPERIMENT 303: Verify Basic Logic Gates",
    func: displayLogicGatesExperiment,
  },
  {
    title: "EXPERIMENT 307: 3x8 Decoder",
    func: display3x8DecoderExperiment,
  },

  // 400l
  {
    title: "EXPERIMENT 401: Adders and Subtractors",
    func: displayAddersAndSubtractors,
  },

  {
    title: "EXPERIMENT 402: Seven Segment Display Decoder",
    func: displaySevenSegmentDecoder,
  },
  {
    title: "EXPERIMENT 403: Decoder and Multiplexer",
    func: displayDecoderAndMultiplexerExperiment,
  },
  {
    title: "EXPERIMENT 404: Sequential Circuits",
    func: displaySequentialCircuits,
  },
  {
    title: "EXPERIMENT 405: 555 Timer and Shift Register",
    func: display555TimerAndShiftRegisterExperiment,
  },
  {
    title: "EXPERIMENT 406: JK Negative Edge Triggered Flip Flop",
    func: displayJKFlipFlopExperiment,
  },
  {
    title: "EXPERIMENT 413: 8085 AND Z80 Block Transfer Programs",
    func: displayBlockTransferExperiment,
  },
];

//display  header
renderHeader(body, [hme, rpt, abt]);

//create aside side menu
const aside = document.createElement("aside");

//create button to close side menu
const close = document.createElement("div");
close.textContent = "x";
close.addEventListener("click", () => {
  document.querySelector("aside").style.display = "none";
});
close.id = "closeButton";
aside.appendChild(close);

//create aside header
const heading = document.createElement("h3");
heading.textContent = "CPE ELA TOPICS";
aside.appendChild(heading);

//create div to store reports list
const reportDiv = document.createElement("div");

//create list of report topic
const reportList = document.createElement("ul");
let list = [];
for (let i = 0; i < reports.length; i++) {
  list[i] = document.createElement("li");
  list[i].textContent = `${reports[i].title}`;
  list[i].addEventListener("click", reports[i].func);
  reportList.appendChild(list[i]);
}
reportDiv.appendChild(reportList);
aside.appendChild(reportDiv);
body.appendChild(aside);

//create main div where content would be generated to
const main = document.createElement("main");
body.appendChild(main);

// displayStarted();
renderFooter(body, [hme, rpt, abt]);
