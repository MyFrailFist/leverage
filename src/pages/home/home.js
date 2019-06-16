import React, {Component} from 'react'

import { Layout, Menu, Icon } from 'antd';
import './home.css';


import CardDisplay from "../../components/cardDisplay/cardDisplay";

const { Header, Content, Footer, Sider } = Layout;





class Home extends Component{
	constructor(props){
		super(props)
		this.state = {

			assignments: [
				{	
					title: "Guitar", 
					description: "Learn at your own pace",
					image: 'https://tse4-mm.cn.bing.net/th?id=OIP.FfLPv_ctac3WhjuDZoEepAHaE6&w=264&h=160&c=7&o=5&dpr=2&pid=1.7',
					descriptionImages: [
						"http://s3.jp-tok.cloud-object-storage.appdomain.cloud/imageangelhack/alex2.jpeg",
						"http://s3.jp-tok.cloud-object-storage.appdomain.cloud/imageangelhack/alex3.jpeg",
						"http://s3.jp-tok.cloud-object-storage.appdomain.cloud/imageangelhack/alex4.png"
					],
					level: "average",
					amount: "20",
					furtherDescription: "I have been playing the guitar since I was a small child. Some of my favourite songs are...",
					teacherName: "Alex Oon"
				},
				{	
					title: "Programming", 
					description: "I am a novice",
					image: 'https://tse4-mm.cn.bing.net/th?id=OIP.WfzLlQsJ_2aHleH1wZpmfgHaEE&w=300&h=164&c=7&o=5&dpr=2&pid=1.7',
					descriptionImages: [
						"http://s3.jp-tok.cloud-object-storage.appdomain.cloud/imageangelhack/chris1.png",
						"http://s3.jp-tok.cloud-object-storage.appdomain.cloud/imageangelhack/chris3.png"
					],
					level: "average",
					amount: "40",
					furtherDescription: "I have been programming since...",
					teacherName: "Chris Ling"
				},
				{	
					title: "Coaching", 
					description: "I am total expert",
					image: 'https://tse2-mm.cn.bing.net/th?id=OIP.Gtfc-g5o7oK9QNn_tkdx3AHaD1&w=299&h=155&c=7&o=5&dpr=2&pid=1.7',
					descriptionImages: [
						"http://s3.jp-tok.cloud-object-storage.appdomain.cloud/imageangelhack/pervertrong.png",
						"http://s3.jp-tok.cloud-object-storage.appdomain.cloud/imageangelhack/rong.png"
					],
					level: "average",
					amount: "10",
					furtherDescription: "I have been coaching since...",
					teacherName: "Yao Rong Cho"
				},
				{	
					title: "Yoga", 
					description: "I am total average",
					image: "https://tse1-mm.cn.bing.net/th?id=OIP.jG9ItM3839CNjJrfBl0rrgHaE7&w=269&h=180&c=7&o=5&dpr=2&pid=1.7",
					descriptionImages: [
						"http://s3.jp-tok.cloud-object-storage.appdomain.cloud/imageangelhack/marianne1.png",
						"http://s3.jp-tok.cloud-object-storage.appdomain.cloud/imageangelhack/marianne2.png"
					],
					level: "average",
					amount: "50",
					furtherDescription: "I have been doing yoga since...",
					teacherName: "Marianne Chua"
				},
			]

		}
	}

	componentDidMount(){

	}
	// <Menu.Item key="3">
	// 			          <Icon type="upload" />
	// 			          <span className="nav-text">nav 3</span>
	// 			        </Menu.Item>
	// 			        <Menu.Item key="4">
	// 			          <Icon type="user" />
	// 			          <span className="nav-text">nav 4</span>
	// 			        </Menu.Item>

	goNew=()=>{
		var path = 'createNew'
    	this.props.history.push(path)
	}

	goLessons=()=>{
		var path = 'home'
    	this.props.history.push(path)    
	}


	render(){

		let {assignments} = this.state;

		let assignmentsDisplay = assignments.map(function(elem){
			console.log("the ele is ", elem)
			return <div className="statusDisplay-box"  key={elem.title}><CardDisplay values={elem}/></div>
		})


		return (
			<div className="Home">
				<Layout>
				    <Sider
				      breakpoint="lg"
				      collapsedWidth="0"
				      onBreakpoint={broken => {
				        console.log(broken);
				      }}
				      onCollapse={(collapsed, type) => {
				        console.log(collapsed, type);
				      }}
				    >
				      <div className="logo" />
				      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
				        <Menu.Item key="1" onClick={this.goNew}>
				          <Icon type="user" />
				          <span className="nav-text">Create New</span>
				        </Menu.Item>
				        <Menu.Item key="2" onClick={this.goLessons}>
				          <Icon type="video-camera" />
				          <span className="nav-text">Lessons</span>
				        </Menu.Item>
				        
				      </Menu>
				    </Sider>
				    <Layout>
				      <Header style={{ background: '#fff', padding: 0 }} />
				      <Content style={{ margin: '24px 16px 0' }}>
				        <div className="background-home" style={{ padding: 24, background: '#fff'}}>

				        		{assignmentsDisplay}

				        </div>
				      </Content>
				      <Footer style={{ textAlign: 'center' }}>Leverage ©2019 Created by Leverage</Footer>
				    </Layout>
				  </Layout>	
			</div>
		)
	}


}


export default Home