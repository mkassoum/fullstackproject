import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../ApiService';

@Component({
  selector: 'app-edit-subject-popup',
  templateUrl: './edit-subject-popup.component.html',
  styleUrls: ['./edit-subject-popup.component.css']
})
export class EditSubjectPopupComponent {
  subjectName: string | undefined;
  subjectDescription: string | undefined;
  subjectImageUrl: string | undefined;
  subjectNote: string | undefined;
  subjectId: string;

  constructor(
    private dialogRef: MatDialogRef<EditSubjectPopupComponent>,
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: { subject: any }
  ) {
    // Retrieve the subject data from the MAT_DIALOG_DATA injection
    const { subject } = this.data;
    this.subjectId = subject.id;
    this.subjectName = subject.name;
    this.subjectDescription = subject.description;
    this.subjectImageUrl = subject.imageUrl;
    this.subjectNote = subject.note;
  }

  saveSubject() {
    // Create a new subject object using the form values
    const updatedSubject = {
      id: this.subjectId,
      name: this.subjectName,
      description: this.subjectDescription,
      imageUrl: this.subjectImageUrl,
      note: this.subjectNote
    };

    // Call the API service to update the subject
    this.apiService.updateSubjectById(this.subjectId, updatedSubject).subscribe(
      (response) => {
        // Subject updated successfully, close the dialog and pass the updated subject as the result
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
    // Close the dialog without saving changes
    this.dialogRef.close();
  }
}
