import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { ThisOrThatComponent } from './this-or-that/this-or-that.component';
import { MyAlbumComponent } from './my-album/my-album.component';
import { AlbumsService } from './service/albums.service';
import { StorageService } from './service/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    ThisOrThatComponent,
    MyAlbumComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    AlbumsService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
