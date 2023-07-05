import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-time',
  templateUrl: './live-time.component.html',
  styleUrls: ['./live-time.component.css']
})
export class LiveTimeComponent implements OnInit {
  currentTime!: Date;

  ngOnInit() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }
}

