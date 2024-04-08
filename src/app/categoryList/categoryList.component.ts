import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/model/Category';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import {DatePipe} from "@angular/common";
import { CategoryService } from '../Services/category.service';
import { ConfirmDialogComponent } from '../confirmDialog/confirm-dialog.component';

@Component({
  selector: 'app-categoryList',
  standalone: true,
  imports: [MatTableModule, RouterModule, MatIconModule, MatButtonModule, DatePipe],
  templateUrl: './categoryList.component.html',
  styleUrl: './categoryList.component.css'
})
export class CategoryListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'Words', 'Date', 'actions'];
  categories: Category [] = []

  constructor(private categoryService: CategoryService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.categories=this.categoryService.list()
  }

  deleteCategory(id:number, name:string){
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: name,})

    dialogRef.afterClosed().subscribe(deletionConfirmed => {
          if(deletionConfirmed){
            this.categoryService.delete(id)
            this.categories=this.categoryService.list()
          }
    });
  }



  getCategoryWords(category: Category): string {
    return category.words.map(word => `${word.origin} - ${word.target}`).join(', ');
  }
}
