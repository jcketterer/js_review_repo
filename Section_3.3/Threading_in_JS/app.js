//JS IS A SINGLE THREADED LANGUAGE

function greet() {
    console.log('HELLO!')
}

function diss() {
    console.log('YOURE NOT COOL!')
}

//THIS RUNS FIRST
greet();
//THIS ALERT WILL STAY UNTIL I CLICK OK MANUALLY
//AND PREVENTS THE DISS FUNCTION TO RUN
// alert('hello alert')
//FINALLY THIS RUNS
diss();