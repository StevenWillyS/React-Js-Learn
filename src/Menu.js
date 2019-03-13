import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Menu(props){
	return(
		<div className='container'>
			<div className='row text-center'>
				<div className='col'>
					<h1>REST Learn</h1>
				</div>
			</div>
			<div className='row text-center'>
				<div className='col-3'>
					<button onClick={props.onClick} name='read' className='btn btn-primary'>ReadAll Data</button>
				</div>
				<div className='col-3'>
					<button onClick={props.onClick} name='create' className='btn btn-primary'>Input Data</button>
				</div>
				<div className='col-3'>
					<button onClick={props.onClick} name='update' className='btn btn-primary'>Update Data</button>
				</div>
				<div className='col-3'>
					<button onClick={props.logout} name='logout' className='btn btn-danger'>Logout</button>
				</div>
				
			</div>
			<hr />
			<div className='row'>
				<div className='col'>
					{props.children}
				</div>
			</div>
		</div>
	);
}

export default Menu;