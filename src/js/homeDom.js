import "../styles/style.css";

export function domLoad(){
    const content = document.querySelector("#content");
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    const home = document.createElement("div");
    home.setAttribute("class","home");

    const logoBackground = document.createElement("div");
    logoBackground.setAttribute("id","logoBackground");

    const welcome = document.createElement("div");
    welcome.textContent = "Welcome to";
    welcome.setAttribute("id","welcome");

    const logo = document.createElement("div");
    logo.textContent = "THE ETHIOPIAN RESTAURANT";
    
    logoBackground.appendChild(welcome);
    logoBackground.appendChild(logo);

    home.appendChild(logoBackground);

    const discover = document.createElement("div");
    discover.setAttribute("class","discover");

    const discoverParagraph = document.createElement("div");
    discoverParagraph.textContent = "Welcome to our African-style restaurant, where every dish is a journey through the vibrant and diverse flavors of Africa. We bring you authentic recipes passed down through generations, using fresh, locally-sourced ingredients to create a unique culinary experience. Our warm and inviting atmosphere, infused with rich African culture, makes it the perfect place to gather with friends and family. Come and savor the true taste of Africa, where tradition meets creativity on every plate."

    const discoverPic = document.createElement("div");
    discoverPic.setAttribute("id","pic");

    discover.appendChild(discoverParagraph);
    discover.appendChild(discoverPic);

    content.appendChild(home);
    content.appendChild(discover);
}


