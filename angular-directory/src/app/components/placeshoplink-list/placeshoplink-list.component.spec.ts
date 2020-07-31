import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceshoplinkListComponent } from './placeshoplink-list.component';

describe('PlaceshoplinkListComponent', () => {
  let component: PlaceshoplinkListComponent;
  let fixture: ComponentFixture<PlaceshoplinkListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceshoplinkListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceshoplinkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
