const content = document.querySelector(".content");

export function createNav() {
  const navContent = document.createElement("header");
  navContent.classList.add("header");

  const homeButton = createButton();
  homeButton.textContent = "Home";
  homeButton.classList.add("active");
  const menuButton = createButton();
  menuButton.textContent = "Menu";
  const reserveButton = createButton();
  reserveButton.textContent = "Reserve";

  addBtnNavClass(homeButton, "home-button");
  addBtnNavClass(menuButton, "menu-button");
  addBtnNavClass(reserveButton, "reserve-button");
  navContent.appendChild(homeButton);
  navContent.appendChild(menuButton);
  navContent.appendChild(reserveButton);

  content.appendChild(navContent);
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
  content.appendChild(createMain());
  document.querySelector(".home-button").classList.add("active");
}

export function removeHome() {
  content.innerHTML = "";
  createNav();
  document.querySelector(".home-button").classList.remove("active");
}
