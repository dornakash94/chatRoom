"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.PostResolver = void 0;
const type_graphql_1 = require("type-graphql");
const message_1 = require("../entities/message");
const message_2 = __importDefault(require("../controllers/message"));
const guid_1 = __importDefault(require("../utils/guid"));
const channel = "CHAT_CHANNEL_";
let PostResolver = class PostResolver {
    getPost() {
        return new message_1.Message();
    }
    postMessage(pubSub, roomId, text, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = { id: guid_1.default.newGuid(), text, time: Date.now(), userId };
            const messageController = new message_2.default;
            messageController.saveMessage(post, roomId);
            yield pubSub.publish(channel + roomId, post);
            return post;
        });
    }
    subscribeToRoom({ id, text, time, userId }, roomId) {
        return { id, text, time, userId };
    }
};
__decorate([
    type_graphql_1.Query(() => message_1.Message),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", message_1.Message)
], PostResolver.prototype, "getPost", null);
__decorate([
    type_graphql_1.Mutation(() => message_1.Message),
    __param(0, type_graphql_1.PubSub()),
    __param(1, type_graphql_1.Arg("roomId")),
    __param(2, type_graphql_1.Arg("text")),
    __param(3, type_graphql_1.Arg("userId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [type_graphql_1.PubSubEngine, String, String, String]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "postMessage", null);
__decorate([
    type_graphql_1.Subscription({ topics: ({ args }) => channel + args.roomId }),
    __param(0, type_graphql_1.Root()),
    __param(1, type_graphql_1.Arg("roomId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [message_1.Message, String]),
    __metadata("design:returntype", message_1.Message)
], PostResolver.prototype, "subscribeToRoom", null);
PostResolver = __decorate([
    type_graphql_1.Resolver()
], PostResolver);
exports.PostResolver = PostResolver;
//# sourceMappingURL=post.js.map