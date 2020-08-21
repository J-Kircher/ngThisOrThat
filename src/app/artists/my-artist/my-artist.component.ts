import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ArtistsService } from '@app/service/artists.service';
import { IArtist } from '@app/shared/models/artists.model';
import { StorageService } from '@app/service/storage.service';
import { DetailsDialogComponent } from '@app/dialog/details/details-dialog.component';

@Component({
  selector: 'app-my-artist',
  templateUrl: './my-artist.component.html',
  styleUrls: ['./my-artist.component.scss']
})
export class MyArtistComponent implements OnInit, OnChanges {
  @Input() artistIdx: number;
  @Output() chosen = new EventEmitter<number>();

  artist: IArtist;
  artists: IArtist[];

  constructor(
    private dialog: MatDialog,
    private artistsService: ArtistsService,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    // console.log('[my-artist] ngInit() artistIdx: ' + this.artistIdx);
    this.artist = this.artistsService.getArtistByIdx(this.artistIdx);
    this.artists = this.storageService.loadArtistsFromLocalStorage();
  }

  getArtistByName(name: string): IArtist {
    return this.artists.find(s => s.name === name);
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

  showDetails(artist: IArtist) {
    this.dialog.open(DetailsDialogComponent, {
      data: { title: 'Artist Details', item: this.getArtistByName(artist.name), type: 'artists' },
      panelClass: 'details-container',
      minWidth: '500px'
    });
  }
}
