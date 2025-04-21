const msftData = [190.15, 194.21, 191.07, 190.44, 200.15];


// Initialize a variable to store the total of the msftData array
msftTotal = 0;

// Loop through the msftData array and add each value to msftTotal
for (let i = 0; i < msftData.length; i++) {
    msftTotal = msftTotal + msftData[i];
}

// Calculate the average by dividing the total by the number of elements in the array
console.log(msftTotal / msftData.length);