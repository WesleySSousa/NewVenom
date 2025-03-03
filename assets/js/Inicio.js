//CONFIG TEXTO HOME
const PTxt1Home = document.querySelector("#PTxt1Home");
const PTxt2Home = document.querySelector("#PTxt2Home");
const H1Txt1Home = document.querySelector(".Txt1");
const H1Txt2Home = document.querySelector(".Txt2");
const SetaBaixoSessao1 = document.querySelector(".SetaBaixoSessao1");
//
window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  if (window.scrollY > 0) {
    PTxt1Home.style.opacity = "1";
    PTxt1Home.style.transform = "translateX(0)";
    H1Txt1Home.style.left = "15%";
    
    PTxt2Home.style.opacity = "1";
    PTxt2Home.style.transform = "translateX(0)";
    H1Txt2Home.style.right = "5%";
  } else {
    PTxt1Home.style.opacity = "0";
    PTxt1Home.style.transform = "translateX(50px)";
    H1Txt1Home.style.left = "28%";

    PTxt2Home.style.opacity = "0";
    PTxt2Home.style.transform = "translateX(-50px)";
    H1Txt2Home.style.right = "27%";
  }
  if (window.scrollY > 700) {
    console.log("maior");
    PTxt1Home.style.opacity = "0";
    H1Txt1Home.style.opacity = "0";
    PTxt2Home.style.opacity = "0";
    H1Txt2Home.style.opacity = "0";
    SetaBaixoSessao1.style.opacity = "0";
  
  } else {
    H1Txt1Home.style.opacity = "1";
    H1Txt2Home.style.opacity = "1";
    SetaBaixoSessao1.style.opacity = "0.3";
  }

});
//FIM CONFIG TXT HOME

//Comeco Animacoes Ondas
const Onda1 = document.getElementById("Onda1");
const Onda2 = document.getElementById("Onda2");
const Onda3 = document.getElementById("Onda3");
const Onda4 = document.getElementById("Onda4");
//
window.addEventListener("scroll", function () {
  let PosicaoRolagem = window.scrollY;
  Onda1.style.backgroundPositionX = 400 + PosicaoRolagem * 4 + "px";
  Onda2.style.backgroundPositionX = 300 + PosicaoRolagem * -4 + "px";
  Onda3.style.backgroundPositionX = 200 + PosicaoRolagem * 2 + "px";
  Onda4.style.backgroundPositionX = 100 + PosicaoRolagem * -2 + "px";
});
//FimRolangem Animacoes Ondas.
