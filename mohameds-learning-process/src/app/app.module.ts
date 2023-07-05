import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { LiveTimeComponent } from './live-time/live-time.component';
import { CompletedCoursesComponent } from './completed-courses/completed-courses.component';
import { AddSubjectPopupComponent } from './add-subject-popup/add-subject-popup.component';
import { EditSubjectPopupComponent } from './edit-subject-popup/edit-subject-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    LiveTimeComponent,
    CompletedCoursesComponent,
    AddSubjectPopupComponent,
    EditSubjectPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
