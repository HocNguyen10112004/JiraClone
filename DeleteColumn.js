document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".fa-trash-alt").forEach((trashIcon) => {
    trashIcon.addEventListener("click", function () {
      const column = this.closest(".column");
      if (column) {
        column.remove();
      }
    });
  });
});
