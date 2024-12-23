import '../CSS/pre.css';
import {renderHeader} from './modules/header';
import {renderFooter} from './modules/footer';
import { displayStarted, displayCPE402} from './modules/cpe400Display';
const body = document.querySelector('body');
let reports = [
    {
        title: 'Getting Started',
        func: displayStarted
    },
    
    {
        title: 'SEVEN SEGMENT DISPLAY DECODER{CPE 402}',
        func: displayCPE402
    },
];
//display  header
renderHeader(body);
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
heading.textContent = 'CPE 400 LEVEL ELA TOPICS';
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
renderFooter(body);