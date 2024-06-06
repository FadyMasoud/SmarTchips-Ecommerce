import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartwatchComponent } from './smartwatch.component';

describe('SmartwatchComponent', () => {
  let component: SmartwatchComponent;
  let fixture: ComponentFixture<SmartwatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmartwatchComponent]
    });
    fixture = TestBed.createComponent(SmartwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
