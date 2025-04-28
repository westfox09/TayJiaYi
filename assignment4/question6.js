// const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]

//let data = ()
//for price in data:
//if price < 3:
//data.push(price)


const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]; // Array of AMD prices

const price = amdPrices.sort((a, b) => a - b); // Sort the prices in ascending order

const lowPrice = price.slice(0, 3); // Get the three lowest prices

console.log("The three lowest prices are " + lowPrice[0] + ", " + lowPrice[1] + " and " + lowPrice[2]); //Output

