//sélectionner tous les éléments
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// si le bouton Lancer le Quiz est cliqué
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //afficher info box
}

// si le bouton Quitter le Quiz est cliqué
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //cacher info box
}

// si le bouton continue est cliqué
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //cacher info box
    quiz_box.classList.add("activeQuiz"); //afficher quiz box
    showQuetions(0); //appeler showQestions function
    queCounter(1); //passer 1 parametre to queCounter
    startTimer(15); //appeler startTimer function
    startTimerLine(0); //appeler startTimerLine function
}

let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// si le button recommencer est cliqué
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //afficher quiz box
    result_box.classList.remove("activeResult"); //cacher result box
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //appeler showQestions function
    queCounter(que_numb); //passer que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //appeler startTimer function
    startTimerLine(widthValue); //appeler startTimerLine function
    timeText.textContent = "Time Left"; //changer le texte of timeText to Time Left
    next_btn.classList.remove("show"); //cacher the next button
}

// si le button quitter est cliqué
quit_quiz.onclick = ()=>{
    window.location.reload(); //recharger la fenêtre en cours
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// si le button suivant est cliqué
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ //si le nombre de questions est inférieur à la longueur totale des questions
        que_count++; //incrémenter la valeur que_count
        que_numb++; //incrémenter la valeur que_numb
        showQuetions(que_count); //appeler showQestions function
        queCounter(que_numb); //passer la valeur que_numb to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //appeler startTimer function
        startTimerLine(widthValue); //appeler startTimerLine function
        timeText.textContent = "Time Left"; //changer the timeText to Time Left
        next_btn.classList.remove("show"); //cacher le button suivant
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //appeler showResult function
    }
}

// obtenir les questions et les options à partir du tableau
function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    //créer une nouvelle balise span et div pour la question et l'option et transmettre la valeur à l'aide de l'index de tableau
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //ajouter une nouvelle balise span à l'intérieur de que_tag
    option_list.innerHTML = option_tag; //ajouter une nouvelle balise div à l'intérieur de option_tag
    
    const option = option_list.querySelectorAll(".option");

    // définir l'attribut onclick sur toutes les options disponibles
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// créer les nouvelles balises div pour les icônes
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//si l'utilisateur a cliqué sur une option
function optionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //obtenir l'option sélectionnée par l'utilisateur
    let correcAns = questions[que_count].answer; //obtenir la bonne réponse du tableau
    const allOptions = option_list.children.length; //obtenir tous les éléments d'option
    
    if(userAns == correcAns){ //si c'est la bonne réponse
        userScore += 1; //incrémenter score
        answer.classList.add("correct"); //ajouter la couleur vert sur la bonne réponse
        answer.insertAdjacentHTML("beforeend", tickIconTag); //ajouter l'icone juste
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //ajouter la couleur rouge sur la réponse séléctionnée
        answer.insertAdjacentHTML("beforeend", crossIconTag); //ajouter l'icone X
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //s'il y a une option qui correspond à une réponse de tableau
                option_list.children[i].setAttribute("class", "option correct"); //ajouter la couleur verte à l'option correspondante
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //ajouter une icône x à l'option correspondante
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //une fois que l'utilisateur a sélectionné une option, désactiver toutes les options
    }
    next_btn.classList.add("show"); //afficher le bouton suivant si l'utilisateur a sélectionné une option
}

function showResult(){
    info_box.classList.remove("activeInfo"); //cacher info box
    quiz_box.classList.remove("activeQuiz"); //cacher quiz box
    result_box.classList.add("activeResult"); //afficher result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 6){ // si l'utilisateur a marqué plus de 6
        //créer une nouvelle balise span et transmettre le numéro de score de l'utilisateur et le nombre total de questions
        let scoreTag = '<span>Félicitation! , Vous avez eu <p>'+ userScore +'</p> de <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //ajout d'une nouvelle balise span dans score_Text
    }
    else if(userScore > 3){ // si l'utilisateur a marqué plus de 3
        let scoreTag = '<span>Bien ! , Vous avez eu <p>'+ userScore +'</p> de <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // moins de 4
        let scoreTag = '<span>Dommage , Vous avez eu que <p>'+ userScore +'</p> de <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changer la valeur de timeCount avec time value
        time--; //decrementer time 
        if(time < 9){ //si timer inferieur à 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //ajouter 0 avant time
        }
        if(time < 0){ //si timer inferieur à 9
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; //changer time text to time off
            const allOptions = option_list.children.length; //obtenir tous les éléments d'option
            let correcAns = questions[que_count].answer; //obtenir la bonne réponse
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ //s'il y a une option qui correspond à une réponse de tableau
                    option_list.children[i].setAttribute("class", "option correct"); //ajouter le vert
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //ajouter l'icon
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //une fois que l'utilisateur a sélectionné une option, désactiver toutes les options
            }
            next_btn.classList.add("show"); //afficher le button suivant
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; //incrementer time
        time_line.style.width = time + "px"; //augmentation de la largeur de time_line avec px par time
        if(time > 549){ //si la valeur de temps est supérieure à 549
            clearInterval(counterLine); //clear counterLine
        }
    }
}

function queCounter(index){
    //créer une nouvelle balise span et transmettre le numéro de la question et les questions totale
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //ajout d'une nouvelle balise span dans bottom_ques_counter
}