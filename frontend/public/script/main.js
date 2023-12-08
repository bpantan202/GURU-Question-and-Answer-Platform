import { handleCreateItem, fetchStart } from "./table.js";
// setInterval(fetchAndDrawDiv,3000);
// setInterval(fetchStart,10000);

document.addEventListener("DOMContentLoaded", () => {
  fetchStart();

  /** @type {HTMLButtonElement} */
  const askButton = document.getElementById("ask-button");
  askButton.addEventListener("click", () => {
    handleCreateItem();
  });

});


