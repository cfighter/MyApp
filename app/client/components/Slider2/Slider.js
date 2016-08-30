import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import getDirection from './direction.js'
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
		const $this=this;
		this.autoPlay();
		let startX, startY, endX, endY,dir;
		document.querySelector('.slider').addEventListener('touchstart',function(ev){
			startX = ev.touches[0].pageX;
        	startY = ev.touches[0].pageY;
		},false);
		document.querySelector('.slider').addEventListener('touchend',function(ev){
			endX = ev.changedTouches[0].pageX;
        	endY = ev.changedTouches[0].pageY;
        	dir=getDirection(startX, startY, endX, endY);
        	switch(dir){
        		case 3:{
        			$this.handleDotSelect(1);
        			break;
        		}
        		case 4:{
        			$this.handleDotSelect(-1)
        			break;
        		}default:   
        	}
		},false);
		
	}
	autoPlay(){
		clearInterval(this.Play);
		this.Play=setInterval(this.play.bind(this,1),3000)
	}
	handleDotSelect(option){
		clearInterval(this.Play);
		if(option<0){
			this.setState({
				direction:-1
			})
		}		
		setTimeout(()=>{
			this.setState({
				direction:1
			})
			this.autoPlay()
		},500)
		this.play(option);
		
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
			
			<div className='slider'>
			{/*<div className='slider'
							onMouseOver={this.pausePlay.bind(this)}
							onMouseOut={this.autoPlay.bind(this)}
						>*/}
				<ReactCSSTransitionGroup ref='tr' transitionName={this.state.direction==1?'slider-item':'slider-left'} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
					<a href={item.href} key={'slider-item-'+this.state.currentIndex}>
						<img src={item.src} alt={item.alt}/>
					</a>					
				</ReactCSSTransitionGroup>
				<SliderDots count={this.props.items.length} currentIndex={this.state.currentIndex} handleDotSelect={this.handleDotSelect.bind(this)}/>
			{/*<SliderArrows handleArrowClick={this.handleDotSelect.bind(this)}/>*/}
			</div>
		)
	}
}
export default Slider;
Slider.defaultProps={
	items:[{
		src:'http://img2.imgtn.bdimg.com/it/u=1346329280,89502990&fm=11&gp=0.jpg',
		title:'测试1',
		alt:'describe1'
	},{
		src:'http://img5.imgtn.bdimg.com/it/u=1285570517,2864562204&fm=11&gp=0.jpg',
		title:'测试2',
		alt:'describe2'
	},{
		src:'http://img2.imgtn.bdimg.com/it/u=2342726223,3244749003&fm=11&gp=0.jpg',
		title:'测试3',
		alt:'describe3'
	}]
}