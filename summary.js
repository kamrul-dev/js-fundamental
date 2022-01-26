var tableLength = 12;
var tourDestinations = ['coxsbazar', 'nepal', 'vutan', 'paris'];

tourDestinations.indexOf('vutan');

var fourthDestination = tourDestinations[3];

tourDestinations[1] = 'srinlanka';

tourDestinations.push('London');
tourDestinations.pop();


if(tourDestinations[1] == 'nepal'){
    console.log('I will go Nepal');
}
else if(tourDestinations[1] == 'china'){
    console.log('Not interested to go in china');
}
else if(tourDestinations.length == 4){
    console.log('I will visit more');
}
else{
    console.log('no visit anywhere');
}

var eggPrice = 32;
var myBugdet = 32;
if(eggPrice <= myBugdet){
    console.log('ami dim khabo');
}


if(eggPrice >= myBugdet){
    console.log('ami dim khabo');
}