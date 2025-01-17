import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S3Page } from './s3.page';

describe('S3Page', () => {
  let component: S3Page;
  let fixture: ComponentFixture<S3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
