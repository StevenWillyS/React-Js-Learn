import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Login extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			id: '',
			pass: ''
		}
		this.loginCheck = this.loginCheck.bind(this);
	}
	loginCheck(e){
		//temp
		const id = 'admin';
		const pass = 'admin';
		if(this.state.id===id&&this.state.pass===pass){
			this.props.changeAccount(id);
		} else {
			alert("ID/Pass salah");
		}
		e.preventDefault();
	}
	updateID(e){
		this.setState({id:e.target.value});
	}
	updatePass(e){
		this.setState({pass:e.target.value});
	}
	render(){
		return(
			<div className='container'>
				<div className='row'>
					<div className='col text-center'>
						<h1>Login</h1>
					</div>
				</div>
				<div className='row justify-content-center'>
					<div className='col-md-4'>
						<form>
							<div className='form-group'>
								<label htmlFor='id'>ID</label>
								<input id='id' type='text' onChange={e => this.updateID(e)} className='form-control' required/>					
							</div>
							<div className='form-group'>
								<label htmlFor='pass'>Password</label>
								<input id='pass' type='password' onChange={e => this.updatePass(e)} className='form-control' required/>					
							</div>
							<div className='text-center'>
								<button onClick={this.loginCheck} className='btn btn-primary'>Login</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
export default Login;