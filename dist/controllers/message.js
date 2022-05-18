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
const database_1 = __importDefault(require("../utils/database"));
const refs_1 = __importDefault(require("./refs"));
class MessageController {
    constructor() {
        this.saveMessage = (message, roomId) => __awaiter(this, void 0, void 0, function* () {
            const db = new database_1.default();
            if (!(yield db.hasData(refs_1.default.USER_DB_REF + message.username))) {
                throw "User does not exist";
            }
            if (!(yield db.hasData(refs_1.default.ROOM_DB_REF + roomId))) {
                throw "Room does not exist";
            }
            db.writeToData(refs_1.default.MESSAGE_DB_REF + roomId + '/' + message.id, message);
            return message;
        });
        //The bonus
        this.getLastMessages = (roomId, count) => __awaiter(this, void 0, void 0, function* () {
            const db = new database_1.default();
            const result = yield db.readLastData(refs_1.default.MESSAGE_DB_REF + roomId, count, 'time');
            const values = Object.values(result);
            return values.sort((a, b) => b.time - a.time);
        });
    }
}
exports.default = MessageController;
//# sourceMappingURL=message.js.map