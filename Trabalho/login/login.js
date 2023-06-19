// Menu Hamburger
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("active");

    var divLogin = document.getElementById("loginEfetuado")
    divLogin.classList.toggle("active");
  }
  function fazerLogin() {
    var emailLog = document.getElementById("email").value;
    var senhaLog = document.getElementById("senha").value;

    if ( emailLog === "" || senhaLog === "") {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    localStorage.setItem("email", emailLog);
    localStorage.setItem("senha", senhaLog);
    
    alert("Login efetuado com Sucesso");
   
    var novoUsuario = document.getElementById("email").value;
  if (novoUsuario) {
    var pLogin = document.getElementById("pLogin");
    pLogin.textContent = novoUsuario;
    
    
    localStorage.setItem("email1", novoUsuario);
  }
}


var palavraModificada = localStorage.getItem("email1");
if (palavraModificada) {
  var pLogin = document.getElementById("pLogin");
  pLogin.textContent = palavraModificada;
    



               // Infelizmente não sei trabalhar com banco de dados, Queria uma função para passar informação de uma pagina para outra
                 // unico que consegui foi localStorage, mas descobri que as paginas tem que estar linkadas, e eu n sei fazer isso
                // esse seria o comando para verificar o email e senha cadastrado no login : 

    //var emailCadastrado = localStorage.getItem("email");
    //var senhaCadastrada = localStorage.getItem("senha");
  
  
    //if (emailLog === emailCadastrado && senhaLog === senhaCadastrada) {
      //alert("Logado");
    //} else {
      //alert("Oops, algo está errado. Verifique seu e-mail ou senha.");
    //}

  }
  
  