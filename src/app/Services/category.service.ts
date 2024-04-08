import { Injectable } from '@angular/core'
import { Category } from '../shared/model/Category';


@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

 category = new Map<number, Category>();
  nextId = 0;
  private readonly CATEGORY_KEY = 'category';
  private readonly NEXT_ID_KEY = 'nextId';

  constructor() {
    this.loadCategories();
  }

  private getNextId(): number {
    let nextIdString = localStorage.getItem(this.NEXT_ID_KEY);

    return nextIdString ? parseInt(nextIdString) : 0;
  }

  private setNextId(id: number) {
    localStorage.setItem(this.NEXT_ID_KEY, id.toString());
  }

  private setCategory(allCategory: Map<number, Category>) {
    localStorage.setItem(
      this.CATEGORY_KEY,
      JSON.stringify(Array.from(allCategory.values()))
    );
  }

  private getCategory(): Map<number, Category> {
    let categoryString = localStorage.getItem(this.CATEGORY_KEY);
    let idToCategory = new Map<number, Category>();

    if (categoryString) {
      JSON.parse(categoryString).forEach((category: Category) => {
        Object.setPrototypeOf(category, Category.prototype);
        idToCategory.set(category.id, category);
      });
    }

    return idToCategory;
  }


  private loadCategories(): void {
    this.setNextId(this.getNextId()); 
  }

  currentName(): string {
    return this.get(this.getNextId() - 1)?.name || '';
  }

  list(): Category[] {
    return Array.from(this.getCategory().values());
  }

  get(id: number): Category | undefined {
    return this.getCategory().get(id);
  }

  delete(id: number): void {
    let categoryMap = this.getCategory();
    if (!categoryMap.delete(id)) {
      throw new Error('Failed to delete category by id: ' + id);
    }
    this.setCategory(categoryMap);
    this.loadCategories();
  }

  update(category: Category): void  {
    let categoryMap = this.getCategory();
    if (!this.category.has(category.id)) {
      throw new Error('Failed to update category by id: ' + category.id);
    }
    categoryMap.set(category.id, category);
    this.setCategory(categoryMap);
  }

  add(newCategoryData: Category) {
    let nextId = this.getNextId();
    newCategoryData.id = nextId;

    let categories = this.getCategory();
    categories.set(nextId, newCategoryData);
    this.setCategory(categories);

    this.setNextId(++nextId);
  }

  getTranslationFromStorage(origin: string): string | undefined {
    const categories = this.getCategory();
    for (const category of categories.values()) {
      const word = category.words.find((word) => word.origin === origin);
      if (word) {
        return word.target;
      }
    }
    return undefined;
  }

  getWordsByCategory(categoryName: string): string[] {
    const categories = this.getCategory();
    const categoryObject = Array.from(categories.values()).find(
      (cat) => cat.name === categoryName
    );
    return categoryObject ? categoryObject.words.map((word) => word.origin) : [];
  }

}




