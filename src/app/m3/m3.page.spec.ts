import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { M3Page } from './m3.page';

describe('M3Page', () => {
  let component: M3Page;
  let fixture: ComponentFixture<M3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ M3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(M3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
