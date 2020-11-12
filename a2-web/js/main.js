function maiuscula(texto){
  texto.value = texto.value.toUpperCase();
}
function validarLogin(){
  var loginElement = document.querySelector('#main .login');
  var inputEmailElement = document.querySelector('input[name=email]');
  var inputSenhaElement = document.querySelector('input[name=password]');
  if(password.value == "" && email.value == ""){
    alert("Os dados precisam ser informados!");
    inputEmailElement.style.borderColor = '#909090';
    inputSenhaElement.style.borderColor = '#909090';
    loginElement.style.borderColor = '#e92555';
  } else if (email.value == "") {
    alert("Informe um e-mail cadastrado!");
    loginElement.style.borderColor = '#909090';
    inputSenhaElement.style.borderColor = '#909090';
    inputEmailElement.style.borderColor = '#e92555';
  } else if (password.value == "") {
    alert("Informe a senha para este login!");
    loginElement.style.borderColor = '#909090';
    inputEmailElement.style.borderColor = '#909090';
    inputSenhaElement.style.borderColor = '#e92555';
  } else {
    var linkElement = document.querySelector('#main a');
    linkElement.setAttribute('href', 'views/home-adm.html');
  }
}
function validarCadastro(){
  var CPFInputElement = document.querySelector('input[name=cpf]');
  var emailInputElement = document.querySelector('input[name=email]');
  var buttonElement = document.querySelector('button[value=salvar]');
  if(cpf.value == "" && email.value == ""){
    alert("Dados obrigatórios!");
    CPFInputElement.style.borderColor = '#e92555';
    emailInputElement.style.borderColor = '#e92555';
  } else if (cpf.value == "") {
    alert("Dados obrigatórios!");
    emailInputElement.style.borderColor = '#909090';
    CPFInputElement.style.borderColor = '#e92555';
  } else if (email.value == "") {
    alert("Dados obrigatórios!");
    CPFInputElement.style.borderColor = '#909090';
    emailInputElement.style.borderColor = '#e92555';
  } else {
    alert("Cadastro feito com sucesso!");
    buttonElement.setAttribute('type', 'submit');
  }
}
function recuperarSenha(){
  var emailElement = document.querySelector('input[name=email]');
  if(email.value == "") {
    alert("Digite o e-mail para redefinição de senha.");
    emailElement.style.borderColor = '#e92555';
  } else {
    alert("E-mail de redefinição de senha enviado!");
    emailElement.style.borderColor = '#909090';
    emailElement.value = '';
  }
}
function trocarCSSCadastro(){
  var fundoCadastro = document.querySelector('#cadastro');
  var fundoSalvar = document.querySelector('#main button');
  if(fundoCadastro.className == 'cadastro' && fundoSalvar.className == 'salvar'){
    fundoCadastro.classList.add('cadastro-dois');
    fundoSalvar.classList.add('salvar-dois');
  } else {
    fundoCadastro.classList.remove('cadastro-dois');
    fundoSalvar.classList.remove('salvar-dois');
  }
}