function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("active");

    var divLogin = document.getElementById("loginEfetuado")
    divLogin.classList.toggle("active");
  }

  //Login

  

  function fazerLogin() {
    
    var emailLog = document.getElementById("email").value;
    var senhaLog = document.getElementById("senha").value;
    var usuarioCadastrado = localStorage.getItem("usuarios");
    
   

    if ( emailLog === "" || senhaLog === "") {
      alert("Por favor, preencha todos os campos!");
      return;
    }
    if(usuarioCadastrado){
usuarioCadastrado = JSON.parse(usuarioCadastrado);
   
  var usuarioEncontrado = usuarioCadastrado.find(function(usuario){
    return usuario.email === emailLog && usuario.senha === senhaLog 
  })

if(usuarioEncontrado){
    alert("Logado com Sucesso")
    var nomeUsuario = usuarioEncontrado.nome
    localStorage.setItem("emailLogado",nomeUsuario);
   
   
}else{
    alert("Usuário ou Senha Incorretos!!")
}



}else{
    alert("Não há Usuarios Cadastrado")
}


}

var pLogin = document.getElementById("pLogin")

  var emailLogado = localStorage.getItem("emailLogado");
  if(emailLogado){
    pLogin.textContent = emailLogado;
  }
  
   

 //Criar Evento

function gerarCard(event) {
    event.preventDefault();
  
    var titulo = document.getElementById("titulo").value;
    var descricao = document.getElementById("descricao").value;
    var imagem = document.getElementById("imagem").files[0];
  
    var card = document.createElement("div");
    card.classList.add("card");
  
    var tituloElement = document.createElement("h2");
    tituloElement.textContent = titulo;
  
    var descricaoElement = document.createElement("p");
    descricaoElement.textContent = descricao;
  
    if (imagem) {
      var imagemElement = document.createElement("img");
      imagemElement.src = URL.createObjectURL(imagem);
      card.appendChild(imagemElement);
    }
  
    card.appendChild(tituloElement);
    card.appendChild(descricaoElement);
  
    var divCards = document.getElementById("meus-cards");
    divCards.appendChild(card);
  
    document.getElementById("titulo").value = "";
    document.getElementById("descricao").value = "";
    document.getElementById("imagem").value = null;
  }
  
  var formulario = document.getElementById("meu-formulario");
  formulario.addEventListener("submit", gerarCard);

//Cadastro

  function cadastrar() {
    
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    var usuario = {
        nome: nome,
        email: email,
        senha: senha
    }
        
    
    if (nome === "" || email === "" || senha === "") {
      alert("Por favor, preencha todos os campos!");
      return;
    }
var comparaEmail = JSON.parse(localStorage.getItem("usuarios"));
var comparaEmail = comparaEmail.find(function(usuario){
    return usuario.email === email;
})
if(comparaEmail){
    alert("Email ja foi registrado")
    return
}else{ 

   
    var usuarioCadastrado = localStorage.getItem("usuarios");
    if(usuarioCadastrado){
        usuarioCadastrado = JSON.parse(usuarioCadastrado);
    }else{
        usuarioCadastrado = [];
    }

    usuarioCadastrado.push(usuario)

localStorage.setItem("usuarios", JSON.stringify(usuarioCadastrado));

  
   
    alert("Cadastro realizado com sucesso!");
    window.location.href = "/login/Login.html";
  
   
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("senha").value = "";
   
    }

}
  
  function logOut() {

  }

  
  
