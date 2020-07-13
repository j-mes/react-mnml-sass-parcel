import React from 'react';
import ReactDOM from 'react-dom';
import './sass/app.scss';
import Header from './components/header';

class HelloMessage extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<div className="container">
					<h1>Hello {this.props.name}</h1>
				</div>
			</div>
		);
	}
}

let App = document.getElementById('app');

ReactDOM.render(<HelloMessage name="James" />, App);
