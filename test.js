function testeFinal(myString, myNumber) {
    switch (myString) {
        case "mundojs":
            console.log("MundoJS");
            return myNumber;
        case "soma":
            return (myNumber / 2) + (myNumber ** 2);
        case "vetor":
            let vetor = [];
            for (i = 0; i != 5; i++) {
                vetor[i] = 2 * i + myNumber;
            }
            return vetor;
    }

}

testeFinal("mundojs", 5);


console.log(testeFinal("soma", 5));

console.log(testeFinal("vetor", 5));

