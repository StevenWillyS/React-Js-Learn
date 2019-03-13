function sendDataDelete(id){
	const url = 'http://127.0.0.1:8000/api/siswa/'+id;
	fetch(url, {
	  method: 'DELETE',
	}).then(res => res.json())
	.then(response => alert(response['status']))
	.catch(error => console.error('Error:', error));
}
export default sendDataDelete;