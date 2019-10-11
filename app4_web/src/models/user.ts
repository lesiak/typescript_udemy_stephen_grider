import { SimpleEventing } from './simpleEventing';
import { ApiSync } from './apiSync';
import { Attributes } from './attributes';
import { Model } from './model';

const rootUrl = 'http://localhost:3000/users';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User extends Model<UserProps> {
  static buildUser(data: UserProps): User {
    return new User(
      new Attributes(data),
      new SimpleEventing(),
      new ApiSync(rootUrl)
    );
  }
}
