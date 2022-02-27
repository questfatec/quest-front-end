import React from 'react'
import { useState, useEffect } from 'react'
import "./Home.css"

export default function Home() {

    const [questions, setQuestions] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/questions", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((resp) => resp.json())
    .then((data) => {
        setQuestions(data)
    })
    .catch((err) => console.log(err))
    }, [])



  return (
    <div className='Home'>
        <header className='Header'>
            <img src='https://logospng.org/download/react/logo-react-512.png' className='Logo'></img>
            <nav className='Menu'>
                <a className='link' href='#'>Home</a>
                <a className='link' href='#'>About</a>
                <a className='link' href='#'>Donate</a>
            </nav>
        </header>
        <section className='Section'>
            <h1 className='Pergunta'>{questions[0].question}</h1>
            <div className='alternativas'>
                <button>{questions[0].alternatives[0].answer}</button>
                <button>{questions[0].alternatives[1].answer}</button>
                <button>{questions[0].alternatives[2].answer}</button>
                <button>{questions[0].alternatives[3].answer}</button>
            </div>
        </section>
        <footer>
            <span className='span'>FATEC - SP</span>
        </footer>
    </div>
  )
}
