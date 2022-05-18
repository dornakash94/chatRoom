import DataBase from '../utils/database'
import { User } from '../entities/user';
import refs from './refs'

class UserController {
    public saveUser = async (user: User): Promise<User> => {
        if (await this.userExists(user.username)) {
            throw "User already exist";
        }

        const db: DataBase = new DataBase();
        db.writeToData(refs.USER_DB_REF + user.username, user);
        return user;
    };

    public removeUser = async (userId: string): Promise<boolean> => {
        if (!(await this.userExists(userId))) {
            throw "User does not exist";
        }

        const db: DataBase = new DataBase();
        db.writeToData(refs.USER_DB_REF + userId, null);
        return true;
    };

    public userExists = async (userId: string): Promise<boolean> => {
        const db: DataBase = new DataBase();
        return await db.hasData(refs.USER_DB_REF + userId);
    };
}

export default UserController;

