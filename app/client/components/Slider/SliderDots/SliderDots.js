import React from 'react';
import './SliderDots.scss';
class SliderDots extends React.Component{
	handleSelect(option){
		this.props.handleSelect(option);
	}
	render(){
		let dots=[];
		for(let i=0;i<this.props.count;i++){
			dots.push('');
		};
		const dotsList=dots.map((d,index)=>(
			<li key={'dot-'+index}
				className={'slider-dot '+(this.props.currentIndex===index?'slider-dot-selected':'')}
				onClick={this.handleSelect.bind(this,index-this.props.currentIndex)}>
			</li>
		));
		return(
			<ul className="slider-dots-wrap">
				{dotsList}
			</ul>
		)
	}
}

export default SliderDots;