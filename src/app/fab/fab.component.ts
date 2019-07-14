import { Component } from '@angular/core';
import { fabAnimations } from './fab.animations';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss'],
  animations: fabAnimations
})
export class FabComponent {

  // Fab Component original source
  // https://medium.com/@aphlps/fab-speed-dial-with-angular-5-2-angular-material-be696fc14967

  fabButtons = [
    { icon: 'timeline' },
    { icon: 'view_headline' },
    { icon: 'room' },
    { icon: 'lightbulb_outline' },
    { icon: 'lock' }
  ];
  buttons = [];
  fabTogglerState = 'inactive';

  constructor() { }

  showItems() {
    this.fabTogglerState = 'active';
    this.buttons = this.fabButtons;
  }

  hideItems() {
    this.fabTogglerState = 'inactive';
    this.buttons = [];
  }

  onToggleFab() {
    this.buttons.length ? this.hideItems() : this.showItems();
  }
}
