import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstuceVillageoisComponent } from './astuce-villageois.component';

describe('AstuceVillageoisComponent', () => {
  let component: AstuceVillageoisComponent;
  let fixture: ComponentFixture<AstuceVillageoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstuceVillageoisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstuceVillageoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
