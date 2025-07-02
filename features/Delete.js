//Event Delegation
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("main-content");

  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("trash-task")) {
      const task = e.target.closest(".task");
      if (task) task.remove();
    }

    if (e.target.classList.contains("trash-column")) {
      const column = e.target.closest(".column");
      if (column) column.remove();
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("release");
  container.addEventListener("click", (e) => {
    const tasks = document.querySelectorAll(".task");
    tasks.forEach((element) => {
      element.remove();
    });
  });
});
