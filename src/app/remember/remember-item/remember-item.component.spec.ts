import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RememberItemComponent } from './remember-item.component';

describe('RememberItemComponent', () => {
  let component: RememberItemComponent;
  let fixture: ComponentFixture<RememberItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RememberItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RememberItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
