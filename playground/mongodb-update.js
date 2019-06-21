 
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(err,client)=>{
	if(err){
		return console.log('Unable to connect to Mongodb server');
	}
	console.log('Connected to mongodb server');
	const db=client.db('ToDoApp');
	
	/*db.collection('Todos').findOneAndUpdate({
		_id:new ObjectID('5d0c828ca27219f3ee412c0a')
	},{
		$set:{
			 completed:true
		     }
	},{returnOriginal:false}).then((result)=>{
		console.log(result);
	});
	*/
	
	db.collection('Users').findOneAndUpdate({
		_id:new ObjectID('5d0b5c360dc3b20a40eb2874')
	},{ $set:{
		  name:'Kajal Negi'
	          },
		$inc:{
			age:1
		}	  
			  
	  },{returnOriginal:false}).then((result)=>{
		  console.log(result);
	  })
	
	
	
	});