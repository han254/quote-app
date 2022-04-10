import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyvotesComponent } from './myvotes.component';

describe('MyvotesComponent', () => {
  let component: MyvotesComponent;
  let fixture: ComponentFixture<MyvotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyvotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyvotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
