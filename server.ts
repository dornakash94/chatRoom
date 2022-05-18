import "reflect-metadata";
import { createServer } from 'http';
import { execute, subscribe } from 'graphql';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { MessageResolver } from "./resolvers/message";
import { RoomResolver } from "./resolvers/room";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/user";
import { MemberResolver } from "./resolvers/member";
//Run npm install
//Run npm link typescript
//Click on the link that appears in the terminal
(async function () {
    const express = require('express')
    var bodyParser = require('body-parser')
    const { ApolloServer, gql } = require('apollo-server-express');

    const app = express()

    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

    const httpServer = createServer(app)

    const schema = await buildSchema({
        resolvers: [MessageResolver, RoomResolver, UserResolver, MemberResolver],
        validate: false,
    });

    const server = new ApolloServer({
        schema,
    });

    await server.start();
    server.applyMiddleware({ app });

    SubscriptionServer.create(
        { schema, execute, subscribe },
        { server: httpServer, path: server.graphqlPath }
    );

    const PORT = 4000;
    httpServer.listen(PORT, () =>
        console.log(`Server is now running on http://localhost:${PORT}/graphql`)
    );
})();

