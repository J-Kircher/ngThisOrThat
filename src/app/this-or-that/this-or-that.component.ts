import { Component, OnInit, DoCheck } from '@angular/core';
import { IAlbum } from '../model/albums.model';
import { AlbumsService } from '../service/albums.service';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-this-or-that',
  templateUrl: './this-or-that.component.html',
  styleUrls: ['./this-or-that.component.scss']
})
export class ThisOrThatComponent implements OnInit, DoCheck {

  currentAlbums: IAlbum[];
  albums: IAlbum[];
  sortedAlbums: IAlbum[];
  albumOne: number = null;
  albumTwo: number = null;
  showCompare = false;

  constructor(
    private albumsService: AlbumsService,
    private storageService: StorageService
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

    // console.log('[this-or-that] ngInit() arr len: ' + this.albums.length);

    this.storageService.storeToLocalStorage(this.albums);
    this.getAlbumsForCompare();
  }

  ngDoCheck() {
    this.sortedAlbums = JSON.parse(JSON.stringify(this.albums));
    this.sortedAlbums = this.sortedAlbums.sort(sortAlbumsByRating);
  }

  getAlbumsForCompare() {
    this.albumOne = this.getRnd(this.albums.length);
    // console.log('[this-or-that] getAlbumsForCompare() albumOne: ' + this.albumOne);
    this.albumTwo = this.getRnd(this.albums.length, this.albumOne);
    // console.log('[this-or-that] getAlbumsForCompare() albumTwo: ' + this.albumTwo);
  }

  getRnd(max: number, exclude: number = null): number {
    const rnd = Math.floor(Math.random() * max);
    return rnd !== exclude ? rnd : this.getRnd(max, exclude);
  }

  getNewAlbums() {
    this.getAlbumsForCompare();
  }

  onChosen(album: number) {
    // console.log('[this-or-that] onChosen() album: ' + album);
    const winner = album === this.albumOne ? this.albumOne : this.albumTwo;
    const loser = album === this.albumOne ? this.albumTwo : this.albumOne;
    this.albums[winner].wins == null ? this.albums[winner].wins = 1 : this.albums[winner].wins++;
    this.albums[loser].losses == null ? this.albums[loser].losses = 1 : this.albums[loser].losses++;
    this.storageService.storeToLocalStorage(this.albums);
    this.getAlbumsForCompare();
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

  getRankStyle(idx: number): string {
    switch (true) {
      case (idx < 10):
        return 'top';
      case (idx < 22):
        return 'mid';
      default:
        return 'rest';
    }
  }
}

export function sortAlbumsByRating(a1: IAlbum, a2: IAlbum) {
  const a1pct = a1.wins / (a1.wins + a1.losses);
  const a2pct = a2.wins / (a2.wins + a2.losses);
  // console.log('comparing ' + a1.title + ' with ' + a2.title);
  // console.log('comparing ' + a1pct + ' with ' + a2pct);
  if (a1pct < a2pct) {
    return 1;
  } else {
    if (a1pct > a2pct) {
      return -1;
    } else {
      if (a1.wins < a2.wins) {
        return 1;
      } else {
        if (a1.wins > a2.wins) {
          return -1;
        } else {
          if (a1.losses > a2.losses) {
            return 1;
          } else {
            if (a1.losses < a2.losses) {
              return -1;
            } else {
              return 0;
            }
          }
        }
      }
    }
  }
}
