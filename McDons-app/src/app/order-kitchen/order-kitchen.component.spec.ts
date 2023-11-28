import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderKitchenComponent } from './order-kitchen.component';

describe('OrderKitchenComponent', () => {
  let component: OrderKitchenComponent;
  let fixture: ComponentFixture<OrderKitchenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderKitchenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderKitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
