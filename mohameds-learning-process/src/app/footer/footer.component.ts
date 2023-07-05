import { Component } from '@angular/core';
// import { LiveTimeComponent } from '../live-time/live-time.component'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  currentTime: Date;

  constructor() {
    this.currentTime = new Date();
  }

}
