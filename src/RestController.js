import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import sendDeleteData from './deleteController';

class RestController extends React.Component{
	constructor(props){
		super(props);
		this.state = {users: []};
		this.headers = [
			{key: 'id', label:'ID'},
			{key: 'nama', label: 'Nama'},
			{key: 'alamat', label: 'Alamat'},
			{key: 'createdAt', label: 'Dibuat'},
			{key: 'updatedAt', label: 'Diupdate'}
		];
		this.deleteRow = this.deleteRow.bind(this);
	}
	componentDidMount(){
		const urlFetch = fetch('http://127.0.0.1:8000/api/siswa');
		urlFetch.then(res => {
			if(res.status === 200)
				return res.json()
		}).then(resJson =>{
			this.setState({
				users: resJson
			});
		})
	}
	deleteRow(index,id){
		sendDeleteData(id);
		var users = this.state.users;
		users.splice(index,1);
		this.setState({users: users});
	}
	render(){
		var deleteFunc = this.deleteRow;
		var update = this.props.onIDChange;
		return(
			<div class='table-responsive'>
				<table className='table'>
					<thead>
						<tr>
							{
								this.headers.map(function(h){
									return (
										<th key={h.key}>{h.label}</th>
									);
								})
							}
							<th colSpan='2'>Operation</th>
						</tr>	
					</thead>
					<tbody>
						{
							this.state.users.map(function(item,index){
								return(
									<tr key={index}>
										<td>{item.id}</td>
										<td>{item.nama}</td>
										<td>{item.alamat}</td>
										<td>{item.created_at}</td>
										<td>{item.updated_at}</td>
										<td><button className='btn btn-primary' onClick = {()=>update(item.id)}>Update</button></td>
										<td><button className='btn btn-danger' onClick = {()=>deleteFunc(index,item.id)}>Delete</button></td>
									</tr>
								);
							})
						}
					</tbody>
				</table>
			</div>
		);
	}
}

export default RestController;