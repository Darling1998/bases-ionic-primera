import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChecksPage } from './checks.page';

describe('ChecksPage', () => {
  let component: ChecksPage;
  let fixture: ComponentFixture<ChecksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChecksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
