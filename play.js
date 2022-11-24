var randomNumber1=Math.floor(Math.random()*6)+1;

//console.log(randomNumber1);
var sr="images/dice"+randomNumber1.toString()+".png";
//console.log(sr);
document.querySelector(".img1").setAttribute("src",sr);

var randomNumber2=Math.floor(Math.random()*6)+1;

//console.log(randomNumber1);
var src="images/dice"+randomNumber2.toString()+".png";
//console.log(src);
document.querySelector(".img2").setAttribute("src",src);
if(randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML="🚩Draw!🚩";
}
else if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}else{
  document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
}
