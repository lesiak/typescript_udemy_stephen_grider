import axios, { AxiosResponse } from 'axios';
import { User, UserProps } from './user';
import { Eventing, Callback } from './model';
import { SimpleEventing } from './simpleEventing';

export class ModelCollection {
  models: User[] = [];
  events: Eventing = new SimpleEventing();

  constructor(public rootUrl: string) {}

  on(eventName: string, callback: Callback): void {
    this.events.on(eventName, callback);
  }

  trigger(eventName: string): void {
    this.events.trigger(eventName);
  }

  fetch(): void {
    axios.get(this.rootUrl).then((response: AxiosResponse) => {
      response.data.forEach((value: UserProps) => {
        const user = User.buildUser(value);
        this.models.push(user);
      });
      this.trigger('change');
    });
  }
}
