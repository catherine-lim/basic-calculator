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
  $('#decimal').on('click', decimalButtonHandler);
  $('#ac-button').on('click', allClearButtonHandler);
  $('#c-button').on('click', clearButtonHandler);

function allClearButtonHandler(event){
  displayArray = [];
  updateDisplay();
  stringNumberToPush = "";
  calculationArray = [];
}

function clearButtonHandler(event){
  displayArray = [];
  updateDisplay();
}

    function numberButtonHandler(event){
      var inputtedNumber = "";
      inputtedNumber= $(event.currentTarget).find('p').text();
      //console.log(inputtedNumber);
      stringNumberToPush += inputtedNumber;
      displayArray.push(inputtedNumber);
      //console.log(displayArray);
      updateDisplay();

  }
  function decimalButtonHandler(event){
    var inputtedDecimal = "";
    inputtedDecimal= $(event.currentTarget).find('p').text();
    stringNumberToPush += inputtedDecimal;
    displayArray.push(inputtedDecimal);
    updateDisplay();
  }

  function operatorButtonHandler(event){

    var inputtedOperator = "";
    inputtedOperator = $(event.currentTarget).find('p').text();
    displayArray.push(inputtedOperator);
    updateDisplay();

    calculationArray.push(stringNumberToPush);
    console.log(calculationArray)
    calculationArray.push(inputtedOperator);
    console.log(calculationArray)
    stringNumberToPush = "";

  }

  function equalsButtonHandler(event){
    //console.log(event);
    calculationArray.push(stringNumberToPush);
    stringNumberToPush = "";
    displayArray = [];
    console.log(calculationArray);
    //var answer = calculate(calculationArray[0], calculationArray[2], calculationArray[1]);

    var calculateValue = null;
    var answer = parseFloat(calculationArray[0])

    for(var i =0; i < calculationArray.length-1 ; i+=2){
      //console.log("calculattion Array", calculationArray)
      calculateValue = calculate(answer,calculationArray[i+2],calculationArray[i+1]);
      answer = calculateValue;
}





    displayArray.push(answer);
    console.log(answer);
    updateDisplay();

}

}
function updateDisplay() {
  var displayText = displayArray.join("");
  $('#display-text').text(displayText);
  
}

function calculate(num1, num2, operator){
  var number1 = parseFloat(num1);
  var number2 = parseFloat(num2);
  var result = null;


        switch(operator){
          case '+':
          result = number1 + number2;
          break;
          case '-':
          result = number1 - number2;
          break;
          case '*':
          result = number1 * number2;
          break;
          case '/':
            if(number2 === 0){
              result = "error"
            } else{
          result = number1 / number2;
            }
         
}

return result;

  //calculate(1, 2, '+');
}
