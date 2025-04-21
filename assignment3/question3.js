const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09"
};

// Convert string values to numbers
let disneyDataOpen = parseFloat(disneyData.open);
let disneyDataHigh = parseFloat(disneyData.high);
let disneyDataLow = parseFloat(disneyData.low);
let disneyDataClose = parseFloat(disneyData.close);

// Calculate using the formula of the open, high, low, and close values with fixed 2 decimal places
console.log((disneyDataOpen - disneyDataHigh + disneyDataLow - disneyDataClose).toFixed(2));		
