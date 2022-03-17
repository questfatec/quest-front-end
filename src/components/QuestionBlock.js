import React from 'react'
import "./QuestionBlock.css"
import { useState, useEffect } from 'react'

export default function QuestionBlock() {

    const [james, setJames] = useState(0)

    //Armazena o valor da resposta da api na variavel
    const [questoes_ja_respondidas, setQuestoes_ja_respondidas] = useState([])
    const [result, setResult] = useState()

    const [pergunta, setPergunta] = useState()
    const [respostaCorreta, setRespostaCorreta] = useState()

    const [alternativaA, setAlternativaA] = useState()
    const [alternativaB, setAlternativaB] = useState()
    const [alternativaC, setAlternativaC] = useState()
    const [alternativaD, setAlternativaD] = useState()


    //GET in the question API --- Params = questões ja respondidas + tema
    useEffect(() => {
        fetch("https://questgame300.herokuapp.com/perguntas?questoes_ja_respondidas=[1,4,3,2]&categoria=Artes e Entretenimento")
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            setPergunta(data[james].pergunta)
            setAlternativaA(data[james].alternativaA)
            setAlternativaB(data[james].alternativaB)
            setAlternativaC(data[james].alternativaC)
            setAlternativaD(data[james].alternativaD)

            setRespostaCorreta(data[james].respostaCorreta)
        })
    },[james])

    function IsCorrect(resposta, respostaCorreta){
        if (resposta === respostaCorreta){
            setResult("Resposta Correta!")
        }else{
            setResult("Resposta Errada")
        }
        
        setJames(james + 1)
        
    }


  return (
    <div onMouseOver={() => setResult("")} className='QuestionBlock'>
        <h1 className='Question'>{pergunta}</h1>
        <section className='Alternatives-section'>
            <button onClick={() => IsCorrect(alternativaA, respostaCorreta)} className='Alternative-button'>{alternativaA}</button>
            <button onClick={() => IsCorrect(alternativaB, respostaCorreta)} className='Alternative-button'>{alternativaB}</button>
            <button onClick={() => IsCorrect(alternativaC, respostaCorreta)} className='Alternative-button'>{alternativaC}</button>
            <button onClick={() => IsCorrect(alternativaD, respostaCorreta)} className='Alternative-button'>{alternativaD}</button>
        </section>
        <p className='result'>{result}</p>
    </div>
  )
}