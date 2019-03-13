import React from 'react';

class UpdateController extends React.Component{
	constructor(props){
		super(props);
		this.state = {nama: '', alamat: ''};
		this.sendDataJson = this.sendDataJson.bind(this);
		this.onChangeNama = this.onChangeNama.bind(this);
		this.onChangeAlamat = this.onChangeAlamat.bind(this);
	}
	componentDidMount(){
		if(this.props.id !== ''){
			const url = 'http://127.0.0.1:8000/api/siswa/'+this.props.id;
			fetch(url,{
				method: 'GET',
			}).then(res => res.json())
			.then(resJson=>{
				this.setState({
					nama: resJson.nama,
					alamat: resJson.alamat,
				});
			});
		}
	}
	sendDataJson(e){
		const url = 'http://127.0.0.1:8000/api/siswa/'+this.props.id;
		var data = {
			nama: this.state.nama,
			alamat: this.state.alamat
		};
		fetch(url,{
			method: 'PUT',
			body: JSON.stringify(data),
			headers: {'Content-Type': 'application/json'}
		}).then(res => res.json())
		.then(response => alert(response['status']))
		.catch(error => console.error('Error:', error));
		e.preventDefault();
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
					<label htmlFor='id'>ID</label>
					<input type='number' id='id' value={this.props.id} disabled className='form-control' />
				</div>
				<div className='form-group'>
					<label htmlFor='nama'>Nama</label>
					<input type='text' onChange={this.onChangeNama} value={this.state.nama} id='nama' className='form-control' />
				</div>
				<div className='form-group'>
					<label htmlFor='alamat'>Alamat</label>
					<input type='text' onChange={this.onChangeAlamat} value={this.state.alamat} id='alamat' className='form-control' />
				</div>
				<button type='submit' onClick = {this.sendDataJson} className="btn btn-primary">Submit</button>
			</form>
		);
	}
}

export default UpdateController;