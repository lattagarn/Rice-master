import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { M1Page } from './m1.page';

describe('M1Page', () => {
  let component: M1Page;
  let fixture: ComponentFixture<M1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(M1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
