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
    // Create a new subject object using the form values
    const newSubject = {
      name: this.subjectName,
      description: this.subjectDescription,
      note: this.subjectNote
    };

    // Call the API service to add the subject
    this.apiService.createSubject(newSubject).subscribe(
      (response) => {
        // Subject added successfully, close the dialog
        this.dialogRef.close(response);
      },
      (error) => {
        console.error(error);
        // Handle error if needed
      }
    );
    window.location.reload()
  }

  cancel() {
    // Close the dialog without adding the subject
    this.dialogRef.close();
  }
}
