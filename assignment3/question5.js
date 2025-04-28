const bacData = [190.15, 194.21, 191.07, 192.44, 129000];

// #1 Check if the current price is greater than the previous price and the volume is greater than 100000
// Strong Bullish
// Else if volume not greater than 100000, Bullish
// #2 Check if the current price is less than the previous price and the volume is greater than 10000
// Strong Bearish
// Else if volume not greater than 10000, Bearish
// #3 If none of the above conditions are met, it is considered Bearish

// #1
if (bacData[3] > bacData[2] && bacData[4] > 100000) 
{
    console.log("Strong Bullish");
}   
    else if (bacData[3] > bacData[2])
    {
        console.log("Bullish");
    }
        // #2
        else if (bacData[3] < bacData[2] && bacData[4] > 10000)
        {
            console.log("Strong Bearish");
        }
            else
            {
                // #3
                console.log("Bearish");
            }
