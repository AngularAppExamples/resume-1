import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { TestModule } from './../test.module';

describe('AppComponent', () => {
  let fixture, component, element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestModule],
      declarations: [AppComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement;
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Resume'`, () => {
    expect(component.title).toEqual('Resume');
  });

  it('should render title in tag with id #ac-title', () => {
    expect(element.querySelector('#ac-title').textContent).toEqual('Resume');
  });

  it('should render name in tag with id #ac-name', () => {
    expect(element.querySelector('#ac-name').textContent).toEqual('Attila Csányi');
  });
});
