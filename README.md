# unit-4-game

## Crystal Game 

The game generates a random number that the user needs to match.

This is accomplished by clicking each crystal, which is given a random value at the start of the game.

The user can't see the crystal's value. When the player clicks the crystal, the hidden value adds to the section 'total score' and continues to add on each click.

If the total score matches the randomly generated number from the beginning of the game, the player wins.
If the total score exceeds the randomly generated number, the player loses.

If the player wins or loses, a message is displayed stating as such. 

When the player wins or loses, the randomly generated number from the beginning and the values of each Crystal are reset to a new number/value.


### Pseudo code
// generate random number between 19-120 for game object

// each crystal needs a value between 1-12 assigned randomly

// clicking crystals adds specific crystal value to player score

// if player score matches game object, player wins, increasing "win" score, reset game object & crystal values

// if player score exceeds game object, player loses, increasing "lose" score, reset game object & crystal values

// win or lose, display win or lose message above win/lose score

//-above statements are achieved in each crystal function and reset function