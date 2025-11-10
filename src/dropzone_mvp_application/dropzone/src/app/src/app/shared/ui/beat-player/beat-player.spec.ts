import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatPlayer } from './beat-player';

describe('BeatPlayer', () => {
  let component: BeatPlayer;
  let fixture: ComponentFixture<BeatPlayer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeatPlayer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeatPlayer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
