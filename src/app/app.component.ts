import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAlbum } from './shared/models/albums.model';
import { AlbumsService } from './service/albums.service';
import { StorageService } from './service/storage.service';

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

}
