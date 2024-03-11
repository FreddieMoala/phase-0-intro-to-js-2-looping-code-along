// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`)
//     debugger;
// }

// const gifts = ["teddy bear", "drone", "doll", "truck"]

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and add a bow!`);
//     }

//     return gifts;
// }



function writeCards(name, event) {
    let messages = [];
    for(let i = 0; i < name.length; i++) {
        messages.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }

    return messages;

}

console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));


function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}

console.log(countDown(10));