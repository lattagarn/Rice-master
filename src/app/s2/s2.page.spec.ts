import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S2Page } from './s2.page';

describe('S2Page', () => {
  let component: S2Page;
  let fixture: ComponentFixture<S2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
