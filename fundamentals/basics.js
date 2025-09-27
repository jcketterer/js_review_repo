// Let you can change the value of the variable 
// Const you cannot change the value 
// var no real situation to use it these days there are differences in scoping

//slice will slice starting at the first value and then will stop the slice. The stop is before.

// console.log("Hello World");
// console.log("Hello Again");

// if (1 !== 1) {
//     console.log("ITS TRUE");
// }

let rating = 3;

if (rating === 3) {
    console.log("You are a superstar");
}
else if (rating === 2) {
    console.log('Meets expectations')
}
else if (rating === 1) {
    console.log('Needs Improvement')
}
else {
    console.log('Invalid Rating')
}


let num = 37

if (num % 2 !== 0){
    console.log("Odd Number");
}


//Another conditional example

let highScore = 1500;
let userScore = 1200;

if (userScore >= highScore) {
    console.log(`Congrats! You have the new high score of ${userScore} points!`);
    highScore = userScore;
}
else {
    console.log(`Good game, your score of ${userScore} did not beat the high score of ${highScore}!`);
}


//NESTING LOGIC

let password = 'hello';

if(password.length >= 6) {
    if(password.indexOf(' ') === -1) {
        console.log('Valid Password')
    }
    else {
        console.log('Length is correct but cannot have spaces')
    }
}
else {
    console.log('Password must be longer')
}

/*

Truthy and Falsey

Falsey Values:

false
0
'' -- Empty String
null
undefined
NaN



Truthy:
Everything Else

All numbers EXCEPT 0

*/

let mystery = 5;

if (mystery) {
    console.log('Truthy')
}
else {
    console.log('Falsey')
}



//SWITCH STATEMENT

let day = 9;

switch (day) {
    case 1: 
        console.log('monday');
        break;
    case 2: 
        console.log('tuesday');
        break;
    case 3: 
        console.log('wednesday');
        break;
    case 4: 
        console.log('thursday');
        break;
    case 5: 
        console.log('friday');
        break;
    case 6: 
        console.log('saturday');
        break;
    case 7: 
        console.log('sunday');
        break;
    default:
        console.log('Invalid Day')
}

let emoji = 'eggplant';

switch (emoji) {
    //NOTICE THE SAME VALUE YOU DONT NEED ANOTHER CONSOLE LOG OR BREAK
    case 'sad face': 
    case 'happy face': 
        console.log('yellow');
        break;
    case 'eggplant': 
        console.log('purple');
        break;
    case 'heart':
    case 'lips': 
        console.log('red');
        break;
    default:
        console.log('invalid emoji')
}

//TERNARY OPERATOR
 
let onlineStatus = 'offline';

let color = onlineStatus === 'offline' ? 'red' : 'green';


// ARRAYS



