/*--------------------------------------------------*/
/*-- EXECUTION STEPS -------------------------------*/
/*--------------------------------------------------*/
/*
    1. Define Functions
    2. Prompt for USSD
    3. Call Functions, based on stage in the sequence

*/

//Functions with Prompts
function mainMenu(){
  return prompt ("1. Login\n2. Exit");
}

function loginRequest(){
  return prompt ("Enter your 6-digit login PIN.\nMake sure you don't share this PIN with anybody");
}

function menu(){
  return prompt ("1. Prepaid\n2. Bank Statement\n3. Balances\n4. Exit");
}

//Functions with ifs
function main2(choice) {
  if (choice === "1") {
    alert ("You get the drift... Get prepaid");
  }
  else if (choice === "2") {
    alert ("You get the drift... Get bank statements");
  }
  else if (choice === "3") {
    alert ("You get the drift... Get bank balance");
  }
  else if (choice === "4") {
    alert ("Exiting... Thank you for using Mobile Banking");
  }
  else {
    alert ("Invalid input! Exiting...");
  }
}

function main(choice){
  if (choice === "1") {
    var login = loginRequest();

    if (login === "898989") {
      var choice2 = menu();

      main2(choice2);
    }
    else {
      alert ("Wrong PIN entered.\n Thank you for using Mobile Banking");
    }
  }
  else if (choice === "2") {
    alert ("Exiting... Thank you for using Mobile Banking");
  }
  else {
    alert ("Invalid input! Exiting...");
  }
}


//MAIN EXECUTION
var ussd = prompt("Enter the Mobile Banking USSD");

if (ussd === "*120*2345#") {
  var choice = mainMenu();

  main(choice);
}
else {
  alert ("Invalid USSD code inputed");
}
