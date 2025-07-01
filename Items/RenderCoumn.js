const columns = [
  { label: "TO DO" },
  { label: "IN PROGRESS" },
  { label: "CODE REVIEW" },
  { label: "DONE" },
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
        const label = columnDiv.querySelector("label");
        label.textContent = col.label;

        container.appendChild(columnDiv);
      });
    })
    .catch(err => console.error("Lỗi khi load cột:", err));
});
