import { SimpleEventing, Callback } from './simpleEventing';
import { ApiSync } from './apiSync';
import { AxiosResponse, AxiosPromise } from 'axios';
import { Attributes } from './attributes';

const rootUrl = 'http://localhost:3000/users';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}
export interface Eventing {
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
}

export interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

export interface ModelAttributes<T> {
  get<K extends keyof T>(key: K): T[K];
  getAll(): T;
  set(update: T): void;
}

export class User {
  private events: Eventing = new SimpleEventing();
  private sync: Sync<UserProps> = new ApiSync<UserProps>(rootUrl);
  private attributes: ModelAttributes<UserProps>;

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
