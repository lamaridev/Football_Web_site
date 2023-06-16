
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function()
{
    if(xhttp.readyState==4 && xhttp.status==200)
    {
        score (xhttp.responseText);
    }
}

xhttp.open("GET","./data.json",true);
xhttp.send();

// function score(res) 
// {
    var JsObject = [
        {
            "league":"england",
            "equipe1":"Chelsea",
            "score1":"3",
            "logo1":"../../Asset/chelsea.png",
            "equipe2":"Man Utd",
            "score2":"1",
            "logo2":"../../Asset/manunited.png"
        },
    
        {
            "league":"england",
            "equipe1":"Arsenal",
            "score1":"1",
            "logo1":"../../Asset/arsenal.png",
            "equipe2":"Sunderland",
            "score2":"0",
            "logo2":"../../Asset/580b57fcd9996e24bc43c4f0.png"
        },
    
       {
        "league":"england",    
        "equipe1":"Crystal Palace",
            "score1":"1",
            "logo1":"../../Asset/crystal.png",
            "equipe2":"westham United",
            "score2":"1",
            "logo2":"../../Asset/westham.png"
        },
    
      {
        "league":"england",
        "equipe1":"astonvilla",
        "score1":"0",
        "logo1":"../../Asset/astonvilla.png",
        "equipe2":"Liverpool",
        "score2":"3",
        "logo2":"../../Asset/liverpool.png"
       },
    {
        "league":"england",
        "equipe1":"Everton",
        "score1":"0",
        "logo1":"../../Asset/everton.png",
        "equipe2":"Man Utd",
        "score2":"0",
        "logo2":"../../Asset/manunited.png"
    },
    {
        "league":"spain",
        "equipe1":"Crystal Palace",
        "score1":"3",
        "logo1":"../../Asset/crystal.png",
        "equipe2":"Tottenham Hotspur",
        "score2":"1",
        "logo2":"../../Asset/totanham.png"
    },
    {
        "league":"spain",    
        "equipe1":"Everton",
            "score1":"0",
            "logo1":"../../Asset/everton.png",
            "equipe2":"Manchester City",
            "score2":"2",
            "logo2":"../../Asset/mancity.png"
    },
    
{
    "league":"spain",
    "equipe1":"Everton",
    "score1":"0",
    "logo1":"../../Asset/everton.png",
    "equipe2":"Norwich City",
    "score2":"0",
    "logo2":"../../Asset/norwich.png"
},
{
    "league":"spain",
    "equipe1":"Crystal Palace",
    "score1":"0",
    "logo1":"../../Asset/crystal.png",
    "equipe2":"Liverpool",
    "score2":"2",
    "logo2":"../../Asset/liverpool.png"
},
{
    "league":"spain",
    "equipe1":"Leicester",
    "score1":"1",
    "logo1":"../../Asset/leister.png",
    "equipe2":"westham United",
    "score2":"1",
    "logo2":"../../Asset/westham.png"
},
{
    "league":"italy",
    "equipe1":"Bournemouth",
    "score1":"0",
    "logo1":"../../Asset/bournmoth.png",
    "equipe2":"Tottenham Hotspur",
    "score2":"0",
    "logo2":"../../Asset/totanham.png"
},
{
    "league":"italy",
    "equipe1":"Leicester",
    "score1":"2",
    "logo1":"../../Asset/leister.png",
    "equipe2":"Sunderland",
    "score2":"1",
    "logo2":"../../Asset/580b57fcd9996e24bc43c4f0.png"
},
{
    "league":"italy",
    "equipe1":"Arsenal",
    "score1":"3",
    "logo1":"../../Asset/arsenal.png",
    "equipe2":"Watford",
    "score2":"0",
    "logo2":"../../Asset/watford.png"
},
{
    "league":"italy",
    "equipe1":"astonvilla",
    "score1":"0",
    "logo1":"../../Asset/astonvilla.png",
    "equipe2":"chelsea",
    "score2":"2",
    "logo2":"../../Asset/chelsea.png"
},
{
    "league":"italy",
    "equipe1":"Bournemouth",
    "score1":"1",
    "logo1":"../../Asset/bournmoth.png",
    "equipe2":"Manchester City",
    "score2":"2",
    "logo2":"../../Asset/mancity.png"
},
{
    "league":"france",
    "equipe1":"Crystal Palace",
    "score1":"0",
    "logo1":"../../Asset/crystal.png",
    "equipe2":"Norwich City",
    "score2":"0",
    "logo2":"../../Asset/norwich.png"
},
{
    "league":"france",
    "equipe1":"Bournemouth",
    "score1":"0",
    "logo1":"../../Asset/bournmoth.png",
    "equipe2":"Liverpool",
    "score2":"3",
    "logo2":"../../Asset/liverpool.png"
},
{
    "league":"france",
    "equipe1":"Leicester",
    "score1":"2",
    "logo1":"../../Asset/leister.png",
    "equipe2":"Manchester City",
    "score2":"2",
    "logo2":"../../Asset/mancity.png"
},
{
    "league":"france",
    "equipe1":"astonvilla",
    "score1":"1",
    "logo1":"../../Asset/astonvilla.png",
    "equipe2":"Norwich City",
    "score2":"0",
    "logo2":"../../Asset/norwich.png"
},
{
    "league":"france",
    "equipe1":"Arsenal",
    "score1":"2",
    "logo1":"../../Asset/arsenal.png",
    "equipe2":"Tottenham Hotspur",
    "score2":"1",
    "logo2":"../../Asset/totanham.png"
}
   
]
    var table = " ";
    var table1 = " ";
    var table2 = " ";
    var table3 = " ";
    
     for(var i=0;i<JsObject.length;i++)
    {
        var l = JsObject[i];

        switch (l.league) {
            case "england":
                table +=
        "<td><p id=nom_equipe>"+l.equipe1+"</p><img class=image src="+l.logo1+"><p class=scoreD>"+l.score1+"</p><p class=scoreD>"+l.score2+"</p><img class=image src="+l.logo2+"><p id=score></p><p id=nom_equipe>"+l.equipe2+"</p></td>"
    
                break;
            
            case "spain":
                table1 +=
        "<td><p id=nom_equipe>"+l.equipe1+"</p><img class=image src="+l.logo1+"><p class=scoreD>"+l.score1+"</p><p class=scoreD>"+l.score2+"</p><img class=image src="+l.logo2+"><p id=score></p><p id=nom_equipe>"+l.equipe2+"</p></td>"
    
                break;

            case "italy":
                table2 +=
        "<td><p id=nom_equipe>"+l.equipe1+"</p><img class=image src="+l.logo1+"><p class=scoreD>"+l.score1+"</p><p class=scoreD>"+l.score2+"</p><img class=image src="+l.logo2+"><p id=score></p><p id=nom_equipe>"+l.equipe2+"</p></td>"
    
                break;
            case "france":
                table3 +=
        "<td><p id=nom_equipe>"+l.equipe1+"</p><img class=image src="+l.logo1+"><p class=scoreD>"+l.score1+"</p><p class=scoreD>"+l.score2+"</p><img class=image src="+l.logo2+"><p id=score></p><p id=nom_equipe>"+l.equipe2+"</p></td>"
    
            break;
        
            default:
                break;
        }
       }
    document.getElementsByClassName("score")[0].innerHTML = table;
    document.getElementsByClassName("score1")[0].innerHTML = table1;
    document.getElementsByClassName("score2")[0].innerHTML = table2;
    document.getElementsByClassName("score3")[0].innerHTML = table3;





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

tab.concat,map
