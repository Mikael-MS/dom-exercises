
function addUser() {
    // Essa parte recupera os valores dos inputs
    let firstName = document.getElementById('first-name').value; 
    let lastName = document.getElementById('last-name').value;
    let yearOfBirth = document.getElementById('year-of-birth').value;

    //Essa parte da o ano atual e calcula idade do usuario
    const data = new Date();
    const year = data.getFullYear();
    const age = year - yearOfBirth;

    // Essa const é o ano maximo que um usuario pode ter nascido
    const maxYearOfBirth = 1873;

    //Essa parte valida o input firstName
    if (!firstName) {
        document.getElementById('error-one').innerHTML = 'Required field';
    } else if (firstName.length < 3) {
        document.getElementById('error-one').innerHTML = 'More than 3 letters';
    } else if (firstName.length > 25) {
        document.getElementById('error-one').innerHTML = 'Less than 25 letters';
    } else if (!isNaN(firstName)) {
        document.getElementById('error-one').innerHTML = 'Only letters';
        return
    } else {
        document.getElementById('error-one').innerHTML = '';
    }

    //Essa parte valida o input lastName
    if (!lastName) {
        document.getElementById('error-two').innerHTML = 'Required field';
    } else if (lastName.length < 3) {
        document.getElementById('error-two').innerHTML = 'More than 3 letters';
    } else if (lastName.length > 25) {
        document.getElementById('error-two').innerHTML = 'Less than 25 letters';
    } else if (!isNaN(lastName)) {
        document.getElementById('error-two').innerHTML = 'Only letters';
    } else {
        document.getElementById('error-two').innerHTML = '';
    }

    //Essa parte valida o input yearOfBirth
    if (!yearOfBirth) {
        document.getElementById('error-tree').innerHTML = 'Required field';
    } else if (isNaN(yearOfBirth)) {
        document.getElementById('error-tree').innerHTML = 'Only numbers';
    } else if (yearOfBirth.length < 4) {
        document.getElementById('error-tree').innerHTML = 'Minimum 4 numbers';
    } else if (yearOfBirth >= year) {
        document.getElementById('error-tree').innerHTML = 'Must be less than: ' + year;
    } else if (yearOfBirth <= maxYearOfBirth) {
        document.getElementById('error-tree').innerHTML = 'Maximum birth year: ' + maxYearOfBirth;
    } else {
        document.getElementById('error-tree').innerHTML = '';
    }
   
    //Essa parte verifiva se tem algum erro dispardo e para o codigo
    if(document.getElementById('error-one').innerHTML.length > 0 ||
        document.getElementById('error-two').innerHTML.length > 0||
        document.getElementById('error-tree').innerHTML.length > 0) {
        console.log('para codigo')
        return
    }

    //Essa parte insere uma linha  na tabela cada vez que entra um usuario para lista
    let table = document.getElementById('users-table');
    const tr = document.createElement("tr")
    table.appendChild(tr)

    // Evento de click que remove os dados ao clicar na linha da tabela
    tr.addEventListener('click', function (el) {
        el.target.parentNode.remove()
    })

    //Insere as colunas e ecreve os dados
    const name = document.createElement("td")
    name.innerHTML = firstName + ' ' + lastName;
    tr.appendChild(name)

    const ageEl = document.createElement("td")
    ageEl.innerHTML = age
    tr.appendChild(ageEl)

  

    //Essa parte esvazia os inputs no final 
    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';
    document.getElementById('year-of-birth').value = '';
}




