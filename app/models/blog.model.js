const mongoose = require('mongoose');

const BlogsSchema = mongoose.Schema({
    heading: String,
    description: String,
    sort_desc:String
}, {
    timestamps: true
});

module.exports = mongoose.model('Blogs', BlogsSchema);