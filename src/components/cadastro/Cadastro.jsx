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
				headers: { 'Content-Type': 'application/json' },
				body: {  "name": username,
				"email": email,
				"password": password_1}
			})
			.then((res) => res.json())
			.then((res) => navigate("/login"))
			.then((data) => console.log(data))
		}
	}

  return (
    <div className="Login">
      <div class="container">
		<div class="container-login">
			<div class="wrap-login">
				<form onSubmit={submit} class="login-form">
					<span class="login-form-title">
						Faça o Cadastro
					</span>

					<div class="wrap-input margin-top-35 margin-bottom-35">
						<input class="input-form" type="text" onChange={(e) => setUsername(e.target.value)}  name="email" placeholder="Usuário" autocomplete="off"/>
					</div>

                    <div class="wrap-input margin-top-35 margin-bottom-35">
						<input class="input-form" type="email" onChange={(e) => setEmail(e.target.value)} name="email" placeholder="email" autocomplete="off"/>
					</div>

					<div class="wrap-input margin-bottom-35">
						<input class="input-form" type="password" onChange={(e) => setPassword_1(e.target.value)} placeholder="Senha" name="password"/>
					</div>

                    <div class="wrap-input margin-bottom-35">
						<input class="input-form" type="password" onChange={(e) => setPassword_2(e.target.value)} placeholder="Confirmar senha" name="password"/>
					</div>

					<div class="container-login-form-btn">
						<button onClick={(e) => setAlert()} type="submit" class="login-form-btn">
							Login
						</button>
					</div>
					<p>{alert}</p>
				</form>
			</div>
			<img src={lock} width="350" height="300" class="margin-left-50" />
		</div>
	</div>
    </div>
  );
}
