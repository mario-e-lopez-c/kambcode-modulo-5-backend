const fs = require('fs');

//Create a string with numbers  from 1 o 1000, each  on a new line
let numbers = '';
for (let i = 1; i<=1000; i++){
    numbers += i + '\n'; //Add each number followed by a newline character
}

//Asynchronous write
fs.writeFile('numeros.txt', numbers, (err) => {
    if(err){
        console.error(err);
        return;
    }
    console.log('File has been written wih numbers 1 to 1000');

    //Step 2: Read the created file 
    fs.readFile('numeros.txt', 'utf8', (err, data) => {
        if(err) {
            console.log('Error reading the file: ', err);
            return;
        }

        //Step 3: Parse the numbers into an array
        const numbersArray = data.split('\n').map(Number);

        //Step 4: Filter out the even numbers
        const evenNumbers = numbersArray.filter(num => num % 2 === 0);

        console.log('These are the even numbers: ', evenNumbers)

        //Step 5: Create a String with the even numbers, each on a new line
        const evenNumbersStr = evenNumbers.join('\n');

        //Step 6: Write the even numbers to a new line
        fs.writeFile('numeros_pares.txt', evenNumbersStr, (err) => {
            if(err) {
                console.error('Error writing the even numbers file: ', err);
                return;
            }
            console.log('File numeros_pares.txt created successfully with even numbers!');
        })
    })
})