import * as Survey from "survey-knockout";
import "survey-knockout/modern.css";
import surveyDefinition from "./surveyDefinition.js";

Survey.StylesManager.applyTheme("modern");

const survey = new Survey.Model(surveyDefinition);

survey.render("survey-container");

// Use onComplete to get survey.data to pass it to the server.
survey.onComplete.add(function (sender) {
    const url = document.getElementById("survey-container").getAttribute("data-url");
    const surveyResult = JSON.stringify(sender.data);
    const $statusContainer = document.getElementById("survey-http-status");
    const $resultsContainer = document.getElementById("survey-results");
    $resultsContainer.textContent = surveyResult;
    
    const options = {
        method: "POST",
        body: surveyResult,
        headers: {
            "Content-Type": "application/json"
        }
    };
    
    fetch(url, options)
        .then(data => {
            $statusContainer.textContent = data.status.toString();

            if (data.ok) {
                $statusContainer.textContent = `Success: ${data.status}`;
            } else {
                $statusContainer.textContent = `Error: ${data.status}`;
            }
        })
        .catch((error) => {
            $statusContainer.textContent = `Error: ${error}`;
        });

    document.getElementsByClassName("retake-btn")[0].addEventListener("click", function() {
        survey.clear();
        survey.render();
        $resultsContainer.textContent = "";
        $statusContainer.textContent = "";
    });
});