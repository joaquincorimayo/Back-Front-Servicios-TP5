import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketFormEditComponent } from './ticket-form-edit.component';

describe('TicketFormEditComponent', () => {
  let component: TicketFormEditComponent;
  let fixture: ComponentFixture<TicketFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketFormEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
