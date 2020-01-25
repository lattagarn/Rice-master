import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeedsPage } from './seeds.page';

describe('SeedsPage', () => {
  let component: SeedsPage;
  let fixture: ComponentFixture<SeedsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeedsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeedsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
