import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/albums/compare' },
  { path: 'albums', loadChildren: './albums/albums.module#AlbumsModule' },
  { path: 'artists', loadChildren: './artists/artists.module#ArtistsModule' }
];
