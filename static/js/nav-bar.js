/**
 * Created by isak.johansson on 13/01/15.
 */

var isStatic=true;
var navBar = document.getElementById("nav-bar");
console.log(navBar);
window.onscroll = scrolled;




function scrolled() {

    if ((0 ==  window.scrollY) && (isStatic)){
        navBar.classList.remove('fixed');


        isStatic = !isStatic;
    }

    else {

        navBar.classList.add('fixed');
        isStatic = !isStatic;
    }



}
