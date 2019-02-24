const Blog = require('../models/blog.model.js');

exports.create = (req, res) => {
    // Validate request
    if(!req.body.desc) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Create a Note
    const blog = new Blog({

        heading: req.body.heading,
        description: req.body.desc,
        sort_desc:req.body.sort_desc
    });

    // Save Note in the database
    blog.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};