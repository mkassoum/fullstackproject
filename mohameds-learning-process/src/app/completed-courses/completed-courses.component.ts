import { Component, OnInit } from '@angular/core';
import { ApiService } from '../ApiService';
import { MatDialog } from '@angular/material/dialog';
import { AddSubjectPopupComponent } from '../add-subject-popup/add-subject-popup.component';
import { EditSubjectPopupComponent } from '../edit-subject-popup/edit-subject-popup.component';

@Component({
  selector: 'app-completed-courses',
  templateUrl: './completed-courses.component.html',
  styleUrls: ['./completed-courses.component.css']
})
export class CompletedCoursesComponent implements OnInit {
  subjects: any[] | undefined;

  constructor(private apiService: ApiService, private dialog: MatDialog) { }

  openAddSubjectPopup(): void {
    const dialogRef = this.dialog.open(AddSubjectPopupComponent, {
      width: '500px',
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      // Handle the result here, such as refreshing the subject list
    });
  }

  openEditSubjectPopup(subject: any): void {
    const dialogRef = this.dialog.open(EditSubjectPopupComponent, {
      width: '500px',
      data: { subject }
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      // Handle the result here, such as refreshing the subject list
    });
  }

  editSubject(subject: any) {
    const updatedSubject = { ...subject };

    this.apiService.updateSubjectById(subject.id, updatedSubject).subscribe(
      (response) => {
        console.log('Subject updated:', response);
      },
      (error) => {
        console.error('Error updating subject:', error);
      }
    );
    window.location.reload();
  }

  deleteSubject(subject: any) {
    this.apiService.deleteSubjectById(subject.id).subscribe(
      () => {
        console.log('Subject deleted');
      },
      (error) => {
        console.error('Error deleting subject:', error);
      }
    );
    window.location.reload();
  }

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
