export function createNav() {
  const navContent = document.createElement("header");
  navContent.classList.add("header");

  const homeButton = createButton();
  homeButton.textContent = "Home";
  homeButton.classList.add("active");
  const menuButton = createButton();
  menuButton.textContent = "Menu";
  const aboutButton = createButton();
  aboutButton.textContent = "About";

  addBtnNavClass(homeButton, "home-button");
  addBtnNavClass(menuButton, "menu-button");
  addBtnNavClass(aboutButton, "about-button");
  navContent.appendChild(homeButton);
  navContent.appendChild(menuButton);
  navContent.appendChild(aboutButton);

  return navContent;
}

function addBtnNavClass(btn, btnClass) {
  btn.classList.add("nav-button", `${btnClass}`);
}

function createMain() {
  const mainContent = document.createElement("main");
  mainContent.classList.add("main");

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
