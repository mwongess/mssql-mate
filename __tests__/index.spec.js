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
const src_1 = require("../src/");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { USER, PASSWORD, SERVER, DATABASE } = process.env;
describe("Integration Tests", () => {
    const config = {
        user: USER,
        password: PASSWORD,
        server: SERVER,
        database: DATABASE,
        options: {
            encrypt: false,
            trustServerCertificate: true,
        },
    };
    it("executes a stored procedure", () => __awaiter(void 0, void 0, void 0, function* () {
        // Create a real connection to the database
        const connection = new src_1.Connection(config);
        const procName = "GetUser";
        const params = { userName: "mwongess" };
        // Execute the stored procedure against the actual database
        const { recordset: queryResult } = yield connection.executeProc(procName, params);
        expect(Array.isArray(queryResult)).toBe(true);
        expect(queryResult.length).toBeGreaterThan(0);
    }));
    it("executes a query", () => __awaiter(void 0, void 0, void 0, function* () {
        // Create a real connection to the database
        const connection = new src_1.Connection(config);
        const params = { userName: "mwongess" };
        const query = "SELECT * FROM users WHERE userName = @userName";
        // Execute the query against the actual database
        const { recordset: queryResult } = yield connection.executeQuery(query, params);
        expect(Array.isArray(queryResult)).toBe(true);
        expect(queryResult.length).toBeGreaterThan(0);
    }));
});
