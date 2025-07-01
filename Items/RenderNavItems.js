document.addEventListener("DOMContentLoaded", () => {
  const navItems = [
    { id: "yourwork", label: "Your Work" },
    { id: "project", label: "Projects" },
    { id: "filter", label: "Filters" },
    { id: "dashboard", label: "DashBoards" },
    { id: "team", label: "Teams" },
    { id: "plan", label: "Plans" },
    { id: "app", label: "Apps" },
  ];

  fetch("Items/nav-item.html")
    .then(response => {
      if (!response.ok) throw new Error("Không thể load file HTML");
      return response.text();
    })
    .then(templateHTML => {
      const container = document.getElementById("inject");
      const secondLi = container.querySelectorAll("li")[1];
      if (!secondLi) {
        console.warn("Không tìm thấy thẻ li thứ 2 trong ul");
        return;
      }

      // Tạo 1 container tạm để parse templateHTML
      const tempContainer = document.createElement("div");
      tempContainer.innerHTML = templateHTML.trim();

      navItems.forEach(item => {
        // Clone template li
        const li = tempContainer.firstElementChild.cloneNode(true);

        // Update id và option
        const select = li.querySelector("select");
        const option = select.querySelector("option");

        select.id = item.id;
        option.value = item.label;
        option.textContent = item.label;

        // Chèn li mới vào sau li thứ 2
        secondLi.insertAdjacentElement("afterend", li);
      });
    })
    .catch(err => console.error("Lỗi khi load snippet:", err));
});
