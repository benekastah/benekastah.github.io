var answers = [
    'quite',
    'very',
    'such',
    'yes',
    'indubitably',
    'doubtless',
    'unwaveringly',
];

var hexChars = [];
for (var i = 0; i < 16; i++) {
    hexChars.push(i.toString(16));
}

var randomChoice = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};

var randomAnswer = function () {
    return randomChoice(answers);
};

var randomColor = function () {
    var color = ['#']
    for (var i = 0; i < 6; i++) {
        color.push(randomChoice(hexChars));
    }
    return color.join('');
};

document.addEventListener('DOMContentLoaded', function () {
    var answerEl = document.querySelector('#answer');
    setInterval(function () {
        document.body.style.backgroundColor = randomColor();
        answerEl.style.color = randomColor();
        var answers = [randomAnswer(), randomAnswer()];
        if (answers[1] == answers[0]) {
            answers[1] = randomAnswer();
        }
        var answer = answers.join(' ') + '.';
        answer = answer[0].toUpperCase() + answer.slice(1);
        answerEl.innerHTML = answer;
    }, 5000);
});
