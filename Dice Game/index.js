
// Generates two random numbers from 1-6
var randomNumber1=Math.floor((Math.random()*6)+1);
var randomNumber2=Math.floor((Math.random()*6)+1);

//Selects each image and inserts the random number generated to the image source path so that it changes to the respective number
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png")
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png")

//condition which determines the winner 
if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="Player 1 Wins!";
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").textContent="Player 2 Wins!";

}else{
    document.querySelector("h1").textContent="Draw";

}