If you look at the code, you can see that we are using a loop that references an array. 

## Explanation

```javascript
y = player.y
```
This is declaring a variable `y` and then assigning the current Y coordinate of the player. `player` is an object that has an `x` and a `y` property.

```javascript
msg += tiles[x][y].type
```

`tiles[x][y]` references the game tile in the xth column for the current player row. 

In fact, each tile is an object and the property we are interested in is called `.type` and contains the name of the entity at that tile position.

Remember that `str += 'hello'` is the same as `str = str + 'hello'`? Initially, our loop sets `msg=''`, so it is an empty string. Each time through the loop, we are building up the string with the `.type` string, then adding a space to it.

Once our loop is finished, we display the final `msg` using the `showMessage()` function.

Compare the message to the maze. Press the reload button to see how the information changes each time a random maze is generated.
