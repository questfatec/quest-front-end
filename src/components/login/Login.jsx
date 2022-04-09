import "./Login.css"
import lock from "./lock.png"

export default function Login() {

  return (
    <div className="Login">
      <div class="container">
		<div class="container-login">
			<div class="wrap-login">
				<form class="login-form">
					<span class="login-form-title">
						Faça o login
					</span>

					<div class="wrap-input margin-top-35 margin-bottom-35">
						<input class="input-form" type="text" name="email" placeholder="Usuário" autocomplete="off"/>
					</div>

					<div class="wrap-input margin-bottom-35">
						<input class="input-form" type="password" placeholder="Senha" name="password"/>
					</div>

					<div class="container-login-form-btn">
						<button class="login-form-btn">
							Login
						</button>
					</div>

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
