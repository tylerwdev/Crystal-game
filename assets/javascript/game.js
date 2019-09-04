var wins = 0
var losses = 0
var score = 0

var playerScore = document.getElementById("playerScore");
var playerWin = document.getElementById("playerWin");
var playerLose = document.getElementById("playerLose")

var reset = function () {
    targetScore = Math.floor(Math.random()*101)+19
    $('#random').text(targetScore);

    dataCrystal1 = Math.floor(Math.random()*12)+1
    redCrystalDiv = $('#red-crystal')
    redCrystalDiv.attr('crystal-value', dataCrystal1);

    dataCrystal2 = Math.floor(Math.random()*12)+1
    blueCrystalDiv = $('#blue-crystal')
    blueCrystalDiv.attr('crystal-value', dataCrystal2);

    dataCrystal3 = Math.floor(Math.random()*12)+1
    greenCrystalDiv = $('#green-crystal')
    greenCrystalDiv.attr('crystal-value', dataCrystal3);

    dataCrystal4 = Math.floor(Math.random()*12)+1
    yellowCrystalDiv = $('#yellow-crystal')
    yellowCrystalDiv.attr('crystal-value', dataCrystal4);

    score = 0
    playerScore.textContent = " " + score
    playerScore = document.getElementById("playerScore");
    
    console.log(score)
}

// generate random number between 19-120 for game object

var targetScore = Math.floor(Math.random()*101)+19
$('#random').text(targetScore)

// each crystal needs a value between 1-12 assigned randomly

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

// clicking crystals adds specific crystal value to player score

$('#red-crystal').on('click', function() {
    score += dataCrystal1

    playerScore.textContent = " " + score

    if (score===targetScore){
        wins++
        document.getElementById('flash-message').innerHTML = 'You Won!'
        reset()
    }
    
    if (score > targetScore) {
        losses++
        document.getElementById('flash-message').innerHTML = 'You lost!'
        reset()
    }

    playerWin.textContent = "" + wins
    playerLose.textContent = "" + losses
})

$('#blue-crystal').on('click', function() {
    score += dataCrystal2

    playerScore.textContent = " " + score

    if (score===targetScore){
        wins++
        document.getElementById('flash-message').innerHTML = 'You Won!'
        reset()
    }
    if (score > targetScore) {
        losses++
        document.getElementById('flash-message').innerHTML = 'You lost!'
        reset()
    }

    playerWin.textContent = "" + wins
    playerLose.textContent = "" + losses
})

$('#green-crystal').on('click', function() {
    score += dataCrystal3

    playerScore.textContent = " " + score

    if (score===targetScore){
        wins++
        document.getElementById('flash-message').innerHTML = 'You Won!'
        reset()
    }
    if (score > targetScore) {
        losses++
        document.getElementById('flash-message').innerHTML = 'You lost!'
        reset()
    }

    playerWin.textContent = "" + wins
    playerLose.textContent = "" + losses
})

$('#yellow-crystal').on('click', function() {
    score += dataCrystal4

    playerScore.textContent = " " + score

    if (score===targetScore){
        wins++
        document.getElementById('flash-message').innerHTML = 'You Won!'
        reset()
    }
    if (score > targetScore) {
        losses++
        document.getElementById('flash-message').innerHTML = 'You lost!'
        reset()
    }

    playerWin.textContent = "" + wins
    playerLose.textContent = "" + losses
})

// if player score matches game object, player wins, increasing "win" score, reset game object & crystal values
// if player score exceeds game object, player loses, increasing "lose" score, reset game object & crystal values
// win or lose, display win or lose message above win/lose score
//-above statements are achieved in each crystal function and reset function
