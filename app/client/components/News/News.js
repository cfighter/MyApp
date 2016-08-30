import React from 'react';
import './News.scss';
class News extends React.Component{
	render(){
		return(
			<div className='news'>
				<div className='right'>
					<img src={this.props.news.img.src} alt={this.props.news.img.alt}/>
				</div>
				<div className='left'>
					<h4>{this.props.news.title}</h4>
					<p>
						<span className='from'><img src={this.props.news.from.src} alt=""/>{this.props.news.from.name}</span>
						<span className='read'>{this.props.news.read}阅读</span>
						<span className='comment'>{this.props.news.comment}评论</span>
					</p>
				</div>
			</div>
		)
	}
}

export default News;
News.defaultProps={
	news:{
		title:'清华教师被冒充公检法电信诈骗1760万元 警方介入',
		from:{
			name:'新华社',
			src:'http://img0.bdstatic.com/img/image/PPT820.jpg'
		},
		read:'202',
		comment:'123',
		img:{
			src:'http://t2.baidu.com/it/u=http%3A%2F%2Fpaper.people.com.cn%2Frmrb%2Fres%2F2016-08%2F23%2F17%2Frmrb2016082317p9_b.jpg&fm=30',
			alt:'测试'
		}
	}
}