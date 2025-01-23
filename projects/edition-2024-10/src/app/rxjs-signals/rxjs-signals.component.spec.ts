import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsSignalsComponent } from './rxjs-signals.component';

describe('RxjsSignalsComponent', () => {
  let component: RxjsSignalsComponent;
  let fixture: ComponentFixture<RxjsSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsSignalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
