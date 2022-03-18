import { Request, Response } from 'express';

import { IUser } from '../entity';
import { userService } from '../services';

class UserController {
    public async getUsers(req: Request, res: Response): Promise<Response<IUser[]>> {
        try {
            const users = await userService.getUsers();
            return res.json(users);
        } catch (err) {
            return res.json(err);
        }
    }

    public async getUserById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const user = await userService.getUserById(+id);
            return res.json(user);
        } catch (err) {
            return res.json(err);
        }
    }

    public async getUserByEmail(req: Request, res: Response) {
        try {
            const { email } = req.params;
            const user = await userService.getUserByEmail(email);
            return res.json(user);
        } catch (err) {
            return res.json(err);
        }
    }

    public async createUser(req: Request, res: Response): Promise<Response<IUser>> {
        try {
            const createUser = await userService.createUser(req.body);
            return res.json(createUser);
        } catch (err) {
            return res.json(err);
        }
    }

    public async updateUser(req: Request, res: Response):Promise<Response<IUser>> {
        try {
            const { password, email } = req.body;
            const { id } = req.params;
            const updateUser = await userService.updateUser(password, email, +id);
            return res.json(updateUser);
        } catch (err) {
            return res.json(err);
        }
    }

    public async deleteUser(req: Request, res: Response):Promise<void> {
        try {
            const { id } = req.params;
            const deleteUser = await userService.deleteUser(+id);
            res.json(deleteUser);
        } catch (err) {
            res.json(err);
        }
    }
}

export const userController = new UserController();
