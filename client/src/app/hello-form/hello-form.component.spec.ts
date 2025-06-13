import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloFormComponent } from './hello-form.component';

describe('HelloFormComponent', () => {
  let component: HelloFormComponent;
  let fixture: ComponentFixture<HelloFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
