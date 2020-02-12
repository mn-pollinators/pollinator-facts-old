import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { Subject } from 'rxjs';
import { SwUpdate } from '@angular/service-worker';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent ],
      providers: [
        { provide: SwUpdate, useFactory: () => new MockSwUpdate(false) },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
