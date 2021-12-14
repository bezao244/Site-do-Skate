var botaoMenu = document.querySelector(".cabecalho__menu");
var menu = document.querySelector(".menu-lateral");

botaoMenu.addEventListener('click', function(){
    //adiciona e remove a cada click no botao, muito interessante
    menu.classList.toggle('menu-lateral--ativo');
});