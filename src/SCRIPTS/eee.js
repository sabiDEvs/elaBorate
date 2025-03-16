import '../CSS/eee.css';
import {renderHeader} from './modules/header';
import {renderFooter} from './modules/footer';
import { displayStarted, displayEE201, displayEE203, displayEE202, displayEE207, displayEE205, displayEE206, displayEE204 } from './modules/eeeDisplay';
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
        title: 'Verification of Network Theorems {EE204}',
        func: displayEE204
    },
    {
        title: 'The Oscilloscope {EE205}',
        func: displayEE205
    },
    {
        title: 'Single Phase Transformer {EE206}',
        func: displayEE206
    },
    {
        title: 'D.C Generator {EE207}',
        func: displayEE207
    }
];

// Display header
renderHeader(body, [hme, rpt, abt]);

// Create aside side menu
const aside = document.createElement('aside');
aside.id = 'reportMenu';
aside.classList.add('report-menu');

// Create button to close side menu (only visible on mobile)
const close = document.createElement('div');
close.textContent = '×';
close.id = 'closeButton';
close.addEventListener('click', () => {
    aside.classList.remove('active');
});
aside.appendChild(close);

// Create aside header
const heading = document.createElement('h3');
heading.textContent = 'EEE ELA TOPICS';
heading.classList.add('side-menu-heading');
aside.appendChild(heading);

// Create div to store reports list
const reportDiv = document.createElement('div');
reportDiv.classList.add('report-list-container');

// Create list of report topics
const reportList = document.createElement('ul');
reportList.classList.add('report-list');
let list = [];

// Function to handle report selection
function selectReport(index) {
    // Remove selected class from all items
    for (let i = 0; i < list.length; i++) {
        list[i].classList.remove('selected');
    }
    
    // Add selected class to clicked item
    list[index].classList.add('selected');
    
    // Call the function to display report
    reports[index].func();
    
    // Close menu on mobile after selection
    if (window.innerWidth < 768) {
        aside.classList.remove('active');
    }
}

// Create report items
for (let i = 0; i < reports.length; i++) {
    list[i] = document.createElement('li');
    list[i].textContent = reports[i].title;
    
    // Use closure to capture index correctly
    (function(idx) {
        list[idx].addEventListener('click', function() {
            selectReport(idx);
        });
    })(i);
    
    reportList.appendChild(list[i]);
}

reportDiv.appendChild(reportList);
aside.appendChild(reportDiv);
body.appendChild(aside);

// Create main content container
const main = document.createElement('main');
body.appendChild(main);

// Create hover button for mobile view
const hoverButton = document.createElement('div');
hoverButton.classList.add('hover');

const viewText = document.createElement('span');
viewText.classList.add('viewText');
viewText.textContent = 'View Report';

const hoverIcon = document.createElement('img');
hoverIcon.src = '../../assets/pdf.png'; // Update this path to your actual icon
hoverIcon.alt = 'Report Icon';
hoverIcon.classList.add('hoverIcon');

hoverButton.appendChild(viewText);
hoverButton.appendChild(hoverIcon);

// Add event listener to toggle menu
hoverButton.addEventListener('click', () => {
    aside.classList.toggle('active');
});

body.appendChild(hoverButton);

// Initialize with first report
displayStarted();
list[0].classList.add('selected');

// Render footer
renderFooter(body, [hme, rpt, abt]);