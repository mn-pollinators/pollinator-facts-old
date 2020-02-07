import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MdcSnackbar } from '@angular-mdc/web';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pollinator-facts';

  constructor( private updates: SwUpdate, private snackBar: MdcSnackbar) {}

  ngOnInit() {
    this.updates.available.subscribe(event => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);
      this.snackBar.open('A new version of Pollinator Facts is available', 'Refresh', {
        timeoutMs: 10000
      }).afterDismiss().subscribe(reason => {
        if (reason == "action") {
          this.updates.activateUpdate().then(() => document.location.reload());
        }
      })
    });
    this.updates.activated.subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });

  }
}
