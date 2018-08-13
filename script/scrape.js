var request = require("request");
var axios = require("axios")
var cherio = require("cheerio");
var scrape = function(cb){
    request("http://www.nytime.com", function(err, res, body){
        var $ = cheerio.load(body);
        var articles = [];
        $(".theme-summary").each(function(i, element){
          var head = $(this).children(".story-heading").text().trim();  
          var sum = $(this).children(".summary").text().trim();  
          if(head && sum){
              var headNeat = head.replace(/(\r/n|/r|\t|\s+)/gm, " ").trim();
              var sumNeat = sum.replace(/(\r/n|/r|\t|\s+)/gm, " ").trim();

              var dataToAdd = {
                  headline: headNeat,
                  summary: sumNeat
              };
              article.push(dataToAdd);

          }

        });
        cb(articles);

    });
};
module.exports = scrape;