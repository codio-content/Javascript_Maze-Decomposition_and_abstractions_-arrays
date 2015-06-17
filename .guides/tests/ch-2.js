
var out = [];

function output(msg, noWrap) {
  out.push(msg);
  document.body.innerHTML += msg
  if(typeof noWrap != undefined && noWrap) document.body.innerHTML += '<br>'
}

$.getScript(window.location.origin + '/public/js/' + window.testEnv.cmd + '.js?_=' + Date.now())
.done(function (script, status) {
      
  if(out.length == 5 && 
       out[0] == 'Mary' &&
       out[1] == 'Had' &&
       out[2] == 'A' &&
       out[3] == 'Little' &&
       out[4] == 'Lamb') {
    return codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.SUCCESS, 'Well done!');    
  }
  
  codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.FAILURE, 'Not quite right, try again!');
 
})
.fail(function (jqxhr, settings, exception) {
  console.log(exception);
  codio.setButtonValue(window.testEnv.id, codio.BUTTON_STATE.INVALID, exception.message); 
});