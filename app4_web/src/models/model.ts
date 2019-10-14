import { AxiosPromise, AxiosResponse } from 'axios';

export interface ModelAttributes<T extends HasId> {
  get<K extends keyof T>(key: K): T[K];
  getAll(): T;
  set(update: T): void;
}

export type Callback = () => void;

export interface Eventing {
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
}

export interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

export interface HasId {
  id?: number;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Eventing,
    private sync: Sync<T>
  ) {}

  get<K extends keyof T>(propName: K): T[K] {
    return this.attributes.get(propName);
  }

  set(update: T): void {
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
