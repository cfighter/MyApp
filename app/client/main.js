import React from 'react';
import ReactDOM from 'react-dom';
import Animate from './Animate';
class App extends React.Component{
	render(){
		return(
			<div>
				<Animate/>
			</div>
		)
	}
}
ReactDOM.render(<App/>,document.getElementById('app'));

