import {
    Mutation,
    Query,
    Resolver,
    Arg,
} from "type-graphql";
import { User } from "../entities/user";
import UserController from "../controllers/user";

@Resolver()
export class UserResolver {
    @Query(() => User)
    getPost(): User {
        return new User();
    };

    @Mutation(() => User)
    async createUser(
        @Arg("username") username: string
    ): Promise<User> {
        return new UserController().saveUser({ username });
    };

    @Mutation(() => Boolean)
    async deleteUser(
        @Arg("username") username: string
    ): Promise<boolean> {
        return new UserController().removeUser(username);
    };
}
