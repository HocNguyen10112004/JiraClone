document.addEventListener("DOMContentLoaded", () => {
  let draggedTask = null;
  const container = document.getElementById("main-content");

  container.addEventListener("dragstart", (e) => {
    if (e.target.classList.contains("task")) {
      const task = e.target.closest(".task");
      if (task) {
        draggedTask = task;
        console.log("Hello");
      }
    }
  });

  //ChatGPT
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  //END chatgpt
  container.addEventListener("drop", (e) => {
    e.preventDefault();
    const targetColumn = e.target.closest(".column");
    const closestTask = e.target.closest(".task");
    if (targetColumn && draggedTask) {
      if (closestTask && closestTask !== draggedTask) {
        closestTask.after(draggedTask);
      } else {
        targetColumn.appendChild(draggedTask);
      }

      // Lấy vị trí thả chuột
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      console.log(`Mouse dropped at: X = ${mouseX}, Y = ${mouseY}`);
    }
  });
});
