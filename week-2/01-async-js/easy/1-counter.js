let count = 0;

for (let i = 1; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000 * i);
}
