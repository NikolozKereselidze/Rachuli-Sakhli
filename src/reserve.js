export function initializeReserve() {
  document.querySelector(".home-button").classList.remove("active");
  document.querySelector(".reserve-button").classList.add("active");
}

export function removeReserve() {
  document.querySelector(".reserve-button").classList.remove("active");
}
