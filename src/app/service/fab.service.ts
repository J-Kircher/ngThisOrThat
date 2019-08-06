import { Injectable } from '@angular/core';
import { FabItems } from '@app/shared/models/fab.model';

const _FABITEMS: FabItems[] = [
  { icon: 'replay', tooltip: 'Reset', action: 'reset' },
  { icon: 'list_alt', tooltip: 'List all', action: 'list' },
  { icon: 'vertical_split', tooltip: 'Toggle side menu', action: 'menu' }
];

@Injectable()
export class FabService {

  constructor() { }

  getFabItems(): FabItems[] {
    return _FABITEMS;
  }
}
