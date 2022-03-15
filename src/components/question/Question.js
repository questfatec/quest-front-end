import React from 'react'
import "./Question.css"
import { useState, useEffect } from 'react'

export default function Question() {


    var questionArray = []
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

        if(correctAnswer === alternative) {
            setResult("Resposta correta!")
        }else{
            setResult("Resposta errada!")
        }

        console.log(`Manda para o back-end a categoria: Mundo. Manda para o back-end o array com ids de perguntas ja respondidas ${answeredQuestions}`)
        
    }

    useEffect(() => {
        fetch(`https://questgame300.herokuapp.com/perguntas?categoria=Artes e Entretenimento&questoes_ja_respondidas=${answeredQuestions}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                questionArray.push(data[0].idPergunta.toString())

                setAnsweredQuestions(questionArray)
                console.log(questionArray)
                setCorrectAnswer(data[0].respostaCorreta)
                setStatement(data[0].pergunta)

                setAlternativeA(data[0].alternativaA);
                setAlternativeB(data[0].alternativaB);
                setAlternativeC(data[0].alternativaC);
                setAlternativeD(data[0].alternativaD);
            })
    }, [result]);

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
