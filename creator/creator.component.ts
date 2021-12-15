import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import * as Survey from 'survey-angular';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap.css';
import 'survey-angular/survey.css';
import { creatorObjType } from './obj.config';
import { json } from './jsonContainer';

Survey.StylesManager.applyTheme('bootstrap');
@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css'],
})
export class CreatorComponent implements OnInit {
  formFilledData: any;
  checkboxAnswers: string[] = [];
  constructor() {
    this.formFilledData = localStorage.getItem('Survey_Data')
      ? JSON.parse(localStorage.getItem('Survey_Data') as string)
      : {};
    // console.log(JSON.parse(json));
  }

  ngOnInit(): void {
    const json: creatorObjType = {
      // completedHtml:
      //   '<h3>Thank you for your feedback.</h3>',
      // completedHtmlOnCondition: [
      //   {
      //     expression: '{nps_score} > 8',
      //     html: '<h3>Thank you for your feedback.</h3> <h5>We glad that you love our product. Your ideas and suggestions will help us to make our product even better!</h5>',
      //   },
      //   {
      //     expression: '{nps_score} < 7',
      //     html: '<h3>Thank you for your feedback.</h3> <h5> We are glad that you share with us your ideas.We highly value all suggestions from our customers. We do our best to improve the product and reach your expectation.</h5><br/>',
      //   },
      // ],
      pages: [
        {
          name: 'Generic',
          elements: [
            {
              type: 'radiogroup',
              name: 'LTP',

              title:
                'Is detailed line of treatment plan has been provided with request form?',
              choices: [
                {
                  value: 'TRUE',
                  text: 'Yes',
                },
                {
                  value: 'NoMedicine',
                  text: 'No, medicine used with route of administration is missing',
                },
                {
                  value: 'NoPlanned',
                  text: 'No, planned procedure details with type of anesthesia missing',
                },
              ],
              otherText:
                'No, planned procedure details with type of anesthesia missing',
            },
            {
              type: 'radiogroup',
              name: 'Admission',

              title:
                'Is Admission warranted for the treatment planned for this inpatient hospitalisation?',
              choices: [
                {
                  value: 'TRUE',
                  text: 'Yes',
                },
                {
                  value: 'FALSE',
                  text: 'No',
                },
                {
                  value: 'INFO',
                  text: 'Need more information',
                },
              ],
              otherText: 'Need more information',
            },
            {
              type: 'radiogroup',
              name: 'INVreports',

              title:
                'Are investigation reports missing in support of the diagnosis ?',
              choices: [
                {
                  value: 'TRUE',
                  text: 'Yes',
                },
                {
                  value: 'FALSE',
                  text: 'No',
                },
              ],
            },

            {
              type: 'radiogroup',
              name: 'LOS',

              title:
                'Do you think that the length of stay is justified for this admission?',
              valueName: 'LOSStatus',
              defaultValue: 'LOSInValid', //it will be dafault select LOSInValid
              isRequired: true,
              choices: [
                {
                  value: 'Yes',
                  text: 'Yes',
                },
                {
                  value: 'LOSInValid',
                  text: 'No, require indoor case papers for validation',
                },
                {
                  value: 'LOSUnjust',
                  text: 'No, Indoor case papers are not justifying Length of stay',
                },
              ],
            },
            {
              type: 'radiogroup',
              name: 'Injury',
              title: 'Select the type of injury',
              valueName: 'Injury',
              isRequired: true,
              choices: [
                {
                  value: 'Not an injury case',
                  text: 'Not an injury case',
                },
                {
                  value: 'RTA',
                  text: 'Road Traffic Accident',
                },
                {
                  value: 'Self Inflicted',
                  text: 'Self inflicted injury or criminal offence',
                },
                {
                  value: 'Self fall',
                  text: 'Result of Self fall',
                },
                {
                  value: 'Non RTA',
                  text: 'Non Road Traffic Accident',
                },
              ],
            },
            {
              type: 'dropdown',
              name: 'AlcoholHistory',
              title: 'Select alcohol history',
              hideNumber: true,
              valueName: 'AlcoholHistory',
              isRequired: true,
              choices: [
                {
                  value: 'Yes',
                  text: 'Under the influence of Alcohol',
                },
                {
                  value: 'No',
                  text: 'Not under the influence of Alcohol / Child / Pillion passenger',
                },
                {
                  value: 'NOTAVAILABLE',
                  text: 'Alcohol history not available ',
                },
              ],
            },
            {
              type: 'checkbox',
              name: 'docverify',
              title: 'I am verifying below documents for medial adjudication',
              // defaultValue: ['DS', 'Casesummary', 'Interim'],
              choices: [
                {
                  value: 'DS',
                  text: 'Discharge/Death summary/Day care summary',
                },
                {
                  value: 'Finalbill',
                  text: 'Final bill',
                },
                {
                  value: 'Casesummary',
                  text: 'Case summary',
                },
                {
                  value: 'Interim',
                  text: 'Interim Bill',
                },
                {
                  value: 'Nodocuments',
                  text: 'No documents available',
                },
              ],
              otherText: 'Interim bill',
              selectAllText: 'No documents available',
            },
            {
              type: 'radiogroup',
              name: 'Infertility',
              title: 'Is this Infertility related hospitalisation?',
              valueName: 'Infertility',
              isRequired: true,
              choices: [
                {
                  value: 'Yes',
                  text: 'Yes',
                },
                {
                  value: 'No',
                  text: 'No',
                },
              ],
            },
            {
              type: 'radiogroup',
              name: 'question10',
              title: 'Are KYC documents available ?',
              choices: [
                {
                  value: 'TRUE',
                  text: 'Yes',
                },
                {
                  value: 'FALSE',
                  text: 'No',
                },
              ],
            },
          ],
        },
      ],
    };

    if (this.formFilledData) {
      json.pages[0].elements.map((el) => {
        if (this.formFilledData.hasOwnProperty(el.name)) {
          if (
            this.formFilledData[el.name] &&
            Array.isArray(this.formFilledData[el.name])
          ) {
            el.choices.map((choice) => {
              if (this.formFilledData[el.name].includes(choice.value)) {
                this.checkboxAnswers.push(choice.value);
              }
              el['defaultValue'] = this.checkboxAnswers;
            });
          } else {
            el.choices.map((choice) => {
              if (choice.value === this.formFilledData[el.name]) {
                el['defaultValue'] = choice.value;
              }
            });
          }
        }
      });
    }
    const survey = new Survey.Model(json);
    Survey.SurveyNG.render('surveyElement', { model: survey });
    survey.onComplete.add(function (sender) {
      console.log(JSON.stringify(sender.data, null, 3));
      localStorage.setItem('Survey_Data', JSON.stringify(sender.data, null, 3));
    });
  }
}
