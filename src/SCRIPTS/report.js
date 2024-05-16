import {renderHeader} from './modules/header.js';
import {renderFooter} from './modules/footer';
import '../CSS/style.css';
import '../CSS/report.css';
import { createDeptCard } from './modules/report.js';
import { createModal, OpenModal, CloseModal } from './modules/modal.js';

import reportImg from '../RESOURCES/images/labrep.png'
//import images for the departmental cards
import ImgCPE from '../RESOURCES/images/dept_cpe.png';
import ImgMEE from '../RESOURCES/images/dept_mee.png';
import ImgPRE from '../RESOURCES/images/dept_pre.png';
import ImgEEE from '../RESOURCES/images/dept_eee.png';

const hme = "../index.html";
const rpt = "./report.html";
const abt = "../about/about.html";

const body = document.querySelector('body');
renderHeader(body, [hme, rpt, abt]);
const wrapper = document.createElement('div');
wrapper.id = 'wrapper';
body.append(wrapper);
createModal(body)
const section1 = document.createElement('div');
section1.id = 'section1';
wrapper.append(section1);
const text = document.createElement('h4');
text.classList.add('mainText')
wrapper.append(text);
text.innerHTML = 'Browse Available';
const text2 = document.createElement('h4');
text2.classList.add('mainText2')
wrapper.append(text2);
text2.innerHTML = 'Reports';
const reportImage = document.createElement('img');
reportImage.src = reportImg;
reportImage.alt = 'reportimg'
const cpeDept = createDeptCard(ImgCPE,'COMPUTER ENGINEERING','Beyond theoretical knowledge, the computer engineering laboratory is the cornerstone of practical learning in the field. This specialized space hums with activity, equipped with high-performance computers, specialized software, and electronic components. Here, students bridge the gap between theory and application, building circuits, programming microcontrollers, and testing hardware functionalities. Experiments in networking, digital logic design, and computer architecture solidify classroom concepts, fostering a deeper understanding of how computers operate at their core. The lab fosters collaboration, as students tackle projects together, troubleshooting challenges and refining their problem-solving skills. This hands-on environment empowers future computer engineers, shaping them into innovators who can design and build the technological advancements of tomorrow.','TO BE DECIDED( Usually 1 week after experiment)',[300, 400], 'Be there 5mins before the time, Ensure to understand the basic concept','cpe');
const meeDept = createDeptCard(ImgMEE,'MECHANICAL ENGINEERING','Beyond the theoretical realm, the mechanical engineering laboratory hums with the whir of machinery and the clink of tools. This space is a playground for innovation, filled with lathes, mills, 3D printers, and testing equipment. Here, students transform abstract concepts into tangible realities. They design and build mechanisms, analyze material properties, and test the strength of structures. Experiments in thermodynamics, fluid mechanics, and robotics bridge the gap between theory and application, solidifying knowledge and fostering problem-solving skills. The lab fosters collaboration, as students work together on projects, troubleshooting challenges and refining their designs. This hands-on environment empowers future mechanical engineers, equipping them with the practical skills to build the machines and structures that shape our world','4pm same day',[200], 'Be there 5mins before the time, Dress Appropriately','mee');
const eeeDept = createDeptCard(ImgEEE,'ELECTRICAL ENGINEERING','The electrical engineering lab is a vibrant hub where theory meets tangible results. This space hums with the energy of experiments, filled with oscilloscopes, power supplies, and intricate circuits. Here, students bridge the gap between theoretical concepts and practical applications. They analyze electrical phenomena, design circuits, and build electronic devices, testing their functionality in real-time. Experiments in electromagnetism, power systems, and control systems solidify classroom knowledge, fostering a deeper understanding of how electricity behaves and powers our world. The lab fosters collaboration, as students work together on projects, troubleshooting challenges and refining their designs. This hands-on environment empowers future electrical engineers, equipping them with the practical skills to design and build the technological advancements that power our lives.','10AM Next day',[200, 300], 'Be there 5mins before the time, Dress Appropriately, Listen attentively and ensure Active Participation','eee');
const preDept = createDeptCard(ImgPRE,'PRODUCTION ENGINEERING','The production engineering lab is a dynamic space where theory is transformed into optimized manufacturing processes. This hands-on environment hums with the activity of machinery and the methodical planning of production lines. Students experiment with various manufacturing techniques, including machining, welding, assembly, and quality control procedures. They analyze production data, optimize workflows, and apply lean manufacturing principles to achieve efficiency. Experiments in automation, robotics, and computer-aided manufacturing solidify classroom knowledge, fostering a deeper understanding of how products are created at scale. The lab fosters collaboration, as students work together on projects, simulating real-world production scenarios and refining their problem-solving skills. This hands-on environment empowers future production engineers, equipping them with the practical knowledge to design, implement, and optimize efficient manufacturing systems that drive productivity and innovation','TO BE DECIDED during Experiment',[200], 'Dress Appropriately, ensure Active Participation','pre');
wrapper.appendChild(cpeDept);
wrapper.appendChild(eeeDept);
wrapper.appendChild(meeDept);
wrapper.appendChild(preDept);
renderFooter(body, [hme, rpt, abt]);
function checkLocalStorage(){
    if(!localStorage.getItem('Subscribed')){
        OpenModal();
    } 
    else{
        CloseModal();
    }
}
window.onload = checkLocalStorage;