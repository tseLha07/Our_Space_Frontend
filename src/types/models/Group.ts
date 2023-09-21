import { User } from "./User.model";

export type Group = {
    id: string;
    name: string;
    description: string;
    motto: string;
    logo: string;
    users: User[];
}