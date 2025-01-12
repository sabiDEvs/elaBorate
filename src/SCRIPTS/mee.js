import {renderHeader} from './modules/header';
import {renderFooter} from './modules/footer';
import '../CSS/mee.css';
import { displaySimplePendulum, displayShearForceExperiment, displayCamFollower, displayConicalPendulum, displayFlywheel, displayGears} from './modules/meeDisplay';

const hme = "../../index.html";
const rpt = "../../report/report.html";
const abt = "../../about/about.html";

const body = document.querySelector('body');
let reports = [
    {
        title: 'Simple Pendulum {AM226a}',
        func: displaySimplePendulum
    },
    {
        title: 'Shear Force in a Beam {SM212}',
        func: displayShearForceExperiment
    },
    {
        title: 'Radial Cam and Follower {AM221}',
        func: displayCamFollower
    },
    {
        title: 'The Conical Pendulum {AM225}',
        func: displayConicalPendulum
    },
    {
        title: 'Flywheels and Falling Weight {AM229}',
        func: displayFlywheel
    },
    {
        title: 'Automat Spur Gear Models[A1 - A5] {AM231}',
        func: displayGears
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
heading.textContent = 'MEE ELA TOPICS';
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
displaySimplePendulum();
renderFooter(body, [hme, rpt, abt]);