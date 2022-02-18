//Outputs:
alert("Hi! I'm practicing javascript!")
//console.log("Batata")
//document.write("Nutella!" + '<br>')

//Input:
const studentName = prompt("Insert student name");
let gradeList = [null, null, null, null];
let total = 0;

for (i in gradeList) {
    console.log(i);
    gradeList[i] = parseInt(prompt("Insert grade number " + (i + 1)));
    console.log(gradeList[i]);
    total += gradeList[i];
};

//for (var i = 0; i < gradeList.length; i++) {
//    console.log(i);
//    gradeList[i] = parseInt(prompt("Insert grade number " + (i + 1)));
//    console.log(gradeList[i]);
//    total += gradeList[i];
//};

const mean = total / gradeList.length;

//const grade1 = parseInt(prompt("Insert first grade"));
//const grade2 = parseInt(prompt("Insert second grade"));
//const grade3 = parseInt(prompt("Insert third grade"));
//const grade4 = parseInt(prompt("Insert fourth grade"));
//const total = grade1 + grade2 + grade3 + grade4;


document.write(`The sum of all grades is ${total}` + "<br>");
document.write(`The mean is ${mean}` + "<br>");

if (mean >= 50) {
    document.write(`Kudos to ${studentName}! They passed the class.`);
} else {
    document.write(`Unfortunately for ${studentName}, they failed the class.`);
}

//Obs1.: the prompt function always returns a string.
//Obs2.: you can parse a variable to int using parseInt, to float using parseFloat
//Obs3.: you can use document.write to break a line using <br>