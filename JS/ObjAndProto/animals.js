/*
  1. Display Animals by Families e.g: Cats, Birds, Reptiles
  2. User selects a Family and quiz on a randomly selected Animal is displayed
  3. Prompt User to Name the animal
  4. Check if correct and display result
*/

'use strict';

class Animal {
  constructor(voice, legCount) {
    this.voice = voice || 'bark (default)';
    this.legCount = legCount || '4 (default)';
  }

  speak(){
    alert(voice);
  }
}

class Cat extends Animal {
  constructor(name, color, type, voice, legCount) {
    super(voice, legCount);
    this.name = name || 'Cat';
    this.color = color;
    this.type = type || 'Wild';
  }
}

function checkAnswer(randomNumber, animal) {
  if ((randomNumber === 0 && animal === 'A') || (randomNumber === 1 && animal === 'C') || (randomNumber === 2 && animal === 'B')) {
    alert ("Congratulations! That's the CORRECT answer.");
  }
  else {
    alert ("Ooops! I'm sure you can do better.");
  }
}

var menu = prompt("Welcome to KNOW YOUR ANIMAL (the Game). Please select\n1. To Play\n2. To Exit");

var lion = new Cat('Simba', 'Brown', 'Wild', 'Roar', 4);
var pussyCat = new Cat('Fluffy', 'Black/White/Brown', 'Domestic', 'Meow', 4);
var leopard = new Cat('Zira', 'Brown with Black spots', 'Wild', 'Growl', 4);

while (menu != 2 || menu === 1) {
  var randomNumber = Math.round(Math.random() * 2);

  if (randomNumber === 0) {
    var animal = prompt(lion.name + " is a " + lion.type + " animal.\nIt lives in the bush or is sometimes caged in the zoo.\n"
                        + lion.name + " walks on " + lion.legCount + " legs, is " + lion.color + " in color and can " + lion.voice + ".\n\n"
                        + "What type of Animal is " + lion.name + "?\nA. Lion   B. Leopard   C. Jaguar\n(type A, B or C)").toUpperCase();
  }
  else if (randomNumber === 1) {
    var animal = prompt(pussyCat.name + " is a " + pussyCat.type + " animal.\nIt lives in people's houses as a pet.\n"
                        + pussyCat.name + " walks on " + pussyCat.legCount + " legs, is " + pussyCat.color + " in color and can " + pussyCat.voice + ".\n\n"
                        + "What type of Animal is " + pussyCat.name + "?\nA. Lion   B. Leopard   C. PussyCat\n(type A, B or C)").toUpperCase();
  }
  else if (randomNumber === 2) {
    var animal = prompt(leopard.name + " is a " + leopard.type + " animal.\nIt lives in the bush or is sometimes caged in the zoo.\n"
                        + leopard.name + " walks on " + leopard.legCount + " legs, is " + leopard.color + " in color and can " + leopard.voice + ".\n\n"
                        + "What type of Animal is " + leopard.name + "?\nA. Lion   B. Leopard   C. Jaguar\n(type A, B or C)").toUpperCase();
  }

  checkAnswer(randomNumber, animal);

  var menu = prompt("Please select\n1. To Play again\n2. To Exit");
}

alert("Exiting... Thank you for playing 'KNOW YOUR ANIMALS.'");
