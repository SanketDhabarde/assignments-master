/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  let a = 0;
  for (let i = 0; i < milliseconds; i++) {
    a++;
  }
  return new Promise((resolves, rejects) => {
    setTimeout(() => {
      resolves();
    }, milliseconds);
  });
}

module.exports = sleep;
