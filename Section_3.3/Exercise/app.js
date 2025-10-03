/*
Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log “DONE!” and stop.
*/
function countDown(num) {
    const interval = setInterval(function () {
        console.log(num)
        num--;

        if(num === 0) {
            console.log('DONE!')
            clearInterval(interval)
        }


    },1000)

}

countDown(5);

/*
Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and console.log the number of tries it took before we found a number greater than .75.
*/

function randomGame() {
    let counter = 0;
    const interval = setInterval(function(){
        let randNum = Math.random()

        if (randNum < .75) {
            counter++;
        } else {
            console.log(`It took ${counter} times to find a number greater than .75`);
            clearInterval(interval);            
        }

    }, 1000);

}

randomGame();