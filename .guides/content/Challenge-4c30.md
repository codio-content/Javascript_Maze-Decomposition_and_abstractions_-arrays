|||challenge

We have provided you with a starting function on the left to code you solution in. 

1. Create an array called `result` like this `result = []`
1. Copy the tile types (`tiles[x][y].type`) from the maze's 3rd row into `result`.
1. Output `result` using the `output()` function.
1. The objective is to end up with output looking something like `wall, floor, floor...`

{Check It!!|custom}(ch-3)

|||

|||guidance
## Solution
```javascript
function initGame() {

  result = []
  
  for(x=0, msg=''; x<tiles.length; x++) {
    result[x] = tiles[x][3].type
  }
  
  output(result)
    
}
```
|||