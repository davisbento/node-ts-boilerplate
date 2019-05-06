"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HomeController {
    async index(req, res, next) {
        try {
            res.json({
                message: 'home',
            });
        }
        catch (err) {
            next(err);
        }
    }
}
exports.default = new HomeController();
