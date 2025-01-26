import '../CSS/pre.css';
import {renderHeader} from './modules/header';
import {renderFooter} from './modules/footer';
import { displayStarted, displayEE203, displayEE202, displayEE207, displayEE205, displayEE206, } from './modules/eeeDisplay';
const body = document.querySelector('body');

const hme = "../../index.html";
const rpt = "../../report/report.html";
const abt = "../../about/about.html";

let reports = [
    {
        title: 'Getting Started',
        func: displayStarted
    },
    {
        title: 'Measurement of Capacitance {EE202}',
        func: displayEE202
    },
    {
        title: 'Measurement of Inductance {EE203}',
        func: displayEE203
    },
    {
        title: 'The Oscilloscope {EE 205}',
        func: displayEE205
    },
    {
        title: 'Single Phase Transformer {EE206}',
        func: displayEE206
    },
    {
        title: 'D.C Generator {EE 205}',
        func: displayEE207
    },
    

    
];
//display  header
renderHeader(body, [hme, rpt, abt]);
//create aside side menu
const aside = document.createElement('aside');
//create button to close side menu
const close = document.createElement('div');
close.textContent = 'x';
close.addEventListener('click', () => {
    document.querySelector('aside').style.display = 'none';
});
close.id = 'closeButton';
aside.appendChild(close);
//create aside header
const heading = document.createElement('h3');
heading.textContent = 'PRE ELA TOPICS';
aside.appendChild(heading);
//create div to store reports list
const reportDiv = document.createElement('div');
//create list of report topic
const reportList = document.createElement('ul');
let list = [];
for(let i = 0; i < reports.length; i++){
    list[i] = document.createElement('li');
    list[i].textContent = `${reports[i].title}`;
    list[i].addEventListener('click', reports[i].func);
    reportList.appendChild(list[i]);
}
reportDiv.appendChild(reportList);
aside.appendChild(reportDiv);
body.appendChild(aside);
//create main div where content would be generated to
const main = document.createElement('main');
body.appendChild(main);
displayStarted();
renderFooter(body, [hme, rpt, abt]);