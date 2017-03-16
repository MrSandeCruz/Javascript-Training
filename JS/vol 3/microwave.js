/*
  1. Declare what food, temperature and duration of heating
  2. Check if food
  3. Check if temperature is already hot
  4. Check if duration is not equal zero
  5. Start heating
  6. Display outcome
*/
'use strict';

class Abinci {
  constructor(name, temperature, duration){
    this.name = name;
    this.temperature = temperature;
    this.duration = duration;
  }

  reheat(){
    if (abinci.temperature === "hot" || abinci.temperature === "piping hot"){
      console.log("Your " + abinci.name + " is already " + abinci.temperature + ",\nNo need reheating.");
    }
    else if (this.temperature != "hot" || this.temperature != "piping hot"){
      if (abinci.duration > 10000){
        console.log("Haba Bros! You wan burn the food.\nUse stove abeg *rolling eyes*");
      }
      else if (abinci.duration > 2000 && abinci.duration < 10000){
        console.log("Your " + abinci.name + " is reheating and will be ready in " + abinci.duration + " seconds(s)");
        abinci.temperature = "Piping Hot";
      }
      else if (abinci.duration > 0 && abinci.duration <= 2000) {
        console.log("Your " + abinci.name + " is reheating and will be ready in " + abinci.duration + " seconds(s)");
        abinci.temperature = "Hot";
      }
      else {
        console.log("You have not set a time for reheat.");
        abinci.temperature = this.temperature;
      }

      if (abinci.duration >= 0 && abinci.duration < 10000){
        setTimeout(function () {
          console.log("Your " + abinci.name + " is " + abinci.temperature + ".");
        }, abinci.duration);
      }
    }
    else {
      console.log("Wrong Temperature inputed.");
    }
  }
};

var food = prompt ("What do you want to heat? \n(e.g: rice, coffee, oat)");
var temp = prompt ("What's the temperature of what you want to heat? \n(e.g: hot, warm, cold)");
var time = prompt ("How long do you want to heat? \n(e.g: 1000, 3000, 5000)");
time = parseInt(time);

var abinci = new Abinci(food, temp, time);

abinci.reheat();
