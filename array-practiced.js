// array declaration
var numList = [1, 3, 5, 6, 8];   //numeric array
var fruitsName = ['apple', 'orange', 'painapple', 'lichee'];
var isExpensive = true;

// find the array length from fruitsName
//==================================================
var lengthFound = fruitsName.length
// console.log(lengthFound);
// console.log(fruitsName.length);


// find the index number from numList
//================================================
// console.log(numList.indexOf(6));
// console.log(fruitsName.indexOf('orange'));


//find the data element by using index number
//====================================================
// console.log(numList[2]);
// console.log(fruitsName[3]);


// change the array element
//==================================================
// numList[1] = 4;
// console.log(numList);

// Add or remove new element from array using push and pop
//=========================================================
// numList.push(9);
// console.log(numList);
// fruitsName.push('guava');
// console.log(fruitsName);

// numList.pop();
// console.log(numList);
// fruitsName.pop()
// console.log(fruitsName);

// first item remove from an array and added item to an array at the beginning
//==============================================================================
// numList.shift();
// console.log(numList);

// numList.unshift(0);
// console.log(numList);


// conditional operator
//======================================================
var hasMoney = 500;
var zooVisit = 1000;
var isRaining = true;

// if(isRaining == true){
//     console.log('I will not go outside');
// }


// if(hasMoney > zooVisit){
//     console.log('I will visit the zoo');
// }
// else{
//     console.log('I will not be able to visit zoo');
// }


// if((hasMoney > zooVisit) && isRaining == true){
//     console.log('I will visit the zoo');
// }
// else{
//     console.log('I will not be able to visit zoo');
// }

// if((hasMoney > zooVisit) || isRaining == true){
//     console.log('I will visit the zoo');
// }
// else{
//     console.log('I will not be able to visit zoo');
// }

var number = 80;
if (number < 0 || number > 100) {
    console.log("Invalid Input");
}
else if (number >= 90 && number <= 100) {
    console.log("grade A+");
}
else if (number >= 80 && number <= 89) {
    console.log("grade A");
}
else if (number >= 70 && number <= 79) {
    console.log("grade B");
}
else if (number >= 60 && number <= 69) {
    console.log("grade C");
}
else if (number >= 50 && number <= 59) {
    console.log("grade D");
}
else {
    console.log("grade F");
}



var Signal = 'red';
var Signal = 'yellow';
var Signal = 'green';

if (Signal == 'red') {
    console.log("danger");
}
else if (Signal == 'yellow') {
    console.log("stop");
}
else if (Signal == 'green') {
    console.log("go now ");
}