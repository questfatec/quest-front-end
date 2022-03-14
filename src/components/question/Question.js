import React from 'react'
import "./Question.css"
import { useState, useEffect } from 'react'

export default function Question() {

    const questionArray = []
    const [answeredQuestions, setAnsweredQuestions] = useState([])
    const [result, setResult] = useState()

    const [statement, setStatement] = useState()
    const [correctAnswer, setCorrectAnswer] = useState()

    const [alternativeA, setAlternativeA] = useState()
    const [alternativeB, setAlternativeB] = useState()
    const [alternativeC, setAlternativeC] = useState()
    const [alternativeD, setAlternativeD] = useState()

    function isCorrect(correctAnswer, alternative) {
        console.log(alternative)
        console.log(correctAnswer)

        if(correctAnswer == alternative) {
            setResult("Resposta correta!")
        }else{
            setResult("Resposta errada!")
        }

        console.log(`Manda para o back-end a categoria: Mundo. Manda para o back-end o array com ids de perguntas ja respondidas ${answeredQuestions}`)
        
    }

    useEffect(() => {
        fetch("http://localhost:3002")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                questionArray.push(data[0]._id)
                questionArray.push(data[0]._id)

                setAnsweredQuestions(questionArray)
                setCorrectAnswer(data[0].respostaCorreta)
                setStatement(data[0].question)

                setAlternativeA(data[0].alternativaA);
                setAlternativeB(data[0].alternativaB);
                setAlternativeC(data[0].alternativaC);
                setAlternativeD(data[0].alternativaD);
            })
    }, []);

    return (
        <div className='question-container'>
            <h1 className='question'>{statement}</h1>
            <div className='buttons-container'>
                <button onClick={(e) => isCorrect(correctAnswer, alternativeA)}>{alternativeA}</button>
                <button onClick={(e) => isCorrect(correctAnswer, alternativeB)}>{alternativeB}</button>
                <button onClick={(e) => isCorrect(correctAnswer, alternativeC)}>{alternativeC}</button>
                <button onClick={(e) => isCorrect(correctAnswer, alternativeD)}>{alternativeD}</button>
            </div>
            <p>{result}</p>
        </div>
    )
}
