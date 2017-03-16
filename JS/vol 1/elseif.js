var randomNumber = Math.round(Math.random() * 15);

if(((randomNumber%3) === 0) && ((randomNumber%5) === 0) && (randomNumber != 0)){
  alert (randomNumber + " FizzBuzz");
}
else if(((randomNumber%3) === 0) && (randomNumber != 0)){
  alert (randomNumber + " Fizz");
}
else if(((randomNumber%5) === 0) && (randomNumber != 0)){
  alert (randomNumber + " Buzz");
}
else{
  alert (randomNumber);
}
