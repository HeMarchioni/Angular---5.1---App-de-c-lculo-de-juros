import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-nav-bar> </app-nav-bar>
    <div class="container-fluid mx-auto my-5">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {}
