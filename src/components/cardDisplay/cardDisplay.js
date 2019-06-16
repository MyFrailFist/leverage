import React, {Component} from 'react'
import { Card, Icon, Avatar, Modal, Button,Carousel, notification } from 'antd';


import { Descriptions, Badge } from 'antd';



import "./cardDisplay.css";

const { Meta } = Card;

notification.config({
	top: "50%",
	right: "50% !important"
})




export default class CardDisplay extends Component{
	constructor(props){
		super(props)
		console.log("the props are", props)
		this.state = {
			values: props.values,
			loading: false,
    		visible: false,

    		loading2: false,
    		visible2: false,
		}


	}


	componentDidMount(){}

	openNotification = () => {
		let secondsToGo = 5;
		let _this = this
		var name = _this.state.values.teacherName
		const modal = Modal.success({
		    title: 'Booking Confirmed',
		    content: `Congratulations, you have successfully booked a guitar lesson with ${name}`,
		    okText:"Proceed to payment",
		    onOk: _this.openPayment()

		});
		const timer = setInterval(() => {
		    secondsToGo -= 1;
		}, 1000);
		setTimeout(() => {
		    clearInterval(timer);
		    modal.destroy();
		}, secondsToGo * 1000);
	}


	openPayment=()=>{
		var path = 'payment'
    	// this.props.history.push(path)    
	}

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
	      this.openNotification()
	    }, 3000);
	};

	onChange = (a, b, c) => {
	  console.log(a, b, c);
	}




	render(){
		let {values} = this.state;
		let title = values.title
		let description = values.description
		let image = values.image? values.image:"https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
		let avatar = values.avatar? values.avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
		let descriptionImages = values.descriptionImages

		let level = values.level
		let amount = values.amount
		let furtherDescription = values.furtherDescription
		let teacherName = values.teacherName

		let teacherNameGreet = "Taught by " + teacherName

		const { visible, loading } = this.state;

		let carouselPictures = []
		let fourPic = ["https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original", "https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original", "https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"]

		if( descriptionImages && descriptionImages.length>0){
			carouselPictures = descriptionImages.map(function(elem){
				return <div> <img src= {elem}/> </div>
			})
		}
		
		else{

			carouselPictures = fourPic.map(function(elem){
				return <div className="smallImages" style={{height:"200"}}> <img style={{height:"200"}} src={elem}/> </div>
			})
			
		}

		return(
			<div className="CardDisplay">
				<Card
				    style={{ width: 300 }}
				    cover={
				      <img
				        alt="example"
				        src={image}
				        style={{
					      height: 200,
					    }}
				      />
				    }
				    actions={[<Icon type="check-circle"  theme="twoTone" twoToneColor="#52c41a"   onClick={this.showModal}/>, <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96"/>]}
				  >
				    <Meta
				      avatar={<Avatar src={avatar} />}
				      title={title}
				      description={description}
				    />
				</Card>

				 <Modal
				  className="thisModal"
		          visible={visible}
		          title={title}
		          onOk={this.handleOk}
		          onCancel={this.handleCancel}
		          footer={[
		            <Button key="back" onClick={this.handleCancel}>
		              Back
		            </Button>,
		            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
		              Confirm
		            </Button>
		          ]}
		        >



		          <Carousel afterChange={this.onChange}>
				    {carouselPictures}
				  </Carousel>
		          <Descriptions title={teacherNameGreet} bordered>
				    <Descriptions.Item label="Frequency" span={12}>{level}</Descriptions.Item>
				    <Descriptions.Item label="Starting Date" span={12}>{level}</Descriptions.Item>
				    <Descriptions.Item label="Amount" span={12}>${amount}</Descriptions.Item>
				    <Descriptions.Item label="Description">
				    	{furtherDescription}
				    </Descriptions.Item>
				  </Descriptions>
		        </Modal>


			</div>
		)
	}
}