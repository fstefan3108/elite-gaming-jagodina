window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    document.body.style.visibility = 'visible';
    const logo = document.getElementById('logoImage');
    logo.style.transform="rotate(360deg)";

    
});

window.addEventListener('scroll', function(){

    const navbar = document.getElementById('navMenu');
    const logoSvgFirst = document.getElementById('pathOne');
    const logoSvgSecond = document.getElementById('pathTwo');
    const logoSvg = document.getElementById('svgLogo');
    const links = document.getElementById('menuItems');
 

    if(window.scrollY>0){
        navbar.classList.add('md:bg-white');
        navbar.classList.add('bg-[#1a191d]');
        logoSvgFirst.classList.add('md:fill-black');
        logoSvgSecond.style.fill='#ff0e1f';
        logoSvg.style.animation='rotateLogo 0.3s ease-in-out forwards';
        links.style.color='black';
        
    }
    else{
        navbar.classList.remove('md:bg-white');
        logoSvgFirst.classList.remove('md:fill-black');
        logoSvgSecond.style.fill='white';
        logoSvg.style.animation='unRotateLogo';
        links.style.color='white';
    }

});

const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('menu');

menuButton.addEventListener('click', function(){

    menuButton.classList.toggle('open');
    mobileMenu.classList.toggle('slide');
    

});

var imageArray=['/img/heroImage3.jpeg', '/img/heroImage4.jpeg', '/img/heroImage5.jpeg', '/img/heroImage2.jpeg', '/img/imgHeroBG.jpeg'];
var i=0;

var image = document.querySelector('.cover-image');
var timer = setInterval(function(){
    
    image.style.backgroundImage = "url('" + imageArray[i] + "')";
    i++;

    if(i>=imageArray.length){
        i=0;
    }

}, 5000);