var mongoose     = require("mongoose");
const {DateTime} = require("luxon");

var Schema = mongoose.Schema;


var ProjectInstanceSchema = new Schema({
    project    : {type: Schema.ObjectId, ref: "Project", required: true},
    status     : {type: String, required: true, enum: ["Available", "Maintenance", "Loaned", "Reserved"], default: "Maintenance"},
    dateUpdated: {type: Date, default: Date.now},
});


ProjectInstanceSchema.virtual("url").get(function () {
    return "/catalog/projectinstance/" + this._id;
});


ProjectInstanceSchema.virtual("dateUpdated_formatted").get(function () {
    return DateTime.fromJSDate(this.due_back).toISODate(); //format 'YYYY-MM-DD'
});


module.exports = mongoose.model("ProjectInstance", ProjectInstanceSchema);


