import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { AppRoutes } from './app.routes';
import { ThisOrThatComponent } from './this-or-that/this-or-that.component';
import { MyAlbumComponent } from './my-album/my-album.component';
import { AlbumsService } from './service/albums.service';
import { StorageService } from './service/storage.service';
import { CompareComponent } from './compare/compare.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    ThisOrThatComponent,
    MyAlbumComponent,
    CompareComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    AlbumsService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
