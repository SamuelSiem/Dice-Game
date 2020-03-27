function myFunction(){

  var randomNumber1 = Math.ceil(Math.random()*6);
  var randomNumber2 = Math.ceil(Math.random()*6);
  var dice;
  var dice2;

  if(randomNumber1 === 1){
    dice = "fas fa-dice-one"
  }else if(randomNumber1 === 2){
    dice = "fas fa-dice-two"
  }else if(randomNumber1 === 3){
    dice = "fas fa-dice-three"
  }else if(randomNumber1 === 4){
    dice = "fas fa-dice-four"
  }else if(randomNumber1 === 5){
    dice = "fas fa-dice-five"
  }else{
    dice = "fas fa-dice-six"
  }

  if(randomNumber2 === 1){
    dice2 = "fas fa-dice-one"
  }else if(randomNumber2 === 2){
    dice2 = "fas fa-dice-two"
  }else if(randomNumber2 === 3){
    dice2 = "fas fa-dice-three"
  }else if(randomNumber2 === 4){
    dice2 = "fas fa-dice-four"
  }else if(randomNumber2 === 5){
    dice2 = "fas fa-dice-five"
  }else{
    dice2 = "fas fa-dice-six"
  }

  if(randomNumber1===randomNumber2){
    document.getElementById("winner").innerHTML = "It is a TIE ! Please roll again";
  }else if(randomNumber1 > randomNumber2){
    document.getElementById("winner").innerHTML = "<i class='fas fa-flag'></i> Player 1 Wins!";
  }else{
    document.getElementById("winner").innerHTML = "Player 2 Wins! <i class='fas fa-flag'></i>";
  }

  document.getElementById("dice-img-p1").className = dice;
  document.getElementById("dice-img-p2").className = dice2;

  document.getElementById("play-again").classList.remove('hidden');
}
