import React, {Component} from 'react'
import { Layout, Menu } from 'antd';
import {
  Form,
  Select,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Icon,
  Rate,
  Checkbox,
  Row,
  Col,
} from 'antd';




import WrappedCreateForm from './createForm';



import './createNew.css';

const { Option } = Select;
const { Header, Content, Footer, Sider } = Layout;

class CreateNew extends Component{
	constructor(props){
		super(props)
		this.state = {}
	}

	componentDidMount(){

	}


	handleSubmit = e => {
	    e.preventDefault();
	    this.props.form.validateFields((err, values) => {
	      if (!err) {
	        console.log('Received values of form: ', values);
	      }
	    });
	};

	normFile = e => {
	    console.log('Upload event:', e);
	    if (Array.isArray(e)) {
	      return e;
	    }
	    return e && e.fileList;
	};


	goNew=()=>{
		var path = 'createNew'
    	this.props.history.push(path)
	}

	goLessons=()=>{
		var path = 'home'
    	this.props.history.push(path)    
	}


	render(){

		return(
			<div>
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

				        		
				        	<WrappedCreateForm />
				        </div>
				      </Content>
				      <Footer style={{ textAlign: 'center' }}>Leveraged ©2019 Created by Leve</Footer>
				    </Layout>
				  </Layout>	
			</div>
		)
	}


}


export default CreateNew