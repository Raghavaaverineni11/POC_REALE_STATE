import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualToursComponent } from './virtual-tours.component';

describe('VirtualToursComponent', () => {
  let component: VirtualToursComponent;
  let fixture: ComponentFixture<VirtualToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VirtualToursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VirtualToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
