const router = require('express').Router();
const Course = require('../models/Course');

// Traz todos os portfolios  
router.get('/', async (req, res) => {
  try {
    const course = await Course.find();
    res.json({
      success: true,
      data: course
    })
  } catch (error) {
    res.json({
      success: false,
      message: error
    })
  }
});

// Traz course específico 
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findOne({
      slug: req.params.slug
    })
    res.json({
      success: true,
      data: course
    })
  } catch (error) {
    res.json({
      success: false,
      message: error
    })
  }
})

// Grava o Course 
router.post('/', async (req, res) => {
  const course = new Course({
    title: req.body.title,
    description: req.body.description
  });

  try {
    const savedCourse = await course.save();
    res.json({
      success: true,
      data: savedCourse
    })
  } catch (error) {
    res.json({
      success: false,
      message: error
    });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const updatedCourse = await Course.updateOne({
      slug: req.params.slug
    },
      {
        title: req.body.title,
        description: req.body.description
      })
    res.json({
      success: true,
      updated: updatedCourse.nModified
    })
  } catch (error) {
    res.json({
      success: false,
      message: error
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedCourse = await Course.deleteOne({
      slug: req.params.slug
    })
    res.json({
      success: true,
      deleted: deletedCourse.deletedCount
    })
  } catch (error) {
    res.json({
      success: false,
      message: error
    });
  }
})

module.exports = router;