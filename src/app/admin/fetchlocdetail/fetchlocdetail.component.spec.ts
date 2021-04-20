import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchlocdetailComponent } from './fetchlocdetail.component';

describe('FetchlocdetailComponent', () => {
  let component: FetchlocdetailComponent;
  let fixture: ComponentFixture<FetchlocdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchlocdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchlocdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
