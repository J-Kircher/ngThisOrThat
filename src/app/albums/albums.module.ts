import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { albumRoutes } from './albums.routes';
import { MyAlbumComponent } from './my-album/my-album.component';
import { CompareComponent } from './compare/compare.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [
    MyAlbumComponent,
    CompareComponent,
    SummaryComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(albumRoutes)
  ]
})
export class AlbumsModule { }
