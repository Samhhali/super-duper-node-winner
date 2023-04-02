// implement event loop
const fs = require('fs');
fs.readFile('./eventLoop.js', () => {
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });
});

// Path: eventLoop2.js
// implement event loop
fs.readFile('./eventLoop2.js', () => {
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });
});

// Path: eventLoop3.js
// implement event loop
fs.readFile('./eventLoop3.js', () => {
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });
});

// Path: eventLoop4.js
// implement event loop
fs.readFile('./eventLoop4.js', () => {
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });
});

// Path: eventLoop5.js
// implement event loop
fs.readFile('./eventLoop5.js', () => {
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });
});