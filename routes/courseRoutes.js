const express = require('express');

const courseController = require('../controllers/courseController');

const router = express.Router();

// Get all courses
router.get('/', courseController.course_index);

// Get one course
router.get('/:id', courseController.getCourse, courseController.course_details);

// Create one course
router.post('/', courseController.add_course);

// Update one course
router.patch('/:id', courseController.getCourse, courseController.patch_course);

// Delete one course
router.delete('/:id', courseController.getCourse, courseController.delete_course);



module.exports = router;
