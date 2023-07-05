import { Component, OnInit } from '@angular/core';
import { ApiService } from './ApiService';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-completed-courses',
  templateUrl: './completed-courses.component.html',
  styleUrls: ['./completed-courses.component.css']
})
export class CompletedCoursesComponent implements OnInit {
  subjects: any[] | undefined;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllSubjects().subscribe(
      (response) => {
        this.subjects = response;
      },
      (error) => {
        console.error("api error");
      }
    );
  }

}
