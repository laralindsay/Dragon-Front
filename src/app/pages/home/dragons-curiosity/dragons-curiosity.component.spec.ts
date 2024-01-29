import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonsCuriosityComponent } from './dragons-curiosity.component';

describe('DragonsCuriosityComponent', () => {
  let component: DragonsCuriosityComponent;
  let fixture: ComponentFixture<DragonsCuriosityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragonsCuriosityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DragonsCuriosityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
