"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_repository_1 = require("../repositories/user.repository");
var user_model_1 = require("../models/user.model");
var express = require("express");
var user_controller_1 = require("../controllers/user.controller");
var user_service_1 = require("../services/user.service");
var UserRouter = /** @class */ (function () {
    function UserRouter(router) {
        this._router = router;
        this._app = express();
    }
    UserRouter.prototype.createRoutes = function () {
        var userRepository = new user_repository_1.UserRepository(user_model_1.UserModel);
        var userService = new user_service_1.UserService(userRepository);
        var userController = new user_controller_1.UserController(userService);
        this._router.get('/api/users', userController.getAll.bind(userController));
        this._router.get('/api/users/:id', userController.getById.bind(userController));
        this._router.post('/api/users', userController.create.bind(userController));
        this._router.put('/api/users', userController.update.bind(userController));
        this._router.delete('/api/users/:id', userController.delete.bind(userController));
    };
    return UserRouter;
}());
exports.UserRouter = UserRouter;
