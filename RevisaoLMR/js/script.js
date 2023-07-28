function nextSlide() {
    const carousel = document.querySelector('.carousel');
    const firstItem = carousel.firstElementChild;
    carousel.appendChild(firstItem);
  }

  // Função para voltar o carrossel para a esquerda
  function prevSlide() {
    const carousel = document.querySelector('.carousel');
    const lastItem = carousel.lastElementChild;
    carousel.insertBefore(lastItem, carousel.firstChild);
  }

  // Adicione event listeners para os botões "próximo" e "anterior"
  document.querySelector('#next-btn').addEventListener('click', nextSlide);
  document.querySelector('#prev-btn').addEventListener('click', prevSlide);
