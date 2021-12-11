const express = require("express");
const router = express.Router();
const controller = require("../controller/userController");

router.get('/all', controller.getAll);
router.get('/:id', controller.getById);

router.post('/create', controller.createComment);

router.delete('/:id', controller.deleteComment);

router.put('/:id', controller.updateComment);

module.exports = router