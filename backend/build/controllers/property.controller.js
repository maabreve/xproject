"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_controller_1 = require("./base/base.controller");
var PropertyController = /** @class */ (function (_super) {
    __extends(PropertyController, _super);
    function PropertyController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PropertyController;
}(base_controller_1.BaseController));
exports.PropertyController = PropertyController;
