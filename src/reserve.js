const content = document.querySelector(".content");

function createInput(trgt, type, text, form) {
  const inputDiv = document.createElement("div");
  inputDiv.classList.add(`reserve-${type}--input`);

  const label = document.createElement("label");
  label.setAttribute("for", trgt);
  label.textContent = text;

  const input = document.createElement("input");
  input.setAttribute("type", type);
  input.setAttribute("name", trgt);

  inputDiv.appendChild(label);
  inputDiv.appendChild(input);
  form.appendChild(inputDiv);
  return inputDiv;
}

export function initializeReserve() {
  document.querySelector(".home-button").classList.remove("active");
  document.querySelector(".reserve-button").classList.add("active");

  const reserveContent = document.createElement("div");
  reserveContent.classList.add("reserve");

  const reserveHeading = document.createElement("h3");
  reserveHeading.textContent = "Book a table";

  const reserveForm = document.createElement("form");
  reserveForm.classList.add("reserve-form");

  const inputDiv = document.createElement("div");
  inputDiv.classList.add("input-flex");
  reserveForm.appendChild(inputDiv);

  const fistNameForm = createInput(
    "first_name",
    "text",
    "First Name: ",
    reserveForm
  );

  const lastNameForm = createInput(
    "last_name",
    "text",
    "Last Name: ",
    reserveForm
  );

  inputDiv.appendChild(fistNameForm);
  inputDiv.appendChild(lastNameForm);

  const dateForm = createInput(
    "booking_date",
    "date",
    "Booking Date: ",
    reserveForm
  );

  const reserveButtonDiv = document.createElement("div");
  reserveButtonDiv.classList.add("reserve-submit--button");
  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = "Book Now";
  reserveButtonDiv.appendChild(submitButton);

  reserveForm.appendChild(reserveButtonDiv);
  reserveContent.appendChild(reserveHeading);
  reserveContent.appendChild(reserveForm);

  content.appendChild(reserveContent);
}

export function removeReserve() {
  document.querySelector(".reserve-button").classList.remove("active");
}
