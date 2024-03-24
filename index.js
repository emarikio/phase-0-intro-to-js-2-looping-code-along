function writeCards(names, birthday){
    let cards = [];
    for (let i = 0; i < names.length; i++) {
        cards.push (`Thank you, ${names[i]}, for the wonderful ${birthday} gift!`)
    }
    return cards;
}
function countDown(number) {
    let count = number;
    while (count >= 0) {
        console.log(count);
        count--;
    }
}