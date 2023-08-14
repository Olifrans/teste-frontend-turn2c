import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumindoApiDogComponent } from './consumindo-api-dog.component';

describe('ConsumindoApiDogComponent', () => {
  let component: ConsumindoApiDogComponent;
  let fixture: ComponentFixture<ConsumindoApiDogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsumindoApiDogComponent]
    });
    fixture = TestBed.createComponent(ConsumindoApiDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
