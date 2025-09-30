/*

Write a function isValidPassword with 2 args password and username.

Password must be at least 8 char long, no spaces, and cannot contain the username

if all requirements are met then true else false. 

*/

// let password = 'testingpassword'
// let username = 'yadood'

// if(password.length >= 8 && password.indexOf(' ') === -1 && !password.includes(username)) {
//     console.log('good password')
// }
// else {
//     console.log('bad password')
// }

function isValidPassword(password, username) {
    if (
        password.length < 8 || 
        password.indexOf(' ') !== -1 || 
        password.indexOf(username) !== -1
    ) {
        return false;
    }
    return true;
}

