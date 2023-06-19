// Menu Hamburger
function toggleMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("active");

  var divLogin = document.getElementById("loginEfetuado")
  divLogin.classList.toggle("active");
}
  function cadastrar() {
    
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
  
    
    if (nome === "" || email === "" || senha === "") {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    if (email === localStorage.getItem("email")) {
      alert("Email ja foi registrado");
      return;
    }
  
    
    localStorage.setItem("nome", nome);
    localStorage.setItem("email", email);
    localStorage.setItem("senha", senha);


   
  
   
    alert("Cadastro realizado com sucesso!");
    window.location.href = "http://localhost:52331/login/Login.html";
  
   
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("senha").value = "";

    
  }
  