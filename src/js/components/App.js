import React, { Component } from 'react'
import{ Link } from 'react-router' ;
import strings from '../utils/locale.js';
export default class App extends Component{
	componentWillMount() {
   localStorage.language = 'en';
    }
	render()
	{ 
		strings.setLanguage(localStorage.language);
	  return (
		<div>
		{ this.props.children }
		</div>
			)
	}
}