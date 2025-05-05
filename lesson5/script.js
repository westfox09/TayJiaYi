function fetchData() {
    // Write your code here
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data retrieved"); // Simulating data retrieval
        }, 1000); // Simulating a 1 second delay
    });
}

function processData(data) {
    // Write your code here
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data + " and processed"); // Simulating data processing
        }, 2000); // Simulating a 1 second delay
    }
}

function displayData(data){
    // Write your code here
    console.log(data); // Displaying the data in the console
}

// Chaining the functions
fetchData()
    .then((data) => processData(data))
    .then((processedData) => displayData(processedData));



