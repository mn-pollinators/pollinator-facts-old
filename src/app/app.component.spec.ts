import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ServiceWorkerModule, SwUpdate } from '@angular/service-worker';
import { Subject } from 'rxjs';
import { MdcSnackbar, MdcSnackbarModule } from '@angular-mdc/web';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MdcSnackbarModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: SwUpdate, useFactory: () => new MockSwUpdate(false) },
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Pollinator Facts'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Pollinator Facts');
  });

  it('should show title in header', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.header-title').textContent).toContain('Pollinator Facts');
  });
});

class MockSwUpdate {
  $$availableSubj = new Subject<{available: {hash: string}}>();
  $$activatedSubj = new Subject<{current: {hash: string}}>();

  available = this.$$availableSubj.asObservable();
  activated = this.$$activatedSubj.asObservable();

  activateUpdate = jasmine.createSpy('MockSwUpdate.activateUpdate')
                          .and.callFake(() => Promise.resolve());

  checkForUpdate = jasmine.createSpy('MockSwUpdate.checkForUpdate')
                          .and.callFake(() => Promise.resolve());

  constructor(public isEnabled: boolean) {}
}
