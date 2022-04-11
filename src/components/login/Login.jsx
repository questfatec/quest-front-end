import "./Login.css"
import lock from "./lock.png"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {


	const navigate = useNavigate()
    
    const [username, setUsername] = useState()
    const [password_1, setPassword_1] = useState()
    const [alert, setAlert] = useState()

	async function submit(e) {
		e.preventDefault()
		if ( !username || !password_1 ) {
            setAlert('Preencha todos os campos!')
        }
		else{
			fetch('https://quest3v2.herokuapp.com/auth/register', {
				method: 'POST',
				mode: 'no-cors',
				headers: { 'Content-Type': 'application/json',
				 },
				body: {
					"email": username,
					"password": password_1
				  }
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
				<form  onSubmit={submit}  className="login-form">
					<span className="login-form-title">
						Faça o login
					</span>

					<div className="wrap-input margin-top-35 margin-bottom-35">
						<input className="input-form" type="email" name="email" onChange={(e) => setUsername(e.target.value)} placeholder="Email" autoComplete="off"/>
					</div>

					<div className="wrap-input margin-bottom-35">
						<input className="input-form" type="password" onChange={(e) => setPassword_1(e.target.value)} placeholder="Senha" name="password"/>
					</div>

					<div className="container-login-form-btn">
						<button onClick={(e) => setAlert()} type="submit" className="login-form-btn">
							Login
						</button>
					</div>

						<p>{alert}</p>
					<ul className="login-utils">
						<li className="margin-bottom-8 margin-top-8">
							<span className="text1">
								Esqueceu sua&nbsp;
							</span>

							<a href="#" className="text2">
								senha?
							</a>
						</li>

						<li>
							<span className="text1">
								Não tem conta?&nbsp;
							</span>

							<a href="/cadastro" className="text2">
								Criar
							</a>
						</li>
					</ul>
				</form>
			</div>
			<img src={lock} width="350" height="300" className="margin-left-50" />
		</div>
	</div>
    </div>
  );
}
