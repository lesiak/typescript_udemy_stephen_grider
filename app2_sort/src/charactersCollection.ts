import { Sorter } from './sorter';

export class CharactersCollection extends Sorter {
  private characters: string[];

  constructor(data: string) {
    super();
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
