import {domLoad} from "./homeDom.js";
import { menuDomLoad } from "./menuDom.js";
import "../styles/index.css";



const nav = document.querySelector("nav");
const footer = document.querySelector("footer");
const ul = document.createElement("ul");
const liContent = ["home","menu","contact"];

for (let i = 0;i < 3;i++){
    const li = document.createElement("li");
    const button = document.createElement("button");
    const item = liContent[i];
    button.textContent = item;
    button.setAttribute("id",`${item}`)
    li.appendChild(button);
    ul.appendChild(li);
}

nav.appendChild(ul);
domLoad();

function addGlobalEventListeners(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) callback(e);
    });
}

addGlobalEventListeners('click','#home',domLoad);
addGlobalEventListeners('click','#menu',menuDomLoad);
addGlobalEventListeners('click','#contact',contactDomLoad);
