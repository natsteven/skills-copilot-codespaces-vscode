// Create a web server

const express = require('express');
const router = expressRouter();
const commentController = require('../controllers/comment')

router.get('/', commentController.comment_list);