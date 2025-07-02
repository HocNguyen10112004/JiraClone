document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-column");
  const mainContent = document.getElementById("main-content");

  addButton.addEventListener("click", function () {
    const columnNameInput = document.getElementById("columnName");
    const columnName = columnNameInput.value.trim();
    if (!columnName) return;

    fetch("Items/column.html")
      .then((response) => {
        if (!response.ok) throw new Error("Không thể load file template");
        return response.text();
      })
      .then((templateHTML) => {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = templateHTML.trim();
        const columnDiv = tempDiv.firstElementChild.cloneNode(true);

        columnDiv.id = columnName.toLowerCase().replace(/\s+/g, "-");
        const label = columnDiv.querySelector("label");
        if (label) label.textContent = columnName;

        mainContent.appendChild(columnDiv);
        columnNameInput.value = "";
      })
      .catch((err) => console.error("Lỗi khi load cột:", err));
  });
});
