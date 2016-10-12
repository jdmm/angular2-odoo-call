"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var odoo = require('angular2_material_integration/static/src/app/odooPath');
var _odoo = odoo();
var odoocallService = (function () {
    function odoocallService() {
    }
    odoocallService.prototype.nameSearch = function (modelName, idModel) {
        return new Promise(function (resolve, reject) {
            odoo().define('angular2_material_integration.odooCallModels', function (_require) {
                var Model = _require('web.Model');
                var base = _require('web_editor.base');
                var Obj = new Model(modelName);
                Obj.call('name_search', ['', []], { context: base.get_context() }).then(function (res) {
                    resolve(res);
                }).fail(function (err) {
                    reject(err);
                });
            });
        });
    };
    odoocallService.prototype.searchRead = function (modelName, domain, fields) {
        if (domain === void 0) { domain = null; }
        if (fields === void 0) { fields = null; }
        return new Promise(function (resolve, reject) {
            odoo().define('angular2_material_integration.odooCallModels', function (_require) {
                var Model = _require('web.Model');
                var base = _require('web_editor.base');
                var Obj = new Model(modelName);
                Obj.call('search_read', [domain, fields], { context: base.get_context() }).then(function (res) {
                    resolve(res);
                }).fail(function (err) {
                    reject(err);
                });
            });
        });
    };
    odoocallService.prototype.Call = function (modelName, methodName, args) {
        if (args === void 0) { args = null; }
        return new Promise(function (resolve, reject) {
            odoo().define('angular2_material_integration.odooCallModels', function (_require) {
                var Model = _require('web.Model');
                var base = _require('web_editor.base');
                var Obj = new Model(modelName);
                console.log(args);
                console.log(args);
                Obj.call(methodName, args, { context: base.get_context() }).then(function (res) {
                    resolve(res);
                }).fail(function (err) {
                    reject(err);
                });
            });
        });
    };
    odoocallService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], odoocallService);
    return odoocallService;
}());
exports.odoocallService = odoocallService;
//# sourceMappingURL=odooCallService.js.map