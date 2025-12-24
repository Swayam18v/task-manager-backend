import Project from "../models/project.js";

// CREATE PROJECT
export const createProject = async (req, res) => {
  try {
    const { name, description } = req.body;

    const project = await Project.create({
      name,
      description,
      owner: req.user._id,
      members: [req.user._id],
    });

    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET USER PROJECTS
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({
      members: req.user._id,
    });

    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
