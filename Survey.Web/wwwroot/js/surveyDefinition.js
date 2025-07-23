export default {
    "title": "Customer Satisfaction Survey",
    "completedHtml": "<h2>Thank you for your feedback!</h2>",
    "completedHtmlOnCondition": [
        {
            "expression": "{surveyScore} >= 5",
            "html": "<p>We're glad that you love our product.</p><button class='retake-btn'>Retake survey</button>"
        },
        {
            "expression": "{surveyScore} < 5",
            "html": "<p>We'll do our best to improve.</p><button class='retake-btn'>Retake survey</button>"
        }
    ],
    "pages": [
        {
            "name": "page1",
            "elements": [
                {
                    "type": "rating",
                    "name": "surveyScore",
                    "title": "On a scale of zero to ten, how likely are you to recommend our product to a friend or colleague?",
                    "isRequired": true,
                    "rateMin": 0,
                    "rateMax": 10,
                    "minRateDescription": "(Most unlikely)",
                    "maxRateDescription": "(Most likely)"
                },
                {
                    "type": "checkbox",
                    "name": "surveyFavoriteFeatures",
                    "visibleIf": "{surveyScore} >= 5",
                    "title": "Which features do you value the most?",
                    "isRequired": true,
                    "validators": [
                        {
                            "type": "answercount",
                            "text": "Please select two features maximum."
                        }
                    ],
                    "choices": [
                        "Performance", "Stability", "User Interface", "Complete Functionality"
                    ],
                    "hasOther": true,
                    "otherText": "Other feature:",
                    "colCount": 2
                },
                {
                    "type": "comment",
                    "name": "surveyComments",
                    "visibleIf": "{surveyScore} >= 5",
                    "title": "What do you like about our product?"
                },
                {
                    "type": "comment",
                    "name": "surveyImprovements",
                    "visibleIf": "{surveyScore} < 5",
                    "title": "What do you miss or find disappointing in your experience with our products?"
                }
            ]
        }
    ]
};