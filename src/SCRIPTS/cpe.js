import "../CSS/cpe.css";
import { renderHeader } from "./modules/header";
import { renderFooter } from "./modules/footer";
import {
  displayStarted,
  displayComparators,
  displayLogicGatesExperiment,
  displaySequentialCircuits,
  displayAddersAndSubtractors,
} from "./modules/cpeDisplay";

const hme = "./index.html";
const rpt = "./report/report.html";
const abt = "./about/about.html";

const body = document.querySelector("body");

let reports = [
  {
    title: "Getting Started",
    func: displayStarted,
  },
  {
    title: "EXPERIMENT 3.9",
    func: displayComparators,
  },
  {
    title: "EXPERIMENT 303",
    func: displayLogicGatesExperiment,
  },

  // 400l
  {
    title: "EXPERIMENT 401",
    func: displayAddersAndSubtractors,
  },
  {
    title: "EXPERIMENT 404",
    func: displaySequentialCircuits,
  },
];

//display  header
renderHeader(body, [hme, rpt, abt]);

//create aside side menu
const aside = document.createElement("aside");

//create button to close side menu
// const close = document.createElement("div");
// close.textContent = "close";
// close.addEventListener("click", () => {
//   document.querySelector("aside").style.display = "none";
// });
// close.id = "closeButton";
// aside.appendChild(close);

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
