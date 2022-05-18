import {
    Mutation,
    Query,
    Resolver,
    Arg
} from "type-graphql";

import MemberController from "../controllers/member";

@Resolver()
export class MemberResolver {
    @Query(() => [String])
    async getRoomMembers(
        @Arg("roomId") roomId: string
    ): Promise<string[]> {
        return await new MemberController().getRoomMembers(roomId);
    };

    @Mutation(() => Boolean)
    enterRoom(
        @Arg("roomId") roomId: string,
        @Arg("username") username: string): Promise<boolean> {
        return new MemberController().saveRoomMember(username, roomId);
    };

    @Mutation(() => Boolean)
    leaveRoom(
        @Arg("roomId") roomId: string,
        @Arg("username") username: string): Promise<boolean> {
        return new MemberController().removeRoomMember(username, roomId);
    };
}

