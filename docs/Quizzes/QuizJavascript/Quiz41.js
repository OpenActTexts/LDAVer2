

function init() {

var json = { 
pages: [{questions: [{
type: "html",
html: 
"<h3>Does This Make Sense?</h3>Quiz questions allow for immediate assessment of your understanding of a section. Try them out. Click on <b>'Start Quiz'</b> button when you are ready."
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 1</b>",
choicesOrder: "random",
title: `The most widely used sample moment estimate of the variance is one where the effective sample size is reduced by`,
cellType: "html",
choices: [
"One",
"Two",
"Three",
"Four",
"Five" 
],
correctAnswer: "One" 
}]}, 
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: `The first quartile is such that approximately how much of the data set in percent is above it`,
cellType: "html",
choices: [
"10 percent",
"25 percent",
"50 percent",
"75 percent",
"90 percent"
],
correctAnswer: "75 percent"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 3</b>",
choicesOrder: "random",
title: `Of method of moments, percentile matching and maximum likelihood, which method is generally the preferred estimation method?`,
cellType: "html",
choices: [
"Method of moments",
"Percentile matching",
"Maximum likelihood",
"All choices are correct",
"No choice is correct"
],
correctAnswer: "Maximum likelihood"
}]}
],
completedHtml: 
"<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
}; // ends json variable declaration

// Add questions as needed

// No need to change the following when just introducing new quiz questions
json = Object.assign(json, jsonHeader);
let jsonSum = jsonSummary3EWF(json);
// Use "5" for five questions, "4" for four questions, and so on...

document.getElementById("Quiz41Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult41');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement41").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
