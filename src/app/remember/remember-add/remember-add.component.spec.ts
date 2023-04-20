import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RememberAddComponent } from './remember-add.component';

describe('RememberAddComponent', () => {
  let component: RememberAddComponent;
  let fixture: ComponentFixture<RememberAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RememberAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RememberAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
