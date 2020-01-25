import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { M2Page } from './m2.page';

describe('M2Page', () => {
  let component: M2Page;
  let fixture: ComponentFixture<M2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(M2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
