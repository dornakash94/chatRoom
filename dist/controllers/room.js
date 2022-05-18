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
class RoomController {
    constructor() {
        this.saveRoom = (room) => {
            const db = new database_1.default();
            db.writeToData(refs_1.default.ROOM_DB_REF + room.id, room);
            return room;
        };
        this.getAllRooms = () => __awaiter(this, void 0, void 0, function* () {
            const db = new database_1.default();
            const rooms = yield db.readData(refs_1.default.ROOM_DB_REF);
            return Object.values(rooms);
        });
        this.roomExists = (roomId) => __awaiter(this, void 0, void 0, function* () {
            const db = new database_1.default();
            return yield db.hasData(refs_1.default.ROOM_DB_REF + roomId);
        });
    }
}
exports.default = RoomController;
//# sourceMappingURL=room.js.map