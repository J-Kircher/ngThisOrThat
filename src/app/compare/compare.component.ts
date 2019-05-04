import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IAlbum } from '../shared/models/albums.model';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit, OnChanges {

  @Input() albums: IAlbum[];
  albumOne: number = null;
  albumTwo: number = null;
  matchCounter = 0;

  constructor(
    private storageService: StorageService
  ) { }

  ngOnInit() {
  }

  // Respond when Angular (re)sets data-bound input properties.
  ngOnChanges(changes: SimpleChanges) {
    if ('albums' in changes) {
      // console.log('[my-album] ngOnChanges() found a change!');
      this.albums.forEach(a => {
        // if (a.wins === undefined) a.wins = 0;
        // if (a.losses === undefined) a.losses= 0;
        this.matchCounter += a.wins;
      });
      this.getAlbumsForCompare();
    }
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
    this.matchCounter++;
    this.storageService.storeToLocalStorage(this.albums);
    this.getAlbumsForCompare();
  }
}
