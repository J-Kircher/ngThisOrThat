import { Injectable } from '@angular/core';
import { IArtist } from '../shared/models/artists.model';

const _ARTISTS: IArtist[] = [
  { 'name': 'AC-DC', 'image': 'ACDC'},
  { 'name': 'Aerosmith', 'image': 'Aerosmith'},
  { 'name': 'Alice in Chains', 'image': 'AliceinChains'},
  { 'name': 'American Angel', 'image': 'AmericanAngel'},
  { 'name': 'Anthrax', 'image': 'Anthrax'},
  { 'name': 'Badlands', 'image': 'Badlands'},
  { 'name': 'Billy Joel', 'image': 'BillyJoel'},
  { 'name': 'Black Crowes', 'image': 'BlackCrowes'},
  { 'name': 'Black Sabbath', 'image': 'BlackSabbath'},
  { 'name': 'Blue Murder', 'image': 'BlueMurder'},
  { 'name': 'Bon Jovi', 'image': 'BonJovi'},
  { 'name': 'Boston', 'image': 'Boston'},
  { 'name': 'Bulletboys', 'image': 'Bulletboys'},
  { 'name': 'Candlebox', 'image': 'Candlebox'},
  { 'name': 'Cinderella', 'image': 'Cinderella'},
  { 'name': 'Creed', 'image': 'Creed'},
  { 'name': 'Damn Yankees', 'image': 'DamnYankees'},
  { 'name': 'Danger Danger', 'image': 'DangerDanger'},
  { 'name': 'Dangerous Toys', 'image': 'DangerousToys'},
  { 'name': 'David Bowie', 'image': 'DavidBowie'},
  { 'name': 'David Coverdale', 'image': 'DavidCoverdale'},
  { 'name': 'David Lee Roth', 'image': 'DavidLeeRoth'},
  { 'name': 'Deep Purple', 'image': 'DeepPurple'},
  { 'name': 'Def Leppard', 'image': 'DefLeppard'},
  { 'name': 'Dio', 'image': 'Dio'},
  { 'name': 'Dokken', 'image': 'Dokken'},
  { 'name': 'Enuff Znuff', 'image': 'EnuffZnuff'},
  { 'name': 'Extreme', 'image': 'Extreme'},
  { 'name': 'Faster Pussycat', 'image': 'FasterPussycat'},
  { 'name': 'Firehouse', 'image': 'Firehouse'},
  { 'name': 'Foreigner', 'image': 'Foreigner'},
  { 'name': 'Ghost', 'image': 'Ghost'},
  { 'name': 'Great White', 'image': 'GreatWhite'},
  { 'name': 'Guns N Roses', 'image': 'GunsNRoses'},
  { 'name': 'Heart', 'image': 'Heart'},
  { 'name': 'Hugo', 'image': 'Hugo'},
  { 'name': 'Iron Maiden', 'image': 'IronMaiden'},
  { 'name': 'Jackyl', 'image': 'Jackyl'},
  { 'name': 'Journey', 'image': 'Journey'},
  { 'name': 'Judas Priest', 'image': 'JudasPriest'},
  { 'name': 'Kiss', 'image': 'Kiss'},
  { 'name': 'Kix', 'image': 'Kix'},
  { 'name': 'Krokus', 'image': 'Krokus'},
  { 'name': 'LA Guns', 'image': 'LAGuns'},
  { 'name': 'Led Zeppelin', 'image': 'LedZeppelin'},
  { 'name': 'Loverboy', 'image': 'Loverboy'},
  { 'name': 'Lynch Mob', 'image': 'LynchMob'},
  { 'name': 'McAuley Schenker', 'image': 'McAuleySchenker'},
  { 'name': 'Meatloaf', 'image': 'Meatloaf'},
  { 'name': 'Megadeth', 'image': 'Megadeth'},
  { 'name': 'Metallica', 'image': 'Metallica'},
  { 'name': 'Mother Love Bone', 'image': 'MotherLoveBone'},
  { 'name': 'Motley Crue', 'image': 'MotleyCrue'},
  { 'name': 'Mr Big', 'image': 'MrBig'},
  { 'name': 'Nirvana', 'image': 'Nirvana'},
  { 'name': 'Ozzy Osbourne', 'image': 'OzzyOsbourne'},
  { 'name': 'Pearl Jam', 'image': 'PearlJam'},
  { 'name': 'Poison', 'image': 'Poison'},
  { 'name': 'Police', 'image': 'Police'},
  { 'name': 'Queen', 'image': 'Queen'},
  { 'name': 'Queensryche', 'image': 'Queensryche'},
  { 'name': 'Quiet Riot', 'image': 'QuietRiot'},
  { 'name': 'Rainbow', 'image': 'Rainbow'},
  { 'name': 'Ratt', 'image': 'Ratt'},
  { 'name': 'Red Hot Chili Peppers', 'image': 'RHCP'},
  { 'name': 'Rush', 'image': 'Rush'},
  { 'name': 'Saigon Kick', 'image': 'SaigonKick'},
  { 'name': 'Sammy Hagar', 'image': 'SammyHagar'},
  { 'name': 'Scorpions', 'image': 'Scorpions'},
  { 'name': 'Silvertide', 'image': 'Silvertide'},
  { 'name': 'Skid Row', 'image': 'SkidRow'},
  { 'name': 'Slash', 'image': 'Slash'},
  { 'name': 'Slaughter', 'image': 'Slaughter'},
  { 'name': 'Soundgarden', 'image': 'Soundgarden'},
  { 'name': 'Steelheart', 'image': 'Steelheart'},
  { 'name': 'Stone Temple Pilots', 'image': 'StoneTemplePilots'},
  { 'name': 'Stryper', 'image': 'Stryper'},
  { 'name': 'Styx', 'image': 'Styx'},
  { 'name': 'Tesla', 'image': 'Tesla'},
  { 'name': 'Triumph', 'image': 'Triumph'},
  { 'name': 'Trixter', 'image': 'Trixter'},
  { 'name': 'Twisted Sister', 'image': 'TwistedSister'},
  { 'name': 'U2', 'image': 'U2'},
  { 'name': 'Van Halen', 'image': 'VanHalen'},
  { 'name': 'Warrant', 'image': 'Warrant'},
  { 'name': 'WASP', 'image': 'WASP'},
  { 'name': 'White Lion', 'image': 'WhiteLion'},
  { 'name': 'Whitesnake', 'image': 'Whitesnake'},
  { 'name': 'White Zombie', 'image': 'WhiteZombie'},
  { 'name': 'Who', 'image': 'Who'},
  { 'name': 'Winger', 'image': 'Winger'}
];

@Injectable()
export class ArtistsService {

  constructor() { }

  getArtists(): IArtist[] {
    return _ARTISTS;
  }

  getArtistByName(name: string): IArtist {
    return _ARTISTS.find(s => s.name === name);
  }

  getArtistByIdx(idx: number): IArtist {
    return _ARTISTS[idx];
  }
}
