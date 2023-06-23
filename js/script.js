const burgerMenu = document.querySelector(".menu_burger");
burgerMenu.onclick = function(){
    document.querySelector(".menu_burger_icon").classList.toggle("active");
    document.querySelector(".nav_mobile").classList.toggle("nav_mobile_opem");
    

}