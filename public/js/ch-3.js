
function initGame() {

  row = []
  for(x=0, msg=''; x<tiles.length; x++) {
    row[x] = tiles[x][3].type
  }
  showMessage(row)
  
}

