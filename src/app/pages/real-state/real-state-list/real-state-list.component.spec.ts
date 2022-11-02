import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealStateListComponent } from './real-state-list.component';

describe('RealStateListComponent', () => {
  let component: RealStateListComponent;
  let fixture: ComponentFixture<RealStateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealStateListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealStateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
