import React from 'react';
import ReactDOM from 'react-dom';
import RestController from './RestController';
import Menu from './Menu';
import CreateController from './CreateController';
import UpdateController from './UpdateController';
import Login from './login';

class Index extends React.Component{
	constructor(props){
		super(props);
		this.state = {'command':'', id:'', account:''};
		this.ClickChange = this.ClickChange.bind(this);
		this.onIDChange = this.onIDChange.bind(this);
		this.changeAccount = this.changeAccount.bind(this);	
		this.logout = this.logout.bind(this);		
	}

	ClickChange(e){
		this.setState({command:e.target.name});
	}
	onIDChange(id){
		this.setState({id:id,command: 'update'});
	}
	changeAccount(id){
		this.setState({account:id});
	}
	logout(){
		this.changeAccount('');
	}

	render(){
		const cmdList = {
			'read': <RestController onIDChange={this.onIDChange}/>,
			'create': <CreateController />,
			'update': <UpdateController id={this.state.id}/>,
			'delete': ''
		};
		var output;
		if(this.state.account===''){
			output = <Login changeAccount={this.changeAccount} />;
		} else {
			output = <Menu onClick={this.ClickChange} logout={this.logout}>
						{cmdList[this.state.command]}
					</Menu>;
		}
		return(
			<div>
				{output}
			</div>
		);
	}
}
const element = <Index />;
ReactDOM.render(element, document.getElementById('root'));