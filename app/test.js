console.log('Wygląda na to, że wszystko działa :)');
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});