import React, { useState } from "react";
import { Button, Card, Container, Form } from 'react-bootstrap';
import WeatherInfo from "./WeatherInfo";

function WeatherApp() {
   const [cityName, setCityName] = useState("")
   const [weatherData, setWeatherData] = useState({})

   const changeCityInput = (e) => {
      setCityName(e.target.value);
   }

   const fetchWeatherAPI = async () => {
      try {
         const APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=e0c75a1ce523f0a86ae23c285a4725ed`
         const response = await fetch(APIurl);
         console.log(response.status)
         const dataJSON = await response.json();
         setWeatherData(dataJSON);
      } catch (error) {
         console.error(error.message)
         setWeatherData({})
      }
   }

   const handleSubmit = (event) => {
      event.preventDefault()
      fetchWeatherAPI();
   }

   return (
      <Container>
         <Card className="m-5">
            <Card.Header className="text-center">
               <h3 className="text-success">React Weather App</h3>
            </Card.Header>

            <Card.Body className="p-4">
               <Form onSubmit={handleSubmit}>
                  <Form.Group>
                     <Form.Control
                        type="text"
                        onChange={changeCityInput}
                        value={cityName}
                     />
                  <Button variant="primary" type="submit">Find</Button>
                  </Form.Group>
               </Form>
               {<WeatherInfo cityName={cityName} weatherData={weatherData} />}
            </Card.Body>
         </Card>
      </Container>
   )
}

export default WeatherApp;