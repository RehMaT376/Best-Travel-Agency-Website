const hamburger = document.querySelector('.header .navbar .nav-list .hamburger');
const menu = document.querySelector('.header .navbar .nav-list ul');
const menu_item = document.querySelectorAll('.header .navbar .nav-list ul li a');


hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
})

menu_item.forEach((item)=>{
    item.addEventListener('click',()=>{
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    });
});