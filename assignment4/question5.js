const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];

function averageClosing(data)
{
    let total = 0; // Initialize total to 0
    let count = 0; // Initialize count to 0

    for (let day of data) // Loop through data
	{
        total += parseFloat(day.close); // Float the closing price and add to total
        count++; 
    }

    return average = (total / count); // Return the average

}

console.log("Average closing price of Disney is " + (averageClosing(disneyData)).toFixed(2)); //Output
// Note: 123.005 but according to live view, it is showing 123.00
