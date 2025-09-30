//Get Card with no parameters

// function getCard() {
//     const value = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
//     const suit  = ['clubs','spades','hearts','diamonds'];


//     let selectedValue = value[Math.floor(Math.random() * value.length)];
//     let selectedSuit = suit[Math.floor(Math.random() * suit.length)];

//     return {
//         value: selectedValue,
//         suit: selectedSuit
//     };
// }

function pick (arr) {
    const idx =  Math.floor(Math.random() * arr.length)

    return arr[idx]
}

function getCard() {

    const value = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    const suit  = ['clubs','spades','hearts','diamonds'];

    // const selectedValue = pick(value);
    // const selectedSuit = pick(suit);

    return {
        value: pick(value),
        suit: pick(suit)
    };
}


