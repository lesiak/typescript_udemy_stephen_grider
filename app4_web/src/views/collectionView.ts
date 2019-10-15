import { ModelCollection } from '../models/modelCollection';

export abstract class CollectionView<T, TProps> {
  constructor(
    public parent: Element,
    public collection: ModelCollection<T, TProps>
  ) {}

  abstract renderItem(model: T, itemParent: Element): void;

  render(): void {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    for (let model of this.collection.models) {
      const itemParent = document.createElement('div');
      this.renderItem(model, itemParent);
      templateElement.content.append(itemParent);
    }
    this.parent.append(templateElement.content);
  }
}
