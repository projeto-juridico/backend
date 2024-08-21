const Message = require('../models/Message');

exports.getHelloMessage = async (req, res) => {
    try {
        const message = await Message.findOne(); 
        
        if (message) {
            res.json({ message: message.text });
        } else {
            res.status(404).json({ message: 'No message found' });
        }
    } catch (err) {
        console.error('Error retrieving message:', err);
        res.status(500).json({ message: 'Error retrieving message' });
    }
};
