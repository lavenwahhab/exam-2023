import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspectScoreComponent } from './aspect-score.component';

describe('AspectScoreComponent', () => {
  let component: AspectScoreComponent;
  let fixture: ComponentFixture<AspectScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AspectScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AspectScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
