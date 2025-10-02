//JS IS A SINGLE THREADED LANGUAGE

function greet() {
    console.log('HELLO!')
}

function diss() {
    console.log('YOURE NOT COOL!')
}

//THIS RUNS FIRST
// greet();
//THIS ALERT WILL STAY UNTIL I CLICK OK MANUALLY
//AND PREVENTS THE DISS FUNCTION TO RUN
// alert('hello alert')
//FINALLY THIS RUNS
// diss();

//Using setTimeout

greet();

setTimeout(diss /* <-- NO PARENS! */, 3000) //2 args, a function to call and a delay

greet(); //BOTH GREET FUNCTIONS RUN IMMEDIATELY

//SET INTERVAL

//you get an interval id of 1 for this example
// const id = setInterval(diss, 2000);