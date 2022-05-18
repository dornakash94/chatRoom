"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const message_1 = __importDefault(require("../controllers/message"));
var express = require('express'), router = express.Router();
const messageController = new message_1.default();
router.post('/', roomController.addRoom);
module.exports = router;
//# sourceMappingURL=message.js.map