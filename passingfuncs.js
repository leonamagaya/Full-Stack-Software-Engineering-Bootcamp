// function add(num1, num2){
//   return num1 + num2;
// }

// function mul(num1, num2){
//   return num1 * num2;
// }

// //operator is the function we will be calling.
// function calculator(num1, num2, operator){
//   operator(num1, num2);

function HouseKeeper(name, age, areas) {
  this.name = name;
  this.age = age;
  this.areas = areas;
  this.clean = function () {
    alert("cleaning in progresss");
  }
}

var houseKeeper1 = new HouseKeeper("Leona", 25, [bedroom, bathroom, kitchen]);
houseKeeper1.clean();
