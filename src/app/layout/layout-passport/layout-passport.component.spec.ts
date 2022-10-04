import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { LayoutPassportComponent } from './layout-passport.component';

describe('LayoutPassportComponent', () => {
  let component: LayoutPassportComponent;
  let fixture: ComponentFixture<LayoutPassportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutPassportComponent],
      imports: [
        RouterTestingModule,
        NzLayoutModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutPassportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
