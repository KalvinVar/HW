// USE Alt + Shift + F to fix indent
// 1) Explain the structure of the JSON
/* JSON organizes weather data: cities, temperatures, chance of rain. The webpage would take 
that JSON payload and display the weather forecast for different cities around the world.*/
let weather_data = {
    data: [
        {
            city: "New York",
            temp: 18,
            rain: 30
        },
        {
            city: "Los Angeles",
            temp: 25,
            rain: 10
        },
        {
            city: "London",
            temp: 12,
            rain: 50
        },
        {
            city: "Tokyo",
            temp: 20,
            rain: 20
        },
        {
            city: "Sydney",
            temp: 22,
            rain: 15
        }
    ]
};

const table = document.getElementById("columbody");
// 2) Write the loop and explain while making it
for (i in weather_data.data) {
const row = document.createElement("tr");

const cell1 = document.createElement("td");
cell1.textContent = weather_data.data[i].city;
row.appendChild(cell1);

const cell2 = document.createElement("td");
cell2.textContent = weather_data.data[i].temp;
row.appendChild(cell2);

const cell3 = document.createElement("td");
cell3.textContent = weather_data.data[i].rain;
row.appendChild(cell3);

table.appendChild(row);
};

// 3) Save it