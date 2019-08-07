import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from '@app/app.component';
import { MaterialModule } from '@app/shared/material.module';
import { AppRoutes } from '@app/app.routes';
import { AlbumsService } from '@app/service/albums.service';
import { ArtistsService } from '@app/service/artists.service';
import { StorageService } from '@app/service/storage.service';
import { FabService } from '@app/service/fab.service';
import { FabComponent } from '@app/fab/fab.component';
import { ConfirmDialogComponent } from '@app/dialog/confirm/confirm-dialog.component';
import { ListDialogComponent } from '@app/dialog/list/list-dialog.component';
import { SideNavComponent } from '@app/side-nav/side-nav.component';
import { DetailsDialogComponent } from '@app/dialog/details/details-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    FabComponent,
    ConfirmDialogComponent,
    ListDialogComponent,
    SideNavComponent,
    DetailsDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [
    ConfirmDialogComponent,
    ListDialogComponent,
    DetailsDialogComponent
  ],
  entryComponents: [
    ConfirmDialogComponent,
    ListDialogComponent,
    DetailsDialogComponent
  ],
  providers: [
    AlbumsService,
    ArtistsService,
    StorageService,
    FabService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
