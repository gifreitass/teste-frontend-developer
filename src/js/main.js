const elements = document.querySelectorAll('.fade-up');

window.addEventListener('scroll', () => {
  elements.forEach(el => {
    //pega a posição do elemento em relação à área visível da página
    const top = el.getBoundingClientRect().top;

    //verifica se o elemento está visível e adiciona a classe para ativar a animação
    if (top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
});