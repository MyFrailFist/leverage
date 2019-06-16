import React, {Component} from 'react'
import { PageHeader } from 'antd';



export default class Header extends Component{
	constructor(props){
		super(props)
		this.state = {

		}
	}

	componentDidMount(){

	}



	render(){
		return(
			<div className="header">
				<PageHeader onBack={() => null} title="Title" subTitle="This is a subtitle" />,
			</div>
		)
	}

}