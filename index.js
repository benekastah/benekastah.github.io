var answers = [
    'quite',
    'very',
    'such',
    'yes',
    'indubitably',
    'doubtless',
    'unwaveringly',
];

var randomAnswer = function() {
    return answers[Math.floor(Math.random() * answers.length)];
};

document.addEventListener('DOMContentLoaded', function () {
    var answerEl = document.querySelector('#answer');
    setInterval(function () {
        var answer = [randomAnswer(), randomAnswer()].join(' ') + '.';
        answer = answer[0].toUpperCase() + answer.slice(1);
        answerEl.innerHTML = answer;
    }, 5000);
});
