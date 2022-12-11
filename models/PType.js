var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PTypeSchema = new Schema({
    name: {type: String, required: true, minLength: 3, maxLength: 100},
});



PTypeSchema.virtual("url").get(function () {
    return "/catalog/type/" + this._id;
});



// Export model.
module.exports = mongoose.model("Type", PTypeSchema);
