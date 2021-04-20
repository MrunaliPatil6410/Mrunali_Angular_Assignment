import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchflightdetailComponent } from './fetchflightdetail.component';

describe('FetchflightdetailComponent', () => {
  let component: FetchflightdetailComponent;
  let fixture: ComponentFixture<FetchflightdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchflightdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchflightdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
