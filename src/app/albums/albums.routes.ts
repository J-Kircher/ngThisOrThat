import { Routes } from '@angular/router';
import { CompareComponent } from '@app/albums/compare/compare.component';
import { SummaryComponent } from '@app/albums/summary/summary.component';

export const albumRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'compare' },
  { path: 'compare', component: CompareComponent },
  { path: 'summary', component: SummaryComponent },
];
