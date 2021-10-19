import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoreSearchComponent } from './hero-search.component';

describe('HoreSearchComponent', () => {
  let component: HoreSearchComponent;
  let fixture: ComponentFixture<HoreSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoreSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoreSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
