import { Component, OnInit, DoCheck } from '@angular/core';
import { IAlbum } from '../shared/models/albums.model';
import { StorageService } from '../service/storage.service';
import { sortAlbumsByPercent, sortAlbumsByDifference } from '../shared/sort';
import { listAnimation } from '../shared/animations';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  animations: [listAnimation]
})
export class SummaryComponent implements OnInit, DoCheck {

  albums: IAlbum[];
  currentAlbums: IAlbum[];
  sortedAlbums: IAlbum[];
  sortPct = true;

  constructor(
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.albums = this.storageService.loadFromLocalStorage();
  }

  ngDoCheck() {
    this.sortedAlbums = JSON.parse(JSON.stringify(this.albums));
    if (this.sortPct) {
      this.sortedAlbums = this.sortedAlbums.sort(sortAlbumsByPercent);
    } else {
      this.sortedAlbums = this.sortedAlbums.sort(sortAlbumsByDifference);
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

  getPct(album: IAlbum) {
    const wins = album.wins || 0;
    const losses = album.losses || 0;
    if ((wins + losses) === 0) {
      return 0;
    } else {
      return (+(wins / (wins + losses)).toFixed(2)) * 100;
    }
  }
}
