import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/albums/compare' },
  { path: 'albums', loadChildren: () => import('./albums/albums.module').then(m => m.AlbumsModule) },
  { path: 'artists', loadChildren: () => import('./artists/artists.module').then(m => m.ArtistsModule) }
];
