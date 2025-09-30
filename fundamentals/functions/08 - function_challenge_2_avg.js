// Write a function called average which accepts an array of numbers...return average value.




function avg (arr) {
    let total = 0
    for (let num of arr) {
        total += num
    }
    return total / arr.length
}   

