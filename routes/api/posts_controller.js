const express = require('express');
const router = express.Router();
const Posts = require('../../models/Posts');
module.exports = router;


// create
router.post('/', async (req, res) => {
    const newPost = new Posts(req.body);
    try {
    const post = await newPost.save();
    if(!post) throw Error('Something went wrong with the post')
    res.status(200).json(post);
    } catch {
    res.status(400).json({msg: error})
    }
});

// read: Get all posts
router.get('/', async (req, res) => {
    try {
    const posts = await Posts.find();
    if(!posts) throw Error('No Items');
    res.status(200).json(posts);
    }catch(err) {
    res.status(400).json({mesg: err})
    }
});

//Show one post
router.get('/:id', async (req, res) => {
    try {
    const post = await Posts.findById(req.params.id);
    if(!post) throw Error('No Items');
    res.status(200).json(post);
    }catch(err) {
    res.status(400).json({mesg: err})
    }
});


// Update
router.patch('/:id', async (req, res) => {
    try {
    const post = await Posts.findByIdAndUpdate(req.params.id, req.body);
    if(!post) throw Error('Something went wrong while updating the post');
    res.status(200).json({success: true});
    }catch(err) {
    res.status(400).json({msg:err});
    }
});


// Delete
router.delete('/:id', async (req, res) => {
    try {
    const post = await Posts.findByIdAndDelete(req.params.id);
    if(!post) throw Error('No post found!');
    res.status(200).json({success: true})
    }catch(err) {
    res.status(400).json({msg: error})
    }
});