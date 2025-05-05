const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

let max = amdPrices[0]; // Initialize max with the first element

for (let i = 0; i < amdPrices.length; i++) // Loop through each element in the array
{
  if (amdPrices[i] > max) // Compare current element with max
    {
        max = amdPrices[i]; // Update max if current element is greater
    }
}
console.log("AMD 52-week high is ", max); //Output