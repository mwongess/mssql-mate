"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = void 0;
const mssql_1 = __importDefault(require("mssql"));
class Connection {
    constructor(config) {
        this.config = config;
        this.pool = this.getConnection();
    }
    getConnection() {
        const pool = mssql_1.default.connect(this.config);
        return pool;
    }
    createRequest(request, params) {
        for (const key in params) {
            request.input(key, params[key]);
        }
        return request;
    }
    executeProc(procName, params) {
        return __awaiter(this, void 0, void 0, function* () {
            let pool = yield this.pool;
            let request = pool.request();
            params ? (request = this.createRequest(request, params)) : request;
            return yield request.execute(procName);
        });
    }
    executeQuery(query, params) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = (yield this.pool).request();
            params ? (request = this.createRequest(request, params)) : request;
            return yield request.query(query);
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            (yield this.pool).close();
        });
    }
}
exports.Connection = Connection;
