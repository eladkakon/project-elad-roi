import {Component, Inject, OnInit} 
from 
'@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose
} 
from 
'@angular/material/dialog';
import {MatButtonModule} 
from 
'@angular/material/button';
import {FormsModule} 
from 
'@angular/forms';
import {MatInputModule} 
from 
'@angular/material/input';
import {MatFormFieldModule} 
from 
'@angular/material/form-field';
import { GameService } from '../Services/game.service';
import { Router } from '@angular/router';
import { GameProfile } from '../shared/model/GameProfile';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@Component({
  
  selector: 
  'app-gamedialog',
    
  templateUrl: 
  'gamedialog.component.html',
    
  standalone: 
  true,
    
  imports: [
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      MatButtonModule,
      MatDialogTitle,
      MatDialogContent,
      MatDialogActions,
      MatDialogClose,
      MatSelectModule,
      CommonModule
    ],
  })
  
 export class GamedialogComponent implements OnInit {

  selected: GameProfile | null = null; 
    
  constructor(
  
    public dialogRef: MatDialogRef<GamedialogComponent>,
    @Inject(MAT_DIALOG_DATA) public categoryId: number,
    private gameS: GameService,
    private route : Router
 
    ) {}


    game: GameProfile[] = [];

    play(): void {
      if (this.selected) {
        this.route.navigate([this.selected.url, this.categoryId]);
      }
    }

  ngOnInit(): void {
    this.game = this.gameS.list();
  }
  
  onGame(game1: GameProfile): void {
    this.selected = game1; 
  }
  
}