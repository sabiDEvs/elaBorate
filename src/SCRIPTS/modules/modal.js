import ImgModal from '../../RESOURCES/images/stay.png';
const sectionModal = document.createElement('div');
sectionModal.id = 'sectionModal';
import '../../CSS/report.css';

const createModal= (body) =>{
    const modal = document.createElement('div');
    modal.classList.add('modal_bg');
    const modalLoaderBg = document.createElement('div');
    modalLoaderBg.classList.add('modal_loader_bg');
    const modalLoader = document.createElement('div');
    modalLoader.classList.add('modal_loader');
    modalLoaderBg.appendChild(modalLoader);
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal_content');
    modal.appendChild(modalContent);
    const ModalImage = document.createElement('div');
    ModalImage.classList.add('modal_image');
    const Image = document.createElement('img');
    Image.classList.add('image_modal');
    Image.src = ImgModal;
    ModalImage.appendChild(Image)
    modalContent.appendChild(ModalImage);
    const modalTexts = document.createElement('div');
    modalTexts.classList.add('modal_texts');
    const modalTexts1 = document.createElement('p');
    modalTexts1.classList.add('modal_main_text');
    modalTexts1.textContent = 'Tailor Your Experience Today!';
    modalTexts.appendChild(modalTexts1);
    modalContent.appendChild(modalTexts);
    const modalForm = document.createElement('div');
    modalForm.classList.add('modal_form');
    const formItself = document.createElement('form');
    formItself.classList.add('formitself');
    const LevelSelect = document.createElement('select');
    const label = document.createElement('label');
    label.textContent = 'Choose Your Level'; // Set label text
    LevelSelect.name = 'Level';
    const levelSelectDiv = document.createElement('div');
    levelSelectDiv.classList.add('level_select_div');
    levelSelectDiv.appendChild(LevelSelect);
    formItself.appendChild(levelSelectDiv);
    const options = ['Select your Level','200Level', '300Level', '400Level'];
    options.forEach(optionValue => {
    const option = document.createElement('option'); // Create option element
    option.textContent = optionValue; // Set option text
    option.value = optionValue; // Set option value
    LevelSelect.appendChild(option); // Append option to select element
    });
    const DeptSelect = document.createElement('select');
    const label2 = document.createElement('label');
    label2.textContent = 'Select Department'; // Set label text
    DeptSelect.name = 'Department';
    const DeptSelectDiv = document.createElement('div');
    DeptSelectDiv.classList.add('level_select_div');
    DeptSelectDiv.appendChild(DeptSelect);
    formItself.appendChild(DeptSelectDiv);
    // Create options
    const options2 = ['Select your Department','CPE', 'PRE', 'EEE', 'AGE', 'CVE', 'STE', 'PEE', 'MRE', 'MTE', 'IND', 'CHE','MEE'];
    // Loop through options and add them to the select element
    options2.forEach(optionValue => {
    const option = document.createElement('option'); // Create option element
    option.textContent = optionValue; // Set option text
    option.value = optionValue; // Set option value
    DeptSelect.appendChild(option); // Append option to select element
    });
    const formField = document.createElement('input');
    formField.type = 'email';
    formField.name = 'Email';
    formField.required = true;
    const UserEmail = formField.value;
    formField.placeholder = 'Enter Email';
    formField.classList.add('formField');
    formItself.id = 'emailForm';
    const formSubmit = document.createElement('button');
    formSubmit.type = 'submit';
    formSubmit.textContent = 'Submit';
    formSubmit.disabled = true;
    formSubmit.classList.add('formSubmit');
    formField.addEventListener('input', function() {
        const emailValue = formField.value.trim(); // Trimmed value of the email field
        const isValidEmail = formField.checkValidity(); // Check if the email field is valid
        formSubmit.disabled = !isValidEmail || emailValue === '';
        
        if(isValidEmail){
            formSubmit.classList.add('enabled');
        }
    });
    formItself.appendChild(formField);
    formItself.appendChild(formSubmit);
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyBQAC94J4esheTEGTTmc7vD44Gl8TsxtptLOU7Xnsx87IIvUjVGiHlgtHDmExvj0BV8Q/exec';
    formItself.addEventListener('submit', e => {
        e.preventDefault();
        formSubmit.disabled = true;
        modalLoaderBg.style.display = 'flex';
        let requestBody = new FormData(formItself);
        fetch(scriptURL, { method: 'POST', body: requestBody })
        .then(response => {
            if (response.ok) {
                CloseModal();
                localStorage.setItem('Subscribed', 'true');
                localStorage.setItem('User', `${UserEmail}`);


            } else {
                throw new Error('Network response was not ok.');
            }
            formSubmit.disabled = false;
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Error! Please try again later.');
            formSubmit.disabled = false;
        });
    });
    modalForm.appendChild(formItself);
    modalContent.appendChild(modalForm);
    modalContent.appendChild(modalLoaderBg);
    const modalSafety = document.createElement('div');
    modalSafety.classList.add('modal_safety');
    const modalSafetyText = document.createElement('p');
    modalSafetyText.textContent= 'Enter your email, select your level and department to unlock personalized features and receive exclusive newsletters.'
    modalSafetyText.classList.add('modal_safety_text');
    modalSafety.appendChild(modalSafetyText);
    modalContent.appendChild(modalSafety);
    sectionModal.appendChild(modal);
    sectionModal.classList.add('modal');
    sectionModal.classList.add('hidden');
    body.appendChild(sectionModal);
}

function OpenModal(){
    setTimeout(() => {
        sectionModal.style.display = 'block';
    }, 1200000);
    
    
}
function CloseModal(){
    sectionModal.style.display = 'none';
}
export{createModal, OpenModal, CloseModal};