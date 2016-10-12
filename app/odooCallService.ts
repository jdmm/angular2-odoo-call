import {Injectable} from '@angular/core';
import odoo = require('angular2_material_integration/static/src/app/odooPath');
var _odoo = odoo();

@Injectable()
export class odoocallService {
    modelName: string
    idModel: number
    retorno: any

    constructor() {

    }

    nameSearch(modelName: string, idModel: number) : Promise<any>{
        return new Promise((resolve, reject) => {
            odoo().define('angular2_material_integration.odooCallModels', _require => {
                var Model = _require('web.Model');
                var base = _require('web_editor.base')
                var Obj = new Model(modelName);
                Obj.call('name_search', ['', []], {context: base.get_context()}).then(res => {
                    resolve(res)
                }).fail(err => {
                    reject(err);
                })
            });
        });
    }

    searchRead(modelName: string, domain: [string, string, any][] = null, fields: string[]=null) : Promise<any>{
        return new Promise((resolve, reject) => {
            odoo().define('angular2_material_integration.odooCallModels', _require => {
                var Model = _require('web.Model');
                var base = _require('web_editor.base')
                var Obj = new Model(modelName);
                Obj.call('search_read', [domain,fields], {context: base.get_context()}).then(res => {
                    resolve(res)
                }).fail(err => {
                    reject(err);
                })
            });
        });
    }
    Call(modelName: string, methodName: string, args: any[] = null) : Promise<any>{
        return new Promise((resolve, reject) => {
            odoo().define('angular2_material_integration.odooCallModels', _require => {
                var Model = _require('web.Model');
                var base = _require('web_editor.base')
                var Obj = new Model(modelName);
                console.log(args)
                console.log(args)
                Obj.call(methodName, args, {context: base.get_context()}).then(res => {
                    resolve(res)
                }).fail(err => {
                    reject(err);
                })
            });
        });
    }
}