import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsSoftComponent } from './skills-soft.component';

describe('SkillsSoftComponent', () => {
  let component: SkillsSoftComponent;
  let fixture: ComponentFixture<SkillsSoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsSoftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsSoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
