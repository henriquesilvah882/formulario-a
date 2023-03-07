function validar() {

var NomeCompleto = documente.getElementByID("NomeCompleto");
var Telefone  = documente.getElementByID("Telefone");
var DateNascimento = documente.getElementByID("DateNascimento");
var Sexo = documente.getElementByID("Sexo");
var Estado = documente.getElementByID("Estado");
var Cidade = documente.getElementByID("Cidade");
var email = documente.getElementByID("email");

}

if (NomeCompleto.value == ""){

    alert("Por favor informar nome completo");
    NomeCompleto.focus();
    return;

}

if(Telefone.value == "") {

    alert("Por favor informe seu número para contato");
    Telefone.focus();
    return;

}

if(DateNascimento.value == "") {

    alert("Selecione uma data");
    DateNascimento.focus();
    return;

}

if(Sexo.value == "") {

    alert("Selecione uma opção");
    Sexo.focus();
    return;

}

if(Estado.value == "") {

    alert("Selecione uma opção");
    Estado.focus();
    return;

}

if(Cidade.value == "") {

    alert("Selecione uma opção");
    Estado.focus();
    return;

}

if(email.value == "") {

    alert("Não esqueça o seu e-mail");
    email.focus();
    return;

}

alert("Cadastro realizado com sucesso!")