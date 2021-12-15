import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyComponent } from './survey/survey.component';
import { SurveyCreatorComponent } from './survey-creator/survey-creator.component';
import { CreatorComponent } from './creator/creator.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    SurveyCreatorComponent,
    CreatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
