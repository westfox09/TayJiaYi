const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

const calculateAverage = (prices) => // Function to calculate the average of an array of prices
{
  let sum = 0; // Initialize sum to 0

  for (let i = 0; i < prices.length; i++) // Loop through each element in the array
    {
    sum += prices[i]; // Add current element to sum
    }
  return sum / prices.length; // Return the average
}
console.log("The 7-day SMA of AMD is ", calculateAverage(amdPrices).toFixed(2)); //Output
