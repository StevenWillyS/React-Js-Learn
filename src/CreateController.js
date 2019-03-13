import React from 'react';

class CreateController extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			nama:'',
			alamat:''
		};
		this.sendDataJSON = this.sendDataJSON.bind(this);
		this.onChangeNama = this.onChangeNama.bind(this);
		this.onChangeAlamat = this.onChangeAlamat.bind(this);
	}
	sendDataJSON(e){
		e.preventDefault();
		var data ={
			nama:this.state.nama,
			alamat:this.state.alamat
		};
		fetch('http://127.0.0.1:8000/api/siswa', {
		  method: 'POST',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(data)
		}).then(res => res.json())
	.then(response => alert(response['status']))
	.catch(error => console.error('Error:', error));
	}
	onChangeNama(e){
		this.setState({nama:e.target.value});
	}
	onChangeAlamat(e){
		this.setState({alamat:e.target.value});
	}
	render(){
		return(
			<form>
				<div className='form-group'>
					<label htmlFor='nama'>Nama</label>
					<input type='text' id='nama' onChange={this.onChangeNama} className='form-control' />
				</div>
				<div className='form-group'>
					<label htmlFor='alamat'>Alamat</label>
					<input type='text' id='alamat' onChange={this.onChangeAlamat} className='form-control' />
				</div>
				<button type='submit' onClick={this.sendDataJSON} className="btn btn-primary">Submit</button>
			</form>
		);
	}
}

export default CreateController;