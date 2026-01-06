import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentprojectsComponent } from './developmentprojects.component';

describe('DevelopmentprojectsComponent', () => {
  let component: DevelopmentprojectsComponent;
  let fixture: ComponentFixture<DevelopmentprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevelopmentprojectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopmentprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
