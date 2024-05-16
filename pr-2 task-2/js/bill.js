let units = 300;

let bill, surcharge, totalamount;

if (units <= 50) {
  bill = units * 1;
}
else if (units <= 150) {
  bill = units * 2;
}
else if (units <= 250) {
  per = (3 / 100) * 20;
  bill = (units * 3) + per;
}
else if (units > 250) {
  per = (4 / 100) * 20;
  bill = (units * 4) + per;
}

surcharge = bill * 0.20;
totalamount = bill + surcharge;

let ebill = document.getElementById("bill").innerHTML = "Unit :" + bill;
document.getElementById("titel").innerHTML = " electricity unit and calculate <br> amount to pay"