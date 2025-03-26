"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvCheckMiddleware = void 0;
const common_1 = require("@nestjs/common");
let EnvCheckMiddleware = class EnvCheckMiddleware {
    use(req, res, next) {
        const requiredEnvVars = ['JWT_SECRET', 'DATABASE_URL'];
        const missingVars = requiredEnvVars.filter((envVar) => !process.env[envVar]);
        if (missingVars.length > 0) {
            console.error(`Missing environment variable: ${missingVars.join(', ')}`);
            process.exit(1);
        }
        next();
    }
};
exports.EnvCheckMiddleware = EnvCheckMiddleware;
exports.EnvCheckMiddleware = EnvCheckMiddleware = __decorate([
    (0, common_1.Injectable)()
], EnvCheckMiddleware);
//# sourceMappingURL=EnvCheck.middleware.js.map