const btn = document.querySelector('.btn'),
    name = document.querySelector('.name'),
    nameInput = document.querySelector('.inputName'),
    lastName = document.querySelector('.lastName'),
    lastNameInput = document.querySelector('.inputLastName'),
    age = document.querySelector('.age'),
    ageInput = document.querySelector('.inputAge'),
    job = document.querySelector('.job'),
    jobInput = document.querySelector('.inputJob'),
    error = document.querySelector('.error');


btn.addEventListener('click', () => {

    if (nameInput.value.length !== 0 && lastNameInput.value.length !== 0 && ageInput.value.length !== 0 && jobInput.value.length !== 0) {
        name.innerHTML = "Аты:";
        lastName.innerHTML = "Атасынын аты:";
        age.innerHTML = "Жашы:";
        job.innerHTML = "Жумуш:";
        name.innerText += nameInput.value;
        lastName.innerText += lastNameInput.value;
        age.innerText += ageInput.value;
        job.innerText += jobInput.value;

        nameInput.value = '';
        lastNameInput.value = '';
        ageInput.value = '';
        jobInput.value = '';

        error.style.display = "none"

    } else {
        error.style.display = "block"
    }


})