import { Injectable } from '@angular/core';
import { IAlbum } from '../shared/models/albums.model';
import { Observable, Subject } from 'rxjs';
import { AlbumsService } from '../service/albums.service';

@Injectable()
export class StorageService {

  constructor(private albumsService: AlbumsService) { }

  private getDefaultLocalStorage(): any {
    // console.log('[storage.service] getDefaultLocalStorage()');
    return this.albumsService.getAlbums();
  }

  public loadFromLocalStorage(): IAlbum[] {
    // console.log('[storage.service] loadFromLocalStorage()');
    let config = this.getDefaultLocalStorage();

    try {
      const configText = localStorage.getItem('albums');

      if (configText) {
        config = JSON.parse(configText);
      } else {
        this.storeToLocalStorage(config);
      }
      // console.log('[storage.service] loadFromLocalStorage() SUCCESS');
    } catch (e) {
      console.warn('[storage.service] loadFromLocalStorage() Error reading from local storage');
    }
    return config;
  }

  public storeToLocalStorage(newalbums: IAlbum[]): void {
    // console.log('[storage.service] storeToLocalStorage()');
    try {
      const configText = JSON.stringify(newalbums);
      localStorage.setItem('albums', configText);
    } catch (e) {
      console.warn('[storage.service] storeToLocalStorage() Error reading from local storage');
    }
  }

  public clearFromLocalStorage(): Observable<boolean> {
    // console.log('[storage.service] clearFromLocalStorage()');
    const subject = new Subject<boolean>();
    localStorage.removeItem('albums');
    setTimeout(() => {
      subject.next(true);
      subject.complete();
    }, 50);
    return subject;
  }
}
