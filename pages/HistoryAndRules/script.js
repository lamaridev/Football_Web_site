var historybtn = document.getElementsByClassName("historybtn")[0];
var rulesbtn = document.getElementsByClassName("rulesbtn")[0];

var historyview = document.getElementsByClassName("historyview")[0];
var rulesview = document.getElementsByClassName("rulesview")[0];

console.log(historyview);



historybtn.addEventListener("click",function()
{
    historyview.classList.add("historyview");
    historyview.classList.remove("historyviewhidden");
    rulesview.classList.remove("rulesview");
    rulesview.classList.add("rulesviewhidden");
    
})




rulesbtn.addEventListener("click",function()
{
    historyview.classList.remove("historyview");
    historyview.classList.add("historyviewhidden");
    rulesview.classList.add("rulesview");
    rulesview.classList.remove("rulesviewhidden");
})