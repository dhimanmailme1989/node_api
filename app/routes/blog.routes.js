module.exports = (app) => {
    const blogs = require('../controllers/blog.controller.js');
    //app.post('/blogs', blogs.create);
    app.post('/blogs', blogs.create);

    app.get('/all/blog', (req, res) => {
    res.json([
            {
                id: 1,
                title: "Alice's Adventures in Wonderland",
                author: "Charles Lutwidge Dodgson"
            },
            {
                id: 2,
                title: "Einstein",
                author: "Alan Lightman"
            }
        ])
})
}