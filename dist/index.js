'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var micro = require('micro');

var byResource = function (handlers) { return function (req, res) {
    var _a = req.query, params = _a.params, resource = _a.resource;
    var key = resource || (params && params[0]);
    if (key && handlers[key]) {
        return handlers[key](req, res);
    }
    else {
        return micro.send(res, 404, { message: "resource not found" });
    }
}; };

exports.default = byResource;
