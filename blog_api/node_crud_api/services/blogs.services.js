const { response } = require("express");
const { blog } = require("../models/blogs.model");

async function createblog(params, callback) {
  if (!params.blogName) {
    return callback({
      message: "blog Name Required",
    });
  }
  const blogModel = blog(params);
  blogModel
    .save()
    .then((response) => {
      return callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}

async function getblogs(params, callback) {
  const blogName = params.blogName;
  var condition = blogName
    ? {
        blogName: { $regex: new RegExp(blogName), $option: "i" },
      }
    : {};

  blog
    .find(condition)
    .then((response) => {
      return callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}

async function getblogById(params, callback) {
  const blogId = params.blogId;

  blog
    .findById(blogId)
    .then((response) => {
      if(!response) callback ("blog Id Invalid!");
      else return callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}

async function updateblog(params, callback) {
  const blogId = params.blogId;

  blog
    .findByIdAndUpdate(blogId, params, { useFindAndModify: false })
    .then((response) => {
        if(!response) callback ("blog Id Invalid!");
        else return callback(null, response);
    })
    .catch((error) => {
      return callback(error);
    });
}



async function deleteblog(params, callback) {
    const blogId = params.blogId;
  
    blog
      .findByIdAndRemove(blogId)
      .then((response) => {
          if(!response) callback ("blog Id Invalid!");
          else return callback(null, response);
      })
      .catch((error) => {
        return callback(error);
      });
  }

  module.exports = {
    createblog,
    getblogs,
    getblogById,
    updateblog,
    deleteblog,
  };