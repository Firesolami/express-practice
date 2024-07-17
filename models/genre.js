const mongoose = require("mongoose");
const schema = mongoose.Schema;

const genreSchema = new schema({
    name: { type: String, min:3, max: 100, required: true}
});

genreSchema.virtual("url").get(function(){
    return `/catalog/genre/${this._id}`;
});

module.exports = mongoose.model("Genre", genreSchema);