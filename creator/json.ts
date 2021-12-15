export const json = {
  completedHtml: '<h3>Thank you for your feedback.</h3> <button>Edit</button>',
  completedHtmlOnCondition: [
    {
      expression: '{nps_score} > 8',
      html: '<h3>Thank you for your feedback.</h3> <h5>We glad that you love our product. Your ideas and suggestions will help us to make our product even better!</h5>',
    },
    {
      expression: '{nps_score} < 7',
      html: '<h3>Thank you for your feedback.</h3> <h5> We are glad that you share with us your ideas.We highly value all suggestions from our customers. We do our best to improve the product and reach your expectation.</h5><br/>',
    },
  ],
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
          type: 'checkbox',
          name: 'InvestigationDataSe',

          title: 'Select the reports which are missing?',
          choices: [
            {
              value: 'BLOODTEST',
              text: 'Blood Test reports',
            },
            {
              value: 'USG',
              text: 'USG Scan reports',
            },
            {
              value: 'CT',
              text: 'CT/MRI/PET/Scan reports',
            },
            {
              value: 'BIOPSY',
              text: 'Biopsy reports',
            },
            {
              value: 'XRAY',
              text: 'X ray reports',
            },
            {
              value: 'RTPCR',
              text: 'RTPCR',
            },
          ],
          otherText: 'CAG reports',
        },
        {
          type: 'radiogroup',
          name: 'question9',

          title:
            'Claim form with signature and GIPSA forms are attached as required ?',
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
          name: 'Admission Length',

          title: 'If this admission is less than 24 hrs, select a reason',
          valueName: 'DayCare',
          isRequired: true,
          choices: [
            {
              value: 'Morethan24',
              text: 'Not less than 24 hours',
            },
            {
              value: 'DayCare',
              text: 'Day Care',
            },
            {
              value: 'Transfer',
              text: 'Transfer',
            },
            {
              value: 'LessThan24',
              text: 'Admission is less than 24 hrs',
            },
          ],
          otherText: 'Not less than 24 hours',
        },
        {
          type: 'radiogroup',
          name: 'Emergency',
          title: 'Is this an emergency case?',
          valueName: 'Emergency',
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
          name: 'Justified',
          title: 'Do you think the admission is justified ?',
          valueName: 'AdmissionJustified',
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
          name: 'BilledAmount',
          title:
            'Do you find the total billed amount is reasonable and acceptable?',
          valueName: 'BilledAmount',
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
          name: 'Convinced',

          title:
            'If you are not convinced with the clinical findings you may refer to a senior doctor. Do you want to send this for a second opinion?',
          valueName: 'Convinced',
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
          name: 'DeathCase',
          title: 'Is this a death case?',
          valueName: 'DeathCase',
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
          type: 'text',
          name: 'DeathCause',
          startWithNewLine: false,
          title: 'Provide the cause of death',
          hideNumber: true,
          valueName: 'DeathCause',
          isRequired: true,
        },
        {
          type: 'radiogroup',
          name: 'BabyCareRelated',
          title: 'Are baby care and mother expenses are claimed together?',
          valueName: 'BabyCareRelated',
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
