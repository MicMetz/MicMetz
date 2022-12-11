var express = require("express");
var router  = express.Router();

// Require our controllers.
var project_controller         = require("../controllers/projectController");
var photo_controller           = require("../controllers/photoController");
var type_controller            = require("../controllers/typeController");
var projectinstance_controller = require("../controllers/projectinstanceController");
const {project_list}           = require("./projects.js");
const catalog_controller       = require("../controllers/catalogController");

/// project ROUTES ///

router.get("/catalog", catalog_controller.catalog_list);



// GET catalog home page.
router.get("/", project_controller.index);

// GET request to update project list.
router.get("/catalog/project/:id/update", project_controller.project_update_list);

// POST request to update project list.
// router.post("/project/:id/update", project_controller.project_update_post);

// GET request for one project.
router.get("/catalog/project/:id", project_controller.project_detail);

// GET request for list of all project.
router.get("/catalog/projects", project_controller.project_list);


/// photo ROUTES ///

// GET request to update photo.
router.get("/catalog/photo/:id/update", photo_controller.photo_update_list);

// POST request to update photo.
// router.post("/photo/:id/update", photo_controller.photo_update_post);

// GET request for one photo.
router.get("/catalog/photo/:id", photo_controller.photo_detail);

// GET request for list of all photos.
router.get("/catalog/photos", photo_controller.photo_list);


/// type ROUTES ///

// GET request to update type.
router.get("/catalog/type/:id/update", type_controller.type_update_list);

// GET request for one type.
router.get("/catalog/type/:id", type_controller.type_detail);

// GET request for list of all type.
router.get("/catalog/types", type_controller.type_list);


///

router.get("/catalog/projectinstance/:id/update",
    projectinstance_controller.projectinstance_update_list);


router.get("/catalog/projectinstance/:id", projectinstance_controller.projectinstance_detail);

router.get("/catalog/projectinstances", projectinstance_controller.projectinstance_list);


module.exports = router;
