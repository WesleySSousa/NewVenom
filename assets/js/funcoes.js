//FuncaoChamaMenu
const menu = document.getElementById("JanelaMenu");
const botao = document.getElementById("BtnMenu"); // Substitua pelo botão correto

botao.addEventListener("click", function () {
  menu.classList.toggle("MenuAtivado");
  botao.classList.toggle("BtnMenuAtivo");
});
//

//funcao rolagem navegacao
document.addEventListener("DOMContentLoaded", function () {
  const InicioBtns = document.querySelectorAll(".InicioBtn");
  const InicioSetaRolagem = document.querySelector(".SetaBaixoSessao1");
  const SobreBtns = document.querySelectorAll(".SobreBtn");
  const ProdutosBtns = document.querySelectorAll(".ProdutosBtn");
  const AvaliacoesBtns = document.querySelectorAll(".AvaliacoesBtn");

  const offset = 100;

  // Seta no início também pode ser clicada
  if (InicioSetaRolagem) {
    InicioSetaRolagem.addEventListener("click", function (event) {
      event.preventDefault();
      document
        .getElementById("InicioSessao2")
        .scrollIntoView({ behavior: "smooth" });
    });
  }

  // Adiciona evento a todos os botões de mesma classe
  function addEventToButtons(buttons, targetId) {
    buttons.forEach((btn) => {
      btn.addEventListener("click", function (event) {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }

  addEventToButtons(InicioBtns, "CaixaInicio");
  addEventToButtons(ProdutosBtns, "ProdutosIr");
  addEventToButtons(AvaliacoesBtns, "CaixaAvaliacoes");

 
  SobreBtns.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      event.preventDefault();
      const caixaSobre = document.getElementById("CaixaSobre");
      if (caixaSobre) {
        const elementPosition =
          caixaSobre.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    });
  });
});

// mudanca produto\
// Botões
const BtnEmulador = document.getElementById("OpcaoEmulador");
const BtnAimColor = document.getElementById("OpcaoAimColor");

// Produtos (listas de elementos)
const ProdutosEmulador = document.getElementById("AreaEmulador");
const ProdutosAimColor = document.getElementById("AreaAimColor");

BtnEmulador.addEventListener("click", function () {
  BtnEmulador.classList.add("OpcaoProdutoAtiva");
  BtnAimColor.classList.remove("OpcaoProdutoAtiva");

  ProdutosEmulador.classList.remove("AreaDesativada");
  ProdutosAimColor.classList.add("AreaDesativada");
});

BtnAimColor.addEventListener("click", function () {
  BtnAimColor.classList.add("OpcaoProdutoAtiva");
  BtnEmulador.classList.remove("OpcaoProdutoAtiva");
  ProdutosAimColor.classList.remove("AreaDesativada");
  ProdutosEmulador.classList.add("AreaDesativada");
});
