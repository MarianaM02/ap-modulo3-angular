import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsSoftItemComponent } from './skills-soft-item.component';

describe('SkillsSoftItemComponent', () => {
  let component: SkillsSoftItemComponent;
  let fixture: ComponentFixture<SkillsSoftItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsSoftItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsSoftItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
