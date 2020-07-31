import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopGroupComponent } from './shop-group.component';

describe('ShopGroupComponent', () => {
  let component: ShopGroupComponent;
  let fixture: ComponentFixture<ShopGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
