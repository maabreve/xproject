import { PropertyRepository } from '../repositories/property.repository';
import { PropertyModel } from '../models/property.model';
import express = require('express');
import { PropertyController } from '../controllers/property.controller';
import { PropertyService } from '../services/property.service';

export class PropertyRouter {

    private _router: express.Router;
    private _app: any;
    
    constructor(router: express.Router) {
        this._router = router;
        this._app = express();
    }

    createRoutes() {
        var propertyRepository = new PropertyRepository(PropertyModel);
        var propertyService = new PropertyService(propertyRepository);
        var propertyController = new PropertyController(propertyService);
        
        this._router.get('/api/properties', propertyController.getAll.bind(propertyController));
        this._router.get('/api/properties/:id', propertyController.getById.bind(propertyController));
        this._router.post('/api/properties', propertyController.create.bind(propertyController));
        this._router.put('/api/properties', propertyController.update.bind(propertyController));
        this._router.delete('/api/properties/:id', propertyController.delete.bind(propertyController));
    }
}
