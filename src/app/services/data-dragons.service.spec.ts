import { DataDragonsService } from './data-dragons.service';
import { TestBed } from '@angular/core/testing';

describe('DataDragonsService', () => {
  let service: DataDragonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataDragonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
