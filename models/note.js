var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var noteSchema = new Schema({
    _headline: {
        type: Schema.Types.ObjectId,
        ref: "Headline"
    },
    date: {
        type: date,
        default: Date.now,
    },
    noteText: String
});
var note = mongoose.model("Note", noteSchema);
module.exports = note;