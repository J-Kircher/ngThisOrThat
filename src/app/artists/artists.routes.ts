import { Routes } from '@angular/router';
import { CompareComponent } from '@app/artists/compare/compare.component';
import { SummaryComponent } from '@app/artists/summary/summary.component';

export const artistRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'compare' },
  { path: 'compare', component: CompareComponent },
  { path: 'summary', component: SummaryComponent },
];
