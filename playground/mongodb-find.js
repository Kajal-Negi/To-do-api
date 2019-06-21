
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,client)=>{
	if(err){
		return console.log('Unable to connect to Mongodb server');
	}
	console.log('Connected to mongodb server');
	const db=client.db('ToDoApp');
	
	
	
	
	
	
	/*db.collection('Todos').find({
	_id:new ObjectID('5d0b57f4cbd48a0f5048ea34')
	}).toArray().then((docs)=>{
		console.log('Todos');
		console.log(JSON.stringify(docs,undefined,2));
	},(err)=>{
		console.log('Unable to fetch todos',err);
	});
	*/
	
	/*db.collection('Todos').find({completed:false}).count().then((count)=>{
		console.log(`Todos count${count}`);
		
	},(err)=>{
		console.log('Unable to fetch todos',err);
	});
	
	*/
	
	db.collection('Users').find({name:'Kajal Negi'}).toArray().then((docs)=>{
		console.log('documents: ');
		console.log(JSON.stringify(docs,undefined,2));

		
	},(err)=>{
		console.log('Unable to fetch todos',err);
	});
	
	
		//client.close();
});