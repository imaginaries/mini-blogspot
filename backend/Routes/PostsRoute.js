const express = require('express');
const router = express.Router();

const postController = require('../Controllers/PostController');

router.get('/', postController.baseRoute);
router.get('/getPosts', postController.getPosts);
router.get('/getPost/:id', postController.getPost);
router.post('/create', postController.createPost);
router.put('/update/:id', postController.updatePost);
router.delete('/delete/:id', postController.deletePost);

module.exports = router;
