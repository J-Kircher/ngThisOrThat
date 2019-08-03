import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IAlbum } from './shared/models/albums.model';
import { IArtist } from './shared/models/artists.model';
import { AlbumsService } from './service/albums.service';
import { ArtistsService } from './service/artists.service';
import { StorageService } from './service/storage.service';
import { ConfirmDialogComponent } from './dialog/confirm/confirm-dialog.component';
import { ListDialogComponent } from './dialog/list/list-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  albums: IAlbum[];
  currentAlbums: IAlbum[];
  sortedAlbums: IAlbum[];
  artists: IArtist[];
  currentArtists: IArtist[];
  sortedArtists: IArtist[];
  showCompare = true;

  constructor(
    private router: Router,
    private albumsService: AlbumsService,
    private artistsService: ArtistsService,
    private storageService: StorageService,
    private dialog: MatDialog,
    private snack: MatSnackBar
  ) { }

  ngOnInit() {
    // Check for changes to ALBUMS
    this.checkAlbums();

    // Check for changes to ARTISTS
    this.checkArtists();
  }

  checkAlbums() {
    this.currentAlbums = this.albumsService.getAlbums();
    this.albums = this.storageService.loadAlbumsFromLocalStorage();

    // console.log(this.currentAlbums);

    // Add albums added to service into storage
    this.currentAlbums.forEach(a => {
      if (this.findAlbumInArray(a, this.albums) === -1) {
        this.albums.push(a);
      }
    });

    // Get list of removed albums
    // (albums in storage that are missing from service)
    const removeIdx = [];
    this.albums.forEach((a, idx) => {
      if (this.findAlbumInArray(a, this.currentAlbums) === -1) {
        removeIdx.push(idx);
      }
    });
    // Remove albums removed from service out of storage
    removeIdx.reverse().forEach(idx => {
      this.albums.splice(idx, 1);
    });

    // Set up W/L data
    this.albums.forEach(a => {
      if (a.wins === undefined) a.wins = 0;
      if (a.losses === undefined) a.losses= 0;
    });

    // console.log('[app] checkAlbums() arr len: ' + this.albums.length);

    this.storageService.storeAlbumsToLocalStorage(this.albums);
  }

  findAlbumInArray(a: IAlbum, arr: IAlbum[]): number {
    let index = -1;
    arr.forEach((s, idx) => {
      if (a.artist === s.artist
        && a.year === s.year
        && a.title === s.title) {
        index = idx;
      }
    });
    return index;
  }

  checkArtists() {
    this.currentArtists = this.artistsService.getArtists();
    this.artists = this.storageService.loadArtistsFromLocalStorage();

    // console.log(this.currentArtists);

    // Add artists added to service into storage
    this.currentArtists.forEach(a => {
      if (this.findArtistInArray(a, this.artists) === -1) {
        this.artists.push(a);
      }
    });

    // Get list of removed artists
    // (artists in storage that are missing from service)
    const removeIdx = [];
    this.artists.forEach((a, idx) => {
      if (this.findArtistInArray(a, this.currentArtists) === -1) {
        removeIdx.push(idx);
      }
    });
    // Remove artists removed from service out of storage
    removeIdx.reverse().forEach(idx => {
      this.artists.splice(idx, 1);
    });

    // Set up W/L data
    this.artists.forEach(a => {
      if (a.wins === undefined) a.wins = 0;
      if (a.losses === undefined) a.losses= 0;
    });

    // console.log('[app] checkArtists() arr len: ' + this.artists.length);

    this.storageService.storeArtistsToLocalStorage(this.artists);
  }

  findArtistInArray(a: IArtist, arr: IArtist[]): number {
    let index = -1;
    arr.forEach((s, idx) => {
      if (a.name === s.name) {
        index = idx;
      }
    });
    return index;
  }

  onResult(action: string) {
    // console.log('[app] onResult() res: ' + action);
    switch (action) {
      case ('reset'):
        return this.resetStorage();
      case ('list'):
        return this.showListDialog();
      default:
      return 'n/a';
    }
  }

  resetStorage() {
    // console.log('[app] resetStorage()');
    this.dialog.open(ConfirmDialogComponent, {
      data: { title: 'Reset compares' }
    }).afterClosed().subscribe(result => {
      if (result) {
        this.storageService.clearAlbumsFromLocalStorage().subscribe(() => {
          // Do nothing here; wait for complete
        }, (err) => {
          console.error('[fab] resetStorage() clearAlbumsFromLocalStorage() error: ' + err);
          this.openSnack('Error with reset!');
        }, () => {
          // console.log('[app] resetStorage() clearAlbumsFromLocalStorage() complete');
          this.openSnack('Reset complete!');
          this.ngOnInit();
          this.router.navigateByUrl('/compare');
          setTimeout(() => {
            this.router.navigateByUrl('/summary');
          }, 500);
        });

        // Add
        // this.storageService.clearArtistsFromLocalStorage()

      } else {
        this.openSnack('Reset cancelled!');
      }
    });
  }

  showListDialog() {
    console.log('[app] showListDialog()');
    this.dialog.open(ListDialogComponent, {
      data: { title: 'Complete List' }
    }).afterClosed().subscribe(result => {
      if (result) {
      }
    });
  }

  openSnack(msg: string) {
    this.snack.open(msg, '', {
      duration: 3000,
      horizontalPosition: 'start',
      verticalPosition: 'bottom'
    });
  }
}
