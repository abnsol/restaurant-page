import "../styles/contact.css";

export function contactDomLoad(){
    const content = document.querySelector("#content");
    while (content.firstChild){
        content.removeChild(content.firstChild);
    }

    const contactContainer = document.createElement("div");
    contactContainer.setAttribute("id","contactContainer");
    const contact = document.createElement("div");
    contact.textContent = "Contact us";

    const msg = document.createElement("div");
    msg.textContent = "Feel free to contact us anytime.We will get back to you as soon as we can.";

    // const icons = ['../.src/images/call.png','../.src/images/mail.png','../.src/images/location.png','../.src/images/time.png'];
    const txt = ["+555 555 555 5555","info.wakanda@gmail.com","21 jump-street,Addis Ababa,Ethiopia","8:00 am - 10:00 pm"];
    
    const infoContainer = document.createElement("div");
    for (let i = 0;i < 4;i++){
        const infoContent = document.createElement("div");
        // const icon = document.createElement("img");
        const info = document.createElement("div");

        // icon.src = icons[i];
        info.textContent = txt[i];

        // infoContent.appendChild(icon);
        infoContent.appendChild(info);
        infoContainer.appendChild(infoContent);
    }
    
    contactContainer.appendChild(contact);
    contactContainer.appendChild(msg);
    contactContainer.appendChild(infoContainer);
    content.appendChild(contactContainer);
}