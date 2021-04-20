import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationslistComponent } from './locationslist.component';

describe('LocationslistComponent', () => {
  let component: LocationslistComponent;
  let fixture: ComponentFixture<LocationslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
