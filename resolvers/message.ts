import {
  Mutation,
  Query,
  Resolver,
  Arg,
  Root,
  PubSub,
  PubSubEngine,
  Subscription,
} from "type-graphql";
import { Message } from "../entities/message";
import MessageController from "../controllers/message";
import Guid from '../utils/guid'

@Resolver()
export class MessageResolver {
  @Query(() => [Message])
  async getLastMessages(
    @Arg("roomId") roomId: string,
    @Arg("count") count: number
  ): Promise<Message[]> {
    return new MessageController().getLastMessages(roomId, count);
  };

  @Mutation(() => Message)
  async postMessage(
    @PubSub() pubSub: PubSubEngine,
    @Arg("roomId") roomId: string,
    @Arg("text") text: string,
    @Arg("username") username: string
  ): Promise<Message> {
    const message = new MessageController().saveMessage({ id: Guid.newGuid(), text, time: Date.now(), username }, roomId);
    await pubSub.publish(roomId, message);
    return message;
  };
}
