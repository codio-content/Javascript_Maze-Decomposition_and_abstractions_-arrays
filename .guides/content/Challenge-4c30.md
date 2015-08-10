
{Check It!|assessment}(test-4668404)

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