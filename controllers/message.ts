import DataBase from '../utils/database'
import { Message } from '../entities/message';
import refs from './refs'

class MessageController {
    saveMessage = async (message: Message, roomId: string): Promise<Message> => {
        const db: DataBase = new DataBase();

        if (!(await db.hasData(refs.USER_DB_REF + message.username))) {
            throw "User does not exist";
        }

        if (!(await db.hasData(refs.ROOM_DB_REF + roomId))) {
            throw "Room does not exist";
        }

        db.writeToData(refs.MESSAGE_DB_REF + roomId + '/' + message.id, message);
        return message;
    };
    //The bonus
    getLastMessages = async (roomId: string, count: number): Promise<Message[]> => {
        const db: DataBase = new DataBase();
        const result = await db.readLastData(refs.MESSAGE_DB_REF + roomId, count, 'time');
        const values: Message[] = Object.values(result);
        return values.sort((a, b) => b.time - a.time);
    };
}

export default MessageController;