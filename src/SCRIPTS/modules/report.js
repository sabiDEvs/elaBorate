
const createLevelsButtons = (levels)=>{
    const div = document.createElement('div');
    div.classList.add('levelsDiv');

}

const createDeptCard =(image, title, description, time, levels, tip, deptShortName)=> {
    const card = document.createElement('div');
    card.classList.add('card');



    //title
    const deptTitle = document.createElement('h5');
    deptTitle.classList.add('deptTitle');
    deptTitle.textContent = title;

    //image
    const img = document.createElement('img');
    img.classList.add('deptImage');
    img.src = image;
    
    //full details
    const details = document.createElement('div');
    details.classList.add('details');





    //description

    const deptDescription = document.createElement('p');
    deptDescription.classList.add('deptDescription');
    deptDescription.textContent = description;


    // Time

    const deptTime = document.createElement('p');
    deptTime.classList.add('deptTime');
    deptTime.textContent = `Submission Deadline: ${time}`;

    // Levels
    const deptLevels = document.createElement('div');
    deptLevels.classList.add('levels');

    

    levels.forEach(level => {
        const levelLink = document.createElement('a');
        levelLink.href = `/report/${deptShortName}/${level}.html`;
        levelLink.textContent = `${level}L REPORT`;
        levelLink.classList.add('levelLink');

        
        

        deptLevels.appendChild(levelLink);

    });

    const deptTip = document.createElement('p');
    deptTip.classList.add('tip');
    deptTip.textContent = ` ELA Tips:  ${tip}`;


    details.appendChild(deptDescription);
    details.appendChild(deptTime);
    details.appendChild(deptTip);
    details.appendChild(deptLevels);
    card.appendChild(deptTitle);
    card.appendChild(img);
    card.appendChild(details);

    return card;



}



export {createDeptCard}