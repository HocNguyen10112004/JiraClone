document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("main-content");

  container.addEventListener("click", (e) => {
    const task = e.target.closest(".task");
    const icon = e.target.classList.contains("trash-task");
    if (task && !icon) {
      const desc = task.querySelector("textarea").value;
      const project = task.querySelector(".content-task").textContent;
      const id = task.querySelector(".project-id").textContent;

      fetch("Items/task-detail.html")
        .then((response) => {
          if (!response.ok) throw new Error("Không thể load file template");
          return response.text();
        })
        .then((templateHTML) => {
          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = templateHTML.trim();
          const popupElement = tempDiv.firstElementChild.cloneNode(true);

          popupElement.querySelector("textarea").value = desc;
          popupElement.querySelector("#task-project").value = project;
          popupElement.querySelector("#task-id").value = id;
          document.body.appendChild(popupElement);

          popupElement
            .querySelector("#close-popup")
            .addEventListener("click", () => {
              popupElement.remove();
            });

          //update task
          popupElement
            .querySelector("#submit-task")
            .addEventListener("click", () => {
              const desc = popupElement
                .querySelector("#task-desc")
                .value.trim();
              const project = popupElement
                .querySelector("#task-project")
                .value.trim();
              const id = popupElement.querySelector("#task-id").value.trim();
              console.log(project);
              if (!desc || !project || !id) {
                return alert("Vui lòng điền đầy đủ thông tin");
              }

              task.querySelector("textarea").value = desc;
              task.querySelector(".content-task").textContent = project;
              task.querySelector(
                ".footer-task span:first-child"
              ).textContent = id;
              popupElement.remove();
            });
        })
        .catch((err) => console.error("Lỗi khi load detail:", err));
    }
  });
});
