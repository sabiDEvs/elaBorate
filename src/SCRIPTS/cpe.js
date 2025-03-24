import { renderHeader } from "./modules/header";
import { renderFooter } from "./modules/footer";
import "../CSS/cpe.css";
import "../CSS/ai.css";
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
import { createGemini, createChatGpt, displayAI } from "./modules/ai";

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
    title: "Implement 4-bit and 8-bit Comparators {EXP. 3.9}",
    func: displayComparators,
  },
  {
    title: "Verify Basic Logic Gates {EXP. 303}",
    func: displayLogicGatesExperiment,
  },
  {
    title: "3x8 Decoder {EXP. 307}",
    func: display3x8DecoderExperiment,
  },

  // 400l
  {
    title: "Adders and Subtractors {EXP. 401}",
    func: displayAddersAndSubtractors,
  },
  {
    title: "Seven Segment Display Decoder {EXP. 402}",
    func: displaySevenSegmentDecoder,
  },
  {
    title: "Decoder and Multiplexer {EXP. 403}",
    func: displayDecoderAndMultiplexerExperiment,
  },
  {
    title: "Sequential Circuits {EXP. 404}",
    func: displaySequentialCircuits,
  },
  {
    title: "555 Timer and Shift Register {EXP. 405}",
    func: display555TimerAndShiftRegisterExperiment,
  },
  {
    title: "JK Negative Edge Triggered Flip Flop {EXP. 406}",
    func: displayJKFlipFlopExperiment,
  },
  {
    title: "8085 AND Z80 Block Transfer Programs {EXP. 413}",
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
  list[i].classList.add("menu-item");

  // Set Getting Started as default active item
  if (reports[i].title === "Getting Started") {
    list[i].classList.add("active");
    // Set default hash if none exists
    if (!window.location.hash) {
      window.location.hash = "getting-started";
    }
  }

  list[i].addEventListener("click", () => {
    const normalizedTitle = reports[i].title
      .replace(/\s+/g, "-")
      .replace(/[{}]/g, "")
      .toLowerCase();
    window.location.hash = normalizedTitle;
    // Remove active class from all items
    list.forEach((item) => item.classList.remove("active"));
    // Add active class to clicked item
    list[i].classList.add("active");
  });
  reportList.appendChild(list[i]);
}
reportDiv.appendChild(reportList);
aside.appendChild(reportDiv);
body.appendChild(aside);
//create main div where content would be generated to
const main = document.createElement("main");
body.appendChild(main);
displayStarted();
renderFooter(body, [hme, rpt, abt]);

// Function to normalize titles for hash comparison
function normalizeTitle(title) {
  return title
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[{}]/g, "") // Remove curly braces
    .toLowerCase(); // Convert to lowercase
}

// Function to load content based on hash
function loadFromHash() {
  const hash = window.location.hash.slice(1) || "getting-started"; // Default to getting-started

  const normalizedHash = normalizeTitle(hash);

  const report = reports.find(
    (r) => normalizeTitle(r.title) === normalizedHash
  );

  if (report) {
    report.func();
    const reportIndex = reports.indexOf(report);
    if (reportIndex !== -1) {
      list.forEach((item) => item.classList.remove("active"));
      list[reportIndex].classList.add("active");
    }
  } else {
    displayStarted();
    list.forEach((item) => item.classList.remove("active"));
    list[0].classList.add("active"); // Getting Started is first item
  }
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  loadFromHash();
});

window.addEventListener("hashchange", loadFromHash);
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    document.querySelector("aside").style.display = "block";
  } else {
    document.querySelector("aside").style.display = "none";
  }
});

// Update the click event listener for report items
for (let i = 0; i < reports.length; i++) {
  list[i].addEventListener("click", () => {
    const normalizedTitle = normalizeTitle(reports[i].title);
    window.location.hash = normalizedTitle;
    // Remove active class from all items
    list.forEach((item) => item.classList.remove("active"));
    // Add active class to clicked item
    list[i].classList.add("active");
  });
}

displayAI(body);
createGemini(body);
createChatGpt(body);
