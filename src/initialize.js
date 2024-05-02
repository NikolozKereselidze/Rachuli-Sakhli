function createNav() {
  const navContent = document.createElement("header");
  navContent.classList.add("header");

  const homeButton = createButton();
  homeButton.textContent = "Home";
  const menuButton = createButton();
  menuButton.textContent = "Menu";
  const aboutButton = createButton();
  aboutButton.textContent = "About";

  navContent.appendChild(homeButton);
  navContent.appendChild(menuButton);
  navContent.appendChild(aboutButton);

  return navContent;
}

function createMain() {
  const mainContent = document.createElement("header");
  mainContent.classList.add("header");

  const title = document.createElement("h1");
  title.textContent = "Rachuli Sakhli";

  const restaurantHeader = document.createElement("h3");
  restaurantHeader.textContent =
    "Discover the Flavors of Rachuli at Rachuli Sakhli!";
  const aboutRestaurant = document.createElement("p");

  mainContent.appendChild(title);
  mainContent.appendChild(restaurantHeader);
  mainContent.appendChild(aboutRestaurant);

  return mainContent;
}

function createButton() {
  return document.createElement("button");
}

export function initialize() {
  const content = document.querySelector(".content");

  content.appendChild(createNav());
  content.appendChild(createMain());
}
