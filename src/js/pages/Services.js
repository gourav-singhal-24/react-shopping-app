import React , { Component } from 'react';
import ServicesContainer from '../container/ServicesContainer.js';    
export default class Services extends Component{
   
  constructor(props) {
    super(props);
  }

  render(){
        return(
            <div>
             <h2 className="text-center well well-sm">Services</h2>
             <ServicesContainer />
            </div>
        );
    }
}