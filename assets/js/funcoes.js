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
  const Inicio = document.getElementById("InicioBtn");
  const InicioSetaRolagem = document.querySelector(".SetaBaixoSessao1");
  const Sobre = document.getElementById("SobreBtn");
  const Produtos = document.getElementById("ProdutosBtn");

  const offset = 100;
  //seta no inicio tambem pode ser clicada
  InicioSetaRolagem.addEventListener("click", function (event) {
    event.preventDefault();
    document
      .getElementById("InicioSessao2")
      .scrollIntoView({ behavior: "smooth" });
  });

  //caixa menu lateral
  Inicio.addEventListener("click", function (event) {
    event.preventDefault();
    document
      .getElementById("CaixaInicio")
      .scrollIntoView({ behavior: "smooth" });
  });
  //
  Sobre.addEventListener("click", function (event) {
    event.preventDefault();
    const caixaSobre = document.getElementById("CaixaSobre");
    const elementPosition =
      caixaSobre.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  });

  //
  Produtos.addEventListener("click", function (event) {
    event.preventDefault();
    document
      .getElementById("ProdutosIr")
      .scrollIntoView({ behavior: "smooth" });
  });
  //
});

// mudanca produto\
// Botões
const BtnEmulador = document.getElementById("OpcaoEmulador");
const BtnAimColor = document.getElementById("OpcaoAimColor");

// Produtos (listas de elementos)
const ProdutosEmulador = document.querySelectorAll("#AreaEmulador");
const ProdutosAimColor = document.querySelectorAll("#AreaAimColor");

BtnEmulador.addEventListener("click", function () {
  BtnEmulador.classList.add("OpcaoProdutoAtiva");
  BtnAimColor.classList.remove("OpcaoProdutoAtiva");

  ProdutosEmulador.forEach((produto) =>
    produto.classList.remove("AreaDesativada")
  );
  ProdutosAimColor.forEach((produto) =>
    produto.classList.add("AreaDesativada")
  );
});

BtnAimColor.addEventListener("click", function () {
  BtnAimColor.classList.add("OpcaoProdutoAtiva");
  BtnEmulador.classList.remove("OpcaoProdutoAtiva");

  ProdutosAimColor.forEach((produto) =>
    produto.classList.remove("AreaDesativada")
  );
  ProdutosEmulador.forEach((produto) =>
    produto.classList.add("AreaDesativada")
  );
});
