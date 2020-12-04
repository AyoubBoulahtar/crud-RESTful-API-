const Course = require('../models/course');


// Get all courses
const course_index = async (req, res) => {
    try {
      const courses = await Course.find()
      res.json(courses)
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  };

// Get one course by ID
async function getCourse(req, res, next) {
    try {
      course = await Course.findById(req.params.id)
      if (course == null) {
        return res.status(404).json({ message: 'Cant find course'})
      }
    } catch(err){
      return res.status(500).json({ message: err.message })
    }
  
    res.course = course
    next()
  };


// Get one course by ID
const course_details = (req,res) => {
    res.json(res.course)
};

// Create new course
const add_course = async (req, res) => {
    const course = new Course(req.body);
  
    try {
      const newCourse = await course.save()
      res.status(201).json(newCourse)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  };

// Delete a course by ID
const delete_course = async (req, res) => {
    try {
      await res.course.remove()
      res.json({ message: 'Deleted this course' })
    } catch(err) {
      res.status(500).json({ message: err.message })
    }
  };

// Modify elements in the course by ID
const patch_course = async (req, res) => {
    if (req.body.title != null) {
        res.course.title = req.body.title;
    }
  
    if (req.body.author != null) {
        res.course.author = req.body.author;
    }
    if (req.body.description != null) {
        res.course.description = req.body.description;
    }
    if (req.body.details != null) {
        res.course.details = req.body.details;
    }

    try {
      const updatedCourse = await res.course.save()
      res.json(updatedCourse);
    } catch {
      res.status(400).json({ message: err.message })
    }
    };


  module.exports = {
      course_index,
      add_course,
      getCourse,
      course_details,
      delete_course,
      patch_course
  }