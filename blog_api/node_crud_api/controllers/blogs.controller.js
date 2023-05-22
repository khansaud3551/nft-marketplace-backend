const blogServices = require("../services/blogs.services");
const upload = require("../middleware/upload");

exports.create = (req, res, next) => {
  upload(req, res, function (err) {
    if (err) {
      next(err);
    } else {
      const url = req.protocol + "://" + req.get("host");
      const path =
        req.file != undefined ? req.file.path.replace(/\\/g, "/") : "";

      var model = {
        blogName: req.body.blogName,
        blogDescription: req.body.blogDescription,
        
        blogImage: path != "" ? url + "/" + path : "",
      };
      blogServices.createblog(model, (error, results) => {
        if (error) {
          return next(error);
        } else {
          return res.status(200).send({
            message: "Success",
            data: results,
          });
        }
      });
    }
  });
};



    exports.findAll = (req, res, next) => {
  
        var model = {
          blogName: req.query.blogName,
        };
        blogServices.getblogs(model, (error, results) => {
          if (error) {
            return next(error);
          } else {
            return res.status(200).send({
              message: "Success",
              data: results,
            });
          }
        });
    };


    exports.findOne = (req, res, next) => {
  
        var model = {
          blogId: req.params.id,
        };
        blogServices.getblogById(model, (error, results) => {
          if (error) {
            return next(error);
          } else {
            return res.status(200).send({
              message: "Success",
              data: results,
            });
          }
        });
    };





    exports.update = (req, res, next) => {
        upload(req, res, function (err) {
          if (err) {
            next(err);
          } else {
            const url = req.protocol + "://" + req.get("host");
            const path =
              req.file != undefined ? req.file.path.replace(/\\/g, "/") : "";
      
            var model = {
              blogId: req.params.id,  
              blogName: req.body.blogName,
              blogDescription: req.body.blogDescription,
            
              blogImage: path != "" ? url + "/" + path : "",
            };
            blogServices.updateblog(model, (error, results) => {
              if (error) {
                return next(error);
              } else {
                return res.status(200).send({
                  message: "Success",
                  data: results,
                });
              }
            });
          }
        });
      };



      exports.delete = (req, res, next) => {
  
        var model = {
          blogId: req.params.id,
        };
        blogServices.deleteblog(model, (error, results) => {
          if (error) {
            return next(error);
          } else {
            return res.status(200).send({
              message: "Success",
              data: results,
            });
          }
        });
    };

 
  