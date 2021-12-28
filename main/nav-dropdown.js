const nav_mainPage = document.getElementsByClassName('nav-mainPage');
const nav_catPage = document.getElementsByClassName('nav-catalogPage');
const nav_commPage = document.getElementsByClassName('nav-commPage');
const nav_resPage = document.getElementsByClassName('nav-resPage');
const nav_priPage = document.getElementsByClassName('nav-priPage');

function hideMobNavigationMenu(){
    nav_commPage[0].style.display = "none";
    nav_catPage[0].style.display = "none";
    nav_mainPage[0].style.display = "none";
    nav_resPage[0].style.display = "none";
    nav_priPage[0].style.display = "none";
}

function showMobMainNavigationMenu(){
    nav_commPage[0].style.display = "none";
    nav_catPage[0].style.display = "none";
    nav_mainPage[0].style.display = "block";
    nav_resPage[0].style.display = "none";
    nav_priPage[0].style.display = "none";
}

function showMobCatNavigationMenu(){
    nav_commPage[0].style.display = "none";
    nav_catPage[0].style.display = "block";
    nav_mainPage[0].style.display = "block";
    nav_resPage[0].style.display = "none";
    nav_priPage[0].style.display = "none";
}

function showMobCommNavigationMenu(){
    nav_commPage[0].style.display = "block";
    nav_catPage[0].style.display = "none";
    nav_mainPage[0].style.display = "block";
    nav_resPage[0].style.display = "none";
    nav_priPage[0].style.display = "none";
}

function showMobResNavigationMenu(){
    nav_commPage[0].style.display = "res";
    nav_catPage[0].style.display = "none";
    nav_mainPage[0].style.display = "block";
    nav_resPage[0].style.display = "block";
    nav_priPage[0].style.display = "none";
}

function showMobPriNavigationMenu(){
    nav_commPage[0].style.display = "none";
    nav_catPage[0].style.display = "none";
    nav_mainPage[0].style.display = "block";
    nav_resPage[0].style.display = "none";
    nav_priPage[0].style.display = "block";
}

window.addEventListener('resize', function(event){
    var newWidth = window.innerWidth;
    if(newWidth < 600){
        nav_commPage[0].style.display = "none";
        nav_catPage[0].style.display = "none";
        nav_mainPage[0].style.display = "none";
        nav_resPage[0].style.display = "none";
        nav_priPage[0].style.display = "none";
    }
});