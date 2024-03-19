var num = Math.ceil(Math.random() * 100);
var count = 1;
console.log(num);

function uservalue() {
    var numuser = parseInt(document.getElementById("num").value);
    if (numuser === num) {
        document.getElementById("res").textContent = "Congratulations!!! You guessed the number in " + count + " tries.";
    } else if (numuser > num) {
        document.getElementById("res").textContent = "Try with a smaller number.";
    } else {
        document.getElementById("res").textContent = "Try with a greater number.";
    }
    document.getElementById("try").textContent = count;
    count++;
}
function reset() {
    document.getElementById("num").value = ""; // Reset input field
    document.getElementById("res").textContent = "Enter a number in the box"; // Reset result message
    document.getElementById("try").textContent = "0"; // Reset try counter
}
