import React from 'react';
import ReactDOM from 'react-dom';
/*import Slider from './components/Slider/index.js';*/
/*import Tab from './components/Tab/Tab.js';*/
import News from './components/News/News.js';
class App extends React.Component{
	render(){		
		return(
			<div >
				<News/>
				<News/>
				<News/>
				<News/>

				<News/>

				<News/>
				<News/>
				<News/>
				<News/>
				<News/>
				<News/>
			</div>
		)
	}
}
ReactDOM.render(<App/>,document.getElementById('app'));

