import {renderHeader} from './modules/header';
import {renderFooter} from './modules/footer';
import '../CSS/pre.css';
import { displayStarted, displayWW201, displaySM201, displayBF201, displayHS201, displayMS201, displayAS201, displayFS201} from './modules/preDisplay';

const hme = "./index.html";
const rpt = "./report/report.html";
const abt = "./about/about.html";

const body = document.querySelector('body');
let reports = [
    {
        title: 'Getting Started',
        func: displayStarted
    },
    {
        title: 'Introduction to WoodWork {WW201}',
        func: displayWW201
    },
    {
        title: 'Introduction to Sheet Metal Workshop {SM201}',
        func: displaySM201
    },
    {
        title: 'Introduction to Fitting Shop {BF201}',
        func: displayBF201
    },
    {
        title: 'Introduction to Welding Shop Practice {HS201}',
        func: displayHS201
    },
    {
        title: 'Introduction to the Lathe and Machining Operations {MS201}',
        func: displayMS201
    },
    {
        title: 'The Internal Combustion Engine {AS201}',
        func: displayAS201
    },
    {
        title: 'Foundry Shop {FS201}',
        func: displayFS201
    }
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