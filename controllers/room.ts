import { Room } from '../entities/room'
import DataBase from '../utils/database'
import refs from './refs'

class RoomController {
    public saveRoom = (room: Room): Room => {
        const db: DataBase = new DataBase();
        db.writeToData(refs.ROOM_DB_REF + room.id, room);
        return room;
    };

    public getAllRooms = async (): Promise<Room[]> => {
        const db: DataBase = new DataBase();
        const rooms = await db.readData(refs.ROOM_DB_REF);
        return Object.values(rooms);
    };

    public roomExists = async (roomId: string): Promise<boolean> => {
        const db: DataBase = new DataBase();
        return await db.hasData(refs.ROOM_DB_REF + roomId);
    };
}

export default RoomController;