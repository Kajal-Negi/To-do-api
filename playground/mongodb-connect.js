//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');
/*var obj=new ObjectID();
console.log(obj);

randomly generating new object id's

*/
MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,client)=>{
	if(err){
		return console.log('Unable to connect to Mongodb server');
	}
	console.log('Connected to mongodb server');
	const db=client.db('ToDoApp');
	
	
	
	
	
	
	
	
	
	
	//db.collection('Users').insertOne({
	//	name:'Kajal Negi',
	//	age:'21',
	//	location:'241/b,sehatpur,faridabad',
	//	completed:false
	//},(err,result)=>{
	//	if(err)
	//	{
	//		return console.log('Unable to connect to insert Users');
	//	}
	//	console.log(result.ops[0]._id.getTimestamp());
	//});
	
	
	
	
	
	
	//db.collection('Todos').insertOne({
	//	text:'something to do',
	//	completed:false
	//},(err,result)=>{
	//	if(err){
	//		return console.log('Unable to connect to insert todo');
	//	}
	//	//console.log(JSON.stringify(result.ops,undefined,2));
	//});
	client.close();
});