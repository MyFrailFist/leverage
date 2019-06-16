import React, {Component} from 'react'
import { Card, Icon, Avatar, Modal, Button } from 'antd';

const { Meta } = Card;






export default class CardDisplay extends Component{
	constructor(props){
		super(props)
		console.log("the props are", props)
		this.state = {
			values: props.values,
			loading: false,
    		visible: false,
		}


	}


	componentDidMount(){}


	openPopup=()=>{
		console.log("this")



	}

	showModal = () => {
	    this.setState({
	      visible: true,
	    });
	};


	handleCancel = () => {
	    this.setState({ visible: false });
	  };

	handleOk = () => {
	    this.setState({ loading: true });
	    setTimeout(() => {
	      this.setState({ loading: false, visible: false });
	    }, 3000);
	};



	render(){
		let values = this.state;
		let title = values.title
		let description = values.description
		let image = values.image

		const { visible, loading } = this.state;


		return(
			<div className="CardDisplay">
				<Card
				    style={{ width: 300 }}
				    cover={
				      <img
				        alt="example"
				        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
				      />
				    }
				    actions={[<Icon type="setting"  onClick={this.showModal}/>, <Icon type="edit" />, <Icon type="ellipsis" />]}
				  >
				    <Meta
				      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
				      title={title}
				      description={description}
				    />
				</Card>

				 <Modal
		          visible={visible}
		          title="Title"
		          onOk={this.handleOk}
		          onCancel={this.handleCancel}
		          footer={[
		            <Button key="back" onClick={this.handleCancel}>
		              Return
		            </Button>,
		            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
		              Submit
		            </Button>,
		          ]}
		        >
		          <p>Some contents...</p>
		          <p>Some contents...</p>
		          <p>Some contents...</p>
		          <p>Some contents...</p>
		          <p>Some contents...</p>
		        </Modal>
			</div>
		)
	}
}