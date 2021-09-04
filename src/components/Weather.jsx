import React, { Component } from 'react';
import Hello from './Weather.module.css';
/* class Weather extends Component {
    render() {
        return (
            <span className={ergou.title}>
                类组件里面有this，有state，有生命周期
            </span>
        )
    }
} */
const Weather = () => {
    return(
        <span className={Hello.title}>
                函数组件里面没有this，没有state，没有生命周期，以后可以用hooks实现！
        </span>
    )
}


export default Weather;