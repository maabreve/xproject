"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = __importStar(require("body-parser"));
var database_1 = __importDefault(require("./config/database"));
var mongoose = require("mongoose");
var user_router_1 = require("./routes/user.router");
var property_router_1 = require("./routes/property.router");
var morgan = require("morgan");
var cors = require('cors');
var App = /** @class */ (function () {
    function App() {
        this.app = express();
        this.middleware();
        this.database = new database_1.default(mongoose);
        this.createRoutes();
    }
    App.prototype.closeConnection = function (message, callback) {
        this.database.closeConnection(message, function () { return callback(); });
    };
    App.prototype.middleware = function () {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors());
        //don't show the log when it is test
        if (process.env.ProcessEnv !== "test") {
            this.app.use(morgan('combined'));
        }
    };
    App.prototype.createRoutes = function () {
        var router = express.Router();
        // router.get('/', (req, res, next) => {
        //     res.json({
        //         message: 'Hi!'
        //     });
        // });
        this.app.use('/', router);
        var userRouter = new user_router_1.UserRouter(this.app);
        userRouter.createRoutes();
        var propertyRouter = new property_router_1.PropertyRouter(this.app);
        propertyRouter.createRoutes();
    };
    return App;
}());
exports.default = new App();
