import React, { Component } from 'react';
import MyOption from './MyOption';

class MySelect extends Component {
	render() {
		return (
			<div className="MySelect">
				<MyOption>Volvo</MyOption>
				<MyOption>Saab</MyOption>
				<MyOption>Mercedes</MyOption>
				<MyOption>Audi</MyOption>
			</div>
		);
	}
}

export default MySelect;
