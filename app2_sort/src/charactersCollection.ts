import { SortableCollection } from './sorter';

export class CharactersCollection implements SortableCollection {
  private characters: string[];

  constructor(data: string) {
    this.characters = data.split('');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    const leftItem = this.characters[leftIndex].toLowerCase();
    const rightItem = this.characters[rightIndex].toLowerCase();
    return leftItem > rightItem;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.characters[leftIndex];
    this.characters[leftIndex] = this.characters[rightIndex];
    this.characters[rightIndex] = leftHand;
  }

  get length(): number {
    return this.data.length;
  }

  get data() {
    return this.characters.join('');
  }
}
