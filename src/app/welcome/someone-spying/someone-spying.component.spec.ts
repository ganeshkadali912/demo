import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeoneSpyingComponent } from './someone-spying.component';

describe('SomeoneSpyingComponent', () => {
  let component: SomeoneSpyingComponent;
  let fixture: ComponentFixture<SomeoneSpyingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SomeoneSpyingComponent]
    });
    fixture = TestBed.createComponent(SomeoneSpyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
