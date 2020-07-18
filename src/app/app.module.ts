import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InputFormComponent } from './input-form/input-form.component';
import { BacklogsComponent } from './backlogs/backlogs.component';
import { BacklogItemComponent } from './backlogs/backlog-item/backlog-item.component';
import { DevelopmentsComponent } from './developments/developments.component';
import { DevelopmentItemComponent } from './developments/development-item/development-item.component';
import { CodeReviewsComponent } from './code-reviews/code-reviews.component';
import { CodeReviewItemComponent } from './code-reviews/code-review-item/code-review-item.component';
import { AcceptancesComponent } from './acceptances/acceptances.component';
import { AcceptanceItemComponent } from './acceptances/acceptance-item/acceptance-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputFormComponent,
    BacklogsComponent,
    BacklogItemComponent,
    DevelopmentsComponent,
    DevelopmentItemComponent,
    CodeReviewsComponent,
    CodeReviewItemComponent,
    AcceptancesComponent,
    AcceptanceItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
