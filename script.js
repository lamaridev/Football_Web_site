const buttons = document.querySelectorAll("[data-slide-direction]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.slideDirection === "next" ? 1 : -1;
    changeSlide(offset);
  });
});

const changeSlide = (offset) => {
  const slides = document.querySelector(".slides");
  const activeSlide = slides.querySelector("[data-active-slide]");
  let newIndex = [...slides.children].indexOf(activeSlide) + offset;
  newIndex =
    newIndex < 0
      ? slides.children.length - 1
      : newIndex === slides.children.length
      ? 0
      : newIndex;
  slides.children[newIndex].dataset.activeSlide = true;
  delete activeSlide.dataset.activeSlide;

  const circles = document.querySelector(".slides-circles");
  const activeCircle = circles.querySelector("[data-active-slide]");
  circles.children[newIndex].dataset.activeSlide = true;
  delete activeCircle.dataset.activeSlide;
};

setInterval(changeSlide.bind(null, 1), 3000);


let tab=[{equipe1:"celseq",logo1:"celseq",equipeé:"celseq",equipe2:"celseq"},{},{}]

//tab.concat,map


var about = document.getElementsByClassName("js_evnta")[0];
var club = document.getElementsByClassName("js_evntb")[0];
var buteur = document.getElementsByClassName("js_evntc")[0];

about.addEventListener("mousemove",function()
{
  var x = document.querySelector(".sous_menu_about");
  x.style.display = "block";
})

club.addEventListener("mousemove",function()
{
  var y = document.querySelector(".sous_menu_club");
  y.style.display = "block";

})

buteur.addEventListener("mousemove",function()
{
var z = document.querySelector(".sous_menu_buteur");
z.style.display = "block";
})

about.addEventListener("mouseout",function()
{
  var x = document.querySelector(".sous_menu_about");
  x.style.display = "none";
})
club.addEventListener("mouseout",function()
{
  var x = document.querySelector(".sous_menu_club");
  x.style.display = "none";
})
buteur.addEventListener("mouseout",function()
{
  var x = document.querySelector(".sous_menu_buteur");
  x.style.display = "none";
})

