var db = require("../models");
module.exports = {
    find: function(req, res){
        db.Note.find({_headlineId: req.param.id }).then(function(dbNote){
            res.json(dbNote);
        })
    },
    create: function(req, res){
        db.Note.create(req.body).then(function(dbNote){
            res.json(dbNote);
        })
    },
    delete: function(req, res){
        db.Note.remove({_id: req.param.id }).then(function(dbNote){
            res.json(dbNote);
        })
    }
};