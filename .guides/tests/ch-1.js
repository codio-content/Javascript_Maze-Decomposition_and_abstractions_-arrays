
var fs = require('fs');

var out = [];

function output(msg, noWrap) {
  out.push(msg);
}

try {
  var data = fs.readFileSync('/home/codio/workspace/public/js/ch-1.js', 'utf8');
  eval(data);
 
  if(typeof numArray != 'undefined' && Array.isArray(numArray)) {    
    if(numArray.length == 5 && 
       out[0] == 0 &&
       out[1] == 10 &&
       out[2] == 20 &&
       out[3] == 30 &&
       out[4] == 40)
    process.stdout.write('Well done!');  
    process.exit(0);
  }

  process.stdout.write('Not quite right, try again!');  
  process.exit(1);

}
catch(e) {
  
}

process.stdout.write('Not quite right, try again!');  
process.exit(1);
