function ex_minus1() {
  var sum = 0;
  for (var index = 0; index < 100; index++) {
    sum = sum + index;
  }
  console.log(sum);
}
// ex_minus1();

function ex_minus1v2() {
  // n!
  var getNumber = parseInt(prompt("Get A number"));
  var multipleNum = 1;
  for (var index = 1; index <= getNumber; index++) {
    multipleNum = multipleNum * index;
  }
  console.log(multipleNum);
}
ex_minus1v2();
