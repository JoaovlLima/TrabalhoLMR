// Menu Hamburger
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("active");

    var divLogin = document.getElementById("loginEfetuado")
    divLogin.classList.toggle("active");
  }
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