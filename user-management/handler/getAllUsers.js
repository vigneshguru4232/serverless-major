const connectDatabase = require('../Db');
const User = require('../models/users')

module.exports.handler = async(event,context) =>{
    context.callbackWaitsForEmptyEventLoop = false;
    try {
        await connectDatabase();

        userObj = await User.find({});
        return {
            statusCode : 200,
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