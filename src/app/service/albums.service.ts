import { Injectable } from '@angular/core';
import { IAlbum } from '../model/albums.model';

const _ALBUMS: IAlbum[] = [
  { 'artist': 'The Beatles', 'title': 'Please Please Me', 'year': 1963, 'image': 'revolver.png' },
  { 'artist': 'The Beatles', 'title': 'With the Beatles', 'year': 1963, 'image': 'revolver.png' },
  { 'artist': 'The Beatles', 'title': 'A Hard Days Night', 'year': 1964, 'image': 'revolver.png' },
  { 'artist': 'The Beatles', 'title': 'Beatles for Sale', 'year': 1964, 'image': 'revolver.png' },
  { 'artist': 'The Beatles', 'title': 'Help!', 'year': 1965, 'image': 'revolver.png' },
  { 'artist': 'The Beatles', 'title': 'Rubber Soul', 'year': 1965, 'image': 'rubbersoul.png' },
  { 'artist': 'The Beatles', 'title': 'Revolver', 'year': 1966, 'image': 'revolver.png' },
  { 'artist': 'The Beatles', 'title': 'Sgt. Peppers Lonely Hearts Club Band', 'year': 1967, 'image': 'revolver.png' },
  { 'artist': 'The Beatles', 'title': 'Magical Mystery Tour', 'year': 1967, 'image': 'revolver.png' },
  { 'artist': 'The Beatles', 'title': 'The White Album', 'year': 1968, 'image': 'revolver.png' },
  { 'artist': 'The Beatles', 'title': 'Yellow Submarine', 'year': 1969, 'image': 'yellowsub.png' },
  { 'artist': 'The Beatles', 'title': 'Abbey Road', 'year': 1969, 'image': 'abbeyroad.png' },
  { 'artist': 'The Beatles', 'title': 'Let It Be', 'year': 1970, 'image': 'revolver.png' }
];

@Injectable()
export class AlbumsService {

  constructor() { }

  getAlbums(): IAlbum[] {
    return _ALBUMS;
  }

  getAlbumByTitle(title: string): IAlbum {
    return _ALBUMS.find(s => s.title === title);
  }

  getAlbumByIdx(idx: number): IAlbum {
    return _ALBUMS[idx];
  }
}
