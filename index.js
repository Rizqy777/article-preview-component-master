const button = document.querySelector(".button");
const div = document.querySelector(".share");
const cross = document.querySelector(".button_share");
let containerGeneral = document.querySelector(".container_card");
const containerButton = document.querySelector(".container_button");

button.addEventListener("click", function () {
  if (div.classList.contains("active")) {
    div.classList.remove("active");
  } else {
    div.classList.add("active");
  }

  if (button.classList.contains("active_button")) {
    button.classList.remove("active_button");
  } else {
    button.classList.add("active_button");
  }

  if (cross.classList.contains("button_share_active")) {
    cross.classList.remove("button_share_active");
  } else {
    cross.classList.add("button_share_active");
  }
});

window.onresize = () => {
  if (window.innerWidth <= 700) {
    containerGeneral.appendChild(div);
    if (div.classList.contains("active")) {
      div.appendChild(button);
    } else {
      div.removeChild(button);
    }
    button.addEventListener("click", function () {
      if (div.classList.contains("active")) {
        div.appendChild(button);
      } else {
        containerButton.appendChild(button);
      }
    });
  } else {
    containerButton.appendChild(button);
    button.appendChild(div);
  }
};



