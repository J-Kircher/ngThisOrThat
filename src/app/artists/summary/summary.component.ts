import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { IArtist } from '@app/shared/models/artists.model';
import { StorageService } from '@app/service/storage.service';
import { sortArtistsByPercent, sortArtistsByDifference } from '@app/shared/artists.sort';
import { listAnimation } from '@app/shared/animations';
import { DetailsDialogComponent } from '@app/dialog/details/details-dialog.component';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  animations: [listAnimation]
})
export class SummaryComponent implements OnInit, DoCheck {

  artists: IArtist[];
  currentArtists: IArtist[];
  sortedArtists: IArtist[];
  displayArtists: IArtist[];
  sortPct = true;
  maxDisplayArtists = 42;
  maxInfoArtists = 22;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.artists = this.storageService.loadArtistsFromLocalStorage();
  }

  ngDoCheck() {
    this.sortedArtists = JSON.parse(JSON.stringify(this.artists));
    if (this.sortPct) {
      this.sortedArtists = this.sortedArtists.sort(sortArtistsByPercent);
    } else {
      this.sortedArtists = this.sortedArtists.sort(sortArtistsByDifference);
    }
    if (this.sortedArtists.length > this.maxDisplayArtists) {
      this.displayArtists = this.sortedArtists.splice(0, this.maxDisplayArtists);
    } else {
      this.displayArtists = this.sortedArtists;
    }
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

  toggleSort() {
    this.sortPct = !this.sortPct;
  }

  getPct(artist: IArtist) {
    const wins = artist.wins || 0;
    const losses = artist.losses || 0;
    if ((wins + losses) === 0) {
      return 0;
    } else {
      return ((wins / (wins + losses)) * 100).toFixed(1);
    }
  }

  showDetails(artist: IArtist) {
    this.dialog.open(DetailsDialogComponent, {
      data: { title: 'Artist Details', item: artist, type: 'artists' },
      panelClass: 'details-container',
      minWidth: '500px'
    });
  }
}
