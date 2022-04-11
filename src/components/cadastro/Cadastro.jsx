import "./Cadastro.css"
import lock from "./lock.png"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Cadastro() {

	const navigate = useNavigate()
    
    const [email, setEmail] = useState()
    const [username, setUsername] = useState()
    const [password_1, setPassword_1] = useState()
    const [password_2, setPassword_2] = useState()
    const [alert, setAlert] = useState()

	async function submit(e) {
		e.preventDefault()
		if (!email || !username || !password_1 || !password_2) {
            setAlert('Preencha todos os campos!')
        }

        if (password_1 !== password_2) {
            setAlert('Senhas não coincidem!')
        }
		else{
			fetch('https://quest3v2.herokuapp.com/auth/register', {
				method: 'POST',
				mode: 'no-cors',
				headers: { 'Content-Type': 'application/json' },
				body: {  "name": username,
				"email": email,
				"password": password_1}
			})
			.then((res) => res.json())
			.then((data) => console.log(data))
		}
	}

  return (
    <div className="Login">
      <div className="container">
		<div className="container-login">
			<div className="wrap-login">
				<form onSubmit={submit} className="login-form">
					<span className="login-form-title">
						Faça o Cadastro
					</span>

					<div className="wrap-input margin-top-35 margin-bottom-35">
						<input className="input-form" type="text" onChange={(e) => setUsername(e.target.value)}  name="email" placeholder="Usuário" autoComplete="off"/>
					</div>

                    <div className="wrap-input margin-top-35 margin-bottom-35">
						<input className="input-form" type="email" onChange={(e) => setEmail(e.target.value)} name="email" placeholder="email" autoComplete="off"/>
					</div>

					<div className="wrap-input margin-bottom-35">
						<input className="input-form" type="password" onChange={(e) => setPassword_1(e.target.value)} placeholder="Senha" name="password"/>
					</div>

                    <div className="wrap-input margin-bottom-35">
						<input className="input-form" type="password" onChange={(e) => setPassword_2(e.target.value)} placeholder="Confirmar senha" name="password"/>
					</div>

					<div className="container-login-form-btn">
						<button onClick={(e) => setAlert()} type="submit" className="login-form-btn">
							Login
						</button>
					</div>
					<p>{alert}</p>
				</form>
			</div>
			<img src={lock} width="350" height="300" className="margin-left-50" />
		</div>
	</div>
    </div>
  );
}
