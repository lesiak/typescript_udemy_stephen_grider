import axios, { AxiosResponse } from 'axios';
import { Eventing, Callback } from './model';
import { SimpleEventing } from './simpleEventing';

export class ModelCollection<T, TProps> {
  models: T[] = [];
  events: Eventing = new SimpleEventing();

  constructor(
    public rootUrl: string,
    public deserialize: (jsonData: TProps) => T
  ) {}

  on(eventName: string, callback: Callback): void {
    this.events.on(eventName, callback);
  }

  trigger(eventName: string): void {
    this.events.trigger(eventName);
  }

  fetch(): void {
    axios.get(this.rootUrl).then((response: AxiosResponse) => {
      response.data.forEach((value: TProps) => {
        const model = this.deserialize(value);
        this.models.push(model);
      });
      this.trigger('change');
    });
  }
}
