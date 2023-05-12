import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenPrepComponent } from './kitchen-prep.component';

describe('KitchenPrepComponent', () => {
  let component: KitchenPrepComponent;
  let fixture: ComponentFixture<KitchenPrepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KitchenPrepComponent]
    });
    fixture = TestBed.createComponent(KitchenPrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
