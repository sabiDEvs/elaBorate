import '../CSS/eee.css';
import {renderHeader} from './modules/header';
import {renderFooter} from './modules/footer';
import '../CSS/ai.css';
import { displayStarted, displayEE201, displayEE203, displayEE202, displayEE207, displayEE205, displayEE206, displayEE208 } from './modules/eeeDisplay';
import {createGemini, createChatGpt, displayAI} from './modules/ai';
import favLogo from '../RESOURCES/images/footer-logo.png'
const faviconAny = document.querySelector('link[sizes="any"]');
const faviconSvg = document.querySelector('link[type="image/svg+xml"]');   
faviconAny.href = favLogo;
faviconSvg.href = favLogo;

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
        title: 'Measurement of Unknown Resistance {EE201}',
        func: displayEE201
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
    {
        title: 'D.C Generator {EE 208}',
        func: displayEE208
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
heading.textContent = 'EEE ELA TOPICS';
aside.appendChild(heading);
//create div to store reports list
const reportDiv = document.createElement('div');
//create list of report topic
const reportList = document.createElement('ul');
let list = [];
for(let i = 0; i < reports.length; i++){
    list[i] = document.createElement('li');
    list[i].textContent = `${reports[i].title}`;
    list[i].classList.add('menu-item');
    
    // Set Getting Started as default active item
    if (reports[i].title === 'Getting Started') {
        list[i].classList.add('active');
        // Set default hash if none exists
        if (!window.location.hash) {
            window.location.hash = 'getting-started';
        }
    }
    
    list[i].addEventListener('click', () => {
        const normalizedTitle = reports[i].title
            .replace(/\s+/g, '-')
            .replace(/[{}]/g, '')
            .toLowerCase();
        window.location.hash = normalizedTitle;
        // Remove active class from all items
        list.forEach(item => item.classList.remove('active'));
        // Add active class to clicked item
        list[i].classList.add('active');
    });
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

function loadFromHash() {
    const hash = window.location.hash.slice(1) || 'getting-started'; // Default to getting-started
    
    const normalizedHash = decodeURIComponent(hash)
        .replace(/-/g, ' ')
        .toLowerCase();

    const report = reports.find(r => 
        r.title.replace(/[{}]/g, '').toLowerCase() === normalizedHash
    );

    if (report) {
        report.func();
        const reportIndex = reports.indexOf(report);
        if (reportIndex !== -1) {
            list.forEach(item => item.classList.remove('active'));
            list[reportIndex].classList.add('active');
        }
    } else {
        displayStarted();
        list.forEach(item => item.classList.remove('active'));
        list[0].classList.add('active'); // Getting Started is first item
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    loadFromHash();
});

window.addEventListener('hashchange', loadFromHash);
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        document.querySelector('aside').style.display = 'block';
    } else {
        document.querySelector('aside').style.display = 'none';
    }
});

displayAI(body);
createGemini(body);
createChatGpt(body);