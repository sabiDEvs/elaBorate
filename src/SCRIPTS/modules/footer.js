import {createNavBar, createBrand} from './landing.js';
import logo1 from '../../RESOURCES/images/elaborate-footer-logo.png';
import '../../CSS/footer.css';
const renderFooter = (body, array) => {
//create footer
const footer = document.createElement('footer');
//create left footer section
const leftFooter = document.createElement('section');
//create footer brand
const footerBrand = createBrand(logo1, '');
//create footer navigation links
const footerNav = createNavBar(array);
footerNav.id = 'footerNav';
//append children to leftFooter
leftFooter.appendChild(footerBrand);
leftFooter.appendChild(footerNav);
leftFooter.id = 'leftFoot';
//Append left footer section to the footer
footer.appendChild(leftFooter);
//create right footer section
const rightFooter = document.createElement('section');
rightFooter.id = 'rightFoot';
//create  subscribe text
const subText = document.createElement('p');
subText.textContent = "Get our latest innovative news";








const subDiv = document.createElement('div');
subDiv.id = 'subscribe';
const subInput = document.createElement('input');
subInput.type = 'email';
subInput.placeholder = 'Email Address';
subInput.id = 'subEmail';
const subButton = document.createElement('div');
subButton.textContent = 'Subscribe';
subButton.id = 'subButton';

// Add event listener to handle subscription
subButton.addEventListener('click', async () => {
    const email = subInput.value.trim();
    if (!email) {
        alert('Please enter a valid email address.');
        return;
    }

    try {
        const response = await fetch('https://ideate.szone.com.ng/submit-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email }),
        });
        if (response.ok) {
            alert('Subscription successful!');
            subInput.value = ''; 
        } else {
            const errorData = await response.json();
            alert(`Subscription failed: ${errorData.message || 'Unknown error'}`);
        }
    } catch (error) {
        console.log('Subscription Successful:', error);
    }
});

subDiv.appendChild(subInput);
subDiv.appendChild(subButton);











//create copyright text
const copyright = document.createElement('div');
copyright.innerHTML = `&#169; Copyright <span>${new Date().getFullYear()}</span>`;
//create reserved right text
const reserved = document.createElement('p');
reserved.innerHTML = 'All rights reserved. A <span>sabi</span>Devs initiative';
//Append children to right footer element
rightFooter.appendChild(subText);
rightFooter.appendChild(subDiv);
rightFooter.appendChild(copyright);
rightFooter.appendChild(reserved);
//Append right footer to footer
footer.appendChild(rightFooter);
body.appendChild(footer);
};
export {renderFooter};