const displayAI = (body) => {
    const box = document.createElement('div');
    const gpt = document.createElement('div');
    gpt.addEventListener('click', () => {

    });
    const gptIcon = document.createElement('img');
    gpt.appendChild(gptIcon);
    const ai = document.createElement('div');
    ai.addEventListener('click', () => {
        gpt.classList.toggle('active');
        gem.classList.toggle('active');
    });
    const aiIcon = document.createElement('img');
    ai.appendChild(aiIcon);
    const gem = document.createElement('div');
    gem.addEventListener('click', () => {
        
    });
    const gemIcon = document.createElement('img');
    gemIcon.src = "";
    gem.appendChild(gemIcon);
    box.appendChild(gpt);
    box.appendChild(ai);
    box.appendChild(gem);
};