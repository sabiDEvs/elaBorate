import {renderHeader} from './modules/header';
import {renderFooter} from './modules/footer';
import '../CSS/mee.css';
import '../CSS/ai.css';
import {createGemini, createChatGpt, displayAI} from './modules/ai';
import { displaySimplePendulum, displayShearForceExperiment, displayCamFollower, displayRollingOnInclinedPlane, displayConicalPendulum, displayFlywheel, displayGears, displayScrewJack, displayWheelAndAxle, displayFriction, displayStarted} from './modules/meeDisplay';
import favLogo from '../RESOURCES/images/footer-logo.png'

const faviconAny = document.querySelector('link[sizes="any"]');
const faviconSvg = document.querySelector('link[type="image/svg+xml"]');
    
    
faviconAny.href = favLogo;
faviconSvg.href = favLogo;

const hme = "../../index.html";
const rpt = "../../report/report.html";
const abt = "../../about/about.html";

const body = document.querySelector('body');
let reports = [
    {
        title: 'Getting Started',
        func: displayStarted
    },
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
        title: 'Automat Spur Gear Models[A1 to A5] {AM231}',
        func: displayGears
    },
    {
        title: 'Screw Jack {AM 214}',
        func: displayScrewJack
    },
    {
        title: 'Simple Wheel and Axle {AM 218(A)}',
        func: displayWheelAndAxle
    },
    {
        title: 'Friction {AM 211}',
        func: displayFriction
    },
    {
        title: 'Rolling on an Inclined Plane {AM 212}',
        func: displayRollingOnInclinedPlane
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