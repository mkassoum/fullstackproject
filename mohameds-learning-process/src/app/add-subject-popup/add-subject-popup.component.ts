import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../ApiService';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-subject-popup',
  templateUrl: './add-subject-popup.component.html',
  styleUrls: ['./add-subject-popup.component.css']
})
export class AddSubjectPopupComponent implements OnInit {
  subjectName: string | undefined;
  subjectDescription: string | undefined;
  subjectImageUrl: string | undefined;
  subjectNote: string | undefined;

  constructor(private dialogRef: MatDialogRef<AddSubjectPopupComponent>, private apiService: ApiService) { }

  ngOnInit() {
  }

  addSubject() {
    const newSubject = {
      name: this.subjectName,
      description: this.subjectDescription,
      note: this.subjectNote
    };

    this.apiService.createSubject(newSubject).subscribe(
      (response) => {
        this.dialogRef.close(response);
      },
      (error) => {
        console.error(error);
      }
    );
    window.location.reload()
  }

  cancel() {
    this.dialogRef.close();
  }
}
