import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DachboardComponent } from './dachboard.component';

describe('DachboardComponent', () => {
  let component: DachboardComponent;
  let fixture: ComponentFixture<DachboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DachboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DachboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
