import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyArtistComponent } from './my-artist.component';

describe('MyArtistComponent', () => {
  let component: MyArtistComponent;
  let fixture: ComponentFixture<MyArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
