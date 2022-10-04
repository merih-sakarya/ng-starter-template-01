import { UserRoleEnum } from '@shared/enums/user-role.enum';

export class UserResponseModel {
  email!: string;
  firstName!: string;
  lastName!: string;
  role!: UserRoleEnum;
}
