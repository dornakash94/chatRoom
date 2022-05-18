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
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const http_1 = require("http");
const graphql_1 = require("graphql");
const subscriptions_transport_ws_1 = require("subscriptions-transport-ws");
const message_1 = require("./resolvers/message");
const room_1 = require("./resolvers/room");
const type_graphql_1 = require("type-graphql");
const user_1 = require("./resolvers/user");
const member_1 = require("./resolvers/member");
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        const express = require('express');
        var bodyParser = require('body-parser');
        const { ApolloServer, gql } = require('apollo-server-express');
        const app = express();
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
        const httpServer = http_1.createServer(app);
        const schema = yield type_graphql_1.buildSchema({
            resolvers: [message_1.MessageResolver, room_1.RoomResolver, user_1.UserResolver, member_1.MemberResolver],
            validate: false,
        });
        const server = new ApolloServer({
            schema,
        });
        yield server.start();
        server.applyMiddleware({ app });
        subscriptions_transport_ws_1.SubscriptionServer.create({ schema, execute: graphql_1.execute, subscribe: graphql_1.subscribe }, { server: httpServer, path: server.graphqlPath });
        const PORT = 4000;
        httpServer.listen(PORT, () => console.log(`Server is now running on http://localhost:${PORT}/graphql`));
    });
})();
//# sourceMappingURL=server.js.map