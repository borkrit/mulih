const header = document.querySelector(".header");

window.document.addEventListener("scroll", () => {
  if (window.scrollY > 140) {
    header.style.background = "#000000cf";
    header.style.padding = "5px 0";
  } else {
    header.style.background = "transparent";
    header.style.padding = "32px 0";
  }
});

function openCity(evt, typeTab) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("filter__body");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("filter__tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(typeTab).style.display = "flex";
  evt.currentTarget.className += " active";
}
