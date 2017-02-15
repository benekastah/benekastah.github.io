var answers = [
    'Happy Valentine\'s Day, Chris!!!!',
    'You are the best.',
    'I really appreciate how patient you have been with me.',
    'You have been so great with Emi recently :)  You are an awesome mom',
    'I love you!!!1',
    'I need what\'s in your pants',
    'Thanks for everything you do!!! Here\'s to another great year <3',
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
    var direction = {y: 1, x: 1};

    setInterval(function () {
        var distance = 1;
        var style = window.getComputedStyle(answerEl);
        var maxX = window.innerWidth - parseInt(style.width || 0, 10);
        var maxY = window.innerHeight - parseInt(style.height || 0, 10);
        var x, y;
        if (direction.x < 0) {
            x = Math.max(parseInt(style.left || 0, 10) - distance, 0);
            if (x === 0) {
                direction.x *= -1;
            }
        } else {
            x = Math.min(parseInt(style.left || 0, 10) + distance, maxX);
            if (x === maxX) {
                direction.x *= -1;
            }
        }
        if (direction.y < 0) {
            y = Math.max(parseInt(style.top || 0, 10) - distance, 0);
            if (y === 0) {
                direction.y *= -1;
            }
        } else {
            y = Math.min(parseInt(style.top || 0, 10) + distance, maxY);
            if (y === maxY) {
                direction.y *= -1;
            }
        }
        answerEl.style.left = x + 'px';
        answerEl.style.top = y + 'px';
    }, 25);

    var messageColorChange = function () {
        document.body.style.backgroundColor = randomColor();
        answerEl.style.color = randomColor();
        var answers = [randomAnswer(), randomAnswer()];
        if (answers[1] == answers[0]) {
            answers[1] = randomAnswer();
        }
        var answer = answers.join(' ') + '.';
        answer = answer[0].toUpperCase() + answer.slice(1);
        answerEl.innerHTML = answer;
    };
    setInterval(messageColorChange, 5000);
    messageColorChange();
});
