function ShowMenu() {
  let image = document.getElementById("image");
  //git div which contain ul
  let menu = document.getElementsByClassName("smallMenu")[0];

  menu.classList.toggle("show");
  //change image
  if (image.getAttribute("src") == "./images/icon-hamburger.svg") {
    image.src = "./images/icon-close.svg";
  } else {
    image.src = "./images/icon-hamburger.svg";
  }
}
