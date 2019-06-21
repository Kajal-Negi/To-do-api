
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,client)=>{
	if(err){
		return console.log('Unable to connect to Mongodb server');
	}
	console.log('Connected to mongodb server');
	const db=client.db('ToDoApp');
	
	db.collection('Todos').find().toArray().then((docs)=>{
		console.log(JSON.stringify(docs),undefined,2);
	},(err)={
		console.log('Unable to fetch todos');
	});
	
	
	
		//client.close();
});