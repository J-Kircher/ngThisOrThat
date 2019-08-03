import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app/shared/material.module';
import { albumRoutes } from '@app/albums/albums.routes';
import { MyAlbumComponent } from '@app/albums/my-album/my-album.component';
import { CompareComponent } from '@app/albums/compare/compare.component';
import { SummaryComponent } from '@app/albums/summary/summary.component';

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
