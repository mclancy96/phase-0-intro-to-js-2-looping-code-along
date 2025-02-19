// Code your solutions in this file
const writeCards = (names, typeOfCard) => {
    const messages = [];
    names.forEach(name => {
        messages.push(`Thank you, ${name}, for the wonderful ${typeOfCard} gift!`);
    });
    return messages;
}

const countDown = () => {

}