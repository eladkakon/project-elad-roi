import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { Category } from '../shared/model/Category';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [
    CommonModule,MatCardModule
  ],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryCardComponent {
  @Input()
  currentCategory?: Category
 }