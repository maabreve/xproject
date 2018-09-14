import { UserRepository } from '../repositories/user.repository';
import { UserModel } from '../models/user.model';
import express = require('express');
import { UserController } from '../controllers/user.controller';
import { UserService } from '../services/user.service';

export class UserRouter {

    private _router: express.Router;
    private _app: any;
    
    constructor(router: express.Router) {
        this._router = router;
        this._app = express();
    }

    createRoutes() {
        var userRepository = new UserRepository(UserModel);
        var userService = new UserService(userRepository);
        var userController = new UserController(userService);
        
        this._router.get('/api/users', userController.getAll.bind(userController));
        this._router.get('/api/users/:id', userController.getById.bind(userController));
        this._router.post('/api/users', userController.create.bind(userController));
        this._router.put('/api/users', userController.update.bind(userController));
        this._router.delete('/api/users/:id', userController.delete.bind(userController));
    }
}
