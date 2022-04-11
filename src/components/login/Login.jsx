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
				headers: { 'Content-Type': 'application/json' },
				body: {
					"email": username,
					"password": password_1
				  }
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
				<form  onSubmit={submit}  class="login-form">
					<span class="login-form-title">
						Faça o login
					</span>

					<div class="wrap-input margin-top-35 margin-bottom-35">
						<input class="input-form" type="email" name="email" onChange={(e) => setUsername(e.target.value)} placeholder="Email" autocomplete="off"/>
					</div>

					<div class="wrap-input margin-bottom-35">
						<input class="input-form" type="password" onChange={(e) => setPassword_1(e.target.value)} placeholder="Senha" name="password"/>
					</div>

					<div class="container-login-form-btn">
						<button onClick={(e) => setAlert()} type="submit" class="login-form-btn">
							Login
						</button>
					</div>

						<p>{alert}</p>
					<ul class="login-utils">
						<li class="margin-bottom-8 margin-top-8">
							<span class="text1">
								Esqueceu sua&nbsp;
							</span>

							<a href="#" class="text2">
								senha?
							</a>
						</li>

						<li>
							<span class="text1">
								Não tem conta?&nbsp;
							</span>

							<a href="/cadastro" class="text2">
								Criar
							</a>
						</li>
					</ul>
				</form>
			</div>
			<img src={lock} width="350" height="300" class="margin-left-50" />
		</div>
	</div>
    </div>
  );
}
