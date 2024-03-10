import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionistComponent } from './sectionist.component';

describe('SectionistComponent', () => {
  let component: SectionistComponent;
  let fixture: ComponentFixture<SectionistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionistComponent]
    });
    fixture = TestBed.createComponent(SectionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
