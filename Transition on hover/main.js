const div = document.querySelector("div");

const toggle = () => {
  document.body.classList.toggle("open");
};

div.addEventListener("click", toggle);
