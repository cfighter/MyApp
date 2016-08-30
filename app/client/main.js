import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './components/Slider/index.js';

class App extends React.Component{
	render(){		
		return(
			<div >
				<Slider/>
			</div>
		)
	}
}
ReactDOM.render(<App/>,document.getElementById('app'));

