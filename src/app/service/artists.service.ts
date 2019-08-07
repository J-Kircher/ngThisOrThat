import { Injectable } from '@angular/core';
import { IArtist } from '@app/shared/models/artists.model';

const _ARTISTS: IArtist[] = [
  { 'name': 'AC/DC', 'genre': 'Hard rock', 'image': 'ACDC'},
  { 'name': 'Aerosmith', 'genre': 'Hard rock', 'image': 'Aerosmith'},
  { 'name': 'Alice in Chains', 'genre': 'Grunge rock', 'image': 'AliceinChains'},
  { 'name': 'American Angel', 'genre': 'Glam metal', 'image': 'AmericanAngel'},
  { 'name': 'Anthrax', 'genre': 'Heavy metal', 'image': 'Anthrax'},
  { 'name': 'Badlands', 'genre': 'Glam metal', 'image': 'Badlands'},
  { 'name': 'Billy Joel', 'genre': 'Album rock', 'image': 'BillyJoel'},
  { 'name': 'Black Crowes', 'genre': 'Hard rock', 'image': 'BlackCrowes'},
  { 'name': 'Black Sabbath', 'genre': 'Heavy metal', 'image': 'BlackSabbath'},
  { 'name': 'Blue Murder', 'genre': 'Glam metal', 'image': 'BlueMurder'},
  { 'name': 'Bon Jovi', 'genre': 'Glam metal', 'image': 'BonJovi'},
  { 'name': 'Boston', 'genre': 'Album rock', 'image': 'Boston'},
  { 'name': 'Bulletboys', 'genre': 'Glam metal', 'image': 'Bulletboys'},
  { 'name': 'Candlebox', 'genre': 'Post grunge', 'image': 'Candlebox'},
  { 'name': 'Cinderella', 'genre': 'Glam metal', 'image': 'Cinderella'},
  { 'name': 'Creed', 'genre': 'Post grunge', 'image': 'Creed'},
  { 'name': 'Damn Yankees', 'genre': 'Hard rock', 'image': 'DamnYankees'},
  { 'name': 'Danger Danger', 'genre': 'Glam metal', 'image': 'DangerDanger'},
  { 'name': 'Dangerous Toys', 'genre': 'Glam metal', 'image': 'DangerousToys'},
  { 'name': 'David Bowie', 'genre': 'Glam rock', 'image': 'DavidBowie'},
  { 'name': 'David Coverdale', 'genre': 'Hard rock', 'image': 'DavidCoverdale'},
  { 'name': 'David Lee Roth', 'genre': 'Hard rock', 'image': 'DavidLeeRoth'},
  { 'name': 'Deep Purple', 'genre': 'Hard rock', 'image': 'DeepPurple'},
  { 'name': 'Def Leppard', 'genre': 'Hard rock', 'image': 'DefLeppard'},
  { 'name': 'Dio', 'genre': 'Heavy metal', 'image': 'Dio'},
  { 'name': 'Dokken', 'genre': 'Glam metal', 'image': 'Dokken'},
  { 'name': 'Enuff Znuff', 'genre': 'Glam metal', 'image': 'EnuffZnuff'},
  { 'name': 'Extreme', 'genre': 'Glam metal', 'image': 'Extreme'},
  { 'name': 'Faster Pussycat', 'genre': 'Glam metal', 'image': 'FasterPussycat'},
  { 'name': 'Firehouse', 'genre': 'Glam metal', 'image': 'Firehouse'},
  { 'name': 'Foreigner', 'genre': 'Album rock', 'image': 'Foreigner'},
  { 'name': 'Ghost', 'genre': 'Heavy metal', 'image': 'Ghost'},
  { 'name': 'Great White', 'genre': 'Glam metal', 'image': 'GreatWhite'},
  { 'name': 'Guns N Roses', 'genre': 'Hard rock', 'image': 'GunsNRoses'},
  { 'name': 'Heart', 'genre': 'Album rock', 'image': 'Heart'},
  { 'name': 'Hugo', 'genre': 'Melodic rock', 'image': 'Hugo'},
  { 'name': 'Iron Maiden', 'genre': 'Heavy metal', 'image': 'IronMaiden'},
  { 'name': 'Jackyl', 'genre': 'Hard rock', 'image': 'Jackyl'},
  { 'name': 'Journey', 'genre': 'Album rock', 'image': 'Journey'},
  { 'name': 'Judas Priest', 'genre': 'Heavy metal', 'image': 'JudasPriest'},
  { 'name': 'Kiss', 'genre': 'Hard rock', 'image': 'Kiss'},
  { 'name': 'Kix', 'genre': 'Glam metal', 'image': 'Kix'},
  { 'name': 'Krokus', 'genre': 'Hard rock', 'image': 'Krokus'},
  { 'name': 'LA Guns', 'genre': 'Glam metal', 'image': 'LAGuns'},
  { 'name': 'Led Zeppelin', 'genre': 'Hard rock', 'image': 'LedZeppelin'},
  { 'name': 'Loverboy', 'genre': 'Album rock', 'image': 'Loverboy'},
  { 'name': 'Lynch Mob', 'genre': 'Glam metal', 'image': 'LynchMob'},
  { 'name': 'McAuley Schenker', 'genre': 'Hard rock', 'image': 'McAuleySchenker'},
  { 'name': 'Meatloaf', 'genre': 'Album rock', 'image': 'Meatloaf'},
  { 'name': 'Megadeth', 'genre': 'Heavy metal', 'image': 'Megadeth'},
  { 'name': 'Metallica', 'genre': 'Heavy metal', 'image': 'Metallica'},
  { 'name': 'Mother Love Bone', 'genre': 'Grunge rock', 'image': 'MotherLoveBone'},
  { 'name': 'Motley Crue', 'genre': 'Glam metal', 'image': 'MotleyCrue'},
  { 'name': 'Mr Big', 'genre': 'Glam metal', 'image': 'MrBig'},
  { 'name': 'Nirvana', 'genre': 'Grunge rock', 'image': 'Nirvana'},
  { 'name': 'Ozzy Osbourne', 'genre': 'Hard rock', 'image': 'OzzyOsbourne'},
  { 'name': 'Pearl Jam', 'genre': 'Grunge rock', 'image': 'PearlJam'},
  { 'name': 'Poison', 'genre': 'Glam metal', 'image': 'Poison'},
  { 'name': 'Police', 'genre': 'Album rock', 'image': 'Police'},
  { 'name': 'Queen', 'genre': 'Album rock', 'image': 'Queen'},
  { 'name': 'Queensryche', 'genre': 'Heavy metal', 'image': 'Queensryche'},
  { 'name': 'Quiet Riot', 'genre': 'Glam metal', 'image': 'QuietRiot'},
  { 'name': 'Rainbow', 'genre': 'Hard rock', 'image': 'Rainbow'},
  { 'name': 'Ratt', 'genre': 'Glam metal', 'image': 'Ratt'},
  { 'name': 'Red Hot Chili Peppers', 'genre': 'Alt rock', 'image': 'RHCP'},
  { 'name': 'Rush', 'genre': 'Hard rock', 'image': 'Rush'},
  { 'name': 'Saigon Kick', 'genre': 'Glam metal', 'image': 'SaigonKick'},
  { 'name': 'Sammy Hagar', 'genre': 'Hard rock', 'image': 'SammyHagar'},
  { 'name': 'Scorpions', 'genre': 'Hard rock', 'image': 'Scorpions'},
  { 'name': 'Silvertide', 'genre': 'Post grunge', 'image': 'Silvertide'},
  { 'name': 'Skid Row', 'genre': 'Glam metal', 'image': 'SkidRow'},
  { 'name': 'Slash', 'genre': 'Hard rock', 'image': 'Slash'},
  { 'name': 'Slaughter', 'genre': 'Glam metal', 'image': 'Slaughter'},
  { 'name': 'Soundgarden', 'genre': 'Grunge rock', 'image': 'Soundgarden'},
  { 'name': 'Steelheart', 'genre': 'Glam metal', 'image': 'Steelheart'},
  { 'name': 'Stone Temple Pilots', 'genre': 'Grunge rock', 'image': 'StoneTemplePilots'},
  { 'name': 'Stryper', 'genre': 'Glam metal', 'image': 'Stryper'},
  { 'name': 'Styx', 'genre': 'Album rock', 'image': 'Styx'},
  { 'name': 'Tesla', 'genre': 'Glam metal', 'image': 'Tesla'},
  { 'name': 'Triumph', 'genre': 'Hard rock', 'image': 'Triumph'},
  { 'name': 'Trixter', 'genre': 'Glam metal', 'image': 'Trixter'},
  { 'name': 'Twisted Sister', 'genre': 'Glam metal', 'image': 'TwistedSister'},
  { 'name': 'U2', 'genre': 'Album rock', 'image': 'U2'},
  { 'name': 'Van Halen', 'genre': 'Hard rock', 'image': 'VanHalen'},
  { 'name': 'Warrant', 'genre': 'Glam metal', 'image': 'Warrant'},
  { 'name': 'WASP', 'genre': 'Heavy metal', 'image': 'WASP'},
  { 'name': 'White Lion', 'genre': 'Glam metal', 'image': 'WhiteLion'},
  { 'name': 'Whitesnake', 'genre': 'Hard rock', 'image': 'Whitesnake'},
  { 'name': 'White Zombie', 'genre': 'Hard rock', 'image': 'WhiteZombie'},
  { 'name': 'The Who', 'genre': 'Hard rock', 'image': 'Who'},
  { 'name': 'Winger', 'genre': 'Glam metal', 'image': 'Winger'}
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
