import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceshopListComponent } from './placeshop-list.component';

describe('PlaceshopListComponent', () => {
  let component: PlaceshopListComponent;
  let fixture: ComponentFixture<PlaceshopListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceshopListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceshopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
