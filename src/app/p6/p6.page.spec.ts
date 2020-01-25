import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { P6Page } from './p6.page';

describe('P6Page', () => {
  let component: P6Page;
  let fixture: ComponentFixture<P6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(P6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
