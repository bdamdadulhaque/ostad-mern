// 1. Discount calculator
function discountCalculator(purchase_amount) {
  if (purchase_amount >= 50 && purchase_amount <= 100) {
    var discounted_amount = (purchase_amount * 5) / 100;
    console.log(
      "Purchase amount is = " +
        purchase_amount +
        "Discounted amount is = " +
        discounted_amount
    );
  } else if (purchase_amount >= 100 && purchase_amount <= 200) {
    var discounted_amount = (purchase_amount * 10) / 100;
    console.log(
      "Purchase amount is = " +
        purchase_amount +
        "Discounted amount is = " +
        discounted_amount
    );
  } else if (purchase_amount >= 200) {
    var discounted_amount = (purchase_amount * 15) / 100;
    console.log(
      "Purchase amount is = " +
        purchase_amount +
        "Discounted amount is = " +
        discounted_amount
    );
  }
}
discountCalculator(0);

// 2. Filter even number
var givenArray = [12, 34, 45, 23, 6, 78, 54, 90];
var evenNumberArray = givenArray.filter(function (element) {
  return element % 2 === 0;
});
console.log("Even number array is = " + evenNumberArray);

// 3. Multiplication table generator
function calculateMultiplication(inputNumber){
    for (var i = 1; i <= 10; i++){
        console.log(i + "x" + inputNumber + "=" + i*inputNmber);
    }
}
calculateMultiplication(5);

//4. Grade calculator
switch(score){
    case score >= 90:
        console.log("A");
      break;
    case score >= 80 && score <= 90:
            console.log("B");
        break;
    case score >= 70 && score <= 80:
        console.log("C");
    break;
    case score >= 60 && score <= 70:
            console.log("D");
        break;
    default:
        console.log("F");

}
