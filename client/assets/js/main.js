$(document).ready(initializeApp);


var calculationArray = [];
var displayArray = [];
var stringNumberToPush = "";
var calculationResult = null;


function initializeApp(){
  applyClickHandlers();

}

function applyClickHandlers(){
  $('#number-block').on('click','.number',numberButtonHandler);
  $('#operator-column').on('click', '.operator', operatorButtonHandler);
  $('#equals').on('click', equalsButtonHandler);

    function numberButtonHandler(event){
      var inputtedNumber = "";
      inputtedNumber= $(event.currentTarget).find('p').text();
      //console.log(inputtedNumber);
      stringNumberToPush += inputtedNumber;
      displayArray.push(inputtedNumber);
      //console.log(displayArray);
      updateDisplay();



  }

  function operatorButtonHandler(event){
    //console.log(event);
    var inputtedOperator = "";
    inputtedOperator = $(event.currentTarget).find('p').text();
    displayArray.push(inputtedOperator);
    updateDisplay();
    calculationArray.push(stringNumberToPush);
    //console.log(calculationArray)
    calculationArray.push(inputtedOperator);
    console.log(calculationArray)
    stringNumberToPush = " ";
  }

  function equalsButtonHandler(event){
    //console.log(event);
    calculationArray.push(stringNumberToPush);
    stringNumberToPush = " ";
    displayArray = [];
    console.log(calculationArray);
  }
}
function updateDisplay() {
  var displayText = displayArray.join("");
  $('#display-text').text(displayText);
}
