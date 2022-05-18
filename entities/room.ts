import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class Room {
    @Field(() => ID)
    id: string;

    @Field(() => String)
    name: string;
}
