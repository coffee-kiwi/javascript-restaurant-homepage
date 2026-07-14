// import { createElement } from "react";
import view1 from "./img/view1.jpg";
import family from "./img/family.JPG";

export function createAboutContact() {

    const content = document.getElementById("content");
    content.textContent = "";

    const aboutTitle = document.createElement("h1");
    aboutTitle.textContent = "About us";
    content.appendChild(aboutTitle);

    const about = document.createElement("p");
    about.textContent = "Our cafe was established way back in 2308 and we are proud to say that is has been running for this long!";
    content.appendChild(about);

    const contact = document.createElement("p");
    contact.textContent = "If you'd like to contact us and arrange a special event, feel free to email us at kiwi-cafe@kiwi-cafe.co.nz \nYou can also call us directly on our landline 09-123-456-789";
    content.appendChild(contact);

    const contact2 = document.createElement("p");
    contact2.textContent = `If you'd like to visit, we are just 399km drive outside of Auckland. \n\nOur address is:
    53 Nice road,
    Countryside Suburb,
    New Zealand.`;
    content.appendChild(contact2);

    const address = document.createElement("p");
    address.textContent = "We have a great view from our cafe!";
    content.appendChild(address);

    const viewone = document.createElement("img");
    viewone.src = view1;
    viewone.alt = "view of the countryside from the cafe";
    content.appendChild(viewone);

    const familyText = document.createElement("p");
    familyText.textContent = "Come visit us and our family! (Shown below)";
    content.appendChild(familyText);

    const familyImage = document.createElement("img");
    familyImage.src = family;
    familyImage.alt = "a family of ducks living on our property";
    content.appendChild(familyImage);

    // return { title, cafeImage, intro, extra, flowersImage };
}
