// import { createElement } from "react";
import view1 from "./img/view1.jpg";
import family from "./img/family.JPG";

export function createAboutContact() {

    const aboutTitle = document.createElement("h1");
    aboutTitle.textContent = "Thanks for checking out our website, we appreciate every individual visitor.";
    document.body.appendChild(aboutTitle);

    const about = document.createElement("p");
    about.textContent = "Our cafe was established way back in 2308 and we are proud to say that is has been running for this long!";
    document.body.appendChild(about);

    const contact = document.createElement("p");
    contact.textContent = "If you'd like to contact us and arrange a special event, feel free to email us at kiwi-cafe@kiwi-cafe.co.nz \nYou can also call us directly on our landline 09-123-456-789";
    document.body.appendChild(contact);

    const contact2 = document.createElement("p");
    contact2.textContent = `If you'd like to visit, we are just 399km drive outside of Auckland.
    53 Nice road,
    Countryside Suburb,
    New Zealand.`;
    document.body.appendChild(contact2);

    const address = document.createElement("p");
    address.textContent = "We have a great view from our cafe!";
    document.body.appendChild(address);

    const viewone = document.createElement("img");
    viewone.src = view1;
    viewone.alt = "view of the countryside from the cafe";
    document.body.appendChild(viewone);

    const familyText = document.createElement("p");
    familyText.textContent = "Come visit us and our family! (Shown below)";
    document.body.appendChild(familyText);

    const familyImage = document.createElement("img");
    familyImage.src = family;
    familyImage.alt = "a family of ducks living on our property";
    document.body.appendChild(familyImage);

    // return { title, cafeImage, intro, extra, flowersImage };
}
