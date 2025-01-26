import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamOfValuesComponent } from './stream-of-values.component';

describe('StreamOfValuesComponent', () => {
  let component: StreamOfValuesComponent;
  let fixture: ComponentFixture<StreamOfValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StreamOfValuesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreamOfValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
