const email = document.getElementById('email');
const submit = document.getElementById('submit-button');
const form = document.getElementById('form');
const signUpContainer = document.querySelector('.sign-up-container');
const successContainer = document.querySelector('.success-container');
const dismissBtn = document.querySelector('.dismiss-btn');
const submittedEmail = document.querySelector('.success-state');
const inputControl = document.querySelector('.input-control');
const errorDisplay = inputControl.querySelector('.error');




//validated email
const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function togglecards(){
    signUpContainer.classList.toggle('hidden');
    successContainer.classList.toggle('hidden');
    email.value = '';
    inputControl.classList.remove('success');
}


submit.addEventListener('click', submitEmail);
dismissBtn.addEventListener('click', togglecards);


function submitEmail(e){
    e.preventDefault()

    emailValue = email.value.trim();

    if (emailValue === ''){
        errorDisplay.innerText = 'Email is required';
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    }else if (!isValidEmail(emailValue)){
        errorDisplay.innerText = "Provide a valid email address";
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    } else {
        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
        submittedEmail.innerText = emailValue;
        
        togglecards();
        
        
    }
        

    }








