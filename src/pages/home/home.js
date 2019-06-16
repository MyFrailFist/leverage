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
					title: "Guitar Classes", 
					description: "Learn guitar, I am total begineer",
					image: null
				},
				{	
					title: "Programming Classes", 
					description: "Learn Programming, I am total begineer",
					image: null
				},
				{	
					title: "Ukelele Classes", 
					description: "Learn Ukelele, I am total begineer",
					image: null
				},
				{	
					title: "Guitar Classes", 
					description: "Learn guitar, I am total begineer",
					image: null
				},
				{	
					title: "Programming Classes", 
					description: "Learn Programming, I am total begineer",
					image: null
				},
				{	
					title: "Ukelele Classes", 
					description: "Learn Ukelele, I am total begineer",
					image: null
				},
				{	
					title: "Guitar Classes", 
					description: "Learn guitar, I am total begineer",
					image: null
				},
				{	
					title: "Programming Classes", 
					description: "Learn Programming, I am total begineer",
					image: null
				}
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

	render(){

		let {assignments} = this.state;

		let assignmentsDisplay = assignments.map(function(elem){
			console.log("the ele is ", elem)
			return <div className="statusDisplay-box" key={elem.title}><CardDisplay values={elem}/></div>
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
				        <Menu.Item key="1">
				          <Icon type="user" />
				          <span className="nav-text">Home</span>
				        </Menu.Item>
				        <Menu.Item key="2">
				          <Icon type="video-camera" />
				          <span className="nav-text">Assignments</span>
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
				      <Footer style={{ textAlign: 'center' }}>Leveraged ©2019 Created by Leve</Footer>
				    </Layout>
				  </Layout>	
			</div>
		)
	}


}


export default Home