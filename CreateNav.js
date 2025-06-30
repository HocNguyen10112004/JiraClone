document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("createNav");
  const mainContent = document.getElementById("main-content");

  addButton.addEventListener("click", function () {
    const newColumn = document.createElement("div");
    newColumn.className = "column";

    const headerContainer = document.createElement("div");
    headerContainer.className = "container-space-between";

    const label = document.createElement("label");
    const ColumnName = document.getElementById("columnName");
    label.textContent = ColumnName.value;

    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fas fa-trash-alt";
    deleteIcon.style.cursor = "pointer";

    deleteIcon.addEventListener("click", function () {
      newColumn.remove();
      
    });

    headerContainer.appendChild(label);
    headerContainer.appendChild(deleteIcon);

    newColumn.appendChild(headerContainer);
    mainContent.appendChild(newColumn);
  });
});
