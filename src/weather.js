import axios from 'axios';
import React,{Component, Fragment } from 'react';

export default class Weatherlist extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
             weatherData : []
        }
    }
    // componentDidMount = () =>{
    //     this.getweatherData()
    // }

    getweatherData = () =>{
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=8a5730258ef4c739584ac0ec3b84d800`)
        .then(response => {
            console.log(response)
            this.setState({weatherData: response.data})
        })
        .catch(err => console.log(err))
    }
    //my computer crashed halfway though i got the json responce but i couldn't render the data

    render(){
        return(
            <div>
                {/* {this.getweatherData()}              */}
                <h4>work here: </h4>
                
               
                {/* <h4>{this.state.weatherData.weather}</h4>               */}

                <button onClick={this.getweatherData()}>Get weather</button>
                {/* {
                this.state.weatherData.map(weather=>(
                    <>
                     <h4>the h4 rendered {this.state.weatherData.weather.id}</h4>    
                   <h4>{this.state.weatherData.weather.main}</h4>
                   <h4>{this.state.weatherData.weather.description}</h4> 
                   </>

                ))                     
           
        
            
            } */}
            </div>

        )
    }








}