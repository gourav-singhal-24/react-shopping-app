import React, { Component } from 'react';
import HeaderBarComponent from '../components/HeaderBarComponent.js';
export default class Home extends Component{
    render(){
        var divStyle = {
            margin:0
        }
        return(
            <div style={divStyle}>
            <HeaderBarComponent />
            { this.props.children }
            </div>
        );
    }
}