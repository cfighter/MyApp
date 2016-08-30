import React from 'react';
import SliderItems from '../SliderItems/SliderItems.js';
import SliderDots from '../SliderDots/SliderDots.js';
import SliderArrows from '../SliderArrows/SLiderArrows.js';
import getDirection from './getDirection.js';
import '../slider.scss';
class Slider extends React.Component{
	constructor() {
        super();
        this.state={
        	currentIndex:0
        }
    }
    componentDidMount(){
		const $this=this;
		this.autoPlay();
		let startX, startY, endX, endY,direction;
		document.querySelector('.slider-items-wrap').addEventListener('touchstart',function(ev){
			startX = ev.touches[0].pageX;
        	startY = ev.touches[0].pageY;
		},false);
		/*document.querySelector('.slider-items-wrap').addEventListener('touchmove',function(ev) {
			endX = ev.changedTouches[0].pageX;
        	endY = ev.changedTouches[0].pageY;
		      event.preventDefault(); 		     
		      var offset = (endX - startX) / window.innerWidth / (3 + 2) * 100;
		      var cur_x = offset;
		      document.querySelector('.slider-items-wrap').style.transform = "translate3d(" + cur_x + "%,0,0)";
		   
		},false);*/
		document.querySelector('.slider-items-wrap').addEventListener('touchend',function(ev){
			endX = ev.changedTouches[0].pageX;
        	endY = ev.changedTouches[0].pageY;
        	direction=getDirection(startX, startY, endX, endY);
        	switch(direction){
        		case 3:{
        			$this.handleSelect(1);
        			break;
        		}
        		case 4:{
        			$this.handleSelect(-1)
        			break;
        		}default:   
        	}
		},false);
		
	}
	autoPlay(){
		this.play=setInterval(this.handleSelect.bind(this,1),3000);
	}
    handleSelect(option){ 
    	clearInterval(this.play);
    	document.querySelector('.slider-items-wrap').style.transitionDuration=0.8+'s';
       	let index=this.state.currentIndex+option;    	     	
    	this.setState({
    		currentIndex:index
    	})	    	
    }
    componentDidUpdate(){  
    	clearInterval(this.play);
    	if(this.state.currentIndex==-1){    		
    		setTimeout(()=>{
    			document.querySelector('.slider-items-wrap').style.transitionDuration=0+'s';
    			this.setState({
    				currentIndex:this.props.items.length-1
    			});
    		},800)    		
    	}else if(this.state.currentIndex==this.props.items.length){    		
    		setTimeout(()=>{
    			document.querySelector('.slider-items-wrap').style.transitionDuration=0+'s';
    			this.setState({
    				currentIndex:0
    			});
    		},800)     		
    	}
    	this.autoPlay();
    }
	render(){	
		return(
			<div className='slider'>
				<SliderItems items={this.props.items} currentIndex={this.state.currentIndex}/>
				<SliderDots count={this.props.items.length} currentIndex={this.state.currentIndex} handleSelect={this.handleSelect.bind(this)}/>
				<SliderArrows handleSelect={this.handleSelect.bind(this)}/>
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