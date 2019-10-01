import { SortableCollection } from './sorter';

export class CharactersCollection implements SortableCollection {
  constructor(public data: string) {}

  compare(leftIndex: number, rightIndex: number): boolean {
    const leftItem = this.data[leftIndex].toLowerCase();
    const rightItem = this.data[rightIndex].toLowerCase();
    return leftItem > rightItem;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split('');

    const leftHand = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHand;

    this.data = characters.join('');
  }

  get length(): number {
    return this.data.length;
  }
}
