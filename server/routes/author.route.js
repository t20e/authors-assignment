const AuthorController = require('../controllers/author.controller')

module.exports =(app) =>{
    app.get('/api/authors', AuthorController.getAllAuthors)
    app.get('/api/authors/:id', AuthorController.getOneAuthor)
    app.post('/api/authors/create', AuthorController.createAuthor)
    app.put('/api/authors/edit/:id', AuthorController.editAuthor)
    app.delete('/api/authors/delete/:id', AuthorController.deleteAuthor)

}