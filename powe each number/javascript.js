const yourNum = prompt('Enter your number :');


function powerEachChar(char) {
    let result = '';

    for (let i = 0; i < char.length; i++) {
        const powerChar = Number(char[i]);
        if (!isNaN(powerChar)) {
            const thePower = powerChar ** 2;
            result += thePower;
        }

    }

    return result;
}
console.log(powerEachChar(yourNum));