// Create a pangram. Sentence that contains all lettes of the alphabet
//
//The quick brown foxs jumps over the lazy dog

//With indexOf()
// function isPangram(sent) {
//     for (let char of 'abcdefghijklmnopqrstuvwxyz'){
//         if(sent.toLowerCase().indexOf(char) === -1) {
//             return false;
//         }
//     }
//     return true;
// }

//With includes
function isPangram(sent) {
    for (let char of 'abcdefghijklmnopqrstuvwxyz'){
        if(!sent.toLowerCase().includes(char)) {
            return false;
        }
    }
    return true;
}
