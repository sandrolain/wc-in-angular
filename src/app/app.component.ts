import { Component, ElementRef, ViewChild } from '@angular/core';
import {SlDrawer} from '@shoelace-style/shoelace';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss'
  ]
})
export class AppComponent {
  title = 'wc-in-angular';

  // use @ViewChild to get a reference to the #drawer element within component template
  @ViewChild('drawer')
  drawer?: ElementRef<SlDrawer>;

  showDrawer() {
    // use nativeElement to access Shoelace components
    console.log(this.drawer, this.drawer?.nativeElement.constructor)
    this.drawer?.nativeElement.show();
  }
}
