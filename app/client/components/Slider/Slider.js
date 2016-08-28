import React from 'react';
import './slider.scss';

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

class SliderDots extends React.Component{
	handleDotSelect(index){
		this.props.handleDotSelect(index);
	}
	render(){
		let dots=[];
		for(let i=0;i<this.props.count;i++){
			dots.push('');
		};
		const dotsList=dots.map((d,index)=>(
			<li key={'dot-'+index}
				className={'slider-dot '+(this.props.currentIndex===index?'slider-dot-selected':'')}
				onClick={this.handleDotSelect.bind(this,index-this.props.currentIndex)}>
			</li>
		));
		return(
			<ul className="slider-dots-wrap">
				{dotsList}
			</ul>
		)
	}
}
class SliderArrows extends React.Component{
	handleArrowClick(option){
		this.props.handleArrowClick(option)
	}
	render(){
		return(
			<div className='slider-arrows-wrap'>
				<span 
					className='slider-arrow slider-arrow-left'
					onClick={this.handleArrowClick.bind(this,-1)}>
					&lt;
				</span>
				<span 
					className='slider-arrow slider-arrow-right'
					onClick={this.handleArrowClick.bind(this,1)}>
					&gt;
				</span>
			</div>
		)
	}
}

class Slider extends React.Component{
	constructor() {
        super();
        this.state={
        	currentIndex:0
        }
    }
    play(option){
		let index=this.state.currentIndex+option;
		if(index<0){
			index=this.props.items.length-1
		}
		if(index>=this.props.items.length){
			index=0
		}
		this.setState({
			currentIndex:index
		})
	}
    startPlay(){
		this.autoPlay=setInterval(this.play.bind(this,1),2000)
	}
	pausePlay(){
		clearInterval(this.autoPlay)
	}
    componentDidMount(){
		this.startPlay();
	}
	render(){
		const count=this.props.items.length;
		const sliderItems=this.props.items.map((item,index)=>(
			<SliderItem key={'item-'+index} item={item} count={count}/>
		));
		const style={
			left:-100*this.state.currentIndex+'%',
			transitionDuration:this.props.speed+'s',
			width:count*100+'%'
		};
		return(
			<div className='slider'
				onMouseOver={this.pausePlay.bind(this)}
				onMouseOut={this.startPlay.bind(this)}>
				<ul style={style}>{sliderItems}</ul>
				<SliderDots count={count} currentIndex={this.state.currentIndex} handleDotSelect={this.play.bind(this)}/>
				<SliderArrows handleArrowClick={this.play.bind(this)}/>
			</div>	
		)
	}
}

export default Slider;

Slider.defaultProps={
	items:[{
		src:'./images/1.jpg',
		title:'测试1',
		alt:'describe1'
	},{
		src:'./images/2.jpg',
		title:'测试2',
		alt:'describe2'
	},{
		src:'./images/3.jpg',
		title:'测试3',
		alt:'describe3'
	}]
}