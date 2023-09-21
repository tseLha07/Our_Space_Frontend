import { Role } from './Role.model';

export type User = {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  group_id: string,
  group_name: string,
  roles: Role[];
};
