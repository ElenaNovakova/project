// import {getRandom} from "/help-functions/help-functions.js";

function QuestionsBase() {
    this.questions = [
        {
            numberOfTheQuestion: 1,
            question: "Колку е 2*2?",
            answerA: 4,
            answerB: 5,
            answerC: 2,
            answerD: 1,
            rightAnswer: "answerA",
            points: 5,
            time: 10,
        },
        {
            numberOfTheQuestion: 2,
            question: "Колку е (-5) + 3?",
            answerA: 2,
            answerB: -2,
            answerC: 8,
            answerD: -8,
            rightAnswer: "answerB",
            points: 5,
            time: 10,
        },
        {
            numberOfTheQuestion: 3,
            question: "Збирот на аглите во рамнокрак трапез изнесува:",
            answerA: 360,
            answerB: 180,
            answerC: 90,
            answerD: 120,
            rightAnswer: "answerA",
            points: 5,
            time: 10,
        },
        {
            numberOfTheQuestion: 4,
            question: "Збирот на аглите во триаголник изнесува:",
            answerA: 360,
            answerB: 180,
            answerC: 90,
            answerD: 120,
            rightAnswer: "answerB",
            points: 5,
            time: 10,
        },
        {
            numberOfTheQuestion: 5,
            question: "Која од следните 2Д фигури има ред на ротациска симетрија еднаков на 3: ",
            answerA: "правоаголник",
            answerB: "квадрат",
            answerC: "трапез",
            answerD: "рамностран триаголник",
            rightAnswer: "answerD",
            points: 10,
            time: 20,
        },
        {
            numberOfTheQuestion: 6,
            question: "Кој од следниве агли е тап агол:",
            answerA: 100,
            answerB: 180,
            answerC: 90,
            answerD: 360,
            rightAnswer: "answerA",
            points: 5,
            time: 10,
        },
        {
            numberOfTheQuestion: 7,
            question: "Непознатиот агол во триаголникот ABC, ако α=38° и β=52° изнесува: ",
            answerA: 38,
            answerB: 52,
            answerC: 90,
            answerD: 100,
            rightAnswer: "answerC",
            points: 20,
            time: 60,
        },
        {
            numberOfTheQuestion: 8,
            question: "Најмалиот заеднички содржател на 7 и 5 е бројот: ",
            answerA: 7,
            answerB: 5,
            answerC: 35,
            answerD: 1,
            rightAnswer: "answerC",
            points: 10,
            time: 20,
        },
        {
            numberOfTheQuestion: 9,
            question: "Кој од понудените броеви е прост ",
            answerA: 33,
            answerB: 27,
            answerC: 31,
            answerD: 25,
            rightAnswer: "answerC",
            points: 10,
            time: 20
        },
        {
            numberOfTheQuestion: 10,
            question: "Колку е 12^2?",
            answerA: 24,
            answerB: 144,
            answerC: 14,
            answerD: 121,
            rightAnswer: "answerB",
            points: 10,
            time: 20,
        },
        {
            numberOfTheQuestion: 11,
            question: "Колку е 12^2?",
            answerA: 24,
            answerB: 144,
            answerC: 14,
            answerD: 121,
            rightAnswer: "answerB",
            points: 10,
            time: 20,
        },
        {
            numberOfTheQuestion: 12,
            question: "Кој е 5-тиот содржател на бројот 8?",
            answerA: 10,
            answerB: 40,
            answerC: 30,
            answerD: 48,
            rightAnswer: "answerB",
            points: 10,
            time: 20,
        },
        {
            numberOfTheQuestion: 13,
            question: "Бројот 10,8219 заокружен на едно децимално место е:",
            answerA: 10.82,
            answerB: 10.89,
            answerC: 10.8,
            answerD: 10.9,
            rightAnswer: "answerC",
            points: 5,
            time: 10,
        },
        {
            numberOfTheQuestion: 14,
            question: "Збирот на броевите 6,7 и 1,2 е:",
            answerA: 7.9,
            answerB: 5.9,
            answerC: 3.82,
            answerD: 1.57,
            rightAnswer: "answerА",
            points: 5,
            time: 10,
        },
        {
            numberOfTheQuestion: 15,
            question: "Производот на броевите 0,4  и 0,5 изнесува:",
            answerA: 2,
            answerB: 0.2,
            answerC: 0.02,
            answerD: 20,
            rightAnswer: "answerB",
            points: 10,
            time: 20,
        },
        {
            numberOfTheQuestion: 16,
            question: "Кој од следните броеви е делител на бројот 30?",
            answerA: 7,
            answerB: 6,
            answerC: 12,
            answerD: 4,
            rightAnswer: "answerB",
            points: 5,
            time: 10,
        },
        {
            numberOfTheQuestion: 17,
            question: "Колку е √64",
            answerA: 7,
            answerB: 32,
            answerC: 12,
            answerD: 8,
            rightAnswer: "answerD",
            points: 10,
            time: 20,
        },
        {
            numberOfTheQuestion: 18,
            question: "Колку е √49",
            answerA: 7,
            answerB: 32,
            answerC: 12,
            answerD: 8,
            rightAnswer: "answerА",
            points: 10,
            time: 20,
        },
        {
            numberOfTheQuestion: 19,
            question: "Колку е √256",
            answerA: 7,
            answerB: 32,
            answerC: 128,
            answerD: 16,
            rightAnswer: "answerD",
            points: 20,
            time: 60,
        },
        {
            numberOfTheQuestion: 20,
            question: "Колку е √196",
            answerA: 98,
            answerB: 14,
            answerC: 13,
            answerD: 8,
            rightAnswer: "answerB",
            points: 20,
            time: 60,
        },
        {
            numberOfTheQuestion: 21,
            question: "Колку е √625",
            answerA: 15,
            answerB: 5,
            answerC: 25,
            answerD: 35,
            rightAnswer: "answerC",
            points: 20,
            time: 60,
        },
        {
            numberOfTheQuestion: 22,
            question: "Колку е √900",
            answerA: 9,
            answerB: 90,
            answerC: 3,
            answerD: 30,
            rightAnswer: "answerD",
            points: 10,
            time: 20,
        },
        {
            numberOfTheQuestion: 23,
            question: "Колку е НЗД(48,60)",
            answerA: 8,
            answerB: 6,
            answerC: 12,
            answerD: 24,
            rightAnswer: "answerC",
            points: 20,
            time: 60,
        },
        {
            numberOfTheQuestion: 24,
            question: "36% запишан како децимален број е: ",
            answerA: 0.036,
            answerB: 3.6,
            answerC: 36,
            answerD: 0.36,
            rightAnswer: "answerD",
            points: 20,
            time: 60,
        },
        {
            numberOfTheQuestion: 25,
            question: "3/4 запишан како процент е: ",
            answerA: "0.34%",
            answerB: "75%",
            answerC: "25%",
            answerD: "3.4%",
            rightAnswer: "answerB",
            points: 20,
            time: 60,
        },
        {
            numberOfTheQuestion: 26,
            question: "1/5 запишан како процент е: ",
            answerA: "0.15%",
            answerB: "15%",
            answerC: "20%",
            answerD: "2,0%",
            rightAnswer: "answerC",
            points: 20,
            time: 60,
        },
        {
            numberOfTheQuestion: 27,
            question: "85 запишан како процент е: ",
            answerA: "0,85%",
            answerB: "8,5%",
            answerC: "85%",
            answerD: "850%",
            rightAnswer: "answerC",
            points: 20,
            time: 60,
        },
        {
            numberOfTheQuestion: 28,
            question: "Колку е 35-(-15)",
            answerA: 50,
            answerB: -50,
            answerC: 20,
            answerD: -20,
            rightAnswer: "answerA",
            points: 20,
            time: 60,
        },
        {
            numberOfTheQuestion: 29,
            question: "Колку е НЗД(24,36)",
            answerA: 8,
            answerB: 6,
            answerC: 12,
            answerD: 24,
            rightAnswer: "answerC",
            points: 20,
            time: 60,
        },
        {
            numberOfTheQuestion: 30,
            question: "Колку е НЗД(12, 15)",
            answerA: 3,
            answerB: 5,
            answerC: 6,
            answerD: 1,
            rightAnswer: "answerA",
            points: 10,
            time: 20,
        },
        {
            numberOfTheQuestion: 31,
            question: "Колку е НЗС(48,60)",
            answerA: 80,
            answerB: 60,
            answerC: 120,
            answerD: 240,
            rightAnswer: "answerD",
            points: 20,
            time: 60,
        },
        {
            numberOfTheQuestion: 32,
            question: "Кубот на бројот 10 е:",
            answerA: 100,
            answerB: 1000,
            answerC: 30,
            answerD: 300,
            rightAnswer: "answerB",
            points: 10,
            time: 20,
        },
        {
            numberOfTheQuestion: 33,
            question: "Кубот на бројот 100 е: ",
            answerA: 100,
            answerB: 10000,
            answerC: 300,
            answerD: 30000,
            rightAnswer: "answerB",
            points: 10,
            time: 20,
        },
        {
            numberOfTheQuestion: 34,
            question: "Колку е кубот на бројот 2?",
            answerA: 2,
            answerB: 8,
            answerC: 4,
            answerD: 6,
            rightAnswer: "answerB",
            points: 5,
            time: 10,
        },
    ];

    this.randomNumberOfQuestion = getRandom(0, this.questions.length - 1);
    this.chooseQuestion =  () => {
        this.questions.splice(this.randomNumberOfQuestion, 1);
    }

    this.chooseQuestion()

    this.giveQuestion = function (){

        return this.questions[this.randomNumberOfQuestion];
    }

    

}



