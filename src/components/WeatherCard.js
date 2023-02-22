import React from 'react'
import { Card, Feed } from 'semantic-ui-react'
import moment from 'moment'

const WeatherCard = ({temprature, humidity, sunrise, sunset, city}) => (
  <Card>
    <Card.Content>
      <Card.Header className='weather-card-child'>{city}</Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Content>
            <h5 className='weather-card-child'>{moment().format('MMMM Do YYYY, h:mm a')}</h5>
           <div className='weather-card'>
            <div className='weather-card-child'>
                {Math.floor(temprature)}℉
            </div>
            <div className='weather-card-child'>
                {humidity} 
            </div>
           </div>
           <div className='weather-card'>
            <div className='weather-card-child'>
                {new Date(sunrise*1000).toLocaleTimeString('en-IN')}
            </div>
            <div className='weather-card-child'>
            {new Date(sunset*1000).toLocaleTimeString('en-IN')}
            </div>
           </div>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>
)

export default WeatherCard