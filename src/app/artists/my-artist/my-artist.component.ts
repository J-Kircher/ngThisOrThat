import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { ArtistsService } from '@app/service/artists.service';
import { IArtist } from '@app/shared/models/artists.model';

@Component({
  selector: 'app-my-artist',
  templateUrl: './my-artist.component.html',
  styleUrls: ['./my-artist.component.scss']
})
export class MyArtistComponent implements OnInit, OnChanges {
  @Input() artistIdx: number;
  @Output() chosen = new EventEmitter<number>();

  artist: IArtist;

  constructor(
    private artistsService: ArtistsService
  ) { }

  ngOnInit() {
    // console.log('[my-artist] ngInit() artistIdx: ' + this.artistIdx);
    this.artist = this.artistsService.getArtistByIdx(this.artistIdx);
  }

  // Respond when Angular (re)sets data-bound input properties.
  ngOnChanges(changes: SimpleChanges) {
    if ('artistIdx' in changes) {
      // console.log('[my-artist] ngOnChanges() found a change!');
      this.artist = this.artistsService.getArtistByIdx(this.artistIdx);
    }
    // for (let propName in changes) {
    //   let chng = changes[propName];
    //   let cur  = JSON.stringify(chng.currentValue);
    //   let prev = JSON.stringify(chng.previousValue);
    //   console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    // }
  }

  choose() {
    this.chosen.emit(this.artistIdx);
  }
}
