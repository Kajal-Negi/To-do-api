 
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,client)=>{
	if(err){
		return console.log('Unable to connect to Mongodb server');
	}
	console.log('Connected to mongodb server');
	const db=client.db('ToDoApp');
	
	
	//deleteMany
	
	/*db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
		console.log(result);
	});
	*/
	
	
	//deleteOne
	/*db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
		console.log(result);
	});
	*/
	
	//findOne and delete
	db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
		console.log(result);
	});
	
	
	
	});