
function addUser() {
    // Essa parte faz referencia aos inputs
    let firstNameEl = document.getElementById('first-name');
    let lastNameEl = document.getElementById('last-name');
    let yearOfBirthEl = document.getElementById('year-of-birth');

    // Essa parte recupera os valores dos inputs
    let firstName = firstNameEl.value; 
    let lastName = lastNameEl.value;
    let yearOfBirth = Number(yearOfBirthEl.value);

    //Essa parte da o ano atual e calcula idade do usuario
    const data = new Date();
    const year = data.getFullYear();
    const age = year - yearOfBirth;

    const errorFirstName = document.getElementById('error-firstname');
    const errorLastName = document.getElementById('error-lastname');
    const errorYearOfBirth = document.getElementById('error-yearofbirth');

     
    //Essa parte valida o input firstName
    if (!firstName) {
        errorFirstName.innerHTML = 'Required field';
    } else if (firstName.length < 3) {
        errorFirstName.innerHTML = 'First name must be at least 3 letters';
    } else if (firstName.length > 25) {
        errorFirstName.innerHTML = 'The first name must have a maximum of 25 letters';
    } else if (!isNaN(firstName)) {
        errorFirstName.innerHTML = 'This field only accepts letters';
        return
    } else {
        errorFirstName.innerHTML = '';
    }

    //Essa parte valida o input lastName
    if (!lastName) {
        errorLastName.innerHTML = 'Required field';
    } else if (lastName.length < 3) {
        errorLastName .innerHTML = 'Last name must be at least 3 letters';
    } else if (lastName.length > 25) {
        errorLastName .innerHTML = 'The last name must have a maximum of 25 letters';
    } else if (!isNaN(lastName)) {
        errorLastName .innerHTML = 'This field only accepts letters';
    } else {
        errorLastName .innerHTML = '';
    }

    //Essa parte valida o input yearOfBirth
    if (!yearOfBirth) {
        errorYearOfBirth.innerHTML = 'Required field';
    } else if (isNaN(yearOfBirth)) {
        errorYearOfBirth.innerHTML = 'This field only accepts numbers';
    } else if (yearOfBirth.toString().length < 4 ) {
        errorYearOfBirth.innerHTML = 'year of birth must have at least 4 numbers';
    } else if (yearOfBirth >= year) {
        errorYearOfBirth.innerHTML = 'year of birth must be less than: ' + year;
    } else if (yearOfBirth < (year - 150)) {
        errorYearOfBirth.innerHTML = 'Maximum age: ' + 150;
    } else {
        errorYearOfBirth.innerHTML = '';
    }
   
    //Essa parte verifiva se tem algum erro dispardo e para o codigo
    if(errorFirstName.innerHTML.length > 0 ||
        errorLastName.innerHTML.length > 0||
        errorYearOfBirth.innerHTML.length > 0) {
        return
    }
   
    //Essa parte insere uma linha  na tabela cada vez que entra um usuario para lista
    let table = document.getElementById('users-table');
    const tr = document.createElement("tr");
    table.appendChild(tr);

    // Evento de click que remove os dados ao clicar na linha da tabela
    tr.addEventListener('click', function (el) {
        el.target.parentNode.remove();
    })

    //Insere as colunas e ecreve os dados
    const name = document.createElement("td")
    name.innerHTML = firstName + ' ' + lastName;
    tr.appendChild(name);

    const ageEl = document.createElement("td")
    ageEl.innerHTML = age;
    tr.appendChild(ageEl);


    //Essa parte esvazia os inputs no final 
    firstNameEl.value = '';
    lastNameEl.value = '';
    yearOfBirthEl.value = '';
}




