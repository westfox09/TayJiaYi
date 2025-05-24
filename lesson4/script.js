//             Index Numbers:    0      1      2      3      4      5
const stockDailyClosePrices = [75.62, 74.14, 78.52, 80.21, 79.66, 88.01];

for (let i = 0; i < stockDailyClosePrices.length; i++) {
	console.log(stockDailyClosePrices[i]); // i will be 0,1,2,3,4 in each loop respectively
}

const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];
let total = 0;

// Write your code below
for (let i = 0; i < MSFTStockClosingPrices.length; i++)
{
    total += MSFTStockClosingPrices[i];
}
console.log(total);

const MSFTStockClosingPrices1 = [
    {
        Monday: 254.12,
        Tuesday: 253.12,
        Wednesday: 256.97,
        Thursday: 257.52,
        Friday: 258.93
    },
    {
        Monday: 292.20,
        Tuesday: 289.73,
        Wednesday: 291.04,
        Thursday: 294.55,
        Friday: 296.29
    }]
    
    let total1 = 0;

    // Write your code below
    for (let i = 0; i < MSFTStockClosingPrices1.length; i++) {
        console.log("Inner Array: ",MSFTStockClosingPrices1[i]);
        total1 += MSFTStockClosingPrices1[i].Monday + MSFTStockClosingPrices1[i].Tuesday + MSFTStockClosingPrices1[i].Wednesday + MSFTStockClosingPrices1[i].Thursday + MSFTStockClosingPrices1[i].Friday;
    }
    console.log(total1.toFixed(2));


    const data = [1,2,3,4];

    for(let value of data) {
        console.log(value);
    }


    const data1 = {name: "John", age: 30, city: "New York"};

    for(let key in data1) {
        console.log(key + ": " + data1[key]);
    }


    const MSFTStockClosingPrices3 = [
        {
            Monday: 254.12,
            Tuesday: 253.12,
            Wednesday: 256.97,
            Thursday: 257.52,
            Friday: 258.93
        },
        {
            Monday: 292.20,
            Tuesday: 289.73,
            Wednesday: 291.04,
            Thursday: 294.55,
            Friday: 296.29
        }]
        
        total3 = 0;
        // Write your code below
        for(let key2 in MSFTStockClosingPrices3) {
            total3 += MSFTStockClosingPrices3[key2].Monday + MSFTStockClosingPrices3[key2].Tuesday + MSFTStockClosingPrices3[key2].Wednesday + MSFTStockClosingPrices3[key2].Thursday + MSFTStockClosingPrices3[key2].Friday;
        }
        console.log("The total sum of closing prices of MSFT is " + total3.toFixed(2));


        