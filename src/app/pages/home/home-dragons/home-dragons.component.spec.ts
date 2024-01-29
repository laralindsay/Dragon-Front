import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDragonsComponent } from './home-dragons.component';

describe('HomeDragonsComponent', () => {
  let component: HomeDragonsComponent;
  let fixture: ComponentFixture<HomeDragonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeDragonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeDragonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
