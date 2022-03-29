const Author = require('../models/author.model')
//get all authors
module.exports.getAllAuthors = (req, res) =>{
    //sort data then pass it to the server
    Author.find({}).sort({name: 1})
        .then(allAuthors =>{
            res.json({results:allAuthors})
        })
        .catch(err => res.json({message:'error getting all authors from api', error:err}))
}
//create author
module.exports.createAuthor = (req, res) =>{
    Author.create(req.body)
        .then(newAuthor =>{
            res.json({results:newAuthor})
        })
        .catch(err=> res.json({message:'error creating author', error: err}))
}
//edit author 0
module.exports.editAuthor =(req,res) =>{
    Author.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new:true, runValidators:true})
        .then(editingAuthor =>{
            res.json({results: editingAuthor})
        })
        .catch(err => res.json({message:'error updating author', error: err}))
}
//delete author )-
module.exports.deleteAuthor = (req, res) =>{
    Author.findByIdAndDelete(req.params.id)
        .then(author =>{
            res.json({results:author})
        })
        .catch(err => res.json({message:'error deleting author _*err', error:err}))
}
//get one author
module.exports.getOneAuthor =(req, res) =>{
    Author.findOne({_id: req.params.id})
        .then(author =>{
            res.json({results:author})
        })
        .catch(err => res.json({message: 'something went wrong getting one author', error:err}))
}