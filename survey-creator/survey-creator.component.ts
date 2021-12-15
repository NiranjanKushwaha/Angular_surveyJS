import { Component, Input, OnInit } from '@angular/core';
import * as SurveyCreator from 'survey-creator';
import * as Survey from 'survey-angular';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../node_modules/survey-angular/survey.css';
import 'survey-angular/survey.css';
@Component({
  selector: 'app-survey-creator',
  templateUrl: './survey-creator.component.html',
  styleUrls: ['./survey-creator.component.css'],
})
export class SurveyCreatorComponent implements OnInit {
  constructor() {}
  @Input() json: any;
  ngOnInit(): void {
    this.questionCreator(this.json);
  }
  createrInstance = {} as any;
  options = {
    showLogicTab: true,
    generateValidJSON: true,
    haveCommercialLicense: true,
  };
  questionCreator = (questionJson: any) => {
    const creator = new SurveyCreator.SurveyCreator(
      'creatorElement',
      this.options
    );
    creator.showToolbox = 'left';
    creator.showPropertyGrid = 'right';
    creator.rightContainerActiveItem('toolbox');
    if (questionJson) {
      creator.JSON = JSON.parse(questionJson);
    }
    this.createrInstance = creator;
  };
}
