const express = require('express');
const router = express.Router();
const Message = require('../models/Message');


//get all messages
router.get('/', async (req, res) => {
    try{
        const msgs = await Message.find();
        res.json(msgs);
    } catch(err){
        res.json({message : err});
    }
});


//send a message
router.post('/', async (req, res) => {
    const msg = new Message({
        sender: req.body.sender,
        receiver: req.body.receiver,
        subject: req.body.subject,
        message: req.body.message
    });

    try{
        const savedMsg = await msg.save();
        res.json(savedMsg);
    } catch(err){
        res.json({message: err});
    }
});

//read a message (and update seen = true)
router.get('/:messageId', async (req, res) => {
    try{
        const msg = await Message.findById(req.params.messageId);
        await Message.updateOne({ _id: req.params.messageId}, { $set: {seen: true}});
        res.json(msg);
    } catch(err){
        res.json({message: err});
    }
});

//get all messages for a specific user
router.get('/user/:username', async (req, res) => {
    try{
        const msgs = await Message.find({receiver: req.params.username});
        res.json(msgs);
    } catch(err){
        res.json({message: err});
    }
});

//get all unread messages for a specific user
router.get('/user/:username/unread', async (req, res) => {
    try{
        const msgs = await Message.find({receiver: req.params.username, seen: false});
        res.json(msgs);
    } catch(err){
        res.json({message: err});
    }
});

router.delete('/:messageId', async (req, res) => {
    try{
        const msg = await Message.remove({_id: req.params.messageId});
        res.json(msg);
    } catch(err){
        res.json({message: err});
    }
});


module.exports = router;