import { TestBed } from '@angular/core/testing';

import { SkillsHardService } from './skills-hard.service';

describe('SkillsHardService', () => {
  let service: SkillsHardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillsHardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
