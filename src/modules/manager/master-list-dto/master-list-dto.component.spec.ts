import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterListDtoComponent } from './master-list-dto.component';

describe('MasterListDtoComponent', () => {
  let component: MasterListDtoComponent;
  let fixture: ComponentFixture<MasterListDtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterListDtoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterListDtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
