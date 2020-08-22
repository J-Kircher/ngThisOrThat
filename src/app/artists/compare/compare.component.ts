import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IArtist } from '@app/shared/models/artists.model';
import { StorageService } from '@app/service/storage.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {

  artists: IArtist[];
  artistOne: number = null;
  artistTwo: number = null;
  matchCounter = 0;
  checkedOne = false;
  checkedTwo = false;

  constructor(
    public router: Router,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.artists = this.storageService.loadArtistsFromLocalStorage();
    this.artists.forEach(a => {
      this.matchCounter += a.wins;
    });
    this.getArtistsForCompare();
  }

  getArtistsForCompare() {
    if (this.artistOne == null || !this.checkedOne) {
      this.artistOne = this.getRnd(this.artists.length);
    }
    if (this.artistTwo == null || !this.checkedTwo) {
      this.artistTwo = this.getRnd(this.artists.length, this.artistOne);
    }
  }

  getRnd(max: number, exclude: number = null): number {
    const rnd = Math.floor(Math.random() * max);
    return rnd !== exclude ? rnd : this.getRnd(max, exclude);
  }

  getNewArtists() {
    this.getArtistsForCompare();
  }

  toggleArtistLock (item: string) {
    if (item === 'toggleOne') {
      this.checkedOne = !this.checkedOne;
    }
    if (item === 'toggleTwo') {
      this.checkedTwo = !this.checkedTwo;
    }
  }

  changeArtistOne(artistIdx: number) {
    this.artistOne = artistIdx;
  }

  onChosen(artist: number) {
    // console.log('[this-or-that] onChosen() artist: ' + artist);
    const winner = artist === this.artistOne ? this.artistOne : this.artistTwo;
    const loser = artist === this.artistOne ? this.artistTwo : this.artistOne;
    this.artists[winner].wins == null ? this.artists[winner].wins = 1 : this.artists[winner].wins++;
    this.artists[loser].losses == null ? this.artists[loser].losses = 1 : this.artists[loser].losses++;
    this.matchCounter++;
    this.storageService.storeArtistsToLocalStorage(this.artists);
    this.getArtistsForCompare();
  }
}
