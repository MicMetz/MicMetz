var mongoose     = require("mongoose");
const {DateTime} = require("luxon");
const res        = require("express/lib/response.js");


var Schema = mongoose.Schema;


var PhotoSchema = new Schema({
    title      : {type: String, required: true, max: 100},
    description: {type: String, required: true, max: 1000},
    dateTaken  : {type: Date, required: true},
    image      : {type: String, required: true},

});


PhotoSchema.virtual("url").get(function () {
    return "/catalog/photo/" + this._id;
});

PhotoSchema.virtual("dateTakenFormatted").get(function () {
    return DateTime.fromJSDate(this.dateTaken).toLocaleString(DateTime.DATE_MED);
});

PhotoSchema.virtual('photo').get(function () {
    return this.image;
});


module.exports = mongoose.model("Photo", PhotoSchema);
