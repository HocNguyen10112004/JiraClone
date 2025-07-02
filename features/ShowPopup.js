document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("main-content");

  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-plus")) {
      const column = e.target.closest(".column");

      fetch("Items/popup.html")
        .then((res) => res.text())
        .then((html) => {
          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = html.trim();
          const popupElement = tempDiv.firstElementChild.cloneNode(true);;
          document.body.appendChild(popupElement);

          popupElement
            .querySelector("#close-popup")
            .addEventListener("click", () => {
              popupElement.remove();
            });

          // Submit task
          popupElement
            .querySelector("#submit-task")
            .addEventListener("click", () => {
              const desc = popupElement.querySelector("#task-desc").value.trim();
              const project = popupElement.querySelector("#task-project").value.trim();
              const id = popupElement.querySelector("#task-id").value.trim();
              console.log(project);
              if (!desc || !project || !id) {
                return alert("Vui lòng điền đầy đủ thông tin");
              }

              fetch("Items/task.html")
                .then((response) => {
                  if (!response.ok) throw new Error("Không thể load file template");
                  return response.text();
                })
                .then((templateHTML) => {
                  const tempDiv = document.createElement("div");
                  tempDiv.innerHTML = templateHTML.trim();
                  const taskElement = tempDiv.firstElementChild;

                  taskElement.querySelector("textarea").value = desc;
                  taskElement.querySelector(".content-task").textContent  = project;
                  taskElement.querySelector(".footer-task span:first-child").textContent  = id;

                  column.appendChild(taskElement);
                  popupElement.remove();
                })
                .catch((err) => console.error("Lỗi khi load task:", err));
            });
        })
        .catch((err) => console.error("Lỗi khi load popup:", err));
    }
  });
});
