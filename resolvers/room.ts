import {
    Mutation,
    Query,
    Resolver,
    Arg,
    Root,
    Subscription
} from "type-graphql";
import { Room } from "../entities/room";
import RoomController from "../controllers/room";
import Guid from '../utils/guid';
import { Message } from "../entities/message";

@Resolver()
export class RoomResolver {
    @Query(() => [Room])
    async getAllRooms(): Promise<Room[]> {
        return await new RoomController().getAllRooms();
    };

    @Mutation(() => Room)
    async addRoom(
        @Arg("name") name: string
    ): Promise<Room> {
        return new RoomController().saveRoom({ id: Guid.newGuid(), name });
    };

    @Subscription({ topics: ({ args }) => args.roomId })
    subscribeRoom(@Root() message: Message,
        @Arg("roomId") roomId: string): Message {
        return message;
    };
}

