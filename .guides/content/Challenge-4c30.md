|||challenge
We have provided you with some starting code on the left. 

1. Create an array called `row` using `row = []`
1. Using a loop, copy the contents of row 3 into it.
1. Output the result to the screen.

|||

|||guidance
## Solution
```javascript
function initGame() {

  row = []
  for(x=0, msg=''; x<tiles.length; x++) {
    row[x] = tiles[x][3].type
  }
  showMessage(row)
  
}
```
|||