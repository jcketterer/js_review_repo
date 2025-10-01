//FIRST CLASS FUNCTIONS
function greet() {
    console.log('HELLO!')
}

function diss() {
    console.log('YOURE NOT COOL!')
}

function repeat3times (arg){
    arg();
    arg();
    arg();
}

function repeat(num, arg) {
    for (let i = 0; i < num; i++) {
        arg();
    }
}