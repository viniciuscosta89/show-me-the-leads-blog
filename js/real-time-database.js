var usersList = document.getElementById('usersList');
var nomeInput = document.getElementById('nome');
var emailInput = document.getElementById('email');
var empresaInput = document.getElementById('empresa');
var addButton = document.getElementById('addButton');

// Ao clicar no botão
addButton.addEventListener('click', function () {
    create(nomeInpu.value, emailInput.value, empresaInput.value);
});

// Função para criar um registro no Firebase
function create(nome,email,empresa) {
    var data = {
        nome: nome,
        email: email,
        empresa: empresa
    };

    return firebase.database().ref().child('contatos').push(data);
}

firebase.database().ref('contatos').on('value', function (snapshot) {
    usersList.innerHTML = '';
    snapshot.forEach(function (item) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(item.val().name + ': ' + item.val().email+': ' + item.val().empresa));
        usersList.appendChild(li);
    });
});