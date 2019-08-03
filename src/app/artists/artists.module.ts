import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { artistRoutes } from './artists.routes';
import { MyArtistComponent } from './my-artist/my-artist.component';
import { CompareComponent } from './compare/compare.component';
import { SummaryComponent } from './summary/summary.component';

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
