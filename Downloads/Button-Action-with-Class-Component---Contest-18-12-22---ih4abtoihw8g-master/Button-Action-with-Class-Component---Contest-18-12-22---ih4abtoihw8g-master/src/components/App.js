import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { display: false };
		this.handleClick = this.handleClick.bind(this)
	};
	handleClick() {
		this.setState({ display: true });
	}


	render() {
		return (
			<div id="main">
				{ /* Do not remove this main div!! */}
				<button id="click" onClick={this.handleClick}>Click</button>
				{this.state.display === true ? <p id="para">Hello,I have learnt to use the</p> : ''}

			</div>
		);
	}
}


export default App;

