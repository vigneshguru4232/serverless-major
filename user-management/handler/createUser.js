const connectDatabase = require('../Db');
const User = require('../models/users')

module.exports.handler = async(event,context) =>{
    context.callbackWaitsForEmptyEventLoop = false;
    try {
        await connectDatabase();
        const { name, email ,id}  = JSON.parse(event.body);
        let userObj = {
            name,
            email,
            id
        }
        userObj = await User.create(userObj);
        return {
            statusCode : 201,
            body: JSON.stringify(userObj)
        }

    } catch (error) {
        console.error(error);
        return {
            statusCode:error.statusCode || 500,
            body : JSON.stringify({error: error.message})
        }
    }
}