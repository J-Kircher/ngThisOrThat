import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { AlbumsService } from '../service/albums.service';
import { IAlbum } from '../model/albums.model';

@Component({
  selector: 'app-my-album',
  templateUrl: './my-album.component.html',
  styleUrls: ['./my-album.component.scss']
})
export class MyAlbumComponent implements OnInit, OnChanges {
  @Input() albumIdx: number;
  @Output() chosen = new EventEmitter<number>();

  album: IAlbum;

  constructor(
    private albumsService: AlbumsService
  ) { }

  ngOnInit() {
    console.log('[my-album] ngInit() albumIdx: ' + this.albumIdx);
    this.album = this.albumsService.getAlbumByIdx(this.albumIdx);
  }

  // Respond when Angular (re)sets data-bound input properties.
  ngOnChanges(changes: SimpleChanges) {
    if ('albumIdx' in changes) {
      // console.log('[my-album] ngOnChanges() found a change!');
      this.album = this.albumsService.getAlbumByIdx(this.albumIdx);
    }
    // for (let propName in changes) {
    //   let chng = changes[propName];
    //   let cur  = JSON.stringify(chng.currentValue);
    //   let prev = JSON.stringify(chng.previousValue);
    //   console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    // }
  }

  choose() {
    this.chosen.emit(this.albumIdx);
  }
}
