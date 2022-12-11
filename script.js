const input = document.querySelector("#input");

input.addEventListener("keyup", () => {
  const filter = input.value.toUpperCase();
  const ul = document.querySelector("#ul");
  const li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    const a = li[i].getElementsByTagName("a")[0];
    const txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
});
const accordion = document.querySelectorAll(".accordion");

accordion.forEach((acc) => {
  acc.addEventListener("click", () => {
    const icon = acc.firstElementChild;
    const panel = acc.nextElementSibling;
    if (acc.classList.contains("active")) {
      acc.classList.remove("active");
    } else {
      const active = document.querySelectorAll(".active");
      active.forEach((act) => {
        const panel = act.nextElementSibling;
        const icon = act.firstElementChild;
        act.classList.remove("active");
        panel.style.display = "none";
        icon.classList.remove("animate");
      });
      acc.classList.add("active");
    }
    if (acc.classList.contains("active")) {
      panel.style.display = "block";
      icon.classList.add("animate");
    } else {
      icon.classList.remove("animate");
      panel.style.display = "none";
    }
  });
});
