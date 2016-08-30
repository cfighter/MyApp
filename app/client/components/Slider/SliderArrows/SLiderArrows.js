import React from 'react';
class SliderArrows extends React.Component{
	handleSelect(option){
		this.props.handleSelect(option)
	}
	render(){
		return(
			<div className='slider-arrows-wrap'>
				<span 
					className='slider-arrow slider-arrow-left'
					onClick={this.handleSelect.bind(this,-1)}>
					&lt;
				</span>
				<span 
					className='slider-arrow slider-arrow-right'
					onClick={this.handleSelect.bind(this,1)}>
					&gt;
				</span>
			</div>
		)
	}
}

export default SliderArrows;