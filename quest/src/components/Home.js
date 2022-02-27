import React from 'react'
import "./Home.css"

export default function Home() {
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
            <h1 className='Pergunta'>Pergunta</h1>
            <div className='alternativas'>
                <button>Alternativa A</button>
                <button>Alternativa B</button>
                <button>Alternativa C</button>
                <button>Alternativa D</button>
            </div>
        </section>
        <footer>
            <span className='span'>FATEC - SP</span>
        </footer>
    </div>
  )
}
