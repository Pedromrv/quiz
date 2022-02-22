function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}


function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Pregunta " + currentQuestionNumber + " de " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Resultado</h1>";
    gameOverHTML += "<h2 id='score'> Has acertado " + quiz.score + " de 6</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// crea las preguntas
var questions = [
    new Question("¿Cuántas zonas horarias hay en Rusia?", ["1000", "13","12", "11"], "11"),
    new Question("¿Qué país tiene más islas en el mundo?", ["Suecia", "Nueva Zelanda", "Melilla", "Francia"], "Suecia"),
    new Question("¿Cuál es el nombre en argot de la ciudad de Nueva York, utilizado por los locales?", ["Gotham", "Big Apple","Algorta", "The City"], "Gotham"),
    new Question("¿Cuándo se inauguró el metro de Londres?", ["1992", "1863", "1856", "1968"], "1863"),
    new Question("¿Cuándo se fundó Netflix?", ["2001", "2009", "1997", "2015"], "1997"),
    new Question("¿Cuál de los siguientes imperios no tenía lengua escrita?", ["Inca", "Azteca", "Egipcio", "Romano"], "Inca")
];

// crea el quiz
var quiz = new Quiz(questions);

// display quiz
populate();