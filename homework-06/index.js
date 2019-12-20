const os = require('os');
const util = require('util');

let RATE = process.env.RATE || 1000;
let LIMIT = process.env.LIMIT || 300;
let COLOR = process.env.COLOR || true;

let delta = 0;
const text = '!!! ATTENTION: Available memory is under the defined limit !!!';

setInterval(() => {
  console.clear();
  const totalMem = os.totalmem();
  const freeMem = os.freemem();
  const totalMemMb = (totalMem / 1024 / 1024).toFixed();
  const freeMemMb = (freeMem / 1024 / 1024).toFixed(3);
  const workMem = totalMemMb - freeMemMb;
  const resDelta = delta - workMem;

  util.inspect.styles.string = 'red';
  if (resDelta <= 0) {
    util.inspect.styles.number = 'red';
  } else {
    util.inspect.styles.number = 'green';
  }
  const colorDeltaMem = util.inspect(Number(resDelta.toFixed(3)), {
    colors: COLOR,
  });

  console.log('Total system memory: ' + totalMemMb +' MB ');
  if (freeMemMb < LIMIT) {
    util.inspect.styles.number = 'red';
    const freeMemMbRed = util.inspect(Number(freeMemMb), {
      colors: COLOR,
    });
    console.log('Free memory available: '+ freeMemMbRed +' MB');
    util.inspect.styles.number = 'white';
  } else {
    console.log('Free memory available: '+freeMemMb +' MB');
  }

  console.log('Allocated memory '+workMem +' MB');
  console.log('Delta for previous allocated memory value: '+ colorDeltaMem +' MB');
  if (LIMIT > freeMemMb) {
    console.log(
      util.inspect(text, {
        colors: COLOR,
      }),
    );
  }
  delta = workMem;
}, RATE);