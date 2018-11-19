"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_model_1 = require("../models/user-model");
exports.api = express_1.Router();
exports.api.get('/', (req, res, next) => {
    console.log('getting elements');
    user_model_1.User.findAll().then((data) => {
        console.log(res.json(data));
        return res.json(data);
    }).catch((err) => {
        console.log(err);
        return err;
    });
});
exports.api.get('/:id', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const loc = yield user_model_1.User.find({
            where: {
                id: req.params['id']
            }
        });
        res.json(loc);
    }
    catch (e) {
        next(e);
    }
}));
exports.api.post('/', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    console.log(req.body);
    try {
        const fb = yield user_model_1.User.create(req.body);
        res.status(201).json(fb);
    }
    catch (e) {
        next(e);
    }
}));
exports.api.post('/:id', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    console.log(req.params['id']);
    try {
        yield user_model_1.User.destroy({
            where: {
                id: req.params['id']
            }
        });
        res.sendStatus(200);
    }
    catch (e) {
        next(e);
    }
}));
exports.api.put('/:id', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    console.log(req.params['id']);
    try {
        yield user_model_1.User.update(req.body, {
            where: {
                id: req.params['id']
            }
        });
        res.sendStatus(200);
    }
    catch (e) {
        next(e);
    }
}));
//# sourceMappingURL=user-route.js.map