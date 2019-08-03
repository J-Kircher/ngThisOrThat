import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IAlbum } from '@app/shared/models/albums.model';
import { IArtist } from '@app/shared/models/artists.model';
import { AlbumsService } from '@app/service/albums.service';
import { ArtistsService } from '@app/service/artists.service';

@Injectable()
export class StorageService {

  constructor(
    private albumsService: AlbumsService,
    private artistsService: ArtistsService
  ) { }


  /*
   * Albums Methods
   */

  private getDefaultAlbums(): any {
    // console.log('[storage.service] getDefaultAlbums()');
    return this.albumsService.getAlbums();
  }

  public loadAlbumsFromLocalStorage(): IAlbum[] {
    // console.log('[storage.service] loadAlbumsFromLocalStorage()');
    let config = this.getDefaultAlbums();

    try {
      const configText = localStorage.getItem('albums');

      if (configText) {
        config = JSON.parse(configText);
      } else {
        this.storeAlbumsToLocalStorage(config);
      }
      // console.log('[storage.service] loadAlbumsFromLocalStorage() SUCCESS');
    } catch (e) {
      console.warn('[storage.service] loadAlbumsFromLocalStorage() Error reading from local storage');
    }
    return config;
  }

  public storeAlbumsToLocalStorage(newAlbums: IAlbum[]): void {
    // console.log('[storage.service] storeAlbumsToLocalStorage()');
    try {
      const configText = JSON.stringify(newAlbums);
      localStorage.setItem('albums', configText);
    } catch (e) {
      console.warn('[storage.service] storeAlbumsToLocalStorage() Error reading from local storage');
    }
  }

  public clearAlbumsFromLocalStorage(): Observable<boolean> {
    // console.log('[storage.service] clearAlbumsFromLocalStorage()');
    const subject = new Subject<boolean>();
    localStorage.removeItem('albums');
    setTimeout(() => {
      subject.next(true);
      subject.complete();
    }, 50);
    return subject;
  }

  /*
   * Artists Methods
   */

  private getDefaultArtists(): any {
    // console.log('[storage.service] getDefaultArtists()');
    return this.artistsService.getArtists();
  }

  public loadArtistsFromLocalStorage(): IArtist[] {
    // console.log('[storage.service] loadArtistsFromLocalStorage()');
    let config = this.getDefaultArtists();

    try {
      const configText = localStorage.getItem('artists');

      if (configText) {
        config = JSON.parse(configText);
      } else {
        this.storeArtistsToLocalStorage(config);
      }
      // console.log('[storage.service] loadArtistsFromLocalStorage() SUCCESS');
    } catch (e) {
      console.warn('[storage.service] loadArtistsFromLocalStorage() Error reading from local storage');
    }
    return config;
  }

  public storeArtistsToLocalStorage(newArtists: IArtist[]): void {
    // console.log('[storage.service] storeArtistsToLocalStorage()');
    try {
      const configText = JSON.stringify(newArtists);
      localStorage.setItem('artists', configText);
    } catch (e) {
      console.warn('[storage.service] storeArtistsToLocalStorage() Error reading from local storage');
    }
  }

  public clearArtistsFromLocalStorage(): Observable<boolean> {
    // console.log('[storage.service] clearArtistsFromLocalStorage()');
    const subject = new Subject<boolean>();
    localStorage.removeItem('artists');
    setTimeout(() => {
      subject.next(true);
      subject.complete();
    }, 50);
    return subject;
  }
}
