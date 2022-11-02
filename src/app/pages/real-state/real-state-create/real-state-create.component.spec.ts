import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealStateCreateComponent } from './real-state-create.component';

describe('RealStateCreateComponent', () => {
  let component: RealStateCreateComponent;
  let fixture: ComponentFixture<RealStateCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealStateCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealStateCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
