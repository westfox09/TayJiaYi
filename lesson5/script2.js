fetch ('https://www.alphavantage.co/query?function=EARNINGS&symbol=MSFT&apikey=R4MJUY96CQ5GH191')
.then(response => response.json())
.then(data => console.log(data["annualEarnings"][5]["reportedEPS"]))








fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        'ticker': 'APPL',
        'name': 'Apple Inc',
        'price': 171.48
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));