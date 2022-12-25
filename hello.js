const mongoose = require('mongoose');
var Usersdata = require('./user');
var profile = require('./profile');
var about = require('./about');
// var MongoClient = require('mongodb').MongoClient;


export default function handler(req, res) {

 mongoose.connect('mongodb://localhost:27017/myDatabases')
        .then(data=>{
           console.log("connecting successfully 123");
        })
        .catch(error=> {
           console.log("error");
        })
      

 

 // Usersdata.aggregate([{ 
 //    	$lookup: {
	// 		from: 'profiles',
	//         as: 'profiles_data',
	//         let: {'user_id':"$_id"},
	//         pipeline:[
	//         	{$match: {$expr:{$eq:["$user_id", "$$user_id"]}}}
	//         ]
 //    	}},
 //    	{
 //    		$project:{
 //    			username:1,
 //    			email:1,
 //    			profiles_data: 1
 //    		}
 //    	},
 //    ]).exec( (err, result)=>{
 //    	if(err){
 // 			res.send(err)
 // 		}
 // 		if(result){		
 // 			res.status(200).json({ data: result })
 // 		}
 //    })



 
Usersdata.aggregate([{$match:{ _id: mongoose.Types.ObjectId("63a7377d3d8cc752a299b455")}},{ 
    $lookup: {
		from: 'profiles',
		as: 'profiles',
		let: {user_id: "$_id"},
		pipeline:[
	        {$match: {$expr: {$eq:["$user_id", "$$user_id"]}}}
	        ]	        
     	},

    },{
     	$lookup: {
		from: 'about',
		as: 'abouts',
		let: {user_id: "$_id"},
		pipeline:[
	        {$match: {$expr: {$eq:["$user_id", "$$user_id"]}}}
	        ]	        
     	}
     	}
    ]
  ).exec( (err, result)=>{
    	if(err){
 			res.send(err)
 		}
 		if(result){		
 			res.status(200).json({ data: result })
 		}
    })



}


