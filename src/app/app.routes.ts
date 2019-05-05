import { Routes } from '@angular/router';
import { CompareComponent } from './compare/compare.component';
import { SummaryComponent } from './summary/summary.component';

export const AppRoutes: Routes = [
  { path: 'compare', component: CompareComponent, data: {animation: 'TeamsPage'} },
  { path: 'summary', component: SummaryComponent, data: {animation: 'TeamPage'} },
  { path: '', redirectTo: '/compare', pathMatch: 'full' }
];
