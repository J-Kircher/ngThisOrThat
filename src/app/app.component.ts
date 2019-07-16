import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IAlbum } from './shared/models/albums.model';
import { AlbumsService } from './service/albums.service';
import { StorageService } from './service/storage.service';
import { ConfirmComponent } from './dialog/confirm/confirm.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  albums: IAlbum[];
  currentAlbums: IAlbum[];
  sortedAlbums: IAlbum[];
  showCompare = true;

  constructor(
    private router: Router,
    private albumsService: AlbumsService,
    private storageService: StorageService,
    private dialog: MatDialog,
    private snack: MatSnackBar
  ) { }

  ngOnInit() {
    this.currentAlbums = this.albumsService.getAlbums();
    this.albums = this.storageService.loadFromLocalStorage();

    // console.log(this.currentAlbums);

    // Add albums added to service into storage
    this.currentAlbums.forEach(a => {
      if (this.findAlbumInArray(a, this.albums) === -1) {
        this.albums.push(a);
      }
    });

    // Remove albums removed from service out of storage
    this.albums.forEach(a => {
      const idx = this.findAlbumInArray(a, this.currentAlbums);
      if (idx === -1) {
        this.albums.splice(idx, 1);
      }
    });

    this.albums.forEach(a => {
      if (a.wins === undefined) a.wins = 0;
      if (a.losses === undefined) a.losses= 0;
    });

    console.log('[app] ngInit() arr len: ' + this.albums.length);

    this.storageService.storeToLocalStorage(this.albums);
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

  toggleCompare() {
    this.showCompare = !this.showCompare;
  }

  onResult(action: string) {
    console.log('[app] onResult() res: ' + action);
    switch (action) {
      case ('reset'):
        return this.resetStorage();
      default:
        return 'n/a';
    }
  }

  resetStorage() {
    console.log('[fab] resetStorage()');
    this.dialog.open(ConfirmComponent, {
      data: { title: 'Reset compares' }
    }).afterClosed().subscribe(result => {
      if (result) {
        this.storageService.clearFromLocalStorage().subscribe(() => {
          // Do nothing here; wait for complete
        }, (err) => {
          console.error('[fab] resetStorage() clearFromLocalStorage() error: ' + err);
          this.openSnack('Error with reset!');
        }, () => {
          console.log('[fab] resetStorage() clearFromLocalStorage() complete');
          this.openSnack('Reset complete!');
          this.ngOnInit();
          this.router.navigateByUrl('/compare');
          setTimeout(() => {
            this.router.navigateByUrl('/summary');
          }, 500);
        });
      } else {
        this.openSnack('Reset cancelled!');
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
