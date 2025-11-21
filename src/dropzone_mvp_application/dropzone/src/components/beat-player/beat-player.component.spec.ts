import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatPlayerComponent } from './beat-player.component';

describe('BeatPlayerComponent', () => {
  let component: BeatPlayerComponent;
  let fixture: ComponentFixture<BeatPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeatPlayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeatPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
