const fs = require('fs');
const stdin = fs.openSync('/dev/stdin', 'rs');
module.exports = message => {
  fs.writeSync(process.stdout.fd, message + ' ');
  const buf = Buffer.alloc(1);
  let s = '';
  fs.readSync(stdin, buf, 0, 1, null);
  while (buf[0] != 10 && buf[0] != 13) {
    s += buf;
    fs.readSync(stdin, buf, 0, 1, null);
  }
  return s;
};
