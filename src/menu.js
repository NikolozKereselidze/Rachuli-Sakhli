import { createNav } from "./initialize";

const content = document.querySelector(".content");

const Menu = {
  title: ["Lobio Kotanshi", "Shkmeruli", "Lobiani", "Rachuli Lori"],
  description: [
    "Hearty Georgian Flavor.",
    "Garlic-infused Chicken Delight.",
    "Savory Bean-filled Bread.",
    "Signature Regional Cuisine.",
  ],
};

function createCard(heading, identifier, description) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("menu-card", identifier);
  const cardHeading = document.createElement("h3");
  cardHeading.textContent = heading;

  const cardDescription = document.createElement("p");
  cardDescription.textContent = description;

  cardDiv.append(cardHeading, cardDescription);
  return cardDiv;
}

export function initializeMenu() {
  const menuSection = document.createElement("section");
  menuSection.classList.add("menu-section");
  Menu.title.forEach((el, i) => {
    const cardDiv = createCard(Menu.title[i], `card-${i}`, Menu.description[i]);
    menuSection.appendChild(cardDiv);
  });

  content.appendChild(menuSection);
  document.querySelector(".menu-button").classList.add("active");
}

export function removeMenu() {
  content.innerHTML = "";
  createNav();
  document.querySelector(".menu-button").classList.remove("active");
}
