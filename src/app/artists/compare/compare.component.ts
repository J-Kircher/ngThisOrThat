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

  constructor(
    private router: Router,
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
    this.artistOne = this.getRnd(this.artists.length);
    // console.log('[this-or-that] getArtistsForCompare() artistOne: ' + this.artistOne);
    this.artistTwo = this.getRnd(this.artists.length, this.artistOne);
    // console.log('[this-or-that] getArtistsForCompare() artistTwo: ' + this.artistTwo);
  }

  getRnd(max: number, exclude: number = null): number {
    const rnd = Math.floor(Math.random() * max);
    return rnd !== exclude ? rnd : this.getRnd(max, exclude);
  }

  getNewArtists() {
    this.getArtistsForCompare();
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
