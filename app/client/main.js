import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './components/Slider2/Slider.js';

class App extends React.Component{
	render(){		
		return(
			<div >
				<Slider/>
			</div>
		)
	}
}
/*class App extends React.Component{
	constructor(props){
		super(props);
		this.state={
			index:1
		}
	}
	componentDidMount(){
		setInterval(()=>{
			if(this.state.index==3){
				this.setState({
				index:1
			});
			}else {
			this.setState({
				index:this.state.index+1
			});
		}
		},3000)
	}
	render(){		
		return(
			<div className='main'>
				<ReactCSSTransitionGroup transitionName="detail">
				<img key={this.state.index} src={'./images/'+this.state.index.toString()+'.jpg'}/>
				</ReactCSSTransitionGroup>
			</div>
		)
	}
}*/
ReactDOM.render(<App/>,document.getElementById('app'));

