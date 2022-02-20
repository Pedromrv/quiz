// let score = 0;

// const respuestas = {
//   rusia: "eleven",
//   island: "suecia",
//   newyork: "gotham",
//   london: "8sixty3",
//   netflix: "ninety7",
//   empire: "inca"
// }

function getResults() {

  //respuestas correctas
  var amountCorrect = 0;

// LOOP para hacer check de las preguntas
  for(var i = 1; i <= 6; i++) {
    var radiosName = document.getElementsByName('answer'+i);

//LOOP para comprobar las respuestas dentro de cada radio
       for (var j = 0; j < radiosName.length; j++) {
      var radiosValue = radiosName[j];
      if (radiosValue.checked) {
        if (radiosValue.value == "correct") {
          amountCorrect++;
          radiosValue.nextSibling.style.color = "green";
        } else {
          radiosValue.nextSibling.style.color = "red";
        }
      } else {
        radiosValue.nextSibling.style.color = "";  // valor por defecto
      }
    }
    document.getElementById('results').innerHTML = "Respuestas correctas " + amountCorrect;
    console.log(amountCorrect);
  }
}