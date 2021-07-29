const express = require('express');//gives you access to the express library by searching your node_modules for "express"
const app = express();//creates an instance of the express constructor, which we will name "app"
const port = 3000

const mockUserData=[
{name:'Mark'},
{name:'Jill'}
]

app.get('/users/:id',function(req,res){
	console.log(req.params.id)
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	})
})

// app.get('/users', function(req,res){
//  	res.json({
//  	 	success: true,
//  	 	message: 'successfully got users. Nice!',
//  	 	users: mockUserData
//  	})
// })


// app.listen(3000,function(){
//     console.log("server is running")
// })//The app.listen method will start up the server locally on the port you give as its first argument.
app.listen(port, (err) => {
    if (err) {
      return console.log('something bad happened', err)
    }
  
    console.log(`server is listening on ${port}`)
})