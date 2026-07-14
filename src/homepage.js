// import { createElement } from "react";
import cafeFront from "./img/cafe_m.JPG";
import outside from "./img/outsideHobbiton.jpeg";

export function createHomepage() {

    const content = document.getElementById("content");
    content.textContent = "";
    const title = document.createElement("h1");
    title.textContent = "Welcome to the Kiwi-Cafe";
    content.appendChild(title);

    const cafeImage = document.createElement("img");
    cafeImage.src = cafeFront;
    cafeImage.alt = "outside of cafe showing plants and entrance";
    content.appendChild(cafeImage);

    const intro = document.createElement("p");
    intro.textContent = "Welcome to our little cafe out in rural New Zealand. We serve the freshest ingredients every day. Why don't you drop on by sometime? Have a coffee, share a story or two. Lifelong friends have been met here as well as to be wed couples~";
    content.appendChild(intro);

    const extra = document.createElement("p");
    extra.textContent = "Just 399km drive outside of Auckland, don't hesitate to spend a morning or afternoon with us";
    content.appendChild(extra);

    const outsideView = document.createElement("img");
    outsideView.src = outside;
    outsideView.alt = "a view of the front of the cafe";
    content.appendChild(outsideView);

    const extra1 = document.createElement("p");
    extra1.textContent = "This is not a real cafe. Some pictures were taken at Hobbiton, NZ. Other pictures were taken at various places and restaurants.";
    extra1.classList.add("smaller");
    content.appendChild(extra1);

}
