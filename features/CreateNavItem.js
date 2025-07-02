document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("createNav");
  addButton.addEventListener("click", function () {
    const itemName = document.getElementById("gap-nav").value;
    fetch("Items/nav-item.html")
      .then((response) => {
        if (!response.ok) throw new Error("Không thể load file template");
        return response.text();
      })
      .then((templateHTML) => {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = templateHTML.trim();
        const navItem = tempDiv.firstElementChild.cloneNode(true);
        const select = navItem.querySelector("select");
        const option = select.querySelector("option");
        option.textContent = itemName;
        const injectContainer = document.getElementById("inject");
        const closestLi = addButton.closest("li");
        injectContainer.insertBefore(navItem, closestLi);
      })
      .catch((err) => console.error("Lỗi khi load nav item:", err));
  });
});
