export class Attributes<T> {
  constructor(private data: T) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  getAll(): T {
    return this.data;
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }
}
