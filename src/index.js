import style from "./css/index.scss";
import Icon from "./../assets/img/proba.png"
let myIcon = new Image();
myIcon.src = Icon;
document.querySelector("div").appendChild(myIcon);
document.querySelector("div").classList.add("change");

console.log("Hello world");