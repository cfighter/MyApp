import React from 'react';

class SliderItem extends React.Component{
	render(){
		let width=100/this.props.count+'%';
		let style={	width:width	};
		return(
          <li className='slider-item' style={style}>
          	<a href={this.props.item.url}>
          		<img src={this.props.item.src} alt={this.props.item.alt}/>
          	</a>
          </li>
		);
	}
}

export default SliderItem;