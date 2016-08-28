import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './slider.scss';

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
	constructor(props){
		super(props);
		this.state={
			currentIndex:0,
			direction:1
		}
	}
	componentDidMount(){
		this.autoPlay();
	}
	autoPlay(){
		this.Play=setInterval(this.play.bind(this,1),3000)
	}
	handleDotSelect(option){
		if(option<0){
			this.setState({
				direction:-1
			})
		}		
		this.play(option);
		setTimeout(()=>{
			this.setState({
				direction:1
			})
		},900)
		
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
			currentIndex:index,
		})
		
	}
	pausePlay(){
		clearInterval(this.Play);
	}
	render(){
		const item=this.props.items[this.state.currentIndex];
		return(
			<div className='slider'
				onMouseOver={this.pausePlay.bind(this)}
				onMouseOut={this.autoPlay.bind(this)}
			>
				<ReactCSSTransitionGroup ref='tr' transitionName={this.state.direction==1?'slider-item':'slider-left'} transitionEnterTimeout={800} transitionLeaveTimeout={800}>
					<a href={item.href} key={'slider-item-'+this.state.currentIndex}>
						<img src={item.src} alt={item.alt}/>
					</a>					
				</ReactCSSTransitionGroup>
				<SliderDots count={this.props.items.length} currentIndex={this.state.currentIndex} handleDotSelect={this.handleDotSelect.bind(this)}/>
				<SliderArrows handleArrowClick={this.handleDotSelect.bind(this)}/>
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