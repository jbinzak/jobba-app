import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.png" alt="logo" aria-hidden="true" height="50px">
    </header>
    <section class="content">
      <app-jobba></app-jobba>
    </section>
  </main>
`,
})
export class AppComponent {
  title = 'AngularFrontend';
}
