console.log(process.argv.slice(2).reduce(function (x, y) {
  return 1*x+1*y;
}));
