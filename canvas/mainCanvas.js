// import {getRandom} from "/help-functions/help-functions.js";

var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext('2d');




// for (let i = 0; i < 20; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     var z = Math.random() * 100;

//     context.fillStyle = "#F9A520";
//     context.moveTo(x, y);
//     context.lineTo(x + z, y + 100);
//     context.lineTo(x + 100, y + z);
//     context.fill();
// }


// for (let i = 0; i < 20; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;

//     context.fillStyle = "#5662A0"
//     context.rect(x, y, 70, 45);
//     context.fill();
// }





var colorArray = [
    "#C6DEE8",
    "#2E86AB",
    "#F6F5AE",
    "#F5F749",
    "#F24236",
    "#F5F759",
    "#F4645A",
    "#F79791",
    "#67A7C1"

]

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.drow = function () {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.fillStyle = this.color;
        context.fill();
    }

    this.moveCircle = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = - this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = - this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.drow();
    }
}

var circleArray = [];

for (let i = 0; i < 30; i++) {
    var radius = getRandom(20, 40);
    var x = Math.random() * (window.innerWidth - radius * 2) + radius;
    var y = Math.random() * (window.innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 2;
    var dy = (Math.random() - 0.5) * 2;
    circleArray.push(new Circle(x, y, dx, dy, radius));
}




// broevi

function Numbers(x, y, z, dx, dy, numberSize) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.dx = dx;
    this.dy = dy;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.numberSize = numberSize;

    this.drow = function () {
        context.font = this.numberSize + "px Helvetica";
        context.fillText(this.z, this.x, this.y);
        context.fillStyle = this.color;
        context.fill();
    }

    this.moveNumber = function () {
        if (this.x + this.numberSize / 2 > innerWidth || this.x - this.numberSize / 2 < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.numberSize / 2 > innerHeight || this.y - this.numberSize / 2 < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;
        this.drow();
    }
}

var numbersArray = [];

for (let i = 0; i < 30; i++) {
    var z = Math.floor(Math.random() * 10);
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var numberSize = getRandom(20, 80);
    var dx = (Math.random() - 0.5) * 2;
    var dy = (Math.random() - 0.5) * 2;
    numbersArray.push(new Numbers(x, y, z, dx, dy, numberSize));
}


//kvadrati

function Squares(x, y, a, dx, dy) {
    this.x = x;
    this.y = y;
    this.a = a;
    this.dx = dx;
    this.dy = dy;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.drow = function () {
        context.fillRect(this.x, this.y, this.a, this.a);
        context.fillStyle = this.color;
        context.fill();
    }

    this.moveSquare = function () {
        if (this.x - this.a / 2 > innerWidth || this.x + this.a / 2 < 0) {
            this.dx = - this.dx;
        }
        if (this.y - this.a / 2 > innerHeight || this.y + this.a / 2 < 0) {
            this.dy = - this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.drow();
    }
}

var squaresArray = [];

for (let i = 0; i < 30; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var a = getRandom(20, 80);
    var dx = (Math.random() - 0.5) * 2;
    var dy = (Math.random() - 0.5) * 2;
    squaresArray.push(new Squares(x, y, a, dx, dy));
}


//init

function init(){
    var numbersArray = [];
    var squaresArray = [];
    var circleArray = [];
    for (let i = 0; i < 30; i++) {
        var x = Math.random() * window.innerWidth;
        var y = Math.random() * window.innerHeight;
        var a = getRandom(20, 60);
        var dx = (Math.random() - 0.5) * 2;
        var dy = (Math.random() - 0.5) * 2;
        squaresArray.push(new Squares(x, y, a, dx, dy));
    }

    for (let i = 0; i < 30; i++) {
        var z = Math.floor(Math.random() * 10);
        var x = Math.random() * window.innerWidth;
        var y = Math.random() * window.innerHeight;
        var numberSize = getRandom(20, 60);
        var dx = (Math.random() - 0.5) * 2;
        var dy = (Math.random() - 0.5) * 2;
        numbersArray.push(new Numbers(x, y, z, dx, dy, numberSize));
    }

    for (let i = 0; i < 30; i++) {
        var radius = getRandom(10, 30);
        var x = Math.random() * (window.innerWidth - radius * 2) + radius;
        var y = Math.random() * (window.innerHeight - radius * 2) + radius;
        var dx = (Math.random() - 0.5) * 2;
        var dy = (Math.random() - 0.5) * 2;
        circleArray.push(new Circle(x, y, dx, dy, radius));
    }
    
}
init();
//animacija

function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].moveCircle();
    }

    for (let i = 0; i < numbersArray.length; i++) {
        numbersArray[i].moveNumber();
    }

    for (let i = 0; i < squaresArray.length; i++) {
        squaresArray[i].moveSquare();
    }
}

animate();