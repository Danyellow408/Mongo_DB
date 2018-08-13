var db = require("../models");
module.exports = {
    clearDB: function(req, res){
        db.headline.remove({})
        .then(function(){
            return db.note.remove({});

        })
        .then(function(){
            res.json({ok: true});
        });
    }
};