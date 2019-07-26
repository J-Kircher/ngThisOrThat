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
import { FabComponent } from './fab/fab.component';
import { ConfirmDialogComponent } from './dialog/confirm/confirm-dialog.component';
import { ListDialogComponent } from './dialog/list/list-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ThisOrThatComponent,
    MyAlbumComponent,
    CompareComponent,
    SummaryComponent,
    FabComponent,
    ConfirmDialogComponent,
    ListDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [
    ConfirmDialogComponent,
    ListDialogComponent
  ],
  entryComponents: [
    ConfirmDialogComponent,
    ListDialogComponent
  ],
  providers: [
    AlbumsService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
