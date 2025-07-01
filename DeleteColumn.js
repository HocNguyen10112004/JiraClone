//Event Delegation
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("main-content");

  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-trash-alt")) {
      const column = e.target.closest(".column");
      if (column) {
        column.remove();
      }
    }
  });
});
