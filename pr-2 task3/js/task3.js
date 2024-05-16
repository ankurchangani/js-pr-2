let principalAmount = 1000;
let numberOfYears = 10;

let rate;
if (numberOfYears > 3 && numberOfYears <= 5) {
    rate = 3;
} else if (numberOfYears > 5 && numberOfYears <= 8) {
    rate = 5;
} else if (numberOfYears > 8 && numberOfYears <= 12) {
    rate = 12;
} else {
    rate = 15;
}

let interest = (principalAmount * rate * numberOfYears) / 100;
document.getElementById("contant").innerHTML = "a bank will pay you interest when you deposit   your money in a high-yield savings account "
document.getElementById("rate").innerHTML = "Interest Rate : " + rate + "%" + "<br>"
document.getElementById("total").innerHTML = "Total Interest : " + interest + "<br>"
