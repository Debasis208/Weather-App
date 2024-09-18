
# Weather App

## 📖 Description

The Weather App is a simple, user-friendly application that allows users to access real-time weather information based on their current location or by searching for a city. Built using HTML, CSS, and JavaScript, this app leverages the Weather API to provide accurate weather data.


## 🚀 Features

- Current Weather: Automatically fetches weather data based on the user's location using geolocation.
- Search Functionality: Users can search for weather information by city name.
- Real-time Data: Displays current temperature, weather conditions, humidity, wind speed, and cloudiness.
- Responsive Design: Adapts to various screen sizes for a seamless experience on desktop and mobile devices.


## 🔧 Technologies Used

- HTML: For structuring the web application.
- CSS: For styling and layout.
- JavaScript: For functionality and API interactions.
- Weather API: Fetches real-time weather data.
## Acknowledgements

 - [Free Weather API](https://www.weatherapi.com/)
 - [Weather API Documentation](https://www.weatherapi.com/docs/)


## 📊 API Reference

#### Get all items

- Base URL: ```https://api.weatherapi.com/v1/current.json```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `APIkey` | `string` | **Required**. Your API key |
| `q`  | `string` |  **Required**. - Searched location(ex: q=Mumbai) |
| `lat` , `lon` | `number` | **Optional**. Either mention city or longitude and latitude (ex: q=19.076090,72.877426) |


- Final URL using cityName: ```https://api.weatherapi.com/v1/current.json?key=${APIkey}&q=${cityName}```

- Final URL using lat & lon:```https://api.weatherapi.com/v1/current.json?key=${APIkey}&q=${lat},${lon}```

- You can go for [Weather API Documentation](https://www.weatherapi.com/docs/) to know what are the items you will get.

`{
    "location": {
        "name": "London",
        "region": "City of London, Greater London",
        "country": "United Kingdom",
        "lat": 51.507,
        "lon": -0.127,
        "tz_id": "Europe/London",
        "localtime_epoch": 1632000000,
        "localtime": "2023-09-18 12:00"
    },
    "current": {
        "temp_c": 20.0,
        "condition": {
            "text": "Partly Cloudy",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png"
        },
        "wind_kph": 10.0,
        "humidity": 60,
        "cloud": 20
    }
}`

## Installation

- To run this project locally, follow these steps:
```bash
  git clone https://github.com/Debasis208/Weather-App.git
  cd Weather-App

```
- Open the `weather.html` file in your browser:
```bash
  open weather.html 

```
## 📲 Usage
    1. Upon opening the app, click the "Grant Access" button to allow location access.
    2. The app will automatically fetch and display weather information for your current location.
    3. To search for a specific city, click the "Search Weather" tab, enter the city name, and hit the search button.


## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for any suggestions or improvements.


## 📫 Contact

For any inquiries or feedback, feel free to reach out:

- Your Name: debasismohanty209@gmail.com
- GitHub: https://github.com/Debasis208

