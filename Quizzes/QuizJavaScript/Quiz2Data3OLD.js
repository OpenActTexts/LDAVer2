

function init() {

var json = { 
pages: [
{questions: [{type: "radiogroup",
name: "<b>Question 1</b>",
choicesOrder: "random",
title: 'Which of the following statements is correct?',
cellType: "html",
choices: [
"Exploratory data analysis uses experimental data whereas confirmatory data analysis uses observational data",
"Exploratory data analysis aims to test hypotheses whereas confirmatory data analysis aims to formulate hypotheses",
"Exploratory data analysis aims to look for patterns whereas confirmatory data analysis aims to quantify the extent to which discrepancies between the model and data could be expected to occur by chance",
"Exploratory data analysis uses traditional statistical tools of inference, significance and confidence whereas confirmatory data analysis uses descriptive statistics",
"All choices are correct"
],
correctAnswer: "Exploratory data analysis aims to look for patterns whereas confirmatory data analysis aims to quantify the extent to which discrepancies between the model and data could be expected to occur by chance"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 2</b>",
choicesOrder: "random",
title: 'Which of the following is an advantage of parametric modeling?',
cellType: "html",
choices: [
"It is less time consuming to perform than nonparametric modeling",
"It makes fewer assumptions on the data",
"It is more flexible and robust",
"It is applicable to non-quantitative data",
"Properties of the data and of the method can be derived if the distribution of the data is known"
],
correctAnswer: "Properties of the data and of the method can be derived if the distribution of the data is known"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 3</b>",
choicesOrder: "random",
title: 'Which of the following does not describe explanatory modeling:',
cellType: "html",
choices: [
"Explanatory modeling aims to explain the causal relationships between the input variables and the response variable",
"Explanatory modeling is commonly used for developing theory",
"A component explanatory modeling typically involves building a bridge between theoretical models and observable measurements",
"Explanatory modeling utilizes any method that produces predictions",
"Theory testing is a use of explanatory modeling"
],
correctAnswer: "Explanatory modeling utilizes any method that produces predictions"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 4</b>",
choicesOrder: "random",
title: 'Which of the following describes the term "big data analysis"?',
cellType: "html",
choices: [
"The process of examining data sets to draw conclusions about the information they contain",
"The process of looking for patterns and formulating hypotheses using observational data",
"The process of exploring the causal relationships between the input variables and the response variable using observational data",
"The process of predicting the responses given the input variables",
"The process of using special methods and tools that can extract information rapidly from massive data"
],
correctAnswer: "The process of using special methods and tools that can extract information rapidly from massive data"
}]},
{questions: [{type: "radiogroup",
name: "<b>Question 5</b>",
choicesOrder: "random",
title: 'Which of the following is not a part of descriptive statistics?',
cellType: "html",
choices: [
"Collection and organization of data",
"Summarization of data",
"Quantitative description of data",
"Visualization of data using tools such as boxplots or histograms",
"Prediction of future responses using existing data"
],
correctAnswer: "Prediction of future responses using existing data"
}]}
],
completedHtml: 
"<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
}; // ends json variable declaration

// Add questions as needed

// No need to change the following when just introducing new quiz questions
json = Object.assign(json, jsonHeader);
let jsonSum = jsonSummary5EWF(json);
// Use "5" for five questions, "4" for four questions, and so on...

document.getElementById("Quiz2Data3Soln").innerHTML = jsonSum.completedHtml; 
window.survey = new Survey.Model(json);
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult2Data3');
           // .innerHTML = "Result" + JSON.stringify(result.data);
    });
markdownConverterEWF();
$("#surveyElement2Data3").Survey({model: survey});
}  // ends init() function
if (!window["%hammerhead%"]) {
init(); 
}

  
