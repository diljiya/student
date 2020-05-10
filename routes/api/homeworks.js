const express = require("express");
const router = express.Router();
const passport = require("passport");

const Project = require("../../models/Project");
const HomeWork = require("../../models/HomeWork");


// @route GET api/projects
// @desc Get all projects for a specific user
// @access Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    let homeWorks = [];
    // Member projects
    await HomeWork.find({})
      .then(works => {
        homeWorks = works.filter(work => {
          console.log(work.owner.id)
          console.log(req.user._id)
          return work.owner.id == req.user._id
        });
        console.log(homeWorks);
        res.json(homeWorks);
      })
      .catch(err => console.log(err));
  }
);

// @route GET api/projects/:id
// @desc Get specific project by id
// @access Private
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let id = req.params.id;

    Project.findById(id).then(project => res.json(project));
  }
);

// @route POST api/projects/create
// @desc Create a new project
// @access Private
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    console.log(req);
    const OWNER = {
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    };

    const newHomeWork = await new HomeWork({
      owner: OWNER,
      title: req.body.title,
      description: req.body.description,
      subject: req.body.subject,
      data: req.body.data
    });

    newHomeWork.save().then(homework => res.json(homework));
  }
);

// @route PATCH api/projects/update
// @desc Update an existing project
// @access Private
router.patch(
  "/update",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let projectFields = {};

    projectFields.name = req.body.projectName;
    projectFields.teamMembers = req.body.members;

    Project.findOneAndUpdate(
      { _id: req.body.id },
      { $set: projectFields },
      { new: true }
    )
      .then(project => {
        res.json(project);
      })
      .catch(err => console.log(err));
  }
);

// @route DELETE api/projects/delete/:id
// @desc Delete an existing project
// @access Private
router.delete(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Project.findById(req.params.id).then(project => {
      project.remove().then(() => res.json({ success: true }));
    });
  }
);

module.exports = router;
