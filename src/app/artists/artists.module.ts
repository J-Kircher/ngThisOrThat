import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app/shared/material.module';
import { artistRoutes } from '@app/artists/artists.routes';
import { MyArtistComponent } from '@app/artists/my-artist/my-artist.component';
import { CompareComponent } from '@app/artists/compare/compare.component';
import { SummaryComponent } from '@app/artists/summary/summary.component';

@NgModule({
  declarations: [
    MyArtistComponent,
    CompareComponent,
    SummaryComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(artistRoutes)
  ]
})
export class ArtistsModule { }
