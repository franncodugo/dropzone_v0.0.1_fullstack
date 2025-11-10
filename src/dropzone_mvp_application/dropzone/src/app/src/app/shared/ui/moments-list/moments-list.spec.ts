import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentsList } from './moments-list';

describe('MomentsList', () => {
  let component: MomentsList;
  let fixture: ComponentFixture<MomentsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MomentsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MomentsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
