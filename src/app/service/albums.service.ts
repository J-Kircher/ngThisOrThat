import { Injectable } from '@angular/core';
import { IAlbum } from '../model/albums.model';

const _ALBUMS: IAlbum[] = [
  { 'artist': 'The Beatles', 'title': 'Revolver', 'year': 1966, 'image': 'BeatlesRevolver' },
  { 'artist': 'The Beatles', 'title': 'Rubber Soul', 'year': 1965, 'image': 'BeatlesRubberSoul' },
  { 'artist': 'The Beatles', 'title': 'Sgt. Peppers Lonely Hearts Club Band', 'year': 1967, 'image': 'BeatlesSgtPepper' },
  { 'artist': 'The Beatles', 'title': 'The Beatles', 'year': 1968, 'image': 'BeatlesWhiteAlbum' },
  { 'artist': 'Boston', 'title': 'Boston', 'year': 1976, 'image': 'BostonSelfTitled' },
  { 'artist': 'David Bowie', 'title': 'Hunky Dory', 'year': 1971, 'image': 'BowieHunkyDory' },
  { 'artist': 'David Bowie', 'title': 'Space Oddity', 'year': 1969, 'image': 'BowieSpaceOddity' },
  { 'artist': 'David Bowie', 'title': 'Ziggy Stardust', 'year': 1972, 'image': 'BowieZiggy' },
  { 'artist': 'The Cars', 'title': 'The Cars', 'year': 1979, 'image': 'CarsSelfTitled' },
  { 'artist': 'The Clash', 'title': 'London Calling', 'year': 1979, 'image': 'ClashLondonCalling' },
  { 'artist': 'Nick Drake', 'title': 'Five Leaves Left', 'year': 1969, 'image': 'DrakeFiveLeaves' },
  { 'artist': 'Bob Dylan', 'title': 'Blonde on Blonde', 'year': 1966, 'image': 'DylanBlonde' },
  { 'artist': 'Bob Dylan', 'title': 'The Freewheelin Bob Dylan', 'year': 1963, 'image': 'DylanFreewheelin' },
  { 'artist': 'Bob Dylan', 'title': 'Highway 61 Revisited', 'year': 1965, 'image': 'DylanHighway61' },
  { 'artist': 'Bob Dylan', 'title': 'John Wesley Harding', 'year': 1967, 'image': 'DylanJohn' },
  { 'artist': 'Bob Dylan', 'title': 'Self Portrait', 'year': 1970, 'image': 'DylanSelfPortrait' },
  { 'artist': 'Pink Floyd', 'title': 'Atom Heart Mother', 'year': 1970, 'image': 'FloydAtomHeartMother' },
  { 'artist': 'Pink Floyd', 'title': 'Dark Side of the Moon', 'year': 1973, 'image': 'FloydDarkSide' },
  { 'artist': 'Pink Floyd', 'title': 'The Final Cut', 'year': 1981, 'image': 'FloydFinalCut' },
  { 'artist': 'Pink Floyd', 'title': 'Meddle', 'year': 1971, 'image': 'FloydMeddle' },
  { 'artist': 'Pink Floyd', 'title': 'The Wall', 'year': 1979, 'image': 'FloydWall' },
  { 'artist': 'The Ink Spots', 'title': 'Anthology', 'year': 1998, 'image': 'InkSpotsAnthology' },
  { 'artist': 'The Incredible String Band', 'title': 'The 5000 Spirits or the Layers of the Onion', 'year': 1967, 'image': 'ISB5000Spirits' },
  { 'artist': 'Daniel Johnston', 'title': 'Hi, How Are You', 'year': 1983, 'image': 'JohnstonHi' },
  { 'artist': 'The Kinks', 'title': 'Arthur or the Decline and Fall of the British Empire', 'year': 1969, 'image': 'KinksArthur' },
  { 'artist': 'The Kinks', 'title': 'Muswell Hillbillies', 'year': 1971, 'image': 'KinksMuswell' },
  { 'artist': 'The Kinks', 'title': 'Village Green Preservation Society', 'year': 1968, 'image': 'KinksVillage' },
  { 'artist': 'Kiss', 'title': 'Kiss', 'year': 1974, 'image': 'KissSelfTitled' },
  { 'artist': 'Van Morrison', 'title': 'Moondance', 'year': 1970, 'image': 'MorrisonMoondance' },
  { 'artist': 'Radiohead', 'title': 'OK Computer', 'year': 1998, 'image': 'RadioheadOK' },
  { 'artist': 'The Residents', 'title': 'Duck Stab', 'year': 1978, 'image': 'ResidentsDuckStab' },
  { 'artist': 'Black Sabbath', 'title': 'Paranoid', 'year': 1970, 'image': 'SabbathParanoid' },
  { 'artist': 'Paul Simon', 'title': 'Graceland', 'year': 1986, 'image': 'SimonGraceland' },
  { 'artist': 'Stevie Wonder', 'title': 'Innervisions', 'year': 1973, 'image': 'StevieInnervisions' },
  { 'artist': 'Stevie Wonder', 'title': 'Songs in the Key of Life', 'year': 1976, 'image': 'StevieSongs' },
  { 'artist': 'The Rolling Stones', 'title': 'Exile On Main St', 'year': 1972, 'image': 'StonesExile' },
  { 'artist': 'The Rolling Stones', 'title': 'Let it Bleed', 'year': 1969, 'image': 'StonesLetItBleed' },
  { 'artist': 'The Rolling Stones', 'title': 'Sticky Fingers', 'year': 1971, 'image': 'StonesStickyFingers' },
  { 'artist': 'T. Rex', 'title': 'Electric Warrior', 'year': 1971, 'image': 'TRexElectricWarrior' },
  { 'artist': 'The Velvet Underground', 'title': 'Loaded', 'year': 1970, 'image': 'VULoaded' },
  { 'artist': 'The Velvet Underground', 'title': 'The Velvet Underground', 'year': 1969, 'image': 'VUSelfTitled' },
  { 'artist': 'Wishbone Ash', 'title': 'Argus', 'year': 1972, 'image': 'WishboneAshArgus' },
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
