import { Eventing, Callback } from './eventing';
import { Sync } from './sync';
import { AxiosResponse } from 'axios';
import { Attributes } from './attributes';

const rootUrl = 'http://localhost:3000/users';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  private events: Eventing = new Eventing();
  private sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  private attributes: Attributes<UserProps>;

  constructor(data: UserProps) {
    this.attributes = new Attributes(data);
  }

  get<K extends keyof UserProps>(propName: K): UserProps[K] {
    return this.attributes.get(propName);
  }

  set(update: UserProps): void {
    this.attributes.set(update);
    this.trigger('change');
  }

  on(eventName: string, callback: Callback): void {
    this.events.on(eventName, callback);
  }

  trigger(eventName: string): void {
    this.events.trigger(eventName);
  }

  fetch(): void {
    const id = this.get('id');
    if (typeof id !== 'number') {
      throw new Error(`Cannot fetch, invalid id format, id: ${id}`);
    }
    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((response: AxiosResponse) => {
        this.trigger('save');
      })
      .catch((reason: any) => {
        console.log(`Cannot save, ${reason}`);
        this.trigger('saveError');
      });
  }
}
