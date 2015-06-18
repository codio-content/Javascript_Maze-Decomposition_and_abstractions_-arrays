
var result;

function output(val) {
  result = val;
}

$.getScript(window.location.origin + '/public/js/' + window.testEnv.cmd + '.js?_=' + Date.now())
.done(function (script, status) {
    
  gameStarted (initGame)
  createRandomMaze(12, 8)
      
  if(typeof result != 'undefined' && Array.isArray(result)) {    
  
    for(var i = 0; i < mazeWidth; i++) {
      if(tiles[i][3].type != result[i]) {
        break;
      }

      return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.SUCCESS, 'Well done!');    
    }    
  }
  
  codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
  
})
.fail(function (jqxhr, settings, exception) {
  console.log(exception);
  codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.INVALID, exception.message); 
});