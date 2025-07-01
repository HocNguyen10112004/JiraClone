document.addEventListener("DOMContentLoaded", () => {
  const sidebarItems = [
    {
      iconClass: "fas fa-columns",
      text: "Scrum: Teams in S...Board",
      active: false,
    },
    { iconClass: "fas fa-stream", text: "Roadmap", active: false },
    { iconClass: "fas fa-clipboard-list", text: "Backlog", active: false },
    { iconClass: "fas fa-tasks", text: "Active sprints", active: true },
    { iconClass: "fas fa-chart-bar", text: "Reports", active: false },
    { iconClass: "fas fa-exclamation-circle", text: "Issues", active: false },
    { iconClass: "fas fa-puzzle-piece", text: "Components", active: false },
    { iconClass: "fas fa-tags", text: "Releases", active: false },
    { iconClass: "fas fa-file-alt", text: "Project pages", active: false },
    { iconClass: "fas fa-plus-circle", text: "Add item", active: false },
    { iconClass: "fas fa-cog", text: "Project settings", active: false },
  ];
  fetch("Items/sidebar-item.html")
    .then((response) => {
      if (!response.ok) throw new Error("Không thể load file template");
      return response.text();
    })
    .then((templateHTML) => {
      const container = document.querySelector(".sidebar-list");

      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = templateHTML.trim();

      sidebarItems.forEach((item) => {
        const li = tempDiv.firstElementChild.cloneNode(true);

        const a = li.querySelector("a.sidebar-item");
        const icon = a.querySelector("i");
        const span = a.querySelector("span");

        icon.className = item.iconClass;
        span.textContent = item.text;

        if (item.active) {
          a.classList.add("active");
        }

        container.appendChild(li);
      });
    })
    .catch((err) => console.error("Lỗi khi load sidebar items:", err));
});
