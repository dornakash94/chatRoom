// import "reflect-metadata";
// import { createServer } from 'http';
// import { execute, subscribe } from 'graphql';
// import { SubscriptionServer } from 'subscriptions-transport-ws';
// import { makeExecutableSchema } from '@graphql-tools/schema';
// import { PostResolver } from "./resolvers/post";
// import { buildSchema } from "type-graphql";
// //app.use('/graphql', expressGraphGl({}))
// //app.listen(5000., () => console.log('server is running'))
// (async function () {
//     const express = require('express')
//     var bodyParser = require('body-parser')
//     const { ApolloServer, gql } = require('apollo-server-express');
//     const typeDefs = gql;
//     const expressGraphGl = require('express-graphql')
//     const room = require('./routes/room')
//     const user = require('./routes/user')
//     const app = express()
//     app.use(bodyParser.urlencoded({ extended: false }))
//     app.use(bodyParser.json())
//     app.use('/room', room)
//     app.use('/user', user)
//     //const app = express();
//     const httpServer = createServer(app)
//     //const schema = makeExecutableSchema({
//     //typeDefs,
//     // resolvers
//     // });
//     const schema = await buildSchema({
//         resolvers: [PostResolver],
//         validate: false,
//     });
//     const server = new ApolloServer({
//         schema,
//     });
//     await server.start();
//     server.applyMiddleware({ app });
//     SubscriptionServer.create(
//         { schema, execute, subscribe },
//         { server: httpServer, path: server.graphqlPath }
//     );
//     const PORT = 5000;
//     httpServer.listen(PORT, () =>
//         console.log(`Server is now running on http://localhost:${PORT}/graphql`)
//     );
// })();
// const httpServer = createServer(app);
// const schema = buildSchema({
//     resolvers: [PostResolver],
//     validate: false,
// });
// const server = new ApolloServer({
//     schema: schema,
// });
// const subscriptionServer = SubscriptionServer.create({
//     // This is the `schema` we just created.
//     schema,
//     // These are imported from `graphql`.
//     execute,
//     subscribe,
// }, {
//     // This is the `httpServer` we created in a previous step.
//     server: httpServer,
//     // This `server` is the instance returned from `new ApolloServer`.
//     path: server.graphqlPath,
// });
// // Shut down in the case of interrupt and termination signals
// // We expect to handle this more cleanly in the future. See (#5074)[https://github.com/apollographql/apollo-server/issues/5074] for reference.
// ['SIGINT', 'SIGTERM'].forEach(signal => {
//     process.on(signal, () => subscriptionServer.close());
// });
//# sourceMappingURL=server.old.js.map