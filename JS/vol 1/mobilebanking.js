var ussd = prompt("Enter the Mobile Banking USSD");

if (ussd === "*120*2345#") {
  var choice = prompt ("1. Login\n2. Exit");

  if (choice === "1") {
    var login = prompt ("Enter your 6-digit login PIN.\nMake sure you don't share this PIN with anybody");

    if (login === "898989") {
      var choice = prompt ("1. Prepaid\n2. Bank Statement\n3. Balances\n4. Eixt");

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
else {
  alert ("Invalid USSD code inputed");
}
