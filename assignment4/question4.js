const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

function averageClosing(data) // Function to calculate the average closing price of MSFT
{
    let total = 0; // Initialize total to 0

	for (let day of data) // Loop through data
 	{
		total += day[3]; // Add the closing price (4th element) to total
	}

	let average = total / data.length; // Calculate the average

	return average; // Return the average
} 

console.log("Average closing price of MSFT is " + averageClosing(msftData).toFixed(2)); //Output