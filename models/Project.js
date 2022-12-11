var mongoose     = require("mongoose");
const {DateTime} = require("luxon");


var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
    title           : {type: String, required: true, max: 100},
    description     : {type: String, required: true, max: 1000},
    date_of_creation: {type: Date, required: true},
    status          : {type: String, required: true, enum: ["In Progress", "Completed", "On Hold", "Abandoned"], default: "In Progress"},
    image           : {type: String, required: true},
    github          : {type: String, required: false},
    website         : {type: String, required: false},
    type            : [{type: Schema.ObjectId, ref: "Type"}],
});


ProjectSchema.virtual("url").get(function () {
    return "/catalog/project/" + this._id;
});


module.exports = mongoose.model("Project", ProjectSchema);



