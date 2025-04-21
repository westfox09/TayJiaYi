
let company = "Microsoft's";
console.log(company);

company = 'Microsoft\'s';
console.log(company);

const company2 = "Microsoft's";
const company3 = "is an IT company";
const closingPrice = 1000;
console.log(company2 + " " + company3);
console.log(company2 + " closed at " + closingPrice);

const companyName ="Amazon";
const companyRating = 5;
console.log("%s has a customer satisfaction rating of %f", companyName, companyRating);

let companyName2 = "Metaa";
let char2 = companyName2.toUpperCase().substring(0, 4);
console.log(char2);

const DayOneClosingPrice = "87.14";
const DayTwoClosingPrice = "84.22";
DayOneClosingPrice2 = parseFloat(DayOneClosingPrice);
DayTwoClosingPrice2 = parseFloat(DayTwoClosingPrice);
console.log((DayOneClosingPrice2 + DayTwoClosingPrice2)/2);

const TSLAClosingPrice = [230.12, 221.45, 225.61, 219.48, 227.52];
console.log(TSLAClosingPrice[4], TSLAClosingPrice[0], TSLAClosingPrice[2]);
let sum = 0;
for (let i = 0; i < TSLAClosingPrice.length; i++) {
    sum += TSLAClosingPrice[i];
}
console.log("Average closing price of TSLA is " + (sum / TSLAClosingPrice.length).toFixed(3));


const AAPLCurrentBar = {
	open: 81.12,
	high: 82.59,
	low: 80.09,
	close: 84.71
}

const AAPLPrevBar = {
	open: 81.02,
	high: 82.49,
	low: 79.09,
	close: 83.71
}
console.log((AAPLPrevBar.open + AAPLPrevBar.close) / 2);
console.log(Math.max(AAPLCurrentBar.high, AAPLCurrentBar.open, AAPLCurrentBar.close));


const stockOHLC = {
	open: 81.12,
	high: 82.59,
	low: 80.09,
	close: 84.71,
}
// Write your code below
if (stockOHLC.open > stockOHLC.close) {
    console.log("Stock is Bearish");
}
else if (stockOHLC.open < stockOHLC.close) {
    console.log("Stock is Bullish");
}else {
    console.log("Stock is Neutral");
}
