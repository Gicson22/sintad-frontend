import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationContainer } from '../presentation.container';

describe('PresentationContainer', () => {
  let component: PresentationContainer;
  let fixture: ComponentFixture<PresentationContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PresentationContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(PresentationContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
