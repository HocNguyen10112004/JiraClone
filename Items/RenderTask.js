document.addEventListener("DOMContentLoaded", () => {
  fetch("Items/task.html")
    .then((response) => {
      if (!response.ok) throw new Error("Không thể load file template");
      return response.text();
    })
    .then((templateHTML) => {
      // Lặp qua các column (giả sử chúng đã có id từ trước như 'todo', 'inprogress', ...)
      const columnIds = ["todo", "inprogress", "codereview", "done"];
      
      columnIds.forEach((id, columnIndex) => {
        const column = document.getElementById(id);
        if (!column) return;

        for (let i = 0; i < 2; i++) {
          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = templateHTML.trim();
          const taskElement = tempDiv.firstElementChild;

          // ✅ Optional
          const textarea = taskElement.querySelector("textarea");
          // textarea.textContent = `Task ${i + 1} in ${id.toUpperCase()}`;

          const footer = taskElement.querySelector(".footer-task span:last-child");
          if (footer) footer.textContent = `TIS-${columnIndex * 10 + i + 1}`;

          column.appendChild(taskElement);
        }
      });
    })
    .catch((err) => console.error("Lỗi khi load task:", err));
});
