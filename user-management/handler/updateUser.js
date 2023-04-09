const connectDatabase = require('../Db');
const User = require('../models/users')
const mongoose = require('mongoose')

module.exports.handler = async(event,context) =>{
    context.callbackWaitsForEmptyEventLoop = false;
    try {
        await connectDatabase();

        const {id} = event.pathParameters;
        console.log(">>>>>>>>>>>>>",typeof id);
        console.log(">>>>>>>>>>>>>",event.body);

        const updateduser = await User.findByIdAndUpdate(id,event.body,{
            new:true
        });

        console.log(updateduser);
        return {
            statusCode : 200,
            body: JSON.stringify(updateduser)
        }



    } catch (error) {
        console.error(error);
        return {
            statusCode:error.statusCode || 500,
            body : JSON.stringify({error: error.message})
        }
    }
}