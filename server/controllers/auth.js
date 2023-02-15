const { connect } = require('getstream');
const bcrypt = require('bcrypt');
const StreamChat = require('stream-chat').StreamChat;
const crypto = require('crypto');

require('dotenv').config();

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const app_id = process.env.STREAM_APP_ID;

const signup = async(req, res) => {
    try {   
        const { firstName, lastName, username, password, email, phoneNumber } = req.body();
        const userID = crypto.randomBytes(16).toString('hex');

        const serverClient = connect(api_key, api_secret, app_id);

        const hashPassword = await bcrypt.hash(password, 10);

        const token = serverClient.createUserToken(userID);

        res.status(200).json({ token, firstName, lastName, userID, username, hashPassword, email, phoneNumber });
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error});
    }
};
const login = async(req, res) => {
    try {
        const { username, password } = req.body;
        const serverConn = connect(api_key, api_secret, app_id);
        const client = StreamChat.getInstance(api_key, api_secret);

        const{users} = await client.queryUsers({name: username});

        if(!users.length) return res.status(400).json({ message: 'No user with these details'});

        const success = await bcrypt.compare(password, users[0].hashPassword);

        const token = serverConn.createUserToken(users[0].id);

        if(success) {
            res.status(200).json({ token, firstName: users[0].firstName, lastName: users[0].lastName, userID: users[0].id, username})
        } else {
            res.status(500).json({ message: 'Incorrect password'});
        }
    } catch (error) {ads
        console.log(error);
        res.status(500).json({message: error});
    }
};

module.exports = {signup, login};