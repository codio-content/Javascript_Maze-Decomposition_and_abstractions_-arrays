This next bit is quite fun. It will challenge your ability to write some code and so solve problems.

## Escape the maze
We have generated a simple maze and you have to escape. However, we've disabled the arrow keys.

## Helper function
We have provided a helper function `checkWall()` that checks whether there is a wall to the left, right, above or below the player. To check if there is a wall above, you would call `checkWall('A').

```javascript
if ( !checkWall('A') ) {
  player.moveUp
}
```

This is asking "if there is **not** (that's the `!` remember) a wall above the player, then move up.

|||challenge
Using the `checkWall()` function and some `if / else if` statements, get your player to the exit.

You have to escape by writing code and you're not allowed to use the `player.x` or `player.y` functions. You are allowed to use `player.moveUp()` type functions though.

You can create a really simply solution that works just for this fixed maze. We will look at more challenging mazes later.

|||


|||guidance
## One possible solution

```javascript
function keyPressedEvent(keyCode) {

  if( !checkWall('U') )
    player.moveUp()
  else if( !checkWall('R') )
    player.moveRight()
  else if( !checkWall('L') )
    player.moveLeft()
  else if( !checkWall('D') )
    player.moveDown()

}
```
|||