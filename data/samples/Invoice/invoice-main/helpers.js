function now() {
  return new Date().toLocaleDateString();
}

function nowPlus20Days() {
  const date = new Date();
  date.setDate(date.getDate() + 20);
  return date.toLocaleDateString();
}

function total(items) {
  let sum = 0;
  items.forEach(function(i) {
    console.log('Calculating item ' + i.name + '; you should see this message in debug run');
    sum += i.price;
  });
  return sum;
}
