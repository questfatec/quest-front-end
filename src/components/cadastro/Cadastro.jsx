import "./Cadastro.css"
import lock from "./lock.png"

export default function Cadastro() {

  return (
    <div className="Login">
      <div class="container">
		<div class="container-login">
			<div class="wrap-login">
				<form class="login-form">
					<span class="login-form-title">
						Faça o Cadastro
					</span>

					<div class="wrap-input margin-top-35 margin-bottom-35">
						<input class="input-form" type="text" name="email" placeholder="Usuário" autocomplete="off"/>
					</div>

                    <div class="wrap-input margin-top-35 margin-bottom-35">
						<input class="input-form" type="email" name="email" placeholder="email" autocomplete="off"/>
					</div>

					<div class="wrap-input margin-bottom-35">
						<input class="input-form" type="password" placeholder="Senha" name="password"/>
					</div>

                    <div class="wrap-input margin-bottom-35">
						<input class="input-form" type="password" placeholder="Confirmar senha" name="password"/>
					</div>

					<div class="container-login-form-btn">
						<button class="login-form-btn">
							Login
						</button>
					</div>

				</form>
			</div>
			<img src={lock} width="350" height="300" class="margin-left-50" />
		</div>
	</div>
    </div>
  );
}
