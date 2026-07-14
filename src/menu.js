// import { createElement } from "react";
import coffee1 from "./img/coffee1.jpeg";
import coffee2 from "./img/coffee2.jpeg";
import croissant from "./img/croissant.jpeg";
import irishPie from "./img/irish_pie.jpeg";
import wrap from "./img/healthy_wrap.JPG";
import big_meal from "./img/soup_curry.jpeg";

export function createMenuPage() {
    const title = document.createElement("h1");
    title.textContent = "What's on the menu?";
    document.body.appendChild(title);

    const coffeeIntro = document.createElement("h2");
    coffeeIntro.textContent = "What tickles your fancy? Freshly brewed coffee..? 😋";
    document.body.appendChild(coffeeIntro);

    const coffeeImage1 = document.createElement("img");
    coffeeImage1.src = coffee1;
    coffeeImage1.alt = "Freshly brewed flat white with coffee art showing a bird";
    document.body.appendChild(coffeeImage1);
    
    const coffeeImage2 = document.createElement("img");
    coffeeImage2.src = coffee2;
    coffeeImage2.alt = "Freshly brewed flat white with coffee art showing a bird";
    document.body.appendChild(coffeeImage2);

    const foodIntro = document.createElement("h2");
    foodIntro.textContent = "Maybe a bite to eat?";
    document.body.appendChild(foodIntro);

    const croissantImage = document.createElement("img");
    croissantImage.src = croissant;
    croissantImage.alt = "a freshly baked croissant";
    document.body.appendChild(croissantImage);

    const irishPieImage = document.createElement("img");
    irishPieImage.src = irishPie;
    irishPieImage.alt = "a freshly baked pie";
    document.body.appendChild(irishPieImage);

    const wrapImage = document.createElement("img");
    wrapImage.src = wrap;
    wrapImage.alt = "a freshly baked croissant";
    document.body.appendChild(wrapImage);

    const bigMealImage = document.createElement("img");
    bigMealImage.src = big_meal;
    bigMealImage.alt = "a freshly baked croissant";
    document.body.appendChild(bigMealImage);

    const closing = document.createElement("p");
    closing.textContent = "If you have any particular allergies or preferences, just let us know! We will do our best to cater to every customer's needs";
    document.body.appendChild(closing);

    // Does it need to return anything if each item is appended to the document here?
    // return { title, coffeeIntro, intro, extra, flowersImage };
}
