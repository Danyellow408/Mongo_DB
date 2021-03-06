var router = require("express").Router();
var db = require("../../models");
router.get("/", function(req, res){
    db.Headline.find({save: false})
    .sort({date: -1})
    .then(function(dbArticles){
        res.render("home", {articles: dbArticles});
    });
    });
    router.get("SAVED", function(req, res){
        db.Headline.find({save: true})
        .sort({date: -1})
        .then(function(dbArticles){
            res.render("saved", {articles: dbArticles});
        });
        });
        module.exports = router();