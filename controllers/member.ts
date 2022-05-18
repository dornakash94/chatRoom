import DataBase from '../utils/database'
import refs from './refs'
//The class that handle the users inside the rooms
class MemberController {
    public saveRoomMember = async (userId: string, roomId: string): Promise<boolean> => {
        return this.updateRoomMember(userId, roomId, userId);
    };

    public removeRoomMember = async (userId: string, roomId: string): Promise<boolean> => {
        return this.updateRoomMember(userId, roomId, null);
    };

    private updateRoomMember = async (userId: string, roomId: string, data: string): Promise<boolean> => {
        const db: DataBase = new DataBase();

        if (!(await db.hasData(refs.USER_DB_REF + userId))) {
            throw "User does not exist";
        }

        if (!(await db.hasData(refs.ROOM_DB_REF + roomId))) {
            throw "Room does not exist";
        }

        db.writeToData(refs.MEMBER_DB_REF + roomId + '/' + userId, data);
        return true;
    };

    public getRoomMembers = async (roomId: string): Promise<string[]> => {
        const db: DataBase = new DataBase();
        if (!(await db.hasData(refs.ROOM_DB_REF + roomId))) {
            throw "Room does not exist";
        }

        const members = await db.readData(refs.MEMBER_DB_REF + roomId);
        return !!members ? Object.values(members) : [];
    };
}

export default MemberController;

