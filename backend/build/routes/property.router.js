"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var property_repository_1 = require("../repositories/property.repository");
var property_model_1 = require("../models/property.model");
var express = require("express");
var property_controller_1 = require("../controllers/property.controller");
var property_service_1 = require("../services/property.service");
var PropertyRouter = /** @class */ (function () {
    function PropertyRouter(router) {
        this._router = router;
        this._app = express();
    }
    PropertyRouter.prototype.createRoutes = function () {
        var propertyRepository = new property_repository_1.PropertyRepository(property_model_1.PropertyModel);
        var propertyService = new property_service_1.PropertyService(propertyRepository);
        var propertyController = new property_controller_1.PropertyController(propertyService);
        this._router.get('/api/properties', propertyController.getAll.bind(propertyController));
        this._router.get('/api/properties/:id', propertyController.getById.bind(propertyController));
        this._router.post('/api/properties', propertyController.create.bind(propertyController));
        this._router.put('/api/properties', propertyController.update.bind(propertyController));
        this._router.delete('/api/properties/:id', propertyController.delete.bind(propertyController));
    };
    return PropertyRouter;
}());
exports.PropertyRouter = PropertyRouter;
