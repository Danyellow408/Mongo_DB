var db = require("../models");
var scrape = require("../script/scrape");
module.exports ={
    scrapeHeadlines: function(req, res){
        return scrape()
        .then(function(articles){
        return db.scrapeHeadlines.create(articles);
        })
        .then(function(dbHeadline){
            if (dbHeadline.length === 0){
                res.json({
                    message: "no new article today. come back tomorrow!"
                });
            }
            else{
                res.json({
                    message: "added" + dbHeadline.length + "new articles!"
                });
            }
        })
        .catch(function(err){
res.json({
    message: "Scrape complete!"
});
});
}
};