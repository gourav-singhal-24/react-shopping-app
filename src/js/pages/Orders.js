import React , { Component } from 'react';
import OrdersContainer from '../container/OrdersContainer.js';

export default class Orders extends Component{
    render(){
        return(
            <div>
            <h2 className="text-center well well-sm">Orders </h2>
            <OrdersContainer />
            </div>
        );
    }
}