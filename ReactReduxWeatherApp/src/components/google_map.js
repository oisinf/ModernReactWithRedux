import React, {Component} from 'react';
//Can use react-google-maps for this part instead of component
export default class GoogleMap extends Component{
    componentDidMount(){
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }
    render(){
        //this.refs.map gives direct referenct to div
        return <div ref='map'></div>;
    }
}