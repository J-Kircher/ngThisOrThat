import { Routes } from '@angular/router';
import { CompareComponent } from './compare/compare.component';
import { SummaryComponent } from './summary/summary.component';

export const albumRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'compare' },
  { path: 'compare', component: CompareComponent },
  { path: 'summary', component: SummaryComponent },
];
