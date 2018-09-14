import express = require('express');
import * as bodyParser from "body-parser";
import DataBase from './config/database';
import mongoose = require("mongoose");
import { UserRouter } from './routes/user.router';
import { PropertyRouter } from './routes/property.router';
import morgan = require('morgan');
var cors = require('cors')

class App {
    public app: express.Application;
    private database: DataBase;

    constructor() {
        this.app = express();
        this.middleware();
        this.database = new DataBase(mongoose);
        this.createRoutes();
    }


    closeConnection(message: string, callback: any) {
        this.database.closeConnection(message, () => callback());
    }

    middleware() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors());
        //don't show the log when it is test
        if(process.env.ProcessEnv !== "test") {
            this.app.use(morgan('combined')); 
        }
    }

    createRoutes() {

        let router = express.Router();
        
        // router.get('/', (req, res, next) => {
        //     res.json({
        //         message: 'Hi!'
        //     });
        // });
        
        this.app.use('/', router);

        let userRouter = new UserRouter(this.app);
        userRouter.createRoutes();

        let propertyRouter = new PropertyRouter(this.app);
        propertyRouter.createRoutes();
    }
}

export default new App();
