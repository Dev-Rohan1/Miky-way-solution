let menu = document.getElementById("showMenu");
let openMenu = document.getElementById("open_menu");
let hideMenu = document.getElementById("hide_menu");

console.log(openMenu);

menu.addEventListener("click", () => {
  // document.getElementById("menu").classList.toggle("hidden");
  console.log("clicked");
  openMenu.className =
    "absolute top-[0%] left-0 w-full bg-indigo-500 transition-all";
});

hideMenu.addEventListener("click", () => {
  openMenu.className =
    "absolute top-[-100%] left-0 w-full bg-indigo-500  transition-all";
});
