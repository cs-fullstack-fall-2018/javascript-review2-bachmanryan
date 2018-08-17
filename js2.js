function main() {
    var enterNumber = (prompt("Enter a number:"));
    if(enterNumber >= 0){
        alert("POSITIVE");
    }
    else if(enterNumber <= 0){
        alert("NEGATIVE");
    }
    else if(enterNumber == 0){
        alert("ZERO");
    }
    else{
        alert("ERROR");
    }

}

main();