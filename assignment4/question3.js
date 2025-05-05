const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

function aboveAverage(prices) // Function to count the number of days above the average 
{
    let total = 0; // Initialize total to 0
    let count = 0; // Initialize count to 0

    for (let value of prices) // Loop through each element in the array 
    {
        total += value; // Add current element to total
    }

    const average = total / prices.length; // Calculate the average

    for (let value of prices) // Loop through each element in the array again 
    {
        if (value > average) // Check if current element is above the average
        {
            count++; // Increment count if current element is above the average
        }
    }

    return count; // Return the count of days above the average
    
}

console.log("Number of days AMD was above the 7-day SMA is: ", aboveAverage(amdPrices)); //Output
