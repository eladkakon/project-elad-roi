import { Routes } from '@angular/router'
import { CategoryListComponent } from './categoryList/categoryList.component'
import { FormComponent } from './form/form.component'
import { ChooseGameComponent } from './choose-game/choose-game.component';
import { MatchingGameComponent } from './matching-game/matching-game.component';
import { MixedWordsComponent } from './mixed-words/mixed-words.component';

export const routes: Routes = [
	{path: 'category/:idString', component: FormComponent},
	{path: '', component: CategoryListComponent}, 
	{path: 'choose-game', component: ChooseGameComponent},
	{path:'match-game/:id', component: MatchingGameComponent},
	{path:'mixed-word/:id', component: MixedWordsComponent}
];
