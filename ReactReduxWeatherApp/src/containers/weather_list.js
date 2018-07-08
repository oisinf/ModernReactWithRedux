import React, {Component} from 'react'; 
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
import Toast from '../components/toast';

class WeatherList extends Component{

    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const {lon , lat} = cityData.city.coord;
        
        return(
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td> <Chart data={temps} color='orange' units='k'/> </td>
                <td> <Chart data={pressure} color='purple' units='hPA'/> </td>
                <td> <Chart data={humidity} color='green' units='%'/> </td>
            </tr>
        );
    }

    render(){
        //Need to create a new component i.e an toast alert to deal with
        //404 errors
        //console.log(this.props.weather);
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City </th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPA)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}){
    //Same as return {weather: weather} i.e {weather: state.weather} if args was state not weather
    //Need error checking if not a valid search bar input
    return { weather };
}

export default connect(mapStateToProps)(WeatherList)