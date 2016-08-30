import React from 'react';
import SliderItem from '../SliderItem/SliderItem.js';
class SliderItems extends React.Component{
	render(){
		const length=this.props.items.length;
		const count=length+2;
		const style={
			transform:'translateX('+(-100/count-100/count*this.props.currentIndex)+'%)',
			width:count*100+'%'
		};
		return(
			<ul className='slider-items-wrap' style={style}>
				<SliderItem item={this.props.items[length-1]} key={'item-x'} count={count}/>
				{this.props.items.map((item,index)=>(
					<SliderItem key={'items-'+index} item={item} count={count}/>
				))}
				<SliderItem item={this.props.items[0]} key={'item-y'} count={count}/>
			</ul>
		)
	}
}

export default SliderItems;

