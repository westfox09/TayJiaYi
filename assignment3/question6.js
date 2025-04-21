const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09",
	volume: "90000"
};

// Convert string values to numbers
let disneyDataOpen = parseFloat(disneyData.open);
let disneyDataHigh = parseFloat(disneyData.high);
let disneyDataLow = parseFloat(disneyData.low);
let disneyDataClose = parseFloat(disneyData.close);
let disneyDataVolume = parseFloat(disneyData.volume);

// #1 Check if CLOSE is greater than OPEN and the volume is greater than 100000
// Strong Bullish
// Else if volume not greater than 100000, Bullish
// #2 Check if CLOSE is less than OPEN and the volume is greater than 10000
// Strong Bearish
// Else if volume not greater than 10000, Bearish
// #3 If none of the above conditions are met, it is considered Bearish

// #1
if (disneyDataClose > disneyDataOpen && disneyDataVolume > 100000) 
	{
		console.log("Strong Bullish");
	}   
		else if (disneyDataClose > disneyDataOpen)
		{
			console.log("Bullish");
		}
			// #2
			else if (disneyDataClose < disneyDataOpen && disneyDataVolume > 10000)
			{
				console.log("Strong Bearish");
			}
				else
				{
					// #3
					console.log("Bearish");
				}