var buffer, fs, res, str;

fs = require('fs');

buffer = fs.readFileSync(process.argv[2]);

str = buffer.toString();

res = str.split('\n');

console.log(res.length - 1);
