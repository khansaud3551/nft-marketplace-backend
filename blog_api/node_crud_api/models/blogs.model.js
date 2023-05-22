const mongoose = require("mongoose");

const blog = mongoose.model(
    "blogs", 
    mongoose.Schema({
        blogName: String,
        blogDescription: String,
        
        blogImage: String
    },{
        timestamps: true,
    })
);

module.exports = {
    blog
}