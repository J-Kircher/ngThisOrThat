import { IAlbum } from '@app/shared/models/albums.model';

export function sortAlbumsByPercent(a1: IAlbum, a2: IAlbum) {
  const a1pct = a1.wins / (a1.wins + a1.losses);
  const a2pct = a2.wins / (a2.wins + a2.losses);
  // console.log('comparing ' + a1.title + ' with ' + a2.title);
  // console.log('comparing ' + a1pct + ' with ' + a2pct);
  if (a1pct < a2pct) {
    return 1;
  } else {
    if (a1pct > a2pct) {
      return -1;
    } else {
      if (a1.wins < a2.wins) {
        return 1;
      } else {
        if (a1.wins > a2.wins) {
          return -1;
        } else {
          if (a1.losses > a2.losses) {
            return 1;
          } else {
            if (a1.losses < a2.losses) {
              return -1;
            } else {
              return 0;
            }
          }
        }
      }
    }
  }
}

export function sortAlbumsByDifference(a1: IAlbum, a2: IAlbum) {
  const a1diff = a1.wins - a1.losses;
  const a2diff = a2.wins - a2.losses;
  // console.log('comparing ' + a1.title + ' with ' + a2.title);
  // console.log('comparing ' + a1pct + ' with ' + a2pct);
  if (a1diff < a2diff) {
    return 1;
  } else {
    if (a1diff > a2diff) {
      return -1;
    } else {
      if (a1.wins < a2.wins) {
        return 1;
      } else {
        if (a1.wins > a2.wins) {
          return -1;
        } else {
          if (a1.losses > a2.losses) {
            return 1;
          } else {
            if (a1.losses < a2.losses) {
              return -1;
            } else {
              return 0;
            }
          }
        }
      }
    }
  }
}
