import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NovaRoupaModalPage } from './nova-roupa-modal.page';

describe('NovaRoupaModalPage', () => {
  let component: NovaRoupaModalPage;
  let fixture: ComponentFixture<NovaRoupaModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaRoupaModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NovaRoupaModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
