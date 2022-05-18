import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class Message {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  text: string;

  @Field(() => Number)
  time: number;

  @Field(() => String)
  username: string;
}

