function findPrimesInRange() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    document.getElementById("result").innerHTML = "Tổng các số nguyên tố trong khoảng " + num1 + " và " + num2 + " là " + sum;
}

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
