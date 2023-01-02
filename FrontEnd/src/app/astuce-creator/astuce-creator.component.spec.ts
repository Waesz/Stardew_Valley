import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstuceCreatorComponent } from './astuce-creator.component';

describe('AstuceCreatorComponent', () => {
  let component: AstuceCreatorComponent;
  let fixture: ComponentFixture<AstuceCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstuceCreatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstuceCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
