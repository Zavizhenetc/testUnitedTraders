function csl(elem){
  console.log(elem);
}


import './index.css';


const btn = document.querySelector('.burger-menu');
const jsMenu = document.querySelector('.burger-menu__wrapper');
 
btn.addEventListener('click',burger);

function burger (){
  // evt.preventDefault();
  btn.classList.toggle('active');
  jsMenu.classList.toggle('active');
}
// $('#sandwichmenu').on('click', function(e) {
//   e.preventDefault();
//   $('#sandwichmenu').toggleClass("active");
//   $('.js_menu').toggleClass("active");
// });