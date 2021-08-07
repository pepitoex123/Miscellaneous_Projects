

var myButton = document.querySelectorAll('.header__nav__menu__button')[0];
var myMobileNav = document.getElementById('header__navmobile');
var mql = window.matchMedia('(min-width: 601px)');


function checkMobileNav(e){
  if(e.matches){
    myMobileNav.style.display = "none";
    myButton.classList.remove("active__button");
    myButton.classList.add("header__nav__menu__button");
  }
}

console.log("MyButton has the value of" + myButton);
console.log("myMobileNav has the value of " + myMobileNav);

myButton.addEventListener("click", function(){
  if(myButton.classList.contains('header__nav__menu__button') === true){
    myButton.classList.remove("header__nav__menu__button");
    myButton.classList.add("active__button");
    myMobileNav.style.display = "block"
  }
  else if(myButton.classList.contains('active__button') === true){
    myButton.classList.remove("active__button");
    myButton.classList.add("header__nav__menu__button");
    myMobileNav.style.display = "none";
  }
  else{
    console.log("There was an error D:");
  }
});


mql.addListener(checkMobileNav);
