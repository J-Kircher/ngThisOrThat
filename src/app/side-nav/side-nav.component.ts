import { Component, OnInit, OnChanges, Input, ViewChild, SimpleChange } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit, OnChanges {

  @ViewChild(MatSidenav, { static: true }) sidenav: MatSidenav;

  @Input() toggle: boolean; // Request from Fab Component to hide/show

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    // Respond when Angular (re)sets data-bound input properties.
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        const changedProp = changes[propName];
        if (!changedProp.isFirstChange()) {
          if (propName === 'toggle') {
            this.sidenav.toggle();
          }
        }
      }
    }
  }

  isActive = (url: string): boolean => {
    // return this.router.isActive(url, false);
    return this.router.url.includes(url);
  }

  close = () => this.sidenav.close();
}
