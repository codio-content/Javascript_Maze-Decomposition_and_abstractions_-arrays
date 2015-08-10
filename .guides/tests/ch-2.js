
var fs = require('fs');

var out = [];

function output(msg, noWrap) {
  out.push(msg);
}

try {
  var data = fs.readFileSync('/home/codio/workspace/public/js/ch-2.js', 'utf8');
  eval(data);
 
  if(out.length == 5 && 
     out[0] == 'Mary' &&
     out[1] == 'Had' &&
     out[2] == 'A' &&
     out[3] == 'Little' &&
     out[4] == 'Lamb') {
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
