import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/model/Category';
import { MatDialog } from '@angular/material/dialog';
import { CategoryService } from '../Services/category.service';
import { CommonModule } from '@angular/common';
import { CategoryCardComponent } from "../category-card/category-card.component";
import { GamedialogComponent } from '../gamedialog/gamedialog.component';

@Component({
    selector: 'app-choose-game',
    standalone: true,
    templateUrl: './choose-game.component.html',
    styleUrl: './choose-game.component.css',
    imports: [CommonModule, CategoryCardComponent]
})
export class ChooseGameComponent implements OnInit {
  category: Category[] = [];
  constructor(private dialog: MatDialog, private categoryService: CategoryService) {
    const storedCategory: string | null = localStorage.getItem('category');
    if (storedCategory) {
      const categoryData = JSON.parse(storedCategory);
      this.category = categoryData.map((category: any) => category.name);
    }
    
}
  ngOnInit(): void {
 this.category = this.categoryService.list()
  }
  categorySelected(p:Category): void{
    const dialogRef = this.dialog.open(GamedialogComponent, {data: p.id})
  }
}
