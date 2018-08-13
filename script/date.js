var makeDate = function(){
    var d = new Date();
    var formattedDate = "";
    var formattedDate = (d.getMonth() + 1) + "_";
    var formattedDate = d.getDate() + "_";
var formattedDate =d.getFullYear();
return formattedDate

};
module.exports = makeDate;