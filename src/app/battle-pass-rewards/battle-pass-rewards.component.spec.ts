import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattlePassRewardsComponent } from './battle-pass-rewards.component';

describe('BattlePassRewardsComponent', () => {
  let component: BattlePassRewardsComponent;
  let fixture: ComponentFixture<BattlePassRewardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattlePassRewardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BattlePassRewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
