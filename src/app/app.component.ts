import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IAlbum } from '@app/shared/models/albums.model';
import { IArtist } from '@app/shared/models/artists.model';
import { FabItems } from '@app/shared/models/fab.model';
import { AlbumsService } from '@app/service/albums.service';
import { ArtistsService } from '@app/service/artists.service';
import { StorageService } from '@app/service/storage.service';
import { FabService } from '@app/service/fab.service';
import { ConfirmDialogComponent } from '@app/dialog/confirm/confirm-dialog.component';
import { ListDialogComponent } from '@app/dialog/list/list-dialog.component';

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
  toggleSide = false;
  fabItems: FabItems[];

  constructor(
    public router: Router,
    private albumsService: AlbumsService,
    private artistsService: ArtistsService,
    private storageService: StorageService,
    private fabService: FabService,
    private dialog: MatDialog,
    private snack: MatSnackBar
  ) { }

  ngOnInit() {
    // Get fab buttons
    this.fabItems = this.fabService.getFabItems();

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
    this.currentAlbums.forEach((a, idx) => {
      if (this.findAlbumInArray(a, this.albums) === -1) {
        this.albums.push(a);
      } else {
        // If found, then update data from service
        this.albums[idx].year = a.year;
        this.albums[idx].image = a.image;
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
    this.currentArtists.forEach((a, idx) => {
      if (this.findArtistInArray(a, this.artists) === -1) {
        this.artists.push(a);
      } else {
        // If found, then update data from service
        this.artists[idx].genre = a.genre;
        this.artists[idx].image = a.image;
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
      case ('menu'):
        return this.toggleSidenav();
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
        const listToReset = this.router.url.split('/')[1];
        if (listToReset === 'albums') {
          this.storageService.clearAlbumsFromLocalStorage().subscribe(() => {
            // Do nothing here; wait for complete
          }, (err) => {
            console.error('[fab] resetStorage() clearAlbumsFromLocalStorage() error: ' + err);
            this.openSnack('Error with reset!');
          }, () => {
            // console.log('[app] resetStorage() clearAlbumsFromLocalStorage() complete');
            this.openSnack('Reset complete!');
            this.ngOnInit();
            this.router.navigateByUrl('/albums/compare');
            setTimeout(() => {
              this.router.navigateByUrl('/albums/summary');
            }, 500);
          });
        }
        if (listToReset === 'artists') {
          this.storageService.clearArtistsFromLocalStorage().subscribe(() => {
            // Do nothing here; wait for complete
          }, (err) => {
            console.error('[fab] resetStorage() clearArtistsFromLocalStorage() error: ' + err);
            this.openSnack('Error with reset!');
          }, () => {
            // console.log('[app] resetStorage() clearArtistsFromLocalStorage() complete');
            this.openSnack('Reset complete!');
            this.ngOnInit();
            this.router.navigateByUrl('/artists/compare');
            setTimeout(() => {
              this.router.navigateByUrl('/artists/summary');
            }, 500);
          });
        }
      } else {
        this.openSnack('Reset cancelled!');
      }
    });
  }

  showListDialog() {
    // console.log('[app] showListDialog()');
    const listToAcquire = this.router.url.split('/')[1];
    this.dialog.open(ListDialogComponent, {
      data: { title: 'Complete List', list: listToAcquire },
      minWidth: '500px'
    }).afterClosed().subscribe(result => {
      if (result) {
      }
    });
  }

  toggleSidenav() {
    this.toggleSide = !this.toggleSide;
  }

  openSnack(msg: string) {
    this.snack.open(msg, '', {
      duration: 3000,
      horizontalPosition: 'start',
      verticalPosition: 'bottom'
    });
  }
}
