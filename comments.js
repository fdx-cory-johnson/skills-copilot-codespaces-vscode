// Create Web Server for comment
// =============================================================

// Import module
const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');

// Handle request
router.get('/', (req, res) => {
    Comment.find()
        .then(comments => {
            res.json(comments);
        })
        .catch(err => {
            res.json({ message: err });
        });
});