import create from "./page-load"
import "./styles.css"
import aboutDisplay from "./about-display"
import homeDisplay from "./home-display"
import menuDisplay from "./menu-display"
create();
const tab = document.querySelector(".page");
homeDisplay(tab);
const homeMenuBtn = document.querySelector(".menuBtn");
homeMenuBtn.addEventListener("click",() =>{ clearTab(tab); menuDisplay(tab);});
function clearTab(tab){
    while (tab.firstChild) {
      tab.removeChild(tab.lastChild);
    }
}
const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const aboutBtn = document.querySelector(".about");
homeBtn.addEventListener("click",() =>{ clearTab(tab); homeDisplay(tab);
    const homeMenuBtn = document.querySelector(".menuBtn");
    homeMenuBtn.addEventListener("click",() =>{ clearTab(tab); menuDisplay(tab);});
});
menuBtn.addEventListener("click", () =>{ clearTab(tab); menuDisplay(tab);});
aboutBtn.addEventListener('click', () =>{ clearTab(tab); aboutDisplay(tab);});
console.log("hello world")