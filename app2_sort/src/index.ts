import { Sorter } from './sorter';
import { NumbersCollection } from './numbersCollection';
import { CharactersCollection } from './charactersCollection';
import { LinkedList } from './linkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const numbersSorter = new Sorter(numbersCollection);
numbersSorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('XaayBb');
const stringSorter = new Sorter(charactersCollection);
stringSorter.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(3);
linkedList.add(-5);
linkedList.add(0);
const linkedListSorter = new Sorter(linkedList);
linkedListSorter.sort();
linkedList.print();
