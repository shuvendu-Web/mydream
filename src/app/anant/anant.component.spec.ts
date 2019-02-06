import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnantComponent } from './anant.component';

describe('AnantComponent', () => {
  let component: AnantComponent;
  let fixture: ComponentFixture<AnantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
