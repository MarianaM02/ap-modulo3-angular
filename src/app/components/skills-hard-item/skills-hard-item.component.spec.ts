import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsHardItemComponent } from './skills-hard-item.component';

describe('SkillsHardItemComponent', () => {
  let component: SkillsHardItemComponent;
  let fixture: ComponentFixture<SkillsHardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsHardItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsHardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
