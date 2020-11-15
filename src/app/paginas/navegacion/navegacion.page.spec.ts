import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NavegacionPage } from './navegacion.page';

describe('NavegacionPage', () => {
  let component: NavegacionPage;
  let fixture: ComponentFixture<NavegacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavegacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NavegacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
