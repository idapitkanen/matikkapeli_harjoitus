'use strict'

let rand_num1 = 0
let rand_num2 = 0
let correctAnswersCount = 0
let incorrectAnswersCount = 0

const getRandomNumberInRange = (min,max) => {
    return Math.floor(Math.random() * max) + min;
}

const randomizeNumbers = () => {
    rand_num1 = getRandomNumberInRange(1,10)
    rand_num2 = getRandomNumberInRange(1,10)
    document.querySelector('#num1').innerHTML = rand_num1
    document.querySelector('#num2').innerHTML = rand_num2
}

addEventListener("DOMContentLoaded", () => {
    randomizeNumbers()
    document.querySelector('#correctCount').innerHTML = correctAnswersCount
    document.querySelector('#incorrectCount').innerHTML = incorrectAnswersCount
})

document.querySelector('button').addEventListener('click', ()=> {
    const answer = Number(document.querySelector('input').value)
    const correctAnswer = rand_num1 + rand_num2
    if (answer === correctAnswer) {
        alert('Correct!')
        correctAnswersCount = correctAnswersCount + 1
        document.querySelector('#correctCount').innerHTML = correctAnswersCount
    } else {
        alert('Incorrect!')
        incorrectAnswersCount = incorrectAnswersCount + 1
        document.querySelector('#incorrectCount').innerHTML = incorrectAnswersCount
    }

    randomizeNumbers()
    document.querySelector('input').value=''        
})
