import { TestBed } from '@angular/core/testing';

import { SkillsSoftService } from './skills-soft.service';

describe('SkillsSoftService', () => {
  let service: SkillsSoftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillsSoftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
