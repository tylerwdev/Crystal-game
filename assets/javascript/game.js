

//TODO: generate random number between 19-120 for game object

var targetScore = Math.floor(Math.random()*101)+19
$('#random').text(targetScore)

//committed to here at school

//TODO: each crystal needs a value between 1-12 assigned randomly

var dataCrystal1 = Math.floor(Math.random()*12)+1
var redCrystalDiv = $('#red-crystal')
redCrystalDiv.attr('crystal-value', dataCrystal1)

var dataCrystal2 = Math.floor(Math.random()*12)+1
var blueCrystalDiv = $('#blue-crystal')
blueCrystalDiv.attr('crystal-value', dataCrystal2)

var dataCrystal3 = Math.floor(Math.random()*12)+1
var greenCrystalDiv = $('#green-crystal')
greenCrystalDiv.attr('crystal-value', dataCrystal3)

var dataCrystal4 = Math.floor(Math.random()*12)+1
var yellowCrystalDiv = $('#yellow-crystal')
yellowCrystalDiv.attr('crystal-value', dataCrystal4)

//all 4 crystals havent been committed yet

//TODO: clicking gems adds specific gem value to player score
//TODO: if player score matches game object, player wins, increasing "win" score
//TODO: if player score exceeds game object, player loses, increasing "lose" score
//TODO: On win or lose, both game object and crystal values randomly reset
//TODO: - win or lose, display win or lose message above win/lose score




//random target score
//display score to user
//generate random value to each crystal and attach
//when user clicks on crystal (click handler event), add current value to user score
//update user score
//check if game over
//reset

