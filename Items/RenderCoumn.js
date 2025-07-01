const columns = [
  { label: "TO DO", id: "todo" },
  { label: "IN PROGRESS", id: "inprogress" },
  { label: "CODE REVIEW", id: "codereview" },
  { label: "DONE", id: "done" },
];
document.addEventListener("DOMContentLoaded", () => {
  fetch("Items/column.html")
    .then(response => {
      if (!response.ok) throw new Error("Không thể load file template");
      return response.text();
    })
    .then(templateHTML => {
      const container = document.getElementById("main-content");

      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = templateHTML.trim();

      columns.forEach(col => {
        const columnDiv = tempDiv.firstElementChild.cloneNode(true);
        columnDiv.id = col.id;
        const label = columnDiv.querySelector("label");
        label.textContent = col.label;

        container.appendChild(columnDiv);
      });
      document.dispatchEvent(new Event("columnsReady"));
    })
    .catch(err => console.error("Lỗi khi load cột:", err));
});
