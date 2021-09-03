import React, { Component } from 'react';
import Hello from './Weather.module.css';
export default class Weather extends Component {
    render() {
        return (
            <span className={Hello.title}>
                类组件
            </span>
        )
    }
}
