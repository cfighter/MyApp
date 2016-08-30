import React from 'react';
import './Tab.scss';
class Tab extends React.Component{
	handleClick(){
		this.props.handleClick()
	}
	render(){
		const tabList=this.props.tabs.map((tab,index)=>(
			<li key={'tab-item-'+index} className={index==this.props.activeIndex?'active':''} onClick={this.handleClick.bind(this,index)}>
				{tab}
			</li>
		));
		return(
			<ul className={'tab-list'}>
				{tabList}
			</ul>
		)
	}
}

export default Tab;

Tab.defaultProps={
	activeIndex: 0,
    tabs: [
        "选项一",
        "选项二",
        "选项三"
    ]
}