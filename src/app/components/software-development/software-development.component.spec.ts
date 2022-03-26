import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SoftwareDevelopmentComponent } from './software-development.component';

describe('SoftwareDevelopmentComponent', () => {
  let component: SoftwareDevelopmentComponent;
  let fixture: ComponentFixture<SoftwareDevelopmentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareDevelopmentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SoftwareDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
