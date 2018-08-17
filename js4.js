function main() {
    var favNumber = prompt("Enter your favorite number: ");
    alert("Favorite Number is: " + favNumber);
    aboveOrBelow100();
}

function aboveOrBelow100() {
    if (favNumber > 100) {
        alert("Above 100");
    }
    else if (favNumber < 100) {
        alert("Below 100");
    }
    else if (favNumber == 100) {
        alert("Its Equal");
    }

}

main();
